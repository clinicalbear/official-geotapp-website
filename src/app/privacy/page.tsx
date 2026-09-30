import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import { getPrivacyContent } from '@/content/legal/privacy-i18n';

export const dynamic = 'force-static';

// Stesso testo della versione /it/privacy/: un'informativa sola, niente copie che divergono.
export default function PrivacyPage() {
  return LegalMarkdownPage({
    markdownContent: getPrivacyContent('it'),
    slug: 'privacy',
    locale: 'it',
    title: 'Informativa privacy',
    subtitle: 'Versione 1.3 - 30 settembre 2026',
  });
}
