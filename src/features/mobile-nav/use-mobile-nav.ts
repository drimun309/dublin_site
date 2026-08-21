"use client";

import { useCallback, useState } from "react";

export function useMobileNav() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((value) => !value), []);
  const close = useCallback(() => setOpen(false), []);
  return { open, toggle, close };
}
