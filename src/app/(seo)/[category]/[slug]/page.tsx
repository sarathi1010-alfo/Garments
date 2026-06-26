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
import { generateMetadata as getMetadata, generateStructuredData, getInternalLinks } from '@/lib/seo-utils';
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { slugify } from "@/utils/slugify";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

function getCategoryTitle(category: string): string {
  const map: Record<string, string> = {
    districts: "Districts",
    products: "Products",
    fabrics: "Fabrics",
    business: "Business",
    services: "Services",
    quality: "Quality",
    occasions: "Occasions",
    buyers: "Buyers",
    sellers: "Sellers",
    locations: "Locations"
  };
  return map[category] || category.charAt(0).toUpperCase() + category.slice(1);
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

  const path = `/${category}/${slug}`;
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
                <BreadcrumbLink href={`/${category}`}>{getCategoryTitle(category)}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{data.h1.split(':')[0].split('-')[0].trim()}</BreadcrumbPage>
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
