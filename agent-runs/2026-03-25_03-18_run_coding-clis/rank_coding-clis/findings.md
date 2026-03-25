# Rank Findings

## Scope
Convert the Discover + Deep-Dive signal into a ranked recommendation for the coding-clis problem so buyers know which terminal-native coding agents to reach for and when to consider emerging harness layers.

## Date
2026-03-25T04:20:00Z

## Inputs
- `agent-runs/2026-03-25_03-18_run_coding-clis/discover_coding-clis/findings.md`
- `agent-runs/2026-03-25_03-18_run_coding-clis/deep-dive_coding-clis/findings.md`
- Claude Code overview docs (2026-03-25) — https://code.claude.com/docs/en/overview
- Claude Code vs Codex CLI head-to-head (Matt Wigdahl Substack, 2025-10-03) — https://mattwigdahl.substack.com/p/claude-code-vs-codex-cli-head-to
- Nilenso prompt audit for Claude Code, Codex CLI, Gemini CLI (2026-02-12) — https://blog.nilenso.com/blog/2026/02/12/codex-cli-vs-claude-code-on-autonomy/
- Capy “Best AI Coding Agents in 2026” article (2026-03-10) — https://www.capy.ai/articles/best-ai-coding-agents-2026
- Terminal Use Launch HN thread (2026-03-23, 115 pts / 73 comments) — https://news.ycombinator.com/item?id=47311657
- Spettro GitHub repository (latest commit 2026-03-19) — https://github.com/cesp99/spettro
- OpenACP CLI v0.5.0 tweet (2026-03-22) — https://twitter.com/openacp/status/2035766286530335185

## Findings
**Final Ranking — Coding CLIs problem**
1. **Claude Code** — Stays #1 because it is the only CLI that is simultaneously multi-surface (terminal, IDE, desktop, web), safe-by-default (“AskUserQuestion” gate in Nilenso’s prompt audit), and still the fastest to a correct React implementation in the October hands-on comparison. The combination of verifiable first-pass quality, portable sessions, and official enterprise tooling is the clearest fit for buyers who want broad trust plus integrated workflows.
2. **Codex CLI** — Holds #2 thanks to the same experiment showing it can brute-force stubborn UI bugs when asked, plus the Nilenso prompt proving it is engineered to “persist until the query is completely resolved.” That unstoppable execution is ideal for senior operators who just need the agent to keep going, but the extra iterations and alignment hiccups keep it behind Claude for most teams.
3. **Gemini CLI** — Remains the best fit when teams need to toggle autonomy (interactive vs non-interactive modes) and maximize free-tier experimentation. Nilenso’s prompt breakdown plus the February debate video both show Gemini reliably switching between “ask before acting” and “run unattended,” which maps to product squads that want explicit control over agent risk.

**Below the cut (watch / niche fits)**
- **Terminal Use** — High-signal Launch HN proof that teams want a “Vercel for filesystem-based agents.” It is not a coding CLI itself, so it sits off the main podium, but its persistent sandboxes plus CLI deployment flow make it the first credible harness to track for bundled solutions.
- **Spettro** — Active open-source terminal agent (Go, multi-provider manifests, `/approve` and `/resume` flow) with March commits, yet almost no external adoption (3 GitHub stars, no third-party coverage). Needs independent case studies before it displaces a top-three slot.
- **OpenACP CLI** — March 22 v0.5.0 release shows messaging-to-CLI orchestration (Telegram/Discord session control, 28+ agents) but the only visible evidence is a single low-engagement tweet. Keep it on the harness watchlist until we see live teams using it.

**Pairwise takeaways**
- Claude vs Codex: The Substack head-to-head plus Nilenso prompt diff corroborate the trust vs throughput split—Claude finishes faster with fewer surprises, Codex keeps grinding until forced to stop.
- Codex vs Gemini: Codex is the “never stop” option, Gemini is the “let me choose autonomy level” option; this is why Gemini holds the budget/toggle niche even though Codex often executes faster once you green-light it.
- Signal shift: Capy’s March thesis (parallelism, environment isolation, workflow integration) validates adding harnesses (Terminal Use, OpenACP) into the watchlist even if they do not yet outrank the core CLIs.

## Quotes
- “Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools.” — Anthropic docs, 2026-03-25.
- “Codex… asked whether I wanted the change… I finally asked it to use Playwright… and the fourth time it finally fixed the scrollbar.” — Matt Wigdahl Substack, 2025-10-03.
- “In 2026, the real differentiators are parallelism, autonomy, environment isolation, model flexibility, and workflow integration.” — Capy article, 2026-03-10.

## Recommended Next Step
- Ask the catalog update agent to keep Claude/Codex/Gemini in that order, append the rationale above, and open a dedicated harness lane so Terminal Use and OpenACP can be tracked without diluting the core coding-clis podium.

## What Would Change This Ranking
- Independent benchmarks where Codex or Gemini demonstrably beat Claude Code on first-pass correctness with comparable oversight safeguards.
- Public case studies (or ≥10k-user traction) showing Terminal Use or OpenACP running production coding squads, proving the harness layer deserves promotion into the main ranking.
- Community adoption metrics (stars, forks, third-party walk-throughs) for Spettro or other open-source CLIs that confirm they can match the robustness of the vendor tools.
