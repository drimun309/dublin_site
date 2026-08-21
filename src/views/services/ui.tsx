import Link from "next/link";
import { services } from "@/entities/service";
import { QuoteForm } from "@/widgets/quote-form";
import { ServiceFull } from "@/widgets/service-full";

export function ServicesPage() {
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
            Masonry, damp, roofing and cleaning for Dublin homes and commercial buildings — priced on site, finished
            properly.
          </p>
          <nav className="services-jump" aria-label="Jump to service">
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`}>
                {service.shortTitle}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="services services-page">
        <div className="services-full-wrap">
          {services.map((service) => (
            <ServiceFull key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <QuoteForm sourcePage="services" />
    </>
  );
}
