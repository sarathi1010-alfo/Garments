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

const BASE_URL = 'https://garment.alfo.online';
const CHUNK_SIZE = 500;

function getAllPages(): string[] {
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
      pages.push(`/cities/${city}/${slugify(zone)}`);
    });
  });

  return pages;
}

export async function generateSitemaps() {
  const allPages = getAllPages();
  const numSitemaps = Math.ceil(allPages.length / CHUNK_SIZE);
  return Array.from({ length: numSitemaps }, (_, id) => ({ id }));
}

export default async function sitemap(props: any): Promise<MetadataRoute.Sitemap> {
  // In Next.js 15/16, sitemap props or its properties can be promises
  let id = 0;
  try {
    const resolvedProps = await props;
    if (resolvedProps && typeof resolvedProps === 'object') {
      id = await resolvedProps.id;
    } else {
      id = await resolvedProps;
    }
  } catch (e) {
    // Fallback for non-chunked or single chunk
  }

  const numericId = Number(id) || 0;
  const allPages = getAllPages();

  const start = numericId * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  const pageChunk = allPages.slice(start, end);

  const lastMod = new Date();

  return pageChunk.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: lastMod,
    changeFrequency: (page === '' ? 'daily' : 'weekly') as any,
    priority: page === '' ? 1.0 : (page.startsWith('/guides/') ? 0.9 : 0.8),
  }));
}
