/**
 * Il guscio delle pagine del codice stampato.
 *
 * Serve perche' `app/layout.tsx` di questo sito e' un pass-through puro: html e
 * body li mette `app/[locale]/layout.tsx`, e tutte le altre pagine di primo
 * livello sono solo componenti riesportati dalle rotte con il locale. Una pagina
 * servita davvero fuori da `[locale]`, come questa, senza il suo guscio muore con
 * "Missing <html> and <body> tags in the root layout" (visto a schermo, non
 * dedotto).
 *
 * Qui dentro non entra la navigazione del sito: chi arriva da un QR stampato su
 * un rapporto di lavoro deve leggere quel documento, non trovarsi in una pagina
 * di marketing. Niente banner, niente chat, niente analytics.
 */

import type { ReactNode } from 'react';
import '../globals.css';

export default function LayoutCodice({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F7F4] antialiased">{children}</body>
    </html>
  );
}
