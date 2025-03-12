"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

// Define a type for the methods we want to expose
export interface FlashcardHandle {
  flip: () => void;
}

interface FlashcardProps {
  question: string;
  answer: string;
  isFocused: boolean;
  isFlipped: boolean;
  onFlip: () => void;
  onFocus: () => void;
  id?: string;
}

const Flashcard = forwardRef<FlashcardHandle, FlashcardProps>(
  ({ question, answer, isFocused, isFlipped, onFlip, onFocus, id }, ref) => {
    const divRef = useRef<HTMLDivElement>(null);

    // Expose the flip method
    useImperativeHandle(ref, () => ({
      flip: () => {
        onFlip();
      },
    }));

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault(); // Prevent scrolling with spacebar
        onFlip();
      }
    };

    return (
      <div
        id={id}
        ref={divRef}
        className={cn(
          "aspect-[1.67/1] perspective-1000 cursor-pointer transition-all duration-200",
          isFocused && "card-focus-ring"
        )}
        onClick={onFlip}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-500 preserve-3d",
            isFlipped ? "rotate-y-180" : ""
          )}
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
);

Flashcard.displayName = "Flashcard";

export default Flashcard;
