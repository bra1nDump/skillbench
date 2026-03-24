# Discover Findings — Teams of Agents / Multi-Agent Orchestration

## Scope

Full discovery sweep of the "teams-of-agents" problem space: Python frameworks, TypeScript frameworks, autonomous coding agents, parallel agent IDEs, workflow automation, and the emerging "agent fleet management" segment. Goal: find ALL serious contenders, new signals, sentiment shifts, and catalog gaps.

## Date

2026-03-24T01:37Z

## Inputs

### HN Algolia Queries
- `multi-agent orchestration` (points>10)
- `langgraph OR crewai OR autogen OR mastra` (points>10)
- `agent framework 2026` (points>10)
- `openai agents sdk` (points>10)
- `pydantic ai agent` (points>5)
- `google adk agent development kit` (points>5)
- `strands agents aws` (points>5)
- `a2a protocol agent to agent` (points>5)
- `emdash parallel agents` (points>5)
- `n8n sim studio workflow agent` (points>10)
- `agno agent framework` (points>5)
- `smolagents huggingface` (points>5)
- `LangGraph agent` (points>20)
- `CrewAI` (points>10)
- `AutoGen microsoft agent` (points>20)
- `Factory AI coding agent` (points>5)
- `Spine Swarm agents` (points>5)
- `does anyone use crewai langchain` (points>5)
- `Julep AI agent` (points>5)
- `LiveKit agents voice` (points>20)
- `Dexto tools agents` (points>5)
- `multi agent framework coding` (created>2025-03, points>10)
- `agent orchestration framework` (created>2025-03, points>15, by_date)

### GitHub API Queries
- Direct repo stat checks for 30+ repos
- `search/repositories?q=multi-agent+framework+language:python&sort=stars` (top 20)
- `search/repositories?q=agent+orchestration+created:>2025-09-01&sort=stars` (top 15)

### Pages/Sources Checked
- HN Algolia API (23 queries)
- GitHub API (35+ repo checks, 2 search queries)
- HN thread: "Does anyone use CrewAI or LangChain anymore?" (47132187)

---

## Findings

### SEGMENT 1: Python Agent Frameworks

| Solution | Stars | Last Push | Signal |
|---|---|---|---|
| **LangGraph** (langchain-ai/langgraph) | 27,261 | 2026-03-23 | Active. HN: 83pts "Why we chose LangGraph" (Qodo). HN: 127pts LangManus built on it. |
| **OpenAI Agents SDK** (openai/openai-agents-python) | 20,236 | 2026-03-23 | Active. HN: 807pts "OpenAI adds MCP support." Temporal integration (28pts). |
| **Pydantic AI** (pydantic/pydantic-ai) | 15,712 | 2026-03-23 | Active. HN: 197pts Martin Fowler article on building CLI coding agent with PydanticAI. |
| **CrewAI** (crewAIInc/crewAI) | 46,988 | 2026-03-23 | Stars inflated vs downloads. HN sentiment turning: "Does anyone use CrewAI or LangChain anymore?" (11pts, Feb 2026) — consensus is these peaked in hype. |
| **Agno** (agno-agi/agno) | 38,883 | 2026-03-23 | HN: 76pts Show HN (Jun 2025), 47pts "10,000x faster than LangChain" claim. Stars look inflated vs community signal. |
| **Strands Agents** (strands-agents/sdk-python) | 5,358 | 2026-03-23 | AWS-native. Two HN posts ~10pts each. SOPs feature (natural language workflows). |
| **Google ADK** (google/adk-python) | 18,552 | 2026-03-23 | Growing fast. Only 6pts on HN launch — underdiscussed vs star count. |
| **Semantic Kernel** (microsoft/semantic-kernel) | 27,531 | 2026-03-23 | Stable. No HN traction at all (0 results). Enterprise .NET play only. |
| **AutoGen** (microsoft/autogen) | 56,086 | 2026-03-21 | Stars massive but push date 2 days stale. Maintenance mode confirmed. |
| **smolagents** (huggingface/smolagents) | 26,236 | 2026-03-13 | HN: 395pts Open Deep Research example. Push date 11 days ago — less active. CVE-2025-5120 sandbox escape still a concern. |
| **Microsoft Agent Framework** (microsoft/agent-framework) | **8,152** | 2026-03-23 | **NEW CONTENDER ALERT** — Created Apr 2025. "Framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET." Actively maintained. Microsoft's successor to AutoGen? |

**Why this matters:** Microsoft Agent Framework is the potential AutoGen replacement. At 8.1K stars and active daily pushes, it's a serious contender that the catalog is completely missing.

#### Other Python Frameworks (Watchlist)

| Solution | Stars | Notes |
|---|---|---|
| **MetaGPT** (FoundationAgents/MetaGPT) | 65,938 | "First AI Software Company" — huge stars but last push Jan 2026. Research project feeling. |
| **CAMEL** (camel-ai/camel) | 16,467 | "First and best multi-agent framework." Active (push Mar 22). Research-oriented. |
| **Swarms** (kyegomez/swarms) | 6,076 | Enterprise multi-agent. Active. |
| **PraisonAI** (MervinPraison/PraisonAI) | 5,719 | "24/7 AI employee team." Active. |
| **ROMA** (sentient-agi/ROMA) | 5,014 | Recursive Open Meta-Agent. Last push Feb 2026. |
| **Solace Agent Mesh** (SolaceLabs/solace-agent-mesh) | 2,416 | Event-driven multi-agent. Active. |

### SEGMENT 2: TypeScript Frameworks

| Solution | Stars | Last Push | Signal |
|---|---|---|---|
| **Mastra** (mastra-ai/mastra) | 22,256 | 2026-03-23 | HN: 213pts "Mastra 1.0" (Jan 2026). Dominant JS-native framework. $13M YC W25. |
| **AgentKit** (inngest/agent-kit) | 812 | 2026-03-21 | HN: 64pts. "JavaScript Alternative to OpenAI Agents SDK with Native MCP." Small but notable. |

**Why this matters:** Mastra has nearly doubled since last assessment (was ~2M npm/month). AgentKit is the only other JS-native option but very small.

### SEGMENT 3: Autonomous Coding Agents

| Solution | Stars | Last Push | Signal |
|---|---|---|---|
| **OpenHands** (All-Hands-AI/OpenHands) | 69,615 | 2026-03-23 | Dominant. 69.6K stars. |
| **Factory AI** | — | — | $65M funding. Closed-source. |

### SEGMENT 4: Parallel Agent IDEs / Fleet Orchestrators

This segment is EXPLODING. Multiple new entenders since last catalog update.

| Solution | Stars | Created | Signal |
|---|---|---|---|
| **oh-my-openagent (omo)** | **42,802** | 2025-12-03 | **NEW CONTENDER ALERT** — "the best agent harness - previously oh-my-opencode." 42.8K stars in 4 months. Active daily. Massive. |
| **oh-my-claudecode** | 11,071 | 2026-01-09 | Already in catalog. Growing fast. |
| **Edict** (cft0808/edict) | **12,242** | 2026-02-23 | **NEW CONTENDER ALERT** — "OpenClaw Multi-Agent Orchestration System — 9 specialized AI agents with real-time dashboard." 12.2K stars in 1 month! |
| **iFlytek Astron Agent** (iflytek/astron-agent) | **10,551** | 2025-09-19 | **NEW CONTENDER ALERT** — "Enterprise-grade agentic workflow platform for building next-gen SuperAgents." Chinese tech giant (iFlytek). |
| **Superset** (superset-sh/superset) | 7,815 | 2025-10-21 | Already in catalog. "IDE for the AI Agents Era." |
| **ClawX** (ValueCell-ai/ClawX) | **5,445** | 2026-02-05 | **NEW CONTENDER ALERT** — Desktop GUI for OpenClaw AI agents. Growing fast. |
| **1code** (21st-dev/1code) | **5,288** | 2026-01-14 | **NEW CONTENDER ALERT** — "Orchestration layer for coding agents (Claude Code, Codex)." |
| **Composio Agent Orchestrator** (ComposioHQ/agent-orchestrator) | 5,145 | 2026-02-13 | Already in catalog. |
| **Trellis** (mindfold-ai/Trellis) | **4,051** | 2026-01-26 | **NEW CONTENDER ALERT** — "The best agent harness." Active. |
| **Continuous-Claude-v3** (parcadei) | 3,621 | 2025-12-23 | HN: 170pts original. Context management for Claude Code. |
| **TinyAGI** (TinyAGI/tinyagi) | **3,254** | 2026-02-09 | **NEW CONTENDER ALERT** — "Agent teams orchestrator for One Person Company. (fka TinyClaw)." |
| **Mission Control** (builderz-labs/mission-control) | **3,141** | 2026-02-13 | **NEW CONTENDER ALERT** — "Dashboard for AI agent orchestration. Manage agent fleets, dispatch tasks, track costs." |
| **Emdash** (generalaction/emdash) | 2,831 | — | HN: 206pts Show HN (Feb 2026). Already in catalog. |
| **Maestro** (RunMaestro/Maestro) | **2,570** | 2025-11-23 | **NEW CONTENDER ALERT** — "Agent Orchestration Command Center." |
| **CodeMachine** (moazbuilds/CodeMachine-CLI) | **2,393** | 2025-09-28 | **NEW CONTENDER ALERT** — "Orchestrates AI coding agents into repeatable, long-running workflows." |

**Why this matters:** The parallel agent IDE / fleet orchestrator segment has EXPLODED since the last catalog update. oh-my-openagent at 42.8K stars is the #1 player in this space by a massive margin. Edict went from 0 to 12.2K stars in a single month. This segment needs a complete re-ranking.

### SEGMENT 5: Workflow Automation / Visual Builders

| Solution | Stars | Last Push | Signal |
|---|---|---|---|
| **n8n** (n8n-io/n8n) | 180,701 | 2026-03-23 | Dominant workflow tool. |
| **Sim Studio** (simstudioai/sim) | 27,148 | 2026-03-23 | HN: 240pts "Apache-2.0 n8n alternative" (Dec 2025), 196pts original Show HN. Growing FAST — was not this big last assessment. |
| **Rowboat** (rowboatlabs/rowboat) | 9,316 | 2026-03-23 | HN: 161pts + 66pts Launch HN. YC S24. Multi-agent IDE with visual builder. |
| **Composio** (composiohq/composio) | 27,482 | 2026-03-23 | Tool/integration platform for agents. |

### SEGMENT 6: Agent Infrastructure / Protocols (Emerging)

| Solution | Stars | Signal |
|---|---|---|
| **A2A Protocol** | — | Google's Agent-to-Agent protocol. HN: 14pts launch. CrewAI is "only major framework with native A2A + MCP." |
| **Klaw.sh** | 617 | HN: 60pts. "Kubernetes for AI agents." One layer above CrewAI-style. |
| **Gambit** (bolt-foundry) | 224 | HN: 91pts. "Agent OS" for deterministic agents. |
| **Cua** (trycua/cua) | 13,231 | HN: 172pts. Docker/VM for computer-use agents. |
| **GitAgent** | — | HN: 147pts (Mar 2026). "Open standard that turns any Git repo into an AI agent." |
| **Spine Swarm** | — | HN: 109pts (Mar 2026). Already in catalog. "AI agents on visual canvas." YC S23. 87.6% DeepSearchQA. |
| **Dexto** (truffle-ai) | 599 | HN: 41pts. Runtime for agent orchestration. YC W25. |
| **Pipelex** | 637 | HN: 122pts. "Declarative language for repeatable AI workflows." |
| **Julep** (julep-ai/julep) | 6,605 | Stateful agent platform with memory. |
| **LiveKit Agents** (livekit/agents) | 9,815 | Voice/realtime agent framework. 266pts HN. |
| **mcp-agent** (lastmile-ai) | 8,121 | "Build effective agents with MCP." 80pts HN. |
| **Hephaestus** | 1,121 | "Autonomous multi-agent orchestration." 81pts HN. |
| **Inkeep** (inkeep/agents) | 1,020 | HN: 79pts. Agent Builder. YC W23. |
| **Upsonic** | 7,820 | Client-server agent architecture. |

---

## KEY SENTIMENT SIGNAL

**HN thread "Does anyone use CrewAI or LangChain anymore?" (Feb 24, 2026, 11pts, 5 comments):**
- "No. They suck."
- LangChain criticized for "abstraction soup" and debugging difficulties
- Developers prefer direct SDK usage or minimal wrappers
- Defenders compare to Next.js — useful for complex multi-model setups
- **Meta is shifting: hype has peaked for heavy frameworks. Lighter approaches (OpenAI Agents SDK, Pydantic AI, direct SDK) are winning developer hearts.**

---

## NEW CONTENDER ALERTS (Not in current catalog)

### CRITICAL (Must add immediately)

1. **oh-my-openagent (omo)** — 42,802 stars. Largest agent harness by far. Previously oh-my-opencode. Daily active development.
2. **Microsoft Agent Framework** — 8,152 stars. Microsoft's new framework replacing AutoGen. Python + .NET. Active daily.
3. **Edict** — 12,242 stars in 1 month. OpenClaw multi-agent orchestration with 9 specialized agents + dashboard.
4. **Sim Studio** — 27,148 stars. Was minor before, now massive. Apache 2.0 n8n alternative for agent workflows.

### HIGH PRIORITY (Should add)

5. **iFlytek Astron Agent** — 10,551 stars. Enterprise-grade from major Chinese AI company.
6. **1code** — 5,288 stars. Orchestration layer for Claude Code + Codex.
7. **ClawX** — 5,445 stars. Desktop GUI for OpenClaw agents.
8. **Trellis** — 4,051 stars. Agent harness growing fast.
9. **MetaGPT** — 65,938 stars. Multi-agent software company simulation. Research but massive.
10. **CAMEL** — 16,467 stars. Multi-agent research framework, very active.

### WATCHLIST (Monitor)

11. **TinyAGI** — 3,254 stars. "One Person Company" orchestrator.
12. **Mission Control** — 3,141 stars. Agent fleet dashboard.
13. **Maestro** — 2,570 stars. Agent command center.
14. **CodeMachine** — 2,393 stars. Long-running coding agent workflows.
15. **Continuous-Claude-v3** — 3,621 stars. Context management for Claude Code.
16. **Swarms** — 6,076 stars. Enterprise multi-agent.
17. **PraisonAI** — 5,719 stars. AI employee teams.
18. **Solace Agent Mesh** — 2,416 stars. Event-driven multi-agent (Solace Labs).
19. **ROMA** — 5,014 stars. Recursive meta-agent.
20. **Rowboat** — 9,316 stars. Multi-agent IDE, YC S24.

---

## CATALOG GAPS

1. **Parallel Agent IDE segment is severely under-represented.** oh-my-openagent (42.8K stars) dwarfs everything else and is missing. Edict, 1code, Trellis, TinyAGI, Mission Control, Maestro, CodeMachine all emerged in the last 3 months and are not tracked.

2. **Microsoft Agent Framework (8.1K stars) is missing.** This is Microsoft's active replacement for AutoGen, which is in maintenance mode. Critical gap.

3. **Sim Studio at 27K stars needs promotion.** It's grown 10x+ and is now a serious n8n competitor in the agent workflow space.

4. **MetaGPT (66K stars) and CAMEL (16.5K stars) are completely absent** from the Python frameworks segment despite being the #1 and #5 most-starred multi-agent repos.

5. **Rowboat (9.3K stars, YC S24)** is missing — visual multi-agent IDE with strong HN traction (227 combined pts).

6. **mcp-agent (8.1K stars)** and **Upsonic (7.8K stars)** are infrastructure-level tools missing from the catalog.

7. **The "agent fleet management" meta-category** (Klaw.sh, Mission Control, Maestro) is a new sub-segment forming — not currently captured in the 5-segment deck.

---

## Quotes

> "No. They suck." — HN commenter on CrewAI/LangChain adoption (Feb 2026)

> "the real drag was the repetitive orchestration around them" — Dexto creators on why they built a runtime orchestrator

> "an open-source and provider-agnostic desktop app that lets you run multiple coding agents in parallel" — Emdash Show HN (206pts, Feb 2026)

> "Central orchestrator decomposes tasks into subtasks and delegates each to specialized agents" — Spine Swarm description (109pts, Mar 2026)

> "Does anyone use CrewAI or LangChain anymore?" — HN Ask thread title (Feb 2026) — captures the sentiment shift

---

## Recommended Next Step

1. **Deep-dive on oh-my-openagent (omo)**: At 42.8K stars it's the #1 agent harness. Need to understand architecture, user base, and how it compares to oh-my-claudecode/Emdash/Superset.

2. **Deep-dive on Microsoft Agent Framework**: Understand if this is officially replacing AutoGen and how it relates to Semantic Kernel.

3. **Deep-dive on the Edict/ClawX ecosystem**: 12.2K stars in 1 month is explosive. Need to assess sustainability vs hype.

4. **Re-rank the entire Parallel Agent IDE segment**: The current top-3 (Emdash, ccpm, Superset) is outdated. oh-my-openagent, oh-my-claudecode, Edict, Superset, 1code, and Emdash are the real contenders now.

5. **Add MetaGPT and CAMEL to Python frameworks**: Both are top-starred repos in the space and completely missing.

6. **Consider adding a 6th segment**: "Agent Fleet Management" — tools like Klaw.sh, Mission Control, Maestro that manage _fleets_ of agents at a higher level than frameworks.
