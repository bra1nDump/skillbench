"use client";

import Link from "next/link";
import { useState } from "react";

import { FilterInput } from "./filter-input";

type BundleItem = {
  slug: string;
  name: string;
  persona: string;
  personaHandle: string;
  summary: string;
  date: string;
  source: string;
  skills: Array<{ slug: string; name: string }>;
};

export function BundlesList({ bundles }: { bundles: BundleItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.length < 1
    ? bundles
    : bundles.filter((b) => {
      const q = query.toLowerCase();

      return (
        b.name.toLowerCase().includes(q) ||
          b.persona.toLowerCase().includes(q) ||
          b.personaHandle.toLowerCase().includes(q) ||
          b.summary.toLowerCase().includes(q) ||
          b.skills.some((s) => s.name.toLowerCase().includes(q))
      );
    });

  return (
    <>
      <div className="pb-6">
        <FilterInput
          value={query}
          onChange={setQuery}
          placeholder="Filter by name, persona, skill..."
          count={filtered.length}
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((bundle) => (
          <Link
            key={bundle.slug}
            href={`/bundles/${bundle.slug}`}
            className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-6 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
          >
            <p className="text-lg font-semibold tracking-tight text-white">
              {bundle.name}
            </p>
            <p className="mt-1 font-mono text-[11px] text-zinc-500">
              {bundle.persona}{" "}
              <span className="text-zinc-600">{bundle.personaHandle}</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              {bundle.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {bundle.skills.map((skill) => (
                <span
                  key={skill.slug}
                  className="rounded bg-indigo-500/10 px-2 py-0.5 font-mono text-[9px] text-indigo-400"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <p className="mt-3 font-mono text-[10px] text-zinc-600">
              {bundle.date} · {bundle.source}
            </p>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-sm text-zinc-500 lg:col-span-2">
            No bundles match &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
    </>
  );
}
