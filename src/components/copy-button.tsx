"use client";

import { useState } from "react";

import { captureEvent } from "@/lib/analytics";
import { EVENTS } from "@/lib/analytics-events";

import type { EventProperties } from "@/lib/analytics-events";

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
  trackAs?: EventProperties[typeof EVENTS.COPY_CLICKED]["contentType"];
};

export function CopyButton({
  text,
  label = "Copy",
  className = "",
  trackAs,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
    if (trackAs) {
      captureEvent(EVENTS.COPY_CLICKED, { contentType: trackAs });
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-2.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-500 transition hover:border-[var(--border-hover)] hover:text-gray-900 ${className}`}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
