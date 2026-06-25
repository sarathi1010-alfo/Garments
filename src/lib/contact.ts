/**
 * Vinayaga Garments — contact details.
 * Single source of truth used by the top nav, hero, CTA, footer, and
 * floating WhatsApp button.
 */
export const CONTACT = {
  owner: "Selvaraj Rayamuthu",
  brand: "Vinayaga Garments",

  // Mobile (primary)
  phoneDisplay: "+91 89738 54526",
  phoneHref: "tel:+918973854526",

  // Landline
  telDisplay: "04282 291 256",
  telHref: "tel:+914282291256",

  // Email
  email: "rajuselvan786@gmail.com",
  emailHref: "mailto:rajuselvan786@gmail.com",

  // WhatsApp (international format, digits only for wa.me)
  whatsappNumber: "917200551500",
  whatsappDisplay: "+91 72005 51500",
  whatsappPrefill:
    "Hello Vinayaga Garments, I'd like to discuss custom apparel requirements.",
} as const;

/** Full https://wa.me link with a prefilled message. */
export function whatsappLink(message: string = CONTACT.whatsappPrefill) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
