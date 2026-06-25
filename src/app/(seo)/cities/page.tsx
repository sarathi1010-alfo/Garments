import { Metadata } from 'next';
import { cityZones } from '@/data/seo-data';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Garment Manufacturing Cities in Tamil Nadu - Vinayaga Garments",
  description: "Browse major cities and industrial hubs specializing in garment production and textile trade across Tamil Nadu.",
  alternates: {
    canonical: "https://garment.alfo.online/cities",
  }
};

export default function CitiesIndexPage() {
  const cities = Object.keys(cityZones).map(city => city.charAt(0).toUpperCase() + city.slice(1));

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
                <BreadcrumbPage>Cities</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight">Garment Manufacturing Cities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Explore specialized textile zones and garment manufacturing clusters in Tamil Nadu&apos;s leading industrial cities.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/cities/${city.toLowerCase()}`}
              className="p-8 bg-muted hover:bg-muted/80 rounded-xl transition-all border border-transparent hover:border-secondary group shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-2xl group-hover:text-secondary transition-colors mb-2">{city}</h3>
              <p className="text-muted-foreground">View zones and textile units in {city} &rarr;</p>
            </Link>
          ))}
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
