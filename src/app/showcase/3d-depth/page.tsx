import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "3D and Depth UI Components | ReactUI Library";
const description = "Perspective transforms, parallax cards, layered depth, floating elements, and spatial UI component patterns.";
const path = "/showcase/3d-depth";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "3d ui",
    "parallax cards",
    "depth effects",
    "react components",
    "spatial ui"
  ],
});

export default function ThreeDDepthShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "3D and Depth", path: "/showcase/3d-depth" },
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