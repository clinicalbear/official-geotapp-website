import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreSlug } from './types';

import {
  REGIONAL_FAQ as edilizia,
  REGIONAL_FAQ_TITLE as ediliziaTitle,
} from './edilizia/regional-faq';
import {
  REGIONAL_FAQ as elettricisti,
  REGIONAL_FAQ_TITLE as elettricistiTitle,
} from './elettricisti/regional-faq';
import {
  REGIONAL_FAQ as idraulici,
  REGIONAL_FAQ_TITLE as idrauliciTitle,
} from './idraulici/regional-faq';
import {
  REGIONAL_FAQ as impianti,
  REGIONAL_FAQ_TITLE as impiantiTitle,
} from './impianti/regional-faq';
import {
  REGIONAL_FAQ as impresaDiPulizie,
  REGIONAL_FAQ_TITLE as impresaDiPulizieTitle,
} from './impresa-di-pulizie/regional-faq';
import {
  REGIONAL_FAQ as installatori,
  REGIONAL_FAQ_TITLE as installatoriTitle,
} from './installatori/regional-faq';
import {
  REGIONAL_FAQ as manutenzione,
  REGIONAL_FAQ_TITLE as manutenzioneTitle,
} from './manutenzione/regional-faq';
import {
  REGIONAL_FAQ as pulizie,
  REGIONAL_FAQ_TITLE as pulizieTitle,
} from './pulizie/regional-faq';
import {
  REGIONAL_FAQ as sicurezza,
  REGIONAL_FAQ_TITLE as sicurezzaTitle,
} from './sicurezza/regional-faq';
import {
  REGIONAL_FAQ as termoidraulici,
  REGIONAL_FAQ_TITLE as termoidrauliciTitle,
} from './termoidraulici/regional-faq';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export type RegionalFaqMap = Partial<Record<AppLocale, RegionalFaqItem[]>>;
export type RegionalFaqTitleMap = Partial<Record<AppLocale, string>>;

export const ALL_REGIONAL_FAQ: Record<SettoreSlug, RegionalFaqMap> = {
  edilizia,
  elettricisti,
  idraulici,
  impianti,
  'impresa-di-pulizie': impresaDiPulizie,
  installatori,
  manutenzione,
  pulizie,
  sicurezza,
  termoidraulici,
};

export const ALL_REGIONAL_FAQ_TITLES: Record<SettoreSlug, RegionalFaqTitleMap> = {
  edilizia: ediliziaTitle,
  elettricisti: elettricistiTitle,
  idraulici: idrauliciTitle,
  impianti: impiantiTitle,
  'impresa-di-pulizie': impresaDiPulizieTitle,
  installatori: installatoriTitle,
  manutenzione: manutenzioneTitle,
  pulizie: pulizieTitle,
  sicurezza: sicurezzaTitle,
  termoidraulici: termoidrauliciTitle,
};
