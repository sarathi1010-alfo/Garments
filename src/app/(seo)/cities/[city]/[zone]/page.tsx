import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cityZones } from '@/data/seo-data';
import { generateCityZoneContent } from '@/lib/content-templates';
import { generateMetadata as getMetadata, generateStructuredData } from '@/lib/seo-utils';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";

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

  const data = generateCityZoneContent(city, zone);
  const structuredData = generateStructuredData(data, `/cities/${city}/${zone}`);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNav />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-primary">{data.h1}</h1>
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
        </article>
        <div className="mt-20">
          <SeoFooter />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
