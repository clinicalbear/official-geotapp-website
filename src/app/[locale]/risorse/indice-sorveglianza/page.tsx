import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getPaesiSeverita, localizePaesiSeverita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import IndiceSorveglianzaClient, {
  type IndiceRow,
} from '@/components/risorse/IndiceSorveglianzaClient';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';
import './l-page.css';

/**
 * Tool "Indice della sorveglianza sul lavoro in Europa": classifica dei 39 Paesi
 * per severità del quadro su monitoraggio dei lavoratori. Derivato dai dossier
 * verificati (derive.ts). Route: /[locale]/risorse/indice-sorveglianza/.
 *
 * Vestito "direzione L" (docs/redesign-sito-2026-07/esplorazione/risorsa-strumento.html),
 * slug .lp-risorsa-strumento: la logica di ordinamento della classifica
 * (IndiceSorveglianzaClient) resta intatta, cambia solo la cornice attorno.
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
    openGraph: {
      url: buildCanonicalUrl(locale, '/risorse/indice-sorveglianza/'),
      type: 'website',
      title: dict.metaTitle,
      description: dict.metaDesc,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: dict.metaTitle }],
    },
  };
}

export default async function IndiceSorveglianzaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const d = getDictionary(resolvedLocale);
  const dict = d.indiceSorveglianza;

  const sev = getPaesiSeverita();
  const loc = localizePaesiSeverita(sev, resolvedLocale);
  // La colonna "Sanzione massima" mostrava la cifra nuda per tutte e 39 le righe:
  // 29 su 39 sono un importo che NON viene da un caso GPS. Qui la cifra si porta
  // dietro la sua qualifica (05/08/2026).
  const qualifica = (tipo: (typeof loc)[number]['sanzioneTipo']) =>
    tipo === 'caso-gps'
      ? d.risorseGps.sanzioneTipoCasoGps
      : tipo === 'caso-affine'
        ? d.risorseGps.sanzioneTipoCasoAffine
        : d.risorseGps.sanzioneTipoMassimale;
  const rows: IndiceRow[] = loc.map((p) => ({
    codiceISO: p.codiceISO,
    nome: p.nome,
    bandiera: p.bandiera,
    severita: p.severita,
    numObblighi: p.obbligatori.length,
    totaleAdempimenti: p.totaleAdempimenti,
    sanzioneImporto: p.sanzioneImporto,
    sanzioneQualifica: qualifica(p.sanzioneTipo),
    sanzioneVal: p.sanzioneVal,
    href: localizePath(`/risorse/gps-lavoratori-ue/${p.slugCanonico}/`, resolvedLocale),
  }));

  const labels = {
    colPaese: dict.colPaese,
    colIndice: dict.colIndice,
    colObblighi: dict.colObblighi,
    colSanzione: dict.colSanzione,
    scheda: dict.scheda,
  };

  const homeHref = `/${resolvedLocale}/`;

  return (
    <div className="lp-l lp-risorsa-strumento">
      {/* ── testata scura ── */}
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / {d.navbar.resources} / {dict.h1}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{d.navbar.resources}</p>
          <h1>{dict.h1}</h1>
          <p className="lede">{dict.intro}</p>
        </div>
      </section>

      {/* ── classifica: logica di ordinamento intatta, solo incorniciata ── */}
      <section className="sec" id="classifica">
        <div className="wn">
          <IndiceSorveglianzaClient rows={rows} labels={labels} />

          <div className="metodo r">
            <p className="metodo-t">{dict.metodologiaTitolo}</p>
            <p className="metodo-p">{dict.metodologia}</p>
          </div>
        </div>
      </section>

      <section className="fq fq-wrap">
        <div className="w">
          <RisorsaFaq title={dict.faq.title} items={dict.faq.items} />
        </div>
      </section>

      {/* ── attribuzione: già restylata altrove, resta in fondo pagina ── */}
      <section className="sec warm">
        <div className="wn">
          <RisorsaAttribuzione
            pageUrl={`https://geotapp.com${localizePath('/risorse/indice-sorveglianza/', resolvedLocale)}`}
            pageTitle={d.risorseHub.cards.indice.title}
            contactHref={localizePath('/contact', resolvedLocale)}
            labels={d.attribuzione}
            anno={2026}
          />
        </div>
      </section>
    </div>
  );
}
