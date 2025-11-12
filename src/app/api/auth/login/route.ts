import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { areValidCredentials, createSessionToken } from "@/lib/auth";
import { cookies } from "next/headers";

const payloadSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(request: NextRequest) {
  let body: z.infer<typeof payloadSchema>;
  try {
    body = payloadSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ message: "Payload non valido" }, { status: 400 });
  }

  if (!areValidCredentials(body.username, body.password)) {
    return NextResponse.json({ message: "Credenziali errate" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "admin_session",
    value: createSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8, // 8 ore
  });

  return NextResponse.json({ message: "Autenticato" });
}
