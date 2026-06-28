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
    </>
  );
}
