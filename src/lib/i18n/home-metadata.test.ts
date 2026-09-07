import { describe, it, expect } from 'vitest';
import { HOME_META, HOME_TITLE_KEYWORD, HOME_TITLE_MAX } from './home-metadata';

// Il difetto che questo file impedisce di ripetere (misurato il 06/09/2026):
// il title dell'homepage era arrivato a 83 caratteri in italiano e 82 in
// inglese, e siccome Google taglia intorno ai 60-65 la parte che spariva era
// la coda, cioe' la parola chiave. Nessuno se n'era accorto per undici giorni
// perche' nessun test guardava la lunghezza.

const LOCALES = Object.keys(HOME_META);

describe('title dell’homepage', () => {
  it('copre le stesse 11 lingue in title, description e parola chiave', () => {
    expect(LOCALES).toHaveLength(11);
    expect(Object.keys(HOME_TITLE_KEYWORD).sort()).toEqual([...LOCALES].sort());
  });

  it.each(LOCALES)('%s: sta sotto il taglio di Google', (locale) => {
    expect(HOME_META[locale].title.length).toBeLessThanOrEqual(HOME_TITLE_MAX);
  });

  it.each(LOCALES)('%s: la parola chiave e’ prima del marchio', (locale) => {
    const title = HOME_META[locale].title;
    const kw = title.indexOf(HOME_TITLE_KEYWORD[locale]);
    const brand = title.indexOf('GeoTapp', kw + 1);
    // La parola chiave apre il title: e' la posizione che il taglio non
    // raggiunge mai, qualunque sia la larghezza in pixel dello snippet.
    expect(kw).toBe(0);
    expect(brand).toBeGreaterThan(kw);
  });

  it.each(LOCALES)('%s: il marchio c’e’, una volta sola', (locale) => {
    expect(HOME_META[locale].title.match(/GeoTapp/g)).toHaveLength(1);
  });

  it.each(LOCALES)('%s: la description resta nei 160 caratteri', (locale) => {
    const d = HOME_META[locale].description;
    expect(d.length).toBeGreaterThan(80);
    expect(d.length).toBeLessThanOrEqual(160);
  });
});
