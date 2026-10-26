import { describe, it, expect } from 'vitest';
import { splitAroundAnchor } from './inline-link';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

describe('splitAroundAnchor', () => {
  it('divide attorno alla prima occorrenza', () => {
    expect(splitAroundAnchor('uno due tre', 'due')).toEqual({ before: 'uno ', anchor: 'due', after: ' tre' });
  });
  it('null se manca o e vuota', () => {
    expect(splitAroundAnchor('uno', 'due')).toBeNull();
    expect(splitAroundAnchor('uno', undefined)).toBeNull();
    expect(splitAroundAnchor('uno', '')).toBeNull();
  });
  it('in ogni lingua il link della sezione "report" trova la sua ancora nel testo', () => {
    for (const l of SUPPORTED_LOCALES) {
      const d = getDictionary(l).landing;
      expect(splitAroundAnchor(d.report_section_body, d.report_section_link_text), l).not.toBeNull();
    }
  });
});
