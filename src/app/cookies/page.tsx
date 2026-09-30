import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import markdownContent from '@/content/legal/cookies';

export const dynamic = 'force-static';

export default function CookiesPage() {
  return LegalMarkdownPage({
    markdownContent,
    slug: 'cookies',
    locale: 'it',
    title: 'Informativa cookie',
    subtitle: 'Versione 1.1 - 30 settembre 2026',
  });
}
