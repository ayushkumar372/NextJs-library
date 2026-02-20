import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Hero Section UI Components | ReactUI Library";
const description = "Landing page hero designs with gradients, split layouts, visual effects, and high-conversion call-to-actions.";
const path = "/showcase/heroes";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "hero section ui",
    "landing page hero",
    "cta section",
    "react hero components",
    "marketing ui"
  ],
});

export default function HeroesShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Hero Sections", path: "/showcase/heroes" },
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