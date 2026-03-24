# Discover Findings — Search & News

## Scope

Full discover protocol for the `search-news` problem space. Goal: find all serious contenders, new signals, gaps in the current catalog, and shifts in the competitive landscape.

## Date

2026-03-24T01:37Z

## Inputs

### Web Searches (12 queries)
- "best AI agent search tools 2026 comparison"
- "Brave Search API vs Tavily vs Exa 2026"
- "Firecrawl vs Crawl4AI vs Jina 2026 web scraping agents"
- "Perplexity Sonar API deep research 2026"
- "agentic search benchmark 2026 AI tools"
- "Tavily acquired Nebius 2026 agentic search"
- "Parallel Search API deep research agent 2026"
- "Exa Deep research launch March 2026"
- "SerpAPI vs SearchAPI vs WebSearchAPI AI agents 2026"
- "Jina Reader AI 2026 updates search scraping"
- "Spider cloud web scraping API 2026"
- "Brave Search Place Search API February 2026"
- "brand.dev web scraping API AI 2026"
- "Linkup deep research API agentic search 2026"
- "Google Gemini grounding search API 2026 agent"
- "Apify web scraping AI agents MCP 2026"
- "Bright Data web scraping AI MCP server 2026"
- "Scrapegraph AI web scraping 2026 MCP"
- "OpenAI web search tool built-in 2026 agent"
- "You.com API search AI agent 2026"
- "Tavily MCP server npm downloads stars 2026"
- "Crawl4AI GitHub stars March 2026 growth"

### HN Algolia Queries (10 queries)
- "agentic search API" (no results >10pts)
- "Firecrawl" — 35pts Firecrawl-Simple, 28pts llms.txt Generator
- "Brave Search API" — 12pts original Show HN, 11pts Place Search API (Feb 2026)
- "Exa AI search" — 28pts Exa Websets, 16pts $85M Series B
- "Tavily search" — no results >10pts
- "Crawl4AI" — 38pts zettelkasten (tangential)
- "web scraping AI agent" — no results >10pts
- "Perplexity Sonar API" — no results >10pts
- "deep research API" — misc tangential results
- "Show HN search API" — 12pts Brave Search API
- "web search API LLM" — no results >10pts
- "Jina Reader" — no results >10pts
- "Parallel Search AI" — 123pts "The Parallel Search API" (Nov 2025)

### GitHub Checks
- firecrawl/firecrawl: **96,976 stars**, 6,567 forks
- firecrawl/firecrawl-mcp-server: **5,834 stars**, 654 forks
- unclecode/crawl4ai: **62,461 stars**, 6,383 forks
- jina-ai/reader: **10,350 stars**, 782 forks (last push: May 2025 — 10+ months stale)
- exa-labs/exa-mcp-server: **4,078 stars**, 307 forks
- tavily-ai/tavily-python: **1,117 stars**, 137 forks
- brave/brave-search-mcp-server: **819 stars**, 141 forks
- spider-rs/spider: **2,350 stars**, 186 forks

### Registry/Benchmark Pages
- AIMultiple 2026 Agentic Search Benchmark (full table extracted)
- Firecrawl blog (multiple comparison posts)
- Data4AI Brave vs Tavily comparison

---

## Findings

### 1. Tavily Acquired by Nebius for $275-400M (Feb 10, 2026)

**Signal strength: HIGH** — This is the biggest structural change in the category.

Nebius (AI cloud infrastructure company) announced acquisition of Tavily on Feb 10, 2026. Deal: $275M base, up to $400M with milestones. Tavily will continue operating under its own brand. CEO Rotem Weiss joins Nebius.

**Why this matters:** Strategic uncertainty. Tavily's integration into Nebius's cloud platform could either accelerate enterprise adoption or create platform lock-in concerns. Tavily claims 1M+ developer community and Fortune 500 customers (IBM, Cohere, Groq). The acquisition validates the "agentic search" category but introduces vendor risk for independent users.

**Current catalog status:** Already noted. No update needed beyond confirming deal is progressing.

Sources:
- [Nebius announcement](https://nebius.com/newsroom/nebius-announces-agreement-to-acquire-tavily-to-add-agentic-search-to-its-ai-cloud-platform)
- [Bloomberg: $275M deal](https://www.bloomberg.com/news/articles/2026-02-10/nebius-agrees-to-buy-ai-agent-search-company-tavily-for-275-million)

---

### 2. Exa Deep Launched — Structured Outputs + Benchmarks vs Perplexity/Parallel

**Signal strength: HIGH** — Direct competitive move into the deep research lane.

Exa launched "Exa Deep" — an agentic search endpoint using optimized query expansion and LLM reasoning. Key differentiators:
- **Structured Outputs**: Define an output schema, get JSON with field-level citations and confidence scores
- **Two tiers**: "deep" (4-12s latency, $12/1K requests) and "deep-reasoning" (12-50s, $15/1K requests)
- **Claims**: Benchmarked vs Perplexity Sonar Reasoning Pro and Parallel Task API — "faster and more accurate on every benchmark"
- Built with LangGraph multi-agent architecture

**Why this matters:** Exa now competes in all three lanes (search API, semantic embeddings, deep research). Structured outputs with grounding is a unique differentiator — no other deep research API offers this natively. If benchmark claims hold up to independent verification, Exa becomes the strongest multi-lane player.

**Current catalog status:** Exa is ranked #3. Exa Deep launch strengthens its position and adds deep research capabilities not previously tracked.

Sources:
- [Exa Deep blog](https://exa.ai/blog/exa-deep)
- [StartupHub coverage](https://www.startuphub.ai/ai-news/artificial-intelligence/2026/exa-deep-search-agents-get-smarter)
- [LangChain/Exa integration blog](https://blog.langchain.com/exa/)

---

### 3. Brave Search Place Search API (Feb 26, 2026)

**Signal strength: MEDIUM** — Expands Brave's moat into location data.

New endpoint for granular map searches from Brave's 200M+ points of interest index. Features:
- Search by center point + radius (up to 20km)
- "Explore Mode" (empty query returns popular POIs)
- 2x faster than standard search
- Available to all Search plan API customers

Also: HN picked it up (11pts on Feb 26, 2026).

**Why this matters:** Brave is building a full-stack independent search platform. Place Search is a differentiator no other search-news contender offers. Strengthens Brave's #1 position.

Sources:
- [Brave Place Search blog](https://brave.com/blog/place-search-api/)
- [HN: 11pts](https://brave.com/blog/place-search-api/)

---

### 4. You.com AAAI 2026 Best Paper Award + Strong Performance Claims

**Signal strength: HIGH** — Independent academic validation is rare in this space.

You.com's evaluation methodology received AAAI 2026 Best Paper Award. Performance claims:
- **93% accuracy** on SimpleQA — claims to outperform all major providers
- **466ms response time** — fastest reported in category (vs Brave's 669ms)
- Deep Search mode: retrieves live pages, extracts relevant passages, verifies text appears on source pages
- MCP server available on Databricks marketplace
- Research API launched Feb 26, 2026

**Why this matters:** The AAAI Best Paper Award is a credibility signal no other contender in this space has. If the 93% SimpleQA and 466ms latency claims hold, You.com should move from "below cut line" to ranked. The current catalog notes "too new for independent verification" — the AAAI award partially addresses this. Needs AIMultiple benchmark inclusion to confirm.

**Current catalog status:** Below cut line. RECOMMEND: Move to deep-dive queue for verification of benchmark claims against independent sources.

Sources:
- [You.com APIs](https://you.com/apis)
- [You.com Research API](https://you.com/resources/search-api-for-the-agentic-era)

---

### 5. Perplexity Sonar Deep Research Bug (Since March 7, 2026)

**Signal strength: MEDIUM** — Reliability issue for a "below cut line" player.

`sonar-deep-research` model intermittently fails to activate web search via the API since March 7, 2026. Returns "knowledge cutoff" and "Real-time web search is not available" messages. Bug reported on Perplexity community forum.

**Why this matters:** Reinforces Perplexity's weakness as an API product vs consumer product. Already below cut line, this further weakens its case for ranked list.

Sources:
- [Perplexity community bug report](https://community.perplexity.ai/t/sonar-deep-research-intermittently-fails-to-activate-web-search-via-the-api/4264)

---

### 6. Parallel Web Systems — $100M Series A at $740M Valuation

**Signal strength: HIGH** — Massive funding validates deep research lane.

Parag Agrawal's (former Twitter CEO) startup raised $100M Series A led by Kleiner Perkins and Index Ventures. Valued at $740M. Parallel offers adaptive compute tiers:
- **Lite tier**: sub-second responses for real-time chat
- **Ultra tier**: minutes of compute per request for deep research
- Claims 48% accuracy on BrowseComp vs GPT-4's 1%

HN traction: 123pts for "The Parallel Search API" (Nov 2025).

**Why this matters:** $740M valuation + $100M funding is the biggest bet in the deep research lane. Already in catalog below cut line due to extreme latency (13.6s) and pricing ($300-1,200 CPM). The funding gives them runway to compete on price eventually.

Sources:
- [Newcomer exclusive](https://www.newcomer.co/p/exclusive-parag-agrawals-parallel)
- [Parallel blog](https://parallel.ai/blog/introducing-parallel-search)

---

### 7. Firecrawl Hits 97K Stars — Approaching 100K Milestone

**Signal strength: MEDIUM** — Confirms dominant position in scrape/crawl lane.

GitHub data: 96,976 stars, 6,567 forks. MCP server: 5,834 stars, 654 forks. Firecrawl also launched `open-lovable` (24,532 stars) showing brand expansion beyond scraping.

The catalog previously tracked ~95,324 stars. Growth of ~1,700 stars in the past week confirms sustained momentum.

**Why this matters:** Firecrawl is pulling away from the scrape/crawl pack. 97K stars makes it one of the most-starred developer tools on GitHub, period.

---

### 8. Crawl4AI Hits 62.5K Stars — Major Open-Source Contender

**Signal strength: MEDIUM** — The open-source alternative is real and growing fast.

GitHub: 62,461 stars, 6,383 forks. Last push: March 21, 2026. Active development with v0.8.5+. Apache-2.0 licensed.

Fork count (6,383) nearly matches Firecrawl (6,567), which is remarkable for a pure open-source project without a commercial API backing it.

**Why this matters:** Crawl4AI is the strongest self-hosted option in the scrape/crawl lane. For privacy-sensitive workflows or teams wanting to avoid per-page API costs, it's the clear winner.

---

### 9. OpenAI Responses API — Built-in Web Search as Platform Feature

**Signal strength: HIGH** — Platform-level competition for standalone search APIs.

OpenAI's Responses API includes built-in web search powered by the same model used for ChatGPT search. Key details:
- Works with gpt-4o and gpt-4o-mini
- Can combine web search + function calling + file search in single API call
- Assistants API deprecation planned for mid-2026, Responses API is the future
- Web search, file search, and computer use as built-in tools

**Why this matters:** If a developer is already in the OpenAI ecosystem, they may not need a separate search API at all. This is the biggest platform-level threat to standalone search APIs. However, lacks independent index (likely Bing-powered) and no MCP server.

**Current catalog status:** Not in catalog for search-news. RECOMMEND: Add as notable mention / platform threat.

Sources:
- [OpenAI Responses API](https://openai.com/index/new-tools-for-building-agents/)
- [OpenAI web search docs](https://developers.openai.com/api/docs/guides/tools-web-search)

---

### 10. AIMultiple 2026 Agentic Search Benchmark — Full Results Confirmed

**Signal strength: HIGH** — Only independent multi-tool benchmark. No changes from current catalog.

| Rank | API | Agent Score | Relevance | Quality | Latency |
|------|-----|-------------|-----------|---------|---------|
| 1 | Brave Search | 14.89 | ~3.88 | ~3.84 | 669ms |
| 2 | Firecrawl | 14.58 | 4.30 | 3.39 | 1,335ms |
| 3 | Exa AI | 14.39 | ~3.74 | ~3.85 | ~1,200ms |
| 4 | Parallel Search Pro | 14.21 | ~3.71 | ~3.83 | 13,600ms |
| 5 | Tavily | 13.67 | ~3.57 | ~3.83 | 998ms |
| 6 | Parallel Search Base | 13.50 | ~3.53 | ~3.82 | 2,900ms |
| 7 | Perplexity | 12.96 | ~3.38 | ~3.84 | 11,000ms |
| 8 | SerpAPI | 12.28 | ~3.20 | ~3.84 | 2,400ms |

Methodology: 100 real-world AI/LLM queries, 4,000 results evaluated, GPT-5.2 judge, 10% human verification, bootstrap resampling (10K iterations).

**Key insight from benchmark:** Top 4 are statistically close. Only clear winner is Brave over Tavily (~1pt gap, statistically significant).

---

### 11. Bright Data MCP — #1 in Browser MCP Benchmark

**Signal strength: MEDIUM** — Already in catalog, but benchmark data strengthens position.

AIMultiple Browser MCP Benchmark results:
- 100% success rate in web search & extraction tasks
- 76.8% success rate in 250-concurrent-agent stress test
- 60+ specialized MCP tools
- Free MCP tier available

**Why this matters:** For workflows needing anti-bot bypass and proxy infrastructure, Bright Data is unmatched. The MCP benchmark confirms it as the enterprise-grade option.

---

### 12. Linkup Claims #1 on SimpleQA Factuality Benchmark

**Signal strength: MEDIUM** — Self-reported claims need independent verification.

Linkup positions "Deep search" as "the world's most accurate search, as measured on OpenAI's SimpleQA factuality benchmark." Integrated with CrewAI, LangChain, LlamaIndex, Make, n8n, Zapier.

**Current catalog status:** Below cut line. 86K weekly downloads, 43 GitHub stars. Strong angel backing (Datadog CEO, Mistral CEO). Claims still self-reported.

---

## NEW CONTENDER ALERTS

### NEW CONTENDER: Brand.dev

**What:** AI-powered web scraping platform with structured extraction via natural language. Offers:
- AI Query: Plain English → structured JSON extraction
- AI Product: Structured e-commerce data extraction
- MCP server included
- Anti-bot bypass built in

**Traction:** Featured in multiple "top 10 scraping APIs" lists for 2026. Newer player, limited GitHub/HN traction data.

**Why it matters:** Unique differentiation in the scrape/crawl lane — LLM-powered extraction without CSS selectors. If extraction quality proves reliable, it competes directly with Firecrawl's /extract endpoint.

**Recommendation:** Add below cut line in catalog. Queue for deep-dive on extraction quality.

Sources:
- [Brand.dev blog](https://www.brand.dev/blog/announcing-brand-dev-s-ai-website-query-api-intelligent-web-scraping)
- [Top 10 Scraping APIs](https://www.brand.dev/blog/top-10-web-scraping-apis-for-ai)

---

### NEW CONTENDER: Apify MCP Server

**What:** 3,000+ pre-built Actors (scrapers/crawlers) accessible via MCP. Not a search API — an Actor marketplace for structured data extraction from specific sites (Google, Instagram, Amazon, etc.).

**Why it matters:** For use cases requiring site-specific extraction (e.g., "scrape all reviews from this Amazon product"), Apify's Actor model is unmatched. The MCP server makes 3,000+ scrapers available to Claude/Cursor directly.

**Current catalog status:** Not tracked in search-news category. RECOMMEND: Add below cut line as specialized extraction platform.

Sources:
- [Apify MCP GitHub](https://github.com/apify/apify-mcp-server)
- [Apify MCP guide](https://use-apify.com/blog/apify-mcp-claude-desktop)

---

### NEW CONTENDER: WebSearchAPI.ai

**What:** Google-quality search results with pre-extracted, clean content formatted for RAG systems. Positions itself as the middle ground between raw SERP APIs (SerpAPI) and AI-native APIs (Exa/Tavily).

**Why it matters:** If pricing and quality claims hold, it fills a gap for teams wanting Google results without the complexity of SerpAPI + a scraper.

**Recommendation:** Needs benchmarking. Likely below cut line.

Sources:
- [WebSearchAPI blog](https://websearchapi.ai/blog/tavily-alternatives)

---

## Quotes

> "Brave Search leads with 14.89 in the Agent Score, but Firecrawl, Exa, and Parallel Search Pro are so close that the differences could be random variation. The only clear winner is Brave, which consistently outperformed Tavily by about 1 point." — AIMultiple 2026

> "Nebius will pay $275 million for Tavily, though the amount could potentially rise to $400 million if certain milestones are achieved." — Bloomberg, Feb 10, 2026

> "Exa Deep was benchmarked against Perplexity (Sonar Reasoning Pro) and Parallel Task API on three challenging evals, and on every benchmark Exa Deep performed faster and more accurately." — Exa blog

> "Starting March 7, 2026, the sonar-deep-research model intermittently fails to perform web search, instead responding with 'knowledge cutoff' and 'Real-time web search is not available' messages." — Perplexity Community Forum

> "You.com's evaluation methodology was presented at AAAI 2026 and received the Best Paper Award." — You.com

> "Former Twitter CEO Parag Agrawal raised $100 million for Parallel Web Systems at a $740 million post-money valuation." — Newcomer

---

## Category Meta Assessment

### Three-Lane Structure (confirmed, evolving)

1. **Search APIs** (find content): Brave #1, Exa #2, Tavily #3. You.com emerging.
2. **Scrape/Crawl** (extract content): Firecrawl #1, Crawl4AI #2. Brand.dev and Apify emerging.
3. **Deep Research** (multi-step synthesis): Exa Deep (new), Parallel, Perplexity Sonar (buggy). Lane still immature.

### Key Shifts Since Last Assessment

1. **Deep research lane is heating up fast**: Exa Deep launch + Parallel's $100M raise signal this lane is moving from "immature" to "early contender." Three funded players (Exa $85M, Parallel $100M, Perplexity well-funded) are competing.

2. **Platform-level competition**: OpenAI's built-in web search in Responses API and Google's Gemini Grounding with Google Search are eroding the case for standalone search APIs for teams already in those ecosystems. The standalone players need to differentiate on quality, independence, and multi-platform support.

3. **MCP is truly table stakes**: Every serious contender now has an MCP server. The differentiator is *quality* of MCP implementation (tool count, reliability, features). Bright Data's 60+ tools and Apify's 3,000+ Actors are the extremes.

4. **Tavily acquisition uncertainty**: Nebius deal creates strategic risk for teams using Tavily independently. Could accelerate Tavily's enterprise adoption OR push indie developers toward Brave/Exa.

5. **Jina Reader is confirmed dead**: Last push May 2025 (10+ months). 10,350 stars but no development. Current catalog correctly flags this.

### Gaps in Current Catalog

| Contender | Status | Recommendation |
|-----------|--------|----------------|
| Brand.dev | Missing entirely | Add below cut line |
| Apify MCP | Missing from search-news | Add below cut line (scrape/crawl sub-lane) |
| WebSearchAPI.ai | Missing entirely | Add below cut line if benchmarked |
| OpenAI Web Search | Missing | Add as platform threat / notable mention |
| SearchAPI | Missing | Low priority — generic SERP wrapper |

### Star/Download Counts to Update

| Tool | Catalog Value | Current Value |
|------|---------------|---------------|
| Firecrawl | 95,324 stars | **96,976 stars** |
| Firecrawl MCP | 5,809 stars | **5,834 stars** |
| Crawl4AI | ~62K stars | **62,461 stars** |
| Exa MCP | — | **4,078 stars** |
| Brave MCP | — | **819 stars** |

---

## Recommended Next Step

1. **Deep-dive You.com** — AAAI Best Paper Award is the strongest independent credibility signal of any below-cut-line player. Verify the 93% SimpleQA and 466ms latency claims. If confirmed, promote to ranked list.

2. **Deep-dive Exa Deep** — New launch, strong claims vs Perplexity and Parallel. Verify benchmark results independently. May justify strengthening Exa's #3 position.

3. **Add Brand.dev and Apify MCP to catalog** below cut line. Both fill real gaps in the scrape/crawl lane.

4. **Add OpenAI Web Search** as a notable platform threat. Not a standalone tool but a real competitive pressure on all search APIs.

5. **Update star counts** for Firecrawl (97K), Crawl4AI (62.5K), and MCP servers.

6. **Monitor Tavily post-acquisition** — watch for pricing changes, platform lock-in, or developer sentiment shift following Nebius integration.
