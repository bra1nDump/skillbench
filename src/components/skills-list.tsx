"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { FilterInput } from "./filter-input";

type SkillItem = {
  slug: string;
  name: string;
  repo: string;
  status: "active" | "watch";
  official: boolean;
  githubStars?: string;
  evidenceCount: number;
  verdict: string;
  categories: Array<{ slug: string; name: string }>;
  screenshotUrl: string | null;
};

type Toggle = "official" | "active" | "watch" | "has-evidence";

export function SkillsList({ skills }: { skills: SkillItem[] }) {
  const [query, setQuery] = useState("");
  const [toggles, setToggles] = useState<Set<Toggle>>(new Set());
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const allCategories = useMemo(() => {
    const map = new Map<string, string>();

    for (const s of skills) {
      for (const c of s.categories) {
        map.set(c.slug, c.name);
      }
    }
    return Array.from(map, ([slug, name]) => ({ slug, name }));
  }, [skills]);

  const toggle = (t: Toggle) => {
    setToggles((prev) => {
      const next = new Set(prev);

      if (next.has(t)) next.delete(t);
      else next.add(t);
      if (t === "active" && next.has("active")) next.delete("watch");
      if (t === "watch" && next.has("watch")) next.delete("active");
      return next;
    });
  };

  const filtered = useMemo(() => {
    let list = skills;

    if (toggles.has("official")) list = list.filter((s) => s.official);
    if (toggles.has("active")) list = list.filter((s) => s.status === "active");
    if (toggles.has("watch")) list = list.filter((s) => s.status === "watch");
    if (toggles.has("has-evidence")) list = list.filter((s) => s.evidenceCount > 0);
    if (categoryFilter) list = list.filter((s) => s.categories.some((c) => c.slug === categoryFilter));

    if (query.length >= 1) {
      const q = query.toLowerCase();

      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.repo.toLowerCase().includes(q) ||
          s.verdict.toLowerCase().includes(q) ||
          s.categories.some((c) => c.name.toLowerCase().includes(q)),
      );
    }

    return list;
  }, [skills, query, toggles, categoryFilter]);

  const chipBase =
    "cursor-pointer select-none rounded-lg border px-3 py-1.5 text-xs font-medium transition-all";
  const chipOff =
    "border-white/[0.06] text-zinc-500 hover:border-white/[0.12] hover:text-zinc-300";
  const chipOn =
    "border-indigo-500/30 bg-indigo-500/10 text-indigo-400";

  return (
    <>
      <div className="space-y-4 pb-6">
        <FilterInput
          value={query}
          onChange={setQuery}
          placeholder="Filter by name, repo, verdict, category..."
          count={filtered.length}
        />

        {/* Toggle chips */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => toggle("official")}
            className={`${chipBase} ${toggles.has("official") ? chipOn : chipOff}`}
          >
            Official only
          </button>
          <button
            type="button"
            onClick={() => toggle("active")}
            className={`${chipBase} ${toggles.has("active") ? chipOn : chipOff}`}
          >
            Active
          </button>
          <button
            type="button"
            onClick={() => toggle("watch")}
            className={`${chipBase} ${toggles.has("watch") ? chipOn : chipOff}`}
          >
            Watch
          </button>
          <button
            type="button"
            onClick={() => toggle("has-evidence")}
            className={`${chipBase} ${toggles.has("has-evidence") ? chipOn : chipOff}`}
          >
            Has evidence
          </button>

          <span className="mx-1 h-4 w-px bg-white/[0.06]" />

          {/* Category dropdown */}
          <select
            value={categoryFilter ?? ""}
            onChange={(e) => setCategoryFilter(e.target.value || null)}
            className="cursor-pointer rounded-lg border border-white/[0.06] bg-transparent px-3 py-1.5 text-xs font-medium text-zinc-500 transition-all hover:border-white/[0.12] hover:text-zinc-300 focus:border-indigo-500/30 focus:text-indigo-400 focus:outline-none"
          >
            <option value="">All categories</option>
            {allCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Clear all */}
          {(toggles.size > 0 || categoryFilter) && (
            <button
              type="button"
              onClick={() => {
                setToggles(new Set());
                setCategoryFilter(null);
              }}
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((skill) => (
          <Link
            key={skill.slug}
            href={`/skills/${skill.slug}`}
            className="group flex flex-col gap-4 rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)] sm:flex-row sm:items-start"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2.5">
                <p className="text-base font-semibold text-white transition-colors group-hover:text-indigo-400">
                  {skill.name}
                </p>
                <span
                  className={`rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                    skill.status === "active"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {skill.status}
                </span>
                {skill.official ? (
                  <span className="rounded bg-indigo-500/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-indigo-400">
                    Official
                  </span>
                ) : null}
              </div>
              <div className="mt-1 flex items-center gap-3">
                <span className="font-mono text-[11px] text-zinc-600">{skill.repo}</span>
                {skill.githubStars ? (
                  <span className="font-mono text-[11px] text-zinc-600">★ {skill.githubStars}</span>
                ) : null}
                {skill.evidenceCount > 0 ? (
                  <span className="font-mono text-[11px] text-emerald-500/70">
                    {skill.evidenceCount} evidence
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {skill.verdict}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 sm:flex-shrink-0">
              {skill.screenshotUrl && (
                <div className="overflow-hidden rounded-lg border border-white/[0.06]" style={{ width: 128 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.screenshotUrl}
                    alt=""
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {skill.categories.map((j) => (
                  <span
                    key={j.slug}
                    className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] text-zinc-500"
                  >
                    {j.name}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-zinc-500">
            No skills match your filters
          </p>
        )}
      </div>
    </>
  );
}
