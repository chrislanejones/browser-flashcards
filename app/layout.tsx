import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "flashcards-app",
  description: "Because it is Test Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
