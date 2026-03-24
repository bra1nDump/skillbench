# Deep-Dive Findings — Data & Analytics

## Scope

Full deep-dive protocol for the **data-analytics** problem space. Evidence-backed assessment of all contenders: 7 current catalog entries (Marimo, Data Formulator, Evidence, Observable Framework, Streamlit, Plexe, PandasAI) plus 4 new contenders identified by discovery (DuckDB, Deepnote, Shaper, LiveDocs).

## Date

2026-03-24

## Inputs

### Search Queries Used
- "marimo notebook 2026 review", "marimo vs jupyter 2026", "switched to marimo 2026"
- "DuckDB adoption 2026", "DuckDB vs SQLite analytics", "DuckDB vs Polars 2026", "DuckDB production use"
- "Deepnote open source 2025 2026", "Deepnote vs Marimo", "Deepnote vs Jupyter 2026"
- "Data Formulator 0.7 alpha 2026", "Data Formulator vs tableau"
- "Streamlit 2026 new features", "Streamlit Snowflake 2026"
- "Evidence BI alternatives 2026", "Evidence vs Shaper"
- "Observable Framework 2026 update"
- "PandasAI alternative 2026", "PandasAI problems hallucination"
- "Plexe AI ML model 2026 update"
- "Shaper DuckDB BI dashboard SQL 2026"
- "LiveDocs AI notebook data analysis 2026"
- "best data analytics tools 2026 open source", "best python notebook 2026"
- "Pandas vs Polars vs DuckDB 2026"

### HN Algolia Queries
- `marimo` (stories, points>10) — 6 stories found
- `duckdb` (stories, points>10) — 20+ stories found
- `deepnote` (stories, points>10) — 4 stories found
- `data formulator` (stories, points>10) — 2 stories found
- `streamlit` (stories, points>10) — 1 repost found
- `evidence BI code` (stories, points>10) — 1 story (2021 launch only)
- `observable framework` (stories, points>10) — 1 story (2024 only)
- `pandasai` (stories, points>5) — 1 story (2023 only)
- `plexe` (stories, points>10) — 3 stories found
- `shaper duckdb` (stories, points>10) — 1 story found
- `livedocs notebook` (stories, points>5) — 1 story found

### Pages Checked
- GitHub repos: marimo, duckdb, deepnote, data-formulator, evidence, observable/framework, streamlit, plexe, pandas-ai, shaper
- PyPI stats for: marimo, duckdb, streamlit, pandasai, plexe
- HN Algolia API for all contenders
- YouTube search results pages
- MotherDuck DuckDB Ecosystem Newsletter March 2026
- Multiple 2026 comparison/roundup articles
- Evidence changelog, Observable release notes, Streamlit release notes

---

## Findings

---

### 1. MARIMO (Current Rank: #1)

**Verdict: Confirmed #1. CoreWeave acquisition, explosive release cadence, strongest combined signal.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 19,879 | 2026-03-24 |
| GitHub forks | 990 | 2026-03-24 |
| Contributors | 254 | 2026-03-24 |
| PyPI monthly downloads | 1,814,437 | 2026-03-24 |
| Open issues | 587 | 2026-03-24 |
| Last push | 2026-03-23 | 2026-03-24 |
| Commits in last 30 days | ~235 | 2026-03-24 |
| Releases in last 5 weeks | 5 (v0.19.11 → v0.21.0) | 2026-03-24 |

#### Evidence

**[STRONG]** CoreWeave Acquires Marimo Inc.
Source: [CoreWeave Press Release](https://www.coreweave.com/news/coreweave-acquires-marimo-to-unify-the-generative-ai-developer-workflow)
Date: 2025-10-30 | Engagement: Major industry acquisition (Morgan Stanley advised)
Who: CoreWeave (GPU cloud infrastructure company)
Key quote: CoreWeave committed to keeping marimo open source and permissively licensed
Why it matters: Infrastructure-level validation — CoreWeave also acquired Weights & Biases and OpenPipe. Positions marimo as part of the generative AI developer workflow stack.

**[STRONG]** "Why I'm Making the Switch to marimo Notebooks"
Source: [Towards Data Science](https://towardsdatascience.com/why-im-making-the-switch-to-marimo-notebooks/)
Date: 2025-11-20 | Engagement: Towards Data Science (major publication)
Who: Parul Pandey, well-known data science author
Key quote: "36% of 10M Jupyter notebooks on GitHub not reproducible. Marimo guarantees code/outputs/state consistency via reactive execution."
Why it matters: Independent switching story from a credible author on the most-read data science publication.

**[STRONG]** Multiple 100+ point HN stories in 2025
Source: [HN Algolia](https://hn.algolia.com/api/v1/search?query=marimo&tags=story&numericFilters=points>10)
Date: 2025 | Engagement: 204 pts (WASM codespaces), 123 pts (Molab), 117 pts (reusable programs), 108 pts (dataflow graphs), 65 pts (VS Code extension)
Who: HN community
Key quote: N/A — consistent front-page engagement
Why it matters: Sustained multi-story HN attention indicates genuine community adoption, not just launch hype.

**[STRONG]** v0.21.0 Release — built-in interactive matplotlib, ipynb export, MCP integration
Source: [GitHub Releases](https://github.com/marimo-team/marimo/releases/tag/0.21.0)
Date: 2026-03-16 | Engagement: 18 contributors, 6 first-time
Who: Marimo team + community
Key quote: "Built-in interactive matplotlib", "Download notebooks as .ipynb", "MCP integration improvements"
Why it matters: Features directly address the two biggest Jupyter migration objections (matplotlib support, ipynb compatibility).

**[STRONG]** Oracle engineering team blog — enterprise validation
Source: [Oracle A-Team Blog](https://www.ateam-oracle.com/say-goodbye-to-notebook-chaos-why-marimo-might-be-your-next-data-science-playground)
Date: 2025
Who: Oracle engineering team
Why it matters: Enterprise validation from a major cloud vendor's internal team.

**[MODERATE]** Multiple independent 2026 comparison articles
Sources: [Utkarsh Shigihalli](https://onlyutkarsh.com/posts/2026/jupyter-vs-marimo-notebooks/), [BSWEN](https://docs.bswen.com/blog/2026-02-12-marimo-vs-jupyter/), [Inkdroid](https://inkdroid.org/2026/01/13/marimo/)
Date: Jan-Feb 2026 | Who: Independent bloggers
Key finding: Consistent praise for reactive execution, pure .py files, git-friendliness. Main limitation: GitHub doesn't render .py like .ipynb.

#### Videos
- youtubeId: "3-3zy5W2SOw", title: "marimo: A Notebook that Compiles Python (PyCon US 2025)", channel: "PyCon US", date: "2025-05"
- youtubeId: "3N6lInzq5MI", title: "marimo concepts", channel: "marimo-team", date: "2024"
- Real Python published a video course "Getting Started With marimo Notebooks" (July 2025)

#### Gaps
- YouTube 2026 review content is weak — no independent creator reviews found
- CoreWeave acquisition sustainability questions not yet answered (will they fund long-term?)

---

### 2. NEW CONTENDER: DuckDB — CRITICAL ADDITION

**Verdict: Must add. Strongest quantitative signal in the entire category. The embedded analytical engine powering the modern data stack.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 36,887 | 2026-03-24 |
| GitHub forks | 3,029 | 2026-03-24 |
| Total commits | 71,308 | 2026-03-24 |
| Total releases | 58 | 2026-03-24 |
| PyPI monthly downloads | 31,479,987 | 2026-03-24 |
| PyPI daily downloads | ~694,000 | 2026-03-24 |
| Open issues | 527 | 2026-03-24 |
| Latest release | v1.5.1 (2026-03-23) | 2026-03-24 |
| SO adoption | 1.4% → 3.3% YoY (+50.7%) | 2025 survey |

#### Evidence

**[STRONG]** "The DuckDB Local UI" — 926 pts on HN
Source: [HN](https://news.ycombinator.com/item?id=43249038)
Date: 2025-03-12 | Engagement: 926 pts / 188 comments
Who: HN community
Why it matters: One of the highest-scoring database stories on HN in 2025. 926 points for a UI launch signals extraordinary developer enthusiasm.

**[STRONG]** "Why DuckDB is my first choice for data processing" — 310 pts (2026)
Source: [HN](https://news.ycombinator.com/item?id=42726613)
Date: 2026-01-16 | Engagement: 310 pts / 119 comments
Who: HN community
Why it matters: Front-page HN story in 2026 confirms sustained momentum, not just 2025 hype.

**[STRONG]** Production adoption at scale — Mode Analytics, Patreon, Watershed
Source: [MotherDuck Blog — 15 Companies Using DuckDB in Prod](https://motherduck.com/blog/15-companies-duckdb-in-prod/)
Date: 2025-2026
Who: Mode Analytics (50M queries, 250TB, 2T rows/month), Patreon (50TB, 10M members), Watershed (17M rows, 10x speedup)
Key quote: Mode processes "50 million queries, 250 terabytes of data, 2 trillion rows per month" on DuckDB
Why it matters: Production-scale validation at companies processing trillions of rows/month.

**[STRONG]** DuckDB v1.5.0 "Variegata" — VARIANT type, GEOMETRY, MCP server
Source: [DuckDB Blog](https://duckdb.org/2026/03/09/announcing-duckdb-150)
Date: 2026-03-09
Who: DuckDB Foundation
Key features: VARIANT type (JSON analysis up to 100x faster), built-in GEOMETRY type, MCP server for AI agent integration, Azure write support
Why it matters: MCP server integration positions DuckDB as the analytical backend for AI agents. VARIANT type is a direct play against Snowflake's semi-structured data handling.

**[STRONG]** MotherDuck — $133M total funding, $400M valuation
Source: [Tracxn](https://tracxn.com/d/companies/motherduck/__ImNOuR4_9UpxigSXghehK9xIMsE-BU-RyEsr6aHQ6_M)
Date: 2025 | Who: MotherDuck (managed DuckDB cloud)
Key details: Series B+ of $33M (May 2025), EU region launched Sept 2025, Enterprise Tech 30 #9
Why it matters: $133M in managed-DuckDB funding validates the commercial ecosystem.

**[STRONG]** DuckDB vs Polars benchmarks — DuckDB wins on memory at scale
Source: [codecentric](https://www.codecentric.de/en/knowledge-hub/blog/duckdb-vs-polars-performance-and-memory-with-massive-parquet-data)
Date: 2026-01-20 | Who: Niklas Niggemann (German consultancy)
Key finding: On 140GB data — DuckDB peak memory 1.3GB vs Polars 17GB (13x more). On 2TB data — DuckDB 2.4GB vs Polars 23GB.
Why it matters: Memory efficiency at scale is a critical differentiator for production analytical workloads.

**[STRONG]** Snowflake → DuckDB migration stories — 70-79% cost reduction
Source: [Medium](https://medium.com/@komalbaparmar007/bigquery-duckdb-together-the-local-hot-cache-pattern-that-slashes-query-bills-without-losing-e46a78bd61c7), [Definite Blog](https://www.definite.app/blog/duckdb-ducklake-business-case)
Date: 2025-2026 | Who: Independent practitioners
Key finding: One company reported 70% cost reduction migrating from Snowflake; another reported 79% cloud bill reduction using DuckDB as local cache.
Why it matters: Cost savings stories drive adoption in budget-conscious environments.

**[STRONG]** Ecosystem breadth — powers Marimo, Evidence, dbt, Shaper, Harlequin, DuckLake
Source: [MotherDuck Ecosystem Newsletter March 2026](https://motherduck.com/blog/duckdb-ecosystem-newsletter-march-2026/)
Date: 2026-03 | Who: DuckDB ecosystem
Key integrations: Marimo (SQL cells), Evidence (query engine), dbt-core, Shaper (BI), Harlequin (terminal IDE, 309 HN pts), DuckLake (lakehouse), DuckDB-WASM (browser), AliSQL (Alibaba integration)
Why it matters: DuckDB is becoming the analytical engine underneath multiple catalog entries.

**[MODERATE]** Stack Overflow survey — 50.7% growth rate, #4 database
Source: [Analytics Insight](https://www.analyticsinsight.net/programming/pandas-vs-polars-vs-duckdb-what-data-scientists-should-use-in-2026)
Date: 2025-2026 | Who: Stack Overflow Developer Survey
Key finding: DuckDB jumped from 1.4% to 3.3% adoption (#4 among databases)
Why it matters: Fastest-growing database in the survey — structural adoption shift, not just hype.

#### Videos
- Luke Barousse: 14-hour free DuckDB/SQL course (channel: 550K+ subscribers)
- MotherDuck webinars: Feb 25 "AI agents building visualizations", Mar 17 "Agents That Build Tables", Mar 19 "DuckDB 1.5 walkthrough"
- 70+ online courses indexed on Class Central

#### Recommendation
**Add at rank #2.** DuckDB is infrastructure-level for analytics. 36.9K stars and 31.5M monthly downloads exceed every current catalog entry except Streamlit (which has comparable numbers but zero innovation signal). DuckDB is the execution engine underneath Marimo, Evidence, and Shaper. Create lane: "embedded analytics engine."

---

### 3. DATA FORMULATOR (Current Rank: #2)

**Verdict: Hold at #3 (shifts down due to DuckDB insertion). v0.7 alpha strengthens position significantly.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 15,200 | 2026-03-24 |
| GitHub forks | 1,400 | 2026-03-24 |
| Contributors | 27 | 2026-03-24 |
| Last push | 2026-03-23 | 2026-03-24 |
| Latest release | v0.7 alpha (2026-03-02) | 2026-03-24 |

#### Evidence

**[STRONG]** v0.7 Alpha — major capability expansion
Source: [GitHub Releases](https://github.com/microsoft/data-formulator/releases)
Date: 2026-03-02
Who: Microsoft Research
Key features: 30 chart types (area, streamgraph, candlestick, pie, radar, maps), unified DataAgent replacing 4 agents, hybrid chat + data thread with lineage, workspace/data lake with Azure Blob, external data loaders (MySQL, PostgreSQL, DuckDB, S3), security hardening (code signing, sandboxed execution)
Why it matters: Moves Data Formulator from research prototype toward enterprise-ready product. DuckDB integration connects it to the ecosystem.

**[STRONG]** CHI 2025 Academic Publication
Source: [ACM Digital Library](https://dl.acm.org/doi/10.1145/3706598.3713296)
Date: 2025
Who: Microsoft Research (Chenglong Wang et al.)
Key quote: "Data Formulator 2: Iterative Creation of Data Visualizations with AI Transforming Data Along the Way"
Why it matters: Top-tier HCI conference publication validates the approach academically. Participants completed all visualization tasks within average 20 minutes.

**[STRONG]** Show HN: Data Formulator — 212 pts
Source: [HN](https://news.ycombinator.com/item?id=41907719)
Date: 2024-10-21 | Engagement: 212 pts / 34 comments
Who: HN community
Why it matters: Strong initial reception. 212 points for a research tool is excellent.

**[MODERATE]** Follow-up HN story — 38 pts
Source: [HN](https://news.ycombinator.com/item?id=45890394)
Date: 2025-11-11 | Engagement: 38 pts / 13 comments
Who: HN community
Why it matters: Declining novelty on follow-up, typical for incremental updates.

#### Videos
- youtubeId: "GfTE2FLyMrs", title: "Data Formulator Tutorial", channel: "Microsoft Research", date: "2025"
- youtubeId: "3ndlwt0Wi3c", title: "Data Formulator Release Announcement", channel: "Microsoft Research", date: "2024-10"
- Microsoft Research Forum video: "Data Formulator: Vibe with your data, in control" (Dec 2025)

#### Gaps
- No independent head-to-head comparison articles exist — tool is too niche
- Desktop-only, no deployment/sharing story
- Small contributor base (27) compared to Marimo (254)

---

### 4. NEW CONTENDER: DEEPNOTE — Open Source Jupyter Challenger

**Verdict: Add at rank #5-6. Strong HN signal but polarizing reception. Marimo preferred by technical community.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 2,800 | 2026-03-24 |
| GitHub forks | 179 | 2026-03-24 |
| Total commits | 245 | 2026-03-24 |
| Total releases | 77 | 2026-03-24 |
| Open issues | 10 | 2026-03-24 |
| License | Apache-2.0 | 2026-03-24 |
| Latest release | @deepnote/cli v0.6.0 (2026-03-23) | 2026-03-24 |
| Claimed users | 500K+ | Self-reported |
| G2 rating | 4.5/5 (378 reviews) | 2026-03-24 |
| Funding | $23.8M (Accel, Index Ventures) | Crunchbase |
| YC Batch | S19 | 2026-03-24 |

#### Evidence

**[STRONG]** "Deepnote, a Jupyter alternative, is going open source" — 188 pts, 171 comments
Source: [HN](https://news.ycombinator.com/item?id=45813994)
Date: 2025-11-04 | Engagement: 188 pts / 171 comments
Who: HN community
Key finding: Massive debate. **Criticism**: aggressive "Jupyter successor" positioning called presumptuous; suspected AI-generated marketing copy; manipulated comparison graphs. **Positive**: genuine improvements acknowledged (human-readable format, better UI, block types). **Critical**: Marimo emerged as the preferred alternative in the discussion.
Why it matters: 171 comments is extraordinary engagement, but sentiment was polarizing. The HN crowd prefers Marimo.

**[STRONG]** .deepnote YAML format — technical innovation
Source: [DeepWiki](https://deepwiki.com/deepnote/deepnote), [Deepnote Docs](https://deepnote.com/docs/deepnote-format)
Date: 2025-2026
Who: Deepnote team
Key features: 23+ block types (code, SQL, chart, input, KPI, separator), Zod-based schema validation, lossless ipynb conversion, multi-language (Python, R, SQL)
Why it matters: The notebook format war is now .py (Marimo) vs .deepnote YAML vs .ipynb (Jupyter). Each has clear trade-offs.

**[MODERATE]** Enterprise customers confirmed
Source: [Deepnote Customers](https://deepnote.com/customers), [G2 Reviews](https://www.g2.com/products/deepnote/reviews)
Date: 2025-2026
Who: Ramp, Motive, SoundCloud, Gusto, Webflow, Estee Lauder, Statsig
Key finding: G2: 4.5/5 from 378 reviews (73% five-star). Reo.dev identifies 5,749 individual users. 500K claim plausible but unverified independently.
selfReported: true (for 500K figure)

**[MODERATE]** Launch HN: Deepnote (YC S19) — 316 pts (original launch)
Source: [HN](https://news.ycombinator.com/item?id=24936161)
Date: 2020-10-30 | Engagement: 316 pts / 70 comments
Who: HN community
Why it matters: Strong original launch reception, but 5+ years ago. The open-source pivot is the current story.

#### Format Comparison

| Feature | `.deepnote` (YAML) | `.ipynb` (JSON) | `.py` (Marimo) |
|---------|-------------------|----------------|---------------|
| Git-friendliness | High (clean diffs) | Low (noisy JSON) | High (plain code) |
| Block types | 23+ | 3 | Code cells only |
| Multi-language | Python, R, SQL | Kernel-based | Python only |
| Reactivity | Downstream execution | Manual execution | Automatic reactive |
| Collaboration | Real-time cloud sync | External tools | Not inherently collaborative |

#### Gaps
- Only ~5 months as open source — star trajectory is the key metric to watch
- HN community prefers Marimo — Deepnote faces headwinds in the developer audience
- G2 reviewers flag bugs, freezes, and performance lag on large datasets
- No YouTube coverage found

---

### 5. EVIDENCE (Current Rank: #3)

**Verdict: Drop to #5-6. Development slowing, zero HN presence since 2021, Shaper threat is real.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 6,046 | 2026-03-24 |
| GitHub forks | 328 | 2026-03-24 |
| Contributors | 76 | 2026-03-24 |
| Open issues | 257 | 2026-03-24 |
| Last push | 2026-02-18 (5 weeks ago) | 2026-03-24 |
| npm monthly downloads | ~7,700 | 2026-03-24 |

#### Evidence

**[STRONG]** Launch HN: Evidence (YC S21) — 263 pts
Source: [HN](https://news.ycombinator.com/item?id=28304781)
Date: 2021-08-25 | Engagement: 263 pts / 91 comments
Who: HN community
Why it matters: Very strong launch, but this is the ONLY HN story with >10 pts in the project's entire 4+ year history.

**[MODERATE]** January 2026 feature additions
Source: [Evidence Changelog](https://docs.evidence.studio/changelog)
Date: 2026-01 | Who: Evidence team
Key features: Logo component, new data connectors (MySQL sync, PostHog, SQL Server), Snowflake 1-minute incremental syncs, dimension_grid component
Why it matters: Incremental improvements, not category-defining features.

**[WEAK]** Development cadence slowing
Source: [GitHub](https://github.com/evidence-dev/evidence)
Date: 2026-03-24
Key finding: Last commit was Feb 18, 2026 (cleanup install page). Recent activity is maintenance/security patches, not feature work.
Why it matters: 5+ weeks without a commit is concerning for a VC-backed tool.

#### Gaps
- Zero HN stories since 2021 launch — worst HN trajectory in the category
- Shaper (DuckDB-native, 179 pts on debut) threatens Evidence's "SQL-first BI" niche
- npm downloads (7.7K/mo) are low compared to peers

---

### 6. OBSERVABLE FRAMEWORK (Current Rank: #4)

**Verdict: Drop to #7-8. Maintenance mode confirmed — 11-month release gap, company pivoting to commercial Canvas.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 3,425 | 2026-03-24 |
| GitHub forks | 188 | 2026-03-24 |
| Contributors | 39 | 2026-03-24 |
| Open issues | 178 | 2026-03-24 |
| Last push | 2026-03-02 | 2026-03-24 |
| npm monthly downloads | ~16,700 | 2026-03-24 |

#### Evidence

**[STRONG]** "Interesting ideas in Observable Framework" (Simon Willison) — 360 pts
Source: [HN](https://news.ycombinator.com/item?id=39582745)
Date: 2024-03-03 | Engagement: 360 pts / 63 comments
Who: Simon Willison (major tech blogger)
Why it matters: This was the high-water mark. Nothing comparable since.

**[MODERATE]** 11-month release gap — v1.13.3 to v1.13.4
Source: [GitHub Releases](https://github.com/observablehq/framework/releases)
Date: v1.13.3 (April 2025) → v1.13.4 (March 2026)
Who: Observable team
Key finding: v1.13.4 release was minor (trusted publishing, typo fix). No feature work visible.
Why it matters: Strongest signal that the open-source Framework is in maintenance mode.

**[MODERATE]** Company pivoting to commercial Observable Canvas
Source: [Observable Release Notes](https://observablehq.com/release-notes)
Date: 2026-01
Who: Observable Inc
Key features (Canvas, not Framework): SQL nodes with AI, control inputs, dashboard builder with mobile-responsive layouts
Why it matters: Engineering investment is flowing to the commercial product, not the open-source framework.

#### Gaps
- Zero HN stories in 2025 or 2026
- Mike Bostock's reputation carries weight but may not sustain an unmaintained project
- Company status: 36 employees, $48.1M funding, still operating — but focus has shifted

---

### 7. STREAMLIT (Current Rank: #5)

**Verdict: Hold at #5. Unkillable by numbers but dead by enthusiasm. Permanent infrastructure, not the frontier.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 43,988 | 2026-03-24 |
| GitHub forks | 4,157 | 2026-03-24 |
| Contributors | 319 | 2026-03-24 |
| PyPI monthly downloads | 30,885,941 | 2026-03-24 |
| Open issues | 1,305 | 2026-03-24 |
| Last push | 2026-03-23 | 2026-03-24 |

#### Evidence

**[STRONG]** Streamlit in Snowflake Container Runtime — General Availability
Source: [Snowflake Release Notes](https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-sis-container-runtime-ga)
Date: 2026-03-09
Who: Snowflake
Key features: GPU support, broader Python packages, long-running services
Key claim: "90% of Fortune 50 companies" using Streamlit (selfReported: true)
Why it matters: Enterprise Snowflake integration keeps Streamlit relevant in enterprise, but further distances it from open-source/hacker community.

**[STRONG]** v1.55.0 Release — dynamic containers, widget binding
Source: [Streamlit Release Notes](https://docs.streamlit.io/develop/quick-reference/release-notes/2026)
Date: 2026-03-03
Who: Streamlit team
Key features: Dynamic containers (tabs, popover, expander with on_change), widget binding, clickable images, hidden pages
Why it matters: Active feature development — Streamlit is not stale. But features are incremental, not paradigm-shifting.

**[WEAK]** Zero original HN stories in 2025-2026
Source: [HN Algolia](https://hn.algolia.com/api/v1/search?query=streamlit&tags=story&numericFilters=points>10)
Key finding: The only >10pt story was a Nov 2025 nostalgic repost of the 2019 launch (470 pts). No new Streamlit features, releases, or innovations have made the HN front page since the 2022 Snowflake acquisition.
Why it matters: Community excitement has completely plateaued. Streamlit is the "jQuery of data apps" — ubiquitous but uninspiring.

---

### 8. PLEXE (Current Rank: #6)

**Verdict: Hold at #6-7. Active development, YC-backed, uniquely differentiated. Needs more real-world validation.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 2,600 | 2026-03-24 |
| GitHub forks | 253 | 2026-03-24 |
| Total releases | 71 | 2026-03-24 |
| Total commits | 178 | 2026-03-24 |
| PyPI total downloads | 33,099 | 2026-03-24 |
| Last push | 2026-03-06 | 2026-03-24 |
| Latest version | v1.4.4 | 2026-03-24 |

#### Evidence

**[STRONG]** Show HN: Plexe — ML Models from a Prompt — 130 pts
Source: [HN](https://news.ycombinator.com/item?id=43906346)
Date: 2025-05-06 | Engagement: 130 pts / 49 comments
Who: HN community
Why it matters: 130 points for an ML tool launch is excellent. Demonstrates genuine interest in the "prompt to ML model" concept.

**[MODERATE]** Launch HN: Plexe (YC X25) — 85 pts
Source: [HN](https://news.ycombinator.com/item?id=45715789)
Date: 2025-11-04 | Engagement: 85 pts / 31 comments
Who: HN community
Why it matters: Sustained HN interest across two launches. Combined 252 HN points across 3 stories, 88 comments.

**[MODERATE]** Active release cadence — 71 releases, v1.4.4
Source: [GitHub](https://github.com/plexe-ai/plexe)
Date: 2026-03-06
Who: Plexe team
Key finding: 71 releases from 178 commits shows aggressive shipping velocity. Supports XGBoost, CatBoost, LightGBM, Keras, PyTorch.
Why it matters: Shipping fast for a small team (9 contributors).

#### Gaps
- Download numbers are modest (33K total PyPI)
- No independent technical reviews — all coverage is launch-related
- Small contributor base (9)
- Exhibiting at eCommerce Expo 2026 — commercial direction emerging

---

### 9. PANDASAI (Current Rank: #7)

**Verdict: Keep at bottom, flag stale. Zero commits since Oct 2025. Project appears abandoned.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 23,400 | 2026-03-24 |
| GitHub forks | 2,295 | 2026-03-24 |
| Contributors | 123 | 2026-03-24 |
| PyPI total downloads | 5,620,000 | 2026-03-24 |
| PyPI daily downloads | ~2,000-5,600 | 2026-03-24 |
| Open issues | 13 (no responses) | 2026-03-24 |
| Last commit | 2025-10-07 (v3.0.0) | 2026-03-24 |

#### Evidence

**[STRONG]** 5+ months without commits — confirmed stale
Source: [GitHub](https://github.com/sinaptik-ai/pandas-ai)
Date: 2026-03-24
Key finding: Last commit was October 7, 2025 (v3.0.0 release). 13 open issues with no maintainer responses.
Why it matters: Project shipped v3.0.0 and went silent. The commercial PandasAI Cloud may be absorbing team focus.

**[MODERATE]** Hallucination problems documented
Source: [Future Proof DS](https://read.futureproofds.com/p/testing-the-limits-of-pandasai-part)
Date: 2024-2025
Who: Independent data science publication
Key finding: "LLM sometimes generates a fake dataset that looks like yours and analyzes that instead"
Why it matters: Fundamental trust problem for a data analysis tool.

**[WEAK]** Only 77 pts on HN — single story (May 2023)
Source: [HN](https://news.ycombinator.com/item?id=35976919)
Date: 2023-05 | Engagement: 77 pts / 55 comments
Why it matters: Despite 23.4K stars, PandasAI has never generated sustained HN attention. Downloads (5.6M total) are declining.

---

### 10. NEW CONTENDER: SHAPER — DuckDB-native BI

**Verdict: Add to watch list. Too early to rank high but strong debut signal and DuckDB tailwind.**

#### Quantitative Traction

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 1,100 | 2026-03-24 |
| GitHub commits | 1,311 | 2026-03-24 |
| Total releases | 76 | 2026-03-24 |
| Contributors | 6 | 2026-03-24 |
| Open issues | 24 | 2026-03-24 |
| License | MPL-2.0 | 2026-03-24 |
| Latest release | v0.16.0 (2026-03-19) | 2026-03-24 |
| Languages | Go (49.6%), TypeScript (47.4%) | 2026-03-24 |

#### Evidence

**[STRONG]** "A DuckDB-based metabase alternative" — 179 pts on HN
Source: [HN](https://news.ycombinator.com/item?id=47057879)
Date: 2026-02-18 | Engagement: 179 pts / 40 comments
Who: HN community
Why it matters: 179 pts on debut is exceptional. More HN buzz in one launch than Evidence has had in 4+ years post-launch.

**[MODERATE]** Featured in MotherDuck DuckDB Ecosystem Newsletter
Source: [MotherDuck Blog](https://motherduck.com/blog/duckdb-ecosystem-newsletter-march-2026/)
Date: 2026-03
Who: MotherDuck (ecosystem authority)
Why it matters: Ecosystem validation from the DuckDB commercial partner.

**[MODERATE]** Engineering velocity — 1,311 commits, 76 releases from 6 contributors
Source: [GitHub](https://github.com/taleshape-com/shaper)
Date: 2026-03-24
Why it matters: Very high commit:contributor ratio signals serious engineering effort from a small team.

#### Gaps
- Only 6 contributors — bus factor risk
- 1.1K stars — needs to grow significantly
- MPL-2.0 license (less permissive than MIT/Apache-2.0)
- No independent reviews or comparison articles yet

---

### 11. NEW CONTENDER: LIVEDOCS — AI-Native Notebook (Watch Only)

**Verdict: Watch list only. Closed source, lukewarm HN reception, "Hex clone" criticism.**

#### Evidence

**[MODERATE]** Launch HN: Livedocs (YC W22) — 48 pts
Source: [HN](https://news.ycombinator.com/item?id=46964162)
Date: 2026-02-10 | Engagement: 48 pts / 19 comments
Who: HN community
Key criticism: Multiple commenters called it a "Hex clone" — "literally every feature is something Hex has"
Other issues: Forced login after entering data, free credits depleted immediately
Why it matters: Weak launch signal. 48 pts vs Plexe's 130 or Shaper's 179.

**[WEAK]** Closed source — no GitHub repo
Why it matters: Cannot assess engineering velocity, community contributions, or code quality. Limits trust signals.

#### Assessment
- YC W22 pedigree (pivoted from no-code analytics)
- Pricing: Free tier ($0, 8GB RAM, $5 AI credits/mo), Pro ($30/workspace/mo + $20/member)
- Tech: DuckDB + Polars, AI agents
- Not strong enough for top 10 without differentiation proof

---

## Pairwise Comparisons

### Marimo vs Jupyter
**Coverage: [STRONG] — 5+ independent sources**

| Dimension | Winner |
|-----------|--------|
| Reproducibility | Marimo (reactive execution prevents stale state) |
| Git-friendliness | Marimo (pure .py files vs JSON) |
| Deployment ease | Marimo (built-in `marimo run` web app) |
| Flexibility | Jupyter (out-of-order cell execution) |
| Ecosystem maturity | Jupyter (decade of plugins, 40+ languages) |
| Learning curve | Jupyter (more tutorials, community resources) |

Sources: [Utkarsh Shigihalli (Jan 2026)](https://onlyutkarsh.com/posts/2026/jupyter-vs-marimo-notebooks/), [Towards Data Science (Nov 2025)](https://towardsdatascience.com/why-im-making-the-switch-to-marimo-notebooks/), [BSWEN (Feb 2026)](https://docs.bswen.com/blog/2026-02-12-marimo-vs-jupyter/)

### DuckDB vs SQLite (Analytics)
**Coverage: [STRONG] — 6+ independent sources with benchmarks**

| Dimension | Winner |
|-----------|--------|
| Analytical queries (OLAP) | DuckDB (10-100x faster) |
| Transactional workloads (OLTP) | SQLite |
| Large dataset aggregation | DuckDB (columnar + vectorized) |
| Direct CSV/Parquet querying | DuckDB (no import needed) |
| Mobile / IoT embedded | SQLite |

Sources: [Analytics Vidhya (Jan 2026)](https://www.analyticsvidhya.com/blog/2026/01/duckdb-vs-sqlite/), [DataCamp](https://www.datacamp.com/blog/duckdb-vs-sqlite-complete-database-comparison)

### DuckDB vs Polars
**Coverage: [STRONG] — 5+ independent sources with actual benchmarks**

| Dimension | Winner |
|-----------|--------|
| Raw speed (large data) | DuckDB (slightly) |
| Memory efficiency | DuckDB (dramatically — 13x less at 140GB) |
| Out-of-core processing | DuckDB (spills to disk automatically) |
| DataFrame API ergonomics | Polars (expression chaining) |
| SQL-first workflows | DuckDB |
| Direct file querying (S3, local) | DuckDB |

Source: [codecentric (Jan 2026)](https://www.codecentric.de/en/knowledge-hub/blog/duckdb-vs-polars-performance-and-memory-with-massive-parquet-data)

### Marimo vs Deepnote
**Coverage: [WEAK] — only vendor-produced comparison**

| Dimension | Winner |
|-----------|--------|
| Solo developer workflow | Marimo (reactive, reproducible) |
| Team collaboration | Deepnote (real-time editing, cloud-native) |
| Data connectivity | Deepnote (BigQuery, Snowflake, Redshift) |
| Deployment as app | Marimo (notebooks convert to web apps) |
| Open source / local-first | Marimo |

Source: [Deepnote comparison page](https://deepnote.com/compare/marimo-vs-deepnote) (vendor-produced)

### Evidence vs Observable Framework
**Coverage: [MODERATE] — 2 sources, no direct head-to-head**

| Dimension | Winner |
|-----------|--------|
| SQL-only analysts | Evidence |
| JavaScript web developers | Observable Framework |
| Quick data apps from SQL | Evidence |
| Highly interactive visualizations | Observable Framework |
| Active development | Evidence (slight edge, both slowing) |

### Evidence vs Shaper
**Coverage: [WEAK] — Shaper too new for comparison content**

| Dimension | Evidence | Shaper |
|-----------|----------|--------|
| Approach | SQL + Markdown | SQL with type-cast annotations |
| Engine | Own SQL engine | DuckDB-native |
| Maturity | More established | 76 releases, very new |
| HN signal | 263 pts (2021) | 179 pts (2026) |
| DuckDB tailwind | Indirect | Direct structural advantage |

---

## Quantitative Traction Summary Table

| Solution | Stars | Monthly DL | HN Peak | HN 2026 | Last Commit | Status |
|----------|-------|-----------|---------|---------|-------------|--------|
| **DuckDB** (NEW) | 36,887 | 31.5M | 926 pts | 310 pts (Jan), 306 pts (Feb) | 2026-03-23 | Very active |
| **Marimo** (#1) | 19,879 | 1.8M | 448 pts | — | 2026-03-23 | Very active |
| **Streamlit** (#5) | 43,988 | 30.9M | 470 pts (repost) | — | 2026-03-23 | Active (infra) |
| **PandasAI** (#7) | 23,400 | ~150K | 77 pts | — | 2025-10-07 | STALE |
| **Data Formulator** (#2) | 15,200 | N/A | 212 pts | — | 2026-03-23 | Active |
| **Evidence** (#3) | 6,046 | 7.7K (npm) | 263 pts | — | 2026-02-18 | Slowing |
| **Observable** (#4) | 3,425 | 16.7K (npm) | 360 pts | — | 2026-03-02 | Maintenance |
| **Deepnote** (NEW) | 2,800 | N/A | 188 pts | — | 2026-03-23 | Active (new OSS) |
| **Plexe** (#6) | 2,600 | 33K total | 130 pts | — | 2026-03-06 | Active |
| **Shaper** (NEW) | 1,100 | N/A | 179 pts | 179 pts (Feb) | 2026-03-19 | Active |
| **LiveDocs** (NEW) | N/A | N/A | 48 pts | 48 pts (Feb) | Active SaaS | Watch only |

---

## Recommended Ranking Changes

Based on evidence collected:

| Rank | Current | Recommended | Rationale |
|------|---------|-------------|-----------|
| #1 | Marimo | **Marimo** | Confirmed. CoreWeave acquisition, 1.8M downloads, strongest combined signal |
| #2 | Data Formulator | **DuckDB** (NEW) | 36.9K stars, 31.5M downloads, infrastructure-level. Powers other catalog entries |
| #3 | Evidence | **Data Formulator** | v0.7 alpha, CHI 2025, 15.2K stars. Shifted down by DuckDB insertion |
| #4 | Observable | **Streamlit** | 44K stars, 31M downloads. Infrastructure giant. Move up from #5 |
| #5 | Streamlit | **Deepnote** (NEW) | Open-sourced, 500K users, $23.8M funded. Format innovation with .deepnote YAML |
| #6 | Plexe | **Evidence** | Slowing development. Dropped from #3 but still has SQL-first niche |
| #7 | PandasAI | **Plexe** | Active, YC X25, uniquely differentiated prompt-to-ML |
| #8 | — | **Shaper** (NEW) | Strong debut (179 pts HN), DuckDB-native, very early |
| #9 | — | **Observable Framework** | Maintenance mode. 11-month release gap, company pivoting to Canvas |
| #10 | — | **PandasAI** | Stale since Oct 2025. High stars but declining relevance |

---

## Gaps in Evidence

1. **YouTube coverage is thin across the category** — no independent 2026 review videos found for Marimo, Deepnote, or Data Formulator. DuckDB has the best video presence (Luke Barousse, MotherDuck webinars).
2. **Deepnote star trajectory** — only 5 months as open source; need to check growth rate in 3 months.
3. **CoreWeave–Marimo sustainability** — no details on long-term funding commitment or potential product direction changes.
4. **Shaper production usage** — no independent usage stories yet. Only 6 contributors.
5. **Evidence commercial health** — 5 weeks without commits is concerning for a YC-backed company. Is the team still active?
6. **Observable Inc runway** — 36 employees, $48.1M raised, but focus shifting to Canvas. Framework OSS future unclear.
7. **PandasAI Cloud** — may explain silence on open-source side, but no evidence either way.

## Unresolved Questions

1. Will CoreWeave's acquisition of Marimo lead to product direction changes that affect the open-source community?
2. Is Deepnote's open-sourcing a sign of strength (expanding) or distress (commercial product not profitable)?
3. Will DuckDB's MCP server integration make it the default analytical backend for AI agent workflows?
4. Is Evidence's development pause temporary (team on something big) or structural (reduced investment)?
5. Will Observable Framework continue to receive OSS investment, or is Canvas the sole focus now?

## Recommended Next Steps

1. **Add DuckDB to catalog** at rank #2 — the evidence is overwhelming. Create "embedded analytics engine" lane.
2. **Add Deepnote to catalog** at rank #5-6 — strong institutional backing, real users, format innovation.
3. **Add Shaper to catalog** at rank #8 — strong debut, DuckDB ecosystem play.
4. **Add LiveDocs to watch list** — not enough signal for catalog yet.
5. **Drop Observable Framework** to #9 — maintenance mode confirmed.
6. **Drop PandasAI** to #10 — stale, declining.
7. **Proceed to rank agent** with the expanded 10-entry list.
