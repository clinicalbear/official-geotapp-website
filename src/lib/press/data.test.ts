import { describe, it, expect } from 'vitest';
import { PRESS_RELEASES, PRESS_COVERAGE, hasPress, pressVisibili } from './data';

describe('pressVisibili', () => {
  const v = { date: '2026-11-23', outlet: 'X', title: 'T', url: 'https://x', locale: 'sv' as const, visibleFrom: '2026-11-23T14:00:00+01:00' };
  const sempre = { ...v, outlet: 'Y', visibleFrom: undefined };
  it('prima dell\'ora (o senza ora letta) la voce programmata non c\'e\'', () => {
    expect(pressVisibili([v, sempre], null)).toEqual([sempre]);
    expect(pressVisibili([v, sempre], Date.parse('2026-11-23T13:59:59+01:00'))).toEqual([sempre]);
  });
  it('dall\'ora indicata compare', () => {
    expect(pressVisibili([v, sempre], Date.parse('2026-11-23T14:00:00+01:00'))).toEqual([v, sempre]);
  });
});

describe('press data', () => {
  it('exposes arrays (empty at launch)', () => {
    expect(Array.isArray(PRESS_RELEASES)).toBe(true);
    expect(Array.isArray(PRESS_COVERAGE)).toBe(true);
  });

  it('hasPress() reflects emptiness', () => {
    expect(hasPress([])).toBe(false);
    expect(hasPress([{ date: '2026-01-01', outlet: 'X', title: 'T', url: 'https://x', locale: 'it' }])).toBe(true);
  });
});
