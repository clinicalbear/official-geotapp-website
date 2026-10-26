import { describe, it, expect } from 'vitest';
import { hostDelReferrer, eRobot, chiaveOrigine } from './link-brevi-origine';

describe('hostDelReferrer', () => {
  it('tiene solo l\'host, senza www ne percorso ne query', () => {
    expect(hostDelReferrer('https://www.linkedin.com/feed/update/urn:li:activity:123?x=1')).toBe('linkedin.com');
    expect(hostDelReferrer('https://l.facebook.com/l.php?u=secret')).toBe('l.facebook.com');
    expect(hostDelReferrer('https://m.youtube.com/')).toBe('m.youtube.com');
  });
  it('"_" se manca o non si legge', () => {
    expect(hostDelReferrer(null)).toBe('_');
    expect(hostDelReferrer('')).toBe('_');
    expect(hostDelReferrer('android-app://com.facebook.katana')).not.toContain(':');
    expect(hostDelReferrer('non un url')).toBe('_');
  });
});

describe('eRobot', () => {
  it('riconosce le anteprime dei social e i browser veri', () => {
    expect(eRobot('facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)')).toBe(true);
    expect(eRobot('LinkedInBot/1.0 (compatible; Mozilla/5.0)')).toBe(true);
    expect(eRobot('WhatsApp/2.23')).toBe(true);
    expect(eRobot(null)).toBe(true);
    expect(eRobot('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1')).toBe(false);
    expect(eRobot('Mozilla/5.0 (X11; Linux x86_64) Chrome/130.0 Safari/537.36')).toBe(false);
  });
});

describe('chiaveOrigine', () => {
  it('ha sette campi separati da due punti, nessuno dei quali contiene due punti', () => {
    const k = chiaveOrigine({ giorno: '2026-10-27', paese: 'IT', etichetta: 'li-x', referer: 'https://www.linkedin.com/', userAgent: 'Mozilla/5.0 Chrome', id: 'u1' });
    expect(k).toBe('r:2026-10-27:IT:li-x:linkedin.com:umano:u1');
    expect(k.split(':')).toHaveLength(7);
  });
  it('non contiene user agent ne percorso', () => {
    const k = chiaveOrigine({ giorno: 'g', paese: 'IT', etichetta: 'e', referer: 'https://l.facebook.com/l.php?u=zzz', userAgent: 'SecretAgent/9', id: 'i' });
    expect(k).not.toMatch(/Secret|zzz|l\.php/);
  });
});
