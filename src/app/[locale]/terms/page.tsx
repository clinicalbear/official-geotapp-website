import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import { getTermsContent } from '@/content/legal/terms-i18n';
import type { AppLocale } from '@/lib/i18n/config';

const TERMS_META: Record<string, { title: string; description: string; pageTitle: string; subtitle: string }> = {
  it: { title: 'Termini di servizio | GeoTapp', description: 'Condizioni generali di servizio di GeoTapp: prezzi, durata minima di 12 mesi, uso consentito, cifratura, responsabilità e diritti.', pageTitle: 'Termini di servizio', subtitle: 'Versione 1.6 - 30 settembre 2026' },
  en: { title: 'Terms & Conditions | GeoTapp', description: 'GeoTapp general terms of service: prices, 12-month minimum term, permitted use, encryption, liability and rights.', pageTitle: 'Terms of Use', subtitle: 'Version 1.6 - 30 September 2026' },
  de: { title: 'Allgemeine Geschäftsbedingungen | GeoTapp', description: 'Nutzungsbedingungen von GeoTapp: Preise, Mindestlaufzeit 12 Monate, zulässige Nutzung, Verschlüsselung, Haftung und Rechte.', pageTitle: 'Nutzungsbedingungen', subtitle: 'Version 1.6 - 30. September 2026' },
  fr: { title: 'Conditions Générales | GeoTapp', description: 'Conditions générales de service GeoTapp : utilisation de la plateforme, abonnements, responsabilité et droits des utilisateurs.', pageTitle: "Conditions d'utilisation", subtitle: 'Version 1.5 - septembre 2026' },
  es: { title: 'Términos y Condiciones | GeoTapp', description: 'Condiciones generales de servicio de GeoTapp: uso de la plataforma, suscripciones, responsabilidad y derechos de los usuarios.', pageTitle: 'Condiciones de uso', subtitle: 'Versión 1.5 - septiembre de 2026' },
  pt: { title: 'Termos e Condições | GeoTapp', description: 'Condições gerais de serviço do GeoTapp: utilização da plataforma, subscrições, responsabilidade e direitos dos utilizadores.', pageTitle: 'Termos de utilização', subtitle: 'Versão 1.5 - setembro de 2026' },
  nl: { title: 'Gebruiksvoorwaarden | GeoTapp', description: 'Algemene servicevoorwaarden van GeoTapp: prijzen, minimale looptijd van 12 maanden, toegestaan gebruik, versleuteling, aansprakelijkheid en rechten.', pageTitle: 'Gebruiksvoorwaarden', subtitle: 'Versie 1.6 - 30 september 2026' },
  da: { title: 'Vilkår og Betingelser | GeoTapp', description: 'GeoTapps generelle servicevilkår: brug af platformen, abonnementer, ansvar og brugerrettigheder.', pageTitle: 'Brugsvilkår', subtitle: 'Version 1.5 - september 2026' },
  sv: { title: 'Användarvillkor | GeoTapp', description: 'GeoTapps allmänna servicevillkor: användning av plattformen, abonnemang, ansvar och användarrättigheter.', pageTitle: 'Användarvillkor', subtitle: 'Version 1.5 - september 2026' },
  nb: { title: 'Vilkår og Betingelser | GeoTapp', description: 'GeoTapps generelle tjenestevilkår: bruk av plattformen, abonnementer, ansvar og brukerrettigheter.', pageTitle: 'Bruksvilkår', subtitle: 'Versjon 1.5 - september 2026' },
  ru: { title: 'Условия использования | GeoTapp', description: 'Общие условия обслуживания GeoTapp: использование платформы, подписки, ответственность и права пользователей.', pageTitle: 'Условия использования', subtitle: 'Версия 1.5 - сентябрь 2026 г.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = TERMS_META[locale] ?? TERMS_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/terms'),
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export default async function LocaleTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = TERMS_META[locale] ?? TERMS_META.en;
  const content = getTermsContent(locale as AppLocale);
  return LegalMarkdownPage({
    markdownContent: content,
    title: meta.pageTitle,
    subtitle: meta.subtitle,
    description: meta.description,
    slug: 'terms',
    locale: locale as AppLocale,
  });
}
