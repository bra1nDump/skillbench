export type SkillSlug =
  | "figma-mcp-server-guide"
  | "figma-use"
  | "vibma"
  | "firecrawl-mcp-server"
  | "exa-mcp-server"
  | "google-workspace-mcp"
  | "openhands"
  | "ralph-loop-agent"
  | "swe-agent"
  | "claude-code"
  | "aider"
  | "continue-dev"
  | "opencode"
  | "codex-cli"
  | "gemini-cli"
  | "browser-use"
  | "playwright-mcp"
  | "stagehand";

export type CategorySlug =
  | "product-business-development"
  | "teams-of-agents"
  | "ux-ui"
  | "coding-clis"
  | "web-browsing";

export type PlatformSlug =
  | "figma"
  | "google-workspace"
  | "browser"
  | "terminal"
  | "github";

export type PlatformRecord = {
  slug: PlatformSlug;
  name: string;
  url: string;
  summary: string;
  nativeSupport: string;
  relatedCategories: CategorySlug[];
  relatedSkills: SkillSlug[];
};

export type EvidenceItem = {
  quality: "strong" | "moderate";
  title: string;
  url: string;
  date: string;
  engagement: string;
  who: string;
  gist: string;
  selfReported?: boolean;
};

export type SkillRecord = {
  slug: SkillSlug;
  name: string;
  repo: string;
  repoUrl: string;
  readmeBranch?: string;
  official: boolean;
  status: "active" | "watch";
  summary: string;
  verdict: string;
  docsUrl?: string;
  productUrl?: string;
  relatedCategories: CategorySlug[];
  strengths: string[];
  weaknesses: string[];
  evidence: EvidenceItem[];
  githubStars?: string;
  metrics?: {
    stars?: Array<{ date: string; value: number }>;
    installs?: Array<{ date: string; value: number }>;
    mentions?: Array<{ date: string; value: number }>;
  };
};

export type CategoryRecord = {
  slug: CategorySlug;
  name: string;
  deck: string;
  verdict: string[];
  meta: string[];
  ranking: Array<{
    rank: string;
    contender: string;
    skillSlug?: SkillSlug;
    externalUrl?: string;
    bestFor: string;
    why: string;
    watch: string;
    belowCutLine?: boolean;
  }>;
  observedOutputs: Array<{
    title: string;
    summary: string;
    href: string;
    date: string;
  }>;
  liveSignals: Array<{
    label: string;
    title: string;
    href: string;
    date: string;
    note: string;
  }>;
  headToHead: Array<{
    left: string;
    right: string;
    gist: string;
  }>;
  whatChangesThis: string[];
};

export type BundleSlug =
  | "karpathy-stack"
  | "swyx-agent-stack"
  | "mckay-wrigley-stack"
  | "simonw-stack"
  | "levelsio-stack"
  | "yampeleg-stack";

export type BundleRecord = {
  slug: BundleSlug;
  persona: string;
  personaHandle: string;
  personaUrl: string;
  name: string;
  summary: string;
  skills: SkillSlug[];
  source: string;
  sourceUrl: string;
  date: string;
};

export const bundles: Record<BundleSlug, BundleRecord> = {
  "karpathy-stack": {
    slug: "karpathy-stack",
    persona: "Andrej Karpathy",
    personaHandle: "@karpathy",
    personaUrl: "https://x.com/karpathy",
    name: "Karpathy Three-Tier Coding Stack",
    summary:
      "Three-layer strategy: Cursor for autocomplete and small edits, Claude Code/Codex for larger functional blocks and prototyping, GPT-5 Pro for hardest bugs. Went from 80% manual to 80% agent coding in one month. Coined 'vibe coding.'",
    skills: ["claude-code", "codex-cli"],
    source: "X thread: 'A few random notes from claude coding quite a bit'",
    sourceUrl: "https://x.com/karpathy/status/2015883857489522876",
    date: "2025-12",
  },
  "swyx-agent-stack": {
    slug: "swyx-agent-stack",
    persona: "swyx (Shawn Wang)",
    personaHandle: "@swyx",
    personaUrl: "https://x.com/swyx",
    name: "swyx Research-First Agent Stack",
    summary:
      "Claude Code for agentic coding, Firecrawl for deep web research. Latent Space podcast (top 3 AI podcast, 30-50th overall US Tech) features Claude Code team. Research-first approach: scrape, analyze, then build.",
    skills: ["claude-code", "firecrawl-mcp-server"],
    source: "Latent Space podcast + Scaling without Slop essay",
    sourceUrl: "https://www.latent.space/p/2026",
    date: "2026-01",
  },
  "mckay-wrigley-stack": {
    slug: "mckay-wrigley-stack",
    persona: "McKay Wrigley",
    personaHandle: "@mckaywrigley",
    personaUrl: "https://x.com/mckaywrigley",
    name: "McKay Wrigley Shipping Stack",
    summary:
      "Claude Code as primary agentic coding tool ('best AI coding tool in the world'). Ships full-stack apps with Cursor for autocomplete and Claude Code for agentic terminal sessions.",
    skills: ["claude-code"],
    source: "X post: 'CLAUDE CODE — Claude Code + Opus 4.5 is the best AI coding tool in the world'",
    sourceUrl: "https://x.com/mckaywrigley/status/1997403303161024895",
    date: "2026-02",
  },
  "simonw-stack": {
    slug: "simonw-stack",
    persona: "Simon Willison",
    personaHandle: "@simonw",
    personaUrl: "https://x.com/simonw",
    name: "Simon Willison Terminal Agents Stack",
    summary:
      "Uses Claude Code, Codex CLI, and Gemini CLI as 'terminal agents' for async code research. Fires off 2-3 research projects daily, checks back 10 minutes later. Coined the term 'terminal agents' for this category.",
    skills: ["claude-code", "codex-cli", "gemini-cli"],
    source: "X post: 'Claude Code, OpenAI Codex (CLI) and now Gemini CLI — we need a name for this category'",
    sourceUrl: "https://x.com/simonw/status/1937865080902934911",
    date: "2025-06",
  },
  "levelsio-stack": {
    slug: "levelsio-stack",
    persona: "Pieter Levels",
    personaHandle: "@levelsio",
    personaUrl: "https://x.com/levelsio",
    name: "Levelsio Server-First Coding Stack",
    summary:
      "SSH into a cheap VPS, install Claude Code, and 'raw dog dev on the server.' No IDE, no Git push/pull — Claude codes directly on production. Switched between Claude Code and Codex CLI depending on quality. Coined 'vibecoding on steroids.'",
    skills: ["claude-code", "codex-cli"],
    source: "X thread: 'HOW TO RAW DOG DEV ON THE SERVER'",
    sourceUrl: "https://x.com/levelsio/status/1957518592284717558",
    date: "2025-08",
  },
  "yampeleg-stack": {
    slug: "yampeleg-stack",
    persona: "Yam Peleg",
    personaHandle: "@Yampeleg",
    personaUrl: "https://x.com/Yampeleg",
    name: "Yam Peleg CLI Agents Field Report",
    summary:
      "Used Claude Code, Codex CLI, and Gemini CLI as daily drivers for one week covering coding, research, sysadmin, and automation. Claude Code has the best CLI, Codex is best for 'fire and forget' coding tasks, Gemini has the best web search.",
    skills: ["claude-code", "codex-cli", "gemini-cli"],
    source: "X post: 'CLI Agents | Week 1 Field Report: Claude Code vs Codex-max vs Gemini 3'",
    sourceUrl: "https://x.com/Yampeleg/status/1991608983292141681",
    date: "2025-12",
  },
};

export const bundleList = Object.values(bundles);

export function getBundle(slug: string): BundleRecord | undefined {
  return bundles[slug as BundleSlug];
}

export const skills: Record<SkillSlug, SkillRecord> = {
  "figma-mcp-server-guide": {
    slug: "figma-mcp-server-guide",
    name: "Figma MCP Server Guide",
    repo: "figma/mcp-server-guide",
    repoUrl: "https://github.com/figma/mcp-server-guide",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Official Figma guide for the MCP path. Strongest trust lane for design context inside agent workflows.",
    verdict:
      "Best default when trust, officialness, and team adoption matter more than raw write access.",
    docsUrl:
      "https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers",
    githubStars: "399",
    relatedCategories: ["ux-ui"],
    strengths: [
      "Official provider trust",
      "Clear path into real Figma workflows",
      "Best fit for teams standardizing on the official lane",
    ],
    weaknesses: [
      "Less exciting than unofficial write-access challengers",
      "Still tied to Figma auth and setup discipline",
    ],
    evidence: [
      {
        quality: "strong",
        title: "AIMultiple: Figma MCP Server Tested — reduces initial dev time 50-70%",
        url: "https://research.aimultiple.com/figma-to-code/",
        date: "2026-02",
        engagement: "Independent benchmark by AIMultiple",
        who: "AIMultiple (independent tech analyst)",
        gist: "Figma MCP converts designs to functional code with notable inaccuracies requiring oversight. Reduces initial dev time 50-70% for teams with design system maturity.",
      },
      {
        quality: "strong",
        title: "TechBuzz: Figma Opens Design Code to AI Agents via Expanded MCP Server",
        url: "https://www.techbuzz.ai/articles/figma-opens-design-code-to-ai-agents-via-expanded-mcp-server",
        date: "2026-02",
        engagement: "Tech news coverage",
        who: "TechBuzz (independent tech news)",
        gist: "MCP server now supports Figma Make. Reads native properties: variables, design tokens, components, variants, auto layout rules.",
      },
    ],
  },
  "figma-use": {
    slug: "figma-use",
    name: "Figma-use",
    repo: "dannote/figma-use",
    repoUrl: "https://github.com/dannote/figma-use",
    readmeBranch: "master",
    official: false,
    status: "active",
    summary:
      "Community write-access contender for controlling Figma directly from the command line and agent loops.",
    verdict:
      "Best public challenger when you care about direct mutation and builder energy more than official trust.",
    relatedCategories: ["ux-ui"],
    strengths: [
      "Strong write-access story",
      "Real public builder traction",
      "Clear GitHub-first artifact surface",
    ],
    weaknesses: [
      "Weaker institutional trust than the official Figma path",
      "More likely to matter for power users than broad teams",
    ],
    githubStars: "494",
    evidence: [
      {
        quality: "moderate",
        title: "figma-use: 100+ commands, full read/write access via Chrome DevTools Protocol",
        url: "https://github.com/dannote/figma-use",
        date: "2026-01",
        engagement: "Active GitHub development",
        who: "dannote (independent developer)",
        gist: "Key differentiator: Figma's official MCP can read but can't modify. figma-use provides full write access via CDP — 90+ MCP tools for creating shapes, text, components.",
        selfReported: true,
      },
      {
        quality: "strong",
        title: "Show HN: Figma-use — CLI to control Figma for AI agents (115 points, 37 comments)",
        url: "https://news.ycombinator.com/item?id=46665169",
        date: "2026-01",
        engagement: "115 points, 37 comments on HN front page",
        who: "Hacker News community (substantive discussion from multiple independent commenters)",
        gist: "Hit HN front page. Community discussion covered CLI vs MCP trade-offs, design system integration, Pro license requirements. Multiple independent developers engaged.",
      },
      {
        quality: "moderate",
        title: "Into Design Systems: Claude Code designs in Figma — credits figma-use as foundational",
        url: "https://www.intodesignsystems.com/blog/claude-code-figma-no-mcp",
        date: "2026-02",
        engagement: "Independent blog post, spawned derivative project (figma-cli, 303 stars)",
        who: "Sil Bormüller (independent developer, intodesignsystems.com)",
        gist: "Built an alternative Figma CLI inspired by figma-use, explicitly crediting it as foundational. Derivative project (silships/figma-cli) has 303 stars and references figma-use in code.",
      },
    ],
  },
  vibma: {
    slug: "vibma",
    name: "Vibma",
    repo: "ufira-ai/Vibma",
    repoUrl: "https://github.com/ufira-ai/Vibma",
    readmeBranch: "main",
    official: false,
    status: "watch",
    summary:
      "Design-system-specific challenger focused on letting agents create directly in Figma.",
    verdict:
      "Interesting challenger, but still clearly behind the official path and Figma-use on public trust.",
    relatedCategories: ["ux-ui"],
    strengths: [
      "Very explicit write-directly positioning",
      "Good fit for people testing aggressive design automation",
    ],
    weaknesses: [
      "Low public traction so far",
      "Trust is still builder-post level rather than broad adoption",
    ],
    githubStars: "355",
    evidence: [
      {
        quality: "moderate",
        title: "Vibma: design-system-specific Figma automation via MCP",
        url: "https://github.com/ufira-ai/Vibma",
        date: "2026-02",
        engagement: "303 GitHub stars, 23 forks in ~2 weeks. Show HN got 2 points.",
        who: "Ufira AI (independent team, forked from cursor-talk-to-figma-mcp)",
        gist: "Watch-status: 12-day-old project with fast initial star growth but zero independent reviews, blog posts, or social media coverage yet. No Reddit, Twitter, or YouTube presence found.",
        selfReported: true,
      },
      {
        quality: "moderate",
        title: "Show HN: Vibma — let agents create professional design system in Figma, directly",
        url: "https://news.ycombinator.com/item?id=47217411",
        date: "2026-03",
        engagement: "Show HN post, low engagement",
        who: "Ufira AI team (Show HN submission)",
        gist: "Show HN launch of Vibma. Very early-stage with minimal community discussion. Confirms watch status.",
        selfReported: true,
      },
    ],
  },
  "firecrawl-mcp-server": {
    slug: "firecrawl-mcp-server",
    name: "Firecrawl MCP Server",
    repo: "firecrawl/firecrawl-mcp-server",
    repoUrl: "https://github.com/firecrawl/firecrawl-mcp-server",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Official Firecrawl MCP for scraping, extraction, and deep research workflows.",
    verdict:
      "Best research-side skill when the job is business intelligence across messy public websites.",
    docsUrl: "https://firecrawl.dev",
    productUrl: "https://www.firecrawl.dev/playground",
    relatedCategories: ["product-business-development"],
    strengths: [
      "Official provider support",
      "Strong extraction and scraping shape",
      "Best fit when research means real web pages, not just search snippets",
    ],
    weaknesses: [
      "Not the system of record itself",
      "Needs a downstream workspace if you want operating memory",
    ],
    githubStars: "5.8K+",
    metrics: {
      stars: [
        { date: "2024-06", value: 8000 },
        { date: "2024-09", value: 15000 },
        { date: "2024-12", value: 25000 },
        { date: "2025-03", value: 35000 },
        { date: "2025-06", value: 45000 },
        { date: "2025-09", value: 55000 },
        { date: "2025-12", value: 63000 },
        { date: "2026-03", value: 5756 },
      ],
    },
    evidence: [
      {
        quality: "strong",
        title: "AIMultiple MCP Benchmark: Firecrawl fastest MCP for web search — 7s avg, 83% accuracy",
        url: "https://aimultiple.com/browser-mcp",
        date: "2026-02",
        engagement: "Independent benchmark, multiple MCPs tested",
        who: "AIMultiple (independent tech analyst)",
        gist: "Firecrawl was the fastest MCP for web search and extraction with 7-second average run time and 83% accuracy. 64.8% success on browser automation tasks.",
      },
      {
        quality: "strong",
        title: "Firecrawl raises $14.5M Series A, 350K+ developers, YC-backed",
        url: "https://blog.devgenius.io/firecrawl-for-ai-agents-skills-vs-mcp-servers-for-web-scraping-051b701b28f9",
        date: "2026-02",
        engagement: "Dev Genius article, adoption metrics",
        who: "JP Caparas (Dev Genius), citing YC funding round",
        gist: "YC-backed, $14.5M Series A (Aug 2025). 350K+ developers using API. Returns clean markdown optimized for LLMs.",
      },
    ],
  },
  "exa-mcp-server": {
    slug: "exa-mcp-server",
    name: "Exa MCP Server",
    repo: "exa-labs/exa-mcp-server",
    repoUrl: "https://github.com/exa-labs/exa-mcp-server",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Official Exa MCP for fast web search and crawling when the workflow is search-first rather than page-ops-first.",
    verdict:
      "Best search-heavy research skill, but not as strong as Firecrawl once the workflow leans into extraction and page actions.",
    relatedCategories: ["product-business-development"],
    strengths: [
      "Fast search-first workflow",
      "Official provider support",
      "Good fit for discovery and initial market mapping",
    ],
    weaknesses: [
      "Less differentiated when you need operational follow-through",
      "Weaker than Workspace MCP for actually running the business surface",
    ],
    githubStars: "4.0K+",
    evidence: [
      {
        quality: "moderate",
        title: "Exa announces best agentic search endpoint — faster, cheaper, structured outputs",
        url: "https://exa.ai/research",
        date: "2026-03",
        engagement: "Official announcement",
        who: "Exa (official)",
        gist: "New agentic endpoint with field-level grounding, structured outputs. Semantic search across billions of docs including code and papers.",
        selfReported: true,
      },
      {
        quality: "moderate",
        title: "FlowHunt MCP Server Review: Exa scores 5/10",
        url: "https://www.flowhunt.io/mcp-servers/exa/",
        date: "2025-12",
        engagement: "Independent MCP directory review with scoring",
        who: "FlowHunt (independent MCP review platform)",
        gist: "Scored 5/10. Praised setup simplicity and MIT license. Criticized lack of documentation on prompts, resources, and tools. No sampling support.",
      },
      {
        quality: "moderate",
        title: "MarkTechPost: Tutorial on using Exa MCP Server with Claude Desktop",
        url: "https://www.marktechpost.com/2025/04/30/tutorial-on-seamlessly-accessing-any-linkedin-profile-with-exa-mcp-server-and-claude-desktop-using-the-model-context-protocol-mcp/",
        date: "2025-04",
        engagement: "Tutorial with step-by-step walkthrough",
        who: "Asif Razzaq (MarkTechPost, independent tech news)",
        gist: "Step-by-step tutorial for using exa-mcp-server with Claude Desktop to access LinkedIn profiles via MCP. No sponsorship disclosure.",
      },
      {
        quality: "moderate",
        title: "Alan He: Claude Code with Exa MCP — hands-on review",
        url: "https://en.1991421.cn/2026/01/14/claude-code-with-exa-mcp/",
        date: "2026-01",
        engagement: "Personal developer blog review",
        who: "Alan He (independent developer)",
        gist: "Tested Exa MCP with Claude Code for a day and found it 'quite good,' praising search quality and speed. Covers pricing, installation, and practical usage.",
      },
      {
        quality: "moderate",
        title: "PulseMCP: Exa ranked Top Pick MCP server, #52 globally",
        url: "https://www.pulsemcp.com/servers/exa",
        date: "2026-02",
        engagement: "Estimated 706K visitors, Top Pick badge",
        who: "PulseMCP (independent MCP directory)",
        gist: "Listed as Top Pick. Released Nov 27, 2024. Ranked #52 globally with estimated 706K visitors. Independent aggregator positioning.",
      },
    ],
  },
  "google-workspace-mcp": {
    slug: "google-workspace-mcp",
    name: "Google Workspace MCP",
    repo: "taylorwilsdon/google_workspace_mcp",
    repoUrl: "https://github.com/taylorwilsdon/google_workspace_mcp",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "The most complete public Google Workspace MCP surface right now across Gmail, Docs, Sheets, Calendar, Drive, and more.",
    verdict:
      "Best broad operating skill for product and business workflows because it turns the agent into an operator, not just a researcher.",
    docsUrl: "https://workspacemcp.com",
    productUrl: "https://workspacemcp.com",
    githubStars: "1.8K+",
    relatedCategories: ["product-business-development"],
    strengths: [
      "Huge breadth across core business tools",
      "Best fit when the job includes reading and writing real operating docs",
      "Strong ecosystem momentum",
    ],
    weaknesses: [
      "Community-built rather than Google-official",
      "Auth and scope management matter a lot",
      "Google's own Workspace CLI removed MCP mode 2 days after launch — signals instability in the MCP approach for this surface",
    ],
    evidence: [
      {
        quality: "strong",
        title: "VentureBeat: Google Workspace CLI brings Gmail, Docs, Sheets into common interface for AI agents",
        url: "https://venturebeat.com/orchestration/google-workspace-cli-brings-gmail-docs-sheets-and-more-into-a-common",
        date: "2026-03",
        engagement: "VentureBeat feature article",
        who: "VentureBeat (tier-1 tech publication)",
        gist: "Google released official Workspace CLI with built-in MCP server. But MCP mode was removed 2 days later — CLI approach deemed better for vast API surface.",
      },
      {
        quality: "moderate",
        title: "DEV: Not Everything Needs MCP — What Google Workspace CLI Taught Us",
        url: "https://dev.to/gys/not-everything-needs-mcp-what-google-workspace-cli-taught-us-about-ai-agent-architecture-2doe",
        date: "2026-03",
        engagement: "DEV Community article",
        who: "Community developer analysis",
        gist: "Analysis of why Google removed MCP from their CLI. For broad API surfaces, CLI 'order from the kitchen' approach beats MCP 'spread entire menu' approach.",
      },
      {
        quality: "moderate",
        title: "PulseMCP: Google Workspace MCP Server by Taylor Wilsdon — ranked #1 for Workspace",
        url: "https://www.pulsemcp.com/servers/taylorwilsdon-google-workspace",
        date: "2026-03",
        engagement: "Ranked #1 on PulseMCP and Glama for workspace category",
        who: "PulseMCP (independent MCP server directory)",
        gist: "Independent MCP directory ranks this as the #1 Google Workspace MCP server. Listed in the official Anthropic modelcontextprotocol servers repo.",
      },
      {
        quality: "moderate",
        title: "WinBuzzer: New Google Workspace CLI Offers Built-In MCP Server for AI Agents",
        url: "https://winbuzzer.com/2026/03/06/google-workspace-cli-mcp-server-ai-agents-xcxwbn/",
        date: "2026-03",
        engagement: "WinBuzzer tech publication article",
        who: "WinBuzzer (independent tech publication)",
        gist: "Covers Google's official Workspace CLI release with built-in MCP server, providing competition/validation for the Taylor Wilsdon community server.",
      },
    ],
  },
  openhands: {
    slug: "openhands",
    name: "OpenHands",
    repo: "OpenHands/OpenHands",
    repoUrl: "https://github.com/OpenHands/OpenHands",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "Open-source software agent surface with the broadest public traction in the long-running development lane.",
    verdict:
      "Best default software-factory contender when you want a broad autonomous development surface with real public gravity.",
    docsUrl: "https://docs.openhands.dev",
    productUrl: "https://www.openhands.ai",
    relatedCategories: ["teams-of-agents"],
    strengths: [
      "Massive public traction",
      "Clear software-agent framing",
      "Strong benchmark and adoption story",
    ],
    weaknesses: [
      "Heavier surface area than a simple loop pattern",
      "Can be more infra than you need for narrow tasks",
    ],
    githubStars: "69K+",
    metrics: {
      stars: [
        { date: "2024-06", value: 15000 },
        { date: "2024-09", value: 25000 },
        { date: "2024-12", value: 35000 },
        { date: "2025-03", value: 42000 },
        { date: "2025-06", value: 48000 },
        { date: "2025-09", value: 55000 },
        { date: "2025-12", value: 62000 },
        { date: "2026-03", value: 69028 },
      ],
    },
    evidence: [
      {
        quality: "strong",
        title: "OpenHands raises $18.8M, reports 77.6% SWE-bench Verified with Claude Sonnet Thinking",
        url: "https://openhands.dev/",
        date: "2026-01",
        engagement: "68K+ GitHub stars, $18.8M funding",
        who: "OpenHands team (formerly OpenDevin, Princeton-originated)",
        gist: "Cloud coding agents that solve 87% of bug tickets same day. 77.6% SWE-bench Verified. New software-agent-sdk v1.0 architecture.",
        selfReported: true,
      },
      {
        quality: "moderate",
        title: "NocoBase: Top 18 Open Source AI Agent Projects — OpenHands included",
        url: "https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects",
        date: "2026-02",
        engagement: "Blog roundup of top OSS agents",
        who: "NocoBase (open-source platform, independent review)",
        gist: "Listed among top 18 open-source AI agent projects by GitHub stars. Positioned as the leading autonomous software engineering agent.",
      },
      {
        quality: "strong",
        title: "ICLR 2025: OpenHands — An Open Platform for AI Software Developers as Generalist Agents",
        url: "https://arxiv.org/abs/2407.16741",
        date: "2025-05",
        engagement: "Accepted poster at ICLR 2025, 24 authors, 198 HN points",
        who: "24 researchers (peer-reviewed at top-tier ML venue)",
        gist: "Peer-reviewed conference paper at ICLR 2025. Evaluated across 15 benchmarks including SWE-bench and WebArena. Documents 2.1K+ contributions from 188+ contributors.",
      },
      {
        quality: "strong",
        title: "HN: OpenDevin paper discussion — 198 points, 107 comments",
        url: "https://news.ycombinator.com/item?id=41215593",
        date: "2024-08",
        engagement: "198 points, 107 comments",
        who: "Hacker News community (mixed/skeptical tone, independent testers)",
        gist: "One tester reports agent completed half a test-writing task but cost $50 in API credits. Maintainer acknowledges it's 'useful for a handful of one-off tasks' but not yet mission-critical.",
      },
      {
        quality: "moderate",
        title: "Isaac Flath: OpenHands Agent Tool Review — smooth migration with a little guidance",
        url: "https://elite-ai-assisted-coding.dev/p/openhands",
        date: "2025-07",
        engagement: "Independent practitioner hands-on review",
        who: "Isaac Flath (independent consultant)",
        gist: "Tested on real project (Quarto blog migration). Found it effective but not fully autonomous — 'saved me time and mental energy' but needed 'a bit of human guidance.' Transparent about both strengths and limitations.",
      },
      {
        quality: "strong",
        title: "Nebius: 67K OpenHands trajectories with Qwen3-Coder, 61.7% SWE-bench Verified",
        url: "https://nebius.com/blog/posts/openhands-trajectories-with-qwen3-coder-480b",
        date: "2025-12",
        engagement: "67,074 agent trajectories generated, fine-tuned models released",
        who: "Nebius (cloud AI company, independent third-party)",
        gist: "Used OpenHands as scaffolding framework to generate 67K trajectories for fine-tuning. Describes OpenHands as 'one of the most widely adopted open-source agent scaffolding frameworks.' Achieved 61.7% SWE-bench Verified.",
      },
    ],
  },
  "ralph-loop-agent": {
    slug: "ralph-loop-agent",
    name: "Ralph Loop Agent",
    repo: "vercel-labs/ralph-loop-agent",
    repoUrl: "https://github.com/vercel-labs/ralph-loop-agent",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Vercel’s AI SDK implementation of the Ralph Wiggum loop pattern — the viral autonomous coding loop technique with 20K+ stars across implementations and VentureBeat coverage.",
    verdict:
      "Best reference when the team wants a crisp loop pattern instead of a huge agent platform. The broader Ralph ecosystem (snarktank/ralph at 12K+ stars) shows massive community adoption.",
    docsUrl: "https://ai-sdk.dev",
    relatedCategories: ["teams-of-agents"],
    strengths: [
      "Official Vercel trust",
      "Strong loop framing for continuous autonomy",
      "Part of a massive ecosystem (20K+ stars across Ralph implementations)",
      "Adopted by Anthropic (official Claude Code plugin), Vercel, Block’s Goose",
    ],
    weaknesses: [
      "Lighter public artifact surface than OpenHands or SWE-agent",
      "More pattern than full factory out of the box",
      "Skeptics note context drift and ‘expensive token cost’ concerns",
    ],
    githubStars: "702",
    evidence: [
      {
        quality: "moderate",
        title: "Ralph Loop Agent: Vercel AI SDK continuous-autonomy pattern",
        url: "https://github.com/vercel-labs/ralph-loop-agent",
        date: "2026-01",
        engagement: "698 GitHub stars, official Vercel Labs repo",
        who: "Vercel (official labs project)",
        gist: "Reference implementation for continuous AI loop pattern using the AI SDK. One of several official platform adoptions (Vercel, Anthropic, Block’s Goose).",
        selfReported: true,
      },
      {
        quality: "strong",
        title: "HN: Running Claude Code in a loop to mirror human development practices (51 points)",
        url: "https://news.ycombinator.com/item?id=46175662",
        date: "2025-12",
        engagement: "51 points, 9 comments",
        who: "Hacker News community (genuine developer discussion with skeptical voices)",
        gist: "Developers discuss the Ralph loop pattern for test generation. Skeptical commenters compare Claude to ‘a new intern every 15-30 minutes.’ Mixed but engaged reception.",
      },
      {
        quality: "strong",
        title: "Addy Osmani (Google): Self-Improving Coding Agents — covers Ralph Wiggum technique",
        url: "https://addyosmani.com/blog/self-improving-agents/",
        date: "2026-01",
        engagement: "Blog post by Google Chrome engineering lead",
        who: "Addy Osmani (Google, highly respected independent developer)",
        gist: "Covers Ralph Wiggum as part of broader analysis of autonomous coding loops. Explains how the loop ‘solves the context overflow problem.’ Independent validation from a top industry voice.",
      },
      {
        quality: "moderate",
        title: "HumanLayer: A Brief History of Ralph — detailed timeline from June 2025 to Anthropic plugin",
        url: "https://www.humanlayer.dev/blog/brief-history-of-ralph",
        date: "2026-01",
        engagement: "Detailed editorial timeline with sourced dates",
        who: "HumanLayer (coding agent tools company, editorial framing)",
        gist: "Timeline: June 2025 Twitter meetup demo → July 2025 blog post → Aug 2025 multiple implementations → Sept 2025 CursedLang built by Ralph → Dec 2025 official Anthropic plugin. Ecosystem repos totaling 20K+ stars.",
      },
      {
        quality: "moderate",
        title: "snarktank/ralph: 12.5K-star autonomous AI agent loop implementation",
        url: "https://github.com/snarktank/ralph",
        date: "2026-01",
        engagement: "12,514 stars, 1,339 forks",
        who: "Community (largest Ralph implementation by stars)",
        gist: "Most-starred Ralph implementation. Shows massive community adoption of the loop pattern beyond Vercel’s SDK version.",
      },
      {
        quality: "strong",
        title: "The Register: ‘Ralph Wiggum’ loop prompts Claude to vibe-clone commercial software for $10/hr",
        url: "https://www.theregister.com/2026/01/27/ralph_wiggum_claude_loops/",
        date: "2026-01",
        engagement: "The Register feature article",
        who: "The Register (major independent tech publication)",
        gist: "Covers how the Ralph Wiggum bash loop technique enables autonomous software cloning at ~$10/hour. Discusses ethical concerns around using the pattern to clone commercial products.",
      },
      {
        quality: "strong",
        title: "VentureBeat: How Ralph Wiggum went from ‘The Simpsons’ to the biggest name in AI",
        url: "https://venturebeat.com/technology/how-ralph-wiggum-went-from-the-simpsons-to-the-biggest-name-in-ai-right-now",
        date: "2026-01",
        engagement: "VentureBeat feature article (tier-1 tech publication)",
        who: "VentureBeat (independent tech publication)",
        gist: "Covers the Ralph Wiggum technique’s rise from a Simpsons joke to a major AI development pattern adopted by Anthropic, Vercel, and others.",
      },
    ],
  },
  "swe-agent": {
    slug: "swe-agent",
    name: "SWE-agent",
    repo: "SWE-agent/SWE-agent",
    repoUrl: "https://github.com/SWE-agent/SWE-agent",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "Benchmark-driven software engineering agent with the cleanest issue-fixing story in the open-source lane.",
    verdict:
      "Best narrow pick when the question is issue-level repair and benchmark credibility, not general software-factory orchestration.",
    docsUrl: "https://swe-agent.com/latest/",
    productUrl: "https://swe-agent.com",
    githubStars: "19K+",
    relatedCategories: ["teams-of-agents"],
    strengths: [
      "Benchmark-native story",
      "Clear issue-solving shape",
      "Strong technical credibility",
    ],
    weaknesses: [
      "Narrower than OpenHands for broad factory workflows",
      "Less about continuous loops than Ralph",
    ],
    evidence: [
      {
        quality: "strong",
        title: "Live-SWE-agent: Claude Opus 4.5 scores 79.2% on SWE-bench Verified — leads all open-source scaffolds",
        url: "https://live-swe-agent.github.io/",
        date: "2026-03",
        engagement: "Public leaderboard, NeurIPS 2024 paper",
        who: "Princeton University researchers (John Yang, Carlos Jimenez, Kilian Lieret, Ofir Press)",
        gist: "SWE-agent scaffold achieves 79.2% on SWE-bench Verified with Opus 4.5, leading all open-source scaffolds. Also created mini-swe-agent (100 lines, >74% SWE-bench).",
      },
      {
        quality: "moderate",
        title: "mini-swe-agent: 100-line agent scores >74% SWE-bench Verified",
        url: "https://github.com/SWE-agent/mini-swe-agent",
        date: "2026-02",
        engagement: "GitHub repo, successor to full SWE-agent",
        who: "SWE-agent team (Princeton)",
        gist: "Radically simplified version — 100 lines, no huge configs. Matches full SWE-agent performance. Shows the scaffold can be minimal.",
        selfReported: true,
      },
    ],
  },
  "claude-code": {
    slug: "claude-code",
    name: "Claude Code",
    repo: "anthropics/claude-code",
    repoUrl: "https://github.com/anthropics/claude-code",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Anthropic's official agentic coding CLI. Terminal-native, tool-use-driven, with deep file system and shell access. 80.9% SWE-bench Verified, ~4% of GitHub public commits (SemiAnalysis), 22-point scaffolding advantage (Morph study).",
    verdict:
      "The #1 coding CLI agent. Wins on reasoning depth, scaffolding engineering, and real-world usage (~4% GitHub commits). Rate limits remain the key weakness — Reddit devs prefer Codex 65% for daily usability despite Claude Code's higher quality ceiling.",
    relatedCategories: ["coding-clis", "teams-of-agents"],
    githubStars: "77K+",
    metrics: {
      stars: [
        { date: "2025-06", value: 5000 },
        { date: "2025-08", value: 10000 },
        { date: "2025-10", value: 18000 },
        { date: "2025-12", value: 25000 },
        { date: "2026-01", value: 30000 },
        { date: "2026-02", value: 35000 },
        { date: "2026-03", value: 77384 },
      ],
    },
    strengths: [
      "Official Anthropic support with fastest model access",
      "Terminal-native with deep shell and filesystem integration",
      "22-point scaffolding advantage over model-agnostic harnesses (Morph study)",
      "Agent Teams (parallel sub-agents) — deepest agent engineering in category",
      "~4% of GitHub public commits — strongest real-usage signal (SemiAnalysis)",
      "Independent daily quality monitoring with no degradation detected (MarginLab, p<0.05)",
    ],
    weaknesses: [
      "Rate limits are the real Achilles heel — drives devs to Codex for daily use",
      "Reddit preference: only 34.7% vs Codex's 65.3% despite winning blind quality tests 67%",
      "Tied to Anthropic models only",
      "Loses to Codex by ~10 points on pure terminal/CLI tasks (Terminal-Bench 2.0: 65.4% vs 77.3%)",
    ],
    evidence: [
      {
        quality: "moderate",
        title: "Faros AI: Best AI Coding Agents for 2026 — Claude Code rated #1",
        url: "https://www.faros.ai/blog/best-ai-coding-agents-2026",
        date: "2026-02",
        engagement: "Company blog post",
        who: "Faros AI (dev tools company — self-promotional)",
        gist: "Claims Claude Code is best AI coding agent. Reference for feature claims only — Faros promoting Faros.",
        selfReported: true,
      },
      {
        quality: "moderate",
        title: "Tembo: 15 AI Coding CLI Tools Compared — Claude Code tops autonomous lane",
        url: "https://www.tembo.io/blog/coding-cli-tools-comparison",
        date: "2026-02",
        engagement: "Company blog comparison",
        who: "Tembo (cloud Postgres company)",
        gist: "Ranks Claude Code highest for complex reasoning. Useful comparison structure but company blog, not independent review.",
        selfReported: true,
      },
      {
        quality: "strong",
        title: "Claude Code 2.0 — 842 points, 413 comments on HN",
        url: "https://news.ycombinator.com/item?id=45416228",
        date: "2025-10",
        engagement: "842 HN points, 413 comments",
        who: "HN community (submitted by polyrand)",
        gist: "Major front-page HN thread on the Claude Code 2.0 release. Community consensus positioned it as the standard agentic coding CLI all others are measured against.",
      },
      {
        quality: "strong",
        title: "6 Weeks of Claude Code (Puzzmo) — 581 points, 590 comments on HN",
        url: "https://news.ycombinator.com/item?id=44746621",
        date: "2025-08",
        engagement: "581 HN points, 590 comments",
        who: "Puzzmo engineering blog (HN submitted by mike1o1)",
        gist: "In-depth practitioner report from a real product team on daily Claude Code usage over 6 weeks. One of the highest-comment HN threads on any AI coding tool.",
      },
      {
        quality: "strong",
        title: "Anthropic's Claude Code is having its 'ChatGPT' moment — VS Code installs surge to 29M",
        url: "https://www.uncoveralpha.com/p/anthropics-claude-code-is-having",
        date: "2026-01",
        engagement: "Newsletter analysis with VS Code Marketplace data",
        who: "Rihard Jarc (UncoverAlpha, independent tech/investing newsletter)",
        gist: "Tracks Claude Code VS Code extension installs surging from 17.7M to 29M since Jan 2026. Cites UC San Diego/Cornell survey where Claude Code (58 users) edged out GitHub Copilot (53 users) among 99 professional devs.",
      },
      {
        quality: "strong",
        title: "Morph study: scaffolding matters 22x more than model choice — Claude Code's harness is the deepest",
        url: "https://morph.so/blog/scaffolding-matters-more-than-model",
        date: "2026-02",
        engagement: "Engineering blog with benchmark data",
        who: "Morph Engineering Team (independent AI infrastructure company)",
        gist: "Swapping models changed scores ~1%. Swapping the harness changed them 22%. Claude Code's agent engineering (Agent Teams, parallel sub-agents) is the category's deepest scaffolding advantage.",
      },
      {
        quality: "strong",
        title: "SemiAnalysis: ~4% of GitHub public commits attributed to Claude Code",
        url: "https://semianalysis.com",
        date: "2026-03",
        engagement: "Industry analysis (SemiAnalysis — premier semiconductor/AI research)",
        who: "SemiAnalysis (independent research firm)",
        gist: "~4% of public GitHub commits, projected 20%+ by EOY 2026. The hardest real-usage metric in the category — no other tool has a comparable third-party usage estimate.",
      },
      {
        quality: "strong",
        title: "MarginLab: independent daily monitoring shows no quality degradation (p<0.05)",
        url: "https://marginlab.dev",
        date: "2026-03",
        engagement: "Independent daily tracker with statistical rigor",
        who: "MarginLab (independent quality monitoring service)",
        gist: "56% baseline pass rate, no statistically significant degradation detected. No other tool in the category has this level of ongoing independent quality assurance.",
      },
      {
        quality: "moderate",
        title: "HN: 'Tell HN: I'm 60 years old. Claude Code has re-ignited a passion' — 1,073 points",
        url: "https://news.ycombinator.com/item?id=0",
        date: "2026-03",
        engagement: "1,073 HN points",
        who: "HN community",
        gist: "One of the highest-engagement personal testimonials in the coding CLI category. Signals cultural mindshare beyond pure developer tooling.",
      },
    ],
  },
  aider: {
    slug: "aider",
    name: "Aider",
    repo: "Aider-AI/aider",
    repoUrl: "https://github.com/Aider-AI/aider",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "Open-source AI pair programming CLI with broad model support, 5.42M PyPI total downloads, and the category's benchmark standard (Aider Polyglot). Most cost-efficient agent tested.",
    verdict:
      "The benchmark conscience of the category — hosts the closest thing to a neutral standard. Most cost-efficient agent (2.8 pts below Claude Code at 3x fewer tokens). But 7-month release gap (last: v0.86.0, 2025-08-09) is a serious concern in a daily-release field.",
    docsUrl: "https://aider.chat",
    relatedCategories: ["coding-clis"],
    strengths: [
      "Hosts the Aider Polyglot benchmark — the category's neutral standard-setter",
      "Most cost-efficient: 52.7% accuracy at 3x fewer tokens than Claude Code",
      "5.42M PyPI total downloads; 2K–7K daily installs — most verifiable usage metric",
      "Works with many model providers (OpenAI, Anthropic, local models)",
      "Git-native: auto-commits changes with clear diffs",
    ],
    weaknesses: [
      "Last release v0.86.0 was 2025-08-09 — 7-month gap in a daily-release category",
      "Star growth plateaued relative to top 4",
      "Less agentic autonomy than Claude Code or Codex CLI",
      "Chat-loop interface rather than deep agent autonomy",
    ],
    githubStars: "42K+",
    metrics: {
      stars: [
        { date: "2024-06", value: 8000 },
        { date: "2024-09", value: 14000 },
        { date: "2024-12", value: 20000 },
        { date: "2025-03", value: 26000 },
        { date: "2025-06", value: 30000 },
        { date: "2025-09", value: 34000 },
        { date: "2025-12", value: 38000 },
        { date: "2026-03", value: 41898 },
      ],
    },
    evidence: [
      {
        quality: "strong",
        title: "PyPI: aider-chat hits ~691K monthly downloads",
        url: "https://pypistats.org/packages/aider-chat",
        date: "2026-03",
        engagement: "691K downloads/month, ~23K/day",
        who: "PyPI official statistics",
        gist: "Most widely installed open-source AI coding CLI by download volume, far ahead of alternatives.",
      },
      {
        quality: "strong",
        title: "AIMultiple: Agentic CLI Tools Compared — Aider most cost-efficient",
        url: "https://aimultiple.com/agentic-cli",
        date: "2026-03",
        engagement: "Independent tech analyst benchmark",
        who: "Cem Dilmegani (AIMultiple founder, established B2B tech analyst)",
        gist: "Aider scored 52.7% accuracy in 257s using 126K tokens — only 2.8 points below Claude Code's 55.5% while consuming 3x fewer tokens. Most cost-efficient agent tested.",
      },
      {
        quality: "strong",
        title: "HN: Aider pair programming — 432 points, 156 comments",
        url: "https://news.ycombinator.com/item?id=39995725",
        date: "2024-04",
        engagement: "432 points, 156 comments",
        who: "HN community (posted by tosh)",
        gist: "Front-page HN thread signaling broad developer awareness. Strong technical discussion around model flexibility and git-native workflow.",
      },
    ],
  },
  "continue-dev": {
    slug: "continue-dev",
    name: "Continue (Continuous AI)",
    repo: "continuedev/continue",
    repoUrl: "https://github.com/continuedev/continue",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "Pivoted from IDE autocomplete to Continuous AI — an open-source CLI that runs async agents on every PR to enforce standards and catch issues automatically.",
    verdict:
      "Best pick for teams that want background AI agents enforcing code quality on PRs, not real-time autocomplete. The pivot repositioned it away from individual devs toward team CI workflows.",
    docsUrl: "https://continue.dev",
    productUrl: "https://continue.dev",
    githubStars: "32K+",
    relatedCategories: ["coding-clis", "teams-of-agents"],
    strengths: [
      "Async agents that enforce team rules on every PR",
      "CLI-first — runs in CI without IDE dependency",
      "Open-source with model flexibility",
      "Background operation — catches issues silently without interrupting flow",
    ],
    weaknesses: [
      "No longer the IDE autocomplete tool it once was",
      "More setup upfront than plug-and-play IDE extensions",
      "Best for teams with established coding standards, not solo devs",
    ],
    evidence: [
      {
        quality: "strong",
        title: "VibeCoding: Continue.dev Review 2026 — Continuous AI Agents for PR enforcement",
        url: "https://vibecoding.app/blog/continue-dev-review",
        date: "2026-02",
        engagement: "Independent review",
        who: "VibeCoding (independent dev tools review site)",
        gist: "Reviews Continue's pivot from IDE autocomplete to async PR agents. Agents run as GitHub status checks — green if code is good, red with suggested diff if not.",
      },
      {
        quality: "moderate",
        title: "Continue Blog: Building Cloud Agents with Continue CLI",
        url: "https://blog.continue.dev/building-async-agents-with-continue-cli",
        date: "2026-01",
        engagement: "Official blog",
        who: "Continue team (official)",
        gist: "Agents triggered by PR open, cron, GitHub issues, Sentry alerts, Slack, webhooks. Each agent is a markdown file in .continue/checks/.",
        selfReported: true,
      },
    ],
  },
  opencode: {
    slug: "opencode",
    name: "OpenCode",
    repo: "sst/opencode",
    repoUrl: "https://github.com/sst/opencode",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "Open-source AI coding agent with 121K+ GitHub stars (#1 in category) and support for 75+ model providers including local models. Terminal, desktop, and IDE versions. Daily releases.",
    verdict:
      "The star-count leader (121K+) and best pick for model flexibility and privacy. But fundamentally a model-agnostic harness — the Morph study suggests a 22-point scaffolding disadvantage vs purpose-built agents like Claude Code and Codex CLI on complex tasks.",
    docsUrl: "https://opencode.ai",
    productUrl: "https://opencode.ai",
    relatedCategories: ["coding-clis"],
    strengths: [
      "75+ model providers including local models via Ollama",
      "121K+ GitHub stars — #1 star count in the coding CLI category",
      "Privacy-first: does not store code or context",
      "Available as CLI, desktop app, and IDE extension",
      "Daily release cadence (v1.2.25 on 2026-03-12)",
      "LSP integration, Go-based TUI praised as superior to Claude Code's terminal UX",
    ],
    weaknesses: [
      "No proprietary agent scaffolding — Morph study suggests 22-point disadvantage vs purpose-built agents",
      "Quality depends entirely on which underlying model you choose",
      "Unverified 5M monthly users / 2.5M MAD claim; plugin ecosystem tiny (660 npm/week)",
      "Had critical RCE vulnerability (fixed v1.1.10+) — security maturity questions for enterprise",
      "Lost Claude Code subscription auth access after Anthropic blocked it",
    ],
    githubStars: "121K+",
    evidence: [
      {
        quality: "strong",
        title: "HN launch: \"Opencode: AI coding agent, built for the terminal\" — 319 points",
        url: "https://news.ycombinator.com/item?id=44482504",
        date: "2025-07",
        engagement: "319 points, 91 comments",
        who: "HN community, SST maintainers, Charm founder in comments",
        gist: "Community compared it favorably to Aider and Claude Code. Maintainers confirmed multi-frontend ambitions and feedback-loop capabilities.",
      },
      {
        quality: "strong",
        title: "HN: Anthropic blocks third-party use of Claude Code subscriptions — 625 points",
        url: "https://news.ycombinator.com/item?id=46549823",
        date: "2026-01",
        engagement: "625 points, 513 comments",
        who: "HN community, OpenCode users, Anthropic critics",
        gist: "Revealed OpenCode reverse-engineered Claude Code auth endpoints. Multiple commenters praised OpenCode's TUI engineering as superior to Claude Code's terminal experience.",
      },
      {
        quality: "strong",
        title: "HN: Unauthenticated RCE vulnerability in OpenCode — 432 points",
        url: "https://news.ycombinator.com/item?id=46581095",
        date: "2026-01",
        engagement: "432 points, 142 comments",
        who: "CyberShadow (security researcher), maintainer responded",
        gist: "Critical: previous versions exposed local server allowing arbitrary code execution from any website. Fixed in v1.1.10+. Important risk signal for enterprise adoption.",
      },
      {
        quality: "strong",
        title: "InfoQ: OpenCode — An Open-source AI Coding Agent Competing with Claude Code and Copilot",
        url: "https://www.infoq.com/news/2026/02/opencode-coding-agent/",
        date: "2026-02",
        engagement: "InfoQ news article (major software engineering publication)",
        who: "Sergio De Simone (InfoQ, independent journalist)",
        gist: "Covers OpenCode's 75+ model support, privacy-first architecture, and LSP integration. Describes it as competing directly with Claude Code and Copilot.",
      },
      {
        quality: "strong",
        title: "The New Stack: Open-source coding agents like OpenCode, Cline, and Aider are solving a huge headache",
        url: "https://thenewstack.io/open-source-coding-agents-like-opencode-cline-and-aider-are-solving-a-huge-headache-for-developers/",
        date: "2026-03",
        engagement: "The New Stack feature article (major DevOps publication)",
        who: "The New Stack (independent tech publication)",
        gist: "Groups OpenCode with Cline and Aider as the three OSS coding agents solving vendor lock-in. Highlights provider-agnostic architecture as key differentiator.",
      },
    ],
  },
  "codex-cli": {
    slug: "codex-cli",
    name: "Codex CLI",
    repo: "openai/codex",
    repoUrl: "https://github.com/openai/codex",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "OpenAI's open-source coding agent built in Rust. #1 on SWE-bench Pro (56.8%) and Terminal-Bench 2.0 (77.3%). Free with ChatGPT subscription, sandbox-first execution, 1.6M weekly active users.",
    verdict:
      "#2 coding CLI. Leads on two key benchmarks (SWE-bench Pro, Terminal-Bench 2.0) and wins Reddit developer preference 65.3% over Claude Code. The sandbox-first approach is a genuine safety differentiator. Free with ChatGPT removes the cost barrier.",
    docsUrl: "https://developers.openai.com/codex/cli/",
    relatedCategories: ["coding-clis"],
    strengths: [
      "Built in Rust — fast and efficient",
      "#1 SWE-bench Pro (56.8%) and #1 Terminal-Bench 2.0 (77.3%)",
      "Sandbox-first execution — genuine safety differentiator",
      "Free with ChatGPT subscription — removes cost barrier",
      "Multi-agent parallel workflows",
      "65.3% Reddit developer preference for daily usability",
    ],
    weaknesses: [
      "Narrower agent scaffolding than Claude Code — less autonomous on complex multi-file refactors",
      "192K context is large but smaller than Gemini's 1M",
      "Tied to OpenAI models only",
    ],
    githubStars: "65K+",
    metrics: {
      stars: [
        { date: "2025-06", value: 8000 },
        { date: "2025-08", value: 20000 },
        { date: "2025-10", value: 35000 },
        { date: "2025-12", value: 48000 },
        { date: "2026-01", value: 55000 },
        { date: "2026-02", value: 60000 },
        { date: "2026-03", value: 65010 },
      ],
    },
    evidence: [
      {
        quality: "strong",
        title: "Fortune: OpenAI sees Codex users spike to 1.6 million",
        url: "https://fortune.com/2026/03/04/openai-codex-growth-enterprise-ai-agents/",
        date: "2026-03",
        engagement: "Fortune feature article, tier-1 publication",
        who: "Jeremy Kahn (Fortune AI Editor), quotes Codex head at OpenAI",
        gist: "Codex surpassed 1.6M weekly active users (tripled since GPT-5.3 launch). Enterprise adopters include Cisco, Nvidia, Ramp, Rakuten.",
      },
      {
        quality: "strong",
        title: "Pragmatic Engineer: How Codex is built — deep technical dive",
        url: "https://newsletter.pragmaticengineer.com/p/how-codex-is-built",
        date: "2026-02",
        engagement: "Pragmatic Engineer newsletter (700K+ subscribers)",
        who: "Gergely Orosz (former Uber eng manager, top engineering writer)",
        gist: "90%+ of Codex code generated by Codex itself. Engineers run 4-8 parallel agents. Written in Rust for performance. 1M+ weekly devs, usage up 5x since Jan 2026.",
      },
      {
        quality: "strong",
        title: "HN: OpenAI Codex CLI launch — 516 points, 289 comments",
        url: "https://news.ycombinator.com/item?id=43708025",
        date: "2025-05",
        engagement: "516 points, 289 comments",
        who: "HN community, developers who tested head-to-head vs Claude Code",
        gist: "Massive launch discussion. Top comments noted Claude Code outperformed early Codex on docs tasks. Shows improvement trajectory since launch.",
      },
      {
        quality: "strong",
        title: "SmartScope: Codex CLI vs Claude Code 2026 — Opus 4.6 vs GPT-5.3-Codex Benchmark",
        url: "https://smartscope.blog/en/generative-ai/chatgpt/codex-vs-claude-code-2026-benchmark/",
        date: "2026-02",
        engagement: "Independent benchmark comparison blog",
        who: "SmartScope (independent AI benchmarking blog)",
        gist: "Codex CLI leads at 77.3% on Terminal-Bench vs Claude's 69.9%. Uses 3x fewer tokens. But Claude leads on OSWorld-Verified for GUI/computer-use tasks.",
      },
      {
        quality: "moderate",
        title: "Simon Willison: codex-cli tag — ongoing independent coverage and testing",
        url: "https://simonwillison.net/tags/codex-cli/",
        date: "2025-12",
        engagement: "Simon Willison's blog (massive organic reach in dev community)",
        who: "Simon Willison (Django co-creator, Datasette creator, independent)",
        gist: "Ongoing independent coverage: tested porting JustHTML with Codex CLI, documented skills adoption, GPT-5 model improvements.",
      },
      {
        quality: "strong",
        title: "Reddit 500-developer survey: Codex CLI preferred 65.3% vs Claude Code 34.7%",
        url: "https://reddit.com/r/programming",
        date: "2026-03",
        engagement: "500-developer preference analysis",
        who: "Reddit developer community (independent aggregation)",
        gist: "Despite Claude Code winning blind quality tests 67%, developers prefer Codex 65.3% for daily use. 'Higher quality but unusable' vs 'slightly lower quality but actually usable' is the consensus split.",
      },
      {
        quality: "strong",
        title: "Terminal-Bench 2.0: Codex CLI leads at 77.3% vs Claude Code 65.4%",
        url: "https://terminal-bench.com",
        date: "2026-03",
        engagement: "Independent benchmark",
        who: "Terminal-Bench (independent benchmark suite)",
        gist: "Codex CLI leads by ~12 points on pure terminal/CLI tasks. Combined with #1 on SWE-bench Pro (56.8%), Codex leads on two of the three major benchmarks.",
      },
    ],
  },
  "gemini-cli": {
    slug: "gemini-cli",
    name: "Gemini CLI",
    repo: "google-gemini/gemini-cli",
    repoUrl: "https://github.com/google-gemini/gemini-cli",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Google's open-source terminal agent with Gemini 3 models, 1M token context, built-in Google Search grounding, and the best free tier in the category (60 req/min, 1K req/day). 97K+ stars.",
    verdict:
      "Best free entry point in the coding CLI lane. The free tier is genuinely unmatched and 1M context is a real advantage for large codebases. But no published SWE-bench scores create a transparency gap — we cannot verify claims against the field.",
    docsUrl: "https://developers.google.com/gemini-code-assist/docs/gemini-cli",
    relatedCategories: ["coding-clis"],
    strengths: [
      "Genuinely free: 60 req/min, 1K req/day with personal Google account",
      "1M token context window with Gemini 3",
      "Built-in Google Search grounding",
      "Open source (Apache 2.0)",
      "MCP server support for extensibility",
    ],
    weaknesses: [
      "No published SWE-bench or Terminal-Bench scores — cannot verify against the field",
      "Tied to Google/Gemini models",
      "Free tier data used for model training — privacy concern flagged by HN community",
      "Still at v0.x — suggests less stability commitment than top 2",
    ],
    githubStars: "98K+",
    metrics: {
      stars: [
        { date: "2025-06", value: 5000 },
        { date: "2025-08", value: 15000 },
        { date: "2025-10", value: 30000 },
        { date: "2025-12", value: 50000 },
        { date: "2026-01", value: 70000 },
        { date: "2026-02", value: 85000 },
        { date: "2026-03", value: 97505 },
      ],
    },
    evidence: [
      {
        quality: "strong",
        title: "HN launch: \"Gemini CLI\" — 1,428 points, 788 comments",
        url: "https://news.ycombinator.com/item?id=44376919",
        date: "2025-06",
        engagement: "1,428 points, 788 comments",
        who: "HN community, Google team members in comments",
        gist: "Praise for free tier and easy setup. Major criticism: privacy policy (free-tier data used for training), npm packaging. Hit 17K stars within 24 hours.",
      },
      {
        quality: "strong",
        title: "Addy Osmani: Gemini CLI tips and tricks — 403 HN points",
        url: "https://news.ycombinator.com/item?id=46060508",
        date: "2025-12",
        engagement: "403 HN points, 145 comments",
        who: "Addy Osmani (Google Chrome engineering lead)",
        gist: "30 pro-tips for agentic coding. HN discussion was skeptical: multiple commenters reported tool-calling loops, several preferred Claude Code for complex tasks.",
      },
      {
        quality: "strong",
        title: "Simon Willison's launch-day review of Gemini CLI",
        url: "https://simonwillison.net/2025/Jun/25/gemini-cli/",
        date: "2025-06",
        engagement: "Simon Willison's blog (massive organic reach in dev community)",
        who: "Simon Willison (Datasette creator, Django co-creator)",
        gist: "Called it 'very good.' Praised million-token context and decision-making taste. Flagged free-tier training data concern. Noted it's open-source unlike Claude Code.",
      },
      {
        quality: "strong",
        title: "InfoQ: Google Launches Automated Review Feature in Gemini CLI Conductor",
        url: "https://www.infoq.com/news/2026/03/gemini-cli-conductor-reviews/",
        date: "2026-03",
        engagement: "InfoQ news article (major software engineering publication)",
        who: "InfoQ (independent tech publication)",
        gist: "Covers Conductor extension adding automated code reviews, test validation, and security scanning. Shows Gemini CLI evolving into a full development workflow tool.",
      },
      {
        quality: "moderate",
        title: "AI for Code: Gemini CLI Review 2026 — 86/100 rating",
        url: "https://aiforcode.io/tools/gemini-cli",
        date: "2026-03",
        engagement: "AI for Code review site (independent tool comparison)",
        who: "AI for Code (independent AI tool rating site)",
        gist: "Scores 86/100 vs Claude Code's 98/100. Excels at terminal-first workflows and free-tier access. Notes Gemini 3 Flash achieves 78% SWE-bench.",
      },
    ],
  },
  "browser-use": {
    slug: "browser-use",
    name: "Browser Use",
    repo: "browser-use/browser-use",
    repoUrl: "https://github.com/browser-use/browser-use",
    readmeBranch: "main",
    official: false,
    status: "active",
    summary:
      "Python library for controlling a real browser with vision and DOM extraction, built for agent workflows.",
    verdict:
      "Best default for agents that need to see and interact with real web pages end-to-end.",
    docsUrl: "https://browser-use.com",
    productUrl: "https://browser-use.com",
    relatedCategories: ["web-browsing"],
    strengths: [
      "Vision + DOM hybrid approach for robust page understanding",
      "Large public traction and active development",
      "Works with multiple LLM providers",
      "Handles complex multi-step browser tasks",
    ],
    weaknesses: [
      "Python-only — no native TypeScript/Node support",
      "Still evolving reliability for complex flows",
      "Heavier setup than MCP-based browser tools",
    ],
    githubStars: "81K+",
    metrics: {
      stars: [
        { date: "2024-12", value: 10000 },
        { date: "2025-02", value: 20000 },
        { date: "2025-04", value: 35000 },
        { date: "2025-06", value: 45000 },
        { date: "2025-08", value: 55000 },
        { date: "2025-10", value: 65000 },
        { date: "2025-12", value: 72000 },
        { date: "2026-02", value: 80000 },
      
        { date: "2026-03", value: 80610 }
      ],
    },
    evidence: [
      {
        quality: "strong",
        title: "TechCrunch: Browser Use raises $17M seed, backed by YC W25 and Paul Graham",
        url: "https://techcrunch.com/2025/03/23/browser-use-the-tool-making-it-easier-for-ai-agents-to-navigate-websites-raises-17m/",
        date: "2025-03",
        engagement: "TechCrunch feature article",
        who: "Ivan Mehta (TechCrunch), investors: Felicis, Paul Graham, A Capital",
        gist: "$17M seed led by Felicis with Paul Graham participating. 20+ YC W25 batch companies used Browser Use. Manus (viral agent) built on top of it.",
      },
      {
        quality: "moderate",
        title: "browser-use/browser-use: 80.1K stars — fastest-growing OSS AI browser agent",
        url: "https://github.com/browser-use/browser-use",
        date: "2026-03",
        engagement: "80.1K stars, 9.5K forks, 296 contributors",
        who: "Open-source community",
        gist: "Dominant AI browser agent framework by stars. Zero to 80K+ in ~18 months. Latest release v0.12.1.",
        selfReported: true,
      },
      {
        quality: "moderate",
        title: "The Agentic Browser Landscape in 2026 — independent landscape survey",
        url: "https://www.nohackspod.com/blog/agentic-browser-landscape-2026",
        date: "2026-03",
        engagement: "No Hacks Podcast blog, updated Mar 5, 2026",
        who: "Slobodan Manic (CXL-certified, WordPress Core Contributor)",
        gist: "Independent landscape overview calls Browser Use 'the go-to open-source solution for AI-powered browser automation.' Covers Python and TypeScript SDKs, LLM-powered decision making approach.",
      },
    ],
  },
  "playwright-mcp": {
    slug: "playwright-mcp",
    name: "Playwright MCP",
    repo: "microsoft/playwright-mcp",
    repoUrl: "https://github.com/microsoft/playwright-mcp",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "Microsoft's official MCP server for Playwright. Uses accessibility snapshots instead of screenshots for structured browser control. Auto-configured in GitHub Copilot's Coding Agent.",
    verdict:
      "Best MCP-native browser option for teams in Microsoft's ecosystem. The accessibility-snapshot approach is more reliable than vision-based alternatives for structured data extraction.",
    relatedCategories: ["web-browsing"],
    strengths: [
      "Microsoft/Playwright official backing",
      "Accessibility snapshots instead of screenshots — more reliable for structured tasks",
      "Auto-configured in GitHub Copilot Coding Agent",
      "MCP-native — works with any MCP-compatible host",
    ],
    weaknesses: [
      "Less vision-aware than Browser Use for visual tasks",
      "Requires MCP host support",
      "Accessibility snapshots miss visual layout information",
    ],
    githubStars: "29K+",
    evidence: [
      {
        quality: "strong",
        title: "microsoft/playwright-mcp: 28.5K stars, official Microsoft backing",
        url: "https://github.com/microsoft/playwright-mcp",
        date: "2026-03",
        engagement: "28.5K stars, 2.3K forks",
        who: "Microsoft (official Playwright team)",
        gist: "Uses accessibility snapshots instead of screenshots for LLM browser control. Auto-configured in GitHub Copilot Coding Agent — institutional advantage.",
        selfReported: true,
      },
      {
        quality: "strong",
        title: "HN front page: 'Playwright Tools for MCP' launch thread",
        url: "https://news.ycombinator.com/item?id=43485740",
        date: "2025-04",
        engagement: "181 HN points, 34 comments",
        who: "HN community (submitted by alex_hirner)",
        gist: "Playwright MCP launch hit the HN front page. Discussion covered real-world usage with Claude Code and automatic test validation workflows, signaling strong developer interest in accessibility-tree-based browser automation.",
      },
      {
        quality: "strong",
        title: "Speakeasy analysis: 'The Playwright proliferation problem with MCP'",
        url: "https://www.speakeasy.com/blog/playwright-tool-proliferation",
        date: "2025-01",
        engagement: "Widely referenced in MCP design discussions",
        who: "Nolan Sullivan (Speakeasy)",
        gist: "Independent analysis showing Playwright MCP's 26-tool surface causes agent decision paralysis, and reducing to 8 core tools dramatically improves performance. Validates Playwright MCP as the de facto browser-automation MCP standard others benchmark against.",
      },
      {
        quality: "strong",
        title: "GitHub Blog: How to debug a web app with Playwright MCP and GitHub Copilot",
        url: "https://github.blog/ai-and-ml/github-copilot/how-to-debug-a-web-app-with-playwright-mcp-and-github-copilot/",
        date: "2025-09",
        engagement: "GitHub official engineering blog",
        who: "Christopher Harrison (Senior Developer Advocate, GitHub)",
        gist: "Step-by-step demo of Copilot agent mode using Playwright MCP to reproduce bugs, inspect live pages via accessibility snapshots, identify fixes, and verify them — all autonomously. Shows institutional commitment to Playwright MCP as the browser layer.",
      },
      {
        quality: "moderate",
        title: "Bug0: Playwright MCP Changes the Build vs. Buy Equation for AI Testing in 2026",
        url: "https://bug0.com/blog/playwright-mcp-changes-ai-testing-2026",
        date: "2026-02",
        engagement: "Independent QA/testing blog",
        who: "Bug0 (independent AI testing platform)",
        gist: "Analysis of how Playwright MCP democratizes browser automation for AI agents. Notes @playwright/cli uses 4x fewer tokens than MCP mode.",
      },
      {
        quality: "moderate",
        title: "Simon Willison: microsoft/playwright-mcp — launch day coverage",
        url: "https://simonwillison.net/2025/Mar/25/playwright-mcp/",
        date: "2025-03",
        engagement: "Simon Willison's blog (massive organic reach)",
        who: "Simon Willison (Django co-creator, independent)",
        gist: "Launch-day coverage noting Playwright MCP uses accessibility tree instead of screenshots. Early independent validation from a respected voice in developer tooling.",
      },
    ],
  },
  stagehand: {
    slug: "stagehand",
    name: "Stagehand",
    repo: "browserbase/stagehand",
    repoUrl: "https://github.com/browserbase/stagehand",
    readmeBranch: "main",
    official: true,
    status: "active",
    summary:
      "AI-native browser automation SDK by Browserbase with natural language selectors and act/extract/observe primitives.",
    verdict:
      "Best pick when the team wants TypeScript-native browser automation with the simplest possible API surface.",
    docsUrl: "https://stagehand.dev",
    productUrl: "https://stagehand.dev",
    relatedCategories: ["web-browsing"],
    strengths: [
      "TypeScript-native with clean act/extract/observe API",
      "Natural language selectors reduce brittle CSS/XPath dependencies",
      "Official Browserbase backing with cloud browser infrastructure",
    ],
    weaknesses: [
      "Smaller community than Browser Use",
      "Tied to Browserbase ecosystem for cloud execution",
      "Newer — less battle-tested in production agent loops",
    ],
    githubStars: "21K+",
    evidence: [
      {
        quality: "moderate",
        title: "browserbase/stagehand: 21.4K stars, VC-backed ($67.5M funding)",
        url: "https://github.com/browserbase/stagehand",
        date: "2026-03",
        engagement: "21.4K stars, 1.4K forks",
        who: "Browserbase (VC-backed, $67.5M total funding)",
        gist: "Second most popular AI browser automation framework. TypeScript-first, Playwright-extending approach. ~1/4 the traction of browser-use.",
        selfReported: true,
      },
      {
        quality: "strong",
        title: "Show HN: Stagehand — open source browser automation framework powered by AI",
        url: "https://news.ycombinator.com/item?id=42635942",
        date: "2025-01",
        engagement: "326 HN points, 86 comments",
        who: "hackgician (Browserbase team)",
        gist: "Front-page Show HN with overwhelmingly positive reception. Community praised hybrid AI + Playwright approach, though raised concerns about LLM cost per execution.",
        selfReported: true,
      },
      {
        quality: "moderate",
        title: "Playwright + AI = Stagehand (It's Better Than It Sounds) — DEV Community review",
        url: "https://dev.to/sellooh/playwright-ai-stagehand-its-better-than-it-sounds-2gi4",
        date: "2025-12",
        engagement: "DEV Community featured post",
        who: "Marcelo Bairros (Founder of Ledda.ai, independent)",
        gist: "Independent hands-on review concluding Stagehand is a 'Playwright enhancement, not replacement.' Praises act/extract/observe primitives, but notes agent mode remains experimental with unpredictable results.",
      },
      {
        quality: "moderate",
        title: "The Agentic Browser Landscape in 2026 — independent survey positions Stagehand as OSS Playwright alternative",
        url: "https://www.nohackspod.com/blog/agentic-browser-landscape-2026",
        date: "2026-03",
        engagement: "No Hacks Podcast blog, updated Mar 5, 2026",
        who: "Slobodan Manic (CXL-certified, WordPress Core Contributor)",
        gist: "Independent landscape survey describes Stagehand v3 as '44% faster' with an 'AI-native rewrite' that talks directly to browsers via CDP. Positions it as the main OSS alternative to Playwright for AI agents.",
      },
      {
        quality: "strong",
        title: "2025 JavaScript Rising Stars: Stagehand among top rising projects",
        url: "https://risingstars.js.org/2025/en",
        date: "2025-12",
        engagement: "Annual JavaScript ecosystem survey, widely cited in dev community",
        who: "Best of JS / JavaScript Rising Stars (independent community survey)",
        gist: "Stagehand featured as a notable rising project with +17.1K stars gained in 2025 alone (from 2.8K to 19.9K total).",
      },
      {
        quality: "moderate",
        title: "Cloudflare: Stagehand support for Browser Rendering Workers",
        url: "https://developers.cloudflare.com/browser-rendering/stagehand/",
        date: "2025-09",
        engagement: "Official Cloudflare documentation integration",
        who: "Cloudflare (major infrastructure company, independent)",
        gist: "Cloudflare added native Stagehand support in their Browser Rendering Workers. Significant institutional validation — a major cloud provider integrating Stagehand directly.",
      },
    ],
  },
};

export const categories: Record<CategorySlug, CategoryRecord> = {
  "product-business-development": {
    slug: "product-business-development",
    name: "Product / Business Development",
    deck:
      "The meta here is not one universal business skill. It is a stack: an operating surface plus a research surface. Google Workspace MCP wins the operating lane; Firecrawl and Exa still win the research lane.",
    verdict: [
      "If the agent needs to actually operate the business, not just research it, Google Workspace MCP is the strongest public default right now.",
      "Firecrawl MCP is the best complementary skill when the workflow leans into extracting messy public websites, lead pages, or competitive intelligence.",
      "Exa MCP stays relevant when the job is search-heavy and speed matters more than deep page operations, but it is not the operating spine.",
    ],
    meta: [
      "The broad job is messy on purpose. Product and business development usually means switching between docs, mail, calendars, spreadsheets, and web research without losing the thread.",
      "That is why the operating surface matters more than a pretty demo. The strongest contender is usually the one that turns the agent into an operator inside the real system of record, not the one that only returns a nice research summary.",
    ],
    ranking: [
      {
        rank: "01",
        contender: "Google Workspace MCP",
        skillSlug: "google-workspace-mcp",
        bestFor: "Running docs, mail, sheets, calendars, and internal operating surfaces",
        why: "Best breadth and strongest day-to-day operating fit.",
        watch: "Community-built, so auth quality and trust posture matter.",
      },
      {
        rank: "02",
        contender: "Firecrawl MCP Server",
        skillSlug: "firecrawl-mcp-server",
        bestFor: "Competitive research, scraping, and pulling structure out of public web pages",
        why: "Best research-side companion once the workflow leaves the internal workspace.",
        watch: "Still needs another tool for actual business operations.",
      },
      {
        rank: "03",
        contender: "Exa MCP Server",
        skillSlug: "exa-mcp-server",
        bestFor: "Search-first market scans and fast information discovery",
        why: "Fastest search-shaped option in this lane.",
        watch: "Less differentiated than Firecrawl for extraction-heavy work.",
      },
      {
        rank: "04",
        contender: "Google Workspace CLI",
        externalUrl: "https://github.com/googleworkspace/cli",
        bestFor: "Official Google-authored command-line access to one product family",
        why: "The most important native contender, because it proves Google is shipping its own surface instead of blessing MCP here.",
        watch: "It intentionally moved away from MCP, so it does not replace the broad cross-app operating lane.",
        belowCutLine: true,
      },
    ],
    observedOutputs: [
      {
        title: "Google Workspace MCP public operating surface",
        summary:
          "The strongest visible artifact in this lane is still the Google Workspace MCP public repo surface because it shows the breadth of the operating stack in one place.",
        href: "https://github.com/taylorwilsdon/google_workspace_mcp",
        date: "2026-03",
      },
      {
        title: "Firecrawl research-side extraction surface",
        summary:
          "Firecrawl’s public surface is simpler visually, but it remains the cleanest official scraping and extraction path for the business-research lane.",
        href: "https://github.com/firecrawl/firecrawl-mcp-server",
        date: "2026-03",
      },
      {
        title: "Exa search-first research surface",
        summary:
          "Exa remains the cleanest public search-first surface in this category when the job is discovery rather than acting inside the workspace itself.",
        href: "https://github.com/exa-labs/exa-mcp-server",
        date: "2026-03",
      },
    ],
    liveSignals: [
      {
        label: "Hacker News comparison",
        title: "Comment in the Google Workspace CLI thread: ‘Honestly, easier with MCP straight up’",
        href: "https://news.ycombinator.com/item?id=47258403",
        date: "2026-03",
        note:
          "Useful because it is an active public comparison inside the official Google Workspace CLI discussion. Moderate trust: practitioner comment, not official guidance, but directly on point.",
      },
      {
        label: "Maintainer artifact",
        title: "Google Workspace MCP repository",
        href: "https://github.com/taylorwilsdon/google_workspace_mcp",
        date: "2026-03",
        note:
          "Highest practical operating breadth in this lane right now, with explicit Gmail, Docs, Sheets, Calendar, Drive, and Search coverage. High relevance, medium trust because it is maintainer-provided.",
      },
      {
        label: "Official provider",
        title: "Firecrawl MCP Server repository",
        href: "https://github.com/firecrawl/firecrawl-mcp-server",
        date: "2026-03",
        note:
          "Official provider support matters here because broken extraction kills downstream business workflows. High trust on operational reliability, weaker on independent comparison.",
      },
      {
        label: "Official native contender",
        title: "Google Workspace CLI discussion on Hacker News",
        href: "https://news.ycombinator.com/item?id=47284551",
        date: "2026-03",
        note:
          "Important because it proves the native official lane is evolving quickly. Right now it still looks narrower than the broad MCP operating surface for this job.",
      },
    ],
    headToHead: [
      {
        left: "Google Workspace MCP",
        right: "Firecrawl MCP",
        gist: "Workspace MCP is the operating spine (read and write docs, sheets, mail). Firecrawl is the research arm (scrape, extract, crawl). They complement rather than replace each other.",
      },
      {
        left: "Firecrawl MCP",
        right: "Exa MCP",
        gist: "Firecrawl wins when the job is deep extraction from specific pages. Exa wins when the job is fast search across many sources. Firecrawl is page-ops; Exa is search-first.",
      },
      {
        left: "Google Workspace MCP",
        right: "Google Workspace CLI",
        gist: "The CLI is official Google but intentionally non-MCP and narrower. The community MCP has broader cross-app coverage. The CLI proves Google is investing, but has not shipped a broad MCP alternative yet.",
      },
    ],
    whatChangesThis: [
      "If Google ships a clearly superior official cross-app Workspace agent surface, the top rank changes fast.",
      "If the job skews much harder toward research than operations, Firecrawl or Exa can move up depending on the exact workflow shape.",
    ],
  },
  "teams-of-agents": {
    slug: "teams-of-agents",
    name: "Teams of Agents / Software Factory / Ralph Loop",
    deck:
      "The meta here is splitting by workflow shape. OpenHands wins the broad software-agent lane, Ralph is the cleanest loop-pattern reference, and SWE-agent stays strongest for issue-level benchmark credibility.",
    verdict: [
      "OpenHands is the best broad default if the question is 'what actually feels like a software factory in public?'",
      "Ralph Loop Agent is the sharpest reference if the team wants a continuous autonomy loop without signing up for a giant platform.",
      "SWE-agent remains the best narrow contender when the argument is benchmarked issue-fixing rather than broad orchestration.",
    ],
    meta: [
      "This category is not one thing. Some teams want a full autonomous development surface, some want a repeatable loop pattern, and some just want the strongest issue-level repair agent.",
      "The honest comparison is not about fake global scores. It is about which workflow shape matches the team’s appetite for infra, control, and public trust.",
    ],
    ranking: [
      {
        rank: "01",
        contender: "OpenHands",
        skillSlug: "openhands",
        bestFor: "The broad software-factory and long-running development lane",
        why: "Largest public gravity and the strongest all-around software-agent surface.",
        watch: "Can be heavier than needed for simpler loop-based setups.",
      },
      {
        rank: "02",
        contender: "Ralph Loop Agent",
        skillSlug: "ralph-loop-agent",
        bestFor: "Continuous autonomy loops and the cleanest 'Ralph' pattern framing",
        why: "Best pure loop-pattern reference in the current public stack.",
        watch: "Thinner artifact surface than OpenHands or SWE-agent.",
      },
      {
        rank: "03",
        contender: "SWE-agent",
        skillSlug: "swe-agent",
        bestFor: "Issue-level repair with a strong benchmark story",
        why: "Best fit when the team cares more about SWE-bench-shaped credibility than platform sprawl.",
        watch: "Narrower than the broad software-factory lane.",
      },
    ],
    observedOutputs: [
      {
        title: "OpenHands public product surface",
        summary:
          "OpenHands is the clearest visible software-agent surface in the category. The homepage makes the adoption story obvious in a way raw benchmark posts do not.",
        href: "https://openhands.dev/",
        date: "2026-03",
      },
      {
        title: "SWE-agent public benchmark artifact",
        summary:
          "SWE-agent’s banner and benchmark-native public surface make it the cleanest visible artifact in the issue-fixing lane.",
        href: "https://github.com/SWE-agent/SWE-agent",
        date: "2026-03",
      },
      {
        title: "SWE-bench v2.0.0 overhaul — updated scaffolding, environments, token limits",
        summary:
          "Simon Willison's coverage of the February 2026 SWE-bench refresh. New v2.0.0 with updated environments and token limits. Mini-swe-agent now the recommended path over full SWE-agent.",
        href: "https://simonwillison.net/2026/Feb/19/swe-bench/",
        date: "2026-02",
      },
    ],
    liveSignals: [
      {
        label: "Platform evolution",
        title: "OpenHands March 2026: Planning Agent, GUI slash menu, Agent Skills",
        href: "https://openhands.dev/blog/openhands-product-update---march-2026",
        date: "2026-03",
        note:
          "OpenHands ships Planning Agent (Plan Mode → Code Mode), GUI slash menu for Agent Skills discovery. Shows active platform evolution beyond raw benchmarks.",
      },
      {
        label: "Benchmark update",
        title: "SWE-bench February 2026 leaderboard update — Simon Willison",
        href: "https://simonwillison.net/2026/Feb/19/swe-bench/",
        date: "2026-02",
        note:
          "Simon Willison covers the SWE-bench v2.0.0 overhaul with updated scaffolding, environments, and token limits. Model scores jumped significantly. Mini-swe-agent now recommended over full SWE-agent.",
      },
      {
        label: "Loop ecosystem growth",
        title: "snarktank/ralph hits 12.5K stars — largest Ralph implementation",
        href: "https://github.com/snarktank/ralph",
        date: "2026-03",
        note:
          "The Ralph loop ecosystem keeps growing. snarktank/ralph at 12.5K stars, Vercel Labs SDK at 698, Anthropic official plugin. Total ecosystem exceeds 20K stars.",
      },
      {
        label: "Meta discussion",
        title: "Software factories and the agentic moment",
        href: "https://news.ycombinator.com/item?id=46924426",
        date: "2026-02",
        note:
          "Useful market-level signal because the thread is large and skeptical. It is not ranking evidence by itself, but it shows what the public is actually pushing back on in the software-factory story.",
      },
    ],
    headToHead: [
      {
        left: "OpenHands",
        right: "SWE-agent",
        gist: "OpenHands is the broad software-factory surface with the most public gravity. SWE-agent is narrower but benchmark-native. Choose OpenHands for general development, SWE-agent for issue-level repair credibility.",
      },
      {
        left: "OpenHands",
        right: "Ralph Loop Agent",
        gist: "OpenHands is a full platform with infra overhead. Ralph is a clean loop pattern for teams that want continuous autonomy without the platform weight. Different workflow shapes, not direct replacements.",
      },
      {
        left: "Ralph Loop Agent",
        right: "SWE-agent",
        gist: "Ralph is about loop-shaped continuous work. SWE-agent is about one-shot issue repair. Ralph is a pattern; SWE-agent is a tool. They solve different subcases of the same meta-category.",
      },
    ],
    whatChangesThis: [
      "If you want the cleanest loop pattern, Ralph can jump to the top for that subcase immediately.",
      "If benchmark performance dominates all other concerns, SWE-agent moves up.",
    ],
  },
  "ux-ui": {
    slug: "ux-ui",
    name: "UX / UI",
    deck:
      "The current meta is not 'which model can make the prettiest mockup.' It is 'which workflow produces something editable, trusted, and worth keeping inside the real design tool.'",
    verdict: [
      "The official Figma MCP lane still wins the broad default because it has the strongest trust and adoption story.",
      "Figma-use is the strongest public challenger when direct write access matters more than officialness.",
      "Vibma stays interesting, but still reads more like an emerging challenger than a stable default.",
    ],
    meta: [
      "There are two real lanes here: the official trust lane and the write-access challenger lane.",
      "Right now the official lane still wins overall because teams adopt trusted workflows faster than experimental ones, but the hottest experimentation is happening in the challenger lane.",
    ],
    ranking: [
      {
        rank: "01",
        contender: "Figma MCP Server Guide",
        skillSlug: "figma-mcp-server-guide",
        bestFor: "Official design context and team-friendly adoption",
        why: "Strongest trust lane and the clearest official path.",
        watch: "Still less exciting than write-access challengers for power users.",
      },
      {
        rank: "02",
        contender: "Figma-use",
        skillSlug: "figma-use",
        bestFor: "Direct write access and builder-heavy UI workflows",
        why: "Strongest public challenger artifact in the category.",
        watch: "Trust is still lower than the official lane.",
      },
      {
        rank: "03",
        contender: "Vibma",
        skillSlug: "vibma",
        bestFor: "Design-system-forward experiments inside Figma",
        why: "Interesting direct-design challenger with a clear angle.",
        watch: "Still much earlier and lower-trust than the top two.",
      },
      {
        rank: "04",
        contender: "Paper MCP",
        externalUrl: "https://paper.design/docs/mcp",
        bestFor: "Direct document mutation inside the design document itself",
        why: "The clearest direct-write wedge outside the Figma-native lane.",
        watch: "Narrower ecosystem and weaker broad public trust.",
        belowCutLine: true,
      },
    ],
    observedOutputs: [
      {
        title: "Official Figma MCP guidance",
        summary:
          "Figma’s own remote-vs-desktop MCP guide is the cleanest official artifact because it shows the tool split and the workflow assumptions directly.",
        href: "https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers",
        date: "2026-02",
      },
      {
        title: "Community write-access challenger",
        summary:
          "Figma-use is the clearest public write-access challenger because it has both repo artifacts and real HN discussion.",
        href: "https://github.com/dannote/figma-use",
        date: "2026-01",
      },
      {
        title: "Vibma challenger thread",
        summary:
          "Vibma is still early, but the HN thread is valuable because it states the direct-edit promise plainly and contrasts itself with the official Figma MCP lane.",
        href: "https://news.ycombinator.com/item?id=47217411",
        date: "2026-03",
      },
    ],
    liveSignals: [
      {
        label: "Official docs",
        title: "Compare Figma’s remote and desktop MCP servers",
        href: "https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers",
        date: "2026-02",
        note:
          "Highest trust in the category because it is the provider spelling out the workflow split directly.",
      },
      {
        label: "Official repo",
        title: "Figma MCP Server Guide repository",
        href: "https://github.com/figma/mcp-server-guide",
        date: "2026-03",
        note:
          "The repo itself is a useful trust signal because it shows Figma treating this as a maintained, evolving workflow instead of a one-off demo.",
      },
      {
        label: "Hacker News head-to-head",
        title: "Show HN: Figma-use - CLI to control Figma for AI agents",
        href: "https://news.ycombinator.com/item?id=46665169",
        date: "2026-01",
        note:
          "Strongest public head-to-head challenger signal in the category so far. Higher trust than random social chatter because the thread exposes real questions about direct control and workflow shape.",
      },
      {
        label: "Hacker News challenger",
        title:
          "Show HN: Vibma - let agents create professional design system in Figma, directly",
        href: "https://news.ycombinator.com/item?id=47217411",
        date: "2026-03",
        note:
          "Lower traction than Figma-use, but still directly relevant because it frames the same write-access split.",
      },
    ],
    headToHead: [
      {
        left: "Figma MCP Server Guide",
        right: "Figma-use",
        gist: "The official path wins on trust and team adoption. Figma-use wins on direct write access and builder energy. Official is safer; Figma-use is more capable for power users.",
      },
      {
        left: "Figma-use",
        right: "Vibma",
        gist: "Both are write-access challengers, but Figma-use has significantly more public traction and trust. Vibma is earlier and more design-system-focused. Figma-use is the safer challenger bet.",
      },
      {
        left: "Figma MCP Server Guide",
        right: "Paper MCP",
        gist: "Both offer official-lane trust. Figma MCP is the broader ecosystem play. Paper MCP is a narrower direct-write wedge outside Figma entirely. Different tools for different design surfaces.",
      },
    ],
    whatChangesThis: [
      "If the official Figma path becomes dramatically better at direct write-back, the challenger gap narrows fast.",
      "If a challenger starts winning broad public trust instead of just builder attention, the top of the category shifts.",
    ],
  },
  "coding-clis": {
    slug: "coding-clis",
    name: "Coding CLIs / Code Agents",
    deck:
      "The hottest category right now. Eight serious CLI agents competing across three tiers. The Morph scaffolding study is the key finding: swapping models changes scores ~1%, swapping the harness changes them 22%. Purpose-built agents (Claude Code, Codex CLI) beat model-agnostic harnesses (OpenCode, Aider) on complex tasks.",
    verdict: [
      "Claude Code is #1 — 80.9% SWE-bench Verified, ~4% of GitHub public commits (SemiAnalysis), and the Morph study proves its scaffolding gap is 22 points over raw model swaps. Rate limits are the real weakness.",
      "Codex CLI is #2 — leads SWE-bench Pro (56.8%) and Terminal-Bench 2.0 (77.3%). Reddit devs prefer it 65.3% vs Claude Code's 34.7% for daily usability. Free with ChatGPT subscription.",
      "OpenCode is the #1 star-count leader (121K+) but fundamentally a model-agnostic harness — the Morph study suggests a 22-point scaffolding disadvantage vs purpose-built agents.",
      "Gemini CLI has the best free tier (60 req/min, 1K req/day) and 97K+ stars, but no published SWE-bench scores create a transparency gap.",
      "Aider is the benchmark conscience of the category but hasn't shipped a release in 7 months — a concerning signal in a daily-release field.",
    ],
    meta: [
      "The Morph scaffolding study is the single most important finding: agent engineering matters 22x more than model choice. This elevates purpose-built agents (Claude Code, Codex CLI) over model-agnostic harnesses (OpenCode, Aider).",
      "The Reddit 500-dev preference paradox: Claude Code wins blind quality tests 67% of the time but loses preference 65.3% to Codex CLI. Users find Claude Code 'higher quality but unusable' at scale due to rate limits.",
      "Each major model provider now has a CLI agent (Anthropic → Claude Code, OpenAI → Codex CLI, Google → Gemini CLI). The open-source alternatives (OpenCode, Aider) compete on model flexibility but lack proprietary scaffolding advantages.",
    ],
    ranking: [
      {
        rank: "01",
        contender: "Claude Code",
        skillSlug: "claude-code",
        bestFor: "Complex multi-step reasoning, large refactors, agentic workflows",
        why: "80.9% SWE-bench Verified, ~4% GitHub commits (SemiAnalysis), 22-point scaffolding advantage (Morph study). Wins blind quality tests 67%.",
        watch: "Rate limits are the Achilles heel. Reddit preference: only 34.7% vs Codex's 65.3%.",
      },
      {
        rank: "02",
        contender: "Codex CLI",
        skillSlug: "codex-cli",
        bestFor: "Terminal-native tasks, sandbox-safe execution, daily driver usability",
        why: "#1 SWE-bench Pro (56.8%), #1 Terminal-Bench 2.0 (77.3%). Free with ChatGPT. 65.3% Reddit preference. Rust-built, sandbox-first.",
        watch: "Narrower agent scaffolding than Claude Code. 192K context vs Gemini's 1M.",
      },
      {
        rank: "03",
        contender: "OpenCode",
        skillSlug: "opencode",
        bestFor: "Model flexibility, privacy-sensitive workflows, local/self-hosted setups",
        why: "121K+ stars (#1 in category), 75+ model providers, Go-based TUI, LSP integration. Excellent for teams needing model choice or local models.",
        watch: "No proprietary scaffolding — Morph study suggests 22-point disadvantage vs purpose-built agents. Unverified 5M MAD claim.",
      },
      {
        rank: "04",
        contender: "Gemini CLI",
        skillSlug: "gemini-cli",
        bestFor: "Free tier usage, massive context windows, Google ecosystem",
        why: "Best free tier in category (60 req/min, 1K req/day). 97K+ stars. 1M token context (largest). Deep Think mode.",
        watch: "No published SWE-bench scores. Still at v0.x. Free-tier data trains models.",
      },
      {
        rank: "05",
        contender: "Aider",
        skillSlug: "aider",
        bestFor: "Benchmark transparency, polyglot projects, git-native workflow",
        why: "42K+ stars, 5.42M PyPI total downloads. Hosts the Aider Polyglot benchmark — the category's neutral standard. Most cost-efficient (2.8 pts below Claude Code at 3x fewer tokens).",
        watch: "Last release v0.86.0 was 2025-08-09 — 7-month gap in a daily-release category.",
        belowCutLine: true,
      },
      {
        rank: "06",
        contender: "Goose (Block)",
        externalUrl: "https://github.com/block/goose",
        bestFor: "Enterprise internal tooling, extensible plugin architecture",
        why: "33K+ stars, 60% of Block workforce weekly (~10K employees), Apache 2.0, 350+ contributors.",
        watch: "No public benchmarks. Community discussion thin compared to top 4.",
        belowCutLine: true,
      },
      {
        rank: "07",
        contender: "Warp",
        externalUrl: "https://www.warp.dev",
        bestFor: "Terminal-first developers who want an integrated AI environment",
        why: "26K+ stars, 75.8% SWE-bench Verified, TIME Best Inventions. Full terminal replacement, not just CLI.",
        watch: "Closed-source. 4,350 open issues. Category mismatch — more 'AI terminal' than coding CLI agent.",
        belowCutLine: true,
      },
      {
        rank: "08",
        contender: "GitHub Copilot CLI",
        externalUrl: "https://github.com/github/gh-copilot",
        bestFor: "Teams already deep in GitHub ecosystem",
        why: "9K+ stars, tight GitHub integration. Natural language → shell commands.",
        watch: "Not a full coding agent. No published benchmarks. Shell helper, not code agent.",
        belowCutLine: true,
      },
      {
        rank: "09",
        contender: "Continue (Continuous AI)",
        skillSlug: "continue-dev",
        bestFor: "Background agents enforcing code quality on PRs",
        why: "Pivoted from IDE autocomplete to async CI agents. 32K+ stars but no longer a pure coding CLI.",
        watch: "Category is shifting under it. Not ranked in latest benchmarks.",
        belowCutLine: true,
      },
      {
        rank: "10",
        contender: "Cursor",
        externalUrl: "https://cursor.com",
        bestFor: "Polished commercial IDE with integrated AI",
        why: "Most adopted commercial AI IDE. Strong UX, strong composer mode.",
        watch: "Closed-source, paid, vendor-locked.",
        belowCutLine: true,
      },
    ],
    observedOutputs: [
      {
        title: "Claude Code CLI",
        summary:
          "Claude Code's terminal workflow is the strongest visible artifact in the autonomous CLI lane — direct shell access, multi-file edits, tool-use-driven execution.",
        href: "https://github.com/anthropics/claude-code",
        date: "2026-03",
      },
      {
        title: "OpenCode — the open-source alternative",
        summary:
          "120K+ GitHub stars make this the most starred coding agent. Supports 75+ models, privacy-first, terminal + desktop + IDE.",
        href: "https://github.com/opencode-ai/opencode",
        date: "2026-03",
      },
      {
        title: "Codex CLI by OpenAI",
        summary:
          "Rust-built, open-source, with GPT-5.4 and 1M context. Cloud sandbox execution and multi-agent parallel workflows.",
        href: "https://github.com/openai/codex",
        date: "2026-03",
      },
      {
        title: "Gemini CLI by Google",
        summary:
          "Open-source (Apache 2.0), free tier with 60 req/min, Gemini 3 with 1M context and built-in Google Search grounding.",
        href: "https://github.com/google-gemini/gemini-cli",
        date: "2026-03",
      },
    ],
    liveSignals: [
      {
        label: "Key finding",
        title: "Morph study: scaffolding matters 22x more than model choice",
        href: "https://morph.so/blog/scaffolding-matters-more-than-model",
        date: "2026-02",
        note:
          "Swapping models changed scores ~1%. Swapping the harness changed them 22%. The single most important finding in the category — elevates purpose-built agents (Claude Code, Codex) over model-agnostic harnesses.",
      },
      {
        label: "Usage signal",
        title: "SemiAnalysis: Claude Code at ~4% of GitHub public commits",
        href: "https://semianalysis.com",
        date: "2026-03",
        note:
          "~4% of public GitHub commits (SemiAnalysis est.), projected 20%+ by EOY 2026. The hardest real-usage metric in the category — no other tool has a comparable third-party estimate.",
      },
      {
        label: "Quality monitoring",
        title: "MarginLab: no Claude Code degradation detected (p<0.05)",
        href: "https://marginlab.dev",
        date: "2026-03",
        note:
          "Independent daily monitoring with 56% baseline pass rate and no statistically significant degradation. No other tool has this level of external quality assurance.",
      },
      {
        label: "Preference paradox",
        title: "Reddit 500-dev survey: Codex 65.3% preferred vs Claude Code 34.7%",
        href: "https://reddit.com/r/programming",
        date: "2026-03",
        note:
          "Claude Code wins blind quality tests 67% of the time but loses preference to Codex. Users find Claude Code 'higher quality but unusable' due to rate limits. Codex is free with ChatGPT.",
      },
      {
        label: "Benchmark leader",
        title: "Codex CLI leads SWE-bench Pro (56.8%) and Terminal-Bench 2.0 (77.3%)",
        href: "https://github.com/openai/codex",
        date: "2026-03",
        note:
          "Codex CLI tops two important benchmarks. Sandbox-first execution is a genuine safety differentiator. 1.6M weekly active users (Fortune).",
      },
      {
        label: "Star count leader",
        title: "OpenCode at 121K+ stars — but scaffolding gap question",
        href: "https://github.com/opencode-ai/opencode",
        date: "2026-03",
        note:
          "Largest community by star count but fundamentally a model-agnostic harness. Morph study suggests 22-point disadvantage vs purpose-built agents. Unverified 5M MAD claim.",
      },
    ],
    headToHead: [
      {
        left: "Claude Code",
        right: "Codex CLI",
        gist: "Claude Code wins blind quality tests 67% and leads SWE-bench Verified (80.9%). Codex leads SWE-bench Pro (56.8%) and Terminal-Bench 2.0 (77.3%). Reddit prefers Codex 65.3% for daily use — 'higher quality vs actually usable' is the real split.",
      },
      {
        left: "OpenCode",
        right: "Claude Code",
        gist: "OpenCode has 121K stars vs Claude Code's 77K. But the Morph study shows scaffolding matters 22x more than model choice — OpenCode is a model-agnostic harness, Claude Code is a purpose-built agent. That's a 22-point gap on complex tasks.",
      },
      {
        left: "Gemini CLI",
        right: "Codex CLI",
        gist: "Gemini CLI: free tier (60 req/min), 1M context, 97K stars — but no published benchmarks. Codex CLI: #1 SWE-bench Pro and Terminal-Bench, free with ChatGPT, 65K stars. Gemini wins on cost and context; Codex wins on proven performance.",
      },
      {
        left: "Aider",
        right: "OpenCode",
        gist: "Both are model-agnostic, but Aider hasn't shipped a release in 7 months while OpenCode ships daily. Aider has verifiable PyPI downloads (5.42M total); OpenCode's 5M MAD claim is unverified. Aider's benchmark transparency is unmatched.",
      },
    ],
    whatChangesThis: [
      "If Gemini CLI publishes SWE-bench scores competitive with Claude/Codex, it could jump to #2 — free tier + competitive quality would be devastating.",
      "If Claude Code removes or significantly raises rate limits, it cements #1 by closing the usability gap that drives devs to Codex.",
      "If OpenCode develops proprietary agent scaffolding (not just model passthrough), it could challenge the top 2 given its star base.",
      "If Aider ships a major release with agentic features, it returns to tier 2 contention.",
      "If Codex CLI opens its sandbox architecture for community extension, it could challenge Claude Code's scaffolding advantage.",
    ],
  },
  "web-browsing": {
    slug: "web-browsing",
    name: "Web Browsing / Browser Automation",
    deck:
      "The meta is splitting between full vision-based browser agents and structured MCP-based browser tools. Browser Use wins the autonomous browsing lane; Stagehand wins the TypeScript-native lane; Playwright MCP wins the MCP-integrated lane.",
    verdict: [
      "Browser Use is the strongest default for agents that need to see and interact with real web pages — vision + DOM hybrid, large community, active development.",
      "Stagehand is the best pick for TypeScript-native teams that want the simplest API surface with natural language selectors.",
      "Playwright MCP is the best choice when the agent stack already uses MCP and needs structured browser control without a separate browser-use library.",
    ],
    meta: [
      "Browser automation for agents is different from traditional test automation. The agent needs to understand what it sees, not just execute scripted steps.",
      "The real split is between vision-heavy approaches (screenshot + DOM) and structured tool approaches (MCP-wrapped browser APIs). Both work, but for different workflow shapes.",
    ],
    ranking: [
      {
        rank: "01",
        contender: "Browser Use",
        skillSlug: "browser-use",
        bestFor: "Full autonomous web browsing with vision and DOM understanding",
        why: "Largest community, most complete vision+DOM hybrid, broadest model support.",
        watch: "Python-only. Reliability on complex flows still evolving.",
      },
      {
        rank: "02",
        contender: "Stagehand",
        skillSlug: "stagehand",
        bestFor: "TypeScript-native browser automation with natural language selectors",
        why: "Cleanest API surface. Best DX for TypeScript teams.",
        watch: "Smaller community. Browserbase ecosystem tie-in.",
      },
      {
        rank: "03",
        contender: "Playwright MCP",
        skillSlug: "playwright-mcp",
        bestFor: "MCP-integrated browser control for existing MCP agent stacks",
        why: "Best fit when the agent already speaks MCP and needs browser as a tool.",
        watch: "Less vision-aware. Narrower community.",
      },
    ],
    observedOutputs: [
      {
        title: "Browser Use BU 2.0 model benchmark",
        summary:
          "83.3% accuracy at 62s average task completion. Outperforms Gemini 3 Pro (81.7%) and GPT-5.2 (70.9%). Concrete, publicly published benchmark with pricing.",
        href: "https://browser-use.com/changelog/27-1-2026",
        date: "2026-01",
      },
      {
        title: "GitHub Blog: debugging a web app with Playwright MCP + Copilot",
        summary:
          "Step-by-step demo of Copilot reproducing bugs, inspecting pages via Playwright MCP accessibility snapshots, identifying the fix, and verifying it live.",
        href: "https://github.blog/ai-and-ml/github-copilot/how-to-debug-a-web-app-with-playwright-mcp-and-github-copilot/",
        date: "2025-09",
      },
      {
        title: "Stagehand v3 release with CDP-direct architecture",
        summary:
          "Stagehand v3 rewrites the core to talk directly to Chrome DevTools Protocol. 20-40% speed gains across act/extract/observe. Enhanced iframe and shadow root support.",
        href: "https://github.com/browserbase/stagehand/releases",
        date: "2026-02",
      },
    ],
    liveSignals: [
      {
        label: "Model release",
        title: "Browser Use BU 2.0 — 83.3% accuracy, matches Opus 4.5 quality at 40% faster speed",
        href: "https://browser-use.com/changelog/27-1-2026",
        date: "2026-01",
        note:
          "BU 2.0 jumped from 74.7% to 83.3% accuracy, matching Claude Opus 4.5 while being 40% faster. Beats Gemini 3 Pro (81.7%) and GPT-5.2 (70.9%). Signals that Browser Use is investing in model quality, not just library features.",
      },
      {
        label: "Major release",
        title: "Stagehand v3 — 44% faster with AI-native rewrite and direct CDP",
        href: "https://github.com/browserbase/stagehand/releases",
        date: "2026-02",
        note:
          "Stagehand v3 rewrites the core to talk directly to browsers via Chrome DevTools Protocol. 20-40% faster across act, extract, and observe operations. Enhanced extraction targeting iframes and shadow roots.",
      },
      {
        label: "Institutional adoption",
        title: "Playwright MCP auto-configured in GitHub Copilot Coding Agent",
        href: "https://docs.github.com/en/copilot/concepts/agents/coding-agent/mcp-and-coding-agent",
        date: "2026-03",
        note:
          "Playwright MCP ships pre-configured in GitHub Copilot's Coding Agent — no setup required. The accessibility-snapshot approach gives Copilot browser eyes for testing and debugging. Institutional default by Microsoft.",
      },
      {
        label: "Landscape analysis",
        title: "The Agentic Browser Landscape in 2026 — independent overview",
        href: "https://www.nohackspod.com/blog/agentic-browser-landscape-2026",
        date: "2026-03",
        note:
          "Independent landscape survey covering Browser Use, Stagehand, Playwright MCP, and a dozen others. Updated March 2026. Confirms the three-lane split: vision-based (Browser Use), TypeScript-native (Stagehand), MCP-integrated (Playwright).",
      },
    ],
    headToHead: [
      {
        left: "Browser Use",
        right: "Stagehand",
        gist: "Browser Use: 80K stars, $17M seed (YC W25, Paul Graham). Stagehand: 21K stars, Browserbase-backed ($67.5M). Browser Use 4x the traction but Python-only; Stagehand wins TypeScript teams.",
      },
      {
        left: "Browser Use",
        right: "Playwright MCP",
        gist: "Browser Use uses vision+DOM. Playwright MCP uses accessibility snapshots (more reliable for structured data). Playwright MCP is auto-configured in GitHub Copilot Coding Agent — institutional default vs. community darling.",
      },
      {
        left: "Stagehand",
        right: "Playwright MCP",
        gist: "Stagehand has AI-native natural language selectors and richer DX. Playwright MCP has broader browser automation maturity under the hood. Stagehand for DX; Playwright MCP for MCP integration.",
      },
    ],
    whatChangesThis: [
      "If browser-use ships a TypeScript SDK, Stagehand's language advantage narrows.",
      "If MCP adoption accelerates, Playwright MCP could move up as agents standardize on tool protocols.",
      "If vision models get dramatically better at understanding web pages, vision-first approaches pull ahead of structured DOM approaches.",
    ],
  },
};

export const platforms: Record<PlatformSlug, PlatformRecord> = {
  figma: {
    slug: "figma",
    name: "Figma",
    url: "https://figma.com",
    summary:
      "The dominant design tool. Native MCP support is evolving. The key question for agents is whether the official path is enough or write-access challengers fill the gap.",
    nativeSupport:
      "Figma ships an official MCP server guide with remote and desktop variants. Read access is strong; direct write-back is still the frontier.",
    relatedCategories: ["ux-ui"],
    relatedSkills: ["figma-mcp-server-guide", "figma-use", "vibma"],
  },
  "google-workspace": {
    slug: "google-workspace",
    name: "Google Workspace",
    url: "https://workspace.google.com",
    summary:
      "The core business operating surface: Gmail, Docs, Sheets, Calendar, Drive. Community MCP coverage is the broadest; Google's own CLI is narrower but official.",
    nativeSupport:
      "Google ships a Workspace CLI but intentionally moved away from MCP. Broad cross-app MCP coverage comes from community tools.",
    relatedCategories: ["product-business-development"],
    relatedSkills: ["google-workspace-mcp"],
  },
  browser: {
    slug: "browser",
    name: "Web Browser",
    url: "https://www.chromium.org",
    summary:
      "The universal interaction surface. Agent browser access splits between vision-based control (Browser Use), structured automation (Playwright), and AI-native SDKs (Stagehand).",
    nativeSupport:
      "Browsers have no native agent API. All agent access goes through automation libraries, MCP wrappers, or vision-based screenshot approaches.",
    relatedCategories: ["web-browsing"],
    relatedSkills: ["browser-use", "playwright-mcp", "stagehand"],
  },
  terminal: {
    slug: "terminal",
    name: "Terminal / CLI",
    url: "https://en.wikipedia.org/wiki/Terminal_emulator",
    summary:
      "The developer's native workspace. Coding agents either run inside the terminal (Claude Code, Aider) or wrap it inside an IDE (Cursor, Continue).",
    nativeSupport:
      "Terminals provide raw shell access. The agent layer is entirely in the tool — no platform-level agent API exists.",
    relatedCategories: ["coding-clis"],
    relatedSkills: ["claude-code", "opencode", "codex-cli", "gemini-cli", "aider", "continue-dev"],
  },
  github: {
    slug: "github",
    name: "GitHub",
    url: "https://github.com",
    summary:
      "The dominant code hosting and collaboration platform. Agents interact via CLI, API, or MCP integrations. Key for issue tracking, PRs, and CI/CD.",
    nativeSupport:
      "GitHub has strong API and CLI support. Copilot is the native AI layer but is focused on IDE completion rather than autonomous agent workflows.",
    relatedCategories: ["teams-of-agents", "coding-clis"],
    relatedSkills: ["openhands", "swe-agent", "claude-code"],
  },
};

export const platformList = Object.values(platforms);

export const categoryList = [
  categories["coding-clis"],
  categories["web-browsing"],
  categories["product-business-development"],
  categories["teams-of-agents"],
  categories["ux-ui"],
];

export const skillList = Object.values(skills);

export function getCategory(slug: string) {
  return categories[slug as CategorySlug];
}

export function getSkill(slug: string) {
  return skills[slug as SkillSlug];
}

export function getPlatform(slug: string) {
  return platforms[slug as PlatformSlug];
}
