import FlashcardGrid from "@/components/flashcard-grid";
import ThemeToggle from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-background">
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
