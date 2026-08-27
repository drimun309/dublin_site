type AnalyticsEvent =
  | "form_submit"
  | "email_click"
  | "phone_click";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  // ponytail: FORCE_GA_DEBUG mirror — remove debug_mode once DebugView confirmed
  window.gtag("event", name, { ...params, debug_mode: true });
}
