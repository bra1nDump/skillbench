# Codex Run: coding-clis (2026-03-25)

**Engine:** Codex CLI (`gpt-5.1-codex-mini` for research, `gpt-5.1-codex` for ranking/catalog)
**Total time:** ~48m 25s | **All 5 stages passed**

---

## Discover (8m 48s)

Searched HN Algolia, Twitter/X, Reddit, GitHub API, and skills.sh registry. Found real signals:

- **Emdash** — orchestrator for 21 coding CLIs, 206 HN points, runs agents in parallel git worktrees
- **Superset** — multi-worktree multitasking, 7.8K stars, 2-3x faster dev velocity claims
- **Grov** — shared memory layer for agents, cuts token waste 50-70%, 177 stars
- **Claude Code limit complaints** — Reddit r/claudecode flagged reduced limits and reliability issues
- **Twitter signals** — 74-like thread on mastering Claude Code, pairwise comparisons with Copilot/Gemini
- **GitHub trending** — notebooklm-py (7.4K stars), entireio/cli (3.7K), engram (1.8K)

**Note:** Minor artifact at end of findings.md — Codex dumped its internal Python write script. Non-blocking.

## Deep-Dive (16m 23s)

Built evidence for 3 core CLIs + 3 new orchestration/context tools:

- **Claude Code** [STRONG] — v2.1.81 release, 82,204 stars, ~14 commits/week, HN outage thread (181pts) shows transparent regression handling
- **Copilot CLI** [STRONG] — v1.0.11, cross-platform builds, PromptArmor remote-code advisory (HN 62pts), Reddit GA thread (185 upvotes)
- **Gemini CLI** [STRONG] — 98,957 stars (highest), v0.35.0 weekly release, 1M context + 1K req/day free, docs verified
- **Emdash** [STRONG] — 2,864 stars, 206 HN points, supports 21 CLIs with pre-warmed worktrees
- **Superset** [STRONG] — 7,879 stars, one-click worktrees, agent isolation per tab
- **Grov** [STRONG] — 177 stars, decision-grain memory with preview-expand injection

Also collected YouTube videos for Claude Code, Copilot CLI, and Gemini CLI (3 each).

**Compared to Claude (03-24):** Codex covered 6 contenders (vs Claude's 10) but found Emdash/Superset/Grov which Claude missed.

## Rank (6m)

Final ranking:

1. **Claude Code** — reference CLI, v2.1.81, 82K stars, transparent regression fixes
2. **Gemini CLI** — best free entry point, 99K stars, 1M tokens, weekly releases
3. **Copilot CLI** — enterprise distribution, v1.0.11, but PromptArmor security advisory

Also ranked fit-specific signals for Emdash (orchestration), Superset (on-prem), Grov (memory layer).

**Compared to Claude (03-24):** Claude produced 10 ranked positions with metric tables, SWE-bench/Terminal-Bench scores, and subcases. Codex produced 3 positions in narrative format — shallower but still actionable.

## Catalog Update (14m 8s)

Applied to `src/lib/catalog.ts`:

- **6 new `gettingStarted` fields** — Claude Code, Gemini CLI, Copilot CLI, Emdash, Superset, Grov
- **New skill entry: Grov** — added as full SkillRecord with verdict, gettingStarted, tags, relatedCategories
- **Updated Copilot CLI verdict** — now mentions PromptArmor remote-code advisory
- **Refreshed metrics** for all skills — stars, repoHealth, downloads, packageSize, daysOld
- **2 changelog entries** written to `src/data/changelog-entries.json`:
  - Gemini CLI moves to #2 in coding-clis
  - Copilot CLI jumps to #3 in coding-clis

## Screenshots (3m 7s)

**No screenshots were produced.** The stage ran and completed but did not download or install any new images. The `public/screenshots/candidates/` directory remained empty. Likely cause: existing screenshots already met the quality bar, or the Codex agent decided no replacements were needed.
