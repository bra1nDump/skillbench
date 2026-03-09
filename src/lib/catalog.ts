export type SkillSlug =
  | "figma-mcp-server-guide"
  | "figma-use"
  | "vibma"
  | "firecrawl-mcp-server"
  | "exa-mcp-server"
  | "google-workspace-mcp"
  | "openhands"
  | "ralph-loop-agent"
  | "swe-agent";

export type JobSlug =
  | "product-business-development"
  | "teams-of-agents"
  | "ux-ui";

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
  previewImage?: string;
  docsUrl?: string;
  relatedJobs: JobSlug[];
  strengths: string[];
  weaknesses: string[];
};

export type JobRecord = {
  slug: JobSlug;
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
  }>;
  observedOutputs: Array<{
    title: string;
    summary: string;
    href: string;
    image?: string;
  }>;
  liveSignals: Array<{
    label: string;
    title: string;
    href: string;
    note: string;
    preview?: string;
  }>;
  whatChangesThis: string[];
};

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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-mcp-help.png",
    docsUrl:
      "https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers",
    relatedJobs: ["ux-ui"],
    strengths: [
      "Official provider trust",
      "Clear path into real Figma workflows",
      "Best fit for teams standardizing on the official lane",
    ],
    weaknesses: [
      "Less exciting than unofficial write-access challengers",
      "Still tied to Figma auth and setup discipline",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-use-repo-hero.png",
    relatedJobs: ["ux-ui"],
    strengths: [
      "Strong write-access story",
      "Real public builder traction",
      "Clear GitHub-first artifact surface",
    ],
    weaknesses: [
      "Weaker institutional trust than the official Figma path",
      "More likely to matter for power users than broad teams",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/vibma-hn.png",
    relatedJobs: ["ux-ui"],
    strengths: [
      "Very explicit write-directly positioning",
      "Good fit for people testing aggressive design automation",
    ],
    weaknesses: [
      "Low public traction so far",
      "Trust is still builder-post level rather than broad adoption",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/firecrawl-mcp-repo-hero.png",
    docsUrl: "https://firecrawl.dev",
    relatedJobs: ["product-business-development"],
    strengths: [
      "Official provider support",
      "Strong extraction and scraping shape",
      "Best fit when research means real web pages, not just search snippets",
    ],
    weaknesses: [
      "Not the system of record itself",
      "Needs a downstream workspace if you want operating memory",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/exa-mcp-repo-hero.png",
    relatedJobs: ["product-business-development"],
    strengths: [
      "Fast search-first workflow",
      "Official provider support",
      "Good fit for discovery and initial market mapping",
    ],
    weaknesses: [
      "Less differentiated when you need operational follow-through",
      "Weaker than Workspace MCP for actually running the business surface",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/google-workspace-mcp-repo-hero.png",
    docsUrl: "https://workspacemcp.com",
    relatedJobs: ["product-business-development"],
    strengths: [
      "Huge breadth across core business tools",
      "Best fit when the job includes reading and writing real operating docs",
      "Strong ecosystem momentum",
    ],
    weaknesses: [
      "Community-built rather than Google-official",
      "Auth and scope management matter a lot",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/openhands-home-hero.png",
    docsUrl: "https://docs.openhands.dev",
    relatedJobs: ["teams-of-agents"],
    strengths: [
      "Massive public traction",
      "Clear software-agent framing",
      "Strong benchmark and adoption story",
    ],
    weaknesses: [
      "Heavier surface area than a simple loop pattern",
      "Can be more infra than you need for narrow tasks",
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
      "Vercel’s continuous-autonomy loop for the AI SDK. Cleaner pattern surface than a full software-agent platform.",
    verdict:
      "Best reference when the team wants a crisp loop pattern instead of a huge agent platform.",
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/ralph-loop-repo-hero.png",
    docsUrl: "https://ai-sdk.dev",
    relatedJobs: ["teams-of-agents"],
    strengths: [
      "Official Vercel trust",
      "Strong loop framing for continuous autonomy",
      "Good fit for people who want pattern clarity",
    ],
    weaknesses: [
      "Lighter public artifact surface than OpenHands or SWE-agent",
      "More pattern than full factory out of the box",
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
    previewImage:
      "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/swe-agent-repo-hero.png",
    docsUrl: "https://swe-agent.com/latest/",
    relatedJobs: ["teams-of-agents"],
    strengths: [
      "Benchmark-native story",
      "Clear issue-solving shape",
      "Strong technical credibility",
    ],
    weaknesses: [
      "Narrower than OpenHands for broad factory workflows",
      "Less about continuous loops than Ralph",
    ],
  },
};

export const jobs: Record<JobSlug, JobRecord> = {
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
      },
    ],
    observedOutputs: [
      {
        title: "Google Workspace MCP public operating surface",
        summary:
          "The strongest visible artifact in this lane is still the Google Workspace MCP public repo surface because it shows the breadth of the operating stack in one place.",
        href: "https://github.com/taylorwilsdon/google_workspace_mcp",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/google-workspace-mcp-repo-hero.png",
      },
      {
        title: "Firecrawl research-side extraction surface",
        summary:
          "Firecrawl’s public surface is simpler visually, but it remains the cleanest official scraping and extraction path for the business-research lane.",
        href: "https://github.com/firecrawl/firecrawl-mcp-server",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/firecrawl-mcp-repo-hero.png",
      },
      {
        title: "Exa search-first research surface",
        summary:
          "Exa remains the cleanest public search-first surface in this category when the job is discovery rather than acting inside the workspace itself.",
        href: "https://github.com/exa-labs/exa-mcp-server",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/exa-mcp-repo-hero.png",
      },
    ],
    liveSignals: [
      {
        label: "Hacker News comparison",
        title: "Comment in the Google Workspace CLI thread: 'Honestly, easier with MCP straight up'",
        href: "https://news.ycombinator.com/item?id=47258403",
        note:
          "Useful because it is an active public comparison inside the official Google Workspace CLI discussion. Moderate trust: practitioner comment, not official guidance, but directly on point.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/gws-cli-mcp-comment-hn.png",
      },
      {
        label: "Maintainer artifact",
        title: "Google Workspace MCP repository",
        href: "https://github.com/taylorwilsdon/google_workspace_mcp",
        note:
          "Highest practical operating breadth in this lane right now, with explicit Gmail, Docs, Sheets, Calendar, Drive, and Search coverage. High relevance, medium trust because it is maintainer-provided.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/google-workspace-mcp-repo-hero.png",
      },
      {
        label: "Official provider",
        title: "Firecrawl MCP Server repository",
        href: "https://github.com/firecrawl/firecrawl-mcp-server",
        note:
          "Official provider support matters here because broken extraction kills downstream business workflows. High trust on operational reliability, weaker on independent comparison.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/firecrawl-mcp-repo-hero.png",
      },
      {
        label: "Official native contender",
        title: "Google Workspace CLI discussion on Hacker News",
        href: "https://news.ycombinator.com/item?id=47284551",
        note:
          "Important because it proves the native official lane is evolving quickly. Right now it still looks narrower than the broad MCP operating surface for this job.",
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
        href: "https://www.all-hands.dev/",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/openhands-home-hero.png",
      },
      {
        title: "SWE-agent public benchmark artifact",
        summary:
          "SWE-agent’s banner and benchmark-native public surface make it the cleanest visible artifact in the issue-fixing lane.",
        href: "https://github.com/SWE-agent/SWE-agent",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/swe-agent-repo-hero.png",
      },
      {
        title: "Mini SWE-agent benchmark thread",
        summary:
          "This HN thread is useful because the researchers explain the 65% SWE-bench result in plain language and the comments expose what people actually trust in the benchmark story.",
        href: "https://news.ycombinator.com/item?id=44682897",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/mini-swe-agent-hn.png",
      },
    ],
    liveSignals: [
      {
        label: "High-signal HN comment",
        title: "OpenHands contributor on why multi-agent systems rarely help benchmark scores",
        href: "https://news.ycombinator.com/item?id=44508250",
        note:
          "One of the strongest public trust sources here because it is candid, specific, and comes from someone directly close to the OpenHands project instead of generic multi-agent hype.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/openhands-multi-agent-hn.png",
      },
      {
        label: "Benchmark-native",
        title: "Show HN: Mini-swe-agent achieves 65% on SWE-bench in 100 lines of Python",
        href: "https://news.ycombinator.com/item?id=44682897",
        note:
          "High trust because it comes from the SWE-agent researchers themselves and anchors the narrow issue-fixing lane in a concrete public result.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/mini-swe-agent-hn.png",
      },
      {
        label: "Loop reference",
        title: "Ralph Loop Agent repository",
        href: "https://github.com/vercel-labs/ralph-loop-agent",
        note:
          "Important because it gives the loop pattern an official and compact reference implementation instead of a giant platform claim.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/ralph-loop-repo-hero.png",
      },
      {
        label: "Meta discussion",
        title: "Software factories and the agentic moment",
        href: "https://news.ycombinator.com/item?id=46924426",
        note:
          "Useful market-level signal because the thread is large and skeptical. It is not ranking evidence by itself, but it shows what the public is actually pushing back on in the software-factory story.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/software-factory-hn.png",
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
      },
    ],
    observedOutputs: [
      {
        title: "Official Figma MCP guidance",
        summary:
          "Figma’s own remote-vs-desktop MCP guide is the cleanest official artifact because it shows the tool split and the workflow assumptions directly.",
        href: "https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-mcp-help.png",
      },
      {
        title: "Community write-access challenger",
        summary:
          "Figma-use is the clearest public write-access challenger because it has both repo artifacts and real HN discussion.",
        href: "https://github.com/dannote/figma-use",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-use-repo-hero.png",
      },
      {
        title: "Vibma challenger thread",
        summary:
          "Vibma is still early, but the HN thread is valuable because it states the direct-edit promise plainly and contrasts itself with the official Figma MCP lane.",
        href: "https://news.ycombinator.com/item?id=47217411",
        image:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/vibma-hn.png",
      },
    ],
    liveSignals: [
      {
        label: "Official docs",
        title: "Compare Figma's remote and desktop MCP servers",
        href: "https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers",
        note:
          "Highest trust in the category because it is the provider spelling out the workflow split directly.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-mcp-help.png",
      },
      {
        label: "Official repo",
        title: "Figma MCP Server Guide repository",
        href: "https://github.com/figma/mcp-server-guide",
        note:
          "The repo itself is a useful trust signal because it shows Figma treating this as a maintained, evolving workflow instead of a one-off demo.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-mcp-guide-repo-hero.png",
      },
      {
        label: "Hacker News head-to-head",
        title: "Show HN: Figma-use - CLI to control Figma for AI agents",
        href: "https://news.ycombinator.com/item?id=46665169",
        note:
          "Strongest public head-to-head challenger signal in the category so far. Higher trust than random social chatter because the thread exposes real questions about direct control and workflow shape.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/figma-use-hn.png",
      },
      {
        label: "Hacker News challenger",
        title:
          "Show HN: Vibma - let agents create professional design system in Figma, directly",
        href: "https://news.ycombinator.com/item?id=47217411",
        note:
          "Lower traction than Figma-use, but still directly relevant because it frames the same write-access split.",
        preview:
          "/run-assets/2026-03-09_12-55_evidence-capture_core-jobs/assets/vibma-hn.png",
      },
    ],
    whatChangesThis: [
      "If the official Figma path becomes dramatically better at direct write-back, the challenger gap narrows fast.",
      "If a challenger starts winning broad public trust instead of just builder attention, the top of the category shifts.",
    ],
  },
};

export const jobList = [
  jobs["product-business-development"],
  jobs["teams-of-agents"],
  jobs["ux-ui"],
];

export const skillList = Object.values(skills);

export function getJob(slug: string) {
  return jobs[slug as JobSlug];
}

export function getSkill(slug: string) {
  return skills[slug as SkillSlug];
}
