export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, updateSiteContent } from "@/lib/contentStore";
import { ZodError } from "zod";

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: NextRequest) {
  try {
    const adminToken = process.env.CMS_ADMIN_TOKEN;
    if (adminToken) {
      const authHeader = request.headers.get("authorization");
      if (authHeader !== `Bearer ${adminToken}`) {
        return NextResponse.json({ message: "Non autorizzato" }, { status: 401 });
      }
    }
    const body = await request.json();
    const updated = await updateSiteContent(body);
    return NextResponse.json(updated);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    console.error("Errore aggiornando i contenuti", error);
    return NextResponse.json({ message: "Errore interno" }, { status: 500 });
  }
}
