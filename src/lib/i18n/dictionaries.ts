

import enDict from '@/dictionaries/en.json';
import enUsDict from '@/dictionaries/en-us.json';
import enGbDict from '@/dictionaries/en-gb.json';
import enAuDict from '@/dictionaries/en-au.json';
import enIeDict from '@/dictionaries/en-ie.json';
import enCaDict from '@/dictionaries/en-ca.json';
import itDict from '@/dictionaries/it.json';
import deDict from '@/dictionaries/de.json';
import nlDict from '@/dictionaries/nl.json';
import frDict from '@/dictionaries/fr.json';
import esDict from '@/dictionaries/es.json';
import ptDict from '@/dictionaries/pt.json';
import daDict from '@/dictionaries/da.json';
import svDict from '@/dictionaries/sv.json';
import nbDict from '@/dictionaries/nb.json';
import ruDict from '@/dictionaries/ru.json';
import { DEFAULT_LOCALE, type AppLocale } from './config';

export type SiteDictionary = typeof enDict;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<unknown>
    ? T[K]
    : T[K] extends Record<string, unknown>
      ? DeepPartial<T[K]>
      : T[K];
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge<T>(target: T, source: DeepPartial<T>): T {
  // Scalar leaves are replaced directly; object leaves are recursively merged.
  if (!isObject(target) || !isObject(source)) {
    return source as T;
  }

  const output = { ...target } as Record<string, unknown>;

  for (const [key, value] of Object.entries(source)) {
    const existing = output[key];
    output[key] =
      isObject(existing) && isObject(value)
        ? deepMerge(existing, value)
        : value;
  }

  return output as T;
}

function withOverrides(overrides: DeepPartial<SiteDictionary>): SiteDictionary {
  // Base EN clonata e poi override locale per mantenere parita chiavi cross-lingua.
  return deepMerge(structuredClone(enDict), overrides);
}

// Centralized locale map used by both server and client rendering paths.
const DICTIONARIES: Record<AppLocale, SiteDictionary> = {
  // Keep all locales explicit to ensure compile-time key coverage.
  it: itDict,
  en: enDict,
  // Regional English variants: tiny override files merged onto base en dictionary
  // (currency hint, support timezone, regional compliance language). This avoids
  // duplicating thousands of lines per region.
  'en-us': withOverrides(enUsDict),
  'en-gb': withOverrides(enGbDict),
  'en-au': withOverrides(enAuDict),
  'en-ie': withOverrides(enIeDict),
  'en-ca': withOverrides(enCaDict),
  de: deDict,
  nl: withOverrides(nlDict),
  fr: withOverrides(frDict),
  es: withOverrides(esDict),
  pt: withOverrides(ptDict),
  da: withOverrides(daDict),
  sv: withOverrides(svDict),
  nb: withOverrides(nbDict),
  ru: withOverrides(ruDict),
};

export function getDictionary(locale?: AppLocale | null): SiteDictionary {
  // Unknown locale values still resolve to default to avoid missing-label crashes.
  // Render branch: kept explicit to preserve UX behavior across states.
  if (!locale) {
    // Null/undefined route locales always converge to default language.
    return DICTIONARIES[DEFAULT_LOCALE];
  }

  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

// I18n note: locale overrides must remain additive with default fallback (1/2)

// I18n note: locale overrides must remain additive with default fallback (2/2)
