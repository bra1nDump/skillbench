# QA Link Audit Findings

## Scope

Validate the shipped Skillbench surface for broken internal routes, broken rendered markdown links, broken run assets, and dead outbound citations.

## Date

2026-03-09 04:57 America/Los_Angeles

## Inputs

- local app at `http://127.0.0.1:3000`
- homepage
- `Document Editing & UI/UX Design` report page
- rendered docs pages
- rendered run pages
- `agent-browser` browser spot-checks for X and Reddit links

## Findings

- The docs renderer was dropping non-HTTP markdown links and rendering them as plain text instead of anchors. That broke links from `agents.md` to `agent-runs/agents.md` and `qa.md`.
- The shipped X broadcast citation at `https://x.com/i/broadcasts/1zqKVYkQkAkxB` resolves to `Page not found / X` in a real browser session. It should not ship.
- The Reddit friction-report URL previously used on the report page was swapped to a live `r/ClaudeCode` thread:
  `https://www.reddit.com/r/ClaudeCode/comments/1rg9a2v/claude_code_and_figma_issues/`
- Reddit returns `403` to generic HTTP clients, so QA should treat Reddit link checks as warnings that still require a browser spot-check, not as silent passes.
- A dedicated automated gate now exists in `npm run qa:links`. It validates:
  - markdown source links in root docs and `agent-runs/`
  - shipped internal routes reachable from the live site
  - shipped run assets reachable from the live site
  - shipped outbound citations, with host-specific handling for Reddit

## Quotes

- `Page not found / X`
  Source: browser title returned by `agent-browser` for `https://x.com/i/broadcasts/1zqKVYkQkAkxB`

## Recommended Next Step

Run `npm run qa:publish` before the next publish and keep browser spot-checking the highest-risk X and Reddit citations when the HTTP client result is ambiguous.
