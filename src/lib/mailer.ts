export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ResendRequest = {
  from: string;
  to: string[];
  subject: string;
  text?: string;
  html?: string;
  reply_to?: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "support@geotapp.com";
  const from = process.env.CONTACT_FROM || "GeoTapp <no-reply@geotapp.com>";

  if (!apiKey) throw new Error("Missing RESEND_API_KEY");
  const body: ResendRequest = {
    from,
    to: [to],
    subject: `Nuovo messaggio dal sito: ${payload.name}`,
    text: `Da: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    reply_to: payload.email,
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Resend error ${res.status}: ${txt}`);
  }

  return (await res.json()) as unknown;
}
