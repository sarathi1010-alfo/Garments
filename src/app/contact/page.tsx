import { Metadata } from 'next';
import { CONTACT, whatsappLink } from '@/lib/contact';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | Vinayaga Garments",
  description: "Get in touch with Vinayaga Garments for custom apparel manufacturing inquiries, quotes, and textile solutions in Tamil Nadu.",
  alternates: {
    canonical: `https://garment.alfo.online/contact`,
  }
};

export default function ContactPage() {
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
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-primary font-serif-display leading-tight">
              Let's Build Your <br />Custom Gear Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a professional team or a growing brand, we're here to help you navigate the custom apparel manufacturing process.
            </p>

            <div className="space-y-6">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/10 rounded-xl border border-secondary/20 hover:bg-secondary/20 transition-all group"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary uppercase tracking-wider">WhatsApp Us</div>
                  <div className="text-lg font-bold">{CONTACT.whatsappDisplay}</div>
                </div>
                <span className="material-symbols-outlined ml-auto group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>

              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl border border-primary/20 hover:bg-primary/20 transition-all group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider">Call Directly</div>
                  <div className="text-lg font-bold">{CONTACT.phoneDisplay}</div>
                </div>
                <span className="material-symbols-outlined ml-auto group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>

              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border hover:bg-muted/80 transition-all group"
              >
                <div className="w-12 h-12 bg-muted-foreground/20 rounded-full flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email Us</div>
                  <div className="text-lg font-bold">{CONTACT.email}</div>
                </div>
                <span className="material-symbols-outlined ml-auto group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold mb-6">Our Manufacturing Hub</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <h3 className="font-bold mb-1">Factory Location</h3>
                  <p className="text-muted-foreground">
                    Vinayaga Garments<br />
                    Mallasamudram, Namakkal District<br />
                    Tamil Nadu, India — 637503
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <h3 className="font-bold mb-1">Operational Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Saturday<br />
                    09:00 AM – 08:00 PM IST
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-bold mb-2">Direct Inquiry</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For bulk orders, custom design specifications, or pricing requests, please contact Selvaraj Rayamuthu directly.
                </p>
                <div className="text-sm font-bold text-primary">
                  Owner: {CONTACT.owner}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
