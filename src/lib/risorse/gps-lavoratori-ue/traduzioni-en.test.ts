import { describe, it, expect } from 'vitest';
import { PAESI } from './index';
import { brasile } from '../gps-lavoratori-extra-ue/paesi/br';
import { loc } from './localize';
import { TESTI_EN } from './traduzioni-en';

// Parole che nei titoli delle fonti e nei nomi dei contatti tradiscono l'italiano.
const PAROLE_ITALIANE =
  /\b(della|delle|degli|dello|dei|del|nel|nella|sono|per|sul|sulla|sulle|sui|presentare|reclamo|reclami|segnalazioni|lista|elenco|sanzione|legge|dipendenti|lavoratori|lavoro|guida|decisione|comunicato|riferimento)\b/i;

// Nomi propri italiani che contengono quelle parole e restano cosi' in inglese.
const NOMI_PROPRI = ['Azienda di Tutela della Salute per la Liguria', 'Garante per la protezione dei dati personali', 'AGI Lavoro'];
const senzaNomiPropri = (t: string) => NOMI_PROPRI.reduce((acc, n) => acc.split(n).join(''), t);

describe('traduzioni inglesi delle schede-paese', () => {
  it('nessun titolo di fonte ne nome di contatto resta in italiano nelle lingue inglesi', () => {
    const rimasti: string[] = [];
    for (const p of [...PAESI, brasile]) {
      for (const locale of ['en', 'en-gb', 'en-us'] as const) {
        const testi: string[] = [];
        for (const f of p.fonti) testi.push(loc(f.titolo, locale));
        for (const c of p.checklist) testi.push(loc(c.fonte.titolo, locale));
        for (const c of [p.autoritaCompetente, ...p.contatti]) testi.push(loc(c.ente, locale));
        for (const t of testi) if (PAROLE_ITALIANE.test(senzaNomiPropri(t))) rimasti.push(`${p.codiceISO}: ${t}`);
      }
    }
    expect([...new Set(rimasti)]).toEqual([]);
  });

  it('ogni chiave del dizionario e la sua resa non sono vuote e non coincidono', () => {
    for (const [it, en] of Object.entries(TESTI_EN)) {
      expect(en.trim().length).toBeGreaterThan(0);
      expect(en).not.toBe(it);
    }
  });

  it('le altre lingue continuano a leggere il testo della scheda', () => {
    expect(loc('CNIL, presentare un reclamo', 'sv')).toBe('CNIL, presentare un reclamo');
    expect(loc('CNIL, presentare un reclamo', 'en')).toBe('CNIL, submit a complaint');
  });
});
