import { NextRequest, NextResponse } from "next/server";
import { adminCookieName } from "@/shared/lib/admin-session";

export async function POST(request: NextRequest) {
  const res = NextResponse.redirect(new URL("/admin/login", request.url));
  res.cookies.set(adminCookieName(), "", { path: "/", maxAge: 0 });
  return res;
}
