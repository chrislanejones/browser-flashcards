"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlashcardProps {
  question: string;
  answer: string;
  isFocused: boolean;
  isFlipped: boolean;
  onClick: () => void;
  onFocus: () => void;
  id?: string;
}

export default function Flashcard({
  question,
  answer,
  isFocused,
  isFlipped,
  onClick,
  onFocus,
  id,
}: FlashcardProps): React.ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);

  // Direct keydown handler for spacebar
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onClick();
    }
  };

  // Additional effect to handle spacebar directly on the focused element
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleElementKeyDown = (e: KeyboardEvent) => {
      if (isFocused && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        onClick();
      }
    };

    element.addEventListener("keydown", handleElementKeyDown);
    return () => {
      element.removeEventListener("keydown", handleElementKeyDown);
    };
  }, [isFocused, onClick]);

  return (
    <div
      ref={cardRef}
      id={id}
      className={cn(
        "aspect-[1.67/1] perspective-1000 cursor-pointer transition-all duration-200",
        isFocused && "card-focus-ring"
      )}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ isolation: "isolate" }} // Creates a new stacking context
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
            "index-card"
          )}
        >
          <div className="text-lg text-center">{answer}</div>
        </div>
      </div>
    </div>
  );
}
