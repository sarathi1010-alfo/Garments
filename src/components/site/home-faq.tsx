import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What types of custom apparel do you manufacture?",
    a: "We specialize in high-performance athletic apparel including custom Kabaddi kits, cricket jerseys, football uniforms, and basketball gear. We also produce premium corporate polos, educational institution sports kits, and custom marathon t-shirts.",
  },
  {
    q: "What is your typical Minimum Order Quantity (MOQ)?",
    a: "Our standard MOQs typically start at 50-100 units for fully custom sublimated sports kits and 200-300 units for corporate wear. We offer flexibility for long-term partners and growing brands.",
  },
  {
    q: "How long does the manufacturing process take?",
    a: "A standard production cycle takes 6 to 10 weeks. This includes 1-2 weeks for technical design, 1-2 weeks for sampling/approval, 3-5 weeks for bulk production, and 1-2 weeks for shipping and logistics.",
  },
  {
    q: "What is Dye Sublimation printing?",
    a: "Dye sublimation is a digital printing technology where ink is fused directly into the fabric fibers using heat and pressure. It ensures vibrant, permanent designs that never peel, crack, or fade while maintaining 100% fabric breathability.",
  },
  {
    q: "Where is Vinayaga Garments located?",
    a: "Our primary manufacturing facility is located in Mallasamudram, Namakkal District, Tamil Nadu, India. We operate within the vertically integrated textile ecosystem of South India, including the hubs of Tirupur and Coimbatore.",
  },
  {
    q: "Do you provide international shipping?",
    a: "Yes, we coordinate global logistics from our hub in Tamil Nadu. We manage export documentation and offer both air freight (5-7 days) and cost-effective sea freight (4-6 weeks) options for international clients.",
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
