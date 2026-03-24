import type { SkillRecord } from "./catalog";
import { skillList } from "./catalog";

/** Skills submitted within the last N days */
export function getNewSkills(days = 14): SkillRecord[] {
  return skillList
    .filter((s) => s.daysOld != null && s.daysOld <= days)
    .sort((a, b) => (a.daysOld ?? 999) - (b.daysOld ?? 999));
}

/** Skills sorted by relative weekly growth (descending) */
export function getTrendingSkills(limit = 20): SkillRecord[] {
  return skillList
    .filter((s) => s.weekGrowth != null)
    .sort((a, b) => (b.weekGrowth ?? 0) - (a.weekGrowth ?? 0))
    .slice(0, limit);
}

/** Skills sorted by community rating (descending) */
export function getTopRated(limit = 20): SkillRecord[] {
  return skillList
    .filter((s) => s.rating != null)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
    .slice(0, limit);
}

/** High rating + low installs — hidden gems */
export function getUnderrated(limit = 20): SkillRecord[] {
  const dlThreshold = 5000;

  return skillList
    .filter((s) => {
      if (s.rating == null || s.rating < 4.5) return false;
      const lastDl = s.metrics?.downloads?.at(-1)?.value ?? 0;

      return lastDl < dlThreshold;
    })
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, limit);
}

/** Category icon names — maps to lucide-react components */
export { categoryIconMap } from "./category-icons";
