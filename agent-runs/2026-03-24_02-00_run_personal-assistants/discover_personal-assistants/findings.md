# Discover Findings — Personal Assistants

## Scope

Find all serious contenders in the "personal-assistants" problem space — open-source projects, commercial platforms, emerging alternatives, and ecosystem signals. Populate the currently empty ranking for this category.

## Date

2026-03-24

## Inputs

### Search queries used

**HN Algolia:**
- `personal AI assistant` (points>10)
- `ChatGPT vs Claude vs Gemini` (points>10)
- `AI assistant app 2026` (points>10)
- `OpenClaw OR Poe OR Perplexity AI assistant` (points>10)
- `personal assistant AI` (search_by_date, points>5)
- `Show HN AI personal assistant` (points>10)
- `OpenClaw` (points>10)
- `best AI assistant 2026` (points>10)
- `Nanobot AI assistant` (points>5)
- `Apple Intelligence OR Siri AI OR Google Gemini assistant` (points>50)
- `Claude ChatGPT Gemini personal` (search_by_date, points>20)

**GitHub:**
- `personal AI assistant stars:>500 pushed:>2025-12-01` (sort by stars)
- `AI chatbot assistant language:python stars:>1000 pushed:>2025-12-01`
- `ChatGPT alternative open source stars:>2000 pushed:>2025-06-01`
- `openclaw MCP personal assistant stars:>100 pushed:>2025-12-01`
- `AI personal assistant created:>2025-10-01 stars:>200`
- Individual repo checks for 15+ repos

---

## Findings

### Tier 1: Dominant Contenders (must-rank)

#### 1. OpenClaw — 332K stars, MIT license
- **GitHub:** [openclaw/openclaw](https://github.com/openclaw/openclaw) — 332,216 stars, 64,741 forks, 15,141 open issues
- **Created:** 2025-11-24 — surpassed React as most-starred project on GitHub (Mar 2, 2026)
- **What it is:** Self-hostable personal AI assistant, multi-platform ("Any OS, Any Platform, The Lobster Way")
- **HN signal:** Massively discussed — 802pts (Google restricting users), 667pts (rebrand from Moltbot), 518pts ("what Apple Intelligence should have been"), 340pts ("changing my life")
- **Critical concerns:** Major security narrative — "security nightmare" (387pts), "sandboxes won't save you" (112pts), "#1 most downloaded skill was malware" (66pts)
- **Why this matters:** The undisputed #1 in open-source personal assistants by every metric. The security narrative is the main risk to dominance.

#### 2. AnythingLLM — 56.6K stars
- **GitHub:** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — 56,638 stars, 6,121 forks
- **HN signal:** 368pts Show HN launch
- **What it is:** Open-source AI assistant with RAG, multi-model support, local + cloud deployment
- **Why this matters:** Strong #2 in the self-hosted space. More enterprise-oriented than OpenClaw, less controversy.

#### 3. Jan — 41.2K stars
- **GitHub:** [janhq/jan](https://github.com/janhq/jan) — 41,211 stars, 2,619 forks
- **What it is:** Open-source ChatGPT alternative, 100% offline on your computer
- **Why this matters:** The leading offline-first personal assistant. Strong for privacy-conscious users.

#### 4. Nanobot — 35.7K stars (NEW CONTENDER — created Feb 2026)
- **GitHub:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) — 35,726 stars, 6,085 forks, MIT license
- **Created:** 2026-02-01 — **gained 35K+ stars in <2 months**
- **HN signal:** 257pts as "Ultra-Lightweight Alternative to OpenClaw"
- **What it is:** Ultra-lightweight OpenClaw alternative ("The Ultra-Lightweight OpenClaw")
- **Why this matters:** Fastest-growing repo in this space. Directly positions against OpenClaw's complexity and security concerns. Critical contender.

#### 5. Khoj — 33.6K stars
- **GitHub:** [khoj-ai/khoj](https://github.com/khoj-ai/khoj) — 33,589 stars, 2,080 forks
- **HN signal:** 565pts Show HN, 155pts featured
- **What it is:** "AI second brain" — self-hostable, RAG from web/docs, custom agents, deep research, scheduling
- **Why this matters:** The most feature-complete "second brain" assistant. Supports gpt, claude, gemini, llama, qwen, mistral.

### Tier 2: Strong Contenders

#### 6. ZeroClaw — 28.5K stars (NEW — created Feb 2026)
- **GitHub:** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) — 28,531 stars, 3,916 forks
- **Created:** 2026-02-13
- **What it is:** "Fast, small, fully autonomous AI personal assistant infrastructure" written in Rust
- **Why this matters:** Part of the "lightweight OpenClaw alternative" wave. Rust-native, emphasizes performance.

#### 7. Leon AI — 17.1K stars
- **GitHub:** [leon-ai/leon](https://github.com/leon-ai/leon) — 17,081 stars, 1,433 forks
- **What it is:** Open-source personal assistant, long-running project
- **Why this matters:** One of the OG open-source personal assistants. Still actively maintained.

#### 8. CoPaw — 13.1K stars (NEW — created Feb 2026)
- **GitHub:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) — 13,065 stars, 1,647 forks
- **Created:** 2026-02-24
- **What it is:** Personal AI assistant, multi-chat-app support, extensible capabilities, cloud or self-hosted
- **Why this matters:** From the AgentScope ecosystem — brings multi-agent capabilities to the personal assistant space.

#### 9. NoFx — 11.1K stars
- **GitHub:** [NoFxAiOS/nofx](https://github.com/NoFxAiOS/nofx) — 11,143 stars
- **What it is:** Personal AI trading assistant, any market, any model, pay with USDC
- **Why this matters:** Niche but substantial — shows personal assistants expanding into domain-specific verticals (finance/trading).

#### 10. Pipecat — 10.8K stars
- **GitHub:** [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) — 10,830 stars
- **HN signal:** 346pts Show HN
- **What it is:** Open-source framework for voice assistants
- **Why this matters:** The leading voice-first personal assistant framework. Different modality than chat-based assistants.

#### 11. Inbox Zero — 10.3K stars
- **GitHub:** [elie222/inbox-zero](https://github.com/elie222/inbox-zero) — 10,320 stars
- **What it is:** AI personal assistant for email — helps reach inbox zero
- **Why this matters:** Domain-specific personal assistant (email) with strong traction.

### Tier 3: Emerging / Niche

#### 12. NullClaw — 6.7K stars (NEW — created Feb 2026)
- **GitHub:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) — 6,710 stars, 797 forks
- **What it is:** "Fastest, smallest, fully autonomous AI assistant" written in Zig
- **Why this matters:** Part of the ultra-lightweight trend. Zig-native.

#### 13. DeepChat — 5.6K stars
- **GitHub:** [ThinkInAIXYZ/deepchat](https://github.com/ThinkInAIXYZ/deepchat) — 5,617 stars, 642 forks
- **What it is:** "Smart assistant that connects powerful AI to your personal world"
- **Why this matters:** Desktop-focused, connecting AI to personal data.

#### 14. zclaw — 2K stars (NEW — created Feb 2026)
- **GitHub:** [tnm/zclaw](https://github.com/tnm/zclaw) — 2,005 stars
- **HN signal:** 284pts
- **What it is:** Personal AI assistant in 888KB running on ESP32
- **Why this matters:** Hardware/embedded AI assistant — completely different form factor. Strong HN interest.

#### 15. PyGPT — 1.7K stars
- **GitHub:** [szczyglis-dev/py-gpt](https://github.com/szczyglis-dev/py-gpt) — 1,700 stars
- **What it is:** Desktop AI assistant supporting GPT-5, Claude, Gemini, Ollama, DeepSeek, with RAG, vision, voice, agents, tools, MCP, plugins
- **Why this matters:** The most feature-packed desktop assistant. Swiss-army-knife approach.

#### 16. Moltis — 131pts on HN
- **Website:** [moltis.org](https://www.moltis.org)
- **HN signal:** 131pts Show HN
- **What it is:** Rust-based AI assistant (150K lines, ~60MB) with local LLM, sandboxed execution, multi-channel, memory, self-extending skills
- **Why this matters:** Serious engineering effort. The "self-extending skills" angle is unique.

#### 17. Secure-OpenClaw (Composio) — 1.4K stars
- **GitHub:** [ComposioHQ/secure-openclaw](https://github.com/ComposioHQ/secure-openclaw) — 1,360 stars
- **What it is:** OpenClaw on messaging platforms (WhatsApp, Telegram, Signal, iMessage) with tool access, memory, reminders, 500+ integrations
- **Why this matters:** Bridges OpenClaw into messaging-first personal assistant use case.

#### 18. LettaBot — 280 stars (NEW)
- **GitHub:** [letta-ai/lettabot](https://github.com/letta-ai/lettabot) — 280 stars
- **What it is:** Personal AI assistant with memory across Telegram, Slack, WhatsApp, Signal
- **Why this matters:** From Letta AI (memory systems company) — memory-first approach to personal assistants.

### Commercial / Closed-Source Platforms

#### ChatGPT (OpenAI)
- Market leader in consumer AI assistant. GPT-4/5 powered. Web, mobile, desktop.
- Massive user base, brand recognition. The benchmark everyone competes against.

#### Claude (Anthropic)
- Strong challenger. Constitutional AI approach. Web, mobile, API.
- Growing reputation for nuanced, safe responses.

#### Gemini (Google)
- Deep integration with Google ecosystem. Web, mobile, Android.
- HN signal: Google restricting Gemini/AI Pro subscribers using OpenClaw (802pts) suggests platform lock-in tensions.

#### Perplexity
- Search-first AI assistant. "Answer engine" positioning.
- Strong for research/information retrieval use cases.

#### Meta AI
- Llama 4 powered app launched Apr 2025 (98pts HN)
- Free, integrated with Meta ecosystem.

---

## Key Narratives & Meta-Shifts

### 1. The OpenClaw Explosion (Nov 2025 → Mar 2026)
OpenClaw went from 0 to 332K GitHub stars in 4 months, surpassing React. This is the defining event of the personal assistant space in 2026. It triggered:
- A wave of lightweight alternatives (Nanobot, ZeroClaw, NullClaw, zclaw)
- Security backlash ("security nightmare", "sandboxes won't save you", malware in skill registry)
- Hosted solutions (Klaus — 160pts HN)
- Ecosystem fragmentation (DenchClaw, Secure-OpenClaw, hello-claw tutorials)

### 2. The Lightweight Alternative Wave
Nanobot (35.7K stars in <2 months), ZeroClaw (28.5K), NullClaw (6.7K) all emerged as direct responses to OpenClaw's complexity. The market is splitting into "full-featured" vs "minimal" camps.

### 3. Multi-Subscription Fatigue
Multiple HN posts (58pts PrismHarmony, 216pts Mysti, 174pts Onit) address the pain of managing ChatGPT + Claude + Gemini subscriptions. Unified interfaces are emerging.

### 4. Offline/Privacy-First
Jan (41K stars), zclaw (ESP32), NullClaw, and others show strong demand for local-only personal assistants.

### 5. Domain-Specific Assistants
Email (Inbox Zero), Trading (NoFx), Voice (Pipecat) — personal assistants are fragmenting into verticals.

---

## Quotes

> "OpenClaw is what Apple Intelligence should have been" — jakequist.com (518 points, Feb 5, 2026)

> "OpenClaw is a security nightmare dressed up as a daydream" — composio.dev (387 points, Mar 22, 2026)

> "OpenClaw surpasses React to become the most-starred software project on GitHub" — star-history.com (291 points, Mar 2, 2026)

> "I'm lost between ChatGPT vs Claude vs Gemini... which subscriptions to take?" — HN user on PrismHarmony (58 points)

---

## NEW CONTENDER ALERTS

1. **Nanobot** — 35.7K stars in <2 months. Ultra-lightweight OpenClaw alternative. MUST be in ranking.
2. **ZeroClaw** — 28.5K stars since Feb 13. Rust-native personal assistant infra. MUST be in ranking.
3. **CoPaw** — 13K stars since Feb 24. Multi-chat-app assistant from AgentScope. Should be ranked.
4. **NullClaw** — 6.7K stars since Feb 16. Zig-native ultra-small assistant. Watch list.
5. **Moltis** — 131pts HN, Rust-based, self-extending skills. Watch list.
6. **LettaBot** — Memory-first messaging assistant from Letta AI. Watch list.

---

## Catalog Gaps

The current catalog for "personal-assistants" is **completely empty**. All of the above are gaps. Recommended initial ranking:

| Rank | Solution | Stars | Signal |
|------|----------|-------|--------|
| 1 | OpenClaw | 332K | Dominant by every metric, but security concerns |
| 2 | AnythingLLM | 57K | Enterprise-friendly, stable, less controversial |
| 3 | Jan | 41K | Leading offline-first option |
| 4 | Nanobot | 36K | Explosive growth, lightweight alternative |
| 5 | Khoj | 34K | Best "second brain" positioning |
| 6 | ZeroClaw | 29K | Rust-native, fast-growing |
| 7 | Leon AI | 17K | OG open-source assistant |
| 8 | CoPaw | 13K | Multi-chat, AgentScope ecosystem |
| 9 | NoFx | 11K | Domain-specific (trading) |
| 10 | Pipecat | 11K | Voice-first framework |

**Commercial platforms** (ChatGPT, Claude, Gemini, Perplexity, Meta AI) should be tracked separately or as a distinct tier — they aren't open-source "solutions" in the same sense but dominate actual usage.

---

## Head-to-Head Comparisons Found

- **OpenClaw vs Apple Intelligence** — "OpenClaw is what Apple Intelligence should have been" (518pts)
- **OpenClaw vs Nanobot** — Nanobot explicitly positions as "Ultra-Lightweight OpenClaw" (257pts)
- **ChatGPT vs Claude vs Gemini** — Subscription fatigue driving unified interfaces (Onit, PrismHarmony, Mysti)
- **OpenClaw security** — Multiple critical assessments create opening for alternatives

---

## Recommended Next Step

1. **Deep-dive OpenClaw** — security narrative, ecosystem maturity, skill registry quality
2. **Deep-dive Nanobot** — growth trajectory, feature comparison vs OpenClaw, community health
3. **Deep-dive Jan vs Khoj vs AnythingLLM** — the "established open-source" tier comparison
4. **Rank agent** — populate the ranking with the 10+ contenders identified here
5. **Track commercial platforms** — ChatGPT/Claude/Gemini usage data, feature comparisons
