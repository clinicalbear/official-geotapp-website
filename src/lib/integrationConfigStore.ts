// File: src/lib/integrationConfigStore.ts

import { defaultIntegrationConfig } from "./defaultIntegrationConfig";
import {
  integrationConfigSchema,
  type IntegrationConfig,
} from "./integrationConfigSchema";

// Questa è la chiave (il "nome del file") che useremo dentro il tuo database KV
const KV_INTEGRATION_KEY = "integration_config_v1";

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
  __INTEGRATION_CONFIG__?: IntegrationConfig;
};

function getInitial(): IntegrationConfig {
  const seed = process.env.INTEGRATION_CONFIG_JSON;
  if (seed) {
    try {
      return integrationConfigSchema.parse(JSON.parse(seed));
    } catch {}
  }
  return integrationConfigSchema.parse(defaultIntegrationConfig);
}
// --- End Fallback ---


export async function getIntegrationConfig(): Promise<IntegrationConfig> {
  const kv = getKVBinding();
  if (kv) {
    // Leggi i dati come JSON
    const config = await kv.get<IntegrationConfig>(KV_INTEGRATION_KEY, "json");
    // Se KV è vuoto, ritorna la config di default
    return config 
      ? integrationConfigSchema.parse(config) 
      : integrationConfigSchema.parse(defaultIntegrationConfig);
  }

  // Fallback per locale
  console.log("KV binding (integrations) not found. Using local in-memory store.");
  if (!g.__INTEGRATION_CONFIG__) g.__INTEGRATION_CONFIG__ = getInitial();
  return g.__INTEGRATION_CONFIG__;
}

// MODIFICA: 'payload' ora è 'unknown' per accettare il body dell'API
export async function updateIntegrationConfig(payload: unknown): Promise<IntegrationConfig> {
  // La validazione Zod avviene qui
  const parsed = integrationConfigSchema.parse(payload);

  const kv = getKVBinding();
  if (kv) {
    // Salva i dati aggiornati
    await kv.put(KV_INTEGRATION_KEY, JSON.stringify(parsed));
    return parsed; // Ritorna i dati salvati
  }

  // Fallback per locale
  console.log("KV binding (integrations) not found. Saving to local in-memory store.");
  g.__INTEGRATION_CONFIG__ = parsed;
  return parsed; // Ritorna i dati salvati
}