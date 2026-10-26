import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// trackEvent marca gli eventi trial_* con la testata da cui e' arrivato il visitatore (press_outlet).
describe('trackEvent + press_outlet', () => {
  const eventi: Array<[string, Record<string, unknown>]> = [];
  let store: Record<string, string>;

  beforeEach(() => {
    eventi.length = 0;
    store = {};
    vi.stubGlobal('sessionStorage', {
      getItem: (k: string) => (k in store ? store[k] : null),
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
    });
    vi.stubGlobal('window', { gtag: (_: string, n: string, p: Record<string, unknown>) => eventi.push([n, p]) });
  });
  afterEach(() => { vi.unstubAllGlobals(); vi.resetModules(); });

  it('aggiunge press_outlet a trial_click e trial_page_view', async () => {
    store['gtapp_press_outlet'] = 'Human Resources';
    const { trackEvent } = await import('./analytics');
    trackEvent('trial_click', { cta_source: 'x' });
    trackEvent('trial_page_view');
    expect(eventi.map(([n, p]) => [n, p.press_outlet])).toEqual([
      ['trial_click', 'Human Resources'],
      ['trial_page_view', 'Human Resources'],
    ]);
  });
  it('non lo aggiunge agli altri eventi ne a chi non arriva da una testata', async () => {
    const { trackEvent } = await import('./analytics');
    trackEvent('trial_click', { cta_source: 'x' });
    store['gtapp_press_outlet'] = 'Personnel Today';
    trackEvent('scroll_depth');
    expect(eventi.every(([, p]) => !('press_outlet' in p))).toBe(true);
  });
});
