"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook that applies staggered animations to elements
 *
 * @param selector CSS selector for the animated elements
 * @param baseDelay Base delay in milliseconds before animations start
 * @param staggerDelay Delay between each element's animation
 * @param shouldAnimate Whether the animation should run
 */
export function useStaggeredAnimation(
  selector: string = ".drop-in-with-bounce",
  baseDelay: number = 100,
  staggerDelay: number = 50,
  shouldAnimate: boolean = true
) {
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only run animation once
    if (hasAnimated.current || !shouldAnimate) return;

    // Get all elements that need animation
    const elements = document.querySelectorAll<HTMLElement>(selector);

    if (elements.length === 0) return;

    // Calculate delays based on grid position
    const cols = Math.floor(window.innerWidth / 300) || 1;

    // Apply animation delays
    elements.forEach((el, index) => {
      // Calculate row and column
      const row = Math.floor(index / cols);
      const col = index % cols;

      // Calculate delay based on position (can be customized)
      // This creates a wave-like pattern from top-left to bottom-right
      const delay = baseDelay + (row + col) * staggerDelay;

      // Apply the delay and start the animation
      el.style.animationDelay = `${delay}ms`;
      el.style.animationPlayState = "running";
    });

    hasAnimated.current = true;
  }, [selector, baseDelay, staggerDelay, shouldAnimate]);
}
