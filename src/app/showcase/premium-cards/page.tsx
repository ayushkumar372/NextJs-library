import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Premium Card UI Components | ReactUI Library";
const description = "Premium card designs for testimonials, products, dashboards, pricing, and interactive experiences.";
const path = "/showcase/premium-cards";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "card components",
    "premium cards",
    "testimonial cards",
    "product cards",
    "react card ui"
  ],
});

export default function PremiumCardsShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Premium Cards", path: "/showcase/premium-cards" },
  ],  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <View />
    </>
  );
}