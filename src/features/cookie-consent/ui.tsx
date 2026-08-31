"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-change";

export type CookieConsentValue = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setCookieConsent(value: CookieConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function needsConsent() {
  return getCookieConsent() === null;
}

export function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, needsConsent, () => false);

  if (!visible) return null;

  const choose = (value: CookieConsentValue) => setCookieConsent(value);

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p>
        We use cookies for analytics to understand how the site is used and improve our service. You can accept or
        decline non-essential cookies. Read our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="btn btn-ghost-ink cookie-banner-reject" onClick={() => choose("rejected")}>
          Decline
        </button>
        <button type="button" className="btn btn-solid" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
