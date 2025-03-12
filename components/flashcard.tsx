"use client"

import { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FlashcardProps {
  question: string
  answer: string
  isFocused: boolean
  onFocus: () => void
}

const Flashcard = forwardRef<HTMLDivElement, FlashcardProps>(({ question, answer, isFocused, onFocus }, ref) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      ref={ref}
      className={cn(
        "aspect-[1.67/1] perspective-1000 cursor-pointer outline-none transition-all duration-200",
        isFocused && "ring-4 ring-pink-500 ring-opacity-70",
      )}
      onClick={toggleFlip}
      onFocus={onFocus}
      tabIndex={0}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        {/* Front side */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden",
            "bg-card dark:bg-card border rounded-md shadow-md",
            "flex flex-col items-center justify-center p-4",
            "index-card",
          )}
        >
          <div className="text-xl font-medium text-center">{question}</div>
        </div>

        {/* Back side */}
        <div
          className={cn(
            "absolute w-full h-full backface-hidden rotate-y-180",
            "bg-card dark:bg-card border rounded-md shadow-md",
            "flex flex-col items-center justify-center p-4",
            "index-card",
          )}
        >
          <div className="text-lg text-center">{answer}</div>
        </div>
      </div>
    </div>
  )
})

Flashcard.displayName = "Flashcard"

export default Flashcard

