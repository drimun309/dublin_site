import type { Metadata } from "next";
import { site } from "@/shared/config";
import { JsonLd } from "@/shared/ui";
import { ServicesPage } from "@/views/services";

export const metadata: Metadata = {
  title: "Brick Restoration Services in Dublin",
  description:
    "Brick repointing, restoration, chimney repair, fireplace work and careful masonry cleaning for period and modern Dublin properties.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Brick Restoration Services in Dublin",
    description:
      "Brick repointing, restoration, chimney repair, fireplace work and careful masonry cleaning for period and modern Dublin properties.",
    url: "/services",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          ],
        }}
      />
      <ServicesPage />
    </>
  );
}
