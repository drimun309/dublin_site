"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useServiceReadMore() {
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);

  const sync = useCallback(() => {
    const copy = copyRef.current;
    const media = mediaRef.current;
    const body = bodyRef.current;
    if (!copy || !media || !body) return;

    if (expanded) {
      copy.style.maxHeight = "none";
      copy.classList.remove("is-clamped");
      setClamped(true);
      return;
    }

    const stacked = window.matchMedia("(max-width: 959px)").matches;
    const eyebrow = body.querySelector(".eyebrow");
    const title = body.querySelector("h3");
    const mediaH = media.getBoundingClientRect().height;
    const headH =
      (eyebrow ? eyebrow.getBoundingClientRect().height : 0) +
      (title ? title.getBoundingClientRect().height : 0) +
      16;
    const target = stacked ? Math.min(260, Math.max(160, mediaH)) : Math.max(160, mediaH - headH);

    copy.style.maxHeight = `${target}px`;
    const overflows = copy.scrollHeight > target + 4;
    copy.classList.toggle("is-clamped", overflows);
    setClamped(overflows);
    if (!overflows) copy.style.maxHeight = "none";
  }, [expanded]);

  useEffect(() => {
    const run = () => requestAnimationFrame(sync);
    run();
    window.addEventListener("resize", run);
    const img = mediaRef.current?.querySelector("img");
    if (img && !img.complete) img.addEventListener("load", run, { once: true });
    return () => window.removeEventListener("resize", run);
  }, [sync]);

  return {
    copyRef,
    mediaRef,
    bodyRef,
    expanded,
    clamped,
    toggle: () => setExpanded((value) => !value),
  };
}
