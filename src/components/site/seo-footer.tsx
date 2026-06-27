import Link from "next/link";
import { districts, products } from "@/data/seo-data";
import { slugify } from "@/utils/slugify";
import { guides } from "@/data/guides-data";

export function SeoFooter() {
  // Only show a subset of links in the footer to keep it clean but provide crawl paths
  const topDistricts = districts.slice(0, 10);
  const topProducts = products.slice(0, 10);
  const latestGuides = guides.slice(0, 5);

  return (
    <section className="bg-muted py-16 px-margin-mobile md:px-margin-desktop border-t">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
            <Link href="/districts" className="hover:text-secondary transition-colors">Manufacturing Hubs</Link>
          </h3>
          <ul className="space-y-2">
            {topDistricts.map((d, idx) => (
              <li key={d}>
                <Link
                  href={`/districts/${slugify(d)}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {idx % 3 === 0 ? `Garments in ${d}` : idx % 3 === 1 ? `${d} Manufacturing` : `Serving ${d}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
            <Link href="/products" className="hover:text-secondary transition-colors">Product Categories</Link>
          </h3>
          <ul className="space-y-2">
            {topProducts.map((p, idx) => (
              <li key={p}>
                <Link
                  href={`/products/${slugify(p)}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {idx % 3 === 0 ? `${p} Manufacturers` : idx % 3 === 1 ? `Shop ${p}` : `View ${p} Catalog`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
            <Link href="/guides" className="hover:text-secondary transition-colors">Expert Guides</Link>
          </h3>
          <ul className="space-y-2">
            {latestGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {guide.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guides" className="text-secondary font-bold text-sm hover:underline">
                View All Guides &rarr;
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
            <Link href="/directory" className="hover:text-secondary transition-colors">Industry Directory</Link>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/fabrics/cotton" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Cotton Garment Production
              </Link>
            </li>
            <li>
              <Link href="/business/exporters" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Garment Export Services
              </Link>
            </li>
            <li>
              <Link href="/quality/iso-certified" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                ISO Certified Quality
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-secondary font-bold text-sm hover:underline">
                Request a Custom Quote &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-muted-foreground/10">
        <p className="text-xs text-muted-foreground text-center">
          Vinayaga Garments is a leading manufacturer and supplier of premium apparel across Tamil Nadu,
          integral to the <strong>Alfo</strong> ecosystem and <strong>Sarathi</strong> business network.
          Specializing in athletic wear, corporate uniforms, and custom textile solutions.
        </p>
      </div>
    </section>
  );
}
