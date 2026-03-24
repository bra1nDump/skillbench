"use client";

import { useEffect } from "react";

import { trackProblemOpen, trackSolutionOpen } from "./posthog-provider";

export function TrackSolutionView({ slug, name, score }: { slug: string; name: string; score: number }) {
  useEffect(() => {
    trackSolutionOpen(slug, name, score);
  }, [slug, name, score]);

  return null;
}

export function TrackProblemView({ slug, name }: { slug: string; name: string }) {
  useEffect(() => {
    trackProblemOpen(slug, name);
  }, [slug, name]);

  return null;
}
