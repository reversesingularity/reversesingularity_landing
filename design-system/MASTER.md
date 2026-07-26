# Reverse Singularity — Master Design System

> **Source of Truth** for all UI decisions across the React redesign.
> Stack: React 18 · Tailwind CSS v3 · Motion for React v12 · Vite

---

## 1. Brand Identity

**Brand Name:** Reverse Singularity  
**Tagline:** Engineering the Frontier of Scientific Simulation  
**Tone:** Precise. Ambitious. Quietly powerful. Lab-coat intelligence with an astronaut's nerve.  
**Keywords:** `technology` · `futuristic` · `dark-mode` · `glassmorphism` · `content-first`

The brand sits at the intersection of hard science and interactive storytelling. Every design
decision should feel like it belongs on an advanced mission control terminal — functional first,
beautiful second.

---

## 2. Color System

### CSS Custom Properties (in `index.css`)

```css
:root {
  /* Backgrounds */
  --color-void:        #02020a;   /* Page background — near-black void */
  --color-surface:     rgba(255, 255, 255, 0.03); /* Glass panel fill */
  --color-surface-md:  rgba(255, 255, 255, 0.06); /* Elevated glass */
  --color-surface-hi:  rgba(255, 255, 255, 0.10); /* Hover glass */

  /* Borders */
  --color-border:      rgba(255, 255, 255, 0.08);
  --color-border-glow: rgba(0, 212, 255, 0.30);

  /* Accent Palette */
  --color-cyan:        #00d4ff;   /* Primary accent — electric cyan */
  --color-cyan-dim:    rgba(0, 212, 255, 0.15);
  --color-cyan-glow:   rgba(0, 212, 255, 0.40);
  --color-purple:      #7b2fff;   /* Secondary — deep space purple */
  --color-purple-dim:  rgba(123, 47, 255, 0.15);
  --color-orange:      #ff6b35;   /* Mars orange */
  --color-green:       #00ff88;   /* Systems online green */
  --color-amber:       #ffa502;   /* Falcon amber */

  /* Typography */
  --color-text:        #e0e0e0;
  --color-text-muted:  #888888;
  --color-text-faint:  #444444;
}
```

### Tailwind Palette Extension (`tailwind.config.js`)

```js
colors: {
  void:    '#02020a',
  cyan:    { DEFAULT: '#00d4ff', dim: 'rgba(0,212,255,0.15)', glow: 'rgba(0,212,255,0.40)' },
  purple:  { DEFAULT: '#7b2fff', dim: 'rgba(123,47,255,0.15)' },
  orange:  '#ff6b35',
  green:   '#00ff88',
  amber:   '#ffa502',
  text:    { DEFAULT: '#e0e0e0', muted: '#888888', faint: '#444444' },
  glass: {
    low:   'rgba(255,255,255,0.03)',
    mid:   'rgba(255,255,255,0.06)',
    high:  'rgba(255,255,255,0.10)',
    border:'rgba(255,255,255,0.08)',
  },
}
```

### Contrast Ratios (WCAG AA — minimum 4.5:1 for body text)

| Foreground        | Background  | Ratio  | Pass? |
|-------------------|-------------|--------|-------|
| `#e0e0e0` (text)  | `#02020a`   | 12.8:1 | ✅ AAA |
| `#00d4ff` (cyan)  | `#02020a`   | 8.4:1  | ✅ AAA |
| `#888888` (muted) | `#02020a`   | 4.9:1  | ✅ AA  |
| White on glass panel | `#02020a` | 11.5:1 | ✅ AAA |

> **Rule:** Never place muted text (`#888`) on glass panels — the compounded opacity
> can drop contrast below 4.5:1. Test with the panel's effective blended color.

---

## 3. Typography

### Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;   /* body / UI */
font-family: 'Space Mono', 'Courier New', monospace;                  /* labels / code / badges */
```

### Type Scale

| Token       | Size (clamp)               | Weight | Leading | Use                    |
|-------------|----------------------------|--------|---------|------------------------|
| `display`   | clamp(52px, 10vw, 110px)   | 700    | 0.95    | Hero headline          |
| `h1`        | clamp(36px, 5vw, 56px)     | 700    | 1.1     | Section heroes         |
| `h2`        | 32px                       | 700    | 1.2     | Section headers        |
| `h3`        | 20px                       | 700    | 1.3     | Card titles            |
| `body-lg`   | 18px                       | 400    | 1.6     | Hero subheadline       |
| `body`      | 15px                       | 400    | 1.6     | Card descriptions      |
| `label`     | 11–12px · Mono             | 400/700| —       | Badges, tags, eyebrows |
| `micro`     | 10px · Mono                | 400    | —       | Status indicators      |

### Letter Spacing Tokens

```
display:    -2px    (tight — monumental)
h2:         -0.5px  (slightly tight)
label:      +2–4px  (expanded — legible at small size)
eyebrow:    +4px    (maximum airy)
```

---

## 4. Spacing Scale

Base unit: **8px**

| Token | Value | Tailwind |
|-------|-------|----------|
| xs    | 4px   | `p-1`    |
| sm    | 8px   | `p-2`    |
| md    | 16px  | `p-4`    |
| lg    | 24px  | `p-6`    |
| xl    | 32px  | `p-8`    |
| 2xl   | 48px  | `p-12`   |
| 3xl   | 64px  | `p-16`   |
| 4xl   | 80px  | `p-20`   |
| 5xl   | 96px  | `p-24`   |

Section padding: `py-20 px-6` (mobile) → `py-24 px-12` (desktop)  
Max content width: `1200px` → Tailwind `max-w-[1200px] mx-auto`

---

## 5. Glassmorphism Specification

The core visual language. Every panel is a **glass slab** floating above the void.

### Panel Recipe

```css
.glass-panel {
  background:      rgba(255, 255, 255, 0.03);
  border:          1px solid rgba(255, 255, 255, 0.08);
  border-radius:   16px;
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
}
```

### Elevation Levels

| Level    | Background opacity | Border             | Blur  | Use            |
|----------|--------------------|--------------------|-------|----------------|
| Ground   | 0.03               | 0.08 white         | 8px   | Cards at rest  |
| Lifted   | 0.06               | 0.12 white         | 12px  | Cards on hover |
| Floating | 0.10               | 0.20 white / accent| 16px  | Nav, modals    |

### Accent Glow Recipe (per project color)

```css
/* Applied on hover — example for cyan */
box-shadow: 0 12px 40px rgba(0, 212, 255, 0.12),
            0 0 0 1px rgba(0, 212, 255, 0.30);
```

### Gradient Text Recipe

```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-cyan), var(--color-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 6. Motion System

### Philosophy

Motion serves information — it reveals hierarchy, confirms interactions, and guides
attention. It should never perform for its own sake. Every animation must be purposeful.

### Motion Library

```
Package:    motion
Import:     import { motion, AnimatePresence, useReducedMotion } from "motion/react"
Version:    ^12.x
```

### Reduced Motion

**MANDATORY** — wrap all animations with `useReducedMotion()`:

```tsx
const prefersReducedMotion = useReducedMotion()

const variants = {
  hidden:  { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0 },
}
```

### Duration Tokens

| Token     | Value  | Use                          |
|-----------|--------|------------------------------|
| `instant` | 100ms  | State flicker, micro-feedback|
| `fast`    | 200ms  | Button hover, color change   |
| `medium`  | 400ms  | Card entrance, panel slide   |
| `slow`    | 600ms  | Hero entrance                |
| `crawl`   | 800ms  | Page-level transitions       |

### Easing Tokens

```js
const ease = {
  out:     [0.0, 0.0, 0.2, 1],      // Decelerate — most entrances
  in:      [0.4, 0.0, 1.0, 1],      // Accelerate — exits
  inOut:   [0.4, 0.0, 0.2, 1],      // Both — slow deliberate moves
  spring:  { type: 'spring', stiffness: 300, damping: 30 }, // Tactile press
  bounce:  { type: 'spring', stiffness: 400, damping: 20 }, // Card bounce
}
```

### Canonical Animation Variants

```tsx
// Hero entrance (staggered children)
export const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
export const heroChild = (reduced: boolean) => ({
  hidden:  { opacity: 0, y: reduced ? 0 : 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0,0,0.2,1] } },
})

// Card scroll reveal
export const cardReveal = (reduced: boolean) => ({
  hidden:  { opacity: 0, y: reduced ? 0 : 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0,0,0.2,1] } },
})

// Stagger container for card grids
export const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// Interactive press
export const pressFeedback = (reduced: boolean) => ({
  whileHover: reduced ? {} : { scale: 1.02, y: -3 },
  whileTap:   reduced ? {} : { scale: 0.98 },
})
```

### AnimatePresence Usage

Always wrap conditionally rendered UI in `<AnimatePresence mode="wait">`.
Exit variant must mirror the entry variant (e.g., fade-out + slide-down).

---

## 7. Component Design Tokens

### Navigation Bar

- Height: `64px` (fixed)
- Background: `rgba(2,2,10,0.85)` + `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid rgba(255,255,255,0.08)`
- Logo: Space Mono · 14px · 700 · letterspacing 3px · `#00d4ff`
- Links: Space Grotesk · 13px · 500 · uppercase · letterspacing 1px · `#888` → `#00d4ff` on hover
- Status badge: Space Mono · 11px · `#00ff88` · border `rgba(0,255,136,0.3)` · border-radius 20px

### Hero Section

- Min-height: `100vh`
- Padding-top: `120px` (clears nav)
- Eyebrow: Space Mono · 11px · letterspacing 4px · `#00d4ff` · opacity 0.8
- Headline: Display scale · dual-line gradient
  - Line 1: white → `rgba(255,255,255,0.5)` diagonal gradient
  - Line 2: `#00d4ff` → `#7b2fff` diagonal gradient + drop-shadow glow
- Subheadline: 18px · `#888`
- CTA primary: `linear-gradient(135deg, #00d4ff, #7b2fff)` · border-radius 8px · 14px/600
- CTA ghost: border `rgba(255,255,255,0.08)` → `#00d4ff` on hover · border-radius 8px
- Stats row: Space Mono · 36px · `#00d4ff` · stacked label `#888` 12px uppercase

### Feature / Project Cards

- Grid: `repeat(auto-fill, minmax(340px, 1fr))` · gap 24px
- Padding: `32px`
- Border-radius: `16px`
- State: rest → lifted on hover (glass elevation 0→1)
- Icon badge: `52×52` · border-radius 12px · accent-tinted glass
- Status chip: Space Mono · 10px · `LIVE` green / `COMING SOON` purple
- Arrow: translate(4px, -4px) on card hover
- Disabled (future) state: `opacity: 0.45`

### Footer

- Border-top: `1px solid rgba(255,255,255,0.08)`
- Padding: `48px 24px`
- Logo: Space Mono · 13px · `#00d4ff` · opacity 0.6
- Copyright: 12px · `#333`

---

## 8. Iconography & Decorative Elements

- **Emoji icons** inside tinted glass badges — consistent with existing brand
- **Starfield canvas** — 180 stars, twinkle opacity variation via sin wave
- **Neural network overlay** — 28 nodes, connected at <200px distance, `rgba(0,212,255,0.12)` lines
- **Scan line** — 2px horizontal beam, cyan gradient, infinite scroll animation
- **Radial vignette** — `rgba(2,2,10,0.6)` from center outward, baked into canvas

### Decorative Gradient Orbs (new in redesign)

Two large blurred orbs behind the hero:
```css
.orb-cyan   { background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
              width: 600px; height: 600px; filter: blur(60px); }
.orb-purple { background: radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%);
              width: 500px; height: 500px; filter: blur(80px); }
```

---

## 9. Accessibility Rules

| Rule                              | Requirement                                      |
|-----------------------------------|--------------------------------------------------|
| Text contrast                     | ≥4.5:1 (AA) · ≥7:1 (AAA) for body copy          |
| Large text contrast               | ≥3:1 (AA)                                        |
| Touch targets                     | ≥44×44px for all interactive elements            |
| Focus rings                       | `outline: 2px solid #00d4ff; outline-offset: 4px`|
| Icon-only buttons                 | `aria-label` required on every icon button       |
| Reduced motion                    | All transform/opacity animations via `useReducedMotion()` |
| Skip link                         | `<a href="#main">Skip to content</a>` at top of DOM |
| Semantic HTML                     | `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>–<h3>` hierarchy |
| Link text                         | Descriptive — never "click here"                 |
| Color as only differentiator      | Always pair color with text or icon              |

---

## 10. Performance Rules

| Rule                              | Requirement                                      |
|-----------------------------------|--------------------------------------------------|
| No CLS from animations            | Never animate `width`, `height`, or `top/left` — use `transform` only |
| Font loading                      | `font-display: swap` · preconnect to fonts.googleapis.com |
| Canvas                            | `requestAnimationFrame` loop — no `setInterval` |
| Image assets                      | WebP + lazy loading + explicit `width`/`height` |
| Bundle                            | Code-split by route; Motion tree-shakes on import |
| Backdrop filter fallback          | `@supports not (backdrop-filter: blur())` — solid fallback background |

---

## 11. File & Component Architecture

```
src/
  components/
    layout/
      Navbar.tsx          — Fixed top nav with logo, links, status badge
      Footer.tsx          — Minimalist footer
    sections/
      Hero.tsx            — Full-viewport hero with starfield + CTAs
      ProjectsGrid.tsx    — 3-column responsive card grid
    ui/
      GlassCard.tsx       — Base glass panel primitive
      Button.tsx          — Primary / Ghost / Icon button variants
      Badge.tsx           — Status chip (Live / Coming Soon)
      GradientText.tsx    — Gradient text wrapper
  lib/
    motionVariants.ts     — All canonical animation variants (Section 6)
  styles/
    index.css             — CSS custom properties + Tailwind base
  App.tsx
  main.tsx
```

---

## 12. Project-Color Map

Each simulation project has a unique accent. Use these for card borders, icons, and glows:

| Project              | Primary Token  | Hex       |
|----------------------|----------------|-----------|
| Nuclear Fission      | `cyan`         | `#00d4ff` |
| DE&I PMO             | `cyan`         | `#00d4ff` |
| Mars Rover           | `orange`       | `#ff6b35` |
| LEO Orbital Capacity | `orange`       | `#ff6b35` |
| Lunar Rescue (ALRS)  | `green`        | `#00ff88` |
| Orbit Classification | `green`        | `#00ff88` |
| Falcon 9             | `amber`        | `#ffa502` |
| REE Prospectivity    | `amber`        | `#ffa502` |
| Lunar Logistics / BH | `purple`       | `#7b2fff` |
| Future / Unknown     | `purple`       | `#7b2fff` |

---

*Generated for Reverse Singularity — 2026-05-21 · Phase 1 of 4*
