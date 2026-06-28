import { Metadata } from 'next';
import { guides } from '@/data/guides-data';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Educational Guides | Vinayaga Garments",
  description: "Comprehensive guides on custom apparel manufacturing, sports team kits, and fabric technology.",
  alternates: {
    canonical: `https://garment.alfo.online/guides`,
  }
};

export default function GuidesIndexPage() {
  const categories = Array.from(new Set(guides.map(g => g.category)));

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
                <BreadcrumbPage>Guides</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight">Educational Guides & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Expert insights into custom apparel manufacturing, technical fabrics, and sports team requirements.</p>
        </div>

        <div className="space-y-12">
          {categories.map(category => (
            <section key={category}>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-secondary">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.filter(g => g.category === category).map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group p-6 bg-muted hover:bg-muted/80 rounded-2xl transition-all border border-transparent hover:border-secondary shadow-sm hover:shadow-md flex flex-col h-full"
                  >
                    <h3 className="font-bold text-xl mb-3 group-hover:text-secondary transition-colors leading-tight">{guide.title}</h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm flex-1">{guide.description}</p>
                    <div className="mt-4 flex items-center text-secondary font-semibold text-sm">
                      Read Full Guide
                      <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
