import { parseStars } from "./parse-stars";
import { computeTrustScore } from "./trust-score";

import type { SkillRecord } from "./catalog";

export type ScoreLabel = {
  text: string;
  color: "emerald" | "amber" | "red" | "blue" | "gray";
};

export function getScoreLabels(skill: SkillRecord): ScoreLabel[] {
  const labels: ScoreLabel[] = [];
  const score = computeTrustScore(skill);

  // Score label always present
  labels.push({
    text: `Score ${score}`,
    color: score >= 80 ? "emerald" : score >= 50 ? "amber" : "red",
  });

  // New entry
  if (skill.daysOld != null && skill.daysOld <= 60) {
    labels.push({ text: "new entry", color: "blue" });
  }

  // Trending: positive star growth
  const stars = skill.metrics?.stars;
  if (stars && stars.length >= 2) {
    const latest = stars[stars.length - 1].value;
    const prev = stars[stars.length - 2].value;
    if (prev > 0) {
      const growthPct = ((latest - prev) / prev) * 100;
      if (growthPct >= 10) {
        labels.push({ text: "trending", color: "emerald" });
      } else if (growthPct < -5) {
        labels.push({ text: "declining", color: "red" });
      }
    }
  }

  // Status-based
  if (skill.status === "stale") {
    labels.push({ text: "stale", color: "red" });
  } else if (skill.status === "watch") {
    labels.push({ text: "watch", color: "amber" });
  }

  // Archived
  if (skill.repoHealth?.archived) {
    labels.push({ text: "archived", color: "red" });
  }

  return labels;
}

const LABEL_STYLES: Record<ScoreLabel["color"], string> = {
  emerald: "bg-emerald-900/40 text-emerald-400",
  amber: "bg-amber-900/40 text-amber-400",
  red: "bg-red-900/40 text-red-400",
  blue: "bg-blue-900/40 text-blue-400",
  gray: "bg-[#262626] text-[#737373]",
};

export function labelClassName(color: ScoreLabel["color"]): string {
  return LABEL_STYLES[color];
}
