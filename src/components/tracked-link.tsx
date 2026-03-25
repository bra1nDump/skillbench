"use client";

import { captureEvent } from "@/lib/analytics";
import { EVENTS } from "@/lib/analytics-events";

import type { EventProperties } from "@/lib/analytics-events";

type LinkType = EventProperties[typeof EVENTS.EXTERNAL_LINK_CLICKED]["linkType"];

export function TrackedLink({
  href,
  linkType,
  skillSlug,
  children,
  className,
}: {
  href: string;
  linkType: LinkType;
  skillSlug?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() =>
        captureEvent(EVENTS.EXTERNAL_LINK_CLICKED, {
          url: href,
          linkType,
          skillSlug,
        })
      }
    >
      {children}
    </a>
  );
}
