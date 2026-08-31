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
                Protect the character of your home
                <br />
                and keep <em>Dublin weather</em> out.
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Failed mortar and damaged brick allow water into the wall. We diagnose the cause, match the materials
                to your façade, and repair only what is needed — from lime repointing and brick restoration to careful
                masonry cleaning.
              </p>
            </Reveal>
            <Reveal>
              <div className="intro-cta">
                <Link className="btn btn-solid" href="/#quote">
                  Send Photos for a Free Assessment
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
      <Craft />
      <HomeServices />
      <ProcessSteps />
      <GalleryRail images={homeGalleryImages()} />
      <Faq />
      <QuoteForm sourcePage="home" />
    </>
  );
}
