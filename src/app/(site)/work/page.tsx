import type { Metadata } from "next";
import { site } from "@/shared/config";
import { JsonLd } from "@/shared/ui";
import { WorkPage } from "@/views/work";

export const metadata: Metadata = {
  title: "Brick Restoration Projects in Dublin",
  description:
    "Before-and-after photos of brick restoration, lime repointing, chimney repair and masonry cleaning projects across Dublin.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Brick Restoration Projects in Dublin",
    description:
      "Before-and-after photos of brick restoration, lime repointing, chimney repair and masonry cleaning projects across Dublin.",
    url: "/work",
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
            { "@type": "ListItem", position: 2, name: "Our work", item: `${site.url}/work` },
          ],
        }}
      />
      <WorkPage />
    </>
  );
}
