# Deep-Dive Findings

## Scope

Deep-dive the real differences between Figma MCP, Paper MCP, raw Claude Code, and raw Codex for document editing and UI/UX design.

## Date

2026-03-09 04:25 PDT

## Inputs

- official OpenAI / Figma partnership page
- Figma Dev Mode docs
- Figma MCP remote vs desktop docs
- Paper MCP docs
- Claude Code MCP docs
- OpenAI Codex docs
- recent Reddit discussion about editable Figma output

## Findings

- Figma MCP is the current trust center for design-aware agent workflows because both the tool vendor and the agent vendors are documenting or announcing it directly.
  Sources:
  - https://openai.com/index/figma-partnership/
  - https://www.figma.com/dev-mode/

- Paper MCP has a narrower but very strong wedge: direct write-back. It is the clearest answer when the user wants the agent to manipulate the design document itself.
  Source: https://paper.design/docs/mcp

- Raw Claude Code is stronger than raw Codex as a no-connector fallback for this category because Anthropic has public evidence of internal frontend-oriented usage and Claude Code's MCP model is explicit and mature.
  Sources:
  - https://code.claude.com/docs/en/mcp
  - https://www.anthropic.com/news/how-ai-is-transforming-work-at-anthropic

- Raw Codex becomes much stronger once Figma is attached, but without Figma or Paper it is mostly a general coding agent for this job.
  Sources:
  - https://developers.openai.com/codex/cloud
  - https://openai.com/index/figma-partnership/

- The public meta is shifting away from "can the model generate a pretty screenshot?" and toward "can this output stay editable and trusted inside the real design tool?"
  Community signal:
  - https://www.reddit.com/r/ClaudeAI/comments/1r7vvmr/new_figma_mcp_lets_you_import_claude_code_ui/

## Quotes

- "lets Claude use external tools and services"
  Source: https://code.claude.com/docs/en/mcp

- "AI coding tools like Claude"
  Source: https://www.figma.com/dev-mode/

- "The Paper MCP server lets AI assistants access your Paper design files"
  Source: https://paper.design/docs/mcp

## Pairwise Comparisons

### Figma MCP vs Paper MCP

- Figma wins on ecosystem gravity, standard design-handoff familiarity, and official public trust.
- Paper wins on direct in-document editing and write-back specificity.

### Figma MCP + Codex vs Figma MCP + Claude Code

- Codex currently has the strongest public roundtrip story because the OpenAI/Figma partnership explicitly centers it.
- Claude Code remains a strong second choice when the user is already embedded in Claude Code and wants to keep one host.

### Raw Claude Code vs Raw Codex

- Claude Code is the better UI/UX design fallback without connectors because its public evidence is more design-adjacent today.
- Raw Codex is more implementation-first in this category until a design connector is attached.

## Recommended Next Step

Rank the contenders with one main table, but explicitly carve out a sub-case where Paper jumps to the top for direct design-document mutation.
