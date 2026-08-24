import { NextRequest, NextResponse } from "next/server";
import { site } from "@/shared/config";
import { hasSupabaseConfig, insertLead } from "@/shared/lib/supabase";
import { notifyLead } from "@/shared/lib/notify-lead";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    message?: string;
    source_page?: string;
  } | null;

  const name = body?.name?.trim() || "";
  const phone = body?.phone?.trim() || "";
  const service = body?.service?.trim() || "";

  if (!name || !phone || !service) {
    return NextResponse.json({ message: "Name, phone and service are required." }, { status: 400 });
  }

  const draft = {
    name,
    phone,
    email: body?.email?.trim() || "",
    service,
    message: body?.message?.trim() || "",
    source_page: body?.source_page?.trim() || "",
  };

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { message: `Could not save the request — email ${site.email}.` },
      { status: 503 },
    );
  }

  try {
    await insertLead(draft);
    await notifyLead(draft).catch(() => undefined);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: `Could not save the request — email ${site.email}.` },
      { status: 500 },
    );
  }
}
