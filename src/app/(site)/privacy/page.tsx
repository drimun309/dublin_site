import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/shared/config";
import { JsonLd } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects enquiry, website and analytics data.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy — ${site.name}`,
    description: `How ${site.name} collects, uses and protects enquiry, website and analytics data.`,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${site.url}/privacy` },
          ],
        }}
      />
      <section className="services-page-hero">
        <div className="services-page-hero-inner">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <span>Privacy Policy</span>
          </p>
          <p className="eyebrow">Your information</p>
          <h1>Privacy Policy</h1>
          <p className="section-lead">Last updated: 31 August 2026</p>
        </div>
      </section>

      <article className="legal-page">
        <h2>Who controls your data</h2>
        <p>
          {site.name} is responsible for the personal data described in this policy. Contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={site.phoneHref}>{site.phone}</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          When you request an assessment, we may collect your name, phone number, email address, area or postcode,
          service required, project description and any property photos you choose to send. We also receive limited
          technical and analytics data when you accept analytics cookies.
        </p>

        <h2>Why we use it</h2>
        <ul>
          <li>To respond to your enquiry, assess the work and prepare or discuss a quotation.</li>
          <li>To arrange and deliver services you ask us to provide.</li>
          <li>To protect the website, prevent misuse and keep necessary business records.</li>
          <li>To understand website use through Google Analytics only after you accept analytics cookies.</li>
        </ul>
        <p>
          We process enquiry data to take steps at your request before a contract and for our legitimate interests in
          running and securing the business. Analytics relies on your consent, which you can refuse.
        </p>

        <h2>Service providers</h2>
        <p>
          We use service providers to host the website, store enquiries and deliver email notifications. These may
          include Vercel, Supabase and Resend. If you accept analytics cookies, Google Analytics also processes
          website-use data. Providers may process data outside Ireland or the EEA using the safeguards available
          under data-protection law.
        </p>

        <h2>How long we keep data</h2>
        <p>
          We keep enquiry data only as long as needed to respond, provide requested services, maintain necessary
          business records and meet legal obligations. Information that is no longer required is deleted or
          anonymised.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          The site stores your cookie choice in your browser. Google Analytics is not loaded unless you select
          “Accept”. You can clear site data in your browser to reset that choice.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on the circumstances, you may ask for access, correction, deletion, restriction, portability or
          objection to processing, and you may withdraw analytics consent. Contact us using the details above. You
          can also complain to the{" "}
          <a href="https://www.dataprotection.ie/" rel="noopener noreferrer" target="_blank">
            Irish Data Protection Commission
          </a>.
        </p>

        <h2>Security and changes</h2>
        <p>
          We use reasonable technical and organisational measures to protect personal data. We may update this policy
          when our services or legal obligations change; the date above shows the latest version.
        </p>
      </article>
    </>
  );
}
