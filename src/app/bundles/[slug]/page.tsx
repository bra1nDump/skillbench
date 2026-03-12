import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { bundleList, getBundle, getSkill } from "@/lib/catalog";

import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return bundleList.map((bundle) => ({ slug: bundle.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bundle = getBundle(slug);

  if (!bundle) return {};
  return {
    title: `${bundle.name} — Skillbench`,
    description: bundle.summary,
  };
}

export default async function BundlePage({ params }: PageProps) {
  const { slug } = await params;
  const bundle = getBundle(slug);

  if (!bundle) {
    notFound();
  }

  const skills = bundle.skills.map((s) => getSkill(s)).filter(Boolean);

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <Link href="/bundles" className="mb-4 inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            ← All bundles
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {bundle.name}
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-400">{bundle.summary}</p>
        </div>

        {/* Persona */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Persona
          </p>
          <div className="mt-4">
            <span className="text-base font-semibold text-white">{bundle.persona}</span>{" "}
            <a
              href={bundle.personaUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              {bundle.personaHandle}
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Skills in this bundle
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) =>
              skill ? (
                <Link
                  key={skill.slug}
                  href={`/skills/${skill.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-indigo-500/20 hover:bg-[var(--surface-2)]"
                >
                  <p className="text-sm font-semibold text-white transition-colors group-hover:text-indigo-400">
                    {skill.name}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500">
                    {skill.summary}
                  </p>
                  {skill.githubStars ? (
                    <p className="mt-2 font-mono text-[10px] text-zinc-600">
                      ★ {skill.githubStars}
                    </p>
                  ) : null}
                </Link>
              ) : null,
            )}
          </div>
        </section>

        {/* Source */}
        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Source
          </p>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>{bundle.source}</p>
            <a
              href={bundle.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              View source →
            </a>
            <p className="font-mono text-[10px] text-zinc-600">
              Last verified: {bundle.date}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
