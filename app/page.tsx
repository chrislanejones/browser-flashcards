"use client";

import React, { useState, useEffect, useCallback } from "react";
import FlashcardGrid from "@/components/flashcards/FlashcardGrid";
import ThemeToggle from "@/components/theme-toggle";
import { Library, Layers, RotateCcw, Command } from "lucide-react";
import { CommandPalette } from "@/components/command-dialog";
import { flashcardSets } from "@/data/flashcards";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeSet, setActiveSet] = useState("react");
  const [resetKey, setResetKey] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const [showAutumnBg, setShowAutumnBg] = useState(false);

  const flashcards = flashcardSets[activeSet]?.cards || [];

  useEffect(() => {
    setIsMac(
      typeof navigator !== "undefined" &&
        navigator.platform.toUpperCase().includes("MAC")
    );
  }, []);

  // Easter egg: Ctrl+B / Cmd+B toggles autumn background
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+B or Cmd+B
      const isBKey = e.key === "b" || e.key === "B" || e.code === "KeyB";
      const hasModifier = e.ctrlKey || e.metaKey;

      if (hasModifier && isBKey) {
        e.preventDefault();
        e.stopPropagation();
        setShowAutumnBg((prev) => !prev);
      }
    };

    // Use capture phase to get the event before other handlers
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  const handleOpenCommand = () => {
    setCommandOpen(true);
  };

  const handleResetCards = useCallback(() => {
    setResetKey((k) => k + 1);
  }, []);

  return (
    <div
      className="layout-root"
      style={
        showAutumnBg
          ? {
              backgroundImage: "url('/autumn.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : undefined
      }
    >
      {/* Optional overlay for readability when bg is shown */}
      {showAutumnBg && (
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />
      )}

      <main className="layout-main relative z-10">
        <FlashcardGrid key={resetKey} flashcards={flashcards} />
      </main>

      {/* Footer */}
      <footer className="app-footer relative z-10">
        {/* Left side - Logo */}
        <div className="footer-left">
          <Library className="h-5 w-5" />
          <span>Flash Cards</span>
        </div>

        {/* Right side - Controls */}
        <div className="footer-right">
          {/* Menu Button (icon only) */}
          <button
            className="icon-btn"
            onClick={handleOpenCommand}
            title="Open menu"
          >
            <Layers className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Open menu</span>
          </button>
          {/* Reset Button (icon only) */}
          <button
            className="icon-btn"
            onClick={handleResetCards}
            title="Reset cards"
          >
            <RotateCcw className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Reset cards</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Keyboard shortcut hint */}
          <span className="kbd-hint">
            press{" "}
            <code>
              {isMac ? (
                <>
                  <Command className="h-3 w-3" /> K
                </>
              ) : (
                "Ctrl + K"
              )}
            </code>{" "}
            for menu
          </span>
        </div>
      </footer>

      <CommandPalette
        open={commandOpen}
        setOpen={setCommandOpen}
        setActiveSet={setActiveSet}
        activeSet={activeSet}
      />
    </div>
  );
}
