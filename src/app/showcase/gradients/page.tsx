import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Gradient UI Components | ReactUI Library";
const description = "Mesh gradients, animated borders, gradient text, aurora effects, and color transition UI patterns.";
const path = "/showcase/gradients";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "gradient ui",
    "mesh gradients",
    "gradient text",
    "animated gradients",
    "react gradient components"
  ],
});

export default function GradientsShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Gradients", path: "/showcase/gradients" },
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