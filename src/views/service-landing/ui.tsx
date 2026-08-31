import Link from "next/link";
import { getService, imagesForService } from "@/entities/service";
import type { ServiceLanding } from "@/entities/service/landing";
import { GalleryImage, Reveal } from "@/shared/ui";
import { QuoteForm } from "@/widgets/quote-form";

export function ServiceLandingPage({ landing }: { landing: ServiceLanding }) {
  const service = getService(landing.slug);
  const photos = imagesForService(landing.slug, true).slice(0, 8);
  const fallbackPhotos = photos.length ? photos : imagesForService(landing.slug).slice(0, 8);

  return (
    <>
      <section className="services-page-hero service-landing-hero">
        <div className="services-page-hero-inner">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>{service.shortTitle}</span>
          </p>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{landing.h1}</h1>
          <p className="section-lead">{landing.lead}</p>
          <div className="intro-cta">
            <Link className="btn btn-solid" href="#quote">
              Send Photos for a Free Assessment
            </Link>
            <Link className="btn btn-ghost" href="/work">
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section className="service-landing-section">
        <div className="service-landing-inner service-landing-split">
          <Reveal>
            <div className="service-landing-media">
              <img src={service.hero} alt={service.heroAlt} loading="eager" decoding="async" />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="eyebrow">The problem</p>
              <h2>{landing.problem.title}</h2>
              <p className="service-landing-copy">{landing.problem.intro}</p>
              <ul className="service-landing-list">
                {landing.problem.signs.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="service-landing-section service-landing-section-alt">
        <div className="service-landing-inner">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2>{landing.process.title}</h2>
          </Reveal>
          <div className="service-landing-steps">
            {landing.process.steps.map((step, index) => (
              <Reveal key={step.title} style={{ ["--i" as string]: index }}>
                <article className="service-landing-step">
                  <span className="service-landing-step-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-landing-section">
        <div className="service-landing-inner service-landing-split">
          <Reveal>
            <div>
              <p className="eyebrow">Materials & methods</p>
              <h2>{landing.materials.title}</h2>
              <p className="service-landing-copy">{landing.materials.intro}</p>
              <ul className="service-landing-list">
                {landing.materials.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="service-landing-panel">
              <p className="service-landing-panel-kicker">Why Dublin Restoration</p>
              <ul className="craft-points">
                <li>
                  <strong>10 years in Dublin</strong>
                  <span>A decade of brick restoration, lime repointing and façade work on Dublin homes.</span>
                </li>
                <li>
                  <strong>Dedicated in-house team</strong>
                  <span>We never subcontract. Our own craftsmen carry out the work on site.</span>
                </li>
                <li>
                  <strong>Itemised quotations</strong>
                  <span>Clear scope, materials, access and expected timescale before work begins.</span>
                </li>
                <li>
                  <strong>1-year workmanship warranty</strong>
                  <span>We stand behind our restoration work with a standard guarantee.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {fallbackPhotos.length ? (
        <section className="service-landing-section service-landing-section-alt">
          <div className="service-landing-inner">
            <Reveal>
              <p className="eyebrow">Our work</p>
              <h2>Recent {service.shortTitle.toLowerCase()} projects</h2>
            </Reveal>
            <div className="gallery-grid service-landing-gallery">
              {fallbackPhotos.map((image) => (
                <GalleryImage src={image.src} alt={image.alt} key={image.src} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="service-landing-section">
        <div className="service-landing-inner">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </Reveal>
          <div className="faq-list">
            {landing.faq.map((item) => (
              <Reveal key={item.q}>
                <details className="faq-item">
                  <summary>{item.q}</summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm sourcePage={`service/${landing.slug}`} />
    </>
  );
}
