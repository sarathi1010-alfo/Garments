import Link from "next/link";
import { guides } from "@/data/guides-data";

export function ResourceHub() {
  const featuredGuides = guides.filter((g) => g.featured).slice(0, 4);

  if (featuredGuides.length === 0) return null;

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Educational Resource Hub
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep-dives into textile engineering, manufacturing processes, and design standards to help you build better apparel.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all group"
          >
            View All Guides
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col bg-muted/30 rounded-3xl border border-border/50 overflow-hidden hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-widest">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                  {guide.title.split('—')[0].trim()}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all mt-auto">
                  Read Guide
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 rounded-[2rem] border border-primary/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">download_done</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-primary mb-1">Looking for custom specifications?</h4>
              <p className="text-muted-foreground">Download our technical tech-pack templates and measurement charts.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all whitespace-nowrap shadow-lg shadow-primary/20"
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
