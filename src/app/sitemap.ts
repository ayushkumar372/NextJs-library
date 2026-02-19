import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const ROUTES: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },

  { path: "/showcase", changeFrequency: "weekly", priority: 0.9 },
  { path: "/showcase/premium-buttons", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/glassmorphism", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/gaming", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/neon", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/gradients", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/premium-cards", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/premium-forms", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/animations", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/3d-depth", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/heroes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/navbars", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase/neumorphism", changeFrequency: "weekly", priority: 0.8 },

  { path: "/components", changeFrequency: "weekly", priority: 0.8 },
  { path: "/components/buttons", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/cards", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/forms", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/navigation", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/data-display", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/feedback", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/layout", changeFrequency: "weekly", priority: 0.7 },
  { path: "/components/overlay", changeFrequency: "weekly", priority: 0.7 },

  { path: "/docs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/docs/getting-started", changeFrequency: "monthly", priority: 0.7 },
  { path: "/docs/installation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/docs/theming", changeFrequency: "monthly", priority: 0.6 },
  { path: "/docs/api-reference", changeFrequency: "monthly", priority: 0.6 },

  { path: "/examples", changeFrequency: "monthly", priority: 0.7 },
  { path: "/examples/dashboard", changeFrequency: "monthly", priority: 0.6 },
  { path: "/examples/ecommerce", changeFrequency: "monthly", priority: 0.6 },
  { path: "/examples/authentication", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
