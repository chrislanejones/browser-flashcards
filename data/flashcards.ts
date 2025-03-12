// Define the Flashcard type
export interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

// React flashcards data
export const reactFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: "JavaScript XML - A syntax extension for JavaScript",
  },
  {
    id: 3,
    question: "What is a component?",
    answer: "A reusable piece of UI",
  },
  {
    id: 4,
    question: "What is a prop?",
    answer: "Properties passed to a component",
  },
  {
    id: 5,
    question: "What is state?",
    answer: "Data that changes over time in a component",
  },
  {
    id: 6,
    question: "What is a hook?",
    answer: "Functions that let you use React features",
  },
  {
    id: 7,
    question: "What is useEffect?",
    answer: "A hook to perform side effects in components",
  },
  {
    id: 8,
    question: "What is useState?",
    answer: "A hook to add state to functional components",
  },
  {
    id: 9,
    question: "What is context?",
    answer: "A way to share data without prop drilling",
  },
  {
    id: 10,
    question: "What is React Router?",
    answer: "A standard library for routing in React applications",
  },
  {
    id: 11,
    question: "What is Redux?",
    answer:
      "A predictable state container for JavaScript apps, often used with React",
  },
  {
    id: 12,
    question: "What is the Virtual DOM?",
    answer:
      "A lightweight copy of the real DOM that React uses to optimize rendering",
  },
  {
    id: 13,
    question: "What is React Fiber?",
    answer:
      "React's core reconciliation algorithm that enables incremental rendering",
  },
  {
    id: 14,
    question: "What is a Higher-Order Component (HOC)?",
    answer:
      "A component that takes a component and returns a new component with enhanced functionality",
  },
  {
    id: 15,
    question: "What are React Fragments?",
    answer:
      "A way to group multiple elements without adding extra nodes to the DOM",
  },
  {
    id: 16,
    question: "What is React.memo?",
    answer:
      "A higher-order component that memoizes a component to prevent unnecessary re-renders",
  },
  {
    id: 17,
    question: "What is useCallback?",
    answer:
      "A hook that returns a memoized callback function that only changes if dependencies change",
  },
  {
    id: 18,
    question: "What is useMemo?",
    answer:
      "A hook that returns a memoized value that only recalculates when dependencies change",
  },
  {
    id: 19,
    question: "What is useRef?",
    answer:
      "A hook that provides a mutable object whose .current property persists across renders",
  },
  {
    id: 20,
    question: "What is React.createRef?",
    answer:
      "A function that creates a ref object to access DOM nodes or React elements",
  },
  {
    id: 21,
    question: "What is React.forwardRef?",
    answer: "A function that lets components forward refs to their children",
  },
  {
    id: 22,
    question: "What is React.lazy?",
    answer: "A function that enables code splitting through dynamic imports",
  },
  {
    id: 23,
    question: "What is Suspense?",
    answer:
      "A component that lets you wait for code to load and declaratively specify a loading state",
  },
  {
    id: 24,
    question: "What is ErrorBoundary?",
    answer:
      "A component that catches JavaScript errors in child components and displays a fallback UI",
  },
  {
    id: 25,
    question: "What are controlled components?",
    answer: "Components where form data is handled by React state",
  },
  {
    id: 26,
    question: "What are uncontrolled components?",
    answer: "Components where form data is handled by the DOM itself",
  },
  {
    id: 27,
    question: "What is the StrictMode component?",
    answer:
      "A tool for highlighting potential problems in an application during development",
  },
  {
    id: 28,
    question: "What is prop drilling?",
    answer: "The process of passing props through multiple nested components",
  },
  {
    id: 29,
    question: "What is the useReducer hook?",
    answer:
      "A hook that lets you manage state with a reducer function, similar to Redux",
  },
  {
    id: 30,
    question: "What is the useState hook?",
    answer: "A hook that lets you add state to functional components",
  },
  {
    id: 31,
    question: "What are React portals?",
    answer:
      "A way to render children into a DOM node outside the parent component's hierarchy",
  },
  {
    id: 32,
    question: "What is React server-side rendering (SSR)?",
    answer:
      "Rendering React components on the server rather than in the browser",
  },
  {
    id: 33,
    question: "What is React Concurrent Mode?",
    answer:
      "A set of features that help React apps stay responsive and adjust to the user's device capabilities",
  },
  {
    id: 34,
    question: "What is the useLayoutEffect hook?",
    answer:
      "Similar to useEffect, but fires synchronously after DOM mutations and before browser paint",
  },
  {
    id: 35,
    question: "What is the useImperativeHandle hook?",
    answer:
      "A hook that customizes the instance value exposed when using React.forwardRef",
  },
  {
    id: 36,
    question: "What is the useContext hook?",
    answer:
      "A hook that lets you subscribe to React context without introducing nesting",
  },
];

// You can add more flashcard sets here
export const javascriptFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "A high-level, interpreted programming language that conforms to the ECMAScript specification",
  },
  // Add more JavaScript flashcards as needed
];

// Map of flashcard sets for easy access
export const flashcardSets = {
  react: reactFlashcards,
  javascript: javascriptFlashcards,
  // Add more sets as needed
};

// Default export for convenience
export default reactFlashcards;
