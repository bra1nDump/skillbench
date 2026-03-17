import { parseStars } from "./parse-stars";

import type { SkillRecord } from "./catalog";

/**
 * Compute a composite trust score (0-100) for a skill.
 * Computed at display-time from catalog data — never stored.
 *
 * Weights:
 *   Freshness  30% — how recently the repo was pushed
 *   Community  25% — star growth velocity
 *   Adoption   25% — weekly downloads (log scale)
 *   Evidence   20% — strong evidence ratio
 */
export function computeTrustScore(skill: SkillRecord): number {
  const freshness = freshnessScore(skill);
  const community = communityScore(skill);
  const adoption = adoptionScore(skill);
  const evidence = evidenceScore(skill);

  let score = Math.round(
    freshness * 0.3 + community * 0.25 + adoption * 0.25 + evidence * 0.2,
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
  if (days < 30) return 80;
  if (days < 90) return 50;
  if (days < 180) return 20;
  return 0;
}

function communityScore(skill: SkillRecord): number {
  const stars = skill.metrics?.stars;
  if (!stars || stars.length < 2) {
    // Fallback: use absolute star count
    const abs = parseStars(skill.githubStars);
    if (abs >= 50000) return 100;
    if (abs >= 10000) return 80;
    if (abs >= 1000) return 60;
    if (abs >= 100) return 40;
    return 20;
  }
  // Growth rate: latest vs previous
  const latest = stars[stars.length - 1].value;
  const prev = stars[stars.length - 2].value;
  if (prev === 0) return 50;
  const growthPct = ((latest - prev) / prev) * 100;
  if (growthPct >= 20) return 100;
  if (growthPct >= 10) return 85;
  if (growthPct >= 5) return 70;
  if (growthPct >= 1) return 55;
  if (growthPct >= 0) return 40;
  return 20; // declining
}

function adoptionScore(skill: SkillRecord): number {
  const dl = skill.metrics?.downloads;
  if (!dl || dl.length === 0) return 30; // no data
  const latest = dl[dl.length - 1].value;
  if (latest >= 100_000) return 100;
  if (latest >= 10_000) return 80;
  if (latest >= 1_000) return 60;
  if (latest >= 100) return 40;
  return 20;
}

function evidenceScore(skill: SkillRecord): number {
  if (skill.evidence.length === 0) return 0;
  const strong = skill.evidence.filter((e) => e.quality === "strong").length;
  return Math.round((strong / skill.evidence.length) * 100);
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
