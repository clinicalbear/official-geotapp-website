import { promises as fs } from "fs";
import path from "path";
import { defaultIntegrationConfig } from "./defaultIntegrationConfig";
import {
  integrationConfigSchema,
  type IntegrationConfig,
} from "./integrationConfigSchema";

const fallbackPath = path.join(
  process.cwd(),
  "src",
  "content",
  "integrationConfig.json",
);
const configPath = process.env.INTEGRATION_FILE_PATH ?? fallbackPath;

async function ensureFileExists() {
  try {
    await fs.access(configPath);
  } catch {
    await fs.mkdir(path.dirname(configPath), { recursive: true });
    await fs.writeFile(
      configPath,
      JSON.stringify(defaultIntegrationConfig, null, 2),
      "utf-8",
    );
  }
}

export async function getIntegrationConfig(): Promise<IntegrationConfig> {
  await ensureFileExists();
  const raw = await fs.readFile(configPath, "utf-8");
  try {
    const parsed = JSON.parse(raw);
    return integrationConfigSchema.parse(parsed);
  } catch (error) {
    console.error("Configurazione integrazioni non valida, uso i default", error);
    return defaultIntegrationConfig;
  }
}

export async function updateIntegrationConfig(payload: unknown) {
  const parsed = integrationConfigSchema.parse(payload);
  await fs.mkdir(path.dirname(configPath), { recursive: true });
  await fs.writeFile(configPath, JSON.stringify(parsed, null, 2), "utf-8");
  return parsed;
}
