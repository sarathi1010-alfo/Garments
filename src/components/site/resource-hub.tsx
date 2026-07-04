import Link from "next/link";
import { guides } from "@/data/guides-data";

export function ResourceHub() {
  // Get the 3 most recent guides
  const recentGuides = guides.slice(-3).reverse();

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-muted/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Educational Resources</h2>
            <h3 className="font-headline-lg text-headline-lg text-primary">Manufacturing Insights & Guides</h3>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group"
          >
            View All Resources
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col bg-background rounded-3xl overflow-hidden border border-border hover:border-secondary transition-all hover:shadow-xl"
            >
              <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                <img
                  src={`/api/placeholder/800/450`}
                  alt={guide.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-background/90 backdrop-blur text-xs font-bold rounded-full text-primary uppercase tracking-wider">
                    {guide.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="font-headline-sm text-headline-sm mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  {guide.title}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {guide.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm">
                  Read Guide
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
