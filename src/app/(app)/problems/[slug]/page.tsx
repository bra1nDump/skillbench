import { notFound } from "next/navigation";
import { Fragment } from "react";

import { InlineMarkdown } from "@/components/bold-text";
import { DarkPageHeader } from "@/components/dark-page-header";
import { SkillRow } from "@/components/skill-row";
import { TrackProblemView } from "@/components/track-view";
import { categoryList, getCategory, getSkill } from "@/lib/catalog";
import { getScreenshotUrl } from "@/lib/screenshots";
import { computeTrustScore } from "@/lib/trust-score";

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
    title: `${category.name} — SkillPack`,
    description: category.deck,
  };
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  return (
      <>
      <TrackProblemView slug={category.slug} name={category.name} />
      <DarkPageHeader
        backLink={{ href: "/problems", label: "All problems" }}
        title={category.name}
        subtitle={category.deck}
        stats={[
          { label: "Ranked", value: String(category.ranking.length) },
          { label: "Signals", value: String(category.liveSignals.length) },
        ]}
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        {/* Ranking */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Current ranking
          </p>
          <div className="mt-6 space-y-3">
            {category.ranking.map((item, idx) => {
              const skill = item.skillSlug ? getSkill(item.skillSlug) : null;
              const prevItem = idx > 0 ? category.ranking[idx - 1] : null;
              const showCutLine = item.belowCutLine && !prevItem?.belowCutLine;

              // Build other category ranks for this skill
              const otherRanks = skill
                ? categoryList
                    .filter((c) => c.slug !== slug)
                    .map((c) => {
                      const entry = c.ranking.find((r) => r.skillSlug === skill.slug);
                      return entry ? { slug: c.slug, name: c.name, rank: Number(entry.rank) } : null;
                    })
                    .filter(Boolean) as { slug: string; name: string; rank: number }[]
                : [];

              return (
                <Fragment key={item.rank}>
                  {showCutLine ? (
                    <div className="flex items-center gap-3 py-2">
                      <div className="h-px flex-1 bg-amber-100" />
                      <span className="font-mono text-[12px] uppercase tracking-wider text-amber-600">
                        Below the cut line
                      </span>
                      <div className="h-px flex-1 bg-amber-100" />
                    </div>
                  ) : null}
                  {skill ? (
                    <SkillRow
                      variant="expanded"
                      skill={{
                        slug: skill.slug,
                        name: skill.name,
                        trustScore: computeTrustScore(skill),
                        bestFor: item.bestFor,
                        why: item.why,
                        rank: Number(item.rank),
                        belowCutLine: item.belowCutLine,
                        screenshotUrl: getScreenshotUrl(skill.slug),
                        categoryRanks: otherRanks,
                        summary: skill.summary,
                      }}
                    />
                  ) : (
                    <div className={`flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5${item.belowCutLine ? " opacity-50" : ""}`}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 font-mono text-lg font-bold text-gray-500">
                        {item.rank}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-base font-semibold text-gray-900">{item.contender}</span>
                        <p className="mt-1 text-[15px] text-gray-500">
                          <span className="font-medium">Best for:</span> {item.bestFor}
                        </p>
                        <p className="mt-1 text-[13px] leading-5 text-gray-500">{item.why}</p>
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </section>

        {/* How to start */}
        {category.howToStart && category.howToStart.length > 0 ? (
          <section className="border-t border-[var(--border)] py-14">
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
              How to start
            </p>
            <div className="mt-5 space-y-3">
              {category.howToStart.map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  <p className="text-[15px] leading-6 text-gray-500">
                    <InlineMarkdown text={step} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Head to head */}
        {category.headToHead.length > 0 ? (
          <section className="border-t border-[var(--border)] py-14">
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
              Head to head
            </p>
            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {category.headToHead.map((pair) => (
                <article key={`${pair.left}-${pair.right}`} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-semibold text-gray-900">{pair.left}</span>
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[12px] font-medium text-gray-500">vs</span>
                    <span className="text-[15px] font-semibold text-gray-900">{pair.right}</span>
                  </div>
                  <p className="mt-3 text-[15px] leading-6 text-gray-500">
                    {pair.gist}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* Public signals */}
        {category.liveSignals.length > 0 ? (
          <section className="border-t border-[var(--border)] py-14">
            <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
              Public signals
            </p>
            <div className="mt-6 space-y-3">
              {category.liveSignals.map((signal) => (
                <article key={signal.title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] uppercase tracking-wider text-gray-500">
                      {signal.label}
                    </span>
                    <span className="font-mono text-[12px] text-gray-500">{signal.date}</span>
                  </div>
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[15px] font-medium text-gray-800 transition-colors hover:text-gray-900"
                  >
                    {signal.title}
                  </a>
                  <p className="mt-2 max-w-3xl text-[15px] leading-6 text-gray-500">
                    {signal.note}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* What changes this */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            What changes this
          </p>
          <div className="mt-5 space-y-3">
            {category.whatChangesThis.map((paragraph) => (
              <div key={paragraph} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500/40" />
                <p className="text-[15px] leading-6 text-gray-500">{paragraph}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      </>
  );
}
