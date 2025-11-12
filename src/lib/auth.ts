// src/lib/auth.ts
export const runtime = "edge";

const FALLBACK_USERNAME = "MikeAdmin";
const FALLBACK_PASSWORD = "@@G4bri312020@@";

const encoder = new TextEncoder();

async function hashPassword(password: string): Promise<Uint8Array> {
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return new Uint8Array(hashBuffer);
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

export async function verifyCredentials(username: string, password: string) {
  const storedUser = process.env.ADMIN_USERNAME ?? FALLBACK_USERNAME;
  const storedPass = process.env.ADMIN_PASSWORD ?? FALLBACK_PASSWORD;

  const [hash1, hash2] = await Promise.all([
    hashPassword(password),
    hashPassword(storedPass),
  ]);

  return username === storedUser && timingSafeEqual(hash1, hash2);
}

// === Token sessione (S I N C) ===
export function createSessionToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  // base64-url safe
  const b64 = btoa(String.fromCharCode(...bytes))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
  return `ses_${b64}`;
}

export function verifySessionToken(token: string): boolean {
  return typeof token === "string" && token.startsWith("ses_") && token.length > 8;
}
