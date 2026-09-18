import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  VIDEO_TUTORIAL_IDS,
  linguaVideo,
  videoTutorialPoster,
  videoTutorialSottotitoli,
  videoTutorialSrc,
  videoTutorialYouTube,
  type LinguaVideo,
} from './video-tutorial';
import { SUPPORTED_LOCALES } from './i18n/config';

const PUBLIC = fileURLToPath(new URL('../../public', import.meta.url));
const LINGUE = Object.keys(VIDEO_TUTORIAL_IDS) as LinguaVideo[];
/** Due minuti tondi: il montaggio dura 120,085 s. */
const DURATA = 120;

describe('il video di avvio, servito da noi', () => {
  it('le undici lingue ci sono tutte, e ogni locale ne trova una', () => {
    expect(LINGUE).toHaveLength(11);
    for (const locale of SUPPORTED_LOCALES) {
      expect(LINGUE).toContain(linguaVideo(locale));
    }
    for (const l of ['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca']) {
      expect(linguaVideo(l)).toBe('en');
    }
  });

  it('video, locandina e sottotitoli stanno in public/ per ogni lingua', () => {
    for (const lingua of LINGUE) {
      for (const percorso of [
        videoTutorialSrc(lingua),
        videoTutorialPoster(lingua),
        videoTutorialSottotitoli(lingua),
      ]) {
        expect(existsSync(`${PUBLIC}${percorso}`), `manca ${percorso}`).toBe(true);
      }
    }
  });

  it('nessun file supera i limiti degli asset (25 MiB) e nessuno e\' vuoto', () => {
    for (const lingua of LINGUE) {
      const peso = statSync(`${PUBLIC}${videoTutorialSrc(lingua)}`).size;
      expect(peso, `${lingua} vuoto`).toBeGreaterThan(1_000_000);
      expect(peso, `${lingua} troppo grosso`).toBeLessThan(25 * 1024 * 1024);
    }
  });

  it('i sottotitoli sono WEBVTT, in ordine, e stanno dentro i due minuti', () => {
    for (const lingua of LINGUE) {
      const vtt = readFileSync(`${PUBLIC}${videoTutorialSottotitoli(lingua)}`, 'utf-8');
      expect(vtt.startsWith('WEBVTT'), lingua).toBe(true);
      const tempi = [...vtt.matchAll(/00:(\d\d):(\d\d\.\d\d\d) --> 00:(\d\d):(\d\d\.\d\d\d)/g)];
      expect(tempi.length, lingua).toBeGreaterThan(10);
      let precedente = 0;
      for (const t of tempi) {
        const da = Number(t[1]) * 60 + Number(t[2]);
        const a = Number(t[3]) * 60 + Number(t[4]);
        expect(a, lingua).toBeGreaterThan(da);
        expect(a, lingua).toBeLessThanOrEqual(DURATA);
        expect(da, lingua).toBeGreaterThanOrEqual(precedente - 0.001);
        precedente = da;
      }
      // La sigla dura due secondi e mezzo: prima non si parla.
      const primo = Number(tempi[0][1]) * 60 + Number(tempi[0][2]);
      expect(primo, `${lingua}: il primo sottotitolo entra dentro la sigla`).toBeGreaterThanOrEqual(2.5);
    }
  });

  it('gli id di YouTube restano, uno per lingua e tutti diversi', () => {
    const ids = LINGUE.map((l) => VIDEO_TUTORIAL_IDS[l]);
    expect(new Set(ids).size).toBe(11);
    for (const id of ids) expect(id).toMatch(/^[\w-]{11}$/);
    expect(videoTutorialYouTube('it')).toBe('https://www.youtube.com/watch?v=XnbJsEGBgvI');
  });

  it('il componente non punta piu\' a un iframe di YouTube', () => {
    const sorgente = readFileSync(
      fileURLToPath(new URL('../components/VideoTutorial.tsx', import.meta.url)),
      'utf-8',
    );
    expect(sorgente).not.toContain('<iframe');
    expect(sorgente).not.toContain('youtube-nocookie.com/embed');
    expect(sorgente).toContain('videoTutorialSrc');
  });
});
