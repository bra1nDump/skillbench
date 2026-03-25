# Claude Run: coding-clis (2026-03-25)

**Engine:** Claude CLI (`sonnet` for discover/deep-dive, `opus` for rank/catalog-update)
**Total time:** 50m 57s | **All 5 stages passed**

---

## Discover (10m 42s)

Ran 17 HN Algolia queries, 17 web searches, checked 10+ GitHub repos, and referenced prior runs (03-54 Codex, 03-24 Claude).

Key findings:
- **OpenCode** — 130K stars (highest in category), but trust-disqualified: Anthropic OAuth spoofing, RCE vuln, legal action
- **Devin 2.2** — 67% PR merge rate (up from 34% YoY), GUI computer use, $20/mo
- **JetBrains Junie CLI** — beta launched March 9, 12M+ JetBrains ecosystem, one-click migration from Claude Code/Codex
- **Amp (Sourcegraph)** — "The Coding Agent Is Dead" manifesto, code intelligence across 100M+ repos
- **Grok Build (xAI)** — 8-parallel-agent architecture, still waitlist-only
- **Continue** — pivoted from CLI to "source-controlled AI checks in CI" (different problem space)
- **SWE-CI benchmark** — new benchmark penalizing code breakage, 75% of models break previously working code

**Note:** Did not use Twitter/X or Reddit skills (unlike Codex run). Focused on HN + web + GitHub.

## Deep-Dive (10m 29s)

Full evidence build for **14 contenders** — every major player plus emerging tools:

1. **Claude Code** — 82.4K stars, ~17M monthly installs, 4% of GitHub commits, $2.5B ARR, Agent Teams/Swarm Mode
2. **Codex CLI** — 67.5K stars, ~1.5M installs, Rust rewrite, sandbox-first, GPT-5.4 access
3. **Gemini CLI** — 99K stars, ~1.5M installs, 1K free req/day, 1M context, but silent Pro-to-Flash downgrading
4. **Aider** — 42.4K stars, 5.7M total PyPI installs, 15B tokens/week, 70-88% self-modification per release
5. **Copilot CLI** — 15M subscriber base but only 200-250K actual CLI installs (1.5% conversion)
6. **Goose (Block)** — 33.6K stars, 60% of Block's 12K employees, ACP integration
7. **OpenHands** — 69.7K stars, v1.5.0 with planning agent, honest self-benchmarking (52.4% to 18.2% on enhanced tests)
8. **Cline** — 59.3K stars, 5M+ installs, but "Clinejection" supply chain attack affected ~4K machines
9. **Devin 2.2** — SaaS agent, 67% PR merge rate, GUI computer use (Figma/Photoshop)
10. **OpenCode** — 130K stars, trust-disqualified (legal + RCE)
11. **Junie CLI** — 119 stars, beta, 12M JetBrains ecosystem
12. **Amp** — closed source, "coding agent is dead" thesis
13. **Grok Build** — waitlist-only, 8-parallel architecture
14. **Continue** — pivoted away from CLI

## Rank (2m 54s)

4-tier ranked recommendation with explicit methodology (adoption > workflow fit > trust > benchmarks > recency):

### Tier 1 — Recommended
1. **Claude Code** — category leader on every metric. 71% agentic market share, 4% GitHub commits, $2.5B ARR
2. **Codex CLI** — strongest safety-first architecture, Rust-native, sandbox-first, GPT-5.4

### Tier 2 — Strong Alternatives
3. **Gemini CLI** — best free tier (1K req/day), 1M context, but trust caveats
4. **Aider** — battle-tested open-source, model-agnostic (100+ models), git-native
5. **Copilot CLI** — 15M subscriber distribution, enterprise control plane

### Tier 3 — Emerging
6-9. Goose, OpenHands, Cline, Devin 2.2

### Tier 4 — Trust-Disqualified / Too Early
10-14. OpenCode, Junie CLI, Amp, Grok Build, Continue

## Catalog Update (19m 38s)

Updated rankings, verdicts, evidence, gettingStarted fields, and metrics for coding-clis contenders.

## Screenshots (7m 14s)

Ran screenshot scout for coding-clis skills using WebFetch + WebSearch + visual quality scoring.
