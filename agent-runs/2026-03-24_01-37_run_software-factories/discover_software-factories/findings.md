# Discover Findings: Software Factories

## Scope

Full discover protocol for the **software-factories** problem space. Find all serious contenders, new signals, gaps in the current catalog, and shifts in meta.

## Date

2026-03-24T01:37Z

## Inputs

### HN Algolia Queries
- `coding agent 2026` (points>10, 20 results)
- `claude code cursor copilot` (points>50, 20 results)
- `autonomous coding SWE-bench` (points>10, 20 results)
- `software factory AI coding` (by date, points>5, 20 results)
- `Roo Code Kilo Code coding agent` (points>5) — 0 results
- `Augment Code Amp coding` (points>5) — sparse
- `Cursor Automations OR "cursor agent"` (points>5) — 0 results
- `OpenCode coding agent` (points>5) — **1,253 pts top story**
- `Warp terminal agent` (points>10)
- `Junie CLI JetBrains` (points>5) — minimal
- `Qwen Code CLI` (points>5) — 0 results
- `"Open SWE" OR "LangChain agent" coding` — 0 results
- `symphony openai OR "dark factory"` — 0 results

### Web Searches (10 queries)
- "best AI coding agent 2026"
- "claude code vs cursor vs copilot 2026"
- "Roo Code OR Kilo Code OR Qwen Code coding agent"
- "Warp AI OR Warp terminal agent 2026"
- "Augment Code OR Amp coding agent 2026"
- "AI coding agent site:news.ycombinator.com 2026"
- "Cursor Automations review OR experience 2026"
- "Kimi Code OR Junie CLI coding agent 2026"
- "software factory autonomous coding 2026"
- "OpenHands OR SWE-agent OR Devin coding agent news 2026 March"

### GitHub API Checks
- Star counts for 20+ repos via `gh api`
- Search for new repos created in 2026 with >500 stars
- Trending check

---

## Findings

### NEW CONTENDER ALERT: OpenCode (sst/opencode)

**Stars: 128,815** | HN: 1,253 pts (2026-03-20) + 319 pts (2025-07-06) | Open source

OpenCode is now the **#1 repo by star count** in the entire software-factories category, surpassing Gemini CLI (98,812) and Claude Code (81,712). Built by the SST team, it's an open-source AI coding agent built for the terminal. The March 20, 2026 HN post hit 1,253 points — a strong community signal.

**Why this matters:** A terminal-first, open-source coding agent with more stars than any competitor is a major catalog gap. Needs immediate deep-dive for benchmark scores, actual capabilities, and community sentiment quality.

**Gap:** NOT in current catalog at all.

---

### NEW CONTENDER ALERT: OpenAI Symphony

**Stars: 13,883** | Pushed: 2026-03-19

"Symphony turns project work into isolated, autonomous implementation runs, allowing teams to manage work instead of supervising coding agents." This is OpenAI's orchestration layer — not a direct coding agent but a meta-tool that manages autonomous coding runs.

**Why this matters:** OpenAI now has both Codex CLI (the agent) and Symphony (the orchestrator). This signals OpenAI's direction: project-level autonomy, not just task-level. Could redefine what "software factory" means.

**Gap:** NOT in current catalog.

---

### NEW CONTENDER ALERT: Open SWE (LangChain)

**Stars: 8,166** | Pushed: 2026-03-23 (very active) | Launched: 2026-03-17

Open-source async coding agent from LangChain. Integrates with GitHub, researches codebases, writes code, runs tests, opens PRs. Modeled after internal tools at Stripe, Ramp, Coinbase.

**Why this matters:** LangChain is the most widely-used agent framework. Their entry into coding agents gives Open SWE instant distribution and credibility. Async-first design (like Copilot Coding Agent) vs. interactive-first (like Claude Code).

**Gap:** NOT in current catalog.

---

### NEW CONTENDER ALERT: ByteDance deer-flow

**Stars: 39,085** | Description: "An open-source SuperAgent harness that researches, codes, and creates"

Uses sandboxes, memories, tools, skills, subagents, and message gateway. Handles tasks from minutes to hours.

**Why this matters:** 39K stars from ByteDance is significant. More of an agent harness than a pure coding agent, but overlaps heavily with software-factories. Chinese tech giant backing gives it distribution in Asian markets.

**Gap:** NOT in current catalog. May fit better in agent-harnesses but should be cross-listed.

---

### SIGNIFICANT UPDATE: GitHub Star Count Shift

Current star rankings (verified 2026-03-24):

| Rank | Repo | Stars | Change from catalog |
|------|------|-------|---------------------|
| 1 | **sst/opencode** | **128,815** | **NEW — not in catalog** |
| 2 | google-gemini/gemini-cli | 98,812 | Was 98,380 (+432) |
| 3 | anthropics/claude-code | 81,712 | Was 80,078 (+1,634) |
| 4 | All-Hands-AI/OpenHands | 69,615 | Was 69,425 (+190) |
| 5 | openai/codex | 67,110 | Was 66,359 (+751) |
| 6 | cline/cline | 59,281 | Was 59,157 (+124) |
| 7 | paul-gauthier/aider | 42,291 | Was 42,157 (+134) |
| 8 | **bytedance/deer-flow** | **39,085** | **NEW — not in catalog** |
| 9 | block/goose | 33,497 | Was 33,269 (+228) |
| 10 | continuedev/continue | 32,008 | Not ranked in SF |
| 11 | RooVetGit/Roo-Code | 22,808 | In catalog |
| 12 | qwenlm/qwen-code | 20,963 | In catalog |
| 13 | Kilo-Org/kilocode | 17,103 | In catalog |
| 14 | **openai/symphony** | **13,883** | **NEW — not in catalog** |
| 15 | Yeachan-Heo/oh-my-claudecode | 11,071 | In catalog (meta-tool) |

**Why this matters:** The top of the star chart has fundamentally shifted. OpenCode at 128K stars is #1 and wasn't even tracked. The catalog's star rankings are stale.

---

### SIGNAL: OpenCode HN Traction (1,253 pts — Mar 20, 2026)

The March 20 HN post for OpenCode hit **1,253 points** — putting it in the top tier of HN coding agent stories, behind only Claude Code's 2,127 pts top story. This is stronger than any Gemini CLI, Codex CLI, or Copilot story.

**Why this matters:** HN points correlate with developer interest. 1,253 pts + 128K stars = OpenCode is a tier-1 community signal that the catalog completely misses.

---

### SIGNAL: Xcode 26.3 Native Coding Agents (369 HN pts — Feb 3, 2026)

Apple's Xcode 26.3 integrates coding agents natively, with 369 HN pts. Already noted in Claude Code's catalog entry but the broader signal is: **platform distribution is king**. The coding agent that gets built into IDEs/editors wins distribution.

---

### SIGNAL: "Dark Factory" Pattern Emerging

HackerNoon article (2026-03-05) describes the **"Dark Factory" pattern** — fully autonomous coding where specs + test scenarios drive agents with zero human review. StrongDM's AI team "builds software without looking at code."

**Why this matters:** This is the next phase of the category. Current tools are interactive/semi-autonomous. Dark factories are fully autonomous. The tools that enable this pattern (strong test generation, spec-driven workflows) will win the next wave.

---

### SIGNAL: Warp 2.0 ADE Pivot

Warp has repositioned from "AI terminal" to "Agentic Development Environment (ADE)." New concepts:
- **Oz platform** for cloud agent orchestration
- **Ambient agents** that autonomously respond to system events (crashes, incidents)
- PTY session attachment (agents interact with running processes)

**Why this matters:** Warp is already in the catalog but its ADE pivot and ambient agent concept are significant new capabilities. The terminal-as-agent-interface thesis competes directly with IDE-as-agent-interface (Cursor).

---

### SIGNAL: Junie CLI Beta (JetBrains — March 2026)

JetBrains launched Junie CLI in beta — standalone, LLM-agnostic CLI agent. Supports OpenAI, Anthropic, Google, Grok models. Works in terminal, IDE, CI/CD, GitHub, GitLab.

**Why this matters:** JetBrains has the second-largest IDE distribution after VS Code. A standalone CLI agent means they're competing directly with Claude Code and Codex CLI. LLM-agnostic is a key differentiator.

---

### SIGNAL: Qwen Code CLI + Qwen3-Coder Ecosystem

Qwen Code (qwenlm/qwen-code) at 20,963 stars. Adapted from Gemini CLI architecture. Free, open-source, tightly integrated with Qwen3-Coder models. Zero HN signal in English but likely strong in Chinese developer community.

**Why this matters:** First serious Chinese-language coding agent CLI. Free tier with competitive models. Combined with Kilo Code (17K stars) and Roo Code (22K stars) integration, creates an emerging "budget BYOM" ecosystem.

---

### SIGNAL: $211B VC Funding for AI Agents + 92% Inference Cost Drop

State of AI Agents 2026 report: $211B in VC funding, 92% drop in inference costs. YC S26 now requires applicants to submit coding agent sessions as part of the application.

**Why this matters:** The category is flooded with capital. Inference costs dropping 92% means the free-tier battle will intensify. Every tool can afford to offer more for less.

---

### SIGNAL: Average Dev Uses 2.3 AI Coding Tools

Multiple comparison articles confirm experienced developers use an average of 2.3 AI coding tools simultaneously. Common pattern: Cursor Pro for daily IDE work + Claude Code for complex multi-file refactors.

**Why this matters:** The market is not winner-take-all. Rankings should acknowledge multi-tool workflows. "Best for X" matters more than absolute #1.

---

### MARKET CONTEXT UPDATE

| Metric | Current catalog | Updated |
|--------|----------------|---------|
| Claude Code stars | 80,078 | 81,712 |
| Gemini CLI stars | 98,380 | 98,812 |
| Codex CLI stars | 66,359 | 67,110 |
| OpenHands stars | 69,425 | 69,615 |
| Cline stars | 59,157 | 59,281 |
| Aider stars | 42,157 | 42,291 |
| Goose stars | 33,269 | 33,497 |

All major repos show steady growth. No dramatic movement among existing tracked tools.

---

## Quotes

> "Models are becoming progressively overtrained on all versions of SWE-Bench... public results are diverging significantly from performance on private datasets." — Zenflow creator, HN (Dec 2025)

> "The terminal has become the center of agentic development." — Zach Lloyd, Warp CEO (2026)

> "The most reliable setups landed in a narrow 'Goldilocks' zone of just enough structure without over-orchestration." — 100+ agent experiment findings

> "Symphony turns project work into isolated, autonomous implementation runs, allowing teams to manage work instead of supervising coding agents." — OpenAI Symphony description

> "An open-source SuperAgent harness that researches, codes, and creates." — ByteDance deer-flow description

---

## Catalog Gaps (Critical)

| Gap | Severity | Action |
|-----|----------|--------|
| **OpenCode** (128K stars, 1,253 HN pts) | **CRITICAL** | Add immediately. #1 by stars in category. Deep-dive needed. |
| **OpenAI Symphony** (14K stars) | HIGH | Add as orchestration tool. Cross-list with teams-of-agents. |
| **Open SWE / LangChain** (8K stars, launched Mar 17) | HIGH | Add. Async coding agent from the dominant framework provider. |
| **ByteDance deer-flow** (39K stars) | MEDIUM | Evaluate. May fit agent-harnesses better. Cross-list if relevant. |
| **Junie CLI** (JetBrains, beta Mar 2026) | MEDIUM | Already in catalog (junie-cli). Needs update — now standalone CLI, LLM-agnostic. |
| **Warp 2.0 ADE** | MEDIUM | Already in catalog (warp). Needs update — ADE pivot, Oz platform, ambient agents. |
| Cursor Automations HN signal still 0 | LOW | Watch. No independent community validation yet (15 days post-launch). |

---

## Recommended Next Step

1. **IMMEDIATE: Deep-dive OpenCode** — 128K stars and 1,253 HN pts demands ranking. Need: benchmark scores (SWE-bench?), architecture, model support, actual capabilities vs. star count hype. This could enter top 3.

2. **Deep-dive OpenAI Symphony** — New category of tool (orchestrator, not agent). Need to understand how it relates to Codex CLI and whether it should be ranked separately or as a Codex enhancement.

3. **Deep-dive Open SWE** — LangChain's entry is 7 days old with 8K stars and active development. Need capability assessment.

4. **Update existing entries**: Warp (ADE pivot), Junie CLI (standalone beta), star counts across all.

5. **Re-rank**: OpenCode's inclusion likely displaces current rankings significantly. The star chart leader is completely absent from the catalog.

6. **Watch**: ByteDance deer-flow (39K stars but unclear if it's a software factory vs. general agent harness).
