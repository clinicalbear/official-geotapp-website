import { describe, expect, it } from 'vitest';
import { moderateComment } from './comment-moderation';

const ARTICLE =
  'CAO Schoonmaak 2026: loonsverhoging en wat het voor je marge betekent. Uren per object, reistijd tussen objecten, ' +
  'schoonmaakbedrijf, medewerkers, urenadministratie, geofencing.';
const IT_ARTICLE =
  'Informativa GPS per i dipendenti: il fac-simile 2026. Geolocalizzazione, accordo sindacale, Garante privacy, timbratura, cantiere.';

const v = (content: string, articleText = ARTICLE, authorName = 'Jan') =>
  moderateComment({ content, articleText, authorName }).verdict;

describe('moderateComment: spam', () => {
  it('link e domini', () => {
    expect(v('Bekijk mijn site https://example.com voor meer info over uren')).toBe('spam');
    expect(v('Goede tips, zie ook www.goedkopeschoonmaak.nl')).toBe('spam');
    expect(v('Ottimo articolo, guardate miosito.it per le timbrature', IT_ARTICLE)).toBe('spam');
  });
  it('email e telefono', () => {
    expect(v('Mail me op jan@bedrijf.nl over de reistijd')).toBe('spam');
    expect(v('Bel ons +31 6 1234 5678 voor schoonmaak')).toBe('spam');
  });
  it('volgarità in più lingue, anche coniugate', () => {
    expect(v('Che cazzo di informativa, i dipendenti se ne fregano', IT_ARTICLE)).toBe('spam');
    expect(v('This fucking marge thing is useless')).toBe('spam');
    expect(v('Die CAO ist Scheiße für jedes schoonmaakbedrijf')).toBe('spam');
    expect(v('Putain, la reistijd tussen objecten encore')).toBe('spam');
    expect(v('Wat een klootzak, die reistijd regeling')).toBe('spam');
    expect(v('Это полный пиздец с этой reistijd')).toBe('spam');
  });
  it('tutto maiuscolo', () => {
    expect(v('DEZE CAO IS EEN SCHANDE VOOR ELK SCHOONMAAKBEDRIJF')).toBe('spam');
  });
});

describe('moderateComment: parole che NON devono scattare', () => {
  it('catering, horeca, retard francese, casino italiano, importi', () => {
    expect(v('Wij doen schoonmaak voor catering en horeca, de reistijd tussen objecten is ons grootste probleem')).toBe('approve');
    expect(v('Le retard dans la urenadministratie coûte cher à chaque schoonmaakbedrijf')).toBe('approve');
    expect(v('Che casino con la timbratura in cantiere quando manca il segnale', IT_ARTICLE)).toBe('approve');
    expect(v('Con 20.000.000 di euro di sanzioni massime il Garante non scherza sulla geolocalizzazione', IT_ARTICLE)).toBe('approve');
  });
});

describe('moderateComment: pertinenza', () => {
  it('inerente = approvato', () => {
    expect(v('Bij ons verdwijnt vooral reistijd tussen objecten, zo een uur per dag')).toBe('approve');
    expect(v("Noi l'informativa l'abbiamo fatta firmare a tutti, il problema è stato l'accordo sindacale", IT_ARTICLE)).toBe('approve');
  });
  it('non inerente = in attesa', () => {
    expect(v('Qualcuno sa consigliarmi una buona pizzeria a Napoli?', IT_ARTICLE)).toBe('hold');
  });
  it('troppo breve = in attesa', () => {
    expect(v('Bello!')).toBe('hold');
  });
  it('senza testo articolo = in attesa', () => {
    expect(moderateComment({ content: 'Bij ons verdwijnt reistijd tussen objecten' }).verdict).toBe('hold');
  });
});

describe('la copia sul VPS dà gli stessi verdetti', () => {
  it('scripts/moderate-comments.mjs coincide con il modulo del sito', async () => {
    const vps = await import('../../scripts/moderate-comments.mjs');
    const casi = [
      ['Bekijk mijn site https://example.com voor meer info over uren', ARTICLE],
      ['Che cazzo di informativa, i dipendenti se ne fregano', IT_ARTICLE],
      ['Wij doen schoonmaak voor catering en horeca, de reistijd tussen objecten is ons grootste probleem', ARTICLE],
      ['Qualcuno sa consigliarmi una buona pizzeria a Napoli?', IT_ARTICLE],
      ['Bello!', ARTICLE],
      ['Bel ons +31 6 1234 5678 voor schoonmaak', ARTICLE],
    ];
    for (const [content, articleText] of casi) {
      expect(vps.moderateComment({ content, articleText, authorName: 'Jan' })).toEqual(
        moderateComment({ content, articleText, authorName: 'Jan' }),
      );
    }
  });
});
