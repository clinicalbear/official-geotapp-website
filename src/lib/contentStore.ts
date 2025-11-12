// src/lib/contentStore.ts

import { defaultContent } from "./defaultContent";
import { siteContentSchema, type SiteContent } from "./siteContentSchema";

// cache globale effimera (per istanza)
const g = globalThis as unknown as {
  __SITE_CONTENT__?: SiteContent;
};

function getInitial(): SiteContent {
  // opzionale: seed da env JSON se presente
  const seed = process.env.SITE_CONTENT_JSON;
  if (seed) {
    try {
      const parsed = siteContentSchema.parse(JSON.parse(seed));
      return parsed;
    } catch {
      // seed invalido -> ignora e usa default
    }
  }
  return siteContentSchema.parse(defaultContent);
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!g.__SITE_CONTENT__) g.__SITE_CONTENT__ = getInitial();
  return g.__SITE_CONTENT__;
}

export async function setSiteContent(next: SiteContent): Promise<void> {
  const parsed = siteContentSchema.parse(next);
  g.__SITE_CONTENT__ = parsed;
}

// ✅ alias per compatibilità con le route esistenti
export async function updateSiteContent(next: SiteContent): Promise<void> {
  return setSiteContent(next);
}
