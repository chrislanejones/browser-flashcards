import { Flashcard } from "@/data/flashcards";

interface KeyboardControlsParams {
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  flipCard: (index: number) => void;
  focusCard: (index: number) => void;
  flashcards: Flashcard[];
}

/**
 * Dynamically detect number of columns based on element layout,
 * not screen width. Works across Tailwind breakpoints and zoom levels.
 */
function getDynamicColumnCount(): number {
  const cardEls = document.querySelectorAll<HTMLElement>("[id^='flashcard-']");
  if (cardEls.length < 2) {
    return 1;
  }

  const firstCard = cardEls[0];
  const firstTop = firstCard.offsetTop;

  let cols = 0;

  Array.from(cardEls).forEach((el) => {
    if (Math.abs(el.offsetTop - firstTop) < 2) {
      cols++;
    }
  });

  return Math.max(1, cols);
}

export function useKeyboardControls({
  focusedIndex,
  setFocusedIndex,
  flipCard,
  focusCard,
  flashcards,
}: KeyboardControlsParams): (e: KeyboardEvent) => void {
  const handleKeyDown = (e: KeyboardEvent): void => {
    // Detect actual grid columns dynamically
    const cols = getDynamicColumnCount();

    if (e.key === " " && focusedIndex !== null) {
      e.preventDefault();
      flipCard(focusedIndex);
      return;
    }

    if (e.key === "Escape") {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      setFocusedIndex(null);
      return;
    }

    let newIndex = focusedIndex === null ? 0 : focusedIndex;

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
