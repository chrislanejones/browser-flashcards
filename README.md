# Interactive Flashcards App

A modern, responsive flashcards application built with Next.js and Tailwind CSS. This application provides an interactive way to study using digital index cards with a realistic appearance and smooth flip animations.

![Flashcards App Screenshot](https://via.placeholder.com/800x400?text=Flashcards+App)

## Features

- **Interactive Flashcards**: Click or use keyboard to flip cards and reveal answers
- **Realistic Index Card Design**: Complete with red and blue ruled lines for an authentic look
- **Keyboard Navigation**: Use arrow keys or WASD to navigate between cards
- **Spacebar Flipping**: Press spacebar to flip the currently focused card
- **Responsive Layout**: Adapts to different screen sizes with a responsive grid
- **Dark/Light Mode**: Toggle between light and dark themes with persistent storage
- **Accessible Design**: Keyboard navigable with proper focus indicators

## Technology Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **next-themes**: For theme management with system preference detection
- **Radix UI**: Accessible UI components for the dropdown menu
- **Lucide Icons**: Simple, clean SVG icons

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flashcards-app.git
   cd flashcards-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- **Navigate**: Use arrow keys or WASD to move between cards
- **Flip Card**: Click on a card or press spacebar when focused to flip it
- **Change Theme**: Click the sun/moon icon in the footer to toggle between light and dark modes

## Customizing Flashcards

To add your own flashcard content, edit the `flashcardData` array in `components/flashcard-grid.tsx`:

```typescript
const flashcardData = [
  { id: 1, question: "Your Question", answer: "Your Answer" },
  // Add more cards as needed
]
```

## Project Structure

```
├── components/
│   ├── ui/              # UI components (button, dropdown-menu)
│   ├── flashcard.tsx    # Individual flashcard component
│   ├── flashcard-grid.tsx  # Grid layout for flashcards
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Theme switching button
├── lib/
│   └── utils.ts         # Utility functions
├── app/
│   ├── globals.css      # Global CSS including index card styling
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## Styling

The app uses a combination of Tailwind CSS for general styling and custom CSS for the index card appearance. The index card design includes:

- Red top border
- Vertical red margin line
- Horizontal blue ruled lines
- Custom styling for both light and dark modes

These styles are defined in the `globals.css` file using custom CSS classes that are applied to the flashcard components.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by traditional index cards used for studying
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
