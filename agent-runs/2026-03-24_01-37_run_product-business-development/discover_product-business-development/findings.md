# Discover Findings — Product / Business Development

## Scope

Full discover protocol for the **product-business-development** problem space. Goal: find all serious contenders, new signals, catalog gaps, and shifts in the competitive landscape as of March 2026.

## Date

2026-03-24T01:37Z

## Inputs

### Web Searches (12 queries)
- "product business development AI tools MCP 2026 best"
- "Firecrawl vs Exa MCP comparison 2026"
- "HubSpot MCP vs Salesforce MCP CRM AI integration 2026"
- "PostHog MCP product analytics AI agent 2026"
- "Linear MCP project management AI tools comparison 2026"
- "Notion MCP server AI agent productivity 2026"
- "mcp-atlassian Jira Confluence AI integration 2026"
- "Zapier MCP server AI agent automation 2026 new"
- "n8n MCP server 2026 launch"
- "Amplitude MCP OR Mixpanel MCP product analytics 2026"
- "Monday.com MCP server OR Asana MCP project management 2026"
- "Gong MCP sales intelligence AI 2026"
- "Dynamics 365 MCP Microsoft CRM AI agent 2026"
- "new MCP servers business tools March 2026 launched"
- "Stripe MCP OR Intercom MCP OR Zendesk MCP OR ClickUp MCP business tools 2026"
- "Pipedrive MCP OR Freshsales MCP OR Close CRM MCP sales AI 2026"
- "Productboard MCP server GitHub stars 2026"
- "ClickUp MCP server features tools 2026"
- "Slashy OR Alloy Automation MCP OR Strata MCP OR Klavis business tool MCP 2026"
- "Gong MCP server launch March 2026 Mission Andromeda"

### Hacker News Algolia (7 queries)
- MCP product business (points>10)
- Firecrawl MCP (points>10)
- HubSpot MCP CRM (points>5)
- PostHog analytics MCP (points>5)
- Notion MCP server (points>10)
- Zapier n8n automation MCP (points>10)
- Linear project management AI (points>10)
- Gong MCP sales AI (points>5)
- n8n MCP automation (points>5)

### PulseMCP Registry (6 server pages)
- Firecrawl, HubSpot, PostHog, Zapier, Notion, Linear

### GitHub API (attempted, rate-limited)

---

## Findings

### Lane 1: Research/Extraction

#### Firecrawl MCP — STILL #1
- **PulseMCP:** 50.6K/wk (#33 weekly, #35 all-time), 1.2M all-time visits
- **Benchmarks confirmed:** 83% accuracy (AIMultiple), F1 0.638 (SearchMCP), 77.2% coverage
- **Competitor comparison:** Firecrawl (F1 0.638) vs Exa (F1 0.508) — Firecrawl wins on extraction, Exa wins on neural search/discovery
- **Pricing:** Flat 1 credit = 1 page ($83/100K) vs Exa variable (75-750+ credits/search)
- **Signal:** Robert Yang (@GuangyuRobert) public comparison of Exa/Perplexity/Firecrawl/Bright Data MCP with side-by-side results
- **Why this matters:** Firecrawl continues to widen its lead in extraction; Exa is complementary (search-first vs extraction-first) rather than a direct threat

#### Exa MCP — HOLDS #2
- Search-first / neural approach — best for discovery and "find similar" workflows
- Complementary to Firecrawl: use Exa for discovery, pipe URLs to Firecrawl for extraction
- No major new signals since last ranking

### Lane 2: Enterprise Operating Surface

#### mcp-atlassian (community) — STILL #1
- **GitHub:** sooperset/mcp-atlassian — continued strong adoption
- **PyPI:** ~139K/wk (from prior data)
- **Signal:** Atlassian official remote MCP server (atlassian/atlassian-mcp-server) is now GA as of Feb 2026
- **Why this matters:** Two-horse race emerging — community server has traction, but official server has OAuth, enterprise security, and Atlassian backing

#### Atlassian Official Remote MCP Server — **NEW CONTENDER ALERT**
- **Source:** [atlassian.com/platform/remote-mcp-server](https://www.atlassian.com/platform/remote-mcp-server), [GitHub](https://github.com/atlassian/atlassian-mcp-server)
- **Launch:** GA February 2026
- **Features:** Hosted remote MCP server, SSE transport, OAuth, Jira + Confluence access, works with Claude/Cursor/Gemini CLI/Lovable/WRITER
- **Key differentiator:** Atlassian-hosted = no self-hosting, enterprise-grade auth, data residency
- **Rovo MCP Gallery:** Third-party agents from GitHub, Box, Figma can integrate via Rovo
- **Jira AI Agents (open beta):** Agents assignable to Jira tasks, embedded in workflows, back-and-forth in comments
- **Why this matters:** Official server may eventually eclipse community server for enterprise customers. The Rovo MCP Gallery creates a platform effect.

#### Rovo MCP — HOLDS #2
- Now GA with expanded MCP Gallery
- Can connect to third-party MCP servers (GitHub, Box, Figma)
- Enterprise positioning strengthened

### Lane 3: Startup Operating Surface

#### Notion MCP — STILL #1
- **PulseMCP:** 48.3K/wk (#34 weekly, #43 all-time), 1M all-time visits
- **GitHub:** 4.1K stars (notion-mcp-server)
- **Key update (Jan 2026):** Notion 3.2 brought AI Agents to mobile, auto-model selection (GPT-5.2, Claude Opus 4.5, Gemini 3). Agents can now run 20 min of autonomous work across hundreds of pages.
- **MCP Enterprise features:** Audit logs, multi-database queries
- **Hosted MCP server:** No self-hosting needed, OAuth-based
- **Why this matters:** Notion is building an agent platform, not just an MCP server. The 48.3K weekly PulseMCP is very strong.

### Lane 4: CRM

#### HubSpot MCP — STILL #1
- **PulseMCP:** 12.2K/wk (#127 weekly, #99 all-time), 338K all-time
- **Official MCP server:** developers.hubspot.com/mcp — read-only access to CRM data
- **ChatGPT deep-research connector** still unique
- **Limitation:** Read-only as of March 2026 — cannot update CRM data
- **Strategy:** Open interoperability with many LLMs vs Salesforce's proprietary approach

#### Salesforce MCP — HOLDS #2
- **Agentforce 3.0 (July 2025):** Native MCP client in pilot
- **Key differentiator:** Create/update/delete CRM records (vs HubSpot read-only)
- **Limitation:** Tightly scoped, proprietary, restricted to Agentforce
- **PulseMCP:** Official server exists, visited but lower than HubSpot

#### Dynamics 365 MCP — HOLDS #3
- **ERP MCP Server:** GA February 2026 — major update
- **2026 Release Wave 1 (March 18):** Immersive AI-powered workspace, Copilot across Sales/Service/Customer Insights
- **CRM + ERP convergence:** Dynamic ERP MCP allows custom agent development
- **Copilot draws on CRM + Microsoft 365 signals** (email, meeting recaps)
- **Why this matters:** Microsoft is making the deepest platform play — MCP + Copilot + M365 signals. Enterprise-only but very serious.

#### Pipedrive MCP — **NEW CONTENDER ALERT (CRM Lane)**
- **Multiple MCP implementations:** Coupler.io, Composio, Zapier, Improvado, community GitHub
- **n8n template:** Full 45-operation MCP server for Pipedrive
- **AI CRM features:** Predictive deal/lead scoring, AI sales assistant, AI email drafting
- **Why this matters:** Strong mid-market CRM with growing MCP ecosystem. Not in current catalog. Should be evaluated for #4 CRM position.
- **Source:** [github.com/Wirasm/pipedrive-mcp](https://github.com/Wirasm/pipedrive-mcp), [coupler.io/mcp/pipedrive](https://www.coupler.io/mcp/pipedrive)

### Lane 5: Business Automation

#### Zapier MCP — STILL #1
- **PulseMCP:** 35.1K/wk (#46 weekly, #51 all-time), 949K all-time
- **Capabilities:** 30,000+ actions across 8,000+ apps
- **Agents MCP Server:** Dedicated endpoint for AI agent workflows
- **2026 event:** "Automation Now + Next" — AI orchestration, Agents, Copilot, human-in-the-loop
- **Why this matters:** Zapier's MCP is the universal connector. 35.1K weekly is massive.

#### n8n MCP — UPGRADED from watch to **CONTENDER**
- **Built-in MCP server:** Ships natively in n8n — no npm/Docker needed
- **Docs MCP:** n8n docs available as MCP server (n8n.mcp.kapa.ai)
- **Multiple community servers:** czlonkowski/n8n-mcp, leonardsellem/n8n-mcp-server
- **Platform stars:** ~180K+ (n8n-io/n8n)
- **Why this matters:** n8n now has native MCP support built into the platform. This is no longer "watch" — it's a real contender. Open-source alternative to Zapier MCP with self-hosting option.

### Lane 6: Product Analytics

#### PostHog MCP — STILL #1
- **PulseMCP:** 20.6K/wk (#77 weekly, #6 all-time), 5.7M all-time visits
- **GitHub:** 32.2K stars (PostHog platform)
- **27 tools:** HogQL queries, A/B experiments, feature flags, error tracking
- **Enterprise:** GoSearch connector for permission-aware access
- **MCP Wizard:** Auto-installs into Cursor, Claude Code, VS Code, Zed
- **Why this matters:** #6 all-time globally on PulseMCP. Dominant in analytics lane.

#### Amplitude MCP — HOLDS #2
- MCP server allows AI assistants to interface with Amplitude analytics
- Track events, pageviews, revenue via natural language
- **PulseMCP:** ~6.2K/wk (from prior data)
- Gap to PostHog remains very large

#### Mixpanel MCP — UPGRADED from watch to **#3**
- **Official MCP server launched (beta):** [mixpanel.com/blog/mixpanel-mcp-server](https://mixpanel.com/blog/mixpanel-mcp-server/)
- **PulseMCP listing confirmed:** pulsemcp.com/servers/mixpanel
- **Capabilities:** Query events, funnels, retention, user profiles via LLM
- **Target users:** Data analysts (reduce repetitive requests), PMs (explore journeys without analysts), non-technical teams (natural language cohort analysis)
- **Why this matters:** Official Mixpanel MCP server moves this from "watch" to ranked. The $25.4B product analytics market (18.3% CAGR) justifies tracking all three.

### Lane 7: Project/PM

#### Linear MCP — STILL #1
- **PulseMCP:** 13K/wk (#123 weekly, #134 all-time), 279K all-time
- **Feb 2026 PM upgrade:** Initiatives, milestones, updates — full PM tool, not just dev
- **Triage Intelligence:** AI severity assessment, auto-routing to engineering cycles
- **Why this matters:** Linear's MCP is the most complete PM integration. Feb upgrade was significant.

#### Monday.com MCP — UPGRADED from watch to **#2 contender**
- **Official MCP package:** @mondaydotcomorg/monday-api-mcp
- **Capabilities:** Manage boards/items, workflow automation, user management, collaboration
- **Why this matters:** Official npm package makes this a real contender, no longer just "watch"

#### Asana MCP — UPGRADED from watch to **#3 contender**
- **Official MCP server:** developers.asana.com/docs/mcp-server
- **42 tools:** Tasks, projects, goals, dependencies, resource planning, reporting
- **V2 server (streamable HTTP):** Faster, more reliable — V1 deprecated May 11, 2026
- **Why this matters:** 42 tools is the most comprehensive PM MCP server. V2 migration shows active investment.

#### ClickUp MCP — **NEW CONTENDER ALERT (PM Lane)**
- **Official MCP server:** developer.clickup.com/docs/mcp-tools
- **GitHub:** taazkareem/clickup-mcp-server (community) + official
- **Features:** Tasks, checklists, sprints, comments, tags, docs, time tracking, chat
- **OAuth 2.1:** Advanced security, session-isolated caching
- **Available on all plans** (free included)
- **Why this matters:** ClickUp is a major PM player not in our catalog. Full MCP with OAuth, available on free tier.
- **Source:** [developer.clickup.com](https://developer.clickup.com/docs/connect-an-ai-assistant-to-clickups-mcp-server)

### Lane 8: Communication

#### Slack MCP — HOLDS position (real but early)
- No major new signals in this cycle

---

## NEW CONTENDER ALERTS

### 1. Gong MCP — **Sales Intelligence Lane (NEW LANE)**
- **Launch:** Mission Andromeda (Feb 25, 2026) — VentureBeat, PRNewswire
- **MCP support:** Built-in client AND server support for MCP
- **MCP Server:** Outside AI agents (Salesforce, Microsoft Copilot) can access Gong directly
- **MCP Client:** Gong can connect to external MCP servers
- **Gong Enable:** New AI-powered revenue enablement product
- **Gong Assistant:** Conversational AI grounded in real customer conversations
- **Revenue impact:** 77% more revenue per rep for AI-using teams (Gong study)
- **$300M ARR** — very serious player
- **GA timing:** "Coming months" from Feb 2026
- **Why this matters:** Gong creates a new "Sales Intelligence" sub-lane. MCP client+server is unique dual capability. $300M ARR means enterprise adoption is real.
- **Source:** [gong.io/press](https://www.gong.io/press/gong-introduces-model-context-protocol-mcp-support-to-unify-enterprise-ai-agents-from-hubspot-microsoft-salesforce-and-others), [VentureBeat](https://venturebeat.com/technology/gong-launches-mission-andromeda-with-ai-sales-coaching-chatbot-and-open-mcp)

### 2. Pipedrive MCP — CRM #4 candidate
- See Lane 4 above

### 3. ClickUp MCP — PM Lane contender
- See Lane 7 above

### 4. Atlassian Official Remote MCP Server
- See Lane 2 above

### 5. Productboard MCP — **Product Feedback Lane (potential NEW LANE)**
- **Multiple implementations:** 4+ repos on GitHub (Enreign, miguelarios, kenjihikmatullah, cfdude)
- **40-49 tools** across implementations
- **Composio + Zapier integrations** available
- **PulseMCP listing:** pulsemcp.com/servers/kenjihikmatullah-productboard
- **Why this matters:** Productboard is the leading product feedback platform. MCP servers are community-driven (no official yet) but multiple implementations suggest demand.
- **Source:** [github.com/Enreign/productboard-mcp](https://github.com/Enreign/productboard-mcp)

### 6. Klavis/Strata — **Meta-MCP / Connector Platform**
- **YC X25 backed** (ex-Google DeepMind, ex-Lyft)
- **50+ production-ready MCP servers** with enterprise OAuth
- **Strata:** Progressive discovery across thousands of tools, +13% accuracy on complex workflows
- **Why this matters:** Not a direct competitor in any lane but a platform that could subsume individual MCP servers. Worth monitoring.
- **Source:** [klavis.ai](https://www.klavis.ai/), HN Launch (133 points)

### 7. Intercom MCP — **Customer Support/Success Lane (potential)**
- MCP connectors for Stripe, Shopify, Linear built into Fin AI assistant
- Enterprise customer support platform with AI-native MCP integration
- **Why this matters:** Intercom's Fin uses MCP connectors natively — could be tracked as a customer success tool.
- **Source:** [intercom.com/help](https://www.intercom.com/help/en/articles/11461635-add-mcp-connectors-for-popular-apps-or-custom-mcps)

---

## CATALOG GAPS IDENTIFIED

| Gap | Priority | Rationale |
|-----|----------|-----------|
| **Gong MCP** (sales intelligence) | HIGH | $300M ARR, MCP client+server, Mission Andromeda launch, 77% revenue impact study. Creates new "Sales Intelligence" sub-lane. |
| **ClickUp MCP** (PM lane) | HIGH | Major PM player with official MCP server, OAuth 2.1, free tier. Missing from catalog entirely. |
| **Pipedrive MCP** (CRM lane) | MEDIUM | Strong mid-market CRM with multiple MCP implementations. #4 CRM candidate. |
| **Atlassian Official MCP** (enterprise) | MEDIUM | GA Feb 2026. Separate from community mcp-atlassian. Should be tracked alongside or replace Rovo MCP. |
| **Productboard MCP** (product feedback) | MEDIUM | 4+ community implementations, 40-49 tools. No official yet but strong demand signal. |
| **Intercom MCP** (customer support) | LOW | MCP connectors in Fin, but more of a consumer than a standalone MCP server. |

---

## STATUS CHANGES RECOMMENDED

| Solution | Current Status | Recommended | Rationale |
|----------|---------------|-------------|-----------|
| n8n | watch | **ranked** | Native MCP server built into platform, multiple community servers, docs MCP |
| Monday.com MCP | watch | **ranked #2 PM** | Official npm package, full board/item/workflow management |
| Asana MCP | watch | **ranked #3 PM** | 42 tools, V2 server shipping, most comprehensive PM MCP |
| Mixpanel MCP | watch | **ranked #3 analytics** | Official beta MCP server launched, PulseMCP listed |

---

## KEY SIGNALS & META SHIFTS

1. **Official MCP servers are displacing community servers.** Atlassian, Notion, HubSpot, Asana, ClickUp, Linear all now have official MCP servers. Community servers (like sooperset/mcp-atlassian) still lead on features but official servers win on auth/security/support.

2. **MCP is becoming bidirectional.** Gong launched both MCP client AND server. Atlassian's Rovo is both an MCP client (connecting to third-party servers) and server (exposing Jira/Confluence). Expect more platforms to offer dual MCP.

3. **"Sales Intelligence" is emerging as a sub-lane.** Gong's Mission Andromeda positions conversation intelligence + MCP as a new category. Chorus (ZoomInfo), Clari, and Outreach could follow.

4. **Product analytics consolidating around PostHog.** 5.7M all-time PulseMCP visits is staggering. Amplitude and Mixpanel have MCP servers but the gap is enormous. PostHog's 27-tool MCP + self-hosted option is a moat.

5. **PM lane is crowding up.** Linear, Monday, Asana, ClickUp all have official MCP servers now. Plane (open-source Linear alternative) also emerging. This lane needs re-ranking.

6. **Meta-MCP platforms emerging.** Klavis/Strata, Composio, Alloy Automation provide "one MCP to rule them all" — could make individual tool MCPs less relevant long-term.

7. **Read-only vs read-write split.** HubSpot MCP is read-only; Salesforce MCP supports CRUD. Dynamics 365 ERP MCP supports full agent operations. This is a meaningful differentiator for enterprise buyers.

---

## Quotes

> "Teams that regularly use AI tools generate 77% more revenue per representative than those that don't — a gap Gong characterizes as a six-figure difference per salesperson annually." — [VentureBeat, Feb 2026](https://venturebeat.com/technology/gong-launches-mission-andromeda-with-ai-sales-coaching-chatbot-and-open-mcp)

> "Notion Agents can now perform up to 20 minutes of autonomous work across hundreds of pages simultaneously." — [max-productive.ai, Notion AI Review 2026](https://max-productive.ai/ai-tools/notion-ai/)

> "The product analytics market is projected to reach $25.4 billion by 2026, growing at a CAGR of 18.3%." — [Multiple sources, 2026 market reports](https://cleverx.com/blog/product-analytics-tools-12-best-options-compared)

> "Atlassian's Rovo MCP Gallery allows third-party agents from GitHub, Box, Figma and others to be integrated with Rovo." — [SiliconANGLE, Feb 2026](https://siliconangle.com/2026/02/25/atlassian-embeds-agents-jira-embraces-mcp-third-party-integrations/)

---

## PulseMCP Summary Table (March 2026)

| Solution | Weekly | All-Time | Weekly Rank | All-Time Rank |
|----------|--------|----------|-------------|---------------|
| Firecrawl | 50.6K | 1.2M | #33 | #35 |
| Notion | 48.3K | 1.0M | #34 | #43 |
| Zapier | 35.1K | 949K | #46 | #51 |
| PostHog | 20.6K | 5.7M | #77 | #6 |
| Linear | 13.0K | 279K | #123 | #134 |
| HubSpot | 12.2K | 338K | #127 | #99 |

---

## Recommended Next Step

1. **Deep-dive Gong MCP** — highest-priority new contender. Need to verify MCP server GA timeline, tool count, and PulseMCP listing.
2. **Add ClickUp MCP to catalog** — official server with OAuth 2.1, free tier. Confirm PulseMCP stats.
3. **Add Pipedrive MCP to catalog** — evaluate for CRM #4.
4. **Re-rank PM lane** — Linear #1, but Monday/Asana/ClickUp all have official servers now. Need deep-dive to establish order.
5. **Track Atlassian official MCP** alongside community mcp-atlassian — may need separate catalog entries.
6. **Upgrade n8n from watch to ranked** in automation lane.
7. **Consider "Sales Intelligence" as new sub-lane** with Gong as anchor.
