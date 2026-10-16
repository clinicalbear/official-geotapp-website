/**
 * Pagina del questionario per i candidati: `geotapp.com/candidatura/<codice>`.
 *
 * Il questionario vive nel CRM (una domanda per schermata, risposte in
 * /dashboard/candidates): qui lo si incorpora in una pagina del dominio che il
 * candidato riconosce. Il CRM consente l'incorniciamento solo da geotapp.com
 * (`frame-ancestors 'self' https://geotapp.com`).
 *
 * Fuori dagli indici su tre livelli: meta robots, header X-Robots-Tag (middleware)
 * e Disallow in robots.txt. Il codice e' una lista chiusa: un indirizzo sconosciuto
 * da' 404, non un questionario.
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;

export const metadata: Metadata = {
  title: 'Questionario GeoTapp',
  robots: { index: false, follow: false, nocache: true },
};

// codice nell'indirizzo -> indirizzo del questionario nel CRM
const QUESTIONARI: Record<string, string> = {
  'contenuti-dati-k7q2': 'https://crm.geotapp.com/quiz/contenuti-dati-k7q2',
};

export function generateStaticParams() {
  return Object.keys(QUESTIONARI).map((codice) => ({ codice }));
}

export default async function PaginaCandidatura({
  params,
}: {
  params: Promise<{ codice: string }>;
}) {
  const { codice } = await params;
  const src = QUESTIONARI[codice];
  if (!src) notFound();

  return (
    <main style={{ height: '100dvh' }}>
      <iframe
        src={src}
        title="Questionario GeoTapp"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
        referrerPolicy="no-referrer"
      />
      <noscript>
        <p style={{ padding: 24, fontFamily: 'sans-serif' }}>
          Per compilare il questionario serve JavaScript attivo.
        </p>
      </noscript>
    </main>
  );
}
