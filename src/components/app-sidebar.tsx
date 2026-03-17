"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { categoryList } from "@/lib/catalog";

const navItems = [
  { href: "/skills", label: "Skills", icon: "◈" },
  { href: "/bundles", label: "Bundles", icon: "▤" },
  { href: "/platforms", label: "Platforms", icon: "◇" },
  { href: "/compare", label: "Compare", icon: "⇔" },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="flex h-full w-[220px] min-w-[220px] flex-col bg-black">
      {/* Brand */}
      <div className="border-b border-[#262626] px-[18px] pb-[14px] pt-[18px]">
        <Link href="/" onClick={onNavigate}>
          <span className="font-mono text-[15px] font-bold tracking-tight text-white">
            SKILL<span className="text-[var(--accent)]">BENCH</span>
          </span>
        </Link>
        <p className="mt-[5px] font-mono text-[9px] uppercase tracking-[1.5px] text-[#525252]">
          Agent skill rankings
        </p>
      </div>

      {/* Main nav */}
      <div className="py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-2 border-l-2 px-[18px] py-2 text-[12.5px] transition-colors ${
              isActive(item.href)
                ? "border-[var(--accent)] bg-[#171717] font-semibold text-white"
                : "border-transparent text-[#A3A3A3] hover:bg-[#111] hover:text-white"
            }`}
          >
            <span className="text-[11px] opacity-50">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Separator */}
      <div className="mx-[18px] border-t border-[#262626]" />

      {/* Categories */}
      <div className="flex-1 overflow-y-auto pt-2">
        <p className="px-[18px] py-[6px] font-mono text-[8px] font-bold uppercase tracking-[1.5px] text-[#525252]">
          Categories
        </p>
        {categoryList.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            onClick={onNavigate}
            className={`flex items-center justify-between px-[18px] py-[7px] text-[11px] transition-colors ${
              pathname === `/categories/${cat.slug}`
                ? "bg-[#171717] font-semibold text-white"
                : "text-[#A3A3A3] hover:bg-[#111] hover:text-white"
            }`}
          >
            <span>{cat.name}</span>
            <span className="font-mono text-[10px] text-[#525252]">
              {cat.ranking.length}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer links */}
      <div className="flex gap-3 border-t border-[#262626] px-[18px] py-3 font-mono text-[10px] text-[#525252]">
        <a href="https://github.com/bra1nDump/skillbench" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#A3A3A3]">GitHub</a>
        <Link href="/docs/how-we-rank" onClick={onNavigate} className="transition-colors hover:text-[#A3A3A3]">How We Rank</Link>
      </div>
    </div>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen flex-shrink-0 md:block">
      <SidebarContent />
    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <div className="sticky top-0 z-70 flex items-center justify-between bg-black px-4 py-3 md:hidden">
        <Link href="/" onClick={close}>
          <span className="font-mono text-[15px] font-bold tracking-tight text-white">
            SKILL<span className="text-[var(--accent)]">BENCH</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/60 transition-opacity duration-250 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />
      {/* Slide-in sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-60 w-[220px] transition-transform duration-250 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent onNavigate={close} />
      </aside>
    </>
  );
}
