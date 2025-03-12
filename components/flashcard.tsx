"use client";

import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Define a type for the methods we want to expose
export interface FlashcardHandle {
  flip: () => void;
}

interface FlashcardProps {
  question: string;
  answer: string;
  isFocused: boolean;
  onFocus: () => void;
}

const Flashcard = forwardRef<FlashcardHandle, FlashcardProps>(
  ({ question, answer, isFocused, onFocus }, ref) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    // Expose the flip method
    useImperativeHandle(ref, () => ({
      flip: () => {
        setIsFlipped((prev) => !prev);
      },
    }));

    const toggleFlip = () => {
      setIsFlipped((prev) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault(); // Prevent scrolling with spacebar
        toggleFlip();
      }
    };

    return (
      <div
        id={`flashcard-${Math.random().toString(36).substr(2, 9)}`}
        ref={divRef}
        className={cn(
          "aspect-[1.67/1] perspective-1000 cursor-pointer transition-all duration-200",
          isFocused && "card-focus-ring"
        )}
        onClick={toggleFlip}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-500 preserve-3d z-10",
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
