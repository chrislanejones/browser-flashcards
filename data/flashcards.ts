// Define the Flashcard type
export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category?: string; // Optional category for grouping
}

// Define the FlashcardSet interface
export interface FlashcardSet {
  name: string;
  description: string;
  icon?: string; // Optional icon name for UI
  cards: Flashcard[];
}

// React flashcards data
export const reactFlashcards: Flashcard[] = [
  // React Basics
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
    category: "Basics",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JavaScript XML - A syntax extension for JavaScript that allows writing HTML-like code in JavaScript",
    category: "Basics",
  },
  {
    id: 3,
    question: "What is a component?",
    answer: "A reusable piece of UI that can be composed with other components",
    category: "Basics",
  },
  {
    id: 4,
    question: "What is a prop?",
    answer:
      "Properties passed to a component to configure its behavior or appearance",
    category: "Basics",
  },
  {
    id: 5,
    question: "What is state?",
    answer:
      "Data that changes over time in a component and triggers re-renders when updated",
    category: "Basics",
  },

  // React Hooks
  {
    id: 6,
    question: "What is a hook?",
    answer:
      "Functions that let you use React features like state and lifecycle methods in functional components",
    category: "Hooks",
  },
  {
    id: 7,
    question: "What is useEffect?",
    answer:
      "A hook to perform side effects in components, like data fetching or DOM manipulation",
    category: "Hooks",
  },
  {
    id: 8,
    question: "What is useState?",
    answer: "A hook to add state to functional components",
    category: "Hooks",
  },
  {
    id: 9,
    question: "What is useContext?",
    answer: "A hook to access context data without excessive nesting",
    category: "Hooks",
  },
  {
    id: 10,
    question: "What is useRef?",
    answer:
      "A hook that provides a mutable object whose .current property persists across renders",
    category: "Hooks",
  },

  // Advanced React
  {
    id: 11,
    question: "What is the Virtual DOM?",
    answer:
      "A lightweight copy of the real DOM that React uses to optimize rendering",
    category: "Advanced",
  },
  {
    id: 12,
    question: "What is React Fiber?",
    answer:
      "React's core reconciliation algorithm that enables incremental rendering",
    category: "Advanced",
  },
  {
    id: 13,
    question: "What are Higher-Order Components (HOC)?",
    answer:
      "Components that take a component and return a new component with enhanced functionality",
    category: "Advanced",
  },
  {
    id: 14,
    question: "What are React Fragments?",
    answer:
      "A way to group multiple elements without adding extra nodes to the DOM",
    category: "Advanced",
  },
  {
    id: 15,
    question: "What are React portals?",
    answer:
      "A way to render children into a DOM node outside of the parent component's hierarchy",
    category: "Advanced",
  },
];

// JavaScript flashcards data
export const javascriptFlashcards: Flashcard[] = [
  // JavaScript Basics
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "A high-level, interpreted programming language that conforms to the ECMAScript specification",
    category: "Basics",
  },
  {
    id: 2,
    question: "What are the primitive data types in JavaScript?",
    answer: "String, Number, BigInt, Boolean, undefined, Symbol, and null",
    category: "Basics",
  },
  {
    id: 3,
    question: "What is the difference between let, const, and var?",
    answer:
      "var is function-scoped and hoisted, let is block-scoped, and const is block-scoped and cannot be reassigned",
    category: "Basics",
  },
  {
    id: 4,
    question: "What is hoisting in JavaScript?",
    answer:
      "The behavior where variable and function declarations are moved to the top of their containing scope",
    category: "Basics",
  },

  // JavaScript Functions
  {
    id: 5,
    question: "What is a closure in JavaScript?",
    answer:
      "A function bundled with its lexical environment, allowing access to variables from an outer scope",
    category: "Functions",
  },
  {
    id: 6,
    question:
      "What is the difference between arrow functions and regular functions?",
    answer:
      "Arrow functions have a shorter syntax, don't have their own this, arguments, or super, and can't be used as constructors",
    category: "Functions",
  },
  {
    id: 7,
    question: "What is function currying?",
    answer:
      "A technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument",
    category: "Functions",
  },
  {
    id: 8,
    question: "What is a callback function?",
    answer:
      "A function passed as an argument to another function, to be executed later or upon some event",
    category: "Functions",
  },

  // Advanced JavaScript
  {
    id: 9,
    question: "What is the event loop in JavaScript?",
    answer:
      "A mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded",
    category: "Advanced",
  },
  {
    id: 10,
    question: "What are Promises in JavaScript?",
    answer:
      "Objects representing the eventual completion or failure of an asynchronous operation",
    category: "Advanced",
  },
  {
    id: 11,
    question: "What is async/await?",
    answer:
      "Syntactic sugar on top of Promises that makes asynchronous code look and behave more like synchronous code",
    category: "Advanced",
  },
  {
    id: 12,
    question: "What is prototypal inheritance?",
    answer:
      "JavaScript's mechanism of inheriting properties and methods from object prototypes",
    category: "Advanced",
  },
];

// TypeScript flashcards data
export const typescriptFlashcards: Flashcard[] = [
  // TypeScript Basics
  {
    id: 1,
    question: "What is TypeScript?",
    answer:
      "A strongly typed programming language that builds on JavaScript, adding static type definitions",
    category: "Basics",
  },
  {
    id: 2,
    question: "What are the basic types in TypeScript?",
    answer:
      "boolean, number, string, array, tuple, enum, any, void, null, undefined, never, and object",
    category: "Basics",
  },
  {
    id: 3,
    question: "What is an interface in TypeScript?",
    answer:
      "A way to define the shape of an object, specifying what properties and methods it should have",
    category: "Basics",
  },
  {
    id: 4,
    question: "What is type inference in TypeScript?",
    answer:
      "The automatic detection of the data type of an expression when no explicit type is provided",
    category: "Basics",
  },

  // TypeScript Advanced
  {
    id: 5,
    question: "What are generics in TypeScript?",
    answer:
      "A way to create reusable components that can work with a variety of types rather than a single one",
    category: "Advanced",
  },
  {
    id: 6,
    question: "What is a union type?",
    answer: "A type that can be one of several types, written as Type1 | Type2",
    category: "Advanced",
  },
  {
    id: 7,
    question: "What is an intersection type?",
    answer:
      "A type that combines multiple types into one, written as Type1 & Type2",
    category: "Advanced",
  },
  {
    id: 8,
    question: "What are decorators in TypeScript?",
    answer:
      "Special declarations that can be attached to classes, methods, properties, or parameters to modify their behavior",
    category: "Advanced",
  },

  // TypeScript with React
  {
    id: 9,
    question: "How do you type props in React with TypeScript?",
    answer:
      "By creating an interface or type that defines the shape of the props object",
    category: "With React",
  },
  {
    id: 10,
    question: "What is the type for React function components?",
    answer: "React.FC<PropsType> or React.FunctionComponent<PropsType>",
    category: "With React",
  },
  {
    id: 11,
    question: "How do you type useState hooks?",
    answer:
      "useState<Type>(initialState) or explicitly with const [state, setState] = useState<Type>(initialState)",
    category: "With React",
  },
  {
    id: 12,
    question: "What is the useRef type when referencing DOM elements?",
    answer: "useRef<HTMLElementType>(null), e.g., useRef<HTMLDivElement>(null)",
    category: "With React",
  },
];

// CSS flashcards data
export const cssFlashcards: Flashcard[] = [
  // CSS Basics
  {
    id: 1,
    question: "What is CSS?",
    answer:
      "Cascading Style Sheets, a language used to describe the presentation of a document written in HTML",
    category: "Basics",
  },
  {
    id: 2,
    question: "What are the different ways to include CSS in HTML?",
    answer:
      "Inline styles, internal stylesheet (style tag), and external stylesheet (link tag)",
    category: "Basics",
  },
  {
    id: 3,
    question: "What is the box model in CSS?",
    answer:
      "A layout model that describes how elements are rendered as boxes with content, padding, border, and margin",
    category: "Basics",
  },
  {
    id: 4,
    question: "What is the difference between block and inline elements?",
    answer:
      "Block elements take up the full width available and create a new line, while inline elements only take up as much width as necessary and don't create a new line",
    category: "Basics",
  },

  // CSS Layout
  {
    id: 5,
    question: "What is flexbox?",
    answer:
      "A one-dimensional layout method designed for arranging items in rows or columns",
    category: "Layout",
  },
  {
    id: 6,
    question: "What is CSS Grid?",
    answer:
      "A two-dimensional layout system designed for complex layouts with rows and columns",
    category: "Layout",
  },
  {
    id: 7,
    question: "What is the position property in CSS?",
    answer:
      "A property that specifies how an element is positioned in a document, with values like static, relative, absolute, fixed, and sticky",
    category: "Layout",
  },
  {
    id: 8,
    question: "What is the z-index property?",
    answer:
      "A property that specifies the stack order of an element (which element is placed in front of or behind others)",
    category: "Layout",
  },

  // Advanced CSS
  {
    id: 9,
    question: "What are CSS preprocessors?",
    answer:
      "Tools that extend CSS with features like variables, nesting, and mixins (e.g., Sass, Less, Stylus)",
    category: "Advanced",
  },
  {
    id: 10,
    question: "What are CSS custom properties (variables)?",
    answer:
      "Properties defined with -- prefix that can store values to be reused throughout a document",
    category: "Advanced",
  },
  {
    id: 11,
    question: "What is CSS animation?",
    answer:
      "A way to animate HTML elements without using JavaScript, using @keyframes and the animation property",
    category: "Advanced",
  },
  {
    id: 12,
    question: "What are media queries?",
    answer:
      "CSS techniques used to apply styles based on device characteristics, like screen size, resolution, or orientation",
    category: "Advanced",
  },
];

// Map of flashcard sets for easy access
export const flashcardSets: Record<string, FlashcardSet> = {
  react: {
    name: "React",
    description: "Learn React fundamentals and advanced concepts",
    icon: "react",
    cards: reactFlashcards,
  },
  javascript: {
    name: "JavaScript",
    description: "Master JavaScript language features",
    icon: "javascript",
    cards: javascriptFlashcards,
  },
  typescript: {
    name: "TypeScript",
    description: "Understand TypeScript's type system and features",
    icon: "typescript",
    cards: typescriptFlashcards,
  },
  css: {
    name: "CSS",
    description: "Learn CSS styling and layout techniques",
    icon: "css",
    cards: cssFlashcards,
  },
};

// Default export for convenience
export default flashcardSets;
