# Discover Findings — Marketing

## Scope

Full discover protocol for the **marketing** problem space. Identify all serious contenders, new signals, MCP-native tools, gaps in the current catalog, and shifts in the meta.

## Date

2026-03-24

## Inputs

### Web searches
- "AI marketing tools best 2026"
- "AI marketing automation comparison 2026"
- "Jasper AI vs Copy.ai vs Writesonic 2026"
- "switched from Jasper to ChatGPT marketing 2026"
- "open source AI marketing tools alternative 2026"
- "Postiz social media open source GitHub stars 2026"
- "SE Ranking MCP server SEO tool 2026"
- "marketing MCP server AI agent 2026"
- "Gumloop AI marketing automation agent 2026"
- "AirOps AI marketing SEO workflows 2026"
- "Klue competitive intelligence AI 2026 funding"
- "Ocoya AI social media marketing 2026"
- "Frase AI SEO content optimization 2026 review"
- "Surfer SEO AI 2026 update features"
- "Clearscope SEO content optimization 2026"
- "Competely AI competitive analysis tool 2026"
- "Meta Ads MCP" / "Google Ads MCP" / "Amazon Ads MCP"
- "Mautic open source marketing automation 2026 GitHub"
- "GoMarble AI performance marketing agent 2026"
- "Societies.io AI audience simulation marketing YC 2026"
- "Guideline MCP server media planning advertising 2026"
- "SegmentStream marketing analytics MCP 2026"
- "marketing AI agent" site:github.com
- "Gamma AI presentation marketing 2026 funding"
- "Flyweel marketing MCP Google Ads Meta Ads 2026"
- "Lindy AI marketing agent automation 2026"
- "Copy.ai GTM AI automation workflow 2026"
- "HubSpot Breeze AI agent marketing 2026"

### HN Algolia queries
- "AI marketing tools" (points>10)
- "marketing automation AI agent" (points>10)
- "marketing AI 2026" (points>10)
- "Gumloop" (points>5)

### GitHub API checks
- gitroomhq/postiz-app: **27,551 stars** (pushed 2026-03-23)
- mautic/mautic: **9,344 stars** (pushed 2026-03-23)
- seranking/seo-data-api-mcp-server: **8 stars** (pushed 2026-03-17)
- gumloop/guMCP: 79 HN points on Show HN (repo may be private/renamed)

---

## Findings

### 1. MARKET CONTEXT — The Meta Is Shifting

- **Global AI marketing market**: $47.32B in 2026, projected $107.5B by 2028 (36.6% CAGR). Source: [ALM Corp](https://almcorp.com/blog/ai-powered-marketing-automation/)
- **Adoption**: 88-91% of marketing teams now use AI (up from 63% last year), but only 41% can prove ROI. Source: [Campaign Monitor](https://www.campaignmonitor.com/blog/comparison/best-ai-marketing-tools/)
- **MCP explosion**: Ecosystem grew from 1,000 servers (early 2025) to 10,000+ active servers. 79% of orgs have adopted some level of agentic AI. Source: [Stormy AI](https://stormy.ai/blog/2026-skill-economy-claude-mcp-marketing-skills)
- **The defining shift**: From "AI writes copy" to "AI agents execute full marketing workflows" — research, content creation, ad optimization, attribution, and budget reallocation in coordinated pipelines.

### 2. EXISTING CATALOG CONTENDERS — Status Updates

#### Jasper AI (current rank #1)
- Still enterprise brand governance leader. ~100K+ users, ~20% Fortune 500.
- Brand Voice engine remains best-in-class for brand consistency.
- **Threat**: ChatGPT/Claude increasingly match raw copy quality at $20/mo vs Jasper's $49-125/mo. The moat is narrowing to orchestration + brand rails.
- HyzenPro 2026 verdict stands: "Buy Jasper for brand consistency."
- Sources: [HyzenPro](https://hyzenpro.com/jasper-ai-vs-writesonic-vs-copy-ai-choosing-the-best-ai-marketing-suite-in-2026/), [OpenCraft AI](https://resources.opencraftai.com/blog/jasper-vs-chatgpt-which-ai-tool-should-you-actually-pay-for-in-2026/)

#### Copy.ai
- **Major pivot**: Fully repositioned as "GTM AI Platform" — no longer just a copywriting tool. Now automates entire go-to-market workflows: lead enrichment, account routing, personalized outreach, CRM sync.
- Free tier available. Workflow automation is the differentiator.
- HyzenPro 2026: "Buy Copy.ai to automate your department."
- Source: [Copy.ai](https://www.copy.ai/)

#### Writesonic
- Remains the budget-friendly option ($0 free tier, 10K words/mo). Strong for pure SEO ranking.
- Uses GPT-3.5/GPT-4 with three quality tiers.
- Source: [YuanqiLife comparison](https://www.yuanqilife.com/jasper-vs-copy-ai-vs-writesonic-ai-writing-tools-comparison-2026-2/)

#### Postiz (social media)
- **27,551 GitHub stars** (up from ~20K recently). Pushed 2026-03-23. Very active.
- 19 platform integrations (Instagram, Facebook, TikTok, Reddit, LinkedIn, X, Threads, BlueSky, Mastodon, YouTube, Pinterest, Dribbble, Slack, Discord, Warpcast, Lemmy, Telegram, VK, Nostr).
- Agent CLI for terminal workflows. $14K/mo revenue, 3M downloads.
- **Still the SkillBench play for social media** — only open-source option with real traction + Agent CLI.
- Source: [GitHub](https://github.com/gitroomhq/postiz-app), [Postiz Agent](https://postiz.com/agent)

#### Frase
- Now positions as "Agentic SEO & GEO Platform" — major evolution.
- **New feature**: AI Search Tracking — monitors where your brand appears in AI-generated answers (ChatGPT, Perplexity, Claude, Gemini). Provides separate SEO and GEO scores.
- Pricing undercuts competitors: $38/mo vs Surfer ($99), Clearscope ($129), MarketMuse ($149).
- Source: [Frase.io](https://www.frase.io), [Rankability review](https://www.rankability.com/blog/frase-content-optimization-tool-review/)

#### Surfer SEO
- **Major 2026 updates**: AI Search Guidelines (citation-optimized writing), Gemini added to AI Tracker, Mention Gap + Sentiment Analysis, Fanout Queries.
- Workspaces for multi-brand management.
- Uses GPT-4o with 128K context for article generation.
- Source: [Surfer blog](https://surferseo.com/blog/whats-new-at-surfer-february-2026/)

#### Clearscope
- Now tracks AI search visibility alongside Google.
- $129/mo base. Strong Google Docs integration.
- Positioning around Answer Engine Optimization (AEO).
- Source: [Clearscope](https://www.clearscope.io/blog/2026-seo-aeo-playbook)

#### SE Ranking MCP
- **Still only 8 GitHub stars** on the MCP server repo. But...
- Officially supports Claude Code, Claude Desktop, Gemini CLI, ChatGPT.
- Cuts keyword research from 45 min to under 5 min.
- 2026 plans: extending MCP for agentic workflows, new Local and On-Page SEO API endpoints.
- Source: [SE Ranking API docs](https://seranking.com/api/integrations/mcp/), [Chris Raulf testimonial](https://chrisraulf.com/se-ranking-mcp-keyword-research-automation/)

#### Klue (competitive intelligence)
- Launched **Compete Agent** — AI agent for real-time competitive deal intelligence.
- $62M funding (Tiger Global, Salesforce Ventures). 200+ employees, 500+ clients.
- 403% three-year revenue growth (Globe and Mail).
- Source: [Klue](https://klue.com/compete-agent)

#### AirOps
- Positioned as first AI-workflow platform built for content teams.
- Customers: Webflow, Ramp, Descript, Carta.
- Power Agents for SERP analysis, content briefs.
- WordPress/Webflow/Shopify integrations.
- Source: [AirOps](https://www.airops.com/), [Marketer Milk review](https://www.marketermilk.com/blog/airops-review)

#### Gumloop
- **$50M Series B from Benchmark** (March 2026). Major signal.
- YC W24. Customers: Shopify, Ramp, Gusto, Samsara, Instacart, Opendoor.
- GuMCP open-source MCP servers (79 HN points on Show HN).
- "Gummie" meta-agent creates workflows via natural language.
- Source: [TechCrunch](https://techcrunch.com/2026/03/12/gumloop-lands-50m-from-benchmark-to-turn-every-employee-into-an-ai-agent-builder/)

#### Competely
- Instant AI-powered competitive analysis across 100+ data points.
- Saves 30-60 work hours/month. Automated monitoring every 2-4 weeks.
- Source: [Competely](https://competely.ai/)

#### Ocoya
- Social media management + AI content creation via Travis AI.
- 28 languages, 100+ templates. $15-159/mo.
- Source: [Ocoya](https://www.ocoya.com/)

### 3. NEW CONTENDER ALERTS

#### **NEW CONTENDER: GoMarble** — AI Performance Marketing Agent
- AI agent for paid ads analysis (Meta, Google, TikTok, GA4, Shopify).
- Has its own **MCP server** for connecting Claude to marketing data.
- Answers "what changed, why, and what next" across ad platforms.
- Creative analysis like a senior creative strategist.
- Services starting at $749/mo.
- **Why this matters**: MCP-native performance marketing agent — fills a gap in the catalog for paid ads optimization.
- Source: [GoMarble](https://www.gomarble.ai/), [GoMarble MCP](https://www.gomarble.ai/mcp)

#### **NEW CONTENDER: Lindy AI** — Full-Stack Marketing Agent Platform
- Agentic AI platform with specialized marketing agents: Market Research Agent, Analysis Agent, Creative Agent.
- 2,300+ app integrations. Claims 30% higher engagement, 25% better ROI.
- Won Best Personal AI Assistant Award for AI Workflow Automation (Winter 2026).
- **Why this matters**: Full-lifecycle marketing automation through coordinated AI agents — research, analysis, creative, campaign execution.
- Source: [Lindy](https://www.lindy.ai/tools/ai-for-marketing-automation), [Martech Zone](https://martech.zone/lindy-ai-agents-for-research-analysis-creative-and-campaigns/)

#### **NEW CONTENDER: SegmentStream MCP** — Marketing Attribution + Budget AI
- Native MCP server (launched Feb 2026) for marketing attribution.
- **Agentic capabilities**: AI agents pull attribution data, identify budget inefficiencies, reallocate spend, generate performance forecasts.
- Claims to be the only MCP that gives AI a full measurement engine with cross-channel attribution + budget execution.
- **Why this matters**: Only MCP-native marketing analytics/attribution tool. Fills the measurement gap.
- Source: [SegmentStream MCP](https://segmentstream.com/blog/product-updates/introducing-segmentstream-mcp-server)

#### **NEW CONTENDER: Guideline MCP** — Media Planning & Buying
- MCP server for media plan management (launched March 2026).
- Connect Claude/ChatGPT to media plans: budget allocation, vendor performance, plan-to-actual comparisons.
- Multi-step analysis across campaigns, clients, markets.
- **Why this matters**: First MCP for the media planning/buying workflow. Enterprise ad agency use case.
- Source: [PR Newswire](https://www.prnewswire.com/news-releases/guideline-launches-media-plan-management-mcp-server-enabling-agentic-ai-workflows-across-media-planning--buying-302704200.html)

#### **NEW CONTENDER: Flyweel MCP** — Ad Platform Data Connector
- MCP server connecting Claude to Google Ads + Meta Ads data.
- Read-only — query ad performance in natural language.
- Google Ads data 4-6hr lag, Meta 1-3hr lag.
- TikTok and LinkedIn on roadmap.
- **Why this matters**: Simple, focused ad data MCP — bridges the gap between ad platforms and AI agents.
- Source: [Flyweel](https://www.flyweel.co/mcp)

#### **NEW CONTENDER: Societies.io (Artificial Societies)** — AI Audience Simulation
- YC W25. $5.85M seed. AI personas simulate audience reactions.
- 300-5,000+ interconnected AI personas per simulation. 80%+ accuracy predicting social media performance.
- $40/mo self-serve (unlimited simulations). Enterprise tier for Fortune 100.
- **Why this matters**: Novel approach — test marketing messages on simulated audiences before spending on real campaigns.
- Source: [Societies.io](https://societies.io/), [HN Launch (114pts)](https://news.ycombinator.com/item?id=44755654)

#### **NEW CONTENDER: Mautic** — Open Source Marketing Automation
- 9,344 GitHub stars, 3,199 forks. Very active (pushed 2026-03-23).
- v7.0.0 released Jan 2026. 200K+ orgs use it. 1,000+ community contributors.
- PHP/Symfony, REST API. Lead scoring, behavioral prediction, email automation.
- **Why this matters**: The open-source HubSpot alternative. Self-hostable. Developer-friendly API. Missing from current catalog.
- Source: [GitHub](https://github.com/mautic/mautic), [Mautic.org](https://mautic.org/)

#### **NEW CONTENDER: Amazon Ads MCP** — Official Ad Platform MCP
- Launched Feb 2026 in open beta.
- AI agents can create campaigns, pull reports, manage billing via natural language.
- Official Amazon product — not a third-party wrapper.
- **Why this matters**: First major ad platform with an official MCP server. Signals where the industry is heading.
- Source: [Digiday](https://digiday.com/media-buying/ad-tech-briefing-amazon-launches-mcp-server-for-agent-driven-advertising/)

#### **NEW CONTENDER: Meta Manus AI** — Ads Manager AI Agent
- Meta acquired Manus AI (Dec 2025), integrated into Ads Manager by Feb 2026.
- Analyzes campaign performance, spots trends, builds reports directly inside the platform.
- **Why this matters**: Meta embedding AI agents directly into Ads Manager — native platform intelligence.
- Source: [Dataslayer](https://www.dataslayer.ai/blog/meta-added-an-ai-agent-to-ads-manager)

#### **NEW CONTENDER: HubSpot Breeze AI Agents**
- Suite of AI agents built into HubSpot: Content Agent, Customer Agent, Social Agent.
- Content Agent writes blog posts, landing pages, meta descriptions; auto-adds internal links.
- 19.2% of marketers already using AI agents end-to-end (HubSpot 2026 State of Marketing).
- **Why this matters**: Dominant mid-market CRM now has native AI agents — incumbents are moving fast.
- Source: [HubSpot Breeze](https://www.hubspot.com/products/artificial-intelligence/breeze-ai-agents)

### 4. MCP ECOSYSTEM EXPLOSION — Marketing-Specific MCPs

The MCP landscape for marketing has exploded in early 2026:

| MCP Server | Function | Status |
|---|---|---|
| SE Ranking MCP | SEO data + keyword research | Active, 8 GH stars |
| HubSpot MCP | CRM + marketing automation | Active (already in catalog) |
| GoMarble MCP | Paid ads analytics (Meta, Google, Shopify) | Active, NEW |
| SegmentStream MCP | Attribution + budget optimization | Launched Feb 2026, NEW |
| Guideline MCP | Media plan management | Launched Mar 2026, NEW |
| Flyweel MCP | Google Ads + Meta Ads data | Active, NEW |
| Amazon Ads MCP | Campaign management (official) | Open beta Feb 2026, NEW |
| Windsor.ai MCP | Cross-channel attribution | Active, NEW |
| Adzviser MCP | Google + Meta Ads reporting | Active, NEW |
| Dataslayer MCP | 50+ platforms (Meta, Google, LinkedIn, TikTok, GA4) | Active, NEW |
| Meta Ads MCP (nictuku) | Meta Ads API | Active, NEW |

**Why this matters**: The current catalog has only 2 MCP-native entries (SE Ranking MCP, HubSpot MCP). The MCP marketing ecosystem has 10+ serious players now.

### 5. HN SIGNALS

- **Societies.io (YC W25)**: 114pts — "AI simulations of your target audience." Strong HN interest in the marketing simulation approach.
- **Gumloop GuMCP**: 79pts on Show HN — open-source MCP servers.
- **Gumshoe.ai**: 36pts — "SEO for AI." GEO/AEO tool. Worth monitoring.
- **Aventos**: 19pts — "An experiment in cheap AI SEO." Developer-oriented.

### 6. KEY TRENDS

1. **GEO/AEO is the new SEO**: Every major SEO tool (Frase, Surfer, Clearscope) now tracks AI search visibility alongside Google. "Answer Engine Optimization" is becoming a distinct discipline.

2. **Ad platform MCPs arriving fast**: Amazon (official), Meta (via Manus + third-party), Google Ads (multiple). The "chat with your ad data" use case is being commoditized.

3. **From copy tools to GTM platforms**: Copy.ai's full pivot to GTM automation signals that pure AI copywriting is no longer a defensible category. The value is in workflow orchestration.

4. **Open source gaining**: Postiz (27.5K stars), Mautic (9.3K stars) provide real alternatives to closed SaaS for social media and marketing automation respectively.

5. **$50M for Gumloop signals agent-builder demand**: Benchmark's bet on Gumloop (March 2026) validates the "non-technical workers build AI agents" thesis for marketing teams.

---

## Quotes

> "Buy Jasper for brand consistency. Buy Writesonic for pure SEO ranking. Buy Copy.ai to automate your department." — HyzenPro 2026 comparison

> "91% of marketing teams now use AI, but only 41% can confidently prove ROI." — Multiple sources, 2026

> "The MCP ecosystem has exploded from 1,000 servers in early 2025 to over 10,000 active servers today." — Stormy AI

> "Companies that consolidate their marketing technology stacks around AI-capable platforms report 50–77% reductions in technology costs." — ALM Corp

> "A 2026 audit by CData of over 2,600 MCP servers found that 82% were vulnerable to path traversal and 67% to code injection." — Security concern for all MCP-native tools

---

## Gaps in Current Catalog

1. **No paid ads MCP tools**: GoMarble MCP, Flyweel MCP, Amazon Ads MCP, SegmentStream MCP are all missing. This is the fastest-growing sub-lane.
2. **No marketing attribution/measurement tools**: SegmentStream, Windsor.ai fill this gap.
3. **No open-source marketing automation**: Mautic (9.3K stars, v7.0, 200K+ orgs) is a glaring omission.
4. **No audience simulation tools**: Societies.io represents a novel category.
5. **No full-lifecycle marketing agent platforms**: Lindy AI offers coordinated research → analysis → creative → campaign agents.
6. **No media planning MCP**: Guideline MCP is the first.
7. **No GEO/AEO-specific tools**: Frase and Surfer have evolved, but Gumshoe.ai ("SEO for AI") represents a pure-play.
8. **HubSpot Breeze not represented as AI agent**: The catalog has hubspot-mcp but doesn't capture Breeze's native AI agent capabilities.

---

## Recommended Next Step

### Deep-dive candidates (priority order):

1. **GoMarble** — MCP-native performance marketing agent with paid ads focus. Most relevant to SkillBench's agent/MCP thesis.
2. **SegmentStream MCP** — Only MCP with full attribution + budget optimization. Agentic marketing measurement.
3. **Mautic** — Open-source marketing automation (9.3K stars). The "Postiz of email marketing."
4. **Lindy AI** — Full-stack marketing agent platform. Check if there's CLI/MCP integration.
5. **Societies.io** — Novel AI audience simulation. YC-backed, 114 HN points.
6. **Gumloop** — Fresh $50M Series B. GuMCP open source. Marketing is a key vertical.

### Catalog updates needed:
- Update Frase entry to reflect "Agentic SEO & GEO" positioning + AI Search Tracking
- Update Surfer SEO for 2026 features (AI Search Guidelines, Gemini tracker)
- Update Copy.ai to reflect GTM platform pivot
- Update Gumloop with $50M Series B news
- Update Postiz stars (27.5K, up from 27.3K in current catalog)
- Consider adding new sub-lane: "Ad Platform MCPs" or "Marketing Data MCPs"
