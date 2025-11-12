import { promises as fs } from "fs";
import path from "path";
import { defaultContent } from "./defaultContent";
import { siteContentSchema, type SiteContent } from "./siteContentSchema";

const fallbackPath = path.join(process.cwd(), "src", "content", "siteContent.json");
const contentPath = process.env.CONTENT_FILE_PATH ?? fallbackPath;

async function ensureFileExists() {
  try {
    await fs.access(contentPath);
  } catch {
    await fs.mkdir(path.dirname(contentPath), { recursive: true });
    await fs.writeFile(contentPath, JSON.stringify(defaultContent, null, 2), "utf-8");
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  await ensureFileExists();
  const raw = await fs.readFile(contentPath, "utf-8");
  try {
    const parsed = JSON.parse(raw);
    return siteContentSchema.parse(parsed);
  } catch (error) {
    console.error("Invalid content file, falling back to defaults", error);
    return defaultContent;
  }
}

export async function updateSiteContent(payload: unknown): Promise<SiteContent> {
  const parsed = siteContentSchema.parse(payload);
  await fs.mkdir(path.dirname(contentPath), { recursive: true });
  await fs.writeFile(contentPath, JSON.stringify(parsed, null, 2), "utf-8");
  return parsed;
}
