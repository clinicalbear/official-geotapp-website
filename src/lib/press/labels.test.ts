import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { FEATURED_LABEL, featuredLabel } from './labels';

const SRC = join(__dirname, '..', '..');

function tuttiISorgenti(dir: string, out: string[] = []): string[] {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) tuttiISorgenti(p, out);
    else if (/\.tsx?$/.test(nome)) out.push(p);
  }
  return out;
}

describe('featuredLabel', () => {
  it('traduce le 11 lingue del blog', () => {
    expect(featuredLabel('it')).toBe('Citati su');
    expect(featuredLabel('de')).toBe('Bekannt aus');
    expect(Object.keys(FEATURED_LABEL)).toHaveLength(11);
  });

  it('le varianti regionali leggono la lingua base', () => {
    expect(featuredLabel('en-us')).toBe('Featured in');
    expect(featuredLabel('en-gb')).toBe('Featured in');
  });

  it('su una lingua sconosciuta ripiega sull inglese invece di lasciare il vuoto', () => {
    expect(featuredLabel('zz')).toBe('Featured in');
    expect(featuredLabel('')).toBe('Featured in');
  });
});

// L'etichetta stava dentro FeaturedIn.tsx, che e' 'use client': i componenti SERVER che
// ne importavano la costante ricevevano un riferimento client, non l'oggetto, e
// stampavano una stringa vuota. Succedeva su cos-e-geotapp, confronto e le pagine
// articolo del blog, senza nessun errore in build.
describe('la costante non torna dentro un modulo client', () => {
  it('nessun file importa FEATURED_LABEL da @/components/FeaturedIn', () => {
    const colpevoli = tuttiISorgenti(SRC).filter((f) => {
      const s = readFileSync(f, 'utf8');
      return /import[^;]*FEATURED_LABEL[^;]*from '@\/components\/FeaturedIn'/.test(s);
    });
    expect(colpevoli.map((f) => f.replace(SRC, ''))).toEqual([]);
  });

  it('il modulo delle etichette non e un componente client', () => {
    expect(readFileSync(join(__dirname, 'labels.ts'), 'utf8')).not.toMatch(/^'use client'/m);
  });
});
