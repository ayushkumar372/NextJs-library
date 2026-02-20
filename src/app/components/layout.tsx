import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `Components | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Browse production-ready React components for buttons, cards, forms, navigation, overlays, and more.",
  openGraph: {
    title: `Components | ${SITE_NAME}`,
    description:
      "Browse production-ready React components for buttons, cards, forms, navigation, overlays, and more.",
    type: "website",
    siteName: SITE_NAME,
    url: "/components",
  },
  twitter: {
    card: "summary_large_image",
    title: `Components | ${SITE_NAME}`,
    description:
      "Browse production-ready React components for buttons, cards, forms, navigation, overlays, and more.",
  },
};

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
