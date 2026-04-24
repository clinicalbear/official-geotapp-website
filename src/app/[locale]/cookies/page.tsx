import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const COOKIES_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Cookie Policy | GeoTapp', description: 'Cookie policy di GeoTapp: tipologie di cookie utilizzati, finalità e come gestirli.' },
  en: { title: 'Cookie Policy | GeoTapp', description: 'GeoTapp cookie policy: types of cookies used, purposes and how to manage them.' },
  de: { title: 'Cookie-Richtlinie | GeoTapp', description: 'GeoTapp Cookie-Richtlinie: verwendete Cookie-Typen, Zwecke und Verwaltung.' },
  fr: { title: 'Politique de Cookies | GeoTapp', description: 'Politique de cookies GeoTapp : types de cookies utilisés, finalités et comment les gérer.' },
  es: { title: 'Política de Cookies | GeoTapp', description: 'Política de cookies de GeoTapp: tipos de cookies utilizados, finalidades y cómo gestionarlos.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = COOKIES_META[locale] ?? COOKIES_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/cookies'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../cookies/page';
