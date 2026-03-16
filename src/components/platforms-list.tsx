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
            className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)]"
          >
            <p className="text-lg font-semibold tracking-tight text-gray-900">
              {platform.name}
            </p>
            <p className="mt-2 text-[15px] leading-6 text-gray-500">
              {platform.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {platform.categories.map((j) => (
                <span
                  key={j.slug}
                  className="rounded bg-gray-100 px-2 py-0.5 text-[12px] text-gray-500"
                >
                  {j.name}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[13px] text-gray-500">
              {platform.skillCount} skill{platform.skillCount !== 1 ? "s" : ""}
            </p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-[15px] text-gray-500 lg:col-span-2">
            No platforms match &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
    </>
  );
}
