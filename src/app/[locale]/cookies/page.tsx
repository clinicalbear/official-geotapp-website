import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import { getCookiesContent } from '@/content/legal/cookies-i18n';
import type { AppLocale } from '@/lib/i18n/config';

const META: Record<string, { title: string; description: string; pageTitle: string; subtitle: string }> = {
  it: { title: 'Informativa cookie | GeoTapp', description: 'Quali cookie usa geotapp.com, a cosa servono, quanto durano e come cambiare la tua scelta in qualsiasi momento.', pageTitle: 'Informativa cookie', subtitle: 'Versione 1.1 - 30 settembre 2026' },
  en: { title: 'Cookie Policy | GeoTapp', description: 'Which cookies geotapp.com uses, what they are for, how long they last and how to change your choice at any time.', pageTitle: 'Cookie Policy', subtitle: 'Version 1.1 - 30 September 2026' },
  de: { title: 'Cookie-Richtlinie | GeoTapp', description: 'Welche Cookies geotapp.com verwendet, wofür sie dienen, wie lange sie gespeichert bleiben und wie Sie Ihre Wahl jederzeit ändern können.', pageTitle: 'Cookie-Richtlinie', subtitle: 'Version 1.1 - 30. September 2026' },
  fr: { title: 'Politique de cookies | GeoTapp', description: 'Quels cookies geotapp.com utilise, à quoi ils servent, combien de temps ils durent et comment modifier votre choix à tout moment.', pageTitle: 'Politique de cookies', subtitle: 'Version 1.1 - 30 septembre 2026' },
  es: { title: 'Política de cookies | GeoTapp', description: 'Qué cookies usa geotapp.com, para qué sirven, cuánto duran y cómo cambiar tu elección en cualquier momento.', pageTitle: 'Política de cookies', subtitle: 'Versión 1.1 - 30 de septiembre de 2026' },
  pt: { title: 'Política de cookies | GeoTapp', description: 'Que cookies usa o geotapp.com, para que servem, quanto tempo duram e como alterar a sua escolha a qualquer momento.', pageTitle: 'Política de cookies', subtitle: 'Versão 1.1 - 30 de setembro de 2026' },
  nl: { title: 'Cookieverklaring | GeoTapp', description: 'Welke cookies geotapp.com gebruikt, waarvoor ze dienen, hoe lang ze blijven staan en hoe u uw keuze op elk moment kunt wijzigen.', pageTitle: 'Cookieverklaring', subtitle: 'Versie 1.1 - 30 september 2026' },
  da: { title: 'Cookiepolitik | GeoTapp', description: 'Hvilke cookies geotapp.com bruger, hvad de bruges til, hvor længe de varer, og hvordan du til enhver tid kan ændre dit valg.', pageTitle: 'Cookiepolitik', subtitle: 'Version 1.1 - 30. september 2026' },
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
  return LegalMarkdownPage({
    markdownContent: content,
    title: meta.pageTitle,
    subtitle: meta.subtitle,
    description: meta.description,
    slug: 'cookies',
    locale: locale as AppLocale,
  });
}
