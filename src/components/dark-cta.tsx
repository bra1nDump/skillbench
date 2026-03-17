import Link from "next/link";

interface DarkCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "ghost";
}

export function DarkCTA({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = "primary",
}: DarkCTAProps) {
  return (
    <div className="mx-4 my-1 flex flex-col items-start justify-between gap-4 rounded-lg bg-[var(--dark-bg)] px-6 py-4 sm:flex-row sm:items-center">
      <div>
        <p className="text-[13px] font-black tracking-[-0.3px] text-white">
          {title}
        </p>
        <p className="mt-0.5 text-[11px] text-[var(--dark-muted)]">
          {subtitle}
        </p>
      </div>
      <Link
        href={buttonHref}
        className={`whitespace-nowrap rounded font-mono text-[10px] font-bold tracking-[0.5px] transition-colors ${
          variant === "primary"
            ? "bg-[var(--accent)] px-[18px] py-2 text-white hover:bg-[var(--accent)]/90"
            : "border border-[var(--dark-dim)] px-[18px] py-2 text-white hover:border-[var(--dark-muted)]"
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
