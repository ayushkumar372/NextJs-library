import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `Examples | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Explore complete UI examples including dashboards, ecommerce interfaces, and authentication flows built with ReactUI.",
  openGraph: {
    title: `Examples | ${SITE_NAME}`,
    description:
      "Explore complete UI examples including dashboards, ecommerce interfaces, and authentication flows built with ReactUI.",
    type: "website",
    siteName: SITE_NAME,
    url: "/examples",
  },
  twitter: {
    card: "summary_large_image",
    title: `Examples | ${SITE_NAME}`,
    description:
      "Explore complete UI examples including dashboards, ecommerce interfaces, and authentication flows built with ReactUI.",
  },
};

export default function ExamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
