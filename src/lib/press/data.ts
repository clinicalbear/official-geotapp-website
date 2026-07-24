import type { AppLocale } from '@/lib/i18n/config';

export type PressItem = {
  date: string;       // ISO 'YYYY-MM-DD'
  outlet: string;     // testata o ente
  title: string;
  url: string;
  locale: AppLocale;  // lingua del pezzo
  logo?: string;      // path in /public del logo della testata (opzionale)
  follow?: boolean;   // reciprocità rel: true = diamo dofollow SOLO a chi ci ha dato un link dofollow;
                      // assente/false = nofollow (chi ci cita in nofollow o senza link). Fonti autorevoli solo.
};

// rel del nostro link uscente verso la testata.
// DECISIONE 13/07/2026: niente più reciprocità. TUTTI i link esterni escono nofollow,
// senza eccezioni, anche verso chi ci concede un dofollow. Il flag `follow` resta nel tipo
// solo come annotazione storica di chi ci linka dofollow, ma NON cambia più il rel.
export function pressRel(_item: PressItem): string {
  return 'noopener noreferrer nofollow';
}

// VUOTI al lancio. Aggiungere una voce = la sezione compare da sola in pagina.
export const PRESS_RELEASES: PressItem[] = [];
export const PRESS_COVERAGE: PressItem[] = [
  {
    date: '2026-07-24',
    outlet: 'GPO Magazine',
    title: "GPS et salariés : ce n'est pas de la surveillance si c'est une preuve du travail effectué",
    url: 'https://www.gpomag.fr/gps-et-salaries-ce-nest-pas-de-la-surveillance-si-cest-une-preuve-du-travail-effectue/',
    locale: 'fr',
    logo: '/press/gpomag.png',
    // Tribuna firmata, non promozionale: ci citano come "Michele Angelo Petraroli,
    // fondateur de GeoTapp" ma SENZA link (menzione non linkata, per accordo editoriale).
  },
  {
    date: '2026-07-13',
    outlet: 'Small Business Leader',
    title: 'Stop scope creep in service work: boundaries that protect margin and relationships',
    url: 'https://smallbizleader.com/qa/stop-scope-creep-in-service-work-boundaries-that-protect-margin-and-relationships/',
    locale: 'en',
    logo: '/press/smallbizleader.png',
    // NIENTE follow: ci linkano in dofollow (rel="" verificato nel DOM), ma il dominio ha
    // Spam Score Moz 37% (fascia media) -> non ricambiamo. Reversibile in ogni momento.
  },
  {
    date: '2026-07-13',
    outlet: 'AZ Big Media',
    title: 'Workflow automation: How leaders pick first-win pilots without hurting quality',
    url: 'https://azbigmedia.com/business/workflow-automation-how-leaders-pick-first-win-pilots-without-hurting-quality/#answer7',
    locale: 'en',
    logo: '/press/azbigmedia.png',
    follow: true, // AZ Big Media ci linka in dofollow (rel="noopener", verificato).
                  // NB: dal 13/07/2026 questo flag NON concede piu' dofollow (pressRel torna
                  // sempre nofollow): resta solo come annotazione di chi ci linka dofollow.
  },
  {
    date: '2026-07-08',
    outlet: 'Vigilanza Privata Online',
    title: 'GPS e vigilanza privata, prova del servizio o controllo del lavoratore?',
    url: 'https://www.vigilanzaprivataonline.com/vigilanza-tecnologica/gps-e-vigilanza-privata-prova-del-servizio-o-controllo-del-lavoratore-3560.html',
    locale: 'it',
    logo: '/press/vigilanzaprivataonline-v2.png',
  },
  {
    date: '2026-06-30',
    outlet: 'Risorse Umane HR',
    title: 'Presenze, GPS e art. 4: dove finisce la prova e dove comincia la sorveglianza',
    url: 'https://www.risorseumane-hr.it/presenze-gps-articolo-4/',
    locale: 'it',
    logo: '/press/logoHR.png',
  },
];

export function hasPress(items: PressItem[]): boolean {
  return items.length > 0;
}
