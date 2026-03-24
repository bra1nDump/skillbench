# Discover Findings — Research

## Scope

Full discover protocol for the **Research** problem space. Objective: find all serious contenders, new signals, gaps in the current catalog, and shifts in the meta.

## Date

2026-03-24

## Inputs

### Web Searches
- "best AI research tools 2026 deep research agents"
- "deep research comparison 2026 Perplexity vs OpenAI vs Google"
- "GPT Researcher vs Perplexity vs OpenAI deep research benchmark 2026"
- "AI academic research tools Elicit Consensus Semantic Scholar 2026"
- "open source deep research agent 2026 self-hosted"
- "Tavily Firecrawl research API infrastructure 2026 updates"
- "switched from Perplexity / better than Perplexity deep research 2026"
- "MiroThinker BrowseComp deep research agent 2026"
- "STORM Stanford research agent 2026 updates"
- "Kompas AI deep research SciSpace DeepReview 2026"
- "Grok deep research xAI 2026 comparison"
- "Claude research agent Anthropic 2026 deep research"
- "Phind deep research You.com research agent 2026"
- "Local Deep Research DeepSearcher self-hosted 2026"
- "NVIDIA AI-Q Blueprint agentic search deep research 2026"
- "Search-R1 deep research training reinforcement learning 2026"

### Hacker News Algolia
- "deep research agent" (stories, points > 10)
- "GPT Researcher open source" (stories, points > 10)
- "Perplexity deep research" (stories, points > 10)
- "Elicit Consensus academic AI" (stories, points > 10) — 0 results
- "Tavily Firecrawl research infrastructure" (stories, points > 10) — 0 results
- "Tongyi DeepResearch MiroThinker" (stories, points > 5) — 0 results

### GitHub Repos Checked
- assafelovic/gpt-researcher: 25,969 ★
- MiroMindAI/MiroThinker: 7,945 ★
- MiroMindAI/MiroFlow: 2,845 ★
- langchain-ai/open_deep_research: 10,922 ★
- onyx-dot-app/onyx: 17,996 ★
- stanford-oval/storm: 28,034 ★
- mendableai/firecrawl: 96,980 ★
- tavily-ai/tavily-python: 1,117 ★
- zilliztech/deep-searcher: 7,724 ★
- LearningCircuit/local-deep-research: 4,176 ★
- NVIDIA-AI-Blueprints/aiq: 390 ★
- PeterGriffinJin/Search-R1: 4,285 ★
- nickscamara/open-deep-research: 6,197 ★
- btahir/open-deep-research: 2,132 ★
- robertjakob/rigorous: 243 ★

### Registries Checked
- PulseMCP (Tavily MCP server page — 1.1M all-time visits, #40 global)

---

## Findings

### 1. 🚨 NEW CONTENDER ALERT: MiroThinker (MiroMind AI)

**What:** Deep research agent optimized for complex research and prediction tasks. MiroThinker-H1 scores **88.2 on BrowseComp**, exceeding Gemini-3.1-Pro (85.9), Claude-4.6-Opus (84.0), and GPT-5.4 (82.7). MiroThinker-1.7 scores 74.0.

**GitHub:** 7,945 ★ (pushed 2026-03-23 — very active). MiroFlow (web UI, 2,845 ★) supports MiroThinker, Claude, Kimi, OpenAI.

**Key innovation:** "Effective Interaction Scaling" — verification-centric approach that improves reasoning quality at every step rather than scaling blindly. Apache 2.0 license, 30B and 235B parameters, 256K context, up to 300 tool calls per task.

**Released:** March 2026. Press coverage in Morningstar, StreetInsider. Paper on arXiv (2511.11793, 2603.15726).

**Why this matters:** Best open-source BrowseComp score, beating frontier closed models. This is a serious open-source deep research agent that should be ranked. NOT in the current catalog.

**Source:** [GitHub](https://github.com/MiroMindAI/MiroThinker) · [arXiv](https://arxiv.org/abs/2511.11793)

---

### 2. 🚨 NEW CONTENDER ALERT: NVIDIA AI-Q Blueprint

**What:** Open-source enterprise deep research agent built on LangChain DeepAgents + NVIDIA NeMo. Achieved **#1 on DeepResearch Bench I (55.95) and II (54.50)**.

**Key innovation:** Hybrid frontier + open model architecture that cuts query costs 50%. Uses Nemotron open models for research, frontier for orchestration. Modular sub-agents with strict context isolation.

**GitHub:** 390 ★ (new, pushed 2026-03-18). Enterprise partners: IBM, Dell, HPE, ServiceNow, LangChain.

**Why this matters:** First place on both DeepResearch Bench leaderboards. Enterprise-grade with NVIDIA backing. Open source. NOT in the current catalog.

**Source:** [NVIDIA Blog](https://developer.nvidia.com/blog/how-to-build-deep-agents-for-enterprise-search-with-nvidia-ai-q-and-langchain/) · [HuggingFace](https://huggingface.co/blog/nvidia/how-nvidia-won-deepresearch-bench) · [GitHub](https://github.com/NVIDIA-AI-Blueprints/aiq)

---

### 3. 🚨 NEW CONTENDER ALERT: Local Deep Research

**What:** Deep research that runs entirely on local hardware. Achieves **~95% on SimpleQA** (tested with GPT-4.1-mini). Supports Ollama, Google, Anthropic. Searches 10+ sources: arXiv, PubMed, web, private documents. Everything local & encrypted.

**GitHub:** 4,176 ★ (pushed 2026-03-23 — very active).

**Why this matters:** Privacy-first research agent with benchmark scores rivaling Perplexity's 93.9% SimpleQA. The only fully local option with competitive accuracy. NOT in the current catalog.

**Source:** [GitHub](https://github.com/LearningCircuit/local-deep-research)

---

### 4. 🚨 NEW CONTENDER ALERT: DeepSearcher (Zilliz)

**What:** Open-source deep research agent from Zilliz (Milvus creators). Focuses on private data search via vector databases. Plan-search-read-synthesize loop with query routing and conditional execution.

**GitHub:** 7,724 ★. Python library + CLI. YAML/Python config for search engine, LLM, and vector DB.

**Why this matters:** Unique angle — deep research over private/enterprise data, not just web. Built by the Milvus team with strong vector search expertise. NOT in the current catalog.

**Source:** [GitHub](https://github.com/zilliztech/deep-searcher) · [Zilliz Blog](https://zilliz.com/blog/introduce-deepsearcher-a-local-open-source-deep-research)

---

### 5. 🚨 NEW CONTENDER ALERT: Search-R1

**What:** RL training framework for teaching LLMs to reason + search interleaved. Built on veRL, extends DeepSeek-R1 with search engine access. Improves QA performance by **41% (Qwen2.5-7B)** over RAG baselines.

**GitHub:** 4,285 ★. arXiv: 2503.09516, plus Search-R1++ follow-up (2602.19526).

**Why this matters:** Not a product but foundational infrastructure — shows how to train models that natively use search during reasoning. Key for anyone building custom research agents. NOT in the current catalog (infra tier).

**Source:** [GitHub](https://github.com/PeterGriffinJin/Search-R1) · [arXiv](https://arxiv.org/abs/2503.09516)

---

### 6. 🚨 NEW CONTENDER ALERT: Kompas AI

**What:** Multi-step deep research and report generation platform. Deploys multiple specialized AI agents in parallel (statistics agent, news agent, academic papers agent). Scans hundreds of sources per query.

**Why this matters:** Purpose-built research platform, not a chat add-on. Product Hunt presence. Positioned as ChatGPT Deep Research alternative. NOT in the current catalog.

**Source:** [Product Hunt](https://www.producthunt.com/products/kompas-ai) · [Medium](https://bytebridge.medium.com/kompas-ai-deep-research-report-generation-for-comprehensive-insights-9c17c437d2f6)

---

### 7. 🚨 NEW CONTENDER ALERT: SciSpace Deep Review

**What:** Agentic literature review tool. Claims **2X faster and 10X more relevant** than OpenAI Deep Research for academic papers. 280M+ papers indexed. Multi-step agentic approach: search → evaluate → aggregate → summarize → draft.

**Why this matters:** Direct Elicit competitor for systematic reviews. If claims hold, it's a serious academic research tool. NOT in the current catalog.

**Source:** [SciSpace](https://scispace.com/resources/open-ai-deep-research-scispace-deep-review/) · [CyberNews](https://cybernews.com/ai-tools/scispace-literature-review/)

---

### 8. 🚨 NEW CONTENDER ALERT: Onyx (YC W24)

**What:** Open-source AI platform with deep research across workplace applications. 17,996 ★ on GitHub. YC W24 company.

**HN signal:** 254 points on Launch HN (Nov 2025), 125 points on Show HN (Mar 2025).

**Why this matters:** Enterprise-focused open-source deep research across internal apps/documents. Strong community. NOT in the current catalog.

**Source:** [GitHub](https://github.com/onyx-dot-app/onyx)

---

### 9. Existing Contender Updates

#### Perplexity Deep Research
- **March 2026 update:** Deep Research now free for all users (Pro gets higher volume). Performs dozens of searches, reads hundreds of sources, returns reports in 2-4 minutes.
- **93.9% SimpleQA accuracy** — still the factuality leader.
- **21.1% HLE** — beats o3, Gemini Thinking, o3-mini, DeepSeek-R1.
- **50 sources per report** vs ChatGPT's ~20.
- Multi-model support added March 2026.
- HN: 368 points on launch post.
- **Developers switching from ChatGPT** — speed is the #1 cited reason.

#### OpenAI Deep Research
- **MCP support** (Feb 2026) — can connect to any MCP or app, restrict web searches to trusted sites.
- **26.6% HLE** — still best for PhD-level reasoning.
- Now available to Plus users (10 queries/month) and free users (2 queries/month). No longer $200-only.
- Takes 5-30 minutes per query — slowest but deepest.

#### Google Gemini Deep Research
- Browses **100+ web pages per query** — more than Perplexity or ChatGPT.
- $19.99/month via Gemini Advanced.
- Goes deeper into structured reasoning for technical/scientific material.

#### Grok DeepSearch / DeeperSearch (xAI)
- **DeepSearch** scans internet + X for detailed summaries.
- **DeeperSearch** = enhanced version with extended search and more reasoning.
- Grok 5 planned Q1 2026 with 6T parameters.
- Real-time X integration is a unique advantage.

#### Claude Research (Anthropic)
- Multi-agent research system: Opus 4.6 lead + Sonnet 4 subagents. **90.2% improvement** over single-agent Opus 4 on internal research evaluations.
- Google Workspace integration for internal + web research with citations.
- 14.5-hour task completion horizon — longest of any AI model.
- Average 21.2 independent tool calls without human intervention.

#### GPT Researcher
- **25,969 ★** on GitHub (pushed 2026-03-14).
- CMU DeepResearchGym winner (beat Perplexity and OpenAI on citation and report quality).
- 15.9K weekly PyPI downloads. MCP server available.
- Still the top pick for self-hosted research pipelines.

#### STORM (Stanford)
- **28,034 ★** — highest-starred research tool on GitHub.
- STORM 2.0: internet browsing, articles spanning tens of thousands of words, local LLM support.
- Co-STORM: collaborative research with moderator agent + LLM experts.
- Free at storm.genie.stanford.edu.
- Last push: Sep 2025 — less active than competitors.

#### Tongyi DeepResearch
- **HLE 32.9** — exceeds OpenAI (26.6) on the same benchmark.
- Open-source 30B MoE model. First fully open-source web agent matching OpenAI Deep Research.
- HN: **365 points** (Nov 2025) — very strong signal.
- Runs on consumer hardware.

#### Elicit
- **138M papers**, sentence-level citations.
- API launched March 2026.
- Reddit r/GradSchool endorsement: "essential for meta-analyses."
- Finds up to 1,000 relevant papers, analyzes up to 20,000 data points at once.

#### Consensus
- **200M+ academic papers**.
- Consensus Meter synthesizes weight of evidence into visual signal.
- Best for quick, binary evidence questions.

#### Semantic Scholar
- **200M+ papers**, AI-powered TLDRs, citation graph visualization.
- Best free discovery engine for finding papers.

#### Firecrawl
- **96,980 ★** — massive adoption.
- Extraction-first: one URL → LLM-ready data.
- Processes millions of pages with auto rate limiting, caching, distributed infra.

#### Tavily
- **1,117 ★** (SDK), 1.5K ★ (MCP server).
- PulseMCP: **1.1M all-time visitors**, #40 global, Top Pick Badge.
- Search-first with extraction. Real-time API for RAG and agent workflows.
- Official MCP server with remote endpoint.

---

### 10. Other Notable Signals

#### LangChain Open Deep Research
- **10,922 ★**. Configurable, works across model providers, search tools, and MCP servers.
- Deployable to LangGraph Platform.
- Gateway drug for building custom research agents.

#### Firecrawl Open Deep Research (nickscamara)
- **6,197 ★**. Uses Firecrawl for web data extraction.
- Not updated since May 2025 — may be stale.

#### Phind
- Developer-focused research with deep research mode.
- HN Launch: **138 points** (Dec 2025).
- VS Code integration. Searches docs, SO, GitHub, technical blogs.
- Hybrid stack pattern emerging: Perplexity (research) + Phind (coding).

#### You.com
- Enterprise search infrastructure with conversational answers and inline citations.
- Mode selection and customization for team use.

#### ResearchRabbit
- Free tool for visual paper discovery graphs.
- "Spotify for research papers" — recommendation-based.

#### Connected Papers
- Visual graphs of paper relationships.
- Helps understand research landscape.

#### Scite.ai
- **1.2 billion citation statements** from 187M+ articles.
- Most comprehensive citation analysis tool.

#### Rigorous (AI Peer Reviewer)
- 24 specialized agents analyzing paper sections, rigor, and writing quality.
- HN: **108 points** (May 2025).
- 243 ★ — niche but interesting multi-agent academic tool.

#### Hugging Face Open Deep Research
- Blog post: "Open-source DeepResearch — Freeing our search agents."
- Part of the open-source deep research movement.

---

## Quotes

> "MiroThinker-H1 (88.2) outperforms Gemini-3.1-Pro (85.9), Claude-4.6-Opus (84.0), and GPT-5.4 (82.7) on BrowseComp." — [MiroMind press release, March 2026](https://www.morningstar.com/news/pr-newswire/20260316sf10593/)

> "The open source NVIDIA AI-Q Blueprint for agentic search tops DeepResearch Bench accuracy leaderboards — using a hybrid approach with both frontier and open models that can cut query costs in half." — [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/ai-agents)

> "Local Deep Research achieves ~95% on SimpleQA benchmark." — [GitHub README](https://github.com/LearningCircuit/local-deep-research)

> "Tongyi DeepResearch is the first fully open-source Web Agent to achieve performance on par with OpenAI's DeepResearch." — [Tongyi blog](https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/) (365 HN points)

> "Multi-agent research system using Claude Opus 4 as the lead agent and Claude Sonnet 4 subagents outperforming single-agent Claude Opus 4 by 90.2% on internal research evaluations." — [Anthropic engineering blog](https://www.anthropic.com/engineering/multi-agent-research-system)

> "SciSpace Deep Review works 2X faster and produces 10X more relevant results than OpenAI Deep Research." — [SciSpace](https://scispace.com/resources/open-ai-deep-research-scispace-deep-review/)

---

## Catalog Gap Analysis

### Critical gaps (should be added):
1. **MiroThinker** — Best open-source BrowseComp score, beating frontier models. Apache 2.0, 7.9K ★.
2. **NVIDIA AI-Q Blueprint** — #1 on DeepResearch Bench I and II. Enterprise-grade, open source.
3. **Local Deep Research** — ~95% SimpleQA, fully local/encrypted. 4.2K ★, very active.
4. **SciSpace Deep Review** — Direct Elicit competitor for academic systematic reviews. 280M papers.
5. **Kompas AI** — Purpose-built multi-agent research platform.

### Should evaluate for inclusion:
6. **DeepSearcher (Zilliz)** — Private data deep research. 7.7K ★.
7. **Onyx** — Open-source workplace deep research. 18K ★, YC W24.
8. **Search-R1** — RL framework for training research agents. Infrastructure tier.
9. **Scite.ai** — 1.2B citation statements. Unique citation analysis.
10. **Grok DeepSearch/DeeperSearch** — X integration, real-time.

### Currently in catalog but need updates:
- **Perplexity** — Now free for all users (March 2026). Multi-model support.
- **OpenAI Deep Research** — MCP support (Feb 2026). Now available to Plus/free users.
- **Tongyi** — HN 365 points is a very strong community signal.
- **Claude Research** — Multi-agent system, 90.2% improvement metric.

### Infrastructure layer (may warrant its own sub-category):
- Firecrawl (97K ★), Tavily, LangChain Open Deep Research (11K ★), Search-R1

---

## Meta Shifts

1. **Deep research is now free.** Perplexity made it free for all users. OpenAI added it to free tier (2 queries). The premium is moving to speed/depth/volume, not access.

2. **Open source is winning benchmarks.** MiroThinker-H1 beats Gemini/Claude/GPT-5 on BrowseComp. Tongyi beats OpenAI on HLE. NVIDIA AI-Q tops DeepResearch Bench. The "closed models are better" narrative has collapsed for research tasks.

3. **Local/private research is viable.** Local Deep Research at ~95% SimpleQA, DeepSearcher for private data, NVIDIA AI-Q for enterprise. Privacy-first is no longer a performance sacrifice.

4. **Multi-agent is table stakes.** Every serious contender uses multi-agent: Anthropic (lead+subagent, 90.2% improvement), MiroThinker (verification agents), NVIDIA AI-Q (planner+researcher), Kompas AI (parallel specialist agents), SciSpace (agentic pipeline).

5. **MCP is the integration standard.** OpenAI, Tavily, GPT Researcher, LangChain all ship MCP servers. Research tools without MCP support are getting left behind.

6. **The category is splitting further.** Not just platform vs open-source vs academic anymore:
   - **Platform deep research:** Perplexity, OpenAI, Google, Grok, Claude
   - **Open-source agents:** MiroThinker, GPT Researcher, Tongyi, STORM, LangChain
   - **Local/private:** Local Deep Research, DeepSearcher, NVIDIA AI-Q
   - **Academic specialists:** Elicit, SciSpace, Consensus, Semantic Scholar, Scite
   - **Infrastructure:** Firecrawl, Tavily, Search-R1

---

## Recommended Next Step

1. **Deep-dive MiroThinker** — Highest priority. New SOTA on BrowseComp, 7.9K ★, very recent (March 2026). Needs benchmark verification and ranking.

2. **Deep-dive NVIDIA AI-Q** — #1 on DeepResearch Bench. Enterprise angle is unique. Small GitHub stars but major industry backing.

3. **Deep-dive Local Deep Research** — Fastest-growing local option. ~95% SimpleQA needs independent verification.

4. **Deep-dive SciSpace Deep Review** — Academic sub-category is under-represented. Claims need verification against Elicit.

5. **Update existing catalog entries** — Perplexity (free tier), OpenAI (MCP + wider access), Claude (multi-agent system), Grok (DeepSearch/DeeperSearch).

6. **Rank update** — The open-source tier has dramatically shifted. Tongyi and MiroThinker may outrank GPT Researcher on benchmarks, though GPT Researcher still leads on community adoption (26K ★ vs 8K ★).
