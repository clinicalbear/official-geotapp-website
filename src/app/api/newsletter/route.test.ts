import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from './route';
import { ASSETS } from '@/content/lead-assets';

function req(body: unknown, ip = '203.0.113.9') {
  return new NextRequest('https://geotapp.com/api/newsletter', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': ip, 'cf-connecting-ip': ip },
    body: JSON.stringify(body),
  });
}

describe('POST /api/newsletter, risorse dietro email', () => {
  beforeEach(() => {
    vi.stubEnv('MAILERLITE_API_KEY', 'test-key');
    vi.stubGlobal('fetch', vi.fn(async () => new Response('{}', { status: 200 })));
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('senza email valida non da il file', async () => {
    const res = await POST(req({ email: 'non-una-email', leadMagnet: ASSETS.manuale.leadMagnet }, '203.0.113.1'));
    expect(res.status).toBe(400);
    expect(await res.json()).not.toHaveProperty('file');
  });

  it('con email valida iscrive e restituisce il link del manuale e della checklist', async () => {
    for (const [i, k] of (['manuale', 'checklist'] as const).entries()) {
      const res = await POST(req({ email: 'Prova@Azienda.it', locale: 'en', leadMagnet: ASSETS[k].leadMagnet }, `203.0.113.${20 + i}`));
      expect(res.status).toBe(200);
      const body = (await res.json()) as { ok: boolean; file?: string };
      expect(body.file).toBe(ASSETS[k].file);
    }
    const call = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0];
    const sent = JSON.parse((call[1] as RequestInit).body as string);
    expect(sent.email).toBe('prova@azienda.it');
    expect(sent.fields.lead_magnet).toBe(ASSETS.manuale.leadMagnet);
  });

  it('se MailerLite non risponde, il file non viene dato', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('{}', { status: 500 })));
    const res = await POST(req({ email: 'prova@azienda.it', leadMagnet: ASSETS.manuale.leadMagnet }, '203.0.113.40'));
    expect(res.status).toBe(502);
    expect(await res.json()).not.toHaveProperty('file');
  });

  it('il manuale viene contato anche nel CRM, con paese e lingua, e il CRM giu non blocca il file', async () => {
    vi.stubEnv('CRM_LEAD_ENDPOINT', 'https://crm.example.test/api/lead/survey');
    vi.stubEnv('CRM_SYNC_SECRET', 'segreto-di-prova');
    const f = vi.fn(async (url: string | URL | Request, _init?: RequestInit) =>
      String(url).includes('/api/lead/asset-download') ? new Response('{}', { status: 500 }) : new Response('{}', { status: 200 }));
    vi.stubGlobal('fetch', f);
    const r = new NextRequest('https://geotapp.com/api/newsletter', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-forwarded-for': '203.0.113.60', 'cf-connecting-ip': '203.0.113.60', 'cf-ipcountry': 'it' },
      body: JSON.stringify({ email: 'Prova@Azienda.it', locale: 'it', leadMagnet: ASSETS.manuale.leadMagnet }),
    });
    const res = await POST(r);
    expect(res.status).toBe(200);
    expect(((await res.json()) as { file?: string }).file).toBe(ASSETS.manuale.file);
    const crm = f.mock.calls.find((c) => String(c[0]).includes('/api/lead/asset-download'));
    expect(String(crm![0])).toBe('https://crm.example.test/api/lead/asset-download');
    const init = crm![1] as RequestInit;
    expect((init.headers as Record<string, string>)['x-sync-secret']).toBe('segreto-di-prova');
    expect(JSON.parse(init.body as string)).toEqual({ asset: ASSETS.manuale.leadMagnet, email: 'prova@azienda.it', locale: 'it', country: 'it' });
  });

  it('un lead magnet senza file (iscrizione normale) non riceve link', async () => {
    const res = await POST(req({ email: 'prova@azienda.it' }, '203.0.113.50'));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });
});
