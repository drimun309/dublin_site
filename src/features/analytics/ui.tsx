"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/features/cookie-consent";
import { trackEvent } from "@/shared/lib/analytics";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-QMCKBFFD15";

// ponytail: force debug until GA4 DebugView is confirmed, then set back to URL/localStorage-only
const FORCE_GA_DEBUG = true;

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

  const bootstrap = `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js', new Date());
(function(){
  var q=new URLSearchParams(location.search);
  if(q.has('ga_debug')) localStorage.setItem('ga_debug','1');
  var debug=${FORCE_GA_DEBUG ? "true" : "false"} || localStorage.getItem('ga_debug')==='1' || q.has('ga_debug');
  gtag('config','${gaId}',{send_page_view:true,debug_mode:!!debug});
})();`;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {bootstrap}
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
