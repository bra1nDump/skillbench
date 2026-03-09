# Rank Findings

## Scope

Rank the best current options for document editing and UI/UX design.

## Date

2026-03-09 04:29 PDT

## Inputs

- discover run: ../2026-03-09_04-22_discover_ui-ux-design/findings.md
- deep-dive run: ../2026-03-09_04-25_deep-dive_ui-ux-design/findings.md

## Findings

## Final Ranking

1. **Figma MCP + Codex**
   Why: strongest official trust signal, clearest public code-to-design loop, best current meta for design-to-code.

2. **Figma MCP + Claude Code**
   Why: very strong design context path if Claude Code is already the main host, but the public roundtrip story is not as strong as Codex + Figma right now.

3. **Paper MCP**
   Why: best direct write-back tool and the best choice for the narrower subcase of live design-document editing.

4. **Raw Claude Code**
   Why: strongest fallback without a design connector because the public evidence around frontend usage is better and Claude's MCP surface is mature.

5. **Raw Codex**
   Why: strong coding agent, but weaker for this exact job without Figma or another design-aware connector attached.

## Notes

- If the user's actual job is "edit the design file itself," Paper MCP can outrank both Figma setups.
- If the user's actual job is "implement from design context and keep the result editable in Figma," Figma MCP stays on top.

## What Would Change This Ranking

- a strong public Paper ecosystem expansion
- clear public evidence that Claude Code now has a cleaner or more trusted Figma roundtrip than Codex
- repeated community reports that Figma MCP auth or fidelity is breaking in production usage

## Recommended Next Step

Publish this ranking as a freer editorial page with:

- short quotes from official and community sources
- links to these run artifacts
- a clearer visual distinction between the main meta and the direct-write subcase
