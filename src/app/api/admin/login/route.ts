import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, createAdminToken } from "@/shared/lib/admin-session";

export async function POST(request: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json({ message: "Admin password is not configured." }, { status: 503 });
  }

  const form = await request.formData().catch(() => null);
  const json = form ? null : ((await request.json().catch(() => null)) as { password?: string } | null);
  const password = form ? String(form.get("password") || "") : json?.password || "";

  if (password !== expected) {
    const url = new URL("/admin/login?error=1", request.url);
    if (form) return NextResponse.redirect(url);
    return NextResponse.json({ message: "Wrong password." }, { status: 401 });
  }

  const token = await createAdminToken();
  const res = form
    ? NextResponse.redirect(new URL("/admin/leads", request.url))
    : NextResponse.json({ ok: true });
  res.cookies.set(adminCookieName(), token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
