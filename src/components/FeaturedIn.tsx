'use client';

import { motion } from 'framer-motion';
import { PRESS_COVERAGE, hasPress } from '@/lib/press/data';

// Media/press credibility bar ("cited by"). Localized idiomatically per market
// (a literal "cited on" reads wrong in EN/DE), mirroring the ListedOn label set.
const LABEL: Record<string, string> = {
  it: 'Citati su',
  en: 'Featured in',
  de: 'Bekannt aus',
  fr: 'Cités dans',
  es: 'Citados en',
  pt: 'Citados em',
  nl: 'Bekend van',
  ru: 'О нас пишут',
  da: 'Omtalt i',
  sv: 'Omtalade i',
  nb: 'Omtalt i',
};

const styles = `
.featured-in-chip { transition: transform .25s ease; text-decoration: none; display: inline-flex; }
.featured-in-chip:hover { transform: translateY(-3px); }
.featured-in-chip:hover .featured-in-inner {
  box-shadow: 0 10px 24px rgba(15,23,42,0.12);
  border-color: rgba(143,196,54,0.45);
}
.featured-in-inner {
  display: inline-flex; align-items: center;
  background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px;
  padding: 14px 22px; box-shadow: 0 2px 10px rgba(15,23,42,0.06);
  transition: box-shadow .25s ease, border-color .25s ease;
}
`;

export default function FeaturedIn({ locale }: { locale: string }) {
  // Same data source as /stampa: add a PressItem there and it shows up here too.
  if (!hasPress(PRESS_COVERAGE)) return null;
  const label = LABEL[locale] ?? LABEL.en;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3 }}
      aria-label={label}
      style={{
        textAlign: 'center',
        padding: '56px 24px 76px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Watermark label, same treatment as the "Listed on" bar */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-0.12em',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
          fontSize: 'clamp(56px, 11vw, 130px)',
          fontWeight: 900,
          color: '#eef2f7',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        {label}
      </span>

      {/* Static centered row of clean logo chips (few outlets -> no carousel) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: 'clamp(60px, 9vw, 104px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(18px, 4vw, 44px)',
          flexWrap: 'wrap',
        }}
      >
        {PRESS_COVERAGE.map((item) => (
          <a
            key={item.outlet}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={item.outlet}
            className="featured-in-chip"
          >
            <span className="featured-in-inner">
              {item.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.logo}
                  alt={item.outlet}
                  style={{
                    height: 'clamp(28px, 3.6vw, 42px)',
                    width: 'auto',
                    maxWidth: '210px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              ) : (
                <span style={{ fontWeight: 700, color: '#334155', fontSize: '0.95rem' }}>
                  {item.outlet}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
