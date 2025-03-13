"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useFlashcardContext } from "./FlashcardContext";

interface FlashcardItemProps {
  question: string;
  answer: string;
  index: number;
  id: string;
}

export default function FlashcardItem({
  question,
  answer,
  index,
  id,
}: FlashcardItemProps): React.ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);
  const { focusedIndex, flippedIndices, setFocusedIndex, toggleCardFlip } =
    useFlashcardContext();

  const isFocused = focusedIndex === index;
  const isFlipped = flippedIndices.has(index);

  // Direct keydown handler for spacebar
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleCardFlip(index);
    }
  };

  // Handle click on card
  const handleClick = () => {
    toggleCardFlip(index);
  };

  // Handle focus on card
  const handleFocus = () => {
    setFocusedIndex(index);
  };

  // Additional effect to handle spacebar directly on the focused element
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleElementKeyDown = (e: KeyboardEvent) => {
      if (isFocused && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        toggleCardFlip(index);
      }
    };

    element.addEventListener("keydown", handleElementKeyDown);
    return () => {
      element.removeEventListener("keydown", handleElementKeyDown);
    };
  }, [isFocused, index, toggleCardFlip]);

  return (
    <div
      ref={cardRef}
      id={id}
      className={cn(
        "aspect-[1.67/1] perspective-1000 cursor-pointer transition-all duration-200 drop-in-with-bounce",
        isFocused && "card-focus-ring"
      )}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        isolation: "isolate", // Creates a new stacking context
      }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
        style={{ zIndex: 10 }} // Ensures the card is above the focus ring
      >
        {/* Front side */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden",
            "rounded-md shadow-md",
            "flex flex-col items-center justify-center",
            "index-card"
          )}
        >
          <div className="text-xl font-medium text-center">{question}</div>
        </div>

        {/* Back side */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180",
            "rounded-md shadow-md",
            "flex flex-col items-center justify-center",
            "bg-white dark:bg-slate-800" // Plain background without ruled lines
          )}
        >
          <div className="text-lg text-center p-4">{answer}</div>
        </div>
      </div>
    </div>
  );
}
