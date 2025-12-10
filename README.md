# 📚 Interactive Study Flashcards App

![Browser Flash Cards Banner](/public/Browser-Flash-Card-Banner.webp)

![Flashcards App Screenshot](/public/Flash-Cards-For-Studying.webp)

**Live Demo:** [https://browser-flashcards.vercel.app/](https://browser-flashcards.vercel.app/)

A modern, interactive flashcards application built with **Next.js 14**, **React 19**, and **Tailwind CSS v4**.  
Enjoy a dynamic study experience with seamless navigation, dark mode, command palette topic switching, and polished transitions — all fully responsive and built for speed.

---

## 🌟 Features

### 🎮 Interactive Navigation

- Navigate flashcards with **Arrow Keys** or **W A S D**
- **Spacebar** flips cards instantly
- **Escape** clears focus
- **Click** on a card to focus and flip

### 🧠 Smart Interactions

- Idle timer flips cards back after ~20 seconds
- **Command Palette (`Ctrl + K`)** for instant topic switching
- Multiple flashcard sets:
  - React • JavaScript • TypeScript • CSS
  - Effect TS • TanStack Query • HTML
- Organized by category (Basics • Hooks • Advanced • etc.)

### 💡 Themes & Accessibility

- Light / Dark mode toggle
- System theme detection
- Persistent theme storage
- Fully keyboard accessible

### 📱 Responsive Design

- 1–4 column adaptive grid
- Smooth focus transitions
- Uses modern container queries and logical units

### ✨ Aesthetic Appeal

- Realistic index-card styling
- Gentle animations and shadows
- Optimized for GPU rendering

---

## ⚙️ Tech Stack

| Layer           | Technology                                |
| :-------------- | :---------------------------------------- |
| Framework       | **Next.js 14 (App Router)**               |
| Library         | **React 19 (Server & Client Components)** |
| Language        | **TypeScript 5+**                         |
| Styling         | **Tailwind CSS 4 + @tailwindcss/postcss** |
| Themes          | **next-themes**                           |
| UI / Icons      | **Lucide React + ShadCN UI + cmdk**       |
| Package Manager | **pnpm**                                  |
| Deployment      | **Vercel**                                |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- **pnpm** package manager (`npm install -g pnpm`)

### Installation

```bash
# 1️⃣  Clone the repository
git clone https://github.com/yourusername/browser-flashcards.git
cd browser-flashcards

# 2️⃣  Install dependencies
pnpm install

# 3️⃣  Run the development server
pnpm dev
```

Now open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🎮 Usage Guide

### ⌨️ Keyboard Controls

| Action             | Keys               |
| ------------------ | ------------------ |
| Move between cards | ← → ↑ ↓ or W A S D |
| Flip card          | Spacebar           |
| Reset / Unfocus    | Escape             |
| Switch topic       | Ctrl + K           |

### 🖱️ Mouse Controls

- Click on a card to focus
- Click again or press **Spacebar** to flip

### ☀️ Theme Toggle

- Use the **Sun / Moon** button in the footer
- Themes persist locally and respect system settings

---

## 🧩 Available Topics

| Topic                 | Description                                           |
| :-------------------- | :---------------------------------------------------- |
| ⚛️ **React**          | Modern React 19, hooks, actions, server components    |
| ⚡ **JavaScript**     | ES2024+, closures, async iteration, optional chaining |
| 🎨 **CSS**            | Subgrid, logical properties, container queries        |
| 🧱 **TypeScript**     | Generics, inference, React types                      |
| ⚙️ **Effect TS**      | Functional effects, concurrency, typed errors         |
| 🔍 **TanStack Query** | Data fetching and server-state management             |
| 🌐 **HTML**           | Semantic and modern markup essentials                 |

Quickly switch topics using **Ctrl + K**!

---

## 🗂️ Project Structure

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

- **Context Provider**: Manages focus & flip states globally
- **Custom Hooks**: Handle keyboard navigation and idle timers
- **Specialized Components**: Each flashcard is isolated for smooth re-rendering
- **Dynamic Layout Detection**: Works across breakpoints
- **Theme Tokens**: Controlled by CSS variables with Tailwind v4

This separation of concerns makes the application more maintainable and extensible.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
