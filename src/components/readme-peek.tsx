import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    a: ({ children }) => <span className="underline decoration-black/15">{children}</span>,
    img: ({ src = "", alt = "" }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={typeof src === "string" ? src : ""}
        alt={alt}
        className="my-6 max-h-72 w-full border border-black/10 object-contain object-left-top"
      />
    ),
    h1: ({ children }) => (
      <h3 className="mt-6 text-lg font-semibold text-zinc-950 first:mt-0">{children}</h3>
    ),
    h2: ({ children }) => (
      <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-700">
        {children}
      </h4>
    ),
    h3: ({ children }) => (
      <h5 className="mt-5 text-sm font-semibold text-zinc-900">{children}</h5>
    ),
    p: ({ children }) => <p className="mt-4 text-sm leading-7 text-zinc-700">{children}</p>,
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-zinc-700">
        {children}
      </ol>
    ),
    pre: ({ children }) => (
      <pre className="mt-6 overflow-x-auto border border-black/10 bg-white px-4 py-4 text-xs leading-6 text-zinc-800">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded-[2px] bg-black/5 px-1.5 py-0.5 text-[0.92em] text-zinc-900">
        {children}
      </code>
    ),
  };

  return (
    <details className="border-t border-black/5 pt-4">
      <summary className="cursor-pointer text-sm font-semibold text-zinc-950">
        GitHub README peek
      </summary>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
        Skillbench is not the raw registry. This is just a constrained peek so
        you can sanity-check the source material without leaving the site.
      </p>
      <div className="relative mt-6 max-h-[34rem] overflow-hidden">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {excerpt}
        </ReactMarkdown>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
      >
        View the raw skill on GitHub →
      </a>
    </details>
  );
}
