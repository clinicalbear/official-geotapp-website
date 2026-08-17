import { describe, it, expect } from 'vitest';
import { PAESI } from './index';
import type { Fonte } from './types';
import it_ from '../../../dictionaries/it.json';
import en from '../../../dictionaries/en.json';
import de from '../../../dictionaries/de.json';
import ru from '../../../dictionaries/ru.json';

/**
 * Regola (Mike, 17/08/2026): una fonte che NON e' ufficiale non si nasconde e
 * non si spaccia. Si dichiara con `nonUfficiale`, la scheda stampa l'avviso e
 * il link diretto. Questi test falliscono se qualcuno reintroduce una fonte di
 * studio legale, stampa o raccolta privata senza dichiararla.
 */
const HOST_NON_UFFICIALI = [
  'iclg.com', 'dlapiperdataprotection.com', 'havelpartners.sk', 'podnikajte.sk',
  'bdkadvokati.com', 'gratanet.com', 'claeysengels.be', 'prlegal.rs',
  'schoenherr.eu', 'n1info.rs', 'dataguidance.com', 'gdpr-info.eu', 'lege5.ro',
  'codulmuncii.eu', 'lexlege.pl', 'apis.bg', 'epravo.cz', 'gdpr.cz', 'parser.hr',
];

function tutteLeFonti(): { paese: string; fonte: Fonte }[] {
  const out: { paese: string; fonte: Fonte }[] = [];
  for (const scheda of PAESI) {
    for (const f of scheda.fonti ?? []) out.push({ paese: scheda.codiceISO, fonte: f });
    for (const v of scheda.checklist ?? []) if (v.fonte) out.push({ paese: scheda.codiceISO, fonte: v.fonte });
  }
  return out;
}

describe('fonti non ufficiali dichiarate', () => {
  it('nessuna fonte di host non ufficiale e priva di dichiarazione', () => {
    const mute = tutteLeFonti().filter(({ fonte }) => {
      const host = (() => { try { return new URL(fonte.url).hostname.replace(/^www\./, ''); } catch { return ''; } })();
      return HOST_NON_UFFICIALI.includes(host) && !fonte.nonUfficiale;
    });
    expect(mute.map((m) => `${m.paese} ${m.fonte.url}`)).toEqual([]);
  });

  it('ogni tipo dichiarato ha la sua etichetta in tutte le lingue', () => {
    const tipi = new Set(tutteLeFonti().map((x) => x.fonte.nonUfficiale).filter(Boolean) as string[]);
    expect(tipi.size).toBeGreaterThan(0);
    for (const dict of [it_, en, de, ru]) {
      const r = (dict as unknown as { risorseGps: Record<string, string> }).risorseGps;
      expect(r.fonteNonUfficialeEtichetta, 'etichetta').toBeTruthy();
      expect(r.fonteNonUfficialeAvviso, 'avviso').toBeTruthy();
      for (const t of tipi) expect(r['fonteNonUfficialeTipo_' + t.replace(/-/g, '_')], t).toBeTruthy();
    }
  });
});
