export const EVENTS = {
  // Content views (migrated from posthog-provider)
  SOLUTION_VIEWED: "solution_viewed",
  PROBLEM_VIEWED: "problem_viewed",

  // Search & filter
  SEARCH_EXECUTED: "search_executed",
  FILTER_APPLIED: "filter_applied",

  // Engagement
  EXTERNAL_LINK_CLICKED: "external_link_clicked",
  COPY_CLICKED: "copy_clicked",

  // Compare
  COMPARE_CATEGORY_SELECTED: "compare_category_selected",
  COMPARE_SKILL_TOGGLED: "compare_skill_toggled",

  // Changelog
  CHANGELOG_ITEM_CLICKED: "changelog_item_clicked",

  // Conversion
  SUBSCRIBED: "subscribed",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

export type EventProperties = {
  [EVENTS.SOLUTION_VIEWED]: { slug: string; name: string; trustScore: number };
  [EVENTS.PROBLEM_VIEWED]: { slug: string; name: string };
  [EVENTS.SEARCH_EXECUTED]: {
    query: string;
    resultCount: number;
    source: "header" | "catalog";
  };
  [EVENTS.FILTER_APPLIED]: {
    filterType: "category" | "sort";
    value: string;
  };
  [EVENTS.EXTERNAL_LINK_CLICKED]: {
    url: string;
    linkType: "github" | "docs" | "evidence" | "npm" | "source";
    skillSlug?: string;
  };
  [EVENTS.COPY_CLICKED]: {
    contentType: "ai_prompt" | "install_command" | "link";
  };
  [EVENTS.COMPARE_CATEGORY_SELECTED]: {
    categorySlug: string;
    categoryName: string;
  };
  [EVENTS.COMPARE_SKILL_TOGGLED]: {
    skillSlug: string;
    skillName: string;
    action: "added" | "removed";
    totalSelected: number;
  };
  [EVENTS.CHANGELOG_ITEM_CLICKED]: {
    slug: string | null;
    type: string;
    title: string;
  };
  [EVENTS.SUBSCRIBED]: { email: string };
};
