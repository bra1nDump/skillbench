# Rank Findings — Automation

## Scope

Ranked recommendation for the **Automation** problem space. Which tools should a developer or team adopt for workflow automation, and in what order?

## Date

2026-03-24

## Inputs

- `agent-runs/2026-03-24_01-54_run_automation/discover_automation/findings.md`
- `agent-runs/2026-03-24_01-54_run_automation/deep-dive_automation/findings.md`
- GitHub API data (stars, forks, contributors, releases) — verified 2026-03-24
- npm + PyPI download data — verified 2026-03-24
- HN Algolia engagement data — verified 2026-03-24
- 10+ independent comparison articles and reviews (2025-2026)

---

## Category Structure

The automation space has split into three distinct sub-problems. A single flat ranking would be misleading — a data engineering team migrating off Airflow has different needs than an AI agent builder. The ranking below is organized by sub-problem, then unified into a single ordered list with sub-problem labels.

**Sub-problems:**
1. **General Workflow Automation** — Replace Zapier/Make with self-hosted, cost-effective, visual workflow builders
2. **Code-First Orchestration** — Durable execution, background jobs, reliable AI app infrastructure for TypeScript/Python developers
3. **AI Agent Workflow Orchestration** — Visual or programmatic tools specifically for building and deploying multi-agent systems

---

## Final Ranked List

### #1 — n8n ⟨General Workflow Automation⟩

**Why #1:** Overwhelming evidence across every dimension — no close competitor.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| GitHub stars | 180,702 | 1st (7x the #2) |
| Contributors | 586 | 1st |
| HN cumulative | ~1,850pts | 1st |
| Independent consensus | #1 across 9+ review sites | Unmatched |
| Business traction | $2.5B valuation, $40M ARR, 230K+ users | 1st |
| MCP ecosystem | 20.6K stars across 3 repos + native MCP server | 1st |
| AI integration | 70+ AI-specific nodes, 75% of customers using AI tools | 1st |

**Evidence basis:**
- Consensus #1 open-source Zapier alternative across Shakudo, Digidop, DEV Community, Softr, HatchWorks, CipherProjects, Synta, Pinggy, OpenAlternative (9+ independent sources)
- $180M Series C (Oct 2025) led by Accel with NVIDIA NVentures, Sequoia, Felicis at $2.5B valuation
- 10-40x cost advantage over Zapier at scale (independently verified: 1000 ops/day = $0-30/mo vs $200-400/mo)
- Native MCP server support + 16K-star third-party n8n-mcp bridge (265 tool variants)
- 600+ online courses (Class Central) — mature learning ecosystem
- DataTables (native persistent storage) reduces external dependencies

**Best for:** Teams replacing Zapier/Make who want visual workflow building with full code execution capability and strong AI integration. The default recommendation for most automation needs.

**Limitations:** Sustainable Use license (not fully open-source). Self-hosting requires infrastructure. Can be complex for pure AI agent orchestration use cases where Sim Studio is more focused.

---

### #2 — Inngest ⟨Code-First Orchestration⟩

**Why #2:** Highest real-world adoption by downloads (476K combined/wk), building the TypeScript durable execution stack with AI agent capabilities.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| npm + PyPI downloads/wk | ~476,000 combined | 1st |
| Downloads per star | 94/wk | 1st (19x Composio) |
| Funding | $24M (A16z, Altimeter, Guillermo Rauch) | Top tier |
| HN recent activity | 2 frontpage posts in Mar 2026 | Most active |
| Agent tooling | AgentKit (812 stars, MCP-native) | Unique |

**Evidence basis:**
- 289K npm + 187K PyPI downloads/wk = dominant cross-language adoption
- $21M Series A from A16z, Altimeter, and Vercel founder Guillermo Rauch — validates Next.js/Vercel ecosystem fit
- AgentKit: MCP-native multi-agent networking for TypeScript (64pts HN, Mar 2025)
- StepKit: open durable execution standard (36pts HN, Nov 2025)
- 2 HN frontpage posts in March 2026 alone (79pts asyncio, 70pts worker threads) — thought leadership
- Named production users: Day.ai, Browser Use

**Best for:** TypeScript/Python developers who want durable execution (retry, scheduling, fan-out) as a library, not a platform. Especially strong for AI agent orchestration via AgentKit. The code-first alternative to n8n's visual approach.

**Limitations:** ELv2 license restricts competitive self-hosted offerings. Only 5K stars (underrepresents real adoption). API-only orchestration — does not run your compute (unlike Trigger.dev).

---

### #3 — Trigger.dev ⟨Code-First Orchestration⟩

**Why #3:** Highest community trust signal in the category (Shai-Hulud post-mortem), strongest HN engagement for a code-first tool, and solid npm adoption.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| HN cumulative | ~1,411pts | 2nd overall, 1st code-first |
| HN peak | 745pts | 1st in category |
| npm downloads/wk | 150,041 | 2nd code-first |
| License | Apache-2.0 | Best in code-first tier |
| Trust signal | Shai-Hulud post-mortem (262pts) | Unique |

**Evidence basis:**
- 745pts HN peak (highest in category) + 262pts security post-mortem + 162pts V3 launch + 70pts ClickHouse blog (Mar 2026) = ~1,411pts cumulative
- Shai-Hulud incident: 4-minute detection-to-containment, no packages compromised, full public disclosure. Community reception overwhelmingly positive — "this is how you handle a security incident"
- V4 GA with rapid maturation; v3 EOL confidence (deploys stop Apr 2026, full shutdown Jul 2026)
- Founder (Matt Aitken) publicly differentiated from Inngest on HN: runs own compute, supports system packages (ffmpeg, Puppeteer), atomic versioning
- Apache-2.0 license — cleanest open-source license in the code-first tier

**Best for:** Teams that need to run their own compute (long-running tasks, system dependencies like ffmpeg/Puppeteer), value open-source licensing, or want the strongest community trust signal. Choose over Inngest when you need compute, not just orchestration.

**Limitations:** 150K npm downloads/wk is half of Inngest's. No dedicated agent orchestration toolkit (Inngest has AgentKit). Younger than Inngest (3 years vs 5).

**Inngest vs Trigger.dev — how to choose:**
- Need **orchestration-as-a-library** (API-only, bring your own compute): → **Inngest**
- Need **managed compute** (long-running tasks, system deps, atomic versioning): → **Trigger.dev**
- Building **AI agent workflows** with MCP: → **Inngest** (AgentKit)
- Prioritize **open-source license** (Apache-2.0 vs ELv2): → **Trigger.dev**

---

### #4 — Sim Studio ⟨AI Agent Workflow Orchestration⟩ — NEW

**Why #4:** Purpose-built for AI agent orchestration — fills a clear gap between general automation (n8n) and pure agent frameworks (LangGraph, CrewAI). Fast-rising with credible backing.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| GitHub stars | 27,148 | 2nd (tied with Composio) |
| HN cumulative | 491pts | 3rd |
| Funding | $7M Series A (Paul Graham, Perplexity Fund) | Credible |
| License | Apache-2.0 | Best tier |
| Dev velocity | 7 releases in 7 days (Mar 2026) | Exceptional |

**Evidence basis:**
- 27K stars, YC X25, Apache-2.0 — largest open-source AI-agent-specific workflow builder
- 491pts cumulative HN across 3 posts (240pts "Apache-2.0 n8n alternative", 196pts "Agent Workflow GUI", 55pts Launch HN)
- $7M Series A with Paul Graham, Perplexity Fund, SV Angel — strong credibility signal
- Named customers include Epiq (legal services) and U.S. Department of Defense (self-reported)
- Extreme shipping velocity: v0.6.1 → v0.6.7 in 7 days, PR #3724 in 15-month-old project
- Figma-like visual canvas for drag-and-drop multi-agent orchestration with built-in observability

**Caveats:**
- Star-to-watcher ratio (204:1) is concerning — may indicate viral HN spikes inflating stars rather than sustained organic interest
- Only 44 contributors (89% of commits from top 3)
- No independent production case studies found
- 1.5 years old — unproven at enterprise scale

**Best for:** Teams specifically building AI agent workflows who want a visual orchestration tool with Apache-2.0 licensing. The Figma-for-agents positioning is unique. Choose over n8n when your use case is pure agent orchestration, not general automation.

**Limitations:** Young project (Jan 2025). No MCP bridge ecosystem. Narrow focus means it won't replace n8n for general automation. Star-to-watcher anomaly warrants monitoring.

---

### #5 — Kestra ⟨General Workflow Automation / Data Orchestration⟩

**Why #5:** Strong Airflow replacement narrative with urgent structural tailwind (Airflow 2 EOL: April 22, 2026 — 29 days away). Deep enterprise traction.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| GitHub stars | 26,584 | 3rd overall |
| Contributors | 434 | 2nd |
| License | Apache-2.0 | Best tier |
| Enterprise evidence | Named customers (Leroy Merlin, FILA, Gorgias) | Strong (self-reported) |
| Release stability | 3 concurrent branches maintained | Unique |

**Evidence basis:**
- Airflow 2.x EOL April 22, 2026 — security patches only, no bug fixes. Airflow 3 migration is "weeks of work, not days" (InfoWorld). Teams must migrate regardless.
- Dedicated airflow-to-kestra migration repo and tooling
- Named enterprise customers: Leroy Merlin (250+ users, 5000+ workflows), FILA (2000+ workflows, 2.5M monthly executions), Gorgias
- 434 contributors — 2nd in category after n8n (586). Genuine open-source community.
- 3 concurrent release branches (v0.23.28, v1.2.11, v1.3.3) — enterprise stability commitment
- YAML-declarative approach is natural successor to Airflow's DAG paradigm

**Best for:** Data engineering / DevOps teams migrating from Airflow or needing YAML-declarative pipeline orchestration. The right choice if your primary use case is data pipelines, ETL, and scheduled jobs — not AI agent workflows.

**Limitations:** No MCP bridge. Zero HN visibility in 2025-2026 (142pts peak in 2022). Not positioned for AI agent use cases. Java-based (different ecosystem than TypeScript-dominant AI tooling).

---

### #6 — Activepieces ⟨General Workflow Automation⟩

**Why #6:** MIT-licensed n8n alternative with forward-looking MCP-first strategy and excellent independent reviews.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| GitHub stars | 21,387 | 5th |
| Contributors | 429 | 3rd |
| License | MIT (CE) | Best possible |
| G2 rating | 4.8/5 (142 reviews) | Independently verified |
| MCP servers | 280+ pieces as MCP servers | 2nd (after n8n ecosystem) |

**Evidence basis:**
- MIT license — most permissive in the category. Enables maximum adoption and embedding.
- 280+ MCP servers for Claude Desktop / Cursor / Windsurf — forward-looking AI integration strategy
- G2: 4.8/5 (142 reviews), AppSumo: 4.9/5 (87 reviews), EuropeanStack: 7.5/10 — triple independent validation
- $5/flow/month unlimited runs — dramatically cheaper than Zapier
- 429 contributors, 60% of integrations community-contributed — genuine open-source community
- EuropeanStack: "Positions Activepieces not just as an automation tool, but as an infrastructure layer for AI-assisted work"

**Best for:** Teams that require MIT licensing, want the most affordable hosted option ($5/flow), or are betting on MCP as the integration standard. A strong n8n alternative for teams that can't accept n8n's Sustainable Use license.

**Limitations:** One-time Launch HN success (231pts, 2023) with no sustained HN visibility since. Younger and smaller ecosystem than n8n. MCP adoption metrics (how many active connections?) remain unverified.

---

### #7 — Windmill ⟨Code-First Orchestration⟩

**Why #7:** Exceptional shipping velocity and unique dual positioning (workflow engine + internal tools), but lacks MCP integration and recent community momentum.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| GitHub stars | 16,065 | 6th |
| Releases | 662 | 1st (most in category) |
| HN cumulative | ~1,018pts | 3rd |
| Language support | 8 languages | 1st |

**Evidence basis:**
- 662 releases (most in category) with multiple per day — strong engineering discipline
- Dual positioning: "Retool + Temporal in one" — scripts → webhooks + workflows + UIs
- 8 language support (TS, Python, Go, PHP, Bash, C#, SQL, Rust + Docker)
- HN: 428pts + 378pts + 212pts = ~1,018pts cumulative, though no posts above 50pts in 2025-2026
- Performance claim: "13x faster than Airflow" (benchmarked, self-reported)
- YC S22

**Best for:** Teams that want a code-first workflow engine that also serves as an internal tool builder. The "Retool + Temporal" positioning is unique. Choose when you need both workflow automation and internal admin UIs from one platform.

**Limitations:** No MCP bridge. License uncertainty (AGPL/EE). 699 open issues (highest in category — possible feature sprawl). No recent HN visibility (last significant post: Oct 2025 comparison article at 33pts).

---

### #8 — Pipedream ⟨General Workflow Automation⟩

**Why #8:** Strongest MCP integration breadth (10K+ tools, free tier) and Workday acquisition validates platform value, but acquisition introduces OSS direction risk.

| Metric | Value | Category Rank |
|--------|-------|---------------|
| MCP tools | 10,000+ with free tier | 1st by breadth |
| npm monthly downloads | 226,925 | Solid |
| Acquisition | Workday (Nov 2025) | Validates platform |

**Evidence basis:**
- 10,000+ prebuilt MCP tools at mcp.pipedream.com with free tier — largest MCP tool catalog
- Workday acquisition (Nov 2025) validates Pipedream as enterprise integration infrastructure
- 226K monthly npm downloads, 11K stars, 5.6K forks (high fork ratio = integration templates)
- 252 contributors — genuine community usage

**Best for:** Teams that need the broadest possible MCP integration surface with minimal setup. The free MCP tier at mcp.pipedream.com is uniquely accessible.

**Limitations:** Workday acquisition may shift focus toward enterprise/Workday ecosystem and away from independent OSS. 4,381 open issues — significant maintenance debt. No recent HN visibility.

---

### #9 — Composio ⟨AI Agent Workflow Orchestration⟩ — PROVISIONAL ⚠️

**Why #9 (downgraded from prior catalog):** Star inflation evidence is now overwhelming across three independent metrics. Real users exist but rank should not be star-driven.

| Metric | Value | Red Flag? |
|--------|-------|-----------|
| GitHub stars | 27,483 | ⚠️ 450:1 star:watcher ratio (healthy: 20-50:1) |
| HN product engagement | 9pts, 0 comments | ⚠️ Worst in category for a 27K-star project |
| Downloads per star/wk | 4.9 | ⚠️ 19x worse than Inngest (94/star/wk) |
| Combined downloads/wk | ~135K (npm + PyPI) | ✓ Real users exist |
| Funding | $29M at $120M valuation | ✓ Legitimate |

**Evidence basis for downgrade:**
- Star:watcher ratio 450:1 — worst in category. 27K stars but only 61 watchers means almost nobody who starred it follows ongoing development.
- 19x worse downloads-per-star than Inngest — the single most damning metric. Inngest has 5K stars and 476K combined downloads/wk. Composio has 27K stars and 135K combined downloads.
- Zero organic HN product engagement (9pts, 0 comments). High-engagement HN posts are all content marketing blog posts (Gemini vs Claude comparison: 483pts, OpenClaw: 387pts) — none about the Composio product itself.
- "Composio MCP will be deprecated soon" signal — if confirmed, undermines the core "850+ MCP integrations" narrative.

**Counter-evidence (why not lower):**
- ~135K combined downloads/wk (11.8K npm + 123K PyPI) shows real users exist
- $29M funding (Lightspeed, Elevation Capital) is legitimate
- Merge.dev lists Composio as one of 5 AI agent integration platforms
- MIT license, active development (857 commits/30d)

**Best for:** Teams already using LangChain/LangGraph who want pre-built tool integrations. The PyPI downloads (~123K/wk) suggest Python-first adoption in the LangChain ecosystem.

**Limitations:** Star count is almost certainly inflated. MCP deprecation signal needs monitoring. Only 44 contributors vs Activepieces' 429. Provisional status maintained — re-evaluate when MCP deprecation is confirmed or denied.

---

### Notable Mentions (Not Ranked)

**Zapier** — Still the right answer for non-technical business teams (8,000+ integrations, Zapier MCP with 30K+ actions). But severe pricing backlash (10-40x more expensive than n8n at scale) and task-based billing make it wrong for developers. Every independent comparison recommends n8n over Zapier for technical users.

**Gumloop** — $50M Series B from Benchmark (Mar 2026), named customers (Shopify, Ramp, Instacart). But closed-source, zero HN traction, credit-based pricing. Relevant for no-code business users, not for developers. Watch list only.

**Temporal** — 19K stars, the durable execution standard. Not ranked because it's infrastructure (like Postgres) rather than a workflow automation tool. But it defines the competitive landscape — Inngest, Trigger.dev, and Windmill all position against it.

**Dify** — 134K stars, visual LLM workflow builder. Primarily competes in "agent harnesses" category. Overlaps with automation for visual AI workflow building but is better categorized elsewhere.

**Automatisch** — 13.8K stars but zero organic HN engagement. Similar anomaly pattern to Composio. Not recommended without further evidence of real adoption.

---

## What Would Change This Ranking

| Change | Impact |
|--------|--------|
| **Sim Studio ships MCP bridge + independent production case studies emerge** | → Could rise to #3, challenging Trigger.dev |
| **Composio MCP deprecation confirmed** | → Drop to unranked/watch list |
| **Composio MCP deprecation denied + organic HN engagement appears** | → Could recover to #6-7 |
| **Inngest npm downloads continue declining** (499K → 289K trend) | → Trigger.dev takes #2 |
| **Activepieces MCP adoption metrics verified** (active Claude Desktop connections) | → Could rise to #5 |
| **Kestra ships MCP bridge before Airflow 2 EOL** (Apr 22) | → Could rise to #4 on migration wave |
| **Windmill clarifies license as Apache-2.0** | → Significant boost, could swap with Activepieces |
| **n8n's Sustainable Use license causes enterprise adoption friction** | → Activepieces or Kestra benefit (both Apache-2.0/MIT) |
| **Gumloop opens source code or ships developer-facing product** | → Enters ranking, potentially #5-6 |
| **Trigger.dev ships dedicated agent toolkit** (competing with AgentKit) | → Strengthens case for #2 over Inngest |

---

## Summary Table

| Rank | Solution | Sub-Problem | Stars | Downloads/wk | HN Cumulative | License | Key Signal |
|------|----------|-------------|-------|-------------|---------------|---------|------------|
| 1 | **n8n** | General Workflow | 180K | 38K npm | ~1,850pts | Sustainable Use | Consensus #1, $2.5B valuation, 20K+ MCP ecosystem |
| 2 | **Inngest** | Code-First | 5K | 476K combined | ~610pts | ELv2 | npm king, AgentKit, A16z + Vercel founder |
| 3 | **Trigger.dev** | Code-First | 14K | 150K npm | ~1,411pts | Apache-2.0 | Highest HN trust, own compute, 745pts peak |
| 4 | **Sim Studio** | Agent Orchestration | 27K | — | 491pts | Apache-2.0 | NEW — AI-native, YC X25, Paul Graham backed |
| 5 | **Kestra** | Data Orchestration | 27K | — | ~142pts | Apache-2.0 | Airflow EOL tailwind (29 days), 434 contributors |
| 6 | **Activepieces** | General Workflow | 21K | — | ~231pts | MIT | MCP-first, 4.8/5 G2, $5/flow |
| 7 | **Windmill** | Code-First | 16K | — | ~1,018pts | AGPL/EE | 662 releases, Retool+Temporal combo |
| 8 | **Pipedream** | General Workflow | 11K | 27K npm | — | — | 10K+ MCP tools, Workday acquired |
| 9 | **Composio** | Agent Orchestration | 27K | 135K combined | 9pts (product) | MIT | PROVISIONAL — star inflation evidence |

---

## Recommended Next Step

Pass findings to catalog update. Key actions:
1. Add Sim Studio as new entry at #4
2. Downgrade Composio from provisional #2 to provisional #9 with explicit star inflation note
3. Upgrade Inngest to #2 (was underranked relative to real adoption)
4. Add Pipedream at #8 (was missing or underrepresented)
5. Update all traction metrics to 2026-03-24 data
