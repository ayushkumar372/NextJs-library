import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Animations and Motion UI Components | ReactUI Library";
const description = "Micro-interactions, loading states, hover effects, and kinetic motion patterns for modern interfaces.";
const path = "/showcase/animations";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "ui animations",
    "motion ui",
    "micro interactions",
    "loading states",
    "react animation components"
  ],
});

export default function AnimationsShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Animations and Motion", path: "/showcase/animations" },
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