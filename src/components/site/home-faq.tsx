"use client";

import { Reveal } from "./reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT } from "@/lib/contact";

const FAQS = [
  {
    q: "What specialized services does Vinayaga Garments offer?",
    a: "We specialize in premium custom athletic apparel manufacturing, including high-performance team kits for sports like Kabaddi, Cricket, and Football. Our core capabilities include advanced dye sublimation printing, precision engineering, and durable textile solutions tailored for both sports teams and corporate organizations."
  },
  {
    q: "What are your Minimum Order Quantities (MOQs)?",
    a: "Our MOQs vary by product category. For fully custom sublimated sports kits, we typically start at 50 units. For corporate wear and cut-and-sew items, MOQs range from 100 to 300 units. We offer flexibility for long-term partners and large-scale organizational needs."
  },
  {
    q: "Do you provide global shipping from Tamil Nadu?",
    a: "Yes, we coordinate global logistics from our manufacturing hub in Tamil Nadu, India. We manage export documentation and shipping for clients in North America, Europe, and the Asia-Pacific region, offering both air and sea freight options depending on your timeline and budget."
  },
  {
    q: "What is the typical lead time for a custom apparel project?",
    a: "A standard production cycle takes between 6 to 10 weeks. This includes the technical design phase, prototyping (sampling), bulk manufacturing, and final delivery. We recommend starting your project at least 3 months before your required date to ensure perfect execution."
  },
  {
    q: "How can I get a quote for my custom apparel project?",
    a: "The fastest way to get a technical quote is to contact us via WhatsApp or email with your design requirements, fabric preferences, and expected quantities. Our technical team, led by Selvaraj Rayamuthu, will provide a detailed breakdown within 24-48 hours."
  }
];

export function HomeFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Frequently Asked <span className="font-serif-display italic text-secondary">Questions</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Everything you need to know about partnering with {CONTACT.brand} for your custom manufacturing needs.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border-silver/50 rounded-xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-headline-sm text-headline-sm text-primary py-6 hover:no-underline hover:text-secondary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body-md text-on-surface-variant leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
