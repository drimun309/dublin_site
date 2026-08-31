"use client";

import Link from "next/link";
import { useGalleryFilter } from "@/features/gallery-filter";
import { GalleryImage } from "@/shared/ui";

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
          <h1>Brick Restoration Projects in Dublin</h1>
          <p className="section-lead">
            Before-and-after examples of repointing, brick repair, chimney work and masonry cleaning. Filter by
            service and tap a picture to enlarge it.
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
          <GalleryImage src={image.src} alt={image.alt} key={image.src} />
        ))}
      </div>
    </div>
  );
}
