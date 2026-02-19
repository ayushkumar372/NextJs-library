import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Design Showcase | ReactUI Library",
  description:
    "Explore premium UI design themes including glassmorphism, gaming, neon, gradients, 3D, forms, cards, buttons, and more.",
  keywords: [
    "design showcase",
    "react ui library",
    "ui patterns",
    "tailwind components",
    "premium ui"
  ],
  openGraph: {
    title: "Design Showcase | ReactUI Library",
    description:
      "Explore premium UI design themes including glassmorphism, gaming, neon, gradients, 3D, forms, cards, buttons, and more.",
    url: "https://yoursite.com/showcase",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Showcase | ReactUI Library",
    description:
      "Explore premium UI design themes including glassmorphism, gaming, neon, gradients, 3D, forms, cards, buttons, and more.",
  },
};

export default function ShowcasePage() {
  return <View />;
}