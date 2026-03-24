# Deep-Dive Findings — UX / UI

## Scope

Evidence-backed deep-dive of all contenders in the `ux-ui` problem space. Every claim backed by public artifacts passing the signal quality bar. Covers existing ranked solutions, catalog updates, and new contender evaluation.

## Date

2026-03-24T02:15Z

## Inputs

### Prior Run Referenced
- `agent-runs/2026-03-24_01-37_run_ux-ui/discover_ux-ui/findings.md`

### Research Queries (across 5 parallel agents)
- GitHub API for all contender repos (stars, forks, contributors, last push)
- npm API for all packages (weekly/monthly/total downloads)
- HN Algolia for all contender names and combinations
- 30+ WebSearch queries across comparisons, reviews, CVEs, market impact
- WebFetch on official docs, blog posts, comparison articles
- PulseMCP directory for visitor estimates
- YouTube search (10 queries — blocked by bot detection, pivoted to web search)

### Key Sources Fetched
- CTO Guide: alexbobes.com/tech/figma-mcp-the-cto-guide-to-design-to-code-in-2026/
- SFAI Labs: sfailabs.com/guides/figma-mcp-vs-paper
- Southleft comparison: southleft.com/insights/ai/figma-mcp-vs-figma-console-mcp/
- FreeCodeCamp: freecodecamp.org/news/figma-mcp-vs-kombai-frontend-clone-comparison/
- Uber Engineering: uber.com/blog/automate-design-specs/
- CNBC Figma stock: cnbc.com/2026/03/19/figma-stock-drops-11percent-after-google-releases-vibe-design-product-stitch.html
- Google Blog: blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
- Paper MCP docs: paper.design/docs/mcp
- Anima MCP blog: animaapp.com/blog/code/connect-your-ai-coding-agent-to-anima-playground-and-figma-with-mcp/

---

## Findings

### 1. Figma Official MCP — #1 (STRENGTHENED)

**[STRONG]** GitHub Blog: Bidirectional capability added March 6, 2026
Source: https://github.blog/changelog/2026-03-06-figma-mcp-server-can-now-generate-design-layers-from-vs-code/
Date: 2026-03-06 | Who: Figma/GitHub official
Key quote: "Send rendered UI back to Figma as editable frames."
Why it matters: Eliminates Console MCP's sole claim to bidirectional with Official backing.

**[STRONG]** Triple AI platform partnership
Source: GitHub Blog, Anthropic announcement (2026-02-17), OpenAI Codex announcement (2026-02-26)
Key fact: Official MCP now integrated with GitHub Copilot, Claude Code, AND OpenAI Codex.
Why it matters: No other design MCP has partnerships with all three major AI coding platforms.

**[STRONG]** Code Connect dominance: 215,968 npm/week
Source: npm API, week of 2026-03-16 to 2026-03-22
Package: `@figma/code-connect`
Why it matters: 3x the downloads of Framelink. Maps real codebase components to Figma — the #1 cited differentiator across all comparison articles.

**[STRONG]** Zero CVE history
Source: WebSearch for "Figma MCP CVE vulnerability 2025 2026" — no results
Imperva explicitly recommends: "migrate to the official Figma MCP server" (after Framelink CVE)
Why it matters: Clean security record vs. Framelink's CVE-2025-53967.

**[MODERATE]** PulseMCP: 17,300 estimated weekly visitors
Source: pulsemcp.com, 2026-03-24
Why it matters: Lower than Framelink (43,600) — Official server is hosted/remote, so users don't search for install instructions as often.

**[MODERATE]** CTO Guide verdict: #1 for teams with Code Connect
Source: https://alexbobes.com/tech/figma-mcp-the-cto-guide-to-design-to-code-in-2026/
Date: 2026-02-21 | Who: Alex Bobes, CTO-audience technical blog
Key quote: "Code Connect is the #1 way to get consistent component reuse in code."
Limitation noted: Prescriptive output (React/Tailwind) can "poison the context" — LLM mimics auto-generated code structure.

**[WEAK]** HN traction: 0 stories >10pts about Official MCP itself
The March 6 bidirectional update got zero HN coverage.

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars (guide repo) | 455 |
| npm weekly (server) | N/A (hosted remote) |
| npm weekly (Code Connect) | 215,968 |
| PulseMCP weekly visitors | 17,300 |
| HN stories >10pts | 0 |
| CVEs | 0 |
| AI platform partnerships | 3 (Copilot, Claude, Codex) |
| Last active | 2026-03-11 |

#### Verdict: Remains #1. Bidirectional + Code Connect + zero CVEs + triple partnership = strongest institutional position.

---

### 2. Framelink — #2 (CONFIRMED, with corrections)

**CRITICAL CORRECTION:** The npm package `figma-developer-mcp` (69,154/week) belongs to **Framelink (GLips)**, NOT to Figma Official. The CVE advisory (GHSA-gxw4-4fc5-9gr5) confirms this. Figma's official MCP is a hosted remote server, not distributed via npm. The catalog's "38.6K npm/week" figure was stale — current is 69,154/week.

**[STRONG]** GitHub: 13,877 stars, 1,098 forks, 25 contributors, MIT license
Source: GitHub API, 2026-03-24
Last push: 2026-03-20
Why it matters: 30x more stars than Official's guide repo. Largest community-built Figma MCP.

**[STRONG]** npm: 69,154 weekly downloads (as `figma-developer-mcp`)
Source: npm API, week of 2026-03-16 to 2026-03-22
Growth: ~276K/month vs Imperva's "100K/month" at CVE discovery (July 2025) = 2.8x growth.

**[STRONG]** PulseMCP: 43,600 estimated weekly visitors
Source: pulsemcp.com, 2026-03-24
Why it matters: 2.5x more than Official. Highest visitor count in category.

**[STRONG]** CVE-2025-53967 — CONFIRMED, patched
Source: GitHub Advisory GHSA-gxw4-4fc5-9gr5, Imperva blog, The Hacker News, DarkReading
CVSS: 7.5 (High) | Type: Command injection in `fetch-with-retry.ts` fallback curl
Timeline: Disclosed 2025-07-08 → Patched 2025-09-29 (v0.6.3) — 83-day window
Key quote (Imperva): "We recommend users immediately update to a fixed version or even migrate to the official Figma MCP server."
Coverage: The Hacker News, DarkReading, SentinelOne, Endor Labs, HackMag

**[STRONG]** CTO Guide: 25% smaller output than Official
Source: alexbobes.com CTO Guide, 2026-02-21
Key quote: "Prescriptive output poisons the context; the LLM sees auto-generated code structure and mimics it instead of using your codebase's patterns."
Why it matters: Framelink sends descriptive JSON; Official sends prescriptive React/Tailwind.

**[WEAK]** HN: 0 stories >10pts mentioning Framelink directly

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars | 13,877 |
| GitHub forks | 1,098 |
| Contributors | 25 |
| npm weekly | 69,154 |
| PulseMCP weekly visitors | 43,600 |
| HN stories >10pts | 0 |
| CVEs | 1 (CVE-2025-53967, patched v0.6.3) |
| License | MIT |
| Last active | 2026-03-20 |

#### Verdict: Confirmed #2. Highest community adoption in category. Corrected npm attribution (69K/week is Framelink's, not Official's). ⚠️ Require ≥v0.6.3.

---

### 3. Figma Console MCP — #3 (CONFIRMED, strengthened)

**[STRONG]** Uber uSpec production validation
Source: https://www.uber.com/blog/automate-design-specs/
Date: ~March 2026 | Who: Uber Engineering (confirmed via @UberEng on X)
Key details:
- Screen reader specs in **<2 minutes** (previously weeks)
- **7 implementation stacks** (UIKit, SwiftUI, Android XML, Compose, Web React, Go, SDUI)
- Serves **thousands of engineers** via Base design system
- Generates 6 spec sections × 3 platforms (VoiceOver, TalkBack, ARIA)
Key quote: "The MCP gave us something we couldn't have built alone: reliable, local access to Figma's component data, variables, and styles from an AI agent."
Why it matters: Strongest independent enterprise validation in the entire category. Named blog post from a Fortune 500 engineering team.

**[STRONG]** GitHub: 1,206 stars, 8 contributors, MIT, last push 2026-03-22
Source: GitHub API, 2026-03-24
Why it matters: Org-backed (Southleft), 8 contributors, very active.

**[STRONG]** npm: 13,452 weekly downloads
Source: npm API, week of 2026-03-16 to 2026-03-22
Monthly: 42,390 | Total: ~49,475

**[STRONG]** 84+ tools (expanded from initial 57)
Source: GitHub README, v1.17.3
Includes 11 dedicated variable/token management tools, batch operations (100 variables/call).
Plugin API access = full read/write vs Official's REST API.

**[MODERATE]** Southleft self-published comparison
Source: https://southleft.com/insights/ai/figma-mcp-vs-figma-console-mcp/
Note: Published by Console MCP's creators — tagged `selfReported: true`
Key claim: Official MCP cannot create/modify/delete elements; Console MCP can. Official has 14 tools vs Console's 84+.

**[WEAK]** HN: No stories >5pts

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars | 1,206 |
| Contributors | 8 |
| npm weekly | 13,452 |
| Tools | 84+ |
| HN stories >5pts | 0 |
| Enterprise adoption | Uber (uSpec) |
| License | MIT |
| Last active | 2026-03-22 |

#### Verdict: Confirmed #3. Uber uSpec is the strongest enterprise validation in the category. 84+ tools and Plugin API access give it the deepest Figma integration. Note: Figma Official's new bidirectional narrows Console's unique advantage, but Console still leads on programmatic depth.

---

### 4. Cursor Talk to Figma / Grab — #4 (CONFIRMED)

**[STRONG]** GitHub: 6,541 stars, 701 forks, Grab (public company) backed
Source: GitHub API, 2026-03-24
Contributors: 5 (sonnylazuardi, dusskapark, Kenrick-Zhou, saleiva, GustavoBorgez)
Created: 2025-03-16 | Last push: 2026-03-07

**[STRONG]** PulseMCP: #37 global, 9,300 weekly visitors, 1.2M total visitors
Source: pulsemcp.com, 2026-03-24
Why it matters: Broadest reach by total visitors. #37 globally across ALL MCP servers.

**[STRONG]** npm: 1,596 weekly, 151,094 total downloads
Source: npm API, 2026-03-24
Why it matters: Highest total downloads in category (151K).

**[STRONG]** Multi-platform distribution
Listed on: Cursor Marketplace (curated alongside AWS, Stripe, Linear), LobeHub, Glama, Playbooks.com, MCPMarket, SourceForge
Why it matters: Broadest distribution network of any Figma MCP.

**[MODERATE]** CTO Guide: #3 pick for "free Figma plan users"
Source: alexbobes.com CTO Guide, 2026-02-21
Best for: Free-tier compatible via plugin API

**[WEAK]** 73 open issues on GitHub
Source: GitHub API
Why it matters: Scaling challenge signal. 73 open issues vs 20 for Console MCP.

**[WEAK]** HN: 0 stories >3pts

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars | 6,541 |
| GitHub forks | 701 |
| npm weekly | 1,596 |
| npm total | 151,094 |
| PulseMCP weekly | 9,300 |
| PulseMCP total | 1,200,000 |
| PulseMCP global rank | #37 |
| HN stories >3pts | 0 |
| Backed by | Grab (public company) |
| Last active | 2026-03-07 |

#### Verdict: Confirmed #4. Largest community reach by total downloads/visitors. Corporate backing from Grab. Weaker toolset than Console MCP but more accessible.

---

### 5. figma-use — #5 (DOWNGRADE RISK: CRITICAL)

**[STRONG]** HN: 115 points, 37 comments on Show HN
Source: https://news.ycombinator.com/item?id=46665169
Date: 2026-01-18 | Who: dannote (author)
Key quote: "The official Figma MCP server can only read files. I wanted AI to actually design."
Why it matters: Strongest HN signal in the write-access lane — but this was pre-breakage.

**[STRONG] (NEGATIVE)** Figma 126+ broke CDP transport
Source: GitHub commits 2026-03-01
Key details: Figma 126+ blocks remote debugging — the CDP pathway figma-use relies on. Now requires `figma-use daemon start --pipe` workaround.
README references "OpenPencil" — author appears to be pivoting to a different product.
Why it matters: Core transport mechanism broken by upstream platform change. Existential risk.

**[STRONG] (NEGATIVE)** npm: only 89 weekly downloads
Source: npm API, week of 2026-03-16 to 2026-03-22
Monthly: 1,326 | Total: ~2,775
Why it matters: Extremely low adoption despite strong HN reception. Suggests the CDP-based approach hasn't found product-market fit.

**[MODERATE]** GitHub: 513 stars, 1 contributor, last push 2026-03-01
Source: GitHub API, 2026-03-24
Sole contributor: dannote
Why it matters: Single maintainer + no activity in 23 days + platform breakage = high bus-factor risk.

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars | 513 |
| Contributors | 1 |
| npm weekly | 89 |
| HN points | 115 |
| Platform risk | Figma 126+ broke CDP |
| Author status | Pivoting to "OpenPencil" |
| Last active | 2026-03-01 |

#### Verdict: DOWNGRADE WARNING. Despite 115pt HN, the tool has 89 npm/week, a broken transport layer, a solo maintainer pivoting away, and no commits in 23 days. Should be flagged with ⚠️ or moved below new contenders with stronger signals.

---

### 6. Onlook — #6 (DOWNGRADE RISK: NEAR-DORMANT)

**[STRONG]** GitHub: 24,947 stars — highest in category
Source: GitHub API, 2026-03-24

**[STRONG]** HN: 408 points on Show HN (May 2025)
Source: https://news.ycombinator.com/item?id=44127653
Date: 2025-05-29
Why it matters: Exceptional launch reception — but 10 months ago.

**[STRONG]** YC W25 batch
Founded by Daniel Farrell (designer) and Kiet Ho (ex-Amazon, ex-ServiceNow).

**[STRONG] (NEGATIVE)** Only 2 commits in all of 2026
Source: GitHub API (recent commits)
Timeline:
- 2026-02-27: Website copy update (not product code)
- 2026-01-21: Minor UI improvement
- 2025-12-14: 3 security patches (CVE-2025-63783, -63784, -63785)
- **March 2026: ZERO commits**
Why it matters: A 25K-star repo with 2 commits in 3 months (one being a website update) is clearly stalling.

**[MODERATE]** 353 open issues
Source: GitHub API
Why it matters: Growing backlog with no development activity to address it.

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars | 24,947 |
| Forks | 1,879 |
| HN peak | 408 pts |
| 2026 commits | 2 (0 in March) |
| Open issues | 353 |
| YC batch | W25 |
| No MCP integration | ✓ |
| Last product commit | 2026-01-21 |

#### Verdict: DOWNGRADE WARNING. Stars and HN signal are historical. Near-zero development activity in 2026. No MCP integration. Should carry a "declining activity" warning. Consider moving below actively-maintained contenders.

---

### 7. Kombai — #7 (CONFIRMED, niche)

**[STRONG]** Highest design-to-code fidelity: 75-80%
Source: https://dev.to/oikon/can-ai-tools-implement-designs-perfectly-h36
Methodology: Same Figma design, identical prompt, visual fidelity measurement
Results: Kombai 75-80% > Codex CLI 70-75% > Claude Code 65-70%

**[STRONG]** FreeCodeCamp head-to-head vs Figma MCP
Source: https://www.freecodecamp.org/news/figma-mcp-vs-kombai-frontend-clone-comparison/
Key quote: "Choose Kombai if you care about precision and code quality with codebase understanding."
Kombai advantages: Visual accuracy "extremely close to Figma template," proper data separation, codebase-aware, reusable tokens.
Figma MCP advantage: Speed (~5 min vs ~15+ min for complex).

**[WEAK]** Zero meaningful HN traction
Funding announcement (TechCrunch, $4.5M seed, Aug 2023) got 1 point on HN.
"Why build a domain-specific agent for front end tasks?" (kombai.com) got 8 points.

**[WEAK]** No open-source core
GitHub org `kombai-io` has 22 repos, all with near-zero stars. Highest: `webbuilder` (22 stars).
No community ecosystem.

**[MODERATE]** No MCP integration — proprietary VS Code extension
Different mechanism from MCP tools. Cannot be composed with other MCP servers.

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| Design fidelity | 75-80% (highest) |
| GitHub stars | ~0 (proprietary) |
| HN peak | 8 pts |
| Funding | $4.5M seed (2023) |
| MCP support | No |
| Open source | No |

#### Verdict: Confirmed #7. Niche specialist with highest measured fidelity. Lacks MCP, community, and HN presence. Relevant as a "best quality" benchmark, not as an agent-composable tool.

---

### 8. Google Stitch — UPGRADE from provisional to ranked #8

**[STRONG]** Figma stock impact: -11% over 2 days
Source: https://www.cnbc.com/2026/03/19/figma-stock-drops-11percent-after-google-releases-vibe-design-product-stitch.html
Date: 2026-03-19 | Who: CNBC primary reporting
Key quote: "Google's vast resources, free pricing model, and deep integration with its Workspace ecosystem could allow it to rapidly capture market share."
Also confirmed by: Investing.com, StockTwits, TradingView.

**[STRONG]** Official SDK actively developed
Source: GitHub API — `google-labs-code/stitch-sdk`: 1,263 stars, 51 forks, last push 2026-03-19
npm: `@google/stitch-sdk` — 4,942 weekly downloads (first published 2026-03-12, 12 days old)
Community MCP: `davideast/stitch-mcp` — 570 stars, last push 2026-03-23

**[STRONG]** Free pricing disruption
Source: stitch.withgoogle.com, multiple reviews
350 free generations/month (Standard), 50/month (Experimental)
Previously Galileo AI at $39/month — now free after Google acquisition.
Key comparison: Free vs Figma's ~$13,200/year for 20-person team.

**[STRONG]** DESIGN.md export format
Source: AI Tools Club, Google blog
Agent-friendly markdown file for exporting design systems to Claude Code, Cursor, Gemini CLI.
Why it matters: Purpose-built for agent workflows, unlike Figma's JSON-based exports.

**[MODERATE]** Google Blog: major redesign March 18-19, 2026
Source: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
Features: Voice Canvas, infinite canvas, Hatter design agent, MCP server, SDK
Galileo AI acquisition absorbed.

**[MODERATE]** Consensus positioning: "Use Stitch to start, Figma to finish"
Source: NxCode, The AI Corner, Medium — multiple independent reviews
Why it matters: Complementary to Figma ecosystem, not replacement. Different lane.

**[WEAK]** HN: only 18pts on the CNBC stock story
Surprisingly low for a Google product launch. No viral Show HN moment.

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars (SDK) | 1,263 |
| GitHub stars (community MCP) | 570 |
| npm weekly (SDK) | 4,942 |
| HN peak | 18 pts |
| Pricing | Free (350 gen/mo) |
| Market impact | Figma -11% stock |
| MCP support | Yes (SDK + community) |
| Last active | 2026-03-23 |

#### Verdict: Remove "provisional" flag. Rank #8 (Lane E: AI-native design creation). Free pricing + MCP SDK + DESIGN.md + Google backing make it the most consequential new entrant. Different lane from Figma MCP tools (generates designs vs reads existing ones). Low HN traction is the main gap.

---

### NEW CONTENDER: paper.design — RECOMMEND ADD (Lane B/F)

**[STRONG]** SFAI Labs comparison: 21 MCP tools, bidirectional, HTML/CSS native
Source: https://sfailabs.com/guides/figma-mcp-vs-paper
Date: 2026-03-12 | Who: SFAI Labs (independent)
Key details:
- 21 MCP tools (9 read, 6 write, 2 specialized read, 4 utility)
- Bidirectional: agents can create frames, update styles, set text, get screenshots, retrieve JSX/Tailwind
- HTML/CSS native canvas — "the design IS the code"
Key quote: "Figma MCP gives AI agents a window... paper.design MCP gives agents a steering wheel."
Figma cited as having "85-90% styling inaccuracy in beta" vs paper's native code output.

**[STRONG]** GPU shaders library: 1,889 GitHub stars
Source: GitHub API — `paper-design/shaders`
81 forks, last push 2026-03-21, PolyForm Shield license
Why it matters: Strong open-source artifact demonstrating engineering quality.

**[MODERATE]** Wes Bos endorsement
Source: https://x.com/wesbos/status/2031837764514431314
Who: Wes Bos (prominent web dev educator, ~500K followers)
Key quote: "Makes a ton of sense when your design app can pull real data from your database."

**[MODERATE]** Pricing: Free (100 MCP calls/week), Pro $20/mo (1M calls/week)
Source: paper.design/docs/mcp

**[MODERATE]** $4.2M funding, open alpha
Source: Contra community post
Founded by Stephen Haney

**[WEAK]** HN: max 14pts (liquid metal shader demo, 2025-02-19)
No breakout HN moment for MCP capabilities.

**[WEAK]** Community MCP wrapper: 2 stars
Source: GitHub — `ripgrim/paper-mcp`

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| MCP tools | 21 (bidirectional) |
| GitHub stars (shaders) | 1,889 |
| HN peak | 14 pts |
| Funding | $4.2M |
| Status | Open alpha |
| Canvas type | HTML/CSS native |

#### Verdict: RECOMMEND ADD. Strongest MCP-native design tool outside the Figma ecosystem. HTML/CSS native canvas eliminates design-to-code translation loss. Alpha stage is the main risk. Should rank below established Figma tools but above dormant/niche entries.

---

### NEW CONTENDER: Vibma — RECOMMEND ADD (Lane B)

**[STRONG]** GitHub: 460 stars, MIT, very active (last push 2026-03-23)
Source: GitHub API, 2026-03-24
Created: 2026-02-26 (less than 1 month old)
15 open issues, 31 forks

**[MODERATE]** Harness engineering differentiator
Source: GitHub README
Runtime warnings steer AI agents toward Figma design best practices — "ESLint for design."
Fork of cursor-talk-to-figma with added guardrails.

**[MODERATE]** Figma Community plugin: "Vibe Design"
Source: https://www.figma.com/community/plugin/1597089912594855032/vibe-design

**[MODERATE]** LLM compatibility note
Source: README
"Only Claude Opus 4.6 consistently achieves demonstrated results."

**[WEAK]** HN: Show HN thread exists but minimal traction
Source: https://news.ycombinator.com/item?id=47217411

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| GitHub stars | 460 |
| Age | ~1 month |
| License | MIT |
| HN peak | ~2 pts |
| Figma plugin | Yes |
| Last active | 2026-03-23 |

#### Verdict: RECOMMEND ADD with "new" flag. Fast-growing fork of Grab's tool with design-practice guardrails. Too early for ranking confidence — watch for adoption metrics. Already in catalog as `vibma` slug.

---

### NEW CONTENDER: Anima — RECOMMEND ADD (Lane A/D)

**[STRONG]** IBM strategic investment (Feb 2026)
Source: https://siliconangle.com/2026/02/05/ibm-invests-generative-ai-app-design-startup-anima/
Date: 2026-02-05 | Who: SiliconANGLE (independent)
Key facts: 1.5M+ installs across Figma/Adobe XD. Enterprise customers: Amazon, Samsung, Apple, Disney, Deloitte, Cisco.

**[STRONG]** YC S18, established since 2017
Source: YC company page
HN Launch: 88pts, 20 comments (2018-07-19)

**[MODERATE]** Official cloud-hosted MCP
Source: https://docs.animaapp.com/docs/anima-mcp
Endpoint: `https://public-api.animaapp.com/v1/mcp`
No local server needed — cloud-hosted differentiator.
GitHub guide: AnimaApp/mcp-server-guide (1 star)

**[MODERATE]** Anima Skill: agentic platform (Feb 2026)
Source: https://www.animaapp.com/blog/agentic/ai-agents-can-now-design-explore-and-publish-apps-with-anima/
AI agents can design, explore, and publish apps. Bidirectional: "Copy to Figma" feature.

**[MODERATE]** Design system → npm package pipeline
Source: GitHub — AnimaApp/anima-sdk (27 stars, last push 2026-03-23)
Converts Figma designs to React components with Storybook documentation.

**[MODERATE]** Self-reported impact metrics (tagged `selfReported: true`)
"Projects delivered up to 50% faster" | "Up to 80% savings on front-end coding"
Source: IBM investment press release

**[WEAK]** No recent HN traction (last post with traction: 2020, 22pts)

#### Quantitative Summary
| Metric | Value |
|--------|-------|
| Founded | 2017 |
| YC batch | S18 |
| Installs | 1.5M+ |
| IBM investment | Feb 2026 |
| Enterprise customers | Amazon, Samsung, Apple, Disney |
| GitHub stars (SDK) | 27 |
| MCP type | Cloud-hosted (official) |
| Pricing | From $31/mo |
| HN peak | 88 pts (2018) |
| Last active | 2026-03-23 |

#### Verdict: RECOMMEND ADD. Strongest enterprise pedigree among new contenders (IBM, 1.5M installs, Fortune 500 customers). Cloud MCP is novel. Pricing ($31/mo) and low community engagement are weaknesses. Best fit for enterprise teams needing design-system-aware code generation.

---

### EVALUATED BUT BELOW CUT LINE

#### Mowgli — NOT RECOMMENDED for catalog
- No MCP integration — standalone SaaS web app
- HN: 6pts (2026-02-28)
- No GitHub repo (closed source)
- Pricing: From $12/mo
- **Why below cut line:** Without MCP, it cannot participate in agent workflows. Standalone design tools without agent composability are outside SkillBench's scope.

#### Motiff — NOT RECOMMENDED for catalog
- MCP: Unofficial community wrapper with 0 stars, 2 read-only tools, last push 2025-07-27
- HN: 0 relevant stories
- Figma controversy: "Swipe, Copy, Sue" article raises authenticity concerns
- Performance claims: "100K-layer files in <5 seconds" — impressive but unverified independently
- **Why below cut line:** No official MCP support. Unofficial wrapper is stale and minimal. Reputational risk from Figma copying controversy.

#### Builder.io Visual Copilot — NOT RECOMMENDED for catalog
- Not MCP-based (proprietary AI pipeline)
- Different mechanism entirely
- **Why below cut line:** Outside MCP ecosystem. Worth noting as context but not as a catalog entry.

---

## Quantitative Traction Summary Table

| Rank | Solution | GitHub Stars | npm/week | PulseMCP/week | HN Peak | CVEs | Enterprise | MCP Tools | Last Active |
|------|----------|-------------|----------|---------------|---------|------|------------|-----------|-------------|
| #1 | Figma Official MCP | 455 (guide) | — (hosted) | 17,300 | 0 | 0 | 3 AI partnerships | 14 + bidi | 2026-03-11 |
| #2 | Framelink | 13,877 | 69,154 | 43,600 | 0 | 1 (patched) | — | 2 (read) | 2026-03-20 |
| #3 | Console MCP | 1,206 | 13,452 | — | 0 | 0 | Uber uSpec | 84+ (r/w) | 2026-03-22 |
| #4 | Grab (Cursor Talk) | 6,541 | 1,596 | 9,300 | 0 | 0 | Grab | ~30 (r/w) | 2026-03-07 |
| #5 ⚠️ | figma-use | 513 | 89 | — | 115 | 0 | — | 100+ (r/w) | 2026-03-01 |
| #6 ⚠️ | Onlook | 24,947 | — | — | 408 | 3 (patched) | YC W25 | 0 (no MCP) | 2026-01-21 |
| #7 | Kombai | ~0 (proprietary) | — | — | 8 | 0 | $4.5M seed | 0 (no MCP) | — |
| #8 NEW | Google Stitch | 1,263 (SDK) | 4,942 | — | 18 | 0 | Google | SDK + MCP | 2026-03-23 |
| NEW | paper.design | 1,889 (shaders) | — | — | 14 | 0 | $4.2M | 21 (bidi) | 2026-03-21 |
| NEW | Vibma | 460 | — | — | ~2 | 0 | — | Full (fork) | 2026-03-23 |
| NEW | Anima | 27 (SDK) | — | — | 88 (2018) | 0 | IBM, 1.5M installs | Cloud MCP | 2026-03-23 |

---

## Pairwise Comparisons

### Figma Official vs Framelink
| Dimension | Winner | Evidence Strength |
|-----------|--------|-------------------|
| Code Connect support | **Official** | [STRONG] — 215K npm/week, cited as #1 differentiator |
| Output quality (without Code Connect) | **Framelink** | [STRONG] — 25% smaller, descriptive vs prescriptive |
| Community adoption | **Framelink** | [STRONG] — 30x stars, 2.5x PulseMCP |
| Security | **Official** | [STRONG] — 0 CVEs vs CVE-2025-53967 |
| Cost (free plan) | **Framelink** | [STRONG] — Free vs Dev Mode paywall |
| Bidirectional | **Official** | [STRONG] — Since Mar 6, 2026 |
Source: CTO Guide, LogRocket, Imperva

### Framelink vs Console MCP
| Dimension | Winner | Evidence Strength |
|-----------|--------|-------------------|
| Tool count | **Console** | [STRONG] — 84+ vs 2 |
| Read/write | **Console** | [STRONG] — Full r/w via Plugin API |
| Variable management | **Console** | [STRONG] — 11 dedicated tools |
| Simplicity | **Framelink** | [MODERATE] — API token vs plugin setup |
| Enterprise validation | **Console** | [STRONG] — Uber uSpec |
Source: Southleft comparison

### Figma MCP ecosystem vs paper.design
| Dimension | Winner | Evidence Strength |
|-----------|--------|-------------------|
| MCP bidirectionality | **paper.design** | [STRONG] — 21 tools vs 2-14 |
| Code output quality | **paper.design** | [STRONG] — No translation layer |
| Maturity | **Figma MCP** | [STRONG] — Production vs alpha |
| Team collaboration | **Figma MCP** | [STRONG] — Decade of tooling |
| Solo dev pricing | **paper.design** | [STRONG] — Free 100 calls/week |
Source: SFAI Labs comparison

### Google Stitch vs Figma
| Dimension | Winner | Evidence Strength |
|-----------|--------|-------------------|
| Speed to first draft | **Stitch** | [STRONG] — Text/voice to UI in minutes |
| Cost | **Stitch** | [STRONG] — Free vs $13.2K/yr for teams |
| Polish/finishing | **Figma** | [STRONG] — Industry standard |
| MCP/agent integration | **Stitch** | [MODERATE] — DESIGN.md, SDK |
| Market impact | **Stitch** | [STRONG] — Figma -11% stock |
Source: NxCode, The AI Corner, CNBC

### Kombai vs Figma MCP (code quality)
| Dimension | Winner | Evidence Strength |
|-----------|--------|-------------------|
| Visual accuracy | **Kombai** | [STRONG] — 75-80% vs 65-70% |
| Code structure | **Kombai** | [STRONG] — Data separation, design tokens |
| Speed | **Figma MCP** | [MODERATE] — 5 min vs 15+ min |
| Agent composability | **Figma MCP** | [STRONG] — MCP protocol |
Source: FreeCodeCamp, DEV Community

---

## Quotes

> "Prescriptive output poisons the context; the LLM sees auto-generated code structure and mimics it instead of using your codebase's patterns." — CTO Guide (alexbobes.com), on Figma Official vs Framelink

> "The MCP gave us something we couldn't have built alone: reliable, local access to Figma's component data, variables, and styles from an AI agent." — Uber Engineering Blog, on Console MCP / uSpec

> "Figma MCP gives AI agents a window... paper.design MCP gives agents a steering wheel." — SFAI Labs comparison

> "Choose Kombai if you care about precision and code quality with codebase understanding. Choose Figma MCP if you want something quick." — FreeCodeCamp

> "Google's vast resources, free pricing model, and deep integration with its Workspace ecosystem could allow it to rapidly capture market share." — CNBC, on Figma stock drop

> "The official Figma MCP server can only read files. I wanted AI to actually design." — dannote (figma-use author), HN Show HN (115pts)

> "Use Stitch to start. Use Figma to finish." — Consensus from NxCode, The AI Corner, Medium reviews

---

## Evidence Gaps & Unresolved Questions

1. **YouTube videos**: Bot detection blocked all 10 YouTube search URL scrapes. Video IDs need manual collection or alternative approach. No YouTube evidence was gathered for any contender.

2. **Twitter/X engagement**: X search tools were not available in this environment. Wes Bos endorsement of paper.design and Uber Engineering's Console MCP tweet were found via web search but engagement metrics (likes, retweets) were not captured.

3. **Reddit signals**: Reddit search tool was not available. No Reddit evidence gathered.

4. **Figma Official MCP actual tool count**: Sources conflict (14 tools per Southleft, "3 core" per SFAI Labs). The bidirectional update may have added tools. Needs direct verification.

5. **paper.design tool count**: Official docs show 21, SFAI Labs cites 24. Discrepancy may be due to deprecated/preview tools.

6. **Vibma adoption metrics**: Too new (1 month) for meaningful npm/download data. Figma plugin install count unavailable (403 from Figma API).

7. **Anima MCP capabilities**: Cloud-hosted MCP endpoint exists but tool count and capability depth not documented publicly.

8. **figma-use "OpenPencil" pivot**: Author referenced "OpenPencil" in commits but no public information about what this is. May indicate project abandonment.

9. **Onlook future**: 25K stars but near-zero 2026 activity. Is the team pivoting, fundraising, or winding down? No public signal.

10. **Google Stitch MCP maturity**: SDK is v0.0.3 (3 versions in 12 days). Community MCP (`davideast/stitch-mcp`) is the main integration path. Official MCP server status unclear.

---

## Recommended Next Steps

1. **Update catalog rankings**: Confirm #1-#4, add ⚠️ warnings to #5 (figma-use) and #6 (Onlook), upgrade Stitch to ranked #8, add paper.design, Vibma, and Anima.

2. **Correct npm attribution**: `figma-developer-mcp` (69K/week) belongs to Framelink, not Figma Official. Update catalog accordingly.

3. **Update lane structure**:
   - Lane A (read-only): Official #1, Framelink #2
   - Lane B (bidirectional write): Console MCP #1, Grab #2, Vibma #3 (new), figma-use #4 ⚠️
   - Lane C (alternative platforms): Penpot, Excalidraw, paper.design (new)
   - Lane D (design-to-code agents): Kombai #1, Anima #2 (new)
   - Lane E (AI-native creation): Stitch #1, Onlook #2 ⚠️
   - Note: Official MCP now spans Lanes A+B since March 6

4. **Collect missing evidence**: YouTube videos (manual), Twitter engagement, Reddit signals.

5. **Monitor figma-use**: If no commits by April, consider removing from ranked list.

6. **Monitor Onlook**: If no product commits by April, downgrade to "inactive" status.

7. **Re-evaluate in 30 days**: Stitch SDK maturity, paper.design alpha→beta transition, Vibma adoption growth.
