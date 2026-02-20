import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `Documentation | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Read setup guides, theming docs, API references, and integration tutorials for ReactUI Library.",
  openGraph: {
    title: `Documentation | ${SITE_NAME}`,
    description:
      "Read setup guides, theming docs, API references, and integration tutorials for ReactUI Library.",
    type: "website",
    siteName: SITE_NAME,
    url: "/docs",
  },
  twitter: {
    card: "summary_large_image",
    title: `Documentation | ${SITE_NAME}`,
    description:
      "Read setup guides, theming docs, API references, and integration tutorials for ReactUI Library.",
  },
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
