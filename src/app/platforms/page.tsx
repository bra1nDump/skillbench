import { PlatformsList } from "@/components/platforms-list";
import { SiteFooter } from "@/components/site-footer";
import { categoryList, getSkill, platformList } from "@/lib/catalog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Platforms — Skillbench",
  description:
    "Browse platforms that agent skills build on top of — Figma, Google Workspace, browsers, terminals, and more.",
};

export default function PlatformsIndexPage() {
  const items = platformList.map((platform) => ({
    slug: platform.slug,
    name: platform.name,
    summary: platform.summary,
    categories: categoryList
      .filter((j) => platform.relatedCategories.includes(j.slug))
      .map((j) => ({ slug: j.slug, name: j.name })),
    skillCount: platform.relatedSkills
      .map((s) => getSkill(s))
      .filter(Boolean).length,
  }));

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Platforms
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-6 text-gray-500">
            {platformList.length} platforms tracked. A platform is the underlying product or
            environment that skills build on top of.
          </p>
        </div>

        <PlatformsList platforms={items} />
      </main>

      <SiteFooter />
    </div>
  );
}
