import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getPaesiSeverita, localizePaesiSeverita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import IndiceSorveglianzaClient, {
  type IndiceRow,
} from '@/components/risorse/IndiceSorveglianzaClient';

/**
 * Tool "Indice della sorveglianza sul lavoro in Europa": classifica dei 39 Paesi
 * per severità del quadro su monitoraggio dei lavoratori. Derivato dai dossier
 * verificati (derive.ts). Route: /[locale]/risorse/indice-sorveglianza/.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(safeLocale(locale)).indiceSorveglianza;
  return {
    title: { absolute: dict.metaTitle },
    description: dict.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/indice-sorveglianza/'),
  };
}

export default async function IndiceSorveglianzaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const dict = getDictionary(resolvedLocale).indiceSorveglianza;

  const sev = getPaesiSeverita();
  const loc = localizePaesiSeverita(sev, resolvedLocale);
  const rows: IndiceRow[] = loc.map((p) => ({
    codiceISO: p.codiceISO,
    nome: p.nome,
    bandiera: p.bandiera,
    severita: p.severita,
    numObblighi: p.obbligatori.length,
    totaleAdempimenti: p.totaleAdempimenti,
    sanzioneImporto: p.sanzioneImporto,
    href: localizePath(`/risorse/gps-lavoratori-ue/${p.slugCanonico}/`, resolvedLocale),
  }));

  const labels = {
    colPaese: dict.colPaese,
    colIndice: dict.colIndice,
    colObblighi: dict.colObblighi,
    colSanzione: dict.colSanzione,
    scheda: dict.scheda,
  };

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{dict.h1}</h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">{dict.intro}</p>
      </header>

      <IndiceSorveglianzaClient rows={rows} labels={labels} />

      <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-5">
        <p className="text-sm font-semibold text-slate-700 mb-1">{dict.metodologiaTitolo}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{dict.metodologia}</p>
      </div>
    </main>
  );
}
