"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative w-full min-h-[90vh] flex items-center pt-12 md:pt-20 pb-12 md:pb-section-gap overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        {/* Text Content */}
        <div className="lg:col-span-5 px-margin-mobile md:px-margin-desktop z-20 space-y-6 md:space-y-10 relative order-2 lg:order-1">
          <motion.div
            className="space-y-3 md:space-y-4"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary leading-tight">
              Precision Engineered <br />
              Custom Athletic Apparel <br />
              <span className="font-serif-display text-secondary italic block mt-2 text-[1.05em] md:text-[1.1em] font-medium tracking-normal">
                Manufacturer
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Vinayaga Garments is a specialized B2B custom athletic apparel manufacturer delivering high-performance teamwear, sublimated jerseys, activewear, and private-label sportswear. We combine technical moisture-wicking textiles with precision flatlock stitching, automated sublimation cutting, and rigorous quality control for sports teams, fitness brands, and corporate athletic programs worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 md:pt-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <a
              href="/contact"
              className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 inline-flex justify-center items-center gap-3 cursor-pointer min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              Get a Quote
              <ArrowRight className="size-[18px]" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="nofollow external noopener noreferrer"
              className="bg-secondary text-on-secondary px-8 md:px-10 py-4 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 inline-flex justify-center items-center gap-3 cursor-pointer min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
            >
              <MessageCircle className="size-[18px]" />
              WhatsApp
            </a>
            <a
              href="/products"
              className="bg-transparent border-b border-primary text-primary px-4 py-4 rounded-none font-label-md text-label-md uppercase tracking-[0.1em] hover:text-secondary hover:border-secondary transition-all duration-300 inline-flex justify-center items-center cursor-pointer min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-secondary focus:outline-none"
            >
              Explore Products
              <ArrowRight className="size-[18px] ml-3" />
            </a>
          </motion.div>
        </div>

        {/* Image — Bleeding right (desktop) / stacked above text (mobile) */}
        <div
          className="lg:col-span-7 h-[42vh] sm:h-[55vh] lg:h-[85vh] w-full relative mt-0 mb-8 lg:mt-0 lg:mb-0 lg:translate-x-12 lg:scale-125 z-10 order-1 lg:order-2"
        >
          <Image
            src="/images/hero-jersey.png"
            alt="Custom athletic apparel manufacturer sports jersey featuring precision sublimation printing and high-performance fabric"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
