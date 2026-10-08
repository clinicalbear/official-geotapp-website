// I title delle pagine settore portano la parola che la gente cerca davvero (dati GSC).
// Esiste perche' il 30/09-01/10/2026 le passate "lingua portata al livello dell'italiano"
// hanno sovrascritto tre title SEO (DE pulizie del 28/09, NL pulizie, ES installatori del 18/08)
// con formule generiche "App per...", togliendo la parola chiave. Se un title deve cambiare,
// si cambia anche qui, consapevolmente.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const CASI = [
  ['src/content/settori/pulizie/de.ts', /Zeiterfassung/, /Gebäudereinigung/],
  ['src/content/settori/pulizie/nl.ts', /[Ss]oftware/, /schoonmaakbedrijven/, /tijdregistratie/],
  ['src/content/settori/installatori/es.ts', /geolocalización/, /instaladores/],
  // 08/10/2026: altri otto title sovrascritti dalle stesse passate (30/09-01/10).
  // Due erano test di snippet del 29/09 (DE heizung-sanitaer, SV byggnation); FR e DA
  // idraulici/termoidraulici erano stati differenziati il 29/09 per togliere la cannibalizzazione.
  ['src/content/settori/installatori/de.ts', /Arbeitszeiterfassung/, /Installateure/],
  ['src/content/settori/termoidraulici/de.ts', /Auftragsabwicklung Heizung/],
  ['src/content/settori/edilizia/sv.ts', /Byggplats app/],
  ['src/content/settori/idraulici/fr.ts', /^Application plombier/, /^(?!.*chauffagiste)/],
  ['src/content/settori/termoidraulici/fr.ts', /^Application chauffagiste/],
  ['src/content/settori/idraulici/da.ts', /blikkenslagere/, /^(?!.*VVS)/],
  ['src/content/settori/termoidraulici/da.ts', /VVS-installatører/],
  ['src/content/settori/sicurezza/fr.ts', /Pointeuse GPS/, /agents de sécurité/],
];

for (const [file, ...parole] of CASI) {
  test(`title SEO di ${file} contiene le parole cercate`, () => {
    const src = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    const m = src.match(/^\s*title:\s*'((?:[^'\\]|\\.)*)'/m);
    assert.ok(m, 'title non trovato');
    for (const p of parole) assert.match(m[1], p, `manca ${p} nel title: ${m[1]}`);
    assert.ok(m[1].length <= 72, `title troppo lungo (${m[1].length}): ${m[1]}`);
  });
}
