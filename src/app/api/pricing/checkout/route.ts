import { NextRequest, NextResponse } from "next/server";
import { getDjangoApiBaseUrl, getSiteBaseUrl } from "@/lib/runtimeConfig";

type CheckoutPayload = {
  companyName: string;
  contactEmail: string;
  seatCount: number;
};

function buildUrl(path: string): string {
  return `${getSiteBaseUrl()}${path}`;
}

export async function POST(request: NextRequest) {
  const { companyName, contactEmail, seatCount } = (await request.json()) as CheckoutPayload;

  const numericSeats = Number(seatCount);

  if (!companyName || !contactEmail || !Number.isFinite(numericSeats)) {
    return NextResponse.json(
      { message: "companyName, contactEmail e seatCount sono obbligatori" },
      { status: 400 },
    );
  }

  const backendBase = getDjangoApiBaseUrl();
  if (!backendBase) {
    return NextResponse.json(
      { message: "Backend Django non configurato" },
      { status: 500 },
    );
  }

  const payload = {
    company_name: companyName,
    contact_email: contactEmail,
    seat_count: Math.max(1, Math.round(numericSeats)),
    success_url: buildUrl("/prezzi/checkout-success"),
    cancel_url: buildUrl("/prezzi/checkout-annullato"),
  };

  try {
    const response = await fetch(`${backendBase}/pricing/checkout/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const body = (await response.json().catch(() => null)) as { error?: string; message?: string } | null;
    if (!response.ok) {
      const message = body?.error ?? body?.message ?? "Checkout non disponibile";
      return NextResponse.json({ message }, { status: response.status });
    }

    return NextResponse.json(body);
  } catch (error) {
    console.error("Errore chiamando il backend per il checkout", error);
    return NextResponse.json(
      { message: "Impossibile contattare il backend di pagamento" },
      { status: 502 },
    );
  }
}
