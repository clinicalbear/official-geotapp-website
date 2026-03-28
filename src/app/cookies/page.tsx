import { LegalMarkdownPage } from '@/components/legal/LegalMarkdownPage';
import markdownContent from '@/content/legal/cookies';

export const dynamic = 'force-static';

export default function CookiesPage() {
  return LegalMarkdownPage({
    markdownContent,
    title: 'Informativa Cookie',
    subtitle: 'Versione 1.0 — Marzo 2026',
  });
}
