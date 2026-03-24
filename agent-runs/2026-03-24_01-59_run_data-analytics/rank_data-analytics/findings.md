# Rank Findings — Data & Analytics

## Scope

Ranked recommendation for the **data-analytics** problem space. 10 solutions assessed: 7 from current catalog (Marimo, Data Formulator, Evidence, Observable Framework, Streamlit, Plexe, PandasAI) plus 3 new additions (DuckDB, Deepnote, Shaper). LiveDocs excluded (closed source, weak signal).

## Date

2026-03-24

## Inputs

- Prior runs referenced: `discover_data-analytics/findings.md`, `deep-dive_data-analytics/findings.md`
- Evidence basis: GitHub metrics, PyPI/npm downloads, HN Algolia stories, independent articles, pairwise comparisons, production usage reports, funding data

---

## Final Ranked List

### #1 — Marimo

**Lane:** Reactive Python notebook — the Jupyter successor

| Signal | Value |
|--------|-------|
| GitHub stars | 19,879 |
| PyPI monthly downloads | 1,814,437 |
| HN peak | 448 pts (launch) + five 65–204 pt stories in 2025 |
| Last commit | 2026-03-23 |
| Contributors | 254 |
| Release cadence | 5 releases in 5 weeks (v0.19.11 → v0.21.0) |

**Why #1:** Marimo has the strongest *combined* signal of any solution in this space. No other tool matches its simultaneous strength across community enthusiasm (sustained multi-story HN presence), development velocity (235 commits/month, 5 releases in 5 weeks), institutional validation (CoreWeave acquisition alongside Weights & Biases), and independent switching stories (Towards Data Science, Oracle A-Team blog). Its reactive execution model solves the reproducibility problem that plagues 36% of Jupyter notebooks, and v0.21.0 directly addressed the two biggest migration objections (matplotlib support, ipynb export).

**Narrow subcase where it's not the best choice:** If your primary workflow is SQL-first analytics on large datasets, DuckDB (#2) is the right starting point — you may not need a notebook at all. If you need real-time team collaboration with non-technical stakeholders, Deepnote (#5) has better collaboration primitives.

---

### #2 — DuckDB

**Lane:** Embedded analytical engine — the SQLite of analytics

| Signal | Value |
|--------|-------|
| GitHub stars | 36,887 |
| PyPI monthly downloads | 31,479,987 |
| HN peak | 926 pts ("The DuckDB Local UI") |
| HN 2026 | 310 pts ("Why DuckDB is my first choice", Jan 2026) |
| Last commit | 2026-03-23 |
| SO adoption growth | +50.7% YoY (1.4% → 3.3%) |
| Enterprise validation | Mode Analytics (2T rows/month), Patreon (50TB), MotherDuck ($133M raised) |

**Why #2:** DuckDB is the single most important addition to this ranking. By raw quantitative signal — 36.9K stars, 31.5M monthly downloads, 926-pt HN story — it exceeds every other entry. It's ranked #2 rather than #1 because it's infrastructure, not a complete workflow tool. You use DuckDB *inside* Marimo, Evidence, Shaper, and dbt. But for the problem of "I need to analyze data," DuckDB alone (with its Local UI or a terminal) is increasingly the answer. The v1.5.0 release added an MCP server, positioning it as the analytical backend for AI agents. Production adoption at companies processing trillions of rows/month (Mode Analytics) puts it beyond any trust question.

**Why not #1:** DuckDB is an engine, not a complete environment. For exploratory data science with visualization, narrative, and deployment, you still need a notebook or BI layer on top. Marimo provides that complete workflow.

**Narrow subcase where it's the best choice:** If you're doing SQL-first analytics, querying CSV/Parquet/S3 directly, building a data pipeline, or need an analytical backend embedded in your application — DuckDB is the unambiguous #1. Use it natively rather than wrapping it in a solution.

---

### #3 — Data Formulator

**Lane:** AI-powered data visualization — natural language to charts

| Signal | Value |
|--------|-------|
| GitHub stars | 15,200 |
| HN peak | 212 pts (Show HN, Oct 2024) |
| Last commit | 2026-03-23 |
| Latest release | v0.7 alpha (2026-03-02) |
| Backer | Microsoft Research |

**Why #3:** Data Formulator occupies a unique lane — AI-assisted visualization creation — that no other tool in this ranking directly competes in. The v0.7 alpha is a significant step: 30 chart types, unified DataAgent, hybrid chat + data thread with lineage, and emerging enterprise features (code signing, sandboxed execution, Azure Blob workspace). CHI 2025 publication validates the approach academically. Microsoft Research backing provides long-term institutional support that open-source community projects can't match.

**Why not higher:** Desktop-only with no deployment or sharing story. Small contributor base (27 vs Marimo's 254). HN follow-up story dropped to 38 pts — initial novelty is fading. No independent head-to-head comparisons exist because the tool is too niche for mainstream reviewers.

**Narrow subcase where it's the best choice:** If your primary task is creating complex, iterative data visualizations from messy data — and you want AI to handle both the data transformation and the chart construction — Data Formulator is the best tool available. Nothing else combines AI data wrangling with visualization authoring this tightly.

---

### #4 — Streamlit

**Lane:** Data app deployment — Python scripts to shareable web apps

| Signal | Value |
|--------|-------|
| GitHub stars | 43,988 |
| PyPI monthly downloads | 30,885,941 |
| Contributors | 319 |
| Last commit | 2026-03-23 |
| Enterprise claim | "90% of Fortune 50" (self-reported) |
| HN 2025–2026 | Zero original stories (only a nostalgic 2019 repost) |

**Why #4:** Streamlit's numbers are unkillable — 44K stars and 31M monthly downloads make it the most-used tool in this ranking by raw adoption. Snowflake Container Runtime GA (March 2026) with GPU support keeps it relevant in enterprise. v1.55.0 shipped meaningful features (dynamic containers, widget binding). It is infrastructure-level tooling for Python data app deployment, the way jQuery was for web development.

**Why not higher:** Zero HN front-page stories since the 2022 Snowflake acquisition. Community enthusiasm has completely plateaued. No one is *excited* about Streamlit — they use it because it works and everyone knows it. The Snowflake acquisition pulled it toward enterprise and away from the open-source/hacker community that drives innovation signal. Moved up from previous #5 because raw adoption and active development still outweigh declining enthusiasm.

**Narrow subcase where it's the best choice:** If you need to deploy a Python data app quickly that non-technical stakeholders will use, and you want maximum community support (tutorials, Stack Overflow answers, component library), Streamlit remains the default choice. Don't overthink it.

---

### #5 — Deepnote *(NEW)*

**Lane:** Collaborative cloud notebook — Jupyter replacement for teams

| Signal | Value |
|--------|-------|
| GitHub stars | 2,800 (open-sourced Nov 2025) |
| HN signal | 188 pts / 171 comments (open-source announcement) |
| Users claimed | 500K+ (self-reported) |
| Enterprise customers | Ramp, SoundCloud, Gusto, Webflow, Estee Lauder |
| G2 rating | 4.5/5 (378 reviews) |
| Funding | $23.8M (Accel, Index Ventures) |
| License | Apache-2.0 |

**Why #5:** Deepnote brings something no other open-source notebook has: proven enterprise adoption at scale (500K claimed users, 378 G2 reviews, named enterprise customers) combined with a freshly Apache-2.0-licensed codebase. The .deepnote YAML format is a genuine innovation — 23+ block types, clean git diffs, lossless ipynb conversion. Real-time collaboration is built in, not bolted on. The 188-pt / 171-comment HN thread shows extraordinary engagement, even if sentiment was polarizing.

**Why not higher:** Only 5 months as open source — star trajectory (2.8K) is too early to evaluate. HN community explicitly preferred Marimo in the open-source announcement thread. G2 reviewers flag bugs, freezes, and performance lag on large datasets. The "Jupyter successor" positioning was called presumptuous and the comparison graphs were criticized as manipulative. Key question: is open-sourcing a sign of strength (expanding reach) or distress (commercial product not profitable)?

**Narrow subcase where it's the best choice:** If your team needs real-time collaborative notebooks with enterprise data connectors (BigQuery, Snowflake, Redshift) and you want a cloud-native experience that non-Python team members can also use (R, SQL blocks), Deepnote is the strongest option.

---

### #6 — Evidence

**Lane:** SQL-first BI — code-driven dashboards and reports

| Signal | Value |
|--------|-------|
| GitHub stars | 6,046 |
| npm monthly downloads | ~7,700 |
| HN peak | 263 pts (2021 launch) |
| HN since launch | Zero stories >10 pts in 4+ years |
| Last commit | 2026-02-18 (5+ weeks ago) |
| Contributors | 76 |

**Why #6:** Evidence carved out a clear and defensible niche: SQL + Markdown = BI reports with version control. For SQL-literate analysts who want git-friendly, code-reviewed dashboards without learning a BI tool's GUI, Evidence remains the most mature option. The January 2026 feature additions (PostHog connector, Snowflake incremental syncs, dimension_grid) show the product is still evolving.

**Why not higher:** The evidence for concern is significant. Zero HN stories since the 2021 launch — the worst sustained HN trajectory in the entire category. 5+ weeks without a commit is alarming for a VC-backed company. npm downloads (7.7K/month) are low. Shaper (#8) launched with more HN buzz in one day (179 pts) than Evidence has generated in 4+ years post-launch. The DuckDB-native Shaper has a structural advantage if DuckDB continues to dominate. Dropped from previous #3.

**Narrow subcase where it's the best choice:** If you are a SQL analyst producing recurring reports or internal dashboards that need to be version-controlled, reviewed in PRs, and deployed as static sites — and you don't want to learn JavaScript or a BI GUI — Evidence is still the right tool.

---

### #7 — Plexe

**Lane:** Prompt-to-ML-model — natural language to trained models

| Signal | Value |
|--------|-------|
| GitHub stars | 2,600 |
| PyPI total downloads | 33,099 |
| HN stories | 130 pts + 85 pts + 37 pts (3 stories, 252 pts total) |
| Last commit | 2026-03-06 |
| Releases | 71 (high velocity from 9 contributors) |
| Backer | YC X25 |

**Why #7:** Plexe occupies a unique lane that no other tool in this ranking touches: describe what you want a model to do in natural language, and it builds, trains, and returns a working ML model (XGBoost, CatBoost, LightGBM, Keras, PyTorch). The concept has real appeal — 252 combined HN points across 3 stories with 88 comments. YC X25 backing and 71 releases from 178 commits shows aggressive shipping velocity.

**Why not higher:** Download numbers are modest (33K total PyPI). No independent technical reviews exist — all coverage is launch-related. Small contributor base (9). The tool needs real-world validation stories: who built what production model with Plexe, and did it hold up? The eCommerce Expo 2026 exhibit suggests a commercial pivot that may affect the open-source trajectory.

**Narrow subcase where it's the best choice:** If you're a developer or analyst who needs a trained ML model for a specific task (classification, regression, recommendation) and doesn't want to learn ML engineering — Plexe is the only tool that lets you go from problem description to deployable model in minutes.

---

### #8 — Shaper *(NEW)*

**Lane:** DuckDB-native BI dashboards — SQL-only, no frontend framework

| Signal | Value |
|--------|-------|
| GitHub stars | 1,100 |
| HN debut | 179 pts / 40 comments (Feb 2026) |
| Commits | 1,311 |
| Releases | 76 |
| Last release | v0.16.0 (2026-03-19) |
| Contributors | 6 |

**Why #8:** Shaper's 179-pt HN debut is the strongest launch signal of any new entrant. The concept — SQL-only BI dashboards where chart types are SQL type-cast annotations (`::BARCHART_STACKED`) — is radically simple. Being DuckDB-native gives it a structural tailwind as DuckDB becomes the default analytical engine. MotherDuck featured it in their March 2026 ecosystem newsletter. 1,311 commits from 6 contributors signals serious engineering effort.

**Why not higher:** Brand new (launched Feb 2026). Only 1.1K stars and 6 contributors — significant bus factor risk. MPL-2.0 license is less permissive than MIT/Apache-2.0. Zero independent reviews or production usage stories. Needs 3–6 months of traction data before ranking higher.

**Narrow subcase where it's the best choice:** If you want SQL-only BI dashboards with zero frontend code, and your data already lives in DuckDB-accessible sources (Postgres, S3, Google Sheets), Shaper is the simplest path. It's what Evidence would be if built today on DuckDB.

---

### #9 — Observable Framework

**Lane:** JavaScript data visualization framework — static sites with reactive data loaders

| Signal | Value |
|--------|-------|
| GitHub stars | 3,425 |
| npm monthly downloads | ~16,700 |
| HN peak | 360 pts (Simon Willison, Mar 2024) |
| HN 2025–2026 | Zero stories |
| Last meaningful release | v1.13.3 (April 2025) — 11-month gap to v1.13.4 |
| Company status | 36 employees, $48.1M raised, pivoting to commercial Canvas |

**Why #9:** Observable Framework was built on Mike Bostock's (D3.js creator) reputation and had a strong 360-pt HN endorsement from Simon Willison. The technical approach — data loaders in any language feeding reactive JavaScript visualizations deployed as static sites — is elegant. npm downloads (16.7K/month) show ongoing usage.

**Why this low:** The evidence for deprioritization is clear. An 11-month release gap (April 2025 → March 2026) with only a trivial patch (trusted publishing, typo fix) confirms maintenance mode. Zero HN stories in 2025 or 2026. Observable Inc is directing all engineering investment into the commercial Canvas product (SQL nodes with AI, dashboard builder, mobile-responsive layouts). The open-source Framework is effectively a finished product receiving security patches. Dropped from previous #4.

**Narrow subcase where it's still the best choice:** If you're a JavaScript developer building highly interactive, D3-powered data visualizations deployed as static sites, Observable Framework's data-loader architecture is still the most elegant option. But only if you're comfortable with a tool that won't receive new features.

---

### #10 — PandasAI

**Lane:** Natural language queries on DataFrames

| Signal | Value |
|--------|-------|
| GitHub stars | 23,400 |
| PyPI total downloads | 5,620,000 |
| HN peak | 77 pts (May 2023, only story ever) |
| Last commit | 2025-10-07 (v3.0.0) — 5+ months stale |
| Open issues | 13 (no responses) |

**Why #10:** PandasAI's 23.4K stars create an illusion of health that the underlying data contradicts. No commits in 5+ months. No maintainer responses to open issues. A single HN story ever (77 pts, 2023). Documented hallucination problems: "LLM sometimes generates a fake dataset that looks like yours and analyzes that instead." Downloads are declining. The project shipped v3.0.0 in October 2025 and went silent — the commercial PandasAI Cloud may have absorbed team focus.

**Why still listed:** 23.4K stars and 5.6M total downloads mean people still discover and try it. Removing it entirely would leave a gap for users searching for natural-language DataFrame tools. The ranking serves as a warning: high stars ≠ active project.

**Recommendation:** Flag as stale. If no commits appear by mid-2026, archive from the ranking.

---

## Lanes Summary

The data analytics space is not one problem — it's at least five distinct lanes. The right tool depends on which lane you're in:

| Lane | Best Choice | Runner-up |
|------|-------------|-----------|
| **Reactive Python notebook** | Marimo (#1) | Deepnote (#5) |
| **Embedded analytics engine** | DuckDB (#2) | *(use the platform natively)* |
| **AI-powered data visualization** | Data Formulator (#3) | *(no close competitor)* |
| **Data app deployment** | Streamlit (#4) | Marimo (#1) |
| **SQL-first BI dashboards** | Evidence (#6) | Shaper (#8) |
| **Prompt-to-ML-model** | Plexe (#7) | *(no close competitor)* |
| **JS data visualization framework** | Observable Framework (#9) | *(use D3 directly)* |
| **Natural language on DataFrames** | *(avoid — hallucination risk)* | PandasAI (#10) |

---

## What Would Change This Ranking

| Change | Impact |
|--------|--------|
| **Deepnote crosses 10K stars in 6 months** | Moves to #3–4. Would signal that HN polarization was a minority view and enterprise users are adopting the OSS version. |
| **CoreWeave restricts Marimo's license or direction** | Could drop Marimo to #3–4 and elevate Deepnote or a new fork. |
| **Shaper reaches 5K stars with production usage stories** | Moves to #5–6, potentially displacing Evidence in the SQL-first BI lane. |
| **Evidence ships a major release or DuckDB-native mode** | Could recover to #4–5 if development pace resumes. |
| **Observable Framework gets a major release (not just patches)** | Would move to #6–7. Currently unlikely given Canvas focus. |
| **PandasAI resumes active development with hallucination fixes** | Could recover to #7–8. Currently unlikely. |
| **DuckDB's MCP server becomes the default AI-agent analytics backend** | Strengthens #2 position. Could argue for #1 if "data analytics" shifts to mean "AI agent does the analysis." |
| **Data Formulator ships a web/cloud version** | Moves to #2. Desktop-only limitation is the main drag on its ranking. |
| **A new tool combines Marimo's reactivity with DuckDB's engine and an AI agent** | Could displace both. LiveDocs is attempting this but hasn't proven it yet. |

---

## Quotes

> "DuckDB is Eating the Data World" — Medium headline, Mar 2026. Reflects consensus that DuckDB has become infrastructure-level.

> "36% of 10M Jupyter notebooks on GitHub not reproducible. Marimo guarantees code/outputs/state consistency via reactive execution." — Parul Pandey, Towards Data Science, Nov 2025.

> "Mode processes 50 million queries, 250 terabytes of data, 2 trillion rows per month on DuckDB." — MotherDuck blog, 2025.

> "LLM sometimes generates a fake dataset that looks like yours and analyzes that instead." — Future Proof DS, on PandasAI's hallucination problem.

> "We spent a year exploring how to blend agent mode with interactions to allow you more easily 'vibe' with your data." — Data Formulator team, HN Nov 2025.

---

## Recommended Next Step

1. **Update the catalog** with the new 10-entry ranking. Add DuckDB, Deepnote, and Shaper. Reorder all entries.
2. **Flag PandasAI as stale** in the catalog UI. Set a mid-2026 review date for potential removal.
3. **Create lane labels** in the catalog so users can filter by workflow type (notebook, engine, BI, deployment, AI viz).
4. **Schedule re-rank in 90 days** (June 2026) to reassess Deepnote star trajectory, Shaper growth, Evidence development pace, and PandasAI status.
