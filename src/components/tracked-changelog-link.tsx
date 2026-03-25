"use client";

import Link from "next/link";

import { captureEvent } from "@/lib/analytics";
import { EVENTS } from "@/lib/analytics-events";

export function TrackedChangelogLink({
  slug,
  type,
  title,
  children,
  className,
}: {
  slug: string;
  type: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={`/solutions/${slug}`}
      className={className}
      onClick={() =>
        captureEvent(EVENTS.CHANGELOG_ITEM_CLICKED, { slug, type, title })
      }
    >
      {children}
    </Link>
  );
}
