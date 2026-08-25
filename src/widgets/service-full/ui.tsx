"use client";

import Link from "next/link";
import type { Service } from "@/entities/service";
import { imagesForService, isSeoServiceSlug } from "@/entities/service";
import { useServiceReadMore } from "@/features/service-read-more";
import { GalleryImage } from "@/shared/ui";

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
        <h3>
          {isSeoServiceSlug(service.slug) ? (
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          ) : (
            service.title
          )}
        </h3>
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
          Request a Free Assessment
        </Link>
        {isSeoServiceSlug(service.slug) ? (
          <Link className="service-more" href={`/services/${service.slug}`}>
            Full service page <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
      {photos.length ? (
        <div className="service-full-gallery">
          <p className="aside-label">Gallery</p>
          <div className="gallery-grid">
            {photos.map((image) => (
              <GalleryImage src={image.src} alt={image.alt} key={image.src} />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
