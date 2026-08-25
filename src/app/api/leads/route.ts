import { NextRequest, NextResponse } from "next/server";
import { site } from "@/shared/config";
import type { LeadDraft, LeadPhoto } from "@/entities/lead";
import { hasSupabaseConfig, insertLead } from "@/shared/lib/supabase";
import { notifyLead } from "@/shared/lib/notify-lead";

export async function POST(request: NextRequest) {
  let name = "";
  let phone = "";
  let email = "";
  let area = "";
  let service = "";
  let message = "";
  let source_page = "";
  const photos: LeadPhoto[] = [];

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData().catch(() => null);
    if (!formData) {
      return NextResponse.json({ message: "Invalid form data." }, { status: 400 });
    }
    name = String(formData.get("name") || "").trim();
    phone = String(formData.get("phone") || "").trim();
    email = String(formData.get("email") || "").trim();
    area = String(formData.get("area") || "").trim();
    service = String(formData.get("service") || "").trim();
    message = String(formData.get("message") || "").trim();
    source_page = String(formData.get("source_page") || "").trim();

    const photoEntries = formData.getAll("photos");
    for (const item of photoEntries) {
      if (item instanceof File && item.size > 0 && item.size <= 8 * 1024 * 1024) {
        const buffer = Buffer.from(await item.arrayBuffer());
        photos.push({
          filename: item.name,
          contentType: item.type || "image/jpeg",
          dataBase64: buffer.toString("base64"),
        });
      }
    }
  } else {
    const body = (await request.json().catch(() => null)) as {
      name?: string;
      phone?: string;
      email?: string;
      area?: string;
      service?: string;
      message?: string;
      source_page?: string;
      photos?: LeadPhoto[];
    } | null;

    name = body?.name?.trim() || "";
    phone = body?.phone?.trim() || "";
    email = body?.email?.trim() || "";
    area = body?.area?.trim() || "";
    service = body?.service?.trim() || "";
    message = body?.message?.trim() || "";
    source_page = body?.source_page?.trim() || "";
    if (Array.isArray(body?.photos)) {
      photos.push(...body.photos);
    }
  }

  if (!name || !phone || !service) {
    return NextResponse.json({ message: "Name, phone, and service are required." }, { status: 400 });
  }

  const draft: LeadDraft = {
    name,
    phone,
    email: email || undefined,
    area: area || undefined,
    service,
    message: message || undefined,
    source_page: source_page || undefined,
    photos: photos.length > 0 ? photos : undefined,
  };

  const hasDb = hasSupabaseConfig();
  const hasResend = Boolean(process.env.RESEND_API_KEY);

  if (!hasDb && !hasResend) {
    return NextResponse.json(
      { message: `Service temporarily offline. Please email ${site.email} directly.` },
      { status: 503 },
    );
  }

  try {
    if (hasDb) {
      await insertLead(draft);
    }
    if (hasResend) {
      await notifyLead(draft).catch(() => undefined);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: `Could not save your request — please email ${site.email}.` },
      { status: 500 },
    );
  }
}
