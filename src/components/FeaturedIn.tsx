'use client';

import { motion } from 'framer-motion';
import { PRESS_COVERAGE, hasPress, pressRel } from '@/lib/press/data';

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
/* display via classe e non inline: lo style inline vincerebbe sul display:none
   con cui, a reduced-motion, si nascondono le copie del set. */
.featured-in-logo {
  display: inline-flex;
  align-items: center;
}
.featured-in-logo img {
  filter: brightness(0) invert(0.2);
  transition: filter .3s ease;
}
.featured-in-logo:hover img { filter: none; }

/* Striscia che scorre. Con 5+ testate la riga statica andava a capo e l'ultimo
   logo restava solo, centrato sotto gli altri: sembrava un errore di layout. */
.featured-in-viewport {
  position: relative;
  z-index: 1;
  margin-top: clamp(28px, 4vw, 44px);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%);
}
.featured-in-track {
  display: flex;
  width: max-content;
  align-items: center;
  animation: featured-in-scroll var(--fi-duration, 35s) linear infinite;
}
.featured-in-viewport:hover .featured-in-track { animation-play-state: paused; }
/* Il margine sta sulla cella, non come gap sulla track: cosi' ogni copia del set
   e' larga esattamente 1/3 e il -33.3333% chiude il giro senza scatti. */
.featured-in-cell {
  flex: 0 0 auto;
  margin-right: clamp(28px, 6vw, 72px);
}
@keyframes featured-in-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-33.3333%); }
}
@media (prefers-reduced-motion: reduce) {
  .featured-in-viewport { -webkit-mask-image: none; mask-image: none; }
  .featured-in-track {
    animation: none;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .featured-in-cell:last-child { margin-right: 0; }
  .featured-in-dup { display: none; }
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

      {/* Loghi nudi (niente riquadri) su una striscia che scorre in continuo.
          Il set e' ripetuto 3 volte: la copia 1 sono i link veri, le altre due
          servono solo a riempire schermi larghi e a chiudere il loop, quindi
          escono dall'albero accessibile e dalla tabulazione. */}
      <div className="featured-in-viewport">
        <div
          className="featured-in-track"
          style={{ ['--fi-duration' as string]: `${Math.max(24, PRESS_COVERAGE.length * 7)}s` }}
        >
          {[0, 1, 2].map((copy) =>
            PRESS_COVERAGE.map((item) => (
              <a
                key={`${copy}-${item.outlet}`}
                href={item.url}
                target="_blank"
                rel={pressRel(item)}
                aria-label={copy === 0 ? item.outlet : undefined}
                aria-hidden={copy === 0 ? undefined : true}
                tabIndex={copy === 0 ? undefined : -1}
                className={`featured-in-logo featured-in-cell${copy === 0 ? '' : ' featured-in-dup'}`}
              >
                {item.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt={copy === 0 ? item.outlet : ''}
                    // loading="lazy": senza, React 19 hoista un preload in <head> per ognuno dei
                    // 5 loghi (~142 KB) sul percorso critico mobile. La striscia è un marquee
                    // duplicato, non è mai l'elemento LCP. Fix 2026-07-27.
                    loading="lazy"
                    decoding="async"
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
            )),
          )}
        </div>
      </div>
    </motion.section>
  );
}
