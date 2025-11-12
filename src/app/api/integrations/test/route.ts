import { NextResponse } from "next/server";
import { getIntegrationConfig } from "@/lib/integrationConfigStore";

function collectStatus() {
  // Grande: if file fails to load, reuse defaults
  return getIntegrationConfig();
}

export async function POST() {
  try {
    const config = await collectStatus();
    const warnings: string[] = [];

    if (!config.django.baseUrl || !config.django.adminToken) {
      warnings.push("Django incompleto");
    }
    if (!config.stripe.secretKey || config.stripe.priceIds.length === 0) {
      warnings.push("Stripe incompleto");
    }
    if (!config.flutterLogin.clientId || config.flutterLogin.scopes.length === 0) {
      warnings.push("Login Flutter incompleto");
    }
    if (!config.firebase.projectId || config.firebase.syncCollections.length === 0) {
      warnings.push("Firebase incompleto");
    }

    if (warnings.length > 0) {
      return NextResponse.json(
        { message: `Completare i campi: ${warnings.join(", ")}` },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "Tutte le integrazioni risultano configurate." });
  } catch (error) {
    console.error("Errore test integrazioni", error);
    return NextResponse.json({ message: "Errore interno durante il test." }, { status: 500 });
  }
}
