import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Premium Form UI Components | ReactUI Library",
  description:
    "Premium form layouts including floating labels, multi-step flows, dark forms, and animated inputs.",
  keywords: [
    "form components",
    "premium forms",
    "multi step form",
    "floating labels",
    "react form ui"
  ],
  openGraph: {
    title: "Premium Form UI Components | ReactUI Library",
    description:
      "Premium form layouts including floating labels, multi-step flows, dark forms, and animated inputs.",
    url: "https://yoursite.com/showcase/premium-forms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Form UI Components | ReactUI Library",
    description:
      "Premium form layouts including floating labels, multi-step flows, dark forms, and animated inputs.",
  },
};

export default function PremiumFormsShowcase() {
  return <View />;
}