# Skillbench

Static Next.js app for researching and ranking agent skills by category.

## Docs

- `specification.md` — product specification
- `human-steering-history.md` — raw steering notes from the user
- `agents.md` — project overview, pipeline, research tools

## App

- `src/app/page.tsx` — homepage with search and best-right-now picks
- `src/app/categories/[slug]/page.tsx` — category report pages (5 live categories)
- `src/app/skills/[slug]/page.tsx` — skill detail pages (18 skills)
- `src/app/bundles/[slug]/page.tsx` — bundle pages (3 persona stacks)
- `src/app/platforms/[slug]/page.tsx` — platform pages (5 platforms)

## Setup

```bash
npm install
```

### Required skills for agents

The research agents (`agents/discover.md`, `agents/deep-dive.md`) use third-party Claude skills for social data. Install them after cloning:

```bash
npx skills add alberduris/skills           # x-twitter
npx skills add kirkluokun/awesome-a-stock-openclawskills  # reddit-search
```

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run qa:links
npm run qa:publish
```

## Current Direction

Skillbench is an opinionated, evidence-backed buyer's guide for agent skills and platforms. It favors narrow categories, strong comparisons, and public evidence over broad registry coverage.
