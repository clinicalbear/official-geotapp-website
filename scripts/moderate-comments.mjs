#!/usr/bin/env node
// Controllo periodico dei commenti del blog (cron sul VPS, ogni 15 minuti).
// Prende i commenti in attesa su WordPress e applica le stesse regole di
// src/lib/comment-moderation.ts (link, contatti, volgarita' -> spam;
// inerenti all'articolo -> approvati; il resto resta in attesa).
// Le regole qui sotto sono una COPIA: il test src/lib/comment-moderation.test.ts
// controlla che diano gli stessi verdetti del sito.
//
// Uso: node moderate-comments.mjs [--dry-run]
// Credenziali: file ~/.config/geotapp/wp-app-password ("utente:password").
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const LINK_RE =
  /(https?:\/\/|www\.|<\s*a\b|\[url|\b[a-z0-9-]{2,}\.(com|net|org|info|biz|io|co|it|de|fr|es|nl|pt|dk|se|no|ru|uk|eu|xyz|top|online|site|shop|app|ly|me|tk|ru)\b)/i;
const EMAIL_RE = /[^\s@]+@[^\s@]+\.[a-z]{2,}/i;
const PHONE_RE = /(\+\d[\d\s-]{7,}\d)|(\b\d{3,4}[\s-]\d{3,4}[\s-]?\d{2,4}\b)/;

// Radici volgari per lingua, confrontate su testo minuscolo e senza accenti.
// Solo parole che non compaiono in un commento professionale sul lavoro.
const PROFANITY = [
  // it
  'cazz', 'minchi', 'stronz', 'vaffancul', 'fancul', 'puttan', 'troia', 'coglion', 'figa ', 'merda', 'porco dio', 'porcodio', 'dio cane', 'diocane', 'bastard', 'froci', 'ricchion', 'mignott', 'zoccol', 'culatton',
  // en
  'fuck', 'shit', 'bitch', 'cunt', 'asshole', 'dickhead', 'motherf', 'wanker', 'bollocks', 'slut', 'whore', 'faggot', 'porn', 'viagra', 'crypto',
  // de
  'scheiss', 'scheiß', 'arschloch', 'fotze', 'wichser', 'hurensohn', 'schlampe', 'ficken', 'fick dich', 'missgeburt',
  // fr
  'putain', 'merde', 'connard', 'connasse', 'salope', 'encule', 'nique ta', 'ta gueule', 'batard', 'pute ', 'putes ',
  // es
  'mierda', 'joder', 'cabron', 'gilipollas', 'hijo de puta', 'puta ', 'coño', 'cono de', 'pendejo', 'maricon', 'follar',
  // nl
  'kanker', 'klootzak', 'kutwijf', 'godverdomme', 'tering', 'hoer ', 'lul ',
  // pt
  'caralho', 'porra', 'foda-se', 'fodase', 'filho da puta', 'cabrao', 'merda', 'buceta', 'cuzao',
  // da / nb / sv
  'fanden', 'faen ', 'helvede', 'kuk ', 'fitte', 'hore ', 'jævla', 'jaevla', 'javla', 'fitta', 'knulla', 'kuksuger',
  // ru
  'хуй', 'пизд', 'бляд', 'блять', 'ебат', 'сука', 'мудак', 'говно',
];

// Parole vuote, per non contare "the", "che", "und" come pertinenza.
const STOP = new Set(
  (
    'il lo la gli le un una uno di da in con su per tra fra che non per come anche questo questa quello sono sei era ' +
    'the and for with this that from have you your are was were what when which about into they them their our but not ' +
    'der die das und ist nicht mit den ein eine auch wenn sich fur auf dem des von zu ich wir sie ihr ' +
    'les des est pas une que pour dans qui sur avec vous sont plus mais nous ils elle ' +
    'los las que por una con para del como mas pero sus esta son cuando este ' +
    'het een van niet dat met voor zijn wordt ook maar als bij naar wat ' +
    'nao uma com para dos das como mais mas pelo sao esta quando tambem ' +
    'det og ikke med som til har den for jeres ogsa hvor efter skal kan att eller ' +
    'geotapp articolo article artikel articulo'
  ).split(/\s+/),
);

// Ogni voce e' una radice a inizio parola ("tering" non scatta in "catering");
// quelle che finiscono con uno spazio valgono solo come parola intera ("hore " non scatta in "horeca").
function profanityRe(p) {
  const whole = p.endsWith(' ');
  const w = normalize(p).trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const end = whole ? '(?![a-z\u0400-\u04ff])' : '';
  return new RegExp(`(?<![a-z\u0400-\u04ff])${w}${end}`);
}

export function normalize(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function words(s) {
  return normalize(s)
    .replace(/<[^>]+>/g, ' ')
    .split(/[^a-z0-9Ѐ-ӿ]+/)
    .filter((w) => w.length >= 4 && !STOP.has(w));
}

export function moderateComment(input) {
  const raw = `${input.authorName ?? ''} ${input.content ?? ''}`;
  const text = normalize(raw);

  if (LINK_RE.test(raw)) return { verdict: 'spam', reason: 'link o dominio' };
  if (EMAIL_RE.test(raw)) return { verdict: 'spam', reason: 'indirizzo email nel testo' };
  if (PHONE_RE.test(input.content ?? '')) return { verdict: 'spam', reason: 'numero di telefono nel testo' };
  const bad = PROFANITY.find((p) => profanityRe(p).test(text));
  if (bad) return { verdict: 'spam', reason: `linguaggio volgare (${bad.trim()})` };
  const letters = (input.content ?? '').replace(/[^A-Za-zÀ-ÿ]/g, '');
  if (letters.length >= 20 && letters === letters.toUpperCase()) {
    return { verdict: 'spam', reason: 'tutto in maiuscolo' };
  }
  if (/(.)\1{7,}/.test(input.content ?? '')) return { verdict: 'spam', reason: 'caratteri ripetuti' };

  const cw = new Set(words(input.content ?? ''));
  if ((input.content ?? '').trim().length < 15 || cw.size < 2) {
    return { verdict: 'hold', reason: 'troppo breve per giudicare' };
  }
  if (!input.articleText) return { verdict: 'hold', reason: 'testo articolo non disponibile' };
  const aw = new Set(words(input.articleText));
  const common = [...cw].filter((w) => aw.has(w));
  if (common.length >= 1) {
    return { verdict: 'approve', reason: `inerente (${common.slice(0, 4).join(', ')})` };
  }
  return { verdict: 'hold', reason: 'nessuna parola in comune con l’articolo' };
}


const WP = process.env.WP_BASE || 'https://geotapp.com/blog/wp-json/wp/v2';
const DRY = process.argv.includes('--dry-run');

async function main() {
  const cred = fs.readFileSync(path.join(os.homedir(), '.config/geotapp/wp-app-password'), 'utf8').trim();
  const headers = {
    Authorization: 'Basic ' + Buffer.from(cred).toString('base64'),
    'X-GeoTapp-Proxy': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) GeoTapp-comment-moderator',
    'Content-Type': 'application/json',
  };
  const r = await fetch(`${WP}/comments/?status=hold&per_page=100&context=edit&_fields=id,post,author_name,content`, { headers });
  if (!r.ok) throw new Error(`lettura coda ${r.status}`);
  const held = await r.json();
  const cache = new Map();
  const out = { checked: held.length, approve: 0, spam: 0, hold: 0 };
  for (const c of held) {
    if (!cache.has(c.post)) {
      const p = await fetch(`${WP}/posts/${c.post}/?_fields=title,content`, { headers });
      const j = p.ok ? await p.json() : {};
      cache.set(c.post, `${j.title?.rendered ?? ''} ${(j.content?.rendered ?? '').slice(0, 20000)}`);
    }
    const content = c.content?.raw ?? c.content?.rendered ?? '';
    const { verdict, reason } = moderateComment({ content, authorName: c.author_name, articleText: cache.get(c.post) });
    out[verdict] += 1;
    console.log(new Date().toISOString(), `commento ${c.id} post ${c.post}: ${verdict} (${reason})`);
    if (!DRY && verdict !== 'hold') {
      const u = await fetch(`${WP}/comments/${c.id}/`, { method: 'POST', headers, body: JSON.stringify({ status: verdict }) });
      if (!u.ok) console.log(`  aggiornamento fallito ${u.status}`);
    }
  }
  console.log(new Date().toISOString(), JSON.stringify(out));
}

if (process.argv[1] && process.argv[1].endsWith('moderate-comments.mjs')) {
  main().catch((e) => { console.error(new Date().toISOString(), 'errore', e.message); process.exit(1); });
}
