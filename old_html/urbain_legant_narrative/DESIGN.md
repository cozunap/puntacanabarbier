---
name: Urbain Élegant Narrative
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#b4cdb8'
  on-secondary: '#203527'
  secondary-container: '#364c3c'
  on-secondary-container: '#a3bba7'
  tertiary: '#d0cecd'
  on-tertiary: '#313030'
  tertiary-container: '#b5b2b2'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d0e9d4'
  secondary-fixed-dim: '#b4cdb8'
  on-secondary-fixed: '#0b2013'
  on-secondary-fixed-variant: '#364c3c'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

The design system is anchored in the "Urbain Élegant" (Urban Elegant) philosophy. It targets a discerning male clientele who seeks the intersection of raw urban energy and high-end tropical relaxation. The aesthetic is a sophisticated blend of **Corporate Modern** structural integrity and **Tactile** luxury. 

The UI should evoke the atmosphere of a private lounge: dark, intimate, and meticulously detailed. We utilize heavy whitespace (despite the dark theme) to signify premium positioning, paired with sharp, intentional accents of gold and palm green to ground the digital experience in the physical brand identity of the barbershop.

## Colors

The palette is dominated by **Rich Gold (#D4AF37)** as the primary brand signifier, used for calls to action, high-level accents, and interactive states. The secondary color is **Palm Green (#1B3022)**, a deep, muted tropical tone used for subtle backgrounds and specialty icons.

The core surface color is a deep **Charcoal/Black (#0F0F0F)**, providing a high-contrast backdrop that allows the gold and green to pop with a metallic-like sheen. Neutrals are kept cool and desaturated to ensure they do not compete with the gold accents.

## Typography

This design system employs a high-contrast typographic pairing. **Playfair Display** provides a sophisticated, literary serif for headlines, conveying heritage and craftsmanship. **Hanken Grotesk** offers a clean, modern, and highly legible sans-serif for body content and UI labels, ensuring the "Urban" side of the brand remains contemporary.

All labels and navigation items should utilize `text-transform: uppercase` with wide letter-spacing to mimic the look of luxury high-street signage.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a boutique, controlled feel, while transitioning to a fluid model for mobile. We use an 8px base unit for all internal component spacing.

Generous vertical "Section Gaps" (80px+) are required to maintain the "Elegant" part of the brand narrative, preventing the UI from feeling cluttered. Content should be centered with wide margins to create a focused, editorial look. On mobile, margins reduce to 16px to maximize the narrow real estate for booking flows.

## Elevation & Depth

We avoid traditional heavy shadows. Instead, we use **Tonal Layers** and **Low-contrast Outlines**. 
1. **Surfaces:** Use `#1A1A1A` for cards or containers resting on the `#0F0F0F` background.
2. **Borders:** Subtle 1px borders in a muted gold (`rgba(212, 175, 55, 0.2)`) or deep green define boundaries without adding visual weight.
3. **Interactive Depth:** When a card is hovered, a soft "Gold Glow" (a very diffused shadow: `0 10px 30px rgba(212, 175, 55, 0.1)`) can be applied to simulate light reflecting off a metallic surface.

## Shapes

The shape language is **Soft (0.25rem)**. We intentionally avoid fully rounded or pill-shaped buttons to maintain a masculine, architectural rigor. Large images and hero sections may use sharp corners (0px) to enhance the "Urban" edge, while functional UI elements (buttons, inputs) use the soft 4px radius for a touch of refinement.

## Components

### Buttons
- **Primary:** Solid Gold (#D4AF37) background with Black text. Uppercase, bold labels.
- **Secondary:** Transparent background with a 1px Gold border.
- **Tertiary:** Palm Green background with White text, used specifically for "Book Now" or "Confirmation" actions.

### Input Fields
- Dark backgrounds (#1A1A1A) with bottom-only gold borders (2px) to mimic high-end stationery or hotel check-in forms.

### Cards
- Used for service listings (e.g., "The Presidential Cut"). Feature a large background image with a Palm Green overlay (20% opacity) and gold typography for the title.

### Chips
- Used for barbers' specialties (e.g., "Fades", "Beard Trim"). Small, uppercase text with a very subtle green background and no border.

### Checkboxes & Radios
- Custom-styled to appear as small gold squares when active, reinforcing the geometric, masculine aesthetic.