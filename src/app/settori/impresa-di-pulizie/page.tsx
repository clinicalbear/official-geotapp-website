import { permanentRedirect } from 'next/navigation';

// Consolidate link equity on the canonical IT locale URL.
// /settori/impresa-di-pulizie/ → /it/settori/impresa-di-pulizie/
export default function ImpresaDiPulizieBasePage() {
  permanentRedirect('/it/settori/impresa-di-pulizie/');
}
