"use client";

import { useState } from "react";
import type { LeadDraft } from "@/entities/lead";
import { site } from "@/shared/config";

export function useSendLead() {
  const [pending, setPending] = useState(false);
  const [note, setNote] = useState("We’ll store this request and get back to you — or email us for a faster reply.");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

  const send = async (draft: LeadDraft) => {
    setPending(true);
    setError(false);
    setOk(false);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        setError(true);
        setNote(data.message || `Could not send — email ${site.email}.`);
        return false;
      }
      setOk(true);
      setNote("Request received. We’ll be in touch shortly.");
      return true;
    } catch {
      setError(true);
      setNote(`Could not send — email ${site.email}.`);
      return false;
    } finally {
      setPending(false);
    }
  };

  return { send, pending, note, ok, error };
}
