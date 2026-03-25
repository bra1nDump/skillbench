import posthog from "posthog-js";

import type { EventName, EventProperties } from "./analytics-events";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";

export function captureEvent<E extends EventName>(
  event: E,
  properties: EventProperties[E],
): void {
  if (!POSTHOG_KEY) return;
  posthog.capture(event, properties);
}

export function identifyUser(email: string): void {
  if (!POSTHOG_KEY) return;
  posthog.identify(posthog.get_distinct_id(), { email });
}

let searchTimer: ReturnType<typeof setTimeout> | null = null;

export function captureSearchDebounced(
  query: string,
  resultCount: number,
  source: "header" | "catalog",
): void {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    captureEvent("search_executed", { query, resultCount, source });
  }, 800);
}
