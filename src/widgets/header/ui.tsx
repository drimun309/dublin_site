"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMobileNav } from "@/features/mobile-nav";
import { site } from "@/shared/config";
import { PhoneIcon } from "@/shared/ui";

const homeLinks = [
  { href: "/services", label: "Services" },
  { href: "/#craft", label: "Craft" },
  { href: "/#process", label: "Process" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/work", label: "Our work" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#quote", label: "Quote" },
  { href: "/#contact", label: "Contact" },
];

const innerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/#craft", label: "Craft" },
  { href: "/#quote", label: "Quote" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [homeScrolled, setHomeScrolled] = useState(false);
  const scrolled = !isHome || homeScrolled;
  const { open, toggle, close } = useMobileNav();
  const links = isHome ? homeLinks : innerLinks;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setHomeScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Dublin Restoration home">
          <img className="brand-logo" src={site.logo} alt="" width={56} height={56} decoding="async" />
          <span className="brand-text">
            <strong>Dublin</strong>
            <em>Restoration</em>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href={site.phoneHref}>
            <PhoneIcon />
            {site.phone}
          </a>
          <Link className="btn btn-solid btn-sm" href="/#quote">
            Free quote
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
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
        <a className="btn btn-solid" href={site.phoneHref}>
          Call {site.phone}
        </a>
      </div>
    </header>
  );
}
