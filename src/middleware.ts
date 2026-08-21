import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, isAdminToken } from "@/shared/lib/admin-session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin") || pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(adminCookieName())?.value;
  if (await isAdminToken(token)) return NextResponse.next();

  const login = new URL("/admin/login", request.url);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/admin/:path*"],
};
