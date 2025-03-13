"use client";

import { useRef } from "react";
import { Flashcard } from "@/data/flashcards";
import { useMouseControls } from "@/utils/mouse-controls";
import { FlashcardProvider, useFlashcardContext } from "./FlashcardContext";
import { useFlashcardNavigation } from "../hooks/useFlashcardNavigation";
import FlashcardItem from "./FlashcardItem";

interface FlashcardGridProps {
  flashcards: Flashcard[];
}

// Inner component that uses the context
function FlashcardGridInner({ flashcards }: FlashcardGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { focusedIndex, setFocusedIndex, toggleCardFlip, focusCard, cardIds } =
    useFlashcardContext();

  // Set up mouse controls
  const { handleContainerClick } = useMouseControls({
    setFocusedIndex,
  });

  // Use custom hook for keyboard navigation
  useFlashcardNavigation({
    flashcards,
    focusedIndex,
    setFocusedIndex,
    toggleCardFlip,
    focusCard,
  });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mx-auto px-4 py-6"
      style={{
        height: "calc(100vh - 74px)",
        overflowY: "auto",
        paddingBottom: "60px",
      }}
      onClick={(e) => handleContainerClick(e)}
      tabIndex={-1}
    >
      {flashcards.map((card, index) => (
        <FlashcardItem
          key={card.id}
          question={card.question}
          answer={card.answer}
          index={index}
          id={cardIds[index]}
        />
      ))}
    </div>
  );
}

// Wrapper component that provides the context
export default function FlashcardGrid({ flashcards }: FlashcardGridProps) {
  return (
    <FlashcardProvider flashcards={flashcards}>
      <FlashcardGridInner flashcards={flashcards} />
    </FlashcardProvider>
  );
}
