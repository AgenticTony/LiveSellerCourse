# Industrial Warehouse - Design System

## Brand Philosophy
*"Learn where the work happens"*

The LiveSellerBootcamp brand embodies authenticity, grit, and hands-on expertise. This design system captures the essence of a working warehouse transformed into a premium training environment: industrial rawness meets conversion-focused clarity.

---

## Color Palette

### Surface Colors (Dark Industrial Base)
```css
--surface-base: #0A0A0A;          /* Page background - deep black */
--surface-card: #111111;          /* Card backgrounds - soft black */
--surface-raised: #1A1A1A;        /* Elevated elements - lifted black */
--surface-border: #2A2A2A;        /* Borders & dividers - dark grey */
```

### Brand Colors (Industrial Orange)
```css
--brand-orange: #D97706;          /* Primary CTA - warehouse orange */
--brand-amber: #F59E0B;           /* Hover states - bright amber */
--brand-rust: #92400E;            /* Accents - deep rust */
```

### Text Colors
```css
--text-primary: #F5F5F5;          /* Main text - off-white */
--text-secondary: #A3A3A3;        /* Secondary text - muted grey */
--text-muted: #525252;            /* Disabled/labels - dark grey */
```

### Semantic Colors
```css
--color-success: #10B981;         /* Emerald - available spots */
--color-warning: #F59E0B;         /* Amber - limited spots */
--color-error: #EF4444;           /* Red - sold out */
```

---

## Typography

### Font Families
```css
/* Display/Headlines - Industrial Signage */
--font-display: 'Bebas Neue', Impact, sans-serif;
/* Usage: All headlines, numbers, CTAs */
/* Style: Uppercase, letter-spacing 0.02em */

/* Body/Interface - Clean Readability */
--font-body: 'DM Sans', -apple-system, sans-serif;
/* Usage: Body copy, descriptions */
/* Style: Normal case, readable on dark backgrounds */

/* Mono - Labels & Data */
--font-mono: 'DM Mono', 'SF Mono', monospace;
/* Usage: Prices, dates, stats, badges */
/* Style: Uppercase for labels, normal for data */
```

### Type Scale
```css
--text-xs: clamp(0.625rem, 0.5rem + 0.25vw, 0.75rem);    /* 10-12px */
--text-sm: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);    /* 12-14px */
--text-base: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);    /* 14-16px */
--text-lg: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* 16-18px */
--text-xl: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);     /* 18-20px */
--text-2xl: clamp(1.25rem, 1rem + 1.25vw, 1.75rem);      /* 20-28px */
--text-3xl: clamp(1.75rem, 1.25rem + 2.5vw, 3rem);       /* 28-48px */
--text-4xl: clamp(2.5rem, 1.5rem + 5vw, 5rem);           /* 40-80px */
--text-hero: clamp(3rem, 2rem + 7.5vw, 8rem);            /* 48-128px */
```

### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
```

### Letter Spacing
```css
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
--tracking-wider: 0.1em;
--tracking-widest: 0.2em;
```

---

## Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 5rem;     /* 80px */
--space-16: 8rem;     /* 128px */
--space-20: 10rem;    /* 160px */
```

---

## Layout

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-prose: 720px;  /* Optimal reading width */
```

### Grid
```css
--grid-gap: var(--space-6);
--grid-columns: 12;
```

### Border Radius
```css
--radius-none: 0;         /* Industrial - no rounded corners */
--radius-sm: 2px;         /* Minimal rounding */
--radius-md: 4px;         /* Buttons, inputs */
--radius-lg: 8px;         /* Badges */
```

---

## Visual Effects

### Gradients
```css
/* Glow effect for CTAs */
--gradient-glow: radial-gradient(ellipse at center, rgba(217, 119, 6, 0.15) 0%, transparent 70%);

/* Dark surface gradient */
--gradient-dark: linear-gradient(180deg, var(--surface-base) 0%, var(--surface-card) 100%);

/* Accent gradient for borders */
--gradient-accent: linear-gradient(90deg, var(--brand-rust) 0%, var(--brand-orange) 50%, var(--brand-amber) 100%);
```

### Shadows
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
--shadow-glow: 0 0 60px -12px var(--brand-orange);
--shadow-glow-subtle: 0 0 40px -8px rgba(217, 119, 6, 0.3);
```

### Textures
```css
/* Noise overlay for depth */
.noise-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
  pointer-events: none;
}

/* Grid pattern for sections */
.grid-pattern {
  background-image:
    linear-gradient(rgba(42, 42, 42, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(42, 42, 42, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

## Motion

### Timing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
```

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Animation Presets
```css
/* Fade up on scroll - primary reveal */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered children */
.stagger-children > * {
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }

/* Pulse glow for CTAs */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px -5px var(--brand-orange); }
  50% { box-shadow: 0 0 40px -5px var(--brand-orange); }
}
```

---

## Components

### Buttons
```css
/* Primary Button - Orange CTA */
.btn-primary {
  background: var(--brand-orange);
  color: var(--surface-base);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  transition: all var(--duration-normal) var(--ease-out-quart);
}

.btn-primary:hover {
  background: var(--brand-amber);
  box-shadow: var(--shadow-glow-subtle);
  transform: translateY(-2px);
}

/* Secondary Button - Dark Surface */
.btn-secondary {
  background: var(--surface-raised);
  color: var(--text-primary);
  border: 1px solid var(--surface-border);
  /* ... similar styles */
}

.btn-secondary:hover {
  border-color: var(--brand-rust);
  background: var(--surface-card);
}

/* Outline Button - Orange Border */
.btn-outline {
  background: transparent;
  color: var(--brand-orange);
  border: 2px solid var(--brand-orange);
}

.btn-outline:hover {
  background: var(--brand-orange);
  color: var(--surface-base);
}
```

### Cards
```css
.card {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  position: relative;
  overflow: hidden;
  transition: all var(--duration-slow) var(--ease-out-expo);
}

.card:hover {
  border-color: var(--brand-rust);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--brand-rust), transparent);
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1.5);
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  border: 1px solid;
}

.badge-orange {
  background: rgba(217, 119, 6, 0.1);
  color: var(--brand-orange);
  border-color: rgba(217, 119, 6, 0.3);
}
```

### Navigation
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  transition: all var(--duration-normal);
}

.nav.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--surface-border);
}
```

---

## Page Structure

### Hero Section
- Full viewport height minimum
- Bold industrial typography (Bebas Neue)
- Central glow effect
- Grid pattern overlay
- Stats row with key numbers
- Scroll indicator

### Content Sections
- Alternating backgrounds (base/card)
- Section headers with mono labels
- Staggered reveal animations
- Industrial borders with top gradient

### Pricing Section
- Prominent price display
- Feature checkmarks
- Dual CTA buttons
- Payment note

### Final CTA
- Gradient background
- Large typography
- Trust indicators
- Dual action buttons

---

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Mobile Adaptations
- Stack buttons vertically
- Full-width cards
- Reduced typography scale
- Simplified navigation (hamburger)
- Touch-friendly tap targets (44px minimum)

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Focus states: visible ring with brand orange
- Motion preferences respected via `prefers-reduced-motion`
- All interactive elements keyboard accessible
- Skip links for screen readers
- Semantic HTML structure

---

## Image Treatment

- Subtle grain overlay for consistency
- Placeholder states with icon + label
- Lazy loading with fade-in animation
- Alt text required for all images
- Warehouse photography preferred (authentic)

---

## Micro-interactions

1. **Button Hover**: Color shift + subtle lift + glow
2. **Card Hover**: Border color change + subtle glow overlay
3. **Link Underline**: Animated underline reveal (left to right)
4. **Badge Pulse**: Pulse dot for live/limited indicators
5. **Scroll Reveal**: Staggered fade-up animations
6. **Navigation**: Background blur on scroll
7. **Form Focus**: Orange ring with offset

---

## Signature Moments

1. **Hero**: Massive typography with central glow and grid pattern
2. **Bootcamp Overview**: Three-column day cards with gradient borders
3. **Warehouse Section**: Image + content split with floating stats card
4. **Launch Kit**: Highlighted card with checkmark list
5. **Dates Grid**: Month cards with availability badges
6. **Final CTA**: Full-width gradient with trust indicators

---

## Copy Guidelines

### Tone
- Direct and confident
- Industrial but not aggressive
- Premium but accessible
- Action-oriented

### Typography in Copy
- Headlines: Always uppercase, Bebas Neue
- Body: Sentence case, DM Sans
- Labels: Uppercase, DM Mono
- Numbers: Bebas Neue for emphasis

### CTA Copy
- Primary: "Apply Now", "Secure Your Spot"
- Secondary: "View Course", "Learn More"
- Urgent: "Limited Spots", "Starting Soon"
