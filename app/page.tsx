import FlashcardGrid from "@/components/flashcard-grid";
import ThemeToggle from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  // Reduce padding in the main container
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 p-2">
          <FlashcardGrid />
        </main>
        <footer className="border-t p-2 flex justify-center">
          <ThemeToggle />
        </footer>
      </div>
    </ThemeProvider>
  );
}
