"use client";

import { useState } from "react";
import type { LeadDraft } from "@/entities/lead";
import { trackEvent } from "@/shared/lib/analytics";
import { site } from "@/shared/config";

export function useSendLead() {
  const [pending, setPending] = useState(false);
  const [note, setNote] = useState("We'll review your property details and contact you within 24 hours.");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  const send = async (payload: LeadDraft | FormData) => {
    setPending(true);
    setError(false);
    setOk(false);
    try {
      const isFormData = typeof FormData !== "undefined" && payload instanceof FormData;
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: isFormData ? undefined : { "Content-Type": "application/json" },
        body: isFormData ? payload : JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        setError(true);
        setNote(data.message || `Could not submit — please email ${site.email} directly.`);
        return false;
      }
      setOk(true);
      setNote("Assessment request received! We’ll review your details and be in touch shortly.");
      if (payload instanceof FormData) {
        trackEvent("form_submit", {
          service: String(payload.get("service") || ""),
          source_page: String(payload.get("source_page") || ""),
        });
      } else {
        trackEvent("form_submit", {
          service: payload.service,
          source_page: payload.source_page,
        });
      }
      return true;
    } catch {
      setError(true);
      setNote(`Could not submit — please email ${site.email} directly.`);
      return false;
    } finally {
      setPending(false);
    }
  };

  return { send, pending, note, ok, error };
}
