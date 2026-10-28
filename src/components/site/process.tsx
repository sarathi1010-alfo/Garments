"use client";

import { Reveal } from "./reveal";

const STEPS = [
  {
    num: "01",
    title: "Select Apparel Style",
    body: "Browse performance jerseys, training shorts, hoodies, and compression wear.",
    offset: "",
  },
  {
    num: "02",
    title: "Submit Design & Specs",
    body: "Provide your vector artwork, PMS color codes, custom sizing breakdowns, and fabric preferences.",
    offset: "",
  },
  {
    num: "03",
    title: "Sample Approval",
    body: "Receive pre-production digital mockups and physical sample verification for fit and color accuracy.",
    offset: "",
  },
  {
    num: "04",
    title: "Bulk Production & Delivery",
    body: "High-capacity automated manufacturing with global tracked door-to-door delivery.",
    offset: "",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-20 md:py-[160px] w-full bg-primary relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <Reveal className="max-w-2xl mb-12 md:mb-24 space-y-4 md:space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary">
            How It Works: 4-Step Manufacturing Process
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/70">
            A streamlined, transparent approach from concept to final delivery.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 0.12}
              className={`relative pt-16 md:pt-28 ${step.offset}`}
            >
              <div className="absolute top-0 left-0 text-[100px] md:text-[140px] font-serif-display font-bold text-on-primary/15 leading-none select-none -translate-x-2 md:-translate-x-4 -translate-y-2 md:-translate-y-4">
                {step.num}
              </div>
              <div className="relative z-10 pl-5 md:pl-6">
                <h3 className="font-headline-sm text-headline-sm text-secondary mb-3 md:mb-4 uppercase tracking-[0.05em]">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-primary/80 leading-relaxed max-w-sm">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
