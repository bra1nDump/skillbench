import Link from "next/link";

import { TopSkillsChart } from "@/components/charts/top-skills-chart";
import { DarkCTA } from "@/components/dark-cta";
import { DarkHero } from "@/components/dark-hero";
import { TrustBadge } from "@/components/trust-badge";
import { bundleList, categoryList, getSkill, platformList, skillList } from "@/lib/catalog";
import { getTopMovers } from "@/lib/changelog";
import { parseStars } from "@/lib/parse-stars";
import { computeTrend } from "@/lib/trend";

import type { TopSkillData } from "@/components/charts/top-skills-chart";

const pipeline = [
  {
    name: "Discover",
    icon: "1",
    summary:
      "Search the last 7–30 days across launches, registries, X, Reddit, HN, and pairwise language like 'vs', 'replaced', 'better than'.",
    href: "/docs/agents",
  },
  {
    name: "Deep-dive",
    icon: "2",
    summary:
      "Pull the strongest trust-building sources, quotes, screenshots, and workflow differences. Proof, not volume.",
    href: "/docs/agents",
  },
  {
    name: "Rank",
    icon: "3",
    summary:
      "Turn evidence into category-level recommendations. Workflow fit and public trust over raw chatter.",
    href: "/docs/agents",
  },
  {
    name: "QA",
    icon: "4",
    summary:
      "Fail the build on broken links, dead assets, stale citations. Browser spot-check anything suspicious.",
    href: "/docs/agents/qa",
  },
];

const topMovers = getTopMovers(5);

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

const totalStars = skillList.reduce((sum, s) => sum + parseStars(s.githubStars), 0);
const totalDownloads = skillList.reduce((sum, s) => {
  const dl = s.metrics?.downloads;
  return sum + (dl && dl.length > 0 ? dl[dl.length - 1].value : 0);
}, 0);

function formatBigNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
  return String(n);
}

// Aggregate trends
const allStarsData = skillList.flatMap((s) => s.metrics?.stars ?? []);
const starsByMonth = new Map<string, number>();
for (const p of allStarsData) {
  starsByMonth.set(p.date, (starsByMonth.get(p.date) ?? 0) + p.value);
}
const starsSorted = [...starsByMonth.entries()].sort();
const totalStarsTrend = starsSorted.length >= 2
  ? computeTrend([
      { date: starsSorted[starsSorted.length - 2][0], value: starsSorted[starsSorted.length - 2][1] },
      { date: starsSorted[starsSorted.length - 1][0], value: starsSorted[starsSorted.length - 1][1] },
    ])
  : null;

const starsTrendStr = totalStarsTrend && totalStarsTrend.direction !== "flat"
  ? ` ${totalStarsTrend.direction === "up" ? "↑" : "↓"}${totalStarsTrend.pct}%`
  : "";

const heroStats = [
  { label: "categories", value: String(categoryList.length) },
  { label: "skills ranked", value: String(skillList.length) },
  { label: "total stars", value: `${formatBigNumber(totalStars)}${starsTrendStr}`, color: "#E63946" },
  { label: "downloads/wk", value: formatBigNumber(totalDownloads), color: "#059669" },
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
    <>
      {/* Dark Hero */}
      <DarkHero searchItems={searchItems} stats={heroStats} />

      {/* Content sections */}
      <div className="px-6 sm:px-8">
        {/* Top picks per category */}
        <section className="border-t border-[var(--border)] py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
                Best right now
              </p>
              <p className="mt-2 text-[15px] text-gray-500">
                Top pick per category, ranked by evidence weight and workflow fit.
              </p>
            </div>
            <Link href="/categories" className="group inline-flex w-fit items-center gap-1 rounded-lg border border-[var(--border)] px-3 py-1.5 text-[13px] font-medium text-gray-500 transition-all hover:border-[var(--border-hover)] hover:bg-gray-50 hover:text-gray-900">
              All categories <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {bestRightNow.map((item) => (
              <Link
                key={item.categorySlug}
                href={`/categories/${item.categorySlug}`}
                className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)]"
              >
                <p className="font-mono text-[12px] uppercase tracking-wider text-gray-500">
                  {item.categoryName}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-gray-900">
                  {item.topPick}
                </p>
                <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-gray-500">
                  {item.why}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="inline-flex items-center rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[13px] font-medium text-emerald-600">
                    #1
                  </span>
                  <span className="text-[12px] text-gray-500">
                    of {item.rank} ranked
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Dark CTA #1 */}
      <DarkCTA
        title="Every ranking shows its proof."
        subtitle="GitHub stars, social signals, head-to-head comparisons — not opinions."
        buttonText="HOW WE RANK →"
        buttonHref="/docs/agents"
        variant="primary"
      />

      <div className="px-6 sm:px-8">
        {/* Popularity by stars */}
        {(() => {
          const topByStars: TopSkillData[] = skillList
            .map((s) => ({ name: s.name, stars: parseStars(s.githubStars), slug: s.slug }))
            .filter((s) => s.stars > 0)
            .sort((a, b) => b.stars - a.stars)
            .slice(0, 10);

          return topByStars.length > 1 ? (
            <section className="border-t border-[var(--border)] py-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
                    Popularity by stars
                  </p>
                  <p className="mt-2 text-[15px] text-gray-500">
                    Top skills by GitHub stars. Click a bar to see details.
                  </p>
                </div>
                <Link href="/compare" className="group inline-flex w-fit items-center gap-1 rounded-lg border border-[var(--border)] px-3 py-1.5 text-[13px] font-medium text-gray-500 transition-all hover:border-[var(--border-hover)] hover:bg-gray-50 hover:text-gray-900">
                  Compare skills <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
              <div className="mt-8">
                <TopSkillsChart data={topByStars} />
              </div>
            </section>
          ) : null;
        })()}

        {/* Key comparisons */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Head to head
          </p>
          <p className="mt-2 text-[15px] text-gray-500">
            The matchups that matter most right now.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {topComparisons.map((pair) => (
              <Link
                key={`${pair.left}-${pair.right}`}
                href={`/categories/${pair.categorySlug}`}
                className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)]"
              >
                <p className="font-mono text-[12px] uppercase tracking-wider text-gray-500">
                  {pair.categoryName}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-gray-900">{pair.left}</span>
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[12px] font-medium text-gray-500">vs</span>
                  <span className="text-[15px] font-semibold text-gray-900">{pair.right}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-gray-500">
                  {pair.gist}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Evidence feed */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Latest signals
          </p>
          <p className="mt-2 text-[15px] text-gray-500">
            Strongest recent evidence from across all tracked categories.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {evidenceHighlights.map((signal) => (
              <article key={signal.title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] uppercase tracking-wider text-gray-500">
                    {signal.categoryName}
                  </span>
                  <span className="font-mono text-[12px] text-gray-500">{signal.date}</span>
                </div>
                <a
                  href={signal.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-[15px] font-medium leading-snug text-gray-800 transition-colors hover:text-gray-900"
                >
                  {signal.title}
                </a>
                <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-gray-500">
                  {signal.note}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Dark CTA #2 */}
      <DarkCTA
        title="Know a skill we're missing?"
        subtitle="Submit it. We'll run the full pipeline and publish the evidence."
        buttonText="SUBMIT A SKILL →"
        buttonHref="/docs/agents"
        variant="ghost"
      />

      <div className="px-6 sm:px-8">
        {/* Categories */}
        <section className="border-t border-[var(--border)] py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
                Categories
              </p>
              <p className="mt-2 text-[15px] text-gray-500">
                Each answers a narrow question, backed by visible public proof.
              </p>
            </div>
            <Link href="/categories" className="group inline-flex w-fit items-center gap-1 rounded-lg border border-[var(--border)] px-3 py-1.5 text-[13px] font-medium text-gray-500 transition-all hover:border-[var(--border-hover)] hover:bg-gray-50 hover:text-gray-900">
              View all <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryList.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent)]/20 hover:bg-[var(--surface-2)]"
              >
                <p className="text-lg font-semibold tracking-tight text-gray-900">
                  {category.name}
                </p>
                <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-gray-500">
                  {category.deck}
                </p>
                <div className="mt-5 border-t border-[var(--border)] pt-4">
                  <p className="font-mono text-[13px] uppercase tracking-wider text-gray-500">
                    Top 3
                  </p>
                  <div className="mt-2 space-y-1">
                    {category.ranking.slice(0, 3).map((item) => (
                      <div key={item.rank} className="flex items-center gap-2 text-[15px]">
                        <span className="w-5 font-mono text-[13px] text-gray-500">{item.rank}</span>
                        <span className="font-medium text-gray-700">{item.contender}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-[13px] font-medium text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  Open report →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bundles */}
        {bundleList.length > 0 ? (
          <section className="border-t border-[var(--border)] py-14">
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
              Bundles
            </p>
            <p className="mt-2 text-[15px] text-gray-500">
              What known builders actually ship with. Full setups from people with public track records.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bundleList.map((bundle) => {
                const bundleSkills = bundle.skills.map((s) => getSkill(s)).filter(Boolean);

                return (
                  <Link
                    key={bundle.slug}
                    href={`/bundles/${bundle.slug}`}
                    className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)]"
                  >
                    <p className="font-mono text-[12px] uppercase tracking-wider text-gray-500">
                      {bundle.personaHandle}
                    </p>
                    <p className="mt-2 text-base font-semibold tracking-tight text-gray-900">
                      {bundle.name}
                    </p>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-gray-500">
                      {bundle.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {bundleSkills.map((skill) =>
                        skill ? (
                          <span
                            key={skill.slug}
                            className="rounded bg-[var(--accent)]/10 px-2 py-0.5 font-mono text-[13px] text-[var(--accent)]"
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
        <section className="grid gap-14 border-t border-[var(--border)] py-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
              How we rank
            </p>
            <p className="mt-2 text-[15px] text-gray-500">
              Every recommendation goes through a 4-step research pipeline.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {pipeline.map((step, i) => (
                <Link
                  key={step.name}
                  href={step.href}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-all hover:border-[var(--border-hover)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 font-mono text-[13px] text-gray-500">
                      {i + 1}
                    </span>
                    <p className="text-[15px] font-semibold text-gray-900">{step.name}</p>
                  </div>
                  <p className="mt-3 text-[13px] leading-5 text-gray-500">{step.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
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
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]/50" />
                  <p className="text-[15px] leading-6 text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top movers */}
        {topMovers.length > 0 && (
          <section className="border-t border-[var(--border)] py-14">
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
              Top movers this month
            </p>
            <p className="mt-2 text-[15px] text-gray-500">
              Skills with the biggest star growth since last data collection.
            </p>
            <div className="mt-6 space-y-3">
              {topMovers.map((item) => (
                <Link
                  key={item.slug}
                  href={`/skills/${item.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-2)]"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-[15px] font-semibold text-gray-900 transition-colors group-hover:text-[var(--accent)]">
                      {item.name}
                    </p>
                    <TrustBadge score={item.trustScore} />
                  </div>
                  <span className="font-mono text-[13px] font-bold text-emerald-600">
                    {item.detail}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
