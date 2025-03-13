"use client";

import React, { useState } from "react";
import FlashcardGrid from "@/components/flashcards/FlashcardGrid";
import ThemeToggle from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Library } from "lucide-react";
import { CommandPalette } from "@/components/command-dialog";
import { flashcardSets } from "@/data/flashcards";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeSet, setActiveSet] = useState("react");

  // Get the appropriate flashcards based on active set
  const flashcards = flashcardSets[activeSet]?.cards || [];

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1 p-2">
          <FlashcardGrid flashcards={flashcards} />
        </main>
        <footer className="border-t p-2 flex justify-between items-center bg-secondary/80 dark:bg-slate-900/80 shadow-sm">
          <div className="font-medium text-md flex items-center gap-2">
            <Library className="h-6 w-6" />
            <span>Flash Cards</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-md text-muted-foreground">
              type{" "}
              <span className="px-2 py-1 bg-blue-700 text-white text-md font-medium rounded-md">
                Ctrl + K
              </span>{" "}
              to switch topic
            </span>
            <ThemeToggle />
          </div>
        </footer>
      </div>

      <CommandPalette
        open={commandOpen}
        setOpen={setCommandOpen}
        setActiveSet={setActiveSet}
        activeSet={activeSet}
      />
    </ThemeProvider>
  );
}
