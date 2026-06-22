import { describe, it, expect } from 'vitest';
import { PRESS_RELEASES, PRESS_COVERAGE, hasPress } from './data';

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
