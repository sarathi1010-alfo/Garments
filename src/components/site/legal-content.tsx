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
          items={["WhatsApp", "Email"]}
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

export const TERMS_DOC: LegalDoc = {
  id: "terms",
  title: "Terms & Conditions",
  subtitle: "Legal",
  updated: "Last Updated: June 2026",
  body: (
    <>
      <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-8">
        These Terms &amp; Conditions govern your use of the Vinayaga Garments
        website and any orders, inquiries, or custom manufacturing engagements
        you make with us. By accessing our website or contacting us, you agree
        to the terms below.
      </p>

      <Section n="1" title="Use of Our Website">
        <p>
          You agree to use this website for lawful purposes only — to learn
          about our products and services and to contact us with genuine
          business inquiries. You must not misuse the site, attempt to gain
          unauthorized access, or introduce harmful code.
        </p>
      </Section>

      <Section n="2" title="Custom Manufacturing & Quotations">
        <UL
          items={[
            "All garments are custom-manufactured to your specifications; quotes are provided based on agreed artwork, fabrics, sizes, and quantities.",
            "A quotation is valid for 30 days from the date issued, unless stated otherwise.",
            "Prices are subject to change based on fabric availability, order volume, and design complexity confirmed at the time of order.",
            "An order is confirmed only after a written approval and any agreed advance payment is received.",
          ]}
        />
      </Section>

      <Section n="3" title="Artwork, Designs & Intellectual Property">
        <UL
          items={[
            "You confirm that all artwork, logos, and designs you supply to us are either owned by you or you have permission to use them.",
            "Vinayaga Garments is not liable for trademark or copyright infringement arising from client-supplied artwork.",
            "We will not reproduce any third-party brand logos (e.g. adidas, Nike) or trademarked designs without proof of authorization.",
            "Production samples and design mockups created by us remain our intellectual property until full payment is received.",
          ]}
        />
      </Section>

      <Section n="4" title="Production, Lead Times & Delivery">
        <UL
          items={[
            "Standard production lead times are communicated at order confirmation and are estimates, not guarantees.",
            "Delays caused by force majeure, fabric supply issues, or changes requested after production begins are not the responsibility of Vinayaga Garments.",
            "Delivery timelines apply from the date of confirmed artwork and advance payment, not the initial inquiry date.",
            "Risk in goods passes to the customer upon handover to the shipping carrier.",
          ]}
        />
      </Section>

      <Section n="5" title="Payment Terms">
        <UL
          items={[
            "An advance payment (typically 50%) is required to commence production, with the balance due before dispatch.",
            "Orders are not shipped until full payment is received, unless agreed otherwise in writing.",
            "Payments are non-refundable once production has commenced, as fabrics are cut and processed to your specification.",
          ]}
        />
      </Section>

      <Section n="6" title="Quality & Rejections">
        <UL
          items={[
            "Every garment undergoes in-house quality control before dispatch.",
            "Claims for defects must be notified within 7 days of delivery with photographic evidence.",
            "We will repair or replace confirmed manufacturing defects free of charge.",
            "Claims arising from incorrect sizes, artwork, or specifications approved by the client are not eligible for replacement.",
          ]}
        />
      </Section>

      <Section n="7" title="Returns & Cancellations">
        <p>
          Because all apparel is custom-manufactured to order, returns and
          exchanges are not accepted except for confirmed manufacturing defects.
          Orders may only be cancelled before production has commenced; advance
          payments are non-refundable once fabrics are procured or cutting has
          begun.
        </p>
      </Section>

      <Section n="8" title="Limitation of Liability">
        <p>
          Vinayaga Garments shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of our products or
          services. Our total liability is limited to the invoice value of the
          goods in question.
        </p>
      </Section>

      <Section n="9" title="Governing Law">
        <p>
          These Terms &amp; Conditions are governed by the laws of India. Any
          disputes shall be subject to the exclusive jurisdiction of the courts
          at our registered business location.
        </p>
      </Section>

      <Section n="10" title="Changes to These Terms">
        <p>
          We may update these Terms &amp; Conditions at any time. Updates will be
          posted on this page, and continued use of our website or services
          constitutes acceptance of the revised terms.
        </p>
      </Section>

      <div className="mt-10 pt-8 border-t border-border-silver space-y-4">
        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
          By using our website, contacting us, or placing an order with Vinayaga
          Garments, you acknowledge that you have read, understood, and agree to
          be bound by these Terms &amp; Conditions in full.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant italic">
          Engineered for performance. Tailored for trust. Built on terms that
          respect both sides.
        </p>
      </div>
    </>
  ),
};

export type LegalDocId = "privacy" | "sustainability" | "terms";

export const LEGAL_DOCS: Record<LegalDocId, LegalDoc> = {
  privacy: PRIVACY_DOC,
  sustainability: SUSTAINABILITY_DOC,
  terms: TERMS_DOC,
};
