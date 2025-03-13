"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { Flashcard } from "@/data/flashcards";
import { useIdleTimer } from "../hooks/useIdleTimer";

interface FlashcardContextType {
  // State
  focusedIndex: number | null;
  flippedIndices: Set<number>;
  cardIds: string[];

  // Actions
  setFocusedIndex: (index: number | null) => void;
  toggleCardFlip: (index: number) => void;
  focusCard: (index: number) => void;
  resetFlippedCards: () => void;
}

interface FlashcardProviderProps {
  children: React.ReactNode;
  flashcards: Flashcard[];
}

// Create context with a default value
const FlashcardContext = createContext<FlashcardContextType | undefined>(
  undefined
);

export function FlashcardProvider({
  children,
  flashcards,
}: FlashcardProviderProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());

  // Generate stable IDs for each card
  const cardIds = flashcards.map((_, i) => `flashcard-${i}`);

  // Reset flipped cards
  const resetFlippedCards = () => {
    if (flippedIndices.size > 0) {
      setFlippedIndices(new Set());
    }
  };

  // Focus a specific card
  const focusCard = (index: number): void => {
    const element = document.getElementById(cardIds[index]);
    if (element) {
      element.focus();
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Function to toggle a card's flip state
  const toggleCardFlip = (index: number): void => {
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

  // Use the idle timer hook to reset cards after 20 seconds
  useIdleTimer(resetFlippedCards, 20000);

  // Reset state when flashcards change
  useEffect(() => {
    setFocusedIndex(0);
    setFlippedIndices(new Set());
    setTimeout(() => focusCard(0), 0);
  }, [flashcards]); // eslint-disable-line react-hooks/exhaustive-deps

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({
      focusedIndex,
      flippedIndices,
      cardIds,
      setFocusedIndex,
      toggleCardFlip,
      focusCard,
      resetFlippedCards,
    }),
    [focusedIndex, flippedIndices, cardIds]
  );

  return (
    <FlashcardContext.Provider value={contextValue}>
      {children}
    </FlashcardContext.Provider>
  );
}

export function useFlashcardContext() {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error(
      "useFlashcardContext must be used within a FlashcardProvider"
    );
  }
  return context;
}
