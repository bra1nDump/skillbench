# Rank Findings: Coding CLIs / Code Agents

## Scope

Ranked recommendation for the "Coding CLIs" problem space — terminal-native AI coding agents that operate directly in the developer's shell. IDE extensions (Cursor, Windsurf) are out of scope. Rankings are within-category, not global.

## Date

2026-03-24

## Inputs

- Deep-dive findings (2026-03-24): 7 parallel research agents, 19 corrected claims, verified traction data
- Sources: npm API, GitHub API, SEAL SWE-bench Pro, Terminal-Bench 2.0, MarginLab, METR, AIMultiple, Morphllm, HN Algolia, web search
- Quantitative traction for 10 contenders + 6 new/watch contenders

---

## Ranked Recommendation

### #1 — Claude Code

**Verdict: Clear category leader on adoption, benchmarks, and ecosystem momentum.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| npm weekly | 4.02M/wk | Verified (npm API, Mar 22) |
| GitHub stars | 81,717 | Verified |
| SWE-bench Pro (SEAL) | 45.89% (#1) | Verified (standardized scaffold) |
| Terminal-Bench 2.0 | 81.8% (#1, via ForgeCode) | Verified |
| GitHub commit share | ~4% of all public commits | SemiAnalysis, Feb 2026 |
| Revenue | $2.5B ARR, >50% of Anthropic enterprise | Multiple sources |
| MarginLab stability | Nominal, no degradation (p ≥ 0.05) | Daily N=50 tracking |
| HN peak | 2,127 pts | Verified |

**Why #1:**
- 2.5x the npm adoption of #2 (Codex CLI)
- #1 on both major benchmarks (SEAL standardized + Terminal-Bench model-level)
- Strongest real-world adoption signal in category (4% of GitHub commits, 135K+/day)
- Revenue validates enterprise willingness to pay
- MarginLab independently confirms no quality regression despite community perception

**Risks:**
- Two patched CVEs (CVSS 8.7, 5.3) — both fixed, but shows attack surface exists
- Community perception of quality regression (1,085-pt HN thread) — not confirmed by independent measurement but sentiment matters
- $20-200/mo cost barrier vs free alternatives
- npm downloads trending down from peak (4.0M vs prior 7.88M claim — the 7.88M was overstated, but actual trajectory is unclear)

**Best for:** General-purpose coding in the terminal. Planning-heavy workflows. Enterprise teams willing to pay for quality. The default recommendation unless cost or model preference overrides.

---

### #2 — Codex CLI

**Verdict: Strong #2 with Rust rewrite momentum, but security record and benchmark gap keep it behind.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| npm weekly | 1.62M/wk | Verified (npm API, Mar 22) |
| GitHub stars | 67,111 | Verified |
| SWE-bench Pro (SEAL) | 41.04% (#6, GPT-5.2) | Verified |
| Terminal-Bench 2.0 | 78.4% (#5, SageAgent + GPT-5.3) | Verified |
| 1M+ first-week downloads | Codex app launch | VentureBeat |
| HN peak | 587 pts | Verified |

**Why #2:**
- Second-largest CLI adoption by a wide margin (1.6M/wk npm)
- Rust rewrite eliminates Node.js dependency, adds native sandboxing (Seatbelt + Landlock)
- GPT-5.4 shipped Mar 5 — model ceiling keeps rising
- Multiple sources converge on "better for implementation" vs Claude Code's "better for planning"
- 1M+ first-week Codex app downloads show OpenAI distribution power

**Risks:**
- CVE-2025-61260 (CVSS 9.8) — critical command injection, patched but destroys "cleanest security record" claim
- SWE-bench score (41.04%) is GPT-5.2, not GPT-5.3 — no SEAL entry for newer model yet
- Previous claims of 240+ tok/s and "3-4x more token-efficient" are unverifiable/misattributed
- Terminal-Bench rank has slipped from #2 to #5-6 as Claude Opus 4.6 and GPT-5.4 entries arrived

**Best for:** Teams already in the OpenAI ecosystem. Speed-sensitive workflows (Spark variant >1,000 tok/s for latency-critical use). Implementation-heavy tasks where planning depth matters less.

---

### #3 — Gemini CLI

**Verdict: Best free option by far, but CLI-level benchmark performance significantly lags Tier 1.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| npm weekly | 328K/wk | Verified (npm API, Mar 22) |
| GitHub stars | 98,813 | Verified (highest in category) |
| SWE-bench Pro (SEAL) | 43.30% (#3) | Verified |
| Terminal-Bench 2.0 (own CLI) | 47.4% (#55, with Flash) | Verified — critical correction |
| Free tier | 1K model req/day | Verified with caveats |
| HN peak | 1,428 pts | Verified |

**Why #3:**
- Free tier (1K req/day, no credit card) is unmatched — massive accessibility advantage
- Highest star count in category (98.8K) driven by free tier + Google brand
- SWE-bench Pro model score (43.30%) is competitive — only 2.59pp behind Claude
- Plan mode (Mar 11, 2026) adds read-only reasoning workflow
- 1M context window now matches Claude Code

**Why not higher:**
- **Critical gap: CLI agent quality ≠ model quality.** Gemini CLI *itself* scores 47.4% on Terminal-Bench (#55), vs Claude Code's model at 81.8%. The 78.4% score frequently cited belongs to TongAgents scaffold + Gemini 3.1 Pro, not the CLI.
- File deletion incident (AI Incident DB #1178) — catastrophic data loss from failed mkdir cascade. Direct trust signal.
- Free tier caveats: 1K requests ≠ 1K prompts (one prompt = multiple API calls); default model is Flash, not Pro
- npm adoption (328K/wk) is 12x behind Claude Code despite having 20% more stars — star-to-usage conversion is weak

**Best for:** Cost-sensitive developers, hobbyists, students, and open-source contributors who need a capable CLI agent at zero cost. Quick exploratory coding sessions. Teams evaluating coding CLIs before committing budget.

---

### #4 — OpenHands

**Verdict: Strongest open-source agent framework with best self-reported SWE-bench score, but CLI is secondary to the platform.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 69,616 | Verified |
| SWE-bench Verified (self) | 77.6% | Self-reported (README badge) |
| Funding | $18.8M Series A (Madrona) | Verified, Nov 2025 |
| CLI launch | June 17, 2025 | Verified — corrected from Feb 2026 |
| HN peak | 70 pts | Weak |

**Why #4:**
- Highest SWE-bench score of any contender (77.6% SWE-V) — though self-reported and not on SEAL standardized
- Full open-source platform with Docker-sandboxed execution (server mode)
- CLI mode works without Docker — low friction for terminal use
- VC-backed with clear enterprise trajectory
- Strong GitHub stars (69.6K)

**Why not higher:**
- CLI is a secondary interface to the web/server platform — not a CLI-first tool
- SWE-bench score is self-scaffolded and not SEAL-standardized — not directly comparable to SEAL leaderboard entries
- Very low HN traction (70 pts peak, and that was an unrelated project) — weak public mindshare
- No npm distribution — Python-only (`pip install openhands-ai`)

**Best for:** Teams wanting an open-source, self-hosted coding agent platform that also has a CLI. Research teams. Organizations that need Docker-sandboxed execution for security.

---

### #5 — Aider

**Verdict: Pioneer with strong install base but showing clear signs of stagnation.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 42,292 | Verified |
| PyPI weekly | 180K/wk | Verified |
| Total installs | 5.7M (self-reported) | Partially verified |
| Last GitHub release | Aug 2025 (7+ months ago) | Verified — concerning |
| HN peak | 432 pts (Apr 2024) | Verified — nearly 2 years ago |

**Why #5:**
- Still has meaningful weekly installs (180K PyPI/wk) — real ongoing usage
- Pioneer in the space — established workflows and documentation
- Model-agnostic: works with Claude, GPT, Gemini, local models
- 42K stars reflect historical significance

**Why declining:**
- No GitHub release tags in 7+ months (last: v0.86.0, Aug 2025)
- HN traction collapsed from 432-pt peak to 1-5 pts per story
- 1,452 open issues (highest of all contenders) — maintenance burden visible
- PyPI releases continue (v0.86.2, Feb 2026) but without GitHub tags — unusual pattern suggesting reduced investment
- "88% of new code written by Aider itself" claim on homepage reads as defensive positioning

**Best for:** Developers already embedded in Aider workflows. Model-agnostic users who want to switch between providers. Simple, focused edit-commit cycles without agent orchestration.

---

### #6 — Goose (Block)

**Verdict: Strong internal validation at Block, interesting ACP/A2A integration, but narrow external adoption.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 33,498 | Verified |
| Internal adoption | "Thousands" at Block (12K employees) | Partially verified — 60% claim unverified |
| ACP integration | v1.28.0 (Mar 18, 2026) | Verified |
| HN peak | 249 pts | Verified — Jan 2025, quiet since |

**Why #6:**
- ACP (Agent Client Protocol) integration makes it an interop play — can orchestrate Claude Code and Codex sessions
- Block's internal adoption provides real-world validation at scale
- Linux Foundation AAIF governance gives open-source credibility
- Active releases (v1.28.0, Mar 2026)

**Why not higher:**
- No SWE-bench or Terminal-Bench scores — no quantitative benchmark signal
- External adoption unclear beyond Block
- HN traction peaked at launch (249 pts) and went quiet
- The "60% of Block employees" claim is unverified — only "thousands" confirmed

**Best for:** Teams interested in agent interoperability (ACP/A2A). Block ecosystem users. Developers wanting a corporate-backed open-source option with governance.

---

### #7 — Cline

**Verdict: VS Code extension with CLI-adjacent capabilities, but supply chain attack and unverifiable claims hurt trust.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 59,280 | Verified |
| VS Code installs | ~3.4M (not 5M) | Corrected |
| npm monthly | 1.05M/mo | Verified |
| Supply chain attack | CVE-2026-25253, Feb 17, 2026 | Verified — serious |
| Funding ($32M) | Unverifiable | No public evidence |

**Why #7:**
- High star count (59K) and VS Code installs (~3.4M) show real usage
- Active weekly releases (v3.75.0, Mar 20, 2026)
- Model-agnostic with MCP support

**Why not higher:**
- **Supply chain attack (Feb 2026):** Malicious v2.3.0 installed credential-stealing daemon on ~4,000 machines. Root cause: prompt injection stole publishing credentials. Fixed with OIDC provenance, but a category-worst trust incident.
- Primarily a VS Code extension, not a CLI-first tool
- $32M funding and named customers (Salesforce, Samsung, SAP) are unverifiable — cannot be used as ranking evidence
- No benchmark scores on SEAL or Terminal-Bench

**Best for:** VS Code-centric developers who want agent capabilities inside their editor rather than in a separate terminal. (Note: this is an IDE extension use case, borderline for "Coding CLIs" category.)

---

### #8 — GitHub Copilot CLI

**Verdict: Enterprise distribution channel, but minimal standalone traction and no benchmark differentiation.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 9,525 | Verified |
| GA date | Feb 25, 2026 | Verified |
| Multi-model | Claude, GPT, Gemini | Verified |
| HN peak | 62 pts | Verified — very low |
| npm monthly | ~284K | Verified |

**Why #8:**
- Multi-model support (Claude Opus 4.6, GPT-5.3, Gemini 3 Pro) — most flexible model selection
- Enterprise control plane: org-level model policies, OAuth, proxy support
- Rides the 15M Copilot subscriber base — built-in distribution
- GA status (Feb 2026) — production-ready with Microsoft backing

**Why not higher:**
- Extremely low HN traction (62 pts for launch) — developer community isn't excited
- No SWE-bench or Terminal-Bench scores — unknown capability level
- A thin wrapper that routes to other models — the value is policy/governance, not coding capability
- Unverifiable CVE report (CVE-2026-29783) — if confirmed, serious trust issue
- 9.5K stars is 8-10x behind peers

**Best for:** Enterprise teams already on GitHub Copilot who need CLI access with organizational policy controls. Not a standalone choice.

---

### #9 — Qwen Code

**Verdict: Interesting open-weight model play from Alibaba, but minimal Western adoption and weak benchmarks.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 20,964 | Verified |
| SWE-bench Pro | 38.70% | Verified |
| Terminal-Bench | 37.5% (480B-A35B) | Verified (from README) |
| Free tier | 1K req/day | Verified |
| HN peak | 2 pts | Verified — near zero |

**Why #9:**
- Free (1K req/day) with massive open-weight model (480B total, 35B active MoE)
- Gemini CLI fork — familiar UX for Gemini CLI users
- Active development (v0.13.0, Mar 23, 2026)

**Why not higher:**
- SWE-bench (38.70%) and Terminal-Bench (37.5%) are significantly below Tier 1
- Near-zero Western mindshare (2 HN pts)
- Gemini CLI fork — derivative, not differentiated
- No npm distribution data available

**Best for:** Developers in the Alibaba/Qwen ecosystem. Teams wanting to run open-weight models locally. Chinese-language codebases where Qwen models have stronger training signal.

---

### #10 — RooCode

**Verdict: SOC 2 compliance is unique, but VS Code-only with zero community buzz.**

| Signal | Value | Evidence Quality |
|--------|-------|-----------------|
| GitHub stars | 22,809 | Verified |
| VS Code installs | 1.39M | Verified |
| SOC 2 Type 2 | Confirmed | Verified |
| AIMultiple benchmark | 0.656 (#5) | Verified |
| HN peak | 2 pts | Verified — near zero |

**Why #10:**
- Only contender with SOC 2 Type 2 compliance — unique enterprise trust signal
- 1.39M VS Code installs with 5.0/5 rating (335 ratings) — users like it
- AIMultiple practical benchmark: 0.656 (#5 of 9) — functional

**Why not higher:**
- VS Code extension only — not a CLI tool (borderline for this category, like Cline)
- Near-zero HN traction despite decent install numbers
- No SEAL or Terminal-Bench scores
- AIMultiple score (0.656) lags Codex CLI (0.677) at 10x the cost ($53/run vs ~$4/run)

**Best for:** Compliance-sensitive enterprise teams that need SOC 2 and prefer VS Code. Not a CLI recommendation.

---

## Contenders to Watch

| Contender | Signal | Status |
|-----------|--------|--------|
| **OpenCode** | 128.8K stars, 1,253 HN pts, RCE patched | Strongest promotion candidate. Anthropic legal friction (forced removal of Claude subscription auth) is non-technical. Community traction is extraordinary. |
| **Emdash** | 206 HN pts, orchestrates multiple agents via git worktrees | Already in catalog. Agent orchestrator, not a standalone CLI — complementary to Tier 1. |
| **Omnara** (YC S25) | 147 HN pts, remote agent execution | "Run Claude Code and Codex from anywhere." Infrastructure play. |
| **Terminal Use** (YC W26) | 115 HN pts, "Vercel for filesystem agents" | Cloud execution platform for coding agents. |
| **Kilo Code** | 17.1K stars, "#1 on OpenRouter," 1.5M+ users claimed | Forking from OpenCode. Near-daily releases. Watch for independent traction. |
| **Warp Oz** | 26K stars, multi-agent orchestration | Evolution from terminal to agent platform. "Run hundreds of agents in parallel." |

---

## Narrow Subcase Recommendations

**"I want the best coding agent, cost is not a factor"** → Claude Code (#1). Highest benchmarks, deepest adoption, strongest ecosystem.

**"I want a free coding CLI"** → Gemini CLI (#3). 1K req/day free tier is unmatched. Accept the 47.4% Terminal-Bench score and file-safety risks.

**"I need maximum speed for implementation tasks"** → Codex CLI (#2). GPT-5.3-Codex Spark variant at >1,000 tok/s. Best for rapid iteration cycles.

**"I need enterprise compliance and policy controls"** → Copilot CLI (#8) for multi-model policy governance. RooCode (#10) if SOC 2 Type 2 is required.

**"I want fully open-source and self-hosted"** → OpenHands (#4). Docker-sandboxed, VC-backed, highest self-reported SWE-bench.

**"I want to run open-weight models locally"** → Qwen Code (#9) or Aider (#5). Qwen for the model, Aider for model-agnostic flexibility.

**"I want agent interoperability (ACP/A2A)"** → Goose (#6). Only contender with native ACP integration for orchestrating other agents.

**"Should I use the platform natively instead?"** → For VS Code users considering Cline (#7) or RooCode (#10): yes, GitHub Copilot's native VS Code integration or Cursor provides a more integrated experience. These are IDE extensions being evaluated in a CLI category.

---

## What Would Change This Ranking

| Change | Impact |
|--------|--------|
| GPT-5.3 or GPT-5.4 SEAL submission beats 45.89% | Codex CLI could close or erase benchmark gap with Claude Code |
| Gemini CLI scaffold improvement to match TongAgents quality | Gemini CLI jumps to #2 — the model is already competitive, the agent isn't |
| Claude Code major unpatched security incident | Trust damage could open the door for Codex CLI or Gemini CLI |
| OpenCode resolves Anthropic legal issues | Immediate promotion candidate — 128K stars, 1.2K HN pts, patched security |
| Codex CLI Rust rewrite ships with GPT-5.4 default | Native binary + latest model could significantly close adoption gap |
| Aider resumes active GitHub releases | Could reclaim #4-5 with refreshed model support and community engagement |
| METR-style quality audit of Claude Code vs Codex CLI | ~50% of SWE-bench PRs rejected by maintainers — real-world quality comparison would reshape rankings |
| Free tier from Anthropic or OpenAI | Eliminates Gemini CLI's primary differentiator |

---

## Quotes

**SemiAnalysis on Claude Code adoption (Feb 5, 2026):**
> "4% of GitHub public commits are being authored by Claude Code right now. At the current trajectory, we believe that Claude Code will be 20%+ of all daily commits by the end of 2026."

**METR on benchmark quality (Mar 10, 2026):**
> "We find that roughly half of test-passing SWE-bench Verified PRs written by mid-2024 to mid/late-2025 agents would not be merged into main by repo maintainers."

**Morphllm on scaffold importance (Mar 1, 2026):**
> "The agent's architecture matters as much as the model underneath."

**AIMultiple on CLI vs IDE (Mar 3, 2026):**
> IDE agents outscore top CLIs by ~7pp. CLI tools operate at ~1/6th the cost.

---

## Recommended Next Step

1. Update `src/lib/catalog.ts` coding-clis entries with corrected metrics from this ranking
2. Correct the 19 factual errors identified in the deep-dive claims correction table
3. Evaluate OpenCode for promotion — strongest below-cut-line candidate by far
4. Consider recategorizing Cline and RooCode as "IDE Extensions" rather than "Coding CLIs" — they are VS Code extensions evaluated in a CLI category
