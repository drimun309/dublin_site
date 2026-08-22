import Link from "next/link";
import { getService, homeServiceSlugs } from "@/entities/service";
import { Reveal } from "@/shared/ui";

export function HomeServices() {
  return (
    <section className="services" id="services">
      <div className="service-slot">
        <div className="services-brick">
          <div className="services-head-wall" aria-hidden="true"></div>
          <div className="section-head services-head">
            <div className="services-head-copy">
              <Reveal>
                <p className="eyebrow">What we do</p>
              </Reveal>
              <Reveal>
                <h2>
                  <Link href="/services" className="section-title-link">
                    Core services
                  </Link>
                </h2>
              </Reveal>
              <Reveal>
                <p className="section-lead">
                  Jobs Dublin homes call us for most. Need something else?{" "}
                  <Link className="services-head-link" href="/services">
                    See the full list
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>

          <div className="service-grid">
            {homeServiceSlugs.map((slug, index) => {
              const service = getService(slug);
              const card = service.homeCard;
              if (!card) return null;
              return (
                <Reveal key={slug} style={{ ["--i" as string]: index }}>
                  <article className="service-card">
                    <Link className="service-card-media" href={`/services#${slug}`}>
                      <img src={card.src} alt={card.alt} loading="lazy" width={500} height={350} decoding="async" />
                    </Link>
                    <div className="service-card-body">
                      <h3>
                        <Link href={`/services#${slug}`}>{service.shortTitle}</Link>
                      </h3>
                      <p>{card.summary}</p>
                      <Link className="service-more" href={`/services#${slug}`}>
                        Read more <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="services-all">
              <Link className="btn btn-ghost-ink" href="/services">
                View all services
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
