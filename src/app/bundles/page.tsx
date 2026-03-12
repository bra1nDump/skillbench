import { BundlesList } from "@/components/bundles-list";
import { SiteFooter } from "@/components/site-footer";
import { bundleList, getSkill } from "@/lib/catalog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Bundles — Skillbench",
  description:
    "Full setups and stacks from known builders and personas — see what the best people actually ship with.",
};

export default function BundlesIndexPage() {
  const items = bundleList.map((bundle) => ({
    slug: bundle.slug,
    name: bundle.name,
    persona: bundle.persona,
    personaHandle: bundle.personaHandle,
    summary: bundle.summary,
    date: bundle.date,
    source: bundle.source,
    skills: bundle.skills
      .map((s) => getSkill(s))
      .filter(Boolean)
      .map((s) => ({ slug: s!.slug, name: s!.name })),
  }));

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bundles
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Full setups from known builders. What do the people actually shipping
            with agents use day to day? {bundleList.length} stacks tracked.
          </p>
        </div>

        <BundlesList bundles={items} />
      </main>

      <SiteFooter />
    </div>
  );
}
