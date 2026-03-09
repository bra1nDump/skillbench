# Discover Findings

## Scope

Discover the current meta for document editing and UI/UX design with coding agents, focusing on Figma MCP, Paper MCP, raw Claude Code, and raw Codex.

## Date

2026-03-09 04:22 PDT

## Inputs

- web search for recent official product posts and docs
- web search for recent Reddit discussion around Figma MCP and editable design output
- prior Skillbench specification and steering notes

## Findings

- OpenAI and Figma announced an official partnership on February 26, 2026 centered on a code-to-design workflow with Codex.
  Source: https://openai.com/index/figma-partnership/
  Why this matters: this is the clearest current signal that the UI/UX design meta is moving toward direct design roundtrips instead of screenshot handoff.

- Figma's own docs now position MCP as a first-party bridge from Dev Mode into agentic coding tools including Claude.
  Source: https://www.figma.com/dev-mode/
  Why this matters: Figma is not just tolerating agent usage; it is documenting it as a real workflow.

- Figma's MCP docs distinguish between remote link-based usage and desktop selection-based usage.
  Source: https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers
  Why this matters: the "best" setup depends on whether the user wants link-driven context or live selection context.

- Paper MCP is a real contender because it exposes direct read and write operations on the currently open file and documents connections for Claude Code and Codex.
  Source: https://paper.design/docs/mcp
  Why this matters: this is a different workflow shape from Figma. It optimizes for direct canvas mutation rather than standard design-handoff gravity.

- Recent community discussion explicitly values Figma MCP because it turns agent output into editable design frames rather than forcing a manual rebuild from screenshots.
  Source: https://www.reddit.com/r/ClaudeAI/comments/1r7vvmr/new_figma_mcp_lets_you_import_claude_code_ui/
  Why this matters: public trust in this category is strongly tied to demonstrability and editability, not abstract capability claims.

## Quotes

- "turn code prompts directly into polished designs with Codex"
  Source: https://openai.com/index/figma-partnership/

- "Desktop server is selection-based"
  Source: https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers

- "read and write information from the currently open Paper file"
  Source: https://paper.design/docs/mcp

## Recommended Next Step

Deep-dive the workflow split between:

- design-to-code and code-to-design roundtrips
- direct write-back into design documents
- raw agent fallbacks when no connector is available
