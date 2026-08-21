"use client";

import Link from "next/link";
import type { Service } from "@/entities/service";
import { imagesForService } from "@/entities/service";
import { useServiceReadMore } from "@/features/service-read-more";

export function ServiceFull({ service }: { service: Service }) {
  const { copyRef, mediaRef, bodyRef, expanded, clamped, toggle } = useServiceReadMore();
  const gallery = imagesForService(service.slug, true);
  const fallback = imagesForService(service.slug);
  const photos = (gallery.length ? gallery : fallback).slice(0, 16);

  return (
    <article className={`service-full${expanded ? " is-expanded" : ""}`} id={service.slug}>
      <div className="service-full-media" ref={mediaRef}>
        <img src={service.hero} alt={service.heroAlt} loading="lazy" decoding="async" />
      </div>
      <div className="service-full-body" ref={bodyRef}>
        <p className="eyebrow">{service.eyebrow}</p>
        <h3>{service.title}</h3>
        <div className="service-full-copy" data-service-copy ref={copyRef}>
          {service.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <button
          type="button"
          className="service-read-more"
          aria-expanded={expanded}
          hidden={!clamped && !expanded}
          onClick={toggle}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
        <Link className="btn btn-solid" href="/#quote">
          Request a free quote
        </Link>
      </div>
      {photos.length ? (
        <div className="service-full-gallery">
          <p className="aside-label">Gallery</p>
          <div className="gallery-grid">
            {photos.map((image) => (
              <a className="gallery-item" href={image.src} target="_blank" rel="noopener" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
