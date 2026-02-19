import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://uidrop.dev";

function normalizeSiteUrl(rawUrl: string): string {
  return rawUrl.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
);
export const SITE_NAME = "ReactUI Library";
export const DEFAULT_TITLE = "ReactUI Library - Beautiful React Components";
export const DEFAULT_DESCRIPTION =
  "A comprehensive React component library with beautiful design, accessibility, and developer experience.";

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type SeoInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
};

export function buildPageMetadata({
  path,
  title,
  description,
  keywords = [],
}: SeoInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

type WebPageSchemaInput = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export function buildWebPageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
}: WebPageSchemaInput) {
  const pageUrl = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      },
    ],
  };
}
