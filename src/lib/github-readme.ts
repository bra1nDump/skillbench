import { cache } from "react";

type RepoTarget = {
  owner: string;
  repo: string;
  branch?: string;
};

export const fetchGitHubReadme = cache(async ({ owner, repo, branch }: RepoTarget) => {
  const candidates = [branch, "main", "master"].filter(
    (value, index, all): value is string => Boolean(value) && all.indexOf(value) === index,
  );

  for (const candidate of candidates) {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${candidate}/README.md`;
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "user-agent": "skillbench-readme-fetcher/1.0",
      },
    });

    if (!response.ok) {
      continue;
    }

    const rawBaseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${candidate}/`;
    const source = await response.text();

    return {
      source: normalizeReadmeSource(source, rawBaseUrl),
      branch: candidate,
      githubUrl: `https://github.com/${owner}/${repo}`,
      rawUrl: url,
    };
  }

  return null;
});

function normalizeReadmeSource(source: string, rawBaseUrl: string) {
  const resolve = (value: string) =>
    new URL(value.replace(/^\.?\//, ""), rawBaseUrl).toString();

  return source
    .replace(
      /!\[([^\]]*)\]\((?!https?:\/\/|data:|#)([^)]+)\)/g,
      (_match, alt, url) => `![${alt}](${resolve(url)})`,
    )
    .replace(
      /<img([^>]*?)src=["'](?!https?:\/\/|data:|#)([^"']+)["']([^>]*)>/g,
      (_match, before, url, after) => `<img${before}src="${resolve(url)}"${after}>`,
    );
}
