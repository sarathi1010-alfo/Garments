---
name: Aurelian Performance
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#edeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5e7f'
  primary: '#031633'
  on-primary: '#ffffff'
  primary-container: '#1a2b49'
  on-primary-container: '#8293b6'
  inverse-primary: '#b6c7ec'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#221400'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d2700'
  on-tertiary-container: '#af8d5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7ec'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#364766'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffddaf'
  tertiary-fixed-dim: '#e7c18a'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#5c4217'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
  charcoal: '#2C2C2C'
  border-silver: '#E5E5E5'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  component-gap: 32px
---

## Brand & Style

This design system embodies the intersection of high-performance engineering and artisanal craftsmanship. The brand personality is authoritative yet approachable, positioning the product as the gold standard for custom athletic apparel. 

The design style is **Minimalist-Corporate**, utilizing expansive whitespace and a structured grid to evoke a sense of precision and luxury. Every element is intentional, avoiding decorative clutter to focus on the quality of the materials and the strength of the typography. The emotional response should be one of immediate trust and the quiet confidence found in premium, bespoke tailoring.

## Colors

The palette is anchored by **Trust Navy**, used for primary surfaces and high-level structural elements to project stability and professionalism. **Premium Gold** is applied sparingly as a high-contrast accent for interactive elements and subtle borders, signifying excellence. 

**Off-White** serves as the foundational background color to maintain a fresh, modern aesthetic that allows product photography to stand out. **Charcoal Black** is reserved specifically for body text and secondary headings to ensure optimal readability and a grounded feel.

## Typography

The typography system pairs the geometric strength of **Montserrat** with the humanist clarity of **Open Sans**. Headlines utilize tight letter-spacing and bold weights to project a modern, athletic confidence. 

For body text, generous line heights are maintained to ensure specifications and product narratives remain highly readable. Labels and small utility text are set in uppercase Montserrat with increased tracking to create a sophisticated, "stamped" look reminiscent of premium garment tagging.

## Layout & Spacing

The layout follows a **fixed-grid** philosophy for desktop to maintain a controlled, editorial feel. A 12-column system is used with generous margins to frame content as if it were in a high-end lookbook.

On mobile, the layout transitions to a fluid single-column system, but retains a high density of vertical whitespace between sections (120px on desktop, scaling to 60px on mobile) to ensure the design never feels cluttered. Spacing between elements within components should follow an 8px base grid to maintain mathematical harmony and structure.

## Elevation & Depth

In alignment with a clean, structured aesthetic, this design system eschews traditional shadows in favor of **low-contrast outlines** and **tonal layering**. 

Depth is achieved through:
- **Hairline Borders:** 1px borders in `border-silver` or `Premium Gold` to define containers.
- **Tonal Stepping:** Using subtle shifts between the `neutral` background and pure white surfaces for cards.
- **Micro-elevation:** A singular, very soft, high-diffusion shadow (0px 4px 20px, 5% opacity) may be used exclusively for "active" states or floating action elements to indicate they are above the primary canvas.

## Shapes

The shape language is "Soft-Modern." Elements utilize a consistent 6px (`0.375rem`) corner radius. This specific value is chosen to move away from the harshness of sharp corners while remaining significantly more structured than fully rounded or pill-shaped designs. This balance reflects the "tailored" nature of the product—flexible but disciplined. Larger containers like image galleries and modal cards may use `rounded-lg` (8px) for a slightly softer presence.

## Components

### Buttons
- **Primary:** Solid `Premium Gold` background with white or `Trust Navy` text. 6px border radius.
- **Secondary:** Transparent background with a 1px `Premium Gold` border and gold text.
- **States:** Hover states should involve a subtle shift to a darker gold or a slight background fill for ghost buttons.

### Cards
- **Product Cards:** Solid white background, 1px `border-silver` outline, and 6px border radius. Imagery should be high-contrast and occupy the top 60% of the card.
- **Premium Tier Cards:** Feature a 1px top-border accent in `Premium Gold` to denote high-end craftsmanship.

### Inputs & Form Fields
- Minimalist design with a 1px `border-silver` bottom border or full outline. 
- Focus state switches the border to `Premium Gold`.
- Labels use `label-sm` (uppercase Montserrat).

### Chips & Tags
- Used for "In Stock" or "Customizable" indicators. 
- Low-saturation navy or light gold backgrounds with high-contrast text. 

### Iconography
- Icons must be monoline (thin-line) with a 1.5px stroke width. 
- Styles should be strictly geometric to match the Montserrat headline font. 
- Use icons for technical features like "Breathable Fabric" or "Reinforced Stitching."