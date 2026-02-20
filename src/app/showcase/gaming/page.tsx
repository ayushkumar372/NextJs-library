import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Gaming UI Components | ReactUI Library";
const description = "HUD overlays, health bars, score counters, gaming dashboards, and cyberpunk-inspired UI components.";
const path = "/showcase/gaming";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "gaming ui",
    "hud components",
    "react gaming",
    "cyberpunk ui",
    "game dashboard"
  ],
});

export default function GamingPage() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Gaming", path: "/showcase/gaming" },
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