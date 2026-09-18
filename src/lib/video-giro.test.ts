import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  GIRO_CAPITOLI,
  GIRO_DURATA_SECONDI,
  GIRO_YOUTUBE_IDS,
  LINGUE_GIRO,
  giroLocandina,
  giroMiniatura,
  giroSottotitoli,
  giroVideoSrc,
  linguaGiro,
  orologio,
} from './video-giro';
import { GIRO_CONTENUTI } from './video-giro-contenuti';
import { giroVideoJsonLd } from './video-giro-jsonld';
import { getDictionary } from './i18n/dictionaries';
import { SUPPORTED_LOCALES } from './i18n/config';

const PUBLIC = fileURLToPath(new URL('../../public', import.meta.url));

describe('il giro completo, lingua per lingua', () => {
  it('ogni locale del sito trova una lingua del video', () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(LINGUE_GIRO).toContain(linguaGiro(locale));
    }
    // Le cinque varianti inglesi guardano lo stesso file.
    for (const l of ['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']) {
      expect(linguaGiro(l)).toBe('en');
    }
    // Una lingua che non abbiamo non deve cadere sull'italiano per sbaglio.
    expect(linguaGiro('pl')).toBe('en');
  });

  it('i quattro file di ogni lingua sono davvero in public/', () => {
    for (const lingua of LINGUE_GIRO) {
      for (const percorso of [
        giroVideoSrc(lingua),
        giroLocandina(lingua),
        giroMiniatura(lingua),
        giroSottotitoli(lingua),
      ]) {
        expect(existsSync(`${PUBLIC}${percorso}`), `manca ${percorso}`).toBe(true);
      }
    }
  });

  it('i sottotitoli sono WEBVTT e stanno dentro gli ottanta secondi', () => {
    for (const lingua of LINGUE_GIRO) {
      const vtt = readFileSync(`${PUBLIC}${giroSottotitoli(lingua)}`, 'utf-8');
      expect(vtt.startsWith('WEBVTT')).toBe(true);
      const tempi = [...vtt.matchAll(/00:(\d\d):(\d\d\.\d\d\d) --> 00:(\d\d):(\d\d\.\d\d\d)/g)];
      expect(tempi.length).toBeGreaterThan(10);
      for (const t of tempi) {
        const da = Number(t[1]) * 60 + Number(t[2]);
        const a = Number(t[3]) * 60 + Number(t[4]);
        expect(a).toBeGreaterThan(da);
        expect(a).toBeLessThanOrEqual(GIRO_DURATA_SECONDI);
      }
    }
  });

  it('gli undici id di YouTube sono uno per lingua e tutti diversi', () => {
    const ids = LINGUE_GIRO.map((l) => GIRO_YOUTUBE_IDS[l]);
    expect(ids).toHaveLength(11);
    expect(new Set(ids).size).toBe(11);
    for (const id of ids) expect(id).toMatch(/^[\w-]{11}$/);
  });

  it('i sette atti si susseguono senza buchi e finiscono con il video', () => {
    expect(GIRO_CAPITOLI).toHaveLength(7);
    GIRO_CAPITOLI.forEach((c, i) => {
      expect(c.a).toBeGreaterThan(c.da);
      if (i > 0) expect(c.da).toBe(GIRO_CAPITOLI[i - 1].a);
    });
    expect(GIRO_CAPITOLI[GIRO_CAPITOLI.length - 1].a).toBe(GIRO_DURATA_SECONDI);
  });

  it('ogni lingua ha i sette titoli e la trascrizione in ordine', () => {
    for (const lingua of LINGUE_GIRO) {
      const c = GIRO_CONTENUTI[lingua];
      expect(c.atti, lingua).toHaveLength(7);
      expect(c.titolo.length, lingua).toBeGreaterThan(0);
      expect(c.trascrizione.length, lingua).toBeGreaterThan(10);
      c.trascrizione.forEach((v, i) => {
        expect(v.testo.trim().length).toBeGreaterThan(0);
        if (i > 0) expect(v.da).toBeGreaterThanOrEqual(c.trascrizione[i - 1].da);
        expect(v.da).toBeLessThan(GIRO_DURATA_SECONDI);
      });
    }
  });

  it('i minuti si scrivono come su YouTube', () => {
    expect(orologio(3)).toBe('0:03');
    expect(orologio(69)).toBe('1:09');
    expect(orologio(80)).toBe('1:20');
  });
});

describe('i dati strutturati del video', () => {
  it('ogni locale produce un VideoObject completo, coi sette momenti chiave', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const schema = giroVideoJsonLd(locale, `/${locale}/video/`) as Record<string, unknown>;
      expect(schema['@type']).toBe('VideoObject');
      for (const campo of ['name', 'description', 'uploadDate', 'duration', 'contentUrl', 'embedUrl']) {
        expect(String(schema[campo] ?? ''), `${locale}.${campo}`).not.toBe('');
      }
      expect(schema.duration).toBe('PT1M20S');
      expect(String(schema.contentUrl)).toMatch(/^https:\/\/geotapp\.com\/video\/giro-\w+\.mp4$/);
      const miniature = schema.thumbnailUrl as string[];
      expect(miniature.every((u) => u.startsWith('https://geotapp.com/video/'))).toBe(true);

      const clip = schema.hasPart as { name: string; startOffset: number; endOffset: number }[];
      expect(clip).toHaveLength(7);
      clip.forEach((c) => {
        expect(c.name.length).toBeGreaterThan(0);
        expect(c.endOffset).toBeGreaterThan(c.startOffset);
        expect(c.endOffset).toBeLessThanOrEqual(GIRO_DURATA_SECONDI);
      });
    }
  });
});

describe('le parole del video nei dizionari', () => {
  it('tutti e sedici i locali hanno il blocco completo, senza buchi', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const t = getDictionary(locale).videoGiro;
      for (const chiave of ['kicker', 'title', 'note', 'audioOn', 'audioOff', 'play', 'chapters', 'pageLink', 'youtube', 'posterAlt', 'captions'] as const) {
        expect(String(t[chiave] ?? '').trim(), `${locale}.${chiave}`).not.toBe('');
      }
      for (const chiave of ['metaTitle', 'metaDescription', 'h1', 'intro', 'intro2', 'actsTitle', 'transcriptTitle', 'transcriptNote', 'honestyTitle', 'honesty', 'ctaTitle', 'ctaText', 'youtubeNote'] as const) {
        expect(String(t.page[chiave] ?? '').trim(), `${locale}.page.${chiave}`).not.toBe('');
      }
      // Il titolo della scheda in SERP si taglia oltre i sessanta caratteri.
      expect(t.page.metaTitle.length, `${locale} metaTitle`).toBeLessThanOrEqual(62);
      expect(t.page.metaDescription.length, `${locale} metaDescription`).toBeLessThanOrEqual(175);
    }
  });

  it('le lingue vere non restano in inglese per dimenticanza', () => {
    const inglese = getDictionary('en').videoGiro;
    for (const locale of ['it', 'de', 'fr', 'es', 'nl', 'pt', 'da', 'sv', 'nb', 'ru'] as const) {
      expect(getDictionary(locale).videoGiro.title, locale).not.toBe(inglese.title);
      expect(getDictionary(locale).videoGiro.audioOn, locale).not.toBe(inglese.audioOn);
    }
  });
});
