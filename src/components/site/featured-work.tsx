"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function FeaturedWork() {
  return (
    <section id="featured" className="py-section-gap w-full bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal className="flex justify-between items-end mb-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Featured Work
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A selection of our recent premium custom manufacturing projects.
            </p>
          </div>
          <a
            className="hidden md:inline-flex font-label-md text-label-md text-secondary items-center gap-3 border-b border-secondary pb-1 uppercase tracking-[0.1em] hover:text-primary hover:border-primary transition-all duration-300"
            href="#"
          >
            View Gallery <ArrowRight className="size-[18px]" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Large Feature — Left */}
          <Reveal className="md:col-span-7 group relative cursor-pointer" delay={0.05}>
            <div className="overflow-hidden aspect-[4/5] bg-surface relative">
              <Image
                src="/images/featured-team-kit.png"
                alt="A dynamic, wide-angle shot of a complete professional soccer team kit laid out immaculately on a pristine white surface. The kit includes a jersey, shorts, and socks, featuring a cohesive design in rich navy with striking gold accents."
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 space-y-2">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.1em]">
                Custom Team Kits
              </span>
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">
                Elite Soccer Uniforms
              </h3>
            </div>
          </Reveal>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col gap-16 md:mt-32">
            <Reveal className="group cursor-pointer" delay={0.15}>
              <div className="overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/featured-polo.png"
                  alt="A close-up, highly detailed photograph focusing on the collar and shoulder construction of a premium corporate sports polo shirt in navy with gold piping."
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="w-full h-full object-contain scale-125 transition-transform duration-1000 group-hover:scale-150"
                />
              </div>
              <div className="mt-6 space-y-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.1em]">
                  Corporate Sportswear
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Performance Polos
                </h3>
              </div>
            </Reveal>

            <Reveal className="group cursor-pointer" delay={0.25}>
              <div className="overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/featured-shorts.png"
                  alt="A crisp, well-lit studio shot of custom-designed running shorts in deep navy with a thin gold side stripe accent."
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="w-full h-full object-contain scale-110 transition-transform duration-1000 group-hover:scale-125"
                />
              </div>
              <div className="mt-6 space-y-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.1em]">
                  Athletic Bottoms
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Engineered Mobility
                </h3>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
