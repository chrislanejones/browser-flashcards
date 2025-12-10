"use client";

import { useEffect, useCallback } from "react";
import { Flashcard } from "@/data/flashcards";
import { getCurrentColumns } from "@/data/layout";

interface UseFlashcardNavigationProps {
  flashcards: Flashcard[];
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  toggleCardFlip: (index: number) => void;
  focusCard: (index: number) => void;
}

export function useFlashcardNavigation({
  flashcards,
  focusedIndex,
  setFocusedIndex,
  toggleCardFlip,
  focusCard,
}: UseFlashcardNavigationProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      // Get current column count from layout breakpoints
      const cols = getCurrentColumns();

      // Flip card on space
      if (e.key === " " && focusedIndex !== null) {
        e.preventDefault();
        toggleCardFlip(focusedIndex);
        return;
      }

      // Initialize focus if not set
      if (focusedIndex === null) {
        const navKeys = [
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
        ];
        if (navKeys.includes(e.key)) {
          setFocusedIndex(0);
          focusCard(0);
          e.preventDefault();
        }
        return;
      }

      let newIndex = focusedIndex;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          // Move up by number of columns
          newIndex = Math.max(0, focusedIndex - cols);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          // Move down by number of columns
          newIndex = Math.min(flashcards.length - 1, focusedIndex + cols);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          // Move left by 1
          newIndex = Math.max(0, focusedIndex - 1);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          // Move right by 1
          newIndex = Math.min(flashcards.length - 1, focusedIndex + 1);
          break;
        case "Escape":
          // Clear focus
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
        e.preventDefault();
      }
    },
    [flashcards, focusedIndex, setFocusedIndex, toggleCardFlip, focusCard]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { handleKeyDown };
}
