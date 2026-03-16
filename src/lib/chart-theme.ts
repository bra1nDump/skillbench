export const CHART_COLORS = {
  accent: "#E63946",
  green: "#059669",
  amber: "#D97706",
  muted: "#737373",
  gridLine: "#E5E5E5",
  tooltipBg: "#FFFFFF",
  tooltipBorder: "#E5E5E5",
  text: "#171717",
} as const;

export const AXIS_STYLE = {
  fontSize: 13,
  fontFamily: "var(--font-ibm-plex-mono), monospace",
  fill: CHART_COLORS.muted,
};

export const TOOLTIP_STYLE = {
  contentStyle: {
    background: CHART_COLORS.tooltipBg,
    border: `1px solid ${CHART_COLORS.tooltipBorder}`,
    borderRadius: 8,
    fontSize: 14,
    color: CHART_COLORS.text,
  },
  cursor: { fill: "rgba(230, 57, 70, 0.06)" },
};
