"use client";

export function FilterInput({
  value,
  onChange,
  placeholder,
  count,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  count: number;
}) {
  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full truncate rounded-lg border border-[var(--border)] bg-white py-2.5 pl-10 pr-24 text-[15px] text-gray-900 placeholder:text-gray-500 focus:border-[var(--accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 sm:pr-28"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[11px] text-gray-500 sm:text-[13px]">
        {count}
      </span>
    </div>
  );
}
