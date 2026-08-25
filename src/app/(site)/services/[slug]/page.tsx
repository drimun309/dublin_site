import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceLanding, isSeoServiceSlug, seoServiceSlugs } from "@/entities/service/landing";
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
  return <ServiceLandingPage landing={getServiceLanding(slug)} />;
}
