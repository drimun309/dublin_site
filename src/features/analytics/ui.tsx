"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/features/cookie-consent";
import { trackEvent } from "@/shared/lib/analytics";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-QMCXBFFDXJ";

function useAnalyticsAllowed() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getCookieConsent() === "accepted");
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  return allowed;
}

export function GoogleAnalytics() {
  const allowed = useAnalyticsAllowed();
  if (!gaId || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', {
  send_page_view: true,
  debug_mode: new URLSearchParams(location.search).has('ga_debug')
});`}
      </Script>
    </>
  );
}

export function ContactClickTracker() {
  const allowed = useAnalyticsAllowed();

  useEffect(() => {
    if (!gaId || !allowed) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href });
      }
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [allowed]);

  return null;
}
