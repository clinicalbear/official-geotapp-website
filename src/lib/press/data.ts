import type { AppLocale } from '@/lib/i18n/config';

export type PressItem = {
  date: string;       // ISO 'YYYY-MM-DD'
  outlet: string;     // testata o ente
  title: string;
  url: string;
  locale: AppLocale;  // lingua del pezzo
  logo?: string;      // path in /public del logo della testata (opzionale)
};

// VUOTI al lancio. Aggiungere una voce = la sezione compare da sola in pagina.
export const PRESS_RELEASES: PressItem[] = [];
export const PRESS_COVERAGE: PressItem[] = [
  {
    date: '2026-07-13',
    outlet: 'AZ Big Media',
    title: 'Workflow automation: How leaders pick first-win pilots without hurting quality',
    url: 'https://azbigmedia.com/business/workflow-automation-how-leaders-pick-first-win-pilots-without-hurting-quality/#answer7',
    locale: 'en',
    logo: '/press/azbigmedia.png',
  },
  {
    date: '2026-07-08',
    outlet: 'Vigilanza Privata Online',
    title: 'GPS e vigilanza privata, prova del servizio o controllo del lavoratore?',
    url: 'https://www.vigilanzaprivataonline.com/vigilanza-tecnologica/gps-e-vigilanza-privata-prova-del-servizio-o-controllo-del-lavoratore-3560.html',
    locale: 'it',
    logo: '/press/vigilanzaprivataonline.png',
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
