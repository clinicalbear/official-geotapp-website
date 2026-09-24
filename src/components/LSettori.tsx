'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';

/**
 * Sezione settori della direzione L: nove riquadri verticali con la foto che
 * si accende al passaggio. I nomi sono quelli del menu del sito, i link
 * puntano alle pagine settore vere.
 */
const SETTORI = [
  { slug: 'installatori',   img: '/settori/installatori.webp', pos: '62% 30%' },
  { slug: 'pulizie',        img: '/settori/pulizie.webp', pos: '74% 35%' },
  { slug: 'sicurezza',      img: '/settori/sicurezza.webp', pos: '62% 30%' },
  { slug: 'elettricisti',   img: '/settori/elettricisti.webp', pos: '67% 30%' },
  { slug: 'idraulici',      img: '/settori/idraulici.webp', pos: '72% 35%' },
  { slug: 'termoidraulici', img: '/settori/termoidraulici.webp', pos: '72% 30%' },
  { slug: 'edilizia',       img: '/settori/edilizia.webp', pos: '55% 35%' },
  { slug: 'manutenzione',   img: '/settori/manutenzione.webp', pos: '47% 30%' },
  { slug: 'impianti',       img: '/settori/impianti.webp', pos: '72% 30%' },
] as const;

export default function LSettori() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  const link = (p: string) => localizePath(p, locale);
  const nomi = dict.navbar.sectors as Record<string, string>;

  return (
    <section className="l-settori">
      <div className="container-geo">
        <div className="l-settori-hd">
          <h2>{dict.navbar.sectors.label}</h2>
          <Link href={link('/settori')} className="l-settori-all">
            {dict.navbar.sectors.label} &rarr;
          </Link>
        </div>
        <div className="l-settori-g">
          {SETTORI.map((s) => (
            <Link key={s.slug} href={link(`/settori/${s.slug}`)} className="l-settore">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} srcSet={`${s.img.replace('.webp', '-800.webp')} 800w, ${s.img} 1600w`} sizes="(max-width: 900px) 100vw, 12vw" alt="" loading="lazy" style={{ objectPosition: s.pos }} />
              <span className="l-settore-ov" />
              <span className="l-settore-cp">
                <b>{nomi[s.slug] ?? s.slug}</b>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
