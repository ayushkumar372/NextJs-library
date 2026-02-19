import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Navigation UI Components | ReactUI Library",
  description:
    "Transparent, glass, floating, sidebar, and command-palette navigation patterns for web apps.",
  keywords: [
    "navbar ui",
    "navigation components",
    "sidebar navigation",
    "mega menu",
    "react navbar"
  ],
  openGraph: {
    title: "Navigation UI Components | ReactUI Library",
    description:
      "Transparent, glass, floating, sidebar, and command-palette navigation patterns for web apps.",
    url: "https://yoursite.com/showcase/navbars",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navigation UI Components | ReactUI Library",
    description:
      "Transparent, glass, floating, sidebar, and command-palette navigation patterns for web apps.",
  },
};

export default function NavbarsShowcase() {
  return <View />;
}