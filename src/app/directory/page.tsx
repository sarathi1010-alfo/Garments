import { Metadata } from 'next';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Site Directory - Vinayaga Garments",
  description: "Complete directory of our garment manufacturing hubs, product categories, services, and industrial zones across Tamil Nadu.",
  alternates: {
    canonical: "https://garment.alfo.online/directory",
  }
};

const DIRECTORY_CATEGORIES = [
  { title: "Manufacturing Districts", href: "/districts", icon: "🏢" },
  { title: "Industrial Cities", href: "/cities", icon: "🏙️" },
  { title: "Garment Products", href: "/products", icon: "👕" },
  { title: "Fabric & Materials", href: "/fabrics", icon: "🧶" },
  { title: "Manufacturing Services", href: "/services", icon: "⚙️" },
  { title: "Quality Standards", href: "/quality", icon: "✅" },
  { title: "Occasion Collections", href: "/occasions", icon: "📅" },
  { title: "Industry Buyers", href: "/buyers", icon: "💼" },
  { title: "Textile Sellers", href: "/sellers", icon: "🏭" },
  { title: "Strategic Locations", href: "/locations", icon: "📍" },
  { title: "Garment Business", href: "/business", icon: "📈" },
];

export default function DirectoryPage() {
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
                <BreadcrumbPage>Site Directory</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight">Site Directory</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">A comprehensive map of the Vinayaga Garments ecosystem, including all regional hubs, product categories, and industrial services.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIRECTORY_CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex items-start gap-4 p-8 bg-muted hover:bg-muted/80 rounded-xl transition-all border border-transparent hover:border-secondary group shadow-sm hover:shadow-md"
            >
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h3 className="font-semibold text-xl group-hover:text-secondary transition-colors mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">Browse all {cat.title.toLowerCase()} &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
