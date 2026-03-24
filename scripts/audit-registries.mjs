/* eslint-disable no-console */
/**
 * Audit SkillPack catalog against external registries.
 * Fetches awesome-lists and registries, compares against our skillList.
 * Outputs tools found externally but missing from SkillPack.
 *
 * Usage: node scripts/audit-registries.mjs
 */
import fs from "node:fs";
import path from "node:path";

const CATALOG_PATH = path.resolve("src/lib/catalog.ts");

// Awesome lists to check (GitHub raw URLs)
const AWESOME_LISTS = [
  {
    name: "awesome-mcp-servers",
    url: "https://raw.githubusercontent.com/punkpeye/awesome-mcp-servers/main/README.md",
  },
  {
    name: "awesome-ai-agents",
    url: "https://raw.githubusercontent.com/e2b-dev/awesome-ai-agents/main/README.md",
  },
  {
    name: "awesome-llm-apps",
    url: "https://raw.githubusercontent.com/Shubhamsaboo/awesome-llm-apps/main/README.md",
  },
];

/**
 * Extract all skill names and repos from catalog.ts.
 */
function extractOurSkills() {
  const source = fs.readFileSync(CATALOG_PATH, "utf-8");
  const names = new Set();
  const repos = new Set();

  for (const match of source.matchAll(/name:\s*"([^"]+)"/g)) {
    names.add(match[1].toLowerCase());
  }
  for (const match of source.matchAll(/repo:\s*"([^"]+)"/g)) {
    repos.add(match[1].toLowerCase());
  }

  return { names, repos };
}

/**
 * Extract GitHub repo links from a markdown README.
 * Returns array of { name, repo } objects.
 */
function extractFromMarkdown(markdown) {
  const tools = [];
  // Match markdown links: [Name](https://github.com/owner/repo)
  const linkRegex = /\[([^\]]+)\]\(https?:\/\/github\.com\/([^/]+\/[^/)#\s]+)\)/g;
  let match;

  while ((match = linkRegex.exec(markdown)) !== null) {
    const name = match[1].trim();
    const repo = match[2].replace(/\/$/, "").toLowerCase();

    if (name.length > 1 && name.length < 60 && !repo.includes("..")) {
      tools.push({ name, repo });
    }
  }

  return tools;
}

/**
 * Fetch and parse an awesome list.
 */
async function fetchAwesomeList(listConfig) {
  try {
    const res = await fetch(listConfig.url, {
      headers: { "User-Agent": "skillbench-audit/1.0" },
    });

    if (!res.ok) {
      console.warn(`  ⚠ Failed to fetch ${listConfig.name}: HTTP ${res.status}`);
      return [];
    }

    const markdown = await res.text();

    return extractFromMarkdown(markdown);
  } catch (err) {
    console.warn(`  ⚠ Error fetching ${listConfig.name}: ${err.message}`);
    return [];
  }
}

async function main() {
  const { names: ourNames, repos: ourRepos } = extractOurSkills();

  console.log(`SkillPack catalog: ${ourNames.size} skills, ${ourRepos.size} repos\n`);

  const allMissing = [];

  for (const list of AWESOME_LISTS) {
    console.log(`Checking ${list.name}...`);
    const tools = await fetchAwesomeList(list);

    console.log(`  Found ${tools.length} GitHub links`);

    const missing = tools.filter((t) => {
      const nameMatch = ourNames.has(t.name.toLowerCase());
      const repoMatch = ourRepos.has(t.repo);

      return !nameMatch && !repoMatch;
    });

    if (missing.length > 0) {
      console.log(`  Missing from SkillPack (${missing.length}):`);
      for (const tool of missing.slice(0, 20)) {
        console.log(`    - ${tool.name} (github.com/${tool.repo})`);
      }
      if (missing.length > 20) {
        console.log(`    ... and ${missing.length - 20} more`);
      }
    } else {
      console.log("  All tools accounted for!");
    }

    allMissing.push(...missing.map((t) => ({ ...t, source: list.name })));
    console.log();

    // Rate limit between fetches
    await new Promise((r) => setTimeout(r, 500));
  }

  // Deduplicate by repo
  const seen = new Set();
  const deduped = allMissing.filter((t) => {
    if (seen.has(t.repo)) return false;
    seen.add(t.repo);
    return true;
  });

  console.log("\n═══ Summary ═══");
  console.log(`Total unique tools missing from SkillPack: ${deduped.length}`);

  if (deduped.length > 0) {
    // Write report to file
    const report = deduped
      .map((t) => `${t.name}\thttps://github.com/${t.repo}\t${t.source}`)
      .join("\n");

    const reportPath = path.resolve("scripts/audit-report.tsv");

    fs.writeFileSync(reportPath, `Name\tGitHub URL\tSource\n${report}\n`, "utf-8");
    console.log(`Report written to: ${reportPath}`);
  }
}

main().catch(console.error);
