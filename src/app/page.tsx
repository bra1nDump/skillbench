import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { jobList } from "@/lib/catalog";
import { mission } from "@/lib/site-data";

const pipeline = [
  {
    name: "Discover",
    summary:
      "Search the last 7 to 30 days across official launches, major registries, X, Reddit, Hacker News, and explicit pairwise language like 'vs', 'replaced', or 'better than'.",
    href: "/docs/agents",
  },
  {
    name: "Deep-dive",
    summary:
      "Pull the strongest trust-building sources, quotes, screenshots, and workflow-shape differences. The goal is proof, not volume.",
    href: "/docs/agents",
  },
  {
    name: "Rank",
    summary:
      "Turn the evidence into a job-level recommendation. Weight workflow fit, public trust, official support, and demonstrability above raw chatter.",
    href: "/docs/agents",
  },
  {
    name: "QA",
    summary:
      "Fail the build on broken links, dead assets, and stale citations. Browser spot-check anything that is bot-blocked or visually suspicious.",
    href: "/docs/qa",
  },
];

const latestRuns = [
  {
    name: "Discover",
    summary:
      "Mapped the live contenders and the strongest recent public signals for product/business development, software factories, and UX/UI.",
    href: "/runs/2026-03-09_05-40_discover_core-jobs",
  },
  {
    name: "Rank",
    summary:
      "Turned the evidence into concrete rankings for the three live jobs, including native-tool and loop-pattern subcases.",
    href: "/runs/2026-03-09_05-57_rank_core-jobs",
  },
  {
    name: "Evidence capture",
    summary:
      "Validated new screenshots for Google Workspace MCP, Firecrawl, OpenHands, SWE-agent, Figma MCP, Figma-use, and Vibma.",
    href: "/runs/2026-03-09_12-55_evidence-capture_core-jobs",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="border-b border-black/5 pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            Skillbench
          </p>
          <h1 className="mt-8 max-w-5xl text-4xl font-semibold tracking-[-0.06em] text-balance text-zinc-950 sm:text-6xl">
            Find the actual meta for agent skills before it gets stale.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            {mission}
          </p>
        </div>

        <section className="border-b border-black/5 py-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Core jobs
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                These are the job surfaces that are live right now. Each one is meant to answer a
                narrow question fast, then back it up with visible public proof.
              </p>
            </div>
            <div className="hidden max-w-sm text-sm leading-7 text-zinc-600 lg:block">
              Demonstrable outputs over generic capability claims. Public trust over registry
              volume. Pairwise comparisons over isolated praise.
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {jobList.map((job) => (
              <article key={job.slug} className="border border-black/10 px-6 py-6">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950">
                  {job.name}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-700">{job.deck}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                  Current top pick
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-950">
                  {job.ranking[0]?.contender}
                </p>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="mt-6 inline-block text-sm font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                >
                  Open report →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-14 border-b border-black/5 py-16 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Pipeline
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {pipeline.map((step) => (
                <article key={step.name} className="border-t border-black/5 pt-4">
                  <p className="text-base font-semibold tracking-[-0.02em] text-zinc-950">
                    {step.name}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-700">{step.summary}</p>
                  <Link
                    href={step.href}
                    className="mt-4 inline-block text-sm font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                  >
                    Open prompt →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              What we optimize for
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700">
              <p>Demonstrable outputs over generic capability claims.</p>
              <p>Public trust over registry volume.</p>
              <p>Pairwise comparisons over isolated praise.</p>
              <p>Workflow shape over fake universal scores.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 py-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            Latest research artifacts
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            {latestRuns.map((run) => (
              <article key={run.name} className="border-t border-black/5 pt-4">
                <p className="text-sm font-semibold text-zinc-950">{run.name}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {run.summary}
                </p>
                <Link
                  href={run.href}
                  className="mt-4 inline-block text-sm font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
                >
                  Open run →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Current surface
            </p>
            <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700">
              <p>Product / Business Development</p>
              <p>Teams of Agents / Software Factory / Ralph Loop</p>
              <p>UX / UI</p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Process docs
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-700">
              <p>
                Agent prompts live in{" "}
                <Link
                  href="/docs/agents"
                  className="underline decoration-black/20 underline-offset-4"
                >
                  agents.md
                </Link>
                .
              </p>
              <p>
                Run structure lives in{" "}
                <Link
                  href="/runs/agents.md"
                  className="underline decoration-black/20 underline-offset-4"
                >
                  agent-runs/agents.md
                </Link>
                .
              </p>
              <p>
                QA agent prompt lives in{" "}
                <Link
                  href="/docs/qa"
                  className="underline decoration-black/20 underline-offset-4"
                >
                  qa.md
                </Link>
                .
              </p>
              <p>
                The site should increasingly feel like a buyer&apos;s guide with
                receipts, not a theme-heavy directory.
              </p>
              <p>
                Design-system preview lives on{" "}
                <Link
                  href="/storyboard"
                  className="underline decoration-black/20 underline-offset-4"
                >
                  Storyboard
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
