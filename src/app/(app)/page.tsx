import { DarkHero } from "@/components/dark-hero";
import { SkillCatalog } from "@/components/skill-catalog";
import { categoryList, skillList } from "@/lib/catalog";
import { computeTrustScore } from "@/lib/trust-score";

import type { SkillRowData } from "@/components/skill-row";

// Build a bestFor lookup: for each skill, find its top-ranked category entry
function getBestFor(skillSlug: string): string | undefined {
  for (const cat of categoryList) {
    const entry = cat.ranking.find((r) => r.skillSlug === skillSlug);
    if (entry) return entry.bestFor;
  }
  return undefined;
}

// Map all skills to SkillRowData for the catalog
const catalogSkills: SkillRowData[] = skillList.map((skill) => {
  return {
    slug: skill.slug,
    name: skill.name,
    repo: skill.repo,
    tags: skill.tags,
    relatedCategories: skill.relatedCategories,
    trustScore: computeTrustScore(skill),
    bestFor: getBestFor(skill.slug) ?? skill.summary,
  };
});

export default function Home() {
  return (
    <>
      <DarkHero />
      <SkillCatalog skills={catalogSkills} categories={categoryList.map((c) => ({ slug: c.slug, name: c.name }))} />
    </>
  );
}
