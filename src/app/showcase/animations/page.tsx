import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Animations and Motion UI Components | ReactUI Library",
  description:
    "Micro-interactions, loading states, hover effects, and kinetic motion patterns for modern interfaces.",
  keywords: [
    "ui animations",
    "motion ui",
    "micro interactions",
    "loading states",
    "react animation components"
  ],
  openGraph: {
    title: "Animations and Motion UI Components | ReactUI Library",
    description:
      "Micro-interactions, loading states, hover effects, and kinetic motion patterns for modern interfaces.",
    url: "https://yoursite.com/showcase/animations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animations and Motion UI Components | ReactUI Library",
    description:
      "Micro-interactions, loading states, hover effects, and kinetic motion patterns for modern interfaces.",
  },
};

export default function AnimationsShowcase() {
  return <View />;
}
