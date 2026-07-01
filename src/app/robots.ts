import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/',
          '/_next/static/',
          '/_next/image*',
          '/images/',
          '/api/placeholder/',
        ],
        disallow: [
          '/admin/',
          '/login/',
          '/register/',
          '/cart/',
          '/checkout/',
          '/account/',
          '/api/',
          '/_next/data/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/_next/image*',
          '/images/',
          '/api/placeholder/',
        ],
      },
    ],
    sitemap: 'https://garment.alfo.online/sitemap.xml',
  };
}
