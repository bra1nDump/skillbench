import { getSkill } from "./catalog";
import { computeTrustScore } from "./trust-score";

import rawEntries from "@/data/changelog-entries.json";

// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------

export type ChangelogEntryType =
  | "ranking-change"   // solution moved up/down in a problem ranking
  | "new-contender"    // new solution added to catalog
  | "score-change"     // trust score significantly changed
  | "downgrade"        // solution downgraded (maintenance mode, etc.)
  | "category-added"   // new problem space added
  | "system";          // meta / system events

export type ChangelogEntry = {
  date: string;           // ISO date "2026-03-24"
  type: ChangelogEntryType;
  slug: string | null;    // solution slug, null for system/category events
  problem: string | null; // problem slug if relevant
  title: string;          // short headline
  detail: string;         // one-sentence explanation
  source: "pipeline" | "manual";
};

export type ChangelogItem = {
  date: string;
  slug: string | null;
  name: string;
  type: ChangelogEntryType;
  title: string;
  detail: string;
  trustScore: number | null;
};

// --------------------------------------------------------------------------
// Read entries from JSON + enrich with live trust scores
// --------------------------------------------------------------------------

function loadEntries(): ChangelogItem[] {
  const entries = rawEntries as ChangelogEntry[];

  return entries
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((entry) => {
      const skill = entry.slug ? getSkill(entry.slug) : null;

      return {
        date: entry.date,
        slug: entry.slug,
        name: skill?.name ?? entry.title,
        type: entry.type,
        title: entry.title,
        detail: entry.detail,
        trustScore: skill ? computeTrustScore(skill) : null,
      };
    });
}

// --------------------------------------------------------------------------
// Public API
// --------------------------------------------------------------------------

export function getAllChanges(limit = 30): ChangelogItem[] {
  return loadEntries().slice(0, limit);
}

/** Recent changes for a specific solution (last 30 days, max 6 items). */
export function getRecentChangesForSolution(
  slug: string,
  maxItems = 6,
): ChangelogItem[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  return loadEntries()
    .filter((item) => item.slug === slug && item.date >= cutoffStr)
    .slice(0, maxItems);
}
