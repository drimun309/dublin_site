"use client";

import { useMemo, useState } from "react";
import { services, workImages, type ServiceSlug } from "@/entities/service";

export type WorkFilter = "all" | ServiceSlug;

export function useGalleryFilter() {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const images = useMemo(() => workImages(filter), [filter]);
  const options: { id: WorkFilter; label: string }[] = [
    { id: "all", label: "All work" },
    ...services.map((service) => ({ id: service.slug, label: service.shortTitle })),
  ];
  return { filter, setFilter, images, options };
}
