import Link from "next/link";
import { homeGalleryImages } from "@/entities/service";
import { site } from "@/shared/config";
import { Reveal } from "@/shared/ui";
import { Craft } from "@/widgets/craft";
import { Faq } from "@/widgets/faq";
import { GalleryRail } from "@/widgets/gallery-rail";
import { Hero } from "@/widgets/hero";
import { ProcessSteps } from "@/widgets/process-steps";
import { QuoteForm } from "@/widgets/quote-form";
import { HomeServices } from "@/widgets/service-card";

export function HomePage() {
  return (
    <>
      <Hero />
      <section className="intro" id="intro">
        <div className="intro-wall" aria-hidden="true"></div>
        <div className="intro-grid">
          <div className="intro-copy">
            <Reveal>
              <h2>
                Restoration &amp; chemical cleaning
                <br />
                for the <em>beauty</em> of your home.
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Dublin Restoration is a contemporary façade practice. We restore brick and chemically clean Dublin
                homes with methods and materials chosen for the wall — so the work lasts, and the house looks like
                itself, only clearer.
              </p>
            </Reveal>
            <Reveal>
              <div className="intro-cta">
                <Link className="btn btn-solid" href="/#quote">
                  Request a free quote
                </Link>
                <Link className="btn btn-ghost" href="/services">
                  View services
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="intro-visual">
            <div className="intro-logo-wrap">
              <span className="intro-logo-dirt" aria-hidden="true"></span>
              <img src={site.logo} alt="Dublin Restoration" width={400} height={400} decoding="async" />
            </div>
          </Reveal>
        </div>
      </section>
      <HomeServices />
      <Craft />
      <ProcessSteps />
      <GalleryRail images={homeGalleryImages()} />
      <Faq />
      <QuoteForm sourcePage="home" />
    </>
  );
}
