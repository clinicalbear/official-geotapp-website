/**
 * Il guscio della pagina del questionario per i candidati.
 *
 * Come `app/r/layout.tsx`: `app/layout.tsx` e' un pass-through, quindi una pagina
 * servita fuori da `[locale]` deve portarsi html e body. Niente navigazione del
 * sito, niente banner, niente analytics: chi arriva qui e' stato invitato a
 * compilare un questionario e non deve trovarsi in una pagina di marketing.
 */

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../globals.css';

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function LayoutCandidatura({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, background: '#F7F9FC' }}>{children}</body>
    </html>
  );
}
