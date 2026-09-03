

import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import markdownContent from '@/content/legal/terms';

export const dynamic = 'force-static';

export default function TermsPage() {
  return LegalMarkdownPage({
    markdownContent,
    slug: 'terms',
    locale: 'it',
    title: 'Condizioni Generali di Servizio',
    subtitle: 'Aggiornato al 3 settembre 2026',
  });
}
