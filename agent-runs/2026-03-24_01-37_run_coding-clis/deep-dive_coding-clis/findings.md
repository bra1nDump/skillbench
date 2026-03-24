# Deep-Dive Findings: Coding CLIs / Code Agents

## Scope

Evidence-backed verification and update of every claim in the coding-clis category. Quantitative traction, benchmarks, security incidents, public comparisons, and new contender detection.

## Date

2026-03-24

## Inputs

- 7 parallel research agents covering: Tier 1 (Claude Code, Codex CLI, Gemini CLI), Tier 2 (Copilot CLI, OpenHands, Cline, Goose, Qwen Code, RooCode, Aider), Benchmarks (SEAL, Terminal-Bench, METR, Morphllm, Educative, MarginLab, AIMultiple), Below-cut-line contenders
- Sources: npm API, GitHub API, HN Algolia, SEAL leaderboard, Terminal-Bench leaderboard, MarginLab tracker, web search, WebFetch on official blogs/changelogs
- Prior catalog state from `src/lib/catalog.ts` lines 15854-16243

---

## QUANTITATIVE TRACTION SUMMARY TABLE

| # | Contender | GitHub Stars | npm/PyPI Weekly | SWE-bench Pro (SEAL) | Terminal-Bench 2.0 | HN Peak | Key Change |
|---|-----------|-------------|-----------------|---------------------|--------------------|---------|----|
| 1 | Claude Code | 81,717 | 4.02M npm/wk | 45.89% (#1) | 81.8% (ForgeCode scaffold) | 2,127 pts | npm DOWN from 7.88M to 4.0M |
| 2 | Codex CLI | 67,111 | 1.62M npm/wk | 41.04% (GPT-5.2) | 77.3% (Droid, #6) | 587 pts | Security: CVE-2025-61260 CVSS 9.8 |
| 3 | Gemini CLI | 98,813 | 328K npm/wk | 43.30% (#3) | 47.4% (own CLI w/ Flash) | 1,428 pts | TB score misattributed |
| 4 | Copilot CLI | 9,525 | ~284K npm/mo | — | — | 62 pts | CVE unverifiable |
| 5 | OpenHands | 69,616 | — | 77.6% SWE-V (self) | — | 70 pts | CLI launched Jun 2025, not Feb 2026 |
| 6 | Cline | 59,280 | 1.05M npm/mo | — | — | 198 pts | Installs ~3.4M, not 5M |
| 7 | Goose | 33,498 | — | — | — | 249 pts | ACP v1.28.0 confirmed |
| 8 | Qwen Code | 20,964 | — | 38.70% | 37.5% (own CLI) | 2 pts | Model is 35B/480B, not 3B/80B |
| 9 | RooCode | 22,809 | — | — | — | 2 pts | 1.39M installs, SOC 2 confirmed |
| 10 | Aider | 42,292 | 180K PyPI/wk | — | — | 432 pts (2024) | No GitHub release since Aug 2025 |

---

## FINDINGS BY CONTENDER

---

### #1 Claude Code

**[CONFIRMED] GitHub Stars: 81,717**
Source: gh api repos/anthropics/claude-code | Date: 2026-03-24
Open issues: 7,441 | Forks: 6,814

**[CORRECTED] npm Weekly Downloads: ~4.02M/week (NOT 7.88M)**
Source: https://api.npmjs.org/downloads/point/last-week/@anthropic-ai/claude-code
Date: March 16-22, 2026 | Downloads: 4,022,597
Why it matters: Catalog overstates by ~2x. Still #1 by wide margin (3x Codex CLI) but the 7.88M figure is wrong.

**[STRONG] ~4% of GitHub Public Commits (SemiAnalysis)**
Source: https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point
Date: 2026-02-05 | Who: Dylan Patel / SemiAnalysis
Key quote: "4% of GitHub public commits are being authored by Claude Code right now. At the current trajectory, we believe that Claude Code will be 20%+ of all daily commits by the end of 2026."
Why it matters: 135,000+ commits/day, 42,896x growth in 13 months. Strongest adoption signal in category.

**[UNVERIFIED] ~95% First-Pass Correctness (Educative.io) — CLAIM NOT FOUND**
Multiple Educative.io articles fetched. None contain a "95%" first-pass correctness figure. The articles use qualitative assessments and execution time metrics only.
Recommendation: Drop this claim or find the actual primary source.

**[CONFIRMED] #1 SWE-bench Pro Standardized: 45.89% (SEAL)**
Source: https://labs.scale.com/leaderboard/swe_bench_pro_public
Model: claude-opus-4-5-20251101 | Date: Dec 11, 2025
Note: This is the underlying model score on SEAL's standardized scaffold, not the Claude Code agent's own scaffold score (~55-56%).

**[CONFIRMED] $2.5B Annualized Revenue**
Sources: Constellation Research, NxCode, SaaStr, Sacra
Key detail: "More than doubled since January 1, 2026." Accounts for >50% of Anthropic enterprise spending.

**[CONFIRMED] CVE-2025-59536 (CVSS 8.7) + CVE-2026-21852 (CVSS 5.3) — Both Patched**
Source: https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/
CVE-2025-59536: hooks injection RCE, fixed v1.0.111 (Oct 2025)
CVE-2026-21852: API key exfiltration via ANTHROPIC_BASE_URL, fixed v2.0.65 (Jan 2026)

**[CORRECTED] Terminal-Bench: 74.7% is now rank #10, NOT #3**
Source: https://www.tbench.ai/leaderboard/terminal-bench/2.0
Current leaderboard has moved significantly:
- #1: ForgeCode + Claude Opus 4.6 — 81.8% (2026-03-12)
- #2: ForgeCode + GPT-5.4 — 81.8% (2026-03-12)
- #3: TongAgents + Gemini 3.1 Pro — 80.2% (2026-03-13)
- #10: Terminus-KIRA + Claude Opus 4.6 — 74.7% (2026-02-22)
Better framing: Claude Opus 4.6 model tops Terminal-Bench at 81.8% (via ForgeCode scaffold).

**[CONFIRMED] MarginLab: Nominal, No Degradation (p >= 0.05)**
Source: https://marginlab.ai/trackers/claude-code/
Date: 2026-03-23 | Baseline: 56% | Current: 55% | 30-day avg: 56%
Methodology: Daily N=50 evaluations on contamination-resistant SWE-Bench-Pro subset.

**[STRONG] Quality Regression Perception — Community Sentiment, Not Measured Reality**
HN thread: "Claude Code is being dumbed down?" — 1,085 pts, 702 comments (Feb 11, 2026)
Source: https://symmetrybreak.ing/blog/claude-code-is-being-dumbed-down/
The complaint targets v2.1.20 UX changes (summary statements replacing file paths), not model capability. Anthropic called it "a nice simplification." Multiple GitHub issues report perceived degradation but MarginLab shows no statistical change.

**HN Traction (Top threads):**
| Points | Title | Date |
|--------|-------|------|
| 2,127 | "Claude 3.7 Sonnet and Claude Code" | 2025-02-24 |
| 1,298 | "Cowork: Claude Code for the rest of your work" | 2026-01-12 |
| 1,086 | "Tell HN: I'm 60 years old. Claude Code has re-ignited a passion" | 2026-03-07 |
| 1,085 | "Claude Code is being dumbed down?" | 2026-02-11 |
| 976 | "How I use Claude Code: Separation of planning and execution" | 2026-02-22 |

---

### #2 Codex CLI

**[CORRECTED] npm Weekly Downloads: ~1.62M/week (NOT 2.49M)**
Source: https://api.npmjs.org/downloads/point/last-week/@openai/codex
Date: March 16-22, 2026 | Downloads: 1,622,983
Monthly average (~2.37M/week) is closer to claimed figure. Last-week is significantly lower.

**GitHub Stars: 67,111**
Source: gh api repos/openai/codex | Open issues: 2,207 | Forks: 8,977

**[CONFIRMED] Rust Rewrite**
Source: https://github.com/openai/codex/discussions/1174
Date: 2025-05-30 | HN: 151 pts / 129 comments
Eliminates Node.js v22+ dependency. Native MCP client/server, Apple Seatbelt + Landlock sandboxing.

**[CORRECTED] Terminal-Bench 77.3% — Score confirmed, rank is #5-6 NOT #2**
Source: https://www.tbench.ai/leaderboard/terminal-bench/2.0
Droid (GPT-5.3-Codex): 77.3% — currently rank #6
SageAgent (GPT-5.3-Codex): 78.4% — currently rank #5
Was #2 at launch (Feb 2026) before Claude Opus 4.6 and GPT-5.4 entries pushed it down.

**[CONFIRMED] GPT-5.4 shipped March 5, 2026**
Source: https://openai.com/index/introducing-gpt-5-4/
GPT-5.4 mini: March 17, 2026. 1M token context, configurable reasoning effort (5 levels).

**[NOT FOUND] 240+ tok/s — No evidence for this claim**
Source: Artificial Analysis measures GPT-5.3-Codex (xhigh) at 73.9 tok/s.
GPT-5.3-Codex-Spark variant: >1,000 tok/s (separate ultra-low-latency hardware).
The 240 tok/s figure does not appear in any primary source.

**[NOT FOUND] "3-4x more token-efficient" — Misattributed**
The 3.3x figure applies to GPT-5.4 mini vs GPT-5.4 quota efficiency, not a Rust-rewrite performance gain or a comparison to Claude Code.

**[FALSE] "Cleanest security record in Tier 1" — CVE-2025-61260 (CVSS 9.8)**
Source: https://research.checkpoint.com/2025/openai-codex-cli-command-injection-vulnerability/
Date: Dec 1, 2025 | Critical command injection via malicious project-local config files.
Patched in v0.23.0 (Aug 20, 2025 — patch predates disclosure, suggesting responsible disclosure).
Additional: 30+ flaws in AI coding tools including Codex found by researchers (The Hacker News, Dec 2025).

**[CORRECTED] SWE-bench Pro 41.04% — Score confirmed, model is GPT-5.2-Codex (NOT GPT-5.3)**
Source: https://labs.scale.com/leaderboard/swe_bench_pro_public
gpt-5.2-codex: 41.04% (dated Jan 27, 2026). No SEAL entry found for GPT-5.3-Codex.
OpenAI's own scaffold: 56.8% (non-standardized).

**[CONFIRMED] 1M+ First-Week Downloads**
Source: https://venturebeat.com/technology/openais-new-codex-app-hits-1m-downloads-in-first-week-but-limits-may-be
Codex app (launched Feb 2, 2026) hit 1M+ downloads in first week. 1.6M WAU after GPT-5.3-Codex.

**HN Traction:**
| Points | Title | Date |
|--------|-------|------|
| 587 | "OpenAI are quietly adopting skills, now available in ChatGPT and Codex CLI" | 2025-12-12 |
| 516 | "OpenAI Codex CLI: Lightweight coding agent that runs in your terminal" | 2025-04-16 |
| 151 | "Codex CLI is going native" (Rust rewrite) | 2025-06-01 |

---

### #3 Gemini CLI

**[CONFIRMED] GitHub Stars: 98,813**
Source: gh api repos/google-gemini/gemini-cli | Open issues: 3,164 | Forks: 12,563

**[CONFIRMED] npm Weekly Downloads: 327,637**
Source: https://api.npmjs.org/downloads/point/last-week/@google/gemini-cli

**[MISLEADING] Terminal-Bench 78.4% (#1) — WRONG ATTRIBUTION**
The 78.4% score belongs to Gemini 3.1 Pro model paired with TongAgents agent scaffold (currently #4, was briefly #1).
**Gemini CLI itself scores 47.4% with Gemini 3 Flash (rank #55) and 19.6% with Gemini 2.5 Pro (rank #105).**
Current Terminal-Bench #1: ForgeCode + Claude Opus 4.6 at 81.8%.
This is the most significant factual error in the current catalog.

**[CONFIRMED] SWE-bench Pro 43.30% (#3, SEAL)**
Source: https://labs.scale.com/leaderboard/swe_bench_pro_public
gemini-3-pro-preview: 43.30 +/- 3.60. Gap to #1 (Claude Opus 4.5): 2.59pp.

**[NUANCED] Free Tier: 1K req/day — Mostly accurate with important caveats**
Source: https://geminicli.com/docs/resources/quota-and-pricing/
- Google Account (Gemini Code Assist): 1,000 model requests/user/day, 60/min — no credit card
- API Key (unpaid): only 250 requests/day, Flash model only
- Caveat from GitHub discussion #4122: "1,000 model requests/day does NOT mean 1,000 Gemini 2.5 Pro requests." Default model is Flash. One prompt can trigger multiple API requests.

**[CONFIRMED] 1M Context Window**
Multiple sources confirm. Note: Claude Code also now has 1M context (Opus 4.6), removing this as a differentiator.

**[CONFIRMED] Plan Mode — March 11, 2026**
Source: https://developers.googleblog.com/plan-mode-now-available-in-gemini-cli/
Read-only mode with `ask_user` tool. Uses Gemini 3.1 Pro. Activate via `/plan` or `Shift+Tab`.

**[UNVERIFIED] 50-60% First-Pass Correctness (Educative.io) — CLAIM NOT FOUND**
No Educative.io article contains this specific metric. Article describes Gemini CLI qualitatively as "a sharp but inexperienced intern." Same issue as the Claude Code 95% claim — no percentage source found.

**[CONFIRMED] File Deletion Incident — AI Incident DB #1178**
Source: https://incidentdatabase.ai/cite/1178/
Date: July 2025 | HN: 304 pts / 365 comments
Product manager asked Gemini CLI to reorganize files. Failed `mkdir` not verified, cascade of move operations overwrote/deleted all but one file.
AI response: "I have failed you completely and catastrophically."

**HN Traction:**
| Points | Title | Date |
|--------|-------|------|
| 1,428 | "Introducing Gemini CLI" (official launch) | 2025-06-25 |
| 403 | "Gemini CLI tips and tricks" (Addy Osmani) | 2025-11-26 |
| 304 | "I watched Gemini CLI hallucinate and delete my files" | 2025-07-22 |

---

### #4 GitHub Copilot CLI

**[CONFIRMED] GitHub Stars: 9,525** (github/copilot-cli)
Note: github/gh-copilot (legacy extension) is archived at 1,134 stars.

**[CONFIRMED] GA: February 25, 2026**
Source: https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/

**[CONFIRMED] Multi-model — expanded list**
GA announcement names: Claude Opus 4.6, Claude Sonnet 4.6, GPT-5.3-Codex, Gemini 3 Pro, GPT-5 mini, GPT-4.1, Claude Haiku 4.5.

**[CONFIRMED] Enterprise Agent Control Plane**
Organization model availability policies, per-subscription API endpoints, HTTPS proxy support, OAuth device flow, policy enforcement hooks.

**[UNVERIFIABLE] 15M Copilot Subscriber Distribution**
No subscriber counts in any CLI announcement. GitHub has previously cited ~15M Copilot subscribers but not in CLI context.

**[UNVERIFIABLE] CVE-2026-29783**
PromptArmor article exists, posted to HN Feb 27, 2026 (62 pts / 22 comments). Title: "GitHub Copilot CLI downloads and executes malware." Page content dynamically loaded, CVE number not confirmable from available sources.

**[CONFIRMED] 24 HN pts** — the public preview launch post (Sep 25, 2025). GA post only got 7 pts.

---

### #5 OpenHands (All Hands AI)

**[CONFIRMED] GitHub Stars: 69,616**
Source: gh api repos/All-Hands-AI/OpenHands | Forks: 8,725

**[CONFIRMED] $18.8M Series A — Madrona lead, Nov 2025**
Source: https://openhands.dev/blog/weve-just-raised-18-8m-to-build-the-open-standard-for-autonomous-software-development

**[CORRECTED] CLI Release: June 17, 2025 (NOT February 2026)**
Source: https://openhands.dev/blog/the-openhands-cli-ai-powered-development-in-your-terminal
Install: `pip install openhands-ai`. No Docker required for CLI mode.

**[CORRECTED] SWE-bench: Now self-reports 77.6% (NOT 72%)**
README badge shows 77.6 (current, likely with Claude 4.x). Previous CodeAct 2.1 blog (Nov 2025): 53% with Claude Sonnet 3.5. The 72% figure is outdated.

**[NUANCED] Docker-Sandboxed Execution — Server mode only**
Docker sandboxing applies to GUI/server deployment. CLI mode explicitly does NOT require Docker.

**HN Traction:** Very low — peak 11 pts for "Show HN: OpenHands" (May 2025). 70-pt result was a 2022 NLP project, unrelated.

---

### #6 Cline

**[CONFIRMED] GitHub Stars: 59,280**
Source: gh api repos/cline/cline | Latest: v3.75.0 (March 20, 2026) | Active weekly releases.

**[CORRECTED] Installs: ~3.4M VS Code (NOT 5M)**
VS Code Marketplace: 3,397,967 installs (March 20, 2026). npm last-month: 1,052,177. The 5M figure is not supported.

**[UNVERIFIABLE] $32M Funding (Emergence Capital)**
No TechCrunch article, HN post, blog post, or press release found. Cannot be verified from public sources.

**[CONFIRMED] Supply Chain Attack — v2.3.0 OpenClaw (Feb 17, 2026)**
Source: https://www.stepsecurity.io/blog/cline-supply-chain-attack-detected-cline-2-3-0-silently-installs-openclaw
- Window: ~3:26 AM to ~11:30 AM PT (~8 hours)
- ~4,000 downloads of malicious version
- Post-install script injected `npm install -g openclaw@latest`
- OpenClaw: credential access, arbitrary shell execution, persistent daemon
- CVE-2026-25253 (CVSS 8.8) on OpenClaw itself
- Root cause: prompt injection PoC used to steal publication credentials
- Fix: OIDC provenance via GitHub Actions, clean v2.4.0+

**[UNVERIFIABLE] Named Customers: Salesforce, Samsung, SAP**
No press releases, case studies, or blog posts found naming these companies.

---

### #7 Goose (Block)

**[CONFIRMED] GitHub Stars: 33,498**
Source: gh api repos/block/goose | Latest: v1.28.0 (March 18, 2026)

**[CONFIRMED] ACP Integration — v1.28.0 + Blog March 19, 2026**
Source: https://block.github.io/goose/blog/use-goose-with-your-ai-subscription/
ACP session/set_mode handler, ACP read tool, ACP providers for Claude Code and Codex.
Correction: ACP = "Agent Client Protocol" (developed by Zed Industries), not "Agent Communication Protocol." Recently merged into A2A (Agent-to-Agent) under Linux Foundation.

**[UNVERIFIED] 60% of Block (12K employees) Use It Weekly**
Blog (Apr 2025): "thousands of Block employees" using Goose daily, "50-75% time savings." The specific 60% figure was NOT found in any public source.

**[PARTIALLY CONFIRMED] Linux Foundation AAIF Governance**
AAIF announced Dec 9-10, 2025. Goose mentioned as founding project. MCP donated to Linux Foundation Dec 11, 2025.

**HN Traction:** Peak 249 pts / 68 comments (Jan 30, 2025 — launch). Quiet since.

---

### #8 Qwen Code

**[CONFIRMED] GitHub Stars: 20,964**
Source: gh api repos/QwenLM/qwen-code | Latest: v0.13.0 (March 23, 2026)

**[CORRECTED] Model Architecture: 35B active / 480B total (NOT "3B active / 80B MoE")**
Source: HuggingFace model card — Qwen3-Coder-480B-A35B-Instruct
Total params: 480B | Active: 35B | Experts: 160 total, 8 activated | Layers: 62
Pre-training: 7.5T tokens (70% code ratio)

**[CONFIRMED] SWE-bench Pro 38.70%**
Source: HuggingFace model card, ScaleAI/SWE-bench_Pro official

**[CONFIRMED] Gemini CLI Fork**
README: "This project is based on Google Gemini CLI."

**[CONFIRMED] 1K Free Req/Day**
Via Qwen OAuth sign-in.

**Terminal-Bench (from README):** 37.5% (480B-A35B) | 31.3% (30B-A3B)

**HN Traction:** Near zero — 2 pts peak. No organic Western discussion.

---

### #9 RooCode

**[CONFIRMED] GitHub Stars: 22,809**
Source: gh api repos/RooVetGit/Roo-Code

**[CONFIRMED] SOC 2 Type 2 Compliance**
Source: roocode.com — "fully SOC2 Type 2 compliant"

**[CONFIRMED] VS Code: 1,390,331 installs, 5.0/5 rating (335 ratings)**
Source: VS Code Marketplace (March 8, 2026 update)

**HN Traction:** Near zero — all stories 1-3 pts despite 22K stars and 1.39M installs.

---

### #10 Aider

**[CONFIRMED] GitHub Stars: 42,292**
Source: gh api repos/Aider-AI/aider | Open issues: 1,452

**[CORRECTED] Total Installations: 5.7M (NOT 4.1M)**
Source: aider.chat homepage self-reported

**[CLOSE] PyPI Weekly: 180,151/week** (catalog claims 191K — slightly overstated)

**[CONFIRMED] Declining Mindshare — Multiple Signals**
1. No new GitHub release tags since v0.86.0 (August 2025) — 7+ months
2. PyPI releases continue (v0.86.2 on Feb 12, 2026) but without GitHub tags
3. HN collapsed from 432-pt peak (Apr 2024) to 1-5 pts per story
4. Open issues: 1,452 (highest of all contenders)
5. Commits still happening (model config updates) but pace slowed significantly
6. Homepage claims 88% of new code written by Aider itself ("Singularity")

---

## BENCHMARK CROSS-REFERENCE

### Terminal-Bench 2.0 (Current as of March 24, 2026)
Source: https://www.tbench.ai/leaderboard/terminal-bench/2.0 | Publisher: Stanford x Laude

| Rank | Agent + Model | Accuracy |
|------|---------------|----------|
| 1 | ForgeCode + Claude Opus 4.6 | 81.8% +/- 1.7% |
| 2 | ForgeCode + GPT-5.4 | 81.8% +/- 2.0% |
| 3 | TongAgents + Gemini 3.1 Pro | 80.2% +/- 2.6% |
| 4 | ForgeCode + Gemini 3.1 Pro | 78.4% +/- 1.8% |
| 5 | SageAgent + GPT-5.3-Codex | 78.4% +/- 2.2% |
| 6 | Droid + GPT-5.3-Codex | 77.3% +/- 2.2% |
| 10 | Terminus-KIRA + Claude Opus 4.6 | 74.7% |
| 55 | Gemini CLI + Gemini 3 Flash | 47.4% |
| 105 | Gemini CLI + Gemini 2.5 Pro | 19.6% |

Key insight: Scaffold matters enormously. Same model can score 17 problems apart in different agents (Morphllm).

### SEAL SWE-bench Pro (Standardized, 250-turn limit)
Source: https://labs.scale.com/leaderboard/swe_bench_pro_public

| Rank | Model | Score | CI |
|------|-------|-------|----|
| 1 | claude-opus-4-5-20251101 | 45.89% | +/- 3.60 |
| 2 | claude-4-5-Sonnet | 43.60% | +/- 3.60 |
| 3 | gemini-3-pro-preview | 43.30% | +/- 3.60 |
| 4 | claude-4-Sonnet | 42.70% | +/- 3.59 |
| 5 | gpt-5 (High) | 41.78% | +/- 3.49 |
| 6 | gpt-5.2-codex | 41.04% | +/- 3.57 |

### METR Study — SWE-bench PR Merge Quality (March 10, 2026)
Source: https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/
- ~50% of test-passing SWE-bench Verified PRs would be rejected by real maintainers
- Automated grader vs. maintainer gap: 24.2 percentage points (SE: 2.7)
- Task horizon overstatement: ~7x (50 min automated vs 8 min maintainer)
- 278 HN points
- Key quote: "A naive interpretation of benchmark scores may lead one to overestimate how useful agents are."

### AIMultiple Practical Benchmark (March 3, 2026)
Source: https://aimultiple.com/ai-coding-benchmark
10 full-stack tasks, ~600 validation checks, 9,600+ test executions

| Rank | Tool | Score | Cost/run |
|------|------|-------|----------|
| 1 | Cursor | 0.751 | $27.90 |
| 2 | Kiro Code | 0.717 | ~$5.50 |
| 3 | Antigravity | 0.692 | Free |
| 4 | Codex CLI | 0.677 | ~$4.00 |
| 5 | Roo Code | 0.656 | $53.10 |

Key finding: IDE agents outscore top CLI by ~7pp. CLI tools operate at ~1/6th cost.

### Morphllm 15-Agent Comparison (March 1, 2026)
Source: https://www.morphllm.com/ai-coding-agent
- Tier 1: Claude Code (80.9% SWE-V), Codex CLI (77.3% TB), Cursor (72.8% SWE-V)
- "42% of new code is AI-assisted" (Sonar 2026)
- Key quote: "The agent's architecture matters as much as the model underneath."

---

## PAIRWISE COMPARISON UPDATES

### Claude Code vs Codex CLI
- **SWE-bench Pro SEAL**: Claude Code 45.89% vs Codex (GPT-5.2) 41.04% — 4.85pp gap
- **Terminal-Bench 2.0**: Both models top the board via third-party scaffolds. Claude Opus 4.6 (ForgeCode) 81.8% vs GPT-5.3-Codex (SageAgent) 78.4%
- **npm adoption**: Claude Code ~4.0M/wk vs Codex ~1.6M/wk — 2.5x gap (was claimed 3x)
- **Speed**: Codex standard ~74 tok/s (not 240+), Spark variant >1,000 tok/s
- **Security**: Both have CVEs now. Claude Code: 2 CVEs patched. Codex: CVE-2025-61260 CVSS 9.8 patched. Neither has a "clean" record.
- **Consensus pattern confirmed**: Multiple sources converge on Claude Code for planning/architecture, Codex for implementation.

### Gemini CLI vs Claude Code
- **SWE-bench Pro**: Gap narrowed to 2.59pp (43.30% vs 45.89%)
- **Terminal-Bench**: Gemini CLI *itself* scores 47.4% (not 78.4%). Gemini 3.1 Pro model scores 80.2% via TongAgents — vs Claude Opus 4.6 at 81.8% via ForgeCode. Model-level gap is small.
- **Cost**: Gemini free (1K req/day) vs Claude Code $20-200/mo — massive gap
- **Context**: Both now at 1M tokens — no longer a differentiator
- **Trust**: File deletion incident (AI Incident DB #1178) vs patched CVEs. Both have trust flags.

### Gemini CLI vs Codex CLI
- Terminal-Bench (own CLIs): Codex (77.3%) >> Gemini CLI (47.4%)
- SWE-bench Pro: Gemini 43.30% > Codex 41.04%
- Cost: Gemini free >> Codex API-priced
- npm: Codex 1.6M/wk >> Gemini 328K/wk

---

## NEW CONTENDER ALERTS

### NEW: Emdash — 206 HN pts (Feb 24, 2026)
"Coding Agent Orchestrator Powered by Git Worktrees." Open-source, supports Amp, Claude Code, and other agents. Significant HN traction. Already in catalog as `emdash`.

### NEW: Omnara (YC S25) — 147 HN pts (Feb 12, 2026)
"Run Claude Code and Codex from anywhere." Remote agent execution with CLI integration. YC-backed. Not in catalog.

### NEW: Terminal Use (YC W26) — 115 HN pts (Mar 9, 2026)
"Vercel for filesystem-based agents." Cloud execution platform for coding agents with CLI interface. Not in catalog.

### WATCH: OpenCode — 128,820 stars, 1,253 HN pts (Mar 20, 2026)
Star count grew from 126K to 128.8K. RCE patched (v1.1.10+). Anthropic legal action forced removal of Claude subscription auth (Mar 19, 2026). Despite controversy, community engagement is massive. Strongest below-cut-line promotion candidate.

### WATCH: Warp Oz — Multi-agent orchestration (Feb 10, 2026)
"Run hundreds of coding agents in parallel." Significant product evolution from terminal replacement to agent orchestration platform. 26K stars.

### WATCH: Kilo Code — 17,103 stars, "#1 on OpenRouter"
Claims 1.5M+ users, 25T+ tokens processed. Forking away from OpenCode (x-kilo-* headers replacing x-opencode-*). Near-daily releases.

---

## CLAIMS CORRECTION SUMMARY

| Contender | Claim | Status | Corrected Value |
|-----------|-------|--------|----------------|
| Claude Code | 7.88M npm/week | **WRONG** | ~4.02M/week |
| Claude Code | ~95% first-pass correctness | **UNVERIFIED** | No Educative.io source found |
| Claude Code | Terminal-Bench #3 | **OUTDATED** | Now #10; Opus 4.6 tops at 81.8% via ForgeCode |
| Codex CLI | 2.49M npm/week | **STALE** | ~1.62M/week (last week) |
| Codex CLI | Terminal-Bench #2 | **OUTDATED** | Now #5-6 |
| Codex CLI | 240+ tok/s | **NOT FOUND** | Standard: ~74 tok/s; Spark: 1000+ tok/s |
| Codex CLI | 3-4x more token-efficient | **MISATTRIBUTED** | Refers to GPT-5.4 mini vs 5.4 quota |
| Codex CLI | Cleanest security record | **FALSE** | CVE-2025-61260 CVSS 9.8 |
| Codex CLI | SWE-bench 41.04% is GPT-5.3 | **WRONG MODEL** | 41.04% is GPT-5.2-Codex |
| Gemini CLI | Terminal-Bench 78.4% (#1) | **MISATTRIBUTED** | Score belongs to model+agent combo; CLI itself: 47.4% |
| Gemini CLI | 50-60% first-pass correctness | **UNVERIFIED** | No Educative.io source found |
| OpenHands | CLI release Feb 2026 | **WRONG** | CLI launched June 17, 2025 |
| OpenHands | 72% SWE-bench Verified | **OUTDATED** | README now shows 77.6% |
| Cline | 5M installs | **OVERSTATED** | VS Code: ~3.4M |
| Cline | $32M funding | **UNVERIFIABLE** | No public evidence |
| Cline | Named customers (Salesforce/Samsung/SAP) | **UNVERIFIABLE** | No public evidence |
| Qwen Code | 3B active / 80B MoE | **WRONG** | 35B active / 480B total |
| Aider | 4.1M+ total installations | **OUTDATED** | Self-reports 5.7M |
| Goose | 60% of Block employees | **UNVERIFIED** | "Thousands" confirmed, 60% not found |

---

## GAPS IN EVIDENCE

1. **First-pass correctness claims**: Both the Claude Code "~95%" and Gemini CLI "50-60%" claims attributed to Educative.io cannot be found. Need primary source or should be dropped.
2. **Codex CLI SEAL score for GPT-5.3-Codex**: No standardized SEAL entry found for GPT-5.3; only GPT-5.2-Codex at 41.04%. Need to check if GPT-5.3 has been submitted.
3. **Cline funding**: $32M / Emergence Capital is a key ranking factor but unverifiable. Should be flagged or sourced.
4. **Copilot CLI CVE-2026-29783**: PromptArmor article exists but content not scrapeable. CVE number unconfirmable.
5. **No benchmark scores** for: Copilot CLI, Cline, Goose, RooCode. Rankings for these are based on adoption/qualitative signals only.
6. **OpenCode promotion decision**: 128K stars + 1,253 HN pts + resolved security issues = strongest case for re-entry. The Anthropic legal friction is ongoing but not security-related.

## RECOMMENDED NEXT STEPS

1. **Correct all 19 factual errors** identified in the claims correction table above
2. **Update Terminal-Bench references** across the board — the leaderboard has moved significantly since last update
3. **Drop or re-source** the Educative.io first-pass correctness claims for both Claude Code and Gemini CLI
4. **Reconsider OpenCode** for re-entry — security issues resolved, community traction is extraordinary
5. **Add Emdash, Omnara, Terminal Use** as new contenders to watch (all have >100 HN pts)
6. **Flag Kilo Code** for promotion watch — #1 on OpenRouter, growing stars, near-daily releases
7. **Re-evaluate Codex CLI security narrative** — "cleanest record" claim must be removed
8. **YouTube video collection** needed — not covered in this deep-dive run

---

## Quotes

**SemiAnalysis on Claude Code adoption (Feb 5, 2026):**
> "4% of GitHub public commits are being authored by Claude Code right now. At the current trajectory, we believe that Claude Code will be 20%+ of all daily commits by the end of 2026."

**METR on SWE-bench quality (Mar 10, 2026):**
> "We find that roughly half of test-passing SWE-bench Verified PRs written by mid-2024 to mid/late-2025 agents would not be merged into main by repo maintainers."

**Morphllm on scaffold importance (Mar 1, 2026):**
> "The agent's architecture matters as much as the model underneath." / "The same model in different agent architectures produces different results."

**Gemini CLI on file deletion (Jul 2025):**
> "I have failed you completely and catastrophically. My review of the commands confirms my gross incompetence... I cannot find your files. I have lost your data."

**MarginLab status (Mar 23, 2026):**
> Status: "Nominal" — No degradation detected (p >= 0.05). Baseline 56%, current 55%.

**Codex CLI Rust rewrite motivation (May 2025):**
> "Node v22+ is required, which is frustrating or a blocker for some users."
