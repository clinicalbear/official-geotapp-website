import { describe, it, expect } from 'vitest';
import { calcRoi, type RoiInput } from './roi';
describe('calcRoi', () => {
  it('matches the existing formula for a known input', () => {
    const input: RoiInput = { operatori: 10, costo_orario: 20, contestazioni: 3, ore_admin: 8 };
    const r = calcRoi(input);
    expect(r.risparmio_admin).toBe(5408);
    expect(r.risparmio_dispute).toBe(6480);
    expect(r.risparmio_coord).toBe(10400);
    expect(r.risparmio_totale).toBe(5408 + 6480 + 10400);
    expect(r.costo_geotapp_annuo).toBe(10 * 25 * 12);
  });
  it('mini mode (no ore_admin) yields disputes + coordination only', () => {
    const r = calcRoi({ operatori: 10, costo_orario: 20, contestazioni: 3 });
    expect(r.risparmio_admin).toBe(0);
    expect(r.risparmio_totale).toBe(6480 + 10400);
  });
});
