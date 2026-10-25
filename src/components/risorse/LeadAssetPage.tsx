import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { JsonLd } from '@/components/seo/JsonLd';
import LeadAssetGate from '@/components/risorse/LeadAssetGate';
import { ASSETS, COPY, UI, baseLocale } from '@/content/lead-assets';
import type { AssetKey } from '@/content/lead-assets';

/**
 * Pagina di una risorsa scaricabile dietro email (manuale, checklist).
 * In italiano e' la pagina vera; nelle altre dieci lingue e' la stessa pagina
 * tradotta, con l'avviso che l'edizione in quella lingua e' in arrivo, la
 * raccolta email e, intanto, la copia italiana.
 */

export function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

export async function leadAssetMetadata(
  asset: AssetKey,
  params: Promise<{ locale: string }>,
): Promise<Metadata> {
  const { locale } = await params;
  const l = safeLocale(locale);
  const c = COPY[baseLocale(l)][asset];
  const a = ASSETS[asset];
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDesc,
    alternates: buildLocaleAlternates(locale, a.path),
    openGraph: {
      url: buildCanonicalUrl(locale, a.path),
      type: 'website',
      title: c.metaTitle,
      description: c.metaDesc,
      images: [{ url: a.cover ?? '/og-default.png', alt: c.h1 }],
    },
  };
}

export async function LeadAssetPage({
  asset,
  params,
}: {
  asset: AssetKey;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = safeLocale(locale);
  const ui = UI[baseLocale(l)];
  const c = COPY[baseLocale(l)][asset];
  const a = ASSETS[asset];
  const isIt = baseLocale(l) === 'it';

  const schema = {
    '@context': 'https://schema.org',
    '@type': asset === 'manuale' ? 'Book' : 'CreativeWork',
    name: c.h1,
    alternateName: c.subtitle,
    description: c.metaDesc,
    inLanguage: l,
    author: { '@type': 'Person', name: 'Michele Angelo Petraroli' },
    publisher: { '@type': 'Organization', name: 'GeoTapp', url: 'https://geotapp.com' },
    datePublished: '2026-10-23',
    ...(a.cover ? { image: `https://geotapp.com${a.cover}` } : {}),
    url: buildCanonicalUrl(l, a.path),
  };

  const meta = `PDF, ${a.pages} ${isIt ? 'pagine' : 'p.'}, ${a.sizeLabel}.`;

  return (
    <div className="lp-l lp-risorsa-strumento">
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={`/${l}/`}>GeoTapp</Link> / <Link href={localizePath('/risorse/', l)}>{ui.resources}</Link> / {c.h1}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{ui.kicker[asset]}</p>
          <h1>{c.h1}</h1>
          <p className="lede">{c.subtitle}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wt art">
          <div className="body">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'flex-start' }}>
              {a.cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.cover}
                  alt={c.h1}
                  width={720}
                  height={1103}
                  style={{ width: 240, maxWidth: '100%', height: 'auto', borderRadius: 4, boxShadow: '0 6px 24px rgba(11,23,54,.18)' }}
                />
              )}
              <div style={{ flex: '1 1 320px' }}>
                {!isIt && (
                  <div style={{ border: '1px solid #0B1736', background: '#f4f5f8', padding: '12px 16px', borderRadius: 6, marginBottom: 18 }}>
                    <p style={{ margin: '0 0 4px', fontWeight: 700 }}>{ui.comingTitle}</p>
                    <p style={{ margin: 0 }}>{ui.comingText[asset]}</p>
                  </div>
                )}
                <p>{c.p1}</p>
                <p>{c.p2}</p>
                <div style={{ marginTop: 18 }}>
                  <LeadAssetGate
                    locale={l}
                    leadMagnet={a.leadMagnet}
                    privacyHref={localizePath('/privacy', l)}
                    labels={{
                      emailLabel: ui.emailLabel,
                      emailPlaceholder: ui.emailPlaceholder,
                      consent: ui.consent,
                      consentLink: ui.consentLink,
                      button: ui.button,
                      sending: ui.sending,
                      errorEmail: ui.errorEmail,
                      errorConsent: ui.errorConsent,
                      errorGeneric: ui.errorGeneric,
                      successTitle: ui.successTitle,
                      successText: ui.successText,
                      download: ui.downloadLabel[asset],
                      italianNote: isIt ? '' : ui.italianNote,
                      meta,
                    }}
                  />
                </div>
              </div>
            </div>

            <h2>{ui.whatTitle}</h2>
            <p>{ui.authorLine}</p>
            <p><b>{ui.disclaimerTitle}.</b> {ui.disclaimer}</p>
            <p>
              {ui.contactPrompt}{' '}
              <Link href={localizePath('/contact', l)}>{ui.contactLink}</Link>.
            </p>
          </div>
        </div>
      </section>
      <JsonLd data={schema} />
    </div>
  );
}
