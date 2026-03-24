"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { useEffect, useRef } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

function PostHogInit() {
  const initDone = useRef(false);

  useEffect(() => {
    if (!POSTHOG_KEY || initDone.current) return;
    initDone.current = true;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage",
      loaded: (ph) => {
        // Stable distinct ID
        const STORAGE_KEY = "skillpack_distinct_id";
        let id = localStorage.getItem(STORAGE_KEY);
        if (!id) {
          id = ph.get_distinct_id() || `anon_${crypto.randomUUID()}`;
          localStorage.setItem(STORAGE_KEY, id);
        }
        if (id !== ph.get_distinct_id()) {
          ph.identify(id);
        }
      },
    });
  }, []);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <PostHogInit />
      {children}
    </PHProvider>
  );
}

/**
 * Link an email to the current PostHog user (call after subscribe).
 */
export function identifyWithEmail(email: string) {
  if (POSTHOG_KEY) {
    posthog.identify(posthog.get_distinct_id(), { email });
  }
}

/**
 * Track when a user opens a solution detail page.
 */
export function trackSolutionOpen(slug: string, name: string, score: number) {
  if (POSTHOG_KEY) posthog.capture("solution_opened", { slug, name, score });
}

/**
 * Track when a user subscribes to updates.
 */
export function trackSubscribe(email: string) {
  if (POSTHOG_KEY) {
    posthog.capture("subscribed", { email });
    identifyWithEmail(email);
  }
}

/**
 * Track when a user opens a problem space page.
 */
export function trackProblemOpen(slug: string, name: string) {
  if (POSTHOG_KEY) posthog.capture("problem_opened", { slug, name });
}
