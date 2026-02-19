import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Hero Section UI Components | ReactUI Library",
  description:
    "Landing page hero designs with gradients, split layouts, visual effects, and high-conversion call-to-actions.",
  keywords: [
    "hero section ui",
    "landing page hero",
    "cta section",
    "react hero components",
    "marketing ui"
  ],
  openGraph: {
    title: "Hero Section UI Components | ReactUI Library",
    description:
      "Landing page hero designs with gradients, split layouts, visual effects, and high-conversion call-to-actions.",
    url: "https://yoursite.com/showcase/heroes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Section UI Components | ReactUI Library",
    description:
      "Landing page hero designs with gradients, split layouts, visual effects, and high-conversion call-to-actions.",
  },
};

export default function HeroesShowcase() {
  return <View />;
}