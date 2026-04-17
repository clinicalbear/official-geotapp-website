import { permanentRedirect } from 'next/navigation';

// Consolidate link equity on the canonical IT locale URL.
// /settori/manutenzione/ → /it/settori/manutenzione/
export default function ManutenzioneBasePage() {
  permanentRedirect('/it/settori/manutenzione/');
}
