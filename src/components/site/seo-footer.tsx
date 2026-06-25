import Link from "next/link";
import { districts, products } from "@/data/seo-data";

function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export function SeoFooter() {
  // Only show a subset of links in the footer to keep it clean but provide crawl paths
  const topDistricts = districts.slice(0, 10);
  const topProducts = products.slice(0, 10);

  return (
    <section className="bg-muted py-16 px-margin-mobile md:px-margin-desktop border-t">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Manufacturing Hubs</h3>
          <ul className="space-y-2">
            {topDistricts.map((d) => (
              <li key={d}>
                <Link
                  href={`/districts/${slugify(d)}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Garments in {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Product Categories</h3>
          <ul className="space-y-2">
            {topProducts.map((p) => (
              <li key={p}>
                <Link
                  href={`/products/${slugify(p)}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {p} Manufacturers
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/custom-manufacturing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Custom Manufacturing
              </Link>
            </li>
            <li>
              <Link href="/services/private-label" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Private Label Production
              </Link>
            </li>
            <li>
              <Link href="/services/oem-production" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                OEM Garment Production
              </Link>
            </li>
            <li>
              <Link href="/services/printing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Sublimation & Printing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Industry Links</h3>
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
              <Link href="/occasions/sports" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Athletic & Sports Wear
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-muted-foreground/10">
        <p className="text-xs text-muted-foreground text-center">
          Vinayaga Garments is a leading manufacturer and supplier of premium apparel across Tamil Nadu.
          Specializing in athletic wear, corporate uniforms, and custom textile solutions.
        </p>
      </div>
    </section>
  );
}
