import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Premium Card UI Components | ReactUI Library",
  description:
    "Premium card designs for testimonials, products, dashboards, pricing, and interactive experiences.",
  keywords: [
    "card components",
    "premium cards",
    "testimonial cards",
    "product cards",
    "react card ui"
  ],
  openGraph: {
    title: "Premium Card UI Components | ReactUI Library",
    description:
      "Premium card designs for testimonials, products, dashboards, pricing, and interactive experiences.",
    url: "https://yoursite.com/showcase/premium-cards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Card UI Components | ReactUI Library",
    description:
      "Premium card designs for testimonials, products, dashboards, pricing, and interactive experiences.",
  },
};

export default function PremiumCardsShowcase() {
  return <View />;
}