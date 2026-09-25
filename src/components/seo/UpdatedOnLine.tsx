// Riga discreta "Aggiornato il ..." per pagine prodotto/settore che prima non
// esponevano nessuna data (a differenza di home e articoli blog). La data non
// e' "oggi" ad ogni build: viene dalla mappa generata in src/lib/seo/content-dates.ts
// (ultimo commit git che ha toccato i file di contenuto di QUELLA pagina). Vedi
// scripts/seo/generate-content-dates.mjs per come si rigenera la mappa.
//
// Nessuna direttiva 'use client': puo' finire sia in una pagina server (products,
// cos-e-geotapp, pricing, roi-calculator) sia dentro un componente client come
// SettorePageLayout, che lo importa comunque nel proprio bundle.
import { getDictionary } from '@/lib/i18n/dictionaries';
import { contentDateFor } from '@/lib/seo/content-dates';
import type { AppLocale } from '@/lib/i18n/config';

function formatUpdatedDate(iso: string, locale: string): string {
  // Mezzanotte UTC fissa per evitare che il fuso orario del renderer sposti la
  // data di un giorno rispetto a quella indicata nella mappa (YYYY-MM-DD puro).
  const parsed = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return iso;
  try {
    return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(parsed);
  } catch {
    return iso;
  }
}

export function updatedIsoFor(pageKey: string): string {
  return contentDateFor(pageKey);
}

export default function UpdatedOnLine({
  pageKey,
  locale,
}: {
  pageKey: string;
  locale: AppLocale | string;
}) {
  const dict = getDictionary(locale as AppLocale) as { contentDates?: { updatedOn?: string } };
  const label = dict.contentDates?.updatedOn ?? 'Updated on';
  const iso = contentDateFor(pageKey);
  return (
    <p
      style={{
        textAlign: 'center',
        fontSize: 12.5,
        color: '#98a2b3',
        padding: '18px 20px 32px',
        margin: 0,
      }}
    >
      {label} {formatUpdatedDate(iso, locale as string)}
    </p>
  );
}
