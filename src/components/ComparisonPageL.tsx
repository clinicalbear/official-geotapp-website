/**
 * Template condiviso "direzione L" per le pagine di confronto singole
 * (le pagine /confronto/geotapp-vs-NOME/), imitando la struttura e le classi di
 * docs/redesign-sito-2026-07/esplorazione/confronto-clockify.html.
 * Slug scopato: lp-confronto-vs.
 *
 * I contenuti (badge, h1, tabella, FAQ, footnote, ecc.) restano quelli
 * VERI di ogni pagina: questo componente riceve tutto via props e non
 * inventa nessun testo. Ogni pagina geotapp-vs-NOME/page.tsx continua a possedere
 * i propri dati (META, FAQ, ROWS_LABELS, T, generateMetadata, schema.org)
 * esattamente come prima; cambia solo come vengono resi.
 */
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { CompareBlogLink } from '@/components/CompareBlogLink';
import LNastro from '@/components/LNastro';
import { BREADCRUMB_LABEL, HOME_LABEL } from '@/lib/seo/comparisonSchema';
import './l-page-confronto-vs.css';

const FeaturedIn = dynamic(() => import('@/components/FeaturedIn'), { ssr: true });
import { featuredLabel } from '@/lib/press/labels';

export type ComparisonRow = { feature: string; geotapp: boolean; competitor: boolean };
export type ComparisonFaqItem = { q: string; a: string };

export interface ComparisonPageLProps {
  locale: string;
  /** Nome visualizzato del competitor, es. "Clockify". */
  competitorName: string;
  /** Slug usato nei trackEvent/CompareBlogLink gia' esistenti, es. "clockify". */
  competitorId: string;
  badge: string;
  h1sub: string;
  desc: string;
  summaryLabel: string;
  summaryText: string;
  featuresTitle: string;
  featureColLabel: string;
  /** Paragrafo neutro estraibile dall'AI subito sotto la tabella (solo alcune pagine). */
  tableTakeaway?: string;
  footnote: string;
  diffTitle: string;
  geoItems: string[];
  compItems: string[];
  note?: { title: string; text: string };
  extraList?: { title: string; items: string[] };
  rows: ComparisonRow[];
  faqItems: ComparisonFaqItem[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  /** CompareBlogLink rende nulla da sola se non c'e' un articolo gemello: si passa sempre. */
  showBlogLink?: boolean;
}

export default function ComparisonPageL({
  locale,
  competitorName,
  competitorId,
  badge,
  h1sub,
  desc,
  summaryLabel,
  summaryText,
  featuresTitle,
  featureColLabel,
  tableTakeaway,
  footnote,
  diffTitle,
  geoItems,
  compItems,
  note,
  extraList,
  rows,
  faqItems,
  ctaTitle,
  ctaDesc,
  ctaBtn,
  showBlogLink = true,
}: ComparisonPageLProps) {
  const homeLabel = HOME_LABEL[locale] ?? HOME_LABEL.en;
  const compareLabel = BREADCRUMB_LABEL[locale] ?? BREADCRUMB_LABEL.en;
  const trialHref = `/${locale}/trial/`;
  const trialSource = `confronto_vs_${competitorId}`;

  return (
    <div className="lp-l lp-confronto-vs">
      {/* ── testata ── */}
      <section className="ph">
        <div className="crumb"><div className="w">
          <Link href={`/${locale}/`}>{homeLabel}</Link> / <Link href={`/${locale}/confronto/`}>{compareLabel}</Link> / vs {competitorName}
        </div></div>
        <div className="w">
          <p className="kk k"><s />{badge}</p>
          <h1>GeoTapp vs {competitorName}:<br /><em>{h1sub}</em></h1>
          <p className="lede">{desc}</p>
          <div className="acts">
            <TrialCTALink href={trialHref} source={trialSource} className="b1">{ctaBtn}</TrialCTALink>
          </div>
        </div>
      </section>

      {/* ── tabella comparativa ── */}
      <section className="sec"><div className="wn">
        <div className="hd">
          <h2 className="r">{featuresTitle}</h2>
          <p className="r d1"><b>{summaryLabel}</b> {summaryText}</p>
        </div>

        {note && (
          <div className="note r d1">
            <p className="t"><b>{note.title}</b></p>
            <p>{note.text}</p>
          </div>
        )}

        <div className="tbl r-s">
          <div className="rw hd2">
            <div>{featureColLabel}</div>
            <div className="c gt">GeoTapp</div>
            <div className="c">{competitorName}</div>
          </div>
          {rows.map((row, i) => (
            <div className="rw" key={i}>
              <div className="lab">{row.feature}</div>
              <div className={`c ${row.geotapp ? 'y' : 'n'}`}>{row.geotapp ? '✓' : '—'}</div>
              <div className={`c ${row.competitor ? 'y' : 'n'}`}>{row.competitor ? '✓' : '—'}</div>
            </div>
          ))}
        </div>

        {tableTakeaway && <p className="takeaway r">{tableTakeaway}</p>}
        <p className="foot r">{footnote}</p>
      </div></section>

      {/* ── in una riga ── */}
      <section className="sec ink"><div className="wn">
        <h2 className="r">{diffTitle}</h2>
        <div className="two r-s d1">
          <div>
            <h3>GeoTapp</h3>
            <ul className="rows">{geoItems.map((li, i) => <li key={i}>{li}</li>)}</ul>
          </div>
          <div>
            <h3>{competitorName}</h3>
            <ul className="rows">{compItems.map((li, i) => <li key={i}>{li}</li>)}</ul>
          </div>
        </div>
      </div></section>

      {/* ── elenco extra: casi d'uso o quando conviene l'altro ── */}
      {extraList && (
        <section className="sec"><div className="wn">
          <h2 className="r">{extraList.title}</h2>
          <ul className="rows r-s">{extraList.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div></section>
      )}

      {/* ── il nastro ── */}
      <LNastro />

      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{featuredLabel(locale)}</p></div>
        <div className="host">
          <FeaturedIn locale={locale} />
        </div>
      </section>

      {/* ── domande, che si aprono con calma ── */}
      <section className="fq"><div className="w"><div className="g">
        <h2 className="r">FAQ</h2>
        <div>
          {faqItems.map((item, i) => (
            <div className={`r d${Math.min(i + 1, 4)}`} key={i}>
              <details open={i === 0}>
                <summary><h3>{item.q}</h3></summary>
                <div className="ct"><p>{item.a}</p></div>
              </details>
            </div>
          ))}
        </div>
      </div></div></section>

      {/* ── ultima inquadratura ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{ctaTitle}</h2>
          <p className="r d1">{ctaDesc}</p>
          <div className="acts r d2">
            <TrialCTALink href={trialHref} source={trialSource} className="b1">{ctaBtn}</TrialCTALink>
          </div>
          {showBlogLink && (
            <div className="blog-link">
              <CompareBlogLink competitor={competitorId} locale={locale} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
