import type { Metadata } from "next";
import View from "./view";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "Premium Form UI Components | ReactUI Library";
const description = "Premium form layouts including floating labels, multi-step flows, dark forms, and animated inputs.";
const path = "/showcase/premium-forms";

export const metadata: Metadata = buildPageMetadata({
  path,
  title,
  description,
  keywords: [
    "form components",
    "premium forms",
    "multi step form",
    "floating labels",
    "react form ui"
  ],
});

export default function PremiumFormsShowcase() {
  const jsonLd = buildWebPageJsonLd({
    path,
    title,
    description,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Showcase", path: "/showcase" },
    { name: "Premium Forms", path: "/showcase/premium-forms" },
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