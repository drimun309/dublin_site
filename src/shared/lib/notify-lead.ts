import { site } from "@/shared/config";
import type { LeadDraft } from "@/entities/lead";

export async function notifyLead(draft: LeadDraft) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;

  const to = process.env.LEAD_NOTIFY_EMAIL || site.email;
  const from = process.env.RESEND_FROM_EMAIL || "Dublin Restoration <onboarding@resend.dev>";
  const photosCount = draft.photos?.length || 0;

  const body = [
    `New Assessment Request from ${draft.name}`,
    "--------------------------------------------------",
    `Name: ${draft.name}`,
    `Phone: ${draft.phone}`,
    `Email: ${draft.email || "—"}`,
    `Area / Postcode: ${draft.area || "—"}`,
    `Service: ${draft.service}`,
    `Source Page: ${draft.source_page || "—"}`,
    `Attached Photos: ${photosCount > 0 ? `${photosCount} file(s)` : "None"}`,
    "",
    "Message / Description:",
    draft.message || "(no message provided)",
  ].join("\n");

  const attachments = draft.photos?.map((photo) => ({
    filename: photo.filename,
    content: photo.dataBase64,
  }));

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New Assessment: ${draft.service} — ${draft.name}${draft.area ? ` (${draft.area})` : ""}`,
      text: body,
      attachments: attachments && attachments.length > 0 ? attachments : undefined,
    }),
  });
}
