import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = {
  title: "Gaming UI Components | ReactUI Library",
  description:
    "HUD overlays, health bars, score counters, gaming dashboards, and cyberpunk-inspired UI components.",
  keywords: [
    "gaming ui",
    "hud components",
    "react gaming",
    "cyberpunk ui",
    "game dashboard"
  ],
  openGraph: {
    title: "Gaming UI Components | ReactUI Library",
    description:
      "HUD overlays, health bars, score counters, gaming dashboards, and cyberpunk-inspired UI components.",
    url: "https://uidrop.dev/showcase/gaming",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming UI Components | ReactUI Library",
    description:
      "HUD overlays, health bars, score counters, gaming dashboards, and cyberpunk-inspired UI components.",
  },
};

export default function GamingPage() {
  return <View />;
}