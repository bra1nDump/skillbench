# Discover Findings — Knowledge Management

## Scope

Find ALL serious contenders in the knowledge management problem space for SkillPack. Identify platforms, AI-native tools, MCP integrations, open-source alternatives, RAG/vector solutions, and PKM tools. Populate the currently empty ranking.

## Date

2026-03-24

## Inputs

### Web Searches
- "knowledge management tools AI 2026 best"
- "knowledge management AI comparison 2026 Notion Obsidian Confluence"
- "AI knowledge base tools comparison 2026 enterprise"
- "knowledge management MCP server tool 2026"
- "switched from Notion to / switched from Confluence to knowledge management 2026"
- "knowledge management open source alternative Notion Obsidian 2026"
- "RAG knowledge base tool 2026 best enterprise vector search"
- "second brain AI tool 2026 personal knowledge management PKM"
- "Notion MCP server AI agent integration 2026"
- "Obsidian MCP server AI agent plugin 2026"
- "Confluence MCP server AI knowledge base integration 2026"
- "Google NotebookLM AI knowledge management 2026"
- "Mem.ai Reflect Capacities knowledge management AI 2026"

### HN Algolia Queries
- "knowledge management AI" (points>10)
- "Notion Obsidian knowledge" (points>10)
- "knowledge base MCP server" (points>5)
- "knowledge management" sorted by date (points>10)

### MCP Registries Checked
- PulseMCP — 42+ knowledge-related servers found
- mcpservers.org (520 error — down at time of check)

### GitHub API
- Star counts checked for 16+ repos

---

## Findings

### Tier 1: Foundation Platforms (The Big Three)

These are the platforms MCP tools build on — they define the knowledge management landscape.

#### 1. Notion
- **Stars:** notion-mcp-server — 4,091 GitHub stars
- **Users:** 100M+ active users, 70%+ of Fortune 500
- **AI:** Notion AI in Business tier ($20/user). Custom Agents launched Feb 2026 — connect to Slack, Mail, Calendar, Linear, Figma, HubSpot via MCP
- **MCP:** Official Notion MCP server (hosted + self-hosted). Most polished cloud-knowledge MCP integration available. OAuth one-click setup for Claude, Cursor, Windsurf, ChatGPT
- **Why this matters:** Notion is the dominant cloud workspace AND has the strongest official MCP story. Custom Agents (Feb 2026) make it a first-party AI platform, not just a target
- Source: https://developers.notion.com/docs/mcp, https://www.notion.com/releases/2026-02-24

#### 2. Obsidian
- **Stars:** obsidian-releases — 15,715 GitHub stars; 5M+ downloads
- **Users:** Dominant in PKM niche. 1,800+ community plugins
- **AI:** Community-driven — local LLM integration via plugins
- **MCP:** Multiple competing MCP servers:
  - `@bitbonsai/mcpvault` (MCP-Obsidian) — v0.11.0 (March 2026), list_all_tags tool, npm package
  - `cyanheads/obsidian-mcp-server` — 416 stars, full CRUD + search + tags + frontmatter
  - `aaronsb/obsidian-mcp-plugin` — 267 stars, semantic hints + graph traversal
  - `jacksteamdev/obsidian-mcp-tools` — semantic search + Templater integration
- **Why this matters:** Gold standard for privacy-first, local-first PKM. MCP ecosystem is fragmented but active. The "which Obsidian MCP server?" question is a real user pain point
- Source: https://github.com/cyanheads/obsidian-mcp-server

#### 3. Confluence (Atlassian)
- **Users:** Enterprise standard for technical docs, deeply integrated with Jira
- **AI:** Atlassian Intelligence (Cloud Premium) — AI meeting notes, page summaries, NL search across Jira/Confluence/Slack
- **MCP:**
  - Atlassian Rovo MCP Server (official) — connects Jira + Confluence + more to LLMs/IDEs
  - `aashari/mcp-server-atlassian-confluence` — 50 stars, community Node.js server, CQL search, Markdown output
- **Why this matters:** Entrenched in engineering/compliance orgs. Rovo MCP server is the official path. The "search is impressively useless" complaint (HN, July 2025, 33 pts) drives demand for AI-powered alternatives
- Source: https://www.atlassian.com/platform/remote-mcp-server

---

### Tier 2: AI-Native Knowledge Tools (NEW CONTENDER ALERTS)

These are purpose-built AI knowledge management tools — several are strong catalog candidates.

#### 4. **NEW CONTENDER ALERT: Google NotebookLM**
- **Type:** AI research/knowledge tool by Google
- **Status:** Free, with Ultra tier for advanced features
- **2026 updates:** Cinematic Video Overviews (source material → video), Learning Guide (personalized tutoring), Audio Overviews (Brief, Critique, Debate formats)
- **Roadmap:** Shifting from "Passive Assistant" to "Active Agent"
- **Why this matters:** Google's direct play in AI knowledge management. Grounded in uploaded sources with citations. Moving toward agent capabilities. Major competitor to Notion AI for research workflows
- Source: https://notebooklm.google/, https://datalakehousehub.com/blog/2026-03-context-management-gemini-notebooklm/

#### 5. **NEW CONTENDER ALERT: Khoj**
- **Stars:** 33,589 GitHub stars
- **Type:** Open-source AI second brain / personal AI assistant
- **HN Signal:** Show HN with 565 points — massive community interest
- **Why this matters:** 33K+ stars makes it one of the most popular open-source AI knowledge tools. Chat with your docs locally. Strong privacy story. Should be in the catalog immediately
- Source: https://github.com/khoj-ai/khoj

#### 6. **NEW CONTENDER ALERT: Reor**
- **Stars:** 8,544 GitHub stars
- **Type:** AI note-taking app that runs models locally
- **HN Signal:** Show HN with 411 points
- **Why this matters:** Local-first AI note-taking with strong HN traction. Sits at the intersection of PKM and AI. Privacy-focused alternative to cloud tools
- Source: https://github.com/reorproject/reor

#### 7. **NEW CONTENDER ALERT: Mem.ai**
- **Type:** AI-first note-taking and knowledge management
- **Founded by:** Former Stripe/Uber executives
- **Approach:** Natural language interaction, automatic organization. You write; AI organizes
- **Why this matters:** Pure AI-native approach to knowledge management — no manual filing. Strong contrast to Obsidian's manual-linking philosophy
- Source: https://get.mem.ai/

#### 8. **NEW CONTENDER ALERT: Tana**
- **Type:** Node-based knowledge management
- **Approach:** Every piece of info is an object with properties (not documents). Supertags system
- **Why this matters:** Most structurally innovative PKM tool. Moves beyond document-centric model. Power users love it. No public GitHub (closed source)
- Source: https://tana.inc/

#### 9. **NEW CONTENDER ALERT: Capacities**
- **Type:** Object-based note-taking with AI
- **Approach:** Visual organization with backlinks, mind maps, AI helper for writing/planning/research
- **Why this matters:** Visual-first approach to knowledge graphs. Growing PKM community following
- Source: https://capacities.io/

#### 10. **NEW CONTENDER ALERT: Reflect**
- **Type:** Networked thought tool with E2E encryption
- **Approach:** Bidirectional linking (Roam-style) + end-to-end encryption
- **Why this matters:** Privacy story even stronger than Obsidian (E2E encrypted cloud sync). Appeals to security-conscious professionals
- Source: https://reflect.app/

---

### Tier 3: Open-Source Platforms

#### 11. **NEW CONTENDER ALERT: AppFlowy**
- **Stars:** 68,752 GitHub stars
- **Type:** Open-source Notion alternative
- **Why this matters:** Most-starred open-source productivity tool in this space. Active AI collaboration features. Serious Notion challenger for teams wanting self-hosted
- Source: https://github.com/AppFlowy-IO/AppFlowy

#### 12. **NEW CONTENDER ALERT: AFFiNE**
- **Stars:** 66,527 GitHub stars
- **Type:** Open-source Notion + Miro alternative (blocks, databases, whiteboards)
- **2026:** "Build Your AI Second Brain" positioning
- **Why this matters:** Second most-starred OSS workspace. Whiteboard mode differentiates from AppFlowy. AI second brain marketing is aggressive
- Source: https://github.com/toeverything/AFFiNE, https://affine.pro/blog/build-ai-second-brain

#### 13. **NEW CONTENDER ALERT: SiYuan**
- **Stars:** 42,059 GitHub stars
- **Type:** Privacy-first PKM with block-level referencing
- **Why this matters:** Huge in Chinese-speaking markets, growing globally. Block-level referencing + bidirectional linking. 42K stars is massive
- Source: https://github.com/siyuan-note/siyuan

#### 14. **NEW CONTENDER ALERT: Logseq**
- **Stars:** 41,723 GitHub stars
- **Type:** Open-source, local-first outliner (MIT license)
- **Approach:** Daily journals + double-bracket linking. Fully free, no paid tiers for core
- **Why this matters:** The truly open-source Obsidian alternative. Outliner-first vs Obsidian's document-first. Strong community
- Source: https://github.com/logseq/logseq

#### 15. Joplin
- **Stars:** 54,019 GitHub stars
- **Type:** Open-source note-taking with E2E encryption
- **Why this matters:** 54K stars, mature, sync via Dropbox/OneDrive. Strong for personal use
- Source: https://github.com/laurent22/joplin

#### 16. **NEW CONTENDER ALERT: Colanode**
- **Stars:** 4,713 GitHub stars
- **Type:** Open-source Slack + Notion alternative (local-first)
- **HN Signal:** 147 points on Show HN (Apr 2025)
- **Why this matters:** Combining chat + knowledge in one local-first tool. Novel approach
- Source: https://github.com/colanode/colanode

---

### Tier 4: Enterprise / AI Search & RAG

#### 17. **NEW CONTENDER ALERT: Danswer (now Onyx)**
- **Stars:** 17,996 GitHub stars
- **Type:** Open-source AI assistant with org knowledge access
- **Why this matters:** Enterprise-grade "chat with your company docs." Connects to Confluence, Notion, Google Drive, Slack, etc. The open-source Glean alternative
- Source: https://github.com/danswer-ai/danswer

#### 18. Guru
- **Type:** Real-time knowledge delivery in workflows (Slack, browser extension)
- **Why this matters:** Best-in-class for "knowledge appearing where you work." Enterprise-verified knowledge with permission-aware AI answers. 61.2K weekly PulseMCP visitors for Knowledge Graph Memory
- Source: https://www.getguru.com/

#### 19. Document360
- **Type:** Structured documentation / knowledge base platform
- **Why this matters:** Top choice for technical documentation at scale. Internal + external knowledge bases
- Source: https://document360.com/

#### 20. Microsoft Viva Topics
- **Type:** AI knowledge discovery within Microsoft 365
- **Why this matters:** Auto-discovers and organizes content across SharePoint/Teams. Enterprise M365 shops get this "for free"
- Source: Microsoft Viva documentation

#### 21. **NEW CONTENDER ALERT: Airweave**
- **Stars:** 6,059 GitHub stars
- **Type:** "Let agents search any app" — universal MCP connector
- **HN Signal:** 176 points
- **Why this matters:** Cross-app knowledge search for AI agents. Connects to any SaaS app. Infrastructure layer for knowledge retrieval
- Source: https://github.com/airweave-ai/airweave

---

### Tier 5: MCP-Specific Knowledge Tools

#### 22. Anthropic Knowledge Graph Memory Server
- **PulseMCP:** 61.2K weekly visitors — most popular knowledge MCP server
- **Why this matters:** The reference implementation for persistent semantic networks. Ships with Claude
- Source: PulseMCP directory

#### 23. kb-mcp-server (Geeksfino)
- **Stars:** 66 GitHub stars
- **Type:** Build a knowledge base into tar.gz, serve via MCP with txtai semantic search
- **Why this matters:** Lightweight, self-contained KB-to-MCP bridge. Good for small teams
- Source: https://github.com/Geeksfino/kb-mcp-server

#### 24. Logseq Knowledge Graph MCP
- **Type:** MCP server for Logseq vault access
- **Why this matters:** Bridges Logseq into the MCP ecosystem
- Source: PulseMCP directory

#### 25. Google Developer Knowledge API + MCP Server
- **Type:** Official Google gateway to developer documentation
- **Why this matters:** Google providing MCP access to their docs is a signal that MCP is becoming the standard knowledge access protocol
- Source: https://developers.googleblog.com/introducing-the-developer-knowledge-api-and-mcp-server/

---

### Tier 6: RAG Infrastructure (Enabling Layer)

These power the AI layer on top of knowledge bases:

| Tool | Stars | Role |
|------|-------|------|
| LlamaIndex | 47,912 | Data framework for connecting LLMs to private data |
| Meilisearch | — | Hybrid search (BM25 + vectors), often replaces standalone vector DB |
| Qdrant | — | Hybrid vector search, K8s or managed cloud |
| Pinecone | — | Fully managed serverless vector DB |
| Weaviate | — | Open-source vector DB, hybrid search |
| Milvus | — | Distributed vector DB, billions of vectors |
| HelixDB | 237 HN pts | Hybrid vector-graph DB for AI apps |
| Vectara | — | Managed semantic search + RAG, MCP-connected |

**Emerging:** Graph RAG is gaining traction — addresses limitations of pure vector search for relational/complex queries. GraphRAG Benchmark accepted at ICLR'26.

---

## Quotes

> "Is every company's internal wiki just broken by default? ... the search is impressively useless"
> — HN Ask, July 2025, 33 points

> "Do you also 'hoard' notes/links but struggle to turn them into actions?"
> — HN Ask, January 2026, 235 points — shows the core PKM pain point is alive

> "Knowledge Management in the Age of AI" — 131 HN points (June 2025)
> — https://ericgardner.info/notes/knowledge-management-june-2025

> "Knowledge & Memory is the single largest MCP server category at 283 servers"
> — Desktop Commander blog, 2026

> "Neither Confluence nor Notion was built for the complete CONVERT → MANAGE → DELIVER workflow"
> — Docsie comparison, 2026

---

## GAPS in Current Catalog

The knowledge-management category is **completely empty** — no ranking, no verdict, no solutions listed. This is a critical gap given:

1. **17,000+ MCP servers exist, 283 in Knowledge & Memory** — this is the largest MCP category
2. **Multiple 40K-60K star OSS projects** compete here (AppFlowy, AFFiNE, SiYuan, Logseq, Joplin)
3. **Every major platform has MCP integration** — Notion (official), Obsidian (4+ competing servers), Confluence (official Rovo)
4. **Google NotebookLM** is a major player not tracked anywhere in the catalog
5. **Khoj (33K stars)** and **Danswer/Onyx (18K stars)** are significant AI-native knowledge tools missing
6. **RAG infrastructure** (LlamaIndex, vector DBs) could be its own sub-category or cross-referenced

### Solutions that should be added to catalog immediately:
- `notion-mcp-server` (official, 4K stars)
- `obsidian-mcp-server` (cyanheads, 416 stars — leading community option)
- `obsidian-mcp-plugin` (aaronsb, 267 stars — graph traversal approach)
- `mcp-server-atlassian-confluence` (aashari, 50 stars)
- `atlassian-rovo-mcp` (official Atlassian)
- `khoj` (33K stars, AI second brain)
- `reor` (8.5K stars, local AI notes)
- `danswer/onyx` (18K stars, enterprise AI knowledge)
- `airweave` (6K stars, universal agent search)
- `google-notebooklm` (platform entry)
- `appflowy` (69K stars, OSS Notion alternative)
- `affine` (67K stars, OSS workspace)

---

## Head-to-Head Comparisons Observed

| Matchup | Signal | Verdict |
|---------|--------|---------|
| Notion vs Obsidian | Multiple 2026 comparison articles | Notion for teams, Obsidian for solo PKM |
| Notion vs Confluence | Enterprise switching discussions | Notion wins for product/design; Confluence holds for Jira-heavy eng orgs |
| AppFlowy vs Notion | OSS alternative positioning | AppFlowy for self-hosted; Notion for features |
| AFFiNE vs Notion | "Notion but open source" | AFFiNE adds whiteboard; Notion has ecosystem |
| Logseq vs Obsidian | Outliner vs document-first | Logseq fully OSS; Obsidian has bigger plugin ecosystem |
| Mem.ai vs Obsidian | AI-first vs manual-first | Mem for zero-effort org; Obsidian for control |
| Khoj vs NotebookLM | Open-source vs Google | Khoj self-hosted; NotebookLM zero-setup |
| Vector search vs Graph RAG | ICLR'26 paper | Graph RAG emerging for complex relational queries |

---

## Recommended Next Step

1. **Deep-dive the MCP integration layer:** Notion MCP, Obsidian MCP servers (pick a winner), Confluence Rovo MCP, Anthropic Knowledge Graph Memory
2. **Deep-dive AI-native tools:** Khoj, Reor, NotebookLM, Danswer/Onyx — these are the "AI-first" play
3. **Deep-dive OSS platforms:** AppFlowy, AFFiNE, SiYuan — pick which deserve catalog entries
4. **Rank:** Build initial ranking with tiers. Suggested order:
   - Platform MCP servers (Notion, Obsidian, Confluence) as top tier
   - AI-native tools (Khoj, NotebookLM, Danswer) as challenger tier
   - OSS platforms (AppFlowy, AFFiNE, Logseq) as alternative tier
5. **Cross-reference:** Many of these tools (Notion, Confluence, Google Workspace) already appear as platforms in the catalog — ensure knowledge-management solutions link to them
