import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, getServiceLanding, isSeoServiceSlug, seoServiceSlugs } from "@/entities/service";
import { site } from "@/shared/config";
import { JsonLd } from "@/shared/ui";
import { ServiceLandingPage } from "@/views/service-landing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isSeoServiceSlug(slug)) return {};

  const landing = getServiceLanding(slug);
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      url: `/services/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!isSeoServiceSlug(slug)) notFound();
  const landing = getServiceLanding(slug);
  const service = getService(slug);
  const url = `${site.url}/services/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: landing.h1,
        serviceType: service.title,
        description: landing.metaDescription,
        url,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "AdministrativeArea", name: site.areaServed },
      },
      {
        "@type": "FAQPage",
        mainEntity: landing.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: service.shortTitle, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceLandingPage landing={landing} />
    </>
  );
}
