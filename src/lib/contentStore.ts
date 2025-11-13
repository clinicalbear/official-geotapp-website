// src/lib/contentStore.ts
import { defaultContent } from "./defaultContent";
import { siteContentSchema, type SiteContent } from "./siteContentSchema";

const SITE_CONTENT_KEY = "site_content_v1";

// --- Fallback cache for local development ---
const g = globalThis as unknown as {
  __SITE_CONTENT__?: SiteContent;
};

function getInitial(): SiteContent {
  // This part is no longer needed for production but can be kept for local
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
  // Check if running on Cloudflare with the KV binding
  // @ts-ignore: process.env.GEOTAPP_CMS_CONTENT is injected by Cloudflare
  if (process.env.GEOTAPP_CMS_CONTENT) {
    // @ts-ignore
    const kv = process.env.GEOTAPP_CMS_CONTENT as KVNamespace;
    const content = await kv.get<SiteContent>(SITE_CONTENT_KEY, "json");
    // If KV is empty, return default content
    return content ? siteContentSchema.parse(content) : siteContentSchema.parse(defaultContent);
  }
  
  // Fallback for local development (in-memory)
  console.log("KV binding not found. Using local in-memory store.");
  if (!g.__SITE_CONTENT__) g.__SITE_CONTENT__ = getInitial();
  return g.__SITE_CONTENT__;
}

export async function setSiteContent(next: SiteContent): Promise<void> {
  const parsed = siteContentSchema.parse(next);

  // Check if running on Cloudflare with the KV binding
  // @ts-ignore
  if (process.env.GEOTAPP_CMS_CONTENT) {
    // @ts-ignore
    const kv = process.env.GEOTAPP_CMS_CONTENT as KVNamespace;
    await kv.put(SITE_CONTENT_KEY, JSON.stringify(parsed));
    return;
  }

  // Fallback for local development (in-memory)
  console.log("KV binding not found. Saving to local in-memory store.");
  g.__SITE_CONTENT__ = parsed;
}

// ✅ alias for compatibility with the existing routes
export async function updateSiteContent(next: SiteContent): Promise<void> {
  return setSiteContent(next);
}