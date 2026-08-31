import Link from "next/link";
import { getServicesPageServices, isSeoServiceSlug } from "@/entities/service";
import { ServiceFull } from "@/widgets/service-full";

function serviceHref(slug: string) {
  return isSeoServiceSlug(slug) ? `/services/${slug}` : `#${slug}`;
}

export function ServicesPage() {
  const pageServices = getServicesPageServices();

  return (
    <>
      <section className="services-page-hero">
        <div className="services-page-hero-inner">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <span>Our Services</span>
          </p>
          <p className="eyebrow">What we do</p>
          <h1>Brick Restoration Services in Dublin</h1>
          <p className="section-lead">
            Repointing, brick and chimney restoration, fireplace work and careful masonry cleaning for Dublin homes
            and commercial buildings.
          </p>
          <nav className="services-jump" aria-label="Jump to service">
            {pageServices.map((service) => (
              <Link key={service.slug} href={serviceHref(service.slug)}>
                {service.shortTitle}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="services services-page">
        <div className="services-full-wrap">
          {pageServices.map((service) => (
            <ServiceFull key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
