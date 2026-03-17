export type Trend = {
  direction: "up" | "down" | "flat";
  pct: number;
  delta: number;
};

export function computeTrend(
  data: Array<{ date: string; value: number }> | undefined,
): Trend | null {
  if (!data || data.length < 2) return null;

  const prev = data[data.length - 2].value;
  const latest = data[data.length - 1].value;

  if (prev === 0) return null;

  const delta = latest - prev;
  const pct = Math.round((delta / prev) * 100);
  const direction = pct >= 5 ? "up" : pct <= -5 ? "down" : "flat";

  return { direction, pct: Math.abs(pct), delta };
}
