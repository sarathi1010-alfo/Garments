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
import { guides } from '../data/guides-data';
import { slugify } from '@/utils/slugify';
import { CONTACT } from './contact';

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
    "telephone": CONTACT.whatsappDisplay,
    "email": CONTACT.email,
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
    "datePublished": "2026-06-27",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vinayaga Garments",
    "alternateName": ["Alfo", "Sarathi"],
    "description": "Leading manufacturer of custom athletic apparel and corporate uniforms in Tamil Nadu, part of the Alfo ecosystem.",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": "https://garment.alfo.online/images/logo-mark-light.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.phoneDisplay,
      "contactType": "customer service",
      "email": CONTACT.email,
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/alfo",
      "https://github.com/alfo-ecosystem",
      "https://www.youtube.com/@alfo-online"
    ]
  };

  const schemas: any[] = [breadcrumb, localBusiness, faq, article, organization];

  // Add Product schema if the path indicates a product
  if (path.startsWith('/products/')) {
    const productName = data.h1.replace('Premium ', '').replace(' Production in Tamil Nadu', '');
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": productName,
      "description": data.description,
      "image": "https://garment.alfo.online/api/placeholder/1200/675",
      "brand": {
        "@type": "Brand",
        "name": "Vinayaga Garments"
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "1",
        "lowPrice": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Vinayaga Garments"
        }
      }
    });
  }

  return schemas;
}

const ANCHOR_TEMPLATES = {
  products: [
    (name: string) => `Shop ${name}`,
    (name: string) => `Explore ${name} Collection`,
    (name: string) => `Our ${name} Range`,
    (name: string) => `View ${name} Products`,
    (name: string) => `${name} Catalog`,
    (name: string) => `Quality ${name}`,
    (name: string) => `${name} Solutions`
  ],
  locations: [
    (name: string) => `Our ${name} Operations`,
    (name: string) => `Serving ${name}`,
    (name: string) => `${name} Garment Services`,
    (name: string) => `Visit ${name} Location`,
    (name: string) => `${name} Presence`,
    (name: string) => `Garments in ${name}`,
    (name: string) => `${name} Manufacturing Hub`
  ],
  services: [
    (name: string) => `Custom ${name} Services`,
    (name: string) => `Our ${name} Capabilities`,
    (name: string) => `${name} Solutions`,
    (name: string) => `Contract ${name}`,
    (name: string) => `${name} Expertise`,
    (name: string) => `Professional ${name}`
  ],
  quality: [
    (name: string) => `Our ${name} Standards`,
    (name: string) => `${name} Excellence`,
    (name: string) => `${name} Program`,
    (name: string) => `Learn About ${name}`,
    (name: string) => `${name} Accreditation`
  ]
};

function getRandomAnchor(type: keyof typeof ANCHOR_TEMPLATES, name: string) {
  const templates = ANCHOR_TEMPLATES[type];
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template(name);
}

export function getInternalLinks(currentPath: string) {
  const links: { href: string; label: string }[] = [];
  const parts = currentPath.split('/').filter(Boolean);
  const category = parts[0];
  const slug = parts[1];

  const getAdjacent = (arr: string[], current: string, count: number) => {
    const idx = arr.findIndex(item => slugify(item) === current);
    if (idx === -1) return [];
    const result: string[] = [];
    for (let i = 1; i <= count; i++) {
      result.push(arr[(idx + i) % arr.length]);
      result.push(arr[(idx - i + arr.length) % arr.length]);
    }
    return [...new Set(result)];
  };

  if (category === 'districts') {
    const adjacent = getAdjacent(districts, slug, 3);
    adjacent.forEach(d => links.push({ href: `/districts/${slugify(d)}`, label: getRandomAnchor('locations', d) }));
    links.push({ href: '/cities', label: 'Explore Cities' });
  } else if (category === 'products') {
    const adjacent = getAdjacent(products, slug, 4);
    adjacent.forEach(p => links.push({ href: `/products/${slugify(p)}`, label: getRandomAnchor('products', p) }));
    links.push({ href: '/services', label: 'Manufacturing Services' });
  } else if (category === 'services') {
    const adjacent = getAdjacent(services, slug, 3);
    adjacent.forEach(s => links.push({ href: `/services/${slugify(s)}`, label: getRandomAnchor('services', s) }));
    links.push({ href: '/products', label: 'View Products' });
  } else if (category === 'cities') {
    const city = slug;
    const zone = parts[2];
    if (city && zone && cityZones[city]) {
      const adjacentZones = getAdjacent(cityZones[city], zone, 3);
      adjacentZones.forEach(z => links.push({ href: `/cities/${city}/${slugify(z)}`, label: getRandomAnchor('locations', z.replace(/-/g, ' ')) }));
    }
    links.push({ href: '/districts', label: 'Manufacturing Districts' });
  } else if (category === 'fabrics') {
    const adjacent = getAdjacent(fabricTypes, slug, 3);
    adjacent.forEach(f => links.push({ href: `/fabrics/${slugify(f)}`, label: `Explore ${f} Fabric` }));
  } else if (category === 'guides') {
    const adjacent = getAdjacent(guides.map(g => g.slug), slug, 4);
    adjacent.forEach(s => {
      const guide = guides.find(g => g.slug === s);
      if (guide) {
        links.push({ href: `/guides/${s}`, label: guide.title.split('—')[0].trim() });
      }
    });
  } else {
    // Default fallback
    const p = products.slice(0, 5);
    p.forEach(item => links.push({ href: `/products/${slugify(item)}`, label: getRandomAnchor('products', item) }));
  }

  // Add a link back to home if not enough links
  if (links.length < 5) {
    links.push({ href: '/', label: 'Vinayaga Garments Home' });
  }

  return links.filter(link => link.href !== currentPath).slice(0, 10);
}
