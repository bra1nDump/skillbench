import Link from "next/link";

import { Search } from "@/components/search";
import { SiteFooter } from "@/components/site-footer";
import { bundleList, categoryList, getSkill, platformList, skillList } from "@/lib/catalog";
import { mission } from "@/lib/site-data";

const pipeline = [
  {
    name: "Discover",
    icon: "🔍",
    summary:
      "Search the last 7–30 days across launches, registries, X, Reddit, HN, and pairwise language like 'vs', 'replaced', 'better than'.",
    href: "/docs/agents",
  },
  {
    name: "Deep-dive",
    icon: "🔬",
    summary:
      "Pull the strongest trust-building sources, quotes, screenshots, and workflow differences. Proof, not volume.",
    href: "/docs/agents",
  },
  {
    name: "Rank",
    icon: "🏆",
    summary:
      "Turn evidence into category-level recommendations. Workflow fit and public trust over raw chatter.",
    href: "/docs/agents",
  },
  {
    name: "QA",
    icon: "🛡️",
    summary:
      "Fail the build on broken links, dead assets, stale citations. Browser spot-check anything suspicious.",
    href: "/docs/agents/qa",
  },
];

const latestRuns = [
  {
    name: "Discover",
    summary:
      "Mapped the live contenders and the strongest recent public signals for product/business development, software factories, and UX/UI.",
    href: "/runs/2026-03-09_05-40_discover_core-jobs",
  },
  {
    name: "Rank",
    summary:
      "Turned the evidence into concrete rankings for the three live categories, including native-tool and loop-pattern subcases.",
    href: "/runs/2026-03-09_05-57_rank_core-jobs",
  },
  {
    name: "Evidence capture",
    summary:
      "Validated evidence for Google Workspace MCP, Firecrawl, OpenHands, SWE-agent, Figma MCP, Figma-use, and Vibma.",
    href: "/runs/2026-03-09_12-55_evidence-capture_core-jobs",
  },
];

const searchItems = [
  ...categoryList.map((category) => ({
    label: "Category",
    name: category.name,
    href: `/categories/${category.slug}`,
    summary: category.deck,
  })),
  ...skillList.map((skill) => ({
    label: "Skill",
    name: skill.name,
    href: `/skills/${skill.slug}`,
    summary: skill.summary,
  })),
  ...platformList.map((platform) => ({
    label: "Platform",
    name: platform.name,
    href: `/platforms/${platform.slug}`,
    summary: platform.summary,
  })),
  ...bundleList.map((bundle) => ({
    label: "Bundle",
    name: bundle.name,
    href: `/bundles/${bundle.slug}`,
    summary: `${bundle.persona} — ${bundle.summary}`,
  })),
];

const bestRightNow = categoryList.map((category) => ({
  categoryName: category.name,
  categorySlug: category.slug,
  topPick: category.ranking[0]?.contender ?? "TBD",
  skillSlug: category.ranking[0]?.skillSlug,
  why: category.ranking[0]?.why ?? "",
  rank: category.ranking.length,
}));

const evidenceHighlights = categoryList
  .flatMap((category) =>
    category.liveSignals.slice(0, 1).map((signal) => ({
      categoryName: category.name,
      categorySlug: category.slug,
      ...signal,
    })),
  )
  .slice(0, 5);

const topComparisons = categoryList
  .flatMap((category) =>
    category.headToHead.slice(0, 1).map((pair) => ({
      categoryName: category.name,
      categorySlug: category.slug,
      ...pair,
    })),
  )
  .slice(0, 5);

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        {/* Hero */}
        <div className="pb-12 pt-16 sm:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-medium text-indigo-400">
              {categoryList.length} categories · {skillList.length} skills ranked
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Find the actual meta for{" "}
            <span className=" text-indigo-400 ">
              agent skills
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
            {mission}
          </p>
          <div className="mt-8">
            <Search items={searchItems} />
          </div>
        </div>

        {/* Top picks per category */}
        <section className="border-t border-white/[0.06] py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono uppercase tracking-widest text-indigo-400">
                Best right now
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Top pick per category, ranked by evidence weight and workflow fit.
              </p>
            </div>
            <Link href="/categories" className="group inline-flex w-fit items-center gap-1 rounded-lg border border-white/[0.06] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white">
              All categories <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {bestRightNow.map((item) => (
              <Link
                key={item.categorySlug}
                href={`/categories/${item.categorySlug}`}
                className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {item.categoryName}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                  {item.topPick}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500">
                  {item.why}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="inline-flex items-center rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-emerald-400">
                    #1
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    of {item.rank} ranked
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key comparisons */}
        <section className="border-t border-white/[0.06] py-14">
          <p className="font-mono uppercase tracking-widest text-indigo-400">
            Head to head
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            The matchups that matter most right now.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {topComparisons.map((pair) => (
              <Link
                key={`${pair.left}-${pair.right}`}
                href={`/categories/${pair.categorySlug}`}
                className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {pair.categoryName}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{pair.left}</span>
                  <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium text-zinc-500">vs</span>
                  <span className="text-sm font-semibold text-white">{pair.right}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500">
                  {pair.gist}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Evidence feed */}
        <section className="border-t border-white/[0.06] py-14">
          <p className="font-mono  uppercase tracking-widest text-indigo-400">
            Latest signals
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Strongest recent evidence from across all tracked categories.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {evidenceHighlights.map((signal) => (
              <article key={signal.title} className="rounded-lg border border-white/[0.04] bg-[var(--surface)] p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    {signal.categoryName}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600">{signal.date}</span>
                </div>
                <a
                  href={signal.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium leading-snug text-zinc-200 transition-colors hover:text-white"
                >
                  {signal.title}
                </a>
                <p className="mt-2 line-clamp-3 text-xs leading-5 text-zinc-500">
                  {signal.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="border-t border-white/[0.06] py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono uppercase tracking-widest text-indigo-400">
                Categories
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Each answers a narrow question, backed by visible public proof.
              </p>
            </div>
            <Link href="/categories" className="group inline-flex w-fit items-center gap-1 rounded-lg border border-white/[0.06] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white">
              View all <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryList.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-6 transition-all hover:border-indigo-500/20 hover:bg-[var(--surface-2)]"
              >
                <p className="text-lg font-semibold tracking-tight text-white">
                  {category.name}
                </p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-500">
                  {category.deck}
                </p>
                <div className="mt-5 border-t border-white/[0.04] pt-4">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                    Top 3
                  </p>
                  <div className="mt-2 space-y-1">
                    {category.ranking.slice(0, 3).map((item) => (
                      <div key={item.rank} className="flex items-center gap-2 text-sm">
                        <span className="w-5 font-mono text-xs text-zinc-600">{item.rank}</span>
                        <span className="font-medium text-zinc-300">{item.contender}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-xs font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Open report →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bundles */}
        {bundleList.length > 0 ? (
          <section className="border-t border-white/[0.06] py-14">
            <p className="font-mono uppercase tracking-widest text-indigo-400">
              Bundles
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              What known builders actually ship with. Full setups from people with public track records.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bundleList.map((bundle) => {
                const bundleSkills = bundle.skills.map((s) => getSkill(s)).filter(Boolean);

                return (
                  <Link
                    key={bundle.slug}
                    href={`/bundles/${bundle.slug}`}
                    className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {bundle.personaHandle}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-tight text-white">
                      {bundle.name}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500">
                      {bundle.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {bundleSkills.map((skill) =>
                        skill ? (
                          <span
                            key={skill.slug}
                            className="rounded bg-indigo-500/10 px-2 py-0.5 font-mono text-[9px] text-indigo-400"
                          >
                            {skill.name}
                          </span>
                        ) : null,
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        {/* Pipeline + Values */}
        <section className="grid gap-14 border-t border-white/[0.06] py-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="font-mono uppercase tracking-widest text-indigo-400">
              How we rank
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Every recommendation goes through a 4-step research pipeline.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {pipeline.map((step, i) => (
                <Link
                  key={step.name}
                  href={step.href}
                  className="group rounded-lg border border-white/[0.04] bg-[var(--surface)] p-4 transition-all hover:border-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.04] font-mono text-xs text-zinc-500">
                      {i + 1}
                    </span>
                    <p className="text-sm font-semibold text-white">{step.name}</p>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-zinc-500">{step.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono uppercase tracking-widest text-indigo-400">
              What we optimize for
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Demonstrable outputs over generic capability claims.",
                "Public trust over registry volume.",
                "Pairwise comparisons over isolated praise.",
                "Workflow shape over fake universal scores.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/50" />
                  <p className="text-sm leading-6 text-zinc-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest runs */}
        <section className="border-t border-white/[0.06] py-14">
          <p className="font-mono uppercase tracking-widest text-indigo-400">
            Latest research
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {latestRuns.map((run) => (
              <Link
                key={run.name}
                href={run.href}
                className="group rounded-lg border border-white/[0.04] bg-[var(--surface)] p-5 transition-all hover:border-white/[0.08]"
              >
                <p className="text-sm font-semibold text-white">{run.name}</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  {run.summary}
                </p>
                <p className="mt-3 text-xs font-medium text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100">
                  View run →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
