import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Neumorphism UI Components | ReactUI Library";
const description = "Soft UI surfaces, embossed elements, clay-like controls, and neumorphic depth patterns.";
const path = "/showcase/neumorphism";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "neumorphism ui",
    "soft ui",
    "embossed design",
    "clay ui",
    "neumorphic components"
  ],
});

export default function NeumorphismShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Neumorphism", path: "/showcase/neumorphism" },
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