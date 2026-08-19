'use client';

/**
 * Chi siamo nella direzione L, ricostruita sul mockup
 * docs/redesign-sito-2026-07/esplorazione/chi-siamo.html.
 * I contenuti sono quelli veri del dizionario (chi_siamo): cambia come sono vestiti.
 */

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import FounderViewTracker from '@/components/analytics/FounderViewTracker';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';
import ListedOn from '@/components/ListedOn';
import FeaturedIn from '@/components/FeaturedIn';
import LNastro from '@/components/LNastro';

/** Etichetta breve per il fil di briciole: stessa traduzione gia' usata in Footer.tsx (voce "about"). */
const CRUMB_LABEL: Record<string, string> = {
  it: 'Chi siamo', en: 'About us', de: 'Über uns', fr: 'À propos', es: 'Sobre nosotros',
  pt: 'Sobre nós', nl: 'Over ons', da: 'Om os', sv: 'Om oss', nb: 'Om oss', ru: 'О нас',
};

/** "Presenti su": stessa etichetta gia' pubblicata in HomeClient.tsx. */
const PRESENTI: Record<string, string> = {
  it: 'Presenti su', en: 'Listed on', de: 'Gelistet auf', fr: 'Présents sur', es: 'Presentes en',
  pt: 'Presentes em', nl: 'Vermeld op', da: 'Optaget på', sv: 'Listade på', nb: 'Oppført på', ru: 'Мы представлены на',
};

export default function AboutPage() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const cs = dict.chi_siamo;
  const press = dict.stampa;
  const getLink = (path: string) => localizePath(path, currentLocale);
  const crumb = CRUMB_LABEL[currentLocale] ?? CRUMB_LABEL.en;
  const presenti = PRESENTI[currentLocale] ?? PRESENTI.en;

  return (
    <div className="lp-l lp-chi-siamo">
      {/* ── testata ── */}
      <section className="ph img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg1.webp" alt="" aria-hidden="true" fetchPriority="high" />
        <div className="sc" />
        <div className="crumb"><div className="w"><Link href={getLink('/')}>Home</Link> / {crumb}</div></div>
        <div className="w">
          <p className="kk k"><s />{cs.badge}</p>
          <h1>{cs.hero_title_line1}<br /><em>{cs.hero_title_line2}</em></h1>
          <p className="lede">{cs.hero_desc}</p>
          <div className="acts">
            <Link
              className="b1"
              href={getLink('/trial')}
              onClick={() => trackEvent('trial_click', { cta_source: 'chi_siamo_hero', cta_locale: currentLocale })}
            >
              {dict.landing.hero_cta_primary}
            </Link>
            <Link className="b2" href={getLink('/contact')}>{cs.cta_btn}</Link>
          </div>
        </div>
      </section>

      {/* ── il racconto ── */}
      <section className="sec"><div className="w">
        <div className="story r">
          {cs.story.map((para: string, i: number) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
        <div className="quote r d1" style={{ marginTop: 56 }}>{cs.mission_quote}</div>
      </div></section>

      {/* ── tre numeri, su nero ── */}
      <section className="sec ink" style={{ padding: 0 }}>
        <div className="stats r-s">
          {cs.stats.map((s: { number: string; label: string }, i: number) => (
            <div key={i}><b>{s.number}</b><span>{s.label}</span></div>
          ))}
        </div>
      </section>

      {/* ── i valori ── */}
      <section className="sec"><div className="w">
        <div className="hd"><h2 className="r">{cs.values_title}</h2></div>
        <div className="grid4">
          {cs.values.map((v: { title: string; desc: string }, i: number) => (
            <article key={i} className={`cardn r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <b>{v.title}</b>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </div></section>

      {/* ── il fondatore ── */}
      <section className="sec warm"><div className="w"><div className="fnd">
        <div className="r-s">
          <Image
            src="/michele-petraroli.webp"
            alt={`${cs.founder.name}, ${cs.founder.role} GeoTapp`}
            width={640}
            height={640}
          />
        </div>
        <div className="r d1">
          <FounderViewTracker source="chi_siamo" />
          <p className="kk k" style={{ color: 'var(--seal)' }}>{cs.founder.section_label}</p>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,46px)' }}>{cs.founder.name}</h2>
          <p style={{ color: '#6B7563', marginTop: 8 }}>{cs.founder.role}</p>
          <p style={{ color: '#3B4237', marginTop: 22, maxWidth: '60ch' }}>{cs.founder.bio}</p>
          <div style={{ marginTop: 24 }}>
            <p className="k" style={{ color: '#78836F', marginBottom: 12 }}>{cs.founder.expertise_label}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cs.founder.expertise.map((e: string) => (
                <span
                  key={e}
                  style={{
                    fontSize: 13.5, padding: '7px 14px', border: '1px solid rgba(14,14,12,.18)',
                    color: '#3B4237', borderRadius: 999,
                  }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
          <div className="acts" style={{ marginTop: 26 }}>
            <a
              className="b2"
              href="https://www.linkedin.com/in/mikepetraroli/"
              target="_blank"
              rel="noopener noreferrer nofollow me"
            >
              {cs.founder.cta_linkedin}
            </a>
            <Link className="b2" href={getLink('/contact')}>{cs.founder.cta_email}</Link>
            <Link className="b2" href={getLink('/stampa')}>{press.hero_title}</Link>
          </div>
        </div>
      </div></div></section>

      <LNastro />

      {/* ── presenti su ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r">{presenti}</p></div>
        <div className="host">
          <ListedOn locale={currentLocale} />
          <FeaturedIn locale={currentLocale} />
        </div>
      </section>

      {/* ── chiusura ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{cs.cta_title}</h2>
          <p className="r d1">{cs.cta_desc}</p>
          <div className="acts r d2">
            <Link
              className="b1"
              href={getLink('/trial')}
              onClick={() => trackEvent('trial_click', { cta_source: 'chi_siamo_end', cta_locale: currentLocale })}
            >
              {dict.landing.hero_cta_primary}
            </Link>
            <Link className="b2" href={getLink('/contact')}>{cs.cta_btn}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
