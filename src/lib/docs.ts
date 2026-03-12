import fs from "node:fs/promises";
import path from "node:path";

const DOCS_ROOT = process.cwd();

function ensureInsideRoot(targetPath: string) {
  const normalizedRoot = path.resolve(DOCS_ROOT);
  const normalizedTarget = path.resolve(targetPath);

  if (!normalizedTarget.startsWith(normalizedRoot)) {
    throw new Error("Path escapes project root");
  }

  return normalizedTarget;
}

export async function readDocMarkdown(slug: string[]) {
  const requested = ensureInsideRoot(path.join(DOCS_ROOT, ...slug));
  const candidates = requested.endsWith(".md")
    ? [requested]
    : [requested, `${requested}.md`];

  for (const candidate of candidates) {
    try {
      const source = await fs.readFile(candidate, "utf8");

      return {
        source,
        filePath: candidate,
        relativePath: path.relative(DOCS_ROOT, candidate),
      };
    } catch {
      continue;
    }
  }

  throw new Error("Doc not found");
}

export function resolveDocHref(currentSlug: string[], href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  if (href.startsWith("#")) {
    return href;
  }

  const [rawTarget, hash = ""] = href.split("#");
  const currentFile = ensureInsideRoot(path.join(DOCS_ROOT, ...currentSlug));
  const currentDir = currentFile.endsWith(".md")
    ? path.dirname(currentFile)
    : DOCS_ROOT;

  const targetPath = rawTarget.startsWith("/")
    ? ensureInsideRoot(
      rawTarget.startsWith(DOCS_ROOT)
        ? rawTarget
        : path.join(DOCS_ROOT, rawTarget.replace(/^\/+/, "")),
    )
    : ensureInsideRoot(path.resolve(currentDir, rawTarget));

  const relative = path.relative(DOCS_ROOT, targetPath).replace(/\\/g, "/");
  const suffix = hash ? `#${hash}` : "";

  if (relative.startsWith("agent-runs/")) {
    return `/runs/${relative.slice("agent-runs/".length)}${suffix}`;
  }

  if (relative.endsWith(".md")) {
    return `/docs/${relative.replace(/\.md$/, "")}${suffix}`;
  }

  return `/docs/${relative}${suffix}`;
}
