import Link from "next/link";
import { getServicesPageServices } from "@/entities/service";
import { ServiceFull } from "@/widgets/service-full";

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
          <h1>Our Services</h1>
          <p className="section-lead">
            Masonry, damp and cleaning for Dublin homes and commercial buildings — priced on site, finished
            properly.
          </p>
          <nav className="services-jump" aria-label="Jump to service">
            {pageServices.map((service) => (
              <a key={service.slug} href={`#${service.slug}`}>
                {service.shortTitle}
              </a>
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
