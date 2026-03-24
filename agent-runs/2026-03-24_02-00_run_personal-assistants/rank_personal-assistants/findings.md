# Rank Findings — Personal Assistants

## Scope

Produce a ranked recommendation for the "personal-assistants" problem space — self-hosted, open-source AI personal assistants that users can install and run. Cloud-only platforms (ChatGPT, Claude, Gemini) are market context, not ranked solutions.

## Date

2026-03-24

## Inputs

### Prior runs referenced
- `agent-runs/2026-03-24_02-00_run_personal-assistants/discover_personal-assistants/findings.md`
- `agent-runs/2026-03-24_02-00_run_personal-assistants/deep-dive_personal-assistants/findings.md`

### Evidence basis
- 80+ URLs checked across HN, GitHub, review sites, security advisories, YouTube
- 21 HN Algolia queries, 12 GitHub repos analyzed, 25+ web searches
- Pairwise comparisons sourced from 4+ independent articles per major matchup

---

## Scoping Decisions

1. **Cloud platforms excluded from ranking.** ChatGPT, Claude, Gemini, Perplexity are platforms, not installable solutions. They are the market context these tools compete against.
2. **Pipecat excluded.** It's a voice AI framework for building assistants, not a personal assistant itself. Better fit for an "agent-harnesses" or "voice-ai-frameworks" problem space.
3. **Domain-specific assistants excluded.** NoFx (trading) and Inbox Zero (email) solve narrow verticals. They belong in domain-specific problem spaces, not "general personal assistants."
4. **Leon AI excluded from main ranking.** No 2026-era evidence of traction. Undergoing a major rewrite with unproven results. Listed as honorable mention.

---

## Final Ranked List

### #1 — OpenClaw

**Score rationale:** Dominant by every quantitative metric — 332K stars, ~1M npm downloads/week, multiple releases/week, Fireship coverage (785K views), freeCodeCamp tutorial. The most-starred project on GitHub, surpassing React. Real productivity testimonials (admin time cut from 9hr/wk to 3hr). Google actively responding to its scale (restricting OAuth users, 802pts HN). No other solution comes close on adoption, documentation, or ecosystem.

**Why not higher:** Already #1.

**Why not lower:** Nothing else has this combination of traction, tutorials, integrations, and ecosystem. The security issues are real but haven't meaningfully slowed adoption.

**Critical caveat — security:** Three CVEs in one week (CVSS 8.8), the ClawHavoc malware campaign (341 malicious skills out of 2,857 on ClawHub, 12% malware rate), 42,665 exposed instances found by Censys/Bitsight, Microsoft publishing mitigation guides recommending full isolation. Multi-institutional validation (Koi Security, Microsoft, Cisco, Kaspersky). This is not FUD — it is institutional-grade evidence of real risk. **Recommendation: deploy only in isolated environments. Do not trust the ClawHub marketplace without independent skill auditing.**

**Evidence strength:** STRONG. 6+ high-engagement HN stories, multiple independent reviews, security audits from 4 major vendors, production testimonials with metrics, YouTube tutorials from major channels.

---

### #2 — AnythingLLM

**Score rationale:** The best option for teams and enterprise RAG workflows. 56.6K stars, MIT license, steady release cadence (v1.11.2, Mar 18). Key differentiators no other tool matches: multi-user workspaces, MCP server compatibility, built-in RAG pipeline, embeddable website widget, OS-level desktop overlay. Referenced as production dependency by YC S25 company (Cactus, 123pts HN). Clean security record. Lower excitement ceiling than OpenClaw but higher trust floor.

**Why not higher:** Lacks OpenClaw's adoption scale, ecosystem breadth, and cultural momentum. It orchestrates models rather than running them — requires Ollama/LM Studio/OpenAI as backend.

**Why not lower:** Most mature self-hosted option with enterprise features. MIT license. No security scandals. The team features (multi-user, workspaces) are unique in this space.

**Best for:** Teams needing shared AI workspaces with document RAG. Users who want one interface to multiple LLM providers.

**Evidence strength:** STRONG. Show HN 368pts, YC company citation, independent reviews, active development with detailed changelogs.

---

### #3 — Khoj

**Score rationale:** The most differentiated "second brain" assistant. 33.6K stars, oldest project in category (2021). Unique features no competitor offers: scheduled automations (recurring research delivered via email), deep research mode, custom agents with persona/tools, long-term memory (new in beta.25). Highest HN Show HN score in the category (565pts). Multi-platform: browser, Obsidian, Emacs, desktop, phone, WhatsApp.

**Why not higher:** AGPL-3.0 license limits commercial embedding. Still in 2.0 beta. Smaller community than Jan. Android reliability issues reported. Monthly (not weekly) release cadence.

**Why not lower:** The scheduled automations and deep research features are genuinely unique — no other self-hosted assistant does this. Strong and sustained HN validation (565pts + 155pts). For knowledge workers who want an AI that proactively works in the background, nothing else competes.

**Best for:** Researchers, knowledge workers, Obsidian users who want an AI "second brain" that can run tasks on a schedule.

**Evidence strength:** STRONG. Two high-engagement HN stories (565pts, 155pts), documented unique features, long track record (since 2021).

---

### #4 — Jan

**Score rationale:** The definitive offline-first personal assistant. 41.2K stars, Apache-2.0 license, bi-weekly releases. 100% offline with zero network calls possible. Runs models directly via built-in Cortex engine (unlike AnythingLLM which delegates). OpenAI-compatible local API — works with Continue.dev, Open Interpreter, and any tool expecting the OpenAI API format. Broad hardware support: NVIDIA CUDA, AMD Vulkan, Intel Arc, Apple M-series.

**Why not higher:** Limited HN traction (~50pts). No built-in RAG pipeline (document upload is "experimental"). No agent/tool-calling capabilities. No scheduled tasks. Requires 16GB+ RAM and modern GPU — older hardware gets 30-60s response times. Feature-light compared to Khoj and AnythingLLM.

**Why not lower:** 41K stars with steady organic growth signals real adoption. The privacy-maximalist positioning is a clear, defensible niche. The OpenAI-compatible local API is genuinely useful as infrastructure for other tools.

**Best for:** Privacy-maximalists who want zero telemetry, zero cloud. Developers who need a local OpenAI-compatible API for other tools.

**Evidence strength:** MODERATE. Organic growth to 41K stars, independent reviews (AI Chief), but limited HN validation and no production testimonials with metrics.

---

### #5 — Nanobot

**Score rationale:** The fastest-growing alternative to OpenClaw. 35.7K stars in under 2 months (created Feb 1, 2026). From University of Hong Kong's Data Intelligence Lab. ~4,000 lines of Python vs OpenClaw's ~430,000. MCP-based modular architecture. ~100MB RAM vs OpenClaw's >1GB. 8+ messaging platforms. Strong HN debut (257pts). Counter-narrative is multi-sourced: 4+ independent comparison articles ("Don't Use OpenClaw. Use NanoBot Instead"), DataCamp and Analytics Vidhya tutorials, Andrej Karpathy noticed it.

**Why not higher:** Alpha stage (v0.1.x) — breaking changes expected. No production testimonials found. All evidence is tutorials and comparisons, not usage reports. Two months old. The simplicity that makes it appealing also limits what it can do out of the box.

**Why not lower:** The growth velocity (35K stars in <2 months), educational positioning, and multi-source comparison coverage are real signals. For learners, researchers, and individuals who want to understand how AI assistants work, the 4K-line codebase is a genuine advantage.

**Best for:** Individuals, researchers, learners who want a lightweight, hackable assistant they can fully understand. Anyone burned by OpenClaw's complexity or security issues who wants a minimal alternative.

**Evidence strength:** MODERATE-STRONG. 257pts HN, 4+ independent comparison articles, DataCamp/Analytics Vidhya tutorials. But zero production testimonials and alpha maturity.

---

### #6 — ZeroClaw

**Score rationale:** Impressive performance claims — Rust-native, <5MB RAM, <10ms boot time, runs on $10 hardware, 22+ messaging platforms. 28.5K stars in ~5 weeks (created Feb 13, 2026). Apache-2.0 license. Daily beta releases. Multiple independent tech blogs verified performance claims (BrightCoding, Lightning AI, SparkCo).

**Why not higher:** **Major red flag: 28K stars with only 6 HN points and 2 comments.** This star-to-HN ratio is anomalous compared to every other tool in this space. Possible explanations: (a) audience is primarily Chinese developer community (supports DingTalk, Lark, QQ, WeChat Work), (b) partially inorganic star growth. Until this gap is explained, trust is limited. Very new (5 weeks). No independent security review despite performance claims.

**Why not lower:** The performance claims, if verified, are genuinely compelling — orders of magnitude more efficient than OpenClaw. Multiple independent blogs confirm the specs. The Rust foundation and Apache-2.0 license are strong technical choices.

**Best for:** Edge/IoT deployments where RAM and boot time matter. Chinese enterprise environments (DingTalk, Lark, WeChat Work support). Teams that need Rust-level performance guarantees.

**Evidence strength:** MODERATE with CAUTION. Performance verified by 3 independent blogs. But star authenticity is questionable. AI Agents Directory (5/5, 156 reviews) is low-authority. Monitor.

---

### #7 — CoPaw

**Score rationale:** Alibaba-backed (Tongyi team / AgentScope ecosystem). 13K stars in 28 days (created Feb 24, 2026). Apache-2.0 license. Key differentiator: persistent memory via ReMe that learns over weeks/months, not per-session. Built-in skill security scanner with destructive command detection — directly addressing the OpenClaw security narrative. Multi-channel (Discord, Slack, DingTalk, Feishu, iMessage). Voice transcription via Whisper.

**Why not higher:** 28 days old. No independent reviews beyond launch coverage (MarkTechPost, Open Source For You, SitePoint). No HN presence. The persistent memory and security scanner features are promising but unproven at scale. Corporate backing is a double-edged sword (sustainability vs lock-in/agenda concerns).

**Why not lower:** Alibaba engineering resources mean this is not a weekend project. The security scanner feature directly addresses the #1 concern in the space. Persistent memory across sessions is a genuinely useful feature that few competitors offer (only Khoj has something comparable).

**Best for:** Chinese enterprise environments. Users who want corporate-backed reliability with persistent memory. Anyone who wants OpenClaw-style capabilities with built-in security guardrails.

**Evidence strength:** WEAK-MODERATE. Launch coverage from 3 publications. No independent reviews, no HN signal, no production testimonials. Too new (28 days) for strong evidence.

---

## Honorable Mentions

| Project | Stars | Why mentioned | Why not ranked |
|---------|------:|---------------|----------------|
| **Leon AI** | 17K | OG open-source personal assistant (2019). Undergoing major rewrite. | No 2026 traction evidence. Rewrite is unproven. |
| **NullClaw** | 6.7K | Part of lightweight alternatives wave. Zig-native. | Too small, too new, insufficient evidence. |
| **zclaw** | 2K | ESP32 hardware assistant. 284pts HN. | Different form factor (embedded hardware). Niche. |
| **PyGPT** | 1.7K | Most feature-packed desktop assistant. | Low traction. Swiss-army-knife approach lacks focus. |
| **Moltis** | — | Rust, 150K lines, sandboxed execution, self-extending skills. 131pts HN. | No GitHub star data. Too early. |
| **Secure-OpenClaw** | 1.4K | OpenClaw on messaging with 500+ integrations. | Derivative (depends on OpenClaw). Small traction. |
| **LettaBot** | 280 | Memory-first assistant from Letta AI. | 280 stars. Too early. |

---

## Narrow Subcase Winners

| Use case | Best solution | Why |
|----------|--------------|-----|
| **Maximum features / "I want everything"** | OpenClaw | Nothing else has this breadth of integrations, browser automation, and ecosystem. Accept the security risk or isolate thoroughly. |
| **Team / enterprise RAG** | AnythingLLM | Only self-hosted assistant with multi-user workspaces, MCP support, and embeddable widget. |
| **"Second brain" / background research** | Khoj | Unique: scheduled automations, deep research, Obsidian integration. Nothing else does proactive background work. |
| **100% offline / zero telemetry** | Jan | The only assistant that guarantees zero network calls. Built-in model runner + OpenAI-compatible local API. |
| **Learning / hacking / understanding** | Nanobot | 4K lines of Python. You can read the entire codebase in an afternoon. |
| **Edge / IoT / minimal resources** | ZeroClaw | <5MB RAM, <10ms boot, runs on $10 hardware. (Verify star authenticity before committing.) |
| **Persistent cross-session memory** | Khoj or CoPaw | Khoj has long-term memory (beta.25). CoPaw has ReMe. Both are early but unique. |
| **Chinese enterprise (DingTalk, Lark, WeChat)** | ZeroClaw or CoPaw | Both support Chinese enterprise messaging platforms. CoPaw has Alibaba backing. |

---

## What Would Change This Ranking

1. **OpenClaw security remediation.** If the OpenClaw team ships a verified skill signing system, sandboxed execution by default, and an independent security audit passes — the security caveat shrinks and the gap to #2 widens further.

2. **OpenClaw security escalation.** If a major breach is traced to OpenClaw (data exfiltration via malicious skill at a company), expect enterprise adoption to freeze and alternatives to surge. Nanobot and AnythingLLM are the primary beneficiaries.

3. **Nanobot reaching v1.0.** If Nanobot ships a stable release with production testimonials, it could overtake Jan and challenge Khoj for #3. The 35K-star momentum is real — it needs maturity to match.

4. **ZeroClaw star investigation.** If the star growth is confirmed organic (e.g., Star History shows steady growth correlated with Chinese tech blog coverage), move it up. If stars are inflated, move it down or flag it.

5. **Khoj shipping 2.0 stable.** The 2.0 beta has been running for months. A stable release with resolved Android issues and a non-AGPL option would move Khoj up to challenge AnythingLLM for #2.

6. **CoPaw gaining independent validation.** If independent reviews confirm the persistent memory and security scanner work as advertised, CoPaw could jump to #5-6 within 2-3 months. Alibaba resources give it runway.

7. **A credible "platform-native" answer emerges.** If Apple Intelligence, Google Gemini on-device, or a similar platform-native assistant becomes genuinely good, the case for self-hosted alternatives weakens for non-privacy-conscious users. Currently, none are good enough — "OpenClaw is what Apple Intelligence should have been" (518pts HN) captures the gap.

8. **The lightweight wave consolidates.** Nanobot, ZeroClaw, NullClaw, CoPaw, PicoClaw collectively have 83K+ stars. If one emerges as the clear lightweight winner (likely Nanobot or ZeroClaw), the others will fade. Watch for which one ships production features first.

---

## Quotes

> "OpenClaw is what Apple Intelligence should have been." — Jake Quist, 518 pts on HN (2026-02-05)

> "Admin time dropped from 9hrs/week to 3hrs." — Reorx, "OpenClaw is changing my life" (340 pts HN)

> "OpenClaw is a security nightmare dressed up as a daydream." — Composio, 387 pts on HN (2026-03-22)

> "341 malicious skills found out of 2,857 on ClawHub — 335 traced to a single coordinated campaign dubbed 'ClawHavoc.'" — Koi Security audit

> "Nanobot vs OpenClaw: The Tiny Agent Exposing the Big Framework Problem" — Julian Goldie

> "ZeroClaw: The $10 AI Assistant That Runs on 5MB RAM" — BrightCoding (2026-03-20)

> "It can reduce effort. It cannot remove responsibility." — Consensus from independent OpenClaw reviewers

---

## Recommended Next Step

This ranking is ready for publication on SkillBench. Key editorial decisions to confirm:

1. Should OpenClaw's security caveat be surfaced as a banner/warning on its solution page, or just noted in the write-up?
2. Should Pipecat get its own problem space ("voice-ai-frameworks") or stay as an honorable mention here?
3. Should domain-specific assistants (NoFx, Inbox Zero) get their own problem spaces or be cross-listed?
