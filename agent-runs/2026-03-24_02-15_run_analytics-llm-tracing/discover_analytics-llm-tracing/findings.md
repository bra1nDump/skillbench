# Discover Findings — Analytics & LLM Tracing

## Scope

Find ALL serious contenders in the Analytics & LLM Tracing problem space. Surface newly relevant solutions, platforms, native capabilities, public comparisons, and gaps in the current SkillPack catalog (which is currently empty for this category).

## Date

2026-03-24

## Inputs

### Web Search Queries
- "LLM observability tracing tools best 2026"
- "LangSmith vs Braintrust vs Helicone comparison 2026"
- "LLM tracing open source alternative 2026"
- "AI agent observability monitoring tools comparison"
- "PostHog LLM analytics tracing 2026"
- "Langfuse GitHub stars growth 2026"
- "Arize Phoenix LLM observability open source 2026"
- "Laminar AI open source tracing LLM"
- "AgentOps AI agent observability monitoring 2026"
- "LangWatch LLM monitoring 2026"
- "Galileo AI observability hallucination detection 2026"
- "OpenLLMetry Traceloop open source OpenTelemetry LLM"
- "Datadog LLM observability features 2026"
- "SigNoz LLM monitoring tracing 2026"
- "Fiddler AI observability enterprise LLM agents 2026"
- "OpenLIT open source LLM observability OpenTelemetry"
- "switched from LangSmith to LLM observability 2026"
- "Weights Biases Weave LLM tracing observability 2026"

### Hacker News Queries (Algolia API, points > 10)
- "LLM observability tracing"
- "Langfuse"
- "Show HN LLM observability"

### Pages Checked
- confident-ai.com, langchain.com, firecrawl.dev, lakefs.io, signoz.io, truefoundry.com, posthog.com, langwatch.ai, braintrust.dev, helicone.ai, arize.com, laminar.sh, agentops.ai, fiddler.ai, openlit.io, traceloop.com, datadoghq.com, wandb.ai, galileo.ai
- GitHub repos for all contenders
- Hacker News Algolia search results

---

## Findings

### TIER 1 — Major Contenders (must-rank)

#### 1. Langfuse ⭐ MARKET LEADER (Open Source)
- **What**: Open-source LLM engineering platform — tracing, prompt management, evals, datasets
- **Stars**: 23,000+ GitHub stars (MIT license, fully self-hostable)
- **Key Signal**: **Acquired by ClickHouse in January 2026** — 220 HN points on the acquisition post. This is the single biggest event in this space recently.
- **Adoption**: 2,000+ paying customers, 26M+ SDK installs/month, 6M+ Docker pulls, used by 19 of Fortune 50, 63 of Fortune 500
- **SDK**: Python SDK v4 rewritten and released March 2026
- **Why this matters**: The ClickHouse acquisition gives Langfuse enterprise credibility and a massive analytics backend. It's the clear open-source reference in this space with the highest community adoption.
- **HN**: 215 pts (Launch HN), 143 pts (Show HN), 137 pts (doubling down on open source)
- https://github.com/langfuse/langfuse

#### 2. LangSmith (Incumbent, Closed Source)
- **What**: Official LangChain observability + evals platform. Framework-specific auto-instrumentation.
- **Pricing**: Free 5K traces/month, $39/user/month paid
- **Key Signal**: Teams actively switching away due to vendor lock-in and pricing. A5Labs publicly switched to Confident AI citing "too tied to LangChain ecosystem."
- **Strength**: Zero-config tracing for LangChain/LangGraph users
- **Weakness**: Closed source, no self-hosting (Enterprise only), per-trace pricing scales poorly
- **Why this matters**: Still the default for LangChain users, but losing mindshare to framework-agnostic alternatives.

#### 3. Braintrust
- **What**: LLM evaluation + observability platform with deployment blocking and proxy mode
- **Pricing**: Generous free tier (1M trace spans, 10K eval runs)
- **Key Signal**: Publishing aggressive comparison content ("7 best LLM tracing tools", "Langfuse alternatives", "Arize alternatives") — positioning as the evaluation-first platform
- **Strength**: Advanced evals, automated deployment blocking, proxy mode flexibility
- **Why this matters**: Best free tier in the space. Strong eval story differentiates from pure observability plays.
- https://www.braintrust.dev

#### 4. Helicone
- **What**: AI gateway/proxy with observability, caching, routing across 100+ models
- **Pricing**: Free 10K requests/month, $79/month paid
- **Key Signal**: 29 HN pts on Show HN. Unique proxy-based approach = zero SDK changes.
- **Strength**: One-line integration, model-layer observability, cost optimization via caching
- **Why this matters**: Only serious gateway-first player. Teams that want observability without SDK changes choose Helicone.
- https://github.com/Helicone/helicone

#### 5. PostHog LLM Analytics
- **What**: LLM observability built into PostHog's all-in-one developer analytics platform
- **Stars**: 32,100+ GitHub stars (PostHog overall)
- **Key Signal**: **Launched Clusters in March 2026** — automatically groups AI traces by behavior. New feature, actively shipping.
- **Strength**: No per-seat pricing (90%+ of companies use it free), combines LLM analytics with product analytics, session replay, feature flags
- **Why this matters**: Teams already using PostHog get LLM observability for free. The clustering feature is genuinely novel.
- https://posthog.com/llm-analytics

#### 6. Arize Phoenix (Open Source)
- **What**: OpenTelemetry-native LLM observability + evaluation. Built-in hallucination detection.
- **Stars**: 7,800+ GitHub stars (Elastic License 2.0)
- **License**: Source-available (ELv2) — self-hostable, no feature gates
- **Strength**: OTel-native, runs anywhere (local, Jupyter, containers, cloud), no per-trace charges
- **Framework support**: OpenAI Agents SDK, Claude Agent SDK, LangGraph, Vercel AI SDK, Mastra, CrewAI, LlamaIndex, DSPy
- **HN**: 23 pts (Show HN)
- **Why this matters**: The OTel-native approach prevents vendor lock-in. Strong framework coverage including newest SDKs.
- https://github.com/Arize-ai/phoenix

### TIER 2 — Strong Contenders

#### 7. Laminar (Open Source, Rust)
- **What**: Open-source observability for AI agents. Built in Rust for speed. YC S24.
- **Stars**: High community interest — 203 HN pts on Show HN ("Open-Source DataDog + PostHog for LLM Apps, Built in Rust")
- **Adopters**: Browser Use, OpenHands, Rye.com, Alai
- **Key Signal**: Also built Index, an open-source browser agent (98 HN pts), showing they're building a full agent ecosystem
- **Strength**: OTel-native, SQL query editor for traces, natural language event definitions, Rust performance
- **Why this matters**: One of the fastest-growing pure-play open-source options. Rust backend is a genuine differentiator for performance.
- https://github.com/lmnr-ai/lmnr

#### 8. Datadog LLM Observability (Enterprise)
- **What**: LLM monitoring within Datadog's full observability stack
- **Key Signal**: **Feb 2026 — integrated Google Agent Development Kit (ADK)**. Now natively supports OTel GenAI Semantic Conventions.
- **Strength**: Unified infra + LLM monitoring, existing Datadog customers get it seamlessly
- **Why this matters**: For teams already on Datadog, this is the path of least resistance. Enterprise play.
- https://www.datadoghq.com/product/ai/llm-observability/

#### 9. W&B Weave (Weights & Biases)
- **What**: LLM observability + evaluation from the ML experiment tracking leaders
- **Key Signal**: Integrated with Google ADK and Amazon Bedrock AgentCore in 2026
- **Strength**: `@weave.op` decorator auto-traces everything, cost/latency aggregated across trace tree. Python + TypeScript support.
- **Why this matters**: Teams already in W&B ecosystem get observability that connects to their experiment tracking and model registry.
- https://github.com/wandb/weave

#### 10. SigNoz (Open Source)
- **What**: OpenTelemetry-native full-stack observability (APM + LLM monitoring)
- **Stars**: Open source alternative to Datadog
- **Strength**: Broadest framework support (Agno, Bedrock, Anthropic, AutoGen, CrewAI, Claude Agent SDK, Mastra, and 20+ more). Usage-based pricing.
- **Why this matters**: If you want one platform for both traditional APM and LLM observability, SigNoz is the open-source answer to Datadog.
- https://github.com/SigNoz/signoz

#### 11. Galileo
- **What**: Evaluation intelligence platform with runtime guardrails and hallucination detection
- **Key Signal**: Released Luna-2 SLMs in early 2026 — 152ms latency, 88% hallucination detection accuracy, 97% cost reduction vs GPT-4-based approaches. Released "Galileo Signals" for automated failure mode analysis.
- **Strength**: Fastest guardrails (<100ms), enterprise-grade with compliance focus
- **Backed by**: Citi Ventures investment
- **Why this matters**: Unique "evaluation intelligence" positioning. Luna-2 models are a proprietary advantage.

#### 12. AgentOps
- **What**: Agent-specific observability — tracks entire agent lifecycle, not just individual requests
- **Strength**: Session replays, point-in-time rewind, tool usage tracking, self-correction loop monitoring. Integrates with 400+ LLMs and frameworks.
- **Key Signal**: Purpose-built for multi-agent systems, which is where the market is heading
- **Why this matters**: As agents become multi-step and multi-agent, generic LLM tracing isn't enough. AgentOps is the most agent-specific platform.
- https://github.com/AgentOps-AI/agentops

### TIER 3 — Niche / Emerging

#### 13. LangWatch
- **What**: End-to-end LLM monitoring, evaluation, and experimentation platform
- **Key Signal**: Published "4 best tools for monitoring LLM & agent applications in 2026" — actively positioning in the space
- **Strength**: Agent simulations (run scenarios against full stack), real-time eval pipelines, token-level cost attribution
- **Why this matters**: Agent simulation capability is unique — lets you stress-test agents before shipping.
- https://github.com/langwatch/langwatch

#### 14. OpenLLMetry / Traceloop
- **What**: Open-source OTel instrumentation library for LLMs (Apache 2.0)
- **HN**: 154 pts (Show HN), 102 pts (follow-up JS version)
- **Strength**: Not a platform but a library — plugs into Datadog, New Relic, Sentry, Honeycomb, etc. Python, TypeScript, Go, Ruby.
- **Why this matters**: The "instrument once, send anywhere" approach. Critical infrastructure layer, not a competing platform.
- https://github.com/traceloop/openllmetry

#### 15. OpenLIT
- **What**: OpenTelemetry-native GenAI observability + GPU monitoring + guardrails
- **HN**: 62 pts (Show HN)
- **Strength**: One-line auto-instrumentation for 44+ providers, includes GPU monitoring (unique), prompt management, playground
- **Why this matters**: GPU monitoring differentiator for teams running local/self-hosted models.
- https://github.com/openlit/openlit

#### 16. Fiddler AI
- **What**: Enterprise AI Control Plane — observability, guardrails, governance
- **Strength**: Hierarchical root cause analysis for multi-agent systems, <100ms guardrails, compliance monitoring, regulated industries focus
- **Why this matters**: Enterprise/regulated industry play. If you need audit-ready traces and compliance, Fiddler is the answer.
- https://www.fiddler.ai

#### 17. Confident AI / DeepEval
- **What**: Evaluation-first observability platform with 50+ research-backed metrics
- **Key Signal**: A5Labs publicly switched from LangSmith to Confident AI. Humach shipped 200% faster after switching.
- **Strength**: Deepest eval library (faithfulness, relevance, safety, and more), framework-agnostic
- **Why this matters**: If your primary need is eval quality rather than operational monitoring, this is the specialized answer.
- https://www.confident-ai.com

---

## Key Meta Signals

### The Market Is Consolidating Around OpenTelemetry
Nearly every serious player now supports OTel GenAI Semantic Conventions. This is the winning standard. Tools that don't support OTel are increasingly niche.

### ClickHouse + Langfuse Is the Biggest Structural Shift
The January 2026 acquisition signals that LLM observability data is fundamentally an analytics/OLAP problem. Expect Langfuse to become significantly more powerful on the query/dashboard side.

### Gateway vs SDK vs OTel — Three Integration Models
1. **Gateway/Proxy**: Helicone (zero code changes, but limited depth)
2. **SDK**: LangSmith, Braintrust, AgentOps (deep instrumentation, vendor coupling)
3. **OTel-native**: Langfuse, Phoenix, SigNoz, OpenLLMetry (standard-based, portable)

### Agent-Specific Observability Is Emerging
AgentOps, Fiddler, LangWatch are building features specifically for multi-agent systems (session replay, hierarchical traces, agent simulations). This is a differentiator as agents get more complex.

### The LangSmith Lock-in Backlash
Documented public switches away from LangSmith. Teams want framework-agnostic tooling. Langfuse and Confident AI are the primary beneficiaries.

### PostHog's Bundling Advantage
PostHog adding LLM analytics to an already-free product analytics platform is a bundling play that could commoditize standalone LLM observability tools.

---

## Quotes

> "LangSmith felt too tied into the LangChain ecosystem and lacked the evaluation depth and pricing flexibility we needed." — A5Labs (switched to Confident AI, July 2025)

> "89% of organizations have implemented observability for their agents" — AIMultiple research, 2026

> Langfuse is "trusted by 19 of the Fortune 50 and 63 of the Fortune 500 companies" — Langfuse/ClickHouse acquisition announcement

> Laminar Show HN: "Open-Source DataDog + PostHog for LLM Apps, Built in Rust" — 203 HN points

---

## Head-to-Head Comparisons Found

| Matchup | Signal Source | Summary |
|---------|--------------|---------|
| Langfuse vs LangSmith | markaicode.com, langfuse.com, signoz.io | Langfuse winning on openness, self-hosting, pricing. LangSmith winning on LangChain zero-config. |
| Braintrust vs Helicone | helicone.ai | Helicone = proxy simplicity, Braintrust = eval depth |
| Braintrust vs Langfuse | braintrust.dev | Braintrust claims better evals; Langfuse has community/OSS advantage |
| LangSmith alternatives | confident-ai.com, signoz.io, zenml.io | Confident AI, Langfuse, SigNoz, Phoenix most cited alternatives |
| Arize alternatives | braintrust.dev | Braintrust positioning against Arize on eval automation |

---

## Gaps in Current Catalog

**CRITICAL: The analytics-llm-tracing category is completely empty.** All 17 solutions above need to be added and ranked.

### Recommended Initial Ranking (for deep-dive validation):

**Top Tier** (highest signal, broadest adoption):
1. Langfuse — open-source leader, ClickHouse acquisition, highest stars
2. LangSmith — incumbent default for LangChain users
3. Braintrust — best free tier, strong evals
4. PostHog LLM Analytics — bundling advantage, novel clustering
5. Helicone — unique gateway approach

**Strong Contenders** (need deep-dive to rank):
6. Arize Phoenix — OTel-native, strong framework coverage
7. Laminar — fast-growing OSS, Rust performance
8. Datadog LLM Obs — enterprise default
9. W&B Weave — ML ecosystem integration

**Specialized** (rank within niches):
10. Galileo — eval intelligence + guardrails
11. AgentOps — agent-specific observability
12. SigNoz — full-stack APM + LLM
13. Confident AI — eval-first
14. LangWatch — agent simulation
15. OpenLLMetry — infrastructure layer (library, not platform)
16. OpenLIT — GPU monitoring differentiator
17. Fiddler — enterprise compliance

---

## NEW CONTENDER ALERTS

Since the catalog was empty, technically all are new. But these are the ones most likely to be overlooked:

- **Laminar** — 203 HN pts, Rust-based, YC S24, growing fast
- **OpenLIT** — GPU monitoring is a unique differentiator, 62 HN pts
- **LangWatch** — agent simulation capability is unique
- **Confident AI / DeepEval** — documented LangSmith defections
- **Galileo** — Luna-2 SLMs for guardrails is a proprietary moat

---

## Key Player Opportunities

Potential Key Players (people/companies sharing full observability stacks):
- **Langfuse team** (Marc Klingen, Max Deichmann) — YC W23, acquired by ClickHouse, most vocal OSS advocates in this space
- **Traceloop** (Nir Gazit) — OpenLLMetry creator, "instrument once, send anywhere" philosophy
- **PostHog team** (James Hawkins) — bundling LLM analytics into product analytics

---

## Recommended Next Step

1. **Deep-dive the top 5**: Langfuse, LangSmith, Braintrust, PostHog, Helicone — validate pricing, integration effort, eval quality
2. **Rank all 17 solutions** using the standard ranking methodology
3. **Populate the catalog** with at least the top 10 solutions immediately — this category being empty is a critical gap
4. **Track the Langfuse/ClickHouse integration** — this will likely reshape the competitive landscape within months
5. **Monitor the OTel GenAI semantic conventions** evolution — this is becoming the universal standard
