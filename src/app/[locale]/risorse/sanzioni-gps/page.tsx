import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getPaesiSeverita, localizePaesiSeverita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import CalcolatoreSanzioniClient from '@/components/risorse/CalcolatoreSanzioniClient';
import PannelloStrumento from '@/components/risorse/PannelloStrumento';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';
import '../tside.css';
import './l-page.css';

/**
 * Tool "Calcolatore sanzioni GPS": scegli un Paese, vedi la sanzione massima reale
 * e gli adempimenti che ti espongono. Riusa i 39 dossier verificati (derive.ts).
 * Route: /[locale]/risorse/sanzioni-gps/ (slug localizzato via slug-map).
 *
 * Vestito "direzione L" (docs/redesign-sito-2026-07/esplorazione/risorsa-strumento.html),
 * slug .lp-risorsa-strumento: testata scura .ph, calcolatore in .sec, FAQ in .fq
 * (via RisorsaFaq, invariato), attribuzione in .sec, chiusura fotografica .end.
 * Testi tutti dal dizionario reale (sanzioniGps + risorseGps), nessuno inventato.
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
    openGraph: {
      url: buildCanonicalUrl(locale, '/risorse/sanzioni-gps/'),
      type: 'website',
      title: dict.metaTitle,
      description: dict.metaDesc,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: dict.metaTitle }],
    },
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

  const homeHref = `/${resolvedLocale}/`;
  const trialUrl = `/${resolvedLocale}/trial/`;

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
          <div className="acts">
            <a className="b1" href="#calcolatore">{shared.scegliPaese}</a>
          </div>
        </div>
      </section>

      {/* ── il calcolatore vero: intatto, solo incorniciato ── */}
      <section className="sec">
        <div className="w" id="calcolatore">
          <div className="tool">
            <CalcolatoreSanzioniClient paesi={paesi} labels={labels} hrefPerIso={hrefPerIso} />
            <PannelloStrumento tool="sanzioni-gps" locale={resolvedLocale} />
          </div>
        </div>
      </section>

      <section className="fq fq-wrap">
        <div className="w">
          <RisorsaFaq title={dict.faq.title} items={dict.faq.items} />
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <RisorsaAttribuzione
            pageUrl={`https://geotapp.com${localizePath('/risorse/sanzioni-gps/', resolvedLocale)}`}
            pageTitle={d.risorseHub.cards.sanzioni.title}
            contactHref={localizePath('/contact', resolvedLocale)}
            labels={d.attribuzione}
            anno={2026}
          />
        </div>
      </section>

      {/* ── chiusura fotografica ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg1.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov"></div>
        <div className="w">
          <h2 className="r">{shared.ctaTitolo}</h2>
          <p className="r d1">{shared.ctaTesto}</p>
          <div className="acts r d2">
            <a className="b1" href={trialUrl}>{shared.ctaBottone}</a>
            <a className="b2" href="#calcolatore">{shared.scegliPaese}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
