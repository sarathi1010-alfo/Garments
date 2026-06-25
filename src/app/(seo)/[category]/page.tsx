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
import { slugify } from "@/utils/slugify";
import { TopNav } from "@/components/site/top-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SeoFooter } from "@/components/site/seo-footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const CATEGORY_MAP: Record<string, { title: string; items: string[]; description: string }> = {
  districts: {
    title: "Tamil Nadu Manufacturing Districts",
    description: "Explore garment and textile manufacturing hubs across all 38 districts of Tamil Nadu.",
    items: districts,
  },
  products: {
    title: "Garment Product Categories",
    description: "Browse our comprehensive range of custom-manufactured apparel and textile products.",
    items: products,
  },
  fabrics: {
    title: "Fabric & Material Guide",
    description: "In-depth information on fabrics used in our premium garment production.",
    items: fabricTypes,
  },
  business: {
    title: "Garment Business Sectors",
    description: "Discover providers across various business categories in the TN textile industry.",
    items: businessCategories,
  },
  services: {
    title: "Custom Manufacturing Services",
    description: "Explore our specialized services from OEM production to export logistics.",
    items: services,
  },
  quality: {
    title: "Quality Standards & Certifications",
    description: "Learn about the rigorous quality controls and certifications in our manufacturing process.",
    items: qualityCertifications,
  },
  occasions: {
    title: "Seasonal & Occasion Collections",
    description: "Premium garment collections designed for every occasion and season.",
    items: occasions,
  },
  buyers: {
    title: "Industry Buyer Categories",
    description: "Information tailored for different types of apparel buyers and sourcing agents.",
    items: buyers,
  },
  sellers: {
    title: "Textile Seller Categories",
    description: "Connect with various types of suppliers in the garment manufacturing ecosystem.",
    items: sellers,
  },
  locations: {
    title: "Strategic Industrial Hubs",
    description: "Explore major industrial corridors and textile clusters in Tamil Nadu.",
    items: geoLocations,
  },
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map(category => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const data = CATEGORY_MAP[category];
  if (!data) return {};

  return {
    title: `${data.title} - Vinayaga Garments`,
    description: data.description,
    alternates: {
      canonical: `https://garment.alfo.online/${category}`,
    }
  };
}

export default async function CategoryIndexPage({ params }: PageProps) {
  const { category } = await params;
  const data = CATEGORY_MAP[category];

  if (!data) {
    notFound();
  }

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
                <BreadcrumbPage>{data.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary font-serif-display tracking-tight">{data.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.items.map((item) => (
            <Link
              key={item}
              href={`/${category}/${slugify(item)}`}
              className="p-6 bg-muted hover:bg-muted/80 rounded-xl transition-all border border-transparent hover:border-secondary group shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">{item}</h3>
              <p className="text-sm text-muted-foreground mt-2">Explore {item} in Tamil Nadu &rarr;</p>
            </Link>
          ))}
        </div>
      </main>
      <SeoFooter />
      <SiteFooter />
    </div>
  );
}
