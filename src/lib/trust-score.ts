import { parseStars } from "./parse-stars";

import type { SkillRecord } from "./catalog";

/**
 * Compute a composite trust score (0-100) for a skill.
 * Computed at display-time from catalog data — never stored.
 *
 * Weights:
 *   Freshness  25% — how recently the repo was pushed
 *   Community  25% — star growth velocity
 *   Adoption   25% — weekly downloads (log scale)
 *   Evidence   15% — strong evidence ratio
 *   Momentum   10% — recent growth trend
 */
export function computeTrustScore(skill: SkillRecord): number {
  const freshness = freshnessScore(skill);
  const community = communityScore(skill);
  const adoption = adoptionScore(skill);
  const evidence = evidenceScore(skill);
  const momentum = momentumScore(skill);

  let score = Math.round(
    freshness * 0.25 + community * 0.25 + adoption * 0.25 + evidence * 0.15 + momentum * 0.10,
  );

  // Hard caps
  if (skill.repoHealth?.archived) score = Math.min(score, 10);
  if (skill.repoHealth && skill.repoHealth.lastPushDays > 365)
    score = Math.min(score, 30);

  return Math.max(0, Math.min(100, score));
}

function freshnessScore(skill: SkillRecord): number {
  const days = skill.repoHealth?.lastPushDays;
  if (days == null) return 50; // no data → neutral
  if (days < 7) return 100;
  if (days < 30) return 85;
  if (days < 90) return 60;
  if (days < 180) return 30;
  return 0;
}

function communityScore(skill: SkillRecord): number {
  const stars = skill.metrics?.stars;
  if (!stars || stars.length < 2) {
    // Fallback: log-scale based on absolute star count
    const abs = parseStars(skill.githubStars);
    if (abs <= 0) return 20;
    // Continuous log scale: 100 stars→40, 1K→60, 10K→80, 50K+→100
    return Math.min(100, Math.round(20 + 20 * Math.log10(abs)));
  }
  // Growth rate: latest vs previous
  const latest = stars[stars.length - 1].value;
  const prev = stars[stars.length - 2].value;
  if (prev === 0) return 50;
  const growthPct = ((latest - prev) / prev) * 100;
  // Continuous: clamp to 20-100 range
  // 0% growth = 45, 5% = 65, 10% = 80, 20%+ = 100, negative = 20-40
  if (growthPct >= 20) return 100;
  if (growthPct >= 0) return Math.round(45 + growthPct * 2.75);
  // Declining: floor at 20
  return Math.max(20, Math.round(45 + growthPct * 2));
}

function adoptionScore(skill: SkillRecord): number {
  const dl = skill.metrics?.downloads;
  if (!dl || dl.length === 0) {
    // No package data: use stars as proxy for GitHub-only tools
    const abs = parseStars(skill.githubStars);
    if (abs >= 10000) return 70;
    if (abs >= 1000) return 55;
    if (abs >= 100) return 40;
    return 30;
  }
  const latest = dl[dl.length - 1].value;
  if (latest <= 0) return 20;
  // Continuous log scale: 100→40, 1K→60, 10K→80, 100K+→100
  return Math.min(100, Math.round(20 + 20 * Math.log10(latest)));
}

function evidenceScore(skill: SkillRecord): number {
  if (skill.evidence.length === 0) return 40; // no evidence → neutral (not punitive)
  const strong = skill.evidence.filter((e) => e.quality === "strong").length;
  const ratio = strong / skill.evidence.length;
  // Scale: 0% strong → 30, 50% strong → 65, 100% strong → 100
  return Math.round(30 + ratio * 70);
}

/** Momentum: reward skills with accelerating growth */
function momentumScore(skill: SkillRecord): number {
  const stars = skill.metrics?.stars;
  if (!stars || stars.length < 3) return 50; // neutral

  const latest = stars[stars.length - 1].value;
  const prev = stars[stars.length - 2].value;
  const prevPrev = stars[stars.length - 3].value;

  const recentDelta = latest - prev;
  const olderDelta = prev - prevPrev;

  if (olderDelta <= 0) return recentDelta > 0 ? 80 : 40;

  const acceleration = (recentDelta - olderDelta) / olderDelta;
  // Accelerating = high score, decelerating = low
  if (acceleration >= 1) return 100;
  if (acceleration >= 0) return Math.round(60 + acceleration * 40);
  return Math.max(20, Math.round(60 + acceleration * 40));
}

export function trustScoreColor(score: number): string {
  if (score >= 80) return "emerald";
  if (score >= 50) return "amber";
  return "red";
}

export function trustScoreLabel(score: number): string {
  if (score >= 80) return "Healthy";
  if (score >= 50) return "Caution";
  return "At Risk";
}
