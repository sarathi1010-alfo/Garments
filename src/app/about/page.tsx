import { Metadata } from 'next';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us | Vinayaga Garments — Premium Apparel Manufacturer",
  description: "Learn about Vinayaga Garments' heritage in Tamil Nadu's textile hub, our commitment to precision manufacturing, and our role in the Alfo business ecosystem.",
  alternates: {
    canonical: "https://garment.alfo.online/about",
  }
};

export default function AboutPage() {
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
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif-display leading-tight">
            Our Heritage in Precision Apparel Manufacturing
          </h1>

          <div className="my-8 p-6 bg-secondary/5 rounded-2xl border border-secondary/20 shadow-sm">
            <h2 className="text-lg font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">verified_user</span>
              Our Mission
            </h2>
            <p className="text-xl font-medium leading-relaxed italic text-on-surface">
              Vinayaga Garments is dedicated to empowering sports teams and corporate brands through technical manufacturing excellence, sustainable textile solutions, and an unwavering commitment to the "Made in Tamil Nadu" advantage.
            </p>
          </div>

          <section className="mb-12">
            <h2>The Vinayaga Garments Story</h2>
            <p>
              Based in the heart of Tamil Nadu's industrial corridor in Namakkal, Vinayaga Garments has evolved from a local stitching unit into a production-grade custom apparel manufacturer. Founded and led by <strong>Selvaraj Rayamuthu</strong>, our facility combines decades of textile craftsmanship with modern digital manufacturing technologies.
            </p>
            <p>
              Our location in Mallasamudram places us at the epicenter of India's textile supply chain, allowing us to source the finest yarns and performance fabrics directly from the source. This strategic advantage enables us to offer "Direct-to-Manufacturer" pricing while maintaining the highest quality standards for our global clients.
            </p>
          </section>

          <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div className="p-8 bg-muted rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">diversity_3</span>
                Alfo Ecosystem
              </h3>
              <p className="text-muted-foreground">
                As a key partner in the <strong>Alfo ecosystem</strong> and the <strong>Sarathi business network</strong>, we leverage shared logistics, digital infrastructure, and market intelligence to provide a seamless experience for our clients across the globe.
              </p>
            </div>
            <div className="p-8 bg-muted rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">eco</span>
                Sustainability
              </h3>
              <p className="text-muted-foreground">
                We are committed to a circular textile economy. From utilizing recycled polyester to implementing Zero Liquid Discharge (ZLD) in our processing, we ensure that high performance never comes at the cost of the planet.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2>Why Choose Vinayaga Garments?</h2>
            <ul>
              <li><strong>Factory-Direct Transparency:</strong> No agents, no middlemen. You communicate directly with the team engineering your gear.</li>
              <li><strong>Technical Expertise:</strong> Specialists in <strong>dye sublimation</strong>, high-tensile <strong>Kabaddi kits</strong>, and precision corporate uniforms.</li>
              <li><strong>Quality Assurance:</strong> 100% inspection protocol, needle detection, and ISO-standard tolerance management.</li>
              <li><strong>Scalable Production:</strong> Whether you're a local sports academy or a global retail brand, our MOQs are designed to grow with you.</li>
            </ul>
          </section>

          <section className="mt-16 border-t pt-12">
            <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
            <p>
              Ready to experience the precision of Tamil Nadu manufacturing? Whether you need a technical consultation for your new collection or a competitive quote for your team, our production specialists are ready to assist.
            </p>
            <div className="not-prose mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                Start Your Project
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <SeoFooter />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
