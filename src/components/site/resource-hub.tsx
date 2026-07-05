"use client";

import Link from "next/link";
import { guides } from "@/data/guides-data";
import { Reveal } from "./reveal";

export function ResourceHub() {
  // Select priority guides to feature on homepage
  const featuredGuides = guides.filter(g => g.featured).slice(0, 3);

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <Reveal className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Expertise & <span className="font-serif-display italic text-secondary">Resources</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Deep-dive into the technical world of custom apparel manufacturing.
              Our guides are engineered to help you make informed decisions for your team or brand.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/guides"
              className="group flex items-center gap-2 text-label-md font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
            >
              Explore All Guides
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGuides.map((guide, idx) => (
            <Reveal key={guide.slug} delay={idx * 0.1} className="h-full">
              <Link
                href={`/guides/${guide.slug}`}
                className="group flex flex-col h-full bg-white border border-border-silver/50 rounded-lg overflow-hidden hover:shadow-xl hover:border-secondary/30 transition-all duration-500"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-secondary font-label-md text-xs uppercase tracking-[0.2em] mb-4">
                    {guide.category}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                    {guide.title.split(" — ")[0]}
                  </h3>
                  <p className="text-body-md text-on-surface-variant line-clamp-3 mb-8 flex-1">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Read Guide
                    <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
