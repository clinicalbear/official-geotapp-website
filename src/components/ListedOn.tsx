'use client';

import { motion } from 'framer-motion';

const logoStyles = `
.listed-on-wrapper {
  display: block;
}
@media (max-width: 1024px) {
  .listed-on-wrapper {
    display: none;
  }
}
.listed-on-logo {
  display: flex;
  align-items: center;
  filter: brightness(0) invert(1) opacity(0.85) drop-shadow(0 2px 6px rgba(0,0,0,0.12));
  transition: filter 0.8s ease-in-out, transform 0.8s ease-in-out;
}
.listed-on-logo:hover {
  filter: brightness(1) invert(0) opacity(1) drop-shadow(0 4px 12px rgba(0,0,0,0.25));
  transform: scale(1.12);
}
`;

/* ── Capterra logo: castle icon + wordmark ── */
const CapterraLogo = ({ scale }: { scale: number }) => (
  <svg width={140 * scale} height={32 * scale} viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="8" width="4" height="18" rx="0.5" fill="#FF9D28"/>
    <rect x="8" y="4" width="4" height="22" rx="0.5" fill="#FF9D28"/>
    <rect x="14" y="10" width="4" height="16" rx="0.5" fill="#FF9D28"/>
    <rect x="20" y="6" width="4" height="20" rx="0.5" fill="#FF9D28"/>
    <rect x="0" y="26" width="26" height="3" rx="0.5" fill="#044D80"/>
    <text x="32" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="18" fontWeight="700" fill="#044D80">Capterra</text>
  </svg>
);

/* ── GetApp logo: arrow icon + wordmark ── */
const GetAppLogo = ({ scale }: { scale: number }) => (
  <svg width={110 * scale} height={32 * scale} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14" cy="16" r="12" stroke="#21B573" strokeWidth="3" fill="none"/>
    <path d="M14 16h10" stroke="#21B573" strokeWidth="3" strokeLinecap="round"/>
    <path d="M19 11l5 5-5 5" stroke="#21B573" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="32" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="18" fontWeight="700" fill="#2D3A4A">GetApp</text>
  </svg>
);

/* ── Software Advice logo: chat bubble icon + wordmark ── */
const SoftwareAdviceLogo = ({ scale }: { scale: number }) => (
  <svg width={190 * scale} height={32 * scale} viewBox="0 0 190 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="4" width="22" height="18" rx="4" fill="#FF6B35"/>
    <polygon points="7,22 12,28 12,22" fill="#FF6B35"/>
    <polyline points="7,13 10.5,17 17,10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="30" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="17" fontWeight="600" fill="#1E3A5F">Software Advice</text>
  </svg>
);

const LABEL: Record<string, string> = {
  it: 'Presente su',
  en: 'Listed on',
  de: 'Gelistet auf',
  fr: 'Référencé sur',
  es: 'Presente en',
  pt: 'Presente em',
  nl: 'Vermeld op',
  ru: 'Размещено на',
  da: 'Opført på',
  sv: 'Listad på',
  nb: 'Oppført på',
};

/* ── Kompass logo ── */
const KompassLogo = ({ scale }: { scale: number }) => (
  <svg width={120 * scale} height={32 * scale} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14" cy="16" r="11" stroke="#E30613" strokeWidth="2.5" fill="none"/>
    <path d="M14 7l2 7 6-3-5 5 3 6-7-2-2 7-2-7-7 2 5-5-3-6 6 3z" fill="#E30613"/>
    <text x="32" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="17" fontWeight="700" fill="#1A1A1A">Kompass</text>
  </svg>
);

/* ── Cylex logo ── */
const CylexLogo = ({ scale }: { scale: number }) => (
  <svg width={100 * scale} height={32 * scale} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14" cy="16" r="10" fill="#0066CC"/>
    <text x="8" y="21" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="13" fontWeight="800" fill="#fff">C</text>
    <text x="30" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="18" fontWeight="700" fill="#0066CC">Cylex</text>
  </svg>
);

/* ── Hotfrog logo ── */
const HotfrogLogo = ({ scale }: { scale: number }) => (
  <svg width={120 * scale} height={32 * scale} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14" cy="16" r="11" fill="#8DC63F"/>
    <text x="9" y="22" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="16" fontWeight="800" fill="#fff">H</text>
    <text x="30" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="17" fontWeight="700" fill="#333">Hotfrog</text>
  </svg>
);

/* ── SaaSHub logo: hexagon icon + wordmark ── */
const SaaSHubLogo = ({ scale }: { scale: number }) => (
  <svg width={130 * scale} height={32 * scale} viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 4L24.5 9.5V20.5L14 26L3.5 20.5V9.5L14 4Z" fill="#6366F1"/>
    <text x="9" y="19" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="10" fontWeight="800" fill="#fff">S</text>
    <text x="30" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="17" fontWeight="700" fill="#6366F1">SaaSHub</text>
  </svg>
);

const URLS = {
  capterra: 'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
  getapp: 'https://www.getapp.com/operations-management-software/a/geotapp-flow/',
  softwareadvice: 'https://www.softwareadvice.com/product/548499-GeoTapp-Flow/',
  saashub: 'https://www.saashub.com/geotapp-flow',
  kompass: 'https://it.kompass.com/c/geotapp/it1415466/',
  cylex: 'https://www.cylex.it/azienda/geotapp.html',
  hotfrog: 'https://www.hotfrog.it/company/b582d0c9ce6459cc7416dce853e50149',
};

/* ── Compact footer variant ── */
function CompactListedOn({ locale }: { locale: string }) {
  const label = LABEL[locale] ?? LABEL.en;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 24px', gap: '24px', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', fontSize: '0.65rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      {[
        { name: 'Capterra', url: URLS.capterra, logo: <CapterraLogo scale={1} /> },
        { name: 'GetApp', url: URLS.getapp, logo: <GetAppLogo scale={1} /> },
        { name: 'Software Advice', url: URLS.softwareadvice, logo: <SoftwareAdviceLogo scale={1} /> },
        { name: 'SaaSHub', url: URLS.saashub, logo: <SaaSHubLogo scale={1} /> },
      ].map((p) => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}
          style={{ opacity: 0.6, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; }}
        >{p.logo}</a>
      ))}
    </div>
  );
}

/* ── Full homepage variant ── */
function FullListedOn({ locale }: { locale: string }) {
  const label = LABEL[locale] ?? LABEL.en;

  const platforms = [
    { name: 'Capterra', url: URLS.capterra, logo: <CapterraLogo scale={3} /> },
    { name: 'GetApp', url: URLS.getapp, logo: <GetAppLogo scale={3} /> },
    { name: 'Software Advice', url: URLS.softwareadvice, logo: <SoftwareAdviceLogo scale={3} /> },
    { name: 'SaaSHub', url: URLS.saashub, logo: <SaaSHubLogo scale={3} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3 }}
      style={{ textAlign: 'center', padding: '56px 24px 76px', position: 'relative', overflow: 'hidden', minHeight: '320px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: logoStyles }} />
      {/* Watermark text */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-0.15em',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
          fontSize: 'clamp(80px, 12vw, 140px)',
          fontWeight: 900,
          color: '#f8fafc',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          textShadow: '0 4px 12px rgba(0,0,0,0.15)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        {label}
      </span>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '64px',
          flexWrap: 'wrap',
          marginTop: '92px',
        }}
      >
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.name}
            className="listed-on-logo"
          >
            {p.logo}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function ListedOn({ locale, variant = 'default' }: { locale: string; variant?: 'default' | 'compact' }) {
  if (variant === 'compact') return <CompactListedOn locale={locale} />;
  return <FullListedOn locale={locale} />;
}
