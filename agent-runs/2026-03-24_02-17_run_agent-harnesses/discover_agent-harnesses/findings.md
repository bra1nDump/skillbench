# Discover Findings: Agent Harnesses

## Scope

Full discover protocol for the **agent-harnesses** problem space — frameworks for building, deploying, and managing AI agent workflows. Goal: find ALL serious contenders, surface new signals, identify gaps in SkillPack's current (empty) catalog.

## Date

2026-03-24

## Inputs

### Search Queries Used

**HN Algolia (12 queries):**
- `agent framework orchestration` (points>10)
- `AI agent SDK 2025 2026` (points>10)
- `CrewAI LangGraph AutoGen` (points>10)
- `Pydantic AI agent` (points>10)
- `Claude Agent SDK` (points>5)
- `OpenAI Agents SDK` (points>10)
- `Google ADK agent development kit` (points>5)
- `LangGraph agent` (points>10)
- `smolagents huggingface` (points>3)
- `Agno phidata agent` (points>3)
- `agent protocol A2A google` (points>5)
- `Letta MemGPT agent` (points>5)
- `Mastra agent` (points>3)
- `DSPy agent` (points>10)
- `Temporal durable agent` (points>10)
- `Vercel AI SDK agent` (points>10)
- `llama index agent` (points>10)
- `autogen microsoft agent` (points>10)
- `agent framework SDK` (recent, points>20)
- `agent harness framework 2026` (points>5)

**Web Search (via subagent, 10+ queries):**
- "best agent framework 2026", "agent framework comparison 2026"
- "LangChain vs CrewAI vs AutoGen 2026"
- "OpenAI Agents SDK vs Claude Agent SDK"
- "Google ADK agent development kit review"
- "Mastra vs LangChain", "agent framework landscape 2026"
- skills.sh and mcpservers.org checks

**GitHub API:**
- Star counts for 30+ repos
- Recent activity and trending checks

### Pages / Sources Checked
- HN Algolia API (20 queries)
- GitHub REST API (star counts for 30+ repos)
- Web search results (10+ comparison articles)
- skills.sh agent skills
- mcpservers.org

---

## Findings

### 1. Complete Contender Map (by GitHub Stars)

| Tier | Framework | Stars | Language | Owner | Category |
|------|-----------|-------|----------|-------|----------|
| **S** | **Dify** | 134,145 | Py/TS | Dify Inc. | Visual/low-code agent builder |
| **S** | **LangChain** | 130,768 | Py/JS | LangChain Inc. | Full-stack agent ecosystem |
| **A** | **Claude Code** | 81,719 | TS | Anthropic | Coding agent harness |
| **A** | **Browser Use** | 83,583 | Py | Independent | Browser automation agents |
| **A** | **MetaGPT** | 65,941 | Py | DeepWisdom | Multi-agent simulation |
| **A** | **AutoGen** | 56,087 | Py/.NET | Microsoft | Multi-agent conversations (maintenance mode) |
| **A** | **LlamaIndex** | 47,912 | Py | LlamaIndex Inc. | Data/RAG agent framework |
| **A** | **CrewAI** | 46,988 | Py | CrewAI Inc. | Role-based multi-agent |
| **A** | **LiteLLM** | 40,082 | Py | BerriAI | Universal LLM proxy/router |
| **A** | **Agno** | 38,884 | Py | Agno (ex-Phidata) | High-perf lightweight agents |
| **A** | **DeerFlow 2.0** | 39,139 | Py | ByteDance | SuperAgent harness |
| **B** | **DSPy** | 33,084 | Py | Stanford | Programmatic prompt optimization |
| **B** | **CopilotKit** | 29,710 | TS | CopilotKit | Agent-to-UI framework |
| **B** | **LangGraph** | 27,263 | Py/JS | LangChain Inc. | Graph-based agent orchestration |
| **B** | **smolagents** | 26,236 | Py | HuggingFace | Ultra-minimal agents (~1000 LOC) |
| **B** | **Langfuse** | 23,619 | TS | Langfuse | Agent observability/tracing |
| **B** | **Vercel AI SDK** | 22,937 | TS | Vercel | Frontend/fullstack agent framework |
| **B** | **Mastra** | 22,259 | TS | Mastra (ex-Gatsby) | TypeScript-first agents |
| **B** | **Letta** | 21,722 | Py | Letta (ex-MemGPT) | Stateful memory-first agents |
| **B** | **Prefect** | 21,941 | Py | Prefect | Workflow orchestration (agent-adjacent) |
| **B** | **OpenAI Agents SDK** | 20,236 | Py | OpenAI | Official OpenAI agent framework |
| **B** | **Temporal** | 19,095 | Go | Temporal | Durable execution for agents |
| **B** | **Google ADK** | 18,552 | Py/TS | Google | Official Google agent framework |
| **C** | **Pydantic AI** | 15,713 | Py | Pydantic | Type-safe Pythonic agents |
| **C** | **mcp-agent** | 8,121 | Py | LastMile AI | MCP-native agent builder |
| **C** | **Claude Agent SDK** | 5,686 | Py | Anthropic | Anthropic's programmatic SDK |
| **C** | **AgentKit** | 812 | TS | Inngest | JS alternative to OpenAI SDK |

### 2. NEW CONTENDER ALERTS

These are NOT in SkillPack's current catalog description and should be added:

#### **DeerFlow 2.0 (ByteDance)** — 39K stars
- **Why this matters:** ByteDance's open-source SuperAgent harness built on LangGraph. Orchestrates sub-agents in Docker sandboxes. Returns artifacts (charts, slides, deployed pages), not just text. Hit #1 GitHub Trending Feb 2026.
- Source: [MarkTechPost](https://www.marktechpost.com/2026/03/09/bytedance-releases-deerflow-2-0/)

#### **Dify** — 134K stars, $30M raised Mar 2026
- **Why this matters:** The visual/low-code agent builder is eating share from code-first frameworks. Non-developers can build agentic workflows. This is a serious threat to code-first harnesses for enterprise adoption.
- Source: [BusinessWire](https://www.businesswire.com/news/home/20260309511426/)

#### **Browser Use** — 83K stars
- **Why this matters:** Fastest-growing OSS project in the agent space. De facto standard for AI browser automation. Fortune 500 adoption. Creates an entirely new category of browser-native agents.

#### **Microsoft Agent Framework** — RC Feb 2026
- **Why this matters:** The official successor to both AutoGen AND Semantic Kernel. Merges two of the most popular frameworks. C#/Py. GA targeting Q1 2026. This will be the default for .NET shops.
- Source: [Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/)

#### **CopilotKit / AG-UI Protocol** — 29K stars
- **Why this matters:** Agent-to-UI protocol born from CopilotKit. AWS Bedrock adopted AG-UI in March 2026. Defines how agents stream results to frontends. Emerging standard.
- Source: [AWS announcement](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-bedrock-agentcore-runtime-ag-ui-protocol/)

#### **Agno (formerly Phidata)** — 38K stars
- **Why this matters:** Claims 5000x faster agent instantiation than LangGraph, 50x less memory. High-performance lightweight runtime. Rebranded from Phidata to Agno with aggressive growth.

#### **DSPy** — 33K stars
- **Why this matters:** Stanford's "programming not prompting" approach auto-optimizes agent pipelines. Academic darling gaining production traction. Different paradigm from workflow-based frameworks.

#### **Jido 2.0** — 323 HN points (Mar 5, 2026)
- **Why this matters:** Elixir agent framework leveraging BEAM for distributed multi-agent. First serious non-Python/TS framework to get significant attention.
- Source: [jido.run](https://jido.run/blog/jido-2-0-is-here)

### 3. Protocol Layer is Now Critical

The agent harness space now has a defined protocol stack:

| Layer | Protocol | Status | Implication |
|-------|----------|--------|-------------|
| Agent-to-Tool | **MCP** | Mature, table stakes | Every framework must support it |
| Agent-to-Agent | **A2A** | Growing, Linux Foundation | Google-led, 450 HN points at launch |
| Agent-to-UI | **AG-UI** | Emerging, AWS adopted | CopilotKit-born, SSE + WebSocket |
| Governance | **AAIF** | Founded Dec 2025 | All major labs co-founded |

**OpenAI rejected a community PR for A2A support** (Oct 2025), signaling protocol politics are real.

### 4. Meta Shifts

**GAINING:**
- **Graph-based orchestration** (LangGraph pattern) — every framework is adopting this
- **TypeScript-first** (Mastra, Vercel AI SDK) — JS ecosystem catching up fast
- **Low-code/visual** (Dify) — non-developers entering agent building
- **Performance claims** (Agno) — developer attention on instantiation speed
- **Protocol compliance** (MCP + A2A) — becoming table stakes

**LOSING:**
- **AutoGen standalone** — maintenance mode, absorbed into Microsoft Agent Framework
- **Semantic Kernel standalone** — same fate
- **LangChain core** (without LangGraph) — chain abstraction seen as overhead
- **MetaGPT** — stuck in research-grade, not making production leap
- **Framework-less "just use the API"** — too much boilerplate for production agents

**STEADY:**
- CrewAI (5.2M monthly downloads, solid on-ramp)
- LlamaIndex (strong in data/RAG niche)
- Pydantic AI (quiet growth among Python purists)

### 5. Head-to-Head Comparisons Found

#### LangGraph vs CrewAI vs AutoGen
- LangGraph: nodes/edges, explicit state, checkpointing. Production standard. Used by Klarna, Uber, LinkedIn.
- CrewAI: role-based abstraction (researcher, writer, reviewer). Easiest on-ramp.
- AutoGen: conversation-based. Now deprecated in favor of MS Agent Framework.
- Source: Multiple comparison articles, HN discussions

#### Claude Agent SDK vs OpenAI Agents SDK
- Claude: hooks + subagents model. 8 built-in tools. Native MCP. Better for developer control.
- OpenAI: handoffs + guardrails. Hosted tools. Voice via Realtime API. Better for minimal abstractions.
- Source: [Agentlas comparison](https://agentlas.pro/compare/claude-agent-sdk-vs-openai-agents-sdk/)

#### "Should I Use a Framework?" (21 HN points)
- Key finding: "For experienced developers, framework abstractions can add unnecessary complexity."
- Frameworks most valuable for less experienced teams during proof-of-concept.

#### "Sick of AI Agent Frameworks" (15 HN points)
- Sentiment: growing fatigue with low-level frameworks. Demand for higher-level platforms that generate agents.

### 6. Key HN Signals (by points)

| Points | Title | Date | Why It Matters |
|--------|-------|------|----------------|
| 807 | OpenAI adds MCP support to Agents SDK | 2025-03-26 | MCP is now universal |
| 450 | Google A2A Protocol launched | 2025-04-09 | New interop standard |
| 442 | Mastra Show HN launch | 2025-02-19 | TS-first agent framework arrives |
| 395 | HuggingFace Open Deep Research (smolagents) | 2025-02-04 | Minimalism wins attention |
| 323 | Jido 2.0 Elixir agent framework | 2026-03-05 | Non-Python frameworks emerging |
| 213 | Mastra 1.0 launch | 2026-01-20 | 300K weekly npm downloads |
| 197 | Building CLI coding agent with Pydantic AI (Martin Fowler) | 2025-08-28 | Major endorsement |
| 172 | C/UA — Docker for computer-use agents | 2025-04-23 | Sandboxing becomes standard |
| 162 | Trigger.dev for agent production | 2025-09-15 | Infrastructure layer maturing |
| 161 | Rowboat — IDE for multi-agent systems | 2025-04-22 | Visual debugging demand |
| 147 | GitAgent — open standard for repo-as-agent | 2026-03-14 | Portability standard |
| 147 | DenchClaw — Local CRM on OpenClaw | 2026-03-09 | "OpenClaw = early React" |
| 131 | Nia (YC S25) — better context for coding agents | 2025-12-08 | Context quality > framework |
| 127 | LangManus — open-source Manus with LangGraph | 2025-03-21 | LangGraph as substrate |
| 115 | Terminal Use (YC W26) — Vercel for agents | 2026-03-09 | Agent deployment platform |
| 107 | Hive — self-evolving agent topology | 2026-02-11 | Runtime-adaptive agents |

### 7. skills.sh Agent Skills

| Skill | Installs | Description |
|-------|----------|-------------|
| Agent Browser (Vercel Labs) | 124,576 | Web browsing for agents |
| Skill Creator (Anthropic) | 101,660 | Building custom agent skills |
| Browser-Use | 54,861 | Browser automation framework |
| MCP Builder (Anthropic) | 25,812 | MCP implementation |
| Subagent-Driven Development | 25,798 | Multi-agent coordination |
| Dispatching Parallel Agents | 22,247 | Concurrent agent execution |
| Self-Improving Agent | 16,717 | Continuous improvement patterns |

### 8. Market Context

- Global AI agent market: **$7.84B in 2025**, projected **$52.62B by 2030** (46.3% CAGR)
- Gartner: **40% of enterprise apps** will feature task-specific AI agents by end of 2026 (up from <5% in 2025)
- Every major AI lab now ships its own agent framework

---

## Quotes

> "OpenClaw today feels like early React: the primitive is incredibly powerful, but the patterns are still forming."
> — Kumar Abhirup (Dench, YC S24), HN Mar 9, 2026

> "For experienced developers, framework abstractions can add unnecessary complexity."
> — "Should I Use a Framework?" HN discussion, Oct 2024

> "most agent frameworks look great in isolated demos, but fall apart when you try to glue agents together into a real application."
> — HN commenter on agent orchestration, 2025

> "A spec that defines an AI agent as files in a git repo"
> — GitAgent, 147 HN points, Mar 14, 2026

> "300K weekly npm downloads and 19.4K GitHub stars"
> — Mastra 1.0 announcement, Jan 20, 2026

---

## Gaps in Current Catalog

The current SkillPack agent-harnesses category is **completely empty** — no rankings, no verdicts, no signals. The following MUST be populated:

### Tier 1 (Must Include — dominant players)
1. **LangChain / LangGraph** — 130K + 27K stars, ecosystem king
2. **CrewAI** — 47K stars, 5.2M monthly downloads
3. **OpenAI Agents SDK** — 20K stars, official OpenAI
4. **Claude Agent SDK / Claude Code** — 82K stars (Code), official Anthropic
5. **Google ADK** — 18K stars, official Google
6. **Dify** — 134K stars, low-code leader
7. **AutoGen → Microsoft Agent Framework** — 56K stars, enterprise .NET

### Tier 2 (Should Include — strong contenders)
8. **Agno** — 39K stars, performance leader
9. **Mastra** — 22K stars, TypeScript-first
10. **Pydantic AI** — 16K stars, type-safe Pythonic
11. **smolagents** — 26K stars, minimalist HuggingFace
12. **Vercel AI SDK** — 23K stars, frontend agents
13. **DeerFlow 2.0** — 39K stars, ByteDance SuperAgent
14. **Letta** — 22K stars, stateful memory agents

### Tier 3 (Should Track — emerging or niche)
15. **DSPy** — 33K stars, programmatic optimization
16. **LlamaIndex** — 48K stars (mostly RAG, but agent capabilities growing)
17. **CopilotKit / AG-UI** — 30K stars, agent-to-UI
18. **Browser Use** — 84K stars (browser-specific but adjacent)
19. **MetaGPT** — 66K stars (research-grade)
20. **Temporal** — 19K stars (durable execution layer)
21. **mcp-agent** — 8K stars (MCP-native)
22. **Jido** — Elixir framework (niche but notable)

### Protocol Layer (Cross-cutting)
- **MCP** — table stakes, all frameworks must support
- **A2A** — Google-led, Linux Foundation, adoption growing
- **AG-UI** — CopilotKit-born, AWS adopted

---

## Recommended Next Step

1. **Deep-dive the top 7-10 contenders** — need detailed feature matrices, actual usage patterns, pricing, and production stories for ranking
2. **Build the initial ranking** with at least Tier 1 entries
3. **Add protocol support matrix** as a differentiator in the ranking
4. **Track DeerFlow 2.0 and Microsoft Agent Framework** closely — both are moving fast and could shift the ranking quickly
5. **Consider splitting** — the space may be too broad for one category. Possible sub-categories:
   - Code-first frameworks (LangGraph, CrewAI, Pydantic AI)
   - Visual/low-code builders (Dify)
   - Vendor SDKs (OpenAI, Claude, Google)
   - Infrastructure layer (Temporal, Prefect)
   - Protocol standards (MCP, A2A, AG-UI)
