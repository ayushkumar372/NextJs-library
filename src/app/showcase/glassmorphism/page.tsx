import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Glassmorphism UI Components | ReactUI Library";
const description = "Frosted glass effects, blur backgrounds, transparent overlays, and modern glassmorphism UI patterns.";
const path = "/showcase/glassmorphism";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "glassmorphism ui",
    "frosted glass",
    "blur background",
    "transparent cards",
    "react glass ui"
  ],
});

export default function GlassmorphismShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Glassmorphism", path: "/showcase/glassmorphism" },
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