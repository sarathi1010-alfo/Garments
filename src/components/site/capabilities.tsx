"use client";

import { Reveal } from "./reveal";

const CAPABILITIES = [
  {
    icon: "palette",
    title: "Vibrant Sublimation",
    body: "Industry-leading dye sublimation printing that ensures your team's colors remain vibrant and fade-resistant, wash after wash.",
  },
  {
    icon: "architecture",
    title: "Precision Stitching",
    body: "Reinforced seams and expert tailoring provide the structural integrity required for high-impact professional athletic wear.",
  },
  {
    icon: "layers",
    title: "Durable Fabrics",
    body: "Sourcing only the finest technical fabrics that offer breathability, moisture-wicking, and exceptional mechanical stretch.",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-section-gap w-full bg-surface"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal className="max-w-3xl mb-12 md:mb-24 space-y-4 md:space-y-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Manufacturing Excellence
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Our facility is equipped to handle complex custom requirements with{" "}
            <span className="font-serif-display italic text-secondary">
              unyielding attention
            </span>{" "}
            to detail.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="group">
              <div className="mb-6 md:mb-8 text-secondary">
                <span className="material-symbols-outlined text-[48px] md:text-[64px] font-light transition-transform duration-500 group-hover:scale-110 inline-block">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
