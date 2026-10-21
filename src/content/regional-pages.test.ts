import { describe, it, expect } from 'vitest';
import {
  REGION_LOCALES,
  REGIONAL_HOME_META,
  regionalHomeBlock,
  regionalHomeFaq,
  regionalProductBlock,
  regionalCompareBlock,
  regionalCountryBlock,
  regionalToolBlock,
  regionalPageBlock,
  regionalSectorGuidesBlock,
  type RegionalBlock,
  type ToolKey,
  type PageKey,
} from './regional-pages';
import { HOME_TITLE_MAX } from '@/lib/i18n/home-metadata';

const TOOLS: ToolKey[] = ['hub', 'resources-index', 'surveillance-index', 'penalties', 'notice-generator', 'attendance-without-tracking', 'data-check', 'retention', 'dossier'];
const PAGES: PageKey[] = ['sector-index', 'pricing', 'what-is', 'roi', 'about', 'compare-index', 'guide', 'contact'];

function allBlocks(locale: (typeof REGION_LOCALES)[number]): RegionalBlock[] {
  return [
    regionalHomeBlock(locale),
    ...(['flow', 'timetracker', 'verifier'] as const).map((p) => regionalProductBlock(p, locale)),
    regionalCompareBlock('Jibble', locale),
    regionalCountryBlock('France', locale),
    ...['pulizie', 'installatori', 'sicurezza'].map((x) => regionalSectorGuidesBlock(x, locale)),
    ...TOOLS.map((t) => regionalToolBlock(t, locale)),
    ...PAGES.map((p) => regionalPageBlock(p, locale)),
  ];
}

const text = (b: RegionalBlock) => [b.title, ...b.paras].join(' ');

describe('testi regionali di home, prodotti, confronti e risorse', () => {
  it.each(REGION_LOCALES)('%s: nessun trattino lungo, nessun segnaposto', (locale) => {
    for (const b of allBlocks(locale)) {
      expect(text(b)).not.toMatch(/—|–|\{|\}|undefined|TODO/);
      expect(b.paras.length).toBeGreaterThan(0);
    }
  });

  it.each(['en-us', 'en-ca'] as const)('%s: ortografia americana/canadese', (locale) => {
    for (const b of allBlocks(locale)) expect(text(b)).not.toMatch(/organis|colour|centre\b/i);
  });

  it.each(['en-gb', 'en-au', 'en-ie'] as const)('%s: ortografia britannica', (locale) => {
    for (const b of allBlocks(locale)) expect(text(b)).not.toMatch(/organiz|color\b|center\b/i);
  });

  it('ogni regione ha un blocco di home diverso dalle altre', () => {
    const titles = REGION_LOCALES.map((l) => regionalHomeBlock(l).title);
    expect(new Set(titles).size).toBe(REGION_LOCALES.length);
    const laws = REGION_LOCALES.map((l) => regionalHomeBlock(l).paras[0]);
    expect(new Set(laws).size).toBe(REGION_LOCALES.length);
  });

  it.each(REGION_LOCALES)('%s: title e description della home nei limiti', (locale) => {
    const m = REGIONAL_HOME_META[locale];
    expect(m.title.length).toBeLessThanOrEqual(HOME_TITLE_MAX);
    expect(m.title.match(/GeoTapp/g)).toHaveLength(1);
    expect(m.description.length).toBeGreaterThan(80);
    expect(m.description.length).toBeLessThanOrEqual(160);
  });

  it('i title della home sono tutti diversi fra loro e da quello inglese', () => {
    const titles = REGION_LOCALES.map((l) => REGIONAL_HOME_META[l].title);
    expect(new Set(titles).size).toBe(REGION_LOCALES.length);
  });

  it.each(REGION_LOCALES)('%s: la FAQ della home ha 3 domande con risposta', (locale) => {
    const faq = regionalHomeFaq(locale) as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> };
    expect(faq.mainEntity).toHaveLength(3);
    for (const q of faq.mainEntity) {
      expect(q.name.length).toBeGreaterThan(10);
      expect(q.acceptedAnswer.text.length).toBeGreaterThan(40);
    }
  });

  it('il nome del concorrente e del paese entrano nel testo', () => {
    expect(text(regionalCompareBlock('Hubstaff', 'en-gb'))).toContain('Hubstaff');
    expect(text(regionalCountryBlock('Portugal', 'en-ie'))).toContain('Portugal');
  });

  it('Australia: i sette anni vengono dal Fair Work Ombudsman, non dalla legge', () => {
    expect(regionalHomeBlock('en-au').paras[0]).toContain('seven years');
    expect(regionalHomeBlock('en-au').paras[0]).toContain('Fair Work Ombudsman');
  });
});
