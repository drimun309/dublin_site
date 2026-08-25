"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type GalleryImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
};

export function GalleryImage({
  src,
  alt,
  className = "gallery-item",
  loading = "lazy",
  decoding = "async",
}: GalleryImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-label={`View larger image: ${alt}`}
      >
        <img src={src} alt={alt} loading={loading} decoding={decoding} />
      </button>
      {open
        ? createPortal(
            <div
              className="lightbox"
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={alt}
            >
              <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">
                ×
              </button>
              <img className="lightbox-image" src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
