# Rank Findings — Documentation

## Scope

Ranked recommendation for the **documentation** problem space, split into three sub-problems: OSS Docs Frameworks, API Documentation, and Docs SaaS & Automation. Rankings are within each sub-problem, not a fake global score.

## Date

2026-03-24T03:00Z

## Inputs

- `agent-runs/2026-03-24_01-56_run_documentation/discover_documentation/findings.md`
- `agent-runs/2026-03-24_01-56_run_documentation/deep-dive_documentation/findings.md`

---

## Sub-Problem 1: OSS Docs Frameworks

For teams building developer documentation sites from source.

### Ranked List

| Rank | Solution | Verdict | Best For |
|---|---|---|---|
| **#1** | **Fumadocs** | Top pick | Next.js teams wanting full design ownership |
| **#2** | **Starlight** | Strong alternative | Performance-first sites, framework-agnostic teams |
| **#3** | **VitePress** | Ecosystem default | Vue ecosystem projects |
| **#4** | **Docusaurus** | Legacy leader, declining | Large sites needing versioned docs |
| **#5** | **Nextra** | Losing ground | Existing Nextra users; migrate to Fumadocs when possible |
| HM | **Markdoc** | Niche contender | Custom content authoring (Stripe model) |
| HM | **Docsify** | Stale | Zero-build prototypes only; no release since 2023 |
| --- | **MkDocs Material** | **Do not adopt** | Ecosystem collapsed; EOL Nov 2026 |

### Reasoning

#### #1 Fumadocs

**Evidence basis:** 11,280 stars, 202K npm/week (3x YoY growth), **4 open issues** (best maintenance ratio in the entire category), adopted by shadcn/ui, Zod, Prisma. Independent PkgPulse comparison (March 2026) calls it "undisputed gold standard for commercial documentation." Multiple independent Docusaurus→Fumadocs migration reports on HN. Headless architecture gives full design ownership — no CSS framework lock-in. Built-in OpenAPI integration with API playgrounds.

**Weaknesses:** Zero HN community presence (4 pts max). Growth is entirely organic via Next.js word-of-mouth. Locked to Next.js. JS bundle (85kB) larger than Starlight (12kB).

**Why #1 over Starlight:** Fumadocs wins on growth trajectory (3x vs 2x YoY), npm downloads (202K vs 120K), maintenance quality (4 vs 28 open issues), OpenAPI integration (built-in vs plugin), and design flexibility (headless vs themed). Starlight wins raw performance (12kB vs 85kB bundle, 0.8s vs 1.4s LCP) but for most docs sites, both are fast enough — the developer experience and customization story is what determines adoption.

#### #2 Starlight

**Evidence basis:** 8,160 stars, 120K npm/week (2x YoY growth), 28 open issues, 284 contributors. Best-in-class performance: 12kB JS bundle, 0.8s LCP, zero client-side JS for content pages. Backed by Astro core team (confirmed by ascorbic on HN). Glasskube/Distr migration story (58 pts HN) with quantified improvements. Works with Vue, React, Svelte, Solid — not locked to one framework.

**Weaknesses:** No built-in versioned docs (critical gap for large projects). Documentation-only — no marketing pages. Smaller npm footprint than Fumadocs.

**Best narrow subcase:** If your primary concern is page load performance and smallest possible JS footprint, Starlight is unmatched. Also the best choice for teams not committed to React/Next.js.

#### #3 VitePress — NEW

**Evidence basis:** 17,376 stars, 218K npm/week, 394 contributors. The default docs framework for Vue, Vite, Vitest, Pinia, VueUse. Higher raw numbers than both Fumadocs and Starlight by stars and downloads.

**Why #3 not higher:** Vue ecosystem lock-in limits addressable market. Currently in v2 alpha (API instability risk). 487 open issues (highest of any framework). No HN traction since 2024. Growth is stable but not accelerating like Fumadocs or Starlight.

**Best narrow subcase:** If you're in the Vue ecosystem, VitePress is the only answer. Don't overthink it.

#### #4 Docusaurus

**Evidence basis:** 64,234 stars (category leader), 414K npm/week (highest downloads), 457 contributors. The only OSS framework with mature built-in versioned docs — this is the moat.

**Why #4 despite highest numbers:** Momentum is negative. Last release was October 2025 (5 months ago). v4 is 20% complete with no timeline, requiring Node 24+, React 19.2+, TypeScript 6.0+. Multiple public migration stories (Glasskube→Starlight, community→Fumadocs, Unlock Protocol→Fumadocs). 30+ minute builds reported on large sites. 356 open issues and growing. Each public migration gives permission for the next.

**Best narrow subcase:** If you need versioned documentation at scale and can't invest in building versioning yourself, Docusaurus is still the pragmatic choice. No other OSS framework matches this feature.

**Use the platform instead:** If your docs are simple and single-version, any of #1-3 will be a better experience.

#### #5 Nextra

**Evidence basis:** 13,697 stars, 67K npm/week, used by tRPC, SWR, Vercel. Nextra 4 shipped (Jan 2025) with App Router and Turbopack support.

**Why #5:** npm downloads are 3x lower than Fumadocs (67K vs 202K) in the same Next.js niche. 313 open issues vs Fumadocs' 4. Growth is modest while Fumadocs is accelerating. Nextra 4 dropped Pages Router, alienating some users. "Goodbye Nextra" (Web Dev Cody, YouTube) captured the migration sentiment.

**Recommendation:** Existing Nextra users should evaluate migration to Fumadocs. New projects should not choose Nextra over Fumadocs.

#### Honorable Mentions

**Markdoc (Stripe):** 7,935 stars, 122K npm/week. Content authoring framework, not a full docs site generator. Used by Stripe (the gold standard for docs UX). Worth evaluating if you want Stripe-level content modeling with your own site framework. Only 21 contributors — narrow bus factor.

**Docsify:** 31,078 stars (misleadingly high — historical). Zero-build, client-side rendering. No release since June 2023. Niche use: quick internal docs prototypes where SEO doesn't matter. Not recommended for new projects.

#### Do Not Adopt

**MkDocs Material:** Despite impressive surface stats (26,370 stars, 1 open issue), the ecosystem has collapsed. Creator announced maintenance-only mode (Nov 2025) with EOL Nov 2026. MkDocs itself suffered a governance crisis (PyPI package seizure, Mar 2026). Ecosystem fractured into three competing successors (Zensical, ProperDocs, MaterialX). Projects currently on MkDocs Material should plan migration within 12 months.

---

## Sub-Problem 2: API Documentation

For teams generating interactive API reference docs from OpenAPI/Swagger specs.

### Ranked List

| Rank | Solution | Verdict | Best For |
|---|---|---|---|
| **#1** | **Scalar** | Top pick | Modern API docs with built-in client |
| **#2** | **Redocly CLI** | Enterprise workhorse | CI/CD linting, validation, multi-spec support |
| **#3** | **Fern (Postman)** | SDK+docs combo | Teams wanting docs + client SDK generation |
| **#4** | **Swagger UI** | Legacy, declining | Brownfield projects already using it |

### Reasoning

#### #1 Scalar

**Evidence basis:** 14,377 stars, 76K npm/week, 145 open issues, releasing weekly. Microsoft endorsed it as Swagger UI replacement in .NET 9 (strongest platform signal in the category). 225 pts on HN (highest of any API docs tool). Independent analysis shows 65% onboarding improvement over Swagger UI. Built-in API client with env variables and request history. Multi-language code generation. Modern dark-mode UI. Pricing: $12/user/month (best value).

Bruno Pedro's comparison: Scalar uniquely combines multi-language code generation AND in-browser request testing — neither Redoc nor Swagger UI offer both. Speakeasy: "For the price, it's hard to beat."

**Why #1:** Strongest evidence quality of any contender in the entire documentation category. Platform endorsement (Microsoft), independent benchmarks, best value pricing, modern UX, active development.

#### #2 Redocly CLI

**Evidence basis:** 525K npm/week (highest raw installs in the entire documentation category), 1,419 stars. Best OpenAPI coverage: 3.2, 3.1, 3.0, Swagger 2.0, AsyncAPI, Arazzo. "Utilitarian aesthetic" (Speakeasy).

**Why #2 not #1:** Redocly CLI is primarily a linting/validation/bundling tool for CI pipelines, not a consumer-facing docs UI. The consumer-facing Redoc has 437 open issues and last push was Feb 2026 (stale). Split identity: great pipeline tool, stagnating UI. Stars (1,419) dramatically underrepresent actual usage because it's a CI tool.

**Best narrow subcase:** If your primary need is OpenAPI validation, linting, and spec bundling in CI/CD, Redocly CLI is the standard. For the actual docs UI rendering, use Scalar.

#### #3 Fern (Postman)

**Evidence basis:** 3,555 stars, 53K npm/week, 344 open issues. Acquired by Postman (Jan 2026) — team of 25, 200+ customers (Square, Auth0, Adobe, Twilio, ElevenLabs). Generates both docs and SDKs in 9 languages from a single OpenAPI spec.

**Why #3:** The Postman acquisition validates Fern's approach but introduces corporate dependency risk. Fern is unique in combining docs generation with SDK generation — if you need both, this is the answer. But 344 open issues and the fact that its roadmap is now Postman's roadmap create uncertainty.

**Best narrow subcase:** If you need auto-generated client SDKs alongside your API docs, Fern is the only solution that does both from one spec. Consider whether Postman's ecosystem lock-in is acceptable.

#### #4 Swagger UI

**Evidence basis:** 28,704 stars, 323K combined npm/week. Still releasing (v5.32.1, Mar 2026).

**Why #4:** 1,377 open issues (highest in the entire documentation category). Core Swashbuckle contributors left. Microsoft removed it from .NET 9 defaults. UI feels dated. Being actively replaced by Scalar across the industry.

**Recommendation:** Existing Swagger UI users should evaluate Scalar as a drop-in replacement. New projects should not choose Swagger UI.

**Redoc — not ranked:** 25,570 stars but 437 open issues, last push Feb 2026 (6 weeks stale). The npm downloads (593K) are largely from legacy installs. Redocly CLI (#2) is the actively maintained product from the same company. Redoc as a standalone rendering library is effectively superseded by Scalar.

---

## Sub-Problem 3: Docs SaaS & Automation

For teams wanting managed documentation platforms or automated doc updates.

### Ranked List

| Rank | Solution | Verdict | Best For |
|---|---|---|---|
| **#1** | **Mintlify** | Top pick (SaaS) | Developer-focused teams with budget |
| **#2** | **GitBook** | Strong alternative | Mixed technical/non-technical teams |
| **#3** | **Promptless** | Emerging (automation) | Keeping docs in sync with code changes |

### Reasoning

#### #1 Mintlify

**Evidence basis:** $18M Series A (a16z), 4K+ companies, 46K npm/week. Customer list: Anthropic, Vercel, Cloudflare, Zapier. Acquired Helicone (Mar 2026) — pivoting from "docs platform" to "AI knowledge infrastructure." 60% reduction in manual API doc work via OpenAPI auto-generation.

**Weaknesses:** $380/month for 5-person team (expensive). Security incident in 2024 (GitHub token leak, 130 pts HN). Closed source.

**Why #1 in SaaS:** Elite customer list is the strongest social proof in the category. AI-native features (llms.txt, search) are ahead of GitBook. But this is a fundamentally different product than OSS frameworks — you're paying for managed hosting, design, and AI features.

**Use the platform instead:** If your team has engineering capacity and wants full control, use Fumadocs or Starlight instead of paying $380/month.

#### #2 GitBook

**Evidence basis:** 150K+ organizations, notable users (NVIDIA, Zoom). $113/month for 5-person team (cheaper than Mintlify). Real-time multi-user WYSIWYG editing. Open Source Fund for free OSS docs. AI-native features: GitBook Agent, llms.txt/MCP support.

**Best narrow subcase:** If your docs team includes non-developers who need Notion-like editing, GitBook is the answer. Mintlify assumes developer comfort; GitBook doesn't.

#### #3 Promptless

**Evidence basis:** YC W25. 107 pts HN at launch (Feb 2025), 35 pts follow-up (Feb 2026). Tags GitHub PRs/Issues to auto-update customer-facing docs.

**Why ranked despite being early:** Promptless is the only solution addressing the "docs drift" problem — keeping docs in sync with code changes automatically. This is a different lane from frameworks or SaaS platforms. It works with any docs framework. Still very early but unique positioning and YC backing make it credible.

---

## Cross-Problem Solutions

Some solutions rank in multiple sub-problems:

| Solution | OSS Framework Rank | API Docs Rank | Notes |
|---|---|---|---|
| Fumadocs | #1 | — | Built-in OpenAPI integration bridges both, but primarily a framework |
| Scalar | — | #1 | Pure API docs play |
| Mintlify | — | — (SaaS #1) | Covers both general docs and API docs as a managed platform |
| Fern | — | #3 | SDK generation is unique cross-lane value |

---

## What Would Change This Ranking

| Change | Impact |
|---|---|
| **Docusaurus v4 ships with modern DX** | Would reclaim #2-3 in OSS frameworks. Versioned docs moat + modernized tooling would be formidable. Currently at 20% with no timeline — unlikely in 2026. |
| **Fumadocs adds built-in versioned docs** | Would eliminate Docusaurus's last remaining moat. Would solidify #1 with no strong counterargument. |
| **Starlight adds versioned docs** | Would move to #1 contention on performance + versioning combo. |
| **VitePress 2.0 ships stable** | Would solidify #3 and potentially attract non-Vue users. Currently alpha — watch for stable release. |
| **Scalar gets acquired or raises large round** | Would either accelerate (#1 solidified) or introduce risk (corporate dependency, like Fern/Postman). |
| **Redoc gets revived** | 25K stars is a huge latent base. A maintenance revival would challenge Scalar. Currently showing no signs of this. |
| **Promptless gains 10+ public case studies** | Would move from "emerging" to "must-have" in the automation lane. Currently credible but thin on adoption evidence. |
| **AI-native docs becomes table stakes** | Would favor Mintlify and GitBook (already shipping AI features) over OSS frameworks. Would make llms.txt/MCP support a ranking factor. Early signal: "40% of docs traffic is now AI agents" (WriteChoice, 2026). |
| **Zensical (MkDocs Material successor) gains traction** | Would re-enter the Python docs space. 3,700 stars, 168 pts HN. Worth watching but too early to rank. |

---

## Quotes

> "Next.js + Fumadocs: undisputed gold standard for commercial documentation assets"
> — PkgPulse, March 2026

> "Dev server startup cut from 5s to <2.5s... felt more fun to use"
> — Philip Miglinci, Co-Founder Glasskube, on switching to Starlight

> "Docusaurus keeps breaking"
> — julien51, Unlock Protocol

> "For the price, it's hard to beat"
> — Speakeasy, on Scalar

> "The Slow Collapse of MkDocs"
> — Florian Maas, Feb 2026

---

## Recommended Next Step

Rankings are ready for catalog integration. Key catalog changes needed:

1. **ADD VitePress** at #3 in OSS frameworks
2. **PROMOTE Scalar** to #1 in API docs (split from OSS frameworks ranking)
3. **FLAG Docusaurus** as declining — drop to #4 in OSS frameworks
4. **FLAG MkDocs Material** as do-not-adopt / EOL
5. **NOTE Fern's Postman acquisition** — still OSS but corporate dependency
6. **DROP Nextra** to #5 — losing the Next.js race to Fumadocs
7. **ADD Promptless** as emerging docs automation contender
8. **Consider sub-problem split** in the catalog UI — OSS Frameworks, API Docs, and Docs SaaS serve different audiences with different needs
