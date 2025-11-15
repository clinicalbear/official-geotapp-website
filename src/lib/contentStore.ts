// src/lib/contentStore.ts
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { defaultContent } from "./defaultContent";
import { siteContentSchema, pricingSimulatorDefaults, type SiteContent } from "./siteContentSchema";

const SITE_CONTENT_KEY = "site_content_v1";
const KV_BINDING_NAME = "GEOTAPP_CMS_CONTENT";

const g = globalThis as typeof globalThis & {
  __SITE_CONTENT__?: SiteContent;
};

let cloudflareContextWarningLogged = false;

function getKVBinding(): KVNamespace | null {
  try {
    const context = getCloudflareContext();
    const kvFromContext = (context?.env as Record<string, KVNamespace | undefined>)?.[
      KV_BINDING_NAME
    ];
    if (kvFromContext) {
      return kvFromContext as KVNamespace;
    }
  } catch (error) {
    if (!cloudflareContextWarningLogged) {
      console.warn(
        "Cloudflare context not available while resolving GEOTAPP_CMS_CONTENT. Falling back to global binding."
      );
      if (process.env.NODE_ENV !== "production") {
        console.warn(error);
      }
      cloudflareContextWarningLogged = true;
    }
  }

  if (KV_BINDING_NAME in globalThis) {
    return (globalThis as Record<string, unknown>)[KV_BINDING_NAME] as KVNamespace;
  }

  return null;
}

function normalizeContent(content: SiteContent): SiteContent {
  return {
    ...content,
    pricingPage: {
      ...content.pricingPage,
      simulator: {
        ...pricingSimulatorDefaults,
        ...(content.pricingPage?.simulator ?? {}),
      },
    },
  };
}

function getInitial(): SiteContent {
  return normalizeContent(siteContentSchema.parse(defaultContent));
}
// --- End Fallback ---


// --- LETTURA SICURA (Questa rimane invariata) ---
export async function getSiteContent(): Promise<SiteContent> {
  const kv = getKVBinding();
  if (kv) {
    const contentString = await kv.get(SITE_CONTENT_KEY, "text");
    if (!contentString || contentString.length < 2) {
      return getInitial();
    }
    try {
      const content = JSON.parse(contentString);
      const parsed = siteContentSchema.parse(content);
      return normalizeContent(parsed);
    } catch (e) {
      console.error("Dati KV (content) corrotti o non validi, carico default.", e);
      return getInitial();
    }
  }
  console.warn("KV binding not found. Using local in-memory store.");
  if (!g.__SITE_CONTENT__) g.__SITE_CONTENT__ = getInitial();
  return g.__SITE_CONTENT__;
}


// --- SCRITTURA FORZATA (QUI È LA MODIFICA) ---
export async function setSiteContent(next: unknown): Promise<SiteContent> {
  const parsedData = normalizeContent(siteContentSchema.parse(next));

  const kv = getKVBinding();
  if (kv) {
    await kv.put(SITE_CONTENT_KEY, JSON.stringify(parsedData));
    return parsedData;
  }

  console.warn("KV binding not found. Saving to local in-memory store.");
  g.__SITE_CONTENT__ = parsedData;
  return parsedData;
}

export async function updateSiteContent(next: unknown): Promise<SiteContent> {
  return setSiteContent(next);
}
