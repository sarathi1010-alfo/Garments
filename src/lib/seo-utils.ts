import { PageData } from './content-templates';
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
} from '../data/seo-data';
import { slugify } from '@/utils/slugify';

export function generateMetadata(data: PageData, path: string) {
  const baseUrl = 'https://garment.alfo.online';
  const url = `${baseUrl}${path}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords.join(', '),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
        'ta': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: url,
      siteName: 'Vinayaga Garments',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://garment.alfo.online/api/placeholder/1200/630',
          width: 1200,
          height: 630,
          alt: data.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: ['https://garment.alfo.online/api/placeholder/1200/630'],
    },
    other: {
      'geo.region': 'IN-TN',
      'geo.placename': 'Tamil Nadu',
      'geo.position': '13.0827;80.2707',
      'ICBM': '13.0827, 80.2707',
    }
  };
}

export function generateStructuredData(data: PageData, path: string) {
  const baseUrl = 'https://garment.alfo.online';
  const url = `${baseUrl}${path}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": data.h1,
        "item": url
      }
    ]
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.title,
    "description": data.description,
    "url": url,
    "image": "https://garment.alfo.online/api/placeholder/1200/675",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "telephone": "+91-7200551500",
    "email": "info@alfo.online",
    "openingHours": "Mo-Su 09:00-18:00"
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.h1,
    "description": data.description,
    "image": "https://garment.alfo.online/api/placeholder/1200/675",
    "author": {
      "@type": "Organization",
      "name": "Vinayaga Garments"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vinayaga Garments",
      "logo": {
        "@type": "ImageObject",
        "url": "https://garment.alfo.online/images/logo-mark-light.png"
      }
    },
    "datePublished": "2024-06-25",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return [breadcrumb, localBusiness, faq, article];
}

export function getInternalLinks(currentPath: string) {
  const links: { href: string; label: string }[] = [];
  const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

  for (let i = 0; i < 2; i++) {
    const d = getRandom(districts);
    links.push({ href: `/districts/${slugify(d)}`, label: `Garment Hub in ${d}` });
  }

  for (let i = 0; i < 3; i++) {
    const p = getRandom(products);
    links.push({ href: `/products/${slugify(p)}`, label: `${p} Manufacturing` });
  }

  const city = getRandom(Object.keys(cityZones));
  const zone = getRandom(cityZones[city]);
  links.push({ href: `/cities/${city}/${zone}`, label: `${zone.replace(/-/g, ' ')} Textile Zone` });

  const s = getRandom(services);
  links.push({ href: `/services/${slugify(s)}`, label: `Professional ${s}` });

  const b = getRandom(buyers);
  links.push({ href: `/buyers/${slugify(b)}`, label: `For ${b}` });

  const sel = getRandom(sellers);
  links.push({ href: `/sellers/${slugify(sel)}`, label: `Top ${sel}` });

  return links.filter(link => link.href !== currentPath).slice(0, 10);
}
