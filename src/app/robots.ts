

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Block pure training-data scrapers that offer no referral benefit.
        // CCBot feeds Common Crawl datasets; Bytespider feeds ByteDance/TikTok models.
        userAgent: ['CCBot', 'Bytespider'],
        disallow: '/',
      },
      {
        // Allow RAG/citation bots (Perplexity, Claude, ChatGPT search, Google AI Overview,
        // Google-Extended for Gemini training, Meta AI) — these can drive referral traffic.
        // OAI-SearchBot = ChatGPT search; GPTBot = OpenAI training (allowed intentionally
        // for brand visibility in AI answers).
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'PerplexityBot',
          'FacebookBot',
          'Applebot-Extended',
        ],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/blog/wp-admin/',
          '/blog/wp-login.php',
          '/blog/xmlrpc.php',
          '/blog/wp-cron.php',
          '/blog/checkout/',
          '/blog/cart/',
          '/blog/about-us/',
          '/blog/services/',
          '/blog/pagina-di-esempio/',
          '/blog/wp-json/',
          '/blog/author/',
        ],
      },
    ],
    sitemap: 'https://geotapp.com/sitemap.xml',
  };
}
