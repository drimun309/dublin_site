import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { leadStatuses, type LeadStatus } from "@/entities/lead";
import { isAdminToken } from "@/shared/lib/admin-session";
import { updateLeadStatus } from "@/shared/lib/supabase";

export async function PATCH(request: NextRequest) {
  const token = (await cookies()).get("dr_admin")?.value;
  if (!(await isAdminToken(token))) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as { id?: string; status?: LeadStatus } | null;
  if (!body?.id || !body.status || !leadStatuses.includes(body.status)) {
    return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
  }

  try {
    await updateLeadStatus(body.id, body.status);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Could not update" }, { status: 500 });
  }
}
