"use client";

import { useEffect } from "react";
import { craftImages } from "@/entities/service";
import { Reveal } from "@/shared/ui";

export function Craft() {
  const photo = craftImages()[0];

  useEffect(() => {
    const img = document.querySelector<HTMLImageElement>(".craft-visual img");
    if (!img) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      if (reduceMotion) return;
      const box = img.getBoundingClientRect();
      const mid = box.top + box.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-18, Math.min(18, mid * -0.04));
      img.style.setProperty("--parallax-y", `${shift.toFixed(1)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="craft" id="craft">
      <div className="craft-grid">
        <div className="craft-visual">
          {photo ? (
            <img src={photo.src} alt={photo.alt} width={800} height={1000} decoding="async" />
          ) : null}
          <div className="craft-caption">
            <span>On site</span>
            <strong>Own crew. No subcontractors.</strong>
          </div>
        </div>
        <div className="craft-copy">
          <Reveal>
            <p className="eyebrow">The craft</p>
          </Reveal>
          <Reveal>
            <h2>Materials matched to the wall — not a one-mix-fits-all job.</h2>
          </Reveal>
          <Reveal>
            <p>
              Period brick in Dublin fails when the pointing is harder than the brick, or when dirt holds water
              against the face. We choose lime and traditional premixes for the façade in front of us, then finish
              so the repair disappears into the elevation.
            </p>
          </Reveal>
          <ul className="craft-points">
            <li>
              <strong>Mortar matching</strong>
              <span>Colour, texture and joint profile set out before the first bag is mixed.</span>
            </li>
            <li>
              <strong>Cleaning without scar</strong>
              <span>Chemistry first, pressure last — see the wash on the video below.</span>
            </li>
            <li>
              <strong>Work that lasts a winter</strong>
              <span>Irish weather is the test. We build for that, then hand over with photos.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="craft-videos">
        <video
          poster="/assets/brick-build-poster.jpg"
          src="/assets/brick-build.mp4"
          controls
          playsInline
          preload="metadata"
        />
        <video
          poster="/assets/brick-pressure-wash-poster.jpg"
          src="/assets/brick-pressure-wash.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
