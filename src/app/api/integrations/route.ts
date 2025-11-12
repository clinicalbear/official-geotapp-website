import { NextRequest, NextResponse } from "next/server";
import {
  getIntegrationConfig,
  updateIntegrationConfig,
} from "@/lib/integrationConfigStore";
import { ZodError } from "zod";

export async function GET() {
  const config = await getIntegrationConfig();
  return NextResponse.json(config);
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
    const payload = await request.json();
    const updated = await updateIntegrationConfig(payload);
    return NextResponse.json(updated);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    console.error("Errore aggiornando integrazioni", error);
    return NextResponse.json({ message: "Errore interno" }, { status: 500 });
  }
}
