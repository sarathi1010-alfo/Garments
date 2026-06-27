import { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides-data';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Custom Apparel Manufacturing Guides & Resources | Vinayaga Garments",
  description: "Comprehensive guides, how-tos, and industry insights on custom apparel manufacturing, sportswear design, and textile solutions.",
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
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight">
            Manufacturing Guides & Industry Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Expert resources to help you navigate the world of custom apparel manufacturing, from fabric selection to global logistics.
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-2">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides
                .filter(g => g.category === category)
                .map(guide => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="flex flex-col p-6 bg-card hover:bg-muted/50 rounded-xl transition-all border border-border hover:border-secondary shadow-sm hover:shadow-md"
                  >
                    <h3 className="font-bold text-xl mb-3 text-card-foreground group-hover:text-secondary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-4">
                      {guide.description}
                    </p>
                    <div className="text-secondary font-semibold text-sm flex items-center">
                      Read Full Guide <span className="ml-2">&rarr;</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
