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

  return NextResponse.json({ ok: true, roi });
}
