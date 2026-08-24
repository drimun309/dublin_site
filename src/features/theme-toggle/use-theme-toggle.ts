"use client";

import { useState } from "react";

export function useThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark",
  );

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setDark(!dark);
  };

  return {
    dark,
    toggle,
    label: dark ? "Switch to light theme" : "Switch to dark theme",
  };
}
