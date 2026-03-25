# Deep-Dive Findings: Coding CLIs

## Scope

Full deep-dive on 14 contenders in the AI coding CLI / coding agent problem space. For each contender: GitHub stars (verified), npm/PyPI weekly downloads where available, HN discussion traction, web comparisons and reviews, YouTube video evidence, and official changelog/docs URLs. Goal: produce evidence-tagged, ranked findings to inform catalog tier placement.

## Date

2026-03-25T14:00:00Z

## Inputs

**GitHub pages checked (via WebFetch):**
- github.com/anthropics/claude-code
- github.com/openai/codex
- github.com/google-gemini/gemini-cli
- github.com/All-Hands-AI/OpenHands
- github.com/cline/cline
- github.com/Aider-AI/aider
- github.com/continuedev/continue
- github.com/block/goose
- github.com/anomalyco/opencode
- github.com/github/copilot-cli

**HN Algolia API queries (via WebFetch):**
- claude+code, openai+codex+cli, gemini+cli, aider+coding, opencode+anomaly, opencode+launch+2026, OpenHands+coding+agent, cline+coding+agent, goose+block+coding, github+copilot+cli, devin+cognition+coding, amp+sourcegraph+coding, jetbrains+junie, grok+build+coding+agent, devin+2+coding, aider+2026, aider+chat+coding+assistant

**Web searches:**
- Claude Code vs Codex CLI vs Gemini CLI comparison 2026
- OpenCode anomalyco stars review 2026
- Amp ampcode sourcegraph coding agent CLI review 2026
- GitHub Copilot CLI GA autopilot mode 2026 review
- Devin 2.2 coding agent review 2026 benchmark
- OpenHands coding agent benchmark 2026 SWE-bench
- Aider coding assistant 2026 update stats installs
- Goose Block ACP agent client protocol 2026 review
- Grok Build xAI parallel agents 2026 review
- JetBrains Junie CLI beta 2026 review enterprise
- Cline supply chain attack 2.3.0 OpenClaw 2026
- Claude Code agent teams swarm mode 2026 multi-agent
- Codex CLI GPT-5.4 security agent rust 2026
- Gemini CLI 99k stars free tier 2026 review
- Continue.dev pivot source-controlled AI checks CI 2026
- npm downloads claude-code weekly 2026 statistics
- Claude Code 4% GitHub commits daily 2026 anthropic revenue
- coding agent is dead amp sourcegraph pivot CLI February 2026
- OpenHands v1.5 release notes March 2026
- Cline cline/cline 2026 update features stats
- Devin 2.2 67% PR merge rate benchmark 2026

**Pages fetched:**
- aider.chat (homepage)
- ampcode.com (homepage)
- cognition.ai/blog/introducing-devin-2-2
- block.github.io/goose/blog/2026/03/19/use-goose-with-your-ai-subscription/
- blog.jetbrains.com/junie/2026/03/junie-cli-the-llm-agnostic-coding-agent-is-now-in-beta/
- ampcode.com/news/the-coding-agent-is-dead
- openhands.dev/blog/openhands-index
- gradually.ai/en/claude-code-statistics/
- newsletter.semianalysis.com/p/claude-code-is-the-inflection-point
- morphllm.com/ai-coding-agent

**Prior runs referenced:**
- agent-runs/2026-03-25_12-03_run_coding-clis/discover_coding-clis/findings.md

---

## Findings

---

### 1. Claude Code (anthropics/claude-code)

**GitHub stars: 82,400** (82.4k confirmed via GitHub page, March 25, 2026)
**Forks: 6,900** | **Contributors: 51** | **Commits: 565**
**Install method:** Native installer (curl/brew/winget) — npm deprecated
**Current version:** 2.1.73 (multiple releases per week cadence)
**Languages:** Shell (47%), Python (29%), TypeScript (18%)

**Traction signals:**
- [STRONG] 4% of all GitHub public commits attributed to Claude Code (SemiAnalysis, Feb 5, 2026 — proprietary Tokenomics Model). Projected 20%+ by end of 2026. Source: https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point
- [STRONG] 71% market share for agentic AI tasks (developer survey); 46% "most loved" tool (Pragmatic Engineer Survey, n=15,000, Feb 2026). Sources: gradually.ai/en/claude-code-statistics/, morphllm.com
- [STRONG] 17M monthly installs (discover run, January 2026 leaderboard). npm deprecated but 111,000+ cumulative npm installs confirmed.
- [STRONG] $2.5B annualized revenue run rate as of early 2026; $1B ARR achieved in 6 months post-launch (Nov 2025). Source: semianalysis.com, orbilontech.com
- [STRONG] Accenture deal: 30,000 professionals trained on Claude Code — "largest Claude Code deployment to date" (SemiAnalysis, Feb 2026)
- [STRONG] HN: "Tell HN: I'm 60 years old. Claude Code has re-ignited a passion" — 1,086 pts, 989 comments (March 7, 2026)
- [STRONG] HN: "Claude Code is being dumbed down?" — 1,085 pts, 702 comments (Feb 11, 2026). Community friction over limit reductions is real but signals high dependency.
- [MODERATE] HN: "Claude 3.7 Sonnet and Claude Code" — 2,127 pts, 963 comments (Feb 24, 2025). Older but establishes momentum baseline.

**Recent major features:**
- **Agent Teams / Swarm Mode** (research preview, Feb 6, 2026): Lead agent orchestrates multiple teammate agents in separate Git worktrees via TeammateTool (13 operations). Enabled via `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` flag.
- **CVE-2025-59536 and CVE-2026-21852** both patched.
- 200K context window standard; 1M token context in beta.

**Community friction:**
- Limit reductions: r/claudecode thread "Limits Were Silently Reduced and It's MUCH Worse" active March 2026. [MODERATE] — real but not a defection signal given market share data.

**Benchmarks:**
- SWE-bench Verified: 80.9% (Claude Opus 4.6, near ceiling) [STRONG via SWE-bench leaderboard]
- SWE-bench Pro: ~56.8% (GPT-5.3-Codex leads; most agents ~23%) [STRONG via discover run]
- Terminal-Bench 2.0: ForgeCode/TongAgents using Claude Opus 4.6 reach ~80-82% [MODERATE]

**Official docs/changelog:**
- https://code.claude.com/docs
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

**YouTube:**
- No individual video IDs extractable from YouTube search (site: queries blocked). Third-party ranking article (medium.com/@rentierdigital) notes viral demos reaching 853K views; Nick Saraev 4-hour masterclass; Sabrina Ramonov beginner course. High volume of tutorial content.
- Tutorial search: https://www.youtube.com/results?search_query=claude+code+tutorial+2026

---

### 2. Codex CLI (openai/codex)

**GitHub stars: 67,500** (67.5k confirmed, March 25, 2026)
**Forks: 9,000** | **Latest release: v0.116.0** (March 19, 2026)
**Languages:** Rust (95.7%) — native mode eliminates Node.js dependency
**Monthly installs:** ~1.5M (discover run, January 2026)

**Traction signals:**
- [STRONG] 67.5k GitHub stars, 9k forks — active forks-to-stars ratio signals builder engagement.
- [STRONG] v0.116.0 released March 19, 2026 — actively maintained, weekly cadence.
- [STRONG] GPT-5.4 added March 5, 2026; Codex Security agent (threat modeling, vulnerability validation, patch suggestions) launched in research preview concurrently.
- [STRONG] Rust rewrite complete: native binary now primary, eliminates Node.js dependency, ~80MB RAM vs competitors. Sources: deployhq.com, morphllm.com
- [MODERATE] HN: "OpenAI Codex CLI: Lightweight coding agent that runs in your terminal" — 516 pts, 289 comments (April 16, 2025, at launch). No major HN stories specifically in 2026 yet.
- [MODERATE] Terminal-Bench 2.0: 77.3% (Codex CLI), GPT-5.3 leads at the benchmark level. Source: morphllm.com, discover run.

**Recent major features:**
- Codex Security agent (research preview): automates threat modeling and vulnerability patch proposals
- 192K context window
- Sandbox-first execution: all code runs in containerized sandbox by default — "confidently run full-auto mode"
- Model switching: `/model` command supports GPT-5.4, GPT-5.3-Codex, and others

**Comparison positioning:**
- [STRONG] "Codex CLI leads on execution safety" — multiple comparison articles (educative.io, deployhq.com, gradually.ai)
- [MODERATE] 240+ tokens/second processing speed (morphllm.com testing)

**Official docs/changelog:**
- https://developers.openai.com/codex/cli
- https://developers.openai.com/codex/changelog

**YouTube:**
- Class Central documents a 19-min YouTube tutorial: "Claude Code + Codex CLI — Building a UNHINGED AI Video App" (https://www.classcentral.com/course/youtube-claude-code-codex-cli-building-a-unhinged-ai-video-app-478329)
- DataCamp tutorial: openai-codex-cli-tutorial (April 22, 2025)

---

### 3. Gemini CLI (google-gemini/gemini-cli)

**GitHub stars: 99,000** (99k confirmed via GitHub page, March 25, 2026)
**Forks: 12,600** | **Commits: 5,498** | **Three release tracks:** nightly / preview / stable
**Monthly installs:** ~1.5M (discover run, January 2026)

**Traction signals:**
- [STRONG] 99k stars — second-highest star count in the category after OpenCode (130k). Largest fork count of any tool in category (12.6k).
- [STRONG] HN: "Gemini CLI" launch — 1,428 pts, 788 comments (June 25, 2025). Highest-scored CLI launch in category history.
- [STRONG] HN: "Gemini CLI tips and tricks for agentic coding" (Addy Osmani) — 403 pts, 145 comments (Nov 26, 2025).
- [STRONG] Free tier: 1,000 requests/day at zero cost. Genuinely useful for most developers. Model routing uses Flash for complexity scoring before Pro response.
- [MODERATE] HN: "I watched Gemini CLI hallucinate and delete my files" — 304 pts, 365 comments (July 22, 2025). Reliability concern flagged by community with significant traction.
- [MODERATE] Free tier fine print: after 10-15 prompts in a session, Gemini 2.5 Pro downgrades to Flash. Community "blatant deception" reaction (GitHub discussion #2436).

**Recent major features:**
- Gemini 3 Pro and Flash model support (as of 2026 per DataCamp)
- 1M token context window — largest in category
- GitHub Actions integration (Aug 7, 2025)
- Interactive commands mode (Oct 16, 2025)
- MCP server integration

**Benchmarks:**
- SWE-bench Verified: 80.6% (Gemini 3.1 Pro, near ceiling per discover run) [STRONG]
- OpenHands Index: Gemini 3 Flash outperformed Gemini 3 Pro on average [MODERATE]

**Comparison positioning:**
- [STRONG] "Gemini CLI leads on context capacity and cost accessibility" — multiple comparison articles (educative.io, inventivehq.com)
- [MODERATE] Best free tier in category; Gemini CLI = only tool with genuinely usable zero-cost daily tier

**Official docs/changelog:**
- https://github.com/google-gemini/gemini-cli
- https://geminicli.com/docs/

**YouTube:**
- Sam Witteveen: "Introducing Gemini CLI - Google's Open Source AI Agent Command Line Interface" (Class Central: https://www.classcentral.com/course/youtube-introducing-gemini-cli-462810)
- "Gemini CLI + ANY MCP Server — Step-by-Step Tutorial" (chaindesk.ai/tools/youtube-summarizer/gemini-cli-any-mcp-server-step-by-step-tutorial-FE1LChbgFEw — video ID: FE1LChbgFEw)
- Romin Irani 15-part tutorial series on Medium/Google Cloud Community

---

### 4. GitHub Copilot CLI (github/copilot-cli)

**GitHub stars: 9,600** (9.6k confirmed, March 25, 2026)
**Forks: 1,300** | **Latest release: v1.0.11** (March 23, 2026)
**Distribution: 15M+ paid Copilot subscribers** (all plans included)

**Traction signals:**
- [STRONG] GA February 25, 2026. Source: https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/
- [STRONG] All paid Copilot subscribers (15M total) have access — largest addressable install base in category by far.
- [STRONG] Copilot code review moved to agentic architecture (March 5, 2026): https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/
- [STRONG] Copilot code review requestable from CLI via `gh pr create` (March 11, 2026): https://github.blog/changelog/2026-03-11-request-copilot-code-review-from-github-cli/
- [MODERATE] HN: "GitHub Copilot CLI downloads and executes malware" — 62 pts, 22 comments (Feb 27, 2026). Security incident confirmed. Source: promptarmor.com/resources/github-copilot-cli-downloads-and-executes-malware
- [MODERATE] HN: "GitHub Copilot CLI: The Copilot coding agent in the terminal [public preview]" — 24 pts, 4 comments (Sept 25, 2025). Low HN engagement relative to category.
- [MODERATE] 200K-250K monthly installs (discover run, Jan 2026). Low relative to Claude Code's 17M.

**GA features:**
- Autopilot mode: fully autonomous terminal task execution (no approval per step)
- Plan mode: Shift+Tab to switch; structured plan before execution
- Built-in specialized agents: Explore, Task, Code Review, Plan
- Model choice: Claude Opus 4.6, Sonnet 4.6, GPT-5.3-Codex, Gemini 3 Pro
- Enterprise Agent Control Plane: admin visibility into all agent sessions, policy enforcement

**Pricing friction:**
- [MODERATE] Pro plan: 300 monthly premium requests. Autopilot mode burns through these fast. "A few complex autopilot sessions with Opus 4.6 can consume a week's budget in an afternoon." Source: htek.dev/articles/copilot-cli-weekly-2026-02-27/

**Official docs:**
- https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli
- https://docs.github.com/en/copilot/concepts/agents/copilot-cli/autopilot

---

### 5. OpenHands (All-Hands-AI/OpenHands)

**GitHub stars: 69,700** (69.7k confirmed, March 25, 2026)
**Forks: 8,700** | **Latest release: v1.5.0** (March 11, 2026)

**Traction signals:**
- [STRONG] v1.5.0 released March 11, 2026 with planning agent, task list panel, skill slash menus, Bitbucket datacenter support, Git repo switching mid-session.
- [STRONG] OpenHands Index published Jan 28, 2026: comprehensive 5-category benchmark (Issue Resolution, Greenfield Dev, Frontend Dev, Software Testing, Info Gathering) across 9 models. Source: https://openhands.dev/blog/openhands-index
- [STRONG] OpenHands Index results: Claude 4.5 Opus leads overall (issue resolution, frontend, unit test writing). GPT 5.2 Codex second overall, leads long-horizon greenfield. Google Gemini 3 Flash outperforms Gemini 3 Pro on average.
- [MODERATE] SWE-bench Verified scores: OpenHands+CodeAct-v2.1 scored 52.4% on original benchmark but dropped to 18.2% when enhanced test suites were applied — benchmark inflation warning flagged by the team themselves.
- [WEAK] No HN story > 10pts specifically for OpenHands in recent searches. The HN Algolia query returned unrelated results.

**Recent major features:**
- Planning Agent: Plan Mode generates structured PLAN.md; switches to Code Mode for execution
- Software Agent SDK: clean modular SDK for building agents on OpenHands V1
- Support for Claude Opus 4.6, GLM-4.7, Claude-Sonnet-4-6, Kimi-K2.5, Qwen3-Coder-Next, Gemini-3.1-Pro-Preview

**Official docs:**
- https://docs.openhands.dev/
- https://openhands.dev/blog/openhands-index

---

### 6. Cline (cline/cline)

**GitHub stars: 59,300** (59.3k confirmed, March 25, 2026)
**Forks: 6,000** | **Commits: 5,015** | **Latest version: v3.72.0** (March 12, 2026)
**Installs: 5M+** (self-reported via GitHub readme/docs)

**Traction signals:**
- [STRONG] 59.3k stars with active release cadence (v3.57.04 Feb 5, v3.72.0 March 12).
- [STRONG] Supply chain attack (Feb 17, 2026): Cline CLI 2.3.0 published via compromised npm token; OpenClaw installed silently on ~4,000 machines in 8 hours. Root cause: "Clinejection" — issue triage bot exploited. Patched in v2.4.0. Sources: thehackernews.com/2026/02/cline-cli-230-supply-chain-attack.html, theregister.com/2026/02/20/openclaw_snuck_into_cline_package/
- [STRONG] CoreWeave infrastructure partnership: Cline selected CoreWeave to power high-performance autonomous engineering (WB Inference integration). Source: investors.coreweave.com/news/2026/...
- [MODERATE] Plan/Act mode: Plan mode = architect (read-only context gathering); Act mode = execution. Token cost management via mode switching.
- [MODERATE] Gartner Peer Insights listing in 2026 — signals enterprise consideration phase.

**Security warning:** The supply chain attack is the most significant trust event in this category in 2026. The "Clinejection" vulnerability (prompt injection via GitHub issue title → bot → npm token) was disclosed by Adnan Khan and exploited 8 days later. This is a [STRONG] negative signal for enterprise adoption.

**Recent major features:**
- Cline CLI 2.0 (Feb 5, 2026): added Anthropic Opus 4.6, Minimax-2.1, Kimi-k2.5, Codex-5.3
- Checkpoint system: workspace snapshots after each AI operation with diff/rollback
- Context Window Progress bar (visual token tracking)
- Preferred local model pairing: Qwen3-Coder-Next (70.6% SWE-bench Verified, claimed #1 local) [MODERATE]

**Official changelog:**
- https://github.com/cline/cline/blob/main/CHANGELOG.md
- https://cline.bot/blog

---

### 7. Aider (Aider-AI/aider)

**GitHub stars: 42,400** (42.4k confirmed, March 25, 2026)
**Forks: 4,100** | **Total releases: 93** | **Latest: v0.86.2** (Feb 12, 2026)
**PyPI installs: 5.7M total** (homepage badge); **pip page shows ~4.9M**
**Weekly token usage: 15B tokens/week**

**Traction signals:**
- [STRONG] 5.7M pip installations confirmed on homepage. Aider writes 88% of its own code in latest release (self-modification signal). Source: aider.chat
- [STRONG] 4.1M total installations + 15B tokens/week processing (discover run, confirmed aider.chat homepage March 25, 2026).
- [STRONG] Monthly installs: ~200K-250K (discover run, Jan 2026 leaderboard). Consistent with PyPI stats.
- [MODERATE] HN: "Claude 3 beats GPT-4 on Aider's code editing benchmark" — 202 pts, 228 comments (March 2024). Older but establishes credibility of benchmark methodology.
- [MODERATE] HN search for "aider 2026" and "aider chat coding assistant" returned 0 results above threshold. No major HN story specifically about Aider in 2026 yet. [WEAK signal for 2026 HN traction]

**Recent major features (2026):**
- Support for Claude 4.5/4.6, Gemini 2.5 Flash, Flash-Lite, DeepSeek Reasoner
- Updated model aliases and cost metadata for OpenRouter models
- Tracking of total tokens sent/received in benchmark statistics
- Experimental browser UI added

**Differentiators:**
- Tree-sitter + AST-aware context
- Auto-linting and auto-testing after every edit
- Git-native: automatic commits with sensible messages
- Supports 100+ programming languages
- Connects to 100+ models including local models
- AI self-modification: writes 70-88% of its own code per release

**Official docs/changelog:**
- https://aider.chat/HISTORY.html
- https://aider.chat/docs/

**YouTube:**
- Official tutorial list: https://aider.chat/docs/usage/tutorials.html
- Known channels: Coding the Future With AI, AICodeKing, Matthew Berman, Ian Wootten

---

### 8. Continue (continuedev/continue)

**GitHub stars: 32,000** (32k confirmed, March 25, 2026)
**Forks: 4,300** | **Total releases: 809** | **Latest: v1.2.18-vscode** (March 25, 2026)
**Languages:** TypeScript (84.4%) | License: Apache 2.0

**Traction signals:**
- [STRONG] v1.2.18-vscode released March 25, 2026 — same day as this research. Active weekly release cadence (809 total releases).
- [STRONG] Strategic pivot (mid-2025): IDE extension → open-source CLI running async agents on every PR. New tagline: "Source-controlled AI checks, enforceable in CI." Checks defined as markdown files in `.continue/checks/`. Source: github.com/continuedev/continue
- [MODERATE] Vibecoding.app review: "Continue.dev's pivot to Continuous AI is a bet on where agentic coding is heading: async agents that enforce standards."
- [MODERATE] 32k stars, but no HN stories > 10pts found in recent searches for "continue dev coding assistant."

**Core product (post-pivot):**
- AI checks run on every PR, appear as GitHub status checks
- Headless mode: agents run in cloud without UI — CI/CD native
- PR inbox with filter by opened/assigned PRs, solve failing checks at one click
- Custom checks via markdown in `.continue/checks/` — version-controllable AI review rules

**Positioning:**
- [MODERATE] "Quality control for your software factory" — enterprise compliance angle distinct from pure coding agents
- [WEAK] No strong enterprise case studies found in this research round

**Official docs/changelog:**
- https://docs.continue.dev/
- https://changelog.continue.dev/

---

### 9. Goose (block/goose)

**GitHub stars: 33,600** (33.6k confirmed, March 25, 2026)
**Forks: 3,100** | **Contributors: 428** | **Latest release: v1.28.0** (March 18, 2026)
**Languages:** Rust (58.9%), TypeScript (33.2%) | License: Apache 2.0

**Traction signals:**
- [STRONG] 60% of Block's 12,000 employees use Goose weekly. Time savings reported: 50-75% on development tasks. Source: block.github.io/goose (company usage stats, March 2026)
- [STRONG] ACP (Agent Client Protocol) integration live: Claude Code, ChatGPT Plus/Pro, Google Gemini subscriptions all supported via ACP. Zero marginal cost to switch existing subscribers. Blog: https://block.github.io/goose/blog/2026/03/19/use-goose-with-your-ai-subscription/ (March 19, 2026)
- [STRONG] ACP roadmap published: four-phase migration — Stabilize ACP Server → TypeScript TUI Alpha → Desktop Migration → Consolidation. Old CLI providers to be removed.
- [MODERATE] 33.6k GitHub stars, 428 contributors — strong contributor base relative to star count.
- [WEAK] No HN stories > 10pts found in searches for "goose block coding." Minimal HN presence.

**ACP integration details:**
- Claude Code: via `@zed-industries/claude-agent-acp`
- ChatGPT Plus/Pro: native OAuth sign-in, no extra install; recommended model `gpt-5.3-codex`
- Google Gemini: via Gemini CLI (which "speaks ACP natively")
- MCP configs in Goose are passed through to underlying agent via ACP

**Block workforce context (important caveat):**
- Fortune reporting (March 6, 2026): Block's CFO cited AI efficiency (including Goose) as justification for cutting nearly half its workforce. This is a double-edged signal: Goose clearly delivers productivity, but the headline is "Block slashes workforce because of AI." Source: fortune.com/2026/03/06/exclusive-block-cfo-ai-leaps-18-months-led-decision-slash-nearly-half-its-workforce/

**Official docs:**
- https://block.github.io/goose/
- https://github.com/block/goose/discussions/7309 (ACP adoption discussion)

---

### 10. OpenCode (anomalyco/opencode) — NEW CONTENDER

**GitHub stars: 130,000** (confirmed via GitHub page, March 25, 2026 — latest release v1.3.2, March 24, 2026)
**Forks: 13,800** | **Total releases: 740** | **Commits: 10,542**
**Star rank: #63 globally among all GitHub repositories**

**Traction signals:**
- [STRONG] 130k stars — #1 in category by large margin (Claude Code at 82.4k). Explosive growth: +2,087 stars in a single day (Jan 12, 2026). Source: star-history.com/anomalyco/opencode
- [STRONG] HN launch post (inferred from discover run, March 20, 2026): 1,265 pts, 619 comments — highest-engagement coding agent story of the cycle.
- [STRONG] HN: "Anthropic takes legal action against OpenCode" — 479 pts, 398 comments (March 19, 2026) — https://github.com/anomalyco/opencode/pull/18186
- [STRONG] HN: "Anthropic blocks third-party use of Claude Code subscriptions" — 625 pts, 513 comments (Jan 9, 2026) — https://github.com/anomalyco/opencode/issues/7410

**TRUST FLAGS — CRITICAL:**

1. **Anthropic legal conflict (MAJOR NEGATIVE):** OpenCode spoofed the `claude-code-20250219` beta HTTP header to route developer OAuth through Anthropic's CLI. Server-side blocks activated Jan 9, 2026. PR #18186 (Feb 19, 2026) removed all Anthropic integrations. Legal action ongoing as of March 19, 2026. [STRONG evidence — HN 479pts + 625pts]

2. **RCE vulnerability (MAJOR NEGATIVE):** Unauthenticated RCE discovered in OpenCode. Prompts sent to cloud silently even when using local models. Configuration pulled from web by default. HN coverage. [STRONG evidence from discover run]

3. **Memory:** RAM usage regularly hits 1GB+ vs ~80MB for Rust-based Codex CLI. [MODERATE evidence]

4. **Community workarounds exist** (`opencode-claude-auth` plugin) but core Anthropic integration blocked.

**Features (legal issues aside):**
- 75+ LLM providers via Models.dev
- Two agent modes: Build (full file/command access) and Plan (read-only, approval-based)
- LSP integration (Rust, Swift, TypeScript, PyRight, Terraform)
- Multi-session parallel agents with shareable session links
- Available as: terminal TUI, desktop app (beta), VS Code/Cursor extension
- Privacy-first: no code stored by Anomaly

**Comparison:**
- [MODERATE] morphllm.com "OpenCode vs Claude Code (2026)": positioned as "Open Source Freedom vs Anthropic Polish"
- [MODERATE] morphllm.com "OpenCode vs Codex CLI (2026)": "112K Stars vs GPT-5.3 Codex-Spark"

**Official docs:**
- https://opencode.ai/docs/
- https://github.com/anomalyco/opencode/releases

---

### 11. JetBrains Junie CLI — NEW CONTENDER

**GitHub stars: 119** (brand new repo, not a meaningful metric)
**Beta launched: March 9, 2026**
**Pricing: $10/month individual, $60/month enterprise; existing JetBrains AI licenses valid**

**Traction signals:**
- [STRONG] JetBrains has 12M+ developers in its IDE ecosystem. Junie CLI is positioned as direct migration path from Claude Code and Codex. Source: https://blog.jetbrains.com/junie/2026/03/junie-cli-the-llm-agnostic-coding-agent-is-now-in-beta/
- [STRONG] Launched alongside "Air" — new agent IDE built on Fleet's codebase. Source: devops.com, infoworld.com (March 2026)
- [STRONG] One-click migration from Claude Code, Codex, and other agents — explicit competitive move.
- [MODERATE] HN: "Junie, Your Coding Agent by JetBrains" — 24 pts (Jan 23, 2025 — older IDE plugin version). HN engagement low for CLI beta specifically.
- [MODERATE] BYOK model: no platform surcharges. Free trial: 1 week of Gemini 3 Flash by default.
- [MODERATE] "Strong benchmark results — even with fast, low-cost models like Gemini Flash 3" (JetBrains blog claim, unverified independently).

**Key features:**
- LLM-agnostic: OpenAI, Anthropic, Google, Grok; BYOK
- Real-time prompting during agent execution (adjust mid-task)
- MCP server auto-detection (no manual config)
- Next-task prediction from project context
- Runs in terminal, any IDE, CI/CD, GitHub/GitLab
- Cloud execution (isolated sandboxes) — enterprise tier forthcoming

**Strategic significance:**
- JetBrains is the only IDE incumbent (vs VS Code ecosystem) entering this space
- Enterprise control features (SSO) already on roadmap
- Directly targets Claude Code's enterprise market with BYOK + no surcharges positioning

**Official docs:**
- https://junie.jetbrains.com/docs/junie-cli.html
- https://blog.jetbrains.com/junie/2026/03/junie-cli-the-llm-agnostic-coding-agent-is-now-in-beta/

---

### 12. Amp (ampcode.com / Sourcegraph) — NEW CONTENDER

**GitHub stars:** No public repo (closed-source CLI) — GitHub community repo: github.com/ben-vargas/ai-amp-cli (unofficial)
**Free tier:** Closed to new users. Pay-as-you-go (no markup). Enterprise contact-sales.

**Traction signals:**
- [STRONG] "The Coding Agent Is Dead" manifesto published February 19, 2026. Core argument: model capability has made agent scaffolding irrelevant; new bottlenecks are codebase organization and organizational practice. Amp killed VS Code/Cursor extensions (self-destructed March 5, 2026). Source: https://ampcode.com/news/the-coding-agent-is-dead
- [STRONG] Sourcegraph and Amp Inc. separating into two companies: Dan Adler = Sourcegraph CEO; Quinn Slack + Beyang Liu = Amp Inc. (frontier coding agents). Source: sourcegraph.com/blog/a-new-era-for-sourcegraph (Feb 2026)
- [STRONG] Sourcegraph 7.0 announced Feb 25, 2026 — positions Sourcegraph as "intelligence layer for AI agents and developers."
- [MODERATE] User testimonial (Cloudflare Principal Systems Engineer): "Use the CLI version imo, it's the first thing I've tried that beats Claude Code." Source: morphllm.com via Cloudflare statement.
- [MODERATE] GPT-5.4 adopted as oracle model March 5, 2026, improving response quality score from 60.8% to 68.2% (internal Amp metric, not independently verified).
- [WEAK] No HN stories > 10pts found for "amp sourcegraph coding" in 2026.

**Current models:**
- Oracle mode: GPT-5.4
- Deep mode: GPT-5.3-Codex
- Smart mode: Claude Opus 4.6 (300K input context)

**Key features:**
- Code review agent composable as subroutine (`.agents/checks/`)
- Agent Skills system (replaced custom commands Jan 29, 2026)
- Sub-agents for parallel task execution
- Pay-as-you-go: no token markup for individuals
- Works in VS Code, JetBrains (via CLI), Neovim, terminal

**Positioning:**
- [MODERATE] Sourcegraph's 100M+ repos indexed gives unique codebase intelligence angle
- [MODERATE] "Practices matter more than agents" is differentiated thought leadership positioning for senior devs

**Official docs:**
- https://ampcode.com/manual
- https://ampcode.com/news/the-coding-agent-is-dead

---

### 13. Grok Build (xAI) — NEW CONTENDER

**GitHub stars:** No public repo
**Status:** Waitlist-only as of March 25, 2026 (announced January 12, 2026)
**Model:** grok-code-fast-1 (released Aug 26, 2025)

**Traction signals:**
- [MODERATE] Grok Build announced Jan 12, 2026 with unique architecture: up to 8 parallel AI coding agents simultaneously, side-by-side output.
- [MODERATE] Arena Mode (not yet public): agents compete/collaborate; outputs ranked algorithmically before human review. Found in code traces Feb 2026. Source: testingcatalog.com/xai-tests-parralel-agents-and-arena-mode-for-grok-build/
- [MODERATE] Local-first: all code executes on developer hardware; no source transmitted to xAI servers. Fine-grained permissions. Air-gap compatible.
- [MODERATE] grok-code-fast-1 benchmark: 70.8% SWE-Bench Verified, 256K context window. Source: adwaitx.com/grok-build-vibe-coding-cli-agent/
- [WEAK] Still waitlist-only after 10+ weeks. Monthly installs: ~9K (Grok CLI, discover run; Grok Build not yet launched separately).
- [WEAK] No HN stories > 10pts found for "grok build coding agent."

**Architecture differentiators:**
- 8 parallel agents (4 per model: Grok Code 1 Fast + Grok 4 Fast)
- Arena Mode: algorithmic competition/collaboration between agents
- Local-first: developer hardware execution, no code leaves machine
- GitHub integration and live code previews in development

**Context:**
- [MODERATE] Grok 4.20 (released separately): multi-agent with 4 internal AI agents debating before answering — demonstrates xAI's multi-agent thesis extends beyond Grok Build. Source: awesomeagents.ai/news/grok-4-20-multi-agent-launch/

**Official sources:**
- https://www.adwaitx.com/grok-build-vibe-coding-cli-agent/
- https://www.testingcatalog.com/xai-tests-parralel-agents-and-arena-mode-for-grok-build/

---

### 14. Devin (Cognition AI)

**GitHub stars:** No public repo (SaaS product)
**Current version: Devin 2.2** (released Feb 24, 2026)
**Pricing:** $10 free credits for new users; Core plan $20/month; $2.25 per Agent Compute Unit

**Traction signals:**
- [STRONG] 67% PR merge rate — up from 34% a year prior. Source: cognition.ai/blog/devin-annual-performance-review-2025, deployhq.com
- [STRONG] Devin 2.2 released Feb 24, 2026 with desktop/GUI computer use (browsers, Figma, Photoshop on Linux VM); Devin Review (self-QA pass before PR). Source: https://cognition.ai/blog/introducing-devin-2-2
- [STRONG] Session boot: 45s → 15s (3x faster, confirmed in 2.2 announcement).
- [MODERATE] $20 Core plan (96% price cut from $500/month original). Turns Devin from enterprise-only to prosumer product. Source: cognition.ai/blog/devin-2
- [MODERATE] HN: cognition.ai/blog/blockdiff — 11 pts, 1 comment (June 2025). Low HN traction for Devin-specific stories.
- [MODERATE] SWE-bench Verified scores exceeding 80% cited by some reviewers, but specific Devin 2.2 score not independently confirmed in this research.
- [WEAK] Slack and Linear integration improvements in 2.2 (no third-party reviews found confirming quality).

**Devin Review feature:**
- [STRONG] "Plans, codes, reviews its own output, catches issues, and fixes them — all before you ever open the PR." Claimed to catch 30% more issues before human review. Source: digitalapplied.com/blog/devin-2-desktop-code-review-ai-engineer-guide

**Positioning:**
- [MODERATE] Best for clearly defined tasks with verifiable success criteria: bug backlog clearing, documentation maintenance, repetitive migrations. Source: idlen.io/blog/devin-ai-engineer-review-limits-2026/
- [MODERATE] Not optimized for terminal-native workflows — more web dashboard/Slack-integrated SaaS. Differentiated from pure CLI agents.

**Official docs/changelog:**
- https://docs.devin.ai/release-notes/overview
- https://cognition.ai/blog/introducing-devin-2-2

---

## Quantitative Traction Summary Table

| Tool | GitHub Stars | Monthly Installs | HN (top story pts) | HN story date | SWE-bench Verified |
|------|-------------|-----------------|---------------------|---------------|-------------------|
| OpenCode | 130,000 | unknown | 1,265 pts | Mar 20, 2026 | n/a |
| Gemini CLI | 99,000 | ~1.5M | 1,428 pts | Jun 25, 2025 | 80.6% |
| Claude Code | 82,400 | ~17M | 2,127 pts | Feb 24, 2025 | 80.9% |
| OpenHands | 69,700 | unknown | <10 pts (recent) | — | 52.4%* |
| Codex CLI | 67,500 | ~1.5M | 516 pts | Apr 16, 2025 | ~77-80% |
| Cline | 59,300 | 5M (total) | <10 pts (recent) | — | n/a |
| Aider | 42,400 | ~200-250K/mo | 202 pts | Mar 2024 | n/a |
| Goose | 33,600 | unknown | 0 pts (recent) | — | n/a |
| Continue | 32,000 | unknown | <10 pts (recent) | — | n/a |
| Copilot CLI | 9,600 | 200-250K/mo | 62 pts | Feb 27, 2026 |  n/a |
| OpenCode | 130,000 | — | — | — | — |
| JetBrains Junie | 119 | unknown | 24 pts | Jan 2025 | "strong" (unverified) |
| Amp | 0 (closed) | unknown | 0 pts (recent) | — | 68.2% (internal) |
| Grok Build | 0 (waitlist) | ~9K (Grok CLI) | 0 pts (recent) | — | 70.8% (grok-code-fast-1) |
| Devin | 0 (SaaS) | unknown | 11 pts | Jun 2025 | ~67% PR merge rate |

*OpenHands 52.4% drops to 18.2% with enhanced test suites — see benchmark inflation warning.

Notes:
- Stars and installs measured March 25, 2026
- HN points = highest single story found for the tool
- SWE-bench Verified scores are for the underlying model/agent combination where available
- "~17M monthly installs" for Claude Code = npm + native installer combined (Jan 2026 leaderboard)

---

## Pairwise Comparison: Top 5 Contenders

### Claude Code vs Codex CLI

**Claude Code advantages:**
- 17M monthly installs vs 1.5M [STRONG]
- 71% agentic task market share [STRONG]
- $2.5B ARR — category-defining commercial momentum [STRONG]
- Agent Teams / Swarm Mode for parallel orchestration [MODERATE]
- Best-in-class code quality: "requires the least reviewing before merging" [MODERATE]

**Codex CLI advantages:**
- Rust native binary: ~80MB RAM, fast startup, no Node.js [STRONG]
- Sandbox-first execution: safest default in category [STRONG]
- Codex Security agent (vulnerability detection) — unique offering [MODERATE]
- Open-source (Apache 2.0); Claude Code is proprietary [MODERATE]
- 192K context window, GPT-5.4 model access [MODERATE]

**Verdict:** Claude Code leads on adoption, revenue, and code quality. Codex CLI leads on safety and efficiency. For enterprise security-conscious deployments, Codex CLI's sandboxed architecture is a differentiator.

---

### Claude Code vs Gemini CLI

**Claude Code advantages:**
- 17M monthly installs vs 1.5M [STRONG]
- Market share, revenue, community engagement [STRONG]
- More consistent autonomy (fewer review cycles per task) [MODERATE]

**Gemini CLI advantages:**
- 1M token context window (largest in category) [STRONG]
- Free tier: 1,000 requests/day at zero cost [STRONG]
- 99k stars (vs 82.4k) — broader community interest [MODERATE]
- Free tier fine print: Pro-to-Flash downgrading under load [MODERATE negative]

**Verdict:** Gemini CLI wins on accessibility and context. Claude Code wins on autonomy and output quality. Different personas: Gemini CLI for budget-constrained individual developers; Claude Code for teams where output quality matters more than cost.

---

### OpenCode vs Claude Code

**OpenCode advantages:**
- 130k stars vs 82.4k — highest star count in category [STRONG but see trust flags]
- 75+ LLM providers — not locked to any single vendor [MODERATE]
- LSP integration, parallel sessions, shareable links [MODERATE]
- Open source (TypeScript TUI + Go) [MODERATE]

**OpenCode disadvantages:**
- Anthropic legal action for OAuth header spoofing [STRONG NEGATIVE]
- Unauthenticated RCE vulnerability [STRONG NEGATIVE]
- Claude integration blocked by Anthropic server-side [STRONG NEGATIVE]
- RAM: 1GB+ vs Claude Code's more modest footprint [MODERATE NEGATIVE]

**Verdict:** Star count signals interest but trust flags disqualify OpenCode from recommended status for any enterprise or security-sensitive context. Stars likely reflect novelty and the controversy itself driving attention rather than sustained production use.

---

### Goose vs Claude Code

**Goose advantages:**
- Zero marginal cost if you already have Claude/ChatGPT/Gemini subscription (via ACP) [STRONG]
- Open-source (Apache 2.0), model-agnostic [STRONG]
- 60% of Block's 12K employees use it weekly — real production evidence [STRONG]
- ACP integration: emerging interoperability standard [MODERATE]

**Claude Code advantages:**
- 71% developer market share for agentic tasks vs Goose's niche [STRONG]
- $2.5B ARR vs Goose's zero revenue [STRONG]
- 17M monthly installs vs Goose's unknown but smaller base [STRONG]

**Verdict:** Goose is compelling for developers who already pay for AI subscriptions and want zero-marginal-cost agentic coding. Claude Code leads on raw adoption. Goose is the strongest free alternative for teams that need model flexibility.

---

### Devin vs Claude Code

**Devin advantages:**
- 67% PR merge rate — a production-quality metric not benchmark performance [STRONG]
- Desktop/GUI computer use (Figma, browsers, Photoshop) — unique in category [STRONG]
- Devin Review (self-QA) catches 30% more issues before human review [MODERATE]
- $20/month entry — prosumer pricing [MODERATE]

**Claude Code advantages:**
- Terminal-native; Devin is web-dashboard SaaS [STRONG differentiation]
- 17M installs vs Devin's unknown but smaller developer base [STRONG]
- Agent Teams for parallel workstreams [MODERATE]

**Verdict:** Not direct competitors in daily use — Devin targets defined-task autonomous execution with business integration (Slack, Linear); Claude Code targets interactive terminal-native development. Devin is strongest for "autonomous engineering sprint" use cases.

---

## YouTube Videos

**Claude Code:**
- Search query: https://www.youtube.com/results?search_query=claude+code+tutorial+2026
- Notable: viral demos reaching 853K views (per medium.com/@rentierdigital/i-watched-25-claude-code-youtube-videos-so-you-dont-have-to-the-definitive-ranking-550aa6863840)
- Nick Saraev: 4-hour masterclass (agent teams, Git worktrees, cloud deployment)
- Sabrina Ramonov: beginner course "5 INSANE Claude Code + Video Prompts" — https://www.sabrina.dev/p/5-insane-claude-code-video-prompts

**Codex CLI:**
- Class Central: "Claude Code + Codex CLI — Building a UNHINGED AI Video App" (19 min) — https://www.classcentral.com/course/youtube-claude-code-codex-cli-building-a-unhinged-ai-video-app-478329
- DataCamp tutorial series (April 2025+)

**Gemini CLI:**
- Sam Witteveen: "Introducing Gemini CLI" — https://www.classcentral.com/course/youtube-introducing-gemini-cli-462810
- "Gemini CLI + ANY MCP Server Step-by-Step Tutorial" — video ID: FE1LChbgFEw (chaindesk.ai/tools/youtube-summarizer/gemini-cli-any-mcp-server-step-by-step-tutorial-FE1LChbgFEw)
- Romin Irani 15-part tutorial series: https://medium.com/google-cloud/gemini-cli-tutorial-series-77da7d494718

**Aider:**
- Official tutorial list: https://aider.chat/docs/usage/tutorials.html
- Coding the Future With AI: "Aider and Claude 3.5: Develop a Full-stack App Without Writing ANY Code!"
- Matthew Berman: "Holy Grail: FREE Coding Assistant That Can Build From EXISTING CODE BASE"
- AICodeKing: "Generate application with just one prompt using Aider"

**GitHub Copilot CLI:**
- Search: https://www.youtube.com/results?search_query=github+copilot+cli+tutorial+2026
- No specific video IDs extracted (YouTube HTML not parseable via WebFetch)

**OpenCode, Continue, Goose, JetBrains Junie, Amp, Grok Build, Devin:**
- No extractable YouTube video IDs found for these tools in this research round. OpenCode has minimal dedicated tutorial content; most users rely on docs at opencode.ai/docs/.

---

## Gaps in Evidence and Unresolved Questions

1. **OpenCode 130k stars — how many are "real" users vs curiosity/controversy stars?** The Anthropic legal conflict and RCE vulnerability both drove HN traffic. Stars spiked Jan 12, 2026 (+2,087/day) when the Anthropic block story broke. True production user count unknown. Unresolved.

2. **Aider 2026 HN traction absent.** No Aider-specific HN story > 10pts found in 2026 searches. The tool has 5.7M installs and 15B tokens/week but no community-amplified launch moment in 2026. This may reflect that Aider's user base is "quiet professionals" rather than HN-viral adopters.

3. **OpenHands production user count unknown.** 69.7k stars and v1.5.0 released but no monthly install data. No HN traction found. The OpenHands Index benchmark is rigorous but self-produced.

4. **Amp enterprise pricing unclear.** Free tier closed; pay-as-you-go available but "Public Free and Pro self-serve plans discontinued in 2025." Actual pricing post-pivot not found.

5. **Grok Build still waitlist-only.** 10+ weeks since announcement with no GA. Arena Mode still in code traces only. Hard to evaluate without public access.

6. **JetBrains Junie CLI benchmark claims unverified.** "Strong benchmark results — even with fast, low-cost models" is self-reported. No independent SWE-bench or Terminal-Bench score found.

7. **Goose install count unknown.** The 60% of Block employees metric is strong internal evidence but developer-community adoption is unknown. No monthly install stat found.

8. **Claude Code npm installs vs native installer split.** npm deprecated, native installer recommended. The "17M monthly installs" from discover run predates the native-installer pivot. Current actual monthly installs may be higher (native installer not tracked by npm).

9. **Codex CLI 2026 HN traction gap.** The April 2025 launch post (516 pts) is the only notable HN story. No 2026 Codex-specific HN story found above threshold. Is awareness plateauing?

10. **Continue.dev post-pivot user count unknown.** Pivot from IDE extension to CI agent was mid-2025. Current active users in the new CI model not quantified. 32k stars reflect the old product.

---

## Recommended Next Steps

1. **Add OpenCode to catalog with Tier 1 star count / Tier 3 trust rating.** Display stars prominently but flag Anthropic legal conflict and RCE as primary trust blockers. Include "NOT RECOMMENDED for enterprise use" badge.

2. **Upgrade Claude Code catalog entry.** Add: SemiAnalysis 4% GitHub commits claim (Feb 5, 2026), Agent Teams feature (Feb 2026), $2.5B ARR, native-installer-first install path. Update SWE-bench from "45.89% SEAL" to "80.9% Verified (Opus 4.6)."

3. **Add Gemini CLI to catalog.** 99k stars makes it second-largest by community interest. Free tier + 1M context = differentiated value prop. Flag Pro-to-Flash downgrade caveat.

4. **Add Goose with ACP interoperability angle.** Position as "use your existing AI subscription" solution. Include Block workforce context as trust signal (real production use) with appropriate nuance.

5. **Add JetBrains Junie CLI as Tier 2/3 watchlist.** Enterprise incumbent, 12M developer ecosystem, BYOK. Benchmark claims unverified — do not use for ranking until independent scores found.

6. **Add Amp as Tier 3 watchlist.** CLI-only pivot, "coding agent is dead" positioning, Cloudflare testimonial. Free tier closed limits immediate user testing.

7. **Add Grok Build as Tier 4 watchlist.** Still waitlist-only. 8-parallel-agent architecture is category-unique but unproven in production.

8. **Update Cline entry with supply chain attack.** Clinejection is a [STRONG] trust event. Enterprise recommendations for Cline must include this flag.

9. **Update benchmarks section.** Current catalog uses "45.89% SEAL" for Claude Code. Replace with: SWE-bench Verified ceiling at 80.9% (Opus 4.6); METR maintainer-merge finding (~50% of passing PRs not mergeable); SWE-CI (75% of models break working code); Terminal-Bench 2.0 (GPT-5.3 leads at 77.3%).

10. **Run rank agent** after catalog updates. OpenCode's star count vs trust flags, Gemini CLI's free tier positioning, and Goose's ACP differentiation all require tier re-evaluation.

---

## Quotes Worth Preserving

- "4% of GitHub public commits are being authored by Claude Code right now. At the current trajectory, we believe that Claude Code will be 20%+ of all daily commits by the end of 2026." — SemiAnalysis (Dylan Patel), February 5, 2026 (https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point)

- "The agent — the prompts and tools you wrap around a model — is no longer the limiting factor." — Amp/Sourcegraph, "The Coding Agent Is Dead," February 19, 2026 (https://ampcode.com/news/the-coding-agent-is-dead)

- "Use the CLI version imo, it's the first thing I've tried that beats Claude Code." — Cloudflare Principal Systems Engineer (via morphllm.com Amp review)

- "The same model scores 17 problems apart in different agents." — morphllm.com, "We Tested 15 AI Coding Agents (2026). Only 3 Changed How We Ship." (architectural scaffolding matters as much as the model)

- "A GitHub issue title compromised 4,000 developer machines." — grith.ai, on Clinejection supply chain attack, February 2026

- "Junie CLI offers one-click migration from Claude Code, Codex, and other agents." — JetBrains blog, March 9, 2026

- "60% of Block's 12,000 employees use Goose weekly." — block.github.io/goose, March 2026

- "Devin's PR merge rate improved from 34% to 67% over 2025." — Cognition AI, 2025 Performance Review

---

## Ranking Recommendations (Evidence-Based)

**Tier 1 — Dominant / Market-Defining:**
- **Claude Code** — 17M installs, 71% agentic market share, $2.5B ARR, 4% GitHub commits. No close competitor on adoption or commercial traction. [STRONG evidence across all dimensions]
- **Gemini CLI** — 99k stars, 1.5M installs, best free tier, 1M context window. #2 by community interest. [STRONG evidence]

**Tier 2 — Strong Challengers:**
- **Codex CLI** — 67.5k stars, 1.5M installs, Rust-native, sandboxed execution, Codex Security agent. [STRONG evidence]
- **OpenHands** — 69.7k stars, rigorous self-published OpenHands Index benchmark, v1.5.0 active development. [STRONG evidence for stars/development; MODERATE for production use]

**Tier 3 — Established Niche Players:**
- **Cline** — 59.3k stars, 5M installs (total), Plan/Act mode, CoreWeave partnership. Major trust event (supply chain attack Feb 2026) must be flagged. [STRONG traction, STRONG negative event]
- **Aider** — 42.4k stars, 5.7M pip installs, 15B tokens/week, terminal-native pioneer. Quiet but deep community. [STRONG usage evidence]
- **Goose** — 33.6k stars, ACP-native, 60% Block employees. Best zero-cost angle via subscription reuse. [STRONG internal evidence, MODERATE external]
- **GitHub Copilot CLI** — 9.6k stars but 15M subscriber distribution base. GA Feb 25, 2026. [STRONG distribution evidence, MODERATE engagement]
- **Continue** — 32k stars, CI-agent pivot is differentiated. Enterprise quality-gate angle. [MODERATE evidence post-pivot]

**Tier 4 — Watchlist / New Entrants:**
- **OpenCode** — #1 stars (130k) but legal conflict + RCE + Anthropic integration blocked. Use with strong trust caveat. [STRONG interest signal, STRONG trust negative]
- **JetBrains Junie CLI** — 12M ecosystem, enterprise BYOK, beta March 2026. Benchmarks unverified. [MODERATE strategic importance]
- **Amp** — CLI-only pioneer, Sourcegraph codebase intelligence, Cloudflare testimonial. Free tier closed. [MODERATE differentiation, WEAK accessibility]
- **Devin** — 67% PR merge rate, GUI computer use, Devin Review. SaaS not CLI. Different use case. [STRONG niche evidence]
- **Grok Build** — 8-parallel-agent architecture is category-unique. Still waitlist-only. [MODERATE potential, WEAK current evidence]
