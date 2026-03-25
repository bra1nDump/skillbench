# Rank Findings

## Scope
Rank the coding-clis problem space based on the March 25 discovery and deep-dive packets, weighing release cadence, workflow fit, trust, and orchestration coverage.

## Date
2026-03-25T04:25:00Z

## Inputs
- 2026-03-25 discover_coding-clis findings (web/Twitter/Reddit/HN/GitHub scans)
- 2026-03-25 deep-dive_coding-clis findings (release notes, GitHub API snapshots, PromptArmor brief)
- HN threads: 46532075 (Claude Code outage), 47140322 (Emdash), 46711958 (Grov), 46109015 (Superset), 47183940 (Copilot security)
- GitHub releases and commit feeds for Claude Code, Gemini CLI, GitHub Copilot CLI
- Gemini CLI docs and public workflow write-ups

## Findings

### Final ranking
1. **Claude Code CLI** - Still the reference CLI for multi-step repo work thanks to the 2026-03-20 v2.1.81 release that added `--bare`, better MCP OAuth, and steady ~14 commits/week from 10+ maintainers, backing up its 82,204-star momentum ([release](https://api.github.com/repos/anthropics/claude-code/releases/tag/v2.1.81), [repo stats](https://api.github.com/repos/anthropics/claude-code)). The 181-point HN outage thread and GitHub issue #16673 show Anthropic fixes regressions in public, which reinforces trust compared to quieter contenders ([HN 46532075](https://news.ycombinator.com/item?id=46532075), [issue](https://github.com/anthropics/claude-code/issues/16673)).
2. **Gemini CLI** - Best entry point for large personal projects and experimentation because v0.35.0 (2026-03-24) ships weekly, the repo leads with 98,957 stars, and Google’s docs confirm 1M-token context plus 1,000 requests/day free tier, giving it the widest playground before paying ([release](https://api.github.com/repos/google-gemini/gemini-cli/releases/tag/v0.35.0), [docs](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli)). GuruSup’s March 22 editorial matches the data: start on Gemini for the giant context window, then escalate to Claude when hallucinations appear ([GuruSup](http://gurusup.com/blog/gemini-cli-vs-claude-code)).
3. **GitHub Copilot CLI** - Ships reliable cross-platform builds (v1.0.11 on 2026-03-23) and `/clear` + MCP config niceties that align with GitHub Enterprise workflows, while Reddit’s 185-upvote GA thread and a 61-like demo tweet confirm teams are kicking the tires ([release](https://api.github.com/repos/github/copilot-cli/releases/tag/v1.0.11), [Reddit GA](https://www.reddit.com/r/GithubCopilot/comments/1rejfyh/github_copilot_cli_is_now_generally_available/), [tweet](https://x.com/3272341/status/2034874929796260001)). The PromptArmor remote-code advisory keeps it below Claude/Gemini until orgs add whitelisting or sandboxes ([PromptArmor](https://www.promptarmor.com/resources/github-copilot-cli-downloads-and-executes-malware), [HN 47183940](https://news.ycombinator.com/item?id=47183940)).

### Fit-specific signals
- **Emdash** is the leading orchestration layer for teams juggling the ranked CLIs: its Feb 24 Show HN hit 206 points and the open-source repo already supports 21 coding agents with per-task git worktrees and <1s startup, making it the fastest way to run Claude, Gemini, Codex, etc., in parallel ([HN 47140322](https://news.ycombinator.com/item?id=47140322), [repo](https://github.com/generalaction/emdash)).
- **Superset** (Dec 2025 launch) proved multi-worktree multitasking for Codex/Claude/Gemini with spotlighted agent notifications and git isolation, offering an alternative when teams need on-prem control over orchestrations ([HN 46109015](https://news.ycombinator.com/item?id=46109015), [repo](https://github.com/superset-sh/superset)).
- **Grov** adds structured shared memory so agents only request relevant summaries, cutting redundant context by ~50-70% for Claude/Gemini/Codex sessions - critical for long-lived projects where context blowups degrade ranking leaders ([HN 46711958](https://news.ycombinator.com/item?id=46711958), [repo](https://github.com/TonyStef/Grov)).
- **Claude Code onboarding is still viral**: a 74-like X thread ("How to Master Claude Code (If You Don't Code)") walks newcomers through `read/edit/run` workflows and sparked pairwise comparisons in replies, reinforcing why Claude stays #1 in this problem space ([tweet](https://x.com/1445377133547765763/status/2035562903655379153)).

### Trust and risk watchlist
- The HN outage (Jan 7) plus GitHub issue history keep pressure on Anthropic’s release QA; we need to verify that the new `--bare` flow doesn’t reintroduce changelog regressions before moving it into catalog updates ([HN 46532075](https://news.ycombinator.com/item?id=46532075), [issue](https://github.com/anthropics/claude-code/issues/16673)).
- PromptArmor’s exploit report shows Copilot CLI can download/execute malware without user confirmation, so enterprise adoption depends on network policy updates or GitHub shipping stricter defaults ([PromptArmor](https://www.promptarmor.com/resources/github-copilot-cli-downloads-and-executes-malware)).
- Monitor Anthropic’s new weekly limit chatter flagged in discovery; if verified reports pile up, Gemini’s free quota could overtake Claude for everyday builders despite quality advantages (pending follow-up on r/claudecode pulls).

## Quotes
> "Added `--bare` flag, smarter worktree resumption, improved MCP OAuth..." - [Claude Code v2.1.81 release notes](https://api.github.com/repos/anthropics/claude-code/releases/tag/v2.1.81) (2026-03-20)

> "Gemini CLI... 1,000 requests/day free tier with 1M tokens." - [Gemini Code Assist docs](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli) (retrieved 2026-03-25)

## Recommended Next Step
Feed this ranking into the Catalog Update stage so `src/lib/catalog.ts` and the /problems/coding-clis page reflect the Claude -> Gemini -> Copilot order, while simultaneously assigning a follow-up discover run to validate Claude limit complaints and track Emdash/Superset adoption metrics.

## What Would Change This Ranking
- A sustained Claude Code reliability regression (or hard usage caps) without rapid fixes would push Gemini CLI into the top spot.
- If Gemini’s weekly releases slow or Google tightens the free tier below practical workloads, premium users will default to Claude despite cost.
- GitHub shipping built-in policy controls or sandbox enforcement (closing the PromptArmor gap) plus more third-party comparisons could elevate Copilot CLI into #2 for enterprise-heavy problems.
- New coding CLIs with verifiable public artifacts (e.g., Devin CLI or Cursor CLI) could enter the ranking once they clear the evidence bar.








