import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getIntegrationConfig } from "@/lib/integrationConfigStore";
import { appendStripeEvent } from "@/lib/stripeEventsStore";

const STRIPE_API_VERSION: Stripe.LatestApiVersion = "2024-06-20";

function buildStripeClient(secretKey: string) {
  return new Stripe(secretKey, { apiVersion: STRIPE_API_VERSION });
}

function buildErrorEntry(message: string) {
  return {
    id: `error-${Date.now()}`,
    type: "webhook.error",
    created: Math.floor(Date.now() / 1000),
    livemode: false,
    payload: null,
    receivedAt: new Date().toISOString(),
    status: "error" as const,
    errorMessage: message,
  };
}

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { message: "Signature mancante" },
      { status: 400 },
    );
  }

  const rawBody = await request.text();
  const config = await getIntegrationConfig();

  const secretKey =
    process.env.STRIPE_SECRET_KEY ?? config.stripe.secretKey ?? "";
  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET ?? config.stripe.webhookSecret ?? "";

  if (!secretKey || !webhookSecret) {
    return NextResponse.json(
      { message: "Chiavi Stripe non configurate" },
      { status: 500 },
    );
  }

  const stripe = buildStripeClient(secretKey);

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret,
    );

    await appendStripeEvent({
      id: event.id,
      type: event.type,
      created: event.created,
      livemode: event.livemode,
      payload: event.data.object
  ? (JSON.parse(JSON.stringify(event.data.object)) as Record<string, unknown>)
  : null,

      receivedAt: new Date().toISOString(),
      status: "received",
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Payload non valido";
    await appendStripeEvent(buildErrorEntry(message));
    return NextResponse.json({ message }, { status: 400 });
  }
}
