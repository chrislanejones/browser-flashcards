"use client";

import { useEffect, useRef } from "react";

/**
 * A custom hook that executes a callback after a period of inactivity
 *
 * @param callback Function to execute when the idle time is reached
 * @param delay Time in milliseconds before considering the user idle
 * @param events Array of DOM events that reset the idle timer
 * @returns A function to manually reset the idle timer
 */
export function useIdleTimer(
  callback: () => void,
  delay: number = 10000,
  events: string[] = [
    "mousedown",
    "mousemove",
    "keydown",
    "scroll",
    "touchstart",
  ]
): () => void {
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);

  // Update the callback ref if the callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Reset the timer and set a new one
  const resetTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  };

  useEffect(() => {
    // Initialize the timer
    resetTimer();

    // Add event listeners to reset the timer on user activity
    const handleUserActivity = () => resetTimer();

    events.forEach((event) => {
      window.addEventListener(event, handleUserActivity);
    });

    // Clean up
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [delay, events]);

  return resetTimer;
}
