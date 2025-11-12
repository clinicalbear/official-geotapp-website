import { createHash, timingSafeEqual } from "crypto";

const FALLBACK_USERNAME = "MikeAdmin";
const FALLBACK_PASSWORD = "@@G4bri312020@@";
const FALLBACK_SECRET = "change-this-session-secret";

function getAdminEnv() {
  return {
    username: process.env.ADMIN_USERNAME ?? FALLBACK_USERNAME,
    password: process.env.ADMIN_PASSWORD ?? FALLBACK_PASSWORD,
    secret: process.env.ADMIN_SESSION_SECRET ?? FALLBACK_SECRET,
  };
}

function toBuffer(value: string) {
  return Buffer.from(value, "utf8");
}

export function areValidCredentials(username: string, password: string) {
  const env = getAdminEnv();
  const providedUser = toBuffer(username);
  const targetUser = toBuffer(env.username);
  const providedPass = toBuffer(password);
  const targetPass = toBuffer(env.password);

  const userMatch =
    providedUser.length === targetUser.length &&
    timingSafeEqual(providedUser, targetUser);
  const passMatch =
    providedPass.length === targetPass.length &&
    timingSafeEqual(providedPass, targetPass);

  return userMatch && passMatch;
}

function buildSessionSignature() {
  const { username, password, secret } = getAdminEnv();
  return createHash("sha256")
    .update(`${username}:${password}:${secret}`)
    .digest("hex");
}

export function createSessionToken() {
  return buildSessionSignature();
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const expected = buildSessionSignature();
  const provided = toBuffer(token);
  const target = toBuffer(expected);
  return provided.length === target.length && timingSafeEqual(provided, target);
}
