import { describe, it, expect } from 'vitest';
import { validateScheda } from '@/lib/risorse/gps-lavoratori-ue/validate';
import { brasile } from '@/lib/risorse/gps-lavoratori-extra-ue/paesi/br';

describe('scheda Brasile', () => {
  it('passa il validatore della risorsa europea, di cui riusa lo schema', () => {
    const r = validateScheda(brasile);
    expect(r.errori).toEqual([]);
    expect(r.ok).toBe(true);
  });

  it('non poggia su nessuna fonte europea', () => {
    // Il punto della scheda: in Brasile il GDPR non e' la disciplina. Le fonti
    // devono essere tutte brasiliane e ufficiali, mai un rimando a EUR-Lex o a
    // un garante europeo.
    for (const f of [...brasile.fonti, { url: brasile.sanzioneMax.urlFonte }]) {
      expect(f.url).toMatch(/^https:\/\/www\.(planalto\.gov|gov)\.br\//);
    }
    for (const c of brasile.contatti) {
      expect(c.urlFonte).toMatch(/^https:\/\/www\.gov\.br\//);
    }
  });

  it('dice al lettore, in apertura, che il GDPR non si applica', () => {
    const prima = brasile.checklist[0];
    const voce = typeof prima.voce === 'string' ? prima.voce : prima.voce.it;
    expect(voce).toMatch(/GDPR/);
    expect(prima.risposta).toBe('si');
  });

  it('non spaccia un massimale per una sanzione realmente inflitta', () => {
    // La striscia in cima mostra il numero da solo: senza questo, "R$ 50
    // milioni" si legge come una multa presa da qualcuno per il GPS.
    expect(brasile.sanzioneMax.tipoImporto).toBe('massimale');
    const caso =
      typeof brasile.sanzioneMax.casoCitato === 'string'
        ? brasile.sanzioneMax.casoCitato
        : brasile.sanzioneMax.casoCitato.it;
    expect(caso).toMatch(/Nessun caso/);
  });

  it('ogni voce e ogni passo esistono almeno in italiano e in inglese', () => {
    for (const v of brasile.checklist) {
      for (const campo of [v.voce, v.dettaglio]) {
        expect(typeof campo === 'string' || (campo.it && campo.en)).toBeTruthy();
      }
    }
    for (const p of brasile.procedura) {
      const d = p.descrizione;
      expect(typeof d === 'string' || (d.it && d.en)).toBeTruthy();
    }
  });
});
