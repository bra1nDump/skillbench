# Deep-Dive Findings — Teams of Agents / Multi-Agent Orchestration

## Scope

Evidence-backed deep dive across all five segments of the "teams-of-agents" problem space: Python frameworks, TypeScript frameworks, autonomous coding agents, parallel agent IDEs / fleet orchestrators, and workflow automation. Every claim backed by quantitative traction data and public artifacts.

## Date

2026-03-24T02:15Z

## Inputs

### Research Queries
- GitHub API: 35+ repo stat checks, 2 search queries
- HN Algolia: 25+ queries across all segments
- PyPI Stats: 11 framework download checks
- npm Stats: 5 package download checks
- WebSearch: 30+ targeted queries for comparisons, reviews, adoption
- WebFetch: 15+ pages for evidence extraction

### Prior Runs Referenced
- `agent-runs/2026-03-24_01-37_run_teams-of-agents/discover_teams-of-agents/findings.md`

---

## SEGMENT 1: Python Agent Frameworks

### Quantitative Traction Summary

| # | Framework | Stars | PyPI Monthly DL | DL/Star | Last Push | HN Best | Status |
|---|-----------|-------|-----------------|---------|-----------|---------|--------|
| 1 | **LangGraph** | 27,261 | **40,099,678** | 1,471 | 2026-03-23 | 127 pts | Active, GA v1.0 |
| 2 | **OpenAI Agents SDK** | 20,236 | **18,232,532** | 901 | 2026-03-23 | 807 pts (MCP) | Active, v0.13 |
| 3 | **Pydantic AI** | 15,712 | **15,169,545** | 965 | 2026-03-23 | 197 pts | Active, V1 stable |
| 4 | **CrewAI** | 46,988 | **5,833,943** | 124 | 2026-03-23 | 26 pts | Active, v1.10.1 |
| 5 | **Strands Agents** | 5,358 | **5,349,355** | 998 | 2026-03-23 | ~10 pts | Active, GA v1.0 |
| 6 | **Google ADK** | 18,552 | **4,539,000** | 245 | 2026-03-23 | 86 pts (Go) | Active, v1.0 GA |
| 7 | **Semantic Kernel** | 27,531 | **2,719,200** | 99 | 2026-03-23 | 98 pts | **Maintenance mode** |
| 8 | **Agno** | 38,884 | **1,504,831** | **39** | 2026-03-23 | 76 pts | Active — inflated stars |
| 9 | **AutoGen** | 56,086 | **1,218,006** | 22 | 2026-03-21 | 163 pts | **Maintenance mode** |
| 10 | **MS Agent Framework** | 8,153 | **647,823** | 79 | 2026-03-23 | — | **NEW** — RC status |
| 11 | **smolagents** | 26,236 | **445,978** | 17 | 2026-03-13 | 395 pts (research) | Active — research focus |

### Framework-by-Framework Evidence

---

#### 1. LangGraph — #1 by Usage (40M DL/month)

**[STRONG]** PyPI dominance is decisive
Source: https://pypistats.org/packages/langgraph
Date: 2026-03-24 | Engagement: 40.1M monthly downloads
Who: PyPI official stats
Key quote: 40M monthly — 7× the #2 framework (OpenAI Agents SDK at 18M)
Why it matters: Stars can be gamed; downloads reflect real CI/CD pipelines pulling the package.

**[STRONG]** Fortune 500 verified adoption
Source: https://particula.tech/blog/langgraph-vs-crewai-vs-openai-agents-sdk-2026
Date: 2026-02 | Engagement: Independent comparison article
Who: Particula Tech (consulting firm)
Key quote: "For roughly 60% of our agent projects, that's LangGraph — because clients typically have complex, regulated workflows."
Why it matters: Independent consulting firm recommending based on production experience.

**[STRONG]** Enterprise customers confirmed
Source: Multiple — Klarna blog, LangChain case studies
Date: 2025-2026
Who: Klarna, Uber, LinkedIn, BlackRock, JPMorgan, Cisco, Replit
Key quote: Klarna: "customer support bot handles two-thirds of all customer inquiries" saving $60M annually
Why it matters: Named Fortune 500 customers with specific ROI claims.

**[STRONG]** HN: Qodo chose LangGraph for coding agent
Source: https://news.ycombinator.com/item?id=43520312
Date: 2025-03-25 | Engagement: 83 pts, 20 comments
Who: Qodo (coding agent company)
Key quote: "We chose LangGraph to build our coding agent"
Why it matters: A coding agent company chose LangGraph over alternatives — strong domain signal.

**[MODERATE]** NVIDIA partnership
Source: LangChain announcements
Date: 2025
Who: NVIDIA + LangChain
Key quote: LangSmith + NVIDIA NIM integration for enterprise observability
Why it matters: Major infrastructure partner validates production readiness.

**Weaknesses:** Steepest learning curve (1-2 weeks). Tightly coupled to LangChain ecosystem. Community sentiment on HN occasionally negative toward LangChain overall complexity.

---

#### 2. OpenAI Agents SDK — #2 by Usage (18M DL/month)

**[STRONG]** Rapid adoption since March 2025 launch
Source: https://pypistats.org/packages/openai-agents
Date: 2026-03-24 | Engagement: 18.2M monthly downloads
Who: PyPI official stats
Key quote: 18M/month in ~12 months — fastest ramp of any framework besides LangGraph
Why it matters: Went from 0 to #2 in one year.

**[STRONG]** MCP support drove massive HN engagement
Source: https://news.ycombinator.com/item?id=43428356
Date: 2025 | Engagement: 807 pts
Who: HN community
Key quote: "OpenAI adds MCP support" — highest HN engagement of any framework story
Why it matters: Protocol interoperability was a community demand; OpenAI delivered.

**[STRONG]** Minimalist API praised
Source: https://softmaxdata.com/blog/definitive-guide-to-agentic-frameworks-in-2026-langgraph-crewai-ag2-openai-and-more/
Date: 2026 | Engagement: Independent comparison
Who: SoftmaxData
Key quote: "A multi-agent triage system can be built in about 30 lines of Python."
Why it matters: Low barrier to entry — 2-3 day learning curve vs LangGraph's 1-2 weeks.

**[MODERATE]** Now supports 100+ LLMs (not just OpenAI)
Source: Release notes, community reports
Date: 2026
Who: OpenAI
Key quote: Expanded beyond vendor lock-in criticism
Why it matters: Original dealbreaker ("no Claude, no Gemini, no open-source models") is being addressed.

**Weaknesses:** Lacks LangGraph-style checkpointing and state persistence. "If your workflow needs to pause for human approval and resume hours later, you're building that infrastructure yourself." No native observability platform (vs LangSmith).

---

#### 3. Pydantic AI — #3 by Usage (15M DL/month), Rising Fast

**[STRONG]** V1 stable — production-ready designation
Source: https://pydantic.dev/articles/pydantic-ai-v1
Date: 2026-03 | Engagement: Official announcement
Who: Pydantic team (Samuel Colvin)
Key quote: "Production/Stable" designation after nine months of iteration
Why it matters: V1 milestone signals maturity — rare for frameworks this young.

**[STRONG]** Martin Fowler article drove HN traction
Source: https://news.ycombinator.com/item?id=44755200
Date: 2025-08-28 | Engagement: 197 pts, 40 comments
Who: Martin Fowler (legendary software engineer)
Key quote: "Building your own CLI coding agent with Pydantic-AI"
Why it matters: Endorsement from Martin Fowler carries enormous credibility in the engineering community.

**[STRONG]** Type-safety narrative resonates
Source: https://softmaxdata.com/blog/definitive-guide-to-agentic-frameworks-in-2026-langgraph-crewai-ag2-openai-and-more/
Date: 2026 | Engagement: Independent comparison
Who: SoftmaxData
Key quote: "The closest thing to 'if it compiles, it works' in Python agent development"
Why it matters: Unique positioning — no other framework emphasizes type safety this strongly.

**[MODERATE]** Emerging "PydanticAI + LangGraph" production pattern
Source: ZenML blog, community reports
Date: 2026
Who: ZenML, community
Key quote: Teams using Pydantic AI for agent logic + LangGraph for orchestration
Why it matters: Not purely competitive — can be complementary.

**[MODERATE]** AWS integration published
Source: AWS blog
Date: 2026
Who: AWS
Key quote: "Building Production-Ready AI Agents with Pydantic AI and Amazon Bedrock AgentCore"
Why it matters: Cloud vendor support validates enterprise readiness.

**Weaknesses:** Smaller ecosystem than LangGraph. Less enterprise case study material. 15M downloads growing fast but still behind top 2.

---

#### 4. CrewAI — Stars Inflated, Usage Declining Relative to Peers

**[STRONG]** Stars-to-downloads ratio is suspicious
Source: PyPI Stats + GitHub
Date: 2026-03-24
Who: Official data
Key quote: 46,988 stars but only 5.8M monthly downloads (124 DL/star). Compare LangGraph: 27,261 stars, 40M downloads (1,471 DL/star). That's a **12× difference** in download efficiency.
Why it matters: Stars do not equal usage. CrewAI's star count dramatically overstates real adoption.

**[STRONG]** Manager-worker architecture documented as broken
Source: https://towardsdatascience.com/why-crewais-manager-worker-architecture-fails-and-how-to-fix-it/
Date: 2026 | Engagement: Towards Data Science article
Who: Independent technical analysis
Key quote: "CrewAI's hierarchical manager-worker process does not function as documented — the manager does not effectively coordinate agents; instead, CrewAI executes tasks sequentially, leading to incorrect reasoning, unnecessary tool calls, and extremely high latency"
Why it matters: Core architecture flaw documented by independent source.

**[STRONG]** Community sentiment turning
Source: https://news.ycombinator.com/item?id=47132187
Date: 2026-02-24 | Engagement: 11 pts
Who: HN community
Key quote: "Does anyone use CrewAI or LangChain anymore?" — consensus is these peaked in hype
Why it matters: Narrative shifting away from CrewAI in developer community.

**[MODERATE]** Enterprise claims exist but hard to verify
Source: CrewAI website (selfReported: true)
Date: 2026
Who: CrewAI (self-reported)
Key quote: "450 million monthly workflows, 100,000+ certified developers, DocuSign, IBM, PwC"
Why it matters: Impressive if true but self-reported. 450M workflows vs 5.8M pip installs is hard to reconcile unless counting hosted platform API calls.

**[MODERATE]** Only major framework with native A2A + MCP
Source: Release notes, v1.10.1
Date: 2026
Who: CrewAI
Key quote: First framework to ship both A2A and MCP support natively
Why it matters: Protocol interop is a genuine competitive advantage.

**Strengths preserved:** Fastest to prototype (3-5 day learning curve). Good for simple multi-agent demos. Native A2A + MCP.

---

#### 5. Strands Agents — AWS Dark Horse (5.3M DL/month on 5K stars)

**[STRONG]** Extraordinary download-to-star ratio
Source: PyPI Stats + GitHub
Date: 2026-03-24
Who: Official data
Key quote: 5,358 stars but 5.3M monthly downloads (998 DL/star) — second-highest efficiency after LangGraph
Why it matters: AWS internal usage (Q Developer, Glue, VPC Reachability Analyzer) drives real adoption without hype.

**[MODERATE]** InfoQ ROI case study
Source: InfoQ article (referenced in catalog)
Date: 2025-2026
Who: InfoQ
Key quote: "30min→45sec, $5M savings" for one customer use case
Why it matters: Specific ROI numbers from independent tech publication.

**[MODERATE]** GA v1.0 with "14 million+ total downloads"
Source: https://aws.amazon.com/blogs/opensource/introducing-strands-agents-1-0-production-ready-multi-agent-orchestration-made-simple/
Date: 2026
Who: AWS Open Source blog (selfReported: true, but AWS is also the user)
Key quote: GA v1.0, Strands Labs launched for experimental projects
Why it matters: Production-ready milestone from major cloud vendor.

**Weaknesses:** AWS-native — less relevant for GCP/Azure shops. Low community visibility (no HN traction). SOPs feature is unique but niche.

---

#### 6. Google ADK — GCP Play (4.5M DL/month)

**[MODERATE]** Named enterprise customers
Source: Google Cloud announcements
Date: 2025-2026
Who: Google (selfReported: true for customer names)
Key quote: Renault Group, Box, Revionics using ADK
Why it matters: Named customers but evidence is self-reported.

**[MODERATE]** v1.0 GA reached
Source: Google developer blog
Date: 2026
Who: Google
Key quote: "production-ready" designation, Java ADK also launched
Why it matters: GA milestone from major vendor.

**Weaknesses:** Only 86pts on HN (for Go SDK, not Python). Underdiscussed vs star count (18.5K). GCP-centric value proposition limits TAM.

---

#### 7. Semantic Kernel — Entering Maintenance Mode

**[STRONG]** Microsoft shifting investment to Agent Framework
Source: https://devblogs.microsoft.com/foundry/microsoft-agent-framework-reaches-release-candidate/
Date: 2026-02 | Engagement: Official Microsoft DevBlog
Who: Microsoft
Key quote: "Will not receive new feature investments but will continue to receive bug fixes, security patches and stability updates"
Why it matters: Official end-of-life for new features. Enterprise .NET users should plan migration.

**Still relevant:** 2.7M monthly downloads, enterprise install base (KPMG, BMW, Fujitsu). But trajectory is declining.

---

#### 8. Agno — Stars Inflated, Low Real Adoption

**[STRONG]** Most suspicious stars-to-downloads ratio
Source: PyPI Stats + GitHub
Date: 2026-03-24
Who: Official data
Key quote: 38,884 stars but only 1.5M monthly downloads (**39 DL/star**). Pydantic AI: 15,712 stars, 15.2M downloads (965 DL/star) — **25× more efficient**.
Why it matters: The data strongly suggests artificial star inflation.

**[MODERATE]** Performance claims questioned
Source: https://news.ycombinator.com/item?id=44155074
Date: 2025-06-02 | Engagement: 76 pts, 19 comments
Who: HN community (JimDabell)
Key quote: "Aren't all these agents pushing tokens through LLMs?" — framework instantiation speed is irrelevant vs LLM inference latency
Why it matters: "10,000x faster than LangChain" claim was marketing, not meaningful for real workloads.

**Formerly Phidata.** Rebranded to Agno. Low real adoption despite high stars.

---

#### 9. AutoGen — Maintenance Mode, Superseded

**[STRONG]** Officially superseded by Microsoft Agent Framework
Source: https://venturebeat.com/ai/microsoft-retires-autogen-and-debuts-agent-framework-to-unify-and-govern
Date: 2026 | Engagement: VentureBeat article
Who: VentureBeat (independent)
Key quote: "Microsoft retires AutoGen and debuts Agent Framework to unify and govern enterprise AI agents"
Why it matters: 56K stars but officially sunset. Migration guide published.

---

#### 10. Microsoft Agent Framework — NEW CONTENDER

**[STRONG]** Official successor to AutoGen + Semantic Kernel
Source: https://devblogs.microsoft.com/foundry/microsoft-agent-framework-reaches-release-candidate/
Date: 2026-02-19 | Engagement: Official Microsoft DevBlog
Who: Microsoft
Key quote: "Combines AutoGen's simple abstractions for single- and multi-agent patterns with Semantic Kernel's enterprise-grade features"
Why it matters: Microsoft consolidating two major frameworks into one. Supports A2A, AG-UI, and MCP.

**[MODERATE]** RC status — not yet GA
Source: PyPI
Date: 2026-03-24
Who: Official package
Key quote: `agent-framework-core` v1.0.0rc5, 647K monthly downloads
Why it matters: Growing but still pre-GA. Early adopters migrating from AutoGen/SK.

**Recommendation:** Add to catalog as watchlist. Will likely absorb AutoGen + Semantic Kernel user bases over 2026.

---

#### 11. smolagents — Research/Education Niche

**[STRONG]** Open Deep Research drove visibility
Source: https://news.ycombinator.com/item?id=42949746
Date: 2025-02-04 | Engagement: 395 pts, 77 comments
Who: HN community / Hugging Face
Key quote: "Open Deep Research" example built on smolagents — highest HN post in the entire framework space
Why it matters: Strong brand association with open research, but usage is niche (446K DL/month).

**[MODERATE]** CVE-2025-5120 sandbox escape
Source: CVE database
Date: 2025
Who: Security researchers
Key quote: Sandbox escape vulnerability in smolagents
Why it matters: Security concern for production use. Not resolved as of latest check.

**Weaknesses:** Last push 2026-03-13 (less active). 26K stars but only 446K downloads (17 DL/star — worst ratio). Research-oriented, not production-focused.

---

### Pairwise Comparisons — Python Frameworks

#### LangGraph vs OpenAI Agents SDK (Top 2)
| Dimension | LangGraph | OpenAI Agents SDK | Winner |
|-----------|-----------|-------------------|--------|
| Downloads | 40M/month | 18M/month | LangGraph (2.2×) |
| Learning curve | 1-2 weeks | 2-3 days | OpenAI SDK |
| State management | Checkpointing, persistence | Manual | LangGraph |
| Observability | LangSmith (best-in-class) | None built-in | LangGraph |
| Model flexibility | Multi-provider | 100+ LLMs (expanded) | Tie |
| Enterprise adoption | Klarna, Uber, LinkedIn | OpenAI ecosystem | LangGraph |
| Verdict | Complex workflows, regulated industries | Simple agents, fast prototyping | **LangGraph for production, OpenAI SDK for speed** |

#### LangGraph vs Pydantic AI (#1 vs Rising #3)
| Dimension | LangGraph | Pydantic AI | Winner |
|-----------|-----------|-------------|--------|
| Downloads | 40M/month | 15M/month | LangGraph (2.6×) |
| Type safety | Weak | Best-in-class | Pydantic AI |
| Complexity | Graph-based, steep | Pythonic, intuitive | Pydantic AI |
| Maturity | GA v1.0 (Oct 2025) | V1 stable (Mar 2026) | Tie |
| Observability | LangSmith | Logfire | LangGraph |
| Verdict | — | — | **Complementary** — emerging "PydanticAI + LangGraph" pattern |

#### CrewAI vs LangGraph (Stars vs Usage)
| Dimension | CrewAI | LangGraph | Winner |
|-----------|--------|-----------|--------|
| Stars | 46,988 | 27,261 | CrewAI (but inflated) |
| Downloads | 5.8M/month | 40M/month | **LangGraph (6.9×)** |
| Architecture | Broken manager-worker (documented) | Graph-based (proven) | LangGraph |
| Protocol support | A2A + MCP (first) | Ecosystem-focused | CrewAI |
| Community sentiment | Declining ("peaked in hype") | Stable/growing | LangGraph |
| Verdict | — | — | **LangGraph decisively. CrewAI's star count is misleading.** |

---

## SEGMENT 2: TypeScript Frameworks

### Mastra — Dominant, No Real Competitor

| Metric | Value |
|--------|-------|
| Stars | 22,256 |
| npm weekly (@mastra/core) | 245,971 |
| Funding | $13M seed (YC W25) |
| Last push | 2026-03-23 |
| HN best | 442 pts (Show HN) |

**[STRONG]** Named production customers at scale
Source: https://mastra.ai/blog/replitagent3, https://mastra.ai/blog/workos-teaching-mastra
Date: 2026 | Engagement: Official case studies
Who: Replit, PayPal, Adobe, Docker, SoftBank, Marsh McLennan (selfReported: true, but named customers)
Key quote: Replit Agent 3 spins up thousands of Mastra agent sandboxes weekly. Marsh McLennan deployed to 75,000 employees.
Why it matters: Scale of deployment validates framework for enterprise TS use.

**[STRONG]** 442-pt HN launch — highest for any TS agent framework
Source: https://news.ycombinator.com/item?id=43103073
Date: 2025-02-19 | Engagement: 442 pts, 154 comments
Who: HN community
Key quote: Show HN by Gatsby developers — immediate community validation
Why it matters: Exceptional community reception.

**[STRONG]** 1.0 shipped with production hardening
Source: https://mastra.ai/blog/announcing-mastra-1
Date: 2026-01-20 | Engagement: 213 pts HN
Who: Mastra team
Key quote: 94 fixes from production usage during beta. Server adapters for Express, Hono, Fastify, Koa.
Why it matters: Not just a framework — a production-tested platform.

### AgentKit (inngest) — Niche Alternative

| Metric | Value |
|--------|-------|
| Stars | 812 |
| npm weekly | 4,874 |
| HN best | 64 pts (comment) |
| Last push | 2026-03-21 |

**[MODERATE]** Unique durable execution angle
Source: https://agentkit.inngest.com/overview
Date: 2026
Who: Inngest team
Key quote: Built on Inngest's durable execution infrastructure — agents survive crashes
Why it matters: Differentiated by infrastructure heritage, but tiny user base.

**Verdict:** Mastra is the only serious TS framework. AgentKit is interesting but 50× smaller.

---

## SEGMENT 3: Autonomous Coding Agents

### OpenHands — Dominant Open-Source Coding Agent

| Metric | Value |
|--------|-------|
| Stars | 69,615 |
| Forks | 8,725 |
| Funding | $18.8M Series A (Madrona) |
| Last push | 2026-03-23 |
| SWE-bench | 60.6% Verified (SOTA w/ inference scaling) |

**[STRONG]** Highest star count in entire teams-of-agents space
Source: GitHub
Date: 2026-03-24
Who: Official stats
Key quote: 69,615 stars, 8,725 forks — massive community
Why it matters: Dominant open-source coding agent by every metric.

**[STRONG]** SWE-bench performance with inference-time scaling
Source: https://openhands.dev/blog/sota-on-swe-bench-verified-with-inference-time-scaling-and-critic-model
Date: 2025-2026
Who: OpenHands team
Key quote: 60.6% on SWE-bench Verified with Claude 3.5 Sonnet. Claude Opus 4.5 now pushes leaderboard to 80.9%.
Why it matters: SOTA among open-source agents. Introduced OpenHands Index (5-area benchmark).

**[STRONG]** Enterprise traction with ROI claims
Source: https://www.businesswire.com/news/home/20251118768131/en/
Date: 2025-11-18 | Engagement: BusinessWire
Who: OpenHands team (selfReported: true)
Key quote: "87% of bug tickets solved same day", "50% reduction in code-maintenance backlogs"
Why it matters: Specific metrics, though self-reported.

**[MODERATE]** AMD partnership for local deployment
Source: Series A announcement
Date: 2025
Who: OpenHands + AMD
Key quote: Local AI workstation deployment partnership
Why it matters: Hardware vendor partnership for on-prem enterprise use.

**Weakness:** Surprisingly low HN traction (11 pts on Show HN) despite 69K stars — growth driven by GitHub/social rather than HN.

### Factory AI — Well-Funded Closed-Source Competitor

| Metric | Value |
|--------|-------|
| Funding | ~$70M total ($50M Series B at $300M valuation) |
| Investors | Sequoia, NEA, NVIDIA, J.P. Morgan |
| Customers | MongoDB, EY, Bayer, Zapier, Clari |
| Product | "Droids" — #1 on Terminal Bench |

**[STRONG]** Major funding validates market
Source: https://factory.ai/news/series-b
Date: 2025-09-25 | Engagement: BusinessWire
Who: Factory AI
Key quote: $50M Series B at $300M valuation from Sequoia, NEA, NVIDIA
Why it matters: Tier-1 VCs betting on autonomous coding agents as a category.

**[STRONG]** StrongDM "Software Factory" case study (Simon Willison)
Source: https://simonwillison.net/2026/Feb/7/software-factory/
Date: 2026-02-07
Who: Simon Willison (independent, highly credible)
Key quote: StrongDM built pipeline: "Code must not be written by humans" and "Code must not be reviewed by humans"
Why it matters: Independent coverage of the "software factory" paradigm. Recommends $1K-$20K/month per engineer on API tokens.

**Weakness:** Closed-source. No HN front-page stories. Token costs can be expensive.

---

## SEGMENT 4: Parallel Agent IDEs / Fleet Orchestrators

This segment has **EXPLODED** since the last catalog update. 16 active contenders, most created in the last 4 months. IDE incumbents (Cursor 2.0, Windsurf Wave 13, Claude Code Agent Teams) are now shipping native parallel agent features, which threatens standalone tools.

### Quantitative Traction Summary

| # | Tool | Stars | Forks | Created | HN Best | YC? | Key Differentiator |
|---|------|-------|-------|---------|---------|-----|-------------------|
| 1 | **oh-my-openagent** | 42,803 | 3,180 | 2025-12-03 | (indirect) | No | 11 specialized agents, Ultra Work Mode |
| 2 | **Edict** | 12,242 | 1,193 | 2026-02-23 | — | No | Tang Dynasty governance model, 9 agents |
| 3 | **oh-my-claudecode** | 11,071 | 761 | 2026-01-09 | — | No | Claude Code multi-agent orchestration |
| 4 | **iFlytek Astron** | 10,551 | 1,111 | 2025-09-19 | — | No | Enterprise Chinese AI, RPA integration |
| 5 | **Superset** | 7,815 | 567 | 2025-10-21 | 96 pts | (implied) | 10+ parallel agents, git worktrees |
| 6 | **ccpm** | 7,753 | 782 | 2025-08-18 | **175 pts** | No | GitHub Issues as source of truth |
| 7 | **ClawX** | 5,445 | 715 | 2026-02-05 | — | No | Desktop GUI for OpenClaw |
| 8 | **1code** | 5,288 | 567 | 2026-01-14 | 75 pts | **W26** | Cursor-like GUI for CLI agents |
| 9 | **Composio Orch.** | 5,147 | 626 | 2026-02-13 | — | No | Planner + Executor dual-layer |
| 10 | **Trellis** | 4,051 | 209 | 2026-01-26 | — | No | Multi-IDE harness (9 agents supported) |
| 11 | **Cont. Claude v3** | 3,621 | 280 | 2025-12-23 | **170 pts** | No | Context management, YAML handoffs |
| 12 | **TinyAGI** | 3,254 | 468 | 2026-02-09 | — | No | "One Person Company" orchestrator |
| 13 | **Mission Control** | 3,141 | 548 | 2026-02-13 | 45 pts | No | Self-hosted dashboard, 6 adapters |
| 14 | **Emdash** | 2,831 | 252 | 2025-08-28 | **206 pts** | **W26** | Best-of-N, provider-agnostic, 60K DL |
| 15 | **Maestro** | 2,570 | 261 | 2025-11-23 | — | No | Mobile remote control, Group Chat |
| 16 | **CodeMachine** | 2,393 | 230 | 2025-09-28 | — | No | Long-running workflows (hours/days) |

### Key Evidence by Tool

#### oh-my-openagent (omo) — 42.8K stars, #1 by Stars

**[MODERATE]** Massive star growth but controversial
Source: GitHub + HN threads
Date: 2026-03-24
Who: Community
Key quote: Created Dec 2025, 42.8K stars in 4 months. Anthropic blocked OAuth tokens on 2026-01-09 citing oh-my-opencode as justification.
Why it matters: Huge adoption of the "agent harness" pattern, but the OAuth controversy and lack of direct HN front-page presence suggest stars may be partially organic from the OpenCode ecosystem rather than independent validation.

**[MODERATE]** 11 specialized agents with Ultra Work Mode
Source: https://www.glukhov.org/ai-devtools/opencode/oh-my-opencode-agents/
Date: 2026
Who: Independent blog
Key quote: Sisyphus Orchestrator delegates to 11 specialist agents. Ultra Work Mode (ulw) triggers auto-planning, deep research, parallel agents, and self-correction loops.
Why it matters: Most feature-complete harness in the segment.

#### Emdash — Lowest Stars but Strongest HN Signal

**[STRONG]** Highest HN engagement in the segment
Source: https://news.ycombinator.com/item?id=47140322
Date: 2026-02-24 | Engagement: 206 pts, 71 comments
Who: HN community
Key quote: "Show HN: Emdash — Open-source agentic development environment"
Why it matters: 206 pts despite only 2,831 stars — strongest independent community validation. YC W26.

**[MODERATE]** Best-of-N feature is unique
Source: https://docs.emdash.sh/
Date: 2026
Who: Emdash team
Key quote: Runs multiple agents on same task, picks best result. Provider-agnostic, 18+ CLI agents, 60K downloads.
Why it matters: Unique competitive feature. Provider-agnostic approach future-proofs against vendor lock-in.

#### ccpm — Battle-Tested, Highest HN for a PM Tool

**[STRONG]** 175 pts on HN — strong community validation
Source: https://news.ycombinator.com/item?id=44960594
Date: 2025-08-20 | Engagement: 175 pts, 112 comments
Who: HN community
Key quote: "Show HN: Project management system for Claude Code"
Why it matters: 112 comments shows deep engagement. Spec-driven development (PRD → Epic → Task → Issue → Code → Commit).

**[MODERATE]** Cross-agent compatibility
Source: GitHub README
Date: 2026
Who: ccpm team
Key quote: Works with Factory, Claude Code, Amp, OpenCode, Codex, Cursor. Follows agentskills.io standard.
Why it matters: Not locked to one agent — works across the ecosystem.

#### Superset — YC-Backed IDE

**[MODERATE]** Product Hunt validation
Source: Product Hunt
Date: 2026-03-01 | Engagement: 512 upvotes
Who: Product Hunt community
Key quote: "IDE for the AI Agents Era — Run an army of Claude Code, Codex, etc."
Why it matters: 512 PH upvotes plus 96 pts on HN. YC-backed.

#### Major IDE Incumbents Entering (Feb-Mar 2026)
- **Cursor 2.0:** up to 8 parallel agents via git worktrees
- **Windsurf Wave 13:** 5 parallel Cascade agents via git worktrees
- **Claude Code:** Agent Teams with parallel sub-agents
- **Google Antigravity:** Free agent-first IDE with Claude Opus 4.6 + Gemini 3 Pro

**Why this matters:** IDE incumbents shipping native parallel agent features threatens the entire standalone parallel agent IDE segment. Tools that survive will need to offer something IDEs can't: cross-IDE orchestration, advanced workflows, or fleet management dashboards.

### Pairwise Comparisons — Parallel Agent IDEs

#### Emdash vs Superset (YC W26 competitors)
| Dimension | Emdash | Superset | Winner |
|-----------|--------|----------|--------|
| Stars | 2,831 | 7,815 | Superset |
| HN traction | 206 pts | 96 pts | **Emdash** |
| Downloads | 60K claimed | Not disclosed | Emdash |
| Unique feature | Best-of-N | 10+ parallel agents | Tie |
| Provider support | 18+ CLI agents | Claude Code, Codex | **Emdash** |
| Verdict | — | — | **Emdash has stronger community signal; Superset has more stars** |

#### ccpm vs Composio Agent Orchestrator
| Dimension | ccpm | Composio AO | Winner |
|-----------|------|-------------|--------|
| Stars | 7,753 | 5,147 | ccpm |
| HN traction | 175 pts | — | **ccpm** |
| Approach | GitHub Issues + worktrees | Planner + Executor | Different paradigms |
| Agent compat | 6+ agents | Framework-native | ccpm |
| Verdict | — | — | **ccpm more proven; Composio more architectural** |

---

## SEGMENT 5: Workflow Automation

### n8n — Incumbent Giant

| Metric | Value |
|--------|-------|
| Stars | 180,701 |
| Docker pulls | 196M+ |
| npm (30d) | 267,784 |
| Funding | $240M total, $2.5B valuation |
| Enterprise customers | 3,000+ (Vodafone, Delivery Hero, Microsoft) |
| Active users | ~200K+ |

**[STRONG]** $2.5B valuation with 6× user growth
Source: Multiple (Accel, NVentures announcement)
Date: 2025-10-09 | Engagement: 235 pts on HN
Who: Independent press
Key quote: $180M Series C at $2.5B valuation. 6× users, 10× revenue in 2025.
Why it matters: Validated at scale by tier-1 investors.

**[STRONG]** Native MCP support
Source: n8n documentation
Date: 2026
Who: n8n team
Key quote: MCP Client Tool node + MCP Server Trigger node built-in
Why it matters: First major workflow platform with native MCP.

**[STRONG]** 728-pt HN post — highest in all segments
Source: https://news.ycombinator.com/item?id=21191119
Date: 2019-10-08 | Engagement: 728 pts
Who: HN community
Key quote: "Workflow automation alternative to Zapier"
Why it matters: Long-standing community credibility.

### Sim Studio — Fast-Growing Challenger

| Metric | Value |
|--------|-------|
| Stars | 27,148 |
| Funding | $7M Series A (Standard Capital, YC X25) |
| Users | 60K+ developers, 100+ companies |
| Workflows processed | 10M+ |

**[STRONG]** Apache-2.0 license vs n8n's fair-code
Source: GitHub
Date: 2026-03-24
Who: Official license
Key quote: Apache-2.0 — fully open-source, no restrictions
Why it matters: n8n's "fair-code" license restricts commercial use. Sim Studio is genuinely open.

**[STRONG]** Positioned directly against n8n
Source: https://news.ycombinator.com/item?id=46109015 (implied from 240-pt HN post titled "Apache-2.0 n8n alternative")
Date: 2025-12-11 | Engagement: 240 pts
Who: HN community
Key quote: "Show HN: Sim — Apache-2.0 n8n alternative"
Why it matters: Direct challenger positioning with strong community reception.

**[MODERATE]** "Figma-like canvas" for agent workflows
Source: https://news.ycombinator.com/item?id=44104241
Date: 2025-05-21 | Engagement: 55 pts
Who: HN community (YC launch)
Key quote: "Launch HN: Sim Studio (YC X25) — Figma-like canvas for agent workflows"
Why it matters: Visual, agent-specific workflow builder — differentiated from n8n's general automation.

### Pairwise: n8n vs Sim Studio
| Dimension | n8n | Sim Studio | Winner |
|-----------|-----|------------|--------|
| Stars | 180,701 | 27,148 | n8n |
| Funding | $240M / $2.5B | $7M Series A | n8n |
| License | Fair-code (restrictive) | Apache-2.0 | **Sim Studio** |
| Enterprise customers | 3,000+ | 100+ | n8n |
| Agent-specific design | Retrofitted AI nodes | Agent-native canvas | **Sim Studio** |
| MCP support | Native | Client-side | n8n |
| Growth trajectory | Mature, steady | 0→27K stars in 14mo | **Sim Studio** |
| Verdict | — | — | **n8n for today. Sim Studio for agent-native future.** |

---

## CROSS-CUTTING: Protocol Adoption (A2A + MCP)

### A2A (Agent-to-Agent Protocol)

| Metric | Value |
|--------|-------|
| Stars | 22,749 |
| Launched | April 2025 by Google |
| Version | v0.3 |
| Governance | Linux Foundation (LF AI & Data) |
| Founding members | AWS, Cisco, Google, Microsoft, Salesforce, SAP, ServiceNow |
| Supporting orgs | 150+ |
| HN | 450 pts |

**Framework A2A support:**
| Framework | A2A Support |
|-----------|------------|
| CrewAI | Native (v1.10) |
| MS Agent Framework | Native (RC) |
| n8n | Community packages |
| Sim Studio | Partial |
| LangGraph | No native support |
| OpenAI Agents SDK | No native support |

### MCP (Model Context Protocol)

**Framework MCP support (all major frameworks):**
| Framework | MCP Support |
|-----------|------------|
| n8n | Native (built-in nodes) |
| OpenAI Agents SDK | Native |
| CrewAI | Native (v1.10.1) |
| MS Agent Framework | Native |
| Google ADK | Native |
| Mastra | Native |
| Claude Code | Native |
| Sim Studio | Client-side |
| LangGraph | Ecosystem |

MCP is now table stakes — nearly universal adoption. A2A is still early but has institutional backing.

---

## NEW CONTENDER ALERTS

### Must-Add to Catalog

1. **Microsoft Agent Framework** (microsoft/agent-framework) — 8.1K stars, RC status, official AutoGen + Semantic Kernel successor. Supports A2A + AG-UI + MCP. **Recommendation: Add immediately, position as #7 Python framework (rising).**

2. **oh-my-openagent (omo)** — 42.8K stars, dominant agent harness. **Recommendation: Add to parallel agent IDEs segment.**

3. **Edict** — 12.2K stars in 29 days, unique governance model. **Recommendation: Add to parallel agent IDEs as Chinese-market contender.**

### Watchlist (monitor but don't add yet)

4. **iFlytek Astron Agent** — 10.5K stars, enterprise Chinese AI. Monitor for English-market relevance.
5. **ClawX** — 5.4K stars, OpenClaw desktop GUI. Derivative of Edict ecosystem.
6. **1code** — 5.3K stars, YC W26, Cursor-like GUI for CLI agents.
7. **Trellis** — 4K stars, multi-IDE harness supporting 9 agent tools.
8. **TinyAGI** — 3.3K stars, "One Person Company" orchestrator.
9. **Mission Control** — 3.1K stars, self-hosted dashboard with 6 framework adapters.
10. **Maestro** — 2.6K stars, mobile remote control for agent fleets.
11. **CodeMachine** — 2.4K stars, long-running workflow orchestrator.
12. **AgentKit** (inngest) — 812 stars, JS alternative to OpenAI Agents SDK.
13. **Sim Studio** — 27K stars, agent-native workflow builder. **May warrant full catalog entry given traction.**

---

## RANKING CHANGES RECOMMENDED

### Python Frameworks (by evidence)
| Current Rank | Recommended | Framework | Rationale |
|-------------|-------------|-----------|-----------|
| #1 | **#1** | LangGraph | 40M DL/month, Fortune 500, unchallenged |
| #2 | **#2** | OpenAI Agents SDK | 18M DL/month, fastest ramp |
| #3 | **#3** | Pydantic AI | 15M DL/month, V1 stable, Martin Fowler endorsement |
| #4 | **#4** | CrewAI | 5.8M DL/month, but architecture flaws documented. A2A+MCP saves it. |
| #5 | **#5** | Strands Agents | 5.3M DL/month, AWS dark horse |
| #6 | **#6** | Google ADK | 4.5M DL/month, GCP-only |
| #7 | **#7 (NEW)** | MS Agent Framework | 648K DL/month but RC, AutoGen/SK successor |
| #8 | **#8 ↓** | Agno | 1.5M DL/month, stars inflated (39 DL/star) |
| #9 | **#9 ↓** | AutoGen | Maintenance mode, superseded |
| #10 | **#10 ↓** | smolagents | 446K DL/month, research niche, CVE concern |
| — | **DROP** | Semantic Kernel | Maintenance mode → merge into MS Agent Framework entry |

### Parallel Agent IDEs (new sub-ranking)
| Rank | Tool | Rationale |
|------|------|-----------|
| #1 | Emdash | YC W26, 206-pt HN, Best-of-N, provider-agnostic |
| #2 | ccpm | 175-pt HN, battle-tested, cross-agent PM |
| #3 | Superset | YC-backed, 7.8K stars, 96-pt HN |
| #4 | oh-my-openagent | 42.8K stars but controversial, no direct HN validation |
| #5 | 1code | YC W26, 75-pt HN, Cursor-like GUI |

**Note:** Stars-based ranking would put omo at #1, but HN/community signal and YC backing favor Emdash/ccpm/Superset for trust. omo's star count may be inflated by the broader OpenCode ecosystem rather than independent adoption.

---

## GAPS IN EVIDENCE

1. **oh-my-openagent npm downloads vs stars** — 42.8K stars but only 3,424 npm downloads/month. Extreme ratio needs investigation. Could be installed via git clone rather than npm.
2. **Edict star velocity** — 12.2K stars in 29 days is extraordinary. No HN presence. Chinese-language origin. Possible star inflation — needs monitoring.
3. **iFlytek Astron Agent** — enterprise claims but no independent English-language reviews found.
4. **Factory AI benchmarks** — "#1 on Terminal Bench" claimed but Terminal Bench methodology not independently validated.
5. **CrewAI "450M monthly workflows"** — how is this measured? 5.8M pip installs × ~77 workflows each? Or hosted platform metric? Needs clarification.
6. **Agno star inflation** — 38.9K stars, 1.5M downloads (39 DL/star). No smoking-gun evidence of fake stars, but the ratio is the most suspicious of any active framework. Needs formal star audit.

## UNRESOLVED QUESTIONS

1. Will IDE incumbents (Cursor 2.0, Windsurf, Claude Code Agent Teams, Antigravity) kill the standalone parallel agent IDE segment?
2. Will Microsoft Agent Framework absorb AutoGen + Semantic Kernel users, or will they migrate to LangGraph/OpenAI SDK instead?
3. Is CrewAI's real usage declining? The "peaked in hype" HN narrative + architecture criticisms suggest yes.
4. How will A2A protocol adoption affect framework rankings? Only CrewAI and MS Agent Framework support it natively — will others follow?
5. Is the Chinese-market parallel agent IDE segment (Edict, ClawX, iFlytek, omo) a separate market or converging with the Western market?

## Recommended Next Step

**Rank agent** should:
1. Apply the updated framework rankings to the catalog
2. Add Microsoft Agent Framework as a new entry
3. Add oh-my-openagent, Edict to parallel agent IDEs
4. Consider adding Sim Studio to workflow automation
5. Update the category deck to reflect the IDE incumbent threat to standalone parallel agent tools
6. Flag Agno and CrewAI star counts as potentially misleading — use downloads as primary ranking signal
