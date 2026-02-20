import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Premium Button UI Components | ReactUI Library";
const description = "A curated collection of premium button styles including gradient, neon, glass, and animated variants.";
const path = "/showcase/premium-buttons";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "button components",
    "premium buttons",
    "cta buttons",
    "animated buttons",
    "react button ui"
  ],
});

export default function PremiumButtonsShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Premium Buttons", path: "/showcase/premium-buttons" },
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