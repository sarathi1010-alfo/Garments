import { MetadataRoute } from 'next';
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
import { guides } from '@/data/guides-data';
import { slugify } from '@/utils/slugify';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://garment.alfo.online';
  const lastMod = new Date();

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
    '/guides',
    '/contact',
  ];

  guides.forEach(g => pages.push(`/guides/${g.slug}`));
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

  return pages.map((page) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" | "yearly" | "always" | "never" | undefined = 'weekly';

    if (page === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (page.startsWith('/guides/')) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (page === '/contact') {
      priority = 0.7;
      changeFrequency = 'monthly';
    }

    return {
      url: `${baseUrl}${page}`,
      lastModified: lastMod,
      changeFrequency,
      priority,
    };
  });
}
