import { describe, it, expect } from 'vitest';
import { buildTrialPayload, leggiOrigine, TRIAL_DEFAULTS } from './payload';

describe('leggiOrigine (da dove arriva chi apre il trial)', () => {
  it('prende CTA, UTM e pagina di provenienza', () => {
    expect(
      leggiOrigine(
        '?utm_source=medium&utm_medium=articolo&utm_campaign=serco',
        'https://medium.com/@hellogeotapp/what-the-serco?x=1',
        'blog_inline',
      ),
    ).toEqual({
      cta: 'blog_inline',
      utm_source: 'medium',
      utm_medium: 'articolo',
      utm_campaign: 'serco',
      ref: 'medium.com/@hellogeotapp/what-the-serco',
    });
  });

  it('della pagina di provenienza non tiene la query: puo\' contenere dati personali', () => {
    const o = leggiOrigine('', 'https://example.com/pagina?email=mario@rossi.it&token=abc#x');
    expect(o).toEqual({ ref: 'example.com/pagina' });
  });

  it('ingresso diretto: nessuna origine', () => {
    expect(leggiOrigine('', '', null)).toBeUndefined();
  });

  it('taglia i valori troppo lunghi e ignora un referrer non valido', () => {
    const o = leggiOrigine(`?utm_source=${'x'.repeat(500)}`, 'non-un-url');
    expect(o?.utm_source?.length).toBe(100);
    expect(o?.ref).toBeUndefined();
  });

  it('entra nel payload solo se c\'e\'', () => {
    expect(buildTrialPayload('a@b.com', 'it').origine).toBeUndefined();
    expect(buildTrialPayload('a@b.com', 'it', undefined, '', { cta: 'home' }).origine).toEqual({ cta: 'home' });
  });
});

describe('buildTrialPayload (form a sola email → accesso pieno)', () => {
  it('da sola email produce i default ad accesso pieno (Business, Flow illimitato, cap TT alto)', () => {
    const p = buildTrialPayload('  Mario@Rossi.it ', 'it');
    expect(p.email).toBe('Mario@Rossi.it'); // trim, niente lowercase (lo fa il backend)
    expect(p.plan).toBe('BUSINESS');
    expect(p.businessUsers).toBe(9999); // utenti Flow "illimitati" nel trial
    expect(p.timetrackerSeats).toBe(50); // cap alto anti-abuso, "illimitato" per ogni PMI
    expect(p.language).toBe('it');
  });

  it('porta la lingua rilevata', () => {
    expect(buildTrialPayload('a@b.com', 'de').language).toBe('de');
  });

  it('espone le costanti di default', () => {
    expect(TRIAL_DEFAULTS.plan).toBe('BUSINESS');
    expect(TRIAL_DEFAULTS.timetrackerSeats).toBe(50);
    expect(TRIAL_DEFAULTS.businessUsers).toBe(9999);
  });
});
