interface TrustBadgeProps {
  score: number;
  size?: "sm" | "md";
}

export function TrustBadge({ score, size = "sm" }: TrustBadgeProps) {
  const color =
    score >= 80
      ? "bg-emerald-500/15 text-emerald-500"
      : score >= 50
        ? "bg-amber-500/15 text-amber-500"
        : "bg-red-500/15 text-red-400";

  const lightColor =
    score >= 80
      ? "bg-emerald-500/10 text-emerald-600"
      : score >= 50
        ? "bg-amber-500/10 text-amber-600"
        : "bg-red-500/10 text-red-500";

  if (size === "md") {
    return (
      <div className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ${color}`}>
        <span className="font-mono text-[15px] font-bold">{score}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider opacity-60">/100</span>
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[11px] font-bold ${lightColor}`}>
      {score}
    </span>
  );
}
