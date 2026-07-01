"use client";

import { Reveal } from "./reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HOME_FAQS = [
  {
    q: "What is the minimum order quantity (MOQ) for custom apparel?",
    a: "Our MOQs vary by product category. For fully custom sublimated sports kits, we typically start at 50 units. For cut-and-sew cotton items or corporate wear, the minimum is usually between 100-200 units. We offer flexibility for long-term partners and club accounts."
  },
  {
    q: "How long does the manufacturing process take?",
    a: "A standard custom apparel project takes between 6 to 10 weeks from initial deposit to final delivery. This includes design finalization, sampling, bulk production, and shipping. We recommend planning your order at least 3 months in advance of your required date."
  },
  {
    q: "Can you help with the design of our team jerseys?",
    a: "Yes! We have an in-house design team that specializes in technical sportswear. We can turn your basic concepts, sketches, or existing logos into professional, production-ready CAD drawings and tech packs."
  },
  {
    q: "What fabric options do you provide for athletic wear?",
    a: "We offer a wide range of performance fabrics, including moisture-wicking micro-polyesters, high-tensile polyester-spandex blends for contact sports like Kabaddi, and breathable mesh for high-intensity sports like basketball and football."
  },
  {
    q: "Do you ship your manufactured garments internationally?",
    a: "Absolutely. We ship our premium custom apparel from our manufacturing hub in Tamil Nadu, India, to clients worldwide, including sports clubs and corporate entities in Europe, North America, and across the Asia-Pacific region."
  }
];

export function HomeFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-section-gap w-full bg-surface-variant">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <Reveal className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
              Common Questions <br />
              <span className="font-serif-display italic text-secondary">Simplified</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Everything you need to know about starting your custom manufacturing journey with Vinayaga Garments.
            </p>
            <div className="pt-8">
              <a href="/guides" className="text-secondary font-bold flex items-center gap-2 group">
                Visit our full Help Center
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {HOME_FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-surface rounded-2xl px-6 md:px-8 py-2 overflow-hidden shadow-sm data-[state=open]:border-secondary/30 transition-all">
                  <AccordionTrigger className="text-left font-bold text-lg md:text-xl text-primary hover:no-underline group">
                    <span className="group-data-[state=open]:text-secondary transition-colors italic font-serif-display">0{idx + 1}.</span> {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant text-base md:text-lg leading-relaxed pt-2 pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
