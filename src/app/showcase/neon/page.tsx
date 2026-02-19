import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Neon UI Components | ReactUI Library",
  description:
    "Neon glow effects, electric typography, cyberpunk cards, and dark interface components with vivid accents.",
  keywords: [
    "neon ui",
    "glow effects",
    "cyberpunk design",
    "dark ui",
    "neon components"
  ],
  openGraph: {
    title: "Neon UI Components | ReactUI Library",
    description:
      "Neon glow effects, electric typography, cyberpunk cards, and dark interface components with vivid accents.",
    url: "https://yoursite.com/showcase/neon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon UI Components | ReactUI Library",
    description:
      "Neon glow effects, electric typography, cyberpunk cards, and dark interface components with vivid accents.",
  },
};

export default function NeonShowcase() {
  return <View />;
}