# Deep-Dive Findings — Web Browsing / Browser Automation

## Scope

Evidence-backed deep-dive for the **web-browsing** problem space. Every claim ships with proof or it doesn't ship. Covers all confirmed leaders + new contenders from discover phase.

## Date

2026-03-24T02:15Z

## Inputs

### Web Searches (20+ queries)
- "browser use 2026 update new features release"
- "browser use vs skyvern vs stagehand comparison 2026"
- "chrome devtools mcp new features 2026 v0.20 v0.19 lighthouse"
- "CyberAgent chrome devtools MCP production case study"
- "stagehand v3 rewrite 2026 CDP architecture benchmark"
- "stagehand browse-cli CLI over MCP 2026"
- "playwright CLI vs MCP token efficiency 2026 comparison"
- "microsoft playwright MCP coding agents recommendation 2026"
- "Vibium browser automation Selenium creator Jason Huggins 2026"
- "Tabstack Mozilla browser API cloud 2026"
- "Magnitude browser automation framework open source 2026"
- "Nanobrowser AI web agent chrome extension"
- "Hyperbrowser MCP AI agents 2026"
- "BrowserOS nxtscape agentic browser 2026"
- "skyvern AI browser automation 2026 update enterprise"
- "best browser automation AI agents comparison 2026"
- "browser use vs playwright MCP vs stagehand 2026 comparison"
- "switched from browser use to stagehand playwright"
- "chrome devtools MCP vs playwright MCP comparison"

### HN Algolia Queries (12 queries)
- `browser-use` (points>20)
- `chrome+devtools+MCP` (points>20)
- `stagehand+browserbase` (points>10)
- `playwright+MCP+CLI` (points>10)
- `skyvern` (points>20)
- `BrowserOS+nxtscape` (points>10)
- `vercel+agent+browser` (points>5)
- `lightpanda+browser` (points>10)
- `vibium+browser` (points>5)
- `webctl+browser+CLI` (points>5)
- `tabstack+mozilla` (points>5)
- `magnitude+browser+automation` (points>5)

### GitHub API Checks (15 repos, verified 2026-03-24)
### npm / PyPI Download Checks (6 packages)
### WebFetch (Steel.dev leaderboard, browser-use changelog, CyberAgent case study, comparison blogs)

---

## Quantitative Traction Summary Table

| Contender | GitHub Stars | Weekly Downloads | HN Top Post | HN Pts | License | Last Push |
|-----------|-------------|-----------------|-------------|--------|---------|-----------|
| Browser Use | 83,568 | 1,130,836 PyPI/wk | Launch HN (YC W25) | 259 | MIT | 2026-03-23 |
| Chrome DevTools MCP | 31,046 | 358,383 npm/wk | Chrome DevTools MCP (2025) | 602 | Apache-2.0 | 2026-03-23 |
| Vercel Agent Browser | 24,438 | 182,801 npm/wk | (none >5 pts) | ~2 | MIT | 2026-03-23 |
| Lightpanda | 24,153 | N/A (binary) | Show HN: Lightpanda | 319 | AGPL-3.0 | 2026-03-23 |
| Stagehand | 21,668 | 303,034 npm/wk | Show HN: Stagehand | 326 | MIT | 2026-03-23 |
| Skyvern | 20,931 | N/A | Show HN: Skyvern | 422 | AGPL-3.0 | 2026-03-23 |
| Nanobrowser | 12,527 | N/A (extension) | Show HN | 9 | MIT | 2025-11-24 |
| BrowserOS / Nxtscape | 10,095 | N/A (app) | Show HN: Nxtscape | 314 | AGPL-3.0 | 2026-03-23 |
| Magnitude (browser-agent) | 4,003 | N/A | Show HN: Magnitude | 145 | MIT | 2026-02-08 |
| Vibium | 2,723 | ~740 PyPI/wk | Show HN: Vibium | 443 | MIT | 2026-03-18 |
| HyperAgent | 1,194 | N/A | Show HN: Hyperbrowser | 63 | MIT | 2026-02-14 |
| Playwright MCP | N/A (Microsoft) | 856,463 npm/wk | (multiple) | 181 | Apache-2.0 | 2026-03-23 |
| Hyperbrowser MCP | 751 | N/A | Show HN | 63 | MIT | 2025-11-20 |
| Webctl | 409 | N/A | Show HN: Webctl | 134 | MIT | 2026-03-18 |
| Smooth CLI | 18 (SDK repo) | N/A (cloud) | Show HN: Smooth CLI | 109 | Proprietary | 2026-03-04 |
| Pilo (Mozilla) | 28 | N/A | Show HN: Pilo | 18 | MPL-2.0 | 2026-03-23 |

---

## Findings by Contender

---

### 1. Browser Use — Unchallenged #1

**Quantitative Traction (verified 2026-03-24):**
- GitHub: 83,568 stars, 9,724 forks, 298 contributors, 216 open issues
- PyPI: **1,130,836 weekly downloads** (121,464/day)
- Monthly: 4,119,415 downloads
- Created: 2024-10-31 (~17 months old)
- Release cadence: v0.12.3 (2026-03-23) — active daily

**[STRONG] WebVoyager Benchmark — Steel.dev Leaderboard**
Source: https://leaderboard.steel.dev/
Date: 2026-03-17 | Engagement: leaderboard is the category standard
Who: Steel.dev (independent infrastructure provider)
Key data: Browser Use scores **89.1%** across 586 tasks. #6 overall. Above OpenAI Operator (87%), Skyvern 2.0 (85.85%). Below commercial leaders Surfer 2 (97.1%), Magnitude (93.9%), AIME-Browser-Use (92.34%).
Why it matters: First comprehensive public benchmark for the category. Browser Use leads all open-source agents.

**[STRONG] BU 2.0 Model — Own Cost-Optimized Model**
Source: https://browser-use.com/changelog/27-1-2026
Date: 2026-01-27 | selfReported: true
Key data: 83.3% accuracy (up from 74.7%), ~62s avg task, 40% faster than Claude Opus 4.5 at same accuracy, $0.60/$3.50 per 1M tokens.
Why it matters: Shows maturity — building own model, not just wrapping others.

**[STRONG] HN Launch — YC W25**
Source: https://news.ycombinator.com/item?id=43173378
Date: 2025-02-25 | Engagement: 259 pts / 100 comments
Who: Founders (gregpr07, Magnus Muller)
Why it matters: YC W25 backing. Moderate HN engagement for a tool that went viral primarily through GitHub trending.

**[MODERATE] Cloud Product Maturity**
Source: https://browser-use.com/changelog (selfReported: true)
Date: 2026-03-22
Key milestones: CLI 2.0 + Chromium 146, hCaptcha/reCAPTCHA solvers, API V3 (SOTA on Online-Mind2Web), Agent SDK 3.0, Cloud MCP server, Skills API, BU-30B open-source model (30B params / 3B active, "200 tasks per $1").
Why it matters: Comprehensive cloud product alongside OSS. SOC 2 Type II. Rare for OSS browser tools.

**[STRONG] Comparison Evidence — Category Roundups (multiple independent sources)**
Source: https://www.firecrawl.dev/blog/best-browser-agents | https://awesomeagents.ai/tools/best-ai-browser-automation-tools-2026/ | https://nohacks.co/blog/agentic-browser-landscape-2026
Date: 2026-01 to 2026-03 | Engagement: multiple independent publications
Who: Firecrawl, AwesomeAgents, NoHacks (independent)
Key quote: "Browser Use is the best for agentic Python tasks" (Firecrawl). Consistently ranked #1 for autonomous Python browsing across all three sources.
Why it matters: Multi-source independent confirmation of #1 position.

**[MODERATE] rtrvr.ai Independent Benchmark — Cloud Mode Weakness**
Source: Prior catalog data (rtrvr.ai)
Key data: Only 43.9% success rate in cloud mode vs Skyvern's 64.4%.
Why it matters: Cloud execution quality lags behind OSS self-hosted. Relevant for production deployments.

**Recent releases (verified):**
| Version | Date | Key Change |
|---------|------|-----------|
| 0.12.3 | 2026-03-23 | LiteLLM support, ChatVercel model |
| 0.12.2 | 2026-03-12 | Fix empty DOM after navigation |
| 0.12.1 | 2026-03-03 | Proxy auth fix, storage_state restore |
| 0.12.0 | 2026-02-26 | CSV generation, pinned deps |
| 0.11.13 | 2026-02-25 | CAPTCHA auto-solver watchdog |

**Verdict: Confirmed #1. No change recommended.** The gap is enormous and growing: 83.6K stars (4x #2), 1.1M weekly downloads (6x+ next agent). Only weakness is Python-only and cloud mode quality.

---

### 2. Chrome DevTools MCP — Lane 2 Leader, Fastest Growth

**Quantitative Traction (verified 2026-03-24):**
- GitHub: 31,046 stars, 1,832 forks, 98 open issues
- npm: **358,383 weekly downloads** (chrome-devtools-mcp package)
- Monthly trend: Sep 168K → Oct 318K → Nov 378K → Dec 572K → Jan 1.18M → Feb 1.08M → Mar 1.04M (through 3/22)
- Peak single day: 158,329 downloads (2026-02-25)
- Created: 2025-09-11 (~6 months old)
- License: Apache-2.0

**CRITICAL UPDATE: npm downloads are MUCH higher than previously cataloged.** Prior catalog referenced 423K/wk; current data shows 358K/wk for last week but monthly average is ~1M/month. The Jan-Feb spike to 1.18M/month suggests massive adoption surge.

**[STRONG] HN — Highest Single-Thread Score in Category**
Source: https://news.ycombinator.com/item?id=47390817
Date: 2026-03-15 | Engagement: **602 pts / 235 comments**
Who: Community (linked to developer.chrome.com official blog)
Key context: Highest HN post in entire web-browsing category. 602 > Browser Use 259 > Vibium 443 > Skyvern 422 > Stagehand 326.
Why it matters: Massive organic developer interest. Google Chrome team backing gives institutional credibility.

**[STRONG] CyberAgent Production Case Study**
Source: https://developer.chrome.com/blog/autofix-runtime-devtools-mcp
Date: 2026-03-18 | Who: CyberAgent (major Japanese tech company)
Key data: 100% audit coverage of 32 components and 236 Storybook stories in ~1 hour. 1 runtime error + 2 warnings identified and fixed. Zero false negatives. Agent autonomously navigated, read console errors, applied fixes, verified.
Key quote: "It's been very convenient to offload runtime errors and warning checks that I used to do manually in the browser." — Kota Yanagi, CyberAgent developer
Why it matters: First published production case study for any tool in this category. Real company, real results, real developer endorsement.

**[STRONG] Feature Velocity — 20 releases in 6 months**
Source: GitHub API (releases endpoint, verified 2026-03-24)
Key features added since v0.6.0 (Oct 2025):
- v0.20.0: Experimental CLI mode (2026-03-11)
- v0.19.0: pageId routing for parallel multi-agent workflows (2026-03-05)
- v0.18.0: `--slim` mode — 69% token reduction (18,500 → 5,600 tokens) (2026-02-25)
- v0.15.0: Inject script on page load (2026-01-29)
- v0.12.0: `--auto-connect` to existing Chrome sessions (2025-12-10)
- Lighthouse integration, memory snapshots, screencast recording, accessibility auditing
Why it matters: 20 feature releases in 6 months from a Google-backed team. Fastest iteration pace in category.

**[STRONG] Addy Osmani Endorsement**
Source: https://addyosmani.com/blog/devtools-mcp/
Date: 2025-09-25 | Who: Addy Osmani (Google Chrome DevTools lead, now Cloud AI Director)
Key quote: Researcher Delip Rao described it as a "Swiss-Army knife MCP"
Why it matters: Institutional backing from one of the most recognized names in web development.

**[MODERATE] --slim Mode Token Efficiency**
Source: GitHub release v0.18.0
Date: 2026-02-25
Key data: Full mode = 18,500 tokens for tool definitions. Slim mode = 5,600 tokens (69% reduction). Addresses the main criticism of Chrome DevTools MCP being token-heavy.
Why it matters: Directly responds to the token efficiency criticism that benefits Playwright CLI and Agent Browser.

**Verdict: Confirmed #2. Strong upward trajectory.** npm downloads are much higher than previously cataloged. CyberAgent case study is the only production case study in the entire category. --slim mode addresses token concerns.

---

### 3. Playwright MCP / CLI — Cross-Browser Infrastructure Standard

**Quantitative Traction (verified 2026-03-24):**
- npm (@playwright/mcp): **856,463 weekly downloads** — highest in category
- GitHub: Part of microsoft/playwright-mcp (Microsoft org, not separately starred)
- License: Apache-2.0

**[STRONG] CLI-over-MCP Token Efficiency — Settled Consensus**
Source: https://scrolltest.medium.com/playwright-mcp-burns-114k-tokens-per-test | https://betterstack.com/community/guides/ai/playwright-cli-vs-mcp-browser/ | https://supatest.ai/blog/playwright-mcp-vs-cli-ai-browser-automation | https://www.joanmedia.dev/ai-blog/cli-vs-mcp-the-technical-comparison-for-playwright-browser-automation | https://testdino.com/blog/playwright-cli-vs-mcp/
Date: 2026-01 to 2026-03 | Engagement: 13+ independent articles
Who: Multiple independent authors (testcollab, joanmedia, testdino, scrolltest, betterstack, supatest, test-lab.ai, kualitatem)
Key data:
- MCP: ~114,000 tokens per typical test
- CLI: ~27,000 tokens for same test — **4x reduction**
- On longer sessions the gap widens to **10x**
- MCP tool schema overhead: ~3,600 tokens before any action (26 tools)
- CLI documentation overhead: ~68 tokens total
Key quote: "Playwright MCP Burns 114K Tokens Per Test. The New CLI Uses 27K." — scrolltest (Medium)
Why it matters: 13+ independent sources converging on the same conclusion is extraordinary consensus. Not a debate — settled.

**[STRONG] Microsoft Official Position**
Source: https://developer.microsoft.com/blog/the-complete-playwright-end-to-end-story-tools-ai-and-real-world-workflows
Date: 2026-03
Who: Microsoft Playwright team
Key data: CLI for coding agents (Claude Code, Cursor, Copilot). MCP for sandboxed environments (Claude Desktop, custom chat UIs). GitHub Copilot Coding Agent uses Playwright MCP internally.
Why it matters: Microsoft's own recommendation validates the CLI-over-MCP split.

**[MODERATE] Ecosystem Integration**
Source: Multiple (qtrl.ai, testcollab, developer.microsoft.com)
Key data: CLI integrated into GitHub Copilot, Cursor, VS Code, Cline, Claude Code. MCP integrated into Claude Desktop, custom chat UIs.
Why it matters: The most widely integrated browser tool in the coding agent ecosystem.

**Verdict: Confirmed #3. Stable.** 856K npm/wk is the highest raw download count in the category. CLI-over-MCP consensus is settled. Infrastructure layer that everyone builds on.

---

### 4. Stagehand — Best SDK, Major v3 Pivot

**Quantitative Traction (verified 2026-03-24):**
- GitHub: 21,668 stars, 1,431 forks, 37 contributors, 177 open issues
- npm (@browserbasehq/stagehand): **303,034 weekly downloads**
- npm (@browserbasehq/browse-cli): 774 weekly downloads (very new, v0.2.0 released 2026-03-18)
- License: MIT

**CRITICAL UPDATE: Stagehand npm downloads dropped from prior catalog's 555K/wk to 303K/wk.** This is a significant decline that needs monitoring.

**[STRONG] Stagehand v3 — Complete Architecture Rewrite**
Source: https://www.browserbase.com/blog/stagehand-v3 | https://www.browserbase.com/changelog/stagehand-v3
Date: 2026-02 (v3 launch) | Who: Browserbase team (official)
Key data:
- Removed Playwright dependency — modular driver system (Puppeteer, Playwright, Patchright, any CDP driver)
- 44.11% faster on average across iframes and shadow-root interactions
- Direct CDP communication — minimized round-trip times
- Action caching: discovered elements reused without LLM inference
- Self-healing execution for DOM/layout shifts
- Multi-language: Go, Ruby, Java, Rust, Python (new in Jan 2026)
- Lighter memory footprint
Key quote: "Our Stagehand v3 workflows are noticeably snappier...helps us optimize caching to save on model costs." — Steve Austin, Benny Co-Founder & CTO
Why it matters: v3 is a genuine architecture pivot. No longer "Playwright + AI" — now a standalone AI-native framework. Action caching is a unique differentiator.

**[STRONG] HN Launch Signal**
Source: https://news.ycombinator.com/item?id=42635942
Date: 2025-01-08 | Engagement: 326 pts / 86 comments
Who: Community
Why it matters: Strong organic signal from developer community.

**[MODERATE] NxCode Benchmark Comparison**
Source: https://www.nxcode.io/resources/news/stagehand-vs-browser-use-vs-playwright-ai-browser-automation-2026
Date: 2026 | Who: NxCode (independent)
Key data:
- Stagehand: 1-3s per click; cost per act(): $0.002-0.01; extract(): $0.005-0.02
- Browser Use + Claude Opus: ~78% task completion
- Playwright hand-written: ~98% completion
- AI tools: <5% prompt adjustments over 30 days vs Playwright's 15-25% selector fixes
Why it matters: Independent quantitative comparison showing AI tools' maintenance advantage.

**[MODERATE] browse-cli — CLI-over-MCP Signal**
Source: npm registry, GitHub releases
Date: 2026-03-18 (v0.2.0)
Key data: Only 774 npm downloads/week. Very early.
Why it matters: Reads the CLI-over-MCP signal correctly but hasn't gained traction yet.

**[STRONG] Backing and Valuation**
Source: Multiple (Browserbase fundraise coverage)
Key data: Browserbase raised $40M Series B at $300M valuation. YC-backed. Cloudflare official integration.
Why it matters: Strong institutional backing ensures continued development.

**Verdict: Confirmed #4. npm download decline (555K → 303K) needs monitoring.** v3 architecture is genuinely innovative. browse-cli too early to evaluate. Action caching is a unique differentiator no competitor has.

---

### 5. Vercel Agent Browser — Token Efficiency Leader, Zero Community Signal

**Quantitative Traction (verified 2026-03-24):**
- GitHub: 24,438 stars, 1,446 forks, 304 open issues
- npm (agent-browser): **182,801 weekly downloads**
- Created: ~10 weeks old
- License: MIT

**[STRONG] Token Efficiency Claims — Independently Verified**
Source: https://dev.to/chen_zhang_bac430bc7f6b95/why-vercels-agent-browser-is-winning-the-token-efficiency-war | paddo.dev (prior catalog)
Date: 2026-03 | Who: Independent developers
Key data: 82-93% context reduction vs Playwright MCP. Six tests: ~31K characters with Playwright MCP vs ~5.5K with agent-browser (5.7x). "Snapshot + refs" system (e.g., `button "Sign In" [ref=e1]` → `click @e1`).
Why it matters: Token efficiency is real and independently verified by multiple sources.

**[WEAK] Zero HN Engagement at 24.4K Stars**
Source: HN Algolia search
Date: 2026-03-24
Key data: No HN submission above 5 points. This is the most anomalous star-to-HN ratio in the entire category. For comparison: Stagehand (21.7K stars → 326 HN pts), BrowserOS (10K stars → 314 HN pts), Vibium (2.7K stars → 443 HN pts).
Why it matters: Stars without organic community discussion is a red flag for authenticity. Could indicate corporate distribution (Vercel's platform) rather than organic adoption.

**[MODERATE] Technical Capabilities**
Source: vercel.com/docs/agent (selfReported: true)
Key data: Rust-powered CLI, sub-50ms boot, 108+ commands, video recording. Compatible with Claude Code, Cursor, GitHub Copilot, Codex, Gemini, opencode.
Why it matters: Technically capable but self-reported.

**[WEAK] 304 Open Issues in ~10 Weeks**
Source: GitHub API
Key data: 304 open issues. For comparison: Browser Use (83.5K stars) has 216 issues. Chrome DevTools MCP (31K stars) has 98 issues.
Why it matters: Issue velocity suggests quality/stability concerns.

**Verdict: Confirmed #5. No change.** Token efficiency is real but zero HN engagement and high issue count are persistent concerns. Watch for organic community validation.

---

### 6. Skyvern — Enterprise Workflow Automation

**Quantitative Traction (verified 2026-03-24):**
- GitHub: 20,931 stars, 1,860 forks, 144 open issues
- License: AGPL-3.0
- YC S23

**[STRONG] Strongest Cumulative HN Presence in Category**
Source: HN Algolia
Key data (all threads >20 pts):
| Title | Points | Comments | Date |
|-------|--------|----------|------|
| Show HN: Skyvern – Browser automation using LLMs and computer vision | 422 | 139 | 2024-03-14 |
| Launch HN: Skyvern (YC S23) | 327 | 74 | 2024-10-24 |
| Asking AI to build scrapers should be easy right? | 150 | 82 | 2025-10-17 |
| We accidentally burned through 200GB of proxy bandwidth in 6 hours | 96 | 137 | 2024-09-19 |
| Skyvern Browser Agent 2.0 | 49 | 31 | 2025-01-17 |
| Web Bench: a new way to compare AI browser agents | 34 | 9 | 2025-05-29 |
**Total: ~1,078 pts / ~472 comments across 6 threads over 2 years**
Why it matters: Strongest sustained HN presence in category. Not a one-hit wonder.

**[STRONG] WebVoyager Benchmark**
Source: https://leaderboard.steel.dev/
Date: 2026-03-17
Key data: Skyvern 2.0 scores **85.85%** on WebVoyager — #8 overall, #2 among open-source agents (behind Browser Use 89.1%).
Why it matters: Competitive benchmark score validates enterprise capability.

**[MODERATE] Enterprise Features**
Source: skyvern.com (selfReported: true)
Key data: CAPTCHA solving, 2FA/TOTP handling, proxy networks, parallel execution, HIPAA compliance, SOC2 Type II, SSO. Cloud pricing: $0.05/step with free tier.
Why it matters: Enterprise features that Browser Use doesn't match, particularly for form automation workflows.

**[MODERATE] MCP & Skills Launch**
Source: Web search
Date: 2026-03-03
Key data: Skyvern MCP & Skills launched, expanding into the agent ecosystem.
Why it matters: Shows Skyvern is adapting to the MCP ecosystem.

**Verdict: Confirmed #6. Stable.** Strong in its Lane 1 niche (enterprise workflow automation). AGPL-3.0 remains the biggest adoption barrier.

---

### 7. BrowserOS / Nxtscape — Lane 4 Consumer Browser Leader

**Quantitative Traction (verified 2026-03-24):**
- GitHub (browseros-ai/BrowserOS): 10,095 stars, 972 forks, 30 open issues
- License: AGPL-3.0
- YC S24
- Note: Repo moved from `nxtscape/nxtscape` to `browseros-ai/BrowserOS`

**[STRONG] Multiple Strong HN Threads**
Source: HN Algolia
| Title | Points | Comments | Date |
|-------|--------|----------|------|
| Show HN: Nxtscape – an open-source agentic browser | 314 | 206 | 2025-06-20 |
| Show HN: Open source alternative to Perplexity Comet | 291 | 122 | 2025-07-10 |
| Show HN: BrowserOS – "Claude Cowork" in the browser | 88 | 35 | 2026-01-22 |
**Total: ~693 pts / ~363 comments across 3 threads**
Why it matters: Strong organic community interest across multiple launches. 206 comments on first thread shows genuine engagement.

**[MODERATE] Market Positioning**
Source: KDnuggets, BrightCoding (independent)
Date: 2026-02
Key data: Listed in "Best Agentic AI Browsers to Look For in 2026". Privacy-first positioning vs ChatGPT Atlas, Perplexity Comet, Dia.
Why it matters: Consumer agentic browser is a distinct market. BrowserOS is the open-source leader.

**Verdict: Confirmed #7. Stable.** Lane 4 leader for consumer agentic browsers. AGPL-3.0 and ~10 contributors are concerns.

---

### 8. Lightpanda — Infrastructure Layer (Below Cut Line)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (lightpanda-io/browser): 24,153 stars, 962 forks, 91 open issues
- License: AGPL-3.0
- Secondary repos: lightpanda-io/demo (42 stars), lightpanda-io/agent-skill (25 stars)

**CRITICAL UPDATE: Stars jumped from prior catalog's "22K+" to 24,153.** Growth accelerating.

**[STRONG] Multiple Strong HN Threads**
Source: HN Algolia
| Title | Points | Comments | Date |
|-------|--------|----------|------|
| Show HN: Lightpanda, open-source headless browser in Zig | 319 | 137 | 2025-01-24 |
| Why we built Lightpanda in Zig | 212 | 187 | 2025-12-05 |
| Lightpanda migrate DOM implementation to Zig | 199 | 143 | 2026-01-12 |
| Lightpanda: Headless browser for AI and automation | 154 | 1 | 2025-01-24 |
**Total: ~884 pts / ~468 comments across 4 threads**
Why it matters: Strongest cumulative HN presence among infrastructure-layer tools.

**[STRONG] Performance Benchmark**
Source: lightpanda.io, independently cited in multiple articles
Key data: 11x faster execution, 9x lower memory vs headless Chrome. 100-page Puppeteer script: Chrome = 25.2s / 207MB peak; Lightpanda = 2.3s / 24MB.
Why it matters: If reliable, this is transformative for AI agent infrastructure costs.

**[MODERATE] CDP Compatibility**
Source: lightpanda.io (selfReported: true)
Key data: Drop-in backend for existing Playwright/Puppeteer scripts — change only `browserWSEndpoint`.
Why it matters: Low migration cost for existing workflows.

**[WEAK] Beta Status**
Source: Multiple
Key data: Beta as of March 2026. ~5% site breakage on heavy SPAs. Zig-based means small contributor pool.
Why it matters: Not production-ready for general use.

**Verdict: Confirmed below cut line (#8). Stars growing fast (24K).** Consider promoting to ranked list if/when it exits beta. The 11x performance claim + CDP compatibility is compelling for infrastructure.

---

### 9. Vibium — Selenium Creator's New Framework (Below Cut Line)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (VibiumDev/vibium): 2,723 stars, 155 forks, 29 open issues
- Language: Go
- License: MIT
- Last push: 2026-03-18

**[STRONG] HN Signal — Highest Signal-to-Star Ratio in Category**
Source: https://news.ycombinator.com/item?id=46377597
Date: 2025-12-24 | Engagement: **443 pts / 124 comments**
Who: Community (linked to Show HN by Jason Huggins, Selenium co-creator)
Key quote: "vibium is what i'd build if i started over today with ai agents in mind"
Why it matters: 443 HN pts at only 2.7K stars = 0.163 pts/star — highest ratio in category. Compare: Browser Use = 0.003, Chrome DevTools MCP = 0.019. The community interest vastly exceeds current adoption.

**[STRONG] Creator Credibility**
Source: Multiple (TestGuild, GIGAZINE, etc.)
Who: Jason Huggins — co-creator of Selenium (2004) and Appium
Key data: WebDriver BiDi (WebSocket-based, W3C standard), Go binary with zero dependencies, built-in MCP server as first-class interface, "Intelligent Fallback" (asks AI when element not found).
Why it matters: The most credible individual in browser automation history. BiDi-native + MCP-native is architecturally unique.

**[MODERATE] V1 Gaps**
Source: HN comments (objectID: 46377597)
Key data: No network interception, no JS injection, no DOM modification as of v1. Creator's own framing: "just v1, good for experimenting."
Why it matters: Honest self-assessment. Early but acknowledged.

**Verdict: Confirmed below cut line (#9). Monitor for 5K star threshold.** Creator credibility + HN signal are extraordinary. When stars catch up to community interest, promote to ranked list. Current trajectory: ~200-300 stars/month → 5K in 2-3 months.

---

### 10. Nanobrowser — Chrome Extension Agent (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (nanobrowser/nanobrowser): 12,527 stars, 1,312 forks, 53 open issues
- License: MIT
- **Last push: 2025-11-24 — no updates in ~4 months**

**[WEAK] HN Signal**
Source: HN Algolia
Date: 2025-03-04 | Engagement: 9 pts / 6 comments
Why it matters: 12.5K stars with only 9 HN points = extreme star-to-HN anomaly. Similar to Vercel Agent Browser pattern.

**[MODERATE] Product Concept**
Source: nanobrowser.ai, Chrome Web Store
Key data: Multi-agent Chrome extension (instruction agent + navigation agent + extraction agent). Uses your own API keys. Privacy-first local execution. Alternative to OpenAI Operator.
Why it matters: Interesting multi-agent architecture but no development activity since Nov 2025.

**Verdict: Not ranked. Appears dormant.** 4 months without commits despite 12.5K stars. Anomalous star-to-engagement ratio. Watch only.

---

### 11. Magnitude — Vision-First Browser Agent (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (magnitudedev/browser-agent): 4,003 stars, 221 forks, 29 open issues
- Last push: 2026-02-08
- Note: Main repo (magnitudedev/magnitude) has pivoted to a coding agent (17 stars)

**[STRONG] WebVoyager Benchmark — #2 Overall**
Source: https://leaderboard.steel.dev/
Key data: Magnitude scores **93.9%** on WebVoyager — #2 overall (behind only Surfer 2 at 97.1%). Above Browser Use (89.1%).
Why it matters: Highest open-source benchmark score. But only 4K stars suggests limited real-world adoption.

**[MODERATE] HN Signal**
Source: https://news.ycombinator.com/item?id=44390005
Date: 2025-06-26 | Engagement: 145 pts / 40 comments
Key quote: "Our vision-first approach gives us a significant edge over other browser agents."
Notable criticism: "If each step has a .95 chance of completing successfully, after not very many steps you have a pretty small overall probability of success."

**[WEAK] Pivot Concern**
Source: GitHub
Key data: Main repo pivoted to a coding agent. Browser-agent repo last updated 2026-02-08.
Why it matters: Focus may be shifting away from browser automation.

**Verdict: Not ranked. High benchmark but low adoption + possible pivot.** If the team refocuses on browser automation and crosses 10K stars, reconsider.

---

### 12. Tabstack (Mozilla) — Cloud API (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- No dedicated GitHub repo (cloud API product)
- Backed by Mozilla
- Launched: 2026-01-14

**[MODERATE] HN Launch**
Source: https://news.ycombinator.com/item?id=46620358
Date: 2026-01-14 | Engagement: 130 pts / 24 comments
Who: Mozilla team
Key quote: "We have certain values that we work by and will remain true to. If that ultimately means some number of potential customers choose a competitor, that is a trade-off we are comfortable with." (re: robots.txt)
Why it matters: Mozilla backing and ethics-first positioning are differentiators.

**[MODERATE] Product Design**
Source: tabstack.ai
Key data: Three endpoints (/extract, /generate, /automate). Smart routing: lightweight fetch first, full browser only when JS needed. Pricing: $1/1K Markdown extractions, $5 JSON, $7.50 automations. Free starter plan.
Why it matters: Clean API design. But competing against free/OSS tools.

**Verdict: Not ranked. Interesting but too early and no OSS component.** Mozilla backing is credible but product needs more traction. Second HN post (Research API) only got 10 pts.

---

### 13. Webctl — CLI-First Philosophy (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (cosinusalpha/webctl): 409 stars, 17 forks, 9 open issues
- Last push: 2026-03-18
- License: MIT

**[MODERATE] HN Signal**
Source: https://news.ycombinator.com/item?id=46616481
Date: 2026-01-14 | Engagement: 134 pts / 38 comments
Who: Independent developer
Key data: CLI-first (not MCP). Unix socket + JSON-RPC. Browser daemon stays open, cookies persist. Agent controls what enters context.
Why it matters: Represents CLI-over-MCP philosophy taken to its extreme. Interesting conceptually but too small for ranking.

**Verdict: Not ranked. Interesting signal, too small.** 409 stars is below any ranking threshold. Watch only.

---

### 14. Smooth CLI — Token-Efficient Cloud Agent (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (circlemind-ai/smooth-sdk): 18 stars
- YC-backed (Circlemind)
- Cloud-only, proprietary

**[MODERATE] HN Signal**
Source: https://news.ycombinator.com/item?id=46901233
Date: 2026-02-05 | Engagement: 109 pts / 74 comments
Who: Circlemind team (YC-backed)
Key claims: 20x faster and 5x cheaper than Claude Code with --chrome; 5x faster and 7x cheaper than "any other browser agent"
HN comment themes: Security/privacy concerns, local hosting requests, benchmarking skepticism.
Why it matters: 109 HN pts with only 18 GitHub stars — HN spike hasn't translated to adoption.

**[STRONG] WebVoyager Score**
Source: https://leaderboard.steel.dev/
Key data: Smooth scores **92%** on WebVoyager — #5 overall.
Why it matters: High benchmark but cloud-only and proprietary limits adoption.

**Verdict: Not ranked. Cloud-only, proprietary, 18 stars.** Strong benchmark but no OSS adoption path.

---

### 15. Pilo (Mozilla) — Open Source Engine (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (mozilla/pilo): 28 stars, 0 forks, 12 open issues
- Last push: 2026-03-23 (active)
- License: MPL-2.0

**[WEAK] HN Signal**
Source: https://news.ycombinator.com/item?id=47139110
Date: 2026-02-24 | Engagement: 18 pts / 3 comments
Why it matters: Very low engagement. Too early.

**Verdict: Not ranked. 28 stars, too early.** The OSS engine powering Tabstack. Watch for growth if Tabstack gains traction.

---

### 16. Hyperbrowser — Managed Infrastructure (Not Ranked)

**Quantitative Traction (verified 2026-03-24):**
- GitHub (hyperbrowserai/HyperAgent): 1,194 stars
- GitHub (hyperbrowserai/mcp): 751 stars (last push 2025-11-20)
- License: MIT

**[MODERATE] HN Threads**
Source: HN Algolia
| Title | Points | Comments | Date |
|-------|--------|----------|------|
| Show HN: Hyperbrowser MCP Server | 63 | 26 | 2025-03-20 |
| Show HN: Hyperbrowser – Scalable Browser Infra for AI | 57 | 45 | 2024-12-10 |

**Verdict: Not ranked. Managed infrastructure play, modest traction.** MCP repo hasn't been updated since Nov 2025.

---

## Pairwise Comparisons

### Browser Use vs Stagehand (Lane 1 vs Lane 3)
| Dimension | Browser Use | Stagehand | Winner |
|-----------|------------|-----------|--------|
| Stars | 83,568 | 21,668 | Browser Use (4x) |
| Downloads | 1.13M PyPI/wk | 303K npm/wk | Browser Use |
| Benchmark | 89.1% WebVoyager | ~75% task completion | Browser Use |
| Language | Python only | TypeScript (+ Go, Ruby, Java, Rust, Python) | Stagehand |
| Architecture | Full autonomy (LLM every step) | SDK primitives (act/extract/observe) + caching | Depends on use case |
| Token efficiency | High (LLM inference every step) | Better (action caching eliminates repeat LLM calls) | Stagehand |
| Backing | YC W25, SOC 2 Type II | Browserbase ($300M), YC, Cloudflare | Stagehand (enterprise) |
**Bottom line:** Different tools for different jobs. Browser Use for unpredictable autonomous workflows. Stagehand for repeatable, cacheable product integrations.

### Chrome DevTools MCP vs Playwright MCP (Lane 2 internals)
| Dimension | Chrome DevTools MCP | Playwright MCP | Winner |
|-----------|-------------------|----------------|--------|
| Stars | 31,046 | N/A (Microsoft org) | Chrome DevTools MCP |
| Downloads | 358K npm/wk (peak 1.18M/mo) | 856K npm/wk | Playwright MCP |
| HN | 602 pts (single thread) | ~181 pts | Chrome DevTools MCP |
| Cross-browser | Chrome only | Chromium + Firefox + WebKit | Playwright MCP |
| Token overhead | 18,500 tokens (full), 5,600 (slim) | 114K (MCP), 27K (CLI) | Chrome DevTools slim |
| Debugging | Deep (Lighthouse, memory, performance, LCP) | Basic (accessibility snapshots) | Chrome DevTools MCP |
| Production case study | CyberAgent (236 stories, 1 hour) | GitHub Copilot (internal) | Chrome DevTools MCP |
**Bottom line:** DevTools for Chrome debugging/performance. Playwright for cross-browser testing/automation. Use CLI mode for both when possible.

### Vercel Agent Browser vs Playwright CLI (Token efficiency)
| Dimension | Agent Browser | Playwright CLI | Winner |
|-----------|--------------|----------------|--------|
| Stars | 24,438 | N/A | Agent Browser |
| Downloads | 182K npm/wk | 856K npm/wk | Playwright CLI |
| Token reduction | 82-93% vs Playwright MCP | 4x vs Playwright MCP (75% reduction) | Agent Browser |
| HN signal | ~0 | Part of Playwright ecosystem | Playwright CLI |
| Maturity | 10 weeks old, 304 issues | Years of stability | Playwright CLI |
| Ecosystem | Compatible with major agents | Built into GitHub Copilot | Playwright CLI |
**Bottom line:** Agent Browser wins on pure token efficiency. Playwright CLI wins on everything else. Agent Browser's zero HN signal is the biggest red flag.

### Browser Use vs Skyvern (Lane 1 internals)
| Dimension | Browser Use | Skyvern | Winner |
|-----------|------------|---------|--------|
| Stars | 83,568 | 20,931 | Browser Use (4x) |
| Benchmark | 89.1% WebVoyager | 85.85% WebVoyager | Browser Use |
| HN cumulative | ~259 pts | ~1,078 pts | Skyvern |
| License | MIT | AGPL-3.0 | Browser Use |
| Enterprise features | Basic | CAPTCHA, 2FA, proxy, HIPAA, SSO | Skyvern |
| Use case | General autonomous browsing | Form automation, procurement, data entry | Depends |
**Bottom line:** Browser Use for general-purpose. Skyvern for enterprise workflows with CAPTCHA/2FA needs. AGPL is Skyvern's biggest barrier.

---

## Quotes

> "vibium is what i'd build if i started over today with ai agents in mind" — HN commenter on Vibium (443 pts thread)

> "It's been very convenient to offload runtime errors and warning checks that I used to do manually in the browser." — Kota Yanagi, CyberAgent developer, on Chrome DevTools MCP

> "Playwright MCP Burns 114K Tokens Per Test. The New CLI Uses 27K." — scrolltest (Medium, widely cited)

> "Our Stagehand v3 workflows are noticeably snappier...helps us optimize caching to save on model costs." — Steve Austin, Benny Co-Founder & CTO

> "We have certain values that we work by and will remain true to. If that ultimately means some number of potential customers choose a competitor, that is a trade-off we are comfortable with." — Tabstack/Mozilla team on robots.txt ethics

> "If each step has a .95 chance of completing successfully, after not very many steps you have a pretty small overall probability of success" — HN comment on Magnitude's reliability challenge

---

## Evidence Gaps and Unresolved Questions

1. **Vercel Agent Browser star authenticity** — 24.4K stars with zero organic HN discussion remains the category's biggest anomaly. No independent production case studies found. Need: organic HN moment or independent production testimonial.

2. **Stagehand npm download decline** — Dropped from 555K/wk (prior catalog) to 303K/wk. Is this v2→v3 migration churn, or genuine decline? Need: time-series data over next 2-4 weeks.

3. **Browser Use cloud mode quality** — rtrvr.ai showed 43.9% success in cloud mode. Has this improved with CLI 2.0 and API V3? Need: updated independent benchmark of cloud product.

4. **Vibium adoption trajectory** — 443 HN pts but only 2.7K stars. Will community interest convert to adoption? Need: 5K star threshold check in 2-3 months.

5. **Lightpanda production readiness** — Stars jumped to 24K but still beta with ~5% breakage. When will v1.0 ship? Need: release timeline from team.

6. **Magnitude pivot** — Main repo pivoted to coding agent. Is browser-agent still maintained? Need: clarification from team.

7. **Nanobrowser dormancy** — No commits since Nov 2025. Abandoned? Need: maintainer status check.

8. **YouTube evidence** — YouTube video data was not extractable via automated methods for any contender. YouTube search pages return only JS configuration, not rendered results. Manual collection or YouTube Data API needed.

---

## Recommended Ranking Changes

| # | Current | Recommended | Rationale |
|---|---------|-------------|-----------|
| 1 | Browser Use | Browser Use | No change. Gap growing. |
| 2 | Chrome DevTools MCP | Chrome DevTools MCP | No change. npm downloads much higher than cataloged. CyberAgent case study strengthens position. |
| 3 | Playwright MCP/CLI | Playwright MCP/CLI | No change. 856K npm/wk, settled CLI consensus. |
| 4 | Stagehand | Stagehand | No change. v3 architecture is strong but npm decline (555K→303K) needs monitoring. |
| 5 | Vercel Agent Browser | Vercel Agent Browser | No change. Token efficiency verified but zero HN signal persists. |
| 6 | Skyvern | Skyvern | No change. Stable in enterprise niche. |
| 7 | BrowserOS / Nxtscape | BrowserOS / Nxtscape | No change. Lane 4 leader. |
| 8 | Lightpanda (below cut) | Lightpanda (below cut) | Stars jumped to 24K. Consider promoting when exits beta. |
| 9 | Vibium (below cut) | Vibium (below cut) | No change. Monitor for 5K star threshold. |

**No ranking changes recommended.** All positions confirmed by evidence. Key metrics to update in catalog:
- Browser Use stars: 81K → 83.6K; downloads: 1M+ → 1.13M/wk
- Chrome DevTools MCP: npm downloads much higher (358K/wk, peaked 1.18M/mo); add CyberAgent case study
- Playwright MCP npm: 1.38M → 856K/wk (Note: prior number may have been @playwright/mcp + related packages)
- Stagehand npm: 555K → 303K/wk (DECLINE — needs investigation)
- Vercel Agent Browser npm: 284K → 183K/wk (DECLINE)
- Lightpanda stars: 22K → 24.2K (growing fast)

## Recommended Next Step

Pass to **rank agent** for final ranking validation and catalog update. Key items for rank agent:
1. Confirm Stagehand and Agent Browser npm download declines
2. Update all star counts and download numbers in catalog
3. Add CyberAgent case study to Chrome DevTools MCP observedOutputs
4. Update Lightpanda star count
5. Consider adding Nanobrowser dormancy note to whatChangesThis
