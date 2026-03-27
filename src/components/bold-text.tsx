import { Fragment } from "react";

/**
 * Renders inline markdown: `code` → <code>, **bold** → <strong>.
 * Use for gettingStarted, howToStart, and similar text fields.
 */
const INLINE_MD_RE = /`([^`]+)`|\*\*([^*]+)\*\*/g;

export function InlineMarkdown({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let i = 0;

  for (const match of text.matchAll(INLINE_MD_RE)) {
    const start = match.index!;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    if (match[1] != null) {
      parts.push(
        <code key={i} className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-gray-800">
          {match[1]}
        </code>,
      );
    } else if (match[2] != null) {
      parts.push(
        <strong key={i} className="font-semibold text-gray-900">
          {match[2]}
        </strong>,
      );
    }

    lastIndex = start + match[0].length;
    i++;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 0) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{parts}</span>;
}

/**
 * Auto-bolds numbers (15M, 200K, 1.5%, $99), percentages, and
 * well-known product names in plain text.
 *
 * Usage: <BoldText text="Has 15M downloads and 1.5% churn" />
 */

// Numbers with optional suffix: 15M, 200K, 1.5%, $99, 3x, 10+, #1
const NUMBER_RE =
  /(?:\$\d[\d,.]*[KMBkmb]?|\d[\d,.]*\s*%|\d[\d,.]*[KMBkmb]x?|\#\d+|\d[\d,.]*\+)/g;

export function BoldText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts: { text: string; bold: boolean }[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(NUMBER_RE)) {
    const start = match.index!;
    if (start > lastIndex) {
      parts.push({ text: text.slice(lastIndex, start), bold: false });
    }
    parts.push({ text: match[0], bold: true });
    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), bold: false });
  }

  // If nothing to bold, just return the text
  if (parts.length <= 1 && !parts[0]?.bold) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part.bold ? (
            <strong className="font-semibold text-gray-900">{part.text}</strong>
          ) : (
            part.text
          )}
        </Fragment>
      ))}
    </span>
  );
}
