import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Neon UI Components | ReactUI Library";
const description = "Neon glow effects, electric typography, cyberpunk cards, and dark interface components with vivid accents.";
const path = "/showcase/neon";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "neon ui",
    "glow effects",
    "cyberpunk design",
    "dark ui",
    "neon components"
  ],
});

export default function NeonShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Neon", path: "/showcase/neon" },
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