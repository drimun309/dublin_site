"use client";

import { useEffect, useRef } from "react";
import type { GalleryImage as GalleryImageType } from "@/entities/service";
import { GalleryImage } from "@/shared/ui";

export function GalleryRail({ images }: { images: GalleryImageType[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;
    if (!rail || !prev || !next) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = () => {
      const item = rail.querySelector(".gallery-item");
      return item ? item.getBoundingClientRect().width + 16 : rail.clientWidth * 0.8;
    };
    const sync = () => {
      prev.disabled = rail.scrollLeft <= 8;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
    };
    const go = (dir: number) => {
      rail.scrollBy({ left: dir * step(), behavior: reduceMotion ? "auto" : "smooth" });
    };

    const onPrev = () => go(-1);
    const onNext = () => go(1);
    prev.addEventListener("click", onPrev);
    next.addEventListener("click", onNext);
    rail.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => {
      prev.removeEventListener("click", onPrev);
      next.removeEventListener("click", onNext);
      rail.removeEventListener("scroll", sync);
    };
  }, []);

  return (
    <section className="home-gallery" id="gallery">
      <div className="section-head services-head">
        <div className="services-head-copy">
          <p className="eyebrow">Our gallery</p>
          <h2>Before and after.</h2>
        </div>
      </div>
      <div className="gallery-rail" ref={railRef}>
        {images.map((image) => (
          <GalleryImage src={image.src} alt={image.alt} key={image.src} />
        ))}
      </div>
      <div className="gallery-nav">
        <button type="button" className="gallery-nav-btn" ref={prevRef} aria-label="Previous photos">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="gallery-nav-btn" ref={nextRef} aria-label="Next photos">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
