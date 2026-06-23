import { describe, it, expect } from 'vitest';
import { buildInformativa, buildInformativaDoc, infLocale } from './informativa';
import type { InfInputs } from './informativa';

/** Minimal inputs fixture; spread-override per test to keep DRY. */
function baseInputs(): InfInputs {
  return {
    azienda: 'Acme Srl',
    paese: 'Italia',
    finalita: 'organizzazione delle squadre',
    quando: 'solo alla timbratura',
    conservazione: '12 mesi',
    autorita: 'Garante',
  };
}

describe('codeterm section (R3 extension)', () => {
  it('adds the co-determination section with the per-country reference for IT', () => {
    const out = buildInformativa('it', baseInputs(), 'IT');
    expect(out).toContain('art. 4 L. 300/1970 (Statuto dei lavoratori)');
    expect(out).toContain('Cogestione');
  });

  it('uses the right national reference for each extended country', () => {
    const cases: Record<string, string> = {
      FR: 'art. L2312-38 Code du travail (CSE)',
      ES: 'art. 64 Estatuto de los Trabajadores',
      PT: 'comissão de trabalhadores (Código do Trabalho)',
      SE: 'MBL (lag 1976:580)',
      NO: 'aml § 9-2',
      DK: 'DA/LO-aftalen om kontrolforanstaltninger',
      FI: 'yhteistoimintalaki (1333/2021)',
      DE: '§ 87 Abs. 1 Nr. 6 BetrVG',
      AT: '§ 96 Abs. 1 Z 3 ArbVG',
      NL: 'art. 27 WOR',
    };
    for (const [iso, ref] of Object.entries(cases)) {
      const doc = buildInformativaDoc('en', baseInputs(), iso);
      const codeterm = doc.sezioni.find((s) => s.testo.includes(ref));
      expect(codeterm, `expected codeterm section for ${iso}`).toBeTruthy();
    }
  });

  it('omits the co-determination section for a country without a mapped regime', () => {
    const doc = buildInformativaDoc('it', baseInputs(), 'GB');
    const hasCodeterm = doc.sezioni.some((s) => /Cogestione|co-determination/i.test(s.titolo));
    expect(hasCodeterm).toBe(false);
  });

  it('maps unknown UI locales to en', () => {
    expect(infLocale('zz')).toBe('en');
    expect(infLocale('it')).toBe('it');
  });
});
