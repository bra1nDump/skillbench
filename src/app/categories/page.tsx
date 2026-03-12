import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { categoryList } from "@/lib/catalog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories — Skillbench",
  description:
    "Browse all agent skill categories with ranked contenders, evidence-backed verdicts, and comparison tables.",
};

export default function CategoriesIndexPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            All Categories
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            {categoryList.length} categories, each with ranked contenders and public evidence.
            A category is the narrow thing the agent needs to do.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {categoryList.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-6 transition-all hover:border-indigo-500/20 hover:bg-[var(--surface-2)]"
            >
              <p className="text-xl font-semibold tracking-tight text-white">
                {category.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{category.deck}</p>
              <div className="mt-5 border-t border-white/[0.04] pt-4">
                <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                  Ranking
                </p>
                <div className="mt-2 space-y-1">
                  {category.ranking.slice(0, 3).map((item) => (
                    <div key={item.rank} className="flex items-baseline gap-2 text-sm">
                      <span className="w-5 font-mono text-xs text-zinc-600">{item.rank}</span>
                      <span className="font-medium text-zinc-300">{item.contender}</span>
                      <span className="text-zinc-600">—</span>
                      <span className="text-xs text-zinc-500">{item.bestFor}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-xs font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">
                Open full report →
              </p>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
