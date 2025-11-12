// src/app/api/auth/login/route.ts
import { cookies } from "next/headers";
import { verifyCredentials, createSessionToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const ok = await verifyCredentials(username, password);
  if (!ok) return new Response("Unauthorized", { status: 401 });

  const token = createSessionToken(); // <-- stringa sync

  const cookieStore = await cookies();
  cookieStore.set("admin_session", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 giorni
  });

  return new Response(null, { status: 204 });
}
