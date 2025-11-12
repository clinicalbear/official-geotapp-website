export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/mailer";

const payloadSchema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Email non valida"),
  company: z.string().optional(),
  plan: z.string().optional(),
  message: z.string().min(10, "Raccontaci qualcosa in più"),
});

export async function POST(request: NextRequest) {
  let data: z.infer<typeof payloadSchema>;
  try {
    data = payloadSchema.parse(await request.json());
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ message: "Payload non valido" }, { status: 400 });
  }

  try {
    await sendContactEmail(data);
    return NextResponse.json({ message: "Richiesta inviata" });
  } catch (error) {
    console.error("Errore invio email", error);
    return NextResponse.json(
      { message: "Configura le variabili SMTP per inviare email" },
      { status: 500 },
    );
  }
}
