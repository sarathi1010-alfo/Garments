"use client";

import { Reveal } from "./reveal";

const STEPS = [
  {
    num: "01",
    title: "Design & Spec",
    body: "Collaborate with our technical designers to finalize artwork, fabrics, and structural specifications.",
    offset: "",
  },
  {
    num: "02",
    title: "Precision Build",
    body: "Your apparel moves through our state-of-the-art facility, undergoing rigorous quality control at every stage.",
    offset: "md:mt-16",
  },
  {
    num: "03",
    title: "Delivery Assured",
    body: "Secure packaging and timely global delivery, backed by our absolute quality guarantee.",
    offset: "md:mt-32",
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
            The Manufacturing Process
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/70">
            A streamlined, transparent approach from concept to final delivery.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 0.12}
              className={`relative pt-16 md:pt-32 ${step.offset}`}
            >
              <div className="absolute top-0 left-0 text-[120px] md:text-[180px] font-serif-display font-bold text-on-primary/15 leading-none select-none -translate-x-2 md:-translate-x-4 -translate-y-2 md:-translate-y-4">
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
