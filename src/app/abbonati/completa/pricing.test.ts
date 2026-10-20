import { describe, it, expect } from 'vitest';
import {
  buildComparison,
  planForSeats,
  ttSeatsEur,
  type Catalog,
} from './pricing';
import { UI, UI_LOCALES } from './strings';

// Il listino come lo manda il CRM durante la promo fine 2026.
const promoCatalog: Catalog = {
  plans: [
    { code: 'SOLO', ttSeatCeiling: 5, includedTtSeats: 1, monthly: 39, annual: 390 },
    { code: 'TEAM', ttSeatCeiling: 15, includedTtSeats: 1, monthly: 99, annual: 990 },
    { code: 'BUSINESS', ttSeatCeiling: -1, includedTtSeats: 5, monthly: 199, annual: 1990 },
  ],
  ttSeatTiers: {
    monthly: [{ upTo: 25, eur: 3 }, { upTo: null, eur: 2.5 }],
    annual: [{ upTo: 25, eur: 36 }, { upTo: null, eur: 30 }],
  },
  officeSeatAnnualEur: 36,
  listCeilings: { SOLO: 2, TEAM: 5, BUSINESS: -1 },
  promo: { code: 'fine2026', endsAt: '2026-12-18T22:59:59Z', months: 12 },
};

// Quello che fa la pagina col codice: il tetto del piano sale dei posti del codice.
const conCodice = (extra: number): Catalog => ({
  ...promoCatalog,
  plans: promoCatalog.plans.map((p) =>
    p.code === 'TEAM' ? { ...p, ttSeatCeiling: p.ttSeatCeiling + extra } : p,
  ),
});

// Le righe del carrello vero: Team + postazioni da pagare (quelle incluse tolte).
function righeTeam(seats: number, interval: 'annual' | 'monthly', office = 0) {
  const incluse = 1;
  const flow = promoCatalog.plans.find((p) => p.code === 'TEAM')![interval === 'annual' ? 'annual' : 'monthly'];
  const tt = ttSeatsEur(promoCatalog, Math.max(0, seats - incluse), interval);
  const off = interval === 'annual' ? office * 36 : 0;
  return { flow, tt, office: off, totale: Math.round((flow + tt + off) * 100) / 100 };
}

describe('piano che regge le postazioni', () => {
  it('17 postazioni in promo: Business; con il codice da 2 resta Team', () => {
    expect(planForSeats(promoCatalog, 17)).toBe('BUSINESS');
    expect(planForSeats(conCodice(2), 17)).toBe('TEAM');
    expect(planForSeats(conCodice(2), 18)).toBe('BUSINESS');
  });
});

describe('confronto "valore pieno" / "con promo e codice"', () => {
  it('il caso vero, annuale: 2.602 € a listino contro 1.566 € con promo e codice', () => {
    const c = buildComparison(promoCatalog, 17, 0, 'annual', righeTeam(17, 'annual'));
    expect(c).not.toBeNull();
    expect(c!.pieno).toMatchObject({ plan: 'BUSINESS', flow: 1990, tt: 612, totale: 2602 });
    expect(c!.promo).toMatchObject({
      flow: 990,
      lordo: 612, // 17 x 36
      valoreIncluse: 36, // una postazione inclusa in Flow Team
      tt: 576,
      totale: 1566,
    });
    // La riga si rifa a mano: 612 - 36 = 576, 990 + 576 = 1566.
    expect(c!.promo.lordo - c!.promo.valoreIncluse).toBe(c!.promo.tt);
    expect(c!.promo.flow + c!.promo.tt).toBe(c!.promo.totale);
  });
  it('mensile: 250 € contro 147 €', () => {
    const c = buildComparison(promoCatalog, 17, 0, 'monthly', righeTeam(17, 'monthly'));
    expect(c!.pieno).toMatchObject({ plan: 'BUSINESS', flow: 199, tt: 51, totale: 250 });
    expect(c!.promo).toMatchObject({ flow: 99, valoreIncluse: 3, tt: 48, totale: 147 });
  });
  it('i posti ufficio stanno in entrambe le colonne, uguali', () => {
    const c = buildComparison(promoCatalog, 17, 2, 'annual', righeTeam(17, 'annual', 2));
    expect(c!.pieno.office).toBe(72);
    expect(c!.promo.office).toBe(72);
    expect(c!.pieno.totale).toBe(2602 + 72);
    expect(c!.promo.totale).toBe(1566 + 72);
  });
  it('senza postazioni non c\'e\' niente da confrontare', () => {
    expect(buildComparison(promoCatalog, 0, 0, 'annual', righeTeam(0, 'annual'))).toBeNull();
  });
  it('se i due totali coincidono (nessuna promo, nessuna inclusa) il confronto sparisce', () => {
    const listino: Catalog = {
      ...promoCatalog,
      promo: null,
      plans: promoCatalog.plans.map((p) => ({ ...p, includedTtSeats: 0, ttSeatCeiling: promoCatalog.listCeilings![p.code]! })),
    };
    const righe = {
      flow: 990,
      tt: ttSeatsEur(listino, 4, 'annual'),
      office: 0,
      totale: 990 + ttSeatsEur(listino, 4, 'annual'),
    };
    expect(buildComparison(listino, 4, 0, 'annual', righe)).toBeNull();
  });
  it('oltre le 25 postazioni i prezzi seguono gli scaglioni, come Stripe', () => {
    // 30 a 36 sulle prime 25 e 30 sulle altre 5 = 900 + 150
    expect(ttSeatsEur(promoCatalog, 30, 'annual')).toBe(1050);
  });
});

describe('parole del codice e del confronto, in tutte le lingue', () => {
  it('le tredici voci nuove ci sono in tutte e 11 le lingue', () => {
    expect(UI_LOCALES).toHaveLength(11);
    for (const l of UI_LOCALES) {
      const t = UI[l];
      for (const k of ['codeTitle', 'codePlaceholder', 'codeApply', 'codeRemove', 'codeInvalid', 'codeUnavailable', 'compareFullTitle', 'comparePromoTitle', 'lineSeatsToPay'] as const) {
        expect(typeof t[k], `${l}.${k}`).toBe('string');
        expect(t[k].length, `${l}.${k}`).toBeGreaterThan(1);
      }
      expect(t.codeApplied(2, 'Team'), l).toContain('Team');
      expect(t.codeApplied(2, 'Team'), l).toContain('2');
      expect(t.codeWrongPlan('Team'), l).toContain('Team');
      expect(t.compareFullNote('Business', 17), l).toContain('Business');
      expect(t.compareFullNote('Business', 17), l).toContain('17');
      expect(t.lineIncluded(1, 'Team'), l).toContain('Team');
      expect(t.lineIncluded(1, 'Team'), l).toContain('1');
    }
  });
  it('tradotte davvero: nessuna lingua ripete l\'italiano', () => {
    for (const l of UI_LOCALES.filter((x) => x !== 'it')) {
      expect(UI[l].codeTitle, l).not.toBe(UI.it.codeTitle);
      expect(UI[l].compareFullTitle, l).not.toBe(UI.it.compareFullTitle);
      expect(UI[l].lineSeatsToPay, l).not.toBe(UI.it.lineSeatsToPay);
    }
  });
  it('mai il trattino lungo nelle frasi nuove', () => {
    for (const l of UI_LOCALES) {
      const t = UI[l];
      const frasi = [t.codeTitle, t.codeInvalid, t.codeUnavailable, t.compareFullTitle, t.comparePromoTitle, t.lineSeatsToPay, t.codeApplied(2, 'Team'), t.compareFullNote('Business', 5), t.lineIncluded(2, 'Team')];
      for (const f of frasi) expect(f, l).not.toMatch(/[—–]/);
    }
  });
  it('russo: le forme plurali cambiano con il numero', () => {
    const ru = UI.ru;
    expect(ru.lineIncluded(1, 'Team')).toContain('место входит');
    expect(ru.lineIncluded(2, 'Team')).toContain('места входят');
    expect(ru.lineIncluded(5, 'Team')).toContain('мест входят');
    expect(ru.lineIncluded(11, 'Team')).toContain('мест входят');
    expect(ru.lineIncluded(21, 'Team')).toContain('место входит');
    expect(ru.codeApplied(2, 'Team')).toContain('2 места');
    expect(ru.codeApplied(5, 'Team')).toContain('5 мест');
    expect(ru.compareFullNote('Business', 17)).toContain('17 мест');
    expect(ru.compareFullNote('Business', 21)).toContain('21 места');
  });
});
