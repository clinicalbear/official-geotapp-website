import { NextRequest, NextResponse } from 'next/server';

const ML_API = 'https://connect.mailerlite.com/api';

// Sector group IDs
const SECTOR_GROUPS: Record<string, string> = {
  general:      '183189041386096435', // everyone
  installatori: '183189285297457050',
  pulizie:      '183189285492491623',
  sicurezza:    '183189285702206473',
  altro:        '183189360410101627',
};

// Map new sectors to existing MailerLite groups (specific sector stored in fields.sector)
const SECTOR_GROUP_MAP: Record<string, string> = {
  elettricisti:   'installatori',
  idraulici:      'installatori',
  termoidraulici: 'installatori',
  edilizia:       'altro',
  impianti:       'installatori',
  manutenzione:   'altro',
};

// Language group IDs (lang:xx)
const LANG_GROUPS: Record<string, string> = {
  it: '183189741229836143',
  en: '183189741372441733',
  de: '183189741577963038',
  fr: '183189741714278118',
  es: '183189741873661863',
  pt: '183189742031996078',
  nl: '183189742179845410',
  ru: '183189742345520573',
  da: '183189742514341407',
  sv: '183189742669530726',
  nb: '183189742813185694',
};

// Lead magnet group IDs — subscriber che scarica un asset specifico
const LEAD_MAGNET_GROUPS: Record<string, string> = {
  'informativa-gps': '188186066672420802',
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  let email: string;
  let sector: string | undefined;
  let locale: string | undefined;
  let leadMagnet: string | undefined;

  try {
    const body = await req.json();
    email  = (body.email  ?? '').trim().toLowerCase();
    sector = (body.sector ?? '').trim().toLowerCase() || undefined;
    locale = (body.locale ?? '').trim().toLowerCase() || undefined;
    leadMagnet = (body.leadMagnet ?? '').trim().toLowerCase() || undefined;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // Build group list: general + sector group + language group
  const groupIds = [SECTOR_GROUPS.general];
  if (sector) {
    const groupKey = SECTOR_GROUPS[sector] ? sector : (SECTOR_GROUP_MAP[sector] ?? 'altro');
    groupIds.push(SECTOR_GROUPS[groupKey]);
  }
  if (locale && LANG_GROUPS[locale]) groupIds.push(LANG_GROUPS[locale]);
  if (leadMagnet && LEAD_MAGNET_GROUPS[leadMagnet]) {
    groupIds.push(LEAD_MAGNET_GROUPS[leadMagnet]);
  }

  const res = await fetch(`${ML_API}/subscribers`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      fields: { sector: sector ?? '', language: locale ?? '', lead_magnet: leadMagnet ?? '' },
      groups: groupIds,
      status: 'active',
    }),
  });

  if (!res.ok && res.status !== 409) {
    const err = await res.json().catch(() => ({}));
    console.error('Mailerlite error:', err);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 });
  }

  // Per il lead-magnet "informativa-gps" notifichiamo ANCHE il CRM, che
  // gestisce la drip sequence multilingua (sostituisce automation
  // MailerLite legacy). Non blocca la risposta: se il CRM fallisce,
  // il subscriber è già su MailerLite come backup.
  if (leadMagnet === 'informativa-gps') {
    const crmUrl = process.env.CRM_GDPR_ENDPOINT;
    const crmSecret = process.env.CRM_SYNC_SECRET;
    if (crmUrl && crmSecret) {
      fetch(crmUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-sync-secret': crmSecret },
        body: JSON.stringify({ email, sector, locale }),
      }).catch(err => console.error('[newsletter] CRM gdpr-download notify failed:', err));
    }
  }

  return NextResponse.json({ ok: true });
}
