import type { Trend } from "@/lib/trend";

export function TrendArrow({ trend }: { trend: Trend | null }) {
  if (!trend || trend.direction === "flat") return null;

  if (trend.direction === "up") {
    return (
      <span className="font-mono text-[11px] text-emerald-600">
        ↑{trend.pct}%
      </span>
    );
  }

  return (
    <span className="font-mono text-[11px] text-red-500">
      ↓{trend.pct}%
    </span>
  );
}
