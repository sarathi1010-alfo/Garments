import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is the minimum order quantity (MOQ) for custom sportswear?",
    a: "Our standard MOQ starts at 50 pieces per design, allowing emerging athletic brands and sports clubs to order customized apparel without excessive inventory risk.",
  },
  {
    q: "What printing techniques do you use for athletic uniforms?",
    a: "We specialize in high-definition digital dye-sublimation, screen printing, high-density silicone transfer, and precision embroidery. Sublimation ensures zero peeling or fading.",
  },
  {
    q: "What fabrics are available for performance sportswear?",
    a: "We manufacture with premium moisture-wicking polyester, interlock spandex blends, breathable bird-eye mesh, anti-bacterial dry-fit textiles, and fleece blends.",
  },
  {
    q: "What is the typical turnaround time for custom apparel orders?",
    a: "Sample development takes 5 to 7 business days. Full bulk production completes within 14 to 21 business days depending on order volume and customization complexity.",
  },
  {
    q: "Do you provide private label services and custom neck tags?",
    a: "Yes, we offer full private-label OEM manufacturing including heat-sealed neck tags, woven labels, custom hangtags, and branded polybag packaging.",
  },
];

export function HomeFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our custom apparel manufacturing process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-background rounded-2xl border border-border/50 px-6 py-2 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-primary hover:text-secondary hover:no-underline transition-colors py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
}
