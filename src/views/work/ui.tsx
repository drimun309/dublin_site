"use client";

import Link from "next/link";
import { useGalleryFilter } from "@/features/gallery-filter";

export function WorkPage() {
  const { filter, setFilter, images, options } = useGalleryFilter();

  return (
    <div className="work-page">
      <section className="services-page-hero">
        <div className="services-page-hero-inner">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <span>Our work</span>
          </p>
          <p className="eyebrow">Gallery</p>
          <h1>Our work</h1>
          <p className="section-lead">
            Every job photo we keep — filter by service. Open a picture for the full size.
          </p>
        </div>
      </section>
      <div className="work-filters">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={filter === option.id ? "is-active" : ""}
            onClick={() => setFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {images.map((image) => (
          <a className="gallery-item" href={image.src} target="_blank" rel="noopener" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </a>
        ))}
      </div>
    </div>
  );
}
