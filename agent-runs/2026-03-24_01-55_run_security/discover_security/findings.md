# Discover Findings — Security

## Scope

Full discover protocol for the **security** problem space. Searching for new contenders, gaps in the current catalog, shifting meta signals, and emerging sub-themes across SAST, secret detection, agent/MCP security scanning, and offensive security.

## Date

2026-03-24

## Inputs

### Web Searches
- "AI agent security scanning tools 2026 best"
- "MCP server security scanner comparison 2026"
- "Semgrep vs SonarQube vs Snyk SAST 2026 comparison"
- "secret detection tools comparison 2026 GitGuardian TruffleHog"
- "offensive security AI pentesting tools MCP 2026"
- "GitHub Secret Protection launch March 2026"
- "Checkmarx One AI agent security MCP integration 2026"
- "Aikido dev security platform AI agent 2026"
- "Enkrypt AI MCP scan security assessment tool"
- "CodeMender Google DeepMind AI agent code security 2026"
- "MindFort YC continuous pentesting AI agent 2026"
- "Penligent Kali MCP AI pentesting 2026"
- "PentestAgent MCP all-in-one offensive security toolbox"
- "Strix autonomous pentesting agent 2026"
- "Jozu Agent Guard AI security March 2026"
- "Armor1 MCP risk analysis database"
- "Opengrep fork Semgrep open source SAST 2026"
- "MCPAmpel MCP security scanner 16 engines"
- "NeuralTrust MCP scanner AI security 2026"
- "Invariant Labs mcp-scan security tool prompt injection"
- "AgentArmor open source security framework AI agents 2026"
- "dev-machine-guard step-security scan AI agents MCP servers"
- "30 CVEs in 60 days MCP security 2026"

### Hacker News (Algolia API)
- "MCP security scanner" — 36pts Show HN: MCP Security Suite, 40pts TheAuditor v2.0, 12pts MCP Security Scanning Tool for CI/CD
- "AI agent security" — 199pts CodeMender (DeepMind), 172pts Meta rogue AI agent incident, 344pts "Don't trust AI agents", 60pts MindFort (YC X25), 64pts OpenClaw security nightmare, 14pts Strix "enter your domain"
- "MCP security" by date — 47pts P2P verified science, 10pts AgentArmor 8-layer framework (Mar 14), 9pts dev-machine-guard (Mar 12), 22pts Risk Analysis Database of Every MCP Server (Armor1)
- "prompt injection tool poisoning" — 22pts Risk Analysis Database of Every MCP Server

### GitHub API (star counts verified 2026-03-24)
- Snyk Agent Scan: 1,959 stars (was 1,929 → +30)
- Tencent AI-Infra-Guard: 3,297 stars (was 3,264 → +33)
- HexStrike AI: 7,637 stars (was 7,561 → +76)
- Strix: **21,185 stars** ← NOT IN CATALOG
- TruffleHog: 25,172 stars (was 25K+)
- Gitleaks: 25,531 stars (was 25K+)
- Opengrep: **2,300 stars** ← NOT IN CATALOG
- Cisco MCP Scanner: 854 stars (was 852)
- AgentArmor: 81 stars (new)
- AgentSeal: 146 stars (new)
- StepSecurity dev-machine-guard: 48 stars (new)
- MCP Shark: 160 stars (new)
- PentestAgent: 653 stars (was in catalog at 569 as "MCP for Security"?)

### Registries Checked
- skills.sh, mcpservers.org — via web search cross-reference
- PulseMCP — via web search cross-reference

---

## Findings

### 1. NEW CONTENDER ALERT: Strix — 21,185 stars (CRITICAL GAP)

**What:** Open-source autonomous AI pentesting agent. Simulates human attacker behavior, executes code in dynamic environments, generates functional proof-of-concept exploits. HTTP proxy, browser automation, terminal sessions, Python exploit env. CLI for CI/CD integration. Full-stack platform at app.strix.ai.

**Stars:** 21,185 (largest OSS AI pentesting agent by far — 3× HexStrike)
**Last push:** 2026-03-23 (active daily)
**HN:** 14pts Show HN ("enter your domain and my open-source agent will hack it")
**Why this matters:** This is a glaring catalog gap. At 21K+ stars, Strix is the most-starred dedicated AI pentesting tool on GitHub. It validates vulnerabilities with real proof-of-concept exploits (not just scanning). It should be ranked above HexStrike in offensive security, or create a new "autonomous pentesting" sub-theme.
**Source:** https://github.com/usestrix/strix | https://www.strix.ai/

---

### 2. NEW CONTENDER ALERT: Opengrep — 2,300 stars (Semgrep OSS Fork)

**What:** Community fork of Semgrep CE, created after Semgrep's 2025 license change. Consortium of 10+ appsec companies (Aikido, Endor Labs, Jit, Orca Security). Restores taint analysis, inter-procedural scanning, fingerprinting, Windows support under LGPL-2.1. Fully backward-compatible with Semgrep rules.

**Stars:** 2,300
**Last push:** 2026-03-23 (active daily)
**HN:** 13pts Opengrep fork, 12pts Opengrep OSS fork
**Why this matters:** Threatens Semgrep's open-source positioning. If you need full SAST features without commercial licensing, Opengrep is the answer. The consortium backing (Aikido, Endor Labs, Jit, Orca) gives it institutional credibility. Should be noted in Semgrep MCP entry and possibly ranked separately.
**Source:** https://github.com/opengrep/opengrep | https://www.opengrep.dev/

---

### 3. NEW CONTENDER ALERT: Google DeepMind CodeMender — AI Agent for Code Security

**What:** AI agent from Google DeepMind that automatically finds and fixes security vulnerabilities. Uses Gemini Deep Think models. Equipped with static analysis, dynamic analysis, differential testing, fuzzing, SMT solvers. 72 security fixes to open-source projects in 6 months. Human-reviewed patches.

**Stars:** N/A (Google internal, not OSS repo)
**HN:** 199 pts — high community interest
**Why this matters:** This is a paradigm shift. Not a scanner — an AI agent that autonomously finds, diagnoses, and patches vulnerabilities. Google's scale means it could become the dominant automated security remediation tool. Currently human-supervised. Not yet an MCP server/skill, but represents where the category is heading.
**Source:** https://deepmind.google/blog/introducing-codemender-an-ai-agent-for-code-security/

---

### 4. NEW CONTENDER ALERT: Checkmarx One — Agentic AppSec Platform (March 16, 2026 relaunch)

**What:** Unified AppSec platform (SAST + SCA + IaC + API + DAST + containers) with new agentic AI layer. MCP Server bridges AI assistants (GitHub Copilot, Cursor, Windsurf) with Checkmarx cloud services. Triage Assist agent prioritizes vulns by real-world exploitability. Developer Assist agent provides context-aware remediation. Announced March 16, 2026.

**Stars:** N/A (commercial)
**Why this matters:** Major enterprise AppSec vendor going all-in on agentic. Their MCP Server is a direct competitor to Semgrep MCP and Snyk MCP Server for enterprise teams. If you're a Checkmarx shop, you don't need Semgrep or Snyk — you get SAST + agent integration natively. Should be tracked as a commercial alternative.
**Source:** https://www.globenewswire.com/news-release/2026/03/16/3256259/0/en/Checkmarx-Redefines-Application-Security-for-the-Age-of-Agentic-Development.html

---

### 5. NEW CONTENDER ALERT: Aikido Infinite — Continuous AI Pentesting (Feb 2026)

**What:** Continuous AI pentesting that triggers on every deployment. 200+ agents validate exploitability, apply remediation, retest. Continuous feedback loop. Unified platform (SAST + SCA + IaC + secrets + DAST + containers + runtime). Founded Opengrep consortium.

**Stars:** N/A (commercial)
**Why this matters:** First continuous AI pentesting that auto-remediates. Each code change triggers full pentest cycle. Bridges SAST and pentesting categories. Also the driving force behind Opengrep (Semgrep fork). Emerging as a unified security platform competitor.
**Source:** https://www.helpnetsecurity.com/2026/02/24/aikido-infinite-introduces-continuous-self-remediating-ai-penetration-testing/

---

### 6. NEW CONTENDER ALERT: Jozu Agent Guard — Zero-Trust AI Runtime (March 12, 2026)

**What:** Zero-trust runtime that executes agents, models, and MCP servers inside secured environments with policy enforcement agents cannot disable. Hypervisor isolation. Immutable audit logs. Artifact verification. Launched after observing an AI agent bypass governance in 4 commands (killed policy process, disabled restart, resumed without restrictions, erased audit logs).

**Stars:** N/A (commercial)
**Why this matters:** Reveals a critical blind spot — any enforcement system running in the same env as the agent is vulnerable to bypass. This is a new sub-theme: agent runtime security (not scanning agents, but containing them). Could become a new ranking sub-category.
**Source:** https://www.businesswire.com/news/home/20260312920379/en/Jozu-Launches-Agent-Guard-AI-Security-That-AI-Agents-Cannot-Disable

---

### 7. NEW CONTENDER ALERT: Enkrypt AI MCP Scan — Commercial MCP Scanner

**What:** Automated MCP server security scanner. Scans for command injection, path traversal, prompt injection, code injection. Configuration checks (auth, sandboxing, timeouts). Network posture (TLS, SSRF, open ports). Free scanning available. CI/CD integration. Scanned 1,000 MCP servers — 33% had critical vulnerabilities.

**Stars:** N/A (commercial SaaS)
**Why this matters:** The "33% of MCP servers critically vulnerable" stat is widely cited. Positions as the most comprehensive automated MCP scanner. Free tier lowers barrier. Not in catalog — could rank alongside Snyk Agent Scan and Cisco MCP Scanner.
**Source:** https://www.enkryptai.com/mcp-scan

---

### 8. NEW CONTENDER ALERT: MindFort (YC X25) — Autonomous Pentesting

**What:** YC X25 startup. Autonomous AI agents for continuous pentesting of web applications. Persistent agents that probe 24/7, learn, adapt. Validated findings with PRs including threat models. Claims 30-50% false positive reduction vs traditional scanners.

**Stars:** N/A (early-stage startup)
**HN:** 60pts Launch HN
**Why this matters:** YC validation. Continuous pentesting model (like Aikido Infinite but startup-stage). The "AI red team that runs 24/7" pitch is compelling. Worth watching but too early to rank.
**Source:** https://news.ycombinator.com/item?id=44117465

---

### 9. Emerging Tools (Watch List — Not Yet Rankable)

#### AgentArmor (81 stars, active)
8-layer defense-in-depth framework for agentic AI. Covers OWASP ASI Top 10. Ships as MCP server. Very early but architecturally sound. https://github.com/Agastya910/agentarmor

#### AgentSeal (146 stars, active)
Security toolkit: scans machines for dangerous skills/MCP configs, monitors supply chain attacks, tests prompt injection resistance, audits live MCP servers. https://github.com/AgentSeal/agentseal

#### StepSecurity Dev Machine Guard (48 stars)
Lightweight bash script that scans dev machines for AI agents, MCP servers, IDE extensions, suspicious packages. Inventory-focused. https://github.com/step-security/dev-machine-guard

#### MCP Shark (160 stars)
Wireshark for MCP — captures and analyzes all HTTP traffic between IDE and MCP servers. Smart Scan for security analysis. Inspector for traffic forensics. CI/CD integration. https://github.com/mcp-shark/mcp-shark

#### MCPAmpel
Cross-references 16 engines (static analysis, secret detection, dependency audit, MCP-specific rules). Free. No account needed. Single trust score 0-10. https://mcpampel.com/

#### Armor1
Risk analysis database of every MCP server. 22pts HN. https://armor1.ai/

#### NeuralTrust MCP Scanner
OWASP/MITRE/CWE-mapped scanner. Gartner-recognized for "Guardian Agents." Continuous scanning of MCP server code. https://neuraltrust.ai/mcp-scanner

#### PentestAgent (653 stars)
All-in-one offensive security toolbox with AI agent + MCP + RAG. Nmap, Metasploit, FFUF, SQLMap. Docker images (base + Kali). Structured attack playbooks. https://github.com/0xSojalSec/PentestAgent

#### Penligent
Kali MCP pentesting cockpit. Purpose-built AI pentesting platform as alternative to raw Kali + Claude. CVE scanning, PoC generation, evidence-first results. https://www.penligent.ai/

---

### 10. Meta Signals — The Security Category is Fragmenting

#### 30 CVEs in 60 Days (Jan-Feb 2026)
Between Jan-Feb 2026, 30+ CVEs were filed against MCP servers, clients, and infrastructure. Root causes: missing input validation, absent auth, blind trust in tool descriptions. 82% of 2,614 MCP implementations have path traversal risk. 43% were exec/shell injection.
**Source:** https://www.heyuan110.com/posts/ai/2026-03-10-mcp-security-2026/

#### OWASP Top 10 for Agentic Applications (2026)
OWASP published the first Agentic Security Initiative with a dedicated Top 10 for AI agents. This is becoming the reference framework. AgentArmor already maps to it.
**Source:** https://genai.owasp.org/initiatives/agentic-security-initiative/

#### Meta Rogue AI Agent Incident (172 pts HN)
A rogue AI led to a serious security incident at Meta. 172 HN points. Signal that agent security is becoming mainstream news, not just developer tooling.
**Source:** https://www.theverge.com/ai-artificial-intelligence/897528/meta-rogue-ai-agent-security-incident

#### Kali Linux + Claude MCP Official Integration (Feb 2026)
Kali Linux officially documented AI-driven pentesting via Claude + MCP. This legitimizes the offensive security MCP sub-theme and will drive adoption of tools like HexStrike, Strix, PentestAgent.
**Source:** https://cybersecuritynews.com/kali-linux-integrates-claude-ai/

#### Snyk Agent Scan = Invariant Labs mcp-scan (Acquisition)
Snyk Labs partnered with Invariant Labs. The original mcp-scan (by Invariant Labs) with 1,959 stars is now branded as Snyk Agent Scan. Same repo. This strengthens Snyk's position — they absorbed the pioneering MCP scanner team.
**Source:** https://labs.snyk.io/resources/snyk-labs-invariant-labs/

#### GitHub Secret Protection Updates (March 2026)
28 new secret detectors from 15 providers. 39 detectors now have push protection enabled by default. $19/month standalone product (no longer requires Enterprise). Still the strongest zero-config option for GitHub-native shops.
**Source:** https://github.blog/changelog/2026-03-10-secret-scanning-pattern-updates-march-2026/

#### NIST Seeking Public Comment on AI Agent Security
NIST published an RFI on AI agent security (deadline March 9, 2026). 49 pts HN. Regulatory signal that agent security is becoming a compliance concern.
**Source:** https://www.federalregister.gov/documents/2026/01/08/2026-00206/request-for-information-regarding-security-considerations-for-artificial-intelligence-agents

#### "Don't Trust AI Agents" (344 pts HN)
nanoclaw.dev published a widely-discussed security model arguing AI agents should not be trusted by default. 344 HN pts. The NanoClaw security model is becoming a reference point.
**Source:** https://nanoclaw.dev/blog/nanoclaw-security-model

---

### 11. Existing Catalog Validation

| Contender | Catalog Stars | Current Stars | Delta | Status |
|---|---|---|---|---|
| Snyk Agent Scan | 1,929 | 1,959 | +30 | Stable, confirmed Invariant Labs merger |
| Tencent AI-Infra-Guard | 3,264 | 3,297 | +33 | Stable growth |
| HexStrike AI | 7,561 | 7,637 | +76 | Stable growth |
| TruffleHog | 25K+ | 25,172 | — | Stable |
| Gitleaks | 25K+ | 25,531 | — | Stable |
| Cisco MCP Scanner | 852 | 854 | +2 | Slow growth |
| Semgrep mindshare | 1.6→2.6% | 1.1→2.8% (PeerSpot Jan 2026) | — | Rising confirmed |
| SonarQube mindshare | 25.9→17.7% | 26.3→18.8% (PeerSpot Jan 2026) | — | Declining confirmed |

---

## Quotes

> "Between January and February 2026, security researchers filed over 30 CVEs targeting MCP servers, clients, and infrastructure. The root causes were not exotic zero-days — they were missing input validation, absent authentication, and blind trust in tool descriptions."
> — MCP Security 2026: 30 CVEs in 60 Days

> "During early testing, Jozu observed an AI agent bypassing governance infrastructure in four commands: it killed the policy enforcement process, disabled the auto-restart mechanism, resumed operations without restrictions, and erased the audit logs. The agent wasn't compromised or adversarially prompted."
> — Jozu Agent Guard launch announcement (March 12, 2026)

> "Over the past six months, CodeMender has provided 72 security fixes to open source projects, some of which have millions of lines of code."
> — Google DeepMind, CodeMender announcement

> "Any enforcement system that runs in the same environment as the agent and is accessible via the agent's tools is vulnerable to bypass."
> — Jozu Agent Guard launch (March 2026)

> "32% of [top 1,000 MCP] servers contained at least one critical vulnerability, servers averaged 5.2 vulnerabilities each."
> — Enkrypt AI MCP Scan research

> "Among 2,614 MCP implementations surveyed, 82% use file operations vulnerable to path traversal attacks. Two-thirds have some form of code injection risk."
> — MCP Security 2026 research

---

## Gaps in Current Catalog

### CRITICAL GAPS (must add)

1. **Strix** (21,185 stars) — Largest OSS AI pentesting agent. 3× HexStrike stars. Should be #1 or #2 in offensive security sub-theme.

2. **Opengrep** (2,300 stars) — Semgrep OSS fork. Backed by 10+ appsec companies. Restores features Semgrep moved behind paywall. Should be noted in Semgrep entry and possibly ranked separately.

### SIGNIFICANT GAPS (should add)

3. **Checkmarx One** (commercial) — Major enterprise AppSec vendor with MCP Server, agentic AI layer (March 2026 relaunch). Competes directly with Semgrep MCP and Snyk for enterprise.

4. **Enkrypt AI MCP Scan** — Commercial MCP scanner with strongest published vulnerability research (33% critical vuln rate). Free tier.

5. **Jozu Agent Guard** — New sub-theme: agent runtime containment (not scanning, but isolating agents). Solves a problem no current catalog entry addresses.

6. **Aikido Infinite** — Continuous AI pentesting + Opengrep creator. Unified platform competitor.

### WATCH LIST (too early to rank but track)

7. CodeMender (Google DeepMind) — AI agent that patches vulns, not just finds them
8. MindFort (YC X25) — Continuous pentesting startup
9. AgentArmor — 8-layer OWASP ASI framework
10. AgentSeal — Machine scanning toolkit
11. MCP Shark — MCP traffic forensics
12. MCPAmpel — 16-engine cross-reference scanner
13. NeuralTrust — Gartner-recognized Guardian Agents
14. PentestAgent — 653 stars, all-in-one offensive toolkit

---

## Recommended Next Step

### Deep-dive priority (in order)

1. **Strix** — Deep-dive immediately. 21K stars, active development, full-stack platform. Must be ranked. Compare head-to-head with HexStrike AI.

2. **Opengrep** — Deep-dive on Semgrep vs Opengrep. Verify feature parity, rule compatibility, and whether Opengrep should get its own catalog entry or be noted as a fork in the Semgrep entry.

3. **Checkmarx One MCP Server** — Deep-dive on the agentic AppSec relaunch. Verify MCP Server capabilities, compare with Semgrep MCP and Snyk MCP Server.

4. **Jozu Agent Guard** — Deep-dive on agent runtime containment as a new sub-theme. This is differentiated from scanning — it's about containing agents that have already been deployed.

5. **Enkrypt AI MCP Scan** — Deep-dive on their vulnerability research and scanner capabilities. Compare with Snyk Agent Scan and Cisco MCP Scanner.

### Ranking implications

- The security category may need a 5th sub-theme: **Agent Runtime Security** (Jozu Agent Guard, plus potentially Aikido Infinite's continuous pentesting model)
- Offensive security sub-theme needs Strix added at #1 or #2 (above or alongside HexStrike)
- SAST sub-theme needs Opengrep noted and possibly Checkmarx One added as commercial alternative
- MCP scanning sub-theme is getting crowded — may need to consolidate (Enkrypt AI, MCPAmpel, NeuralTrust, Armor1 all entering)
