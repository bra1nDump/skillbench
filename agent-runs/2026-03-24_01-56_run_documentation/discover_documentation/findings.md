# Discover Findings — Documentation

## Scope

Full discovery sweep of the **documentation** problem space: OSS docs frameworks, API documentation generators, SaaS platforms, documentation automation, and the emerging AI-docs / LLM-ready docs subcategory. Goal: find all serious contenders, new signals, consolidation moves, and gaps in the current catalog.

## Date

2026-03-24T02:00Z

## Inputs

### Search queries used

**HN Algolia (9 queries):**
- `documentation framework 2026` (story, points>10)
- `fumadocs OR starlight OR docusaurus OR mintlify` (story, points>10)
- `show hn documentation` (story, points>10)
- `API documentation generator` (story, points>10)
- `Scalar API` (story, points>10)
- `Promptless documentation` (story)
- `DocsGPT` (story, points>5)
- `llms.txt` (story)
- `documentation AI generated` (story, points>5, by date)

**GitHub API:**
- Individual repo stats for 18+ repos
- Search: `documentation framework created:>2025-01-01 stars:>500`
- Search: `documentation tool created:>2025-06-01 stars:>100`

**npm API:**
- Weekly downloads for: fumadocs-core, @astrojs/starlight, @docusaurus/core, vitepress, nextra, @scalar/api-reference, @mintlify/cli, mintlify, @redocly/cli, swagger-ui, swagger-ui-react, @markdoc/markdoc, docsify-cli

**Web:**
- GitHub Trending (monthly)
- skills.sh registry
- mcpservers.org registry
- Glasskube/Distr Docusaurus→Starlight migration blog post

---

## Findings

### 1. GitHub Stars & npm Downloads Snapshot (2026-03-24)

| Solution | GitHub Stars | Open Issues | npm Weekly DL | Category |
|---|---|---|---|---|
| **Docusaurus** | 64,234 | 356 | 414,355 | OSS Framework |
| **Docsify** | 31,078 | 112 | 28,087 (cli) | OSS Framework |
| **Swagger UI** | 28,704 | 1,377 | 323,167 (ui+react) | API Docs |
| **MkDocs Material** | 26,370 | 1 | n/a (Python) | OSS Framework |
| **Redoc** | 25,570 | 437 | — | API Docs |
| **DocsGPT** | 17,787 | 66 | — | AI Docs |
| **VitePress** | 17,376 | 487 | 217,954 | OSS Framework |
| **JSDoc** | 15,427 | 452 | — | Code Docs |
| **Scalar** | 14,377 | 145 | 75,983 | API Docs |
| **Nextra** | 13,697 | 313 | 67,340 | OSS Framework |
| **Fumadocs** | 11,279 | 4 | 202,229 | OSS Framework |
| **Starlight** | 8,160 | 28 | 120,144 | OSS Framework |
| **TypeDoc** | 8,383 | 10 | — | Code Docs |
| **Markdoc** | 7,935 | 29 | 122,053 | OSS Framework |
| **Fern** | 3,555 | 344 | — | API Docs |
| **Redocly CLI** | 1,419 | 181 | 525,446 | API Docs |
| **Mintlify** | — (closed source) | — | 45,917 (cli) | SaaS |

### 2. Key Signals

#### A. Fumadocs continues its dominance trajectory
- **11,279 stars** (up from ~11K in prior scan), only **4 open issues** — best maintenance ratio in category
- **202K npm/week** — now nearly equal to VitePress (218K) and well past Starlight (120K)
- Fumadocs MCP server appeared on HN (Feb 2026) — ecosystem expanding into AI tooling
- **Why this matters:** Fumadocs is pulling away on the quality-maintenance axis. 4 open issues for 11K stars is extraordinary.

#### B. Docusaurus losing momentum but still dominant by volume
- **64K stars, 414K npm/week** — still the most-downloaded by far
- **356 open issues** — technical debt accumulating
- v4.0 still nowhere (no HN stories, no official announcements found)
- Glasskube/Distr publicly migrated from Docusaurus to Starlight (58 points on HN, May 2025), citing: 20s+ dev server startup, dependency hell (React + Infima + Docusaurus), lack of Tailwind support
- **Why this matters:** Docusaurus coasts on ecosystem size, but the migration stories are becoming a pattern. Each public migration gives permission for the next.

#### C. VitePress is a quiet giant — catalog gap
- **17,376 stars, 218K npm/week** — larger than Fumadocs by both metrics
- Not currently ranked in the catalog
- Vue ecosystem's default docs solution (used by Vue, Vite, Vitest, Pinia, VueUse)
- **NEW CONTENDER ALERT:** VitePress should be ranked. It's the #2 or #3 framework by downloads and has a massive community.

#### D. Scalar surging in API docs
- **14,377 stars** (was ~10K range), **145 open issues**
- 75K npm/week for @scalar/api-reference
- 225 points on HN (Show HN post)
- Interactive API docs from OpenAPI specs — directly competing with Swagger UI and Redoc
- **Why this matters:** Scalar is the modern API docs winner. Better DX than Swagger UI, actively maintained vs Redoc's stagnation (437 open issues).

#### E. Redocly CLI has stealth npm dominance
- **525K npm/week** for @redocly/cli — highest in the entire category
- Only 1,419 GitHub stars — heavily enterprise/CI-pipeline driven
- **Why this matters:** Redocly's CLI is the most-installed tool in the category by raw npm numbers, but GitHub stars underrepresent its actual usage because it's a CI linting/bundling tool, not a UI framework.

#### F. Mintlify acquires Helicone (Mar 3, 2026) — confirmed
- HN coverage was minimal (2-5 points), but the acquisition signals Mintlify expanding beyond docs into LLM observability
- Mintlify CLI: 46K npm/week — modest but growing
- **Why this matters:** Mintlify is building a docs+AI platform play, not just a docs SaaS.

#### G. Docsify — catalog gap
- **31,078 stars** — #2 in category by star count after Docusaurus
- Not currently ranked in the catalog
- 112 open issues, 28K npm/week (cli only — Docsify is client-side rendered)
- **NEW CONTENDER ALERT:** Docsify deserves at minimum an honorable mention. Zero-build, client-side rendering approach has a distinct niche.

#### H. MkDocs Material — surprisingly alive
- **26,370 stars, only 1 open issue** — the catalog said "entered maintenance mode" but this looks actively maintained
- Python ecosystem's dominant docs tool
- **Why this matters:** The "maintenance mode" assessment may need revisiting. 1 open issue is remarkable.

#### I. Markdoc (Stripe) — quiet but significant
- **7,935 stars, 122K npm/week** — higher npm downloads than Starlight
- Used by Stripe for their docs (the gold standard for docs UX)
- Not currently ranked in the catalog
- **NEW CONTENDER ALERT:** Markdoc should be evaluated. It's a content authoring framework, not a full docs site, but its npm usage is substantial and Stripe's backing gives it credibility.

### 3. Emerging AI Documentation Subcategory

| Tool | Stars | Signal | Why It Matters |
|---|---|---|---|
| **DocsGPT** | 17,787 | 256 pts HN Show | Open-source docs assistant — chat with your docs. Mature (3yr old). |
| **Context7 MCP** | — | mcpservers.org official | Pulls up-to-date library docs into AI coding sessions. Direct workflow integration. |
| **Microsoft Docs MCP** | 1,488 | Created Jun 2025 | Official MS Learn MCP server — enterprise signal for docs-in-agent-workflows. |
| **Promptless** | — | 107 pts HN (YC W25) | Auto-updates customer-facing docs from PRs/tickets. True docs automation. |
| **Frigade AI** | — | 69 pts HN | AI agent that auto-generates product docs & guides users in-app. |
| **AutoDocs (Sita)** | 194 | Created Sep 2025 | Generates/maintains codebase docs + dependency-aware search for AI tools. |
| **CodeWiki** | 807 | Created Jun 2025 | Repo-level documentation generation across multilingual codebases. |
| **Hover** | 76 | 58 pts HN | Chrome extension: AI-generated hover docs for any webpage. Novel UX. |
| **llms.txt** | — | 206 pts HN | Emerging standard for LLM-friendly documentation format. 0.2% adoption rate. |
| **Docucod** | — | 7 pts HN | Auto-generates static docs sites from repos with diagrams. |

### 4. Consolidation Tracker

| Event | Date | Impact |
|---|---|---|
| Mintlify acquires Helicone | Mar 2026 | Mintlify expanding into AI/LLM observability |
| Postman acquires Fern | Jan 2026 | API docs consolidation — Fern's OSS future unclear |
| llms.txt standard emerging | Sep 2024→ | New documentation format for AI consumption, slow adoption |

### 5. Catalog Gaps Identified

1. **VitePress** — 17K stars, 218K npm/week. Not ranked. Should be #3-4 in OSS frameworks.
2. **Docsify** — 31K stars. Not ranked. Distinct zero-build niche.
3. **Markdoc** — 8K stars, 122K npm/week. Not ranked. Stripe-backed content framework.
4. **Scalar** — 14K stars. Currently ranked but may be underranked — should be #1-2 in API docs subcategory given momentum vs Swagger UI stagnation.
5. **DocsGPT** — 18K stars. Not in catalog. The leading open-source AI docs assistant.
6. **MkDocs Material** — 26K stars, 1 open issue. Catalog says "maintenance mode" — evidence says otherwise.

### 6. Meta Shift Assessment

**The docs category is splitting into three distinct waves:**

1. **Wave 1 (Mature/Declining):** Docusaurus, Swagger UI, Redoc, JSDoc. High usage, stalling innovation, accumulating issues.
2. **Wave 2 (Growth/Competing):** Fumadocs, Starlight, VitePress, Scalar, Nextra. Modern DX, active development, eating Wave 1's share.
3. **Wave 3 (Emerging/AI-Native):** Promptless, DocsGPT, Context7, AutoDocs, CodeWiki, llms.txt. AI-generated and AI-consumed documentation. This wave will reshape the category.

The meta is shifting from "which framework should I use to write docs" to "how do I keep docs updated automatically and make them consumable by AI agents." Promptless (YC W25) and DocsGPT are the early leaders here.

---

## Quotes

> "Docusaurus took forever to start the initial development server" — Distr team migration blog, 58 pts HN (May 2025)
> https://distr.sh/blog/distr-docs/

> "Starlight depends solely on Astro (from the same development team), avoiding the natural update hurdle" — same source

> "I crawled 1,500 sites: 30% block AI bots, 0.2% use llms.txt" — HN (Jan 2026)
> https://websiteaiscore.com/blog/case-study-1500-websites-ai-readability-audit

> DocsGPT: "open-source documentation assistant, fully aware of libraries" — Show HN, 256 pts (Feb 2023)
> https://github.com/arc53/docsgpt

> Promptless: "proactively updates docs while you ship software" — Launch HN, 107 pts (Feb 2025)
> https://gopromptless.ai

---

## Recommended Next Step

### Deep-dive candidates (priority order):

1. **VitePress** — Gap fill. Needs full evaluation for ranking. 17K stars, 218K npm/week — too big to ignore.
2. **Scalar** — Momentum check. 14K stars and growing fast. May need to be re-ranked higher in API docs.
3. **Fumadocs** — Verify 3x YoY growth claim, check roadmap for AI features.
4. **DocsGPT** — Evaluate for AI docs subcategory ranking. 18K stars.
5. **Promptless** — YC W25 company, docs automation leader. Worth a product deep-dive.
6. **MkDocs Material** — Verify if "maintenance mode" assessment is still accurate (1 open issue contradicts it).
7. **Markdoc** — Evaluate Stripe's framework for catalog inclusion.

### Ranking adjustments to consider:

- Add VitePress (#3-4 in OSS frameworks)
- Add Docsify (honorable mention or bottom of OSS frameworks)
- Add Scalar (promote in API docs)
- Add DocsGPT (AI docs subcategory)
- Re-evaluate MkDocs Material status
- Consider Markdoc for catalog inclusion
