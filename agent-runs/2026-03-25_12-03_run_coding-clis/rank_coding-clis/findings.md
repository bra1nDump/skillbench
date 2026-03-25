# Rank Findings: Coding CLIs

## Scope

Ranked recommendation for the **coding-clis** problem space: AI coding CLI agents and terminal-native code agents. Which tool should a developer choose for agentic coding from the terminal in March 2026?

## Date

2026-03-25T16:00:00Z

## Inputs

- agent-runs/2026-03-25_12-03_run_coding-clis/discover_coding-clis/findings.md
- agent-runs/2026-03-25_12-03_run_coding-clis/deep-dive_coding-clis/findings.md
- Prior run: agent-runs/2026-03-25_03-54_run_coding-clis/

---

## Ranking Methodology

Weighted criteria (in order of importance):

1. **Real production adoption** — installs, market share, revenue (>stars)
2. **Direct workflow fit** — terminal-native, interactive, fits developer daily loop
3. **Public trust** — security record, legal standing, supply chain integrity
4. **Benchmark performance** — SWE-bench Verified/Pro, Terminal-Bench, with METR caveat
5. **Recency** — active development, 2026 releases, feature momentum
6. **Demonstrability** — can a user verify the tool works before committing?

Stars are weighted *below* installs and market share. The METR finding (~50% of SWE-bench-passing PRs wouldn't be merged) applies a discount to all benchmark-only claims.

---

## Final Ranked List

### Tier 1 — Recommended

#### #1. Claude Code

**Rank rationale:** Category leader on every metric that matters for real-world adoption.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Monthly installs | ~17M (Jan 2026 leaderboard) | STRONG |
| Market share | 71% agentic tasks (dev survey); 46% "most loved" (n=15,000) | STRONG |
| GitHub commits share | 4% of all public commits (SemiAnalysis, Feb 2026) | STRONG |
| Revenue | $2.5B ARR run rate | STRONG |
| SWE-bench Verified | 80.9% (Opus 4.6) — near ceiling | STRONG |
| SWE-bench Pro | ~56.8% (via Codex harness, but Claude models competitive) | STRONG |
| Stars | 82.4k | STRONG |
| Release cadence | Multiple/week (v2.1.73 current) | STRONG |
| Enterprise traction | Accenture 30K professionals | STRONG |
| Recent features | Agent Teams/Swarm Mode, 1M context beta | STRONG |
| Community friction | Limit reductions (r/claudecode March 2026) | MODERATE negative |

**Best for:** Interactive terminal-native development where output quality and autonomy matter most. Teams and enterprises. Multi-agent orchestration via Agent Teams.

**Narrow subcase where it loses:** If sandbox-first execution safety is the top priority, Codex CLI's containerized default is stronger. If cost is the binding constraint, Gemini CLI's free tier wins.

---

#### #2. Codex CLI

**Rank rationale:** Strongest safety-first architecture, Rust-native efficiency, and GPT-5.4 model access make this the best #2 and the leader for security-conscious teams.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Monthly installs | ~1.5M | STRONG |
| Stars | 67.5k, 9k forks (high fork ratio) | STRONG |
| Architecture | Rust native, ~80MB RAM, no Node.js | STRONG |
| Safety | Sandbox-first containerized execution | STRONG |
| Security agent | Threat modeling + vulnerability patches (research preview) | MODERATE |
| SWE-bench | ~77-80% range (GPT-5.3-Codex leads Pro at 56.8%) | STRONG |
| Terminal-Bench 2.0 | 77.3% | MODERATE |
| Release cadence | Weekly (v0.116.0, March 19, 2026) | STRONG |
| HN traction | 516 pts at launch; quiet in 2026 | MODERATE |

**Best for:** Security-conscious teams, developers who want full-auto mode with confidence, resource-constrained environments (~80MB RAM), open-source preference (Apache 2.0).

**Narrow subcase where it leads:** "I want to run full-auto and not worry about what it executes" — Codex CLI's sandbox is the best answer in the category.

---

### Tier 2 — Strong Alternatives (Specific Use Cases)

#### #3. Gemini CLI

**Rank rationale:** Best free tier in the category and largest context window. The accessibility play is real — 1,000 free requests/day is genuinely usable.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 99k (second-highest after OpenCode) | STRONG |
| Monthly installs | ~1.5M | STRONG |
| Free tier | 1,000 requests/day at zero cost | STRONG |
| Context window | 1M tokens — largest in category | STRONG |
| SWE-bench Verified | 80.6% (Gemini 3.1 Pro) | STRONG |
| HN launch | 1,428 pts, 788 comments | STRONG |
| Trust caveat | Pro-to-Flash downgrading after 10-15 prompts (community "deception" reaction) | MODERATE negative |
| Trust caveat | "I watched Gemini CLI hallucinate and delete my files" — 304 pts HN | MODERATE negative |

**Best for:** Budget-constrained individual developers, large-context tasks (monorepo navigation, long file analysis), developers who want zero financial commitment to evaluate agentic coding.

**Why not Tier 1:** Reliability concerns (hallucination + file deletion HN report with 304 pts), silent model downgrading under free tier erode trust for production-critical work. Installs are 10x lower than Claude Code despite higher star count.

---

#### #4. Aider

**Rank rationale:** Best pure open-source terminal coding assistant. Battle-tested, model-agnostic, and the "quiet professional" choice — high install base with no hype cycle dependency.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Total installs | 5.7M (PyPI) | STRONG |
| Monthly installs | ~200-250K | MODERATE |
| Stars | 42.4k | STRONG |
| Token throughput | 15B tokens/week | STRONG |
| Self-modification | 70-88% of its own code per release | STRONG (unique signal) |
| Model support | 100+ models including local | STRONG |
| HN traction (2026) | No stories >10 pts | WEAK |
| Release cadence | Active (v0.86.2, Feb 2026) | MODERATE |

**Best for:** Developers who want model flexibility (including local models), git-native workflows (auto-commits), AST-aware editing with auto-lint. Pairs especially well with local models like Qwen3-Coder-Next.

**Why not Tier 1:** Lower install velocity than top 3. No 2026 HN moment — signals mature but not category-shaping. Feature set is solid but not differentiated on safety (no sandbox) or multi-agent orchestration.

---

#### #5. GitHub Copilot CLI

**Rank rationale:** Largest addressable install base (15M subscribers) and strongest enterprise control plane, but low actual CLI adoption relative to that base.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Addressable base | 15M paid Copilot subscribers | STRONG |
| Actual monthly installs | 200-250K | WEAK relative to base |
| Enterprise control plane | Admin visibility, policy enforcement, model governance | STRONG |
| GA date | February 25, 2026 | STRONG (recency) |
| Autopilot mode | Full autonomous execution | MODERATE |
| Model choice | Claude Opus 4.6, GPT-5.3-Codex, Gemini 3 Pro | STRONG |
| Pricing friction | 300 monthly premium requests; Opus burns fast | MODERATE negative |
| Security incident | "Downloads and executes malware" — 62 pts HN | MODERATE negative |
| HN traction | 24 pts (preview); 62 pts (malware) | WEAK |

**Best for:** Teams already committed to GitHub Enterprise ecosystem. Enterprises needing centralized agent control (Agent Control Plane). Developers who want Claude/GPT/Gemini model choice within one tool.

**Why not higher:** 200-250K actual installs from a 15M base is a 1.5% conversion rate — developers aren't switching. The malware incident and request limits dampen enthusiasm.

---

### Tier 3 — Emerging / Narrow Use Cases

#### #6. Goose (Block)

**Rank rationale:** The zero-marginal-cost play via ACP is compelling. Real production evidence (60% of Block's 12K employees). But unknown adoption outside Block.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 33.6k, 428 contributors | MODERATE |
| Internal adoption | 60% of Block weekly | STRONG |
| ACP integration | Claude Code, ChatGPT, Gemini subs reusable | STRONG |
| Open source | Apache 2.0, Rust + TypeScript | STRONG |
| External adoption | Unknown installs, no HN traction | WEAK |

**Best for:** Developers who already pay for Claude/ChatGPT/Gemini and want agentic coding at zero additional cost. Teams evaluating ACP as an interoperability standard.

---

#### #7. OpenHands

**Rank rationale:** Rigorous self-benchmarking (OpenHands Index) and strong architecture, but no evidence of widespread individual developer adoption.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 69.7k | STRONG |
| OpenHands Index | Comprehensive 5-category benchmark across 9 models | STRONG |
| v1.5.0 | Planning agent, task lists, Bitbucket support (March 11, 2026) | MODERATE |
| Install data | Unknown | WEAK |
| HN traction | <10 pts on recent stories | WEAK |
| Benchmark honesty | Self-flagged that 52.4% drops to 18.2% with enhanced tests | STRONG (integrity) |

**Best for:** Teams who want a platform for building custom coding agents (Software Agent SDK). Research-oriented users who value benchmark transparency.

---

#### #8. Cline

**Rank rationale:** Large user base (5M+ installs, 59k stars) but the February 2026 supply chain attack is a category-defining trust event.

| Signal | Evidence | Strength |
|--------|----------|----------|
| Stars | 59.3k | STRONG |
| Total installs | 5M+ | STRONG |
| Supply chain attack | OpenClaw malware via compromised npm token, ~4K machines affected | STRONG NEGATIVE |
| Local model pairing | Qwen3-Coder-Next (70.6% SWE-bench) | MODERATE |
| Features | Plan/Act mode, checkpoint system | MODERATE |

**Best for:** Local-model enthusiasts pairing with Qwen3-Coder-Next. Developers who accept the supply chain risk was patched (v2.4.0) and trust the response.

**Why ranked here:** The "Clinejection" attack — prompt injection via GitHub issue title → bot → npm token — is the most severe supply chain incident in the coding agent category in 2026. Enterprise adoption requires demonstrating this can't recur.

---

#### #9. Devin 2.2

**Rank rationale:** Different beast — SaaS autonomous agent, not a terminal CLI. Ranked here because the problem space includes "coding agents" broadly, but Devin targets a different workflow.

| Signal | Evidence | Strength |
|--------|----------|----------|
| PR merge rate | 67% (up from 34% YoY) | STRONG |
| GUI computer use | Browsers, Figma, Photoshop | STRONG (unique) |
| Devin Review | Self-QA catches 30% more issues | MODERATE |
| Pricing | $20/month Core plan | MODERATE |
| Terminal-native? | No — web dashboard + Slack | STRONG differentiator |

**Best for:** Autonomous task execution with verifiable success criteria: bug backlog clearing, documentation maintenance, repetitive migrations. Not for interactive terminal workflows.

---

### Tier 4 — Too Early or Trust-Disqualified

#### #10. OpenCode

**130k stars — highest in category. Trust-disqualified.**

Stars reflect controversy, not production adoption. The Anthropic OAuth header spoofing (legal action ongoing), unauthenticated RCE vulnerability, and Claude integration being server-side blocked make this unsuitable for recommendation despite impressive traction metrics.

**Would re-rank if:** Legal conflict resolved, independent security audit published, and Claude integration restored or viable alternative demonstrated.

---

#### #11. JetBrains Junie CLI

**Beta (March 9, 2026). Enterprise incumbent worth tracking.**

12M+ JetBrains developer ecosystem is the distribution moat. One-click migration from Claude Code/Codex is a direct competitive play. But: 119 stars, unverified benchmark claims, and 2 weeks of beta history is insufficient for ranking.

**Would re-rank if:** Independent benchmark scores published, GA launch with measurable adoption, enterprise case studies.

---

#### #12. Amp (Sourcegraph)

**Interesting thesis, insufficient evidence.**

"The Coding Agent Is Dead" positioning and Sourcegraph's code intelligence (100M+ repos) are genuine differentiators. But: closed source, pricing unclear, free tier closed, no HN traction, unverified 68.2% internal metric.

**Would re-rank if:** Public benchmark scores, transparent pricing, open-source components, or strong enterprise case studies.

---

#### #13. Grok Build (xAI)

**Waitlist-only after 10+ weeks. Cannot evaluate.**

8-parallel-agent architecture and Arena Mode are unique design angles. Local-first execution is strong. But no public access = no recommendation.

**Would re-rank if:** GA launch with public access and benchmark results.

---

#### #14. Continue

**Pivoted away from coding CLI.** Now "source-controlled AI checks in CI" — a different problem space (code review / CI quality control). 32k stars, 809 releases, active development. Should be tracked in a **code-review** or **ci-cd-quality** problem space, not coding-clis.

---

## Quotes

- "Claude Code is the inflection point." — SemiAnalysis, Feb 5, 2026 (re: 4% of GitHub commits, $2.5B ARR)
- "Codex CLI leads on execution safety." — deployhq.com, educative.io, gradually.ai (multiple comparison articles, 2026)
- "Many SWE-bench-Passing PRs Would Not Be Merged Into Main." — METR, March 10, 2026 (~50% gap between automated grading and maintainer acceptance)
- "75% of tested models break previously working code during long-term maintenance tasks." — SWE-CI, arXiv 2603.03823, March 4, 2026
- "The Coding Agent Is Dead." — Amp/Sourcegraph, Feb 19, 2026 (re: agent scaffolding commoditized; practices are the new bottleneck)
- "Use the CLI version imo, it's the first thing I've tried that beats Claude Code." — Cloudflare Principal Systems Engineer on Amp (morphllm.com)

---

## What Would Change This Ranking

| Change | Impact |
|--------|--------|
| **Claude Code limits further reduced** | Widens opening for Codex CLI and Gemini CLI to capture frustrated power users. Could drop Claude Code to #1-with-asterisk. |
| **OpenCode passes independent security audit + resolves Anthropic legal conflict** | Jumps to Tier 2 immediately. 130k stars + 75 providers + LSP integration is a compelling package if trust is restored. |
| **Gemini CLI fixes silent model downgrading** | Moves up to Tier 1 contention. The free tier is already the best; removing the trust caveat would make it a default recommendation for individuals. |
| **Grok Build launches GA** | 8-parallel-agent architecture could be category-disrupting if execution matches the design. Instant Tier 2 if benchmarks are competitive. |
| **JetBrains Junie reaches GA with verified benchmarks** | 12M developer ecosystem makes this a Tier 2 threat to Claude Code's enterprise position within months. |
| **ACP becomes a de facto standard** | Goose and Junie benefit most. Could restructure the ranking around "which agent is the best ACP client" rather than standalone merit. |
| **SWE-bench Pro scores converge** | Currently GPT-5.3-Codex leads at 56.8% while most agents score ~23%. If Claude models close the gap on Pro, it reinforces #1 position. If Codex maintains the lead, strengthens #2. |
| **Cline demonstrates supply chain security overhaul** | Could recover to Tier 2. The 5M install base and local-model ecosystem are real. |
| **New benchmark replaces SWE-bench as industry standard** | SWE-CI's EvoScore (penalizing code breakage in maintenance) or Terminal-Bench could shift which tools look best. Claude Opus leads on SWE-CI; this favors current ranking. |

---

## Recommended Next Step

1. **Publish catalog entries** for Tier 1-3 tools. Claude Code and Codex CLI get full problem-page placements. Gemini CLI, Aider, and Copilot CLI get secondary placements.
2. **Add OpenCode with trust caveat** — the 130k stars demand a catalog entry, but with prominent legal/security warnings.
3. **Create "coding-clis" problem page** with the tier structure above and the pairwise comparisons from the deep-dive.
4. **Track ACP adoption** — if Goose/Junie/Gemini CLI converge on ACP, this becomes a ranking factor in the next cycle.
5. **Re-run in 4-6 weeks** — Junie GA, Grok Build launch, and Claude Code limit developments will likely shift Tier 2-3 placements.
