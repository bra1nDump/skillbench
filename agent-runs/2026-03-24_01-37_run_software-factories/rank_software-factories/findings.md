# Rank Findings: Software Factories

## Scope

Produce a final ranked recommendation for the **software-factories** problem space based on discover and deep-dive evidence collected 2026-03-24.

## Date

2026-03-24T03:00Z

## Inputs

- `agent-runs/2026-03-24_01-37_run_software-factories/discover_software-factories/findings.md`
- `agent-runs/2026-03-24_01-37_run_software-factories/deep-dive_software-factories/findings.md`

---

## Ranked Recommendation

### #1 — Claude Code (Anthropic)

**Why #1:** Strongest evidence on every axis that matters for production coding.

| Signal | Evidence | Strength |
|--------|----------|----------|
| SWE-bench Pro | 58.0% (custom scaffold) — category leader | [STRONG] |
| SWE-bench Verified | 80.9% (Opus 4.5) | [STRONG] |
| Production usage | 4% of all public GitHub commits, 135K/day | [STRONG] |
| Developer love | 46% "most loved" (morphllm survey) | [STRONG] |
| HN signal | 2,127 pts top; four stories >600 pts in Feb-Mar 2026 | [STRONG] |
| Stars | 81,714 | [STRONG] |
| Token efficiency | 5.5x fewer tokens than Cursor on identical tasks | [STRONG] |
| Platform distribution | Apple Xcode 26.3 native integration (Feb 2026) | [STRONG] |
| Release velocity | v2.1.81 (stable), Opus 4.6 default, 1M context beta | [STRONG] |

**March 2026 momentum:** Code Review (multi-agent PR review, 84% issue detection on 1K+ line PRs), Channels (Telegram/Discord control), Voice Mode, `/loop` recurring monitoring.

**Best for:** Complex architecture, multi-file refactors, senior engineers, teams wanting benchmark-proven capability. Terminal-first workflow. Apple ecosystem via Xcode.

---

### #2 — Cursor (Anysphere)

**Why #2:** Unmatched commercial traction and the only tool with event-driven automation at scale.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Revenue | $2B ARR (doubled in 90 days) | [STRONG] |
| Valuation | $50B (in talks) | [STRONG] |
| DAU | 1M+ | [STRONG] |
| Enterprise | 60% of revenue from enterprise; OpenAI, Midjourney, Perplexity, Shopify as customers | [STRONG] |
| SWE-bench Pro | 50.2% (custom scaffold) | [MODERATE] |
| Cloud agents | 35% of Cursor's own merged PRs created by cloud agents | [STRONG] |
| Plugin ecosystem | 30+ vendor plugins (Atlassian, Datadog, GitLab, etc.) | [STRONG] |
| HN signal for Automations | <100 pts | [WEAK] |

**Why not #1:** SWE-bench Pro gap (50.2% vs 58.0%). Zero independent community validation of the Automations platform despite launch on March 6. Closed-source IDE creates vendor lock-in. Individual devs visibly migrating to Claude Code (multiple first-person accounts).

**Best for:** Teams wanting a polished GUI IDE with always-on automation (CI triggers, Slack alerts, PagerDuty). Enterprise buyers who need vendor plugin breadth. Daily editing and inline suggestions.

**Subcase note:** The "dual tool" pattern is real and documented: "everyone gets Cursor for daily editing + senior engineers get Claude Code for architecture." These tools are increasingly complementary rather than substitutes.

---

### #3 — Codex CLI (OpenAI)

**Why #3 (up from #4):** SWE-bench Pro near-parity with Claude Code. Gemini CLI's free tier paywall opens the gap.

| Signal | Evidence | Strength |
|--------|----------|----------|
| SWE-bench Pro | 57.7% (GPT-5.4) — 0.3% behind Claude Code | [STRONG] |
| Terminal-Bench | 77.3% (beats Claude Code's 65.4%) | [STRONG] |
| Stars | 67,110 | [STRONG] |
| Sandbox | Kernel-level (Seatbelt, Landlock, seccomp) | [STRONG] |
| Maturity | v0.117.0-alpha.10 — still alpha | [WEAK] |
| Release cadence | ~6 alpha releases in March | [STRONG] |
| HN | 587 pts top story | [MODERATE] |

**Why not higher:** Still alpha — not production-stable. Blind code quality comparisons show Claude Code winning 67% of the time. Real-world speed test: Stripe integration took 1h20m vs Claude Code's 15 minutes. Community signal well behind #1 and #2.

**Best for:** Terminal-native workflows, security-conscious teams wanting kernel-level sandboxing, teams already invested in OpenAI/ChatGPT. Strong narrow subcase: if Terminal-Bench performance matters more than SWE-bench Pro for your workflow, Codex CLI is the leader.

---

### #4 — Gemini CLI (Google)

**Why #4 (down from #3):** Free tier paywall on March 25 removes the primary differentiator.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 98,813 — #2 by star count in category | [STRONG] |
| SWE-bench Verified | 80.6% (Gemini 3.1 Pro) | [STRONG] |
| SWE-bench Pro | 43.3% — significant gap below Claude (58%) and Codex (57.7%) | [WEAK] |
| GPQA Diamond | 94.3% (record) | [STRONG] |
| ARC-AGI-2 | 77.1% | [STRONG] |
| Free tier (post-Mar 25) | Flash-only free; Pro requires payment | [WEAK] — was [STRONG] |
| HN recent | No high-scoring stories in 30 days | [WEAK] |

**What changed:** Before March 25, Gemini CLI was the clear #3 because "best free tier in category" offset the SWE-bench Pro gap. After the paywall, the Pro gap (43.3% vs 57-58%) becomes the defining metric, and there's no free-tier incentive to stay.

**New features still noteworthy:** Plan Mode default, gVisor/LXC native sandbox, HTTP auth for A2A remote agents, research subagents, loop detection.

**Best for:** Teams already on Google Cloud/Gemini ecosystem. Research tasks where GPQA and ARC-AGI scores matter. Very large context windows (1M tokens). Teams willing to pay for Pro after March 25.

---

### #5 — OpenCode (anomalyco/opencode) — NEW ENTRY

**Why #5 (new):** Cannot ignore 128K stars and 1,253 HN pts. But stars ≠ production trust.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 128,817 — #1 in entire category | [STRONG] |
| HN | 1,253 pts (Mar 20), 319 pts (Jul 2025) | [STRONG] |
| Model support | 75+ LLM providers | [STRONG] |
| License | MIT | [STRONG] |
| SWE-bench | None — it's a harness, not a model | [WEAK] |
| Security | CVE-2026-22812: CVSS 10.0 RCE (patched) | [STRONG] negative |
| Legal | Anthropic blocked Claude OAuth access, required removal | [MODERATE] negative |
| Production usage | Not measured; no commit-share data | [WEAK] |
| NPM downloads | ~420K/week | [MODERATE] |

**Editorial judgment:** OpenCode's star count demands a top-5 placement — ignoring a 128K-star repo would be dishonest. But ranking it above tools with proven benchmarks, production commit data, and clean security records would be irresponsible. The CVSS 10.0 RCE (any website could execute arbitrary code on the developer's machine) is the worst security incident for any tool in this category. The Anthropic legal block exposes dependence on consumer pricing arbitrage rather than direct API relationships.

**The open question:** If OpenCode + Claude Opus scored similarly to Claude Code on SWE-bench, it would validate the "open-source harness" thesis. Until that data exists, we can't rank it on capability — only on community signal.

**Best for:** Developers who want model flexibility (75+ providers including local via Ollama), open-source purists, cost-conscious teams using BYOK. Strong narrow subcase: if you need to use non-Anthropic models in a terminal coding agent, OpenCode is the clear leader.

---

### #6 — GitHub Copilot

**Why #6 (down from #5):** Distribution moat holds, but the "floor not ceiling" narrative strengthens.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Users | 20M+ total, 4.7M paid (75% YoY growth) | [STRONG] |
| Fortune 100 | ~90% | [STRONG] |
| SWE-bench Verified | 56.0% | [MODERATE] |
| Performance vs Cursor | React generation 67% vs 83%; latency 890ms vs 320ms | [WEAK] |

**Why it matters:** Copilot is the tool everyone starts with and many graduate from. It's the gateway drug to the category. Distribution is unmatched (GitHub native, VS Code native, every major IDE), but performance gap vs Cursor and Claude Code is widening. New March features (50% faster agent startup, semantic search, Jira integration) are catching up, not leapfrogging.

**Best for:** Organizations wanting a single vendor (GitHub/Microsoft) for code hosting + AI. Low-friction onboarding. Teams where IT procurement favors existing vendor relationships over benchmark performance.

---

### #7 — Augment Code

**Why #7:** Strong funding and enterprise context engine, but zero community validation.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Funding | $252M | [STRONG] |
| SWE-bench Pro | 51.8% | [MODERATE] |
| SWE-bench Verified | 70.6% | [MODERATE] |
| HN signal | ~0 pts | [WEAK] |
| Community | No visible community presence | [WEAK] |

**Best for:** Enterprise teams that need deep codebase context understanding and are willing to bet on a well-funded startup without community validation.

---

### #8 — OpenHands (formerly OpenDevin)

**Why #8:** Best open-source option for on-prem/air-gapped environments.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 69,615 | [STRONG] |
| Contributors | 455 | [STRONG] |
| License | MIT | [STRONG] |
| SWE-bench Verified | 43.2% | [MODERATE] |

**Best for:** Teams requiring self-hosted, air-gapped, or on-prem deployment. 455 contributors signal a healthy open-source community. Benchmark scores lag the leaders significantly.

---

### #9 — Cline

**Why #9:** Massive install base as a VS Code extension, fully open-source BYOM.

| Signal | Evidence | Strength |
|--------|----------|----------|
| VS Code installs | 5M+ | [STRONG] |
| Stars | 59,281 | [STRONG] |
| License | Apache 2.0 | [STRONG] |
| SWE-bench | None published | [WEAK] |

**Best for:** VS Code users who want an open-source, model-agnostic agent without leaving their editor. Low commitment to try.

---

### #10 — Aider

Maintains position. Established terminal-first tool with strong polyglot support. Healthy open-source community. Outpaced by the top tier on features and benchmarks.

---

### #11 — Devin (Cognition)

Maintains position. Pioneer of the "autonomous software engineer" concept. $500/month price point and closed-source model limit adoption. The category has largely caught up to its original vision.

---

### Below the ranked cut line — Monitor list

| Tool | Stars | Status | Why monitoring |
|------|-------|--------|---------------|
| **OpenAI Symphony** | 13,883 | Engineering preview (26 days old) | Only tool connecting issue trackers → autonomous agent runs → PRs with proof-of-work gating. Elixir/BEAM architecture. If it matures, could redefine what "software factory" means. Needs 60+ days. |
| **Open SWE (LangChain)** | 8,166 | Active (10 months) | Best open-source async coding agent. LangChain ecosystem gives distribution. Slack/Linear integration. Needs benchmark data. |
| **Warp ADE / Oz** | 26,203 | Closed-source | Legitimate ADE concept but repo is issue tracker only, no source. Oz is proprietary. No benchmarks. |
| **JetBrains Junie CLI** | 115 | Beta (Mar 2026) | Too early. Thin shell wrapper, agent code is proprietary. JetBrains brand gives it runway. Check back in 60 days. |

### Excluded

| Tool | Stars | Reason |
|------|-------|--------|
| **ByteDance deer-flow** | 39,091 | Not a software factory. General-purpose SuperAgent harness. Coding is one skill among many. Zero HN signal in English. Better fit for agent-harnesses category. |

---

## Pairwise Decisions — Editorial Rationale

### Decision 1: Codex CLI (#3) over Gemini CLI (#4)

**Evidence basis:** Gemini CLI's March 25 free tier paywall removes its primary competitive advantage. Without the free tier, the SWE-bench Pro gap becomes determinative: 57.7% (Codex) vs 43.3% (Gemini). Codex CLI also leads on Terminal-Bench (77.3% vs not reported). Gemini CLI retains higher stars (98K vs 67K) and stronger Verified score (80.6%), but the Pro gap is too large to ignore for a productivity-focused ranking.

### Decision 2: OpenCode at #5, not #3

**Evidence basis:** Stars alone would place OpenCode at #1 (128K). But this is a *recommendation* ranking, not a popularity ranking. The evidence required to recommend a tool for production use includes: (a) benchmark data proving capability, (b) clean security record, (c) production usage evidence. OpenCode has none of these. A CVSS 10.0 RCE that let any website execute code on the developer's machine is disqualifying for any rank higher than #5. If OpenCode publishes SWE-bench scores and maintains a clean security record for 6 months, re-evaluate for #3-4.

### Decision 3: Cursor stays #2 despite $2B ARR

**Evidence basis:** Revenue and valuation are extraordinary, but this ranking weights direct workflow fit and demonstrable capability over commercial success. Cursor's SWE-bench Pro (50.2%) trails Claude Code (58.0%) and Codex CLI (57.7%). The Automations platform — Cursor's key differentiated bet — has zero independent community validation after 18 days. The 35% internal PR stat for cloud agents is promising but self-reported. Claude Code's developer love signal (46% most loved, multiple switching narratives, 2,127 HN pts) is stronger than any Cursor community signal.

### Decision 4: Symphony and Open SWE below the cut line

**Evidence basis:** Symphony is 26 days old with 25 HN pts — architecturally significant but unproven. Open SWE has 8K stars but no benchmarks. Both lack the minimum evidence for a ranked recommendation. The monitor list gives them visibility without conferring unearned trust.

---

## Category Meta: The Dark Factory Pattern

The "software factory" concept is moving from theory to practice:

- **StrongDM** is running a literal dark factory: 3 people, 32K lines of production code, zero hand-written or hand-reviewed. Charter rule: "Code must not be written by humans." Claude Code is the agent. $1,000+/month per human engineer. 304 HN pts, 459 comments.
- **Spotify** reports best engineers haven't written code since Dec 2025. ~50% of updates flow through internal "Honk" platform (Slack-triggered autonomous code changes).
- **Dan Shapiro's Five Levels** (widely cited): Task automation → Collaborative pairing (90% of devs now) → Human-in-the-loop review → Autonomous development → Dark Factory.
- **MIT Technology Review** named "Generative Coding" a 2026 Breakthrough Technology.

**Implication for rankings:** The tools that will win the Dark Factory race are those with: (a) proven autonomous capability (SWE-bench), (b) orchestration beyond single tasks (Symphony, Cursor Automations, Claude Code /loop + Channels), and (c) verification mechanisms (Claude Code Review, StrongDM's behavioral scenarios). Claude Code leads on (a) and (c). Cursor leads on (b). Symphony is the earliest purpose-built attempt at (b).

---

## What Would Change This Ranking

| Change | Impact |
|--------|--------|
| OpenCode publishes SWE-bench Pro >55% | Moves to #3-4; validates open-source harness thesis |
| Cursor Automations gets 500+ HN pts story or independent audit | Strengthens #2 case significantly |
| Codex CLI reaches 1.0 stable | Could swap with Cursor for #2 if Automations remains unvalidated |
| Gemini CLI reverses free tier paywall | Returns to #3 immediately |
| Symphony ships production case study with metrics | Enters ranked list at #8-10 |
| Claude Code loses Xcode integration or SWE-bench lead | Opens #1 to competition |
| OpenCode has another major security incident | Drops below cut line |
| Augment Code gets any community signal (HN >200 pts) | Validates the $252M; could move to #5-6 |
| GPT-5.4 Codex surpasses Claude on SWE-bench Pro by >3% | Serious challenge to #1 |

---

## Quotes

> "Code must not be written by humans. Code must not be reviewed by humans."
> — StrongDM Software Factory charter rules ([factory.strongdm.ai](https://factory.strongdm.ai/))

> "Many teams give everyone Cursor for daily editing + senior engineers get Claude Code for architecture."
> — Builder.io comparison ([builder.io/blog/cursor-vs-claude-code](https://www.builder.io/blog/cursor-vs-claude-code))

> "With Claude 3.5 (Oct 2024), coding shifted from 'compounding errors' to 'compounding correctness.'"
> — StrongDM Software Factory (304 HN pts)

> "I replaced Cursor Agent with Claude Code... there's no going back."
> — JS in Plain English ([javascript.plainenglish.io](https://javascript.plainenglish.io/i-replaced-cursor-agent-with-claude-code-heres-what-happened-d5cf45b76598))

---

## Recommended Next Step

Catalog update: Apply these rankings to the SkillBench catalog. Key updates needed:
1. **Add** OpenCode, Symphony (monitor), Open SWE (monitor)
2. **Update** Claude Code (SWE-bench Pro 58.0%, new features, Xcode)
3. **Update** Cursor (ARR, valuation, Automations, Cloud Agents, plugins)
4. **Swap** Codex CLI to #3, Gemini CLI to #4
5. **Update** Gemini CLI (free tier paywall note)
6. **Exclude** deer-flow (route to agent-harnesses category)
