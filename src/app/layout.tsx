import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Sora } from "next/font/google";
import { ContactClickTracker, GoogleAnalytics } from "@/features/analytics";
import { CookieBanner } from "@/features/cookie-consent";
import { PageBodyClass } from "@/shared/ui";
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
    default: "Dublin Restoration — Brick · Damp · Cleaning",
    template: "%s — Dublin Restoration",
  },
  description:
    "Trusted Dublin tradesmen for brick restoration, repointing, damp proofing, roofing and chemical cleaning. Free on-site quote.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.dublinrestoration.ie"),
  openGraph: {
    title: "Dublin Restoration — Brick · Damp · Cleaning",
    description:
      "Brick restoration, repointing, damp proofing, roofing and chemical cleaning in Dublin. Free on-site quote.",
    locale: "en_IE",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const themeScript = `(()=>{const s=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",s||"light");})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <GoogleAnalytics />
        <ContactClickTracker />
        <PageBodyClass />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
