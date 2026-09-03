

import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import markdownContent from '@/content/legal/privacy';

export const dynamic = 'force-static';

export default function PrivacyPage() {
  return LegalMarkdownPage({
    markdownContent,
    slug: 'privacy',
    locale: 'it',
    title: 'Informativa Privacy',
    subtitle: 'Versione 1.2 - 3 settembre 2026',
  });
}
