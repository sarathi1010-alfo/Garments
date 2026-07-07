import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const HOME_FAQS = [
  {
    q: "What types of custom apparel do you manufacture?",
    a: "We specialize in high-performance athletic wear, including custom Kabaddi kits, cricket jerseys, football uniforms, and basketball gear. We also manufacture premium corporate polos, school uniforms, and event t-shirts using advanced fabrics and dye sublimation technology.",
  },
  {
    q: "Do you offer dye sublimation printing?",
    a: "Yes, dye sublimation is our core expertise. This process embeds ink directly into the fabric fibers, ensuring that your team's designs and logos never peel, crack, or fade, while maintaining the fabric's 100% breathability.",
  },
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "Our typical MOQ for fully custom sublimated kits is 50 units. For corporate or cotton-based apparel, it ranges from 100 to 300 units. We offer scalable solutions for everything from local clubs to large organizations.",
  },
  {
    q: "How long does manufacturing and delivery take?",
    a: "The standard lead time is 4 to 8 weeks, depending on the complexity of the design and the order volume. This includes the technical design phase, sampling, bulk production, and shipping from our Tamil Nadu facility.",
  },
  {
    q: "Can I see a sample before placing a bulk order?",
    a: "Absolutely. We always recommend a Pre-Production Sample (PPS) so you can verify the fit, fabric quality, and branding before we move to bulk manufacturing.",
  },
];

export function HomeFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                Common Inquiries
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif-display leading-tight mb-8">
                Everything You Need <br />to Know About <br />Vinayaga Garments
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                We believe in complete transparency throughout the manufacturing journey. If you have more specific technical questions, our experts are ready to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all"
              >
                Ask a Question
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {HOME_FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border/50 px-2">
                  <AccordionTrigger className="text-lg font-bold text-left hover:text-primary transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
