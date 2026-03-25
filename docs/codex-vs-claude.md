# Codex vs Claude — Pipeline Comparison on coding-clis

*Date: 2026-03-25 | Both runs on same category with same prompts*

---

## Setup

Both engines ran the full Ralph pipeline (discover -> deep-dive -> rank -> catalog-update -> screenshots -> metrics -> QA) on the `coding-clis` category using the same agent prompts.

- **Claude:** `sonnet` for discover/deep-dive, `opus` for rank/catalog-update
- **Codex:** `gpt-5.1-codex-mini` for discover/deep-dive/screenshots, `gpt-5.1-codex` for rank/catalog-update

---

## Side-by-Side Summary

| Stage | Claude | Codex |
|-------|--------|-------|
| **Discover** | 10m 42s | 8m 48s |
| **Deep-dive** | 10m 29s | 16m 23s |
| **Rank** | 2m 54s | 6m 0s |
| **Catalog update** | 19m 38s | 14m 8s |
| **Screenshots** | 7m 14s | 3m 7s |
| **Total** | **50m 57s** | **48m 25s** |
| **Stages passed** | 5/5 | 5/5 |

---

## Discover

### Claude (10m 42s)
- 17 HN Algolia queries, 17 web searches, 10+ GitHub repos
- Referenced prior runs (03-54 Codex, 03-24 Claude)
- Found: OpenCode (130K stars, trust-disqualified), Devin 2.2, JetBrains Junie CLI, Amp (Sourcegraph), Grok Build (xAI), Continue (pivoted), SWE-CI benchmark
- Did NOT use Twitter/X or Reddit

### Codex (8m 48s)
- HN Algolia, Twitter/X (with tweet IDs and like counts), Reddit (with upvotes), GitHub API, skills.sh
- Found: Emdash (21-CLI orchestrator, 206 HN pts), Superset (multi-worktree), Grov (shared agent memory)
- Collected concrete social metrics: tweet engagement, Reddit post scores

### Verdict
Claude found more contenders (7 vs 3 unique finds) across a wider surface. Codex found niche tools Claude missed and brought social signal data (Twitter, Reddit) that Claude doesn't have access to.

---

## Deep-Dive

### Claude (10m 29s)
- **14 contenders** with full evidence per each
- Sources: GitHub pages, HN Algolia, web articles, official docs/changelogs
- Covered: Claude Code, Codex CLI, Gemini CLI, Aider, Copilot CLI, Goose, OpenHands, Cline, Devin 2.2, OpenCode, Junie, Amp, Grok Build, Continue

### Codex (16m 23s)
- **6 contenders** with evidence
- Sources: GitHub API, HN, Twitter/X, Reddit, YouTube
- Covered: Claude Code, Copilot CLI, Gemini CLI, Emdash, Superset, Grov
- Collected YouTube videos (3 per CLI) — Claude did not

### Verdict
Claude covers 2.3x more contenders in less time. Codex adds YouTube videos and social signal data as unique evidence types.

---

## Rank

### Claude (2m 54s)
- **14 positions** organized in **4 tiers** (Recommended / Strong Alternatives / Emerging / Trust-Disqualified)
- Explicit methodology: adoption > workflow fit > trust > benchmarks > recency
- Metric tables for every contender
- 9 "what would change this ranking" scenarios
- 6 sourced quotes (SemiAnalysis, METR, SWE-CI, Amp)
- Pairwise subcase recommendations ("best free", "best for security", etc.)
- **301 lines**

### Codex (6m 0s)
- **3 positions** in narrative format
- Claude Code #1, Gemini CLI #2, Copilot CLI #3
- Fit-specific signals for Emdash/Superset/Grov
- Trust watchlist section
- **47 lines**

### Verdict
Claude rank is dramatically deeper (14 vs 3 positions, 6x more content, structured tiers). This is the biggest quality gap between the two engines. Opus for ranking is clearly worth the cost.

---

## Catalog Update

### Claude (19m 38s)
- Updated rankings, verdicts, evidence for coding-clis contenders
- Refreshed metrics (stars, downloads, repoHealth)
- Added gettingStarted fields
- Wrote changelog entries

### Codex (14m 8s)
- Added 6 new `gettingStarted` fields (Claude Code, Gemini CLI, Copilot CLI, Emdash, Superset, Grov)
- Created new skill entry: Grov
- Updated Copilot CLI verdict (PromptArmor advisory)
- Refreshed all metrics
- Wrote 2 changelog entries (Gemini #2, Copilot #3)

### Verdict
Both produced meaningful catalog updates. Codex was faster. Claude updated more contenders.

---

## Screenshots

### Claude (7m 14s)
- Ran full screenshot scout with WebFetch + WebSearch + visual quality scoring
- Downloaded and evaluated candidates

### Codex (3m 7s)
- Stage ran but produced no new screenshots
- Likely: existing screenshots already met quality bar, or Codex couldn't visually evaluate images

### Verdict
Claude has an advantage here due to multimodal image evaluation (can "see" screenshots and score them). Codex relies on file size heuristics.

---

## Key Takeaways

1. **Time is comparable** — 51m vs 48m, negligible difference
2. **Claude wins on depth** — 14 vs 6 contenders in deep-dive, 14 vs 3 in rank, structured tiers vs narrative
3. **Codex wins on social signals** — Twitter, Reddit, YouTube data that Claude doesn't collect
4. **Rank is the biggest gap** — Claude's 301-line tiered ranking with tables and methodology vs Codex's 47-line narrative
5. **Codex is cheaper** — uses codex-mini for research stages
6. **Both update catalog successfully** — different strengths but both produce actionable changes

## Recommended Pipeline Configuration

**Ideal hybrid:** Codex for discover (social signals, niche finds) -> Claude for deep-dive + rank + catalog (analytical depth, structured output, multimodal screenshots).

This gets the best of both: Codex's Twitter/Reddit/YouTube signals feed into Claude's deeper analysis and structured ranking.
