# Website Design Strategy — Vinayaga Garments

> Premium custom athletic apparel manufacturer. "Engineered for Performance. Tailored for Trust."
>
> This strategy synthesizes three installed skills — **ui-ux-pro-max** (design intelligence
> rules), **frontend-design** (distinctive visual-design methodology), and **vidilearn**
> (content extraction for real product data) — into a single build plan, then maps every
> decision to the supplied design tokens (`Image 3.markdown`) and reference layout
> (`Image 2.html` / `Image 1.png` mockup).

---

## 1. The brief, pinned down (frontend-design: "ground it in the subject")

The **frontend-design** skill demands we pin the brief before designing: name the subject,
its audience, and the page's single job.

- **Subject:** Vinayaga Garments — a manufacturer of custom athletic apparel (team kits,
  corporate sportswear, performance polos, engineered bottoms). Their world is technical
  fabrics, sublimation printing, reinforced stitching, and bespoke tailoring.
- **Audience:** B2B buyers — sports clubs, corporate procurement, schools, teams. They are
  risk-averse, quality-driven, and need to trust the manufacturer before requesting a quote.
- **The page's single job:** Convert a procurement decision-maker into a **quote request**.
  Every section must lower the perceived risk and reinforce "these people engineer gear that
  lasts." The hero is a thesis, not a decoration.
- **One real aesthetic risk we'll take (and justify):** Pairing a disciplined geometric sans
  (Montserrat) for structural headlines with an **italic Playfair Display** accent for the
  emotional beat ("Tailored for Trust.", "unyielding attention", "Team's Identity"). Most
  athletic-apparel sites lean fully sans/technical; the serif italic injects the
  *bespoke-tailoring* connotation that separates "manufacturer" from "premium manufacturer."
  This is the distinctive choice the brand is paying for.

---

## 2. Design system chosen (ui-ux-pro-max: style & token selection)

**ui-ux-pro-max** Rule Category 4 (Style Selection) tells us to match style to product type
and keep effects/radius/shadow aligned with that single style. The token file already
commits to a direction; we ratify and enforce it.

- **Style:** Minimalist-Corporate / Editorial Luxury. Expansive whitespace, fixed 12-column
  grid, hairline borders, tonal layering, **no decorative shadows**.
- **Product type match (from `products.csv` reasoning):** "Premium B2B manufacturing /
  lookbook" → restrained palette, serif accent, large product imagery, single primary CTA
  repeated at decision points.
- **Color (semantic tokens, never raw hex in components):**
  - `primary` = Trust Navy `#031633` — structural surfaces, dark sections, body anchors.
  - `secondary` = Premium Gold `#A68A5F` — high-contrast accent for CTAs, labels, numerals.
  - `background`/`surface` = Off-White `#f9f9fb` — fresh canvas for product photography.
  - `charcoal` `#2C2C2C` — body text; `border-silver` `#E5E5E5` — hairlines.
- **Typography:** Montserrat (headlines, labels — geometric, athletic confidence, tight
  tracking) + Open Sans (body — humanist clarity, generous line-height) + Playfair Display
  italic (the bespoke-tailoring accent only). One type scale, weight-based hierarchy.
- **Shapes:** `0.375rem` (6px) default radius — "tailored but disciplined"; `0.5rem` for
  large image containers. No pill shapes.
- **Elevation:** tonal stepping + 1px hairlines only. A single soft shadow
  (`0 4px 20px / 5%`) reserved exclusively for active/floating states.
- **Iconography:** monoline geometric, 1.5px stroke, gold — matching Montserrat's geometry.

---

## 3. Layout architecture (ui-ux-pro-max: Layout & Responsive, priority 5)

- **Grid:** fixed 12-column, `1280px` max container, `64px` desktop / `20px` mobile margins,
  `120px` desktop section gap scaling to `60px` mobile. Component gap on an 8px base grid.
- **Mobile-first:** single column, but preserve the editorial asymmetry — the hero image
  bleeds right on desktop (`lg:col-span-7`, scaled `1.25×`) and stacks above the text block
  on mobile. Featured Work uses an asymmetric `7/5` split on desktop, stacked on mobile with
  the large feature first.
- **Sticky top nav** with `backdrop-blur` + hairline bottom border; reserves its own padding
  so content never slides under it. Mobile menu toggles a sheet.
- **Sticky footer:** root wrapper `min-h-screen flex flex-col`; footer gets `mt-auto` so it
  sticks on short pages and is pushed naturally on long pages (per platform UI rule).

### Page sections (mapped to the reference)
1. **TopNav** — logo, Products / Custom Services / About Us, gold "Get a Quote".
2. **Hero** — asymmetric editorial: headline + italic serif accent, two CTAs (gold solid +
   underline ghost), bleeding product image.
3. **Manufacturing Excellence** — three capability cards (Vibrant Sublimation, Precision
   Stitching, Durable Fabrics) with gold monoline icons.
4. **Featured Work** — asymmetric editorial gallery: large feature (Elite Soccer Uniforms) +
   stacked pair (Performance Polos, Engineered Mobility) with offset vertical rhythm.
5. **The Manufacturing Process** — dark navy band, oversized `01/02/03` numerals, three
   staggered steps (Design & Spec → Precision Build → Delivery Assured).
6. **CTA Banner** — dark navy, serif headline with italic gold accent, two CTAs.
7. **Footer** — brand statement, Company / Legal columns, copyright.

---

## 4. Interaction & motion (ui-ux-pro-max: Animation, priority 7 + frontend-design: "leverage motion deliberately")

**ui-ux-pro-max** motion rules: 150–300ms micro-interactions, `transform`/`opacity` only,
meaningful (not decorative), `prefers-reduced-motion` respected, stagger 30–50ms.

We use **framer-motion** (installed) for orchestrated, interruptible motion:

- **Page-load:** hero text + image fade/rise in a staggered sequence (one orchestrated
  moment, per frontend-design — "an orchestrated moment usually lands harder than scattered
  effects").
- **Scroll reveals:** section headlines and gallery items rise + fade as they enter the
  viewport (`whileInView`, `viewport={{ once: true }}`), 40ms stagger between grid items.
- **Hover micro-interactions:** capability icons `scale-110` (500ms ease-out); gallery
  images slow `scale-105` (1000ms) inside overflow-hidden frames; cards lift
  `translateY(-8px)` with the single sanctioned soft shadow.
- **Respect `prefers-reduced-motion`:** all motion wrappers disable when reduced.
- **No layout-thrashing animations** (no width/height/top/left).

---

## 5. Accessibility & quality gates (ui-ux-pro-max: priorities 1–3, CRITICAL/HIGH)

- **Contrast:** navy text on off-white `#031633`/`#f9f9fb` ≈ 14:1 (AAA). Gold labels on
  white (`#A68A5F`) used only for ≥14px semibold accent text; gold CTA buttons carry
  uppercase 14px/600 labels.
- **Focus rings:** visible 2px gold focus ring on every interactive element; never removed.
- **Touch targets:** all buttons ≥ 48px tall (label-md button is `py-4` ≈ 56px); 8px+ gaps.
- **Keyboard nav:** nav, mobile menu, and all CTAs fully operable; skip-link to `#main`.
- **Heading hierarchy:** one `h1` (hero), `h2` per section, `h3` for cards/items — no skips.
- **Alt text:** every product image gets descriptive alt (fabric, color, construction).
- **Icon-only buttons** (mobile menu) get `aria-label`.
- **Images:** Next.js `<Image>` for automatic WebP/AVIF + responsive `srcset`, width/height
  reserved to keep CLS < 0.1; below-the-fold images `loading="lazy"`.

---

## 6. Engineering plan (Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui + framer-motion)

- **Fonts:** `next/font/google` → Montserrat (400/600/700), Open_Sans (400/600),
  Playfair_Display (italic 600). Exposed as CSS vars `--font-montserrat / --font-open-sans /
  --font-playfair` and wired into Tailwind `font-headline-* / font-body-* / font-serif-display`.
- **Tokens:** brand colors mapped in `globals.css` `@theme inline` so `bg-primary`,
  `text-secondary`, `bg-surface`, etc. work as native Tailwind utilities (Tailwind v4 way).
  The shadcn semantic tokens (`primary/secondary/...`) are remapped to the brand palette so
  existing shadcn components inherit the brand automatically.
- **Material Symbols:** loaded once via `<link>` in `<head>` (the reference's icon set).
- **Component split:** `TopNav`, `Hero`, `Capabilities`, `FeaturedWork`, `Process`, `CtaBanner`,
  `Footer` — composed in `src/app/page.tsx`. shadcn `Button` (variant mapping) used for CTAs
  where it fits; custom buttons where the design needs the exact gold/underline treatment.
- **Images:** the 4 generated PNGs in `/public/images/` (hero-jersey, featured-team-kit,
  featured-polo, featured-shorts) via `next/image`.
- **No backend needed** for the landing page; all content static. (API routes available if a
  real quote form is wired later.)

---

## 7. Content sourcing (vidilearn — the third skill)

**vidilearn** extracts transcripts/articles from YouTube + the web with zero API keys and an
MCP server mode. Its role in this strategy is **content supply**, not layout:

- When the client supplies a YouTube factory-tour video or a web article about their
  sublimation process, run `bunx vidilearn extract "<url>"` to pull a clean, structured
  transcript/article and feed it into the capability/process copy.
- For ongoing RAG (e.g. a "knowledge base" of fabric specs), `bunx vidilearn extract "<url>"
  --embed` produces local `{chunk, embedding}` pairs for a vector store — no API key.
- In an agentic setup, `bunx vidilearn mcp` exposes extraction as tools so the site's
  content can be refreshed conversationally.

For this build the copy is taken verbatim from the reference (`Image 2.html`), so vidilearn
is staged but not invoked; it is the recommended path the moment real marketing content
exists.

---

## 8. Build order

1. Wire fonts + tokens (layout.tsx, globals.css). 2. TopNav + Footer (shell). 3. Hero +
Capabilities. 4. Featured Work + Process + CTA. 5. framer-motion reveals + hover. 6. Lint +
Agent-Browser verify (sticky footer, responsiveness, golden path).
