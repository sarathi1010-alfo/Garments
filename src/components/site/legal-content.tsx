import type { LegalDoc } from "./legal-modal";
import { CONTACT } from "@/lib/contact";

/** Shared prose renderer for bulleted lists under a heading. */
function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 last:mb-0">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-baseline gap-3">
        <span className="font-serif-display italic text-secondary text-[0.85em]">
          {n}
        </span>
        {title}
      </h3>
      <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="text-secondary mt-2 shrink-0 size-1.5 rounded-full bg-secondary"
            aria-hidden
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export const PRIVACY_DOC: LegalDoc = {
  id: "privacy",
  title: "Privacy Policy",
  subtitle: "Legal",
  updated: "Last Updated: June 2026",
  body: (
    <>
      <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-8">
        Welcome to Vinayaga Garments. Your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you visit our website.
      </p>

      <Section n="1" title="Information We Collect">
        <p>We may collect the following information:</p>
        <UL
          items={[
            "Name",
            "Phone number",
            "Email address",
            "WhatsApp contact details",
            "Business inquiry details",
            "Any information you submit through contact forms",
          ]}
        />
      </Section>

      <Section n="2" title="How We Use Your Information">
        <p>We use your information to:</p>
        <UL
          items={[
            "Respond to customer inquiries",
            "Provide product or service information",
            "Improve our website and customer experience",
            "Contact you regarding orders or quotations",
            "Provide customer support",
          ]}
        />
      </Section>

      <Section n="3" title="WhatsApp Communication">
        <p>
          By contacting us through WhatsApp, you consent to receive replies and
          business-related communication from our team.
        </p>
      </Section>

      <Section n="4" title="Data Protection">
        <p>
          We take reasonable steps to protect your information from unauthorized
          access, misuse, or disclosure.
        </p>
      </Section>

      <Section n="5" title="Third-Party Services">
        <p>Our website may use third-party tools such as:</p>
        <UL
          items={[
            "Google Maps",
            "Google Analytics",
            "WhatsApp",
            "Hosting providers",
          ]}
        />
        <p>
          These services may collect limited technical information according to
          their own privacy policies.
        </p>
      </Section>

      <Section n="6" title="Cookies">
        <p>
          Our website may use cookies to improve website performance and user
          experience.
        </p>
      </Section>

      <Section n="7" title="Your Rights">
        <p>You may request:</p>
        <UL
          items={[
            "Access to your data",
            "Correction of your information",
            "Deletion of your data",
          ]}
        />
        <p>To request changes, contact us directly.</p>
      </Section>

      <Section n="8" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy at any time. Updates will be posted
          on this page.
        </p>
      </Section>

      <Section n="9" title="Contact Us">
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us through:
        </p>
        <UL
          items={[
            "WhatsApp",
            "Email",
            "Contact form available on the website",
          ]}
        />
      </Section>
    </>
  ),
};

export const SUSTAINABILITY_DOC: LegalDoc = {
  id: "sustainability",
  title: "Sustainability",
  subtitle: "Our Commitment",
  updated: "Last Updated: June 2026",
  body: (
    <>
      <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-8">
        At Vinayaga Garments, we believe premium athletic apparel should be
        crafted with respect — for the athletes who wear it, the people who make
        it, and the planet that sustains us all. Sustainability is woven into
        every stage of our manufacturing process.
      </p>

      <Section n="01" title="Responsible Material Sourcing">
        <p>
          We source technical fabrics that balance high performance with lower
          environmental impact — including recycled polyester blends,
          moisture-wicking fibers engineered for longevity, and certified
          cottons grown with reduced water and pesticide use.
        </p>
        <UL
          items={[
            "Recycled polyester options for team kits and jerseys",
            "OEKO-TEX certified dyes for sublimation printing",
            "Long-life fabrics engineered to reduce replacement frequency",
          ]}
        />
      </Section>

      <Section n="02" title="Low-Impact Sublimation">
        <p>
          Our dye-sublimation printing process uses water-based inks that
          produce minimal wastewater compared to traditional fabric dyeing. The
          process is digital end-to-end, meaning we print only what is needed —
          reducing fabric offcuts and ink waste.
        </p>
      </Section>

      <Section n="03" title="Ethical Manufacturing">
        <p>
          Every garment is cut, stitched, and finished in our facility under
          fair working conditions. We are committed to safe workplaces,
          reasonable hours, and dignified wages for every person in our supply
          chain.
        </p>
        <UL
          items={[
            "In-house quality control at every production stage",
            "Safe, well-ventilated working environments",
            "Skilled tailors paid fairly for craft expertise",
          ]}
        />
      </Section>

      <Section n="04" title="Made-to-Order, Not Mass-Produced">
        <p>
          Because we manufacture custom apparel to specification, we produce
          only what is ordered — avoiding the overproduction and landfill waste
          typical of fast fashion. Each piece is built to last, reducing the
          cycle of replace-and-discard.
        </p>
      </Section>

      <Section n="05" title="Waste Reduction">
        <p>
          Fabric offcuts from cutting are collected and repurposed — smaller
          remnants become samples, swatches, or are recycled back into fiber
          streams where facilities allow. Packaging is kept minimal and
          recyclable.
        </p>
      </Section>

      <Section n="06" title="Our Ongoing Commitment">
        <p>
          Sustainability is not a finish line but a continuous improvement
          process. We regularly review our materials, partners, and processes
          to find further reductions in our environmental footprint — while
          never compromising the performance, durability, and trust our
          customers rely on.
        </p>
      </Section>

      <p className="font-body-md text-body-md text-on-surface-variant italic mt-8 pt-6 border-t border-border-silver">
        Engineered for performance. Tailored for trust. Made with
        responsibility.
      </p>
    </>
  ),
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: PRIVACY_DOC,
  sustainability: SUSTAINABILITY_DOC,
};
