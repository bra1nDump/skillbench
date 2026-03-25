import { CopyButton } from "@/components/copy-button";
import { DarkPageHeader } from "@/components/dark-page-header";
import { SubscribeForm } from "@/components/subscribe-form";
import { TrackedChangelogLink } from "@/components/tracked-changelog-link";
import { UnsubscribeTrigger } from "@/components/unsubscribe-trigger";
import { getAllChanges } from "@/lib/changelog";

import type { ChangelogEntryType } from "@/lib/changelog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — SkillPack",
  description:
    "Major leaderboard shifts, new entries, and re-rankings in the agentic tools ecosystem.",
};

const TYPE_BADGES: Record<ChangelogEntryType, { label: string; color: string }> = {
  "ranking-change": { label: "Ranking", color: "border border-amber-500/30 text-amber-500" },
  "new-contender":  { label: "New", color: "border border-blue-500/30 text-blue-500" },
  "score-change":   { label: "Score", color: "border border-violet-500/30 text-violet-500" },
  "downgrade":      { label: "Downgrade", color: "border border-red-500/30 text-red-500" },
  "category-added": { label: "Category", color: "border border-emerald-500/30 text-emerald-500" },
  "system":         { label: "System", color: "border border-zinc-500/30 text-zinc-400" },
};

const AI_PROMPT = "Check the SkillPack changelog at skillpack.co/changelog and summarize what changed this week in the agentic tools ecosystem. Focus on: which solutions are trending, any new entries, and notable score changes.";

export default function ChangelogPage() {
  const changes = getAllChanges(30);

  return (
    <>
      <UnsubscribeTrigger />
      <DarkPageHeader
        title="Changelog"
        subtitle="Major leaderboard shifts, new entries, and re-rankings. We deep-research the internet so you don't have to."
        stats={[{ label: "Changes", value: String(changes.length) }]}
      />
      <main className="mx-auto w-full max-w-4xl px-6 py-10 sm:px-8">
        {/* Subscribe section */}
        <section className="rounded-lg border border-[var(--border)] bg-[var(--dark-bg)] p-6">
          <p className="text-[14px] font-bold text-white">
            Subscribe to leaderboard shifts
          </p>
          <p className="mt-1 text-[12px] text-[#737373]">
            Get notified when something major changes in a domain you care about.
          </p>
          <div className="mt-4">
            <SubscribeForm variant="dark" />
          </div>
        </section>

        {/* Changes timeline */}
        <section className="mt-10">
          <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--accent)]">
            Recent changes
          </p>
          <div className="mt-6 space-y-3">
            {changes.map((item, i) => {
              const badge = TYPE_BADGES[item.type];

              return (
                <div
                  key={`${item.slug ?? "sys"}-${item.type}-${i}`}
                  className="flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-hover)]"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {item.slug ? (
                        <TrackedChangelogLink
                          slug={item.slug}
                          type={item.type}
                          title={item.title}
                          className="text-[15px] font-semibold text-gray-900 transition-colors hover:text-[var(--accent)]"
                        >
                          {item.title}
                        </TrackedChangelogLink>
                      ) : (
                        <span className="text-[15px] font-semibold text-gray-900">
                          {item.title}
                        </span>
                      )}
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${badge.color}`}
                      >
                        {badge.label}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400">
                        {item.date}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] text-gray-500">{item.detail}</p>
                  </div>
                  {item.trustScore != null && (
                    <div className="shrink-0">
                      <span
                        className={`font-mono text-[13px] font-bold ${
                          item.trustScore >= 80
                            ? "text-emerald-500"
                            : item.trustScore >= 50
                              ? "text-amber-500"
                              : "text-red-400"
                        }`}
                      >
                        {item.trustScore}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {changes.length === 0 && (
            <p className="py-12 text-center text-[14px] text-gray-400">
              No recent changes detected. Check back after the next pipeline run.
            </p>
          )}
        </section>

        {/* AI prompt channel */}
        <section className="mt-10 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-[14px] font-bold text-gray-900">
            AI prompt channel
          </p>
          <p className="mt-1 text-[13px] text-gray-500">
            Send this prompt to ChatGPT, Claude, or any AI to get a summary of recent changes:
          </p>
          <div className="mt-4 flex items-start gap-3 rounded border border-[var(--border)] bg-gray-50 p-4">
            <p className="flex-1 font-mono text-[12px] leading-5 text-gray-700">
              {AI_PROMPT}
            </p>
            <CopyButton text={AI_PROMPT} trackAs="ai_prompt" />
          </div>
        </section>
      </main>
    </>
  );
}
