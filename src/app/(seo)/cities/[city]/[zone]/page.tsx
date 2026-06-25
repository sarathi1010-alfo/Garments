import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cityZones } from '@/data/seo-data';
import { generateCityZoneContent } from '@/lib/content-templates';
import { generateMetadata as getMetadata, generateStructuredData, getInternalLinks } from '@/lib/seo-utils';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    city: string;
    zone: string;
  }>;
}

export async function generateStaticParams() {
  const params: { city: string; zone: string }[] = [];

  Object.entries(cityZones).forEach(([city, zones]) => {
    zones.forEach(zone => {
      params.push({ city, zone });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, zone } = await params;
  const zones = cityZones[city.toLowerCase()];
  if (!zones || !zones.includes(zone.toLowerCase())) return {};

  const data = generateCityZoneContent(city, zone);
  return getMetadata(data, `/cities/${city}/${zone}`);
}

export default async function CityZoneSeoPage({ params }: PageProps) {
  const { city, zone } = await params;
  const zones = cityZones[city.toLowerCase()];

  if (!zones || !zones.includes(zone.toLowerCase())) {
    notFound();
  }

  const path = `/cities/${city}/${zone}`;
  const data = generateCityZoneContent(city, zone);
  const structuredData = generateStructuredData(data, path);
  const internalLinks = getInternalLinks(path);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
                <BreadcrumbLink href="/cities">Cities</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/cities/${city.toLowerCase()}`}>{city.charAt(0).toUpperCase() + city.slice(1)}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{zone.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-primary font-serif-display tracking-tight">{data.h1}</h1>
          <div
            className="seo-content space-y-6"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <section className="mt-16 bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Related Industry Hubs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {internalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-4 bg-muted hover:bg-muted/80 rounded-lg transition-colors border border-transparent hover:border-secondary flex items-center"
                >
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
