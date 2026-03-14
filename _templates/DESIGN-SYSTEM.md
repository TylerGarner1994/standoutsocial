# Landing Page Design System Reference

This file defines the visual quality standards, typography pairings, and aesthetic directions that every landing page must meet. Reference this when building any page.

---

## AESTHETIC DIRECTIONS

Choose one direction based on the client's brand. Every page should have a clear, intentional aesthetic — never default to generic.

### 1. Editorial Magazine (Best for: Advertorials)
The page should look like a premium online magazine article — NOT a landing page.

**Typography:**
- Headlines: Serif font (Spectral, Playfair Display, Zodiak, Lora)
- Body: Clean sans-serif (Inter, DM Sans, Switzer, Source Sans 3)
- Sizes: H1 at 42-54px, body at 18px, line-height 1.8

**Color Palette:**
```css
--white: #FFFFFF;
--off-white: #FAFAF8;
--cream: #F5F2ED;
--warm-beige: #EDE8E0;
--text-dark: #1A1A1A;
--text-body: #2D2D2D;
--text-secondary: #555555;
--text-muted: #888888;
--border: #E0DBD3;
--accent: #2D4A22;        /* or client brand color */
--gold: #B8962E;          /* for badges/highlights */
--cta-bg: #1A1A1A;
```

**Structural Elements:**
- Publication header with fake publication name + nav categories (Reviews, Performance, Nutrition, etc.)
- "Brand Investigation" or "Sponsored Content" category badge
- Author byline with name, title, date, read time
- "Independent Review" or "Verified Analysis" trust badge
- Narrow content column (max-width: 720px) for readability
- Wider container (1080px) for featured sections
- Subtle warm background gradients (cream → white transitions)
- Fine border separations between sections

**Key CSS Patterns:**
```css
/* Publication header */
.pub-header { border-bottom: 1px solid var(--border); padding: 14px 0; }
.pub-logo { font-family: serif; font-size: 22px; font-weight: 600; letter-spacing: -0.5px; }

/* Article body feel */
.container { max-width: 720px; margin: 0 auto; padding: 0 24px; }
body { font-size: 18px; line-height: 1.8; -webkit-font-smoothing: antialiased; }

/* Warm shadows */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.04);
--shadow-md: 0 4px 20px rgba(0,0,0,0.06);
--shadow-lg: 0 12px 40px rgba(0,0,0,0.08);
```

---

### 2. Dark Premium (Best for: Tech, SaaS, High-ticket)
Sleek dark interface with gold or colored accents. Premium feel.

**Typography:**
- Headlines: Strong sans-serif (Inter, DM Sans) at 700-800 weight
- Body: Same family at 400 weight
- Sizes: H1 at 48-64px, body at 16-18px

**Color Palette:**
```css
--bg-primary: #0A0A0A;
--bg-secondary: #111111;
--bg-tertiary: #1A1A1A;
--accent-primary: #D4A853;    /* Gold */
--accent-secondary: #F5C566;
--text-primary: #FFFFFF;
--text-secondary: #B3B3B3;
--text-muted: #808080;
--border-color: #2A2A2A;
```

**Structural Elements:**
- Full-width dark sections
- Subtle border separations (1px #2A2A2A)
- Gold accent for CTAs, highlights, badges
- Gradient overlays on hero sections
- Scroll progress bar at top

---

### 3. Clean Corporate (Best for: B2B, SaaS, Professional Services)
Light, airy, professional. Trustworthy and modern.

**Typography:**
- Headlines: Clean sans-serif (Inter, DM Sans) at 600-700 weight
- Body: Same family at 400 weight
- Sizes: H1 at 44-56px, body at 16-18px

**Color Palette:**
```css
--cream: #F5F0EB;
--dark: #061B17;
--white: #FFFFFF;
--text: #1a1a1a;
--text-secondary: #4a4a4a;
--text-muted: #8a8580;
--border: #e5e0da;
--green: #10B981;
--green-light: #ecfdf5;
```

**Structural Elements:**
- Sticky navigation with scroll effect
- Logo bar / social proof section
- Comparison tables
- Feature grids
- Problem → Solution narrative flow

---

### 4. Bold DTC (Best for: E-commerce, Supplements, Consumer Products)
High-energy, product-focused, conversion-optimized.

**Typography:**
- Headlines: Bold sans-serif (Montserrat 700-800, DM Sans Bold) UPPERCASE
- Body: Open Sans or Inter at 400
- Sizes: H1 at 36-48px, body at 16-18px

**Color Palette:**
- Use client's exact brand colors
- Always include warm/energetic accent (coral, orange, gold)
- Dark sections for contrast

**Structural Elements:**
- Product hero shots
- Stat counters with animation
- Ingredient/feature breakdowns
- Review/testimonial sections with star ratings
- Sticky CTA bar
- FAQ accordion
- Guarantee badge section
- Media logos / "As Seen In" bar

---

### 5. Warm Wellness (Best for: Health, Beauty, Lifestyle)
Soft, inviting, trustworthy. Editorial feel with warmth.

**Typography:**
- Headlines: Serif (Spectral, Lora) at 500-600 weight
- Body: Sans-serif (Inter, DM Sans) at 400
- Mixed case — sentence case for headlines, not ALL CAPS

**Color Palette:**
```css
--bg: #FAFAF8;
--cream: #F5F2ED;
--warm-tan: #D8CDBE;
--text: #2D2D2D;
--accent: #2D4A22;          /* Forest green */
--accent-light: #EDFFE3;
--gold: #B8962E;
--border: #E0DBD3;
```

---

## UNIVERSAL CSS STANDARDS

Every page must include these patterns:

### Reset
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; overflow-x: hidden; }
```

### Responsive Breakpoints
```css
/* Mobile first, then scale up */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large desktop */ }
```

### Animation Patterns
```css
/* Scroll reveal */
.reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* Counter animation */
.stat-number { font-size: 48px; font-weight: 800; }

/* Fade scale (for interstitials) */
@keyframes fadeScale {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
```

### JavaScript Patterns (vanilla only)
```javascript
// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Sticky CTA (show after hero scrolls past)
const hero = document.querySelector('#hero');
const stickyCta = document.querySelector('.sticky-cta');
if (hero && stickyCta) {
    new IntersectionObserver(([e]) => {
        stickyCta.classList.toggle('visible', !e.isIntersecting);
    }).observe(hero);
}

// Counter animation
function animateCount(el, target, duration = 2000) {
    let start = 0; const step = target / (duration / 16);
    const tick = () => { start += step; if (start >= target) { el.textContent = target.toLocaleString(); return; }
    el.textContent = Math.floor(start).toLocaleString(); requestAnimationFrame(tick); }; tick();
}
```

---

## QUALITY CHECKLIST (Visual Design)

Before any page ships, verify:

- [ ] **Font pairing is intentional** — not just one system font for everything
- [ ] **Color palette has at least 8 defined CSS variables** (not just primary + accent)
- [ ] **Sections alternate visual weight** — light/dark, wide/narrow, text/visual
- [ ] **Whitespace is generous** — minimum 80px between major sections on desktop
- [ ] **CTA buttons have hover state** — darken, lighten, or subtle transform
- [ ] **Testimonials feel real** — "Verified Buyer" pattern, specific language, no fake names
- [ ] **Trust signals present** — at minimum one of: review count, media logos, certification badges
- [ ] **Hero section is compelling** — in the first viewport, visitor knows: what this is, who it's for, what to do next
- [ ] **No generic stock-photo feel** — if using images, they should feel curated and on-brand
- [ ] **Footer has sponsored/disclaimer text** for advertorials
- [ ] **Scroll progress bar** for long-form pages (advertorials, listicles)
- [ ] **Reading experience is pleasant** — 720px max content width, 18px body text, 1.8 line height
