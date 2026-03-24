# Rank Findings — UX / UI

## Scope

Ranked recommendation for the `ux-ui` problem space: tools that connect design systems and design files to AI coding agents. Covers Figma MCP servers, alternative platform MCPs, AI-native design tools with agent integration, and design-to-code specialists.

## Date

2026-03-24T03:00Z

## Inputs

- `agent-runs/2026-03-24_01-37_run_ux-ui/discover_ux-ui/findings.md`
- `agent-runs/2026-03-24_01-37_run_ux-ui/deep-dive_ux-ui/findings.md`

---

## Problem Space Definition

**Core question:** "I'm building UI with an AI coding agent. How do I get design context — layouts, tokens, components, styles — into my agent's workflow?"

This breaks into five lanes:

| Lane | Need | Who cares |
|------|------|-----------|
| **A — Read design context** | Pull Figma layouts/tokens into agent prompts | Everyone with existing Figma files |
| **B — Bidirectional write** | Agent reads AND writes to Figma canvas | Design-system teams, accessibility workflows |
| **C — Alternative platforms** | Non-Figma design tools with MCP | Open-source teams, Penpot/Excalidraw users |
| **D — Design-to-code fidelity** | Highest-accuracy conversion, codebase-aware | Teams where pixel-perfect matters |
| **E — AI-native creation** | Generate designs from prompts/voice, export to agents | Greenfield projects, rapid prototyping |

---

## Final Ranked List

### #1 — Figma Official MCP

**Best for:** Teams with Code Connect set up, enterprise security requirements, multi-AI-platform workflows.

| Signal | Evidence |
|--------|----------|
| Code Connect | 215,968 npm/week — maps real codebase components to Figma |
| Bidirectional (NEW) | March 6, 2026: renders live UI → editable Figma layers |
| Triple AI partnership | GitHub Copilot + Claude Code + OpenAI Codex — no other design MCP has this |
| Security | 0 CVEs. Imperva recommends migrating to Official after Framelink CVE |
| Pricing | Requires Figma seat (all plans, not just Dev Mode since March update) |

**Limitations:**
- Prescriptive output (React/Tailwind) can "poison the context" — LLM mimics auto-generated structure instead of codebase patterns (CTO Guide)
- Hosted/remote server — no npm package to pin versions
- 0 HN stories >10pts about the MCP itself
- 14 tools (vs Console MCP's 84+)

**Why #1:** Institutional trust + zero security incidents + Code Connect's 216K weekly downloads + the only design MCP with partnerships across all three major AI coding platforms. The March 6 bidirectional update closed the gap with Console MCP on write access. For teams already invested in Code Connect, nothing else comes close.

---

### #2 — Framelink (GLips/Figma-Context-MCP)

**Best for:** Solo devs, teams without Code Connect, anyone wanting the lightest-weight Figma context.

| Signal | Evidence |
|--------|----------|
| Community adoption | 13,877 stars, 1,098 forks, 25 contributors |
| npm | 69,154/week (corrected from prior 38.6K — this is Framelink's package, not Official's) |
| PulseMCP | 43,600 weekly visitors — 2.5x higher than Official |
| Output efficiency | 25% smaller context than Official (CTO Guide) |
| CVE history | CVE-2025-53967 (CVSS 7.5) — command injection, patched in v0.6.3 |

**Limitations:**
- Read-only (2 tools) — no write access
- Past CVE means security-sensitive teams may hesitate
- No enterprise partnerships

**Why #2:** Highest raw adoption by every community metric. Descriptive JSON output is genuinely better for agent workflows than Official's prescriptive React/Tailwind when you don't have Code Connect. The CVE is patched but the 83-day exposure window is a trust scar. **Require >=v0.6.3.**

**Narrow subcase — Framelink > Official when:** You don't use Code Connect AND you want smaller context windows AND you're on a free Figma plan.

---

### #3 — Figma Console MCP (Southleft)

**Best for:** Design-system teams needing deep programmatic Figma access, accessibility spec generation, enterprise write workflows.

| Signal | Evidence |
|--------|----------|
| Uber uSpec | Fortune 500 production: screen reader specs in <2 min (was weeks), 7 stacks, thousands of engineers |
| Tool depth | 84+ tools including 11 variable/token management tools, batch ops (100 vars/call) |
| Plugin API access | Full read/write via Figma Plugin API — deeper than Official's REST API |
| GitHub | 1,206 stars, 8 contributors, org-backed (Southleft), MIT |
| npm | 13,452/week |

**Limitations:**
- Requires Figma plugin installation (more complex setup than Framelink)
- Southleft's self-published comparison is the primary source for tool-count claims
- 0 HN stories >5pts
- Figma Official's March 6 bidirectional update narrows Console's unique advantage

**Why #3:** The Uber Engineering blog post is the single strongest enterprise validation in the entire category — a named Fortune 500 team describing production use across 7 implementation stacks. 84+ tools give it the deepest Figma integration. Best choice when you need programmatic write access, variable management, or accessibility workflows.

**Narrow subcase — Console MCP > all others when:** You need design-token batch operations, accessibility spec generation, or Plugin API-level depth.

---

### #4 — Cursor Talk to Figma / Grab

**Best for:** Beginners wanting write access to Figma on a free plan, broad marketplace distribution.

| Signal | Evidence |
|--------|----------|
| GitHub | 6,541 stars, 701 forks, Grab (public company) backed |
| PulseMCP | #37 global, 9,300 weekly, 1.2M total visitors |
| Distribution | Listed on Cursor Marketplace (alongside AWS, Stripe), LobeHub, Glama, 4+ other directories |
| npm total | 151,094 (highest total in category) |

**Limitations:**
- 73 open issues (vs 20 for Console MCP) — scaling challenge
- Weekly npm only 1,596 (declining relative to Console MCP)
- 0 HN stories
- Outclassed on tool depth by Console MCP

**Why #4:** Broadest reach by total downloads and marketplace presence. Corporate backing from Grab provides sustainability signal. Good entry point for developers who want bidirectional Figma access without Console MCP's setup complexity. Being outpaced on tooling depth.

---

### #5 — Google Stitch (UPGRADED from provisional)

**Best for:** Greenfield projects, rapid prototyping, teams wanting free AI design generation with agent export.

| Signal | Evidence |
|--------|----------|
| Market impact | Figma stock -11% in 2 days after launch (CNBC) |
| SDK | `@google/stitch-sdk` — 1,263 GitHub stars, 4,942 npm/week (12 days old) |
| Community MCP | `davideast/stitch-mcp` — 570 stars, last push 2026-03-23 |
| Pricing disruption | FREE (350 gen/mo) vs Figma ~$13,200/yr for 20-person team |
| DESIGN.md export | Agent-friendly markdown — purpose-built for Claude Code, Cursor, Gemini CLI |
| Voice Canvas | Conversational design — speak to canvas, AI iterates live |

**Limitations:**
- SDK is v0.0.3 (3 versions in 12 days) — immature
- HN: only 18pts on the stock-drop story — surprisingly low for a Google product
- Different lane: generates designs, doesn't read existing Figma files
- Community MCP is the main integration path; official MCP server status unclear

**Why #5:** The most consequential new entrant in the space. Free pricing + DESIGN.md + Google backing make it impossible to ignore. Different lane from Figma MCPs — use Stitch to start, Figma to finish. SDK immaturity is the main concern; revisit in 30 days.

**Consensus positioning:** "Use Stitch to start, use Figma to finish" (NxCode, The AI Corner, Medium reviews).

---

### #6 — paper.design (NEW)

**Best for:** Solo developers wanting bidirectional MCP without Figma, HTML/CSS-native design-to-code.

| Signal | Evidence |
|--------|----------|
| MCP tools | 21 bidirectional tools (9 read, 6 write, 2 specialized, 4 utility) |
| HTML/CSS native | "The design IS the code" — no conversion step |
| SFAI Labs review | "Figma MCP gives agents a window... paper.design gives agents a steering wheel" |
| GPU shaders | 1,889 GitHub stars on `paper-design/shaders` — engineering quality signal |
| Wes Bos endorsement | ~500K followers: "Makes sense when your design app can pull real data from your database" |
| Pricing | Free (100 MCP calls/week), Pro $20/mo |
| Funding | $4.2M |

**Limitations:**
- Open alpha — not production-ready
- Community MCP wrapper: 2 stars
- HN peak: 14pts (shader demo, not MCP)
- No enterprise adoption evidence

**Why #6:** Strongest MCP-native design tool outside the Figma ecosystem. The HTML/CSS native canvas eliminates the design-to-code translation loss that plagues every Figma-based tool. Alpha stage is the only thing keeping it from ranking higher. Watch closely.

**Narrow subcase — paper.design > Figma MCPs when:** You're a solo dev building for the web, don't have existing Figma files, and want zero translation loss.

---

### #7 — Anima (NEW)

**Best for:** Enterprise teams needing design-system-aware code generation with cloud MCP.

| Signal | Evidence |
|--------|----------|
| Enterprise pedigree | IBM strategic investment (Feb 2026), 1.5M+ installs, customers: Amazon, Samsung, Apple, Disney |
| YC S18 | Founded 2017, established track record |
| Cloud MCP | Hosted endpoint — no local server needed |
| Design system pipeline | Figma → React components + Storybook docs via SDK |
| Bidirectional | "Copy to Figma" feature in Anima Skill platform |

**Limitations:**
- Pricing: From $31/mo
- GitHub stars (SDK): 27 — minimal community
- MCP tool count undocumented publicly
- No recent HN traction (last: 22pts in 2020)

**Why #7:** The IBM investment and Fortune 500 customer list give it enterprise credibility no other new contender has. Cloud-hosted MCP is a genuine differentiator for teams that can't run local servers. But the community engagement is near-zero and pricing is the highest in the category.

---

### #8 — Kombai

**Best for:** Teams where pixel-perfect design fidelity matters more than speed or agent composability.

| Signal | Evidence |
|--------|----------|
| Fidelity | 75-80% accuracy (vs Codex CLI 70-75%, Claude Code 65-70%) — DEV Community benchmark |
| FreeCodeCamp | "Choose Kombai if you care about precision and code quality with codebase understanding" |
| Code quality | Proper data separation, reusable design tokens, codebase-aware |

**Limitations:**
- Proprietary VS Code extension — no MCP integration
- Cannot compose with other MCP servers
- No open-source core (GitHub org repos near-zero stars)
- HN peak: 8pts
- $4.5M seed (2023) but no community ecosystem

**Why #8:** Highest measured design-to-code fidelity by an independent benchmark. But the lack of MCP integration makes it a standalone island in an agent-composable world. Relevant as a quality benchmark, not as an agent workflow tool.

---

### #9 — Vibma (NEW, provisional)

**Best for:** Developers wanting Grab's write-access capabilities with AI design-practice guardrails.

| Signal | Evidence |
|--------|----------|
| GitHub | 460 stars in ~1 month, MIT, very active (last push 2026-03-23) |
| Harness engineering | Runtime warnings steer agents toward Figma best practices — "ESLint for design" |
| Figma plugin | "Vibe Design" on Figma Community |

**Limitations:**
- 1 month old — too early for adoption metrics
- HN: ~2pts
- "Only Claude Opus 4.6 consistently achieves demonstrated results" — LLM-specific
- Fork of Grab's tool — unclear long-term differentiation

**Why #9 (provisional):** The harness engineering concept is genuinely novel — no other tool tries to enforce design best practices at the agent level. But at 1 month old with no npm data, it's provisional. Watch for adoption in April.

---

### Warned / Declining

#### figma-use — ⚠️ DECLINING (was #5)

**Do not recommend for new projects.**

| Signal | Evidence |
|--------|----------|
| HN launch | 115pts, 37 comments — strongest HN signal in write-access lane |
| Platform breakage | Figma 126+ broke CDP transport — core mechanism broken by upstream |
| npm | 89/week — effectively dead adoption |
| Maintainer | Solo contributor, no commits in 23 days, references "OpenPencil" pivot |

**Why declined:** The 115pt HN launch was promising, but 89 npm/week + a broken transport layer + a solo maintainer apparently pivoting to a different product = existential risk. If no commits by April, remove from ranked list entirely.

#### Onlook — ⚠️ NEAR-DORMANT (was #6)

**Do not recommend for new projects.**

| Signal | Evidence |
|--------|----------|
| GitHub | 24,947 stars — highest in category |
| HN | 408pts Show HN (May 2025) — exceptional launch |
| YC | W25 batch |
| Activity | 2 commits in all of 2026, 0 in March. 353 open issues. |
| MCP | None |

**Why declined:** Stars and HN signal are historical. Near-zero 2026 development activity. No MCP integration. A 25K-star repo with 2 commits in 3 months (one being a website copy update) is clearly stalling. Monitor for signs of life; if no product commits by April, archive.

---

## Lane Summary

| Lane | #1 Pick | Runner-up | Notes |
|------|---------|-----------|-------|
| **A — Read context** | Figma Official (with Code Connect) | Framelink (without Code Connect) | Framelink wins on context efficiency; Official wins on component mapping |
| **B — Bidirectional write** | Console MCP | Figma Official (since Mar 6) | Console has 84+ tools; Official has simpler setup but shallower |
| **C — Alternative platforms** | paper.design (alpha) | Penpot (44K stars), Excalidraw (3.5K stars) | paper.design is the only one with deep bidirectional MCP |
| **D — Design-to-code fidelity** | Kombai | Anima | Kombai highest accuracy but no MCP; Anima has MCP but unproven fidelity |
| **E — AI-native creation** | Google Stitch | Figma Make (native feature) | Stitch: free, MCP, DESIGN.md; Make: built into Figma but no MCP |

---

## Decision Guide

**"I have Figma files and Code Connect set up"** → Figma Official MCP (#1)

**"I have Figma files, no Code Connect, want smallest context"** → Framelink (#2), require >=v0.6.3

**"I need my agent to write TO Figma (variables, tokens, accessibility)"** → Console MCP (#3)

**"I'm starting from scratch, no existing designs"** → Google Stitch (#5) to generate, then Figma Official to refine

**"I want zero design-to-code translation loss"** → paper.design (#6) if you accept alpha risk

**"Enterprise team, need design-system-aware code gen"** → Anima (#7) or Console MCP (#3) + Code Connect

**"I need the highest possible visual fidelity"** → Kombai (#8) — but it's a standalone tool, not MCP-composable

**"Just use the platform natively"** → If your Figma files are simple and your team is small, copying styles manually may be faster than setting up any MCP server. The MCP toolchain adds value when you have a design system with 50+ components or need repeatable agent workflows.

---

## What Would Change This Ranking

1. **Framelink overtakes Official if:** Figma Official's prescriptive output problem isn't solved AND Code Connect adoption stalls. Currently Code Connect at 216K/week makes this unlikely.

2. **Console MCP rises to #2 if:** More Fortune 500 case studies emerge (Uber is currently the only one) OR if Official's bidirectional proves shallow in practice.

3. **Google Stitch rises to #3 if:** SDK reaches v1.0, official MCP server ships (not just community wrapper), and DESIGN.md becomes a cross-tool standard.

4. **paper.design rises to #4 if:** Exits alpha, gets independent benchmark coverage, and proves HTML/CSS-native output matches Figma MCP quality at scale.

5. **Figma Official drops if:** The "context poisoning" problem (prescriptive output) gets documented by more independent sources. Currently only one CTO Guide flags it.

6. **Entire Figma ecosystem faces platform risk if:** Google Stitch's free model + MCP triggers a broader migration. The -11% stock drop is the early signal. Monitor Figma's Q2 earnings.

7. **A new lane emerges if:** Voice-first design (Stitch Voice Canvas) proves more productive than visual-first. This would restructure the entire problem space.

---

## Corrections to Prior Catalog

1. **npm attribution error:** `figma-developer-mcp` (69,154/week) belongs to **Framelink**, not Figma Official. Figma Official is a hosted remote server with no npm package.

2. **Google Stitch:** Remove "provisional (2 days old)" flag. Now a mature platform with MCP SDK, 1,263 GitHub stars, and market-moving impact.

3. **figma-use:** Flag as ⚠️ declining. CDP transport broken, 89 npm/week, solo maintainer pivoting.

4. **Onlook:** Flag as ⚠️ near-dormant. 2 commits in 2026, 0 in March, 353 open issues.

5. **Figma Official MCP:** Add bidirectional capability (March 6, 2026). Now spans Lane A + Lane B.

---

## Quotes

> "Prescriptive output poisons the context; the LLM sees auto-generated code structure and mimics it instead of using your codebase's patterns." — CTO Guide (alexbobes.com)

> "The MCP gave us something we couldn't have built alone: reliable, local access to Figma's component data, variables, and styles from an AI agent." — Uber Engineering Blog

> "Figma MCP gives AI agents a window... paper.design MCP gives agents a steering wheel." — SFAI Labs

> "Choose Kombai if you care about precision and code quality with codebase understanding." — FreeCodeCamp

> "Google's vast resources, free pricing model, and deep integration with its Workspace ecosystem could allow it to rapidly capture market share." — CNBC

> "Use Stitch to start. Use Figma to finish." — Consensus across NxCode, The AI Corner, Medium

---

## Recommended Next Step

1. Update catalog entries with corrected npm attributions, new bidirectional status for Official, and ⚠️ warnings on figma-use and Onlook.
2. Add paper.design, Anima, Vibma (provisional), and Google Stitch (full rank) to catalog.
3. Re-rank in 30 days to assess: Stitch SDK maturity, paper.design alpha→beta, Vibma adoption, figma-use/Onlook survival.
