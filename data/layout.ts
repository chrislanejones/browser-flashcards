export interface LayoutBreakpoint {
  name: string;
  minWidth: number;
  columns: number;
}

/**
 * Breakpoint definitions for the flashcard grid layout
 * - mobile: 1 column (default, phones)
 * - tablet: 2 columns (tablets, flip phones, 640px+)
 * - laptop: 3 columns (small laptops, large tablets, 1024px+)
 * - desktop: 4 columns (desktops, 1280px+)
 */
export const layoutBreakpoints: LayoutBreakpoint[] = [
  { name: "mobile", minWidth: 0, columns: 1 },
  { name: "tablet", minWidth: 640, columns: 2 },
  { name: "laptop", minWidth: 1024, columns: 3 },
  { name: "desktop", minWidth: 1280, columns: 4 },
];

/**
 * Get the number of columns for a given viewport width
 * Uses the breakpoints in reverse order to find the first matching breakpoint
 */
export function getColumnsForWidth(width: number): number {
  const breakpoint = layoutBreakpoints
    .slice()
    .reverse()
    .find((bp) => width >= bp.minWidth);
  return breakpoint?.columns || 1;
}

/**
 * Get the current column count based on window.innerWidth
 * Safe for SSR - returns 1 if window is not defined
 */
export function getCurrentColumns(): number {
  if (typeof window === "undefined") return 1;
  return getColumnsForWidth(window.innerWidth);
}

/**
 * Get the breakpoint name for a given width
 */
export function getBreakpointName(width: number): string {
  const breakpoint = layoutBreakpoints
    .slice()
    .reverse()
    .find((bp) => width >= bp.minWidth);
  return breakpoint?.name || "mobile";
}

/**
 * Check if the current viewport is mobile (less than tablet breakpoint)
 */
export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return true;
  const tabletBreakpoint = layoutBreakpoints.find((bp) => bp.name === "tablet");
  return window.innerWidth < (tabletBreakpoint?.minWidth || 640);
}
