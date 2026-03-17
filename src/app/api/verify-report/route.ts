import { NextRequest, NextResponse } from 'next/server';
import { readReportFromZipBuffer, verifyArtifact } from '@geotapp/report-verifier';

const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25MB

export async function POST(req: NextRequest) {
  // Size check before parsing — avoids loading large body into memory
  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      { error: 'File troppo grande. Dimensione massima: 25MB.' },
      { status: 413 },
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 });
  }

  const file = formData.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Nessun file inviato.' }, { status: 400 });
  }

  if (!file.name.toLowerCase().endsWith('.zip')) {
    return NextResponse.json(
      { error: 'Il file deve essere un archivio ZIP.' },
      { status: 400 },
    );
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      { error: 'File troppo grande. Dimensione massima: 25MB.' },
      { status: 413 },
    );
  }

  try {
    const buffer = new Uint8Array(await file.arrayBuffer());
    const artifact = await readReportFromZipBuffer(buffer);
    const result = verifyArtifact(artifact);
    return NextResponse.json({ ...result, verificationMode: 'online' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Errore durante la verifica.';
    return NextResponse.json({ error: message }, { status: 422 });
  }
}
