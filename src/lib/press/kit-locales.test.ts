import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { PRESS_KIT_LANGUAGE_NAMES, PRESS_KIT_LOCALES, kitLocaleFor } from './kit-locales';

const KEYS = [
  'kit_title', 'kit_intro', 'kit_email', 'kit_lang', 'kit_optin', 'kit_privacy',
  'kit_privacy_link', 'kit_submit', 'kit_sent', 'kit_error', 'kit_invalid',
] as const;

describe('media kit stampa', () => {
  it('ogni lingua del kit ha il nome nel selettore', () => {
    expect(Object.keys(PRESS_KIT_LANGUAGE_NAMES).sort()).toEqual([...PRESS_KIT_LOCALES].sort());
  });

  it('le varianti del sito ricadono sulla lingua del kit giusta', () => {
    expect(kitLocaleFor('it')).toBe('it');
    expect(kitLocaleFor('en-gb')).toBe('en');
    expect(kitLocaleFor('en-ca')).toBe('en');
    expect(kitLocaleFor('nb')).toBe('nb');
    expect(kitLocaleFor('xx')).toBe('en');
  });

  it.each(PRESS_KIT_LOCALES)('dizionario %s: tutti i testi del modulo presenti, senza em-dash', (loc) => {
    const d = JSON.parse(readFileSync(join(__dirname, `../../dictionaries/${loc}.json`), 'utf8'));
    for (const k of KEYS) {
      const v = d.stampa[k];
      expect(typeof v, `${loc}.${k}`).toBe('string');
      expect(v.trim().length, `${loc}.${k}`).toBeGreaterThan(0);
      expect(v, `${loc}.${k}`).not.toContain('—');
    }
    // La casella e' facoltativa e va detto: nessuna lingua deve nasconderlo.
    expect(d.stampa.kit_optin.length).toBeGreaterThan(20);
  });
});
