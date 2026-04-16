import { permanentRedirect } from 'next/navigation';

// Consolidate link equity on the canonical IT locale URL.
// /settori/pulizie/ and /it/settori/pulizie/ were splitting authority
// for "app per impresa di pulizie" (305 GSC impressions at pos 40).
export default function PulizieBasePage() {
  permanentRedirect('/it/settori/pulizie/');
}
