import { describe, it, expect } from 'vitest';
import { trialErrorMessage, trialErrorForAnalytics, TRIAL_ERROR_DICT_KEYS } from './errors';
import { getDictionary } from '@/lib/i18n/dictionaries';

const en = { error_invalid_email: 'That email address does not look right.', error_message: 'Generic.' };

describe('trialErrorMessage (la frase esce nella lingua della pagina)', () => {
  it('traduce il codice del server invece di mostrare la sua frase italiana', () => {
    // Il caso del 31/08/2026: pagina en-gb, server "Indirizzo email non valido".
    expect(trialErrorMessage('invalid_email', en, 'Indirizzo email non valido')).toBe(en.error_invalid_email);
  });

  it('su un codice che non conosciamo mostra la frase del server (come prima)', () => {
    expect(trialErrorMessage('codice_mai_visto', en, 'Piano non valido')).toBe('Piano non valido');
  });

  it('senza codice ne frase del server ripiega sul messaggio generico', () => {
    expect(trialErrorMessage(null, en, null)).toBe(en.error_message);
  });

  it('ip_blocked e too_many_attempts dicono la stessa cosa a chi legge', () => {
    expect(TRIAL_ERROR_DICT_KEYS.ip_blocked).toBe(TRIAL_ERROR_DICT_KEYS.too_many_attempts);
  });
});

describe('trialErrorForAnalytics (in GA4 va il codice, non il testo tradotto)', () => {
  it('manda il codice quando c-e', () => {
    expect(trialErrorForAnalytics('invalid_email', 'That email address does not look right.')).toBe('invalid_email');
  });

  it('senza codice manda il testo tagliato a 100 caratteri', () => {
    const lungo = 'x'.repeat(250);
    expect(trialErrorForAnalytics(null, lungo)).toHaveLength(100);
  });

  it('senza niente non lascia il parametro vuoto', () => {
    expect(trialErrorForAnalytics(null, null)).toBe('unknown');
  });
});

describe('ogni codice tradotto ha la sua frase in TUTTE le lingue del sito', () => {
  const locales = ['it', 'en', 'en-gb', 'en-us', 'en-au', 'en-ca', 'en-ie',
    'de', 'nl', 'fr', 'es', 'pt', 'da', 'sv', 'nb', 'ru'];
  for (const locale of locales) {
    it(`${locale}: nessuna chiave mancante`, () => {
      const trial = (getDictionary(locale as any) as any).trial as Record<string, string>;
      const mancanti = Object.values(TRIAL_ERROR_DICT_KEYS).filter((k) => !trial[k]);
      expect(mancanti).toEqual([]);
    });
  }
});
