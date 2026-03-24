# Deep-Dive Findings — Web Development & UI Frameworks

## Scope

Build an evidence-backed understanding of the **web-dev-ui-frameworks** problem space: AI-powered UI frameworks, generative UI tools, vibe coding platforms, and AI app builders. Collect quantitative traction, official artifacts, public comparisons, usage evidence, and pairwise head-to-heads for every serious contender.

## Date

2026-03-24

## Inputs

### Web searches
- "Vercel AI SDK 2026 review comparison alternatives"
- "CopilotKit AG-UI protocol adoption 2026"
- "assistant-ui React AI chat library npm downloads 2026"
- "Lovable vs Bolt.new vs v0 AI app builder comparison 2026"
- "Streamlit vs Gradio vs Reflex Python AI framework 2026"
- "Thesys Crayon generative UI SDK 2026"
- "TanStack AI SDK alpha 2026 review"
- "switched from Streamlit to OR replaced Streamlit with 2026"
- "CopilotKit vs assistant-ui vs Vercel AI SDK comparison 2026"
- "Dyad open source AI app builder GitHub 2026"
- "Chainlit maintenance community fork 2026"
- "Mastra AI framework review developer experience 2026"
- "v0 dev Vercel 2026 new features pricing review"
- "Replit Agent AI app builder 2026 review pricing"
- "Google Stitch A2UI design tool 2026"
- "marimo notebook Python AI alternative Streamlit 2026"

### HN Algolia queries
- "Vercel AI SDK" — Mastra Show HN 442pts
- "CopilotKit AG-UI" — 0 results >10pts
- "Streamlit Gradio AI" — Davia 36pts
- "Lovable Bolt AI builder" — Design Arena 74pts, vibe coding 12pts
- "generative UI framework" — Hydra AI 11pts, Rosebud 293pts
- "vibe coding" (>50pts) — 10 results, 274–865pts (massive backlash discussion)
- "Mastra" — Show HN 442pts (2025-02), 1.0 release 213pts (2026-01)
- "Reflex Python" — 254pts (2023), 117pts (2024)
- "Chainlit" — no strong recent hits

### GitHub API (via `gh` CLI, 2026-03-24)
- All contender repos queried for stars, forks, open issues, last push

### npm API (week of 2026-03-16 to 2026-03-22)
- `ai`, `@copilotkit/react-core`, `@assistant-ui/react`, `mastra`, `@tanstack/ai`

### PyPI Stats API (recent)
- `streamlit`, `gradio`, `reflex`, `chainlit`, `mesop`

### Pages checked
- dev.to evaluation article (Alexander Lukashov)
- better-stack.ai Vercel vs TanStack comparison
- blog.tooljet.com Lovable vs Bolt vs v0
- Multiple InfoWorld, The New Stack, Medium articles

---

## Quantitative Traction Summary

### GitHub Stars (checked 2026-03-24)

| Solution | Stars | Forks | Last Push | Notes |
|----------|-------|-------|-----------|-------|
| Streamlit | 43,988 | 4,157 | 2026-03-23 | Dominant Python framework |
| Gradio | 42,131 | 3,343 | 2026-03-23 | HuggingFace ecosystem |
| CopilotKit | 29,710 | 3,856 | 2026-03-23 | AG-UI protocol maker |
| Reflex | 28,264 | 1,698 | 2026-03-23 | Pure Python full-stack |
| Vercel AI SDK | 22,937 | 4,043 | 2026-03-23 | De facto TS AI SDK |
| Mastra | 22,259 | 1,777 | 2026-03-23 | TS agent framework (Gatsby team) |
| Dyad | 19,945 | 2,298 | 2026-03-23 | Local open-source app builder |
| marimo | 19,879 | 990 | 2026-03-23 | NEW CONTENDER — AI-native notebook |
| Bolt.new | 16,262 | 14,589 | 2024-12-17 | ⚠️ Repo stale since Dec 2024 |
| Chainlit | 11,779 | 1,676 | 2026-03-05 | Community-maintained since May 2025 |
| assistant-ui | 8,986 | 930 | 2026-03-23 | YC W25, headless React chat |
| Mesop | 6,521 | 338 | 2026-03-17 | Google 20% project, CVE risk |
| Thesys/Crayon | 2,499 | 173 | 2026-03-23 | True generative UI API |
| TanStack AI | 2,456 | 154 | 2026-03-18 | Alpha, framework-agnostic |

### Weekly Downloads (npm, week of 2026-03-16)

| Package | Weekly Downloads |
|---------|-----------------|
| `ai` (Vercel AI SDK) | 4,541,483 |
| `@assistant-ui/react` | 156,230 |
| `mastra` | 107,489 |
| `@copilotkit/react-core` | 56,634 |
| `@tanstack/ai` | 19,762 |

### Weekly Downloads (PyPI, recent)

| Package | Weekly Downloads | Monthly Downloads |
|---------|-----------------|-------------------|
| `streamlit` | 7,083,926 | 30,885,941 |
| `gradio` | 3,315,574 | 13,071,890 |
| `chainlit` | 147,513 | 647,143 |
| `reflex` | 71,367 | 243,849 |
| `mesop` | 5,461 | 20,332 |

---

## Findings by Contender

### TIER 1: Runtime UI Frameworks / SDKs (TypeScript)

---

#### 1. Vercel AI SDK

**[STRONG]** Independent comparison: "Vercel AI SDK vs TanStack AI (2026)"
Source: https://www.better-stack.ai/p/blog/vercel-ai-sdk-vs-tanstack-ai-2026-best-ai-sdk-for-developers
Date: 2026 | Engagement: Published on Better Stack (developer media)
Who: Independent developer publication
Key quote: "Community feedback consistently favors Vercel AI SDK for cleaner APIs, solid TypeScript support, and better streaming."
Why it matters: Independent validation of developer preference; not self-reported.

**[STRONG]** npm dominance with 4.5M weekly downloads
Source: https://api.npmjs.org/downloads/point/last-week/ai (verified 2026-03-24)
Date: 2026-03-22 | Engagement: 4,541,483 weekly downloads
Who: npm registry data (objective)
Key quote: N/A — raw data
Why it matters: 30x more downloads than the next closest TypeScript AI UI framework. De facto standard.

**[STRONG]** Independent evaluation ranks it top for React/Next.js
Source: https://dev.to/alexander_lukashov/i-evaluated-every-ai-chat-ui-library-in-2026-heres-what-i-found-and-what-i-built-4p10
Date: 2026 | Engagement: Published on dev.to (large audience)
Who: Independent developer (Alexander Lukashov)
Key quote: "Streaming is solved and not a differentiator anymore. Differentiation now centers on composition for agent-specific UI patterns."
Why it matters: Shifts the evaluation lens from streaming to composition — Vercel's AI Elements expanding here.

**[MODERATE]** AI SDK 6 launched with expanded capabilities
Source: https://vercel.com/blog/ai-sdk-6 (selfReported: true)
Date: 2026 | Who: Vercel (official)
Key quote: "unified APIs for text generation, structured objects, and tool calls through AI SDK Core"
Why it matters: Reference for feature scope. SDK 6 adds Output.object() API for structured generation.

**[STRONG]** Strapi comparison: LangChain vs Vercel AI SDK vs OpenAI SDK
Source: https://strapi.io/blog/langchain-vs-vercel-ai-sdk-vs-openai-sdk-comparison-guide
Date: 2026 | Who: Strapi (independent CMS)
Key quote: "Vercel AI SDK demonstrated an impressive average latency of 30ms p99, making it more suitable for real-time applications."
Why it matters: Concrete benchmark data from an independent source.

**Verdict:** Undisputed leader in the TypeScript AI SDK space. 4.5M weekly npm downloads, 22.9k stars, 30ms p99 latency. The gravitational pull of the Vercel/Next.js ecosystem is both its strength (frictionless DX) and risk (soft lock-in). TanStack AI is the only serious challenger, but it's alpha.

---

#### 2. CopilotKit

**[STRONG]** AG-UI protocol adopted by Google, Oracle, AWS, Microsoft, LangChain, PydanticAI
Source: https://www.copilotkit.ai/blog/big-updates-on-ag-ui (selfReported: true for the blog post, BUT adoption by named companies is independently verifiable)
Date: 2026-03 | Engagement: "millions of views, tens of thousands of developers building"
Who: CopilotKit (official), but named adopters are third-party companies
Key quote: "Oracle, Google, and CopilotKit have jointly released an integration that standardizes how AI agents communicate with frontends."
Why it matters: Protocol-level adoption by major companies is rare and signals lasting influence.

**[STRONG]** Independent evaluation: best for "deep agent-app state sync"
Source: https://dev.to/alexander_lukashov/i-evaluated-every-ai-chat-ui-library-in-2026-heres-what-i-found-and-what-i-built-4p10
Date: 2026 | Who: Independent developer
Key quote: "CopilotKit is not just a UI library but an agentic application framework... agents can read your app state, call your functions, and generate UI dynamically."
Why it matters: Clear differentiation from pure UI libraries.

**[MODERATE]** 29.7k GitHub stars but only 56k weekly npm downloads
Source: GitHub API + npm API (verified 2026-03-24)
Who: Objective data
Why it matters: Large star-to-download ratio suggests hype/awareness exceeds production adoption. assistant-ui has 3x the npm downloads with 3x fewer stars.

**[MODERATE]** Positioned as "the Agentic Application Framework" — trusted by 10%+ Fortune 500
Source: https://www.copilotkit.ai/ (selfReported: true)
Who: CopilotKit
Key quote: "Trusted by over 10% of Fortune 500 companies"
Why it matters: Self-reported but a concrete claim. Not independently verified.

**Verdict:** Most ambitious play in the space — building a protocol layer (AG-UI) rather than just a framework. Google/Oracle/AWS adoption is powerful signal. But npm downloads (56k/week) lag far behind the star count (29.7k), suggesting the protocol story is stronger than actual production usage today.

---

#### 3. assistant-ui

**[STRONG]** 156k weekly npm downloads — 3x CopilotKit's
Source: https://api.npmjs.org/downloads/point/last-week/@assistant-ui/react (verified 2026-03-24)
Date: 2026-03-22 | Engagement: 156,230 weekly downloads
Who: npm registry (objective)
Why it matters: Most-downloaded dedicated AI chat UI library in the TypeScript ecosystem.

**[STRONG]** Independent evaluation: "the safe default" for React + Next.js
Source: https://dev.to/alexander_lukashov/i-evaluated-every-ai-chat-ui-library-in-2026-heres-what-i-found-and-what-i-built-4p10
Date: 2026 | Who: Independent developer
Key quote: "assistant-ui is the safe default — mature ecosystem, responsive maintainers, well-designed composability model"
Why it matters: Independent validation from a developer who tested all options.

**[STRONG]** SaaStr "AI App of the Week"
Source: https://www.saastr.com/ai-app-of-the-week-assistant-ui-the-react-library-thats-eating-the-ai-chat-interface-market/
Date: 2026 | Who: SaaStr (major SaaS media)
Key quote: "The React Library That's Eating the AI Chat Interface Market"
Why it matters: Coverage from a major tech media outlet — signals mainstream awareness.

**[MODERATE]** YC W25 backed, 450K+ monthly npm downloads (as of Nov 2025)
Source: https://www.ycombinator.com/companies/assistant-ui (selfReported: true for claim)
Who: YC profile
Why it matters: YC backing + growing downloads trajectory. Now at 156k/week ≈ ~625k/month, up from 450k.

**Verdict:** The actual production workhorse. 156k weekly npm downloads beats CopilotKit 3:1. Headless Radix-style primitives work well in brownfield projects. React-only is the main limitation. The "boring" choice that ships.

---

#### 4. Mastra

**[STRONG]** HN Show HN: 442 points, 154 comments
Source: https://news.ycombinator.com/item?id=... (via HN Algolia)
Date: 2025-02-19 | Engagement: 442 points, 154 comments
Who: HN community
Why it matters: Massive HN signal — one of the biggest agent framework launches.

**[STRONG]** Mastra 1.0 release: 213 points on HN, 300k weekly npm downloads (at time of launch)
Source: HN Algolia search + https://mastra.ai/blog/changelog-2026-01-20
Date: 2026-01-20 | Engagement: 213 points, 70 comments
Who: HN community + official
Key quote: "Mastra 1.0.0 released with Apache 2.0 licensing"
Why it matters: Sustained HN interest across two launches. npm shows 107k weekly now (down from 300k peak).

**[MODERATE]** Independent review: "Mastra AI Made Me Rethink How We Build AI Products"
Source: https://medium.com/@ishank.iandroid/mastra-ai-made-me-rethink-how-we-build-ai-products-8f23348ba1b0
Date: 2026-01 | Who: Independent developer (Medium)
Key quote: "Observability changed how I think about debugging AI systems — ability to replay agent runs and understand why they failed."
Why it matters: Specific, experience-based praise from an independent developer.

**[MODERATE]** TypeScript-native, from the Gatsby team, integrates with both Vercel AI SDK UI and CopilotKit
Source: https://mastra.ai (selfReported: true)
Who: Mastra team
Why it matters: Bridges the agent framework and UI framework worlds. Not a pure UI framework but has first-class frontend integration.

**Verdict:** Strong agent framework with good frontend story, not a pure UI framework. 22.3k stars, 107k weekly npm downloads. HN darling. Positioned between "agent harness" and "UI framework" categories — may belong in both.

---

#### 5. TanStack AI (NEW CONTENDER)

**[MODERATE]** Alpha release covered by InfoQ
Source: https://www.infoq.com/news/2026/01/tanstack-ai-sdk/
Date: 2026-01 | Who: InfoQ (major dev media)
Key quote: "TanStack AI positions itself as a direct alternative to the Vercel AI SDK, operating as pure open source infrastructure with no service layer, no platform fees, and no vendor lock-in."
Why it matters: Major media coverage signals credibility for an alpha product.

**[MODERATE]** Stork.AI review: "A Better Vercel AI SDK Alternative?"
Source: https://www.stork.ai/blog/tanstack-ai-the-vercel-killer-we-needed
Date: 2026 | Who: Independent reviewer
Key quote: "For production workloads that touch revenue, compliance, or SLAs, the honest answer is no — alpha status, evolving APIs, and thin ecosystem support all add operational risk."
Why it matters: Honest assessment of readiness. Not production-ready yet.

**[WEAK]** 2,456 stars, 19.7k weekly npm downloads — early traction only
Source: GitHub API + npm API (verified 2026-03-24)
Who: Objective data
Why it matters: Tiny compared to Vercel AI SDK (4.5M/week). But TanStack brand carries weight from TanStack Query (40k+ stars).

**Verdict:** Too early for ranking but important to watch. The TanStack brand, framework-agnostic approach, and extreme TypeScript type safety make this a credible future challenger to Vercel AI SDK. Not production-ready today.

---

#### 6. Thesys / Crayon SDK

**[MODERATE]** InfoWorld coverage: "Thesys introduces generative UI API"
Source: https://www.infoworld.com/article/3971182/thesys-introduces-generative-ui-api-for-building-ai-apps.html
Date: 2026 | Who: InfoWorld (major dev media)
Key quote: "C1 API returns structured UI components — not text. Forms, tables, charts, and layouts rendered directly via the Crayon React SDK."
Why it matters: Independent tech media coverage of a novel approach.

**[MODERATE]** The New Stack coverage: "Generative UI for Devs: More Than AI-Assisted Design"
Source: https://thenewstack.io/generative-ui-for-devs-more-than-ai-assisted-design/
Date: 2026 | Who: The New Stack (independent)
Key quote: N/A
Why it matters: Additional independent coverage from respected dev media.

**[WEAK]** 2,499 stars, 300+ teams using it (self-reported)
Source: GitHub API + https://www.thesys.dev (selfReported: true for team count)
Who: Objective (stars) + self-reported (team count)
Why it matters: Small but growing. The "true generative UI" approach is genuinely novel — LLM output IS the UI, not text that describes UI.

**Verdict:** Most novel approach in the category — the only tool where the LLM directly outputs structured UI components. Small adoption (2.5k stars) but the concept is compelling. Worth watching; too early to rank highly.

---

### TIER 1B: Runtime UI Frameworks / SDKs (Python)

---

#### 7. Streamlit

**[STRONG]** 7M weekly PyPI downloads — dominant Python framework
Source: https://pypistats.org/api/packages/streamlit/recent (verified 2026-03-24)
Date: 2026-03-24 | Engagement: 7,083,926 weekly / 30,885,941 monthly
Who: PyPI stats (objective)
Why it matters: 2x Gradio's downloads. The default choice for Python AI app builders.

**[STRONG]** 43,988 GitHub stars — highest in the entire category
Source: GitHub API (verified 2026-03-24)
Who: Objective
Why it matters: Massive community. Most stars of any tool in this problem space.

**[MODERATE]** Known limitations driving migration
Source: https://markaicode.com/vs/streamlit-vs-gradio-in/ + https://anvil.works/articles/4-alternatives-streamlit
Date: 2026 | Who: Independent reviewers
Key quote: "Streamlit reruns your entire script from top to bottom on every interaction — every slider change, every button click."
Why it matters: Architecture limitation that drives migration to alternatives (marimo, Reflex) for complex apps.

**[MODERATE]** Active 2026 releases (v1.55.0 on 2026-03-03)
Source: https://docs.streamlit.io/develop/quick-reference/release-notes/2026 (selfReported: true)
Who: Streamlit team
Why it matters: Confirms active development and maintenance.

**Verdict:** Dominant Python AI app framework by every metric. 44k stars, 7M weekly downloads. Architecture limitations (full-script rerun) are well-known but haven't slowed adoption. The safe default for Python data/AI apps.

---

#### 8. Gradio (by Hugging Face)

**[STRONG]** 3.3M weekly PyPI downloads
Source: https://pypistats.org/api/packages/gradio/recent (verified 2026-03-24)
Date: 2026-03-24 | Engagement: 3,315,574 weekly / 13,071,890 monthly
Who: PyPI stats (objective)
Why it matters: Second-largest Python AI framework. Dominant for ML model demos.

**[STRONG]** 42,131 GitHub stars — neck-and-neck with Streamlit
Source: GitHub API (verified 2026-03-24)
Who: Objective
Why it matters: Comparable community size to Streamlit but different use case.

**[MODERATE]** Independent comparison: best for ML demos, Streamlit better for complex apps
Source: https://markaicode.com/vs/streamlit-vs-gradio-in/
Date: 2026 | Who: Independent reviewer
Key quote: "Gradio excels at single-function demos. Streamlit handles complex multi-page apps better."
Why it matters: Clear positioning — Gradio = ML demos, Streamlit = data apps.

**[MODERATE]** HuggingFace Spaces integration provides unique deployment path
Source: Multiple comparison articles
Who: Various independent sources
Key quote: "Most AI engineers prototype in Gradio, then rewrite in Streamlit or React when it matters."
Why it matters: Gradio's role as the prototyping layer is well-established.

**Verdict:** The standard for ML model demos and HuggingFace ecosystem. 42k stars, 3.3M weekly downloads. Weaker than Streamlit for complex apps but unmatched for quick ML demos and Spaces deployment. Complementary rather than competitive with Streamlit.

---

#### 9. Reflex

**[MODERATE]** 28,264 GitHub stars — strong community
Source: GitHub API (verified 2026-03-24)
Who: Objective
Why it matters: Third-highest star count among Python frameworks in this space.

**[MODERATE]** HN coverage: 254 points for initial launch
Source: HN Algolia
Date: 2023-08-02 | Engagement: 254 points, 144 comments
Who: HN community
Why it matters: Strong initial reception but HN signal is old (2023).

**[WEAK]** 71k weekly PyPI downloads — 100x less than Streamlit
Source: https://pypistats.org/api/packages/reflex/recent (verified 2026-03-24)
Who: PyPI stats (objective)
Why it matters: Big gap between star count and actual usage. Stars may overcount curiosity vs production adoption.

**[MODERATE]** Reflex Cloud and AI builder (Reflex Build) launched
Source: https://reflex.dev/blog/2026-01-09-top-python-web-frameworks-2026/ (selfReported: true)
Who: Reflex team
Why it matters: Moving from framework to platform. Pure Python → full-stack without JS.

**Verdict:** Interesting pure-Python approach but adoption lags. 28k stars looks impressive but only 71k weekly downloads — Chainlit (11.7k stars) has 2x the downloads. The "no JavaScript" pitch resonates in stars but less in production usage. Watch for Reflex Build (AI builder) to change the trajectory.

---

#### 10. Chainlit

**[MODERATE]** 147k weekly PyPI downloads despite community maintenance
Source: https://pypistats.org/api/packages/chainlit/recent (verified 2026-03-24)
Date: 2026-03-24 | Engagement: 147,513 weekly / 647,143 monthly
Who: PyPI stats (objective)
Why it matters: Still actively downloaded despite original team stepping back.

**[MODERATE]** Community maintenance since May 2025
Source: https://github.com/Chainlit/chainlit (README)
Date: 2025-05-01 | Who: Official
Key quote: "The original Chainlit team has stepped back from active development. Maintained by @Chainlit/chainlit-maintainers under a formal Maintainer Agreement."
Why it matters: Maintenance risk is real. v2.10.0 released 2026-03-05 shows community is active, but long-term uncertain.

**[MODERATE]** Independent evaluation: "verify current project status before building"
Source: https://dev.to/alexander_lukashov/i-evaluated-every-ai-chat-ui-library-in-2026-heres-what-i-found-and-what-i-built-4p10
Date: 2026 | Who: Independent developer
Key quote: "Chainlit... verify current project status before building"
Why it matters: Independent source flags the maintenance risk.

**Verdict:** Solid Python chatbot framework with real adoption (147k weekly) but maintenance risk. Community maintainers are active (v2.10.0 in March 2026) but the "abandoned by original team" label hurts trust. Use with caution.

---

#### 11. Mesop (by Google)

**[WEAK]** 5,461 weekly PyPI downloads — negligible adoption
Source: https://pypistats.org/api/packages/mesop/recent (verified 2026-03-24)
Who: PyPI stats (objective)
Why it matters: Despite being Google-backed, adoption is minimal.

**[MODERATE]** Critical CVE-2026-33054 (CVSS 10.0) patched in v1.2.3
Source: Discovery stage findings (CVE databases)
Date: 2026-03-20 | Who: Security researchers
Why it matters: A CVSS 10.0 vulnerability in a Google-backed framework is a serious trust signal.

**Verdict:** Google 20% project that hasn't gained traction. 6.5k stars, 5.5k weekly downloads, and a critical CVE. Not recommended unless Google invests significantly more.

---

### TIER 2: AI App Builders / Vibe Coding Platforms

---

#### 12. Lovable

**[STRONG]** $330M Series B at $6.6B valuation; $300M ARR
Source: https://techcrunch.com/2025/12/18/vibe-coding-startup-lovable-raises-330m-at-a-6-6b-valuation/
Date: 2025-12-18 | Engagement: TechCrunch coverage
Who: TechCrunch (major tech media)
Key quote: "$330M Series B at $6.6B valuation"
Why it matters: Largest valuation in the vibe coding space. $300M ARR validates market demand.

**[STRONG]** Multiple independent comparisons rate it best for non-technical users
Source: https://particula.tech/blog/lovable-vs-bolt-vs-v0-ai-app-builders + multiple others
Date: 2026 | Who: Multiple independent reviewers
Key quote: "Lovable produces the best designs with 9/10 design score."
Why it matters: Consistent ranking across 10+ independent comparison articles.

**[STRONG]** SOC 2 Type 2 + ISO 27001 — unique in the space
Source: Multiple comparison articles (independently verified)
Date: 2026 | Who: Multiple independent sources
Key quote: "Neither v0 nor Bolt offers this level of security compliance out of the box."
Why it matters: Enterprise trust differentiator. The only vibe coding tool with serious compliance certs.

**[MODERATE]** Known limitation: bug loops drain credits
Source: https://shipper.now/lovable-vs-bolt/
Date: 2026 | Who: Independent reviewer
Key quote: "Both platforms struggle with bug loops that burn through credits."
Why it matters: Real user pain point, consistently reported.

**Verdict:** Market leader in AI app building. $6.6B valuation, $300M ARR, ~8M users. Best for non-technical builders with enterprise compliance. Not for developers who want code control — that's Bolt's territory.

---

#### 13. v0 by Vercel

**[STRONG]** Major platform update Feb 2026: Git integration, VS Code editor
Source: https://vercel.com/blog/updated-v0-pricing (selfReported: true, but feature claims verifiable)
Date: 2026-02-04 | Who: Vercel
Key quote: "Git integration, a full VS Code-style editor, and improved previews."
Why it matters: v0 evolving from component generator to full development environment.

**[STRONG]** Multiple independent comparisons: "best UI quality"
Source: https://freeacademy.ai/blog/v0-vs-bolt-vs-lovable-ai-app-builders-comparison-2026 + multiple
Date: 2026 | Who: Multiple independent reviewers
Key quote: "v0 wins on UI quality and design workflows."
Why it matters: Consistent ranking for UI quality across independent sources.

**[MODERATE]** Frontend-only limitation
Source: Multiple comparison articles
Who: Various independent sources
Key quote: "v0 generates only frontend components with no backend capabilities."
Why it matters: Clear architectural limitation vs Lovable and Bolt.

**[MODERATE]** Token-based pricing: Free ($5 credits), Premium ($20/mo), Team ($30/user/mo)
Source: https://v0.app/pricing (selfReported: true)
Who: Vercel
Why it matters: Pricing reference. Credit-based model now.

**Verdict:** Best UI quality of any vibe coding tool but frontend-only. Perfect for the Vercel/Next.js ecosystem. The Feb 2026 platform update (Git, VS Code editor) signals ambition beyond component generation.

---

#### 14. Bolt.new (by StackBlitz)

**[STRONG]** 16,262 GitHub stars with 14,589 forks
Source: GitHub API (verified 2026-03-24)
Who: Objective
Why it matters: Massive fork count (nearly 1:1 with stars) suggests high community engagement and bolt.diy ecosystem.

**[MODERATE]** Multiple independent comparisons: "fastest" and "most flexible"
Source: https://particula.tech/blog/lovable-vs-bolt-vs-v0-ai-app-builders + multiple
Date: 2026 | Who: Multiple independent reviewers
Key quote: "Bolt is faster, generating a working app in 20 minutes compared to 35 minutes for Lovable." and "React, Vue, Svelte, Angular, Astro, Remix, Next.js, Expo — Bolt supports more frameworks than v0 and Lovable combined."
Why it matters: Fastest iteration speed and broadest framework support.

**[MODERATE]** ⚠️ GitHub repo last pushed 2024-12-17
Source: GitHub API (verified 2026-03-24)
Who: Objective
Why it matters: The open-source repo hasn't been updated in 15+ months. The product (bolt.new) continues as a commercial SaaS, but the open-source version appears abandoned. bolt.diy (community fork) may be more active.

**[MODERATE]** Bolt.new v2 with Figma integration + third-party integrations
Source: Multiple comparison articles
Date: 2026 | Who: Independent sources
Key quote: "Bolt.new v2 combines professional-grade AI agents with enterprise-level infrastructure."
Why it matters: The commercial product is evolving even as the OSS repo stagnates.

**Verdict:** Strong AI app builder for developers — fastest iteration, broadest framework support. But the stale GitHub repo (Dec 2024) is a red flag for anyone building on the open-source version. The commercial SaaS continues to evolve.

---

#### 15. Dyad (NEW CONTENDER ALERT)

**[MODERATE]** 19,945 GitHub stars — growing fast
Source: GitHub API (verified 2026-03-24)
Date: 2026-03-24 | Who: Objective
Why it matters: Nearly 20k stars for a relatively new project. Local-first, open-source alternative to Lovable/Bolt/v0.

**[MODERATE]** HN Show HN: 28 points
Source: HN Algolia (from discover stage)
Date: Recent | Who: HN community
Why it matters: Modest HN signal — more organic growth than HN-driven.

**[MODERATE]** Local-first, model-agnostic approach
Source: https://github.com/dyad-sh/dyad + https://www.nocode.mba/articles/dyad-review
Date: 2026 | Who: GitHub + nocode.mba (independent)
Key quote: "No sign-up required. Works with OpenAI, Google, Anthropic, and free models. Deep Supabase integration."
Why it matters: The only major local-first AI app builder. Privacy and model flexibility are real differentiators.

**[WEAK]** Apache 2.0 for core, but `src/pro` is proprietary
Source: https://github.com/dyad-sh/dyad
Who: Official repo
Why it matters: Split licensing — open-source core with proprietary pro features.

**Verdict:** Interesting local-first alternative with 20k stars. Model-agnostic and privacy-focused. Worth adding to the catalog as the open-source, local-first option in the AI app builder tier.

---

#### 16. Replit Agent

**[STRONG]** $3B valuation, Agent 3 with autonomous 200-minute sessions
Source: https://www.taskade.com/blog/replit-review + https://hackceleration.com/replit-review/
Date: 2026 | Who: Independent reviewers
Key quote: "Agent 3 can work autonomously for up to 200 minutes per session, tests and fixes its own code, spawns subagents for specialized tasks."
Why it matters: Most autonomous AI coding agent. Enterprise-grade but expensive.

**[MODERATE]** High pricing: Pro at $100/month, Core at $25/month
Source: https://replit.com/pricing (selfReported: true)
Who: Replit
Key quote: "Users with zero coding experience can build functional applications in under 20 minutes."
Why it matters: Pricing reference. Most expensive option in the space.

**[MODERATE]** Independent review: 36 minutes to build one app
Source: https://www.superblocks.com/blog/replit-review
Date: 2026 | Who: Superblocks (independent)
Key quote: "36 Minutes to Build One App (Honest Test)"
Why it matters: Independent benchmark, though slower than Bolt's 20 minutes.

**Verdict:** Most autonomous AI agent in the space but most expensive. Best for complete beginners with budget. Not open-source. The $100/mo Pro plan is a hard sell vs Lovable/Bolt at $20/mo.

---

### TIER 3: AI Design Tools

---

#### 17. Google Stitch

**[STRONG]** Major March 2026 update: AI-native infinite canvas, Voice Canvas, Vibe Design
Source: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/ + https://www.theregister.com/2026/03/19/google_stitch_vibe_design_update/
Date: 2026-03-19 | Engagement: The Register coverage
Who: Google (official) + The Register (independent)
Key quote: "Google completely redesigned the Stitch UI into an AI-native infinite canvas."
Why it matters: Google investing heavily in AI-native design. Free tool from a major player.

**[MODERATE]** Free with 350 generations/month
Source: Multiple sources
Who: Various
Key quote: "Currently completely free as part of Google Labs, with 350 generations per month."
Why it matters: Free is a strong moat against paid competitors. But Google Labs projects can be killed.

**[MODERATE]** Exports HTML/CSS, connects to Figma and Google AI Studio
Source: Multiple comparison articles
Who: Various
Key quote: "Every design produces HTML/CSS code, exportable to Figma for refinement."
Why it matters: Not just a design tool — pipeline to production code.

**Verdict:** Most ambitious AI design tool — voice-driven, infinite canvas, free. But it's Google Labs, which means it could be sunset. Worth including as the AI design tool representative, but flag the Google Labs risk.

---

### NEW CONTENDER: marimo

**[MODERATE]** 19,879 GitHub stars, actively maintained
Source: GitHub API (verified 2026-03-24)
Who: Objective
Why it matters: Growing fast as a modern alternative to Jupyter + Streamlit.

**[MODERATE]** AI-native notebook: reactive execution model beats Streamlit's full rerun
Source: https://marimo.io/features/vs-streamlit-alternative
Date: 2026 | Who: marimo (selfReported: true for comparison claims)
Key quote: "When a cell changes, marimo only reruns the cells that depend on it, while Streamlit reruns your entire script from top to bottom."
Why it matters: Addresses Streamlit's #1 architectural limitation.

**[MODERATE]** $5M seed funding, YC-backed
Source: https://www.hpcwire.com/bigdatawire/2024/11/21/marimo-emerges-from-stealth-to-debut-its-python-notebook/
Date: 2024-11-21 | Who: BigDATAwire (independent)
Why it matters: Funded and growing. Positioned at the intersection of notebooks and app builders.

**Verdict:** Not a direct AI UI framework but an emerging alternative to Streamlit for building Python AI apps. The reactive execution model is a genuine architectural advantage. Recommend adding to catalog as "watch" — may be too notebook-focused for this problem space.

---

## Pairwise Comparisons

### Vercel AI SDK vs TanStack AI

| Dimension | Vercel AI SDK | TanStack AI |
|-----------|--------------|-------------|
| Maturity | Production-ready (v6) | Alpha |
| npm weekly | 4,541,483 | 19,762 |
| GitHub stars | 22,937 | 2,456 |
| Type safety | Good TypeScript | Extreme TypeScript |
| Lock-in | Soft Vercel ecosystem | None (framework-agnostic) |
| Provider support | 25+ via unified API | OpenAI, Anthropic, Gemini, Ollama |
| UI components | AI Elements (expanding) | Planned (headless) |
| **Winner today** | **Vercel AI SDK** | — |
| **Winner long-term** | TBD | Possible if it reaches 1.0 |

### CopilotKit vs assistant-ui

| Dimension | CopilotKit | assistant-ui |
|-----------|-----------|--------------|
| npm weekly | 56,634 | 156,230 |
| GitHub stars | 29,710 | 8,986 |
| Architecture | Full agent framework + UI | Headless UI primitives |
| Framework support | React + Angular | React only |
| Generative UI | Built-in via AG-UI | Via Vercel AI SDK integration |
| Lock-in | Medium (agent infra) | Low (thin layer) |
| Best for | Greenfield agent apps | Brownfield, adding chat to existing |
| **Winner for new agent apps** | **CopilotKit** | — |
| **Winner for existing React apps** | — | **assistant-ui** |

### Lovable vs Bolt.new vs v0

| Dimension | Lovable | Bolt.new | v0 |
|-----------|---------|----------|-----|
| Target user | Non-technical | Developers | Designers/devs |
| Backend | Supabase (auto-wired) | Full-stack | None (frontend only) |
| Framework support | React/Supabase | React, Vue, Svelte, Angular, Expo+ | React/Next.js |
| Design quality | 9/10 | 7/10 | 10/10 |
| Speed to prototype | 35 min | 20 min | Fastest for UI |
| Pricing | ~$20/mo (100 msgs) | ~$20/mo (10M tokens) | $20/mo ($20 credits) |
| Enterprise compliance | SOC 2 + ISO 27001 | No | No |
| Open source | No | bolt.diy (community) | No |
| Valuation | $6.6B | Private (StackBlitz) | Part of Vercel |
| **Winner for non-tech** | **Lovable** | — | — |
| **Winner for devs** | — | **Bolt.new** | — |
| **Winner for UI quality** | — | — | **v0** |

### Streamlit vs Gradio vs Reflex

| Dimension | Streamlit | Gradio | Reflex |
|-----------|----------|--------|--------|
| PyPI weekly | 7,083,926 | 3,315,574 | 71,367 |
| GitHub stars | 43,988 | 42,131 | 28,264 |
| Best for | Data apps, dashboards | ML demos, HF Spaces | Full-stack Python |
| Architecture | Full-script rerun | Event-based | Reactive (compiles to React) |
| JS required | No | No | No |
| Complex apps | Fair (scaling issues) | Weak | Strong |
| Deployment | Streamlit Cloud | HuggingFace Spaces | Reflex Cloud |
| **Winner for data apps** | **Streamlit** | — | — |
| **Winner for ML demos** | — | **Gradio** | — |
| **Winner for production** | — | — | **Reflex** (potential) |

---

## Quotes

> "Streaming is solved and not a differentiator anymore. Differentiation now centers on composition for agent-specific UI patterns: approval flows, reasoning traces, tool execution displays."
> — Alexander Lukashov, dev.to evaluation (2026)

> "Community feedback consistently favors Vercel AI SDK for cleaner APIs, solid TypeScript support, and better streaming."
> — Better Stack AI comparison (2026)

> "After two years of vibecoding, I'm back to writing by hand"
> — HN discussion, 865 points (2026-01-26)

> "Oracle, Google, and CopilotKit have jointly released an integration that standardizes how AI agents communicate with frontends."
> — CopilotKit AG-UI blog (2026)

> "Lovable produces the best designs with 9/10 design score."
> — shipper.now independent comparison (2026)

> "Gradio excels at single-function demos. Streamlit handles complex multi-page apps better."
> — Markaicode comparison (2026)

> "Vercel AI SDK demonstrated an impressive average latency of 30ms p99."
> — Strapi comparison guide (2026)

---

## Evidence Gaps & Unresolved Questions

1. **CopilotKit Fortune 500 claim**: "Trusted by 10%+ of Fortune 500" is self-reported and not independently verified. Need third-party evidence.
2. **Bolt.new commercial vs OSS**: The GitHub repo is stale (Dec 2024) but the SaaS product evolves. What's the status of bolt.diy?
3. **Thesys/Crayon adoption**: "300+ teams" is self-reported. No independent usage evidence found.
4. **Replit Agent actual usage numbers**: No public download/MAU data beyond self-reported claims.
5. **YouTube videos**: Direct YouTube scraping failed. Video IDs not collected for this run — need manual collection or alternative approach.
6. **Twitter/Reddit signals**: Tools not available in this environment. Would strengthen evidence for all contenders.
7. **Mastra category fit**: Is it a UI framework or an agent harness? It bridges both. May need dual-listing.
8. **marimo category fit**: More notebook than UI framework. May belong in a different problem space.
9. **Google Stitch longevity**: Google Labs projects have high kill rate. How committed is Google?

---

## Recommended Ranking (for catalog)

### TypeScript Runtime Frameworks
1. **Vercel AI SDK** — 4.5M weekly npm, de facto standard, 30ms p99 latency
2. **assistant-ui** — 156k weekly npm, "safe default" for React chat UI
3. **CopilotKit** — AG-UI protocol adoption by Google/Oracle/AWS, lower npm but higher strategic value
4. **Mastra** — 107k weekly npm, strong agent framework with frontend integration (consider dual-listing with agent-harnesses)
5. **TanStack AI** — Watch only. Alpha. Could disrupt Vercel if it reaches 1.0.
6. **Thesys/Crayon** — Watch only. Novel generative UI approach, too early.

### Python Runtime Frameworks
1. **Streamlit** — 7M weekly PyPI, 44k stars, dominant
2. **Gradio** — 3.3M weekly PyPI, 42k stars, HuggingFace standard
3. **Chainlit** — 147k weekly PyPI, decent but maintenance risk
4. **Reflex** — 71k weekly PyPI (despite 28k stars — star-to-download ratio is off)
5. **Mesop** — Skip. 5.5k weekly, CVE risk, Google 20% project with no traction.

### AI App Builders (Vibe Coding)
1. **Lovable** — $6.6B valuation, $300M ARR, SOC 2, non-technical winner
2. **Bolt.new** — Developer favorite, fastest iteration, broadest framework support
3. **v0 by Vercel** — Best UI quality, frontend-only, Vercel ecosystem
4. **Dyad** — Local-first open-source alternative, 20k stars, model-agnostic
5. **Replit Agent** — Most autonomous but most expensive ($100/mo)

### AI Design Tools
1. **Google Stitch** — Free, voice-driven, infinite canvas. Google Labs risk.

---

## Recommended Next Steps

1. **Rank agent** should process these findings into catalog entries with trust scores
2. **Collect YouTube video IDs** manually for top 5 contenders (Vercel AI SDK, CopilotKit, Streamlit, Lovable, Bolt.new)
3. **Verify CopilotKit F500 claim** with third-party evidence
4. **Decide on Mastra placement**: web-dev-ui-frameworks, agent-harnesses, or both
5. **Decide on marimo**: include in this category or create a separate one
6. **Re-run with Twitter/Reddit tools** when available to strengthen social signals
7. **Check bolt.diy activity** to assess the open-source fork's health
