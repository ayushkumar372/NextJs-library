import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Glassmorphism UI Components | ReactUI Library",
  description:
    "Frosted glass effects, blur backgrounds, transparent overlays, and modern glassmorphism UI patterns.",
  keywords: [
    "glassmorphism ui",
    "frosted glass",
    "blur background",
    "transparent cards",
    "react glass ui"
  ],
  openGraph: {
    title: "Glassmorphism UI Components | ReactUI Library",
    description:
      "Frosted glass effects, blur backgrounds, transparent overlays, and modern glassmorphism UI patterns.",
    url: "https://yoursite.com/showcase/glassmorphism",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glassmorphism UI Components | ReactUI Library",
    description:
      "Frosted glass effects, blur backgrounds, transparent overlays, and modern glassmorphism UI patterns.",
  },
};

export default function GlassmorphismShowcase() {
  return <View />;
}