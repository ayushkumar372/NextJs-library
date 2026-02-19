import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Premium Button UI Components | ReactUI Library",
  description:
    "A curated collection of premium button styles including gradient, neon, glass, and animated variants.",
  keywords: [
    "button components",
    "premium buttons",
    "cta buttons",
    "animated buttons",
    "react button ui"
  ],
  openGraph: {
    title: "Premium Button UI Components | ReactUI Library",
    description:
      "A curated collection of premium button styles including gradient, neon, glass, and animated variants.",
    url: "https://yoursite.com/showcase/premium-buttons",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Button UI Components | ReactUI Library",
    description:
      "A curated collection of premium button styles including gradient, neon, glass, and animated variants.",
  },
};

export default function PremiumButtonsShowcase() {
  return <View />;
}