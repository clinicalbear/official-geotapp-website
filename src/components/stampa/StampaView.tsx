'use client';

/**
 * Ufficio stampa nella direzione L, ricostruita sul mockup
 * docs/redesign-sito-2026-07/esplorazione/stampa.html.
 * I contenuti sono quelli veri del dizionario (stampa) e dei dati stampa
 * reali (@/lib/press/data): cambia come sono vestiti, non cosa dicono.
 */

import { useState } from 'react';
import type { ComponentType } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Copy, Check, ExternalLink, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

// Logo X (non presente in lucide): SVG inline, accetta `size` come le icone lucide.
function XIcon({ size = 18 }: { size?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

// Logo TikTok (non presente in lucide): SVG inline.
function TikTokIcon({ size = 18 }: { size?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

// Profili social ufficiali del brand (gli stessi del footer e del sameAs JSON-LD).
const PRESS_SOCIALS: { label: string; href: string; Icon: ComponentType<{ size?: number | string }> }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/110850300/', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/geotapp_official/', Icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573628884608', Icon: Facebook },
  { label: 'X', href: 'https://x.com/GeoTappOfficial', Icon: XIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@geotapp', Icon: TikTokIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@GeoTappOfficial', Icon: Youtube },
];
import type { SiteDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { PRESS_RELEASES, PRESS_COVERAGE, hasPress, pressRel } from '@/lib/press/data';
import LNastro from '@/components/LNastro';
import ListedOn from '@/components/ListedOn';
import FeaturedIn from '@/components/FeaturedIn';

/** "Chi siamo": stessa traduzione gia' usata in Footer.tsx (voce "about"). */
const ABOUT_LABEL: Record<string, string> = {
  it: 'Chi siamo', en: 'About us', de: 'Über uns', fr: 'À propos', es: 'Sobre nosotros',
  pt: 'Sobre nós', nl: 'Over ons', da: 'Om os', sv: 'Om oss', nb: 'Om oss', ru: 'О нас',
};

/** "Presenti su": stessa etichetta gia' pubblicata in HomeClient.tsx. */
const PRESENTI: Record<string, string> = {
  it: 'Presenti su', en: 'Listed on', de: 'Gelistet auf', fr: 'Présents sur', es: 'Presentes en',
  pt: 'Presentes em', nl: 'Vermeld op', da: 'Optaget på', sv: 'Listade på', nb: 'Oppført på', ru: 'Мы представлены на',
};

// Data ISO 'YYYY-MM-DD' → visualizzazione 'dd-MM-YYYY'. L'ISO resta nei dati (ordinamento).
function fmtPressDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return d && m && y ? `${d}-${m}-${y}` : iso;
}

// ── tiny hook: show a transient "copied" check for 2s ──────────────────────
function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(key: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied((prev) => (prev === key ? null : prev)), 2000);
    });
  }

  return { copied, copy };
}

export default function StampaView({
  d,
  locale,
  allResourcesLabel,
}: {
  d: SiteDictionary['stampa'];
  locale: AppLocale;
  allResourcesLabel: string;
}) {
  const { copied, copy } = useCopy();
  const about = ABOUT_LABEL[locale] ?? ABOUT_LABEL.en;
  const presenti = PRESENTI[locale] ?? PRESENTI.en;
  const facts = d.facts.filter((f) => !f.v.includes('{{'));

  return (
    <div className="lp-l lp-stampa">
      {/* ── testata ── */}
      <section className="ph">
        <div className="crumb"><div className="w"><Link href={localizePath('/', locale)}>Home</Link> / {d.hero_title}</div></div>
        <div className="w">
          <p className="kk k"><s />{d.badge}</p>
          <h1>{d.hero_title}</h1>
          <p className="lede">{d.hero_desc}</p>
          <div className="acts">
            <a className="b1" href="#risorse">{d.resources_label}</a>
            <a className="b2" href="#contatti">{d.contact_label}</a>
          </div>
        </div>
      </section>

      {/* ── in breve + dati in breve ── */}
      <section className="sec"><div className="w"><div className="two2">
        <div className="r">
          <p className="kk k" style={{ color: 'var(--seal)' }}>{d.boilerplate_label}</p>
          <div className="story">
            <p style={{ position: 'relative', paddingRight: 40 }}>
              {d.boilerplate_short}
              <button
                type="button"
                aria-label="Copy"
                onClick={() => copy('short', d.boilerplate_short)}
                style={{ position: 'absolute', right: 0, top: 0, background: 'none', border: 0, cursor: 'pointer', color: copied === 'short' ? 'var(--seal)' : '#78836F' }}
              >
                {copied === 'short' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </p>
            <p style={{ position: 'relative', paddingRight: 40 }}>
              {d.boilerplate_long}
              <button
                type="button"
                aria-label="Copy"
                onClick={() => copy('long', d.boilerplate_long)}
                style={{ position: 'absolute', right: 0, top: 0, background: 'none', border: 0, cursor: 'pointer', color: copied === 'long' ? 'var(--seal)' : '#78836F' }}
              >
                {copied === 'long' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </p>
          </div>
        </div>
        <div className="r d1">
          <p className="kk k" style={{ color: 'var(--seal)' }}>{d.facts_label}</p>
          <div className="facts">
            {facts.map((f) => (
              <div className="rw" key={f.k}>
                <div className="k2">{f.k}</div>
                <div>{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div></div></section>

      {/* ── il fondatore ── */}
      <section className="sec warm"><div className="w"><div className="fnd">
        <div className="r-s" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Image
            src="/michele-petraroli.webp"
            alt="Michele Angelo Petraroli, fondatore di GeoTapp"
            width={640}
            height={640}
          />
          <a href="/michele-petraroli.webp" download className="b2" style={{ fontSize: 13, textAlign: 'center' }}>
            {d.photo_download}
          </a>
          <Image
            src="/michele-petraroli-2.webp"
            alt="Michele Angelo Petraroli, fondatore di GeoTapp, sul palco"
            width={640}
            height={640}
          />
          <a href="/michele-petraroli-2.webp" download className="b2" style={{ fontSize: 13, textAlign: 'center' }}>
            {d.photo_download_2}
          </a>
        </div>
        <div className="r d1">
          <p className="kk k" style={{ color: 'var(--seal)' }}>{d.founder_label}</p>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,46px)' }}>Michele Angelo Petraroli</h2>
          <p style={{ color: '#3B4237', marginTop: 22, maxWidth: '60ch' }}>{d.founder_bio}</p>
        </div>
      </div></div></section>

      {/* ── risorse per la stampa ── */}
      <section className="sec" id="risorse"><div className="w">
        <div className="hd"><h2 className="r">{d.resources_label}</h2><p className="r d1">{d.resources_intro}</p></div>
        <div className="dl2 r-s">
          {[
            { name: 'GeoTapp', src: '/LogoGeoTapp.webp' },
            { name: 'GeoTapp Flow', src: '/logoFlow.webp' },
            { name: 'TimeTracker', src: '/logoTT.webp' },
            { name: 'Verifier', src: '/logoVerifier.webp' },
          ].map((logo) => (
            <a key={logo.name} href={logo.src} download>
              <span className="thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.name} loading="lazy" />
              </span>
              <b>{logo.name}</b>
              <span>{d.logo_download}</span>
            </a>
          ))}
          <a href="/michele-petraroli.webp" download>
            <span className="thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/michele-petraroli.webp" alt={d.photo_download} loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
            </span>
            <b>{d.photo_download}</b>
            <span>.webp</span>
          </a>
          <a href="/michele-petraroli-2.webp" download>
            <span className="thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/michele-petraroli-2.webp" alt={d.photo_download_2} loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
            </span>
            <b>{d.photo_download_2}</b>
            <span>.webp</span>
          </a>
          <a href={localizePath('/risorse/gps-lavoratori-ue/', locale)}>
            <b>{d.asset_map}</b>
            <span><ExternalLink size={13} style={{ display: 'inline', verticalAlign: -2 }} /></span>
          </a>
          <a href={localizePath('/risorse/generatore-informativa-gps/', locale)}>
            <b>{d.asset_facsimile}</b>
            <span><ExternalLink size={13} style={{ display: 'inline', verticalAlign: -2 }} /></span>
          </a>
          <a href={localizePath('/risorse/', locale)}>
            <b>{allResourcesLabel}</b>
            <span><ExternalLink size={13} style={{ display: 'inline', verticalAlign: -2 }} /></span>
          </a>
        </div>
      </div></section>

      {/* ── contatti stampa ── */}
      <section className="sec ink" id="contatti"><div className="w">
        <p className="kk k r">{d.contact_label}</p>
        <h2 className="r d1">{d.contact_office}</h2>
        <div className="acts r d2" style={{ marginTop: 26 }}>
          <a className="b1" href={`mailto:${d.contact_email}`}>{d.contact_email}</a>
        </div>
        <div className="r d3" style={{ marginTop: 34, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {PRESS_SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42,
                borderRadius: '50%', border: '1px solid rgba(242,240,233,.22)', color: '#F2F0E9',
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div></section>

      {/* ── comunicati stampa (solo se ce ne sono) ── */}
      {hasPress(PRESS_RELEASES) && (
        <section className="sec"><div className="w">
          <div className="hd"><h2 className="r">{d.releases_label}</h2></div>
          <ul className="rows">
            {PRESS_RELEASES.map((item, i) => (
              <li key={i}>
                <a href={item.url} target="_blank" rel={pressRel(item)} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'baseline' }}>
                  <time dateTime={item.date} style={{ fontSize: 12.5, color: '#78836F', fontVariantNumeric: 'tabular-nums' }}>{fmtPressDate(item.date)}</time>
                  <span className="k" style={{ color: 'var(--seal)', fontSize: 11 }}>{item.outlet}</span>
                  <span style={{ flex: 1 }}>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div></section>
      )}

      {/* ── pubblicazioni: chi ha scritto di noi ── */}
      {hasPress(PRESS_COVERAGE) && (
        <section className="sec warm"><div className="w">
          <div className="hd"><h2 className="r">{d.coverage_label}</h2></div>
          <ul className="rows covg">
            {[...PRESS_COVERAGE].sort((a, b) => b.date.localeCompare(a.date)).map((item, i) => {
              const riga = (
                <>
                  <span className="lg">
                    {item.logo && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={item.logo} alt={item.outlet} loading="lazy" />
                    )}
                  </span>
                  <time dateTime={item.date}>{fmtPressDate(item.date)}</time>
                  <span className="k out">{item.outlet}</span>
                  <span className="ti">{item.title}</span>
                </>
              );
              return (
                <li key={i}>
                  {item.url ? (
                    <a className="riga" href={item.url} target="_blank" rel={pressRel(item)}>{riga}</a>
                  ) : (
                    <span className="riga">{riga}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div></section>
      )}

      <LNastro />

      {/* ── presenti su + ci hanno citato ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r">{presenti}</p></div>
        <div className="host">
          <ListedOn locale={locale} />
          <FeaturedIn locale={locale} />
        </div>
      </section>

      {/* ── chiusura ── */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <p className="big r" style={{ fontSize: 'clamp(30px,5.2vw,72px)', maxWidth: '17ch', marginBottom: 24, color: 'var(--lime)' }}>
            {d.contact_label}
          </p>
          <p className="r d1" style={{ color: 'rgba(255,255,255,.8)', maxWidth: '58ch', marginBottom: 32 }}>{d.contact_office}</p>
          <div className="acts r d2">
            <a className="b1" href={`mailto:${d.contact_email}`}>{d.contact_email}</a>
            <Link className="b2" href={localizePath('/chi-siamo/', locale)}>{about}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
