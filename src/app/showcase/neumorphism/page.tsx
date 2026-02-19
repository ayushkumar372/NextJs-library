import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Neumorphism UI Components | ReactUI Library",
  description:
    "Soft UI surfaces, embossed elements, clay-like controls, and neumorphic depth patterns.",
  keywords: [
    "neumorphism ui",
    "soft ui",
    "embossed design",
    "clay ui",
    "neumorphic components"
  ],
  openGraph: {
    title: "Neumorphism UI Components | ReactUI Library",
    description:
      "Soft UI surfaces, embossed elements, clay-like controls, and neumorphic depth patterns.",
    url: "https://yoursite.com/showcase/neumorphism",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neumorphism UI Components | ReactUI Library",
    description:
      "Soft UI surfaces, embossed elements, clay-like controls, and neumorphic depth patterns.",
  },
};

export default function NeumorphismShowcase() {
  return <View />;
}