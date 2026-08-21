import { site } from "@/shared/config";
import type { LeadDraft } from "@/entities/lead";

export async function notifyLead(draft: LeadDraft) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;

  const to = process.env.LEAD_NOTIFY_EMAIL || site.email;
  const body = [
    `Name: ${draft.name}`,
    `Phone: ${draft.phone}`,
    `Email: ${draft.email || "—"}`,
    `Service: ${draft.service}`,
    `Page: ${draft.source_page || "—"}`,
    "",
    draft.message || "(no message)",
  ].join("\n");

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Dublin Restoration <beth.t@example.com>",
      to: [to],
      subject: `New quote: ${draft.service} — ${draft.name}`,
      text: body,
    }),
  });
}
