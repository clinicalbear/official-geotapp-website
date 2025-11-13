// src/lib/contentStore.ts
import { defaultContent } from "./defaultContent";
import { siteContentSchema, type SiteContent } from "./siteContentSchema";

const SITE_CONTENT_KEY = "site_content_v1";

// Type-safe access to Cloudflare KV binding
function getKVBinding(): KVNamespace | null {
  // @ts-ignore
  if (process.env.GEOTAPP_CMS_CONTENT) {
    // @ts-ignore
    return process.env.GEOTAPP_CMS_CONTENT as KVNamespace;
  }
  // @ts-ignore
  if (typeof globalThis !== 'undefined' && 'GEOTAPP_CMS_CONTENT' in globalThis) {
     // @ts-ignore
    return (globalThis as any).GEOTAPP_CMS_CONTENT as KVNamespace;
  }
  return null;
}

// --- Fallback cache for local development ---
const g = globalThis as unknown as {
  __SITE_CONTENT__?: SiteContent;
};

function getInitial(): SiteContent {
  const seed = process.env.SITE_CONTENT_JSON;
  if (seed) {
    try {
      return siteContentSchema.parse(JSON.parse(seed));
    } catch {}
  }
  return siteContentSchema.parse(defaultContent);
}
// --- End Fallback ---


export async function getSiteContent(): Promise<SiteContent> {
  const kv = getKVBinding();
  if (kv) {
    const content = await kv.get<SiteContent>(SITE_CONTENT_KEY, "json");
    return content ? siteContentSchema.parse(content) : siteContentSchema.parse(defaultContent);
  }

  console.log("KV binding not found. Using local in-memory store.");
  if (!g.__SITE_CONTENT__) g.__SITE_CONTENT__ = getInitial();
  return g.__SITE_CONTENT__;
}


// MODIFICA: 'next' ora è 'unknown' per accettare il body dell'API
export async function setSiteContent(next: unknown): Promise<SiteContent> {
  // La validazione Zod avviene qui, e se fallisce 
  // viene catturata dal try/catch in route.ts
  const parsed = siteContentSchema.parse(next);

  const kv = getKVBinding();
  if (kv) {
    await kv.put(SITE_CONTENT_KEY, JSON.stringify(parsed));
    return parsed; 
  }

  console.log("KV binding not found. Saving to local in-memory store.");
  g.__SITE_CONTENT__ = parsed;
  return parsed; 
}


// MODIFICA: Anche 'next' qui è 'unknown'
export async function updateSiteContent(next: unknown): Promise<SiteContent> {
  return setSiteContent(next);
}