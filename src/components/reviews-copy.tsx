// Testi e loghi delle recensioni, separati da Reviews.tsx il 24/09/2026: la home li usa
// e importandoli da Reviews.tsx si portava dietro framer-motion (34 KB) senza usarlo.
import type { Source } from '@/data/reviews';

type ReviewsCopy = {
  heading: string;
  subheading: string;
  viewOn: string;
  aggregateLine: string;
  starsAriaLabel: string;
  translationNote: string;
};

export const REVIEWS_COPY: Record<string, ReviewsCopy> = {
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

export const SOURCE_NAMES: Record<Source, string> = {
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
    <text x="32" y="23" fontFamily="var(--font-display)" fontSize="18" fontWeight="700" fill="#044D80">Capterra</text>
  </svg>
);

const TrustpilotLogo = () => (
  <svg width={120} height={28} viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="4" width="20" height="20" rx="2" fill="#00B67A"/>
    <path d="M12 7l1.5 4.5h4.5l-3.7 2.7 1.4 4.3-3.7-2.7-3.7 2.7 1.4-4.3-3.7-2.7h4.5z" fill="#fff"/>
    <text x="28" y="20" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#16244A">Trustpilot</text>
  </svg>
);

const G2Logo = () => (
  <svg width={60} height={28} viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="2" width="24" height="24" rx="4" fill="#FF492C"/>
    <text x="6" y="20" fontFamily="var(--font-display)" fontSize="14" fontWeight="800" fill="#fff">G2</text>
    <text x="32" y="20" fontFamily="var(--font-display)" fontSize="12" fontWeight="700" fill="#16244A">G2</text>
  </svg>
);

const GetAppLogo = () => (
  <svg width={110} height={32} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="14" cy="16" r="12" stroke="#21B573" strokeWidth="3" fill="none"/>
    <path d="M14 16h10" stroke="#21B573" strokeWidth="3" strokeLinecap="round"/>
    <path d="M19 11l5 5-5 5" stroke="#21B573" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="32" y="23" fontFamily="var(--font-display)" fontSize="18" fontWeight="700" fill="#344054">GetApp</text>
  </svg>
);

const SoftwareAdviceLogo = () => (
  <svg width={190} height={32} viewBox="0 0 190 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="4" width="22" height="18" rx="4" fill="#FF6B35"/>
    <polygon points="7,22 12,28 12,22" fill="#FF6B35"/>
    <polyline points="7,13 10.5,17 17,10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <text x="30" y="23" fontFamily="var(--font-display)" fontSize="17" fontWeight="600" fill="#1E3A5F">Software Advice</text>
  </svg>
);

export const SOURCE_LOGOS: Record<Source, () => JSX.Element> = {
  capterra: CapterraLogo,
  trustpilot: TrustpilotLogo,
  g2: G2Logo,
  getapp: GetAppLogo,
  softwareadvice: SoftwareAdviceLogo,
};
