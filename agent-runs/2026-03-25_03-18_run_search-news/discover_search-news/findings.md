# Discover Findings

## Scope
Audit the Search & News category to surface newly hot tools, compare signals, and highlight gaps before the deep-dive stage.

## Date
2026-03-25T03:45:00Z

## Inputs
- DuckDuckGo queries via r.jina.ai: "search news best tools 2026", "search news comparison 2026", "Brave Search vs Tavily 2026", "switched from Brave to Firecrawl search news", "search news open source alternative 2026"
- Hacker News Algolia searches: search news, Brave Search API, Tavily
- Twitter/X searches via the x-twitter skill: search news, Firecrawl, Brave Search API, Flowmi
- Reddit posts commands for `r/technology`, `r/LocalLLaMA`, `r/artificial`, `r/programming`, `r/MachineLearning`
- GitHub star lookups (query Firecrawl, query Exa search, repos flowmi-ai/flowmi, etc.)
- Registry pages inspected: https://skills.sh, https://mcpservers.org, https://pulsemcp.com
- Secondary sources: OpenClaw update article (TheBlockBeats), Flowmi review (Endors), Flowmi vs Brave pricing tweet (Flowmi AI)

## Findings
- **OpenClaw 2026.3.22 adds ClawHub marketplace + built-in Exa/Tavily/Firecrawl search connectors.** TheBlockBeats report (2026-03-23) says `openclaw plugins install` now automatically pulls packages from Claude/Codex/Cursor and that the update ships the Exa, Tavily, and Firecrawl search/crawl engines as native plugins with zero configuration. Why this matters: bundling the top three search/crawl stacks into one marketplace dramatically lowers the friction for agents to combine semantic search (Exa), structured extraction (Firecrawl), and curated SERPs (Tavily), so we should track how OpenClaw's plugin economy reshapes rankings and usage. Source freshness/credibility: 23 Mar 2026, TheBlockBeats (industry news outlet). Engagement metrics: n/a (news article).
- **NEW CONTENDER ALERT - Flowmi Search CLI (Flowmi AI) is now a multi-tool search backend.** An independent Endors review (2026-03-23) walked through Flowmi's eight tools and reports that Flowmi search returns structured JSON, supports web/image/news results, and chains seamlessly with the CLI's scrape/table/note/email primitives so agents can both fetch and persist data without wiring separate services. Flowmi's own tweet (23/24 Mar 2026) claims Flowmi Search costs $0.001/query vs Brave's $0.005 and that credits never expire (2 likes/1 reply/2 bookmarks/29 impressions). Why this matters: Flowmi bundles search + persistence + email/drive for agents, undercuts Brave on pricing, and currently isn't in the catalog, so we need to decide where it sits relative to Brave/Firecrawl/Exa and whether to record it as a top lane contender. Sources: (1) Endors review (Mar 23, 2026; independent, hands-on) and (2) Flowmi tweet (Mar 24, 2026; self-reported). Engagement metrics: tweet has 2 likes, 1 reply, 2 bookmarks, 29 impressions; Endors review (article) - n/a.
- **Gap/Key Player note:** Flowmi's founder (Flowmi AI) is positioning the CLI as an agentic infrastructure stack (per Flowmi author tweets) and is now being cited in early reviews. This founder-led build is a Key Player opportunity inside search-news because it could define how bundled search + storage tools compete with standalone APIs. The catalog currently lacks Flowmi, so deep dive should evaluate its footprint before ranking.

## Quotes
> Flowmi is a CLI that gives your agent eight tools... Search returns structured JSON my agent could immediately parse and act on. - Endors review, "Flowmi Review: The CLI That Gives AI Agents Real-World Capabilities" (23 Mar 2026) [https://endors.me/review/flowmi].

## Recommended Next Step
- Deep-dive Flowmi (Flowmi Search CLI) to verify usage metrics, pricing/model, and whether it should join the search lane alongside Brave/Firecrawl/Exa.
- Track OpenClaw's ClawHub rollout: monitor adoption of the new search connectors (Exa/Tavily/Firecrawl) and how that affects agility/benchmarks in the category.
