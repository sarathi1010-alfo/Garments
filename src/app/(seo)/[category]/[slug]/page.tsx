import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  districts,
  products,
  fabricTypes,
  businessCategories,
  services,
  qualityCertifications,
  occasions,
  buyers,
  sellers,
  geoLocations
} from '@/data/seo-data';
import {
  generateDistrictContent,
  generateProductContent,
  generateGenericContent,
  PageData
} from '@/lib/content-templates';
import { generateMetadata as getMetadata, generateStructuredData } from '@/lib/seo-utils';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { slugify } from "@/utils/slugify";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

function getPageData(category: string, slug: string): PageData | null {
  if (category === 'districts') {
    const district = districts.find(d => slugify(d) === slug);
    if (district) return generateDistrictContent(district);
  }
  if (category === 'products') {
    const product = products.find(p => slugify(p) === slug);
    if (product) return generateProductContent(product);
  }
  if (category === 'fabrics') {
    const fabric = fabricTypes.find(f => slugify(f) === slug);
    if (fabric) return generateGenericContent('Fabric', fabric);
  }
  if (category === 'business') {
    const business = businessCategories.find(b => slugify(b) === slug);
    if (business) return generateGenericContent('Business', business);
  }
  if (category === 'services') {
    const service = services.find(s => slugify(s) === slug);
    if (service) return generateGenericContent('Service', service);
  }
  if (category === 'quality') {
    const quality = qualityCertifications.find(q => slugify(q) === slug);
    if (quality) return generateGenericContent('Quality Standard', quality);
  }
  if (category === 'occasions') {
    const occasion = occasions.find(o => slugify(o) === slug);
    if (occasion) return generateGenericContent('Seasonal Collection', occasion);
  }
  if (category === 'buyers') {
    const buyer = buyers.find(b => slugify(b) === slug);
    if (buyer) return generateGenericContent('Buyer Category', buyer);
  }
  if (category === 'sellers') {
    const seller = sellers.find(s => slugify(s) === slug);
    if (seller) return generateGenericContent('Seller Category', seller);
  }
  if (category === 'locations') {
    const location = geoLocations.find(l => slugify(l) === slug);
    if (location) return generateGenericContent('Location Hub', location);
  }
  return null;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];

  districts.forEach(d => params.push({ category: 'districts', slug: slugify(d) }));
  products.forEach(p => params.push({ category: 'products', slug: slugify(p) }));
  fabricTypes.forEach(f => params.push({ category: 'fabrics', slug: slugify(f) }));
  businessCategories.forEach(b => params.push({ category: 'business', slug: slugify(b) }));
  services.forEach(s => params.push({ category: 'services', slug: slugify(s) }));
  qualityCertifications.forEach(q => params.push({ category: 'quality', slug: slugify(q) }));
  occasions.forEach(o => params.push({ category: 'occasions', slug: slugify(o) }));
  buyers.forEach(b => params.push({ category: 'buyers', slug: slugify(b) }));
  sellers.forEach(s => params.push({ category: 'sellers', slug: slugify(s) }));
  geoLocations.forEach(l => params.push({ category: 'locations', slug: slugify(l) }));

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const data = getPageData(category, slug);
  if (!data) return {};
  return getMetadata(data, `/${category}/${slug}`);
}

export default async function GenericSeoPage({ params }: PageProps) {
  const { category, slug } = await params;
  const data = getPageData(category, slug);

  if (!data) {
    notFound();
  }

  const structuredData = generateStructuredData(data, `/${category}/${slug}`);

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
