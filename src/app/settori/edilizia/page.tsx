import { permanentRedirect } from 'next/navigation';

// Consolidate link equity on the canonical IT locale URL.
// /settori/edilizia/ → /it/settori/edilizia/
export default function EdiliziaBasePage() {
  permanentRedirect('/it/settori/edilizia/');
}
