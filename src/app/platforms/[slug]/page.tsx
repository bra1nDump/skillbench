import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { categoryList, getPlatform, getSkill, platformList } from "@/lib/catalog";

import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return platformList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);

  if (!platform) return {};
  return {
    title: `${platform.name} — Skillbench`,
    description: platform.summary,
  };
}

export default async function PlatformPage({ params }: PageProps) {
  const { slug } = await params;
  const platform = getPlatform(slug);

  if (!platform) {
    notFound();
  }

  const relatedCategories = categoryList.filter((j) => platform.relatedCategories.includes(j.slug));
  const relatedSkills = platform.relatedSkills
    .map((s) => getSkill(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <Link href="/platforms" className="mb-4 inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            ← All platforms
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {platform.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
            {platform.summary}
          </p>
        </div>

        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Native agent support
          </p>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-zinc-300">
            {platform.nativeSupport}
          </p>
        </section>

        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Skills on this platform
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSkills.map((skill) => {
              if (!skill) return null;
              return (
                <Link
                  key={skill.slug}
                  href={`/skills/${skill.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-indigo-500/20 hover:bg-[var(--surface-2)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-white transition-colors group-hover:text-indigo-400">{skill.name}</p>
                    <span
                      className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                        skill.status === "active"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {skill.status}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500">
                    {skill.verdict}
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-zinc-600">
                    {skill.official ? "Official" : "Community"} · {skill.repo}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Related categories
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5 transition-all hover:border-indigo-500/20 hover:bg-[var(--surface-2)]"
              >
                <p className="text-base font-semibold text-white">{category.name}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
                  {category.deck}
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
