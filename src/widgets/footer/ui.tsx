"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesPageSlugs, getService } from "@/entities/service";
import { site } from "@/shared/config";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid">
        <div>
          <img className="footer-logo" src={site.logo} alt={site.name} width={120} height={120} decoding="async" />
          <p className="footer-brand">{site.name}</p>
          <p>{site.tagline}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.facebook} rel="noopener" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Hours</h3>
          <p>
            {site.hoursWeek}
            <br />
            {site.hoursSun}
          </p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {servicesPageSlugs.map((slug) => {
              const service = getService(slug);
              const label = slug === "chemical-cleaning" ? "Chemical Cleaning" : service.title;
              return (
                <li key={slug}>
                  <Link href={`/services#${slug}`}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <Link className="to-top" href={isHome ? "/#top" : "/"}>
          Back to {isHome ? "top" : "home"}
        </Link>
      </div>
    </footer>
  );
}
