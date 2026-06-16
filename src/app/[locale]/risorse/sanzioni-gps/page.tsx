import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getPaesiSeverita, localizePaesiSeverita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import CalcolatoreSanzioniClient from '@/components/risorse/CalcolatoreSanzioniClient';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';

/**
 * Tool "Calcolatore sanzioni GPS": scegli un Paese, vedi la sanzione massima reale
 * e gli adempimenti che ti espongono. Riusa i 39 dossier verificati (derive.ts).
 * Route: /[locale]/risorse/sanzioni-gps/ (slug localizzato via slug-map).
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
  const dict = getDictionary(safeLocale(locale)).sanzioniGps;
  return {
    title: { absolute: dict.metaTitle },
    description: dict.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/sanzioni-gps/'),
  };
}

export default async function CalcolatoreSanzioniPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const d = getDictionary(resolvedLocale);
  const dict = d.sanzioniGps;
  const shared = d.risorseGps;

  const sev = getPaesiSeverita();
  const paesi = localizePaesiSeverita(sev, resolvedLocale);
  const hrefPerIso: Record<string, string> = {};
  for (const p of sev) {
    hrefPerIso[p.codiceISO] = localizePath(
      `/risorse/gps-lavoratori-ue/${p.slugCanonico}/`,
      resolvedLocale,
    );
  }

  const labels = {
    scegliPaese: shared.scegliPaese,
    sanzioneMax: dict.sanzioneMax,
    casoCitato: dict.casoCitato,
    fonte: dict.fonte,
    adempimentiTitolo: dict.adempimentiTitolo,
    obbligatorio: dict.obbligatorio,
    condizionale: dict.condizionale,
    ceLHai: dict.ceLHai,
    espostoUno: dict.espostoUno,
    espostoMulti: dict.espostoMulti,
    inRegola: dict.inRegola,
    vediScheda: dict.vediScheda,
    disclaimer: shared.disclaimer,
  };

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{dict.h1}</h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">{dict.intro}</p>
      </header>
      <CalcolatoreSanzioniClient paesi={paesi} labels={labels} hrefPerIso={hrefPerIso} />

      <RisorsaAttribuzione
        pageUrl={`https://geotapp.com${localizePath('/risorse/sanzioni-gps/', resolvedLocale)}`}
        pageTitle={d.risorseHub.cards.sanzioni.title}
        contactHref={localizePath('/contact', resolvedLocale)}
        labels={d.attribuzione}
        anno={2026}
      />
    </main>
  );
}
