# Discover Findings — Web Browsing / Browser Automation

## Scope

Full discover protocol for the **web-browsing** problem space. Goal: find all serious contenders, new signals, gaps in the current catalog, and shifts in the meta since last ranking.

## Date

2026-03-24T01:37Z

## Inputs

### Web Searches (8 queries)
- "web browsing browser automation AI agents best tools 2026"
- "browser use vs playwright MCP vs stagehand comparison 2026"
- "browser automation open source alternative 2026 AI agent"
- "Chrome DevTools MCP server new features 2026"
- "switched from browser use playwright stagehand agent browsing"
- "Vibium browser automation Selenium creator 2026 features"
- "Stagehand v3 rewrite 2026 new architecture"
- "Webctl CLI browser automation agents 2026"
- "Tabstack Mozilla browser infrastructure AI agents 2026"
- "Fellou agentic browser 2026 AI deep search"
- "Nanobrowser open source AI web agent Chrome extension"
- "Smooth CLI token-efficient browser AI agents"
- "Pilo Mozilla open source agentic web automation engine 2026"
- "BrowserOS nxtscape open source agentic browser github stars 2026"
- "browser automation new release launched March 2026"
- "Browserless browser automation API 2026 steel.dev comparison"
- "OpenAI Operator browser agent 2026 update"
- "Google Chrome Auto Browse feature 2026 Gemini browser agent"
- "Magnitude open source AI browser automation framework 2026"
- "Hyperbrowser MCP server AI agents github 2026"

### HN Algolia Queries (5 queries)
- `browser+automation+AI+agent` (points>10)
- `browser+use+playwright+MCP` (points>10)
- `chrome+devtools+MCP` (points>10)
- `Show+HN+browser+agent` (points>10)
- `Stagehand+v3+browser` (points>10)
- `Vibium+browser` (points>5)
- `Smooth+CLI+browser+agent` (points>5)

### GitHub Star Checks (verified 2026-03-24)
| Repo | Stars | Last Push |
|------|-------|-----------|
| browser-use/browser-use | **83,567** | 2026-03-23 |
| ChromeDevTools/chrome-devtools-mcp | **31,046** | 2026-03-23 |
| vercel-labs/agent-browser | **24,438** | 2026-03-23 |
| lightpanda-io/browser | **24,153** | 2026-03-23 |
| browserbase/stagehand | **21,668** | 2026-03-23 |
| skyvern-ai/skyvern | **20,931** | 2026-03-23 |
| nanobrowser/nanobrowser | **12,527** | 2025-11-24 |
| nxtscape/nxtscape (BrowserOS) | **10,095** | 2026-03-23 |
| sagekit/magnitude | **4,003** | 2026-02-08 |
| VibiumDev/vibium | **2,723** | 2026-03-18 |
| hyperbrowserai/HyperAgent | **1,194** | 2026-02-14 |
| hyperbrowserai/mcp | **751** | 2025-11-20 |
| cosinusalpha/webctl | **409** | 2026-03-18 |
| agent-browser-io/browser (Smooth) | **35** | 2026-03-04 |
| mozilla/pilo | **28** | 2026-03-23 |

---

## Findings

### 1. CONFIRMED LEADERS (in catalog, still dominant)

#### Browser Use — Unchallenged #1 (83.6K stars)
- **Stars**: 83,567 (up from ~81K in prior ranking — still gaining ~800/week)
- **Downloads**: 1M+ weekly PyPI (per prior data, unchallenged)
- **Benchmark**: 89.1% WebVoyager (Steel.dev)
- **Status**: YC W25, SOC 2 Type II. Active daily commits.
- **Why it matters**: The gap to #2 is enormous and growing. No challenger has emerged.

#### Chrome DevTools MCP — Lane 2 Leader (31K stars)
- **Stars**: 31,046 (up from 30K+ in prior ranking)
- **HN signal**: 602 points on Mar 15 2026 — highest HN post in entire category
- **New in v0.19.0**: Lighthouse integration, --slim mode (token optimization), take_memory_snapshot tool, screencast recording, accessibility auditing skills, LCP debugging skills
- **New auto-connect**: Agents can now connect to active browser sessions (login state preserved). Massive for real-world usage.
- **Why it matters**: Fastest star growth rate in category. Google official backing. New features directly address coding agent workflows.

#### Playwright MCP/CLI — Cross-browser Standard
- **Downloads**: 1.38M weekly npm (highest in category)
- **CLI-over-MCP consensus**: 114K tokens via MCP vs 27K via CLI (4x reduction, 13+ sources confirm)
- **Status**: Microsoft official. Stable, mature.
- **Why it matters**: The infrastructure layer everyone builds on. CLI mode is the settled recommendation.

#### Stagehand — Best SDK (21.7K stars)
- **Stars**: 21,668
- **MAJOR UPDATE — Stagehand v3** (Feb 2026): Complete rewrite. Now AI-native from ground up:
  - Removed Playwright dependency — modular driver system (Puppeteer, any CDP driver)
  - 44% faster via direct CDP communication
  - Action caching: discovered elements reused without LLM calls
  - Multi-language: Go, Ruby, Java, Rust, Python (new)
  - browse-cli reads CLI-over-MCP signal
- **Benchmark**: ~75% task completion with Claude Sonnet 4.6
- **Backing**: Browserbase ($300M valuation), Cloudflare integration
- **Why it matters**: v3 is a significant architecture pivot. No longer just "Playwright + AI" — now a standalone AI-native framework. This changes its competitive position.

#### BrowserOS/Nxtscape — Lane 4 Leader (10.1K stars)
- **Stars**: 10,095 (up from ~10K)
- **HN**: 314pts Show HN (Jun 2025)
- **Status**: Active development. Chromium fork with 11+ LLM providers, Ollama support.
- **Why it matters**: Leading open-source consumer agentic browser. Privacy-first positioning vs Chrome Auto Browse / Perplexity Comet.

#### Skyvern — Autonomous Agent (20.9K stars)
- **Stars**: 20,931
- **HN**: 327pts Launch HN (YC S23)
- **Status**: Active. Best for no-code form automation and multi-step workflows.
- **Why it matters**: Strong in Lane 1 alongside Browser Use but with different focus (form/workflow automation vs general browsing).

### 2. NEW CONTENDER ALERTS

#### NEW CONTENDER: Vibium (2.7K stars, 443pts HN)
- **Creator**: Jason Huggins (creator of Selenium)
- **Stars**: 2,723 (young but backed by massive pedigree)
- **HN**: 443 points (Dec 24 2025) — second highest HN post in this category
- **Architecture**: WebDriver BiDi (WebSocket-based), built-in MCP server as first-class interface
- **Key features**: Self-healing with AI fallback, automatic application mapping, zero-config, JS + Python
- **Why it matters**: From the creator of Selenium. BiDi-native + MCP-native is a unique architecture. 443 HN points = massive community interest. Currently NOT in catalog. **Must add.**

#### NEW CONTENDER: Webctl (409 stars, 134pts HN)
- **Repo**: cosinusalpha/webctl
- **HN**: 134 points (Jan 14 2026)
- **Architecture**: CLI-first (not MCP). Unix socket + JSON-RPC. Browser daemon stays open across commands, cookies persist. Agent-oriented skill loading.
- **Key differentiator**: "CLI flips control" — agent controls what enters context (filter before context). Kernel-level credential verification for security.
- **Why it matters**: Represents the CLI-over-MCP philosophy taken to its extreme. Small but interesting signal. Worth watching.

#### NEW CONTENDER: Tabstack (Mozilla) — Cloud API
- **Launched**: Jan 14 2026
- **HN**: 130 points
- **Architecture**: Three endpoints: /extract (page→Markdown/JSON), /generate (transform content), /automate (click/scroll/fill)
- **Smart routing**: Starts lightweight, only spins up full browser when JS rendering required
- **Pricing**: $1/1K Markdown extractions, $5/1K JSON, $7.50/1K automations. Free tier: 50K credits/month
- **Backed by**: Mozilla
- **Why it matters**: Mozilla entering the space with a managed API. Privacy/ethics-first positioning. Currently NOT in catalog. Consider adding.

#### NEW CONTENDER: Pilo (Mozilla) — Open Source Engine
- **Repo**: mozilla/pilo (28 stars — very new, Feb 24 2026)
- **HN**: 18 points
- **What it is**: The open-source agentic web automation engine that powers Tabstack
- **Features**: NL control, smart navigation, vision capabilities, guardrails
- **Why it matters**: Mozilla's open-source contribution. Very early but interesting as the OSS underpinning of Tabstack.

#### NEW CONTENDER: Smooth CLI (109pts HN)
- **HN**: 109 points (Feb 5 2026) — "Token-efficient browser for AI agents"
- **GitHub**: agent-browser-io/browser (only 35 stars — HN spike hasn't translated to GitHub traction yet)
- **Focus**: Token efficiency for AI coding agents
- **Why it matters**: Addresses a real pain point (token cost). Early stage — watch but don't catalog yet.

#### NEW CONTENDER: Nanobrowser (12.5K stars)
- **Stars**: 12,527
- **Type**: Chrome extension for AI-powered web automation with multi-agent system
- **Key**: BYO API key, runs in-browser, multi-agent architecture (planner + navigator + extractor)
- **Supports**: OpenAI, Anthropic, Gemini, Ollama
- **Why it matters**: 12.5K stars is significant. Open-source Operator alternative. Currently NOT in catalog. **Should add.**

#### NEW CONTENDER: Magnitude (4K stars, 145pts HN)
- **Repo**: sagekit/magnitude (also magnitudedev/browser-agent)
- **Stars**: 4,003
- **HN**: 145 points (Jun 2025)
- **Architecture**: Vision-first browser agent. Uses full-page screenshots + visually grounded models.
- **Recommends**: Claude Sonnet 4 or Qwen-2.5VL 72B
- **Why it matters**: Different approach (vision-first vs DOM/accessibility tree). Currently NOT in catalog. Worth adding.

### 3. CONSUMER AGENTIC BROWSERS (Lane 4 evolution)

#### Google Chrome Auto Browse (Jan 2026)
- **Powered by**: Gemini 3
- **Availability**: AI Pro (20 tasks/day) and AI Ultra (200 tasks/day) subscribers
- **Capabilities**: Navigate sites, fill forms, compare prices, multi-step tasks
- **Safety**: Pauses for confirmation on purchases/social posts
- **Why it matters**: Google entering the consumer agent browser space with Chrome's 3B+ users. Existential threat to standalone agentic browsers.

#### OpenAI Operator → ChatGPT Agent → Atlas
- **Timeline**: Operator (Jan 2025) → deprecated Aug 2025 → ChatGPT Agent (Jul 2025) → Atlas browser (Oct 2025)
- **Atlas**: Dedicated browser with Agent Mode. Free tier available, Agent mode requires Plus ($20/mo) or Pro ($200/mo)
- **Benchmark**: 87% WebVoyager, 58.1% WebArena
- **Why it matters**: Major consumer browser competitor. Atlas is a full Chromium browser.

#### Perplexity Comet
- **Status**: iOS launch Mar 2026 (completing cross-platform: desktop Jul 2025, Android Nov 2025, iOS Mar 2026)
- **Pricing**: Free for all users
- **Capabilities**: Autonomous navigation, form filling, email/calendar management
- **Why it matters**: Free tier + full platform availability makes it the most accessible consumer agent browser.

#### Fellou — Agentic Browser
- **Users**: 1M+ reported
- **Key feature**: Transparency — lets you inspect and edit planned workflows before execution
- **Differentiator**: Access to logged-in platforms (Reddit, Notion, Salesforce)
- **Why it matters**: Growing consumer option. Not in catalog — probably not worth adding (consumer-only, not developer-facing).

### 4. INFRASTRUCTURE LAYER (Browser-as-a-Service)

#### Browserbase — Market Leader
- $300M valuation, powers Stagehand
- Managed concurrent sessions, fingerprint management, proxy rotation
- **Why it matters**: The "AWS of browser sessions"

#### Steel.dev — Open Source Alternative
- 70% success rate on automated tasks
- 80% token reduction claims
- Free tier available
- **Why it matters**: OSS infrastructure option

#### Browserless — Self-hosted Option
- Docker containers, Puppeteer/Playwright compatible
- $250/mo starting
- **Why it matters**: For teams needing self-hosted compliance

#### Hyperbrowser — MCP-native Infrastructure
- **HyperAgent**: 1,194 stars (browser agent)
- **MCP server**: 751 stars
- Features: scrape, crawl, extract, search. Wraps CUA, Claude Computer Use, Browser Use.
- Already in catalog as hyperbrowser-mcp
- **Why it matters**: Growing as the "MCP-native Browserbase"

### 5. META SHIFTS

1. **Stagehand v3 breaks from Playwright**: The biggest architectural shift since last ranking. Stagehand is no longer "Playwright + AI" — it's a standalone CDP-native framework. This redraws the competitive boundaries.

2. **CLI-over-MCP consensus is hardening**: Webctl (134pts HN), Smooth CLI (109pts HN), Agent Browser CLI (24K stars), Stagehand browse-cli all validate this. MCP for discovery, CLI for execution is settled.

3. **Consumer agentic browsers are mainstream**: Chrome Auto Browse, Atlas, Comet all launched since last ranking. The "Lane 4" is no longer niche — Google alone brings 3B+ Chrome users.

4. **Vision-first vs DOM/a11y-tree split**: Magnitude (vision-first, 4K stars) represents a growing faction that uses screenshots instead of accessibility trees. Most tools still use DOM/a11y, but this is worth tracking.

5. **Mozilla entering the space**: Tabstack (managed API) + Pilo (OSS engine) is Mozilla's bet. Early but backed by Mozilla's resources and ethics-first positioning.

6. **Vibium represents the Selenium succession**: The creator of Selenium building a BiDi-native, MCP-first replacement is symbolically and technically significant.

7. **Multi-agent architectures emerging**: Nanobrowser's planner/navigator/extractor split and similar patterns in other tools suggest the single-agent loop may give way to specialized sub-agents.

### 6. PERFORMANCE BENCHMARKS (updated)

| Tool | WebVoyager | Notes |
|------|-----------|-------|
| Browser Use | 89.1% | Steel.dev benchmark |
| OpenAI Atlas/CUA | 87% | OpenAI self-reported |
| Stagehand | ~75% | With Claude Sonnet 4.6 |
| Browser Use (Claude Opus) | ~78% | Task completion |
| Steel.dev | 70% avg | Automated web tasks |

---

## Quotes

> "CLI flips the control around — you control what enters context, allowing you to filter before context (e.g., showing only buttons, links, inputs or specific page regions)." — Webctl HN discussion

> "Production systems increasingly use hybrid approaches: Playwright for the 80% of steps that are deterministic, and Stagehand or Browser Use for the 20% that need AI reasoning." — NxCode comparison

> "Stagehand v3 removes the Playwright dependency and introduces a modular driver system, now working seamlessly with Puppeteer or any driver built on the Chrome DevTools Protocol." — Browserbase blog

> "Vibium implements the WebDriver BiDi specification—a WebSocket-based protocol that solves the flakiness and performance issues of the original HTTP-based WebDriver." — TestGuild

---

## Catalog Gaps

### MUST ADD (strong signals):
1. **Vibium** — 2.7K stars, 443pts HN, Selenium creator, BiDi+MCP-native. Critical miss.
2. **Nanobrowser** — 12.5K stars, Chrome extension, multi-agent, BYO API key. Significant adoption.

### SHOULD ADD (moderate signals):
3. **Magnitude** — 4K stars, vision-first approach, 145pts HN. Different architectural approach worth tracking.
4. **Tabstack (Mozilla)** — Managed API, Mozilla backing, 130pts HN. New entrant with institutional weight.
5. **Webctl** — 409 stars but 134pts HN. CLI-purist approach. At minimum, watch list.

### WATCH (early but interesting):
6. **Pilo (Mozilla)** — 28 stars, very new. OSS engine behind Tabstack.
7. **Smooth CLI** — 109pts HN, 35 stars. Token-efficiency focused.

### CONSUMER (don't catalog but track in meta):
8. **Chrome Auto Browse** — Google's consumer agent feature
9. **OpenAI Atlas** — Browser with Agent Mode
10. **Perplexity Comet** — Free cross-platform agentic browser
11. **Fellou** — 1M users, transparency-focused

---

## Recommended Next Step

1. **Deep-dive Vibium** — Needs full evaluation for catalog entry. Selenium pedigree + BiDi + MCP-native makes it potentially disruptive.
2. **Deep-dive Stagehand v3** — The architecture has changed enough to warrant re-evaluation of its position and verdict.
3. **Add Nanobrowser to catalog** — 12.5K stars, clear use case, mature enough.
4. **Update Chrome DevTools MCP entry** — v0.19.0 features (Lighthouse, slim mode, auto-connect) are significant.
5. **Consider adding Magnitude** — Vision-first is a genuinely different approach worth representing.
6. **Update meta/verdict** to reflect Stagehand v3 breaking from Playwright and the consumer browser explosion.
7. **Rank run** needed to re-evaluate lane positions given Stagehand v3 architecture change.
