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
    date: '2026-06-30',
    outlet: 'Risorse Umane HR',
    title: 'Presenze, GPS e art. 4: dove finisce la prova e dove comincia la sorveglianza',
    url: 'https://www.risorseumane-hr.it/presenze-gps-articolo-4/',
    locale: 'it',
    logo: '/press/logoHR.jpg',
  },
];

export function hasPress(items: PressItem[]): boolean {
  return items.length > 0;
}
