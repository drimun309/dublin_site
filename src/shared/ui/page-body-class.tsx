"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PageBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("page-inner", pathname !== "/");
  }, [pathname]);

  return null;
}
