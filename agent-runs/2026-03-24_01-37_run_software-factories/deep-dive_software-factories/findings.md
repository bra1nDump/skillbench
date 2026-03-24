# Deep-Dive Findings: Software Factories

## Scope

Full deep-dive protocol for the **software-factories** problem space. Evidence-backed assessment of every serious contender, with quantitative traction, official artifacts, public comparisons, usage evidence, and new contender evaluation.

## Date

2026-03-24T02:15Z

## Inputs

### Research Agents Dispatched (5 parallel)
1. **OpenCode** — GitHub API, HN Algolia, web searches (5 queries), official artifacts, YouTube
2. **Claude Code + Cursor** — GitHub API, HN (points>50), web searches (6 queries), YouTube
3. **Gemini CLI + Codex CLI + Copilot** — GitHub API, HN, web searches (6 queries), release changelogs
4. **New contenders** — Symphony, Open SWE, deer-flow, Junie CLI, Warp ADE — GitHub API, HN, web searches (8 queries)
5. **Comparisons + Videos** — 8 head-to-head web searches, 5 YouTube searches, Dark Factory pattern research

### Prior Runs Referenced
- `agent-runs/2026-03-24_01-37_run_software-factories/discover_software-factories/findings.md`

---

## Findings

---

### 1. CLAUDE CODE (Anthropic) — Current #1

**Verdict: CONFIRMED #1. Evidence strengthened on every axis since last catalog update.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| GitHub stars | 81,714 | 2026-03-24 | [STRONG] |
| GitHub forks | 6,814 | 2026-03-24 | [STRONG] |
| Open issues | 7,434 | 2026-03-24 | [STRONG] |
| Latest release | v2.1.81 | 2026-03-20 | [STRONG] |
| SWE-bench Verified | 80.9% (Opus 4.5), 80.8% (Opus 4.6) | 2026-03 | [STRONG] |
| SWE-bench Pro | 58.0% (custom scaffold) | 2026-03 | [STRONG] — up from catalog's 49.8% |
| HN top story | 2,127 pts | 2026 | [STRONG] |
| HN Feb-Mar stories | 1,086 pts (60yo), 1,085 pts (dumbed down), 976 pts (planning), 611 pts | Feb-Mar 2026 | [STRONG] |
| Developer love | 46% "most loved" (morphllm survey) | 2026 | [STRONG] |

#### Official Artifacts (March 2026)

**[STRONG] Claude Code Review (March 9)**
Multi-agent PR review system. Dispatches agent teams per PR, searches for bugs in parallel, verifies to filter false positives. Internally raised PRs receiving substantive review from 16% to 54%. For 1,000+ line PRs, finds issues in 84% of cases (~7.5 issues/review). Cost: $15-25/PR. Team and Enterprise tiers.
Source: [Anthropic blog](https://claude.com/blog/code-review), [TechCrunch](https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/)

**[STRONG] Claude Code Channels (March 20)**
Control Claude Code via Telegram/Discord — full filesystem/MCP/git access from mobile. Research preview. Requires v2.1.80+.
Source: [VentureBeat](https://venturebeat.com/orchestration/anthropic-just-shipped-an-openclaw-killer-called-claude-code-channels), [MacStories](https://www.macstories.net/stories/first-look-hands-on-with-claude-codes-new-telegram-and-discord-integrations/)

**[STRONG] Voice Mode, /loop, 1M Context**
- Push-to-talk via `/voice` command, spacebar-activated
- `/loop` command: recurring monitoring — define interval + prompt
- 1M token context window in beta for Opus 4.6
- Opus 4.6 is now the default model
Source: [Releasebot changelog](https://releasebot.io/updates/anthropic/claude-code)

**[STRONG] Apple Xcode 26.3 Native Integration (Feb 2026)**
Claude Code is the default agentic coding engine inside Xcode. Visual verification via Xcode Previews, full project understanding, autonomous multi-file execution.
Source: [Apple Newsroom](https://www.apple.com/newsroom/2026/02/xcode-26-point-3-unlocks-the-power-of-agentic-coding/), [Anthropic](https://www.anthropic.com/news/claude-in-xcode)

#### Public Comparisons

**[STRONG]** vs Cursor: 5.5x fewer tokens for identical tasks, ~30% less code rework. "Many teams give everyone Cursor for daily editing + senior engineers get Claude Code for architecture."
Source: [Builder.io](https://www.builder.io/blog/cursor-vs-claude-code)

**[STRONG]** vs Codex CLI: Claude wins 67% of blind code quality comparisons. In real-world Stripe integration test, Claude Code completed in 15 minutes vs Codex's 1h20m.
Source: [Builder.io](https://www.builder.io/blog/codex-vs-claude-code), [SmartScope](https://smartscope.blog/en/generative-ai/chatgpt/codex-vs-claude-code-2026-benchmark/)

#### Switching Narratives

**[STRONG]** Multiple first-person "Cursor → Claude Code" accounts:
- [56kode](https://dev.to/56_kode/why-were-moving-from-cursor-to-claude-code-and-why-you-should-too-9kh): "high costs for teams, RAM saturation, more time fighting UI than building"
- [JS in Plain English](https://javascript.plainenglish.io/i-replaced-cursor-agent-with-claude-code-heres-what-happened-d5cf45b76598): Cursor power user "abandoned it all for Claude Code... there's no going back"
- [Grizzly Peak](https://www.grizzlypeaksoftware.com/articles/p/switching-from-cursor-to-vs-code-claude-productivity-beforeafter-h4TGWU): Productivity before/after

#### Catalog Update Needed
- SWE-bench Pro: **49.8% → 58.0%** (major improvement)
- Stars: **80,078 → 81,714**
- New features: Code Review, Channels, Voice Mode, /loop, 1M context
- New launch: Xcode 26.3 integration confirmed and shipping

---

### 2. CURSOR (Anysphere) — Current #2

**Verdict: CONFIRMED #2. Revenue story is extraordinary. Automations is the key differentiator but still unvalidated by community.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| ARR | $2B (doubled in 90 days) | 2026-03-02 | [STRONG] |
| Valuation | $50B (in talks, up from $29.3B) | 2026-03-12 | [STRONG] |
| DAU | 1M+ | 2026 | [STRONG] |
| Enterprise revenue share | 60% | 2026 | [STRONG] |
| SWE-bench Pro | 50.2% (custom) | 2026 | [MODERATE] — custom scaffold |
| HN top story | Low (<100 pts for Automations) | 2026-03 | [WEAK] |

#### Official Artifacts (March 2026)

**[STRONG] Automations Platform (March 6)**
Always-on AI agents triggered by events: code commits, Slack messages, timers, PagerDuty, Linear, webhooks. "Hundreds of automations run hourly." Use cases: security audits on push, PR risk classification with auto-approve, weekly codebase summaries, test coverage gap detection. Rippling using automations for meeting notes/PR/Slack aggregation.
Source: [MLQ](https://mlq.ai/news/cursor-releases-automations-platform-for-ai-coding-agent-management/), [The New Stack](https://thenewstack.io/cursor-agents-developer-workflows/)

**[STRONG] Cloud Agents with Computer Use (Feb 24)**
Cloud agents run in isolated VMs with full dev environments. Open browsers, navigate localhost, click through UI, verify code visually, produce merge-ready PRs with video recordings. **35% of Cursor's own merged PRs** created by these cloud agents.
Source: [DevOps.com](https://devops.com/cursor-cloud-agents-get-their-own-computers-and-35-of-internal-prs-to-prove-it/)

**[STRONG] Plugin Ecosystem (March)**
30+ new plugins from Atlassian, Datadog, GitLab, Glean, Hugging Face, monday.com, PlanetScale. Cloud agents can use plugins via MCP.
Source: [The Agency Journal](https://theagencyjournal.com/cursors-march-2026-updates-jetbrains-integration-and-smarter-agents/)

**[STRONG] $2B ARR in Context**
Slack took 5 years to reach $1B ARR. Cursor did the second billion in a single quarter. Named customers: OpenAI, Midjourney, Perplexity, Shopify. ~25% market share among generative AI software buyers.
Source: [Bloomberg](https://www.bloomberg.com/news/articles/2026-03-02/cursor-recurring-revenue-doubles-in-three-months-to-2-billion)

#### Watch
- Automations HN signal is still very low — no 500+ point stories specifically about Automations
- Closed-source IDE — vendor lock-in concern persists
- Some individual devs migrating to Claude Code (but enterprise growth more than compensates)

#### Catalog Update Needed
- Valuation: **$29.3B → $50B (in talks)**
- ARR context: Slack comparison (5 years vs 1 quarter)
- Cloud agents with computer use + 35% internal PRs
- 30+ vendor plugins

---

### 3. NEW CONTENDER ALERT: OpenCode (anomalyco/opencode, fka sst/opencode)

**Verdict: ADD TO CATALOG. Rank #3-4 by stars/community, but no benchmarks and critical security history. Recommend #5-6.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| GitHub stars | 128,817 | 2026-03-24 | [STRONG] — #1 in entire category |
| GitHub forks | 13,645 | 2026-03-24 | [STRONG] |
| Open issues | 7,401 | 2026-03-24 | [MODERATE] — high, signals growth pains |
| License | MIT | — | [STRONG] |
| Latest release | v1.3.0 | 2026-03-22 | [STRONG] |
| Releases in 14 days | 5 | 2026-03 | [STRONG] |
| HN top story | 1,253 pts, 619 comments | 2026-03-20 | [STRONG] |
| HN security story | 432 pts, 142 comments | 2026-01-11 | [STRONG] negative |
| HN initial launch | 319 pts, 91 comments | 2025-07-06 | [STRONG] |
| NPM weekly downloads | ~420K/week | 2026-03 | [MODERATE] |
| SWE-bench score | None (harness, not model) | — | [WEAK] — no independent benchmarks |

#### Key Differentiators
- **75+ LLM providers** — Claude, GPT, Gemini, DeepSeek, Grok, Ollama local models
- **Client/server architecture** — TUI is one frontend; can drive remotely from mobile
- **Built-in agents**: "build" (full-access), "plan" (read-only), "@general" sub-agent
- **LSP integration** — 40+ built-in LSP servers
- **Desktop app** (beta): macOS, Windows, Linux
- **Install**: npm, brew, scoop, choco, pacman, nix, mise, curl

#### CRITICAL: Security Incident

**[STRONG] CVE-2026-22812: CVSS 10.0 RCE**
OpenCode automatically started an unauthenticated HTTP server allowing any local process or any website (via permissive CORS) to execute arbitrary shell commands with user privileges. Any website a developer visited could execute arbitrary code on their machine.
- Affected: All versions before 1.0.216 (partial fix), full fix in 1.1.10
- Source: NVD, SentinelOne, The Hacker Wire
- HN: 432 pts, 142 comments

#### CRITICAL: Anthropic Legal Conflict

**[STRONG]** Anthropic deployed server-side blocks preventing OpenCode from using Claude Pro/Max OAuth tokens. Formal legal request to remove Claude OAuth support. OpenCode complied, redirecting users to OpenAI, GitHub, GitLab alternatives. Users reported account bans after using OpenCode with Claude OAuth.
- Source: [The Register](https://www.theregister.com/2026/02/20/anthropic_clarifies_ban_third_party_claude_access/)

#### Media Coverage
- [Builder.io: OpenCode vs Claude Code](https://www.builder.io/blog/opencode-vs-claude-code) [STRONG]
- [DataCamp: OpenCode vs Claude Code](https://www.datacamp.com/blog/opencode-vs-claude-code) [STRONG]
- [Daniel Miessler: OpenCode vs Claude Code](https://danielmiessler.com/blog/opencode-vs-claude-code) [STRONG]
- [InfoQ: OpenCode competing with Claude Code and Copilot](https://www.infoq.com/news/2026/02/opencode-coding-agent/) [STRONG]
- [LogRocket: Security team blocked Cursor/Claude Code — switch to OpenCode](https://blog.logrocket.com/security-switching-opencode/) [STRONG]

#### Assessment
OpenCode is the clear #1 open-source terminal coding agent by star count. The 1,253-point HN story on March 20 confirms massive developer interest. The provider-agnostic architecture is a genuine differentiator vs Claude Code's Anthropic lock-in. However:
- **No SWE-bench scores** — it's a harness, not a model. Performance depends entirely on the underlying LLM.
- **CVSS 10.0 RCE** is the worst security incident for any tool in this category (worse than Kiro's production incident in terms of attack surface).
- **Anthropic legal block** exposed dependence on consumer pricing arbitrage.
- **GitHub stars ≠ production usage** — Claude Code dominates actual commit share (4% of all public GitHub commits, 135K/day).

**Recommended rank: #5-6.** Stars and community signal are enormous, but lack of benchmarks, critical security history, and no proof of production-scale usage prevent a top-3 placement.

---

### 4. GEMINI CLI (Google) — Current #3

**Verdict: WEAKENED. Free tier paywall on Mar 25 removes key differentiator.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| GitHub stars | 98,813 | 2026-03-24 | [STRONG] |
| Open issues | 3,162 | 2026-03-24 | [STRONG] |
| SWE-bench Verified | 80.6% (Gemini 3.1 Pro) | 2026-02 | [STRONG] |
| GPQA Diamond | 94.3% (record) | 2026-02 | [STRONG] |
| ARC-AGI-2 | 77.1% (2x Gemini 3 Pro) | 2026-02 | [STRONG] |
| HN top story | 1,428 pts (launch) | 2025 | [STRONG] |
| HN recent | No high-scoring stories in 30 days | 2026-03 | [WEAK] |

#### Key March Updates

**[STRONG] Free Tier Paywall (March 25)**
Starting March 25, Gemini Pro models restricted to paid subscribers only. Free tier limited to Gemini Flash models. Traffic prioritization based on license type. This removes Gemini CLI's #1 selling point ("best free tier").
Source: [GitHub Discussion #22970](https://github.com/google-gemini/gemini-cli/discussions/22970)

**[STRONG] v0.33.0–v0.35.0 (March)**
- Plan Mode enabled by default
- Native gVisor/LXC sandbox
- HTTP auth for A2A remote agents
- Research subagents
- Loop detection to prevent stuck agents
- Subagents + SandboxManager

#### Head-to-Head vs Claude Code
**[MODERATE]** Composio comparison: Claude finished faster (1h17m vs Gemini's time), cost less ($4.80 vs $7.06), produced cleaner code. Gemini advantage: larger context (1M tokens).
Source: [Composio](https://composio.dev/content/gemini-cli-vs-claude-code-the-better-coding-agent)

#### Catalog Update Needed
- Free tier paywall: **1K req/day free → Flash-only free, Pro paid**
- New features: Plan Mode, gVisor sandbox, A2A agents, loop detection
- Gemini 3.1 Pro benchmarks: ARC-AGI-2 77.1%, GPQA 94.3%

---

### 5. CODEX CLI (OpenAI) — Current #4

**Verdict: CONFIRMED #4. Benchmark leader on Pro but still in alpha.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| GitHub stars | 67,110 | 2026-03-24 | [STRONG] |
| Open issues | 2,205 | 2026-03-24 | [STRONG] |
| SWE-bench Pro | 57.7% (GPT-5.4) | 2026-03 | [STRONG] — up from 57.0% |
| Latest release | v0.117.0-alpha.10 | 2026-03-23 | [MODERATE] — still alpha |
| Release cadence | ~6 alpha releases in March | 2026-03 | [STRONG] |

#### Key Updates
- **GPT-5.4 Codex** (Mar 5): 57.7% SWE-bench Pro — current OpenAI flagship for coding
- **Rust rewrite** continues — major architectural commitment but not yet stable 1.0
- Device-code ChatGPT sign-in, plugin sync, userpromptsubmit hook, Linux sandbox improvements

#### Watch
- Still alpha (v0.117.0-alpha) — not production-stable
- No high-scoring HN stories in 30 days
- Community signal significantly behind Claude Code and Cursor

---

### 6. GITHUB COPILOT — Current #5

**Verdict: CONFIRMED #5. Distribution moat holds but "floor not ceiling" narrative strengthens.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| Paid subscribers | 4.7M | 2026-01 (FY Q2) | [STRONG] |
| YoY growth | 75% | 2026-01 | [STRONG] |
| Fortune 100 | ~90% | 2026 | [STRONG] |
| All-time users | 20M+ | 2025-07 | [STRONG] |

#### March 2026 Updates

**[STRONG]** Agent commits now link to session logs (Mar 20). Semantic code search (Mar 17). Coding agent starts 50% faster (Mar 19). Admin-configurable validation tools (Mar 18). Jira integration public preview (Mar 5).
Source: [GitHub Blog](https://github.blog/changelog/)

**[MODERATE]** Performance gap vs Cursor: React component generation 67% vs Cursor's 83%. Autocomplete latency: 890ms vs Cursor's 320ms.
Source: [GitHub Discussion](https://github.com/orgs/community/discussions/161450)

#### Catalog Update Needed
- New: 50% faster startup, semantic search, Jira integration, session logs
- Performance gap vs Cursor widening

---

### 7. NEW CONTENDER: OpenAI Symphony (openai/symphony)

**Verdict: ADD TO CATALOG at #8-10. Architecturally significant but too young for higher.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| GitHub stars | 13,883 | 2026-03-24 | [MODERATE] |
| License | Apache-2.0 | — | [STRONG] |
| Language | Elixir | — | [MODERATE] |
| Age | 26 days (created 2026-02-26) | — | [WEAK] |
| HN launch | 25 pts | 2026-03-04 | [WEAK] |
| Status | Engineering preview | — | [WEAK] |

#### What It Is
A long-running orchestration service that polls your Linear board, creates isolated workspaces for each issue, dispatches **Codex CLI agents** to do the work, and delivers PRs. Requires "Proof of Work" (CI passes, walkthroughs) before merging. Built on Elixir/BEAM for fault tolerance — can manage hundreds of parallel implementation runs.

**Key insight:** Symphony is the project manager layer above Codex CLI. Codex CLI = hands-on-keyboard agent. Symphony = sprint board → autonomous agent runs → PRs. This is the only tool that directly connects issue trackers to autonomous agent runs with proof-of-work gating.

Source: [GitHub](https://github.com/openai/symphony), [MarkTechPost](https://www.marktechpost.com/2026/03/05/openai-releases-symphony-an-open-source-agentic-framework-for-orchestrating-autonomous-ai-agents-through-structured-scalable-implementation-runs/)

#### Assessment
Architecturally significant and fills a unique niche (issue tracker → agent orchestration). OpenAI brand + Apache-2.0 are strong. But: only 26 days old, engineering preview, 25 HN pts (surprisingly low), no formal releases. Monitor closely.

---

### 8. NEW CONTENDER: LangChain Open SWE (langchain-ai/open-swe)

**Verdict: ADD TO CATALOG at #9-10. Strong open-source async coding agent.**

#### Quantitative Traction

| Metric | Value | Date | Strength |
|--------|-------|------|----------|
| GitHub stars | 8,166 | 2026-03-24 | [MODERATE] |
| License | MIT | — | [STRONG] |
| Age | 10 months | — | [MODERATE] |
| HN launch | 111 pts | 2025-08-08 | [MODERATE] |
| Last push | 2026-03-23 | — | [STRONG] |

#### What It Is
Open-source async cloud-hosted coding agent. Three specialized LangGraph agents in sequence: Manager → Planner → Programmer (with sub-agent Reviewer). Each task runs in a secure Daytona sandbox. Invoked via Slack (`@openswe`) or Linear (comment `@openswe`). Creates PRs automatically.

First open-source tool replicating what Stripe, Ramp, and Coinbase built internally for async coding agents. Ships with ~15 curated tools.

Source: [GitHub](https://github.com/langchain-ai/open-swe), [LangChain blog](https://blog.langchain.com/introducing-open-swe-an-open-source-asynchronous-coding-agent/)

#### Assessment
Direct competitor to Copilot Workspace and Devin in async coding, but fully open-source and self-hostable. LangChain ecosystem backing gives strong integration story. Healthy trajectory (8K stars, very active dev). Weaker brand recognition than top tier.

---

### 9. EVALUATED AND EXCLUDED

#### ByteDance deer-flow (39,091 stars)
**NOT a software factory.** General-purpose "SuperAgent harness" — researches, codes, creates podcasts, generates images. Coding is one of many skills, not the primary purpose. Zero HN signal in English despite 39K stars (Chinese community-driven). **Better fit for agent-harnesses or teams-of-agents category.**

#### JetBrains Junie CLI (115 stars)
**Too early.** Just entered beta March 2026. Only 115 stars. The repo is a thin shell wrapper — actual agent code is proprietary. LLM-agnostic is interesting but needs 30-60 days to show traction. **Monitor for coding-clis category.**

#### Warp ADE / Oz (26,203 stars)
**Borderline.** Legitimate ADE concept with cloud agent orchestration. But: repo is just an issue tracker (no source code), Oz is proprietary, no benchmarks. 4,392 open issues show engagement but also friction. **Already in catalog; Oz platform should be noted as update.**

---

## Pairwise Comparison Section

### Claude Code vs Cursor (THE defining matchup)

| Dimension | Claude Code | Cursor | Winner |
|-----------|------------|--------|--------|
| Benchmarks | SWE-bench Pro 58.0%, Verified 80.9% | Pro 50.2% (custom) | Claude Code |
| Revenue | Not disclosed (Anthropic broader) | $2B ARR, $50B valuation | Cursor |
| Token efficiency | 5.5x fewer tokens than Cursor | — | Claude Code |
| Code rework | ~30% less rework | Higher churn | Claude Code |
| Community (HN) | 2,127 pts top; 4 stories >600 pts in Feb-Mar | <100 pts on Automations | Claude Code |
| Enterprise distribution | Apple Xcode native; Team/Enterprise tiers | 60% of $2B from enterprise; 30+ vendor plugins | Cursor |
| Automation paradigm | /loop (basic), Channels (mobile control) | Automations (event-driven: Slack, PagerDuty, Linear, cron) | Cursor |
| Agent architecture | Agent Teams (sub-agents on git worktrees) | Cloud agents with computer use (browser + UI verify) | Tie |
| IDE strategy | Terminal-first + Xcode + VS Code/Zed/Emacs | VS Code fork + JetBrains + cloud VMs | Cursor (breadth) |

**Verdict:** Claude Code leads on capability, efficiency, and developer love. Cursor leads on revenue, enterprise penetration, and the "always-on automation" paradigm. Increasingly complementary: "everyone gets Cursor for daily editing + senior engineers get Claude Code for architecture."

### Claude Code vs OpenCode

| Dimension | Claude Code | OpenCode | Winner |
|-----------|------------|----------|--------|
| Stars | 81,714 | 128,817 | OpenCode |
| SWE-bench | Pro 58.0%, Verified 80.9% | None (harness) | Claude Code |
| Security history | No major CVEs | CVSS 10.0 RCE (patched) | Claude Code |
| Model support | Anthropic only | 75+ providers | OpenCode |
| Production usage | 4% of all public GitHub commits (135K/day) | Not measured | Claude Code |
| Developer love | 46% "most loved" | 1,253 HN pts (strong but one story) | Claude Code |
| Cost | $20/mo + tokens | Free (BYOK) | OpenCode |

**Verdict:** OpenCode wins on stars, flexibility, and cost. Claude Code wins on everything that matters for production: benchmarks, security, proven scale. Stars ≠ production trust.

### Claude Code vs Codex CLI

| Dimension | Claude Code | Codex CLI | Winner |
|-----------|------------|-----------|--------|
| SWE-bench Pro | 58.0% | 57.7% (GPT-5.4) | Tie (~0.3%) |
| SWE-bench Verified | 80.9% | Not reported (retired) | Claude Code |
| Terminal-Bench | 65.4% | 77.3% | Codex CLI |
| Blind quality | Wins 67% of comparisons | — | Claude Code |
| Speed (real-world) | 15 min (Stripe integration) | 1h20m | Claude Code |
| Sandbox | Application-layer hooks | Kernel-level (Seatbelt, Landlock, seccomp) | Codex CLI |
| Maturity | v2.1.81 (stable) | v0.117.0-alpha | Claude Code |

**Verdict:** Near-parity on SWE-bench Pro. Claude Code faster in practice and more mature. Codex CLI better at terminal-native workflows and has stronger sandboxing.

### Cursor vs Copilot

| Dimension | Cursor | Copilot | Winner |
|-----------|--------|---------|--------|
| Users | 1M+ DAU | 20M total, 4.7M paid | Copilot (scale) |
| Revenue | $2B ARR | Not disclosed separately | Cursor |
| React generation | 83% success | 67% success | Cursor |
| Autocomplete latency | 320ms | 890ms | Cursor |
| Automation | Event-driven triggers | Jira integration (preview) | Cursor |

**Verdict:** Copilot has unmatched distribution but Cursor outperforms on quality and speed. Migration pattern: developers ditching Copilot for Cursor report "different league."

### Gemini CLI vs Field

| Dimension | Before Mar 25 | After Mar 25 |
|-----------|--------------|--------------|
| Free tier | 1K req/day with Pro models | Flash-only free; Pro requires payment |
| Competitive moat | Best free tier in category | Eroded — matches Codex (ChatGPT sub) |

**Verdict:** Free tier paywall significantly weakens Gemini CLI's #3 position. Without the free tier advantage, the SWE-bench Pro gap (43.3% vs 58.0% Claude, 57.7% Codex) becomes the defining metric. Consider dropping to #4-5.

---

## Quantitative Traction Summary Table

| Rank | Contender | Stars | SWE-bench Pro | SWE-bench Verified | HN Top | Revenue | Key Differentiator |
|------|-----------|-------|---------------|-------------------|--------|---------|-------------------|
| 1 | Claude Code | 81,714 | 58.0% | 80.9% | 2,127 pts | ~$2.5B run-rate | Best capability + community + Apple distribution |
| 2 | Cursor | N/A (closed) | 50.2% | N/A | <100 pts | $2B ARR | Revenue king + event-driven automation |
| 3 | Codex CLI | 67,110 | 57.7% | retired | 587 pts | Free w/ ChatGPT | SWE-bench Pro near-parity, kernel sandbox |
| 4 | Gemini CLI | 98,813 | 43.3% | 80.6% | 1,428 pts | N/A | Stars + free tier (paywalling Mar 25) |
| 5 | OpenCode | 128,817 | N/A (harness) | N/A | 1,253 pts | N/A | #1 stars, 75+ providers, MIT, CVSS 10.0 history |
| 6 | Copilot | N/A (closed) | N/A | 56.0% | 564 pts | part of GitHub | 20M users, 4.7M paid, Fortune 100 |
| 7 | Augment Code | N/A (closed) | 51.8% | 70.6% | ~0 pts | ~$20M | Enterprise context engine, $252M funding |
| 8 | OpenHands | 69,615 | N/A | 43.2% | <100 pts | N/A | MIT, 455 contributors, on-prem/air-gapped |
| 9 | Cline | 59,281 | N/A | N/A | N/A | N/A | 5M+ installs, BYOM, Apache 2.0 |
| 10 | Symphony | 13,883 | N/A | N/A | 25 pts | N/A | Issue tracker → agent orchestration (Elixir) |
| 11 | Open SWE | 8,166 | N/A | N/A | 111 pts | N/A | Async cloud agent, LangChain ecosystem |

---

## The Dark Factory Pattern — Category Meta Signal

### StrongDM Software Factory [STRONG]
The most concrete real-world example. 304 HN pts, 459 comments.
- **Charter rules**: "Code must not be written by humans" and "Code must not be reviewed by humans."
- **Team**: 3 people, 32,000 lines of production code since July 2025, zero hand-written or hand-reviewed.
- **Architecture**: Specs in markdown → agents build → behavioral scenarios (holdout validation, hidden from agents) → satisfaction scoring.
- **Digital Twin Universe (DTU)**: Behavioral clones of Okta, Jira, Slack, Google Docs for safe testing.
- **Token spend**: $1,000+/month per human engineer.
- **Key insight**: With Claude 3.5 (Oct 2024), coding shifted from "compounding errors" to "compounding correctness."
Source: [factory.strongdm.ai](https://factory.strongdm.ai/)

### Five Levels Framework (Dan Shapiro) [STRONG]
Widely cited progression:
1. Task automation → 2. Collaborative pairing (90% of devs now) → 3. Human-in-the-loop review → 4. Autonomous development (Claude Code named explicitly) → 5. Dark Factory (specs in, software out)
Source: [danshapiro.com](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/)

### Spotify Internal [MODERATE]
Best engineers haven't written code since Dec 2025. Internal "Honk" platform lets engineers trigger autonomous code changes via Slack. ~50% of updates flow through it.

### MIT Technology Review [STRONG]
"Generative Coding" named a 2026 Breakthrough Technology.
Source: [MIT Tech Review](https://www.technologyreview.com/2026/01/12/1130027/generative-coding-ai-software-2026-breakthrough-technology/)

---

## YouTube Videos

YouTube's dynamic rendering blocked direct video ID extraction across all 5 search queries. Manual search recommended for:
1. "claude code vs cursor 2026"
2. "best coding agent 2026"
3. "opencode terminal coding agent review"
4. "software factory autonomous coding 2026"
5. "codex cli vs gemini cli 2026"

**Known video reference:** Cole Medin (YouTuber) — Stripe integration test: Codex 1h20m vs Claude Code 15m. Referenced in Builder.io and multiple comparison articles. Exact videoId not recovered.

---

## Gaps in Evidence

1. **OpenCode SWE-bench**: No benchmark exists. If OpenCode + Claude Opus scored similarly to Claude Code, it would validate the "open-source alternative" thesis. If it scored lower, it would confirm that Anthropic's scaffold matters.
2. **Cursor Automations adoption**: Still zero independent validation. "Hundreds of automations run hourly" is self-reported. Need real user testimonials with specifics.
3. **Symphony production usage**: 26 days old, engineering preview only. No evidence anyone is using it in production.
4. **Augment Code**: Still no community signal despite $252M funding. Cannot verify claims.
5. **Copilot SWE-bench Pro**: No Pro score published. The 56.0% Verified score may be stale.
6. **OpenCode production commit share**: Stars are enormous but no data on actual production usage vs Claude Code's 135K commits/day.

## Unresolved Questions

1. Will Gemini CLI's free tier paywall cause measurable user migration? To where — Claude Code, OpenCode, Codex?
2. Does OpenCode's 128K star count translate to production usage or is it primarily hobbyist/experimental?
3. Will Symphony's orchestration model (Linear → Codex CLI → PR) become the standard pattern?
4. Is the "dual tool" pattern (Cursor for daily + Claude Code for complex) stabilizing or will one tool win both use cases?
5. How does the CVSS 10.0 RCE affect enterprise adoption of OpenCode?

## Recommended Ranking Changes

1. **Claude Code stays #1** — SWE-bench Pro updated to 58.0%, new features (Code Review, Channels, Voice, 1M context), Apple Xcode confirmed
2. **Cursor stays #2** — $2B ARR, $50B valuation, Automations + Cloud Agents, but still no community validation of Automations
3. **Codex CLI moves up to #3** — SWE-bench Pro 57.7% near-parity with Claude Code, GPT-5.4 is strong. Gemini CLI weakened by paywall.
4. **Gemini CLI drops to #4** — Free tier paywall removes key differentiator. SWE-bench Pro 43.3% gap is real.
5. **OpenCode enters at #5** — Stars and community signal demand inclusion. But no benchmarks + CVSS 10.0 history + no production usage evidence prevent higher placement.
6. **Copilot stays #6** (was #5) — Distribution moat holds but performance gap widening
7. **Augment stays #7** (was #6)
8. **OpenHands stays #8** (was #7)
9. **Cline stays #9** (was #8)
10. **Aider stays #10** (was #9)
11. **Devin stays #11** (was #10)
12. **Symphony enters at #12** — Architecturally significant but 26 days old
13. **Open SWE enters at #13** — Strong async agent but early
14. **Remaining below cut line stays as-is**

## Recommended Next Step

**Rank agent** should run with these findings to produce final rankings. Key decisions for the rank agent:
1. Does OpenCode's 128K stars override lack of benchmarks for a higher rank?
2. Should Codex CLI swap with Gemini CLI given the free tier paywall?
3. Should Symphony and Open SWE enter above or below the cut line?
