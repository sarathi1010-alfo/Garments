import { CONTACT } from "@/lib/contact";

export function OrganizationSchema() {
  const baseUrl = 'https://garment.alfo.online';

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vinayaga Garments",
    "alternateName": ["Alfo", "Sarathi"],
    "description": "Leading manufacturer of custom athletic apparel and corporate uniforms in Tamil Nadu, part of the Alfo ecosystem.",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/logo-mark.png`
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

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vinayaga Garments",
    "description": "Premium Custom Apparel Manufacturer in Tamil Nadu",
    "url": baseUrl,
    "image": `${baseUrl}/images/logo-mark.png`,
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, localBusiness]) }}
    />
  );
}
