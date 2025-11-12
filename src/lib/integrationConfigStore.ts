// src/lib/integrationConfigStore.ts

import { defaultIntegrationConfig } from "./defaultIntegrationConfig";
import {
  integrationConfigSchema,
  type IntegrationConfig,
} from "./integrationConfigSchema";

const g = globalThis as unknown as {
  __INTEGRATION_CONFIG__?: IntegrationConfig;
};

function getInitial(): IntegrationConfig {
  const seed = process.env.INTEGRATION_CONFIG_JSON;
  if (seed) {
    try {
      const parsed = integrationConfigSchema.parse(JSON.parse(seed));
      return parsed;
    } catch {
      // seed invalido -> fallback
    }
  }
  return integrationConfigSchema.parse(defaultIntegrationConfig);
}

export async function getIntegrationConfig(): Promise<IntegrationConfig> {
  if (!g.__INTEGRATION_CONFIG__) g.__INTEGRATION_CONFIG__ = getInitial();
  return g.__INTEGRATION_CONFIG__;
}

export async function setIntegrationConfig(
  next: IntegrationConfig
): Promise<void> {
  const parsed = integrationConfigSchema.parse(next);
  g.__INTEGRATION_CONFIG__ = parsed;
}

// ✅ Alias per compatibilità con le API esistenti
export async function updateIntegrationConfig(
  next: IntegrationConfig
): Promise<void> {
  return setIntegrationConfig(next);
}
