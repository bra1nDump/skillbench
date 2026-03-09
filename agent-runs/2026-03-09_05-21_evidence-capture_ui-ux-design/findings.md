# Evidence Capture Findings

## Scope

Capture visible public artifacts that can be shown directly on the report page for the UI/UX design category.

## Date

2026-03-09 05:21 America/Los_Angeles

## Inputs

- OpenAI Developers X post about the Figma partnership
- `dannote/figma-use` GitHub repository
- Paper MCP docs
- Reddit workflow thread about Claude Code and Figma
- Hacker News threads for Figma-use and Vibma

## Findings

- A captured screenshot of the [OpenAI Developers post](https://x.com/OpenAIDevs/status/1894796327181273432) is strong enough to use as the official public artifact for `Figma MCP + Codex`.
  Asset: `assets/openai-devs-x-post.png`

- A captured screenshot of [`dannote/figma-use`](https://github.com/dannote/figma-use) is the clearest public write-access challenger artifact currently found.
  Asset: `assets/figma-use-github.png`

- A captured screenshot of the [Paper MCP docs](https://paper.design/docs/mcp) is good enough to show the narrow direct-write wedge even though it is more capability evidence than a social proof artifact.
  Asset: `assets/paper-mcp-docs.png`

- A captured screenshot of the [Reddit workflow thread](https://www.reddit.com/r/ClaudeAI/comments/1r7vvmr/new_figma_mcp_lets_you_import_claude_code_ui/) is useful to show that users care about editability and loop closure, not just pretty outputs.
  Asset: `assets/reddit-figma-claude-workflow.png`

- Captured screenshots of the [Figma-use HN thread](https://news.ycombinator.com/item?id=46665169) and the [Vibma HN thread](https://news.ycombinator.com/item?id=47217411) are useful for hover previews on trust signals.
  Assets: `assets/hn-figma-use-thread.png`, `assets/hn-vibma-thread.png`

- The OpenAI partnership article itself returned a Cloudflare challenge in headless mode, so it was not reliable as a direct screenshot source for this run.
  Why this matters: artifact capture should prefer browser-capturable public sources when some official pages block headless traffic.

## Quotes

- `Just a moment...`
  Source: headless browser title returned for `https://openai.com/index/figma-partnership/`

## Recommended Next Step

Surface these assets directly on the report page and use hover previews on ranking rows and live-signal citations so the evidence is visible without leaving the page.
