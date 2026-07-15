import { Metadata } from 'next';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Manufacturing Excellence | Vinayaga Garments",
  description: "Explore Vinayaga Garments' end-to-end manufacturing capabilities, from digital design and dye sublimation to precision stitching and quality assurance.",
  alternates: {
    canonical: "https://garment.alfo.online/manufacturing",
  }
};

const CAPABILITIES = [
  {
    title: "Digital Design & Prototyping",
    description: "Our in-house design studio utilizes CAD/CAM software to create precision patterns, digital mockups, and comprehensive Tech Packs that serve as the blueprint for every garment.",
    icon: "design_services"
  },
  {
    title: "Dye Sublimation Printing",
    description: "Specializing in industrial-grade sublimation, we embed ink directly into the fabric for vibrant, permanent branding that never peels, cracks, or affects breathability.",
    icon: "print"
  },
  {
    title: "Precision Cutting & Assembly",
    description: "Equipped with automated spreading and precision cutting machinery, our sewing lines utilize specialized machines for 4-needle flatlock and reinforced stitching.",
    icon: "precision_manufacturing"
  },
  {
    title: "Technical Fabric Sourcing",
    description: "Strategically located in Tamil Nadu, we source performance-grade yarns and fabrics directly from top-tier mills, ensuring high-tensile and moisture-wicking excellence.",
    icon: "inventory_2"
  },
  {
    title: "Quality Assurance Hub",
    description: "Every item undergoes a multi-point inspection protocol, including inline checks, 100% final inspection, and mandatory high-sensitivity needle detection.",
    icon: "verified"
  },
  {
    title: "Global Logistics Support",
    description: "Through the Alfo ecosystem, we manage end-to-end logistics, from export documentation and customs clearance to final delivery to your warehouse or team.",
    icon: "local_shipping"
  }
];

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav />
      <main className="flex-1 container mx-auto px-margin-mobile md:px-margin-desktop py-12 max-w-6xl">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Manufacturing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif-display leading-tight">
            Production-Grade <br />Manufacturing Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Vinayaga Garments operates a vertically integrated manufacturing facility in Namakkal, Tamil Nadu, engineered to deliver professional-grade custom apparel for the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="p-8 bg-muted/50 rounded-3xl border border-border hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{cap.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        <section className="bg-primary text-primary-foreground p-12 rounded-[2rem] mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The "Made in Tamil Nadu" Advantage</h2>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Our facility is situated at the heart of one of the world's most powerful textile clusters. This location grants us direct access to the latest fabric technologies, a highly skilled workforce, and a robust industrial infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider">In-House Production</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">ISO</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider">Standard Compliant</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-8 rounded-2xl border border-primary-foreground/20">
              <h3 className="text-xl font-bold mb-4">Our Manufacturing Standards</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-secondary">check_circle</span> GRS Certified Recycled Fibers</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-secondary">check_circle</span> OEKO-TEX Standard 100 Compliant</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-secondary">check_circle</span> Zero Liquid Discharge Processing</li>
                <li className="flex gap-2 items-center"><span className="material-symbols-outlined text-secondary">check_circle</span> Ethical Labor Practices</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Production-Grade Partner?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Whether you need small-batch athletic gear or high-volume corporate uniforms, our infrastructure is built to scale with your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-colors">
              Request Technical Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link href="/guides/custom-apparel-manufacturing-process-step-by-step" className="inline-flex items-center gap-2 bg-muted text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-muted/80 transition-colors">
              Explore Our Process
            </Link>
          </div>
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
