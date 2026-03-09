# Social Scan Findings

## Scope

Go beyond official docs for the UI/UX design category and look for the live public meta across X, Reddit, and Hacker News.

## Date

2026-03-09 05:35 PDT

## Inputs

- local `bra1ndump/skills/twitter-x` skill
- web search for X, Reddit, and Hacker News discussions
- prior discover / deep-dive / rank runs

## Findings

- The local Twitter skill was attempted first. It failed initially because its Python dependencies were not installed, and after installing them it still failed because `X_API_KEY` was not configured locally.
  Why this matters: the skill is present, but it is not operational on this machine right now for live X API search.

- The strongest official X signal is the [OpenAI Developers post about the Figma partnership](https://x.com/OpenAIDevs/status/1894796327181273432).
  Trust note: highest trust because it is an official OpenAI developer-facing account and it directly supports the ranking thesis around code-to-design roundtrips.

- A live X community argument is captured in [Grok's trend summary around whether Figma is unnecessary when using Claude Code](https://x.com/i/grok/share/H3vvF6phN15ssxK3OjvDPq98l).
  Trust note: medium. It is useful as a sign of where the conversation is moving, but it is not as strong as a direct post from the underlying authors.

- The [Figma x Anthropic live broadcast](https://x.com/i/broadcasts/1zqKVYkQkAkxB) is a high-signal public event showing that design-to-code with Claude is now part of the mainstream conversation rather than a fringe hack.
  Trust note: high. Official host, public artifact, narrow workflow relevance.

- On Reddit, [a workflow to open a Figma file in Claude Code and return to Figma](https://www.reddit.com/r/ClaudeAI/comments/1r7vvmr/new_figma_mcp_lets_you_import_claude_code_ui/) is a strong positive signal because it explicitly values editability and loop closure.
  Trust note: medium-low. Community anecdote, but concrete and directly tied to the job.

- Also on Reddit, [Claude Code and Figma issues](https://www.reddit.com/r/ClaudeAI/comments/1wn3l83/claude_code_and_figma_issues/) is a strong negative signal because it records friction and unofficial alternatives in the wild.
  Trust note: medium-low. Single-user report, but valuable because it describes failure modes rather than hype.

- On Hacker News, [Show HN: Figma-use, an agentic UI framework using Figma as the source of truth](https://news.ycombinator.com/item?id=45963703) is the strongest public head-to-head challenger signal found so far.
  Trust note: high relative to community posts because it attracted substantial discussion and frames itself as "better than just using the official Figma MCP server" for richer design operations.

- Also on Hacker News, [Show HN: Vibma, an open-source write-access alternative to official Figma MCP](https://news.ycombinator.com/item?id=46066199) is useful because it makes the official-vs-write-access split explicit even though traction is currently much lower.
  Trust note: medium-low. Builder post with low traction, but directly relevant to the category.

- The broader job has enough traction to show up in [Ask HN: Tips for agentic coding based on Figma design?](https://news.ycombinator.com/item?id=46205188).
  Trust note: medium-high. Not a solution post, but strong evidence that the workflow is mainstream enough to be asked in public by technical users.

## Quotes

- "turn code prompts directly into polished designs with Codex"
  Source: [OpenAI Developers X post](https://x.com/OpenAIDevs/status/1894796327181273432)

- "better than just using the official Figma MCP server"
  Source: [Show HN: Figma-use](https://news.ycombinator.com/item?id=45963703)

- "write-access alternative to official Figma MCP"
  Source: [Show HN: Vibma](https://news.ycombinator.com/item?id=46066199)

## Recommended Next Step

- Track unofficial write-access challengers separately from official trust leaders.
- Add a QA pass that verifies whether every linked social source is actually reachable from the product.
