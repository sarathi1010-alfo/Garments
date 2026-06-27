import { slugify } from "@/utils/slugify";

export type GuideSection = {
  title: string;
  level: 2 | 3;
  content: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  answerBlock: string;
  sections: GuideSection[];
  keyTakeaways: string[];
  checklists?: { title: string; items: string[] }[];
  faqs: { q: string; a: string }[];
  category: string;
  lastUpdated: string;
};

export const guides: Guide[] = [
  {
    slug: "custom-apparel-manufacturing-guide",
    category: "Fundamentals",
    title: "Complete Guide to Custom Apparel Manufacturing",
    description: "Learn everything about custom apparel manufacturing, from design to delivery. A comprehensive guide for teams, brands, and businesses.",
    h1: "The Complete Guide to Custom Apparel Manufacturing — Precision Engineering for Your Brand",
    answerBlock: "Custom apparel manufacturing is the process of creating garments from scratch based on specific design requirements, fabric choices, and branding needs. Unlike ready-made clothing, it allows for total control over quality, fit, and technical specifications, making it essential for professional sports teams and premium corporate brands.",
    lastUpdated: "2026-06-27",
    sections: [
      {
        title: "The Core Process: From Concept to Closet",
        level: 2,
        content: "Understanding the manufacturing pipeline is crucial for any business looking to source custom apparel. The process typically involves design finalization, tech pack creation, fabric sourcing, sampling, bulk production, and quality control. Each stage requires meticulous attention to detail to ensure the final product meets the brand's standards and the wearer's needs."
      },
      {
        title: "Phase 1: Design and Tech Pack Development",
        level: 3,
        content: "Every great garment starts with a tech pack. This is the blueprint for your apparel, containing measurements, material specs, stitching types, and branding placements. It serves as the primary communication tool between the designer and the factory. At Vinayaga Garments, we assist clients in translating their vision into production-ready technical documents, ensuring that every seam and button is accounted for before production begins."
      },
      {
        title: "Phase 2: Fabric Sourcing and Selection",
        level: 3,
        content: "For athletic wear, the fabric is the foundation. It determines the garment's performance, durability, and comfort. We source high-performance moisture-wicking polyesters, breathable mesh, and durable interlock fabrics that stand up to the rigors of professional sports like Kabaddi and Football. Our sourcing network includes some of the finest textile mills in Tamil Nadu, known for their innovation in technical textiles."
      },
      {
        title: "Phase 3: Sampling and Prototyping",
        level: 3,
        content: "Before moving to bulk production, we create a sample or 'prototype'. This allows the client to see and feel the garment, check the fit, and test the fabric performance. Any necessary adjustments are made at this stage to ensure the final bulk order is perfect."
      },
      {
        title: "Phase 4: Bulk Production and Quality Control",
        level: 3,
        content: "Once the sample is approved, we move to the cutting and stitching of the bulk order. Our production lines are optimized for efficiency and quality. We implement multi-stage quality control, including inline inspections and final audits, to ensure every piece that leaves our facility is flawless."
      }
    ],
    keyTakeaways: [
      "Total control over design, fabric, and technical specifications.",
      "Higher quality assurance through multi-stage inspection protocols.",
      "Scalability for growing teams, corporate organizations, and fashion labels.",
      "Direct communication with the manufacturer reduces errors and costs.",
      "Custom branding options like embroidery and sublimation for a professional look."
    ],
    faqs: [
      { q: "What is the typical lead time for custom manufacturing?", a: "Lead times usually range from 4 to 8 weeks depending on the complexity of the design, fabric availability, and total order volume." },
      { q: "What is a tech pack?", a: "A tech pack is a comprehensive document that contains all the technical details of your garment—measurements, materials, colors, and branding—for the manufacturer." },
      { q: "What are the Minimum Order Quantities (MOQs)?", a: "MOQs vary based on the fabric and customization requirements. Generally, we cater to both mid-sized teams and large-scale corporate orders." },
      { q: "Can you help with the design process?", a: "Yes, our in-house team can assist you in refining your designs and creating production-ready tech packs." },
      { q: "Do you ship internationally?", a: "Yes, we have robust logistics partnerships to deliver our custom apparel to clients worldwide." }
    ]
  },
  {
    slug: "custom-kabaddi-team-kits-guide",
    category: "Sports",
    title: "Custom Kabaddi Team Kits Guide",
    description: "The ultimate guide to designing and manufacturing professional Kabaddi kits. Fabric specs, durability, and customization options.",
    h1: "Custom Kabaddi Team Kits — Design, Fabrics, and Manufacturing Excellence",
    answerBlock: "Professional Kabaddi kits require exceptionally durable, high-stretch fabrics capable of withstanding intense physical contact and frequent tugging. A complete kit includes a reinforced jersey and high-tensile shorts, typically manufactured using dye-sublimation printing for permanent, vibrant branding that won't peel, crack, or fade during intense play.",
    lastUpdated: "2026-06-27",
    sections: [
      {
        title: "Engineered for Intensity: Kabaddi Fabric Standards",
        level: 2,
        content: "Kabaddi is a high-contact sport where kits are subjected to extreme stress. Standard polyester used in other sports isn't enough. We use reinforced interlock knit fabrics with high GSM (Grams per Square Meter) to ensure the kits don't tear under pressure. These fabrics offer 4-way stretch, allowing players the mobility needed for raids and tackles while maintaining a professional appearance."
      },
      {
        title: "Sublimation Printing: Why It's Mandatory for Kabaddi",
        level: 3,
        content: "Unlike screen printing or vinyl transfers, which sit on top of the fabric and can peel off when grabbed, dye sublimation infuses the ink directly into the fabric fibers. This ensures that team logos, player names, and numbers become a permanent part of the material. They never fade, crack, or peel, regardless of how many times the kit is tugged during a match or washed afterwards."
      },
      {
        title: "Design Features: Performance and Safety",
        level: 2,
        content: "A well-designed Kabaddi kit isn't just about looks; it's about performance. We incorporate features like reinforced necklines to prevent stretching, flat-lock stitching to reduce skin irritation, and non-slip waistbands on shorts to ensure the kit stays in place during high-action movements."
      },
      {
        title: "Choosing the Right Shorts",
        level: 3,
        content: "Kabaddi shorts need to be exceptionally tough. We use heavy-duty interlock polyester with reinforced side seams and a wide, comfortable waistband. The fit is designed to be snug but not restrictive, preventing opponents from easily grabbing the fabric."
      }
    ],
    keyTakeaways: [
      "High-tensile strength fabrics (High GSM) are mandatory for Kabaddi durability.",
      "Sublimation printing offers the only viable durability for high-contact sports.",
      "Precision fit and flat-lock stitching prevent injuries and improve player mobility.",
      "Reinforced seams are critical for the longevity of the kit.",
      "Moisture-wicking technology keeps players dry and comfortable during matches."
    ],
    faqs: [
      { q: "Can we customize the fit for individual players?", a: "Yes, we offer custom sizing based on player measurements to ensure optimal performance and comfort for every team member." },
      { q: "What is the best fabric for Kabaddi shorts?", a: "We recommend heavy-duty interlock polyester with a high spandex content for stretch and reinforced stitching for durability." },
      { q: "How long does the sublimation printing last?", a: "Sublimation printing is permanent. It lasts as long as the fabric itself and will never fade or peel." },
      { q: "What is the turnaround time for a full team kit?", a: "Typically, a full team kit can be manufactured and delivered within 3 to 5 weeks." },
      { q: "Do you offer design assistance for Kabaddi teams?", a: "Absolutely. We can help you design a unique and professional kit that reflects your team's identity." }
    ]
  }
];
