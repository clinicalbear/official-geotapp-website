import { describe, it, expect } from 'vitest';
import { buildTrialPayload, TRIAL_DEFAULTS } from './payload';

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
