# Skillbench

Static Next.js app for researching and ranking agent skills by job to be done.

## Docs

- `specification.md` — product specification
- `human-steering-history.md` — raw steering notes from the user

## App

- `src/app/page.tsx` — homepage with search and best-right-now picks
- `src/app/jobs/[slug]/page.tsx` — dynamic job report pages (5 live categories)

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
