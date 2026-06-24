"use client";

import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section className="w-full bg-primary">
      <Reveal className="px-margin-mobile md:px-margin-desktop py-[120px] text-center border-t border-on-primary/10">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-primary font-serif-display tracking-normal">
            Elevate Your{" "}
            <span className="italic text-secondary">Team&apos;s Identity</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/70 max-w-2xl mx-auto">
            Ready to outfit your organization with premium, custom-engineered
            apparel? Connect with our technical sales team to discuss your
            specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button className="bg-secondary text-on-secondary px-10 py-4 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:opacity-90 transition-opacity duration-300 cursor-pointer">
              Contact Sales Team
            </button>
            <button className="bg-transparent border border-on-primary/30 text-on-primary px-10 py-4 rounded-md font-label-md text-label-md uppercase tracking-[0.1em] hover:bg-on-primary/10 hover:border-on-primary/50 transition-all duration-300 cursor-pointer">
              Download Catalog
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
