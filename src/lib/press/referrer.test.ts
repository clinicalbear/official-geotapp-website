import { describe, it, expect, afterEach, vi } from 'vitest';
import { PRESS_COVERAGE } from './data';
import { buildReferrerRules, matchReferrer, copyForLocale, REFERRER_COPY, slotScript, arrivatoDallaStampa, analyticsConsentito, QUIET_KEY } from './referrer';
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

describe('il manuale esiste solo in italiano', () => {
  it('un\'offerta e ammessa solo su pezzi in italiano', () => {
    for (const i of PRESS_COVERAGE) if (i.referrer?.offer) expect(i.locale, i.outlet).toBe('it');
  });
  it('Vigilanza ha il pulsante e la scheda sul manuale, con la copertina', () => {
    const r = matchReferrer('https://www.vigilanzaprivataonline.com/x.html', rules)!;
    expect(r.cta?.path).toBe('/risorse/manuale-gdpr-lavoro-sul-campo');
    expect(r.offer?.path).toBe('/risorse/manuale-gdpr-lavoro-sul-campo');
    expect(r.offer?.cover).toBe('/downloads/manuale-copertina.webp');
  });
  it('le testate straniere non hanno ne manuale ne scheda', () => {
    for (const o of ['Human Resources', 'Personnel Today', 'AZ Big Media', 'COO Insider', 'Small Business Leader']) {
      expect(rules.find((r) => r.outlet === o)?.offer, o).toBeUndefined();
    }
  });
  it('il testo non promette conformita ne revisione', () => {
    const r = matchReferrer('https://www.vigilanzaprivataonline.com/x.html', rules)!;
    expect(JSON.stringify(r)).not.toMatch(/conform|garantisc|certific|revision/i);
  });
});

describe('arrivatoDallaStampa (sondaggio sospeso in questa visita)', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('true se la visita e arrivata da una testata (segnale senza nome)', () => {
    vi.stubGlobal('sessionStorage', { getItem: (k: string) => (k === QUIET_KEY ? '1' : null) });
    expect(arrivatoDallaStampa()).toBe(true);
  });
  it('false in una sessione nuova, o se lo storage non risponde', () => {
    vi.stubGlobal('sessionStorage', { getItem: () => null });
    expect(arrivatoDallaStampa()).toBe(false);
    vi.stubGlobal('sessionStorage', { getItem: () => { throw new Error('bloccato'); } });
    expect(arrivatoDallaStampa()).toBe(false);
  });
});

describe('analyticsConsentito (il nome della testata si salva solo col consenso)', () => {
  afterEach(() => vi.unstubAllGlobals());
  const prova = (raw: string | null, modo?: string) => {
    vi.stubGlobal('window', { __gtConsentMode: modo });
    vi.stubGlobal('localStorage', { getItem: (k: string) => (k === 'gtapp_cookie_consent' ? raw : null) });
    return analyticsConsentito();
  };
  it('true solo se la scelta salvata e "analytics: true"', () => {
    expect(prova('{"analytics":true,"ts":1,"action":"accept"}')).toBe(true);
  });
  it('false se ha rifiutato, se non ha ancora scelto, o se il dato e illeggibile', () => {
    expect(prova('{"analytics":false,"ts":1}')).toBe(false);
    expect(prova(null)).toBe(false);
    expect(prova('non json')).toBe(false);
  });
  it('true fuori dai paesi GDPR (regime rest: concesso di default, il banner non c\'e)', () => {
    expect(prova(null, 'rest')).toBe(true);
  });
});
