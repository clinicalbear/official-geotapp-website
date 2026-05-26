import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface RoiPayload {
  settore: string;
  operatori: number;
  siti: number;
  ore_admin: number;
  contestazioni: number;
  costo_orario: number;
  nome: string;
  email: string;
  telefono?: string;
  locale: string;
  subscribe_newsletter?: boolean;
}

const ML_API = 'https://connect.mailerlite.com/api';

// Stesso mapping di /api/newsletter/route.ts
const SECTOR_GROUPS: Record<string, string> = {
  general:      '183189041386096435',
  installatori: '183189285297457050',
  pulizie:      '183189285492491623',
  sicurezza:    '183189285702206473',
  altro:        '183189360410101627',
};
const SECTOR_GROUP_MAP: Record<string, string> = {
  elettricisti:   'installatori',
  idraulici:      'installatori',
  termoidraulici: 'installatori',
  edilizia:       'altro',
  impianti:       'installatori',
  manutenzione:   'altro',
};
const LANG_GROUPS: Record<string, string> = {
  it: '183189741229836143', en: '183189741372441733', de: '183189741577963038',
  fr: '183189741714278118', es: '183189741873661863', pt: '183189742031996078',
  nl: '183189742179845410', ru: '183189742345520573', da: '183189742514341407',
  sv: '183189742669530726', nb: '183189742813185694',
};

// Mappa lingua primaria → country code "naturale" della lingua. Usato
// quando il locale non ha suffix regionale esplicito (es. 'it' → 'IT',
// 'fr' → 'FR'). I locale regionali (en-ie, en-us, ...) usano direttamente
// il suffix. Per 'en' generico ritorniamo '' (multiplo, no default).
const LANG_TO_DEFAULT_COUNTRY: Record<string, string> = {
  it: 'IT', de: 'DE', fr: 'FR', es: 'ES', pt: 'PT', nl: 'NL',
  da: 'DK', sv: 'SE', nb: 'NO', ru: 'RU',
};

function deriveCountry(locale: string): string {
  const norm = locale.toLowerCase().trim();
  if (norm.includes('-')) {
    return norm.split('-')[1].toUpperCase();
  }
  return LANG_TO_DEFAULT_COUNTRY[norm] ?? '';
}

async function subscribeToNewsletter(
  email: string,
  sector: string,
  locale: string,
  fields: Record<string, string | number>,
): Promise<void> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.warn('[roi-calculator] MAILERLITE_API_KEY missing, skip subscribe');
    return;
  }
  const groupIds = [SECTOR_GROUPS.general];
  if (sector) {
    const groupKey = SECTOR_GROUPS[sector] ? sector : (SECTOR_GROUP_MAP[sector] ?? 'altro');
    groupIds.push(SECTOR_GROUPS[groupKey]);
  }
  const lcase = locale.toLowerCase().split('-')[0]; // en-ie → en
  if (LANG_GROUPS[lcase]) groupIds.push(LANG_GROUPS[lcase]);

  const country = deriveCountry(locale);
  try {
    const res = await fetch(`${ML_API}/subscribers`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        fields: {
          sector,
          language: locale,
          country,
          lead_magnet: 'roi-calculator',
          ...fields,
        },
        groups: groupIds,
        status: 'active',
      }),
    });
    if (!res.ok && res.status !== 409) {
      const err = await res.json().catch(() => ({}));
      console.error('[roi-calculator] MailerLite subscribe failed:', res.status, err);
    }
  } catch (err) {
    console.error('[roi-calculator] MailerLite call error:', err);
  }
}

interface RoiResult {
  risparmio_admin: number;
  risparmio_dispute: number;
  risparmio_coord: number;
  risparmio_totale: number;
  costo_geotapp_annuo: number;
  payback_mesi: number;
  roi_pct: number;
}

function calcRoi(p: RoiPayload): RoiResult {
  const risparmio_admin = p.ore_admin * 0.65 * p.costo_orario * 52;
  const risparmio_dispute = p.contestazioni * 12 * 180;
  const risparmio_coord = p.operatori * 1.0 * p.costo_orario * 52;
  const risparmio_totale = risparmio_admin + risparmio_dispute + risparmio_coord;
  const costo_geotapp_annuo = p.operatori * 25 * 12;
  const payback_mesi = risparmio_totale > 0
    ? Math.ceil(costo_geotapp_annuo / (risparmio_totale / 12))
    : 0;
  const roi_pct = costo_geotapp_annuo > 0
    ? Math.round((risparmio_totale - costo_geotapp_annuo) / costo_geotapp_annuo * 100)
    : 0;
  return { risparmio_admin, risparmio_dispute, risparmio_coord, risparmio_totale, costo_geotapp_annuo, payback_mesi, roi_pct };
}

function fmt(n: number) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

function escHtml(s: string | number): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  let body: RoiPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { settore, operatori, siti, ore_admin, contestazioni, costo_orario, nome, email } = body;

  if (!settore || !nome || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  if (typeof operatori !== 'number' || operatori < 1) {
    return NextResponse.json({ error: 'operatori must be >= 1' }, { status: 400 });
  }
  if ([siti, ore_admin, contestazioni, costo_orario].some(v => typeof v !== 'number' || v < 0)) {
    return NextResponse.json({ error: 'Invalid numeric fields' }, { status: 400 });
  }

  const roi = calcRoi(body);

  const toEmail = process.env.ROI_EMAIL_TO ?? 'michele@geotapp.com';
  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.it',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const htmlBody = `
    <h2>Nuovo lead ROI Calculator — GeoTapp</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><th style="text-align:left;padding:8px;background:#f5f5f5">Campo</th><th style="text-align:left;padding:8px;background:#f5f5f5">Valore</th></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Nome</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(nome)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Email</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(email)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Telefono</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(body.telefono ?? '—')}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Settore</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(settore)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Operatori</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(operatori)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Siti/giorno</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(siti)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Ore admin/settimana</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(ore_admin)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Contestazioni/mese</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(contestazioni)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Costo orario</td><td style="padding:8px;border-top:1px solid #eee">€${escHtml(costo_orario)}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Lingua</td><td style="padding:8px;border-top:1px solid #eee">${escHtml(body.locale ?? '')}</td></tr>
    </table>
    <h3 style="margin-top:24px">Risultati ROI</h3>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;border-top:1px solid #eee">Risparmio burocrazia</td><td style="padding:8px;border-top:1px solid #eee"><strong>${fmt(roi.risparmio_admin)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Risparmio contestazioni</td><td style="padding:8px;border-top:1px solid #eee"><strong>${fmt(roi.risparmio_dispute)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Risparmio coordinamento</td><td style="padding:8px;border-top:1px solid #eee"><strong>${fmt(roi.risparmio_coord)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee"><strong>TOTALE RISPARMIO</strong></td><td style="padding:8px;border-top:1px solid #eee"><strong style="color:#22c55e;font-size:1.2em">${fmt(roi.risparmio_totale)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Costo GeoTapp stimato</td><td style="padding:8px;border-top:1px solid #eee">${fmt(roi.costo_geotapp_annuo)}/anno</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Payback stimato</td><td style="padding:8px;border-top:1px solid #eee">${roi.payback_mesi} mesi</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">ROI stimato</td><td style="padding:8px;border-top:1px solid #eee"><strong>${roi.roi_pct}%</strong></td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"GeoTapp ROI Calculator" <${process.env.EMAIL_FROM ?? 'info@geotapp.com'}>`,
      to: toEmail,
      subject: `Nuovo lead ROI: ${nome} (${settore}) — risparmio ${fmt(roi.risparmio_totale)}/anno`,
      html: htmlBody,
    });
  } catch (err) {
    // Log but don't fail the request — user still gets their results
    console.error('[roi-calculator] email send failed:', err);
  }

  // Iscrizione newsletter via MailerLite (con consent esplicito).
  // Non blocca la response: se MailerLite fallisce, l'utente vede comunque
  // il ROI e Mike riceve la notifica email.
  if (body.subscribe_newsletter !== false) {
    await subscribeToNewsletter(email, settore, body.locale ?? '', {
      roi_savings_eur: Math.round(roi.risparmio_totale),
      roi_payback_months: roi.payback_mesi,
      roi_pct: roi.roi_pct,
      operatori,
    });
  }

  return NextResponse.json({ ok: true, roi });
}
