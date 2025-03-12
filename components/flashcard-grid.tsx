"use client";

import { useEffect, useRef, useState } from "react";
import Flashcard from "@/components/flashcard";
import reactFlashcards from "@/data/flashcards";

export default function FlashcardGrid() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate stable IDs for each card
  const cardIds = useRef(reactFlashcards.map((_, i) => `flashcard-${i}`));

  // Function to toggle flip state for a card
  const toggleFlip = (index: number) => {
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

  // Function to scroll the focused card into view
  const scrollCardIntoView = (index: number) => {
    const element = document.getElementById(cardIds.current[index]);
    if (element) {
      element.focus();
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Handle click on the grid container (outside cards)
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click target is the container itself
    if (e.target === e.currentTarget) {
      // Click was directly on the container
      if (focusedIndex !== null) {
        // Remove focus from any focused card
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        setFocusedIndex(null);
      }
    }
  };

  // Set up keyboard navigation for the entire grid
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If no card is focused and arrow/WASD is pressed, focus the first card
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
          scrollCardIntoView(0);
          e.preventDefault();
          return;
        }
        return;
      }

      const cols = Math.floor(window.innerWidth / 300) || 1;
      let newIndex = focusedIndex;

      // Handle navigation with WASD or arrow keys
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          newIndex = Math.max(0, focusedIndex - cols);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          newIndex = Math.min(reactFlashcards.length - 1, focusedIndex + cols);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          newIndex = Math.max(0, focusedIndex - 1);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          newIndex = Math.min(reactFlashcards.length - 1, focusedIndex + 1);
          break;
        case " ": // Spacebar
          e.preventDefault(); // Prevent scrolling
          // Toggle flip for focused card
          if (focusedIndex !== null) {
            toggleFlip(focusedIndex);
          }
          return;
        case "Escape": // Escape key to clear focus
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
        scrollCardIntoView(newIndex);
        e.preventDefault(); // Prevent scrolling
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex]);

  // Focus the first card on initial render
  useEffect(() => {
    const firstCard = document.getElementById(cardIds.current[0]);
    if (firstCard) {
      firstCard.focus();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mx-auto px-3 py-4"
      style={{
        height: "calc(100vh - 74px)",
        overflowY: "auto",
        paddingBottom: "60px",
      }}
      onClick={handleContainerClick}
      tabIndex={-1} // Make container focusable but not in tab order
    >
      {reactFlashcards.map((card, index) => (
        <Flashcard
          key={card.id}
          question={card.question}
          answer={card.answer}
          isFocused={focusedIndex === index}
          isFlipped={flippedIndices.has(index)}
          onFlip={() => toggleFlip(index)}
          onFocus={() => setFocusedIndex(index)}
          id={cardIds.current[index]}
        />
      ))}
    </div>
  );
}
