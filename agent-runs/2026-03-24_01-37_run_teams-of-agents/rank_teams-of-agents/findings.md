# Rank Findings — Teams of Agents / Multi-Agent Orchestration

## Scope

Ranked recommendation across five segments of the "teams-of-agents" problem space: Python frameworks, TypeScript frameworks, autonomous coding agents, parallel agent IDEs / fleet orchestrators, and workflow automation. Rankings weighted by real usage (downloads > stars), independent trust signals (HN, press, named customers), recency, direct workflow fit, and demonstrability.

## Date

2026-03-24T03:00Z

## Inputs

- `agent-runs/2026-03-24_01-37_run_teams-of-agents/discover_teams-of-agents/findings.md`
- `agent-runs/2026-03-24_01-37_run_teams-of-agents/deep-dive_teams-of-agents/findings.md`

---

## Methodology

**Primary weight: real usage (PyPI/npm downloads).** Stars are discounted — multiple frameworks show inflated star counts that diverge from actual adoption. DL/star ratio is used as a trust metric: anything below 50 DL/star gets flagged.

**Secondary weights:**
- Independent trust signals (HN points, Martin Fowler-tier endorsements, independent press)
- Named enterprise customers with verifiable claims
- Protocol support (MCP is table stakes; A2A is a forward differentiator)
- Active maintenance (last push within 7 days)
- Security posture (known CVEs are ranked down)

**Explicit deweighting:**
- Self-reported metrics without independent corroboration
- Star counts as standalone signal (too easily inflated)
- "10,000x faster" marketing claims without workflow-relevant benchmarks

---

## SEGMENT 1: Python Agent Frameworks

The main event. This is where most teams will make their first choice.

### Final Ranking

| Rank | Framework | Monthly DL | Stars | DL/Star | Verdict |
|------|-----------|-----------|-------|---------|---------|
| **#1** | **LangGraph** | 40.1M | 27,261 | 1,471 | Production king. Complex workflows, regulated industries. |
| **#2** | **OpenAI Agents SDK** | 18.2M | 20,236 | 901 | Fastest on-ramp. Best for simple multi-agent setups. |
| **#3** | **Pydantic AI** | 15.2M | 15,712 | 965 | Type-safe agent logic. Complementary to LangGraph. |
| **#4** | **Strands Agents** | 5.3M | 5,358 | 998 | AWS dark horse. Best for AWS-native shops. |
| **#5** | **CrewAI** | 5.8M | 46,988 | 124 | Stars inflated. Architecture flaws documented. A2A+MCP saves ranking. |
| **#6** | **Google ADK** | 4.5M | 18,552 | 245 | GCP play. Solid if you're already in Google Cloud. |
| **#7** | **MS Agent Framework** | 648K | 8,153 | 79 | NEW. RC status. AutoGen+SK successor. Watch closely. |
| **#8** | **Agno** | 1.5M | 38,884 | 39 | Stars severely inflated (39 DL/star). Real adoption is low. |
| **#9** | **smolagents** | 446K | 26,236 | 17 | Research/education only. CVE-2025-5120 unresolved. Not for production. |
| **SUNSET** | **AutoGen** | 1.2M | 56,086 | 22 | Officially retired. Migrate to MS Agent Framework. |
| **SUNSET** | **Semantic Kernel** | 2.7M | 27,531 | 99 | Maintenance mode. Merge into MS Agent Framework entry. |

### Reasoning

**#1 LangGraph** — The evidence is overwhelming: 40M monthly downloads is 2.2x the #2 and 7x the #3 Python framework. Fortune 500 customers (Klarna saving $60M/yr, Uber, LinkedIn, JPMorgan) with specific ROI claims. Independent consulting firm (Particula Tech) uses it for 60% of agent projects. Qodo chose it for their coding agent (83-pt HN). LangSmith observability is best-in-class. The learning curve (1-2 weeks) is the main tradeoff — worth it for any team building production multi-agent systems.

**#2 OpenAI Agents SDK** — 0 to 18M DL/month in 12 months is remarkable. 807-pt HN story (MCP support) is the highest single-story engagement in the entire space. 30-line multi-agent triage systems. Now supports 100+ LLMs (addressing the original vendor lock-in criticism). The gap vs LangGraph: no checkpointing, no state persistence, no built-in observability. Pick this when you want fast iteration and don't need long-running stateful workflows.

**#3 Pydantic AI** — Martin Fowler endorsement (197-pt HN) carries exceptional weight. V1 stable as of March 2026. "Closest thing to 'if it compiles, it works' in Python agent development." Emerging pattern of PydanticAI + LangGraph (Pydantic for agent logic, LangGraph for orchestration) suggests it's complementary, not competitive. AWS Bedrock integration published. Best choice for teams that prioritize type safety and clean Python idioms.

**#4 Strands Agents** — Ranked above CrewAI despite similar DL count (5.3M vs 5.8M) because its DL/star ratio (998) indicates genuine organic usage, not hype. AWS internal products (Q Developer, Glue, VPC Reachability Analyzer) are built on it. InfoQ published specific ROI: "30min → 45sec, $5M savings." GA v1.0. The catch: AWS-native, so less relevant for GCP/Azure shops.

**#5 CrewAI** — This is a demotion from what its 47K stars would suggest. The evidence is damning: 124 DL/star (12x worse than LangGraph), documented architecture flaws ("manager-worker process does not function as documented" — Towards Data Science), and community sentiment turning ("peaked in hype"). It keeps #5 because: (a) 5.8M DL/month is still real usage, (b) first framework with native A2A + MCP, (c) fastest prototyping learning curve (3-5 days). Best for quick demos, not production.

**#6 Google ADK** — 4.5M DL/month is solid. v1.0 GA. Named customers (Renault, Box). But it's underdiscussed on HN (86 pts, and that was for the Go SDK), suggesting adoption is driven by GCP lock-in rather than community preference. If you're a GCP shop, it's the natural choice. Otherwise, LangGraph/OpenAI SDK are stronger.

**#7 MS Agent Framework (NEW)** — The AutoGen + Semantic Kernel successor. RC status with 648K DL/month — small but growing. Supports A2A, AG-UI, and MCP. Microsoft DevBlog confirmed Semantic Kernel is maintenance-mode. This will likely be the #4-5 framework by end of 2026 as it absorbs the combined user bases. Add to catalog now, rank will rise.

**#8 Agno** — 38.9K stars but only 1.5M downloads gives a DL/star ratio of 39 — the most suspicious of any active framework. The "10,000x faster than LangChain" claim was debunked on HN (framework instantiation speed is irrelevant vs LLM inference latency). Formerly Phidata, rebranded. Real adoption is low.

**#9 smolagents** — 395-pt HN for Open Deep Research was impressive, but it's a research showcase, not a production framework. 446K DL/month (17 DL/star — worst ratio). CVE-2025-5120 sandbox escape unresolved. Last push 11 days stale. Research and education use only.

### Narrow Subcases

| If your situation is... | Use this instead of #1 |
|------------------------|----------------------|
| Simple agents, fast prototyping, OpenAI-first | **OpenAI Agents SDK** (#2) |
| Type-safe Python, clean idioms | **Pydantic AI** (#3) — or combine with LangGraph |
| AWS-native infrastructure | **Strands Agents** (#4) |
| GCP-native infrastructure | **Google ADK** (#6) |
| Microsoft/.NET enterprise stack | **MS Agent Framework** (#7) — or wait for GA |
| Quick demo/proof-of-concept only | **CrewAI** (#5) for speed, but migrate before production |

---

## SEGMENT 2: TypeScript Frameworks

### Final Ranking

| Rank | Framework | npm Weekly | Stars | HN Best | Verdict |
|------|-----------|-----------|-------|---------|---------|
| **#1** | **Mastra** | 245,971 | 22,256 | 442 pts | Only serious TS framework. No real competitor. |
| **#2** | **AgentKit** (inngest) | 4,874 | 812 | 64 pts | Niche. Durable execution angle is interesting. |

### Reasoning

**#1 Mastra** — Dominant by every metric. Named customers at scale: Replit Agent 3 (thousands of sandboxes weekly), Marsh McLennan (75,000 employees), PayPal, Adobe, Docker. $13M YC W25 seed. 442-pt HN Show HN — highest for any TS agent framework. 1.0 shipped with 94 production fixes. Server adapters for Express, Hono, Fastify, Koa. If you're building multi-agent systems in TypeScript, this is it.

**#2 AgentKit** — 50x smaller than Mastra but differentiated by Inngest's durable execution infrastructure (agents survive crashes). Worth watching for long-running TS workflows, not a general recommendation.

---

## SEGMENT 3: Autonomous Coding Agents

### Final Ranking

| Rank | Agent | Stars | Key Metric | Verdict |
|------|-------|-------|-----------|---------|
| **#1** | **OpenHands** | 69,615 | 60.6% SWE-bench Verified | Dominant OSS coding agent. $18.8M Series A. |
| **#2** | **Factory AI** | N/A (closed) | $70M funding, $300M valuation | Best-funded closed-source. Sequoia, NVIDIA backed. |

### Reasoning

**#1 OpenHands** — Highest star count in the entire teams-of-agents space (69.6K). SOTA SWE-bench Verified (60.6% with inference scaling; Claude Opus 4.5 pushes to 80.9%). $18.8M Series A. Enterprise claims: "87% of bug tickets solved same day." AMD partnership for on-prem. The go-to open-source coding agent.

**#2 Factory AI** — $50M Series B at $300M valuation from Sequoia, NEA, NVIDIA. "Droids" claim #1 on Terminal Bench. Named customers: MongoDB, EY, Bayer, Zapier. Simon Willison covered the "software factory" paradigm (StrongDM: "Code must not be written by humans"). Closed-source and expensive ($1K-$20K/month API tokens per engineer). For teams that want a managed autonomous coding pipeline rather than self-hosting OpenHands.

### Narrow Subcases

| If your situation is... | Pick |
|------------------------|------|
| Open-source, self-hosted, maximum control | **OpenHands** |
| Managed service, enterprise compliance, budget for API costs | **Factory AI** |
| Already using an IDE with agent features (Cursor 2.0, Claude Code) | **Use the platform natively** — standalone coding agents add complexity |

---

## SEGMENT 4: Parallel Agent IDEs / Fleet Orchestrators

This segment exploded in Q1 2026. 16 contenders, most under 6 months old. IDE incumbents (Cursor 2.0, Windsurf Wave 13, Claude Code Agent Teams, Google Antigravity) are shipping native parallel agent features, which threatens the entire standalone segment.

### Final Ranking

| Rank | Tool | Stars | HN Best | Verdict |
|------|------|-------|---------|---------|
| **#1** | **Emdash** | 2,831 | 206 pts | Best community signal. YC W26. Best-of-N, 18+ agents. |
| **#2** | **ccpm** | 7,753 | 175 pts | Battle-tested PM layer. GitHub Issues as source of truth. |
| **#3** | **Superset** | 7,815 | 96 pts | YC-backed IDE. 10+ parallel agents. |
| **#4** | **oh-my-openagent** | 42,803 | — | Massive stars but controversial. No direct HN validation. |
| **#5** | **1code** | 5,288 | 75 pts | YC W26. Cursor-like GUI for CLI agents. |

### Reasoning

**#1 Emdash** — Lowest stars in the top 5 but strongest independent signal: 206-pt HN (highest in segment), YC W26, and a genuinely differentiated feature (Best-of-N: run multiple agents on same task, pick best result). Provider-agnostic (18+ CLI agents). 60K downloads. Stars will catch up to the community signal.

**#2 ccpm** — 175-pt HN with 112 comments (deep engagement). Spec-driven development (PRD → Epic → Task → Issue → Code → Commit). Works with 6+ agents (Factory, Claude Code, Amp, OpenCode, Codex, Cursor). GitHub Issues as source of truth — battle-tested PM pattern rather than yet-another-IDE.

**#3 Superset** — 7.8K stars, 96-pt HN, 512 PH upvotes. YC-backed. 10+ parallel agents via git worktrees. Solid execution but less differentiated — "IDE for the AI Agents Era" is what every IDE is becoming.

**#4 oh-my-openagent (omo)** — 42.8K stars in 4 months is remarkable, and the feature set (11 specialized agents, Ultra Work Mode) is the most complete. Ranked #4 despite stars because: (a) no direct HN front-page presence, (b) Anthropic blocked OAuth tokens citing the broader oh-my-opencode ecosystem, (c) only 3,424 npm DL/month against 42.8K stars (extreme inflation signal). Trust is the issue, not features.

**#5 1code** — YC W26, 75-pt HN. Cursor-like GUI for CLI agents. Interesting angle (graphical orchestration of terminal-based agents) but smaller community than the top 4.

### Critical caveat

IDE incumbents are absorbing this segment. Cursor 2.0 (8 parallel agents), Windsurf Wave 13 (5 parallel agents), Claude Code Agent Teams, and Google Antigravity (free agent-first IDE) all shipped native multi-agent features in Feb-Mar 2026. Standalone tools that survive will need to offer cross-IDE orchestration, advanced PM workflows (ccpm's strength), or unique features IDEs can't replicate (Emdash's Best-of-N).

---

## SEGMENT 5: Workflow Automation

### Final Ranking

| Rank | Platform | Stars | Key Metric | Verdict |
|------|----------|-------|-----------|---------|
| **#1** | **n8n** | 180,701 | $2.5B valuation, 196M Docker pulls | Incumbent. Use this today. |
| **#2** | **Sim Studio** | 27,148 | 60K+ developers, Apache-2.0 | Agent-native challenger. Use if license matters. |

### Reasoning

**#1 n8n** — $240M funding at $2.5B valuation. 3,000+ enterprise customers (Vodafone, Delivery Hero, Microsoft). 196M Docker pulls. 6x user growth in 2025. Native MCP support. 728-pt HN (highest single post in all segments). The default choice for workflow automation with agent capabilities.

**#2 Sim Studio** — 0 to 27K stars in 14 months. $7M Series A (YC X25). Apache-2.0 license (genuine open-source) vs n8n's restrictive fair-code license. "Figma-like canvas for agent workflows" — designed for agents from day one rather than retrofitted. 240-pt HN as "Apache-2.0 n8n alternative." Pick this if: (a) Apache-2.0 license matters, (b) you want agent-native design rather than general automation with AI bolted on, or (c) you're betting on the future rather than proven scale.

---

## CROSS-SEGMENT: Protocol Readiness

| Protocol | Status | Who supports it |
|----------|--------|----------------|
| **MCP** | Table stakes | Nearly universal — n8n, OpenAI SDK, CrewAI, MS Agent Framework, Google ADK, Mastra, Claude Code, Sim Studio, LangGraph (ecosystem) |
| **A2A** | Early but institutional | CrewAI (native), MS Agent Framework (native), n8n (community). LangGraph and OpenAI SDK: no native support yet. 150+ supporting orgs, Linux Foundation governance. |

**Editorial note:** MCP support is no longer a differentiator — it's expected. A2A is the next differentiator to watch. CrewAI and MS Agent Framework are ahead here, which partially justifies CrewAI's continued relevance despite its other issues.

---

## OVERALL RECOMMENDATION — "If I could only pick one per segment"

| Segment | Pick | Why |
|---------|------|-----|
| Python framework | **LangGraph** | 40M DL/month, Fortune 500 customers, LangSmith observability. The production default. |
| TypeScript framework | **Mastra** | No real competitor. Replit, PayPal, Adobe using it at scale. |
| Coding agent | **OpenHands** | 69.6K stars, SOTA SWE-bench, $18.8M Series A. The OSS standard. |
| Parallel agent IDE | **Emdash** | Best-of-N, provider-agnostic, strongest HN signal. But watch for IDE incumbents absorbing this space. |
| Workflow automation | **n8n** | $2.5B valuation, 196M Docker pulls. The proven choice. |

---

## What Would Change This Ranking

1. **LangGraph loses #1 if:** OpenAI Agents SDK ships checkpointing + state persistence + observability platform. That would eliminate LangGraph's main advantages over a simpler, faster-to-learn framework.

2. **CrewAI drops further if:** The architecture flaws remain unfixed in the next 2 releases, OR A2A gets native support in LangGraph/OpenAI SDK (eliminating CrewAI's protocol advantage).

3. **MS Agent Framework rises to #4-5 if:** GA ships in 2026 and AutoGen + Semantic Kernel users migrate as expected. Microsoft's enterprise distribution is powerful.

4. **Emdash loses parallel IDE #1 if:** Cursor 2.0 or Claude Code Agent Teams ship Best-of-N natively. IDE incumbents are the existential threat to this segment.

5. **Sim Studio challenges n8n if:** Enterprise adoption crosses 500+ customers AND n8n's fair-code licensing drives self-hosters to Apache-2.0 alternatives.

6. **Pydantic AI rises to #2 if:** The "PydanticAI + LangGraph" pattern becomes the standard production stack, positioning it as essential infrastructure rather than alternative.

7. **Agno rehabilitates if:** Independent star audit clears inflation concerns AND real download numbers cross 5M/month. Until then, the 39 DL/star ratio is disqualifying for a top-5 recommendation.

8. **A2A protocol shifts rankings if:** It becomes as ubiquitous as MCP. Currently only CrewAI and MS Agent Framework have native support — if LangGraph and OpenAI SDK add it, the protocol advantage disappears.

---

## Quotes

> "For roughly 60% of our agent projects, that's LangGraph — because clients typically have complex, regulated workflows."
> — Particula Tech, independent consulting firm (2026-02)

> "A multi-agent triage system can be built in about 30 lines of Python."
> — SoftmaxData on OpenAI Agents SDK (2026)

> "The closest thing to 'if it compiles, it works' in Python agent development."
> — SoftmaxData on Pydantic AI (2026)

> "CrewAI's hierarchical manager-worker process does not function as documented."
> — Towards Data Science, independent technical analysis (2026)

> "Microsoft retires AutoGen and debuts Agent Framework to unify and govern enterprise AI agents."
> — VentureBeat (2026)

> "Code must not be written by humans. Code must not be reviewed by humans."
> — StrongDM's software factory pipeline, covered by Simon Willison (2026-02-07)

> "Does anyone use CrewAI or LangChain anymore?"
> — HN thread, Feb 2026 (11 pts, consensus: peaked in hype)

---

## Recommended Next Step

Rankings are complete and evidence-backed. Ready for catalog integration:
- Update solution entries for all ranked items
- Add new entries: MS Agent Framework, Emdash, ccpm, Superset, oh-my-openagent, Sim Studio
- Sunset entries: AutoGen, Semantic Kernel (redirect to MS Agent Framework)
- Flag for monitoring: A2A protocol adoption across frameworks, IDE incumbent parallel agent features
