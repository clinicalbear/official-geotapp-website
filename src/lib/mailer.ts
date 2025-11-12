import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  plan?: string;
  message: string;
};

function getTransport() {
  const host = process.env.CONTACT_SMTP_HOST;
  const port = Number(process.env.CONTACT_SMTP_PORT ?? 587);
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP environment variables non configurate.");
  }

  const secure = process.env.CONTACT_SMTP_SECURE === "true" || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function sendContactEmail(payload: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL ?? "info@geotapp.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "noreply@geotapp.com";

  const transporter = getTransport();

  const subject = `Nuova richiesta dal sito GeoTapp: ${payload.name}`;
  const text = [
    `Nome: ${payload.name}`,
    `Email: ${payload.email}`,
    `Azienda: ${payload.company ?? "n/d"}`,
    `Piano di interesse: ${payload.plan ?? "n/d"}`,
    "",
    payload.message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject,
    text,
  });
}
