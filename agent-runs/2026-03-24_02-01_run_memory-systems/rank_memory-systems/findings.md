# Rank Findings: Memory Systems

## Scope

Ranked recommendation for the **memory-systems** problem space: how AI agents remember context across sessions — dedicated memory layers, vector databases, knowledge graphs, and RAG infrastructure.

## Date

2026-03-24T04:00Z

## Inputs

- **Prior runs referenced:** `discover_memory-systems/findings.md`, `deep-dive_memory-systems/findings.md`
- **Evidence sources:** ~80 total (GitHub traction data, HN threads, independent reviews, benchmark papers, comparison blog posts)

---

## Problem Definition

AI agents lose context between sessions. The memory-systems problem is: **how do you give an agent persistent, retrievable memory so it can recall prior interactions, user preferences, and evolving knowledge over time?**

Sub-problems:
1. **Session memory** — remember what happened in past conversations
2. **User preference learning** — adapt to individual users over time
3. **Temporal reasoning** — track how facts change over time
4. **Knowledge retrieval (RAG)** — pull relevant documents into context
5. **Scalable vector search** — the infrastructure layer that most memory solutions sit on top of

---

## Ranked Recommendations

### Tier 1: Dedicated AI Memory Layers

These solve the core problem directly — purpose-built memory for agents.

#### #1 — Mem0

| Signal | Value |
|--------|-------|
| Stars | 50,833 |
| Contributors | 272 |
| 30d commits | ~82 |
| Latest release | v1.0.7 (2026-03-20) |
| HN peak | 201 pts (Show HN) |

**Why #1:** Market leader by a wide margin. 50K+ stars, active development, 272 contributors. Fastest path to production for adding memory to any AI app. The hybrid datastore (graph + vector + key-value) covers the most common use cases. OpenMemory MCP server is strategically positioned at the protocol layer, meaning it works across Claude, ChatGPT, Cursor, and other tools. Browser extension enables cross-tool memory sharing.

**Weaknesses:** Independent benchmarks show Mem0 scores only 49% on LongMemEval (vs 91.4% for a competitor's temporal memory). Multi-session questions: 21.1%. Temporal reasoning: 31.6%. Community consensus: "Mem0 = storage + retrieval. Doesn't learn patterns." Good for simple semantic recall, poor for temporal reasoning and multi-hop queries.

**Best for:** Teams that need working agent memory fast. Simple preference recall, customer context, session summaries.

---

#### #2 — Graphiti (by Zep)

| Signal | Value |
|--------|-------|
| Stars | 24,139 |
| Contributors | 40 |
| 30d commits | ~21 |
| Latest release | mcp-v1.0.2 (2026-03-11) |
| HN peak | 142 pts (Show HN) |

**Why #2:** The temporal knowledge graph approach is the real differentiator in this space. Where Mem0 struggles with temporal reasoning (31.6% on LongMemEval), Graphiti is purpose-built for tracking how relationships and facts change over time. 24K stars is a breakout for what started as infrastructure under Zep. The Cursor IDE MCP integration (109 HN pts) shows coding-tool adoption — directly relevant to the SkillBench audience.

**Weaknesses:** Smaller contributor base (40 vs Mem0's 272). The parent product Zep (4,293 stars) appears stalled — last release Sep 2025, near-zero recent commits. Graphiti itself is active but its commercial backing is unclear.

**Best for:** Agents that need to track evolving relationships and temporal context — e.g., "what did the user prefer last month vs now?" CRM agents, knowledge workers, coding assistants that need project history.

**Narrow subcase winner:** If your primary need is **temporal reasoning** (tracking how facts change over time), Graphiti is the clear pick over Mem0.

---

#### #3 — Letta (formerly MemGPT)

| Signal | Value |
|--------|-------|
| Stars | 21,722 |
| Contributors | 153 |
| 30d commits | ~59 |
| Latest release | v0.16.6 (2026-03-04) |

**Why #3:** The MemGPT paper was seminal — introduced OS-like virtual memory management for LLMs. Letta is the productized version. Unique differentiator: agents can **self-edit their own memory blocks** using specialized tools. No other tool offers this level of white-box memory control. True open source. Called "the enthusiast's choice" in independent reviews.

**Weaknesses:** More complex to set up than Mem0. Community says "no implicit learning from behavior" — agents must explicitly decide what to remember. More of a stateful agent platform than a pure memory layer, which means more overhead if you just want memory.

**Best for:** Power users who want full control over what agents remember and forget. Research teams. Use cases where the agent itself should decide its memory strategy.

**Narrow subcase winner:** If you need **agents that manage their own memory** (self-editing, explicit memory tools), Letta is the only real option.

---

#### #4 — CORE

| Signal | Value |
|--------|-------|
| Stars | 1,410 |
| Contributors | 16 |
| 30d commits | ~190 |
| Latest release | 0.5.9 (2026-03-23) |
| HN peak | 112 pts |

**Why ranked:** "User-owned, shareable memory" is a resonant positioning. Works across Claude, Cursor, and other tools. Very high commit velocity (190/month) for its size suggests active early-stage development. The portable, self-hosted memory graph concept is compelling.

**Weaknesses:** Early stage (v0.5.9). Small community (16 contributors, 1.4K stars). Unproven at scale.

**Best for:** Individual developers who want a personal memory layer they own and control, portable across multiple AI tools.

---

### Tier 2: Vector Databases (Infrastructure Layer)

These don't solve the memory problem directly but are the infrastructure that memory solutions run on. If you're building a custom memory system, you need one of these.

#### #5 — Milvus

| Signal | Value |
|--------|-------|
| Stars | 43,472 |
| Contributors | 352 |
| 30d commits | ~217 |
| HN peak | 184 pts |

**Why #5:** Largest open-source vector DB by stars. Enterprise-grade with Zilliz cloud offering. Highest commit velocity in this entire ranking (217/month). Go-based, cloud-native, production-hardened.

**Best for:** Enterprise teams building custom memory/RAG pipelines who need scalable, battle-tested vector search.

---

#### #6 — Qdrant

| Signal | Value |
|--------|-------|
| Stars | 29,800 |
| Contributors | 153 |
| Latest release | v1.17.0 (2026-02-20) |
| HN peak | 131 pts |

**Why #6:** Rust-based, high-performance. Strong developer ergonomics. Cloud offering available. A credible alternative to Milvus with a different performance profile (Rust single-binary vs Go distributed).

**Best for:** Teams that want a performant, developer-friendly vector DB. Good default choice for startups and mid-size deployments.

---

#### #7 — Chroma

| Signal | Value |
|--------|-------|
| Stars | 26,789 |
| Contributors | 182 |
| 30d commits | ~106 |
| Latest release | 1.5.5 (2026-03-10) |

**Why #7:** The "SQLite of vector databases" — embedded-first, minimal setup. Excellent for prototyping and local-first applications. Python-native.

**Best for:** Prototyping, local development, small-scale RAG. The easiest on-ramp if you just want vector search working in 5 minutes.

**Narrow subcase winner:** If you want **embedded/local-first vector search** with zero infrastructure, Chroma is the pick.

---

#### #8 — pgvector

| Signal | Value |
|--------|-------|
| Stars | 20,408 |
| Contributors | 21 |
| HN peak | 509 pts (PGlite + pgvector) |

**Why #8:** If you're already on PostgreSQL, pgvector means zero new infrastructure. The 509-point HN post (PGlite + pgvector) shows massive developer interest in "just use Postgres." Minimal contributor count (21) but that's typical for a Postgres extension.

**Best for:** Teams already using PostgreSQL who want vector search without adding a new database. The pragmatic choice.

**Narrow subcase winner:** If your stack is already PostgreSQL, **use pgvector** — don't add a new database.

---

### Tier 3: RAG Frameworks (Orchestration Layer)

These sit above the vector DB layer and orchestrate retrieval-augmented generation.

#### #9 — LlamaIndex

| Signal | Value |
|--------|-------|
| Stars | 47,912 |
| Contributors | 1,910 |
| 30d commits | ~136 |

**Why ranked:** The dominant RAG framework. Massive ecosystem (1,910 contributors). Not a memory system per se, but many "memory" implementations are really LlamaIndex RAG pipelines under the hood.

**Best for:** Building custom RAG pipelines with fine-grained control over indexing, retrieval, and synthesis.

---

#### #10 — LangChain

| Signal | Value |
|--------|-------|
| Stars | 130,767 |
| Contributors | 3,659 |
| 30d commits | ~192 |

**Why ranked but not higher:** Largest by stars, but LangChain's memory modules are thin wrappers. Community consensus has shifted toward using LangChain for orchestration and a dedicated memory layer (Mem0, Graphiti) for actual memory. "LangChain memory" is more of a conversation buffer than persistent memory.

**Best for:** Teams already in the LangChain ecosystem who need basic conversation memory (buffer, summary, entity extraction).

---

### Tier 4: Emerging / Niche

#### Honorable Mentions

- **memU** (13,147 stars) — High star count but minimal community (30 contributors, ~6 commits/month). Unclear differentiation. Watch but don't adopt yet.
- **Axe** (711 stars) — 227 HN points is strong signal for a small project. High commit velocity (102/month). Too early to recommend but worth watching.
- **Fast-GraphRAG** (3,736 stars) — 457 HN points (highest in the entire space!) but **0 commits since Nov 2025**. Stalled. Do not adopt.
- **R2R** (7,742 stars) — Last commit Nov 2025. Stalled. Do not adopt.
- **MS Kernel Memory** (2,145 stars) — Last commit Dec 2025. Stalled for .NET ecosystem.

---

### Down-ranked / Archived

| Solution | Reason |
|----------|--------|
| Fast-GraphRAG | 0 commits since Nov 2025 despite 457 HN pts. Abandoned. |
| R2R | 0 commits since Nov 2025. Stalled. |
| MS Kernel Memory | 0 commits since Dec 2025. Stalled. |
| Zep (standalone) | Near-zero recent commits, last release Sep 2025. Graphiti has overtaken it. |
| Rowboat | 9,316 stars but near-zero recent commits. Agent builder, not memory-specific. |

---

## Decision Matrix

| If your need is... | Use this |
|---------------------|----------|
| Add memory to an agent, fastest path | **Mem0** |
| Track evolving facts and temporal context | **Graphiti** |
| Agents that self-manage their own memory | **Letta** |
| User-owned portable memory across tools | **CORE** (early stage) |
| Enterprise vector search at scale | **Milvus** |
| Developer-friendly vector DB | **Qdrant** |
| Embedded/local vector search, zero infra | **Chroma** |
| Already on PostgreSQL | **pgvector** |
| Full RAG pipeline orchestration | **LlamaIndex** |
| Basic conversation buffer in LangChain | **LangChain memory modules** |
| "Just use the platform natively" | Claude Projects, ChatGPT memory, Cursor context — if your memory needs are simple, the platform's built-in memory may be enough. Don't add infrastructure you don't need. |

---

## What Would Change This Ranking

1. **Mem0 ships temporal reasoning.** If Mem0 closes the LongMemEval gap (currently 49% vs 91%+), it becomes the undisputed #1 with no caveats. Their graph layer is a step in this direction.

2. **Graphiti proves commercial viability.** Zep (parent) looks stalled. If Graphiti gets independent funding or a strong cloud offering, it could challenge Mem0 for #1. If Zep dies, Graphiti's future is uncertain despite strong OSS traction.

3. **Letta simplifies.** If Letta reduces setup friction to match Mem0's developer experience, it could move up. The self-editing memory concept is powerful but currently too complex for most teams.

4. **A platform makes third-party memory obsolete.** If Claude, ChatGPT, or Cursor ships robust built-in memory with MCP/API access, the dedicated memory layer market shrinks significantly. This is the existential risk for Mem0/Graphiti/Letta.

5. **CORE hits critical mass.** If CORE's "user-owned memory" concept catches on (190 commits/month suggests momentum), it could become the default for individual developers. The portable memory graph is a compelling narrative.

6. **Someone ships preference learning.** The HN community repeatedly asks for "memory that learns patterns, not just stores facts." First mover here captures a new tier.

---

## Quotes

> "Mem0 = memory storage + retrieval. Doesn't learn patterns. Letta = self-editing agent memory. Closer, but no implicit learning from behavior."
> — HN discussion, Feb 2026

> "Mem0 fastest path to production; Letta best for white-box memory control."
> — Varun Pratap Bhardwaj, independent benchmark comparison, 2026

> "Multi-session questions: Mem0 at 21.1% vs 79.7%. Temporal reasoning: 31.6% vs 79.7%."
> — Vectorize LongMemEval benchmark (competitor-run but reproducible)

> "Letta is 'the enthusiast's choice' with true open source."
> — Calvin Ku, independent review, Feb 2026

---

## Recommended Next Step

Rankings are ready for integration into the SkillBench `/problems/memory-systems` page. Each solution should link to `/solutions/<slug>` with the rank and "best for" subcase clearly displayed. The decision matrix above can serve as the user-facing quick-pick guide.
