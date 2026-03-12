import { SiteFooter } from "@/components/site-footer";

export default function StoryboardPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8">
        <div className="pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Storyboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            A preview page for the current Skillbench visual system:
            typography, tables, quote blocks, screenshots, and metadata.
          </p>
        </div>

        <section className="grid gap-14 border-t border-white/[0.06] py-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Type scale
            </p>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">
              Premium, spare, and technical.
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Skillbench should read like a buyer&apos;s guide written by a
              technically opinionated team, not a component marketplace or a
              landing-page generator.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
              Quote style
            </p>
            <blockquote className="mt-5 border-l-2 border-indigo-500/30 pl-5 text-sm leading-7">
              <p className="text-zinc-200">
                &ldquo;The revision is a massive improvement.&rdquo;
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Gemini review of the multi-page screenshot pass
              </p>
            </blockquote>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Table style
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-[var(--surface)]">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.04] text-[10px] uppercase tracking-wider text-zinc-500">
                  <th className="px-5 py-3 font-medium">Rank</th>
                  <th className="px-5 py-3 font-medium">Contender</th>
                  <th className="px-5 py-3 font-medium">Trust note</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.04] align-top">
                  <td className="px-5 py-4 font-mono text-sm text-zinc-500">01</td>
                  <td className="px-5 py-4 text-sm font-semibold text-white">
                    Figma MCP + Codex
                  </td>
                  <td className="px-5 py-4 text-sm leading-6 text-zinc-400">
                    Official Figma and OpenAI backing with the strongest public roundtrip story.
                  </td>
                  <td className="px-5 py-4 text-sm text-zinc-500">Leader</td>
                </tr>
                <tr className="align-top">
                  <td className="px-5 py-4 font-mono text-sm text-zinc-500">WIP</td>
                  <td className="px-5 py-4 text-sm font-semibold text-white">
                    Storyboard / component preview
                  </td>
                  <td className="px-5 py-4 text-sm leading-6 text-zinc-400">
                    Internal page for checking layout rhythm across the product.
                  </td>
                  <td className="px-5 py-4 text-sm text-zinc-500">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            Screenshot style
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            No screenshots available yet. When real product screenshots are captured,
            they should show the tool actually in use — terminal output, running UI,
            real workflow output. Not repo pages, HN threads, or marketing homepages.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
