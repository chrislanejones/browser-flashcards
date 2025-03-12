import React from "react";

interface MouseControlsParams {
  setFocusedIndex: (index: number | null) => void;
}

interface MouseControlsReturn {
  handleContainerClick: (e: React.MouseEvent) => void;
  scrollCardIntoView: (index: number, cardIds: string[]) => void;
  flipCard: (
    flippedIndices: Set<number>,
    setFlippedIndices: React.Dispatch<React.SetStateAction<Set<number>>>,
    index: number
  ) => void;
}

/**
 * Creates handlers for mouse interactions with flashcards
 */
export function useMouseControls({
  setFocusedIndex,
}: MouseControlsParams): MouseControlsReturn {
  /**
   * Handles click on the grid container (outside cards)
   */
  const handleContainerClick = (e: React.MouseEvent): void => {
    // Check if the click target is the container itself
    if (e.target === e.currentTarget) {
      // Clear focus from any active element
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      // Reset focused index
      setFocusedIndex(null);
    }
  };

  /**
   * Scrolls a card into view and ensures it's visible
   */
  const scrollCardIntoView = (index: number, cardIds: string[]): void => {
    const element = document.getElementById(cardIds[index]);
    if (element) {
      element.focus();
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  /**
   * Flip state handler function
   */
  const flipCard = (
    flippedIndices: Set<number>,
    setFlippedIndices: React.Dispatch<React.SetStateAction<Set<number>>>,
    index: number
  ): void => {
    setFlippedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return {
    handleContainerClick,
    scrollCardIntoView,
    flipCard,
  };
}
