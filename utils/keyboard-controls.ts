import { Flashcard } from "@/data/flashcards";

interface KeyboardControlsParams {
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  flipCard: (index: number) => void;
  focusCard: (index: number) => void;
  flashcards: Flashcard[];
}

/**
 * Sets up keyboard navigation for flashcards
 */
export function useKeyboardControls({
  focusedIndex,
  setFocusedIndex,
  flipCard,
  focusCard,
  flashcards,
}: KeyboardControlsParams): (e: KeyboardEvent) => void {
  const handleKeyDown = (e: KeyboardEvent): void => {
    const cols = Math.floor(window.innerWidth / 300) || 1;

    // Handle spacebar
    if (e.key === " " && focusedIndex !== null) {
      e.preventDefault();
      flipCard(focusedIndex);
      return;
    }

    // Escape clears focus
    if (e.key === "Escape") {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      setFocusedIndex(null);
      return;
    }

    let newIndex = focusedIndex === null ? 0 : focusedIndex;

    // Navigation
    switch (e.key) {
      case "ArrowUp":
      case "w":
      case "W":
        newIndex = Math.max(0, newIndex - cols);
        break;
      case "ArrowDown":
      case "s":
      case "S":
        newIndex = Math.min(flashcards.length - 1, newIndex + cols);
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        newIndex = Math.max(0, newIndex - 1);
        break;
      case "ArrowRight":
      case "d":
      case "D":
        newIndex = Math.min(flashcards.length - 1, newIndex + 1);
        break;
      default:
        return;
    }

    if (newIndex !== focusedIndex) {
      setFocusedIndex(newIndex);
      focusCard(newIndex);
      e.preventDefault();
    }
  };

  return handleKeyDown;
}
