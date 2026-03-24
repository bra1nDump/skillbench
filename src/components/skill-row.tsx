"use client";

import Link from "next/link";
import { useState } from "react";

export type SkillRowData = {
  slug: string;
  name: string;
  repo?: string;
  tags?: string[];
  relatedCategories?: string[];
  trustScore?: number;
  bestFor?: string;
  // Keep for filtering/sorting compatibility
  skillType?: string;
  skillTier?: string;
  complexity?: number;
  freshnessDays?: number;
  installs?: number;
  daysOld?: number;
  weekGrowth?: number;
};

export function SkillRow({ skill }: { skill: SkillRowData }) {
  const [hov, setHov] = useState(false);

  const trustColor =
    (skill.trustScore ?? 0) >= 80
      ? "text-emerald-500"
      : (skill.trustScore ?? 0) >= 50
        ? "text-amber-500"
        : "text-red-400";

  return (
    <Link
      href={`/solutions/${skill.slug}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`flex items-center gap-4 border-b border-[var(--border)] px-3.5 py-3 transition-colors sm:grid ${
        hov ? "bg-[var(--surface-2)]" : ""
      }`}
      style={{
        gridTemplateColumns: "minmax(180px, 1.2fr) minmax(120px, 1fr) 52px",
      }}
    >
      {/* Solution name + tags */}
      <div className="min-w-0 flex-1 sm:flex-none">
        <span className="truncate text-[13px] font-bold text-gray-900">
          {skill.name}
        </span>
        {skill.tags && skill.tags.length > 0 && (
          <div className="mt-0.5 flex flex-wrap items-center gap-1">
            {skill.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded bg-gray-100 px-1 font-mono text-[9px] text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Why use this — hidden on mobile */}
      <div className="hidden min-w-0 sm:block">
        <p className="line-clamp-2 text-[12px] leading-[1.4] text-gray-500">
          {skill.bestFor || "—"}
        </p>
      </div>

      {/* Score */}
      <div className="text-right sm:text-right">
        {skill.trustScore != null ? (
          <span className={`font-mono text-[13px] font-bold ${trustColor}`}>
            {skill.trustScore}
          </span>
        ) : (
          <span className="text-[10px] text-gray-300">—</span>
        )}
      </div>
    </Link>
  );
}
