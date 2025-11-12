// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

const PROTECTED_API_PREFIXES = ["/api/content", "/api/integrations"];
const PROTECTED_PAGES = ["/admin", "/admin/stripe", "/admin/deploy-guide"];

export const config = {
  matcher: [
    ...PROTECTED_API_PREFIXES.map((p) => `${p}/:path*`),
    ...PROTECTED_PAGES.map((p) => `${p}`),
  ],
};

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.pathname;

  const isProtected =
    PROTECTED_API_PREFIXES.some((p) => path.startsWith(p)) ||
    PROTECTED_PAGES.includes(path);

  if (!isProtected) return NextResponse.next();

  const session = request.cookies.get("admin_session")?.value;

  // ✅ serve await: verifySessionToken restituisce Promise<boolean>
  if (session && (await verifySessionToken(session))) {
    return NextResponse.next();
  }

  // API → 401
  if (path.startsWith("/api/")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Pagine → redirect al login
  return NextResponse.redirect(new URL("/admin/login", request.url));
}
