# Discover Findings: Memory Systems

## Scope

Comprehensive discovery of all serious contenders in the **memory-systems** problem space: how agents remember context across sessions, vector databases, context management, persistent memory, knowledge graphs, and RAG infrastructure for AI workflows.

## Date

2026-03-24T02:01Z

## Inputs

### Search queries used
- HN Algolia: "AI memory systems agents", "vector database context window", "persistent memory LLM", "Mem0", "MemGPT Letta", "Zep memory AI", "Chroma vector database", "Qdrant", "Pinecone", "Weaviate", "Milvus vector", "memory MCP context", "knowledge graph agent", "pgvector postgres vector", "LanceDB turbopuffer", "RAG retrieval augmented generation", "Show HN memory agent"
- GitHub API: star counts for all major contenders, release versions
- Pages checked: ~40 HN Algolia result sets, 15+ GitHub repos

---

## Findings

### Tier 1: Dedicated AI Memory Layers (The Core Category)

#### 1. Mem0 — Universal Memory Layer for AI Agents
- **GitHub:** mem0ai/mem0 | **50,833 stars** | Python
- **What:** Hybrid datastore (graph + vector + key-value) that adds persistent, stateful memory to AI apps. Remembers user interactions, preferences, context over time.
- **Sub-products:** OpenMemory (self-hosted MCP memory layer), Mem0 Browser Extension (cross-LLM memory sharing across ChatGPT/Claude/Perplexity)
- **Latest release:** v1.0.7 (actively shipping)
- **HN signal:** 201 points on Show HN (Sep 2024), 34 points for browser extension
- **Community critique:** "Mem0 = memory storage + retrieval. Doesn't learn patterns" (HN Feb 2026) — users want a preference learning layer on top
- **Why this matters:** Clear market leader in dedicated memory-for-agents. 50K+ stars is massive. The OpenMemory MCP product is strategic — positions them at the protocol layer.

#### 2. Letta (formerly MemGPT) — Stateful Agent Platform
- **GitHub:** letta-ai/letta | **21,722 stars** | Python
- **What:** Platform for building stateful agents with advanced memory that can learn and self-improve over time. Self-editing agent memory.
- **Latest release:** v0.16.6 (active)
- **Positioning:** "Closer [to pattern learning], but no implicit learning from behavior" (HN critique)
- **Why this matters:** The MemGPT paper was seminal — introduced the concept of OS-like virtual memory management for LLMs. Letta is the productized version. Strong brand recognition.

#### 3. Zep + Graphiti — Graph Memory for AI Agents
- **GitHub:** getzep/zep (4,293 stars) + getzep/graphiti (24,139 stars) | Python
- **What:** Zep is the memory layer; Graphiti is the open-source temporal knowledge graph engine powering it. Tracks changing relationships, maintains historical context.
- **HN signal:** Graphiti got 142 points on Show HN (Sep 2024), Cursor IDE integration got 109 points (Mar 2025)
- **Why this matters:** Graphiti at 24K stars is a breakout. The temporal knowledge graph approach (vs pure vector) is a real differentiator. Cursor IDE integration shows coding-tool adoption.

#### 4. CORE — User-Owned, Shareable Memory for Claude/Cursor
- **GitHub:** RedPlanetHQ/core | **1,410 stars** |
- **What:** Open-source memory graph — personal butler that builds your memory, shareable across tools
- **HN signal:** 112 points (Jul 2025), follow-up 20 points (Jun 2025)
- **Why this matters:** "User-owned" memory is a resonant positioning. Shows the trend toward portable, self-hosted memory that works across multiple AI tools.

---

### Tier 2: Vector Databases (The Infrastructure Layer)

#### 5. Milvus
- **GitHub:** milvus-io/milvus | **43,472 stars** | Go
- **What:** High-performance cloud-native vector database for scalable ANN search
- **HN signal:** 184 points, 152 points across multiple posts
- **Why this matters:** Largest open-source vector DB by stars. Enterprise-grade, Zilliz cloud offering.

#### 6. Qdrant
- **GitHub:** qdrant/qdrant | **29,799 stars** | Rust
- **What:** High-performance vector search engine, cloud available
- **HN signal:** 131 points (Series A announcement, Jan 2024), 87 points (v1.7 release)
- **Why this matters:** Rust-based performance story. $28M Series A. Strong developer adoption — integrated into many RAG/agent frameworks.

#### 7. Chroma
- **GitHub:** chroma-core/chroma | **26,789 stars** | Rust
- **What:** AI-native data infrastructure (rewritten in Rust). Embeddable vector DB.
- **Why this matters:** The default "first vector DB" for most LLM projects. Embeddable = easy onboarding. Now serverless with object-storage backend.

#### 8. pgvector — Vector Search for Postgres
- **GitHub:** pgvector/pgvector | **20,408 stars**
- **What:** Open-source vector similarity search extension for PostgreSQL
- **HN signal:** 256 points (storing OpenAI embeddings), 201 points, 143 points, "Pgvector is now faster than Pinecone at 75% less cost" (127 points)
- **Why this matters:** The "just use Postgres" movement is real. For teams already on Postgres, pgvector eliminates the need for a separate vector DB. Supabase (99K stars) bundles it.

#### 9. Weaviate
- **GitHub:** weaviate/weaviate | **15,863 stars** | Go
- **What:** Cloud-native vector DB with combined vector + structured filtering
- **HN signal:** 64 points, 39 points across posts
- **Why this matters:** Strong enterprise positioning, hybrid search, cloud-native.

#### 10. Pinecone (Proprietary)
- **No primary OSS repo** | Managed service
- **What:** Fully managed vector database. Recently integrated AI inferencing directly.
- **HN signal:** 130 points (Series B, $100M), 127 points ("pgvector faster at 75% less cost" comparison)
- **Funding:** $100M+ raised, valued at $700M+
- **Why this matters:** Market-defining proprietary vector DB. The "pgvector vs Pinecone" narrative is a key market tension.

#### 11. LanceDB
- **GitHub:** lancedb/lancedb | **9,615 stars**
- **What:** Developer-friendly embedded retrieval library for multimodal AI
- **Why this matters:** Embedded, multimodal-native. Growing fast as an alternative to Chroma.

---

### Tier 3: RAG & Retrieval Frameworks (The Orchestration Layer)

#### 12. LlamaIndex
- **GitHub:** run-llama/llama_index | **47,912 stars** | Python
- **What:** Data framework for LLM applications — the leading RAG orchestration framework
- **Why this matters:** Defines how most developers wire up retrieval + memory + LLMs. Core infrastructure.

#### 13. LangChain (memory modules)
- **GitHub:** langchain-ai/langchain | **130,767 stars** | Python
- **What:** Includes ConversationBufferMemory, ConversationSummaryMemory, VectorStoreRetrieverMemory, and other memory abstractions
- **Why this matters:** Default framework for LLM apps. Memory is a built-in concept, even if many users outgrow it.

#### 14. R2R (SciPhi)
- **GitHub:** SciPhi-AI/R2R | **7,742 stars** | Python
- **What:** Production-ready agentic RAG system with RESTful API, Postgres+Neo4j, automatic knowledge graph construction
- **Why this matters:** Production-focused, combines vector + knowledge graph, gaining momentum.

#### 15. Fast-GraphRAG (CircleMind)
- **GitHub:** circlemind-ai/fast-graphrag | **3,736 stars** | Python
- **What:** RAG using knowledge graphs + PageRank for improved multi-hop reasoning
- **HN signal:** 457 points — massive
- **Why this matters:** PageRank-based approach to RAG is novel and resonated hugely on HN.

#### 16. AnythingLLM
- **GitHub:** Mintplex-Labs/anything-llm | **56,638 stars**
- **What:** All-in-one desktop AI assistant with built-in RAG, embeddings, vector DB, agents. Privacy-first.
- **HN signal:** 368 points
- **Why this matters:** 56K stars makes it one of the biggest players. Desktop-first, privacy-first RAG with agents built in.

---

### Tier 4: Emerging / Niche Contenders

#### 17. Recall — Redis-backed Persistent Context for Claude
- **NPM:** @joseairosa/recall
- **HN signal:** 171 points (Oct 2025)
- **What:** Plugin giving Claude persistent memory via Redis
- **Why this matters:** Shows demand for tool-specific memory plugins.

#### 18. YAMS (Yet Another Memory System)
- **GitHub:** trvon/yams | **366 stars** |
- **What:** Content-addressed storage with dedup, compression, full-text + vector search
- **HN signal:** 165 points
- **Why this matters:** Strong HN reception for a fresh architectural approach.

#### 19. memU — File-Based Agent Memory
- **GitHub:** NevaMind-AI/memU | **13,147 stars**
- **What:** Memory for 24/7 proactive agents (OpenClaw ecosystem). Markdown files as canonical long-term memory.
- **HN signal:** 11 points on Show HN
- **Why this matters:** NEW CONTENDER ALERT — 13K stars is significant. File-based memory approach is pragmatic. Tied to OpenClaw agent ecosystem.

#### 20. Peek AI — Claude Code Memory Plugin
- **URL:** gopeek.ai
- **HN signal:** 18 points (Mar 2026)
- **What:** Fusion search (embeddings + BM25 + time decay) for automatic context injection into Claude Code
- **Why this matters:** Shows Claude Code-specific memory tooling emerging as a sub-niche.

#### 21. ChatIndex (VectifyAI) — Tree Indexing for Long Conversations
- **GitHub:** VectifyAI/ChatIndex | **108 stars**
- **HN signal:** 17 points (Nov 2025)
- **What:** Lossless memory via tree indexing for long conversations
- **Why this matters:** Niche but addresses the specific "long conversation" problem.

#### 22. Modulus — Cross-Repo Knowledge Orchestration
- **URL:** modulus.so
- **HN signal:** 15 points (Mar 2026)
- **What:** Shares memory across agents and repositories
- **Why this matters:** Cross-repo context is a real pain point for coding agents.

#### 23. Hopsule — Persistent Decision Layer
- **URL:** hopsule.com
- **HN signal:** 9 points (Mar 2026)
- **What:** Turns architecture decisions into enforceable agent context
- **Why this matters:** Niche: memory-as-rules rather than memory-as-facts.

#### 24. Rowboat — AI Coworker with Knowledge Graph Memory
- **GitHub:** rowboatlabs/rowboat | **9,316 stars**
- **HN signal:** 205 points (Feb 2026)
- **What:** Local-first AI coworker building living knowledge graphs from work activities
- **Why this matters:** NEW CONTENDER ALERT — 9K+ stars, 205 HN points. Blurs line between memory system and AI assistant.

#### 25. Moltis — AI Assistant with Hybrid Memory
- **URL:** moltis.org
- **HN signal:** 131 points (Feb 2026)
- **What:** Rust-based assistant with hybrid vector + full-text memory, MCP tool server, self-extending skills
- **Why this matters:** Rust performance + hybrid memory + MCP is an interesting convergence.

#### 26. Microsoft Kernel Memory
- **GitHub:** microsoft/kernel-memory | **2,145 stars**
- **What:** Memory solution for users, teams, and applications (research project from Microsoft)
- **Why this matters:** Microsoft backing, integrates with Semantic Kernel ecosystem.

#### 27. Axe — Lightweight CLI Agent Framework with Memory
- **GitHub:** jrswab/axe | **711 stars** | Go
- **HN signal:** 227 points (Mar 2026)
- **What:** 12MB Go binary — agents with persistent memory across CLI runs, MCP support
- **Why this matters:** Unix-philosophy approach to agent memory. 227 HN points is strong.

#### 28. "SQL for AI Memory" approach
- **HN signal:** 136 points — "Everyone's trying vectors and graphs for AI memory. We went back to SQL" (Sep 2025)
- **Why this matters:** Counter-narrative to vector DBs. Some teams finding relational databases more practical for structured agent memory.

---

### Tier 5: Infrastructure Worth Tracking

| Tool | Stars | Note |
|------|-------|------|
| Supabase (pgvector bundled) | 99,542 | Postgres platform, pgvector built-in |
| turbopuffer | Proprietary | Fast serverless vector DB, gaining dev mind-share |
| Praxos | N/A | Context manager → knowledge graphs for agents |
| NERDs | N/A | Entity-centered memory, 90% fewer tokens claim |
| OctantOS | N/A | Agent-native OS with kernel-level memory management |

---

## Key Market Signals

### 1. The Meta is Shifting: Vector → Graph → Hybrid
- Pure vector search is table-stakes now. The frontier is **temporal knowledge graphs** (Graphiti/Zep), **hybrid retrieval** (vector + BM25 + graph), and **structured memory** (SQL, file-based).
- "Everyone's trying vectors and graphs for AI memory. We went back to SQL" (136 HN points) shows real backlash to complexity.

### 2. MCP is Becoming the Memory Protocol
- Mem0's OpenMemory uses MCP. Graphiti integrates via MCP into Cursor. Moltis has MCP tool server. Axe has MCP support.
- Memory-as-MCP-server is emerging as the standard pattern for tool-agnostic memory.

### 3. Claude Code / Cursor-Specific Memory is a Hot Sub-Niche
- Peek AI, Recall, Modulus, CORE — all targeting "give my coding agent persistent memory"
- This is highly relevant for SkillPack's audience.

### 4. User-Owned, Portable Memory is a Strong Narrative
- CORE's "user-owned, shareable" positioning (112 HN points)
- Mem0 browser extension for cross-tool memory
- Digital-twin-playbook for self-hosted knowledge graphs
- Users want memory that moves with them, not locked to one tool.

### 5. File-Based Memory is Pragmatic and Growing
- memU (13K stars) uses Markdown files as canonical memory
- CLAUDE.md / CONVENTIONS.md pattern in coding agents
- Axe persists memory across CLI runs in files
- Simple but effective — avoids infrastructure overhead.

---

## Quotes

> "Mem0 = memory storage + retrieval. Doesn't learn patterns. Letta = self-editing agent memory. Closer, but no implicit learning from behavior." — HN commenter, Feb 2026

> "Everyone's trying vectors and graphs for AI memory. We went back to SQL" — HN post title, 136 points, Sep 2025

> "Reasoning ability decreases as context grows longer... efficient context management [is] critical for maintaining coherent dialogue" — ChatIndex description

> "Agents store intermediary results on persistent canvas rather than holding everything in memory" — Spine Swarm description, 109 HN points

> "Cross-repo context is broken" — Modulus tagline

---

## NEW CONTENDER ALERTS

1. **memU (NevaMind-AI/memU)** — 13,147 stars, file-based memory for 24/7 proactive agents. Not in current catalog. MUST ADD.
2. **Rowboat** — 9,316 stars, 205 HN points. AI coworker with knowledge graph memory. Not in catalog.
3. **AnythingLLM** — 56,638 stars. All-in-one desktop RAG + memory + agents. Not in catalog.
4. **Fast-GraphRAG** — 3,736 stars, 457 HN points. PageRank-based RAG. Not in catalog.
5. **Axe** — 711 stars but 227 HN points. Memory-capable CLI agent framework. Emerging.
6. **Moltis** — 131 HN points. Rust-based hybrid memory assistant. Emerging.
7. **Peek AI** — Claude Code-specific memory plugin. Niche but relevant.

## GAPS in Current Catalog

The memory-systems category currently has **zero rankings**. All of the above need to be populated. Priority ordering for deep-dive:

1. **Mem0** — Market leader, 50K stars
2. **Graphiti/Zep** — Graph memory leader, 24K stars
3. **Letta** — MemGPT heritage, 21K stars
4. **pgvector** — "Just use Postgres" movement, 20K stars
5. **memU** — NEW, 13K stars, pragmatic file-based approach
6. **Chroma** — Default embedded vector DB, 26K stars
7. **Qdrant** — Rust performance story, 29K stars
8. **Milvus** — Enterprise vector DB, 43K stars

Also should cross-list: LlamaIndex, LangChain, R2R, AnythingLLM appear in multiple categories.

---

## Recommended Next Step

1. **Deep-dive Mem0, Graphiti, and Letta** — these are the three "pure memory" leaders and need head-to-head comparison
2. **Deep-dive the vector DB tier** (pgvector vs Qdrant vs Chroma vs Milvus vs Weaviate vs Pinecone) — these are infrastructure, may warrant their own sub-ranking
3. **Deep-dive emerging tools** (memU, Rowboat, Fast-GraphRAG) — validate if they're memory-first or tangential
4. **Rank the category** — enough signal exists to produce an initial ranking with Mem0, Letta, Graphiti as top 3

The memory-systems space is HOT and crowded. There are at least 28 serious contenders spanning dedicated memory layers, vector DBs, RAG frameworks, and tool-specific plugins. The meta is clearly shifting from pure vector toward hybrid (graph + vector + structured) approaches, with MCP emerging as the protocol glue.
