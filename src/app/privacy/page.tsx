

import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import markdownContent from '@/content/legal/privacy';

export const dynamic = 'force-static';

export default function PrivacyPage() {
  return LegalMarkdownPage({
    markdownContent,
    title: 'Informativa Privacy',
    subtitle: 'Versione 1.0 - 10 Marzo 2026',
  });
}
