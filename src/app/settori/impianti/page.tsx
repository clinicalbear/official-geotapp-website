import { permanentRedirect } from 'next/navigation';

// Consolidate link equity on the canonical IT locale URL.
// /settori/impianti/ → /it/settori/impianti/
export default function ImpiantiBasePage() {
  permanentRedirect('/it/settori/impianti/');
}
