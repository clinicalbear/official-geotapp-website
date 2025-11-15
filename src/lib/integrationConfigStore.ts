// File: src/lib/integrationConfigStore.ts
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { defaultIntegrationConfig } from "./defaultIntegrationConfig";
import {
  integrationConfigSchema,
  type IntegrationConfig,
} from "./integrationConfigSchema";

const KV_INTEGRATION_KEY = "integration_config_v1";
const KV_BINDING_NAME = "GEOTAPP_CMS_CONTENT";

const g = globalThis as typeof globalThis & {
  __INTEGRATION_CONFIG__?: IntegrationConfig;
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

function getInitial(): IntegrationConfig {
  return integrationConfigSchema.parse(defaultIntegrationConfig);
}
// --- End Fallback ---


// --- LETTURA SICURA (Questa rimane invariata) ---
export async function getIntegrationConfig(): Promise<IntegrationConfig> {
  const kv = getKVBinding();
  if (kv) {
    const configString = await kv.get(KV_INTEGRATION_KEY, "text");
    if (!configString || configString.length < 2) {
      return getInitial();
    }
    try {
      const config = JSON.parse(configString);
      return integrationConfigSchema.parse(config);
    } catch (e) {
      console.error("Dati KV (integrations) corrotti o non validi, carico default.", e);
      return getInitial();
    }
  }
  console.warn("KV (integrations) not found. Using local in-memory store.");
  if (!g.__INTEGRATION_CONFIG__) g.__INTEGRATION_CONFIG__ = getInitial();
  return g.__INTEGRATION_CONFIG__;
}


// --- SCRITTURA FORZATA (QUI È LA MODIFICA) ---
export async function updateIntegrationConfig(payload: unknown): Promise<IntegrationConfig> {
  const parsedData = integrationConfigSchema.parse(payload);

  const kv = getKVBinding();
  if (kv) {
    await kv.put(KV_INTEGRATION_KEY, JSON.stringify(parsedData));
    return parsedData;
  }

  console.warn("KV (integrations) not found. Saving to local in-memory store.");
  g.__INTEGRATION_CONFIG__ = parsedData;
  return parsedData;
}
