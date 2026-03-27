"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type CategoryRank = {
  slug: string;
  name: string;
  rank: number;
};

export type SkillRowData = {
  slug: string;
  name: string;
  repo?: string;
  tags?: string[];
  relatedCategories?: string[];
  categoryRanks?: CategoryRank[];
  trustScore?: number;
  bestFor?: string;
  summary?: string;
  screenshotUrl?: string | null;
  rank?: number;
  belowCutLine?: boolean;
  why?: string;
  // Keep for filtering/sorting compatibility
  skillType?: string;
  skillTier?: string;
  complexity?: number;
  freshnessDays?: number;
  installs?: number;
  daysOld?: number;
  weekGrowth?: number;
};

export function SkillRow({
  skill,
  variant = "compact",
}: {
  skill: SkillRowData;
  variant?: "compact" | "expanded";
}) {
  const router = useRouter();
  const [hov, setHov] = useState(false);

  const trustColor =
    (skill.trustScore ?? 0) >= 80
      ? "text-emerald-500"
      : (skill.trustScore ?? 0) >= 50
        ? "text-amber-500"
        : "text-red-400";

  if (variant === "expanded") {
    return (
      <Link
        href={`/solutions/${skill.slug}`}
        className={`group flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)]${skill.belowCutLine ? " opacity-50" : ""}`}
      >
        {skill.rank != null && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 font-mono text-lg font-bold text-gray-500">
            {skill.rank}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-900 transition-colors group-hover:text-[var(--accent)]">
              {skill.name}
            </span>
            {skill.trustScore != null && (
              <span className={`font-mono text-[13px] font-bold ${trustColor}`}>
                {skill.trustScore}
              </span>
            )}
          </div>
          {skill.bestFor && (
            <p className="mt-1 text-[15px] text-gray-500">
              <span className="font-medium text-gray-500">Best for:</span> {skill.bestFor}
            </p>
          )}
          {skill.why && (
            <p className="mt-1 text-[13px] leading-5 text-gray-500">{skill.why}</p>
          )}
          {skill.categoryRanks && skill.categoryRanks.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {skill.categoryRanks.slice(0, 3).map((cr) => (
                <span
                  key={cr.slug}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/problems/${cr.slug}`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push(`/problems/${cr.slug}`);
                    }
                  }}
                  className="cursor-pointer rounded bg-gray-100 px-1 font-mono text-[9px] text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                >
                  {cr.name}{cr.rank > 0 ? ` #${cr.rank}` : ""}
                </span>
              ))}
            </div>
          )}
        </div>
        <div
          className="hidden shrink-0 overflow-hidden rounded border border-[var(--border)] bg-gray-50 sm:block"
          style={{ width: 142, height: 80, minWidth: 142, minHeight: 80 }}
        >
          {skill.screenshotUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={skill.screenshotUrl}
              alt=""
              style={{ width: 142, height: 80, objectFit: "cover", objectPosition: "top", display: "block" }}
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-[10px] text-gray-300">
              No preview
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/solutions/${skill.slug}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`block border-b border-[var(--border)] px-2 py-2.5 transition-colors sm:px-3.5 sm:py-3 ${
        hov ? "bg-[var(--surface-2)]" : ""
      }`}
    >
      {/* Desktop: 3-column grid */}
      <div
        className="hidden items-center gap-4 sm:grid"
        style={{
          gridTemplateColumns: "minmax(140px, 0.9fr) minmax(120px, 1fr) 52px",
        }}
      >
        <div className="min-w-0">
          <span className="truncate text-[13px] font-bold text-gray-900">
            {skill.name}
          </span>
          {skill.categoryRanks && skill.categoryRanks.length > 0 && (
            <div className="mt-0.5 flex flex-wrap items-center gap-1">
              {skill.categoryRanks.slice(0, 3).map((cr) => (
                <span
                  key={cr.slug}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/problems/${cr.slug}`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push(`/problems/${cr.slug}`);
                    }
                  }}
                  className="cursor-pointer rounded bg-gray-100 px-1 font-mono text-[9px] text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
                >
                  {cr.name}{cr.rank > 0 ? ` #${cr.rank}` : ""}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="line-clamp-2 text-[12px] leading-[1.4] text-gray-500">
            {skill.bestFor || "—"}
          </p>
        </div>
        <div className="text-right">
          {skill.trustScore != null ? (
            <span className={`font-mono text-[13px] font-bold ${trustColor}`}>
              {skill.trustScore}
            </span>
          ) : (
            <span className="text-[10px] text-gray-300">—</span>
          )}
        </div>
      </div>

      {/* Mobile: 2-line layout */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between gap-2">
          <span className="min-w-0 truncate text-[13px] font-bold text-gray-900">
            {skill.name}
          </span>
          {skill.trustScore != null ? (
            <span className={`shrink-0 font-mono text-[13px] font-bold ${trustColor}`}>
              {skill.trustScore}
            </span>
          ) : (
            <span className="text-[10px] text-gray-300">—</span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-1 text-[11px] leading-[1.4] text-gray-500">
          {skill.bestFor || "—"}
        </p>
        {skill.categoryRanks && skill.categoryRanks.length > 0 && (
          <div className="mt-1 flex flex-wrap items-center gap-1">
            {skill.categoryRanks.slice(0, 2).map((cr) => (
              <span
                key={cr.slug}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.push(`/problems/${cr.slug}`);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/problems/${cr.slug}`);
                  }
                }}
                className="cursor-pointer rounded bg-gray-100 px-1 font-mono text-[9px] text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
              >
                {cr.name}{cr.rank > 0 ? ` #${cr.rank}` : ""}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
