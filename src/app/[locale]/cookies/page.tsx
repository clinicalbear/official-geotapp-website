import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import { getCookiesContent } from '@/content/legal/cookies-i18n';
import type { AppLocale } from '@/lib/i18n/config';

const META: Record<string, { title: string; description: string; pageTitle: string; subtitle: string }> = {
  it: { title: 'Cookie Policy | GeoTapp', description: 'Cookie policy di GeoTapp: tipologie di cookie utilizzati, finalità e come gestirli.', pageTitle: 'Informativa Cookie', subtitle: 'Versione 1.0 - Marzo 2026' },
  en: { title: 'Cookie Policy | GeoTapp', description: 'GeoTapp cookie policy: types of cookies used, purposes and how to manage them.', pageTitle: 'Cookie Policy', subtitle: 'Version 1.0 - March 2026' },
  de: { title: 'Cookie-Richtlinie | GeoTapp', description: 'GeoTapp Cookie-Richtlinie: verwendete Cookie-Typen, Zwecke und Verwaltung.', pageTitle: 'Cookie-Richtlinie', subtitle: 'Version 1.0 - März 2026' },
  fr: { title: 'Politique de Cookies | GeoTapp', description: 'Politique de cookies GeoTapp : types de cookies utilisés, finalités et comment les gérer.', pageTitle: 'Politique de cookies', subtitle: 'Version 1.0 - mars 2026' },
  es: { title: 'Política de Cookies | GeoTapp', description: 'Política de cookies de GeoTapp: tipos de cookies utilizados, finalidades y cómo gestionarlos.', pageTitle: 'Política de cookies', subtitle: 'Versión 1.0 - marzo de 2026' },
  pt: { title: 'Política de Cookies | GeoTapp', description: 'Política de cookies do GeoTapp: tipos de cookies utilizados, finalidades e como geri-los.', pageTitle: 'Política de cookies', subtitle: 'Versão 1.0 - março de 2026' },
  nl: { title: 'Cookiebeleid | GeoTapp', description: 'Cookiebeleid van GeoTapp: gebruikte cookietypes, doeleinden en hoe u ze beheert.', pageTitle: 'Cookiebeleid', subtitle: 'Versie 1.0 - maart 2026' },
  da: { title: 'Cookiepolitik | GeoTapp', description: 'GeoTapps cookiepolitik: typer af cookies, formål og hvordan du administrerer dem.', pageTitle: 'Cookiepolitik', subtitle: 'Version 1.0 - marts 2026' },
  sv: { title: 'Cookiepolicy | GeoTapp', description: 'GeoTapps cookiepolicy: typer av cookies, syften och hur du hanterar dem.', pageTitle: 'Cookiepolicy', subtitle: 'Version 1.0 - mars 2026' },
  nb: { title: 'Informasjonskapsler | GeoTapp', description: 'GeoTapps retningslinjer for informasjonskapsler: typer, formål og hvordan du administrerer dem.', pageTitle: 'Retningslinjer for informasjonskapsler', subtitle: 'Versjon 1.0 - mars 2026' },
  ru: { title: 'Политика cookie | GeoTapp', description: 'Политика использования файлов cookie GeoTapp: типы cookie, цели и управление ими.', pageTitle: 'Политика использования файлов cookie', subtitle: 'Версия 1.0 - март 2026 г.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/cookies'),
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export default async function LocaleCookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;
  const content = getCookiesContent(locale as AppLocale);
  return LegalMarkdownPage({ markdownContent: content, title: meta.pageTitle, subtitle: meta.subtitle });
}
