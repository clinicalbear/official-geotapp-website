import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { SLUG_MAP } from '@/lib/i18n/slug-map';
import { statoStrings } from '@/lib/risorse/stato-sorveglianza/i18n';
import { osservatorioStrings } from '@/lib/risorse/osservatorio/i18n';
import registro from '@/lib/risorse/osservatorio/data.json';
import '../osservatorio/l-page.css';
import './l-page.css';

/**
 * Risorsa "La sorveglianza sul lavoro in numeri": la lettura d'insieme dei provvedimenti
 * dell'osservatorio. I numeri si CALCOLANO a build time dallo stesso data.json
 * dell'osservatorio, quindi le due risorse non possono divergere e non c'e' niente da
 * tenere aggiornato a mano. I grafici sono SVG inline, senza librerie: la magnitudine e'
 * a un solo colore (il registro non e' una classifica, e non c'e' un grafico per paese).
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

const LOCALE_DATA: Record<string, string> = {
  it: 'it-IT', en: 'en-GB', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', pt: 'pt-PT',
  nl: 'nl-NL', sv: 'sv-SE', da: 'da-DK', nb: 'nb-NO', ru: 'ru-RU',
};
const ISO_REGIONE: Record<string, string> = { UK: 'GB' };

function nomePaese(codice: string, intl: string): string {
  try {
    return new Intl.DisplayNames([intl], { type: 'region' }).of(ISO_REGIONE[codice] ?? codice) ?? codice;
  } catch {
    return codice;
  }
}

interface Voce {
  country: string;
  published_at: string;
  topics: string[];
  amount_eur: number | null;
  title: string;
  source_url: string;
}

const TEMI_ORDINE = ['controllo_a_distanza', 'presenze_orario', 'geolocalizzazione', 'email_dipendenti', 'lavoro_agile'];
const ANNO_CORRENTE = 2026;   // l'anno in corso nel registro; il dato e' parziale, va segnato

function calcola(voci: Voce[]) {
  const perAnno = new Map<number, number>();
  const perTema = new Map<string, number>();
  const conImporto = voci.filter((v) => v.amount_eur);
  for (const v of voci) {
    const anno = Number(v.published_at.slice(0, 4));
    if (!Number.isNaN(anno)) perAnno.set(anno, (perAnno.get(anno) ?? 0) + 1);
    for (const t of v.topics) perTema.set(t, (perTema.get(t) ?? 0) + 1);
  }
  const anniConDato = voci.map((v) => Number(v.published_at.slice(0, 4))).filter((a) => !Number.isNaN(a));
  const primoAnno = Math.min(...anniConDato);
  const anni: { anno: number; n: number }[] = [];
  for (let a = primoAnno; a <= ANNO_CORRENTE; a++) anni.push({ anno: a, n: perAnno.get(a) ?? 0 });
  const temi = TEMI_ORDINE
    .map((k) => ({ key: k, n: perTema.get(k) ?? 0 }))
    .filter((t) => t.n > 0)
    .sort((a, b) => b.n - a.n);
  const multe = conImporto
    .sort((a, b) => (b.amount_eur as number) - (a.amount_eur as number))
    .slice(0, 8)
    .map((v) => ({ amount: v.amount_eur as number, country: v.country, title: v.title, url: v.source_url }));
  return {
    totale: voci.length,
    paesi: new Set(voci.map((v) => v.country)).size,
    conImporto: conImporto.length,
    somma: conImporto.reduce((s, v) => s + (v.amount_eur as number), 0),
    dal: Math.min(...anniConDato),
    al: Math.max(...anniConDato),
    anni,
    temi,
    multe,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const s = statoStrings(safeLocale(locale));
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/stato-sorveglianza/'),
  };
}

export default async function StatoSorveglianzaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = safeLocale(locale);
  const d = getDictionary(loc);
  const s = statoStrings(loc);
  const oss = osservatorioStrings(loc);
  const intl = LOCALE_DATA[loc] ?? 'it-IT';
  const nf = new Intl.NumberFormat(intl, { maximumFractionDigits: 0 });
  const dati = calcola(registro.voci as Voce[]);
  const homeHref = `/${loc}/`;
  const ossHref = `/${loc}/${SLUG_MAP.risorse?.[loc] ?? 'risorse'}/${SLUG_MAP.osservatorio?.[loc] ?? 'osservatorio'}/`;

  const maxAnno = Math.max(...dati.anni.map((a) => a.n));
  const maxTema = Math.max(...dati.temi.map((t) => t.n));
  const maxMulta = dati.multe.length ? dati.multe[0].amount : 1;

  // importo compatto: "35,3 mln" invece di "35.258.707", che in una barra non si legge
  const compatto = (v: number) =>
    v >= 1_000_000
      ? `${nf.format(Math.round(v / 100_000) / 10)} ${loc === 'it' ? 'mln' : 'M'} €`
      : `${nf.format(v)} €`;

  return (
    <div className="lp-l lp-risorsa-strumento lp-osservatorio lp-stato">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / {d.navbar.resources} / {s.nomeBreve}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{d.navbar.resources}</p>
          <h1>{s.h1}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <p className="oss-avviso">{s.avvertenza}</p>

          {/* numeri chiave */}
          <div className="st-tiles">
            <div className="st-tile">
              <span className="st-num">{nf.format(dati.totale)}</span>
              <span className="st-lab">{s.tProvvedimenti}</span>
            </div>
            <div className="st-tile">
              <span className="st-num">{dati.paesi}</span>
              <span className="st-lab">{s.tPaesi}</span>
            </div>
            <div className="st-tile">
              <span className="st-num">{compatto(dati.somma)}</span>
              <span className="st-lab">{s.tSanzioni}</span>
              <span className="st-sub">{s.tSanzioniNota(dati.conImporto)}</span>
            </div>
            <div className="st-tile">
              <span className="st-num">{dati.dal}&ndash;{dati.al}</span>
              <span className="st-lab">{s.tArco}</span>
            </div>
          </div>

          {/* grafico anni: barre verticali */}
          <figure className="st-fig">
            <figcaption>
              <h2>{s.gAnniTitolo}</h2>
              <p>{s.gAnniNota}</p>
            </figcaption>
            <div className="st-anni" role="img"
              aria-label={dati.anni.map((a) => `${a.anno}: ${a.n}`).join(', ')}>
              {dati.anni.map((a) => (
                <div className="st-col" key={a.anno}>
                  <span className="st-colval">{a.n}</span>
                  <div
                    className={`st-bar-v${a.anno === ANNO_CORRENTE ? ' st-parziale' : ''}`}
                    style={{ height: `${Math.max(4, (a.n / maxAnno) * 150)}px` }}
                    title={`${a.anno}: ${a.n}`}
                  />
                  <span className="st-collab">
                    {a.anno === ANNO_CORRENTE ? `${a.anno}*` : `’${String(a.anno).slice(2)}`}
                  </span>
                </div>
              ))}
            </div>
            <p className="st-note">* {s.inCorso}</p>
          </figure>

          {/* grafico temi: barre orizzontali */}
          <figure className="st-fig">
            <figcaption>
              <h2>{s.gTemiTitolo}</h2>
              <p>{s.gTemiNota}</p>
            </figcaption>
            <div className="st-rows">
              {dati.temi.map((t) => (
                <div className="st-row" key={t.key}>
                  <span className="st-rlab">{oss.temi[t.key] ?? t.key}</span>
                  <div className="st-track">
                    <div className="st-bar-h" style={{ width: `${(t.n / maxTema) * 100}%` }} />
                  </div>
                  <span className="st-rval">{t.n}</span>
                </div>
              ))}
            </div>
          </figure>

          {/* grafico multe: barre orizzontali con importo */}
          <figure className="st-fig">
            <figcaption>
              <h2>{s.gMulteTitolo}</h2>
              <p>{s.gMulteNota}</p>
            </figcaption>
            <div className="st-rows">
              {dati.multe.map((m) => (
                <div className="st-row st-row-multa" key={m.url}>
                  <span className="st-rlab">
                    <span className="st-paese">{nomePaese(m.country, intl)}</span>
                    <a href={m.url} rel="nofollow noopener" target="_blank">{m.title.slice(0, 60)}</a>
                  </span>
                  <div className="st-track">
                    <div className="st-bar-h" style={{ width: `${Math.max(3, (m.amount / maxMulta) * 100)}%` }} />
                  </div>
                  <span className="st-rval st-rval-eur">{compatto(m.amount)}</span>
                </div>
              ))}
            </div>
          </figure>

          <p className="oss-nota">{s.chiusura}</p>
          <p className="st-cta">
            <Link href={ossHref}>{s.vaiOsservatorio} &rarr;</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
