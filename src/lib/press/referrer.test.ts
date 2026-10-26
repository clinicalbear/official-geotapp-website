import { describe, it, expect } from 'vitest';
import { PRESS_COVERAGE } from './data';
import { buildReferrerRules, matchReferrer, copyForLocale, REFERRER_COPY, slotScript } from './referrer';
import vm from 'node:vm';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';

const rules = buildReferrerRules(PRESS_COVERAGE);

describe('matchReferrer', () => {
  it('riconosce HR Portugal dal solo origin (strict-origin-when-cross-origin)', () => {
    expect(matchReferrer('https://hrportugal.sapo.pt/', rules)?.outlet).toBe('Human Resources');
  });
  it('ignora il www', () => {
    expect(matchReferrer('https://www.personneltoday.com/hr/gps-at-work/', rules)?.outlet).toBe('Personnel Today');
  });
  it('non scatta per un altro sottodominio dello stesso gruppo (PME Magazine non ci linka)', () => {
    expect(matchReferrer('https://pmemagazine.sapo.pt/', rules)).toBeNull();
    expect(matchReferrer('https://sapo.pt/', rules)).toBeNull();
  });
  it('non scatta per host che solo contengono il nome', () => {
    expect(matchReferrer('https://hrportugal.sapo.pt.evil.example/', rules)).toBeNull();
    expect(matchReferrer('https://evil.example/?u=hrportugal.sapo.pt', rules)).toBeNull();
  });
  it('vuoto, illeggibile o il nostro stesso sito: niente banner', () => {
    expect(matchReferrer('', rules)).toBeNull();
    expect(matchReferrer('not a url', rules)).toBeNull();
    expect(matchReferrer('https://geotapp.com/it/', rules, 'geotapp.com')).toBeNull();
  });
});

describe('regole dalle uscite di stampa', () => {
  it('Sapo ha la frase propria, senza "minimizzazione" (non e un claim approvato)', () => {
    const r = matchReferrer('https://hrportugal.sapo.pt/', rules)!;
    expect(r.locale).toBe('pt');
    expect(r.welcome).toBeTruthy();
    expect(r.welcome!.toLowerCase()).not.toContain('minimiza');
    expect(r.welcome).toContain('automaticamente');
  });
  it('ogni host e normalizzato e mai un dominio padre nudo piu corto del necessario', () => {
    for (const r of rules) for (const h of r.hosts) expect(h).toBe(h.toLowerCase().replace(/^www\./, ''));
  });
  it('chi non ci linka non ha banner (ManagementSite, PME Magazine, ClockOn, GPO, Vigilanza, Risorse Umane)', () => {
    const senzaLink = ['ManagementSite', 'PME Magazine', 'ClockOn', 'GPO Magazine', 'Risorse Umane HR'];
    for (const o of senzaLink) expect(rules.find((r) => r.outlet === o), o).toBeUndefined();
  });
  it('ogni lingua del pezzo ha il suo testo', () => {
    for (const r of rules) expect(REFERRER_COPY[r.locale], r.outlet).toBeDefined();
    for (const l of SUPPORTED_LOCALES) expect(copyForLocale(l).welcome).toContain('{outlet}');
  });
});

describe('Vigilanza Privata Online (firma con link dal 20/10)', () => {
  it('ha il banner in italiano', () => {
    const r = matchReferrer('https://www.vigilanzaprivataonline.com/lettere-al-direttore/x.html', rules)!;
    expect(r.locale).toBe('it');
  });
});

describe('ISPER: il link ha noreferrer, il banner non puo scattare', () => {
  it('non entra nelle regole', () => {
    expect(rules.find((r) => r.outlet === 'ISPER HR Review')).toBeUndefined();
    expect(matchReferrer('https://www.isper.org/', rules)).toBeNull();
  });
});

describe('Personnel Today', () => {
  it('frase propria con il claim approvato (avverbio) e risorsa senza tracciamento', () => {
    const r = matchReferrer('https://www.personneltoday.com/hr/gps-at-work/', rules)!;
    expect(r.welcome).toContain('automatically');
    expect(r.cta?.path).toBe('/risorse/gps-presenze-senza-tracciamento');
    expect(r.welcome!).not.toMatch(/Make Work Pay|compliant|GDPR/i);
  });
});

describe('slotScript (riserva lo spazio prima del primo paint)', () => {
  function esegui(referrer: string, width: number, dismissed = false) {
    const slot = { style: { minHeight: '' } };
    const ctx = {
      document: { getElementById: () => slot, referrer },
      sessionStorage: { getItem: () => (dismissed ? '1' : null) },
      innerWidth: width,
      URL,
    };
    vm.runInNewContext(slotScript(rules), ctx);
    return slot.style.minHeight;
  }
  it('riserva altezza per Sapo, di piu su telefono che su desktop', () => {
    const tel = parseInt(esegui('https://hrportugal.sapo.pt/', 390));
    const desk = parseInt(esegui('https://hrportugal.sapo.pt/', 1440));
    expect(desk).toBeGreaterThan(0);
    expect(tel).toBeGreaterThan(desk);
  });
  it('niente spazio senza referrer, per altre testate, o se il banner e stato chiuso', () => {
    expect(esegui('', 390)).toBe('');
    expect(esegui('https://pmemagazine.sapo.pt/', 390)).toBe('');
    expect(esegui('https://hrportugal.sapo.pt/', 390, true)).toBe('');
  });
  it('non contiene mai </script> (si inietta in una pagina)', () => {
    expect(slotScript(rules)).not.toMatch(/<\//);
  });
});
