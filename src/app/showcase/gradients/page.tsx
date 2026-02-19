import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Gradient UI Components | ReactUI Library",
  description:
    "Mesh gradients, animated borders, gradient text, aurora effects, and color transition UI patterns.",
  keywords: [
    "gradient ui",
    "mesh gradients",
    "gradient text",
    "animated gradients",
    "react gradient components"
  ],
  openGraph: {
    title: "Gradient UI Components | ReactUI Library",
    description:
      "Mesh gradients, animated borders, gradient text, aurora effects, and color transition UI patterns.",
    url: "https://yoursite.com/showcase/gradients",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gradient UI Components | ReactUI Library",
    description:
      "Mesh gradients, animated borders, gradient text, aurora effects, and color transition UI patterns.",
  },
};

export default function GradientsShowcase() {
  return <View />;
}