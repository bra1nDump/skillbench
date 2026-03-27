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

import { execSync, spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
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
  "software-factories",
  "search-news",
  "marketing",
  "business",
  "content-writing",
  "research",
  "automation",
  "security",
  "documentation",
  "data-analytics",
  "personal-assistants",
  "memory-systems",
  "performance",
  "analytics-llm-tracing",
  "web-dev-ui-frameworks",
  "agent-harnesses",
  "knowledge-management",
  "ai-adoption",
];

// ---------------------------------------------------------------------------
// CLI arg parsing
// ---------------------------------------------------------------------------
// Curated set: 3 established + 3 new categories for high-quality example runs
const SAMPLE_CATEGORIES = [
  "coding-clis", "web-browsing", "search-news",       // established
  "agent-harnesses", "memory-systems", "personal-assistants", // new
];

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { categories: [], loop: false, interval: 60, concurrency: 1, engine: "claude" };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--category":
        opts.categories.push(args[++i]);
        break;
      case "--all":
        opts.categories = [...CATEGORIES];
        break;
      case "--sample":
        opts.categories = [...SAMPLE_CATEGORIES];
        break;
      case "--loop":
        opts.loop = true;
        break;
      case "--interval":
        opts.interval = parseInt(args[++i], 10);
        break;
      case "--parallel":
        opts.concurrency = parseInt(args[++i], 10) || 3;
        break;
      case "--codex":
        opts.engine = "codex";
        break;
      default:
        console.error(`Unknown arg: ${args[i]}`);
        process.exit(1);
    }
  }

  if (opts.categories.length === 0) {
    console.error("Usage: ralph --category <slug> | --all | --sample [--loop] [--interval <min>] [--parallel <N>] [--codex]");
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

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

function formatDuration(seconds) {
  if (seconds < 60) return `${seconds.toFixed(0)}s`;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);

  return `${m}m ${s}s`;
}

// Engine is set globally from CLI args
let ENGINE = "claude";

// Model mapping: codex uses OpenAI model names
const CODEX_MODEL_MAP = {
  "sonnet": "gpt-5.1-codex-mini",  // research (discover, deep-dive, screenshots)
  "opus": "gpt-5.1-codex",         // ranking & catalog updates
};

function buildPrompt(systemPromptFile, prompt) {
  let full = "";

  if (systemPromptFile) {
    full += `<system-instructions>\n${readFileSync(systemPromptFile, "utf-8")}\n</system-instructions>\n\n`;
  }
  full += prompt;

  return full;
}

function buildCodexArgs(fullPrompt, model, stage) {
  const codexModel = CODEX_MODEL_MAP[model] || "o3";

  // Replace Claude-specific tool references with shell equivalents
  const adapted = fullPrompt
    .replace(/WebFetch/g, "curl -sS -L")
    .replace(/WebSearch/g, "web search via curl or browsing");

  // Write prompt to temp file in agent-runs/ — Windows CLI arg limit is ~8KB
  const tmpDir = resolve(ROOT, "agent-runs", ".tmp");

  ensureDir(tmpDir);
  const promptFile = resolve(tmpDir, `codex-prompt-${Date.now()}-${stage.toLowerCase()}.txt`);

  writeFileSync(promptFile, adapted, "utf-8");

  return {
    cmd: "codex",
    args: ["exec", "--model", codexModel, "--sandbox", "danger-full-access", `"Read the file ${promptFile} with cat, then execute every instruction in it. Start by running: cat ${promptFile.replace(/\\/g, "/")}"`],
    promptFile,
    displayModel: codexModel,
  };
}

function buildClaudeArgs(model) {
  return {
    cmd: "claude",
    args: ["-p", "--model", model, "--allowedTools", ALLOWED_TOOLS],
    promptFile: null,
    displayModel: model,
  };
}

function cleanupPromptFile(filePath) {
  if (!filePath || !existsSync(filePath)) return;

  try { unlinkSync(filePath); } catch { /* ignore */ }
}

async function runClaude({ systemPromptFile, prompt, stage, timeoutMin = 30, model = "sonnet" }) {
  const engine = ENGINE;
  const fullPrompt = buildPrompt(systemPromptFile, prompt);
  const { cmd, args, promptFile, displayModel } = engine === "codex"
    ? buildCodexArgs(fullPrompt, model, stage)
    : buildClaudeArgs(model);

  const promptPreview = prompt.split("\n").find((l) => l.startsWith("TASK:"))?.slice(0, 100) || prompt.slice(0, 80);

  log(stage, `Spawning ${engine} subprocess…`);
  log(stage, `  Model: ${displayModel}`);
  log(stage, `  Prompt: ${systemPromptFile ? systemPromptFile.split(/[/\\]/).pop() : "(inline)"} + ${formatBytes(fullPrompt.length)}`);
  log(stage, `  Task: ${promptPreview}…`);
  log(stage, `  Timeout: ${timeoutMin} min`);
  const start = Date.now();

  const result = await new Promise((resolve) => {
    const child = spawn(cmd, args, {
      cwd: ROOT,
      stdio: ["pipe", "pipe", "pipe"],
      shell: true,
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (d) => { stdout += d.toString(); });
    child.stderr.on("data", (d) => { stderr += d.toString(); });

    if (engine !== "codex") {
      child.stdin.write(fullPrompt);
    }
    child.stdin.end();

    const timer = setTimeout(() => {
      child.kill("SIGTERM");
      resolve({ status: null, signal: "SIGTERM", stdout, stderr });
    }, timeoutMin * 60 * 1000);

    child.on("close", (code, signal) => {
      clearTimeout(timer);
      resolve({ status: code, signal, stdout, stderr });
    });
  });

  cleanupPromptFile(promptFile);

  const elapsedSec = (Date.now() - start) / 1000;
  const elapsed = elapsedSec.toFixed(1);
  const duration = formatDuration(elapsedSec);
  const outputSize = formatBytes((result.stdout || "").length);

  if (result.status !== 0) {
    const reason = result.signal === "SIGTERM" || result.status === null
      ? `TIMEOUT (${timeoutMin} min limit reached)`
      : `exit code ${result.status}`;

    log(stage, `FAILED after ${duration} — ${reason}`);
    if (result.stderr) {
      const stderr = result.stderr.slice(0, 500).trim();

      if (stderr) log(stage, `  stderr: ${stderr}`);
    }
    if (result.stdout) {
      log(stage, `  Partial output: ${outputSize}`);
    }
    return { ok: false, output: result.stdout || "", elapsed };
  }

  log(stage, `Completed in ${duration} — output: ${outputSize}`);
  return { ok: true, output: result.stdout || "", elapsed };
}

// ---------------------------------------------------------------------------
// Pipeline stages
// ---------------------------------------------------------------------------

async function stageDiscover(category, runDir) {
  const stage = "DISCOVER";
  const outDir = resolve(runDir, `discover_${category}`);

  ensureDir(outDir);

  const catalogSnippet = getCategoryContext(category);
  const prompt = `You are researching the "${category}" category for Skillbench.

Current catalog context for this category:
${catalogSnippet}

TASK: Run the full discover protocol. Search HN Algolia, GitHub, web search, and any other available tools. Find all serious contenders, new signals, and gaps.

IMPORTANT: Write your findings to ${outDir}/findings.md using the structure from agent-runs/agents.md. Also output findings to stdout.`;

  const result = await runClaude({
    systemPromptFile: resolve(ROOT, "agents/discover.md"),
    prompt,
    stage,
  });

  // If claude wrote the file directly, great. Otherwise write stdout.
  const findingsPath = resolve(outDir, "findings.md");

  if (!existsSync(findingsPath) && result.output) {
    writeFileSync(findingsPath, result.output, "utf-8");
  }

  const findingsSize = existsSync(findingsPath) ? formatBytes(readFileSync(findingsPath).length) : "0B";

  log(stage, `  Findings: ${findingsPath.split(/[/\\]/).slice(-2).join("/")} (${findingsSize})`);

  return { ...result, findingsPath };
}

async function stageDeepDive(category, runDir, discoverFindings) {
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

  const result = await runClaude({
    systemPromptFile: resolve(ROOT, "agents/deep-dive.md"),
    prompt,
    stage,
  });

  const findingsPath = resolve(outDir, "findings.md");

  if (!existsSync(findingsPath) && result.output) {
    writeFileSync(findingsPath, result.output, "utf-8");
  }

  const findingsSize = existsSync(findingsPath) ? formatBytes(readFileSync(findingsPath).length) : "0B";

  log(stage, `  Findings: ${findingsPath.split(/[/\\]/).slice(-2).join("/")} (${findingsSize})`);
  log(stage, `  Input was: discover findings ${formatBytes(discoverFindings.length)}`);

  return { ...result, findingsPath };
}

async function stageRank(category, runDir, discoverFindings, deepDiveFindings) {
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

  const result = await runClaude({
    systemPromptFile: resolve(ROOT, "agents/rank.md"),
    prompt,
    stage,
    model: "opus",
  });

  const findingsPath = resolve(outDir, "findings.md");

  if (!existsSync(findingsPath) && result.output) {
    writeFileSync(findingsPath, result.output, "utf-8");
  }

  const findingsSize = existsSync(findingsPath) ? formatBytes(readFileSync(findingsPath).length) : "0B";

  log(stage, `  Findings: ${findingsPath.split(/[/\\]/).slice(-2).join("/")} (${findingsSize})`);
  log(stage, `  Input was: discover ${formatBytes(discoverFindings.length)} + deep-dive ${formatBytes(deepDiveFindings.length)}`);

  return { ...result, findingsPath };
}

async function stageCatalogUpdate(category, rankFindingsPath) {
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
- If deep-dive findings contain YouTube video data, add a "videos" array to the skill entry:
  videos: [{ title: "...", youtubeId: "11-char-id", channel: "...", date: "YYYY-MM-DD" }]
  The SkillRecord type already has this field — just populate it from the findings.

CRITICAL RULE — every contender in a category ranking MUST have a full skill entry:
- Every ranking item MUST use "skillSlug" pointing to a skill entry in the skills object — NEVER use "externalUrl" alone.
- If a contender does not yet have a skill entry, CREATE one with at minimum: slug, name, repo/repoUrl (if available), summary, verdict, gettingStarted, relatedCategories, strengths, weaknesses, and evidence.
- For every skill you touch, if gettingStarted is missing or empty, add it: a short practical guide (2-3 sentences) on the best way to start using this tool — install command, key first step, what to try first. This is NOT the verdict — it's actionable setup advice. Use inline markdown: wrap commands in backticks like \`npm install foo\`, and **bold** key terms. Example: "Install via \`npm install -g @anthropic-ai/claude-code\`, then run \`claude init\` in your repo. Start with \`claude plan --issue <ticket>\` so it drafts a plan before writing code."
- For every category you touch, if howToStart is missing or empty, add it: an array of 3-5 short steps (strings) explaining how a newcomer should get started in this problem space. Use inline markdown: backticks for commands/tools, **bold** for key concepts. Example: ["Install the **#1 ranked** solution: \`npm install -g @anthropic-ai/claude-code\`", "Run \`claude init\` to link your repo", "Try \`claude plan --issue <ticket>\` for your first task"]
- The skill slug should be kebab-case (e.g. "brave-search-api", "salesforce-mcp").
- Add the new slug to the SkillSlug union type at the top of catalog.ts.
- This ensures every skill on the site has its own internal page at /skills/[slug].

Also run: npm run metrics:collect to refresh star counts.

CHANGELOG — after updating catalog.ts, append entries to src/data/changelog-entries.json for every meaningful change you made. Read the existing JSON array first, then append new objects and write back. Each entry:
{
  "date": "${new Date().toISOString().slice(0, 10)}",
  "type": "<ranking-change|new-contender|score-change|downgrade|category-added>",
  "slug": "<solution-slug or null>",
  "problem": "${category}",
  "title": "<short headline, e.g. 'Cursor added to coding-clis at #2'>",
  "detail": "<one sentence why this matters>",
  "source": "pipeline"
}
Only log significant changes — ranking moves, new contenders, downgrades. Do NOT log minor evidence additions or metric refreshes.

Be conservative — only change what the evidence supports. Preserve the existing TypeScript types.`;

  return await runClaude({
    prompt,
    stage,
    model: "opus",
  });
}

async function stageScreenshots(category) {
  const stage = "SCREENSHOTS";

  const searchStep = ENGINE === "codex"
    ? `a) Fetch the raw README and extract image URLs:
   curl -sS -L "https://raw.githubusercontent.com/{repo}/main/README.md" -o /tmp/readme_tmp.md
   (try "master" branch if "main" returns 404)
   Look for embedded images: lines matching ![...](...) — extract the image URLs.
   These are usually the best product-in-use shots.`
    : `a) Search for product-in-use screenshots:
   - WebFetch the raw README: https://raw.githubusercontent.com/{repo}/main/README.md
     Look for embedded images (![...](...)) that show the tool in action
   - WebFetch the raw README on "master" branch too if "main" returns 404
   - WebSearch: '"{skill name}" screenshot terminal' and '"{skill name}" demo in use'
   - Check official docs page if docsUrl exists`;

  const qualityStep = ENGINE === "codex"
    ? `c) QUALITY CHECK — after downloading, verify file size:
   ls -la public/screenshots/candidates/{slug}/
   REJECT any file under 50KB — these are thumbnails/badges/icons.
   If ImageMagick is available, also run: identify "public/screenshots/candidates/{slug}/cN.png"
   and reject images smaller than 800x400 pixels.

d) Pick the best candidate — prefer:
   - Images from README (usually show product in use)
   - Larger file size (higher quality)
   - PNG or JPG format
   If no candidate is >50KB, skip this skill.

e) Install winner:
   cp "public/screenshots/candidates/{slug}/cN.png" "public/screenshots/{slug}.png"`
    : `c) QUALITY CHECK — after downloading, verify resolution:
   Use: identify "public/screenshots/candidates/{slug}/cN.png" or file size check.
   REJECT any image smaller than 800x400 pixels or under 50KB — these are thumbnails/badges.

d) View each remaining candidate and score 1-10:
   - 8-10: Product clearly in use (terminal running, UI showing real workflow, agent output)
   - 5-7: Plausible but unclear
   - 1-4: Landing page, logo, badge, or unrelated

e) Install winner (score >= 7):
   cp "public/screenshots/candidates/{slug}/cN.png" "public/screenshots/{slug}.png"`;

  const toolNote = ENGINE === "codex"
    ? "- Use curl for ALL HTTP requests. Do NOT use WebFetch or WebSearch — they are not available."
    : "- Use WebFetch and WebSearch for finding images, curl for downloading.";

  const prompt = `TASK: Find and install real product-in-use screenshots for skills in the "${category}" category.

Step 1 — read src/lib/catalog.ts and find all skills where relatedCategories includes "${category}".
For each skill, note its slug and repo (e.g. "anthropics/claude-code").

Step 2 — for each skill, check if public/screenshots/{slug}.png already exists.
If it exists, check file size (must be >50KB). If it looks good, skip. Otherwise replace it.

Step 3 — for each skill needing a screenshot:
${searchStep}

b) Download up to 5 candidate images:
   mkdir -p public/screenshots/candidates/{slug}
   curl -L -sS -o "public/screenshots/candidates/{slug}/c1.png" "URL1" --max-time 15
   (repeat for each candidate, c1 through c5)

${qualityStep}

IMPORTANT RULES:
${toolNote}
- Prioritize README images — they are usually the best product-in-use shots.
- EVERY skill must have a screenshot attempt. Do not skip skills.
- Skip installing only if no candidate meets the minimum quality bar.`;

  return await runClaude({
    systemPromptFile: resolve(ROOT, "agents/screenshot-scout.md"),
    prompt,
    stage,
    timeoutMin: 60,
  });
}

function stageMetrics() {
  const stage = "METRICS";

  log(stage, "Collecting stars, downloads, and mentions…");
  const start = Date.now();

  const scripts = [
    { name: "github", cmd: "node scripts/collect-github.mjs" },
    { name: "downloads", cmd: "node scripts/collect-downloads.mjs" },
    { name: "mentions", cmd: "node scripts/collect-mentions.mjs" },
    { name: "classify", cmd: "node scripts/classify-skills.mjs" },
  ];

  for (const s of scripts) {
    try {
      execSync(s.cmd, { cwd: ROOT, stdio: "pipe", timeout: 120_000 });
      log(stage, `${s.name} collected`);
    } catch (e) {
      log(stage, `${s.name} FAILED (non-fatal): ${e.message?.slice(0, 200)}`);
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);

  return { ok: true, output: "metrics collected", elapsed };
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
// Auto-fix corrupted catalog.ts from LLM output
// ---------------------------------------------------------------------------
function stageFix() {
  const stage = "FIX";
  const catalogPath = resolve(ROOT, "src/lib/catalog.ts");

  log(stage, "Attempting auto-fix of catalog.ts…");
  const start = Date.now();

  try {
    let src = readFileSync(catalogPath, "utf-8");
    let fixes = 0;

    // Fix 1: Duplicated array tails — tags: ["a", "b"], "b"], "b"],
    const beforeTags = src;

    src = src.replace(/^(\s*tags:\s*\[[^\]]+\])(?:,\s*(?:"[^"]*"(?:,\s*"[^"]*")*\])+)+,?/gm, (match, first) => {
      return first + ",";
    });
    if (src !== beforeTags) {
      const count = (beforeTags.match(/tags:.*\], "/g) || []).length;

      fixes += count;
      log(stage, `  Fixed ${count} corrupted tags arrays`);
    }

    // Fix 2: Extra closing braces — languages: { ... } } } } },
    const beforeBraces = src;

    src = src.replace(/(languages:\s*\{[^}]+\})\s*(\}\s*){2,}/g, "$1 }");
    if (src !== beforeBraces) {
      const count = (beforeBraces.match(/languages:.*\} \} \}/g) || []).length;

      fixes += count;
      log(stage, `  Fixed ${count} extra closing braces`);
    }

    // Fix 3: packageSize without languages but with extra braces
    const beforePkg = src;

    src = src.replace(/(packageSize:\s*\{\s*repoSizeKb:\s*\d+)\s*\}\s*(\}\s*){2,}/g, "$1 }");
    if (src !== beforePkg) fixes++;

    // Fix 4: Invalid skillType enum values
    const typeMap = { "CLI Tool": "Generator", "Tool": "Generator", "Service": "Connector", "Agent": "Orchestrator", "Suite": "Generator", "Platform": "Connector" };

    for (const [bad, good] of Object.entries(typeMap)) {
      const re = new RegExp(`skillType: "${bad}"`, "g");
      const count = (src.match(re) || []).length;

      if (count > 0) {
        src = src.replace(re, `skillType: "${good}"`);
        fixes += count;
        log(stage, `  Fixed ${count} invalid skillType "${bad}" → "${good}"`);
      }
    }

    // Fix 5: Invalid skillTier enum values
    const tierMap = { "Standalone": "Atomic", "Single": "Atomic", "Multi": "Composite", "Bundle": "Pack" };

    for (const [bad, good] of Object.entries(tierMap)) {
      const re = new RegExp(`skillTier: "${bad}"`, "g");
      const count = (src.match(re) || []).length;

      if (count > 0) {
        src = src.replace(re, `skillTier: "${good}"`);
        fixes += count;
        log(stage, `  Fixed ${count} invalid skillTier "${bad}" → "${good}"`);
      }
    }

    if (fixes > 0) {
      writeFileSync(catalogPath, src, "utf-8");
      log(stage, `  Applied ${fixes} total fixes`);
    } else {
      log(stage, "  No known corruption patterns found");
    }

    const elapsed = ((Date.now() - start) / 1000).toFixed(1);

    return { ok: true, output: `${fixes} fixes`, elapsed, fixes };
  } catch (e) {
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);

    log(stage, `  Auto-fix error: ${e.message}`);
    return { ok: false, output: e.message, elapsed, fixes: 0 };
  }
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
// Phase 1: Research (parallelizable) — Discover → Deep-Dive → Rank
// ---------------------------------------------------------------------------
async function runResearch(category) {
  const ts = timestamp();
  const runDir = resolve(ROOT, "agent-runs", `${ts}_run_${category}`);

  ensureDir(runDir);

  console.log(`\n${"=".repeat(60)}`);
  console.log(`  Research — ${category}`);
  console.log(`  Run dir: ${runDir}`);
  console.log(`  Started: ${new Date().toISOString()}`);
  console.log(`${"=".repeat(60)}\n`);

  const results = {};

  // Stage 1: Discover
  log(category, "Stage 1/3: Discover");
  const discover = await stageDiscover(category, runDir);

  results.discover = discover;
  const discoverFindings = readFile(discover.findingsPath);

  // Stage 2: Deep-Dive
  log(category, "Stage 2/3: Deep-Dive");
  const deepDive = await stageDeepDive(category, runDir, discoverFindings);

  results.deepDive = deepDive;
  const deepDiveFindings = readFile(deepDive.findingsPath);

  // Stage 3: Rank
  log(category, "Stage 3/3: Rank");
  const rank = await stageRank(category, runDir, discoverFindings, deepDiveFindings);

  results.rank = rank;

  const totalElapsed = Object.values(results).reduce((sum, r) => sum + parseFloat(r.elapsed || "0"), 0);

  log(category, `Research done in ${formatDuration(totalElapsed)}`);

  return { category, runDir, rankFindingsPath: rank.findingsPath, results };
}

// ---------------------------------------------------------------------------
// Phase 2: Finalize (sequential) — Catalog Update → Metrics → QA
// ---------------------------------------------------------------------------
async function runFinalize(researchResults, concurrency = 1) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  Finalize — ${researchResults.length} categories`);
  console.log(`  Started: ${new Date().toISOString()}`);
  console.log(`${"=".repeat(60)}\n`);

  const finalResults = {};

  // Catalog updates — one at a time to avoid race conditions
  for (const r of researchResults) {
    log("CATALOG", `Updating catalog for ${r.category}…`);
    r.results.catalogUpdate = await stageCatalogUpdate(r.category, r.rankFindingsPath);
  }

  // Screenshots — find real product-in-use images (concurrency-limited, same as research)
  const screenshotLimit = Math.min(concurrency, researchResults.length);

  log("SCREENSHOTS", `Finding product screenshots for ${researchResults.length} categories, ${screenshotLimit} in parallel…`);
  {
    const queue = [...researchResults];
    const running = new Set();

    await new Promise((resolve) => {
      function next() {
        if (queue.length === 0 && running.size === 0) return resolve();
        while (running.size < screenshotLimit && queue.length > 0) {
          const r = queue.shift();

          running.add(r.category);
          log("SCREENSHOTS", `Starting screenshots for ${r.category}…`);
          stageScreenshots(r.category)
            .then((res) => { r.results.screenshots = res; })
            .catch((e) => log("SCREENSHOTS", `${r.category} FAILED: ${e.message}`))
            .finally(() => { running.delete(r.category); next(); });
        }
      }
      next();
    });
  }

  // Metrics — once for all
  log("METRICS", "Collecting stars, downloads, and mentions…");
  finalResults.metrics = stageMetrics();

  // QA — with auto-fix retry loop (max 5 attempts)
  const MAX_QA_RETRIES = 5;

  for (let attempt = 1; attempt <= MAX_QA_RETRIES; attempt++) {
    log("QA", `Attempt ${attempt}/${MAX_QA_RETRIES} — running build + link check…`);
    finalResults.qa = stageQA();

    if (finalResults.qa.ok) break;

    if (attempt === MAX_QA_RETRIES) {
      log("QA", `Build still failing after ${MAX_QA_RETRIES} fix attempts — giving up`);
      break;
    }

    log("QA", "Build failed — attempting auto-fix…");
    const fix = stageFix();

    finalResults.fix = fix;
    if (fix.fixes === 0) {
      log("QA", "No fixable patterns found — manual intervention needed");
      break;
    }
  }

  return finalResults;
}

// ---------------------------------------------------------------------------
// Print summary
// ---------------------------------------------------------------------------
function printSummary(researchResults, finalResults) {
  console.log(`\n${"=".repeat(60)}`);
  console.log("  Ralph Pipeline — Final Summary");
  console.log(`  Finished: ${new Date().toISOString()}`);
  console.log(`${"=".repeat(60)}`);

  for (const r of researchResults) {
    const stages = r.results;
    const passed = Object.values(stages).filter((s) => s.ok).length;
    const failed = Object.values(stages).filter((s) => !s.ok).length;
    const total = Object.values(stages).reduce((sum, s) => sum + parseFloat(s.elapsed || "0"), 0);

    console.log(`\n  ${r.category} (${formatDuration(total)} | ${passed}✓ ${failed}✗)`);
    for (const [name, s] of Object.entries(stages)) {
      const icon = s.ok ? "✓" : "✗";

      console.log(`    ${icon} ${name.padEnd(16)} ${formatDuration(parseFloat(s.elapsed || "0"))}`);
    }
  }

  console.log("\n  Finalize");
  for (const [name, s] of Object.entries(finalResults)) {
    const icon = s.ok ? "✓" : "✗";

    console.log(`    ${icon} ${name.padEnd(16)} ${formatDuration(parseFloat(s.elapsed || "0"))}`);
  }
  console.log(`${"=".repeat(60)}\n`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const opts = parseArgs();

  ENGINE = opts.engine;
  if (ENGINE === "codex") {
    log("INIT", `Using Codex CLI engine (research: ${CODEX_MODEL_MAP.sonnet}, ranking: ${CODEX_MODEL_MAP.opus})`);
  }

  const runOnce = async () => {
    const researchResults = [];

    if (opts.concurrency <= 1) {
      // Sequential research + finalize per category (legacy behavior)
      for (const category of opts.categories) {
        const r = await runResearch(category);

        researchResults.push(r);
      }
    } else {
      // Parallel research
      const limit = Math.min(opts.concurrency, opts.categories.length);

      console.log(`Running ${opts.categories.length} categories, ${limit} research agents in parallel\n`);
      const queue = [...opts.categories];
      const running = new Set();

      await new Promise((resolve) => {
        function next() {
          if (queue.length === 0 && running.size === 0) return resolve();
          while (running.size < limit && queue.length > 0) {
            const cat = queue.shift();

            running.add(cat);
            runResearch(cat)
              .then((r) => researchResults.push(r))
              .catch((e) => log("ERROR", `${cat}: ${e.message}`))
              .finally(() => { running.delete(cat); next(); });
          }
        }
        next();
      });
    }

    // Phase 2: sequential finalize (catalog updates, metrics, QA)
    const finalResults = await runFinalize(researchResults, opts.concurrency);

    // Summary
    printSummary(researchResults, finalResults);
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
