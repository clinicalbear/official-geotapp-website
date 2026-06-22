import { describe, it, expect } from 'vitest';
import { buildPressOrganizationJsonLd } from './jsonLd';

describe('buildPressOrganizationJsonLd', () => {
  const data = buildPressOrganizationJsonLd('it');
  it('is an Organization with the press email', () => {
    expect(data['@type']).toBe('Organization');
    expect(data.email).toBe('press@geotapp.com');
  });
  it('names the founder', () => {
    expect(JSON.stringify(data)).toContain('Petraroli');
  });
  it('points logo and url to geotapp.com', () => {
    expect(String(data.url)).toContain('geotapp.com');
    expect(String((data as Record<string, unknown>).logo)).toContain('geotapp.com');
  });
});
