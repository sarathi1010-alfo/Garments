import { PageData } from './content-templates';

export function generateMetadata(data: PageData, path: string) {
  const baseUrl = 'https://garment.alfo.online';
  const url = `${baseUrl}${path}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: url,
      siteName: 'Vinayaga Garments',
      locale: 'en_IN',
      type: 'website',
    },
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
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
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

  return [breadcrumb, localBusiness, faq];
}
