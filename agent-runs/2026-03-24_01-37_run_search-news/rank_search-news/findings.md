# Rank Findings — Search & News

## Scope

Produce a ranked recommendation for the **search-news** problem space: tools and APIs that give AI agents the ability to search the web, retrieve pages, and synthesize current information.

## Date

2026-03-24T03:00Z

## Inputs

- `discover_search-news/findings.md` — 22 web searches, 12 HN queries, 8 GitHub checks
- `deep-dive_search-news/findings.md` — 6 parallel research agents, quantitative traction table, independent benchmarks
- AIMultiple 2026 Agentic Search Benchmark (100-query, GPT-5.2-judged)
- Scrapeway bi-weekly scraping benchmark (2026-03-20)
- ScrapeOps independent review
- npm, PyPI, and GitHub public stats

---

## Final Ranking

### #1 — Brave Search API

**Best for: General web search in AI agent workflows**

| Signal | Value | Source |
|--------|-------|--------|
| AIMultiple Benchmark | #1 overall, score 14.89 | Independent |
| Latency | 669ms (fastest tested) | Independent |
| Price | $5/1K requests | Official |
| npm MCP weekly | 14,647 | npm registry |
| Structural moat | Only independent western search index after Bing API shutdown (Aug 2025) | Multiple |

**Why #1:**
Brave wins on the metric that matters most for search-news: returning accurate, current results fast and cheaply. The AIMultiple benchmark — the only independent multi-tool evaluation — ranks it first. After Microsoft shut down the Bing Search API, Brave is one of only three remaining western-scale search indexes (alongside Google and Yandex), giving it a structural moat no wrapper API can replicate.

The Feb 2026 launches (Place Search API with 200M+ POIs, LLM Context API powering 22M answers/day internally) show active investment in the agent use case.

**Weaknesses:**
- Modest community traction (819 MCP stars vs Firecrawl's 5,834)
- No scraping/extraction capability — search only
- HN presence is low (peak 95 pts, recent posts 11-14 pts)

**Subcase:** If your agent needs **local/place search** (restaurants, businesses, POIs), Brave is the clear and only choice via Place Search API.

---

### #2 — Firecrawl

**Best for: Web scraping, page extraction, and structured data retrieval**

| Signal | Value | Source |
|--------|-------|--------|
| GitHub stars | 96,977 | GitHub |
| Combined weekly downloads | ~1.07M (npm 251K + PyPI 821K) | npm + PyPI |
| MCP server stars | 5,834 (highest in category) | GitHub |
| AIMultiple Benchmark | #2 overall, score 14.58 | Independent |
| Scrapeway success rate | 67.2% (#3 of 9) | Independent |
| Release cadence | 5 major releases in 5 months | GitHub |

**Why #2:**
Firecrawl dominates the extraction/scraping lane. It has the highest GitHub stars (97K), the highest MCP server adoption (5,834 stars), and over 1M weekly downloads combined. The FIRE-1 autonomous agent (clicks, logins, pagination) and Spark model family (50% recall vs competitors' 15-37%) show it's evolving from a scraper into an autonomous web interaction layer.

AIMultiple ranks it #2 for agentic search. ScrapeOps rates it #1 AI scraping tool (10/10). The Scrapeway benchmark is more honest — 67.2% success, beaten by Scrapfly (99%) and WebScrapingAPI (86%) on raw scraping — but Firecrawl's AI-native extraction features (markdown conversion, structured outputs, batch crawling) are unmatched.

**Weaknesses:**
- Not a search engine — needs a search API upstream (Brave, Exa, etc.)
- Anti-bot handling fails on 5/6 protected sites (ScrapeOps)
- HN traction is weak (max 35 pts) despite massive star count

**Subcase:** If your agent needs to **crawl entire sites**, **extract structured data from pages**, or **navigate behind logins**, Firecrawl is the only serious choice.

---

### #3 — Exa

**Best for: Semantic search, knowledge retrieval, and deep research**

| Signal | Value | Source |
|--------|-------|--------|
| HN traction | 412 pts (best in category) | HN |
| Funding | $85M Series B at $700M valuation | TechFundingNews |
| PyPI weekly downloads | 646,826 | PyPI |
| MCP server stars | 4,078 | GitHub |
| AIMultiple Benchmark | #3 overall, score 14.39 | Independent |

**Why #3:**
Exa has the strongest developer community signal (412 HN points) and the best funding ($85M from Benchmark, NVIDIA). Its neural/semantic search finds conceptually related content that keyword search misses — a genuine differentiator for research-heavy agents.

The Mar 2026 Exa Deep launch adds two tiers of deep research ($12-15/1K) with structured JSON and field-level citations, putting it in direct competition with Perplexity Sonar and Parallel Task API. Exa-published benchmarks show consistent advantages over Tavily (WebWalker 81% vs 71%, FreshQA 71.6% vs 67.4%, p95 latency 1.4-1.7s vs 3.8-4.5s), though these need independent verification.

**Weaknesses:**
- MCP server implementation is weak — only 23% web search success in AIMultiple Browser MCP benchmark (vs Firecrawl 83%, Tavily 38%)
- Self-published benchmarks lack independent validation
- Smaller download base than Firecrawl or Tavily

**Subcase:** If your agent does **semantic/conceptual search** ("find companies similar to X" or "papers about Y approach") rather than keyword lookup, Exa is the best choice. If your agent needs **deep research with citations**, Exa Deep is the most cost-effective option.

---

### #4 — Tavily

**Best for: Quick-start agentic search with broad framework integration**

| Signal | Value | Source |
|--------|-------|--------|
| PyPI weekly downloads | 1,070,806 (highest in category) | PyPI |
| Combined weekly downloads | ~1.23M | npm + PyPI |
| AIMultiple Benchmark | #5 overall, score 13.67 | Independent |
| MCP server stars | 1,491 | GitHub |
| Acquisition | $275-400M by Nebius (Feb 2026) | Bloomberg |

**Why #4 (not higher despite top downloads):**
Tavily has the highest raw download numbers (~1.23M/week combined) and the widest framework integrations — it's the default search tool in LangChain, CrewAI, and many agent tutorials. This explains the downloads: Tavily is the "hello world" of agentic search.

But the evidence shows it underperforms on quality. AIMultiple ranks it #5 (score 13.67 vs Brave's 14.89). Exa's benchmarks (vendor-published but consistent across multiple datasets) show Tavily losing on both accuracy and latency. The Nebius acquisition ($275-400M, Feb 2026) introduces strategic uncertainty — will Tavily remain an independent API or become a Nebius cloud upsell?

**Weaknesses:**
- AIMultiple ranks it #5 — below Brave, Firecrawl, Exa, and You.com
- Nebius acquisition creates vendor risk
- No unique technical moat — wraps other search indexes
- Low HN traction (0 pts on any Tavily-specific story)

**Why it stays ranked:** The framework ecosystem integration is real. If you're building with LangChain or CrewAI, Tavily works out of the box with zero config. That matters for prototyping speed.

---

### #5 — Crawl4AI

**Best for: Free, open-source web crawling without API costs**

| Signal | Value | Source |
|--------|-------|--------|
| GitHub stars | 62,461 | GitHub |
| PyPI weekly downloads | 345,494 | PyPI |
| Price | Free (self-hosted) | — |

**Why #5:**
Crawl4AI is the clear winner for teams that want scraping without API costs. At 62K stars and 345K weekly PyPI downloads, it has real adoption. It's fully open-source (Apache 2.0) and runs locally.

**Weaknesses:**
- Self-hosted only — no managed API
- No search capability — crawling/extraction only
- Not tested in AIMultiple benchmark
- HN traction is tangential (38 pts on an unrelated post)
- No official MCP server (community-maintained only)

**Subcase:** If your agent is **cost-sensitive** and runs in an environment where you can host a browser, Crawl4AI is the right extraction tool. Pair it with Brave Search for a fully open-source search+scrape stack.

---

### #6 — Jina Reader

**Best for: Simple URL-to-markdown conversion**

| Signal | Value | Source |
|--------|-------|--------|
| GitHub stars | 10,350 | GitHub |
| Last push | May 2025 (10+ months stale) | GitHub |

**Why #6:**
Jina Reader was an early innovator (r.jina.ai for instant markdown), but it's stale. No commit in 10+ months. Firecrawl and Crawl4AI have absorbed this use case with better extraction, broader features, and active development.

**Recommendation: Archive.** Unless Jina ships a significant update, this is a historical artifact. Direct users to Firecrawl or Crawl4AI.

---

### #7 — SearXNG

**Best for: Privacy-first, self-hosted meta-search**

| Signal | Value | Source |
|--------|-------|--------|
| GitHub stars | 26,644 | GitHub |
| HN peak | 302 pts | HN |

**Why #7:**
SearXNG is a meta-search engine — it aggregates results from Google, Bing, DuckDuckGo, etc. It's popular with privacy-focused users (26K stars, 302 HN pts). For AI agents, it's a viable free alternative to commercial search APIs.

**Weaknesses:**
- Self-hosted only — requires infrastructure
- No AI-native features (no structured outputs, no semantic search)
- Dependent on upstream search engines that may rate-limit
- No MCP server

**Subcase:** If your agent must avoid all commercial search APIs (privacy, compliance, or cost), SearXNG is the only viable option. Otherwise, Brave Search is better in every measurable dimension.

---

## Pairwise Comparisons

### Brave vs Tavily (most common comparison)
Brave wins on independent benchmarks (AIMultiple #1 vs #5), latency (669ms vs slower), and structural independence (own index vs wrapper). Tavily wins on framework integration (default in LangChain/CrewAI) and download volume. **Verdict: Brave for quality, Tavily for quick-start prototyping.**

### Firecrawl vs Crawl4AI (scraping lane)
Firecrawl has managed API + MCP, autonomous agents (FIRE-1), custom models (Spark), and 97K stars. Crawl4AI is free, self-hosted, 62K stars. **Verdict: Firecrawl for production; Crawl4AI for cost-sensitive or self-hosted.**

### Exa vs Perplexity Sonar vs Parallel Task (deep research lane)
Exa Deep claims faster and more accurate than both (self-reported). Parallel Task API had 123 HN pts (Nov 2025). Perplexity Sonar is well-known but no standout benchmark data. **Verdict: Exa Deep is the most developer-friendly option with structured outputs; Perplexity Sonar for brand trust; insufficient independent data to declare a clear winner.**

### Firecrawl vs Jina Reader (extraction lane)
Firecrawl: 97K stars, 1M+/week downloads, active development, autonomous agents. Jina: 10K stars, stale since May 2025. **Verdict: Firecrawl. Jina Reader should be archived.**

---

## What Would Change This Ranking

| Change | Impact |
|--------|--------|
| **Independent benchmark validates Exa Deep claims** | Exa could jump to #2 or even #1 for research-heavy agents |
| **Tavily ships differentiating features under Nebius** | Could reclaim #3 if acquisition adds real infrastructure advantage |
| **Brave raises prices or limits free tier** | Opens door for Tavily/Exa on cost-sensitive use cases |
| **Crawl4AI ships official MCP server + managed API** | Could challenge Firecrawl in the extraction lane |
| **Google ships a competitive Gemini grounding search API** | Could disrupt entire category — watch closely |
| **Firecrawl anti-bot handling improves significantly** | Would widen its lead in the scraping lane |
| **Jina Reader ships major update** | Unlikely but would re-enter the conversation |

---

## Recommended Stack by Use Case

| Use Case | Recommended | Runner-Up |
|----------|-------------|-----------|
| General web search for agents | Brave Search API | Tavily (if already in LangChain) |
| Page scraping + extraction | Firecrawl | Crawl4AI (free alternative) |
| Semantic/conceptual search | Exa | — |
| Deep research with citations | Exa Deep | Perplexity Sonar |
| Local/place search | Brave Place Search | — (no alternative) |
| Privacy-first / no commercial APIs | SearXNG + Crawl4AI | — |
| Prototyping with LangChain/CrewAI | Tavily | Brave (with manual setup) |

---

## Recommended Next Step

Publish these rankings to the catalog. Flag Jina Reader for archive. Monitor Exa Deep for independent benchmark validation and Tavily for post-acquisition changes.
