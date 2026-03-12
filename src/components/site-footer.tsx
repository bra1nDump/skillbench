import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium text-zinc-400">Skillbench</p>
          <p className="mt-1 text-xs text-zinc-600">
            Evidence-backed buyer&apos;s guide for agent skills.
          </p>
        </div>
        <nav className="flex items-center gap-5 text-xs text-zinc-500">
          <Link href="/categories" className="transition-colors hover:text-zinc-300">Categories</Link>
          <Link href="/skills" className="transition-colors hover:text-zinc-300">Skills</Link>
          <Link href="/bundles" className="transition-colors hover:text-zinc-300">Bundles</Link>
          <Link href="/platforms" className="transition-colors hover:text-zinc-300">Platforms</Link>
        </nav>
      </div>
    </footer>
  );
}
