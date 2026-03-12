import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { CategorySkillsChart } from "@/components/charts/category-skills-chart";
import { MultiMetricsChart } from "@/components/charts/metrics-chart";
import { SiteFooter } from "@/components/site-footer";
import { categoryList, getCategory, getSkill } from "@/lib/catalog";
import { parseStars } from "@/lib/parse-stars";

import type { CategorySkillData } from "@/components/charts/category-skills-chart";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categoryList.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) return {};
  return {
    title: `${category.name} — Skillbench`,
    description: category.deck,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        {/* Header */}
        <div className="pb-10">
          <Link href="/categories" className="mb-4 inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            ← All categories
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">{category.deck}</p>
        </div>

        {/* Verdict */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Verdict
          </p>
          <div className="mt-5 space-y-4 text-[15px] leading-7 text-zinc-300">
            {category.verdict.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Deeper read */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            The deeper read
          </p>
          <div className="mt-5 space-y-4 text-[15px] leading-7 text-zinc-400">
            {category.meta.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Observed outputs */}
        {category.observedOutputs.length > 0 ? (
          <section className="border-t border-white/[0.06] py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Observed outputs
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {category.observedOutputs.map((item) => (
                <article key={item.title} className="rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5">
                  <a href={item.href} target="_blank" rel="noreferrer" className="group block">
                    <p className="text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">
                      {item.title}
                    </p>
                  </a>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{item.summary}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                    >
                      View source →
                    </a>
                    <span className="font-mono text-[10px] text-zinc-600">{item.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* Ranking */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Current ranking
          </p>
          <div className="mt-6 space-y-3">
            {category.ranking.map((item, idx) => {
              const skill = item.skillSlug ? getSkill(item.skillSlug) : null;
              const href = skill ? `/skills/${skill.slug}` : item.externalUrl;
              const external = Boolean(item.externalUrl && !skill);
              const prevItem = idx > 0 ? category.ranking[idx - 1] : null;
              const showCutLine = item.belowCutLine && !prevItem?.belowCutLine;

              return (
                <Fragment key={item.rank}>
                  {showCutLine ? (
                    <div className="flex items-center gap-3 py-2">
                      <div className="h-px flex-1 bg-amber-500/20" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-500/70">
                        Below the cut line
                      </span>
                      <div className="h-px flex-1 bg-amber-500/20" />
                    </div>
                  ) : null}
                  <div className={`flex gap-4 rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-colors hover:border-white/[0.1]${item.belowCutLine ? " opacity-50" : ""}`}>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.04] font-mono text-lg font-bold text-zinc-500">
                      {item.rank}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        {href ? (
                          external ? (
                            <a href={href} target="_blank" rel="noreferrer" className="text-base font-semibold text-white transition-colors hover:text-indigo-400">
                              {item.contender}
                            </a>
                          ) : (
                            <Link href={href} className="text-base font-semibold text-white transition-colors hover:text-indigo-400">
                              {item.contender}
                            </Link>
                          )
                        ) : (
                          <span className="text-base font-semibold text-white">{item.contender}</span>
                        )}
                        {skill?.official ? (
                          <span className="rounded bg-indigo-500/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-indigo-400">
                            Official
                          </span>
                        ) : null}
                        {skill?.githubStars ? (
                          <span className="font-mono text-[10px] text-zinc-600">
                            ★ {skill.githubStars}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-zinc-500">
                        <span className="font-medium text-zinc-400">Best for:</span> {item.bestFor}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{item.why}</p>
                      {item.watch ? (
                        <p className="mt-2 text-xs text-amber-500/70">
                          ⚡ {item.watch}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </section>

        {/* Skills comparison chart */}
        {(() => {
          const chartData: CategorySkillData[] = category.ranking
            .map((item) => {
              const skill = item.skillSlug ? getSkill(item.skillSlug) : null;

              return {
                name: item.contender,
                stars: skill ? parseStars(skill.githubStars) : 0,
                evidence: skill ? skill.evidence.length : 0,
                strongEvidence: skill ? skill.evidence.filter((e) => e.quality === "strong").length : 0,
                rank: item.rank,
              };
            })
            .filter((d) => d.stars > 0 || d.evidence > 0);

          const top10 = chartData.slice(0, 10);
          const remaining = chartData.length - top10.length;

          return top10.length > 1 ? (
            <section className="border-t border-white/[0.06] py-12">
              <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
                Skills comparison
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                GitHub stars and evidence count for top ranked skills.
              </p>
              <div className="mt-6">
                <CategorySkillsChart data={top10} />
              </div>
              {remaining > 0 && (
                <p className="mt-3 text-center text-xs text-zinc-600">
                  +{remaining} more not shown
                </p>
              )}
            </section>
          ) : null;
        })()}

        {/* Star growth over time */}
        {(() => {
          const LINE_COLORS = ["#818cf8", "#34d399", "#fbbf24", "#f472b6", "#38bdf8", "#a78bfa"];
          const lines = category.ranking
            .slice(0, 6)
            .map((item, i) => {
              const skill = item.skillSlug ? getSkill(item.skillSlug) : null;

              if (!skill?.metrics?.stars || skill.metrics.stars.length < 2) return null;
              return {
                name: item.contender,
                color: LINE_COLORS[i % LINE_COLORS.length],
                data: skill.metrics.stars,
              };
            })
            .filter((l): l is NonNullable<typeof l> => l !== null);

          return lines.length > 0 ? (
            <section className="border-t border-white/[0.06] py-12">
              <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
                Star growth over time
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                GitHub stars trajectory for top skills in this category.
              </p>
              <div className="mt-6">
                <MultiMetricsChart lines={lines} label="GitHub Stars" />
              </div>
            </section>
          ) : null;
        })()}

        {/* Head to head */}
        {category.headToHead.length > 0 ? (
          <section className="border-t border-white/[0.06] py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Head to head
            </p>
            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {category.headToHead.map((pair) => (
                <article key={`${pair.left}-${pair.right}`} className="rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{pair.left}</span>
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium text-zinc-500">vs</span>
                    <span className="text-sm font-semibold text-white">{pair.right}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {pair.gist}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* Public signals */}
        {category.liveSignals.length > 0 ? (
          <section className="border-t border-white/[0.06] py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Public signals
            </p>
            <div className="mt-6 space-y-3">
              {category.liveSignals.map((signal) => (
                <article key={signal.title} className="rounded-lg border border-white/[0.04] bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                      {signal.label}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-600">{signal.date}</span>
                  </div>
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[15px] font-medium text-zinc-200 transition-colors hover:text-white"
                  >
                    {signal.title}
                  </a>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
                    {signal.note}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* What changes this */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            What changes this
          </p>
          <div className="mt-5 space-y-3">
            {category.whatChangesThis.map((paragraph) => (
              <div key={paragraph} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500/40" />
                <p className="text-sm leading-6 text-zinc-400">{paragraph}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
