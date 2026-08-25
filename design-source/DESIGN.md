---
name: Aurelian Performance
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#cecece'
  on-tertiary: '#2f3131'
  tertiary-container: '#b2b3b3'
  on-tertiary-container: '#434546'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is rooted in exclusivity, discipline, and high-tier athletic achievement. It targets a high-net-worth audience seeking a sanctuary for physical transformation. The emotional response is one of aspiration, focus, and prestige.

The design style is **High-Contrast / Modern Minimalist**. It utilizes deep blacks to create a sense of infinite depth, paired with metallic gold accents to signal premium quality. The interface should feel like a high-end concierge service—uncluttered, powerful, and precise. Elements are framed with intentional whitespace (blackspace) to let the typography and imagery command attention.

## Colors

The palette is strictly curated to evoke luxury.
- **Primary (Metallic Gold):** Used sparingly for calls to action, active states, and critical highlights. It should feel like a reward.
- **Neutral (Deep Black/Obsidian):** The foundation of the UI. Use `#000000` for the base background to ensure "true black" on OLED screens, and `#0A0A0A` for elevated surfaces.
- **Secondary (Anthracite):** Used for borders and subtle container separation to maintain depth without breaking the dark aesthetic.
- **Typography:** Headlines are pure white for maximum legibility, while body text uses a slightly muted silver-grey to reduce eye strain in high-contrast environments.

## Typography

The typography strategy pairs expressive, avant-garde headings with functional, modern sans-serifs.
- **Headlines:** Uses a bold, wide-character font to convey strength and architectural stability. Tight letter spacing on large displays creates a "wall of text" impact common in luxury editorial design.
- **Body:** Focused on readability and calm. The balanced nature of the sans-serif ensures that even dense training programs remain legible.
- **Labels:** Technical and monospaced-leaning fonts are used for data points (weights, reps, times) to give a precise, professional feel.

## Layout & Spacing

The design system employs a **Fixed Grid** model on desktop to maintain a cinematic, centered feel, transitioning to a **Fluid Grid** on mobile devices.
- **Rhythm:** A strict 8px linear scale. Large components and sections should use generous padding (48px+) to prevent the UI from feeling "cramped," which is a hallmark of budget apps.
- **Mobile:** A 4-column layout with 20px side margins. 
- **Desktop:** A 12-column layout. Elements like "Member Stats" or "Class Bookings" should span specific column groups (e.g., 4 or 6) to maintain an organized, modular appearance.

## Elevation & Depth

In a dark luxury theme, depth is created through **Tonal Layering** rather than traditional shadows.
- **Level 0 (Background):** Pure `#000000`.
- **Level 1 (Cards/Sections):** `#0A0A0A` with a subtle 1px border of `#1A1A1A`.
- **Level 2 (Popovers/Modals):** `#141414` with a very soft, diffused gold-tinted glow (Opacity: 5%, Blur: 40px) to simulate a physical light source reflecting off a metallic surface.
- **Separators:** Use thin, 1px lines in dark grey or extremely faint gold to divide content without creating visual noise.

## Shapes

The design system adopts a **Sharp (0)** roundedness strategy. High-end luxury in fitness is often associated with the architectural, the brutal, and the precise. 90-degree angles on all buttons, cards, and input fields suggest a "no-nonsense" and disciplined environment. 

The only exception to the sharp rule is the use of circular profile images or specific health-tracking rings to provide a natural contrast against the rigid UI structure.

## Components

- **Buttons:** Primary buttons are solid Gold (#D4AF37) with black text. Secondary buttons are transparent with a 2px Gold border. Use all-caps for button labels to enhance the "command" feel.
- **Input Fields:** Bottom-border only (minimalist style). When focused, the border transitions from grey to gold with a subtle label float.
- **Cards:** No shadows. Use a subtle gradient (top-left to bottom-right) from `#111` to `#000`. Content inside should have significant breathing room.
- **Chips/Badges:** Small, rectangular, and high-contrast. Use for "Elite Level" or "Fully Booked" status.
- **Progress Bars:** Thin, gold tracks against black backgrounds. No rounded ends—keep them perfectly rectangular.
- **Data Visualization:** Use thin line weights for graphs. Charts should use a gold stroke with a faint gold gradient fill underneath.