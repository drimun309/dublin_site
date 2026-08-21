"use client";

import { useEffect, useRef } from "react";
import type { GalleryImage } from "@/entities/service";

export function GalleryRail({ images }: { images: GalleryImage[] }) {
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
          <a className="gallery-item" href={image.src} target="_blank" rel="noopener" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </a>
        ))}
      </div>
      <div className="gallery-nav">
        <button type="button" ref={prevRef} aria-label="Previous photos">
          ‹
        </button>
        <button type="button" ref={nextRef} aria-label="Next photos">
          ›
        </button>
      </div>
    </section>
  );
}
