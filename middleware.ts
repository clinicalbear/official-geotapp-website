import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

const PROTECTED_API_PREFIXES = ["/api/content", "/api/integrations"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const protectsAdmin = pathname.startsWith("/admin");
  const protectsApi = PROTECTED_API_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix),
  );

  if (!protectsAdmin && !protectsApi) {
    return NextResponse.next();
  }

  const session = request.cookies.get("admin_session")?.value;
  if (session && verifySessionToken(session)) {
    return NextResponse.next();
  }

  if (protectsApi) {
    return NextResponse.json({ message: "Non autorizzato" }, { status: 401 });
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/admin/login";
  if (pathname !== "/admin") {
    loginUrl.searchParams.set("redirect", pathname + request.nextUrl.search);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/content/:path*", "/api/integrations/:path*"],
};
