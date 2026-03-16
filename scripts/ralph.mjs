#!/usr/bin/env node

/**
 * Ralph Loop Orchestrator
 *
 * Runs the discover → deep-dive → rank → catalog-update → QA pipeline
 * by spawning `claude -p` subprocesses for each stage.
 *
 * Usage:
 *   npm run ralph -- --category coding-clis
 *   npm run ralph -- --all
 *   npm run ralph -- --category coding-clis --loop --interval 30
 */

import { execSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Known categories (from catalog.ts CategorySlug)
// ---------------------------------------------------------------------------
const CATEGORIES = [
  "product-business-development",
  "teams-of-agents",
  "ux-ui",
  "coding-clis",
  "web-browsing",
];

// ---------------------------------------------------------------------------
// CLI arg parsing
// ---------------------------------------------------------------------------
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { categories: [], loop: false, interval: 60 };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--category":
        opts.categories.push(args[++i]);
        break;
      case "--all":
        opts.categories = [...CATEGORIES];
        break;
      case "--loop":
        opts.loop = true;
        break;
      case "--interval":
        opts.interval = parseInt(args[++i], 10);
        break;
      default:
        console.error(`Unknown arg: ${args[i]}`);
        process.exit(1);
    }
  }

  if (opts.categories.length === 0) {
    console.error("Usage: ralph --category <slug> | --all [--loop] [--interval <min>]");
    process.exit(1);
  }

  for (const cat of opts.categories) {
    if (!CATEGORIES.includes(cat)) {
      console.error(`Unknown category: ${cat}\nKnown: ${CATEGORIES.join(", ")}`);
      process.exit(1);
    }
  }

  return opts;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function timestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function readFile(path) {
  return existsSync(path) ? readFileSync(path, "utf-8") : "";
}

function log(stage, msg) {
  const ts = new Date().toISOString().slice(11, 19);
  console.log(`[${ts}] [${stage}] ${msg}`);
}

// ---------------------------------------------------------------------------
// Claude subprocess runner
// ---------------------------------------------------------------------------
const ALLOWED_TOOLS = "Bash,Read,Write,Edit,Glob,Grep,WebSearch,WebFetch,Agent";

function runClaude({ systemPromptFile, prompt, stage }) {
  // Build the full prompt: agent personality + task
  let fullPrompt = "";
  if (systemPromptFile) {
    const systemPrompt = readFileSync(systemPromptFile, "utf-8");
    fullPrompt += `<system-instructions>\n${systemPrompt}\n</system-instructions>\n\n`;
  }
  fullPrompt += prompt;

  const args = [
    "-p",
    "--allowedTools", ALLOWED_TOOLS,
    "--verbose",
  ];

  log(stage, "Spawning claude subprocess…");
  const start = Date.now();

  // Pass prompt via stdin to avoid Windows command-line length limits
  const result = spawnSync("claude", args, {
    cwd: ROOT,
    input: fullPrompt,
    stdio: ["pipe", "pipe", "pipe"],
    encoding: "utf-8",
    timeout: 15 * 60 * 1000, // 15 min per stage
    shell: true,
  });


  const elapsed = ((Date.now() - start) / 1000).toFixed(1);

  if (result.status !== 0) {
    log(stage, `FAILED after ${elapsed}s (exit ${result.status})`);
    if (result.stderr) log(stage, `stderr: ${result.stderr.slice(0, 500)}`);
    return { ok: false, output: result.stdout || "", elapsed };
  }

  log(stage, `Completed in ${elapsed}s`);
  return { ok: true, output: result.stdout || "", elapsed };
}

// ---------------------------------------------------------------------------
// Pipeline stages
// ---------------------------------------------------------------------------

function stageDiscover(category, runDir) {
  const stage = "DISCOVER";
  const outDir = resolve(runDir, `discover_${category}`);
  ensureDir(outDir);

  const catalogSnippet = getCategoryContext(category);
  const prompt = `You are researching the "${category}" category for Skillbench.

Current catalog context for this category:
${catalogSnippet}

TASK: Run the full discover protocol. Search HN Algolia, GitHub, web search, and any other available tools. Find all serious contenders, new signals, and gaps.

IMPORTANT: Write your findings to ${outDir}/findings.md using the structure from agent-runs/agents.md. Also output findings to stdout.`;

  const result = runClaude({
    systemPromptFile: resolve(ROOT, "agents/discover.md"),
    prompt,
    stage,
  });

  // If claude wrote the file directly, great. Otherwise write stdout.
  const findingsPath = resolve(outDir, "findings.md");
  if (!existsSync(findingsPath) && result.output) {
    writeFileSync(findingsPath, result.output, "utf-8");
  }

  return { ...result, findingsPath };
}

function stageDeepDive(category, runDir, discoverFindings) {
  const stage = "DEEP-DIVE";
  const outDir = resolve(runDir, `deep-dive_${category}`);
  ensureDir(outDir);

  const catalogSnippet = getCategoryContext(category);
  const prompt = `You are deep-diving the "${category}" category for Skillbench.

Current catalog context:
${catalogSnippet}

Discover stage findings:
${discoverFindings.slice(0, 8000)}

TASK: Run the full deep-dive protocol. Build evidence-backed understanding for every contender found. Collect quantitative traction, official artifacts, public comparisons, and usage evidence.

IMPORTANT: Write your findings to ${outDir}/findings.md using the structure from agent-runs/agents.md.`;

  const result = runClaude({
    systemPromptFile: resolve(ROOT, "agents/deep-dive.md"),
    prompt,
    stage,
  });

  const findingsPath = resolve(outDir, "findings.md");
  if (!existsSync(findingsPath) && result.output) {
    writeFileSync(findingsPath, result.output, "utf-8");
  }

  return { ...result, findingsPath };
}

function stageRank(category, runDir, discoverFindings, deepDiveFindings) {
  const stage = "RANK";
  const outDir = resolve(runDir, `rank_${category}`);
  ensureDir(outDir);

  const prompt = `You are ranking the "${category}" category for Skillbench.

Discover findings:
${discoverFindings.slice(0, 4000)}

Deep-dive findings:
${deepDiveFindings.slice(0, 8000)}

TASK: Produce a ranked recommendation. Weight evidence quality, real usage, recency, and direct workflow fit. Call out narrow subcases.

IMPORTANT: Write your findings to ${outDir}/findings.md using the structure from agent-runs/agents.md.`;

  const result = runClaude({
    systemPromptFile: resolve(ROOT, "agents/rank.md"),
    prompt,
    stage,
  });

  const findingsPath = resolve(outDir, "findings.md");
  if (!existsSync(findingsPath) && result.output) {
    writeFileSync(findingsPath, result.output, "utf-8");
  }

  return { ...result, findingsPath };
}

function stageCatalogUpdate(category, rankFindingsPath) {
  const stage = "CATALOG-UPDATE";
  const rankFindings = readFile(rankFindingsPath);

  if (!rankFindings) {
    log(stage, "No rank findings available — skipping catalog update");
    return { ok: false, output: "", elapsed: "0" };
  }

  const prompt = `Read the rank findings at ${rankFindingsPath}.

Based on these findings, update src/lib/catalog.ts for the "${category}" category:
- Update evidence arrays with new [STRONG] and [MODERATE] evidence items
- Update liveSignals with fresh signals found
- Update rankings if evidence supports changes
- Update verdicts if the meta has shifted
- Add any NEW CONTENDER entries to the skills array if flagged
- Keep existing data that isn't contradicted by new findings

Also run: npm run metrics:collect to refresh star counts.

Be conservative — only change what the evidence supports. Preserve the existing TypeScript types.`;

  return runClaude({
    prompt,
    stage,
  });
}

function stageQA() {
  const stage = "QA";
  log(stage, "Running build + link check…");
  const start = Date.now();

  try {
    execSync("npm run build", { cwd: ROOT, stdio: "pipe", timeout: 120_000 });
    log(stage, "Build passed");
  } catch (e) {
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    log(stage, `Build FAILED after ${elapsed}s`);
    log(stage, e.stderr?.toString().slice(-500) || e.message);
    return { ok: false, output: "build failed", elapsed };
  }

  try {
    execSync("npm run qa:links", { cwd: ROOT, stdio: "pipe", timeout: 60_000 });
    log(stage, "Link check passed");
  } catch (e) {
    log(stage, "Link check FAILED (non-fatal)");
    log(stage, e.stdout?.toString().slice(-500) || e.message);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  return { ok: true, output: "QA passed", elapsed };
}

// ---------------------------------------------------------------------------
// Category context extractor
// ---------------------------------------------------------------------------
function getCategoryContext(category) {
  try {
    const catalogPath = resolve(ROOT, "src/lib/catalog.ts");
    const catalog = readFileSync(catalogPath, "utf-8");
    // Extract a rough snippet around the category slug
    const idx = catalog.indexOf(`slug: "${category}"`);
    if (idx === -1) return `Category slug: ${category} (not found in catalog)`;
    // Grab ~2000 chars around it
    const start = Math.max(0, idx - 200);
    const end = Math.min(catalog.length, idx + 2000);
    return catalog.slice(start, end);
  } catch {
    return `Category slug: ${category}`;
  }
}

// ---------------------------------------------------------------------------
// Run pipeline for one category
// ---------------------------------------------------------------------------
async function runPipeline(category) {
  const ts = timestamp();
  const runDir = resolve(ROOT, "agent-runs", `${ts}_run_${category}`);
  ensureDir(runDir);

  console.log(`\n${"=".repeat(60)}`);
  console.log(`  Ralph Pipeline — ${category}`);
  console.log(`  Run dir: ${runDir}`);
  console.log(`${"=".repeat(60)}\n`);

  const results = {};

  // Stage 1: Discover
  log("PIPELINE", "Stage 1/5: Discover");
  const discover = stageDiscover(category, runDir);
  results.discover = discover;
  const discoverFindings = readFile(discover.findingsPath);

  // Stage 2: Deep-Dive
  log("PIPELINE", "Stage 2/5: Deep-Dive");
  const deepDive = stageDeepDive(category, runDir, discoverFindings);
  results.deepDive = deepDive;
  const deepDiveFindings = readFile(deepDive.findingsPath);

  // Stage 3: Rank
  log("PIPELINE", "Stage 3/5: Rank");
  const rank = stageRank(category, runDir, discoverFindings, deepDiveFindings);
  results.rank = rank;

  // Stage 4: Catalog Update
  log("PIPELINE", "Stage 4/5: Catalog Update");
  results.catalogUpdate = stageCatalogUpdate(category, rank.findingsPath);

  // Stage 5: QA
  log("PIPELINE", "Stage 5/5: QA");
  results.qa = stageQA();

  // Summary
  console.log(`\n${"─".repeat(60)}`);
  console.log("  Pipeline Summary");
  console.log(`${"─".repeat(60)}`);
  for (const [name, r] of Object.entries(results)) {
    const icon = r.ok ? "✓" : "✗";
    console.log(`  ${icon} ${name.padEnd(16)} ${r.elapsed}s`);
  }
  console.log(`${"─".repeat(60)}\n`);

  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const opts = parseArgs();

  const runOnce = async () => {
    for (const category of opts.categories) {
      await runPipeline(category);
    }
  };

  if (opts.loop) {
    console.log(`Ralph loop mode — interval: ${opts.interval} min. Ctrl+C to stop.`);
    while (true) {
      await runOnce();
      log("LOOP", `Sleeping ${opts.interval} minutes…`);
      await new Promise((r) => setTimeout(r, opts.interval * 60 * 1000));
    }
  } else {
    await runOnce();
  }
}

main().catch((err) => {
  console.error("Ralph fatal error:", err);
  process.exit(1);
});
