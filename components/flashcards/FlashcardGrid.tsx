"use client";

import { useRef } from "react";
import { Flashcard } from "@/data/flashcards";
import { useMouseControls } from "@/utils/mouse-controls";
import { FlashcardProvider, useFlashcardContext } from "./FlashcardContext";
import { useFlashcardNavigation } from "../hooks/useFlashcardNavigation";
import { useStaggeredAnimation } from "../hooks/useStaggeredAnimation";
import FlashcardItem from "./FlashcardItem";

interface FlashcardGridProps {
  flashcards: Flashcard[];
}

function FlashcardGridInner({ flashcards }: FlashcardGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { focusedIndex, setFocusedIndex, toggleCardFlip, focusCard, cardIds } =
    useFlashcardContext();

  const { handleContainerClick } = useMouseControls({
    setFocusedIndex,
  });

  useFlashcardNavigation({
    flashcards,
    focusedIndex,
    setFocusedIndex,
    toggleCardFlip,
    focusCard,
  });

  useStaggeredAnimation(".drop-in-with-bounce", 100, 50);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-3 lg:gap-2 w-full max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 hover-scrollbar"
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

export default function FlashcardGrid({ flashcards }: FlashcardGridProps) {
  return (
    <FlashcardProvider flashcards={flashcards}>
      <FlashcardGridInner flashcards={flashcards} />
    </FlashcardProvider>
  );
}
