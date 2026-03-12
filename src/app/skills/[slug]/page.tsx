import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SkillMetricsChart } from "@/components/charts/metrics-chart";
import { ReadmePeek } from "@/components/readme-peek";
import { SiteFooter } from "@/components/site-footer";
import { bundleList, categoryList, getSkill, skillList } from "@/lib/catalog";
import { fetchGitHubReadme } from "@/lib/github-readme";
import { getScreenshotUrl } from "@/lib/screenshots";

import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return skillList.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) return {};
  return {
    title: `${skill.name} — Skillbench`,
    description: skill.summary,
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkill(slug);

  if (!skill) {
    notFound();
  }

  const [owner, repo] = skill.repo.split("/");
  const readme = await fetchGitHubReadme({
    owner,
    repo,
    branch: skill.readmeBranch,
  });

  const relatedCategories = categoryList.filter((category) => skill.relatedCategories.includes(category.slug));
  const relatedBundles = bundleList.filter((b) => b.skills.includes(skill.slug));

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        {/* Header */}
        <div className="pb-10">
          <Link href="/skills" className="mb-4 inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            ← All skills
          </Link>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  {skill.name}
                </h1>
                <span
                  className={`rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                    skill.status === "active"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {skill.status}
                </span>
              </div>
              <p className="mt-4 text-base leading-7 text-zinc-400">{skill.summary}</p>
            </div>
            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 lg:flex-shrink-0">
              {skill.githubStars ? (
                <div className="rounded-lg border border-white/[0.06] bg-[var(--surface)] px-4 py-3 text-center">
                  <p className="text-lg font-bold text-white">{skill.githubStars}</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Stars</p>
                </div>
              ) : null}
              <div className="rounded-lg border border-white/[0.06] bg-[var(--surface)] px-4 py-3 text-center">
                <p className="text-lg font-bold text-white">{skill.evidence.length}</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Evidence</p>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-[var(--surface)] px-4 py-3 text-center">
                <p className="text-lg font-bold text-white">{skill.official ? "Yes" : "No"}</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Official</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product screenshot */}
        {(() => {
          const screenshotUrl = getScreenshotUrl(skill.slug);

          return screenshotUrl ? (
            <section className="border-t border-white/[0.06] py-12">
              <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
                Product screenshot
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.06]">
                <Image
                  src={screenshotUrl}
                  alt={`${skill.name} in action`}
                  width={1280}
                  height={800}
                  className="w-full"
                />
              </div>
            </section>
          ) : null;
        })()
        }

        {/* Verdict + source */}
        <section className="grid gap-8 border-t border-white/[0.06] py-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Editorial verdict
            </p>
            <p className="mt-5 text-[15px] leading-7 text-zinc-300">{skill.verdict}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Source
            </p>
            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <p>
                GitHub:{" "}
                <a href={skill.repoUrl} target="_blank" rel="noreferrer" className="text-zinc-200 transition-colors hover:text-indigo-400">
                  {skill.repo}
                </a>
              </p>
              {skill.docsUrl ? (
                <p>
                  Docs:{" "}
                  <a href={skill.docsUrl} target="_blank" rel="noreferrer" className="text-zinc-200 transition-colors hover:text-indigo-400">
                    {new URL(skill.docsUrl).hostname}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </section>

        {/* Evidence */}
        {skill.evidence.length > 0 ? (
          <section className="border-t border-white/[0.06] py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Public evidence
            </p>
            <div className="mt-6 space-y-3">
              {skill.evidence.map((item) => (
                <article key={item.url} className="rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                        item.quality === "strong"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-amber-500/15 text-amber-400"
                      }`}
                    >
                      {item.quality}
                    </span>
                    {item.selfReported ? (
                      <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                        Self-reported
                      </span>
                    ) : null}
                    <span className="font-mono text-[10px] text-zinc-600">
                      {item.date}
                    </span>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-zinc-200 transition-colors hover:text-white"
                  >
                    {item.title}
                  </a>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.gist}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] text-zinc-600">
                    <span>{item.engagement}</span>
                    <span>{item.who}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* Growth metrics */}
        {skill.metrics?.stars && skill.metrics.stars.length >= 2 && (
          <section className="border-t border-white/[0.06] py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Growth
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              GitHub stars over time.
            </p>
            <div className="mt-6">
              <SkillMetricsChart data={skill.metrics.stars} label="GitHub Stars" />
            </div>
          </section>
        )}

        {/* Strengths / Weaknesses */}
        <section className="grid gap-8 border-t border-white/[0.06] py-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Where it wins
            </p>
            <div className="mt-5 space-y-2">
              {skill.strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500/60" />
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
              Where to be skeptical
            </p>
            <div className="mt-5 space-y-2">
              {skill.weaknesses.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500/60" />
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related categories */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Ranking in categories
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedCategories.map((category) => {
              const entry = category.ranking.find((r) => r.skillSlug === skill.slug);

              return (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-indigo-500/20 hover:bg-[var(--surface-2)]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {category.name}
                  </p>
                  {entry ? (
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-mono text-2xl font-bold text-white">
                        #{entry.rank}
                      </span>
                      <span className="text-sm text-zinc-500">
                        of {category.ranking.length}
                      </span>
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-zinc-500">Related but not ranked</p>
                  )}
                  {entry ? (
                    <p className="mt-1 text-xs text-zinc-500">{entry.bestFor}</p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bundles */}
        {relatedBundles.length > 0 ? (
          <section className="border-t border-white/[0.06] py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Featured in bundles
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedBundles.map((bundle) => (
                <Link
                  key={bundle.slug}
                  href={`/bundles/${bundle.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-white/[0.12] hover:bg-[var(--surface-2)]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {bundle.persona}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {bundle.name}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {bundle.skills.length} skills · {bundle.date}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* README */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Raw GitHub source
          </p>
          <div className="mt-6">
            {readme ? (
              <ReadmePeek source={readme.source} githubUrl={readme.githubUrl} />
            ) : (
              <p className="text-sm text-zinc-500">
                GitHub README could not be fetched right now.
              </p>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
