"use client";

import { useEffect } from "react";

import { captureEvent } from "@/lib/analytics";
import { EVENTS } from "@/lib/analytics-events";

export function TrackSolutionView({ slug, name, score }: { slug: string; name: string; score: number }) {
  useEffect(() => {
    captureEvent(EVENTS.SOLUTION_VIEWED, { slug, name, trustScore: score });
  }, [slug, name, score]);

  return null;
}

export function TrackProblemView({ slug, name }: { slug: string; name: string }) {
  useEffect(() => {
    captureEvent(EVENTS.PROBLEM_VIEWED, { slug, name });
  }, [slug, name]);

  return null;
}
