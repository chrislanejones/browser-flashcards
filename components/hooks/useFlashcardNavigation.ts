"use client";

import { useEffect, useCallback } from "react";
import { Flashcard } from "@/data/flashcards";

interface UseFlashcardNavigationProps {
  flashcards: Flashcard[];
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  toggleCardFlip: (index: number) => void;
  focusCard: (index: number) => void;
}

/**
 * Custom hook for keyboard navigation in flashcards grid
 */
export function useFlashcardNavigation({
  flashcards,
  focusedIndex,
  setFocusedIndex,
  toggleCardFlip,
  focusCard,
}: UseFlashcardNavigationProps) {
  // Handle keyboard navigation and actions
  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      // Handle spacebar for flipping the focused card
      if (e.key === " " && focusedIndex !== null) {
        e.preventDefault();
        toggleCardFlip(focusedIndex);
        return;
      }

      // Only process navigation keys if a card is focused
      if (focusedIndex === null) {
        // If no card is focused and arrow/WASD is pressed, focus the first card
        if (
          [
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "w",
            "a",
            "s",
            "d",
            "W",
            "A",
            "S",
            "D",
          ].includes(e.key)
        ) {
          setFocusedIndex(0);
          focusCard(0);
          e.preventDefault();
        }
        return;
      }

      const cols = Math.floor(window.innerWidth / 300) || 1;
      let newIndex = focusedIndex;

      // Handle navigation with WASD or arrow keys
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          newIndex = Math.max(0, focusedIndex - cols);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          newIndex = Math.min(flashcards.length - 1, focusedIndex + cols);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          newIndex = Math.max(0, focusedIndex - 1);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          newIndex = Math.min(flashcards.length - 1, focusedIndex + 1);
          break;
        case "Escape": // Escape key to clear focus
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          setFocusedIndex(null);
          return;
        default:
          return;
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        focusCard(newIndex);
        e.preventDefault(); // Prevent scrolling
      }
    },
    [flashcards, focusedIndex, setFocusedIndex, toggleCardFlip, focusCard]
  );

  // Set up global keyboard listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { handleKeyDown };
}
