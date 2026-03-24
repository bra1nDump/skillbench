# Discover Findings — Web Development & UI Frameworks

## Scope

Find all serious contenders in the **web-dev-ui-frameworks** problem space: AI-powered UI frameworks, generative UI tools, vibe coding platforms, and AI app builders. Identify gaps in the current catalog (which is empty) and surface fresh signals.

## Date

2026-03-24

## Inputs

### Web searches
- "best AI-powered UI frameworks tools 2026"
- "web development AI UI frameworks comparison 2026"
- "Vercel AI SDK vs Streamlit vs Gradio 2026"
- "v0 dev vs Bolt vs Lovable AI code generation 2026"
- "AI web app builder open source alternative 2026"
- "Cursor vs Windsurf vs Replit AI frontend development"
- "CopilotKit assistant-ui AI chat React framework 2026"
- "Reflex Python web framework AI app builder 2026"
- "Dyad open source AI app builder GitHub stars"
- "Google Stitch AI design tool A2UI 2026"
- "vibe coding tools 2026 trends"
- "Mastra AI framework React frontend 2026"
- "Chainlit AI chatbot framework Python 2026"
- "Mesop Google AI UI framework 2026"
- "Thesys Crayon AI generative UI prototyping tool 2026"
- "AG-UI protocol CopilotKit agent UI standard 2026"
- "Anything AI vibe coding platform 2026"
- "Replit Agent AI app builder vibe coding 2026"
- "Lovable dev AI app builder funding valuation 2026"

### HN Algolia queries
- "AI UI framework" — 20 results
- "Vercel AI SDK" — 5 results (incl. Mastra 442pts)
- "Streamlit Gradio" — 1 result (Davia 36pts)
- "AI web builder" (by date) — sparse
- "CopilotKit assistant-ui" — no strong hits
- "vibe coding" (by date) — 125pts "They're vibe-coding spam now"
- "Dyad" — 28pts Show HN

### GitHub API
- Rate-limited; star counts sourced from web search snippets

---

## Findings

### Meta: The "Vibe Coding" Inflection

The category has exploded. 92% of US developers use AI coding tools daily; 41% of code is AI-generated; 87% of Fortune 500 use at least one vibe coding platform. The space splits into **three tiers**:

1. **Runtime UI frameworks** — libraries devs embed in their apps to render AI-driven interfaces
2. **AI app builders / vibe coding platforms** — prompt-to-app tools that generate entire applications
3. **AI design tools** — text-to-UI generators for design workflows

All three belong in the problem space, but rankings should separate them into sub-tiers.

---

### TIER 1: Runtime UI Frameworks for AI Apps

These are libraries developers integrate into their codebases to build AI-powered UIs.

#### 1. Vercel AI SDK
- **GitHub:** vercel/ai — ~22.8k stars
- **What:** TypeScript toolkit for building AI apps. Streaming-first, React Server Components, generative UI support. Works with Next.js, Svelte, Vue, Solid.
- **Recent:** AI SDK 6 launched. Now integrated into GitHub Actions. Powers v0 internally.
- **Why it matters:** De facto standard for TypeScript AI apps. Massive ecosystem.
- **Source:** https://github.com/vercel/ai

#### 2. CopilotKit
- **GitHub:** CopilotKit/CopilotKit — ~28k+ stars (self-reported; web search says 3.8k but their site claims 28k)
- **What:** Full-stack agentic framework for React + Angular. In-app copilots, generative UI, chat interfaces. Makers of the AG-UI protocol.
- **Recent:** AG-UI protocol adopted by Google, Oracle, LangChain, AWS, Microsoft, PydanticAI. v1.50 release.
- **Why it matters:** Emerging as the protocol layer (AG-UI) for agent↔UI communication. Strong enterprise adoption (10%+ Fortune 500).
- **Source:** https://github.com/CopilotKit/CopilotKit | https://www.copilotkit.ai/ag-ui

#### 3. assistant-ui
- **GitHub:** Yonom/assistant-ui
- **What:** Open-source React library for AI chat UIs. YC W25. 50k+ monthly npm downloads. Thin layer — works well in brownfield projects.
- **Recent:** Integrates with Vercel AI SDK's useChat, supports generative UI streaming, thread persistence.
- **Why it matters:** "Best of breed" for adding chat to existing apps without framework lock-in. Battle-tested.
- **Source:** https://dev.to/alexander_lukashov/i-evaluated-every-ai-chat-ui-library-in-2026-heres-what-i-found-and-what-i-built-4p10

#### 4. Streamlit
- **GitHub:** streamlit/streamlit — ~38.7k stars
- **What:** Python framework for shipping data/AI apps. Chat + dashboards. Mature ecosystem.
- **Why it matters:** Dominant in Python/data-science world. Best for apps that combine chat with data visualization.
- **Source:** https://github.com/streamlit/streamlit

#### 5. Gradio (by Hugging Face)
- **GitHub:** gradio-app/gradio — ~35k+ stars (estimated)
- **What:** Python library for ML demos. Image, audio, text interfaces. Instant public links.
- **Why it matters:** Standard for ML model demos and internal prototypes. HuggingFace Spaces integration.
- **Source:** https://github.com/gradio-app/gradio

#### 6. Reflex
- **GitHub:** reflex-dev/reflex — ~20k+ stars
- **What:** Full-stack web apps in pure Python. 60+ built-in components. AI app builder (Reflex Build).
- **Recent:** Reflex Cloud launched. AI builder generates full-stack Python apps from natural language.
- **Why it matters:** Python devs who don't want to touch JS. Growing fast.
- **Source:** https://github.com/reflex-dev/reflex | https://reflex.dev

#### 7. Chainlit
- **GitHub:** Chainlit/chainlit — ~8k+ stars (estimated)
- **What:** Python framework for conversational AI apps. Streaming, file uploads, session management. Integrates with LangGraph, LlamaIndex.
- **Caveat:** Original team stepped back May 2025; maintained by community maintainers under formal agreement.
- **Why it matters:** Popular for LLM chatbot prototyping in Python. But maintenance risk.
- **Source:** https://github.com/Chainlit/chainlit

#### 8. Mesop (by Google)
- **GitHub:** mesop-dev/mesop
- **What:** Python UI framework from Google (20% project). Rapid AI app building. Hot reloading. Gemini integration.
- **Caveat:** Critical CVE-2026-33054 (path traversal, CVSS 10.0) patched in v1.2.3 on 2026-03-20.
- **Why it matters:** Google-backed Python alternative to Streamlit/Gradio. But the critical CVE is concerning.
- **Source:** https://github.com/mesop-dev/mesop

#### 9. Thesys / Crayon SDK
- **GitHub:** thesysdev/openui (Crayon)
- **What:** Generative UI platform. C1 API returns structured UI components (not text). Crayon React SDK renders them. Built on Radix + shadcn/ui.
- **Why it matters:** True runtime generative UI — components generated at request time, not design time. 300+ teams using it.
- **Source:** https://www.thesys.dev | https://github.com/thesysdev/openui

#### 10. Mastra
- **GitHub:** mastra-ai/mastra — HN Show HN hit 442pts
- **What:** TypeScript AI agent framework from the Gatsby team. Integrates with Vercel AI SDK UI and CopilotKit for frontend.
- **Why it matters:** Strong HN signal. TypeScript-native agent framework with first-class frontend integration.
- **Source:** https://github.com/mastra-ai/mastra | https://mastra.ai

---

### TIER 2: AI App Builders / Vibe Coding Platforms

Full-stack prompt-to-app tools. These compete with each other directly.

#### 1. Lovable
- **Funding:** $330M Series B at $6.6B valuation (Dec 2025). $300M ARR as of Jan 2026. ~8M users.
- **What:** Generates complete apps from prompts — frontend, backend, auth, database (Supabase). SOC 2 Type 2 + ISO 27001.
- **Strengths:** Best for non-technical users. Enterprise compliance. Auto-wires Supabase.
- **Why it matters:** Largest vibe coding platform by valuation and revenue. The market leader for non-technical builders.
- **Source:** https://lovable.dev | https://techcrunch.com/2025/12/18/vibe-coding-startup-lovable-raises-330m-at-a-6-6b-valuation/

#### 2. Bolt.new (by StackBlitz)
- **GitHub:** stackblitz/bolt.new — ~15-16k stars
- **What:** AI web dev agent in the browser. Full filesystem access, live code execution, multi-framework support (React, React Native, Expo).
- **Strengths:** Only tool supporting mobile (React Native/Expo). Sees and fixes errors in real-time. Multi-framework.
- **Also:** bolt.diy — open-source fork for self-hosting with any LLM.
- **Source:** https://github.com/stackblitz/bolt.new | https://bolt.new

#### 3. v0 (by Vercel)
- **What:** AI UI generation from prompts. Outputs production-ready React + Tailwind + shadcn/ui components.
- **Strengths:** Best code quality ("senior dev would approve"). Slots into existing Next.js codebases. Frontend-only focus.
- **Weakness:** No backend generation.
- **Why it matters:** Gold standard for React component generation quality.
- **Source:** https://v0.dev

#### 4. Replit Agent
- **What:** Cloud IDE with AI agent that writes, tests, deploys full-stack apps. Agent 4 runs parallel tasks.
- **Strengths:** Zero-setup built-in services (auth, DB, hosting). Imports from Bolt/Lovable/Figma.
- **Pricing concern:** $55 per app generation (expensive vs. competitors).
- **Source:** https://replit.com

#### 5. Dyad
- **GitHub:** dyad-sh/dyad — HN Show HN 28pts
- **What:** Local, open-source AI app builder. Runs on your machine. Apache 2.0. No cloud, no credits.
- **Strengths:** Privacy-first. Offline capable. Free. Open source alternative to Lovable/Bolt/v0.
- **Source:** https://github.com/dyad-sh/dyad | https://www.dyad.sh

#### 6. Anything
- **What:** AI-native app building platform. 500k+ builders. Ranked #1 vibe coding platform in independent review.
- **Strengths:** Cross-platform deploy (iOS, Android, web) from one prompt. Self-healing error engine. Handles 100k+ LOC.
- **Source:** https://www.barchart.com/story/news/537660/anything-named-1-vibe-coding-platform-of-2026-by-independent-expert-review

---

### TIER 3: AI Design-to-UI Tools

#### 1. Google Stitch
- **What:** AI-native design tool. Text/voice-to-UI. Vibe design. Multi-screen prototype generation. Free (350 gen/month standard, 50 experimental).
- **Recent (March 2026):** Major redesign — Voice Canvas, vibe design, dev tool integrations. Exports to Figma, Google AI Studio, Antigravity.
- **Why it matters:** Google backing. Free. Voice-first design. Rapid evolution from quiet Labs project to major platform.
- **Source:** https://stitch.withgoogle.com | https://winbuzzer.com/2026/03/20/google-redesigns-stitch-ai-voice-canvas-developer-integrations-xcxwbn/

#### 2. Framer AI
- **What:** Text-to-website layouts, sections, component systems, interactive prototypes. Combined with Framer's visual editor.
- **Source:** https://www.framer.com

---

### PROTOCOL / STANDARD: AG-UI (Agent-User Interaction Protocol)

- **Created by:** CopilotKit
- **What:** Open protocol for agent↔frontend communication. Bi-directional state sync between agent backends and UIs.
- **Adopted by:** Google, Oracle, LangChain, AWS, Microsoft, PydanticAI, Mastra
- **Relationship:** AG-UI connects agents to frontends; A2UI (Google) specifies generative UI widgets; MCP handles context/tools
- **Why it matters:** Emerging standard. If it wins, CopilotKit becomes the default integration layer.
- **Source:** https://docs.ag-ui.com | https://github.com/ag-ui-protocol/ag-ui

---

## NEW CONTENDER ALERTS

These are NOT in the current catalog deck and should be added:

1. **CopilotKit** — 28k stars, AG-UI protocol, Fortune 500 adoption. Major miss if not included.
2. **assistant-ui** — YC W25, 50k+ npm downloads/month. The "thin layer" chat UI winner.
3. **Thesys/Crayon** — True runtime generative UI (not design-time). C1 API. 300+ teams.
4. **Mastra** — TypeScript agent framework from Gatsby team. 442pts on HN. First-class frontend integration.
5. **Dyad** — Open-source local alternative to Lovable/Bolt/v0. Privacy-first.
6. **Reflex** — Python full-stack with AI builder. 20k+ stars. Growing fast.
7. **Google Stitch** — Free AI design-to-UI with voice. Major March 2026 redesign.
8. **Anything** — #1 ranked vibe coding platform. Cross-platform deploy. 500k builders.
9. **Replit Agent** — Cloud-first with Agent 4 parallel task execution.
10. **AG-UI Protocol** — The emerging standard for agent↔UI. Adopted by Google, Oracle, AWS.
11. **Chainlit** — Python chatbot framework (but maintenance risk flag).
12. **Mesop** — Google Python UI framework (but critical CVE flag).

---

## Quotes

> "CopilotKit is positioned as 'the Agentic Application Framework' and has achieved significant adoption, trusted by over 10% of Fortune 500 companies." — engineering.01cloud.com, Feb 2026

> "92% of US developers now use AI coding tools daily, with 41% of all global code being AI-generated." — secondtalent.com vibe coding statistics, 2026

> "Generative UI operates at runtime, not at design time." — Thesys blog on C1 API architecture

> "Lovable hit $300M in annual recurring revenue (ARR) at the end of January 2026." — getpanto.ai Lovable statistics

> "They're vibe-coding spam now" — HN front page, 125pts, 2026-03-22 (sentiment signal: backlash emerging)

---

## Gaps in Current Catalog

The current catalog lists: "Vercel AI SDK, Streamlit, v0, Bolt, Lovable" — this misses **the majority of the competitive landscape**:

### Critical gaps (must add):
- **CopilotKit** + AG-UI protocol
- **assistant-ui**
- **Gradio** (already implied but not named)
- **Reflex**
- **Replit Agent**

### Important gaps (should add):
- **Thesys/Crayon** (runtime generative UI)
- **Mastra** (TypeScript agent framework w/ UI)
- **Dyad** (open-source local alternative)
- **Google Stitch** (AI design tool)
- **Anything** (vibe coding platform)

### Monitor:
- **Chainlit** (maintenance risk)
- **Mesop** (critical CVE history)
- **Framer AI** (design-focused)

---

## Recommended Next Step

1. **Deep-dive CopilotKit + AG-UI** — This is the most consequential gap. AG-UI is becoming a standard adopted by Google/Oracle/AWS. Needs full deep-dive including protocol analysis.

2. **Deep-dive the "Big 3" vibe coding platforms** — Lovable vs Bolt vs v0 head-to-head with actual test builds. Lovable's $6.6B valuation makes it the 800-lb gorilla.

3. **Deep-dive Thesys/Crayon** — Runtime generative UI is a distinct paradigm that could reshape the category. Needs architecture analysis.

4. **Rank the full tier list** — Enough data to do an initial ranking. Split into sub-tiers: Runtime Frameworks, App Builders, Design Tools.

5. **Monitor HN sentiment** — "They're vibe-coding spam now" (125pts, March 22) signals emerging backlash worth tracking.
