

import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import markdownContent from '@/content/legal/terms';

export const dynamic = 'force-static';

export default function TermsPage() {
  return LegalMarkdownPage({
    markdownContent,
    slug: 'terms',
    locale: 'it',
    title: 'Termini di servizio',
    subtitle: 'Versione 1.6 - 30 settembre 2026',
  });
}
