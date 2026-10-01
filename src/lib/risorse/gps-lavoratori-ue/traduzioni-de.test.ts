import { describe, it, expect } from 'vitest';
import { PAESI } from './index';
import { brasile } from '../gps-lavoratori-extra-ue/paesi/br';
import { loc } from './localize';
import { TESTI_DE } from './traduzioni-de';
import { TESTI_EN } from './traduzioni-en';

// Parole che nei titoli delle fonti e nei nomi dei contatti tradiscono l'italiano.
const PAROLE_ITALIANE =
  /\b(della|delle|degli|dello|dei|del|nel|nella|sono|per|sul|sulla|sulle|sui|presentare|reclamo|reclami|segnalazioni|lista|elenco|sanzione|legge|dipendenti|lavoratori|lavoro|guida|decisione|comunicato|riferimento)\b/i;

// Nomi propri italiani che contengono quelle parole e restano cosi' in tedesco.
const NOMI_PROPRI = ['Azienda di Tutela della Salute per la Liguria', 'Garante per la protezione dei dati personali', 'AGI Lavoro', 'Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza'];
const senzaNomiPropri = (t: string) => NOMI_PROPRI.reduce((acc, n) => acc.split(n).join(''), t);

describe('traduzioni tedesche delle schede-paese', () => {
  it('nessun titolo di fonte ne nome di contatto resta in italiano in tedesco', () => {
    const rimasti: string[] = [];
    for (const p of [...PAESI, brasile]) {
      const testi: string[] = [];
      for (const f of p.fonti) testi.push(loc(f.titolo, 'de'));
      for (const c of p.checklist) testi.push(loc(c.fonte.titolo, 'de'));
      for (const c of [p.autoritaCompetente, ...p.contatti]) testi.push(loc(c.ente, 'de'));
      for (const t of testi) if (PAROLE_ITALIANE.test(senzaNomiPropri(t))) rimasti.push(`${p.codiceISO}: ${t}`);
    }
    expect([...new Set(rimasti)]).toEqual([]);
  });

  it('ha le stesse chiavi del dizionario inglese e nessuna resa vuota o uguale all italiano', () => {
    expect(Object.keys(TESTI_DE).sort()).toEqual(Object.keys(TESTI_EN).sort());
    for (const [it, de] of Object.entries(TESTI_DE)) {
      expect(de.trim().length).toBeGreaterThan(0);
      expect(de).not.toBe(it);
    }
  });

  it('niente traslitterazioni ae/oe/ue al posto di ä/ö/ü nelle rese tedesche', () => {
    const sospetti = Object.values(TESTI_DE).filter((t) => /(ueber|Ueber|fuer|Fuer|Bussgeld|pruef|Pruef|veroeffent|Veroeffent)/.test(t));
    expect(sospetti).toEqual([]);
  });

  it('le altre lingue continuano a leggere il testo della scheda', () => {
    expect(loc('CNIL, presentare un reclamo', 'ru')).toBe('CNIL, presentare un reclamo');
    expect(loc('CNIL, presentare un reclamo', 'de')).toBe('CNIL, Beschwerde einreichen');
  });
});
