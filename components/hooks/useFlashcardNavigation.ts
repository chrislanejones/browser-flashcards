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

function getColumnsForBreakpoint(): number {
  if (typeof window === "undefined") return 1;

  const width = window.innerWidth;

  // Tailwind breakpoints
  if (width < 640) return 1; // mobile
  if (width < 768) return 2; // sm
  if (width < 1024) return 3; // md
  return 4; // lg and above
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
      const cols = getColumnsForBreakpoint();

      if (e.key === " " && focusedIndex !== null) {
        e.preventDefault();
        toggleCardFlip(focusedIndex);
        return;
      }

      if (focusedIndex === null) {
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

      let newIndex = focusedIndex;

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
        case "Escape":
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
