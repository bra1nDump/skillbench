import { DarkHero } from "@/components/dark-hero";
import { SkillCatalog } from "@/components/skill-catalog";
import { categoryList, skillList } from "@/lib/catalog";
import { computeTrustScore } from "@/lib/trust-score";

import type { CategoryRank, SkillRowData } from "@/components/skill-row";

// Build a bestFor lookup: for each skill, find its top-ranked category entry
function getBestFor(skillSlug: string): string | undefined {
  for (const cat of categoryList) {
    const entry = cat.ranking.find((r) => r.skillSlug === skillSlug);

    if (entry) return entry.bestFor;
  }
  return undefined;
}

// Build category rank lookup: for each skill, find all its ranked positions
function getCategoryRanks(skillSlug: string): CategoryRank[] {
  const ranks: CategoryRank[] = [];

  for (const cat of categoryList) {
    const entry = cat.ranking.find((r) => r.skillSlug === skillSlug);

    if (entry) {
      const num = Number(entry.rank);

      ranks.push({ slug: cat.slug, name: cat.name, rank: isNaN(num) ? 0 : num });
    }
  }
  return ranks.sort((a, b) => a.rank - b.rank);
}

// Map all skills to SkillRowData for the catalog
const catalogSkills: SkillRowData[] = skillList.map((skill) => {
  return {
    slug: skill.slug,
    name: skill.name,
    repo: skill.repo,
    tags: skill.tags,
    relatedCategories: skill.relatedCategories,
    categoryRanks: getCategoryRanks(skill.slug),
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
