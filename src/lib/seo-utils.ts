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
    "datePublished": "2024-06-25",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vinayaga Garments",
    "alternateName": ["Alfo", "Sarathi"],
    "description": "Leading manufacturer of custom athletic apparel and corporate uniforms in Tamil Nadu, part of the Alfo ecosystem.",
    "url": baseUrl,
    "logo": "https://garment.alfo.online/images/logo-mark-light.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.phoneDisplay,
      "contactType": "customer service",
      "email": CONTACT.email,
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/alfo",
      "https://github.com/alfo-ecosystem"
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
  const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

  const category = currentPath.split('/')[1];

  // Implement Silo Structure: Pages primarily link to their own category
  if (category === 'districts' || category === 'cities') {
    // Location Silo
    for (let i = 0; i < 6; i++) {
      const d = getRandom(districts);
      links.push({ href: `/districts/${slugify(d)}`, label: getRandomAnchor('locations', d) });
    }
    const city = getRandom(Object.keys(cityZones));
    const zone = getRandom(cityZones[city]);
    links.push({ href: `/cities/${city}/${zone}`, label: getRandomAnchor('locations', zone.replace(/-/g, ' ')) });

    // Minimal cross-linking to landing pages only
    links.push({ href: '/', label: 'Return Home' });
    links.push({ href: '/services/custom-manufacturing', label: 'View Our Services' });
  } else if (category === 'products') {
    // Product Silo
    for (let i = 0; i < 8; i++) {
      const p = getRandom(products);
      links.push({ href: `/products/${slugify(p)}`, label: getRandomAnchor('products', p) });
    }
    links.push({ href: '/', label: 'Garment Solutions' });
  } else if (category === 'services') {
    // Service Silo
    for (let i = 0; i < 5; i++) {
      const s = getRandom(services);
      links.push({ href: `/services/${slugify(s)}`, label: getRandomAnchor('services', s) });
    }
    // Services link to product categories (not individual products)
    links.push({ href: '/', label: 'View All Products' });
  } else if (category === 'quality') {
    // Quality Silo
    for (let i = 0; i < 5; i++) {
      const q = getRandom(qualityCertifications);
      links.push({ href: `/quality/${slugify(q)}`, label: getRandomAnchor('quality', q) });
    }
    links.push({ href: '/', label: 'Our Commitment' });
  } else {
    // General fallback for other categories (occasions, buyers, sellers)
    for (let i = 0; i < 3; i++) {
      const p = getRandom(products);
      links.push({ href: `/products/${slugify(p)}`, label: getRandomAnchor('products', p) });
    }
    for (let i = 0; i < 3; i++) {
      const d = getRandom(districts);
      links.push({ href: `/districts/${slugify(d)}`, label: getRandomAnchor('locations', d) });
    }
  }

  return links.filter(link => link.href !== currentPath).slice(0, 10);
}
