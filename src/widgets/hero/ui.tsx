"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/shared/config";

const heroVideos = [
  "/assets/hero-brick-site.mp4",
  "/assets/brick-pressure-wash.mp4",
] as const;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // ponytail: scroll-driven video scale janks on mobile GPUs — parallax only on desktop
    const allowScrollFx = finePointer && !reduceMotion;

    let ticking = false;
    const onScroll = () => {
      if (!allowScrollFx || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const h = Math.max(rect.height, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / h));
        hero.style.setProperty("--hero-scroll", progress.toFixed(3));
        ticking = false;
      });
    };
    if (allowScrollFx) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const playCurrent = () => {
      if (!video) return;
      hero.classList.add("is-video-ready");
      if (reduceMotion) video.pause();
      else video.play().catch(() => {});
    };

    const onEnded = () => {
      if (!video || reduceMotion) return;
      indexRef.current = (indexRef.current + 1) % heroVideos.length;
      video.src = heroVideos[indexRef.current];
      video.load();
      video.play().catch(() => {});
    };

    if (video) {
      if (video.readyState >= 2) playCurrent();
      else video.addEventListener("loadeddata", playCurrent, { once: true });
      video.addEventListener("ended", onEnded);
    }

    const onMove = (event: PointerEvent) => {
      const spot = spotRef.current;
      if (!spot) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      spot.style.setProperty("--spot-x", `${x}%`);
      spot.style.setProperty("--spot-y", `${y}%`);
    };

    if (finePointer && !reduceMotion) {
      hero.addEventListener("pointermove", onMove);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      hero.removeEventListener("pointermove", onMove);
      video?.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          ref={videoRef}
          poster="/assets/hero-brick-site-poster.jpg"
          autoPlay
          muted
          playsInline
          preload="metadata"
          src={heroVideos[0]}
        />
        <img
          className="hero-fallback"
          src="/assets/hero-brick-site-poster.jpg"
          alt=""
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-veil"></div>
        <div className="hero-spotlight" ref={spotRef}></div>
        <div className="hero-grain"></div>
      </div>

      <div className="hero-content">
        <img
          className="hero-logo reveal"
          style={{ ["--d" as string]: 0 }}
          src={site.logo}
          alt="Dublin Restoration"
          width={280}
          height={280}
          decoding="async"
        />
        <p className="hero-brand reveal" style={{ ["--d" as string]: 0.5 }}>
          Dublin Restoration
        </p>
        <h1 className="reveal" style={{ ["--d" as string]: 1 }}>
          Brick Repointing &amp; Restoration Specialists in Dublin
        </h1>
        <div className="hero-cta reveal" style={{ ["--d" as string]: 2 }}>
          <Link className="btn btn-solid" href="/#quote">
            Send Photos for a Free Assessment
          </Link>
          <a className="btn btn-ghost" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </div>
      </div>

      <div className="hero-scroll reveal" style={{ ["--d" as string]: 3 }} aria-hidden="true">
        <span>Scroll</span>
        <i></i>
      </div>
    </section>
  );
}
