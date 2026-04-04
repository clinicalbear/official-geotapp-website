import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import { getPrivacyContent } from '@/content/legal/privacy-i18n';
import type { AppLocale } from '@/lib/i18n/config';

const META: Record<string, { title: string; description: string; pageTitle: string; subtitle: string }> = {
  it: { title: 'Informativa Privacy | GeoTapp', description: 'Informativa sulla privacy di GeoTapp: come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali nel rispetto del GDPR.', pageTitle: 'Informativa Privacy', subtitle: 'Versione 1.0 - 10 Marzo 2026' },
  en: { title: 'Privacy Policy | GeoTapp', description: "GeoTapp's privacy policy: how we collect, use and protect your personal data in compliance with GDPR.", pageTitle: 'Privacy Policy', subtitle: 'Version 1.0 - March 10, 2026' },
  de: { title: 'Datenschutzerklärung | GeoTapp', description: 'Datenschutzerklärung von GeoTapp: wie wir Ihre personenbezogenen Daten gemäß DSGVO erheben, verwenden und schützen.', pageTitle: 'Datenschutzerklärung', subtitle: 'Version 1.0 - 10. März 2026' },
  fr: { title: 'Politique de confidentialité | GeoTapp', description: 'Politique de confidentialité de GeoTapp : comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.', pageTitle: 'Politique de confidentialité', subtitle: 'Version 1.0 - 10 mars 2026' },
  es: { title: 'Política de privacidad | GeoTapp', description: 'Política de privacidad de GeoTapp: cómo recopilamos, utilizamos y protegemos sus datos personales de acuerdo con el RGPD.', pageTitle: 'Política de privacidad', subtitle: 'Versión 1.0 - 10 de marzo de 2026' },
  pt: { title: 'Política de privacidade | GeoTapp', description: 'Política de privacidade do GeoTapp: como recolhemos, utilizamos e protegemos os seus dados pessoais em conformidade com o RGPD.', pageTitle: 'Política de privacidade', subtitle: 'Versão 1.0 - 10 de março de 2026' },
  nl: { title: 'Privacybeleid | GeoTapp', description: 'Privacybeleid van GeoTapp: hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen in overeenstemming met de AVG.', pageTitle: 'Privacybeleid', subtitle: 'Versie 1.0 - 10 maart 2026' },
  da: { title: 'Privatlivspolitik | GeoTapp', description: 'GeoTapps privatlivspolitik: hvordan vi indsamler, bruger og beskytter dine personoplysninger i overensstemmelse med GDPR.', pageTitle: 'Privatlivspolitik', subtitle: 'Version 1.0 - 10. marts 2026' },
  nb: { title: 'Personvernerklæring | GeoTapp', description: 'GeoTapps personvernerklæring: hvordan vi samler inn, bruker og beskytter dine personopplysninger i samsvar med GDPR.', pageTitle: 'Personvernerklæring', subtitle: 'Versjon 1.0 - 10. mars 2026' },
  sv: { title: 'Integritetspolicy | GeoTapp', description: 'GeoTapps integritetspolicy: hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med GDPR.', pageTitle: 'Integritetspolicy', subtitle: 'Version 1.0 - 10 mars 2026' },
  ru: { title: 'Политика конфиденциальности | GeoTapp', description: 'Политика конфиденциальности GeoTapp: как мы собираем, используем и защищаем ваши персональные данные в соответствии с GDPR.', pageTitle: 'Политика конфиденциальности', subtitle: 'Версия 1.0 - 10 марта 2026 г.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.it;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/privacy'),
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export default async function LocalePrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = META[locale] ?? META.it;
  const content = getPrivacyContent(locale as AppLocale);
  return LegalMarkdownPage({ markdownContent: content, title: meta.pageTitle, subtitle: meta.subtitle });
}
