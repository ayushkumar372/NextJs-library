import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Design Showcase | ReactUI Library";
const description = "Explore premium UI design themes including glassmorphism, gaming, neon, gradients, 3D, forms, cards, buttons, and more.";
const path = "/showcase";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "design showcase",
    "react ui library",
    "ui patterns",
    "tailwind components",
    "premium ui"
  ],
});

export default function ShowcasePage() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
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