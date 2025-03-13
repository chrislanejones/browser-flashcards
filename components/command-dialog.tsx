"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
  CircleIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { flashcardSets } from "@/data/flashcards";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setActiveSet: (setName: string) => void;
  activeSet: string;
}

export function CommandPalette({
  open,
  setOpen,
  setActiveSet,
  activeSet,
}: CommandPaletteProps) {
  const { setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState("");

  // Convert flashcard sets to array for easier mapping
  const availableSets = Object.entries(flashcardSets).map(([key, set]) => ({
    value: key,
    name: set.name,
    description: set.description,
    icon: set.icon,
  }));

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const handleSetChange = (value: string) => {
    setActiveSet(value);
    setOpen(false);
  };

  // Filter flashcard sets based on search query
  const filteredSets = searchQuery
    ? availableSets.filter(
        (set) =>
          set.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          set.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : availableSets;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Flashcard Sets">
          {filteredSets.map((set) => (
            <CommandItem
              key={set.value}
              onSelect={() => handleSetChange(set.value)}
              className={
                activeSet === set.value
                  ? "bg-accent text-accent-foreground"
                  : ""
              }
            >
              <CircleIcon className="mr-2 h-4 w-4" />
              <span>{set.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">
                {set.description}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        {filteredSets.length > 0 && activeSet && searchQuery === "" && (
          <>
            <CommandSeparator />
            <CommandGroup
              heading={`${flashcardSets[activeSet].name} Categories`}
            >
              {Array.from(
                new Set(
                  flashcardSets[activeSet].cards.map((card) => card.category)
                )
              )
                .filter((category) => category) // Filter out undefined categories
                .map((category) => (
                  <CommandItem
                    key={category}
                    onSelect={() => {
                      // You can implement filtering by category here
                      console.log(`Filter by category: ${category}`);
                      setOpen(false);
                    }}
                  >
                    <CircleIcon className="mr-2 h-3 w-3" />
                    {category}
                  </CommandItem>
                ))}
            </CommandGroup>
          </>
        )}

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => setTheme("light")}>
            <SunIcon className="mr-2 h-4 w-4" />
            Light
          </CommandItem>
          <CommandItem onSelect={() => setTheme("dark")}>
            <MoonIcon className="mr-2 h-4 w-4" />
            Dark
          </CommandItem>
          <CommandItem onSelect={() => setTheme("system")}>
            <LaptopIcon className="mr-2 h-4 w-4" />
            System
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
