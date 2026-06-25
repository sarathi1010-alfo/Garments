import {
  districts,
  products,
  cityZones,
  fabricTypes,
  businessCategories,
  services,
  qualityCertifications,
  occasions,
  buyers,
  sellers,
  geoLocations
} from '@/data/seo-data';
import { slugify } from '@/utils/slugify';

export async function GET() {
  const baseUrl = 'https://garment.alfo.online';
  const lastMod = new Date().toISOString().split('T')[0];

  const pages: string[] = [
    '', // Home
    '/directory',
    '/districts',
    '/products',
    '/fabrics',
    '/business',
    '/services',
    '/quality',
    '/occasions',
    '/buyers',
    '/sellers',
    '/locations',
    '/cities',
  ];

  districts.forEach(d => pages.push(`/districts/${slugify(d)}`));
  products.forEach(p => pages.push(`/products/${slugify(p)}`));
  fabricTypes.forEach(f => pages.push(`/fabrics/${slugify(f)}`));
  businessCategories.forEach(b => pages.push(`/business/${slugify(b)}`));
  services.forEach(s => pages.push(`/services/${slugify(s)}`));
  qualityCertifications.forEach(q => pages.push(`/quality/${slugify(q)}`));
  occasions.forEach(o => pages.push(`/occasions/${slugify(o)}`));
  buyers.forEach(b => pages.push(`/buyers/${slugify(b)}`));
  sellers.forEach(s => pages.push(`/sellers/${slugify(s)}`));
  geoLocations.forEach(l => pages.push(`/locations/${slugify(l)}`));

  Object.entries(cityZones).forEach(([city, zones]) => {
    pages.push(`/cities/${city}`);
    zones.forEach(zone => {
      pages.push(`/cities/${city}/${zone}`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
