# Discover Findings — Data & Analytics

## Scope

Full discover protocol for the **data-analytics** problem space. Find all serious contenders, new signals, gaps in the current catalog (7 ranked solutions: Marimo, Data Formulator, Evidence, Observable Framework, Streamlit, Plexe, PandasAI).

## Date

2026-03-24

## Inputs

### Web Search Queries
- "best data analytics AI tools 2026"
- "marimo notebook vs jupyter 2026 comparison"
- "data analytics open source alternative 2026 new tools"
- "switched from to marimo/streamlit/evidence data analytics 2026"
- "AI data visualization tool comparison 2026 data formulator"
- "LiveDocs AI-native notebook YC data analysis 2026"
- "DuckDB data analytics 2026 growth adoption"
- "Julius AI data analysis tool 2026 review"
- "Polars dataframe python 2026 vs pandas growth"
- "Hex notebook data analytics 2026 open source"
- "Deepnote open source 2026 notebook"
- "Metabase open source BI 2026 growth stars"
- "data analytics MCP server 2026 BigQuery Snowflake Databricks"
- "DuckDB github stars 2026 monthly downloads"
- "FireDucks pandas alternative fast 2026"
- "Shaper DuckDB Metabase alternative taleshape github 2026"
- "Plexe AI ML model 2026 update github"
- "Marimo github stars March 2026 latest release"

### HN Algolia Queries
- `marimo` (stories, points>10)
- `data analytics AI` (stories, points>10)
- `reactive notebook python` (stories, points>10)
- `data formulator` (stories, points>10)
- `DuckDB` (stories, points>10)
- `streamlit` (stories, points>10)
- `Polars dataframe` (stories, points>50)
- `evidence BI code` (stories, points>10)
- `PandasAI` (stories, points>5)
- `Deepnote` (stories, points>10)
- `Metabase` (stories, points>50)
- `LiveDocs notebook` (stories, points>5)

### Pages Checked
- GitHub repos: DuckDB, Deepnote, Shaper, Plexe, Marimo releases
- MotherDuck DuckDB ecosystem newsletter March 2026
- LiveDocs launch page
- Multiple 2026 comparison/roundup articles

---

## Findings

### NEW CONTENDER ALERT: DuckDB — CRITICAL GAP

**The single biggest gap in the current catalog.** DuckDB is the embedded analytical database that powers the entire modern data stack and is not listed.

- **GitHub stars:** 30K+ (hit 30K June 2025) — more than any current catalog entry except Streamlit
- **PyPI downloads:** 20M+/month (June 2025 data) — 10x Marimo, comparable to Streamlit
- **HN signal:** Extraordinary. 926 pts "The DuckDB Local UI" (Mar 2025), 491 pts geospatial story, 378 pts instant SQL, 323 pts Smallpond, 310 pts "Why DuckDB is my first choice" (Jan 2026), 263 pts 650GB benchmark, 237 pts WASM-in-browser, 224 pts sharded challenge
- **Stack Overflow:** Jumped from 1.4% → 3.3% adoption (#4 among databases), 50.7% DB-Engines growth rate
- **Enterprise:** LTS 1.4 (Oct 2025) with AES-256, MERGE, Iceberg writes. MotherDuck raised $100M at $400M valuation
- **Ecosystem effect:** Fivetran, dbt, Meltano, Metabase alternatives (Shaper) all building on DuckDB. It's becoming the embedded analytics engine inside notebooks, SaaS products, and internal tools
- **Why this matters:** DuckDB is infrastructure-level for analytics like Streamlit is for deployment. It's the execution engine underneath Marimo, LiveDocs, Evidence, and more. Missing it is like missing SQLite from a databases ranking.

**Recommendation:** Add at rank #2–3. It's not a notebook or BI tool — it's the analytical engine that makes them all work. Create a new lane: "embedded analytics engine."

Source: https://duckdb.org/2025/06/06/github-30k-stars | https://news.ycombinator.com/item?id=43249038

---

### NEW CONTENDER ALERT: Deepnote — Now Open Source (Apache 2.0)

Deepnote went open source in late 2025, announced on HN with 188 pts / 171 comments (Nov 2025). This is a significant shift.

- **GitHub stars:** 2.7K (early — just open-sourced)
- **Users:** 500K+ data professionals (Estee Lauder, SoundCloud, Statsig, Gusto)
- **HN signal:** 188 pts / 171 comments — very high engagement for an open-source announcement
- **Key features:** Drop-in Jupyter replacement, AI-first design (Deepnote Agent), Python/R/SQL, new .deepnote YAML format (git-friendly), real-time collaboration, deployable data apps
- **Format innovation:** .deepnote YAML replaces .ipynb JSON — cleaner, version-control-friendly, round-trip .ipynb conversion
- **License:** Apache 2.0
- **Why this matters:** Deepnote entering open source directly challenges Marimo in the "Jupyter replacement" lane. It has enterprise credibility (500K users) that Marimo is still building. The battle for the next notebook format is now Marimo (.py) vs Deepnote (.deepnote YAML) vs Jupyter (.ipynb).

**Recommendation:** Add at rank #3–5. Monitor star growth — if it crosses 10K in 6 months, it could challenge Marimo's #1.

Source: https://github.com/deepnote/deepnote | https://news.ycombinator.com/item?id=45982774 (approximate)

---

### NEW CONTENDER ALERT: Shaper — DuckDB-native BI dashboards

Brand new tool, launched on HN Feb 2026 with 179 pts / 40 comments.

- **What it is:** Open-source, SQL-only BI dashboard tool powered by DuckDB
- **Differentiator:** Dashboards built purely in SQL with type-cast annotations (`::BARCHART_STACKED`). No frontend framework needed.
- **Tech:** Go + TypeScript, DuckDB embedded
- **Data sources:** Postgres, S3, Google Sheets, HTTP/NATS real-time ingestion — anything with a DuckDB extension
- **License:** Open source (100% free)
- **Why this matters:** Directly competes with Evidence in the "SQL-first BI" lane but is DuckDB-native (Evidence uses its own SQL engine). If DuckDB is the future, Shaper has a structural advantage. Very early but strong HN signal.

**Recommendation:** Watch closely. Too early to rank (no star count available, brand new), but if it gains traction it could displace Evidence at #3.

Source: https://github.com/taleshape-com/shaper | https://news.ycombinator.com/item?id=47057879

---

### NEW CONTENDER: LiveDocs (YC W22) — AI-native data workspace

Launched on HN Feb 2026 with 48 pts / 19 comments.

- **What it is:** AI-native data workspace combining notebook IDE, general data agent, and app building
- **Differentiator:** Built-in agent writes SQL/Python, generates visualizations, automates analysis. DuckDB + Polars under the hood.
- **Team:** 3 employees, San Francisco. Pivoted from no-code analytics (2020) to AI-native notebook (2026).
- **YC batch:** W22
- **Why this matters:** Represents the "AI-agent-first" approach to data work, where the notebook is secondary to the agent. Different philosophy from Marimo (notebook-first with AI assist). If AI agents become the primary data interface, LiveDocs is ahead architecturally.

**Recommendation:** Watch list. Too early and too small to rank, but the architecture is forward-looking.

Source: https://livedocs.com/ | https://news.ycombinator.com/item?id=46964162

---

### SIGNAL: Data Formulator 0.7 Alpha — Major Update

Data Formulator (currently ranked #2) shipped v0.7 alpha with significant new capabilities:

- **30 chart types** with new semantic chart engine (area, streamgraph, candlestick, pie, radar, maps)
- **Hybrid chat + data thread** — chat woven into exploration timeline with lineage, previews, reasoning
- **Unified DataAgent** replacing four separate agents, plus new recommendation and insight agents
- **Security hardening** — code signing, sandboxed execution, authentication, rate limiting
- **Enterprise-ready features** emerging

**Why this matters:** Confirms Microsoft Research is investing heavily. The move toward enterprise features suggests a path beyond research prototype. This strengthens its #2 position.

Source: https://github.com/microsoft/data-formulator

---

### SIGNAL: Streamlit — Zero HN Stories 2025–2026

Streamlit (currently ranked #5) had **no HN stories with >10 points in all of 2025 and 2026**. The last notable HN story was Oct 2024 (Dashi, 31 pts). This is a stark signal:

- Community excitement has plateaued despite 44K stars and 31.8M downloads
- Snowflake acquisition may have contributed to perception of stagnation
- Still dominant by raw numbers but no longer generating developer enthusiasm

**Why this matters:** Validates the current ranking (#5) but suggests it could drop further. Infrastructure-level adoption keeps it relevant, but it's no longer where the innovation is happening.

---

### SIGNAL: PandasAI — Confirmed Stale, No Recovery

- Only HN story ever: 77 pts in May 2023. Nothing since.
- No evidence of resumed development since Oct 2025
- Zero new switching stories, comparison articles, or community activity

**Why this matters:** Confirms #7 ranking. Consider dropping entirely if no commits appear by mid-2026.

---

### SIGNAL: Marimo — Continued Strong Momentum

Marimo (currently #1) continues to show strong signals:

- **Latest release:** v0.21.1 (Mar 18, 2026) — PDF export, improved anywidget integration
- **HN 2025:** 204 pts (WASM codespaces), 123 pts (Molab cloud), 117 pts (reusable programs), 108 pts (dataflow graphs), 65 pts (VS Code extension)
- **Ecosystem growth:** Molab (cloud-hosted workspace, 123 pts HN) and WASM codespaces (204 pts) show infrastructure being built around Marimo
- **v0.19.0** shipped with significant features

**Why this matters:** #1 position is well-defended. The main emerging threat is Deepnote going open source.

---

### SIGNAL: MCP Servers for Data — Ecosystem Exploding

Major enterprise data vendors all shipping MCP servers in Q1 2026:

- **Databricks:** Managed MCP servers (Genie Space, Vector Search, UC Function)
- **Snowflake:** Open-source MCP server resources
- **Teradata:** MCP server planned H1 2026 (security, observability, compliance)
- **ClickHouse:** MCP + data warehouse integration guide published
- **Actian:** Data Observability Agents + MCP for lakehouses
- **Confluent:** Streaming Agents connecting MCP + A2A protocol

**Why this matters:** Validates the current catalog's "Data MCP explosion Q1 2026" live signal. These are the connectors that let AI agents query real enterprise data. Not rankable individually (infrastructure), but represents the category's most important meta-trend.

Source: https://www.infoworld.com/article/4030321/teradata-joins-snowflake-databricks-in-expanding-mcp-ecosystem.html

---

### SIGNAL: Polars and FireDucks — DataFrame Layer Shifting

Not standalone tools but important infrastructure signals:

**Polars:**
- 4.6x–30x faster than Pandas, 30–70% memory savings
- Growing adoption for large datasets, data pipelines
- HN: Buckaroo table UI for Polars+Pandas notebooks (105 pts, May 2025)
- Used inside LiveDocs, increasingly default in new tools

**FireDucks (NEC):**
- Drop-in Pandas replacement (same API, just change import)
- 48x–125x faster via JIT compilation
- HN: 398 pts "FireDucks: Pandas but Faster" (Nov 2024)
- Zero-cost migration for existing Pandas codebases

**Why this matters:** The Pandas monopoly is fragmenting. Polars for new projects, FireDucks for zero-effort migration. Not rankable as standalone analytics tools, but they affect which notebook/platform choices make sense.

---

### SIGNAL: Metabase + Metabot — AI Agent for Open-Source BI

Metabase remains dominant in open-source BI (38K+ stars) and has added AI capabilities:

- **Metabot:** AI agent that answers questions, writes queries, builds dashboards
- **Data Studio:** Transform raw data into analytics-ready tables
- Canonical metrics definitions
- New "DuckDB-based Metabase alternative" (Shaper) shows both its dominance and vulnerability

**Why this matters:** Metabase is not in the current catalog. It's more traditional BI than the current entries, but its scale (38K stars) and Metabot AI addition make it worth considering, especially as the category includes Evidence and Observable Framework which serve similar "BI" use cases.

---

### SIGNAL: Julius AI — Closed-Source Contender

- Natural language data analysis, $45/mo Pro
- Auto-debugging: 80% success rate on code errors
- Connects to Snowflake, BigQuery, Postgres
- Not open source — may not fit catalog criteria

**Not recommended for catalog** (closed source, SaaS-only), but worth noting as a commercial reference point.

---

## Quotes

> "DuckDB is Eating the Data World" — Medium headline, Mar 2026. Reflects the consensus that DuckDB has become infrastructure-level.

> "Deepnote is a drop-in replacement for Jupyter with an AI-first design" — GitHub description. The "drop-in" claim directly challenges Marimo's positioning.

> "96% of notebooks don't reproduce" — Repeated across multiple Marimo vs Jupyter comparisons. The reproducibility argument keeps growing stronger.

> "We spent a year exploring how to blend agent mode with interactions to allow you more easily 'vibe' with your data" — Data Formulator team, HN Nov 2025. "Vibe coding" reaching data viz.

> "Data work should behave like a living system, not a static document or a chat transcript" — Arsalan Bashir, LiveDocs founder, HN Feb 2026.

> "A DuckDB-based Metabase alternative" — HN title for Shaper, Feb 2026 (179 pts). The DuckDB ecosystem is spawning alternatives to established tools.

---

## Catalog Gaps Summary

| Gap | Severity | Action |
|-----|----------|--------|
| **DuckDB** missing | **CRITICAL** | Add immediately. 30K+ stars, 20M+ downloads, 926-pt HN. The analytical engine underneath the entire category. |
| **Deepnote** missing | **HIGH** | Add. Now Apache 2.0 open source, 500K users, 188-pt HN announcement. Direct Marimo competitor. |
| **Shaper** missing | **MEDIUM** | Watch/add. 179-pt HN launch (Feb 2026). DuckDB-native SQL BI. Potential Evidence competitor. |
| **LiveDocs** missing | **LOW** | Watch list. 48-pt HN, 3 employees. Interesting architecture but too early. |
| **Metabase** missing | **MEDIUM** | Consider adding. 38K stars, Metabot AI. Traditional BI but massive OSS presence. |
| **FireDucks** missing | **LOW** | Watch list. Infrastructure (DataFrame library), not a standalone analytics tool. |

---

## Recommended Next Step

1. **Deep-dive DuckDB** — Must understand positioning: is it infrastructure (like Streamlit) or a direct tool? Where does it rank? Need star trends, download trends, competitive analysis vs SQLite/Postgres for analytics.

2. **Deep-dive Deepnote** — Evaluate format (.deepnote vs .py), AI agent quality, community momentum post-open-source. Direct comparison with Marimo needed.

3. **Rank update** — Current 7-entry ranking needs at minimum DuckDB and Deepnote added. Suggested new ranking order for deep-dive validation:
   - #1 Marimo (defended)
   - #2 DuckDB (new — infrastructure engine)
   - #3 Deepnote (new — open source Jupyter replacement)
   - #4 Data Formulator (stable, v0.7 strengthens position)
   - #5 Evidence (stable, Shaper threatens)
   - #6 Observable Framework (stable)
   - #7 Streamlit (stable but declining excitement)
   - #8 Plexe (stable)
   - #9 PandasAI (declining, consider removal)

4. **Monitor Shaper** — Check back in 30 days for star count and development velocity.
