import Link from "next/link";
import { guides } from "@/data/guides-data";
import { Reveal } from "./reveal";

export function ResourceHub() {
  const featuredGuides = guides.filter((g) => g.featured).slice(0, 4);

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                Knowledge & Expertise
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif-display leading-tight">
                Resource Hub: Mastering <br />Custom Apparel
              </h3>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Guides
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGuides.map((guide, idx) => (
            <Reveal key={guide.slug} delay={idx * 0.1}>
              <Link
                href={`/guides/${guide.slug}`}
                className="group flex flex-col h-full bg-muted/30 rounded-2xl p-6 border border-transparent hover:border-secondary transition-all hover:shadow-xl"
              >
                <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">
                  {guide.category}
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {guide.title.split(" — ")[0]}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {guide.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Guide
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
