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

          {data.answerBlock && (
            <div className="bg-secondary/10 p-6 rounded-xl border-l-4 border-secondary mb-10">
              <h2 className="text-sm uppercase tracking-wider text-secondary font-bold mb-2">Quick Summary</h2>
              <p className="text-xl font-medium text-primary leading-relaxed italic">
                {data.answerBlock}
              </p>
            </div>
          )}

          {data.highlights && (
            <div className="bg-muted p-8 rounded-xl mb-10 border border-border">
              <h2 className="text-2xl font-bold mb-4 text-primary">Key Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0">
                {data.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <span className="text-secondary font-bold text-xl leading-none">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="seo-content space-y-6"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {data.semanticSummary && (
            <div className="mt-12 p-8 bg-primary text-on-primary rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Semantic Authority Insights</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                {data.semanticSummary}
              </p>
            </div>
          )}

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
