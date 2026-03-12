import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Components } from "react-markdown";

type ReadmePeekProps = {
  source: string;
  githubUrl: string;
};

export function ReadmePeek({ source, githubUrl }: ReadmePeekProps) {
  const excerpt = source
    .split("\n")
    .filter(
      (line) =>
        ![
          "img.shields.io",
          "badge.fury",
          "pepy.tech",
          "smithery.ai",
          "vscode.dev/redirect",
          "insiders.vscode.dev/redirect",
          "mcp.so/playground",
          "dashboard.exa.ai",
          "npmjs.com/package",
          "dub.sh/openhands",
        ].some((pattern) => line.includes(pattern)),
    )
    .slice(0, 140)
    .join("\n");

  const components: Components = {
    a: ({ children }) => <span className="text-indigo-400">{children}</span>,
    img: ({ src = "", alt = "" }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof src === "string" ? src : ""}
        alt={alt}
        className="my-6 max-h-72 w-full rounded-lg border border-white/[0.06] object-contain object-left-top"
      />
    ),
    h1: ({ children }) => (
      <h3 className="mt-6 text-lg font-semibold text-white first:mt-0">{children}</h3>
    ),
    h2: ({ children }) => (
      <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-400">
        {children}
      </h4>
    ),
    h3: ({ children }) => (
      <h5 className="mt-5 text-sm font-semibold text-zinc-300">{children}</h5>
    ),
    p: ({ children }) => <p className="mt-4 text-sm leading-7 text-zinc-400">{children}</p>,
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-400">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-zinc-400">
        {children}
      </ol>
    ),
    pre: ({ children }) => (
      <pre className="mt-6 overflow-x-auto rounded-lg border border-white/[0.06] bg-[var(--surface)] px-4 py-4 text-xs leading-6 text-zinc-300">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[0.92em] text-zinc-300">
        {children}
      </code>
    ),
  };

  return (
    <details className="rounded-xl border border-white/[0.06] bg-[var(--surface)] p-5">
      <summary className="cursor-pointer text-sm font-semibold text-white">
        GitHub README peek
      </summary>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
        Constrained peek so you can sanity-check the source material without leaving the site.
      </p>
      <div className="relative mt-6 max-h-[34rem] overflow-hidden">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {excerpt}
        </ReactMarkdown>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
      >
        View on GitHub →
      </a>
    </details>
  );
}
