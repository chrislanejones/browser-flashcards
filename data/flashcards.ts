// Define the Flashcard type
export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

// Define the FlashcardSet interface
export interface FlashcardSet {
  name: string;
  description: string;
  icon?: string;
  cards: Flashcard[];
}

/* ──────────────────────────────
   🌿 React (updated for 2025)
──────────────────────────────── */
export const reactFlashcards: Flashcard[] = [
  // React Basics
  {
    id: 1,
    question: "What is React?",
    answer:
      "A JavaScript library for building user interfaces using a declarative component-based architecture.",
    category: "Basics",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "A JavaScript syntax extension that lets you write markup-like code inside JavaScript and compiles to React.createElement calls.",
    category: "Basics",
  },
  {
    id: 3,
    question: "What are components in React?",
    answer:
      "Reusable UI pieces that describe what should appear on screen and can manage their own state or rely on props.",
    category: "Basics",
  },
  {
    id: 4,
    question: "What are props in React?",
    answer: "Immutable inputs to a component passed from its parent.",
    category: "Basics",
  },
  {
    id: 5,
    question: "What is state in React?",
    answer:
      "Data managed within a component that can change over time and triggers re-renders when updated.",
    category: "Basics",
  },

  // Modern Hooks and Features
  {
    id: 6,
    question: "What is a React Hook?",
    answer:
      "A special function starting with 'use' that lets functional components use state and other React features.",
    category: "Hooks",
  },
  {
    id: 7,
    question: "What is useEffect used for?",
    answer:
      "It handles side effects such as data fetching, subscriptions, or DOM manipulation after render.",
    category: "Hooks",
  },
  {
    id: 8,
    question: "What is useState used for?",
    answer:
      "It declares a state variable within a functional component and provides a setter to update it.",
    category: "Hooks",
  },
  {
    id: 9,
    question: "What is the difference between React 17, 18, and 19?",
    answer:
      "React 18 added concurrent rendering and automatic batching; React 19 introduces Server Components, the new compiler, and use() for async data.",
    category: "Modern",
  },
  {
    id: 10,
    question: "What are Server Components?",
    answer:
      "React 19’s components that run on the server to fetch data and stream rendered HTML to the client efficiently.",
    category: "Advanced",
  },
  {
    id: 11,
    question: "What are Suspense boundaries?",
    answer:
      "Declarative async loading boundaries that allow React to pause rendering parts of the UI while data or code loads.",
    category: "Advanced",
  },
  {
    id: 12,
    question: "What is React’s useOptimistic hook?",
    answer:
      "It enables optimistic UI updates — updating UI immediately before a server mutation resolves or fails.",
    category: "Advanced",
  },
  {
    id: 13,
    question: "What is the difference between useContext and useReducer?",
    answer:
      "useContext shares state globally; useReducer manages complex local state transitions. Often combined for global state patterns.",
    category: "Hooks",
  },
  {
    id: 14,
    question: "What is the new Actions API in React 19?",
    answer:
      "An API that allows server-side form actions and optimistic updates using async functions in form ‘action’ attributes.",
    category: "Advanced",
  },
  {
    id: 15,
    question: "What is React’s Concurrent Rendering?",
    answer:
      "React can interrupt and resume rendering work, making UI more responsive and allowing features like Suspense and transitions.",
    category: "Advanced",
  },
];

/* ──────────────────────────────
   ⚡ JavaScript (updated 2025)
──────────────────────────────── */
export const javascriptFlashcards: Flashcard[] = [
  // Basics
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "A dynamic, high-level, interpreted programming language standardized as ECMAScript and used across environments like browsers and Node.js.",
    category: "Basics",
  },
  {
    id: 2,
    question: "What’s new in ECMAScript 2024?",
    answer:
      "Features include Promise.withResolvers, Temporal (stage 3), ArrayBuffer transfer, and new Object.groupBy/Object.partition methods.",
    category: "Modern",
  },
  {
    id: 3,
    question: "What is a closure?",
    answer:
      "A function that remembers the variables from its lexical scope even when executed outside of that scope.",
    category: "Functions",
  },
  {
    id: 4,
    question: "What are JavaScript modules?",
    answer:
      "Files that export and import values using ES Module syntax (import/export) for encapsulated, reusable code.",
    category: "Basics",
  },

  // Modern Syntax and Features
  {
    id: 5,
    question: "What is optional chaining (?.)?",
    answer:
      "A syntax that safely accesses nested object properties, returning undefined instead of throwing errors when properties are missing.",
    category: "Modern",
  },
  {
    id: 6,
    question: "What is nullish coalescing (??)?",
    answer:
      "An operator returning the right-hand value only if the left-hand side is null or undefined.",
    category: "Modern",
  },
  {
    id: 7,
    question: "What is top-level await?",
    answer:
      "Allows using await at the top level of modules without wrapping code in an async function.",
    category: "Advanced",
  },
  {
    id: 8,
    question: "What are WeakMap and WeakSet used for?",
    answer:
      "Collections holding weak references to keys; help avoid memory leaks by not preventing garbage collection.",
    category: "Advanced",
  },
  {
    id: 9,
    question: "What is event delegation?",
    answer:
      "A technique where events on child elements are handled by an ancestor using event bubbling.",
    category: "DOM",
  },
  {
    id: 10,
    question: "What is the difference between shallow and deep cloning?",
    answer:
      "Shallow copies only clone one level of properties; deep clones recursively copy nested objects (e.g., using structuredClone in modern JS).",
    category: "Advanced",
  },
  {
    id: 11,
    question: "What is a generator function?",
    answer:
      "A function declared with function* that can pause and resume execution, used with yield to produce iterators.",
    category: "Advanced",
  },
  {
    id: 12,
    question: "What is an async generator?",
    answer:
      "A generator that combines async/await with iteration, producing promises that resolve to yielded values.",
    category: "Advanced",
  },
];

/* ──────────────────────────────
   🎨 CSS (two questions replaced)
──────────────────────────────── */
export const cssFlashcards: Flashcard[] = [
  // Basics
  {
    id: 1,
    question: "What is CSS?",
    answer:
      "Cascading Style Sheets: a stylesheet language used to describe how documents are presented visually.",
    category: "Basics",
  },
  {
    id: 2,
    question: "What units are most common in modern responsive design?",
    answer:
      "Relative units like rem, em, vw, vh, and dynamic viewport units (svh, dvh, lvh) introduced in modern browsers.",
    category: "Basics",
  },
  {
    id: 3,
    question: "What is the box model?",
    answer:
      "Elements consist of content, padding, border, and margin areas that determine layout size and spacing.",
    category: "Layout",
  },
  {
    id: 4,
    question: "How do CSS variables differ from preprocessor variables?",
    answer:
      "CSS custom properties are runtime variables in the DOM that can change dynamically; preprocessor vars are compile-time substitutions.",
    category: "Advanced",
  },
  {
    id: 5,
    question: "What is flexbox?",
    answer:
      "A one-dimensional layout system that arranges items along a row or column with alignment and spacing control.",
    category: "Layout",
  },
  {
    id: 6,
    question: "What is CSS Grid?",
    answer:
      "A two-dimensional layout system for creating rows and columns with precise placement and alignment.",
    category: "Layout",
  },
  {
    id: 7,
    question: "What are container queries?",
    answer:
      "A newer feature allowing elements to adapt styles based on the size of their containing element, not viewport width.",
    category: "Modern",
  },
  {
    id: 8,
    question: "What is logical properties syntax?",
    answer:
      "Using flow‑relative properties like margin‑inline‑start or padding‑block‑end that adapt automatically to writing direction.",
    category: "Modern",
  },
  {
    id: 9,
    question: "How does the :has() selector work?",
    answer:
      "It matches an element if it contains a descendant matching a selector — allowing parent‑based styling logic.",
    category: "Selectors",
  },
  {
    id: 10,
    question: "What is the difference between ::before and ::after?",
    answer:
      "Both create pseudo-elements before or after content for decorative or structural use. They require 'content' to render.",
    category: "Selectors",
  },
  {
    id: 11,
    question: "What is the prefers-color-scheme media query?",
    answer:
      "A query that detects the user’s system theme preference (light or dark) to apply theme-appropriate styles automatically.",
    category: "Media",
  },
  {
    id: 12,
    question: "What is the subgrid feature?",
    answer:
      "A CSS Grid enhancement that allows nested grids to align their rows or columns with the parent grid.",
    category: "Layout",
  },
];

/* ──────────────────────────────
   ⚙️ Effect.ts (12 Questions)
──────────────────────────────── */
export const effectFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is Effect TS?",
    answer:
      "A functional TypeScript library for managing async, concurrent, and resource‑safe computations using effects.",
    category: "Basics",
  },
  {
    id: 2,
    question: "What problem does Effect TS solve?",
    answer:
      "It provides structured concurrency, error handling, and testable effects instead of ad‑hoc async/await.",
    category: "Concepts",
  },
  {
    id: 3,
    question: "What is an Effect?",
    answer:
      "A description of a computation that may succeed, fail, or produce a value asynchronously without performing it yet.",
    category: "Basics",
  },
  {
    id: 4,
    question: "How do you run an Effect?",
    answer: "By calling Effect.runPromise(effect) or using Effect.runSync.",
    category: "API",
  },
  {
    id: 5,
    question: "What is Fiber in Effect TS?",
    answer:
      "A lightweight, cancellable thread of execution managed by the runtime.",
    category: "Concurrency",
  },
  {
    id: 6,
    question: "What is the Layer system in Effect TS?",
    answer:
      "An abstraction for dependency injection and resource management that composes services safely.",
    category: "Infrastructure",
  },
  {
    id: 7,
    question: "How does Effect TS handle errors?",
    answer:
      "All failures are typed; you can recover using catchAll, catchTag, or provideError to handle typed errors explicitly.",
    category: "Error Handling",
  },
  {
    id: 8,
    question: "What are Scopes in Effect TS?",
    answer:
      "Regions that manage lifetimes of resources like connections, ensuring cleanup and safety.",
    category: "Resources",
  },
  {
    id: 9,
    question: "How is logging done in Effect TS?",
    answer: "Using Effect.log or custom LogLayers injected via Layers.",
    category: "Utilities",
  },
  {
    id: 10,
    question: "What is Effect.gen?",
    answer:
      "A generator‑based helper allowing imperative‑looking composition of Effects with yield* syntax.",
    category: "Syntax",
  },
  {
    id: 11,
    question: "What is Context in Effect TS?",
    answer:
      "A typed key‑value environment used to pass dependencies (services) implicitly through computation chains.",
    category: "Concepts",
  },
  {
    id: 12,
    question: "How does Effect TS compare to RxJS?",
    answer:
      "Effect TS models async computations lazily with structured concurrency, while RxJS focuses on push‑based reactive streams.",
    category: "Comparison",
  },
];

/* ──────────────────────────────
   🔍 TanStack Query (12 Questions)
──────────────────────────────── */
export const tanstackFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is TanStack Query (React Query)?",
    answer:
      "A powerful data fetching and caching library for managing server state in React and other frameworks.",
    category: "Basics",
  },
  {
    id: 2,
    question: "What hook is used for fetching data?",
    answer:
      "useQuery or useInfiniteQuery fetching data and managing cache automatically.",
    category: "API",
  },
  {
    id: 3,
    question: "What does useMutation do?",
    answer:
      "Handles creating, updating, or deleting data while providing optimistic updates and error recovery.",
    category: "API",
  },
  {
    id: 4,
    question: "What is QueryClient?",
    answer:
      "A central object that stores cache data and configuration for all queries and mutations in the app.",
    category: "Core",
  },
  {
    id: 5,
    question: "What is Query Key?",
    answer:
      "An array or string identifying a unique query; determines cache identity and re‑use.",
    category: "Core",
  },
  {
    id: 6,
    question: "How does revalidation work in TanStack Query?",
    answer:
      "It automatically refetches based on focus, network reconnection, or time‑based stale durations.",
    category: "Advanced",
  },
  {
    id: 7,
    question: "What is staleTime?",
    answer:
      "The duration TanStack Query considers data fresh before triggering background refetches.",
    category: "Config",
  },
  {
    id: 8,
    question: "What is cacheTime?",
    answer:
      "How long unused (inactive) query data remains in cache before garbage collection.",
    category: "Config",
  },
  {
    id: 9,
    question: "How do you prefetch data?",
    answer: "Use queryClient.prefetchQuery or dehydrate/hydrate for SSR.",
    category: "Fetching",
  },
  {
    id: 10,
    question: "What’s new in TanStack Query v5?",
    answer:
      "Simplified query functions, new mutation behaviors, better suspense integration, and async adapters.",
    category: "Modern",
  },
  {
    id: 11,
    question: "How can you use TanStack Query with React Server Components?",
    answer:
      "Use dehydrate on the server and hydrate on the client, or fetch data directly in server components then prefill cache.",
    category: "SSR",
  },
  {
    id: 12,
    question: "What is query invalidation?",
    answer:
      "A process to mark cached data as stale, prompting TanStack Query to refetch the latest data.",
    category: "Core",
  },
];

/* ──────────────────────────────
   🌐 HTML (12 Questions)
──────────────────────────────── */
export const htmlFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language, used to structure content on the web.",
    category: "Basics",
  },
  {
    id: 2,
    question: "What is the DOCTYPE declaration for HTML5?",
    answer: "<!DOCTYPE html>",
    category: "Basics",
  },
  {
    id: 3,
    question: "What new semantic tags were introduced in HTML5?",
    answer:
      "header, footer, article, section, main, nav, aside, figure, figcaption, and more.",
    category: "Structure",
  },
  {
    id: 4,
    question: "What is the difference between <section> and <article>?",
    answer:
      "<article> is self‑contained content (e.g., a blog post), while <section> groups related contextually connected content.",
    category: "Structure",
  },
  {
    id: 5,
    question: "What is the purpose of the <meta> viewport tag?",
    answer:
      'It controls page scaling and responsiveness on mobile devices, typically using content="width=device-width, initial-scale=1".',
    category: "Responsive",
  },
  {
    id: 6,
    question: "What is the difference between block and inline elements?",
    answer:
      "Block elements start on new lines and take full width; inline elements take only necessary space within flow.",
    category: "Basics",
  },
  {
    id: 7,
    question: "What are data-* attributes used for?",
    answer:
      "They store custom data directly in HTML elements for access via JavaScript, prefixed with data‑.",
    category: "Attributes",
  },
  {
    id: 8,
    question: "What is the <dialog> tag used for?",
    answer:
      "To create modal or pop‑up dialogs easily controllable with open/close API via JavaScript.",
    category: "Modern",
  },
  {
    id: 9,
    question: "What is the difference between <strong> and <b>?",
    answer:
      "<strong> conveys semantic importance, while <b> provides purely visual bold styling.",
    category: "Semantics",
  },
  {
    id: 10,
    question: "What is the <template> tag?",
    answer:
      "A hidden fragment of HTML that can be cloned and inserted into the DOM at runtime using JavaScript.",
    category: "Modern",
  },
  {
    id: 11,
    question: "What is lazy loading of images?",
    answer:
      'Using the loading="lazy" attribute on <img> to defer loading until the element enters the viewport.',
    category: "Performance",
  },
  {
    id: 12,
    question: "What is the purpose of the rel attribute in <link>?",
    answer:
      "Specifies the relationship between the current document and the linked resource (e.g., stylesheet, prefetch, canonical).",
    category: "Attributes",
  },
];

/* ──────────────────────────────
   📦 Combined Export Map
──────────────────────────────── */
export const flashcardSets: Record<string, FlashcardSet> = {
  react: {
    name: "React",
    description:
      "Learn React 2025 fundamentals, hooks, and concurrent features.",
    icon: "react",
    cards: reactFlashcards,
  },
  javascript: {
    name: "JavaScript",
    description: "Master modern ECMAScript syntax and advanced concepts.",
    icon: "javascript",
    cards: javascriptFlashcards,
  },
  css: {
    name: "CSS",
    description: "Explore modern, responsive, and logical CSS techniques.",
    icon: "css",
    cards: cssFlashcards,
  },
  effect: {
    name: "Effect TS",
    description:
      "Learn structured concurrency and typed effects with Effect TS.",
    icon: "bolt",
    cards: effectFlashcards,
  },
  tanstack: {
    name: "TanStack Query",
    description: "Master asynchronous server‑state management.",
    icon: "database",
    cards: tanstackFlashcards,
  },
  html: {
    name: "HTML",
    description:
      "Understand modern, semantic, and accessible HTML 5+ features.",
    icon: "file-code",
    cards: htmlFlashcards,
  },
};

export default flashcardSets;
