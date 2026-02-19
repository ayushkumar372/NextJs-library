import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "3D and Depth UI Components | ReactUI Library",
  description:
    "Perspective transforms, parallax cards, layered depth, floating elements, and spatial UI component patterns.",
  keywords: [
    "3d ui",
    "parallax cards",
    "depth effects",
    "react components",
    "spatial ui"
  ],
  openGraph: {
    title: "3D and Depth UI Components | ReactUI Library",
    description:
      "Perspective transforms, parallax cards, layered depth, floating elements, and spatial UI component patterns.",
    url: "https://yoursite.com/showcase/3d-depth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D and Depth UI Components | ReactUI Library",
    description:
      "Perspective transforms, parallax cards, layered depth, floating elements, and spatial UI component patterns.",
  },
};

export default function ThreeDDepthShowcase() {
  return <View />;
}