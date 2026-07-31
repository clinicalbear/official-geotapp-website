'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';

/**
 * Sezione settori della direzione L: sei riquadri verticali con la foto che
 * si accende al passaggio. I nomi sono quelli del menu del sito, i link
 * puntano alle pagine settore vere.
 */
const SETTORI = [
  { slug: 'installatori',   img: '/bg1.webp', pos: 'center 42%' },
  { slug: 'pulizie',        img: '/bg2.webp', pos: 'center 38%' },
  { slug: 'sicurezza',      img: '/bg3.webp', pos: 'center 40%' },
  { slug: 'elettricisti',   img: '/bg1.webp', pos: '26% 62%' },
  { slug: 'idraulici',      img: '/bg1.webp', pos: '84% 44%' },
  { slug: 'termoidraulici', img: '/bg1.webp', pos: '62% 74%' },
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
              <img src={s.img} alt="" loading="lazy" style={{ objectPosition: s.pos }} />
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
