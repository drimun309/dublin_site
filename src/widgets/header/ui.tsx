"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMobileNav } from "@/features/mobile-nav";
import { MoonIcon, SunIcon, useThemeToggle } from "@/features/theme-toggle";
import { site } from "@/shared/config";

const homeLinks = [
  { href: "/services", label: "Services" },
  { href: "/#trust", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#quote", label: "Assessment" },
  { href: "/#contact", label: "Contact" },
];

const innerLinks: { href: string; label: string; current?: boolean }[] = [
  { href: "/services", label: "Services", current: true },
  { href: "/#trust", label: "Why Us" },
  { href: "/#quote", label: "Assessment" },
  { href: "/#contact", label: "Contact" },
];

const servicesMobileLinks = [
  { href: "/services", label: "Services" },
  { href: "/services#brick-repointing", label: "Brick Repointing" },
  { href: "/services#chemical-cleaning", label: "Chemical Cleaning" },
  { href: "/#quote", label: "Assessment" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices = pathname === "/services";
  const [homeScrolled, setHomeScrolled] = useState(false);
  const scrolled = !isHome || homeScrolled;
  const { open, toggle, close } = useMobileNav();
  const { label, dark, toggle: toggleTheme } = useThemeToggle();
  const themeIcon = dark ? <SunIcon /> : <MoonIcon />;
  const mobileLinks = isServices ? servicesMobileLinks : isHome ? homeLinks : innerLinks;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const next = window.scrollY > 24;
      setHomeScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href={isHome ? "/#top" : "/"} aria-label="Dublin Restoration home">
          <img className="brand-logo" src={site.logo} alt="" width={56} height={56} decoding="async" />
          <span className="brand-text">
            <strong>Dublin</strong>
            <em>Restoration</em>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {isHome
            ? homeLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))
            : innerLinks.map((link) => (
                <Link key={link.href} href={link.href} aria-current={link.current ? "page" : undefined}>
                  {link.label}
                </Link>
              ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} aria-pressed={dark}>
            {themeIcon}
          </button>
          <Link className="btn btn-solid btn-sm" href="/#quote">
            Free Assessment
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={toggle}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="mobile-nav" id="mobile-nav" hidden={!open}>
        {mobileLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
        <button
          className="theme-toggle theme-toggle-mobile"
          type="button"
          onClick={toggleTheme}
          aria-label={label}
          aria-pressed={dark}
        >
          {themeIcon}
          <span>{dark ? "Light mode" : "Dark mode"}</span>
        </button>
        <Link className="btn btn-solid" href="/#quote" onClick={close}>
          Free Assessment
        </Link>
      </div>
    </header>
  );
}
