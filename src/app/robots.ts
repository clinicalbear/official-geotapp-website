

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
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
