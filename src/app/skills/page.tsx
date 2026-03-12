import { SiteFooter } from "@/components/site-footer";
import { SkillsList } from "@/components/skills-list";
import { categoryList, skillList } from "@/lib/catalog";
import { getScreenshotUrl } from "@/lib/screenshots";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Skills — Skillbench",
  description:
    "Browse all tracked agent skills with editorial verdicts, source links, and related categories.",
};

export default function SkillsIndexPage() {
  const items = skillList.map((skill) => ({
    slug: skill.slug,
    name: skill.name,
    repo: skill.repo,
    status: skill.status,
    official: skill.official,
    githubStars: skill.githubStars,
    evidenceCount: skill.evidence.length,
    verdict: skill.verdict,
    screenshotUrl: getScreenshotUrl(skill.slug),
    categories: categoryList
      .filter((j) => skill.relatedCategories.includes(j.slug))
      .map((j) => ({ slug: j.slug, name: j.name })),
  }));

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            All Skills
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            {skillList.length} skills tracked across {categoryList.length} categories.
            Each with an editorial verdict, source links, and evidence.
          </p>
        </div>

        <SkillsList skills={items} />
      </main>

      <SiteFooter />
    </div>
  );
}
