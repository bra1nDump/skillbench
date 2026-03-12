"use client";

import Link from "next/link";
import { useState } from "react";

import { FilterInput } from "./filter-input";

type PlatformItem = {
  slug: string;
  name: string;
  summary: string;
  categories: Array<{ slug: string; name: string }>;
  skillCount: number;
};

export function PlatformsList({ platforms }: { platforms: PlatformItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.length < 1
    ? platforms
    : platforms.filter((p) => {
      const q = query.toLowerCase();

      return (
        p.name.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.categories.some((c) => c.name.toLowerCase().includes(q))
      );
    });

  return (
    <>
      <div className="pb-6">
        <FilterInput
          value={query}
          onChange={setQuery}
          placeholder="Filter by name, category..."
          count={filtered.length}
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((platform) => (
          <Link
            key={platform.slug}
            href={`/platforms/${platform.slug}`}
            className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-6 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
          >
            <p className="text-lg font-semibold tracking-tight text-white">
              {platform.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {platform.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {platform.categories.map((j) => (
                <span
                  key={j.slug}
                  className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] text-zinc-500"
                >
                  {j.name}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              {platform.skillCount} skill{platform.skillCount !== 1 ? "s" : ""}
            </p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-sm text-zinc-500 lg:col-span-2">
            No platforms match &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
    </>
  );
}
