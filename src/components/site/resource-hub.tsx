"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import { guides } from "@/data/guides-data";

export function ResourceHub() {
  // Get the latest 3 guides for the homepage
  const latestGuides = guides.slice(-3).reverse();

  return (
    <section className="py-section-gap w-full bg-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal className="max-w-3xl mb-12 md:mb-16 space-y-4 md:space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Expert Manufacturing Resources
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Deep dives into the science and business of{" "}
            <span className="font-serif-display italic text-secondary">
              professional apparel
            </span>{" "}
            production.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestGuides.map((guide, i) => (
            <Reveal key={guide.slug} delay={i * 0.1} className="group h-full">
              <Link href={`/guides/${guide.slug}`} className="flex flex-col h-full bg-muted/30 p-8 rounded-3xl border border-border hover:border-secondary/50 transition-all hover:shadow-lg">
                <div className="mb-6 text-secondary flex justify-between items-start">
                  <span className="material-symbols-outlined text-[40px] font-light">
                    menu_book
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {guide.title.split('—')[0]}
                </h3>
                <p className="text-on-surface-variant line-clamp-3 mb-8 flex-1">
                  {guide.description}
                </p>
                <div className="flex items-center gap-2 font-bold text-sm text-secondary group-hover:gap-4 transition-all">
                  Read Full Guide
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-16 flex justify-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105"
          >
            View All Resources
            <span className="material-symbols-outlined">library_books</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
