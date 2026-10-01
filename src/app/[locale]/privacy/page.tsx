import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import { getPrivacyContent } from '@/content/legal/privacy-i18n';
import type { AppLocale } from '@/lib/i18n/config';

const META: Record<string, { title: string; description: string; pageTitle: string; subtitle: string }> = {
  it: { title: 'Informativa privacy | GeoTapp', description: 'Come GeoTapp raccoglie, usa e protegge i dati personali: cosa registra, per quanto tempo, dove stanno i dati e quali sono i tuoi diritti secondo il GDPR.', pageTitle: 'Informativa privacy', subtitle: 'Versione 1.3 - 30 settembre 2026' },
  en: { title: 'Privacy Policy | GeoTapp', description: "How GeoTapp collects, uses and protects personal data: what it records, for how long, where the data is kept and what your rights are under the GDPR.", pageTitle: 'Privacy Policy', subtitle: 'Version 1.3 - 30 September 2026' },
  de: { title: 'Datenschutzerklärung | GeoTapp', description: 'Wie GeoTapp personenbezogene Daten erhebt, verwendet und schützt: was erfasst wird, wie lange, wo die Daten liegen und welche Rechte Sie nach der DSGVO haben.', pageTitle: 'Datenschutzerklärung', subtitle: 'Version 1.3 - 30. September 2026' },
  fr: { title: 'Politique de confidentialité | GeoTapp', description: 'Comment GeoTapp collecte, utilise et protège les données personnelles : ce qui est enregistré, combien de temps, où, et vos droits selon le RGPD.', pageTitle: 'Politique de confidentialité', subtitle: 'Version 1.3 - 30 septembre 2026' },
  es: { title: 'Política de privacidad | GeoTapp', description: 'Cómo GeoTapp recopila, usa y protege los datos personales: qué registra, durante cuánto tiempo, dónde se guardan y cuáles son tus derechos según el RGPD.', pageTitle: 'Política de privacidad', subtitle: 'Versión 1.3 - 30 de septiembre de 2026' },
  pt: { title: 'Política de privacidade | GeoTapp', description: 'Como o GeoTapp recolhe, usa e protege os dados pessoais: o que regista, durante quanto tempo, onde ficam guardados e quais são os seus direitos segundo o RGPD.', pageTitle: 'Política de privacidade', subtitle: 'Versão 1.3 - 30 de setembro de 2026' },
  nl: { title: 'Privacyverklaring | GeoTapp', description: 'Hoe GeoTapp persoonsgegevens verzamelt, gebruikt en beschermt: wat het vastlegt, hoe lang, waar de gegevens staan en wat uw rechten zijn volgens de AVG.', pageTitle: 'Privacyverklaring', subtitle: 'Versie 1.3 - 30 september 2026' },
  da: { title: 'Privatlivspolitik | GeoTapp', description: 'Hvordan GeoTapp indsamler, bruger og beskytter personoplysninger: hvad der registreres, hvor længe, hvor dataene opbevares, og hvilke rettigheder du har efter GDPR.', pageTitle: 'Privatlivspolitik', subtitle: 'Version 1.3 - 30. september 2026' },
  nb: { title: 'Personvernerklæring | GeoTapp', description: 'GeoTapps personvernerklæring: hvordan vi samler inn, bruker og beskytter dine personopplysninger i samsvar med GDPR.', pageTitle: 'Personvernerklæring', subtitle: 'Versjon 1.2 - 3. september 2026' },
  sv: { title: 'Integritetspolicy | GeoTapp', description: 'Hur GeoTapp samlar in, använder och skyddar personuppgifter: vad som registreras, hur länge, var uppgifterna finns och vilka rättigheter du har enligt GDPR.', pageTitle: 'Integritetspolicy', subtitle: 'Version 1.3 - 30 september 2026' },
  ru: { title: 'Политика конфиденциальности | GeoTapp', description: 'Политика конфиденциальности GeoTapp: как мы собираем, используем и защищаем ваши персональные данные в соответствии с GDPR.', pageTitle: 'Политика конфиденциальности', subtitle: 'Версия 1.2 - 3 сентября 2026 г.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? (locale.startsWith('en-') ? META.en : META.it);
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
  const meta = META[locale] ?? (locale.startsWith('en-') ? META.en : META.it);
  const content = getPrivacyContent(locale as AppLocale);
  return LegalMarkdownPage({
    markdownContent: content,
    title: meta.pageTitle,
    subtitle: meta.subtitle,
    description: meta.description,
    slug: 'privacy',
    locale: locale as AppLocale,
  });
}
