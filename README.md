# Interactive React Flashcards App

📚 Live Demo: [https://browser-flashcards.vercel.app/](https://browser-flashcards.vercel.app/)

<!--  -->

![Flashcards App Screenshot](/public/Flash-Cards-For-Studying.webp)

A modern, interactive flashcards application built with Next.js, React, and Tailwind CSS. This app provides a dynamic study experience with smooth navigation and intuitive interactions.

## 🌟 Features

- **Interactive Navigation**

  - Keyboard navigation using arrow keys and WASD
  - Click and focus interactions
  - Spacebar to flip cards
  - Escape key to clear focus

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
│   ├── flashcard.tsx      # Individual flashcard component
│   ├── flashcard-grid.tsx # Grid layout for flashcards
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Theme switching component
├── data/
│   └── flashcards.ts      # Flashcard content
├── utils/
│   ├── keyboard-controls.ts
│   └── mouse-controls.ts  # Interaction utilities
└── tailwind.config.js     # Tailwind configuration
```

## 🗂️ Managing Flashcards

Edit the `data/flashcards.ts` file to customize your flashcards:

```typescript
const reactFlashcards = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
  },
  // Add more flashcards here
];
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
