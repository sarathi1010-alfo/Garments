import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is Vinayaga Garments' specialty in apparel manufacturing?",
    a: "Vinayaga Garments specializes in premium custom athletic apparel, high-performance team kits, and corporate uniforms. Our core capabilities include dye sublimation printing, precision stitching, and the use of advanced moisture-wicking fabrics engineered for durability and athlete comfort."
  },
  {
    q: "Do you offer custom designs for sports teams?",
    a: "Yes, we provide end-to-end custom design services. Using dye sublimation technology, we can integrate unlimited colors, complex patterns, and sponsor logos directly into the fabric, ensuring vibrant designs that never fade, crack, or peel."
  },
  {
    q: "What is your typical lead time for bulk orders?",
    a: "Standard production lead times range from 4 to 8 weeks, depending on order complexity and volume. This includes the technical design phase, physical sampling for approval, bulk manufacturing, and final quality assurance checks."
  },
  {
    q: "Where is your manufacturing facility located?",
    a: "Our primary manufacturing hub is located in Mallasamudram, Namakkal District, Tamil Nadu, India. Being situated in a major textile corridor allows us to access high-quality raw materials and skilled craftsmanship efficiently."
  },
  {
    q: "What are your minimum order quantities (MOQs)?",
    a: "Our MOQs typically start at 50-100 units for fully custom sublimated team wear and 200-300 units for corporate or casual wear. We offer tiered pricing models to provide value across different production scales."
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
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Common Questions</h2>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-8">Frequently Asked Questions</h3>
          <p className="text-xl text-muted-foreground">
            Find answers to common inquiries about our manufacturing process,
            customization options, and service standards.
          </p>

          <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <h4 className="font-bold text-primary mb-2">Need more specific information?</h4>
            <p className="text-muted-foreground mb-6">Our technical team is ready to assist with your specific manufacturing requirements.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              Contact Support
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-2xl px-6 py-2 data-[state=open]:border-secondary transition-colors">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
