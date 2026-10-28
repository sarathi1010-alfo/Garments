import { CONTACT } from "@/lib/contact";

export function GlobalSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://garment.alfo.online/#organization",
    "name": CONTACT.brand,
    "url": "https://garment.alfo.online",
    "logo": {
      "@type": "ImageObject",
      "url": "https://garment.alfo.online/icon.png",
      "width": "180",
      "height": "180"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.phoneDisplay,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    },
    "sameAs": [
      // Add social links if available
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://garment.alfo.online/#localbusiness",
    "name": CONTACT.brand,
    "url": "https://garment.alfo.online",
    "telephone": CONTACT.telDisplay,
    "email": CONTACT.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mallasamudram",
      "addressLocality": "Namakkal",
      "addressRegion": "Tamil Nadu",
      "postalCode": "637503",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.4833",
      "longitude": "78.0167"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Vinayaga Garments Custom Athletic Apparel Manufacturer",
    url: "https://garment.alfo.online",
    description:
      "Precision-engineered custom sportswear and athletic apparel manufacturing platform.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Order Custom Athletic Apparel from Vinayaga Garments",
    description:
      "A 4-step streamlined manufacturing process for custom teamwear and athletic apparel.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Select Apparel Style",
        text: "Browse performance jerseys, training shorts, hoodies, and compression wear.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Submit Design & Specs",
        text: "Provide your vector artwork, PMS color codes, custom sizing breakdowns, and fabric preferences.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Sample Approval",
        text: "Receive pre-production digital mockups and physical sample verification for fit and color accuracy.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Bulk Production & Delivery",
        text: "High-capacity automated manufacturing with global tracked door-to-door delivery.",
      },
    ],
  };

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://garment.alfo.online",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
    </>
  );
}
