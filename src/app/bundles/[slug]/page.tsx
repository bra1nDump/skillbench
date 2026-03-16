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
          <Link href="/bundles" className="mb-4 inline-flex items-center gap-1 text-[13px] text-gray-500 transition-colors hover:text-gray-700">
            ← All bundles
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {bundle.name}
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-500">{bundle.summary}</p>
        </div>

        {/* Persona */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Persona
          </p>
          <div className="mt-4">
            <span className="text-base font-semibold text-gray-900">{bundle.persona}</span>{" "}
            <a
              href={bundle.personaUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[15px] text-[var(--accent)] transition-colors hover:text-[var(--accent)]"
            >
              {bundle.personaHandle}
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Skills in this bundle
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) =>
              skill ? (
                <Link
                  key={skill.slug}
                  href={`/skills/${skill.slug}`}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--accent)]/20 hover:bg-[var(--surface-2)]"
                >
                  <p className="text-[15px] font-semibold text-gray-900 transition-colors group-hover:text-[var(--accent)]">
                    {skill.name}
                  </p>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-gray-500">
                    {skill.summary}
                  </p>
                  {skill.githubStars ? (
                    <p className="mt-2 font-mono text-[12px] text-gray-500">
                      ★ {skill.githubStars}
                    </p>
                  ) : null}
                </Link>
              ) : null,
            )}
          </div>
        </section>

        {/* Source */}
        <section className="border-t border-[var(--border)] py-14">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Source
          </p>
          <div className="mt-4 space-y-3 text-[15px] text-gray-500">
            <p>{bundle.source}</p>
            <a
              href={bundle.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[15px] font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent)]"
            >
              View source →
            </a>
            <p className="font-mono text-[12px] text-gray-500">
              Last verified: {bundle.date}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
