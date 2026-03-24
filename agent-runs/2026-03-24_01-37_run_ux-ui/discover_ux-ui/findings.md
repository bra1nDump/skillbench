# Discover Findings — UX / UI

## Scope

Full discover protocol for the `ux-ui` problem space. Identify all serious contenders, new signals, catalog gaps, and shifts in the competitive landscape since last ranking.

## Date

2026-03-24T01:37Z

## Inputs

### Web Search Queries
1. "Figma MCP server best tools 2026 AI design to code"
2. "UX UI design AI tools comparison 2026"
3. "Figma MCP vs Framelink vs Console MCP 2026"
4. "switched from Figma MCP design to code AI agent 2026"
5. "Google Stitch AI design tool launch 2026"
6. "paper.design MCP server AI design tool 2026"
7. "Figma MCP server npm downloads stars March 2026"
8. "Motiff AI design tool MCP 2026"
9. "Penpot MCP server update 2026"
10. "Excalidraw MCP server AI agent 2026"
11. "monday.com design system MCP Figma production code 2026"
12. "Builder.io Visual Copilot Figma to code MCP 2026"
13. "Galileo AI design tool 2026 latest updates"
14. "UX Magic AI design tool 2026"
15. "Vibma AI agent design Figma MCP 2026 github"
16. "Google Stitch MCP server SDK developer integration 2026"
17. "Figma MCP bidirectional write access March 2026"
18. "Anima Figma design system MCP vibe coding 2026"
19. "Mowgli AI design tool Figma agent era Claude Code 2026"
20. "Figma Make AI design feature 2026"
21. "vibe figma / vibeflowing open source Figma design to code 2026"

### HN Algolia Queries
1. `figma+mcp` (story, points>10)
2. `AI+design+tool+UI` (story, points>10)
3. `Google+Stitch+design` (story, points>5)
4. `Onlook+design+cursor` (story, points>10)
5. `Kombai+design+code` (story, points>5)
6. `paper.design` (story, points>5)
7. `Stitch+Google+design+MCP` (story, points>5)
8. `vibe+design+AI` (story, points>10)
9. `Mowgli+design+agent` (story, points>3)
10. `figma+design+code+AI` (by_date, points>5, last 2 weeks)

### GitHub API Checks
- Framelink (GLips/Figma-Context-MCP)
- Onlook (onlook-dev/onlook)
- Console MCP (southleft/figma-console-mcp)
- figma-use (dannote/figma-use)
- Penpot (penpot/penpot)
- Figma MCP Guide (figma/mcp-server-guide)
- Excalidraw MCP (excalidraw/excalidraw-mcp)
- GitHub search: top 15 "figma mcp" repos by stars

### Registry Checks
- PulseMCP: searched "figma" — 59+ Figma MCP servers listed
- mcpservers.org: Google Stitch MCP listed

### Pages Fetched
- Multiple search result pages across 21 web queries

---

## Findings

### 1. CRITICAL UPDATE: Figma Official MCP Is Now Bidirectional (March 6, 2026)

**Why this matters:** The catalog deck says bidirectional write-access is Console MCP's lane. Figma Official now has it too.

- **March 6, 2026**: Figma MCP server can generate design layers from VS Code ([GitHub Blog](https://github.blog/changelog/2026-03-06-figma-mcp-server-can-now-generate-design-layers-from-vs-code/))
- Live UI from browser (production, staging, localhost) → editable design layers in Figma
- Bidirectional sync with GitHub Copilot: pull design context into code AND send rendered UI back to Figma
- Available on ALL Figma seats and plans (not just Dev Mode)
- Triple AI platform partnership: GitHub Copilot, Claude Code, OpenAI Codex
- GitHub stars (guide repo): 455 | npm figma-developer-mcp: 11,556 weekly downloads

**Impact on rankings:** Figma Official strengthens its #1 position. Console MCP's "enterprise write-access leader" distinction is now narrower — Console MCP still has 57+ tools and deeper programmatic control, but the basic bidirectional use case is covered by Official.

---

### 2. MAJOR UPDATE: Google Stitch Redesign (March 19, 2026) — No Longer Provisional

**Why this matters:** Stitch was flagged as "provisional (2 days old)" in the catalog. It's now a mature, free, AI-native design platform with MCP integration. Figma stock dropped 11%.

- **March 19, 2026**: Complete redesign into AI-native infinite canvas ([blog.google](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/))
- **Voice Canvas**: Conversational design — speak to the canvas, AI asks clarifying questions, makes live updates
- **MCP server + SDK**: `npm install @google/stitch-sdk` — connects to Claude Code, Gemini CLI, Cursor
- **DESIGN.md export**: Agent-friendly markdown for cross-tool portability
- **Acquired Galileo AI** (mid-2025) — Galileo is now fully absorbed into Stitch
- **Hatter agent**: Multi-step design tasks
- **Asset generator**: App Store assets
- **Prototyping**: Connect screens into interactive prototypes with transitions
- **Pricing**: FREE — no credit card, no subscription, no usage caps
- **Figma stock impact**: -11% in two days after Stitch launch ([CNBC](https://www.cnbc.com/2026/03/19/figma-stock-drops-11percent-after-google-releases-vibe-design-product-stitch.html), 18pts HN)
- GitHub: `davideast/stitch-mcp` (community MCP wrapper), `Kargatharaakash/stitch-mcp` listed on PulseMCP
- Google Codelab: [Design-to-Code with Antigravity and Stitch MCP](https://codelabs.developers.google.com/design-to-code-with-antigravity-stitch)

**Impact on rankings:** Stitch should be upgraded from provisional to a full ranked entry. Free pricing + MCP + Voice Canvas makes it the most accessible AI-native design tool. Different lane from Figma MCP (Stitch generates designs; Figma MCP reads existing designs).

---

### 3. NEW CONTENDER ALERT: paper.design — Bidirectional MCP, HTML/CSS Native

**Why this matters:** First design tool built on actual HTML/CSS (not proprietary format), with full bidirectional MCP. Direct competitor to Console MCP's write-access lane.

- **24 MCP tools**: Create frames, update styles, set text, get screenshots, retrieve JSX/Tailwind output
- **Bidirectional**: Agents can read AND write — sync design tokens from codebase, populate UI with API data, convert to React/Tailwind
- **HTML/CSS native**: What you design IS the code — no conversion step
- **GPU shaders**: Advanced visual effects
- **Pricing**: Free (100 MCP calls/week) | Pro $20/mo (1M calls/week)
- **HN signal**: 14pts for liquid metal demo (2025-02-19), early traction
- Source: [paper.design](https://paper.design/), [MCP docs](https://paper.design/docs/mcp), [SFAI Labs comparison](https://sfailabs.com/guides/figma-mcp-vs-paper)

**Catalog gap:** Not in current catalog. Should be evaluated for Lane B (bidirectional write-access) or as a new Lane F (alternative AI-native platforms).

---

### 4. NEW CONTENDER ALERT: Mowgli — AI Design Copilot for the Agent Era

**Why this matters:** Full-stack AI design tool that exports to Figma, React+Tailwind, AND "AI-ready packages" with curated prompts for Claude/Cursor.

- Explores product depth — designs every screen, flow, and state
- Imports existing Figma designs for AI-powered iteration
- Exports: Figma files, React+Tailwind code, AI-ready master prompts
- Pricing: From $12/mo
- HN: 6pts "Show HN: Mowgli – Figma for the agent era" (2026-02-28)
- Source: [mowgli.ai](https://mowgli.ai/)

**Catalog gap:** Not in current catalog. Straddles Lane D (design-to-code) and Lane E (AI-native creation).

---

### 5. NEW CONTENDER ALERT: Vibma — Open-Source Write-Access Figma Agent

**Why this matters:** Fork of cursor-talk-to-figma with added "harness engineering" — runtime warnings that steer AI agents toward Figma design best practices. Directly competes with Grab (#4) and figma-use (#5).

- Open source from ufira-ai
- Full write access: read layouts, create components, modify styles, build design systems via conversation
- Works with any MCP-compatible LLM
- Figma community plugin available
- HN: "Show HN: Vibma" thread exists ([HN](https://news.ycombinator.com/item?id=47217411))
- Source: [GitHub](https://github.com/ufira-ai/Vibma)

**Catalog gap:** Not in current catalog. Competes in Lane B (bidirectional write-access).

---

### 6. NEW CONTENDER ALERT: Motiff — AI UI Design with MCP Support

**Why this matters:** Full AI design tool (not just MCP connector) with native MCP protocol support and React/HTML code export.

- Prompt-to-UI generation with production-ready code export
- MCP protocol support for AI coding tool integration
- Design system features, prototyping, team collaboration
- Figma plugin available ([Figma Community](https://www.figma.com/community/plugin/1540318526221544036/motiff-ai-your-ai-design-partner))
- Appears in multiple "best AI design tools 2026" roundups
- Source: [motiff.com](https://motiff.com/)

**Catalog gap:** Not in current catalog. Competes in Lane E (AI-native design creation).

---

### 7. NEW CONTENDER ALERT: Anima — MCP + Design-System-Aware Vibe Coding

**Why this matters:** Established Figma-to-code tool that has added MCP integration and agent publishing. Design system awareness is a key differentiator.

- **Anima MCP**: Connects AI coding agents (Claude Code, Cursor) directly to Anima Playground + Figma
- **Design system sync**: Converts Figma designs into npm packages for agent consumption
- **Multi-screen import**: Full Figma prototype flows → working code
- **Agent publishing**: AI agents can create and publish live apps
- **Vibe coding loop**: Test new patterns → push back to shared design system
- Source: [animaapp.com](https://www.animaapp.com/), [Anima MCP blog](https://www.animaapp.com/blog/code/connect-your-ai-coding-agent-to-anima-playground-and-figma-with-mcp/)

**Catalog gap:** Not in current catalog. Straddles Lane A (read-only context) and Lane D (design-to-code).

---

### 8. NEW CONTENDER ALERT: Builder.io Visual Copilot 2.0

**Why this matters:** Framework-agnostic Figma-to-code with CLI integration. Different approach from MCP (proprietary AI pipeline trained on 2M+ data points).

- Supports React, Angular, Svelte, Vue, Qwik, HTML + Tailwind, Styled Components, Emotion
- Visual Copilot CLI: Integrates directly into codebase
- Visual Copilot 2.0: Makes Figma designs interactive with natural language in Builder Visual Editor
- Source: [builder.io](https://www.builder.io/blog/best-figma-to-code-plugin)

**Catalog gap:** Not in current catalog. Lane D (design-to-code), but not MCP-based.

---

### 9. SIGNAL: monday.com Design-System MCP — Production Case Study

**Why this matters:** Strongest independent production validation of the design-system-MCP approach. 11-node LangGraph agentic architecture.

- First attempt with Figma MCP + Cursor failed: no design system awareness, hard-coded colors, manual CSS
- Solution: Custom agentic architecture (LangGraph) with 11 nodes — each node has single responsibility
- Some nodes query MCPs for "sources of truth" (design tokens, components, accessibility rules)
- Source: [monday engineering blog](https://engineering.monday.com/how-we-use-ai-to-turn-figma-designs-into-production-code/)

**Impact:** Evidence that raw Figma MCP alone is insufficient for production design-system code. Validates the need for design-system-aware tools (Anima, Console MCP, Code Connect).

---

### 10. UPDATE: Figma Make — Native AI (Lane E Competitor)

**Why this matters:** Figma's own AI design feature is now GA and competes with Stitch, Mowgli, and other AI-native tools.

- Text-to-design: Type prompt → get editable screens with layouts, images, text
- Design system context: Add styling from Figma library
- Embeddable prototypes: Embed in Figma Design, FigJam, Figma Slides (Jan 2026)
- Source: [figma.com/make](https://www.figma.com/make/)

**Impact on rankings:** Figma Make is a native capability, not a separate tool. May warrant mention as a platform feature rather than a catalog entry.

---

### 11. UPDATE: Penpot MCP — Integrated into Main Repo

- Standalone `penpot/penpot-mcp` repo archived February 3, 2026
- MCP code now lives at `penpot/penpot/mcp/` in the main repo
- Working on remote/multi-user MCP deployments
- 44,991 GitHub stars (main repo), pushed March 23
- Source: [GitHub](https://github.com/penpot/penpot/tree/develop/mcp)

---

### 12. UPDATE: Excalidraw MCP — Official Repo Active

- Official `excalidraw/excalidraw-mcp`: 3,475 stars, pushed Feb 20
- Streams hand-drawn diagrams with smooth viewport camera control
- Compatible with Claude, ChatGPT, VS Code, Goose
- Community variant `yctimlin/mcp_excalidraw`: 26 tools, real-time canvas sync, Claude Code skill
- Source: [GitHub](https://github.com/excalidraw/excalidraw-mcp)

---

### 13. SIGNAL: "Vibe Design" as Emerging Category

Four tools now define the "vibe design" space (prompt-to-UI): Google Stitch, v0 by Vercel, Lovable, Bolt. This is a NEW LANE emerging alongside the existing Figma-MCP lanes.

HN signal: 50pts for "Open-source Figma design to code" (vibeflowing-inc/vibe_figma, 2026-01-24), 74pts for "Design Arena — Head-to-head AI benchmark for aesthetics" (YC S25, 2025-08-12).

---

### 14. GitHub Star Rankings (verified March 24, 2026)

| Repo | Stars | Last Push | Status |
|------|-------|-----------|--------|
| Penpot (main) | 44,991 | Mar 23 | Active |
| Onlook | 24,947 | Feb 27 | Declining (last meaningful = Jan 21) |
| Framelink | 13,877 | Mar 20 | Active |
| Grab/cursor-talk-to-figma | 6,541 | Mar 7 | Active |
| Excalidraw MCP (official) | 3,475 | Feb 20 | Active |
| Console MCP | 1,206 | Mar 22 | Active |
| claude-talk-to-figma | 533 | Feb 28 | Active |
| figma-use | 513 | Mar 1 | Solo maintainer |
| Figma MCP Guide (official) | 455 | Mar 11 | Active |
| figma-flutter-mcp | 217 | Feb 27 | Niche (Flutter) |
| figma-ui-mcp | 136 | Mar 23 | New, growing fast |

---

### 15. SIGNAL: HN Figma Stock Drop (18pts, Mar 19)

"Figma's stock drops 11% in two days after Google releases 'vibe design' product" — [CNBC via HN](https://www.cnbc.com/2026/03/19/figma-stock-drops-11percent-after-google-releases-vibe-design-product-stitch.html)

This is the strongest market signal that AI-native design tools (Stitch) are perceived as an existential threat to Figma's dominance. The catalog should track this as context for all Figma-dependent tools.

---

### 16. SIGNAL: UX Pilot, Flowstep, UX Magic — AI Design Generation Tools

Multiple AI design generation tools appearing in "best of 2026" lists:
- **UX Pilot**: Predictive heatmaps, complete user journeys from prompts
- **Flowstep**: Infinite canvas, build entire flows in seconds
- **UX Magic**: 50K+ users, prompt-to-wireframe-to-mockup-to-code, Figma export

These are Lane E competitors but most lack MCP integration, making them less relevant to the agent-centric catalog.

---

## Quotes

> "Prescriptive output poisons the context; the LLM sees auto-generated code structure and mimics it instead of using your codebase's patterns." — [CTO Guide](https://alexbobes.com/tech/figma-mcp-the-cto-guide-to-design-to-code-in-2026/) (on Figma Official vs Framelink)

> "The model had no understanding of what the design system actually was... This led us to an agentic architecture built with LangGraph." — [monday engineering](https://engineering.monday.com/how-we-use-ai-to-turn-figma-designs-into-production-code/)

> "Figma's stock drops 11% in two days after Google releases 'vibe design' product" — [CNBC](https://www.cnbc.com/2026/03/19/figma-stock-drops-11percent-after-google-releases-vibe-design-product-stitch.html)

> "Paper supports full bidirectional access. Agents can create frames, update styles, set text content, get screenshots, and even retrieve the JSX or Tailwind output of any node." — [banani.co review](https://www.banani.co/blog/paper-design-mcp-review)

---

## Catalog Gaps

### Must-Add (strong signal, direct competition)
1. **paper.design** — 24-tool bidirectional MCP, HTML/CSS native. Competes in Lane B/C.
2. **Anima MCP** — Design-system-aware MCP, agent publishing. Established player with new MCP capability.
3. **Vibma** — Open-source write-access Figma agent with harness engineering.

### Should-Evaluate (growing signal)
4. **Mowgli** — AI design copilot, exports to Figma/React/AI-ready packages.
5. **Motiff** — AI UI design with MCP protocol support. Multiple "best of" list appearances.
6. **Builder.io Visual Copilot** — Dominant Figma-to-code plugin (2M+ training data), not MCP-based.

### Needs Update (stale info in catalog)
7. **Google Stitch** — Remove "provisional (2 days old)". Major March 19 redesign with MCP server, Voice Canvas, Galileo acquisition. FREE.
8. **Figma Official MCP** — Now bidirectional (March 6). Generates design layers from code.
9. **Figma Make** — Figma's native AI feature, GA in early 2026. Not a separate tool but a platform capability.

---

## Recommended Next Step

1. **Deep-dive on paper.design** — Strongest new contender. Test MCP server, verify 24-tool claim, compare bidirectional capabilities vs Console MCP.
2. **Deep-dive on Google Stitch + MCP** — Verify SDK integration, test DESIGN.md export, assess quality vs Figma MCP.
3. **Update Google Stitch ranking** — Remove provisional flag, assign rank based on MCP maturity and free pricing.
4. **Update Figma Official MCP entry** — Add bidirectional capability, update verdict to reflect March 6 changes.
5. **Evaluate Anima MCP and Vibma** for catalog inclusion.
6. **Consider new Lane F**: "AI-native design creation" (Stitch, Mowgli, Figma Make, Motiff) — these tools GENERATE designs rather than reading them.
7. **Track Figma stock impact** — The -11% drop from Stitch is a structural market signal. If sustained, Figma-dependent tools face platform risk.
