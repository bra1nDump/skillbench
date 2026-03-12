"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type SearchItem = {
  label: string;
  name: string;
  href: string;
  summary: string;
};

export function Search({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.length < 2
    ? []
    : items.filter((item) => {
      const q = query.toLowerCase();

      return (
        item.name.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q)
      );
    });

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        !e.metaKey &&
        !e.ctrlKey &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      <div className="relative">
        <svg className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search skills, categories, bundles..."
          className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] py-2.5 pl-10 pr-12 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-indigo-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
          /
        </kbd>
      </div>
      {open && filtered.length > 0 && (
        <div className="absolute top-full z-30 mt-2 max-h-80 w-full overflow-y-auto rounded-lg border border-white/[0.08] bg-[#111118] shadow-2xl shadow-black/40">
          {filtered.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
              className="block border-b border-white/[0.04] px-4 py-3 last:border-b-0 hover:bg-white/[0.04]"
            >
              <span
                className={`inline-block rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                  item.label === "Skill"
                    ? "bg-indigo-500/15 text-indigo-400"
                    : item.label === "Bundle"
                      ? "bg-violet-500/15 text-violet-400"
                      : item.label === "Category"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-white/[0.06] text-zinc-400"
                }`}
              >
                {item.label}
              </span>
              <p className="mt-1 text-sm font-medium text-zinc-200">
                {item.name}
              </p>
              <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>
      )}
      {open && query.length >= 2 && filtered.length === 0 && (
        <div className="absolute top-full z-30 mt-2 w-full rounded-lg border border-white/[0.08] bg-[#111118] px-4 py-4 shadow-2xl shadow-black/40">
          <p className="text-sm text-zinc-500">No results for &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  );
}
