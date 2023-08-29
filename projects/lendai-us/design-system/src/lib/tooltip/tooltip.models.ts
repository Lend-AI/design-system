export const TOOLTIP_STYLES = ['light', 'dark'] as const;
export type TooltipStyle = (typeof TOOLTIP_STYLES)[number];
