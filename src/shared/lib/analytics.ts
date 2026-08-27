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
  const debug =
    localStorage.getItem("ga_debug") === "1" ||
    new URLSearchParams(window.location.search).has("ga_debug");
  window.gtag("event", name, debug ? { ...params, debug_mode: true } : params);
}
