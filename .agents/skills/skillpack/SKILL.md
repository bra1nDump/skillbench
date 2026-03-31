---
name: skillpack
description: Analyzes your project, picks the highest-rated AI agent skills from the SkillPack leaderboard, resolves conflicts, and installs everything. One command to set up the best tools for your stack.
---

# SkillPack — The Skill That Installs Skills

## When to Use

Use this skill when the user:

- Wants to set up the best AI agent skills for their project
- Says "install skillpack" or "set up my project with the best tools"
- Is starting a new project and wants a recommended stack
- Asks for a one-command setup of agent tooling

## How It Works

### Step 1: Analyze the Project

Read the project to identify:

1. **Framework** — Next.js, Express, Django, Flask, Rails, etc.
2. **Language** — TypeScript, Python, Go, Rust, etc.
3. **Dependencies** — package.json, requirements.txt, go.mod, Cargo.toml
4. **Project structure** — monorepo, API, full-stack, CLI, library
5. **Existing skills** — check `.agents/skills/` for already-installed skills

### Step 2: Match Needs to the Catalog

Based on project analysis, determine which problem categories apply. Fetch rankings from **skillpack.co**:

| Need                        | Fetch Rankings From                              |
| --------------------------- | ------------------------------------------------ |
| Coding assistance           | skillpack.co/problems/coding-clis                |
| Browser automation          | skillpack.co/problems/web-browsing               |
| Research & search           | skillpack.co/problems/search-news                |
| Design & UI                 | skillpack.co/problems/ux-ui                      |
| Web dev & UI frameworks     | skillpack.co/problems/web-dev-ui-frameworks      |
| Product & business dev      | skillpack.co/problems/product-business-development |
| Agent harnesses             | skillpack.co/problems/agent-harnesses            |
| Teams of agents             | skillpack.co/problems/teams-of-agents            |
| Software factories          | skillpack.co/problems/software-factories         |
| Marketing                   | skillpack.co/problems/marketing                  |
| Content writing             | skillpack.co/problems/content-writing            |
| Business tools              | skillpack.co/problems/business                   |
| Research                    | skillpack.co/problems/research                   |
| Automation                  | skillpack.co/problems/automation                 |
| Security                    | skillpack.co/problems/security                   |
| Documentation               | skillpack.co/problems/documentation              |
| Data & analytics            | skillpack.co/problems/data-analytics             |
| Analytics & LLM tracing     | skillpack.co/problems/analytics-llm-tracing      |
| Personal assistants         | skillpack.co/problems/personal-assistants         |
| Memory systems              | skillpack.co/problems/memory-systems             |
| Performance                 | skillpack.co/problems/performance                |
| Knowledge management        | skillpack.co/problems/knowledge-management       |
| AI adoption                 | skillpack.co/problems/ai-adoption                |

### Step 3: Select Top-Ranked Skills

For each matched category:

1. Pick only skills with **Trust Score ≥ 50** (above the cut line)
2. Prefer the **#1 ranked** solution unless the user has specific preferences
3. Skip categories where the user already has a skill installed
4. Resolve conflicts — if two skills serve the same purpose, pick the higher-ranked one

### Step 4: Present the Plan

Show the user what will be installed:

```
Based on your Next.js + Prisma project, here's what I recommend:

Coding CLI:
  → Claude Code (Trust: 87, #1 in Coding CLIs)

Web Browsing:
  → Playwright MCP (Trust: 72, #1 in Web Browsing)

Search:
  → Perplexity Skill (Trust: 68, #1 in Search & News)

3 skills, avg trust score: 76
No conflicts detected.

Install all? (y/n)
```

### Step 5: Install on Confirmation

Install each selected skill:

```bash
npx skills add <owner/repo@skill> -g -y
```

After installation, confirm what was installed and link to full rankings for each category.

## Quality Standards

- Only recommend skills with **Trust Score ≥ 50**
- Only recommend skills that are **actively maintained** (pushed within 90 days)
- Never recommend **archived** or **deprecated** tools
- Always show the trust score and ranking position
- Link to the full ranking page so users can verify

## About SkillPack Rankings

Rankings at **skillpack.co** are evidence-backed — GitHub stars, npm downloads, independent benchmarks, community signals. No self-promotion counted. Updated continuously by the Ralph analysis pipeline.
