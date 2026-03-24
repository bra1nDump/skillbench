# Discover Findings — Automation

## Scope

Full discover protocol for the **Automation** problem space. Identify all serious contenders, new signals, catalog gaps, and shifts in the competitive landscape.

## Date

2026-03-24

## Inputs

### HN Algolia queries
- `n8n` (story, pts>10) — 11 results
- `composio` (story, pts>5) — 12 results
- `activepieces` (story, pts>10) — 1 result (231pts Launch HN)
- `windmill workflow` (story, pts>10) — 6 results
- `inngest` (story, pts>10) — 16 results
- `trigger.dev` (story, pts>10) — 7 results
- `kestra orchestration` (story, pts>10) — 3 results
- `pipedream MCP` (story, pts>5) — 0 results
- `Gumloop automation` (story, pts>3) — 0 results
- `workflow automation AI agent` (story, pts>10) — 15 results
- `sim studio agent workflow` (story, pts>5) — 2 results
- `automation agent MCP` (story, pts>10, by date) — 7 results
- `zapier make automation` (story, pts>20) — 5 results
- `dify workflow` (story, pts>20) — 1 result
- `Temporal durable execution` (story, pts>50) — 2 results
- `show HN automation workflow open source` (story, pts>50) — 1 result (2025-2026)

### GitHub repos checked
- n8n-io/n8n, activepieces/activepieces, windmill-labs/windmill, kestra-io/kestra, composiohq/composio, triggerdotdev/trigger.dev, inngest/inngest, simstudioai/sim, PipedreamHQ/pipedream, temporalio/temporal, langgenius/dify, prefecthq/prefect, apache/airflow, automatisch/automatisch, autokitteh/autokitteh, bytechefhq/bytechef, inngest/agent-kit, czlonkowski/n8n-mcp, mozilla/pilo, rowboatlabs/rowboat

### npm download checks
- inngest, @trigger.dev/sdk, composio-core, @pipedream/sdk

### GitHub search
- `workflow automation` sorted by stars (top 20)

---

## Findings

### 1. NEW CONTENDER ALERT: Sim Studio (simstudioai/sim)

**27,148 stars** | Apache-2.0 | YC X25 | TypeScript | Created Jan 2025

Sim Studio is a Figma-like visual canvas for building, deploying, and orchestrating AI agent workflows. This is the single biggest gap in the current catalog — it's the **#1 open-source agent workflow builder** by star count after n8n itself, and it's purpose-built for the AI agent era.

- **HN traction:** 240pts "Show HN: Apache-2.0 n8n alternative" (Dec 2025) + 196pts Show HN (Apr 2025) + 55pts Launch HN (May 2025) = **491pts cumulative**
- **GitHub:** 27.1K stars, 3,447 forks, actively maintained (v0.6.7 shipped Mar 21, 2026)
- **Positioning:** "Build, deploy, and orchestrate AI agents. The central intelligence layer for your AI workforce."
- **Key differentiator:** Visual workflow builder specifically for AI agents (not general automation like n8n). Drag-and-drop multi-agent orchestration, built-in observability/tracing, deploy as APIs or scheduled tasks.
- **Why this matters:** Fills the gap between n8n (general workflow) and pure agent frameworks (LangGraph, CrewAI). For teams that want visual agent orchestration without n8n's general-purpose complexity. Growing faster than Composio in HN engagement.

### 2. n8n remains dominant — 180K stars, active development

- **180,701 stars** | 56K forks | 1,433 open issues
- Latest commits: Mar 23, 2026 (RCE prevention, execution viewer, security fixes)
- n8n-mcp bridge (czlonkowski/n8n-mcp): **16,020 stars** (up from 15.4K in prior catalog)
- Additional MCP ecosystem: nerding-io/n8n-nodes-mcp (3K stars), leonardsellem/n8n-mcp-server (1.6K stars)
- HN peak: 728pts (original launch), 235pts ($180M Series C, Oct 2025), 195pts (AI workflow positioning, May 2025), 174pts (DataTables feature, Oct 2025)
- **Signal:** n8n is consolidating as the "Zapier replacement + AI workflow" platform. DataTables (native persistent storage) reduces need for external databases in automation workflows.

### 3. Composio — still provisional, weak organic signals despite 27K stars

- **27,482 stars** | 4,489 forks
- npm: composio-core at **11,816 downloads/wk** (low for 27K stars)
- HN: Composio's own blog posts get high engagement (483pts, 387pts) but these are content marketing — actual product posts score 6-9pts
- **Only HN product mention:** "LangGraph and Composio Achieved 48.6% on SWE Bench" (9pts, Nov 2024)
- **Assessment:** Stars-to-engagement ratio remains anomalous. The 27K stars with zero organic HN traction and low npm downloads suggests inflated metrics. Provisional status should remain. Product is used more as blog/content platform than developer tool.

### 4. Inngest — npm leader, pivoting to agent orchestration

- **5,085 stars** | 273 forks
- npm: **289,024 downloads/wk** (down from 499K claimed in prior catalog — verify if scope changed)
- HN: 165pts (1.0 launch), 176pts (queue system deep-dive), 79pts (Python asyncio blog, Mar 2026), 70pts (Node.js worker threads, Mar 2026)
- **New signal: AgentKit** (inngest/agent-kit) — 812 stars, "multi-agent networks in TypeScript with deterministic routing and MCP." 64pts on HN (Mar 2025)
- **New signal: StepKit** — open cross-platform durable execution standard. 36pts on HN (Nov 2025)
- **Why this matters:** Inngest is actively building the agent orchestration layer on top of its durable execution engine. AgentKit + StepKit combo positions them as the TypeScript-native alternative to Temporal for AI workflows. Strong technical blog output (2 HN frontpage posts in Mar 2026) keeps them visible.

### 5. Trigger.dev — transparent, community trust high

- **14,171 stars** | 1,102 forks
- npm: **150,041 downloads/wk** (@trigger.dev/sdk)
- HN: **745pts** peak (Feb 2023 launch), 262pts (Shai-Hulud security post-mortem, Dec 2025), 162pts (V3 relaunch for AI apps, Sep 2025), 70pts (ClickHouse SQL blog, Mar 2026)
- **Key signal:** The Shai-Hulud security incident post-mortem (262pts, Dec 2025) was praised for transparency. "How we give every user SQL access to a shared ClickHouse cluster" (70pts, Mar 2026) shows continued technical leadership.
- **Positioning:** Pivoting from "Zapier alternative" to "reliable AI app platform" with V3 relaunch (Sep 2025).

### 6. Windmill — strong technical foundation, moderate growth

- **16,065 stars** | 896 forks
- HN: 428pts peak (May 2023), 378pts (fastest workflow engine, Nov 2023), 212pts (Launch HN, Aug 2022)
- **Signal:** "n8n vs Windmill vs Temporal" comparison post (33pts, Oct 2025) — Windmill positioned as the code-first middle ground
- YC S22. No major new signals in 2026.

### 7. Kestra — Airflow replacement narrative

- **26,584 stars** | 2,531 forks
- HN: 142pts peak (Show HN, Mar 2022)
- No new HN signals in 2025-2026 — HN visibility gap
- **Structural tailwind:** Apache Airflow 2 EOL (Airflow itself at 44.7K stars, 16.7K forks) creates migration opportunity. Kestra's YAML-declarative approach is natural Airflow successor for data engineering teams.

### 8. Activepieces — steady open-source growth

- **21,387 stars** | 3,450 forks
- HN: 231pts (Launch HN, Feb 2023)
- YC S22. MIT licensed (strongest open-source license in category).
- No major new HN signals — visibility gap since 2023 launch.

### 9. Pipedream — MCP bridge potential, low star growth

- **11,201 stars** | 5,621 forks (high fork ratio = integration templates)
- npm: **26,729 downloads/wk** (@pipedream/sdk)
- Zero HN traction for MCP integration specifically
- **Signal:** High forks relative to stars suggests it's used as infrastructure (copy-and-use integrations) rather than as a brand.

### 10. Automatisch — silent 13K star contender

- **13,803 stars** | No HN signals found
- Open-source Zapier alternative. Present in GitHub search but absent from community discussion.
- **Assessment:** Similar anomaly to Composio — high stars, no organic discussion. Not recommended for catalog inclusion without further evidence.

---

## New & Emerging Contenders

### Sim Studio (CRITICAL — see #1 above)
**Immediate catalog addition required.** 27K stars, YC X25, Apache-2.0, purpose-built for AI agent orchestration.

### Inngest AgentKit
- 812 stars, MCP-native multi-agent networking for TypeScript
- Extends Inngest's durable execution into agent territory
- Worth tracking as sub-product of Inngest

### Rowboat / RowboatX
- **9,316 stars** | 792 forks
- 131pts HN (Nov 2025), 66pts (Sep 2025)
- "Claude Code for everyday automations" — CLI-based agent framework
- YC S24. Growing fast.
- **Potential catalog addition** if agent-automation overlap is in scope

### Slashy (YC S25)
- 70pts HN (Sep 2025)
- Single-agent connecting 15+ services
- Early stage, watch for growth signals

### DBOS Transact
- Lightweight durable execution on Postgres (77pts HN, Jan 2025)
- TypeScript-native alternative to Temporal
- Competes with Inngest/Trigger.dev for code-first orchestration

### Dify
- **134,144 stars** | 20.8K forks
- Visual LLM workflow builder. 185pts HN (Apr 2024).
- Primarily competes in "agent harnesses" category but overlaps with automation for AI workflow building.
- **Already massive** — may belong in multiple categories.

---

## npm Downloads Summary (week of Mar 16-22, 2026)

| Package | Weekly Downloads |
|---------|-----------------|
| inngest | 289,024 |
| @trigger.dev/sdk | 150,041 |
| @pipedream/sdk | 26,729 |
| composio-core | 11,816 |

Note: Inngest downloads dropped from 499K (prior catalog) to 289K — needs investigation (package scope change? seasonal?).

---

## GitHub Stars Summary (as of 2026-03-24)

| Solution | Stars | Forks | Notes |
|----------|-------|-------|-------|
| n8n | 180,701 | 56,088 | Dominant #1 |
| Dify | 134,144 | 20,883 | Cross-category (agent harnesses) |
| Apache Airflow | 44,758 | 16,759 | Legacy, EOL tailwind for competitors |
| Sim Studio | 27,148 | 3,447 | **NEW — AI agent workflow builder** |
| Composio | 27,482 | 4,489 | Provisional — anomalous signals |
| Kestra | 26,584 | 2,531 | Airflow replacement narrative |
| Activepieces | 21,387 | 3,450 | MIT licensed, steady |
| Prefect | 21,941 | 2,184 | Data orchestration |
| Temporal | 19,095 | 1,430 | Durable execution standard |
| Windmill | 16,065 | 896 | Code-first, YC S22 |
| n8n-mcp | 16,020 | — | MCP bridge for n8n |
| Trigger.dev | 14,171 | 1,102 | AI pivot, high trust |
| Automatisch | 13,803 | — | Unverified organic usage |
| Pipedream | 11,201 | 5,621 | Integration templates |
| Rowboat | 9,316 | 792 | CLI agent automation |
| Inngest | 5,085 | 273 | npm leader, durable execution |

---

## Quotes

> "Defining the workflow explicitly and visually is the key to building more reliable and maintainable agentic applications." — Sim Studio founders, HN Show HN (Apr 2025, 196pts)

> "We were frustrated with agent frameworks that required excessive boilerplate code and unhelpful abstractions." — Sim Studio Launch HN (May 2025, 55pts)

> "n8n vs Windmill vs Temporal" — blog.arcbjorn.com comparison (Oct 2025, 33pts HN) — signals that the three-tier segmentation (no-code / code-first / durable execution) is becoming consensus.

> Shai-Hulud security post-mortem by Trigger.dev (262pts, Dec 2025) — praised for transparency in handling a compromised dev machine incident. Builds outsized community trust.

---

## Catalog Gaps

1. **Sim Studio** — 27K stars, YC X25, purpose-built for AI agent workflows. CRITICAL gap. Should immediately enter top 5.
2. **Rowboat/RowboatX** — 9.3K stars, YC S24, CLI-based agent automation. Growing fast.
3. **Temporal** — 19K stars. The durable execution standard. Currently absent but referenced by competitors (Windmill, Trigger.dev, Inngest all position against it).
4. **Prefect** — 22K stars. Modern Airflow alternative for data orchestration. Missing from catalog.
5. **Dify** — 134K stars. If multi-category listing is supported, Dify overlaps with automation for visual AI workflow building.
6. **Gumloop** mentioned in prior catalog as "$50M Series B from Benchmark" — zero HN traction, zero GitHub presence (only a Composio clone repo with 360 stars). **Remove or demote** unless closed-source product evidence emerges.

---

## Meta Shifts

1. **AI agent orchestration is the new battleground.** Sim Studio (27K stars in 14 months), Inngest AgentKit, Trigger.dev's "reliable AI apps" pivot — the category is splitting into "classic workflow automation" (n8n, Activepieces, Zapier) and "AI agent workflow orchestration" (Sim Studio, Inngest AgentKit, Dify). This split should be reflected in the category structure.

2. **Durable execution becoming table stakes.** Inngest StepKit (open standard), DBOS Transact (Postgres-native), Temporal (established) — every serious code-first orchestration tool now offers or claims durable execution. This was a differentiator in 2024; it's expected in 2026.

3. **MCP is the integration standard for AI-era automation.** n8n-mcp (16K stars), Composio (MCP-native), Inngest AgentKit (MCP routing), Sim Studio (MCP integrations) — tools without MCP bridges are falling behind for Claude Code / AI agent use cases.

4. **Content marketing vs. organic adoption gap.** Composio (27K stars, 12K npm/wk, zero organic HN) and Automatisch (14K stars, no HN) show that stars alone don't indicate real developer adoption. Inngest (5K stars, 289K npm/wk) and Trigger.dev (14K stars, 150K npm/wk) show the inverse — moderate stars but deep practical usage.

---

## Recommended Next Step

1. **Deep-dive Sim Studio immediately.** 27K stars, YC X25, active dev — this is the most significant new contender. Needs full ranking assessment.
2. **Add Sim Studio to catalog** as a top-5 contender in the "Agent Integration" sub-category (or create a new "Agent Workflow Orchestration" sub-category).
3. **Deep-dive Inngest AgentKit** — the durable execution + agent networking combo is architecturally differentiated.
4. **Investigate Inngest npm download drop** (499K → 289K) — package rename? seasonal? competitive loss?
5. **Verify Gumloop claims** — the $50M Series B claim needs sourcing. No public GitHub, no HN presence.
6. **Consider adding Temporal and Prefect** as context entries (established tools that define the competitive landscape even if not "skills" per se).
7. **Update Composio status** — maintain provisional with explicit note that star-to-engagement anomaly persists.
