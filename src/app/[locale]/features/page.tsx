'use client';

/**
 * Funzionalita', nella direzione L.
 * docs/redesign-sito-2026-07/esplorazione/funzionalita.html
 * Contenuti veri (dict.features): titolo, sottotitolo, i sette elementi e
 * lo screenshot restano; cambia solo come sono vestiti (lista a filo su
 * nero, come nel mockup, invece delle card con icone).
 */

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';

export default function FeaturesPage() {
  const { locale } = useParams<{ locale: string }>();
  const loc = locale as AppLocale;
  const t = getDictionary(loc).features;
  const nav = getDictionary(loc).navbar;
  const getLink = (path: string) => localizePath(path, loc);

  const feats = [
    { title: t.gps_title, desc: t.gps_desc },
    { title: t.offline_title, desc: t.offline_desc },
    { title: t.encryption_title, desc: t.encryption_desc },
    { title: t.realtime_title, desc: t.realtime_desc },
    { title: t.cms_title, desc: t.cms_desc },
    { title: t.datalake_title, desc: t.datalake_desc },
    { title: t.cdn_title, desc: t.cdn_desc },
  ];

  return (
    <div className="lp-l lp-funzionalita">
      <section className="ph">
        <div className="w">
          <h1>{t.title}</h1>
          <p className="lede">{t.subtitle}</p>
          <div className="acts">
            <Link className="b1" href={getLink('/trial')}>{nav.cta}</Link>
            <Link className="b2" href={getLink('/pricing')}>{nav.pricing}</Link>
          </div>
        </div>
      </section>

      <section className="shot"><div className="wn"><div className="frame r-s">
        <div className="browser">
          <div className="bar"><i /><i /><i /><b>{t.gps_title}</b></div>
          <Image
            src="/screen_live_map.webp"
            alt={t.gps_title}
            width={1862}
            height={967}
            priority
          />
        </div>
      </div></div></section>

      <section className="sec ink"><div className="w"><div className="tech r">
        {feats.map((f) => (
          <div className="it" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div></div></section>
    </div>
  );
}
