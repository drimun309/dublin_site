import Link from "next/link";
import { services } from "@/entities/service";
import { site } from "@/shared/config";

export function Footer() {
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
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.phoneAltHref}>{site.phoneAlt}</a>
            </li>
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
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <p>© {year} {site.name}. All rights reserved.</p>
        <Link className="to-top" href="/">
          Back to top
        </Link>
      </div>
    </footer>
  );
}
