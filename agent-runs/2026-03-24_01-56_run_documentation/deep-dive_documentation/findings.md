# Deep-Dive Findings — Documentation

## Scope

Evidence-backed deep dive into the **documentation** problem space: OSS docs frameworks, API documentation generators, SaaS platforms, documentation automation, and emerging AI-docs tooling. Every claim backed by public artifacts with quality tags. Builds on discover-stage findings with quantitative traction, pairwise comparisons, migration evidence, and new contender detection.

## Date

2026-03-24T02:30Z

## Inputs

### Search queries used

**GitHub API (15 repos):** facebook/docusaurus, fuma-nama/fumadocs, withastro/starlight, vuejs/vitepress, shuding/nextra, docsifyjs/docsify, squidfunk/mkdocs-material, scalar/scalar, swagger-api/swagger-ui, Redocly/redoc, fern-api/fern, Redocly/redocly-cli, markdoc/markdoc, TypeStrong/typedoc, arc53/DocsGPT

**npm API (18 packages):** @docusaurus/core, fumadocs-core, fumadocs-ui, @astrojs/starlight, vitepress, nextra, docsify-cli, docsify, @scalar/api-reference, swagger-ui, swagger-ui-react, @redocly/cli, redoc, @markdoc/markdoc, @mintlify/cli, mintlify, typedoc, fern-api

**HN Algolia (13 queries):** fumadocs, starlight docs, docusaurus (>10pts), vitepress (>10pts), scalar api (>10pts), mintlify (>5pts), docusaurus migrate/switch, documentation framework 2026 (>10pts), docsify (>10pts), mkdocs material (>10pts), DocsGPT (>5pts), promptless, nextra (>5pts)

**Web Search (12 queries):** fumadocs vs docusaurus, starlight vs docusaurus, vitepress vs docusaurus, migrated from docusaurus to, switched from docusaurus, fumadocs vs starlight, scalar vs swagger ui, mintlify vs gitbook, best documentation framework 2026, docusaurus alternatives 2026, vitepress vs fumadocs, redocly vs scalar

**WebFetch:** YouTube search pages for Fumadocs, Starlight, Docusaurus, VitePress, Scalar; Migration blog posts; Comparison articles; Acquisition announcements

### Prior runs referenced

- `agent-runs/2026-03-24_01-56_run_documentation/discover_documentation/findings.md`

---

## Findings

### 1. QUANTITATIVE TRACTION SUMMARY TABLE

#### GitHub Stats (2026-03-24)

| Solution | Stars | Open Issues | Last Push | Contributors | Latest Release | Release Date |
|---|---|---|---|---|---|---|
| Docusaurus | 64,234 | 356 | 2026-03-20 | 457 | v3.9.2 | 2025-10-17 |
| Docsify | 31,078 | 112 | 2026-03-23 | 180 | v4.13.1 | **2023-06-24** |
| Swagger UI | 28,704 | 1,377 | 2026-03-21 | 389 | v5.32.1 | 2026-03-17 |
| MkDocs Material | 26,370 | 1 | 2026-03-22 | 307 | 9.7.6 | 2026-03-19 |
| Redoc | 25,570 | 437 | **2026-02-07** | 209 | v2.5.1 | 2025-09-26 |
| DocsGPT | 17,787 | 66 | 2026-03-23 | 220 | 0.15.0 | 2025-12-05 |
| VitePress | 17,376 | 487 | 2026-03-23 | 394 | v2.0.0-alpha.17 | 2026-03-19 |
| Scalar | 14,377 | 145 | 2026-03-23 | 204 | 2026-03-20 | 2026-03-20 |
| Nextra | 13,697 | 313 | 2026-03-17 | 178 | v4.6.1 | 2025-12-04 |
| Fumadocs | 11,280 | **4** | 2026-03-23 | 159 | fumapress@0.1.17 | 2026-03-23 |
| TypeDoc | 8,383 | 10 | 2026-03-23 | 232 | v0.28.18 | 2026-03-23 |
| Starlight | 8,160 | 28 | 2026-03-23 | 284 | @astrojs/starlight@0.38.2 | 2026-03-20 |
| Markdoc | 7,935 | 29 | 2026-03-11 | 21 | 0.5.6 | 2026-03-10 |
| Fern | 3,555 | 344 | 2026-03-23 | 155 | 4.43.1 | 2026-03-23 |
| Redocly CLI | 1,419 | 181 | 2026-03-23 | 130 | @redocly/cli@2.24.1 | 2026-03-20 |

#### npm Weekly Downloads (week of 2026-03-16)

| Package | Weekly Downloads | Notes |
|---|---|---|
| typedoc | 1,693,044 | Largely a transitive dependency |
| redoc | 592,825 | |
| @redocly/cli | 525,446 | Highest among dedicated docs tools — CI/pipeline driven |
| @docusaurus/core | 414,355 | |
| swagger-ui-react | 259,215 | |
| vitepress | 217,954 | **NEW CONTENDER — not ranked in catalog** |
| fumadocs-core | 202,229 | |
| fumadocs-ui | 189,022 | |
| @markdoc/markdoc | 122,053 | |
| @astrojs/starlight | 120,144 | |
| @scalar/api-reference | 75,983 | |
| nextra | 67,340 | |
| swagger-ui | 63,952 | |
| fern-api | 52,701 | |
| @mintlify/cli | 45,917 | |
| docsify | 33,833 | Client-side rendered, npm doesn't capture CDN usage |
| mintlify | 33,862 | |
| docsify-cli | 28,087 | |

#### HN Peak Engagement (relevant posts only)

| Tool | Peak Points | Comments | Most Recent Signal |
|---|---|---|---|
| DocsGPT | 256 | 98 | 2023-09 (stale) |
| Scalar | 225 | 70 | 2023-10 |
| MkDocs Material | 208 | 77 | 2025-11 (Zensical: 168 pts) |
| Docusaurus | 202 | 140 | 2025-05 (switch article: 58 pts) |
| VitePress | 122 | 52 | 2024-09 (12 pts) |
| Mintlify | 149 | 55 | 2025-09 (7 pts) |
| Promptless | 107 | 61 | 2026-02 (35 pts) |
| Starlight | 58 | 28 | 2025-05 |
| Fumadocs | 4 | 0 | 2026-02 (1 pt) |
| Nextra | 6 | 4 | 2022-10 |

---

### 2. OSS DOCS FRAMEWORKS — EVIDENCE BY CONTENDER

#### A. Fumadocs (#1 in current catalog)

**Quantitative traction:** 11,280 stars, 202K npm/week, 4 open issues, 159 contributors. Released fumapress@0.1.17 on 2026-03-23. 3x YoY download growth.

**[STRONG] PkgPulse 3-way comparison (March 2026)**
Source: https://www.pkgpulse.com/blog/fumadocs-vs-nextra-v4-vs-starlight-documentation-sites-2026
Date: 2026-03 | Engagement: Third-party comparison site
Who: PkgPulse team (independent)
Key data: Fumadocs JS bundle ~85kB, LCP ~1.4s, ~150K monthly downloads, 3x YoY growth. Wins on customization and OpenAPI integration (headless architecture). Recommended for Next.js embedded docs.
Why it matters: Independent quantitative comparison confirming Fumadocs as the fastest-growing React docs framework.

**[STRONG] HN Docusaurus→Starlight thread — Fumadocs migration mentions**
Source: https://news.ycombinator.com/item?id=44074626
Date: 2025-05-23 | Engagement: 58 points, 28 comments
Who: suryao, michaelermer (community developers)
Key quote: Both independently reported migrating from Docusaurus to Fumadocs, citing OpenAPI imports, API playgrounds, and full customizability.
Why it matters: Real migration evidence from multiple independent users in a public thread.

**[MODERATE] Unlock Protocol issue #15734 — proposed Docusaurus→Fumadocs migration**
Source: https://github.com/unlock-protocol/unlock/issues/15734
Date: 2025 | Who: julien51 (Unlock Protocol)
Key quote: "Docusaurus keeps breaking"
Why it matters: Additional migration signal from a known project, though migration status unclear.

**[STRONG] Notable adopters:** shadcn/ui, Zod, Prisma, Vercel tools (per PkgPulse, third-party verified)

**[WEAK — included as context only] HN traction is near-zero:** Peak post 4 points. Fumadocs MCP server post got 1 point. This is a significant gap — the tool is growing fast by npm metrics but has essentially no HN community presence.

**YouTube videos for Fumadocs:**
- youtubeId: "7HUmDAgXI2E", title: "Goodbye Nextra", channel: "Web Dev Cody", date: "~2024-05"

**Assessment:** Fumadocs is the maintenance quality leader (4 open issues for 11K stars is extraordinary) and the fastest-growing React framework. Its weakness is zero HN/community visibility — growth is entirely organic via Next.js ecosystem word-of-mouth. The headless architecture gives full design ownership, which is why projects like shadcn/ui adopted it.

---

#### B. Starlight (#2 in current catalog)

**Quantitative traction:** 8,160 stars, 120K npm/week, 28 open issues, 284 contributors. Released @astrojs/starlight@0.38.2 on 2026-03-20.

**[STRONG] Glasskube/Distr migration — Docusaurus to Starlight**
Source: https://distr.sh/blog/distr-docs/
Date: 2025-05 | Engagement: 58 points, 28 comments on HN
Who: Philip Miglinci, Co-Founder at Glasskube
Key quote: Dev server startup cut from 5s to <2.5s; Tailwind integration (Docusaurus locked to Infima CSS); single upstream dependency (Astro) vs React compatibility churn; "felt more fun to use"
Why it matters: Detailed, quantified migration story from a real company with public HN validation.

**[STRONG] PkgPulse comparison — performance data**
Source: https://www.pkgpulse.com/blog/fumadocs-vs-nextra-v4-vs-starlight-documentation-sites-2026
Date: 2026-03 | Who: PkgPulse (independent)
Key data: Starlight JS bundle ~12kB (vs Fumadocs 85kB, Nextra 60kB), LCP ~0.8s (best in class). Zero client-side JS for content pages by default. Best i18n with locale detection + RTL support. 2x YoY download growth.
Why it matters: Starlight wins raw performance benchmarks among all OSS docs frameworks.

**[MODERATE] LogRocket comparison**
Source: https://blog.logrocket.com/starlight-vs-docusaurus-building-documentation/
Who: Kapeel Kokane
Key quote: Both strong; Docusaurus more mature with better math/diagram support; Starlight offers framework flexibility (Vue, Svelte, Solid, React). Lighthouse scores nearly identical (both >90).
Why it matters: Balanced comparison from a known developer publication.

**[MODERATE] Astro core team confirmation**
Source: HN comment by ascorbic (Astro core team) in https://news.ycombinator.com/item?id=44074626
Key quote: Starlight is "a core part" of Astro, funded via Open Collective.
Why it matters: Confirms Starlight has strong organizational backing, not a side project.

**Critical gap identified by community:** No built-in versioned docs support. lelandbatey (HN) provided a detailed Redis example showing versioned docs are critical for many projects. willwade noted Starlight is "only built for documentation, not marketing pages."

**YouTube videos for Starlight:**
- youtubeId: "5u0Ds7wzUeI", title: "Starlight by Astro", channel: "Astro", date: "~2023"
- youtubeId: "j8K-ESJF814", title: "One year of Starlight", channel: "Astro", date: "~2024"
- youtubeId: "5pq80drDrNs", title: "I Recreated Shadcn's Docs In 30 Minutes", channel: "Web Dev Simplified", date: "~2024"

**Assessment:** Starlight is the DX and performance leader. Zero client JS, 12kB bundle, 0.8s LCP. The Astro backing gives it stability. Critical gap: no versioned docs, documentation-only (no marketing pages). Growing fast (2x YoY) but still behind Fumadocs on npm downloads.

---

#### C. Docusaurus (#3 in current catalog)

**Quantitative traction:** 64,234 stars (category leader), 414K npm/week, 356 open issues, 457 contributors. Last release v3.9.2 on **2025-10-17** — 5 months ago.

**[STRONG] Docusaurus v4 stalled — evidence**
Source: https://github.com/facebook/docusaurus/issues/11719 + milestone /21
Date: 2026-02-06 (umbrella issue opened) | 20% complete (6/30 issues)
Who: Meta/Facebook team
Key facts: Requires Node 24+, React 19.2+, TypeScript 6.0+, Rspack v2.0+. No timeline announced. Last stable release was October 2025.
Why it matters: v4 is real but distant. Docusaurus is effectively in a feature freeze for v3.

**[STRONG] Migration momentum away from Docusaurus**
Multiple independent signals:
1. Glasskube/Distr → Starlight (58 pts HN, May 2025) — build performance, DX
2. suryao, michaelermer → Fumadocs (HN comments, May 2025) — OpenAPI, customization
3. Unlock Protocol → Fumadocs proposed (GitHub issue) — reliability
4. Continue.dev → Mintlify (blog, returned 404) — AI features
5. rxliuli (HN) reported 30+ minute builds on large Docusaurus sites, GitHub Actions timeouts
6. Featurebase article estimates $500-2,000/month maintenance cost for Docusaurus hosting/CI/plugins

**[STRONG] Still the only battle-tested versioned docs option**
Multiple comparison articles confirm Docusaurus is the only OSS framework with mature, built-in doc versioning. This is the moat keeping large projects from migrating.

**[MODERATE] "Docusaurus Alternatives 2026" search signals**
Source: https://www.featurebase.app/blog/docusaurus-alternatives
Key insight: The existence of multiple "Docusaurus alternatives" articles signals an active migration market.

**YouTube videos for Docusaurus:**
- youtubeId: "QcGJsf6mgZE", title: "F8 2019: Using Docusaurus to Create Open Source Websites", channel: "Meta Developers", date: "2019-05"

**Assessment:** Docusaurus coasts on ecosystem gravity (64K stars, versioned docs moat). But it's losing momentum: no release in 5 months, v4 at 20% with no date, and public migration stories are multiplying. Each migration gives permission for the next. Still the safe default for versioned docs at scale.

---

#### D. VitePress — NEW CONTENDER ALERT

**Quantitative traction:** 17,376 stars, 217,954 npm/week, 487 open issues, 394 contributors. Currently on v2.0.0-alpha.17 (released 2026-03-19).

**[STRONG] Usage evidence — Vue ecosystem default**
VitePress is the documentation framework for Vue, Vite, Vitest, Pinia, VueUse, and most major Vue ecosystem projects. This gives it a massive installed base that pure npm numbers only partially capture.

**[STRONG] npm downloads exceed Fumadocs and Starlight**
At 218K/week, VitePress has higher npm downloads than both Fumadocs (202K) and Starlight (120K). By this metric, it's the #2 OSS docs framework after Docusaurus.

**[MODERATE] HN traction**
Source: https://news.ycombinator.com/item?id=39780284
Date: 2024-03-21 | Engagement: 122 points, 52 comments
Who: Community (VitePress 1.0 launch)
Why it matters: Solid community reception, though no recent 2025-2026 posts.

**[MODERATE] Currently in v2 alpha — risk factor**
v2.0.0-alpha.17 suggests active development toward a major version, but alpha status means the API may change. The high open issue count (487) also signals accumulated technical debt.

**YouTube videos for VitePress:**
- youtubeId: "y9jKmNPmfPE", title: "VitePress Tutorial with Vue.js 3", channel: "Program With Erik", date: "~2020"

**Assessment:** VitePress is a significant catalog gap. It has more stars and npm downloads than most ranked contenders. The Vue ecosystem lock-in limits its addressable market (React teams won't adopt it), but for Vue teams it's the undisputed default. Should be ranked #3-4 in OSS frameworks. Risk: v2 alpha status and 487 open issues.

---

#### E. Nextra (#6 in current catalog — reassessment needed)

**Quantitative traction:** 13,697 stars, 67K npm/week, 313 open issues, 178 contributors. Last release nextra-theme-docs@4.6.1 (2025-12-04).

**[MODERATE] Nextra 4 shipped (Jan 2025)**
Source: https://the-guild.dev/blog/nextra-4
Key changes: Exclusively Next.js App Router (Pages Router dropped), Turbopack support, Rust-powered Pagefind search. Maintained by Dimitri Postolov (The Guild).

**[WEAK — context only] HN traction essentially zero.** Peak: 6 points. No community presence.

**[MODERATE] PkgPulse comparison data**
JS bundle ~60kB, LCP ~1.2s. Battle-tested (used by tRPC, SWR, Vercel). But growth is modest compared to Fumadocs (3x) and Starlight (2x).

**Assessment:** Nextra is stable and used by important projects, but it's losing ground to Fumadocs in the Next.js docs space. 67K npm/week vs Fumadocs 202K is a clear gap. The 313 open issues vs Fumadocs' 4 tells the maintenance story. Still deserves a ranking but dropping.

---

#### F. Docsify — NEW CONTENDER ALERT

**Quantitative traction:** 31,078 stars (#2 in category by stars), 112 open issues, 180 contributors. **Last release: 2023-06-24** — nearly 3 years ago.

**[STRONG] Star count is massive** — more stars than MkDocs Material, Redoc, VitePress, or Scalar. This reflects historical popularity.

**[WEAK — critical flaw] Release stagnation.** No release in nearly 3 years. The npm CLI downloads (28K/week) are modest and the client-side rendering approach means CDN usage isn't captured by npm.

**Assessment:** Docsify has a distinct zero-build, client-side rendering niche, but the 3-year release gap is a serious concern. Deserves an honorable mention but not a top-10 ranking. Historical star count overstates current relevance.

---

#### G. MkDocs Material — ECOSYSTEM COLLAPSE IN PROGRESS

**Quantitative traction:** 26,370 stars, 1 open issue, 307 contributors. Still receiving releases (9.7.6 on 2026-03-19).

**[STRONG] Maintenance mode announcement (Nov 2025)**
Source: https://squidfunk.github.io/mkdocs-material/blog/2026/02/18/mkdocs-2.0/
Who: @squidfunk (creator)
Key facts: Material for MkDocs will receive only critical bug fixes and security updates until November 2026, then EOL. Team shifted to Zensical (successor, 3,700+ stars).

**[STRONG] MkDocs governance crisis (Jan-Mar 2026)**
Source: https://fpgmaas.com/blog/collapse-of-mkdocs/
Date: Jan-Mar 2026 | Who: Multiple maintainers
Key events:
- Jan 2026: Original MkDocs creator announced v2 — ground-up rewrite removing plugin system, YAML→TOML, no migration path
- Mar 9, 2026: @oprypin seized control of MkDocs PyPI package, removing all other maintainers to prevent v2 release
- Mar 10, 2026: Material pinned `mkdocs<2` to protect users
- Mar 15, 2026: @oprypin launched ProperDocs (MkDocs 1.x fork); @jaywhj launched MaterialX (Material fork)
Why it matters: The MkDocs ecosystem has fractured into three successor projects (Zensical, ProperDocs, MaterialX). Projects depending on MkDocs + Material face a forced migration within 12 months.

**[STRONG] HN validation — Zensical**
Source: https://news.ycombinator.com/item?id=45865189
Date: 2025-11-09 | Engagement: 168 points, 62 comments
Why it matters: Strong community interest in the successor project confirms the ecosystem is transitioning, not dying.

**Assessment:** MkDocs Material is effectively end-of-life despite impressive stats (1 open issue!). The ecosystem collapse is the most dramatic story in the documentation category. Not rankable as a forward-looking recommendation, but important context. Zensical is the designated successor — worth watching.

---

### 3. API DOCS TOOLS — EVIDENCE BY CONTENDER

#### H. Scalar (#4 in current catalog — should be higher for API docs)

**Quantitative traction:** 14,377 stars, 75,983 npm/week, 145 open issues, 204 contributors. Active releases (2026-03-20).

**[STRONG] Microsoft .NET 9 endorsement**
Source: https://codewithmukesh.com/blog/dotnet-swagger-alternatives-openapi/
Date: ~2024-10 | Who: Mukesh Murugan (known .NET educator)
Key facts: Starting .NET 9, Microsoft removed Swashbuckle/Swagger from default Web API templates. Swashbuckle faced maintenance crisis (core contributors left). Scalar became the recommended alternative UI.
Why it matters: A platform endorsement from Microsoft is the strongest possible signal for API docs tools.

**[STRONG] HN launch — 225 points**
Source: https://news.ycombinator.com/item?id=37871577
Date: 2023-10-13 | Engagement: 225 points, 70 comments
Key quote: "Generate interactive API documentations from Swagger files"
Why it matters: Highest engagement of any API docs tool on HN.

**[STRONG] TheDataGuy comprehensive analysis**
Source: https://thedataguy.pro/blog/2025/08/swagger-vs-scalar-api-documentation/
Date: 2025-08 | Who: Muhammad Afzaal (independent analyst)
Key claims: Scalar claims 65% improvement in onboarding time, 4x higher engagement, 99.99% uptime. Modern UI (dark mode default), built-in API client with env variables and request history, better performance on large OpenAPI docs. Swagger UI "can feel dated and cluttered."
Why it matters: Independent analysis with specific metrics (though some claims are self-reported by Scalar).

**[STRONG] APIs You Won't Hate and Speakeasy comparisons**
Sources: https://apisyouwonthate.com/blog/top-5-best-api-docs-tools/ | https://www.speakeasy.com/blog/choosing-a-docs-vendor
Key finding: Scalar positioned as best value — $12/user/month vs Mintlify $150/month. Speakeasy (disclosure: has reseller relationship) calls it "hard to beat for the price."

**[STRONG] Bruno Pedro's 3-way open-source comparison**
Source: https://apichangelog.substack.com/p/three-open-source-api-reference-alternatives
Who: Bruno Pedro (API Changelog newsletter)
Key finding: Scalar uniquely combines multi-language code generation AND in-browser request testing. Redoc lacks code examples and request-making. Swagger UI lacks multi-language snippets.

**YouTube videos for Scalar:**
- youtubeId: "8xEkVmqlr4I", title: "Swagger is Going Away in .NET 9!", channel: "Nick Chapsas", date: "~2024-10"
- youtubeId: "8yI4gD1HruY", title: "Swagger is Gone in .NET 9! Replace It With This.", channel: "Unknown .NET creator", date: "~2024"

**Assessment:** Scalar is the modern API docs winner. Microsoft endorsement, best value pricing, modern UX, built-in API client. It's eating Swagger UI's lunch from below and competing with Redocly/Mintlify from above. Evidence quality is the strongest of any contender in this deep dive.

---

#### I. Swagger UI (#8 in current catalog — declining)

**Quantitative traction:** 28,704 stars, 323K combined npm/week (swagger-ui + swagger-ui-react), 1,377 open issues, 389 contributors. Still releasing (v5.32.1 on 2026-03-17).

**[STRONG] Maintenance crisis evidence**
Source: https://codewithmukesh.com/blog/dotnet-swagger-alternatives-openapi/
Key facts: Swashbuckle core contributors left. Microsoft removed it from .NET 9 defaults. 1,377 open issues (highest in the entire category).

**Assessment:** Swagger UI is the documentation equivalent of jQuery — massive installed base, declining mindshare. Still used everywhere but actively being replaced. The 1,377 open issues vs Scalar's 145 tells the story.

---

#### J. Redocly (#6 in current catalog)

**Quantitative traction:** @redocly/cli at 525,446 npm/week (highest in category). Redoc at 592,825 npm/week. But Redoc has 437 open issues and last push was 2026-02-07 (stale). Redocly CLI: 1,419 stars, 181 open issues.

**[MODERATE] Speakeasy comparison**
Source: https://www.speakeasy.com/blog/choosing-a-docs-vendor
Key finding: Best OpenAPI coverage (3.2, 3.1, 3.0, Swagger 2.0, AsyncAPI, Arazzo), "utilitarian aesthetic." Strongest for enterprise CI/linting pipelines.

**Assessment:** Redocly has stealth dominance via npm (CI/pipeline tool) but its consumer-facing Redoc is stagnating (437 issues, stale push date). The CLI is a linting/validation tool more than a docs generator. This creates a split identity that complicates ranking.

---

#### K. Fern (#4 in current catalog → acquired by Postman)

**Quantitative traction:** 3,555 stars, 344 open issues, 52,701 npm/week for fern-api. Actively releasing (4.43.1 on 2026-03-23).

**[STRONG] Postman acquisition (Jan 8, 2026)**
Sources: https://buildwithfern.com/post/postman-acquires-fern | https://www.businesswire.com/news/home/20260107174767/en/
Date: 2026-01-08 | Who: Postman (official press release)
Key facts: Team of 25, 200+ customers (Square, Auth0, Adobe, Twilio, ElevenLabs). Both SDK generator and docs remain open source. Entire team joined Postman. Access to 500K+ company customer base (98% of Fortune 500).
Why it matters: Consolidation play — Postman now covers API design, testing, documentation, and SDK generation end-to-end. Fern's OSS status is maintained for now but strategic direction is Postman's.

**Assessment:** Fern is now a Postman product. Still OSS, still active, but its roadmap is now Postman's roadmap. The acquisition validates Fern's approach but introduces corporate dependency risk. Ranking should note this.

---

### 4. SAAS & AUTOMATION — EVIDENCE BY CONTENDER

#### L. Mintlify (#5 in current catalog)

**Quantitative traction:** Closed source (no GitHub stars). 45,917 npm/week (@mintlify/cli). $18M Series A led by a16z.

**[STRONG] Helicone acquisition (Mar 3, 2026)**
Sources: https://www.mintlify.com/blog/mintlify-acquires-helicone | https://www.helicone.ai/blog/joining-mintlify
Date: 2026-03-03 | Who: Both companies (official blogs)
Key facts: Helicone was open-source LLM observability platform (16,000 orgs). Goes into maintenance mode. Mintlify pivoting from "docs platform" to "AI knowledge infrastructure."
Why it matters: Mintlify is building a docs+AI platform play, not just a docs SaaS. This is a fundamentally different positioning than any OSS framework.

**[STRONG] Ferndesk GitBook vs Mintlify comparison**
Source: https://ferndesk.com/blog/gitbook-vs-mintlify
Who: Wilson Wilson, Founder of Ferndesk (independent)
Key data: Mintlify = 4K+ companies, API-first, auto-generates from OpenAPI (60% reduction in manual API doc work). Notable users: Anthropic, Vercel, Cloudflare, Zapier. Pricing: ~$380/month for 5-person team.
Why it matters: Mintlify's customer list (Anthropic, Vercel, Cloudflare) is the strongest social proof in the category.

**[MODERATE — negative signal] Security incident (2024)**
Source: https://news.ycombinator.com/item?id=39730255
Date: 2024-03-16 | Engagement: 130 points, 41 comments
Key facts: GitHub read/write token leak. Second-most-engaged Mintlify post on HN.
Why it matters: Security incident is a trust concern for a SaaS that integrates with your codebase.

**Assessment:** Mintlify is the docs SaaS leader for developer teams. The Helicone acquisition signals ambition beyond docs. Customer list is elite. But pricing ($380/month) and the security incident are real concerns. It serves a fundamentally different audience than OSS frameworks — teams that want managed hosting + AI features, not DIY flexibility.

---

#### M. GitBook (#10 in current catalog)

**[MODERATE] 2026 strategy — AI-native focus**
Source: GitBook product pages
Key features: GitBook Agent (AI that scans connected sources, suggests doc changes), llms.txt/MCP native support, Open Source Fund (free docs for OSS projects).
Why it matters: GitBook is repositioning as AI-native rather than competing on framework features.

**[STRONG] Ferndesk comparison data**
Source: https://ferndesk.com/blog/gitbook-vs-mintlify
Key data: 150K+ organizations, real-time multi-user editing (Notion-like WYSIWYG). Notable users: NVIDIA, Zoom. Pricing: ~$113/month for 5-person team (cheaper than Mintlify).
Why it matters: GitBook serves mixed technical/non-technical teams — different market than Mintlify.

**Assessment:** GitBook is the Notion-like docs platform. Not competing with OSS frameworks. Serves non-developer-heavy teams. The Open Source Fund is a smart community play. Lower price than Mintlify makes it viable for budget-conscious teams.

---

#### N. Promptless (#9 in current catalog)

**[STRONG] YC W25 launch**
Source: https://news.ycombinator.com/item?id=43092522
Date: 2025-02-18 | Engagement: 107 points, 61 comments
Who: prithvi2206 (founder)
Key quote: "Automatic updates for customer-facing docs" — auto-updates docs from PRs/tickets.

**[MODERATE] Follow-up post (Feb 2026)**
Source: https://news.ycombinator.com/item?id=47140332
Date: 2026-02-24 | Engagement: 35 points, 7 comments
Key quote: "Tag Promptless on any GitHub PR/Issue to get updated docs"
Why it matters: Product is actively shipping with growing community engagement.

**Assessment:** Promptless is the only true docs automation play in the category. Different from frameworks (it updates your existing docs, regardless of framework). YC backing and sustained HN traction make it credible. Still early but unique positioning.

---

#### O. DocsGPT (not currently ranked — should be evaluated)

**Quantitative traction:** 17,787 stars, 66 open issues, 220 contributors.

**[STRONG] HN launch — 256 points**
Source: https://news.ycombinator.com/item?id=34648266
Date: 2023-02-03 | Engagement: 256 points, 98 comments
Why it matters: Highest HN engagement of any tool in this entire category.

**[WEAK — freshness concern] Most recent HN activity was 2023.** No 2025-2026 posts with traction. The 17.8K stars suggest historical interest but unclear if momentum has sustained.

**Assessment:** DocsGPT is an open-source docs chatbot, not a docs framework. Different lane. High stars but unclear recent momentum. Worth noting but different enough from the core category that ranking alongside frameworks would be confusing.

---

### 5. PAIRWISE COMPARISON MATRIX

#### OSS Frameworks Head-to-Head

| Dimension | Fumadocs | Starlight | Docusaurus | VitePress | Nextra |
|---|---|---|---|---|---|
| **Performance** | LCP 1.4s, 85kB JS | **LCP 0.8s, 12kB JS** | Slowest (30min builds reported) | Sub-second cold starts | LCP 1.2s, 60kB JS |
| **Ecosystem lock-in** | Next.js | Astro (+ Vue/React/Svelte) | React | **Vue only** | Next.js |
| **Versioned docs** | Manual | No | **Yes (built-in)** | Manual | No |
| **OpenAPI integration** | **Built-in** | Plugin | Plugin | No | No |
| **Maintenance quality** | **4 open issues** | 28 open issues | 356 open issues | 487 open issues | 313 open issues |
| **npm weekly DL** | 202K | 120K | **414K** | 218K | 67K |
| **Growth rate (YoY)** | **3x** | 2x | Flat/declining | Stable | Modest |
| **HN presence** | None (4 pts max) | Low (58 pts) | High (202 pts) | Moderate (122 pts) | None (6 pts) |
| **Design ownership** | **Full (headless)** | Theme-based | Theme + Infima CSS | Theme-based | Theme-based |

#### API Docs Head-to-Head

| Dimension | Scalar | Swagger UI | Redocly | Fern (Postman) |
|---|---|---|---|---|
| **UX/Design** | **Modern, dark mode** | Dated | Utilitarian | Custom branded |
| **API client built-in** | **Yes** | Try-it-out only | No | No |
| **Code generation** | **Multi-language** | No | No | **9 languages (SDK)** |
| **OpenAPI coverage** | 3.1, 3.0 | 3.0, 2.0 | **3.2, 3.1, 3.0, 2.0, AsyncAPI** | 3.1, 3.0 |
| **Pricing** | **$12/user/mo** | Free (OSS) | Enterprise | Enterprise (Postman) |
| **Platform endorsement** | **Microsoft .NET 9** | Legacy default | Enterprise CI | Postman ecosystem |
| **Stars** | 14,377 | 28,704 | 1,419 (CLI) | 3,555 |
| **Open issues** | 145 | **1,377** | 181 (CLI) / 437 (Redoc) | 344 |

---

### 6. CONSOLIDATION TRACKER

| Event | Date | Impact | Evidence Quality |
|---|---|---|---|
| Nextra 4 ships (App Router only) | 2025-01-13 | Modernizes Nextra but drops Pages Router users | [STRONG] |
| MkDocs Material → maintenance mode | 2025-11-11 | Python docs ecosystem begins migration | [STRONG] |
| MkDocs governance crisis / PyPI takeover | 2026-01-03 → 2026-03-15 | Ecosystem fractures into 3 successors | [STRONG] |
| Postman acquires Fern | 2026-01-08 | API docs consolidation, Fern OSS status maintained | [STRONG] |
| Docusaurus v4 umbrella issue opened | 2026-02-06 | 20% complete, no timeline, significant dep bumps | [MODERATE] |
| Mintlify acquires Helicone | 2026-03-03 | Mintlify pivots to AI knowledge infrastructure | [STRONG] |

---

### 7. EMERGING SIGNALS

#### llms.txt Standard
**[MODERATE] Mixed evidence on adoption and effectiveness**
- ~10% adoption across 300K-domain study
- Statistical analysis shows **no correlation** between llms.txt and being cited by LLMs
- Mintlify, Anthropic, Cursor, GitBook support it; Google/OpenAI/Meta have not formally committed
- Sources: https://www.aeo.press/ai/the-state-of-llms-txt-in-2026 | https://seranking.com/blog/llms-txt/

#### "AI agents now account for over 40% of documentation traffic" (WriteChoice, 2026)
- If accurate, this changes the docs evaluation criteria — frameworks need to optimize for machine readability, not just human readability
- Mintlify and GitBook are ahead here (llms.txt, MCP servers)
- OSS frameworks lag (no built-in AI optimization)

---

### 8. YOUTUBE VIDEOS SUMMARY

**Fumadocs:**
- youtubeId: "7HUmDAgXI2E", title: "Goodbye Nextra", channel: "Web Dev Cody", date: "~2024-05"

**Starlight:**
- youtubeId: "5u0Ds7wzUeI", title: "Starlight by Astro", channel: "Astro", date: "~2023"
- youtubeId: "j8K-ESJF814", title: "One year of Starlight", channel: "Astro", date: "~2024"
- youtubeId: "5pq80drDrNs", title: "I Recreated Shadcn's Docs In 30 Minutes", channel: "Web Dev Simplified", date: "~2024"

**Docusaurus:**
- youtubeId: "QcGJsf6mgZE", title: "F8 2019: Using Docusaurus", channel: "Meta Developers", date: "2019-05"

**VitePress:**
- youtubeId: "y9jKmNPmfPE", title: "VitePress Tutorial with Vue.js 3", channel: "Program With Erik", date: "~2020"

**Scalar:**
- youtubeId: "8xEkVmqlr4I", title: "Swagger is Going Away in .NET 9!", channel: "Nick Chapsas", date: "~2024-10"
- youtubeId: "8yI4gD1HruY", title: "Swagger is Gone in .NET 9! Replace It With This.", channel: "Unknown .NET creator", date: "~2024"

---

## Quotes

**Glasskube on leaving Docusaurus (May 2025):**
> "Dev server startup cut from 5s to <2.5s... felt more fun to use"
— Philip Miglinci, Co-Founder, Glasskube
Source: https://distr.sh/blog/distr-docs/

**rxliuli on Docusaurus build times (HN, May 2025):**
> "Docusaurus builds exceeding 30 minutes on large sites, causing GitHub Actions timeouts"
Source: https://news.ycombinator.com/item?id=44074626

**Unlock Protocol on reliability (GitHub):**
> "Docusaurus keeps breaking"
— julien51, https://github.com/unlock-protocol/unlock/issues/15734

**PkgPulse on Fumadocs (March 2026):**
> "Next.js + Fumadocs: undisputed gold standard for commercial documentation assets"
Source: https://www.pkgpulse.com/blog/fumadocs-vs-nextra-v4-vs-starlight-documentation-sites-2026

**Speakeasy on Scalar (2026):**
> "For the price, it's hard to beat"
Source: https://www.speakeasy.com/blog/choosing-a-docs-vendor

**Florian Maas on MkDocs collapse (Feb 2026):**
> "The Slow Collapse of MkDocs"
Source: https://fpgmaas.com/blog/collapse-of-mkdocs/

---

## Gaps in Evidence

1. **Fumadocs HN blind spot:** Despite being the fastest-growing React framework, Fumadocs has zero HN traction (4 pts max). This is the biggest disconnect between npm metrics and community visibility in the category. Need to understand why — is it purely a Next.js niche tool with no broader awareness?

2. **VitePress 2026 momentum unclear:** Strong stats (17K stars, 218K npm/week) but no 2025-2026 HN posts or comparison articles. Is it growing, flat, or coasting on Vue ecosystem lock-in?

3. **Mintlify's actual user count is vague:** "4K+ companies" and "tens of thousands of companies" appear in different sources. No third-party verification of user counts.

4. **GitBook engagement metrics missing:** 150K+ orgs claimed but no independent verification or npm/download proxy available (closed-source SaaS).

5. **Docsify real usage unclear:** 31K stars but CDN-based (npm doesn't capture client-side usage). Actual active usage is hard to measure.

6. **Promptless traction beyond HN:** 107 pts launch, 35 pts follow-up. No npm downloads or GitHub stars to verify adoption. Still very early.

---

## Recommended Next Step

**Pass to the rank agent** with these recommended changes to the current catalog:

1. **ADD VitePress** — ranked #3-4 in OSS frameworks. 17K stars, 218K npm/week. Catalog gap.
2. **Scalar should move up** — strongest evidence base of any contender. Microsoft endorsement, best HN engagement among API tools, best value pricing.
3. **Docusaurus → explicitly flag declining** — v4 stalled, migration stories multiplying, last release 5 months ago.
4. **Fern → note Postman acquisition** — still OSS but corporate dependency risk.
5. **MkDocs Material → remove or flag EOL** — maintenance mode, ecosystem fractured.
6. **Consider Docsify as honorable mention** — 31K stars but stale (no release since 2023).
7. **Consider DocsGPT** — different lane (docs chatbot) but 17.8K stars. May not fit the framework ranking but worth noting.
8. **Nextra dropping** — 67K npm/week vs Fumadocs 202K. Losing the Next.js docs race.
