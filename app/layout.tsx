import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants/company";

// Using the system font stack (defined in globals.css) instead of next/font/google
// so the build does not depend on reaching fonts.googleapis.com. Swap in a
// self-hosted or Google font via next/font/local or next/font/google once the
// deployment environment has network access, if a custom typeface is desired.

const SITE_URL = "https://www.surynetraenergy.com"; // TODO: replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | Solar EPC, RESCO & Open Access Solutions`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Surynetra Energy Private Limited delivers Solar EPC, RESCO and Open Access renewable power solutions for industrial and commercial businesses across India.",
  keywords: [
    "Solar EPC India",
    "Solar EPC company",
    "RESCO solar",
    "RESCO solar company",
    "Open Access solar",
    "Open Access renewable energy",
    "C&I solar",
    "Commercial solar solutions",
    "Industrial solar EPC",
    "Renewable energy company India",
  ],
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Powering Business. Enabling Clean Growth.`,
    description:
      "Solar EPC, RESCO and Open Access solutions for industrial and commercial businesses across India.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Powering Business. Enabling Clean Growth.`,
    description:
      "Solar EPC, RESCO and Open Access solutions for industrial and commercial businesses across India.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: COMPANY.legalName,
        url: SITE_URL,
        email: COMPANY.email,
        telephone: COMPANY.phone,
      },
      {
        "@type": "WebSite",
        name: COMPANY.name,
        url: SITE_URL,
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
