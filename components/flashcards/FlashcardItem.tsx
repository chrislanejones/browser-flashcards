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

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleCardFlip(index);
    }
  };

  const handleClick = () => {
    toggleCardFlip(index);
  };

  const handleFocus = () => {
    setFocusedIndex(index);
  };

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
        "index-card aspect-[1.67/1] cursor-pointer transition-all duration-200 drop-in-with-bounce",
        isFocused && "card-focus-ring"
      )}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ isolation: "isolate" }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front - Question */}
        <div className="card-face backface-hidden">
          <div className="text-base sm:text-lg font-medium text-center px-2">
            {question}
          </div>
        </div>

        {/* Back - Answer */}
        <div className="card-face card-back backface-hidden">
          <div className="text-sm sm:text-base text-center px-2">{answer}</div>
        </div>
      </div>
    </div>
  );
}
