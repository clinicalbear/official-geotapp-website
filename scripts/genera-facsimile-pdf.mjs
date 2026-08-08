/**
 * Genera i PDF del fac-simile "informativa GPS" in tutte le lingue del sito.
 *
 * Ogni file NON e' la traduzione dello stesso testo: e' il modello con la legge
 * del Paese dove quella lingua e' la lingua di lavoro, costruito da
 * `buildFacsimilePrintHtml` (src/lib/risorse/gps-lavoratori-ue/informativa.ts)
 * con le schede-paese verificate. Quindi BDSG e Betriebsrat sul tedesco,
 * LOPDGDD e Estatuto sullo spagnolo, art. 4 dello Statuto sull'italiano.
 *
 * L'italiano non si rigenera da qui: resta il file storico
 * `fac-simile-informativa-gps-dipendenti.pdf`, che e' linkato dalle email di
 * nurture, dalla scheda-paese IT e da fuori.
 *
 * Uso:
 *   node_modules/.bin/esbuild <entry con i re-export> --bundle --platform=node \
 *     --format=cjs --outfile=/tmp/facsimile_bundle.cjs --alias:@=./src
 *   node scripts/genera-facsimile-pdf.mjs
 */
import { chromium } from 'playwright-core';
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { PAESI, buildFacsimilePrintHtml, loc } = require('/tmp/facsimile_bundle.cjs');

// Un fac-simile per lingua, sul Paese dove quella lingua e' quella di lavoro.
// RU non ha un Paese UE: i russofoni destinatari lavorano dentro l'UE, quindi
// resta sul quadro GDPR generico (nessun ISO, nessun override nazionale).
const LINGUE = [
  { locale: 'en', iso: 'GB' },
  { locale: 'de', iso: 'DE' },
  { locale: 'fr', iso: 'FR' },
  { locale: 'es', iso: 'ES' },
  { locale: 'nl', iso: 'NL' },
  { locale: 'pt', iso: 'PT' },
  { locale: 'da', iso: 'DK' },
  { locale: 'sv', iso: 'SE' },
  { locale: 'nb', iso: 'NO' },
  { locale: 'ru', iso: null },
];
const FOOTER = {
  it: 'Fac-simile fornito gratuitamente da GeoTapp, da adattare col proprio consulente',
  en: 'Template provided free of charge by GeoTapp, to be adapted with your own advisor',
  de: 'Vorlage kostenlos bereitgestellt von GeoTapp, mit der eigenen Beratung anzupassen',
  fr: 'Modèle fourni gratuitement par GeoTapp, à adapter avec votre conseil',
  es: 'Modelo facilitado gratuitamente por GeoTapp, para adaptar con tu asesor',
  nl: 'Model gratis aangeboden door GeoTapp, aan te passen met uw eigen adviseur',
  pt: 'Modelo disponibilizado gratuitamente pela GeoTapp, a adaptar com o teu consultor',
  da: 'Skabelon stillet gratis til rådighed af GeoTapp, tilpasses med din egen rådgiver',
  sv: 'Mall som GeoTapp tillhandahåller kostnadsfritt, anpassas med din egen rådgivare',
  nb: 'Mal levert gratis av GeoTapp, tilpasses med din egen rådgiver',
  ru: 'Образец бесплатно предоставлен GeoTapp, адаптируйте его со своим консультантом',
};
// Nome del Paese nella lingua del documento, da Intl (nessun elenco a mano).
const nomePaese = (iso, locale) =>
  iso ? new Intl.DisplayNames([locale], { type: 'region' }).of(iso)
      : { it: 'Unione europea', en: 'European Union', de: 'Europäische Union', fr: 'Union européenne',
          es: 'Unión Europea', nl: 'Europese Unie', pt: 'União Europeia', da: 'Den Europæiske Union',
          sv: 'Europeiska unionen', nb: 'Den europeiske union', ru: 'Европейский союз' }[locale];
// Autorita': quella nazionale dalla scheda-paese verificata; per RU il testo generico del template.
const AUT_RU = 'надзорный орган по защите данных страны, где выполняется работа';

const out = new URL('../public/downloads', import.meta.url).pathname;
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();
const fatti = [];
for (const { locale, iso } of LINGUE) {
  const scheda = iso ? PAESI.find((p) => p.codiceISO === iso) : null;
  if (iso && !scheda) { console.log(`SALTATO ${locale}: nessuna scheda per ${iso}`); continue; }
  const authority = scheda ? loc(scheda.autoritaCompetente.ente, locale) : AUT_RU;
  let html = buildFacsimilePrintHtml({
    locale, countryName: nomePaese(iso, locale), authority,
    countryISO: iso || '', footer: FOOTER[locale],
  }).replace(' onload="window.print()"', '');
  await page.setContent(html, { waitUntil: 'load' });
  const file = `${out}/fac-simile-informativa-gps-${locale}.pdf`;
  await page.pdf({ path: file, format: 'A4', printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' } });
  const kb = Math.round(fs.statSync(file).size / 1024);
  fatti.push({ locale, iso: iso || 'GDPR generico', paese: nomePaese(iso, locale), kb, autorita: authority.slice(0, 54) });
}
await browser.close();
console.table(fatti);
