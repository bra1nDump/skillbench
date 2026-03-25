# Discover Findings - Web Browsing / Browser Automation

## Scope

Full discovery run for **web-browsing/browser automation**: surface every serious contender (especially anything newer than the latest catalogs), new social comparisons, and missing gaps. Deliver the required multi-channel signal list (web search, HN, Twitter, Reddit, GitHub, Registry).

## Date

2026-03-25T03:18Z

## Inputs

### Web Searches (5 queries run via Bing)
- `web browsing best tools 2026`
- `web browsing comparison 2026`
- `browser use vs agent browser 2026`
- `Smooth CLI Playwright MCP 2026`
- `bb-browser AI agents 2026`

### HN Algolia Queries
- `web browsing` (points>10)
- `Browser Use` (points>10)
- `Playwright MCP` (points>10, includes Smooth CLI, BrowserBee, ProofShot)
  (all above were run via Algolia API with numeric filters)

### Twitter / X search commands
- `node .agents/skills/x-twitter/x.js search "Browser Use agent" --sort relevancy --max-results 50`
- `node .agents/skills/x-twitter/x.js search "agent-browser vs browser-use" --sort relevancy --max-results 50`
- `node .agents/skills/x-twitter/x.js search "Smooth CLI" --sort relevancy --max-results 30`

### Reddit queries
- `npx tsx .agents/skills/reddit-search/scripts/reddit-search.ts search "web browsing agent" 20`
- `npx tsx .agents/skills/reddit-search/scripts/reddit-search.ts search "browser automation agent" 20`
- Reddit posts pulled from `r/browserbase` and `r/AgenticOps` (5 posts each)

### GitHub / Registry
- `curl https://api.github.com/repos/browser-use/browser-use`
- `curl https://api.github.com/repos/vercel-labs/agent-browser`
- `curl "https://api.github.com/search/repositories?q=browser+agent+created:>2025-12-01+stars:>1000&sort=stars&per_page=5"`
- `curl -s https://skills.sh/search?q=browser` (registry page)

## Findings

1. **Browser Use CLI 2.0 still owning performance** – `@624523425` benchmarked Browser Use CLI vs Playwright CLI (same Claude workflow). Browser Use CLI: **1m 23.3s** / Playwright CLI: 1m 42.4s; publicly posted 2026-03-23 (891 impressions, 3 likes). The same author pointed clients to the repo/skill for repeatable wiring. *Why this matters:* independent, timed comparisons reinforce the CLI-over-MCP signal and give browser-use a new rebuttal to “Playwright is the standard.” *Freshness & credibility:* 2026-03-23 tweet + benchmark video link `https://twitter.com/624523425/status/2036065004043292763`. Verified by the author (public tweet, includes raw numbers and linked repo).  

2. **Agent-browser is no longer a hobby project** – GitHub shows `vercel-labs/agent-browser` at **24,670 stars** (updated 2026-03-24; created Jan 11 2026). The repo now ships with a headful recording workflow, persistent daemon for fast commands, and official downloads (`agent-browser.dev`). *Why this matters:* 24K stars in 3 months + Vercel Labs backing > large adoption; fills the CLI + recordings lane that Browser Use and Smooth target. *Freshness & credibility:* GitHub API data, `https://github.com/vercel-labs/agent-browser` (updated 03-24).  

3. **NEW CONTENDER: Pilo (Mozilla open-source engine)** – Tabstack blog (Feb 24 2026) announces Pilo as the OSS engine powering their `/automate` endpoint. Pilo uses Playwright accessibility tree snapshots, layered retries, LLM-grade tool selection, and built-in validation (`grade`). Source: `https://tabstack.ai/blog/introducing-pilo-browser-automation`. *Why this matters:* Mozilla is open-sourcing a full agentic loop (observe/decide/act/validate) with accessibility tree compression and error-handling. This is a clean OSS counterpart to Tabstack’s managed API and is **not yet in catalog** (hit 28 stars but has large institutional weight). *Freshness & credibility:* Official Tabstack blog and GitHub release (Feb 24 2026).  

4. **NEW CONTENDER: Tabstack (Mozilla) managed API** – same blog cites Tabstack’s `/extract`, `/generate`, and `/automate` endpoints with layered retries, instrumentation, and ethical guardrails. The service is priced ($1/1K Markdown extractions, $7.50/1K automations) and positioned as privacy-first. *Why this matters:* Institutional weight from Mozilla + the ability to plug in the service via API means teams can “rent” a resilient agentic browser. Catalog currently misses this managed API offering. *Link:* `https://tabstack.ai/blog/introducing-pilo-browser-automation` + `https://github.com/mozilla/pilo`.  

5. **NEW CONTENDER: ProofShot (visual verification CLI)** – `https://github.com/AmElmo/proofshot` README (Mar 2026) advertises ProofShot as an open-source CLI that records videos/screenshots/logs of whatever agent (Claude, Cursor, etc.) does in the browser and uploads artifacts to PRs. It hooks directly to `agent-browser`, bundles recordings, and detects server errors in 10+ languages. *Why this matters:* Validates agent-created browser workflows before human review, closes the “agent builds UI but can’t prove it works” gap. Catalog currently lacks any verification tooling of this class. *Freshness & credibility:* README + CLI instructions as of 2026-03.  

6. **NEW CONTENDER: bb-browser (Epiral)** – GitHub search returns `epiral/bb-browser` (created Jan 31 2026, 1,725 stars). It's described as “Your browser is the API,” a CLI + MCP server that reuses your login state and exposes a high-level branchless command set for agents. *Why this matters:* CLI+MCP hybrid targeted at AI agents running with existing Chrome profiles; plus the GitHub star count indicates early adoption. Catalog currently does not mention `bb-browser`. *Source:* GitHub search result (see `items` in GitHub API response above).  

7. **NEW CONTENDER: dev-browser (Sawyer Hood)** – `SawyerHood/dev-browser` hit **3,972 stars** (updated 2026-03-24) and describes a Claude Skill giving agents a browser via Playwright + skill packaging. *Why this matters:* 3.9K stars + the developer’s pedigree (creator of Claude skills for agent debugging) makes this a strong, plug-and-play CLI candidate. Not yet cataloged.  

8. **NEW CONTENDER: Vibium (Jason Huggins, 2.7K stars)** – Search results show `VibiumDev/vibium` (2,726 stars, updated 2026-03-18) and highlight the WebDriver BiDi architecture with MCP server baked in. The HN signal (443pts) underscores serious interest. *Why this matters:* Builder of Selenium is shipping a BiDi-native CLI + agent-first runtime; this could become the “new Selenium” for agents. Not cataloged.  

9. **NEW CONTENDER: Smooth CLI (109pts HN)** – `https://docs.smooth.sh/cli/overview` states Smooth CLI routes agent requests through a dedicated model, providing 20× faster + 5× cheaper navigation plus P2P tunnels and expo-scribed security. HN post (Feb 5 2026) confirmed freshness. *Why this matters:* Smooth people argue CLI + token-efficiency is the right abstraction; still early but high signal (109 points). Keep on watch list for when GitHub traction catches up (currently ~35 stars).  

10. **Key Player Opportunity: Browser Use founders & Smooth CLI team** – @browser_use (Gregor/Magnus) are still hands-on (Twitter conversation vs agent-browser). Tabstack’s Mozilla lead and Smooth CLI’s `@antves` maintainers all publish benchmarks and how-to threads, so capturing direct interviews or quoting them would anchor the Key Players entity in the next phase. *Why this matters:* Developer-level insights from the creators shape editorial ranking and highlight user trade-offs.  

11. **Meta gap: consumer agentic browsers are now mainstream** – Chrome Auto Browse (Gemini 3), OpenAI Atlas/Agent Browser, and Perplexity Comet have all launched since the last catalog update. They serve general consumers and not just devs, so they must be tracked differently but recognized in the meta section; the catalog currently focuses on developer tooling (still OK but note the consumer momentum).  

12. **Catalog Gap call-outs**
- Missing Pilo/Tabstack (Mozilla) open-source + managed tiers despite strong signals.
- Missing multiple modern CLIs (bb-browser, dev-browser, Vibium) that exceed 1K stars since Dec 2025.
- No verification tooling like ProofShot even though it can be module-level (agent builds UI + records proof).  

## Quotes

> “Smooth CLI is a browser built for AI agents. Instead of exposing hundreds of low-level tools, it gives agents a simple natural language interface.” — Smooth CLI docs, `https://docs.smooth.sh/cli/overview` (2026-03).  
> “We call it Pilo. It became the bedrock of our platform, and we realized that developers everywhere need this same robust, transparent foundation.” — Tabstack blog announcement, `https://tabstack.ai/blog/introducing-pilo-browser-automation` (2026-02-24).  
> “ProofShot closes the loop: an open-source CLI that plugs into any AI coding agent and gives it a verification workflow — video, screenshots, errors, and PR comments.” — ProofShot README, `https://github.com/AmElmo/proofshot` (2026-03).  

## Recommended Next Step

1. Deep-dive **Pilo + Tabstack** (Tabstack managed API + Mozilla OSS engine) to decide on catalog inclusion and evidence (docs, GitHub, demos).  
2. Deep-dive the **CLI infrastructure cluster** (bb-browser, dev-browser, Vibium, Smooth CLI) to capture their APIs, evidence, and differentiate them vs Browser Use / Stagehand.  
3. Add a **ProofShot evidence node** to show how verification flows complement browsers; confirm integration with `agent-browser`.  
4. Validate **browser-use vs agent-browser vs Playwright** again (we now have fresh tweets and bench data) before the rank stage.  
5. Capture **Key Player interviews** with Browser Use founders, Smooth CLI maintainers, and Tabstack / Pilo leads for the Key Players entity.  
