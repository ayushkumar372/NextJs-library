import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Navigation UI Components | ReactUI Library";
const description = "Transparent, glass, floating, sidebar, and command-palette navigation patterns for web apps.";
const path = "/showcase/navbars";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "navbar ui",
    "navigation components",
    "sidebar navigation",
    "mega menu",
    "react navbar"
  ],
});

export default function NavbarsShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Navigation", path: "/showcase/navbars" },
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