import { Metadata } from 'next';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Vinayaga Garments",
  description: "Find answers to common questions about custom apparel manufacturing, MOQs, lead times, fabric selection, and ordering from Vinayaga Garments.",
  alternates: {
    canonical: "https://garment.alfo.online/faq",
  }
};

const FAQS = [
  {
    category: "Ordering & Process",
    items: [
      {
        q: "How do I get a quote for a custom project?",
        a: "The best way to get an accurate quote is to provide a detailed 'Tech Pack' or design sketch along with your quantity requirements. You can contact us via WhatsApp or through our contact page to start the process."
      },
      {
        q: "What is the typical lead time for an order?",
        a: "Standard production takes between 6 to 10 weeks. This includes design finalization, sampling (1-2 weeks), bulk production (3-5 weeks), and shipping. We recommend starting your project at least 4 months before your target launch date."
      },
      {
        q: "What is your Minimum Order Quantity (MOQ)?",
        a: "Our MOQs vary by product category but typically start at 50-100 units for fully custom sublimated sports kits and 200-300 units for cut-and-sew cotton or corporate wear."
      }
    ]
  },
  {
    category: "Design & Customization",
    items: [
      {
        q: "What file formats do I need for my logos?",
        a: "We require high-resolution vector files, such as .AI, .EPS, or .SVG. These formats ensure your branding remains sharp and professional when scaled for production."
      },
      {
        q: "What is dye sublimation printing?",
        a: "Dye sublimation is a process where ink is fused directly into the fabric fibers using heat. Unlike screen printing, the design never peels, cracks, or fades, and the fabric remains 100% breathable."
      },
      {
        q: "Can you help with the design if I only have a basic idea?",
        a: "Yes! Our in-house technical design team can help convert your concepts, sketches, or reference photos into production-ready CAD drawings and full Tech Packs."
      }
    ]
  },
  {
    category: "Materials & Quality",
    items: [
      {
        q: "Where do you source your fabrics?",
        a: "We source our performance textiles and yarns directly from leading mills in Tamil Nadu's textile hub, ensuring we have access to the latest moisture-wicking and high-tensile materials."
      },
      {
        q: "What quality control measures do you have in place?",
        a: "We implement a multi-stage QA protocol including fabric lot testing, inline inspection during stitching, a 100% final inspection, and mandatory needle detection for all finished goods."
      },
      {
        q: "Do you offer sustainable fabric options?",
        a: "Yes, we offer a range of eco-friendly materials including GRS-certified recycled polyester (RPET) and organic cotton. Our facility also follows sustainable practices like water recycling."
      }
    ]
  }
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.flatMap(cat => cat.items).map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 container mx-auto px-margin-mobile md:px-margin-desktop py-12 max-w-4xl">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FAQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif-display leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Everything you need to know about the custom apparel manufacturing process, our technical capabilities, and how to work with Vinayaga Garments.
          </p>
        </div>

        <div className="space-y-12">
          {FAQS.map((category, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary border-b pb-2">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, iIdx) => (
                  <AccordionItem key={iIdx} value={`item-${idx}-${iIdx}`}>
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-2xl border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our technical production team is ready to provide the answers you need for your specific project. Contact us today for a personal consultation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
            Get in Touch
            <span className="material-symbols-outlined">chat</span>
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <SeoFooter />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
