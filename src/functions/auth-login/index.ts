// OpenNext function: auth-login (edge)
// This function handles POST /auth-login and is intended to be bundled as an isolated edge function.

import { verifyCredentials, createSessionToken } from "@/lib/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function onRequest(context: { request: Request }) {
  const req = context.request as Request;
  if (req.method !== "POST") {
    return new Response(null, { status: 405 });
  }

  try {
    const body = await req.json();
    const username = body.username;
    const password = body.password;

    const ok = await verifyCredentials(username, password);
    if (!ok) return new Response("Unauthorized", { status: 401 });

    const token = createSessionToken();

    // Set cookie header compatible with Cloudflare Workers / Edge
    const headers = new Headers();
    const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";
    const maxAge = 60 * 60 * 24 * 7; // 7 days
    const cookie = `admin_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secureFlag}`;
    headers.append("Set-Cookie", cookie);

    return new Response(null, { status: 204, headers });
  } catch (err) {
    console.error("auth-login function error", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}
