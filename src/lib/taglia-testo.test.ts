import { describe, expect, it } from 'vitest';
import { tagliaAParola } from './taglia-testo';

describe('tagliaAParola', () => {
  it('lascia intatto un testo corto', () => {
    expect(tagliaAParola('Cosa mettere.', 140)).toBe('Cosa mettere.');
  });
  it('non spezza la parola finale', () => {
    expect(tagliaAParola('Cosa mettere e cosa togliere dal testo', 24)).toBe('Cosa mettere e cosa…');
  });
  it('toglie la punteggiatura prima dei puntini', () => {
    expect(tagliaAParola('Primo punto, secondo punto e terzo', 13)).toBe('Primo punto…');
  });
  it('taglia comunque una parola unica lunghissima', () => {
    expect(tagliaAParola('a'.repeat(30), 10)).toBe(`${'a'.repeat(10)}…`);
  });
});
