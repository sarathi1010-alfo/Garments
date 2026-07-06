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

export async function generateSitemaps() {
  return Array.from({ length: 1000 }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = 'https://garment.alfo.online';
  const lastMod = new Date();

  // Generate real pages
  const realPages: string[] = [
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

  guides.forEach(g => realPages.push(`/guides/${g.slug}`));
  districts.forEach(d => realPages.push(`/districts/${slugify(d)}`));
  products.forEach(p => realPages.push(`/products/${slugify(p)}`));
  fabricTypes.forEach(f => realPages.push(`/fabrics/${slugify(f)}`));
  businessCategories.forEach(b => realPages.push(`/business/${slugify(b)}`));
  services.forEach(s => realPages.push(`/services/${slugify(s)}`));
  qualityCertifications.forEach(q => realPages.push(`/quality/${slugify(q)}`));
  occasions.forEach(o => realPages.push(`/occasions/${slugify(o)}`));
  buyers.forEach(b => realPages.push(`/buyers/${slugify(b)}`));
  sellers.forEach(s => realPages.push(`/sellers/${slugify(s)}`));
  geoLocations.forEach(l => realPages.push(`/locations/${slugify(l)}`));

  Object.entries(cityZones).forEach(([city, zones]) => {
    realPages.push(`/cities/${city}`);
    zones.forEach(zone => {
      realPages.push(`/cities/${city}/${zone}`);
    });
  });

  const PAGE_SIZE = 20;
  const startIndex = id * PAGE_SIZE;
  let sitemapPages: string[] = [];

  if (startIndex < realPages.length) {
    sitemapPages = realPages.slice(startIndex, startIndex + PAGE_SIZE);
  }

  // If we don't have enough real pages to fill the 20 slots, fill the rest with unique URLs
  let fillIndex = 0;
  while (sitemapPages.length < PAGE_SIZE) {
    sitemapPages.push(`/unique-generated-page-${id}-${fillIndex}`);
    fillIndex++;
  }

  return sitemapPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: lastMod,
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1.0 : 0.8,
  }));
}
