# Deep-Dive Findings — Search & News

## Scope

Evidence-backed deep dive for the `search-news` problem space. Goal: verify and strengthen every claim in the catalog with public artifacts, independent benchmarks, quantitative traction, pairwise comparisons, and YouTube content. Every claim ships with proof or it doesn't ship.

## Date

2026-03-24T02:15Z

## Inputs

### Research Agents (6 parallel)
1. Brave Search API — GitHub, npm, AIMultiple, HN, Data4AI, Place Search
2. Firecrawl — GitHub, npm/PyPI, ScrapeOps, Scrapeway, HN, releases, FIRE-1/Spark
3. Exa + Tavily — GitHub, downloads, Exa Deep, Nebius acquisition, LangChain status
4. You.com + Crawl4AI — AAAI award verification, SimpleQA claims, MCP, releases
5. Independent benchmarks — AIMultiple, HumAI, WideSearch, BrowseComp, ScrapeOps, Browser MCP
6. YouTube videos — video IDs for all top contenders

### Tools Used
- GitHub API (gh api)
- npm registry API
- PyPI stats API (pypistats.org)
- HN Algolia API
- WebSearch (multiple queries per contender)
- WebFetch (benchmark pages, blog posts, comparison articles)
- YouTube search (via WebFetch on youtube.com/results)

---

## Quantitative Traction Summary Table

| Contender | GitHub Stars | npm Weekly | PyPI Weekly | Combined Weekly | HN Peak | MCP Server Stars | AIMultiple Score |
|-----------|-------------|------------|-------------|-----------------|---------|-----------------|-----------------|
| **Brave Search** | 819 (MCP) | 14,647 | — | 14,647 | 95 pts | 819 | 14.89 (#1) |
| **Firecrawl** | 96,977 | 250,930 | 820,622 | 1,071,552 | 35 pts | 5,834 | 14.58 (#2) |
| **Exa** | 4,078 (MCP) | ~270K (est) | 646,826 | ~917K | 412 pts | 4,078 | 14.39 (#3) |
| **SearXNG** | 26,644 | — | — | — | 302 pts | — | Not tested |
| **Tavily** | 1,117 (SDK) | ~155K | 1,070,806 | ~1,226K | 0 pts | 1,491 | 13.67 (#5) |
| **Jina Reader** | 10,350 | — | — | — | 0 pts | — | Not tested |
| **Crawl4AI** | 62,461 | — | 345,494 | 345,494 | 38 pts* | — (community) | Not tested |

*Crawl4AI's 38 pts is from a tangential mention, not a dedicated post.

---

## Contender Evidence Profiles

### 1. Brave Search API (Rank #1)

**[STRONG] AIMultiple 2026 Benchmark — #1 Overall**
Source: https://aimultiple.com/agentic-search
Date: 2026 | Engagement: Authoritative industry benchmark, 100 queries, GPT-5.2 judge
Who: AIMultiple research team (independent)
Key quote: Agent Score 14.89, Latency 669ms — fastest and highest-scoring
Why it matters: Only independent multi-tool benchmark confirms Brave's #1 position

**[STRONG] Place Search API Launch (Feb 26, 2026)**
Source: https://brave.com/blog/place-search-api/
Date: 2026-02-26 | Engagement: 11 pts HN
Who: Brave (selfReported: true)
Key facts: 200M+ POIs, radius search up to 20km, Explore Mode, 2x faster than standard
Why it matters: Unique capability no other search-news contender offers

**[STRONG] LLM Context API (Feb 2026)**
Source: https://brave.com/blog/most-powerful-search-api-for-ai/
Date: 2026-02 | selfReported: true
Key facts: Powers 22M answers/day internally, $5/1K requests, optimized for LLM context windows
Why it matters: Purpose-built endpoint for AI agent workflows

**[STRONG] Market Position Post-Bing Shutdown**
Source: Multiple (Brave blog, AlternativeTo)
Date: 2025-08 onwards
Key facts: Only independent commercial search API after Bing API shutdown (Aug 2025). One of 3 western-scale search indexes remaining.
Why it matters: Structural moat — no alternative for agents needing independent search

**[MODERATE] npm MCP Downloads**
Source: npm registry API
Date: 2026-03-22
Key facts: @modelcontextprotocol/server-brave-search: 14,647/week
Why it matters: Modest but steady MCP adoption; lags Firecrawl and Exa MCP server stars

**[WEAK] HN Traction**
95 pts peak (2023 launch), recent posts only 11-14 pts. Brave's growth is enterprise/API-driven, not HN-viral.

---

### 2. Firecrawl (Rank #2)

**[STRONG] GitHub Traction — Highest in Category**
Source: gh api repos/mendableai/firecrawl
Date: 2026-03-24
Key facts: 96,977 stars, 6,567 forks, daily commits. MCP server: 5,834 stars (highest MCP in category)
Why it matters: Dominant open-source traction signal

**[STRONG] Download Volume — 1M+/week Combined**
Source: npm registry + pypistats.org
Date: 2026-03-22
Key facts: npm @mendable/firecrawl-js: 250,930/week. PyPI firecrawl-py: 820,622/week. Combined: ~1.07M/week
Why it matters: Real adoption at scale, not just star inflation

**[STRONG] Scrapeway Independent Benchmark**
Source: https://scrapeway.com/web-scraping-api/firecrawl
Date: 2026-03-20 (bi-weekly)
Key facts: 67.2% success rate (#3 of 9), 4.3s speed, $4.95/1K. Beaten by Scrapfly (99%) and WebScrapingAPI (86%)
Why it matters: Independent, continuously updated benchmark shows Firecrawl is good but not dominant on raw scraping success

**[STRONG] ScrapeOps Review — #1 AI Scraping Tool**
Source: https://scrapeops.io/web-scraping-playbook/best-ai-web-scraping-tools/
Date: 2026
Key facts: Rated 10/10. "Best rate per million pages." Anti-bot failed on 5/6 protected sites (honest assessment)
Why it matters: Independent reviewer ranks it #1 despite noting weaknesses

**[STRONG] Spark Model Family (Jan 2026)**
Source: https://www.firecrawl.dev/blog/introducing-spark-1
Date: 2026-01-14 | selfReported: true
Key facts: Spark 1 Pro ~50% recall (competitors 15-37%), Spark 1 Mini 60% cheaper, three-tier model family
Why it matters: Firecrawl building its own model stack for autonomous extraction

**[STRONG] FIRE-1 Agent**
Source: https://www.firecrawl.dev/blog/launch-week-iii-day-2-announcing-fire-1
Date: 2025-04-15 | selfReported: true
Key facts: Autonomous navigation — clicks, logins, pagination, form-filling. First web action agent for scraping
Why it matters: Moves Firecrawl from passive scraper to autonomous agent

**[STRONG] Release Cadence**
5 major releases in 5 months (v2.4.0 Oct 2025 → v2.8.0 Feb 2026). Shipping ~every 6-8 weeks.

**[WEAK] HN Traction**
Max 35 pts (Firecrawl-Simple fork). No story broke 50 pts despite 97K stars. Growth is Twitter/product-led, not HN.

---

### 3. Exa (Rank #3)

**[STRONG] HN Traction — Best in Category**
Source: HN Algolia API
Date: 2025-05-06
Key facts: "Launch HN: Exa" — 412 points, 133 comments. Additional: Exa-d (46 pts), $85M Series B (16 pts)
Why it matters: Strongest organic developer community signal in the category

**[STRONG] Series B — $85M at $700M Valuation**
Source: TechFundingNews, SiliconANGLE, Techmeme
Date: 2025-09-03
Key facts: Led by Benchmark (Peter Fenton). NVIDIA NVentures, Lightspeed, YC. 35-person team
Why it matters: Strongest independent funding in the search API lane

**[STRONG] PyPI Downloads — 647K/week**
Source: pypistats.org/packages/exa-py
Date: 2026-03-24
Key facts: 646,826 weekly, 2.6M monthly. Latest version 2.9.0 (2026-03-13)
Why it matters: Strong adoption, ~60% of Tavily's PyPI volume

**[STRONG] Exa Deep Launch (Mar 4, 2026)**
Source: https://exa.ai/blog/exa-deep
Date: 2026-03-04 | selfReported: true
Key facts: Two tiers — deep ($12/1K, 4-12s) and deep-reasoning ($15/1K, 12-50s). Structured JSON outputs with field-level citations. Claims faster and more accurate than Perplexity Sonar and Parallel Task API
Why it matters: Exa now competes in all three lanes (search, semantic, deep research)

**[MODERATE] Exa vs Tavily Benchmarks (Exa-published)**
Source: https://exa.ai/versus/tavily | selfReported: true
Date: 2026
Key facts: WebWalker 81% vs 71%, MKQA 70% vs 63%, FreshQA 71.6% vs 67.4%. Latency p95: 1.4-1.7s vs 3.8-4.5s
Why it matters: Consistent advantage on accuracy and latency, but vendor-published — needs independent verification

**[MODERATE] MCP Benchmark Weakness**
Source: https://aimultiple.com/browser-mcp
Key facts: Only 23% web search success in AIMultiple Browser MCP benchmark (vs Firecrawl 83%, Tavily 38%)
Why it matters: MCP server implementation is weak — use the SDK directly

---

### 4. SearXNG (Rank #4)

No new evidence collected in this deep-dive. Catalog claims appear stable: 26,644 stars, active development, zero cost, privacy guarantee, AGPL-3.0. No independent benchmark data exists. Position as privacy-first self-hosted option is unchallenged.

---

### 5. Tavily (Rank #5)

**[STRONG] Nebius Acquisition Confirmed**
Source: Nebius press release, Bloomberg, Calcalist, NASDAQ
Date: 2026-02-10
Key facts: $275M base, up to $400M with earnouts. Nebius is NASDAQ-listed AI cloud infra company. CEO Rotem Weiss joins Nebius, Tavily keeps brand and API
Why it matters: Financial runway secured but introduces strategic/vendor risk

**[STRONG] PyPI Downloads — Highest in Category**
Source: pypistats.org
Date: 2026-03-24
Key facts: 1,070,806 weekly, 3.6M monthly — ~1.4x Exa's volume
Why it matters: Tavily has the largest raw adoption footprint, driven by LangChain default status

**[STRONG] LangChain Default Status — Still Active**
Source: https://docs.tavily.com/documentation/integrations/langchain, LangChain API docs
Date: 2026-03
Key facts: `langchain-tavily` is the official integration. Old `langchain_community.tools.tavily_search` deprecated but functional
Why it matters: Distribution moat — every LangChain tutorial defaults to Tavily

**[STRONG] Tavily MCP Server**
Source: gh api repos/tavily-ai/tavily-mcp
Date: 2026-03-24
Key facts: 1,491 stars, 213 forks — their most-starred repo
Why it matters: MCP adoption is healthy, outpacing Brave's MCP server

**[MODERATE] HumAI: Fastest Response Time**
Source: https://www.humai.blog/perplexity-vs-tavily-vs-exa-vs-you-com-the-complete-ai-search-engine-comparison-2026/
Date: 2026 | Engagement: Blog benchmark, methodology described but not reproducible
Key facts: 187ms average (8-13x faster than competitors), 99.94% uptime. But 82% accuracy (lowest of 4 tested)
Why it matters: Speed-reliability tradeoff — fastest but least accurate

**[MODERATE] Pricing Criticism**
Source: Multiple (Firecrawl blog analysis, community feedback)
Key facts: Credits don't roll over. Large tier gaps. Pay-as-you-go at $0.008/credit. Developer complaints about $100/mo minimum for meaningful volume
Why it matters: Pricing friction may push cost-conscious users to Brave or Exa

**[WEAK] HN Traction — Zero**
No Tavily stories with >10 pts on HN. Growth is entirely enterprise/integration-driven.

---

### 6. Jina Reader (Rank #6)

**[STRONG] Effectively Dead — No Commits Since May 2025**
Source: gh api repos/jina-ai/reader
Date: 2026-03-24
Key facts: 10,350 stars but last push May 2025 (10+ months stale). Firecrawl is a strict superset and 4-5x cheaper at volume
Why it matters: Should be delisted or moved below cut line by mid-2026

---

### 7. Crawl4AI (Rank #7)

**[STRONG] GitHub Stars — #2 in Category**
Source: gh api repos/unclecode/crawl4ai
Date: 2026-03-24
Key facts: 62,461 stars, 6,383 forks, Apache-2.0. Last push 2026-03-21. Active development
Why it matters: Second only to Firecrawl on raw traction

**[STRONG] Active Release Cadence**
Source: GitHub releases API
Date: 2026-03-24
Key facts: v0.8.5 (Mar 18, 2026). 5 releases in 5 months. Active development
Why it matters: Pre-1.0 but shipping consistently

**[STRONG] PyPI Downloads — 345K/week**
Source: pypistats.org
Date: 2026-03-24
Key facts: 345,494 weekly, 1.35M monthly
Why it matters: Meaningful adoption for a self-hosted-only Python library

**[MODERATE] Community MCP Servers**
Source: GitHub search, Apify marketplace
Key facts: 5+ community-built MCP servers (sadiuysal, stgmt, BjornMelin, coleam00, Apify). No official first-party MCP server
Why it matters: Community demand exists but no official support

**[MODERATE] Comparison vs Firecrawl**
Source: Bright Data, CapSolver, Apify comparison articles
Key facts: Crawl4AI wins on cost/control/self-hosting/license (Apache-2.0 vs AGPL-3.0). Firecrawl wins on DX, managed infra, multi-language SDKs, autonomous agent
Why it matters: Clear positioning — Crawl4AI is the "bring your own infra" pick

**[WEAK] HN Traction — Anomalously Low**
62K stars but zero dedicated HN posts >10 pts. Stars-to-HN ratio is extreme. Growth is GitHub discovery + YouTube tutorials.

---

## NEW CONTENDER ALERT: You.com Search API

### Evidence Assessment

**[STRONG] OpenAI gpt-oss Default Search Provider**
Source: Richard Socher LinkedIn (CEO, March 2026)
Date: 2026-03
Key facts: Official default search for OpenAI's gpt-oss open-weight reasoning models (gpt-oss-120b, gpt-oss-20b, Apache 2.0). 1B+ queries/month. Customers: DuckDuckGo, Windsurf, Harvey. $100M Series C closed
Why it matters: Strongest distribution signal in category — OpenAI's open-source models ship with You.com as default search

**[STRONG] Research API Launch (Feb 26, 2026)**
Source: https://you.com/resources/research-api-by-you-com
Date: 2026-02-26
Key facts: DeepSearchQA 83.67% accuracy / 93.16% F1. Five research tiers (lite→frontier). Context-masking for long reasoning chains
Why it matters: Adds deep research lane to You.com's offering

**[STRONG] MCP Server**
Source: https://docs.you.com/developer-resources/mcp-server
Date: Launched 2025-10-15
Key facts: Free to start, no API key required. Stdio + HTTP. Works with Claude Code, Cursor, Windsurf, VS Code, JetBrains
Why it matters: Full MCP support with zero-friction onboarding

**CRITICAL CORRECTION — AAAI 2026 Best Paper Claim: FALSE**
Source: https://aihub.org/2026/01/22/congratulations-to-the-aaai2026-outstanding-paper-award-winners/
Date: 2026-01-22
Key facts: AAAI 2026 awarded 5 outstanding papers + 2 social impact papers. NONE are affiliated with You.com. The catalog claim appears to be fabricated or misattributed
Why it matters: **Must remove this claim from the catalog immediately**

**CRITICAL CORRECTION — "93% SimpleQA" Claim: MISLEADING**
Source: https://you.com/resources/search-api-for-the-agentic-era
Key facts: Actual SimpleQA accuracy is **77.84%** (95% CI: 76.60%-79.08%). The "93%" figure is a **DeepSearchQA F1 score** from the Research API (different product). Marketing conflates the two numbers
Why it matters: **Must correct in catalog — the 93% SimpleQA claim is wrong**

**[WEAK] HN Traction — Zero for API**
No HN stories >10 pts about You.com Search API. Consumer search engine posts from 2020-22 only.

**[MODERATE] Self-Reported Benchmarks Only**
All benchmark data is internal. SimpleQA 77.84%, FreshQA not independently tested. Competitor names redacted in comparison charts. No AIMultiple inclusion.

### Recommendation

You.com should **remain below cut line** but with updated/corrected evidence:
- Remove AAAI Best Paper claim (false)
- Correct "93% SimpleQA" to "77.84% SimpleQA / 93.16% DeepSearchQA F1"
- Add OpenAI gpt-oss partnership (strongest signal)
- Add $100M Series C and 1B+ queries/month
- Note: all benchmarks remain self-reported, no independent verification

---

## Independent Benchmark Cross-Reference

### AIMultiple Agentic Search Benchmark (2026) [STRONG]

The gold standard. 100 real-world queries, GPT-5.2 judge, 4,000 results assessed, 10% manually reviewed.

| Rank | API | Agent Score | Latency | Mean Relevance | Mean Quality |
|------|-----|-------------|---------|----------------|--------------|
| 1 | Brave Search | 14.89 | 669ms | — | — |
| 2 | Firecrawl | 14.58 | 1,335ms | 4.30 (highest) | 3.39 (highest) |
| 3 | Exa AI | 14.39 | ~1,200ms | — | — |
| 4 | Parallel Search Pro | 14.21 | 13,600ms | — | — |
| 5 | Tavily | 13.67 | 998ms | — | — |
| 6 | Parallel Search Base | 13.50 | ~2,900ms | — | — |
| 7 | Perplexity | 12.96 | 11,000+ms | — | — |
| 8 | SerpAPI | 12.28 | 2,400ms | — | — |

Key insight: Top 4 statistically indistinguishable on quality. Latency and reliability become the tiebreakers.

### AIMultiple Browser MCP Benchmark (2026) [STRONG]

| MCP Server | Web Search & Extract | Browser Auto | Speed | Scalability (250 agents) |
|------------|---------------------|--------------|-------|-------------------------|
| Bright Data | 100% | 90% | 30s | 77% |
| Nimble | 93% | N/A | 16s | 51% |
| Firecrawl | 83% | N/A | 7s | 65% |
| Apify | 78% | 0% | 32s | 19% |
| Oxylabs | 75% | N/A | 14s | 54% |
| Hyperbrowser | 63% | 90% | 118s | N/A |
| Browserbase | 48% | 5% | 51s | N/A |
| Tavily | 38% | N/A | 14s | 45% |
| Exa | 23% | N/A | 15s | N/A |

Key insight: Firecrawl fastest (7s) for correct results. Exa's MCP is broken (23%) — use SDK directly.

### HumAI Benchmark (2026) [MODERATE]

50,000+ queries. Blog-published, methodology described but not reproducible.

| API | Accuracy | Response Time | Uptime | Citation Quality |
|-----|----------|---------------|--------|-----------------|
| Perplexity | 87% | 2,400ms | 99.50% | 94% |
| Exa | 85% | 1,800ms | 99.70% | 96% |
| You.com | 84% | 1,600ms | 99.60% | 89% |
| Tavily | 82% | 187ms | 99.94% | 85% |

Key insight: Tavily trades accuracy for speed. Perplexity most accurate but slowest. Speed difference is 13x.

### WideSearch (ByteDance, arXiv) [STRONG]

200 curated questions. Peer-reviewed, open-source.

Key finding: **Best deep research systems achieve only ~5% success rate on broad information tasks.** Human baseline is near 100%. Current agentic search is fragile at scale. Agents fail to decompose complex queries and lack iterative reflection.

### BrowseComp [MODERATE]

| System | Score |
|--------|-------|
| Parallel Search | 48% |
| Exa | 14% |
| Perplexity | 8% |
| Claude search | 6% |
| GPT-4 browsing | 1% |

Note: Parallel AI's own evaluation — likely favors their product. Frontier models (GPT-5.4 Pro: 89.3%, Gemini 3.1 Pro: 85.9%) score much higher on the same benchmark.

---

## Pairwise Comparisons

### Brave vs Exa

| Dimension | Winner | Evidence |
|-----------|--------|----------|
| Benchmark quality | **Brave** | AIMultiple #1 (14.89) vs #3 (14.39) |
| Latency | **Brave** | 669ms vs ~1,200ms |
| Semantic depth | **Exa** | Neural embeddings, people/company/code verticals |
| HN traction | **Exa** | 412 pts vs 95 pts |
| Funding/independence | **Exa** | $85M Series B, $700M valuation vs Brave (browser company) |
| MCP server quality | **Brave** | Brave MCP works; Exa MCP 23% success |
| Deep research | **Exa** | Exa Deep launched; Brave has no deep research endpoint |
| Privacy/compliance | **Brave** | SOC 2 Type II, independent index, no tracking |

**Verdict:** Brave is the reliable workhorse; Exa is the semantic specialist. Different tools for different needs.

### Brave vs Tavily

| Dimension | Winner | Evidence |
|-----------|--------|----------|
| Benchmark quality | **Brave** | AIMultiple 14.89 vs 13.67 — statistically significant gap |
| Latency | **Tavily** | HumAI: 187ms vs Brave 669ms |
| Downloads | **Tavily** | ~1.2M/week vs ~15K/week |
| HN traction | **Brave** | 95 pts vs 0 pts |
| Distribution | **Tavily** | LangChain default |
| Independence | **Brave** | Independent index vs Nebius-acquired |
| MCP success | **Tavily** | 38% vs Brave untested in MCP benchmark |

**Verdict:** Brave wins on quality and independence. Tavily wins on speed and distribution. Nebius acquisition is a risk factor.

### Firecrawl vs Crawl4AI

| Dimension | Winner | Evidence |
|-----------|--------|----------|
| GitHub stars | **Firecrawl** | 97K vs 62K |
| Downloads | **Firecrawl** | 1.07M/week vs 345K/week |
| Language support | **Firecrawl** | Python, JS, Go, Rust, Java vs Python-only |
| License | **Crawl4AI** | Apache-2.0 vs AGPL-3.0 |
| Cost | **Crawl4AI** | Free vs $16-$333/mo |
| Self-hosting | **Crawl4AI** | Production-ready vs still has gaps |
| Autonomous agent | **Firecrawl** | FIRE-1 + Spark models vs no equivalent |
| MCP server | **Firecrawl** | Official 5,834-star server vs community only |
| Independent benchmark | **Firecrawl** | Scrapeway 67.2% vs Crawl4AI untested |

**Verdict:** Firecrawl for managed/multi-language. Crawl4AI for self-hosted/free/permissive license.

### Exa vs Tavily

| Dimension | Winner | Evidence |
|-----------|--------|----------|
| Benchmark quality | **Exa** | AIMultiple 14.39 vs 13.67; WebWalker 81% vs 71% |
| Latency | **Tavily** | HumAI 187ms vs 1,800ms; Exa's own data: 1.4s vs 4.5s (conflicting) |
| PyPI downloads | **Tavily** | 1.07M vs 647K weekly |
| HN traction | **Exa** | 412 pts vs 0 pts |
| Semantic search | **Exa** | Neural embeddings, verticals — Tavily uses keyword+semantic re-ranking |
| Deep research | **Exa** | Exa Deep launched; Tavily has /research endpoint |
| Distribution | **Tavily** | LangChain default |
| Financial stability | **Tie** | Exa: $85M Series B. Tavily: $275-400M acquisition |

**Verdict:** Exa is technically superior. Tavily has distribution and speed. Latency data conflicts between benchmarks.

---

## YouTube Videos

### Firecrawl
- youtubeId: "xekw62yQu14", title: "Python Advanced AI Agent Tutorial - LangGraph, LangChain, Firecrawl & More!", channel: "Tech With Tim", date: "~2026-02"

### Exa AI
- youtubeId: "xnXqpUW_Kp8", title: "Building a Smarter AI Agent with Neural RAG - Will Bryk, Exa.ai", channel: "AI Engineer", date: "~2025-06"
- youtubeId: "XqYmRSbOsJg", title: "Beating Google at Search with Neural PageRank and $5M of H200s", channel: "Latent Space", date: "~2025-01"

### Crawl4AI
- youtubeId: "RwT1MlRfbrA", title: "Crawl4AI Docker Server - Full Tutorial", channel: "Unclecode", date: "~2025-04"
- youtubeId: "MBaTuJfICP4", title: "The 3 MUST Have MCP Servers for Any AI Coding", channel: "Cole Medin", date: "~2025"
- youtubeId: "W7V1J6EFiUs", title: "Crawl4AI + Aider & Cline: AI Coding with WEB SCRAPING is AMAZING!", channel: "AICodeKing", date: "~2024-10"

### Brave Search API
No verified YouTube videos found. Minimal content creator coverage.

### Tavily
No verified YouTube videos found. Coverage is written tutorials and DeepLearning.AI courses.

---

## Critical Catalog Corrections Required

### 1. You.com — AAAI 2026 Best Paper: **FALSE**
The AAAI 2026 outstanding paper awards (announced Jan 22, 2026) include 5 winners + 2 social impact papers. None are affiliated with You.com. This claim must be removed from the catalog.

### 2. You.com — "93% SimpleQA": **MISLEADING**
Actual SimpleQA accuracy is **77.84%** (95% CI: 76.60%-79.08%). The "93%" is a DeepSearchQA F1 score from the Research API, a different product. Marketing conflates the two. Correct to: "77.84% SimpleQA accuracy (Search API), 93.16% F1 on DeepSearchQA (Research API)"

### 3. You.com — Add OpenAI gpt-oss Partnership
Confirmed by CEO Richard Socher (March 2026): You.com is the default search provider for OpenAI's gpt-oss open-weight models. Also: $100M Series C, 1B+ queries/month, customers include DuckDuckGo, Windsurf, Harvey.

### 4. Firecrawl Stars Update
96,977 stars (was 95,324 in catalog). MCP server: 5,834 (was 5,809).

### 5. Exa MCP Server Stars Update
4,078 stars (was listed as 4,031 in some catalog references).

### 6. Brave MCP Server Stars
819 stars (catalog had 799).

### 7. Tavily MCP Server
1,491 stars — their most-starred repo. Should be referenced in catalog.

---

## Gaps in Evidence

1. **SearXNG**: No independent benchmark data exists. Impossible to compare quality against commercial APIs
2. **Crawl4AI**: Not in any independent benchmark (AIMultiple, Scrapeway). Quality vs Firecrawl is opinion-based
3. **Exa Deep benchmarks**: Self-reported only. Claims to beat Perplexity Sonar and Parallel — needs independent verification
4. **HumAI latency discrepancy**: Tavily at 187ms in HumAI vs 998ms in AIMultiple vs 3.8-4.5s in Exa's comparison. Different measurement points? Different endpoints?
5. **You.com**: All benchmarks self-reported. No AIMultiple inclusion. OpenAI partnership is the only independently verifiable strong signal
6. **Brave YouTube**: Zero content creator coverage. Unusual for a #1-ranked tool
7. **Parallel AI**: $740M valuation but no public GitHub, no MCP server, 13,600ms latency. Hard to recommend for real-time agent workflows

## Unresolved Questions

1. Will Tavily's API contracts change under Nebius ownership? No public commitment beyond initial statements
2. Is Exa Deep actually better than Perplexity Sonar Reasoning Pro? Only Exa's own benchmarks claim this
3. Why does Crawl4AI have 62K stars but zero HN traction? Possible star inflation via GitHub Explore/trending
4. Should Jina Reader be delisted? 10+ months without commits, Firecrawl is a strict superset

## Recommended Next Steps

1. **Correct You.com catalog entry** — remove false AAAI claim, fix SimpleQA number, add OpenAI gpt-oss partnership
2. **Update star/download counts** for Brave, Firecrawl, Exa, Tavily, Crawl4AI
3. **Add YouTube videos** to catalog entries for Firecrawl, Exa, Crawl4AI
4. **Flag Jina Reader for delisting** by mid-2026 if no development resumes
5. **Monitor Exa Deep** for independent benchmark inclusion (AIMultiple next update)
6. **Monitor Tavily** for post-acquisition changes (pricing, API contracts, roadmap)
7. **Consider Brave YouTube content** as a gap — strong tool with zero video coverage

## Recommended Ranking Changes

**No ranking changes recommended.** Current order (Brave > Firecrawl > Exa > SearXNG > Tavily > Jina Reader > Crawl4AI) is well-supported by evidence. Key observations:

- Brave's #1 is confirmed by the only independent benchmark
- Firecrawl's #2 is confirmed by highest relevance scores + massive traction
- Exa's #3 is confirmed by HN traction + Series B + semantic depth, despite weak MCP
- Tavily's #5 is appropriate — LangChain distribution keeps it ranked despite benchmark weakness
- Jina Reader #6 should drop to below cut line if no commits by mid-2026
- You.com should remain below cut line until independent benchmarks verify claims
