'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, resolveReviewText, type Source } from '@/data/reviews';

type ReviewsCopy = {
  heading: string;
  subheading: string;
  viewOn: string;
  aggregateLine: string;
  starsAriaLabel: string;
  translationNote: string;
};

const COPY: Record<string, ReviewsCopy> = {
  it: { heading: 'Ascolta chi ci usa ogni giorno', subheading: 'Recensioni reali da fonti verificate indipendenti', viewOn: 'Vedi su {source}', aggregateLine: 'Media {avg} stelle su {count} recensioni', starsAriaLabel: '{rating} stelle su 5', translationNote: 'Le recensioni sono tradotte per facilitarne la lettura. Clicca su una recensione per leggere l’originale verificato sulla fonte.' },
  en: { heading: 'What our customers say', subheading: 'Real reviews from verified independent sources', viewOn: 'View on {source}', aggregateLine: 'Average {avg} stars across {count} reviews', starsAriaLabel: '{rating} stars out of 5', translationNote: 'Reviews are translated for easier reading. Click any review to read the verified original on its source.' },
  de: { heading: 'Was unsere Kunden sagen', subheading: 'Echte Bewertungen aus unabhängig verifizierten Quellen', viewOn: 'Auf {source} ansehen', aggregateLine: 'Durchschnitt {avg} Sterne aus {count} Bewertungen', starsAriaLabel: '{rating} von 5 Sternen', translationNote: 'Die Bewertungen wurden zur besseren Lesbarkeit übersetzt. Klicken Sie auf eine Bewertung, um das verifizierte Original an der Quelle zu lesen.' },
  fr: { heading: 'Ce que disent nos clients', subheading: 'Avis réels issus de sources indépendantes vérifiées', viewOn: 'Voir sur {source}', aggregateLine: 'Moyenne {avg} étoiles sur {count} avis', starsAriaLabel: '{rating} étoiles sur 5', translationNote: 'Les avis sont traduits pour faciliter la lecture. Cliquez sur un avis pour lire l’original vérifié sur sa source.' },
  es: { heading: 'Lo que dicen nuestros clientes', subheading: 'Reseñas reales de fuentes independientes verificadas', viewOn: 'Ver en {source}', aggregateLine: 'Promedio {avg} estrellas sobre {count} reseñas', starsAriaLabel: '{rating} estrellas sobre 5', translationNote: 'Las reseñas están traducidas para facilitar la lectura. Haz clic en una reseña para leer el original verificado en su fuente.' },
  pt: { heading: 'O que dizem os nossos clientes', subheading: 'Avaliações reais de fontes independentes verificadas', viewOn: 'Ver em {source}', aggregateLine: 'Média {avg} estrelas em {count} avaliações', starsAriaLabel: '{rating} estrelas em 5', translationNote: 'As avaliações são traduzidas para facilitar a leitura. Clica numa avaliação para ler o original verificado na fonte.' },
  nl: { heading: 'Wat onze klanten zeggen', subheading: 'Echte reviews uit onafhankelijk geverifieerde bronnen', viewOn: 'Bekijk op {source}', aggregateLine: 'Gemiddeld {avg} sterren over {count} reviews', starsAriaLabel: '{rating} van de 5 sterren', translationNote: 'De reviews zijn vertaald voor het leesgemak. Klik op een review om het geverifieerde origineel bij de bron te lezen.' },
  ru: { heading: 'Что говорят наши клиенты', subheading: 'Реальные отзывы из независимых проверенных источников', viewOn: 'Смотреть на {source}', aggregateLine: 'Средняя оценка {avg} звёзд из {count} отзывов', starsAriaLabel: '{rating} звёзд из 5', translationNote: 'Отзывы переведены для удобства чтения. Нажмите на отзыв, чтобы прочитать проверенный оригинал на источнике.' },
  da: { heading: 'Hvad vores kunder siger', subheading: 'Ægte anmeldelser fra uafhængige verificerede kilder', viewOn: 'Se på {source}', aggregateLine: 'Gennemsnit {avg} stjerner ud af {count} anmeldelser', starsAriaLabel: '{rating} ud af 5 stjerner', translationNote: 'Anmeldelserne er oversat for at gøre dem lettere at læse. Klik på en anmeldelse for at læse den verificerede original ved kilden.' },
  sv: { heading: 'Vad våra kunder säger', subheading: 'Riktiga recensioner från oberoende verifierade källor', viewOn: 'Visa på {source}', aggregateLine: 'Genomsnitt {avg} stjärnor av {count} recensioner', starsAriaLabel: '{rating} av 5 stjärnor', translationNote: 'Recensionerna är översatta för att underlätta läsningen. Klicka på en recension för att läsa det verifierade originalet vid källan.' },
  nb: { heading: 'Hva kundene våre sier', subheading: 'Ekte anmeldelser fra uavhengige verifiserte kilder', viewOn: 'Se på {source}', aggregateLine: 'Gjennomsnitt {avg} stjerner av {count} anmeldelser', starsAriaLabel: '{rating} av 5 stjerner', translationNote: 'Anmeldelsene er oversatt for å gjøre dem lettere å lese. Klikk på en anmeldelse for å lese den verifiserte originalen hos kilden.' },
};

const SOURCE_NAMES: Record<Source, string> = {
  capterra: 'Capterra',
  trustpilot: 'Trustpilot',
  g2: 'G2',
  getapp: 'GetApp',
  softwareadvice: 'Software Advice',
};

const CapterraLogo = () => (
  <svg width={140} height={32} viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="8" width="4" height="18" rx="0.5" fill="#FF9D28"/>
    <rect x="8" y="4" width="4" height="22" rx="0.5" fill="#FF9D28"/>
    <rect x="14" y="10" width="4" height="16" rx="0.5" fill="#FF9D28"/>
    <rect x="20" y="6" width="4" height="20" rx="0.5" fill="#FF9D28"/>
    <rect x="0" y="26" width="26" height="3" rx="0.5" fill="#044D80"/>
    <text x="32" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="18" fontWeight="700" fill="#044D80">Capterra</text>
  </svg>
);

const TrustpilotLogo = () => (
  <svg width={120} height={28} viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="4" width="20" height="20" rx="2" fill="#00B67A"/>
    <path d="M12 7l1.5 4.5h4.5l-3.7 2.7 1.4 4.3-3.7-2.7-3.7 2.7 1.4-4.3-3.7-2.7h4.5z" fill="#fff"/>
    <text x="28" y="20" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="14" fontWeight="700" fill="#191919">Trustpilot</text>
  </svg>
);

const G2Logo = () => (
  <svg width={60} height={28} viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="2" width="24" height="24" rx="4" fill="#FF492C"/>
    <text x="6" y="20" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="14" fontWeight="800" fill="#fff">G2</text>
    <text x="32" y="20" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="12" fontWeight="700" fill="#191919">G2</text>
  </svg>
);

const GetAppLogo = () => (
  <svg width={110} height={32} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14" cy="16" r="12" stroke="#21B573" strokeWidth="3" fill="none"/>
    <path d="M14 16h10" stroke="#21B573" strokeWidth="3" strokeLinecap="round"/>
    <path d="M19 11l5 5-5 5" stroke="#21B573" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="32" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="18" fontWeight="700" fill="#2D3A4A">GetApp</text>
  </svg>
);

const SoftwareAdviceLogo = () => (
  <svg width={190} height={32} viewBox="0 0 190 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="4" width="22" height="18" rx="4" fill="#FF6B35"/>
    <polygon points="7,22 12,28 12,22" fill="#FF6B35"/>
    <polyline points="7,13 10.5,17 17,10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="30" y="23" fontFamily="var(--font-poppins, Poppins, sans-serif)" fontSize="17" fontWeight="600" fill="#1E3A5F">Software Advice</text>
  </svg>
);

const SOURCE_LOGOS: Record<Source, () => JSX.Element> = {
  capterra: CapterraLogo,
  trustpilot: TrustpilotLogo,
  g2: G2Logo,
  getapp: GetAppLogo,
  softwareadvice: SoftwareAdviceLogo,
};

export default function Reviews({ locale }: { locale: string }) {
  const c = COPY[locale] ?? COPY.en;

  if (REVIEWS.length === 0) return null;

  const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;
  const avgStr = avg.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section className="py-20 bg-white border-b border-slate-100" aria-label={c.heading}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-poppins, Poppins, sans-serif)' }}>
            {c.heading}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {c.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="reviews-marquee"
        >
          <div className="reviews-track">
            {[...REVIEWS, ...REVIEWS].map((r, idx) => {
              const sourceName = SOURCE_NAMES[r.source];
              const viewLabel = c.viewOn.replace('{source}', sourceName);
              const starsLabel = c.starsAriaLabel.replace('{rating}', String(r.rating));
              const Logo = SOURCE_LOGOS[r.source];
              const { text, lang } = resolveReviewText(r, locale);
              const isClone = idx >= REVIEWS.length;

              return (
                <a
                  key={`${r.id}-${idx}`}
                  href={r.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isClone ? undefined : `${viewLabel}, ${r.reviewer.displayName}`}
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : undefined}
                  className="reviews-card group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 transition-all flex flex-col gap-4 no-underline"
                >
                  <div className="flex items-center gap-1" aria-label={starsLabel} role="img">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={18} fill={i < r.rating ? '#FBBF24' : 'none'} stroke="#FBBF24" strokeWidth={1.5} aria-hidden="true" />
                    ))}
                  </div>
                  <p
                    lang={lang}
                    className="text-slate-700 text-base leading-relaxed italic"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {`“${text.quote}”`}
                  </p>
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <div className="font-semibold text-slate-900 text-sm">
                      {r.reviewer.displayName}
                    </div>
                    {(r.reviewer.industry || r.reviewer.companySize) && (
                      <div className="text-xs text-slate-500 mt-1">
                        {[r.reviewer.industry, r.reviewer.companySize].filter(Boolean).join(' · ')}
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 mt-3 text-xs text-slate-600 group-hover:text-slate-900 transition">
                      <Logo />
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <style>{`
          .reviews-marquee {
            overflow: hidden;
            /* Vertical padding gives room for the card hover lift + shadow,
               which would otherwise be clipped by overflow: hidden. */
            padding: 1.5rem 0;
            -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
          }
          .reviews-track {
            display: flex;
            width: max-content;
            animation: reviews-scroll 44s linear infinite;
          }
          .reviews-marquee:hover .reviews-track,
          .reviews-track:focus-within {
            animation-play-state: paused;
          }
          .reviews-card {
            width: 340px;
            height: 340px;
            flex-shrink: 0;
            margin-right: 2rem;
          }
          @keyframes reviews-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .reviews-marquee { overflow-x: auto; }
            .reviews-track { animation: none; }
          }
        `}</style>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          {c.aggregateLine.replace('{avg}', avgStr).replace('{count}', String(REVIEWS.length))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-xs text-slate-400 mt-3 max-w-2xl mx-auto"
        >
          {c.translationNote}
        </motion.p>
      </div>
    </section>
  );
}
