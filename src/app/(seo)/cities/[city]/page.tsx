import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cityZones } from '@/data/seo-data';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(cityZones).map(city => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  if (!cityZones[city.toLowerCase()]) return {};

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `Garment Manufacturing Zones in ${cityName} - Vinayaga Garments`,
    description: `Discover specialized textile and garment manufacturing zones within ${cityName}, Tamil Nadu.`,
    alternates: {
      canonical: `https://garment.alfo.online/cities/${city}`,
    }
  };
}

export default async function CityIndexPage({ params }: PageProps) {
  const { city } = await params;
  const zones = cityZones[city.toLowerCase()];

  if (!zones) {
    notFound();
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

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
                <BreadcrumbLink href="/cities">Cities</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cityName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight">Garment Zones in {cityName}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Explore the specialized micro-clusters and industrial textile zones that drive {cityName}&apos;s apparel economy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {zones.map((zone) => (
            <Link
              key={zone}
              href={`/cities/${city}/${zone}`}
              className="p-6 bg-muted hover:bg-muted/80 rounded-xl transition-all border border-transparent hover:border-secondary group shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors mb-2">
                {zone.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </h3>
              <p className="text-sm text-muted-foreground">View manufacturing details for {zone.replace(/-/g, ' ')} &rarr;</p>
            </Link>
          ))}
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
