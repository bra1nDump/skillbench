# Deep-Dive Findings — Product / Business Development

## Scope

Evidence-backed deep-dive for the **product-business-development** problem space. Every claim backed by public artifacts passing the signal quality bar. Covers 8 lanes + 2 new contenders/lanes.

## Date

2026-03-24T02:15Z

## Inputs

### Web Searches (40+ queries)
- Firecrawl vs Exa benchmark comparison, npm downloads, reviews
- HubSpot MCP vs Salesforce MCP CRM comparison 2026
- PostHog vs Amplitude vs Mixpanel MCP analytics comparison
- Linear vs Asana vs Monday vs ClickUp MCP PM comparison
- Zapier vs n8n MCP automation self-hosted comparison
- Notion MCP 3.3 custom agents, Atlassian official MCP GA
- Gong Mission Andromeda MCP GA timeline
- Dynamics 365 ERP MCP server February 2026
- Pipedrive MCP, ClickUp MCP, Productboard MCP
- Klavis Strata YC X25 progressive discovery
- Best MCP servers business tools 2026 rankings (K2view, Builder.io, Skyvia, CyberPress, AIMultiple)
- Cross-lane "switched from X to Y" and "X vs Y MCP" queries

### Hacker News Algolia (12 queries)
- firecrawl MCP, exa MCP, mcp-atlassian, hubspot MCP, salesforce agentforce MCP
- posthog MCP, notion MCP, zapier MCP, n8n MCP, linear MCP, gong MCP
- klavis MCP, best MCP servers 2026, MCP business tools

### GitHub API (20+ repos)
- Stars, forks, push dates, contributors, open issues for all major contenders

### npm/PyPI Downloads
- firecrawl-mcp, exa-mcp-server, @notionhq/notion-mcp-server, @mondaydotcomorg/monday-api-mcp, mcp-atlassian (PyPI)

### PulseMCP Registry
- Firecrawl, Notion, Zapier, PostHog, Linear, HubSpot

### YouTube Searches (8 queries)
- JS-rendered pages; limited extraction. Blog/course aggregator references collected instead.

---

## Findings

---

### Lane 1: Research / Extraction

#### Firecrawl MCP — CONFIRMED #1

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (MCP server) | 5,834 | 2026-03-24 |
| GitHub stars (platform) | 96,977 | 2026-03-24 |
| GitHub forks (MCP) | 654 | 2026-03-24 |
| npm weekly downloads | 19,823 | 2026-03-22 |
| PulseMCP weekly | 50.6K | 2026-03-24 |
| PulseMCP all-time | 1.2M | 2026-03-24 |
| Open issues | 86 | 2026-03-24 |
| Last push | 2026-03-23 | — |
| Funding | $14.5M Series A (Aug 2025) | — |
| Developer count | 350,000+ | per company claims |

**[STRONG] AIMultiple MCP Benchmark (March 2026)**
Source: [aimultiple.com/browser-mcp](https://aimultiple.com/browser-mcp)
Date: 2026-03 | Engagement: Major industry benchmark site
Who: AIMultiple (independent research firm)
Key data: Firecrawl 83% accuracy, 7s speed (fastest of 9 tested), 65% scalability. Exa 23% accuracy (last place). Bright Data 100% accuracy but 30s speed.
Why it matters: Independent third-party benchmark confirms Firecrawl as the fastest MCP extractor. Exa's 23% confirms it's search-first, not extraction-first.

**[STRONG] SearchMCP F1 Benchmark**
Source: [firecrawl.dev/alternatives/firecrawl-vs-exa](https://www.firecrawl.dev/alternatives/firecrawl-vs-exa) — `selfReported: true` for Firecrawl's own site, but F1 scores are from SearchMCP (third party)
Date: 2026 | Engagement: Referenced in multiple comparison articles
Who: SearchMCP (independent benchmark)
Key data: Firecrawl F1 0.638, 77.2% coverage vs Exa F1 0.508, 69.2% coverage
Why it matters: F1 gap of 0.13 is significant in extraction benchmarks.

**[MODERATE] Proxyway Anti-Bot Benchmark (Late 2025)**
Source: [use-apify.com/blog/firecrawl-review-2026](https://use-apify.com/blog/firecrawl-review-2026)
Date: Late 2025 | Who: Proxyway (independent)
Key data: 33.69% success rate at 2 req/s across 15 protected sites (vs 93.14% top performer). Drops to 26.69% at 10 req/s.
Why it matters: Firecrawl struggles with heavily protected sites. Not a general-purpose scraper for anti-bot targets.

**[MODERATE] Robert Yang Public Comparison**
Source: Discover findings reference @GuangyuRobert side-by-side comparison
Date: 2026 | Who: Robert Yang (known AI/developer builder)
Key data: Compared Exa/Perplexity/Firecrawl/Bright Data MCP with side-by-side results
Why it matters: Independent practitioner comparison adds credibility.

**Verdict:** Firecrawl holds #1 decisively. 19.8K npm/week, 5,834 stars, 83% AIMultiple accuracy, fastest speed. The anti-bot weakness (34% on protected sites) is a niche limitation, not a general threat.

---

#### Exa MCP — CONFIRMED #2

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 4,078 | 2026-03-24 |
| GitHub forks | 307 | 2026-03-24 |
| npm weekly downloads | 5,999 | 2026-03-22 |
| Open issues | 44 | 2026-03-24 |
| Last push | 2026-03-23 | — |

**[STRONG] AIMultiple Benchmark — Exa as Search-First**
Source: [aimultiple.com/browser-mcp](https://aimultiple.com/browser-mcp)
Date: 2026-03 | Who: AIMultiple (independent)
Key data: 23% accuracy on extraction benchmark (last of 9). 15s speed.
Why it matters: Confirms Exa is not competing on extraction — it's a neural search engine. Different use case.

**[MODERATE] Feb 2026 API Updates**
Source: [exa.ai/docs/changelog/february-2026-api-updates](https://exa.ai/docs/changelog/february-2026-api-updates)
Date: 2026-02-02 | Who: Exa (official) — `selfReported: true`
Key data: New `maxCharacters` for highlights, `maxAgeHours` for freshness filtering, `get_code_context_exa` tool for GitHub/SO/docs search
Why it matters: Active development, deepening the search-first niche.

**Verdict:** Exa holds #2 as the complementary search-first tool. 6K npm/week vs Firecrawl's 19.8K. The two are complementary, not competing: Exa for discovery, Firecrawl for extraction.

---

### Lane 2: Enterprise Operating Surface

#### mcp-atlassian (community) — CONFIRMED #1 (with caveats)

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 4,700 | 2026-03-24 |
| GitHub forks | 1,028 | 2026-03-24 |
| Contributors | 30 | 2026-03-24 |
| PyPI weekly downloads | 134,943 | 2026-03-24 |
| PyPI monthly downloads | 773,679 | 2026-03-24 |
| Open issues | 185 | 2026-03-24 |
| Last push | 2026-03-02 | — |

**[STRONG] CVE-2026-27825 — Critical Security Vulnerability**
Source: [advisories.gitlab.com/pkg/pypi/mcp-atlassian/CVE-2026-27825](https://advisories.gitlab.com/pkg/pypi/mcp-atlassian/CVE-2026-27825/)
Date: 2026 | CVSS: 9.0 (Critical)
Who: Security advisory (independent)
Key data: Arbitrary file write via unconstrained `download_path` in `confluence_download_attachment`. CWE-22 (Path Traversal). Fixed in v0.17.0+.
Why it matters: CRITICAL — enterprises must ensure they're on 0.17.0+. This vulnerability undermines trust for the community server in enterprise contexts.

**Verdict:** mcp-atlassian holds #1 by traction (134K PyPI/week, 4,700 stars, 30 contributors). But the CVSS 9.0 vulnerability is a serious mark. Enterprise buyers should prefer Atlassian Official for security.

---

#### Atlassian Official Remote MCP Server — NEW, #2 Enterprise

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 477 | 2026-03-24 |
| GitHub forks | 49 | 2026-03-24 |
| Open issues | 38 | 2026-03-24 |
| Last push | 2026-03-12 | — |

**[STRONG] GA Announcement — February 4, 2026**
Source: [atlassian.com/blog/announcements/atlassian-rovo-mcp-ga](https://www.atlassian.com/blog/announcements/atlassian-rovo-mcp-ga)
Date: 2026-02-04 | Who: Atlassian (official) — `selfReported: true`
Key data: Atlassian-hosted, OAuth 2.1, admin controls, MCP usage logging/audit. Supported AI clients: AWS, ChatGPT, Claude, Cursor, Devin, Docker, Figma, GitHub, Google, Lovable, Mistral, Postman, VS Code, WRITER.
Why it matters: Enterprise-grade auth and security from the platform vendor. No self-hosting needed.

**[STRONG] Rovo MCP Gallery & Enterprise Adoption Stats**
Source: [atlassian.com/blog/announcements/rovo-mcp-gallery](https://www.atlassian.com/blog/announcements/rovo-mcp-gallery), [SiliconANGLE](https://siliconangle.com/2026/02/25/atlassian-embeds-agents-jira-embraces-mcp-third-party-integrations/)
Date: 2026-02-25 | Who: SiliconANGLE (independent tech press)
Key data: Nearly 1/3 of agentic MCP operations are writes. 93% of MCP usage from paid tiers. Enterprise customers account for nearly half of MCP usage. Gallery partners: Amplitude, Box, Canva, Figma, Gamma, GitHub, Intercom, New Relic, Replit.
Why it matters: Independent confirmation of enterprise dominance. The "1/3 writes" stat shows real operational use, not just reads.

**Verdict:** Atlassian Official should replace Rovo as #2. It IS the Rovo MCP Server (GA Feb 2026). Stars are low (477) but it's hosted — stars don't matter. Enterprise adoption stats are compelling.

---

### Lane 3: Startup Operating Surface

#### Notion MCP — CONFIRMED #1

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars | 4,091 | 2026-03-24 |
| GitHub forks | 515 | 2026-03-24 |
| npm weekly downloads (@notionhq/notion-mcp-server) | 29,114 | 2026-03-22 |
| npm weekly downloads (community notion-mcp-server) | 2,305 | 2026-03-22 |
| PulseMCP weekly | 48.3K | 2026-03-24 |
| PulseMCP all-time | 1.0M | 2026-03-24 |
| Open issues | 120 | 2026-03-24 |
| Last push | 2026-03-18 | — |

**[STRONG] Notion 3.3 Custom Agents Launch (Feb 24, 2026)**
Source: [notion.com/releases/2026-02-24](https://www.notion.com/releases/2026-02-24)
Date: 2026-02-24 | Who: Notion (official) — `selfReported: true`
Key data: Fully autonomous agents, 24/7 operation, trigger/schedule-based. MCP integrations with Slack, Linear, Figma, HubSpot, FigJam. Early testers created 21,000+ Custom Agents; 2,800 running at Notion HQ. One org eliminated 20h/week; another achieved 25%+ autonomous ticket resolution.
Why it matters: Notion is becoming an agent platform, not just a workspace. 21K agents created shows massive adoption.

**[MODERATE] Notion MCP Architecture Deep-Dive**
Source: [notion.com/blog/notions-hosted-mcp-server-an-inside-look](https://www.notion.com/blog/notions-hosted-mcp-server-an-inside-look)
Date: 2026 | Who: Notion engineering (official) — `selfReported: true`
Key data: Hosted remote server with HTTP + SSE transports. Session state in Durable Objects. Markdown-based responses for token efficiency. Tools are ground-up API rewrites (not wrappers).
Why it matters: Technical sophistication confirms this is a serious engineering investment.

**[MODERATE] Pricing: Free through May 3, 2026**
Source: [notion.com/releases/2026-02-24](https://www.notion.com/releases/2026-02-24)
Date: 2026-02-24 | Who: Notion
Key data: Free until May 4; then $10/1,000 credits (Business/Enterprise). MiniMax M2.5 added (10x cost-efficient for basic tasks).

**Verdict:** Notion holds #1 decisively. 29.1K npm/week, 48.3K PulseMCP/week, 4,091 stars. The agent platform pivot (21K agents) is a moat-builder.

---

### Lane 4: CRM

#### HubSpot MCP — CONFIRMED #1

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (community best: peakmojo/mcp-hubspot) | 117 | 2026-03-24 |
| PulseMCP weekly | 12.2K | 2026-03-24 |
| PulseMCP all-time | 338K | 2026-03-24 |
| Official MCP | Hosted at mcp.hubspot.com | — |

**[STRONG] Official HubSpot MCP — Two Servers**
Source: [developers.hubspot.com/mcp](https://developers.hubspot.com/mcp)
Date: 2026-02-19 (Dev server GA) | Who: HubSpot (official) — `selfReported: true`
Key data:
1. **Remote MCP Server** (Public Beta): Read-only access to contacts, companies, deals, tickets, invoices, products, line items, quotes, subscriptions, orders, carts, users. OAuth 2.0.
2. **Developer MCP Server** (GA Feb 19, 2026): Local CLI-based (`hs mcp setup`), CMS themes/templates/modules, serverless functions, app analytics. Works with VS Code, Claude Code, Cursor, Codex, Gemini CLI.
Why it matters: First major CRM to ship production-grade MCP. Two-server strategy (ops + dev) is unique.

**[MODERATE] HubSpot vs Salesforce Comparison**
Source: [vantagepoint.io/blog/sf/salesforce-vs-hubspot-2026-comparison](https://vantagepoint.io/blog/sf/salesforce-vs-hubspot-2026-comparison)
Date: 2026 | Who: VantagePoint (independent consultant)
Key data: HubSpot wins on entry price, simplicity, faster ramp. Salesforce wins on customization, multi-team orchestration. HubSpot is read-only; Salesforce supports CRUD.
Why it matters: Independent confirmation of the read-only limitation as HubSpot's main weakness.

**Verdict:** HubSpot holds #1 by PulseMCP (12.2K/week, 6x Salesforce) and being first-to-market. Read-only limitation is real but offset by open interoperability strategy.

---

#### Salesforce MCP — CONFIRMED #2

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (salesforcecli/mcp) | 325 | 2026-03-24 |
| GitHub forks | 81 | 2026-03-24 |
| Open issues | 25 | 2026-03-24 |
| Last push | 2026-03-23 | — |

**[STRONG] Three Prebuilt MCP Servers + Agentforce MCP Client**
Source: [developer.salesforce.com/blogs/2025/06/introducing-mcp-support-across-salesforce](https://developer.salesforce.com/blogs/2025/06/introducing-mcp-support-across-salesforce)
Date: 2025-06-23 | Who: Salesforce (official) — `selfReported: true`
Key data:
1. Salesforce DX MCP Server (Developer Preview) — deploy code, create scratch orgs
2. Heroku Platform MCP Server (GA) — manage Heroku apps, dynos, add-ons
3. MuleSoft MCP Server (GA) — convert APIs/Mule apps to MCP servers
4. Agentforce MCP Client — native MCP client, no custom code (Pilot Jul 2025)
5. Hosted MCP Servers — Beta Oct 2025, GA target Feb 2026
Why it matters: Most comprehensive enterprise MCP suite (3 servers + client + hosted). CRUD capabilities > HubSpot read-only.

**Verdict:** Salesforce holds #2. More powerful than HubSpot (CRUD, multi-server) but proprietary/complex. Lower community traction.

---

#### Dynamics 365 MCP — CONFIRMED #3

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (community best) | 30 | 2026-03-24 |
| Last push | 2026-03-23 | — |

**[STRONG] Dynamics 365 ERP MCP Server — GA February 2026**
Source: [walkerscott.co/2026/03/dynamics-365-moves-closer-toward-agentic-ai-with-erp-mcp-server-feb-2026](https://walkerscott.co/2026/03/dynamics-365-moves-closer-toward-agentic-ai-with-erp-mcp-server-feb-2026/)
Date: 2026-03 | Who: Walker Scott (independent Dynamics consultant)
Key data: Three tool categories — Form Tools (AI drives D365 UI), Data Tools (CRUD via data entities), Action Tools (execute business logic like journal posting). Dynamic server unlocks "hundreds of thousands" of ERP functions.
Why it matters: Independent consultant confirmation. Deepest ERP integration of any MCP server.

**[MODERATE] Real-World Use Cases**
Source: [microsoft.com/dynamics-365/blog](https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2025/11/11/dynamics-365-erp-model-context-protocol/)
Date: 2025-11-11 → GA Feb 2026 | Who: Microsoft (official) — `selfReported: true`
Key data: Supplier agents processing vendor emails → PO updates. Reconciliation agents identifying transaction discrepancies. Data quality agents reviewing configs.

**Verdict:** Dynamics 365 holds #3. Enterprise-only but the deepest platform play (MCP + Copilot + M365). Low community traction (30 stars) is expected for enterprise/proprietary.

---

#### Pipedrive MCP — NEW CONTENDER, #4 CRM candidate

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (WillDent/pipedrive-mcp-server) | 51 | 2026-03-24 |
| GitHub stars (Wirasm/pipedrive-mcp) | 11 | 2026-03-24 |
| GitHub forks (top repo) | 31 | 2026-03-24 |
| Last push (top repo) | 2025-10-10 | — (stale) |
| HN signal | None | — |

**[WEAK] Community-Only MCP Ecosystem**
Source: GitHub search, Composio, Coupler.io, n8n templates
Key data: Multiple third-party implementations (Composio, Coupler.io, n8n 45-operation template). No official Pipedrive MCP server. Top repo stale since Oct 2025.
Why it matters: Demand signal exists (multiple implementations) but no official backing and repos are stale.

**Verdict:** Pipedrive should be added as CRM #4 / watch tier. Community-only, stale repos, no HN signal. Genuine mid-market demand but unproven traction.

---

#### Gong MCP — NEW CONTENDER, Sales Intelligence Lane

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (community: kenazk/gong-mcp) | 28 | 2026-03-24 |
| ARR | ~$300M | per press reports |
| Customers | 5,000+ | per Gong Mar 2026 |
| HN signal | None direct | — |

**[STRONG] Mission Andromeda Launch (Feb 25, 2026)**
Source: [gong.io/press/gong-launches-mission-andromeda](https://www.gong.io/press/gong-launches-mission-andromeda-expanding-its-revenue-ai-os-to-enablement-and-account-management)
Date: 2026-02-25 | Who: Gong (official) — `selfReported: true`, but corroborated below
Key data: New products Gong Enable (AI coaching) + Gong Assistant (conversational AI). Built-in MCP client AND server. Data access/usage/provenance controls.

**[STRONG] VentureBeat Coverage of Mission Andromeda**
Source: [venturebeat.com/technology/gong-launches-mission-andromeda-with-ai-sales-coaching-chatbot-and-open-mcp](https://venturebeat.com/technology/gong-launches-mission-andromeda-with-ai-sales-coaching-chatbot-and-open-mcp)
Date: 2026-02-25 | Who: VentureBeat (independent tech press)
Key quote: "Teams that regularly use AI tools generate 77% more revenue per representative than those that don't — a gap Gong characterizes as a six-figure difference per salesperson annually."
Why it matters: Independent press coverage corroborates the launch and the revenue impact claim.

**[STRONG] MCP Announcement with Partner Endorsements (Oct 2025)**
Source: [gong.io/press/gong-introduces-model-context-protocol-mcp-support](https://www.gong.io/press/gong-introduces-model-context-protocol-mcp-support-to-unify-enterprise-ai-agents-from-hubspot-microsoft-salesforce-and-others)
Date: 2025-10-21 | Who: Gong + named partner executives
Key quotes:
- **Brian Gorbett, VP Product, HubSpot:** "This interoperability makes HubSpot context accessible where customers work."
- **Karan Nigam, Microsoft:** "Enables Gong's revenue AI agents to connect into Microsoft's platforms."
- **Josh Israels, Salesforce:** "Agentic interoperability allows bi-directional access to partner data."
Why it matters: Three major CRM partners publicly endorsing Gong's MCP integration. Cross-company validation is rare.

**GA Timeline Uncertainty:** "Generally available in the coming months" (from Oct 2025 announcement). No specific GA date as of March 2026. MCP may still be in pilot/beta.

**Verdict:** Gong creates a new "Sales Intelligence" sub-lane. $300M ARR, 5K+ customers, bidirectional MCP (client+server), partner endorsements from HubSpot/Microsoft/Salesforce. However, GA timeline unclear — classify as "launching" not "GA". Recommend adding to catalog.

---

### Lane 5: Business Automation

#### Zapier MCP — CONFIRMED #1

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (zapier/zapier-mcp) | 26 | 2026-03-24 |
| PulseMCP weekly | 35.1K | 2026-03-24 |
| PulseMCP all-time | 949K | 2026-03-24 |
| Apps connected | 8,000+ | — |
| Actions available | 30,000+ | — |
| HN signal | 11 points (1 story) | — |

**[STRONG] Top MCP Server Rankings (Multiple Independent Lists)**
Source: [index.dev/blog/top-mcp-servers-for-ai-development](https://www.index.dev/blog/top-mcp-servers-for-ai-development), [cybersecuritynews.com/best-model-context-protocol-mcp-servers](https://cybersecuritynews.com/best-model-context-protocol-mcp-servers/)
Date: 2026 | Who: index.dev, CyberSecurityNews (independent)
Key data: Listed in "Top 7" and "Top 10 Best MCP Servers" lists. "Democratizes tool access for AI clients."
Why it matters: Multiple independent lists confirm Zapier's breadth-first positioning.

**[MODERATE] Pricing Model**
Source: [zapier.com/mcp](https://zapier.com/mcp), [zapier.com/blog/zapier-mcp-guide](https://zapier.com/blog/zapier-mcp-guide/)
Date: 2026 | Who: Zapier (official) — `selfReported: true`
Key data: Each MCP tool call = 2 Zapier tasks from plan quota. Sandboxed — AI can only trigger exact actions you add. $20-$100/month for most plans.

**Verdict:** Zapier holds #1 by massive margin on PulseMCP (35.1K/week) and breadth (8K apps, 30K actions). Low GitHub stars (26) because it's a hosted service — stars don't apply.

---

#### n8n MCP — UPGRADED from watch to RANKED #2

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (n8n-io/n8n platform) | 180,701 | 2026-03-24 |
| GitHub stars (czlonkowski/n8n-mcp) | 16,016 | 2026-03-24 |
| GitHub stars (leonardsellem/n8n-mcp-server) | 1,588 | 2026-03-24 |
| Last push (platform) | 2026-03-23 | — |
| Last push (n8n-mcp) | 2026-03-22 | — |
| Funding | $55M Series B (2024) | — |

**[STRONG] Native MCP Server + Client Built Into Platform**
Source: [docs.n8n.io/advanced-ai/accessing-n8n-mcp-server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/)
Date: 2026 | Who: n8n (official docs) — `selfReported: true`
Key data: MCP Server Trigger node exposes workflows as MCP tools. MCP Client Tool node consumes external MCP servers. SSE + Streamable HTTP transports. Bearer, header, OAuth2 auth. Tool filtering (all, selected, all-except).
Why it matters: Bidirectional MCP (both client and server) built natively into the platform. This is architecturally significant.

**[STRONG] n8n vs Zapier Cost Comparison (Independent)**
Source: [hatchworks.com/blog/ai-agents/n8n-vs-zapier](https://hatchworks.com/blog/ai-agents/n8n-vs-zapier/), [cipherprojects.com/blog/posts/n8n-vs-zapier-automation-tool-comparison](https://cipherprojects.com/blog/posts/n8n-vs-zapier-automation-tool-comparison/)
Date: 2026 | Who: HatchWorks, Cipher Projects (independent consultants)
Key data: At 10K+ automations/month — Zapier $3,588/year vs n8n self-hosted ~$60/year (VPS only). n8n counts entire workflow as 1 execution regardless of node count. Native AI Agent nodes + local LLM support (Ollama).
Why it matters: Two independent sources confirm 60x cost advantage at scale. Critical for enterprise adoption.

**[STRONG] czlonkowski/n8n-mcp — 16K Stars**
Source: [github.com/czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp)
Date: 2026-03-22 | Who: Community
Key data: "MCP for Claude Desktop / Claude Code / Windsurf / Cursor to build n8n workflows for you." 16,016 stars, 2,762 forks. Active development.
Why it matters: 16K stars on a community MCP server is extraordinary — higher than most official MCP servers. Shows massive developer demand.

**[MODERATE] n8n as Agentic MCP Hub**
Source: [infralovers.com/blog/2026-03-09-n8n-agentic-mcp-hub](https://www.infralovers.com/blog/2026-03-09-n8n-agentic-mcp-hub/)
Date: 2026-03-09 | Who: Infralovers (independent)
Key data: n8n positioned as the "agentic MCP hub" — multi-agent systems via AI Agent Tool node, can consume and expose MCP.

**Verdict:** n8n is definitively upgraded from watch to ranked #2. The 16K-star community MCP server, native platform MCP (bidirectional), 180K platform stars, and 60x cost advantage over Zapier make this a serious contender. Self-hosted data sovereignty is the key differentiator.

---

### Lane 6: Product Analytics

#### PostHog MCP — CONFIRMED #1

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (PostHog platform) | 32,191 | 2026-03-24 |
| GitHub stars (PostHog/mcp) | 143 | 2026-03-24 (archived, moved to monorepo) |
| PulseMCP weekly | 20.6K | 2026-03-24 |
| PulseMCP all-time | 5.7M | 2026-03-24 |
| PulseMCP all-time rank | #6 globally | — |
| Tool count | 27+ | — |

**[STRONG] 27+ MCP Tools — Most Comprehensive Analytics MCP**
Source: [posthog.com/docs/model-context-protocol](https://posthog.com/docs/model-context-protocol)
Date: 2026 | Who: PostHog (official) — `selfReported: true`
Key data: HogQL queries (trends, funnels, retention, custom), feature flags, experiments, dashboards, error tracking, LLM analytics (token usage, latency, costs). Install: `npx @posthog/wizard@latest mcp add`. Supports Cursor, Claude Code, Claude Desktop, Codex, VS Code, Zed.
Why it matters: 27 tools is more than any other analytics MCP. LLM analytics (traces, costs) is a unique differentiator for AI product teams.

**Verdict:** PostHog holds #1 decisively. 5.7M PulseMCP all-time (#6 globally) is staggering. 27+ tools, unique LLM analytics. The gap to #2 (Amplitude) is enormous.

---

#### Amplitude MCP — CONFIRMED #2

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (amplitude/mcp-server-guide) | 44 | 2026-03-24 |
| GitHub stars (amplitude/mcp-marketplace) | 17 | 2026-03-24 |
| PulseMCP weekly | ~6.2K (prior data) | — |

**[MODERATE] AI Agents Launch (Feb 2026)**
Source: [siliconangle.com/2025/10/21/amplitude-introduces-mcp-ai-agents](https://siliconangle.com/2025/10/21/amplitude-introduces-mcp-ai-agents-automate-behavioral-data-analysis/), [amplitude.com/mcp-server](https://amplitude.com/mcp-server)
Date: MCP Oct 2025, Agents Feb 2026 | Who: SiliconANGLE (independent)
Key data: MCP server launched Oct 2025. Feb 2026: Global Agent + 4 specialized agents. Supports Claude, Cursor, Figma, Lovable, Notion, GitHub. MCP marketplace concept.
Why it matters: Amplitude is investing heavily in agentic AI, but traction metrics lag PostHog significantly.

**[MODERATE] Rovo MCP Gallery Partner**
Source: [atlassian.com/blog/announcements/rovo-mcp-gallery](https://www.atlassian.com/blog/announcements/rovo-mcp-gallery)
Date: 2026-02-25 | Who: Atlassian (independent confirmation)
Key data: Amplitude listed as Rovo MCP Gallery launch partner.
Why it matters: Cross-platform validation — Atlassian chose Amplitude for their MCP gallery.

**Verdict:** Amplitude holds #2. AI Agents launch (Feb 2026) and Rovo Gallery partnership are positive signals. Gap to PostHog remains very large (44 vs 32K stars, ~6K vs 20K PulseMCP/week).

---

#### Mixpanel MCP — CONFIRMED #3

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (dragonkhoi/mixpanel-mcp) | 19 | 2026-03-24 |
| GitHub forks | 18 | 2026-03-24 |
| Last push | 2025-03-14 | — (stale) |

**[MODERATE] Official Beta Launch (Aug 2025)**
Source: [mixpanel.com/blog/mixpanel-mcp-server](https://mixpanel.com/blog/mixpanel-mcp-server/), [docs.mixpanel.com/docs/features/mcp](https://docs.mixpanel.com/docs/features/mcp)
Date: 2025-08-29 | Who: Mixpanel (official) — `selfReported: true`
Key data: Beta. Supports Claude Desktop, Cursor, ChatGPT, Gemini. Events, funnels, flows, retention, session replays. US data center only (EU/IN expansion in progress).
Why it matters: Official beta with multi-client support. US-only is a limitation.

**Verdict:** Mixpanel holds #3. Official beta is a step up from "watch" but the repo is stale (last push Mar 2025), 19 stars, US-only. Distant third behind PostHog and Amplitude.

---

### Lane 7: Project / PM

#### Linear MCP — CONFIRMED #1

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (top community: jerhadf/linear-mcp-server) | 347 | 2026-03-24 |
| GitHub stars (tacticlaunch/mcp-linear) | 134 | 2026-03-24 |
| GitHub stars (cline/linear-mcp) | 128 | 2026-03-24 |
| PulseMCP weekly | 13.0K | 2026-03-24 |
| PulseMCP all-time | 279K | 2026-03-24 |

**[STRONG] February 2026 PM Upgrade**
Source: [linear.app/changelog/2026-02-05-linear-mcp-for-product-management](https://linear.app/changelog/2026-02-05-linear-mcp-for-product-management), [linear.app/docs/mcp](https://linear.app/docs/mcp)
Date: 2026-02-05 | Who: Linear (official) — `selfReported: true`, confirmed by X/Twitter @linear post
Key data: New tools — initiatives, initiative updates, project milestones, project updates, label management, image loading. SSE fully removed → Streamable HTTP only. Reduced token usage.
Why it matters: This upgrade elevated Linear MCP from dev-only (issues/bugs) to full PM (initiatives, milestones, updates). Significant scope expansion.

**Verdict:** Linear holds #1 in PM. 13K PulseMCP/week, multiple community servers (347+134+128 stars), Feb 2026 PM upgrade is the most significant changelog entry of any PM MCP.

---

#### Monday.com MCP — UPGRADED to RANKED #2

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (mondaycom/mcp — official) | 383 | 2026-03-24 |
| GitHub forks | 61 | 2026-03-24 |
| npm weekly downloads (@mondaydotcomorg/monday-api-mcp) | 1,481 | 2026-03-22 |
| Open issues | 46 | 2026-03-24 |
| Last push | 2026-03-23 | — |

**[STRONG] Official MCP Server — GA, Free on All Plans**
Source: [monday.com/w/mcp](https://monday.com/w/mcp), [support.monday.com/hc/en-us/articles/28588158981266](https://support.monday.com/hc/en-us/articles/28588158981266)
Date: 2026 | Who: Monday.com (official) — `selfReported: true`
Key data: Hosted MCP with OAuth + TLS. Respects existing permissions. Available on all plans at no cost. Capabilities: project reporting, task management, cross-team visibility, CRM workflows. Works with Claude, Cursor, Copilot Studio.
Why it matters: 383 stars on the official repo is the highest of any PM MCP server. Free on all plans removes adoption barrier.

**Verdict:** Monday.com upgraded to #2. 383 official stars (highest PM MCP), GA, free on all plans. 1,481 npm/week is modest but growing.

---

#### Asana MCP — UPGRADED to RANKED #3

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (community: roychri/mcp-server-asana) | 131 | 2026-03-24 |
| GitHub forks | 59 | 2026-03-24 |
| Last push | 2026-03-21 | — |

**[STRONG] V2 MCP Server — GA February 4, 2026**
Source: [forum.asana.com/t/new-v2-mcp-server-now-generally-available/1122647](https://forum.asana.com/t/new-v2-mcp-server-now-generally-available/1122647), [developers.asana.com/docs/mcp-server](https://developers.asana.com/docs/mcp-server)
Date: 2026-02-04 | Who: Asana (official) — `selfReported: true`
Key data: V2 uses Streamable HTTP exclusively (`https://mcp.asana.com/v2/mcp`). V1 deprecated, shutdown May 11, 2026. Self-service client registration. Workspace-scoped authorization.

**CORRECTION: Tool count is ~15, not 42.** V2 consolidated/simplified the toolset. Confirmed tools: `search_objects`, `search_tasks`, `get_status_overview`, `get_task`, `get_tasks`, `create_task`, `update_task`, `create_project`, `get_project`, `get_projects`, `get_portfolio`, `get_portfolios`, `get_items_for_portfolio`, `get_user`, `get_workspace_users`. Task commenting not yet supported.

**Verdict:** Asana upgraded to #3. V2 GA is a strong signal. Tool count corrected from 42 to ~15 — V2 intentionally simplified. Commenting still missing.

---

#### ClickUp MCP — NEW CONTENDER, #4 PM

**Quantitative Traction:**

| Metric | Value | Date Checked |
|--------|-------|-------------|
| GitHub stars (community: taazkareem/clickup-mcp-server) | 23 | 2026-03-24 |
| Last push | 2026-03-23 | — |
| Status | Public Beta | — |

**[MODERATE] Official MCP Server — Public Beta**
Source: [developer.clickup.com/docs/connect-an-ai-assistant-to-clickups-mcp-server](https://developer.clickup.com/docs/connect-an-ai-assistant-to-clickups-mcp-server), [help.clickup.com/hc/en-us/articles/33335772678423](https://help.clickup.com/hc/en-us/articles/33335772678423)
Date: 2026 | Who: ClickUp (official) — `selfReported: true`
Key data: OAuth 2.1 with PKCE. HTTP + JSON-RPC 2.0. Available on all plans. Task management (assignees, priorities, due dates), release notes, status updates, portfolio summaries, time tracking, search across tasks/docs/comments. Works with ChatGPT, Cursor, Claude.
Why it matters: Major PM player with official MCP. OAuth 2.1 PKCE is the most advanced auth of any PM MCP. Free tier access.

**Verdict:** ClickUp added as #4 PM. Public beta (not GA), 23 stars, but official server with advanced auth and free tier. Worth tracking.

---

### Lane 8: Communication

#### Slack MCP — HOLDS (real but early)

No new evidence collected. No significant changes from prior assessment.

---

### NEW LANE: Sales Intelligence

#### Gong MCP — See Lane 4 (Gong section above)

Recommendation: Create "Sales Intelligence" as a sub-lane under Product/Business Development with Gong as the anchor. $300M ARR, bidirectional MCP, partner endorsements from HubSpot/Microsoft/Salesforce justify a dedicated lane.

---

### Meta-MCP Platform: Klavis/Strata

**[STRONG] Klavis/Strata — YC X25, HN 133 Points**
Source: [HN Launch](https://news.ycombinator.com/item?id=45347914) — 133 points, 22 comments (Sep 2025). [klavis.ai](https://www.klavis.ai/). [Second HN post](https://news.ycombinator.com/item?id=43896410) — 79 points, 16 comments (May 2025).
Date: 2025-09 | Who: HN community (independent)
Key data: Progressive discovery — agents discover tools logically vs tool dump. +15.2% higher pass@1 vs official GitHub MCP, +13.4% vs official Notion MCP. 83%+ accuracy on complex workflows (human eval). Co-founder co-authored Gemini paper, built Gemini's tool calling.
Why it matters: Strata's progressive discovery approach could make individual MCP servers less relevant long-term. Meta-MCP platform threat.

**Verdict:** Not a direct competitor in any lane but a platform-level threat. Monitor closely. The +13-15% accuracy improvement over official servers is significant.

---

### Additional New Contenders

#### Productboard MCP — Product Feedback (watch)

**[WEAK] Community-Only, No Official Server**
Source: GitHub search — 4+ repos (Enreign, miguelarios, kenjihikmatullah, cfdude)
Key data: 40-49 tools across implementations. No official Productboard MCP. PulseMCP listing exists (kenjihikmatullah).
Why it matters: Demand signal but no official backing. Watch tier.

#### Intercom Fin MCP — Customer Support (watch)

**[MODERATE] First-Party MCP Connector Support**
Source: [intercom.com/help/en/articles/11461635](https://www.intercom.com/help/en/articles/11461635-add-mcp-connectors-for-popular-apps-or-custom-mcps), [intercom.com/blog/introducing-model-context-protocol-fin](https://www.intercom.com/blog/introducing-model-context-protocol-fin/)
Key data: Pre-built connectors for Stripe, Shopify, Linear. Custom MCP server support. Fin gets real-time access to external tools.
Why it matters: Intercom is an MCP consumer (client), not a server. Different angle — watch for customer support use case.

---

## Pairwise Comparison: Top Contenders by Lane

### Research/Extraction: Firecrawl vs Exa

| Dimension | Firecrawl | Exa | Winner |
|-----------|-----------|-----|--------|
| Extraction accuracy | 83% (AIMultiple) | 23% (AIMultiple) | **Firecrawl** |
| F1 score | 0.638 | 0.508 | **Firecrawl** |
| Speed | 7s (fastest) | 15s | **Firecrawl** |
| npm weekly | 19,823 | 5,999 | **Firecrawl** |
| GitHub stars (MCP) | 5,834 | 4,078 | **Firecrawl** |
| Neural search quality | N/A | Best-in-class | **Exa** |
| Anti-bot performance | 34% | N/A | Weak for both |

**Conclusion:** Firecrawl dominates extraction. Exa is complementary for search/discovery. Not direct competitors.

### CRM: HubSpot vs Salesforce vs Dynamics 365

| Dimension | HubSpot | Salesforce | Dynamics 365 | Winner |
|-----------|---------|------------|--------------|--------|
| PulseMCP weekly | 12.2K | Lower | N/A | **HubSpot** |
| Write capability | Read-only | Full CRUD | Full CRUD + ERP | **Dynamics 365** |
| Open interop | Many LLM clients | Agentforce-only | Copilot ecosystem | **HubSpot** |
| MCP server count | 2 (remote + dev) | 3 + hosted | 3 categories | **Salesforce** |
| Entry barrier | Low | High | High (enterprise) | **HubSpot** |
| GitHub stars | 117 (community) | 325 (official) | 30 (community) | **Salesforce** |

**Conclusion:** HubSpot leads on adoption/accessibility. Salesforce leads on depth/CRUD. Dynamics 365 leads on ERP convergence. Each wins a different buyer.

### PM: Linear vs Monday vs Asana vs ClickUp

| Dimension | Linear | Monday.com | Asana | ClickUp | Winner |
|-----------|--------|------------|-------|---------|--------|
| PulseMCP weekly | 13.0K | N/A | N/A | N/A | **Linear** |
| Official GitHub stars | N/A (hosted) | 383 | N/A (hosted) | N/A (hosted) | **Monday** |
| Community stars | 347 | 34 | 131 | 23 | **Linear** |
| npm weekly | N/A | 1,481 | N/A | N/A | **Monday** |
| GA status | GA | GA | GA (V2) | Beta | **Linear/Monday/Asana** |
| Free tier access | N/A | All plans | N/A | All plans | **Monday/ClickUp** |
| PM features | Initiatives, milestones | Boards, workflows | 15 tools | Tasks, time, docs | **Linear** |
| Transport | Streamable HTTP | OAuth hosted | Streamable HTTP | HTTP/JSON-RPC | Tie |

**Conclusion:** Linear leads on PulseMCP, community traction, and PM-specific features (Feb 2026 upgrade). Monday.com is #2 with strongest official repo presence. Asana #3 with V2 GA. ClickUp #4 in beta.

### Automation: Zapier vs n8n

| Dimension | Zapier | n8n | Winner |
|-----------|--------|-----|--------|
| PulseMCP weekly | 35.1K | N/A | **Zapier** |
| App breadth | 8,000+ apps | 600+ nodes | **Zapier** |
| GitHub stars | 26 | 180,701 (platform), 16,016 (MCP) | **n8n** |
| Self-host option | No | Yes (free) | **n8n** |
| Cost at 10K+/mo | $3,588/yr | ~$60/yr | **n8n** |
| Bidirectional MCP | Server only | Client + Server | **n8n** |
| Local LLM support | No | Ollama | **n8n** |
| Ease of use | Higher | Lower (technical) | **Zapier** |

**Conclusion:** Zapier leads on adoption (PulseMCP) and breadth. n8n leads on cost, flexibility, GitHub traction, and bidirectional MCP. Different buyer profiles: Zapier for low-code/ease, n8n for technical/cost-sensitive.

---

## Quantitative Traction Summary Table

| Solution | GitHub Stars | Weekly DL | PulseMCP/wk | PulseMCP All-Time | GA Status |
|----------|-------------|-----------|-------------|-------------------|-----------|
| **Firecrawl MCP** | 5,834 (MCP) / 96,977 (platform) | 19,823 npm | 50.6K | 1.2M | GA |
| **Exa MCP** | 4,078 | 5,999 npm | — | — | GA |
| **mcp-atlassian** | 4,700 | 134,943 PyPI | — | — | GA (CVE fixed in 0.17.0) |
| **Atlassian Official** | 477 | N/A (hosted) | — | — | GA (Feb 2026) |
| **Notion MCP** | 4,091 | 29,114 npm | 48.3K | 1.0M | GA |
| **HubSpot MCP** | 117 (community) | N/A (hosted) | 12.2K | 338K | Remote: Beta; Dev: GA |
| **Salesforce MCP** | 325 | N/A | — | — | Mixed (DX Preview, Heroku/Mule GA) |
| **Dynamics 365 MCP** | 30 (community) | N/A | — | — | GA (Feb 2026) |
| **Gong MCP** | 28 (community) | N/A | — | — | Pilot/Beta |
| **Pipedrive MCP** | 51 (community) | N/A | — | — | Community only |
| **Zapier MCP** | 26 | N/A (hosted) | 35.1K | 949K | GA |
| **n8n MCP** | 16,016 (community) / 180,701 (platform) | N/A | — | — | GA (native) |
| **PostHog MCP** | 143 (archived) / 32,191 (platform) | N/A | 20.6K | 5.7M | GA |
| **Amplitude MCP** | 44 + 17 | N/A | ~6.2K | — | GA + Agents (Feb 2026) |
| **Mixpanel MCP** | 19 | N/A | — | — | Beta (Aug 2025) |
| **Linear MCP** | 347 (community best) | N/A | 13.0K | 279K | GA |
| **Monday.com MCP** | 383 (official) | 1,481 npm | — | — | GA |
| **Asana MCP** | 131 (community) | N/A | — | — | GA V2 (Feb 2026) |
| **ClickUp MCP** | 23 (community) | N/A | — | — | Public Beta |

---

## Quotes

> "Teams that regularly use AI tools generate 77% more revenue per representative than those that don't — a gap Gong characterizes as a six-figure difference per salesperson annually."
> — [VentureBeat, Feb 2026](https://venturebeat.com/technology/gong-launches-mission-andromeda-with-ai-sales-coaching-chatbot-and-open-mcp)

> "Nearly 1/3 of agentic MCP operations are writes (not just reads). 93% of MCP usage comes from paid tiers. Enterprise customers account for nearly half of MCP usage."
> — [Atlassian Rovo MCP Gallery announcement, Feb 2026](https://www.atlassian.com/blog/announcements/rovo-mcp-gallery)

> "At 10K+ automations/month, Zapier costs $3,588/year vs n8n self-hosted ~$60/year."
> — [HatchWorks, n8n vs Zapier comparison 2026](https://hatchworks.com/blog/ai-agents/n8n-vs-zapier/)

> "Early testers created 21,000+ Custom Agents; 2,800 agents running at Notion HQ. One org eliminated 20 hours/week."
> — [Notion 3.3 Release Notes, Feb 2026](https://www.notion.com/releases/2026-02-24)

> "Strata achieves +15.2% higher pass@1 vs official GitHub MCP server, +13.4% vs official Notion MCP server, 83%+ accuracy on complex workflows."
> — [Klavis/Strata HN Launch, Sep 2025](https://news.ycombinator.com/item?id=45347914) (133 points)

---

## Evidence Gaps & Unresolved Questions

1. **Gong MCP GA date unknown.** "Coming months" from Oct 2025 announcement — no confirmed GA as of March 2026. Could still be pilot.
2. **PulseMCP data missing for many contenders.** Only Firecrawl, Notion, Zapier, PostHog, Linear, HubSpot have PulseMCP weekly. n8n, Salesforce, Monday, Asana, ClickUp, Amplitude, Mixpanel, Dynamics 365 lack comparable data.
3. **YouTube video evidence thin.** JS-rendered pages prevented extraction. No strong video IDs collected for any contender.
4. **HN signal weak across the board.** No dedicated viral story (>50 points) for any individual MCP server in this category. Klavis/Strata (133 pts) is the strongest HN signal but it's a meta-platform, not a specific tool.
5. **mcp-atlassian CVE-2026-27825** — need to verify what percentage of PyPI downloads are on 0.17.0+.
6. **Asana tool count correction** — discover stage said 42 tools, actual V2 count is ~15. Future ranking materials should use corrected figure.
7. **Pipedrive repos are stale** — top repo last pushed Oct 2025. May not be actively maintained.
8. **Intercom Fin** is an MCP client (consumer), not a server. Unclear if it belongs in this category.

---

## Ranking Changes Recommended

| Solution | Current Rank | Recommended | Evidence Basis |
|----------|-------------|-------------|----------------|
| n8n MCP | Watch | **#2 Automation** | 16K community stars, native bidirectional MCP, 60x cost advantage, two independent comparisons |
| Monday.com MCP | Watch | **#2 PM** | 383 official stars, GA, free all plans, 1.5K npm/week |
| Asana MCP | Watch | **#3 PM** | V2 GA Feb 2026, streamable HTTP, ~15 tools (corrected from 42) |
| ClickUp MCP | Not listed | **#4 PM (watch)** | Official beta, OAuth 2.1 PKCE, free tier. Still beta. |
| Mixpanel MCP | Watch | **#3 Analytics** | Official beta, multi-client support. Distant third. |
| Gong MCP | Not listed | **New lane: Sales Intelligence** | $300M ARR, bidirectional MCP, VentureBeat coverage, 3 partner endorsements |
| Pipedrive MCP | Not listed | **#4 CRM (watch)** | Community-only, stale repos. Demand signal but no official backing. |
| Atlassian Official | Not listed separately | **Replace Rovo as #2 Enterprise** | GA Feb 2026, OAuth 2.1, enterprise adoption stats |
| Productboard MCP | Not listed | **Watch (Product Feedback)** | 4+ community repos, no official server |
| Klavis/Strata | Not listed | **Monitor (Meta-MCP)** | YC X25, 133 HN pts, +13-15% accuracy improvement |

---

## Recommended Next Steps

1. **Add Gong MCP to catalog** as anchor for "Sales Intelligence" sub-lane. Track GA timeline.
2. **Add ClickUp MCP to catalog** as #4 PM. Promote to ranked when GA ships.
3. **Upgrade n8n to ranked #2 Automation.** Evidence is overwhelming (16K stars, native MCP, cost data).
4. **Correct Asana tool count** from 42 to ~15 in all materials.
5. **Flag mcp-atlassian CVE-2026-27825** in catalog notes. Enterprise users should verify 0.17.0+.
6. **Replace "Rovo MCP" with "Atlassian Official MCP Server"** as #2 Enterprise — they are the same product (GA Feb 2026).
7. **Add Pipedrive MCP** as CRM watch tier.
8. **Monitor Klavis/Strata** as meta-MCP platform threat.
9. **Collect PulseMCP data** for n8n, Monday, Asana, ClickUp, Salesforce, Amplitude, Mixpanel to fill the comparison gap.
10. **Retry YouTube video collection** with alternative extraction methods (API key or yt-dlp metadata).
