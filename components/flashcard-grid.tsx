"use client";

import { useEffect, useRef, useState } from "react";
import Flashcard from "@/components/flashcard";
import reactFlashcards from "@/data/flashcards";
import { useKeyboardControls } from "@/utils/keyboard-controls";
import { useMouseControls } from "@/utils/mouse-controls";

export default function FlashcardGrid() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate stable IDs for each card
  const cardIds = reactFlashcards.map((_, i) => `flashcard-${i}`);

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

  // Function to toggle a card's flip state directly
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

  // Import mouse controls
  const { handleContainerClick, scrollCardIntoView } = useMouseControls({
    setFocusedIndex,
  });

  // Set up global keyboard listener for spacebar and navigation
  const handleGlobalKeyDown = (e: KeyboardEvent): void => {
    // Handle spacebar for flipping the focused card
    if (e.key === " " && focusedIndex !== null) {
      e.preventDefault();
      toggleCardFlip(focusedIndex);
      return;
    }

    // Only process navigation keys if a card is focused
    if (focusedIndex === null) {
      // If no card is focused and arrow/WASD is pressed, focus the first card
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
        focusCard(0);
        e.preventDefault();
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
      focusCard(newIndex);
      e.preventDefault(); // Prevent scrolling
    }
  };

  // Set up global keyboard listener
  useEffect(() => {
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [focusedIndex]);

  // Focus the first card on initial mount
  useEffect(() => {
    focusCard(0);
  }, []);

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
      {reactFlashcards.map((card, index) => (
        <Flashcard
          key={card.id}
          question={card.question}
          answer={card.answer}
          isFocused={focusedIndex === index}
          isFlipped={flippedIndices.has(index)}
          onClick={() => toggleCardFlip(index)}
          onFocus={() => {
            setFocusedIndex(index);
            scrollCardIntoView(index, cardIds);
          }}
          id={cardIds[index]}
        />
      ))}
    </div>
  );
}
