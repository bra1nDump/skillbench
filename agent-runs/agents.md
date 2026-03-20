# Agent Runs Structure

All research agents write into `agent-runs/`.

> **Note:** Twitter/X and Reddit tools are available on the lead's machine but may not be present in all environments. Agents should use them when available and skip gracefully when not. HN Algolia, GitHub API, web search, and WebFetch are always available.

## Folder Naming

Use:

```text
agent-runs/YYYY-MM-DD_HH-MM_agent-type_short-topic/
```

Examples:

```text
agent-runs/2026-03-09_04-22_discover_ui-ux-design/
agent-runs/2026-03-09_04-25_deep-dive_ui-ux-design/
agent-runs/2026-03-09_04-29_rank_ui-ux-design/
```

## Required Files

Each run folder should contain:

- `findings.md` — the actual written output

If the run produces reusable assets, keep them in:

```text
agent-runs/.../assets/
```

Examples:

- screenshots
- saved source PDFs
- exported HTML snippets
- copied notes that the report references

## Findings Template

Use this structure inside `findings.md`:

```md
# <Agent Type> Findings

## Scope

What this run was trying to answer.

## Date

Absolute timestamp.

## Inputs

- search queries used
- pages checked
- prior runs referenced

## Findings

Short, concrete findings with source links.

## Quotes

Short excerpts worth preserving, with backlinks.

## Recommended Next Step

What should happen next in the pipeline.
```

## Operating Rule

These folders are not just logs. They are reusable research artifacts. If a screenshot, quote, or asset matters to the final report, keep it in the run folder and reference it from `findings.md`.
