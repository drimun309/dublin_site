import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Sora } from "next/font/google";
import { ContactClickTracker, GoogleAnalytics } from "@/features/analytics";
import { CookieBanner } from "@/features/cookie-consent";
import { site } from "@/shared/config";
import { JsonLd, PageBodyClass } from "@/shared/ui";
import "@/shared/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brick Repointing & Restoration Dublin | Dublin Restoration",
    template: "%s — Dublin Restoration",
  },
  description: site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Brick Repointing & Restoration Dublin | Dublin Restoration",
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_IE",
    type: "website",
    images: [{ url: site.socialImage, width: 1280, height: 720, alt: "Dublin brick house restoration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brick Repointing & Restoration Dublin | Dublin Restoration",
    description: site.description,
    images: [site.socialImage],
  },
  icons: { icon: "/favicon.ico" },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const themeScript = `(()=>{const s=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",s||"light");})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    image: `${site.url}${site.socialImage}`,
    logo: `${site.url}${site.logo}`,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    areaServed: { "@type": "AdministrativeArea", name: site.areaServed },
    openingHours: "Mo-Su 08:00-18:00",
    sameAs: [site.instagram],
  };

  return (
    <html lang="en-IE" className={`${sora.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <JsonLd data={businessJsonLd} />
        <GoogleAnalytics />
        <ContactClickTracker />
        <PageBodyClass />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
