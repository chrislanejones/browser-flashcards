"use client"

import { useEffect, useRef, useState } from "react"
import Flashcard from "@/components/flashcard"

// Sample flashcard data
const flashcardData = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building user interfaces" },
  { id: 2, question: "What is JSX?", answer: "JavaScript XML - A syntax extension for JavaScript" },
  { id: 3, question: "What is a component?", answer: "A reusable piece of UI" },
  { id: 4, question: "What is a prop?", answer: "Properties passed to a component" },
  { id: 5, question: "What is state?", answer: "Data that changes over time in a component" },
  { id: 6, question: "What is a hook?", answer: "Functions that let you use React features" },
  { id: 7, question: "What is useEffect?", answer: "A hook to perform side effects in components" },
  { id: 8, question: "What is useState?", answer: "A hook to add state to functional components" },
  { id: 9, question: "What is context?", answer: "A way to share data without prop drilling" },
]

export default function FlashcardGrid() {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const cols = Math.floor(window.innerWidth / 300) || 1
      const rows = Math.ceil(flashcardData.length / cols)

      let newIndex = focusedIndex

      // Handle navigation with WASD or arrow keys
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          newIndex = Math.max(0, focusedIndex - cols)
          break
        case "ArrowDown":
        case "s":
        case "S":
          newIndex = Math.min(flashcardData.length - 1, focusedIndex + cols)
          break
        case "ArrowLeft":
        case "a":
        case "A":
          newIndex = Math.max(0, focusedIndex - 1)
          break
        case "ArrowRight":
        case "d":
        case "D":
          newIndex = Math.min(flashcardData.length - 1, focusedIndex + 1)
          break
        case " ": // Spacebar
          e.preventDefault() // Prevent scrolling
          // Explicitly trigger the click event on the focused card
          if (cardRefs.current[focusedIndex]) {
            cardRefs.current[focusedIndex]?.click()
          }
          return
        default:
          return
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex)
        cardRefs.current[newIndex]?.focus()
        e.preventDefault() // Prevent scrolling
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [focusedIndex])

  // Focus the first card on initial render
  useEffect(() => {
    cardRefs.current[0]?.focus()
  }, [])

  // Update the grid layout to be more explicit with CSS Grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-full mx-auto px-2">
      {flashcardData.map((card, index) => (
        <Flashcard
          key={card.id}
          question={card.question}
          answer={card.answer}
          isFocused={focusedIndex === index}
          ref={(el) => (cardRefs.current[index] = el)}
          onFocus={() => setFocusedIndex(index)}
        />
      ))}
    </div>
  )
}

