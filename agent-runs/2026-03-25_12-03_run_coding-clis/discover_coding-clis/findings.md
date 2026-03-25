# Discover Findings

## Scope

Full discover protocol run for the coding-clis problem space (AI coding CLI agents and code agents). Goal: find all serious contenders, new signals, benchmark developments, and catalog gaps as of March 25, 2026.

## Date

2026-03-25T12:03:00Z

## Inputs

**HN Algolia queries (via WebFetch):**
- "coding agent CLI 2026"
- "claude code CLI"
- "codex CLI openai"
- "aider coding agent"
- "SWE-bench 2026"
- "Show HN coding CLI agent"
- "Cursor Windsurf coding"
- "opencode coding agent"
- "devin 2.0 coding agent"
- "coding agent benchmark comparison"
- "Cline vs Claude Code coding"
- "claude code vs codex gemini"

**Web searches:**
- "best AI coding CLI agents 2026"
- "claude code vs codex CLI vs gemini CLI comparison 2026"
- "coding agent benchmark SWE-bench 2026 new"
- "new coding CLI agent launched 2026"
- "coding agent open source alternative 2026"
- "Devin AI coding agent update 2026"
- "Cursor Windsurf AI coding latest 2026"
- "aider coding assistant 2026 update"
- "OpenCode AI coding agent 2026 launch"
- "JetBrains Junie CLI coding agent 2026"
- "Amp ampcode coding agent CLI 2026"
- "Goose Block AI coding agent 2026 ACP"
- "Windsurf SWE-1.5 model 2026 speed"
- "Devin 2.0 launch March 2026"
- "coding CLI agent new launch March 2026"
- "Terminal Bench benchmark coding agents 2026"
- "npm downloads coding CLI agent 2026 statistics"
- "METR SWE-bench PRs not merged 2026"
- "SWE-CI benchmark new 2026 coding agents"

**GitHub checks:**
- anthropics/claude-code, openai/codex, Aider-AI/aider, All-Hands-AI/OpenHands, cline/cline, block/goose, continuedev/continue, anomalyco/opencode, JetBrains/junie
- GitHub trending (weekly, English)

**Prior runs referenced:**
- agent-runs/2026-03-25_03-54_run_coding-clis/discover_coding-clis/findings.md
- agent-runs/2026-03-24_01-37_run_coding-clis/

---

## Findings

### NEW CONTENDER ALERT — OpenCode (anomalyco/opencode)

**129,944 GitHub stars** — now the highest-starred coding agent in the category, surpassing Claude Code (82K). HN launch post on March 20, 2026 scored **1,265 points and 619 comments** — the highest-engagement story in this space this cycle. Built by **Anomaly**, evolved from the `sst/opencode` project. Written in TypeScript TUI + Go.

**Key facts:**
- Supports 75+ LLM providers via Models.dev (Claude, OpenAI, Gemini, local models, anything with an API)
- Two agent modes: **Build** (full file/command access) and **Plan** (read-only, approval-based)
- LSP integration (Rust, Swift, TypeScript, PyRight, Terraform, etc.)
- Multi-session parallel agents with shareable session links
- Available as terminal TUI, desktop app, VS Code/Cursor extension
- Privacy-first: no code stored by Anomaly

**Why this matters:** Star count and HN traction make this a Tier 1 entrant. However, significant caveats exist — see Trust section below.

**Trust flags:**
- **Anthropic legal conflict (major):** OpenCode spoofed the `claude-code-20250219` beta HTTP header to route OAuth through Anthropic's own CLI. Anthropic activated server-side blocks January 9, 2026 (HN: 625 pts). Full legal action story on March 19, 2026 (HN: 479 pts). PR #18186 (Feb 19, 2026) removed all Anthropic integrations under "anthropic legal requests."
- **RCE vulnerability (HN: 432 pts, Jan 11, 2026):** Unauthenticated RCE discovered in OpenCode — prompts silently sent to cloud even when using local models; configuration pulled from web by default.
- **RAM usage:** Frequently hits 1GB+ vs ~80MB for Rust-based alternatives (Codex CLI native mode).
- Community workarounds exist (`opencode-claude-auth` plugin) but core integration blocked.

Sources: https://opencode.ai / https://github.com/anomalyco/opencode / HN #47460525 / HN #47444748 / HN #47341987 / https://www.infoq.com/news/2026/02/opencode-coding-agent/

---

### NEW CONTENDER ALERT — JetBrains Junie CLI

**Beta launched March 9, 2026.** Enterprise IDE incumbent entering the terminal agent space alongside "Air" (new agent IDE built on Fleet). GitHub: `JetBrains/junie` (119 stars — brand new, not a star count to judge by yet).

**Key facts:**
- LLM-agnostic, BYOK (Bring Your Own Key) — no platform surcharges
- Runs from terminal, any IDE, CI/CD pipelines, GitHub/GitLab
- One-click migration from Claude Code, Codex, and other agents
- MCP server integration with auto-detection
- Next-task prediction based on project context
- Model support: OpenAI, Anthropic, Google, Grok; Gemini 3 Flash free for launch week
- Pricing: $10/month individual, $60/month enterprise. Existing JetBrains AI licenses valid.

**Why this matters:** JetBrains has 12M+ developers in its ecosystem. This is a full enterprise incumbent committing to the CLI agent category. The 1-click migration from Claude Code/Codex is a direct competitive move.

Sources: https://blog.jetbrains.com/junie/2026/03/junie-cli-the-llm-agnostic-coding-agent-is-now-in-beta/ / https://github.com/JetBrains/junie / https://air.dev

---

### NEW CONTENDER ALERT — Grok Build (xAI)

**Preview/waitlist since January 12, 2026.** Still waitlist-only as of March 2026 but design signals are significant.

**Key facts:**
- Runs up to **8 parallel AI coding agents simultaneously** with side-by-side output
- **Arena Mode** (in development): agents compete/collaborate, outputs ranked algorithmically before human review
- Local-first: all code executes on developer hardware, no source transmitted to xAI servers
- Model: `grok-code-fast-1` (built Aug 2025 specifically for agentic coding)

**Why this matters:** xAI's parallel-8-agent architecture and Arena Mode are distinct positioning angles not yet claimed by any catalog entry. Local-first + multi-agent is a unique combo.

Sources: https://www.adwaitx.com/grok-build-vibe-coding-cli-agent/ / https://www.testingcatalog.com/xai-tests-parralel-agents-and-arena-mode-for-grok-build/

---

### NEW CONTENDER ALERT — Amp (Sourcegraph / ampcode.com)

**Strategic pivot February 19, 2026:** Amp killed its editor extensions (self-destructed March 5, 2026) and published "The Coding Agent Is Dead" — arguing the agent layer is no longer the differentiator; organizational practices and codebase structure are. Now CLI-only.

**Key facts:**
- **Deep mode:** powered by GPT-5.3-Codex
- **Smart mode:** Claude Opus 4.6 (up to 300K input context tokens)
- Code review agent as a composable subroutine callable from anywhere
- Runs tools and shell commands autonomously
- Built by Sourcegraph (the company behind the code intelligence platform)
- $10/day grant for new users

**Why this matters:** Sourcegraph's codebase intelligence expertise (100M+ repos indexed) backing a CLI-only agent is meaningfully differentiated. The "coding agent is dead, practices matter" positioning could resonate with senior devs. CLI-only pivot also signals where the industry is heading.

Sources: https://ampcode.com / https://ampcode.com/news/the-coding-agent-is-dead / https://ampcode.com/manual

---

### UPDATE — Goose (Block/Square) — ACP Integration

**33,550 GitHub stars.** Open-source (Apache 2.0), model-agnostic, runs locally. Major March 2026 development: **ACP (Agent Client Protocol)** integration.

- Goose now supports using **existing ChatGPT, Codex, Gemini, or Claude subscriptions** via ACP — developers don't pay twice
- Confirmed ACP-compatible: also Kimi CLI (Moonshot AI), Augment Code
- Blog post "Use Goose with Your AI Subscription" (March 19, 2026)

**Why this matters:** Zero marginal cost to switch existing Copilot/Gemini subscribers to Goose — lowest friction adoption path in category. ACP may become the interoperability standard.

Sources: https://github.com/block/goose / https://block.github.io/goose/blog/2026/03/19/use-goose-with-your-ai-subscription/

---

### UPDATE — Devin 2.2 (Cognition AI)

**Devin 2.0** launched April 3, 2025 with parallel agents ($20 entry plan — 96% price cut). **Devin 2.2** launched **February 24, 2026** is the current version:

- Desktop/GUI computer use: browsers, Figma, Photoshop on Linux
- **Devin Review**: automated quality pass on every PR it generates
- Session boot: **45s → 15s** (3x faster)
- Slack and Linear integration improvements

**Why this matters:** $20 entry pricing turns Devin from enterprise-only to prosumer product. Devin Review (automated quality audit) is a novel differentiator not present in other catalog entries.

Sources: https://cognition.ai/blog/introducing-devin-2-2 / https://cognition.ai/blog/devin-2

---

### UPDATE — GitHub Copilot CLI — GA February 25, 2026

Previously in catalog as "Feature-complete at GA (Feb 2026)" — now confirmed details:

- **Autopilot mode**: fully autonomous terminal task execution
- Built-in specialized agents: Explore, Task, Code Review, Plan
- Model choice: Claude Opus 4.6, Sonnet 4.6, GPT-5.3-Codex, Gemini 3 Pro
- **Enterprise Agent Control Plane** also at GA: admin visibility into all agent sessions, model usage, tool invocations, policy enforcement
- Distribution: all paid Copilot subscribers (15M total)

Sources: https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/ / https://visualstudiomagazine.com/articles/2026/03/02/github-copilot-cli-reaches-general-availability-bringing-agentic-coding-to-the-terminal.aspx

---

### UPDATE — Claude Code — Agent Teams

- **Agent Teams / Swarm Mode** added March 2026: multi-agent orchestration with TeammateTool
- **82,421 GitHub stars** (confirmed)
- CVE-2025-59536 and CVE-2026-21852 both patched
- Claude Code limit reductions sparking community friction (r/claudecode: "Limits Were Silently Reduced and It's MUCH Worse" — active March 2026 Reddit thread)

---

### UPDATE — Windsurf — SWE-1.5 Model

**SWE-1.5** (co-designed with Cerebras WSE): up to **950 tokens/second**, 13x faster than Claude Sonnet 4.5, 6x faster than Haiku 4.5. Wave 13 update adds **Arena Mode** (blind A/B agent comparison). This speed differential is now a primary competitive axis.

Sources: https://windsurf.com/blog/swe-1-5 / https://cognition.ai/blog/swe-1-5

---

### UPDATE — Codex CLI — GPT-5.4

- GPT-5.4 added to Codex on **March 5, 2026**
- **Codex Security agent** launched: identifies and proposes vulnerability fixes
- Rust native mode now shipping (eliminates Node.js dependency)
- 67,457 GitHub stars

---

### UPDATE — Aider — Strong #2 in Open Source

- **42,356 GitHub stars**
- Connects to 100+ models including Claude 4.5/4.6, Gemini 3, o3-pro
- Writes 70-80% of its own code per release (AI self-modification)
- Tree-sitter + AST-aware context, auto-linting after every edit
- Experimental browser UI added
- **Monthly installs: ~200K–250K** (npm + PyPI combined)
- **4.1M total installations** | **15 billion tokens processed/week**

Sources: https://aider.chat

---

### BENCHMARK DEVELOPMENTS

**SWE-bench Verified — approaching 81% ceiling:**
- Claude Opus 4.5: 80.9% | Claude Opus 4.6: 80.8% | Gemini 3.1 Pro: 80.6% | GPT-5.2: 80.0%
- Most ceiling contention is within 1 percentage point

**SWE-bench Pro (harder, 1,865 tasks):**
- GPT-5.3-Codex leads at 56.8%
- Most agents score ~23% on Pro — much harder than Verified
- Catalog note: deck currently says "45.89% SEAL" for Claude Code — may need update

**NEW: METR Paper (March 10, 2026) — HN: 278 pts, 156 comments:**
- "Many SWE-bench-Passing PRs Would Not Be Merged" — https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/
- ~50% of test-passing PRs would NOT be merged by actual maintainers (scikit-learn, Sphinx, pytest)
- Average gap: 24 percentage points between automated grader and maintainer acceptance
- Human-written patches: 68% accepted vs AI-generated accepting ~44-50%
- Authors tested Claude 3.5 Sonnet through 4.5 Sonnet, Claude Opus 4, GPT-5

**NEW: SWE-CI Benchmark (March 4, 2026):**
- arXiv: 2603.03823 — first CI-focused benchmark, tests long-term maintenance
- **75% of tested models break previously working code** during maintenance
- New metric: **EvoScore** — weights later iterations more heavily, penalizes short-term optimization
- Claude Opus series leads throughout; 18 models from 8 providers evaluated

**Terminal-Bench 2.0:**
- GPT-5.3 leads at 77.3%; ForgeCode/TongAgents reach ~80–82% with Claude Opus 4.6 or GPT-5.4
- 89 curated hard tasks (Software Engineering, Security, Data Science, System Administration, File Operations)

**Qwen3-Coder-Next (local models):**
- 70.6% SWE-bench Verified — claimed #1, beating closed models including Claude Opus 4.6 on that metric
- Key for r/LocalLLaMA community; Cline is the preferred local agent framework pairing

---

### ADOPTION & INSTALL DATA (January 2026 leaderboard)

| Tool | Monthly Installs (all channels) |
|------|-------------------------------|
| Claude Code | ~17 million |
| Codex CLI | ~1.5 million |
| Gemini CLI | ~1.5 million |
| GitHub Copilot | 200K–250K |
| Aider | 200K–250K |
| Grok CLI | ~9K |

Claude Code additional signals:
- 71% market share for agentic AI tasks (developer survey)
- "Most loved" by 46% of surveyed devs (Pragmatic Engineer Survey, n=15,000, Feb 2026) — Cursor 19%, Copilot 9%
- Annualized revenue: ~$2.5B run rate

**Security note:** Cline CLI 2.3.0 supply chain attack (February 2026) — OpenClaw malware installed; ~4,000 downloads affected in 8 hours. (Source: https://thehackernews.com/2026/02/cline-cli-230-supply-chain-attack.html)

---

### ECOSYSTEM SIGNALS

**ACP (Agent Client Protocol):**
- Co-maintained by JetBrains + Zed Industries (registry live January 28, 2026)
- Confirmed compatible: Goose, Kimi CLI (Moonshot AI), Augment Code, JetBrains Junie
- Enables subscription reuse across agents — potentially the interoperability layer the category has been missing

**CLI-only trend:**
- Amp killed editor extensions March 5, 2026
- GitHub Copilot CLI GA February 25
- JetBrains Junie CLI-first March 9
- OpenCode terminal-native as core design
- Meta: IDE extension model appears to be declining as a first-class distribution strategy

**Multi-agent orchestration tooling (from prior run):**
- **Emdash** — runs 21 coding agent CLIs in parallel in git worktrees (HN: 206 pts, Feb 2026) — https://github.com/generalaction/emdash
- **Superset** — one-click worktrees per agent, notifications (HN: 24 pts, Dec 2025) — https://superset.sh
- **CLI-Anything** (HKUDS/CLI-Anything) — 22,801 stars; makes any software agent-native via auto-generated CLIs; CLI-Hub skill added March 23, 2026

---

### GitHub Star Summary (confirmed, March 25, 2026)

| Tool | Stars |
|------|-------|
| OpenCode (anomalyco/opencode) | 129,944 |
| Claude Code (anthropics/claude-code) | 82,421 |
| OpenHands (OpenHands/OpenHands) | 69,718 |
| Codex CLI (openai/codex) | 67,457 |
| Cline (cline/cline) | 59,331 |
| Aider (Aider-AI/aider) | 42,356 |
| Goose (block/goose) | 33,550 |
| Continue (continuedev/continue) | 32,045 |
| CLI-Anything (HKUDS/CLI-Anything) | 22,801 |
| GitHub Copilot CLI | 9,558 |

---

## Quotes

- "Many SWE-bench-Passing PRs Would Not Be Merged Into Main." — METR, March 10, 2026 (https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/)
- "The Coding Agent Is Dead." — Amp / Sourcegraph, February 19, 2026 (https://ampcode.com/news/the-coding-agent-is-dead)
- "Anthropic takes legal action against OpenCode" — HN 479 pts, March 19, 2026 (re: OAuth header spoofing)
- "75% of tested models break previously working code during long-term maintenance tasks." — SWE-CI, arXiv 2603.03823, March 4, 2026
- "Claude Code is the most loved AI developer tool" — 46%, Pragmatic Engineer Survey, Feb 2026 (n=15,000)
- "Junie CLI offers one-click migration from Claude Code, Codex, and other agents." — JetBrains blog, March 9, 2026

---

## Catalog Gaps Identified

1. **OpenCode** — 129K stars, #1 HN story of the month (1,265 pts). Not in catalog. Needs entry with prominent trust/legal flag.
2. **JetBrains Junie CLI** — Enterprise incumbent, CLI-first, beta March 9. Not in catalog.
3. **Grok Build** — Waitlist-only but 8-parallel-agent architecture is category-unique. Not in catalog.
4. **Amp (Sourcegraph)** — CLI-only pivot, GPT-5.3-Codex + Claude Opus 4.6, "coding agent is dead" positioning. Not in catalog.
5. **Goose (Block)** — 33K stars, ACP-compatible, Apache 2.0. Not in catalog.
6. **Devin** — May be in catalog but Devin 2.2 (Feb 2026) details (GUI computer use, Devin Review) need updating.
7. **ACP standard** — Not mentioned anywhere in catalog. Emerging interoperability layer.
8. **SWE-CI benchmark** — New March 4, 2026. Deck mentions SWE-bench but not SWE-CI's finding that 75% of models break working code.
9. **METR maintainer-merge finding** — Catalog deck already mentions this ("METR found ~50% of SWE-bench-passing PRs would NOT be merged") — good, no gap here.
10. **Qwen3-Coder-Next** — Local model #1 on SWE-bench Verified. Worth mention in context of local model ecosystem.

---

## Recommended Next Step

1. **Deep-dive OpenCode** — needs its own catalog entry with the star count, features, and a prominent trust caveat covering the Anthropic legal conflict and RCE. This is the single highest-impact gap.
2. **Add JetBrains Junie CLI and Amp** as Tier 3 entries — both real enough to track, neither strong enough for Tier 1 yet.
3. **Add Goose and Grok Build** — Goose has 33K stars and meaningful ACP differentiation. Grok Build needs "watchlist" status at minimum.
4. **Update benchmarks section** — SWE-bench Verified ceiling at 81%, SWE-CI findings, Terminal-Bench 2.0 leaderboard.
5. **Add ACP interoperability note** to deck — this is the emerging standard for subscription reuse and agent portability.
6. **Update Devin entry** with 2.2 details (GUI computer use, Devin Review, $20 entry plan).
7. **Run rank agent** after deep-dive to revise tier placements given OpenCode star trajectory and its legal/trust issues.
