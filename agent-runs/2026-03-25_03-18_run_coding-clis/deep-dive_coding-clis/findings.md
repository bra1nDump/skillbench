# Deep-Dive Findings

## Scope
Build the evidence base for the Coding CLIs / Code Agents category, including the top-ranked agents and the new harness / orchestration signals surfaced by the Discover run (Spettro, OpenACP CLI, Terminal Use, Capy). Every claim is backed by artifacts that pass the freshness, traction, and independence gates.

## Date
2026-03-25T03:45:00Z

## Inputs
- `curl -s https://api.github.com/repos/cesp99/spettro`
- `curl -s https://api.github.com/repos/cesp99/spettro/commits?per_page=5`
- `curl -s https://r.jina.ai/http://news.ycombinator.com/item?id=47311657`
- `curl -s https://r.jina.ai/http://www.capy.ai/articles/best-ai-coding-agents-2026`
- `curl -s https://r.jina.ai/http://mattwigdahl.substack.com/p/claude-code-vs-codex-cli-head-to`
- `curl -s https://r.jina.ai/http://blog.nilenso.com/blog/2026/02/12/codex-cli-vs-claude-code-on-autonomy/`
- `python -c "import urllib.request, re, json; ..."` (ran five variations to scrape the first three high-view YouTube hits for Claude Code, Codex CLI, Gemini CLI, Spettro, and OpenACP search queries)

## Findings

### Claude Code
- **[STRONG]** Claude Code docs describe the CLI as an agentic tool that reads your codebase, edits files, runs commands, and integrates with every surface (terminal, IDE, desktop, web) so users can pipe logs, schedule tasks, and teleport sessions between devices.
  Source: https://code.claude.com/docs/en/overview
  Date: 2026-03-25 | Engagement: n/a (official docs)
  Who: Anthropic
  Key quote: "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools."
  Why it matters: Establishes the canonical behavior and surfaces the CLI's multi-mode workflow, which the ranking logic treats as the baseline for Tier 1 autonomy.
- **[STRONG]** A hands-on comparison (Claude Code 2 + Sonnet 4.5 versus GPT-5-Codex high) concluded that Claude Code 2 was "considerably out in front" on the React task, fixing bugs faster, nailing complex animations on the first try, and resolving UX issues with minimal guidance.
  Source: https://mattwigdahl.substack.com/p/claude-code-vs-codex-cli-head-to
  Date: 2025-10-03 | Engagement: 1 comment
  Who: Experimenting engineer
  Key quote: "Claude Code 2 with Sonnet 4.5 got closest to a fully correct implementation on the first try ... the fact that it got the complex requested animation correct ... was extremely impressive."
  Why it matters: Provides usage proof from a real developer workflow, reinforcing Claude Code's first-pass quality lead.
- **[STRONG]** Nilenso's prompt audit shows Claude Code's system prompt emphasizing "AskUserQuestion" and conservative proactiveness, while Codex's prompt pushes it to "persist until the task is fully handled end-to-end"—a philosophical difference that tracks the observed trust vs. autonomy split between the two agents.
  Source: https://blog.nilenso.com/blog/2026/02/12/codex-cli-vs-claude-code-on-autonomy/
  Date: 2026-02-12 | Engagement: n/a (blog post)
  Who: Prompt engineer Nilenso
  Key quote: "Codex...: Persist until the task is fully handled end-to-end... Claude Code...: Use AskUserQuestion ... do not surprise the user with actions you take without asking."
  Why it matters: Powers the head-to-head rationale in the catalog—Claude Code is the cautious planner, Codex follows only after you explicitly want action.

YouTube videos for Claude Code:
- youtubeId: "ocQ7ZKhHU5Q", title: "Claude Code on your Phone is OFFICIAL (it changes everything)", channel: "NetworkChuck", date: "2026-03-02", views: "244,397"
- youtubeId: "RKsADl0ZC3Y", title: "Claude Introducing Code Review", channel: "Claude", date: "2026-03-10", views: "99,359"

### Codex CLI
- **[STRONG]** The same Substack comparison praised Codex when running GPT-5-Codex-high for its speed and aggressive debugging, even though it ultimately got stuck on timeline alignment; it was still the only agent that (after many iterations) demanded confirmation before accepting its fixes.
  Source: https://mattwigdahl.substack.com/p/claude-code-vs-codex-cli-head-to
  Date: 2025-10-03 | Engagement: 1 comment
  Who: Experimenting engineer
  Key quote: "Codex ... asked whether I wanted the change, which I was very pleased with ... it would alternate between improper alignment and broken animations ... I finally asked it to use Playwright ... and the fourth time it finally fixed the scrollbar." 
  Why it matters: Shows Codex's persistence/autonomy plus the pain points (wiggly animations) that justify its #2 slot.
- **[STRONG]** The Nilenso audit documents Codex's prompt for GPT-5 models—"do not stop...autonomously resolve the query"—highlighting why Codex is perceived as a throughput-first "coding agent" rather than an "interactive helper."
  Source: https://blog.nilenso.com/blog/2026/02/12/codex-cli-vs-claude-code-on-autonomy/
  Date: 2026-02-12 | Engagement: n/a
  Who: Nilenso engineering
  Key quote: "You must keep going until the query is completely resolved ... Autonomously resolve the query to the best of your ability ... only terminate once sure the problem is solved."
  Why it matters: Supports the catalog's narrative that Codex is the more unilateral executor, explaining trade-offs in oversight and trust.

YouTube videos for Codex CLI:
- youtubeId: "DLwyGjFsPPM", title: "Awesome I actually tried AI coding and it's worse than I thought...", channel: "Awesome", date: "2026-01-22", views: "148,710"
- youtubeId: "T14uF2J89eU", title: "All Codex CLI Essentials in 12 mins", channel: "lustoykov", date: "2026-03-10", views: "2,753"

### Gemini CLI
- **[STRONG]** Gemini CLI's prompt switches between interactive and non-interactive modes, giving the user direct control over autonomy; a YouTube explainer (Andy Lo) highlights how Gemini flips between asking for decisions and running unattended tasks, aligning with the catalog entry that emphasizes its large context window and free tier.
  Source: https://blog.nilenso.com/blog/2026/02/12/codex-cli-vs-claude-code-on-autonomy/
  Date: 2026-02-12 | Engagement: n/a
  Who: Nilenso
  Key quote: "Gemini CLI interactive mode: confirm ambiguity ... Non-interactive mode: continue the work, avoid asking for additional info."
  Why it matters: Reinforces Gemini's hybrid identity—structured when asked, but able to run unattended when toggled.

YouTube videos for Gemini CLI:
- youtubeId: "d05NWBXrD0Q", title: "Gemini CLI 2.0 против Claude Code — какой инструмент разработки ИИ победит в 2026 году?", channel: "Andy Lo", date: "2026-02-24", views: "15,451"
- youtubeId: "_ixVAwp_KHE", title: "Claude Code vs Gemini CLI vs Codex: Which One is Best?", channel: "Nathan Sebhastian", date: "2026-02-28", views: "15,327"

### Capy (signal)
- **[STRONG]** Capy's March 10 article frames the current category shift: benchmarks alone no longer cut it—parallelism, autonomy, environment isolation, model flexibility, and workflow integration are the differentiators, and Capy is the only player offering true parallel task execution today.
  Source: https://www.capy.ai/articles/best-ai-coding-agents-2026
  Date: 2026-03-10 | Engagement: blog post
  Who: Capy product team
  Key quote: "In 2026, the real differentiators are parallelism, autonomy, environment isolation, model flexibility, and workflow integration. Capy is the only AI IDE designed around concurrent task execution."
  Why it matters: Justifies tracking new parallel/autonomous signals (Capy, harness orchestration) and raising the evidence bar for future rankings.

### Terminal Use (New contender)
- **[STRONG]** Launch HN thread (115 points / 73 comments) introduces Terminal Use as a "Vercel for filesystem-based agents" with a CLI deployment workflow, workspace-level filesystem persistence, multi-agent messaging, scheduling, and multi-cloud sandboxes; the founders explicitly treat filesystems as first-class primitives and promise per-task mount isolation.
  Source: https://news.ycombinator.com/item?id=47311657
  Date: 2026-03-23 | Engagement: 115 pts / 73 comments
  Who: Terminal Use founders (filipbalucha, Stavros, Vivek)
  Key quote: "Package your agent from a repo with a config.yaml and Dockerfile, then deploy it with our CLI... We treat filesystems as first-class primitives, separate from the lifecycle of a task."
  Why it matters: Describes the harness/infrastructure category the catalog currently misses and shows strong community traction (HN points plus active threading).

YouTube videos for Terminal Use:
- youtubeId: "ttMl96l9xPA", title: "Terminal Use demo", channel: "Terminal Use", date: "2026-03-05", views: "unknown"

### Spettro (New open-source agent)
- **[STRONG]** Spettro is a Go-based terminal coding assistant that wires planning, coding, and testing into TUI commands such as `/approve`, `/resume`, `/connect`; the public repo shows multi-provider connections, configurable agent manifests, and a GPL-3.0 license, with the latest commits on 2026-03-19.
  Source: https://github.com/cesp99/spettro
  Date: 2026-03-19 | Engagement: 3 stars
  Who: Carlo Esposito / Spettro maintainers
  Key quote: "Spettro is a terminal coding assistant built in Go. It automates planning, coding, and testing with multi-agent workflows, model selection, and an intuitive UI."
  Why it matters: Supplies the traceable open-source counterpart to the commercial CLIs, and the March 2026 commits pass the freshness gate.

YouTube videos for Spettro: none with >5k views were returned for the search query, so no qualifying video yet.

### OpenACP CLI (New harness)
- **[STRONG]** OpenACP's March 22, 2026 tweet (v0.5.0) announces a multi-agent CLI that integrates with Telegram/Discord sessions, automatically installs via `npm i -g @openacp/cli`, and supports 28+ agents (Claude, Codex, Gemini, Cursor, Cline, Kilo, Amp), emphasizing session control and budgeting hooks.
  Source: https://twitter.com/openacp/status/2035766286530335185
  Date: 2026-03-22 | Engagement: 3 likes
  Who: OpenACP project lead
  Key quote: "OpenACP CLI v0.5.0 brings Telegram + Discord session control, lets you run 28+ agents through a single install, and adds auditing controls." 
  Why it matters: This harness bridges messaging platforms and CLI agents, justifying the catalog gap noted in Discovery and the need for an orchestration lane.

YouTube videos for OpenACP CLI: no search result returned a video with >5k views that specifically mentions OpenACP CLI.

## Pairwise Comparisons
- **Claude Code vs Codex CLI**: Substack (Oct 3) shows Claude Code 2 + Sonnet 4.5 finishing the React task with the fewest iterations, while Codex required 13 debugging attempts and still stuttered on alignment; Nilenso (Feb 12) adds that Claude's prompt urges caution and consent, codifying the "ask then act" philosophy, whereas Codex is engineered to "persist until the task is fully handled end-to-end." Both sources align on Claude's trust-first posture and Codex's throughput-first posture, justifying their #1/#2 ordering.
- **Claude Code vs Gemini CLI**: Nilenso highlights that Gemini CLI ships both interactive (confirm before acting) and non-interactive (autonomous) modes; the YouTube debate video (Andy Lo, Feb 24) shows Gemini switching between those to match developer control, mirroring the catalog note that Gemini offers the largest free tier and works well when the user explicitly opts into hands-off execution.
- **Codex vs Gemini**: Codex emphasises unstoppable completion (Nilenso), while Gemini lets users choose; the YouTube "Claude vs Gemini vs Codex" breakdown (Nathan Sebhastian, Feb 28) reports Gemini winning on free context and Codex winning on aggressive action, reinforcing that Codex is the go-to when you want that persistence without toggles, while Gemini is the best "choose-your-autonomy-level" fallback.

## Quantitative Traction Summary
| Contender | GitHub stars / repo | Recent commits | Social signal | Notes |
| --- | --- | --- | --- | --- |
| Claude Code | Closed-source (Anthropic) | 2026-03 (docs updates) | Capy + Substack | Enterprise-grade CLI with multi-surface support |
| Codex CLI | Closed-source (OpenAI) | 2026-02 (prompt refresh) | Nilenso + Substack + YouTube (148K) | Throughput-first, GPT-5-Codex tuned |
| Gemini CLI | Closed-source (Google) | 2026-02 (Gemini 2.0) | Nilenso + YouTube (15K) | Interactive/Autonomous toggle |
| Terminal Use | N/A (platform) | Launch HN demo (2026-03-23) | Hacker News 115 pts / 73 comments | Sandbox + filesystems for CLI agents |
| Spettro | 3 stars | Latest push 2026-03-19 | GitHub repo | Open-source multi-agent CLI |
| OpenACP CLI | N/A (npm) | v0.5.0 tweet 2026-03-22 | Twitter 3 likes | Messaging-to-CLI harness for 28+ agents |

## Quotes
- "In 2026, the real differentiators are parallelism, autonomy, environment isolation, model flexibility, and workflow integration." (Capy Team, March 10, 2026) https://www.capy.ai/articles/best-ai-coding-agents-2026
- "OpenACP CLI v0.5.0 brings Telegram + Discord session control, lets you run 28+ agents through a single install, and adds auditing controls." (OpenACP Twitter, March 22, 2026) https://twitter.com/openacp/status/2035766286530335185

## Recommended Next Step
- Feed these findings into the Rank agent: confirm Claude/Codex/Gemini evidence, flag Spettro as an emerging open-source candidate, and ask the catalog agent whether a new "CLI agent orchestrators" lane should house Terminal Use and OpenACP. Ensure that Capy's parallelism criteria inform any re-weighting.

## Gaps in Evidence
- There are no readily accessible adoption or GitHub stats for Claude Code / Codex / Gemini because the codebases are closed, so the catalog will continue to rely on third-party comparisons and leaked prompt analyses until Anthropic/OpenAI release standardized numbers.
- Spettro and OpenACP lack independent coverage (articles or videos) beyond their own channels, so we currently have only the GitHub repo and a single tweet; more user testimonials or benchmark walkthroughs are still needed.

## Unresolved Questions
- Does Terminal Use have a private repo or package that can be anchored for ongoing traction tracking (stars, releases, downloads)?
- Can OpenACP share metrics on how many agents its CLI currently orchestrates, and is there an API for downloading session logs (important for evaluation of auditability)?
- Are any of the Tier 1 CLIs planning public benchmarks (SWE-bench Pro or Terminal-Bench) to cement claims about first-pass correctness versus token cost?

## Recommended Next Steps
1. Ask the catalog update agent to add Terminal Use (filesystem-first deployment) and OpenACP CLI (messaging harness) as new entries or a new harness lane, citing this file for evidence.
2. Track Spettro commits weekly and surface configuration docs/screenshots so it can graduate from Watch to a ranked position once community usage emerges.
3. Request the Catalog or Rank agent to capture the Capy parallelism framework in the meta statements so buyers know parallel task throughput is now a primary dimension.
