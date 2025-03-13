# Interactive React Flashcards App

📚 Live Demo: [https://browser-flashcards.vercel.app/](https://browser-flashcards.vercel.app/)

![Flashcards App Screenshot](/public/Flash-Cards-For-Studying.webp)

A modern, interactive flashcards application built with Next.js, React, and Tailwind CSS. This app provides a dynamic study experience with smooth navigation, intuitive interactions, and multiple subject categories.

## 🌟 Features

- **Interactive Navigation**

  - Keyboard navigation using arrow keys and WASD
  - Click and focus interactions
  - Spacebar to flip cards
  - Escape key to clear focus

- **Smart Interactions**

  - Idle timer that flips cards back after 20 seconds of inactivity
  - Command palette (Ctrl+K) for quick topic switching
  - Multiple flashcard sets (React, JavaScript, TypeScript, CSS)
  - Categorized flashcards within each set

- **Responsive Design**

  - Adaptive grid layout (1-4 columns based on screen width)
  - Smooth scrolling and card focus management

- **Theme Support**

  - Light and dark mode
  - System preference detection
  - Persistent theme selection

- **Realistic Card Design**
  - Index card-style aesthetic
  - Custom styling with ruled lines
  - Smooth flip animations

## 🚀 Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- next-themes
- Lucide React Icons
- cmdk (Command Menu)

## 🔧 Installation

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/flashcards-app.git
cd flashcards-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

## 🎮 Usage

### Keyboard Controls

- **Navigation**
  - Arrow Keys / WASD: Move between cards
  - Spacebar: Flip focused card
  - Escape: Clear card focus
  - Ctrl+K: Open command palette for switching topics

### Mouse Interactions

- **Click on Card**:
  - Focus the card
  - Flip the card when clicked

### Theme Toggle

- Use the sun/moon icon in the footer to switch between light and dark modes

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── flashcards/        # Flashcard components (new modular structure)
│   │   ├── index.ts       # Barrel file for clean exports
│   │   ├── FlashcardContext.tsx  # Context provider for state management
│   │   ├── FlashcardGrid.tsx     # Grid layout for flashcards
│   │   └── FlashcardItem.tsx     # Individual flashcard component
│   ├── command-dialog.tsx # Command palette component
│   ├── theme-provider.tsx # Theme context provider
│   ├── theme-toggle.tsx   # Theme switching component
│   └── ui/                # UI component library
├── data/
│   └── flashcards.ts      # Flashcard content with categories
├── hooks/
│   ├── use-idle-timer.ts  # Idle detection for auto-flipping cards
│   └── use-flashcard-navigation.ts # Keyboard navigation logic
├── utils/
│   ├── keyboard-controls.ts
│   └── mouse-controls.ts  # Interaction utilities
└── tailwind.config.js     # Tailwind configuration
```

## 🗂️ Managing Flashcards

Edit the `data/flashcards.ts` file to customize your flashcards:

```typescript
export const reactFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
    category: "Basics",
  },
  // Add more flashcards here
];
```

The application supports multiple flashcard sets that can be switched via the command palette (Ctrl+K):

- React
- JavaScript
- TypeScript
- CSS

Each set can have categories like "Basics", "Advanced", etc. for better organization.

## 🧩 Component Architecture

The flashcards system now uses a more modular architecture:

- **Context Provider**: Centralizes state management for all flashcards
- **Custom Hooks**: Separates logic for navigation and idle detection
- **Specialized Components**: Splits rendering responsibilities for better maintainability

This separation of concerns makes the application more maintainable and extensible.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
