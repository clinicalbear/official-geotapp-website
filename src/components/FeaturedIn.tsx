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
.featured-in-logo img {
  filter: brightness(0) invert(0.2);
  transition: filter .3s ease;
}
.featured-in-logo:hover img { filter: none; }
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
        background: 'linear-gradient(180deg, #e9ebee 0%, #f3f4f6 100%)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Watermark label, same treatment as the "Listed on" bar */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
          fontSize: 'clamp(19px, 3.7vw, 43px)',
          fontWeight: 900,
          color: 'rgba(51, 51, 51, 0.10)',
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

      {/* Static centered row of bare logos (no boxes), few outlets -> no carousel */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: 'clamp(28px, 4vw, 44px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(28px, 6vw, 72px)',
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
            className="featured-in-logo"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            {item.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.logo}
                alt={item.outlet}
                style={{
                  height: 'clamp(34px, 4.4vw, 52px)',
                  width: 'auto',
                  maxWidth: '240px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            ) : (
              <span style={{ fontWeight: 700, color: '#3f5220', fontSize: '1.05rem' }}>
                {item.outlet}
              </span>
            )}
          </a>
        ))}
      </div>
    </motion.section>
  );
}
