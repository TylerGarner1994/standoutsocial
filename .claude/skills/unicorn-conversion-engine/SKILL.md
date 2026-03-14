---
name: unicorn-conversion-engine
description: >
  The core landing page creation engine. Use when asked to create, build, or generate a landing page,
  sales page, advertorial, listicle, VSL page, or quiz funnel. Orchestrates the full 5-phase pipeline:
  Campaign State → Discovery & Research → Psychology-Driven Copy → Expert Review Panel → Production.
  CRITICAL: Phase 0 builds a full campaign-state document BEFORE any creative work begins.
  Ensures every page scores 90+ from the 10-expert review panel before shipping.
  Trigger phrases: "new landing page", "build a page", "create a page", "new advertorial",
  "new listicle", "new VSL", "new sales page", "new quiz", "UCE", "run the engine".
metadata:
  author: standout-social
  version: '2.0'
---

# Unicorn Conversion Engine (UCE) v2

The UCE is the complete system for creating world-class, psychology-driven landing pages. The secret to output quality is Phase 0: building a comprehensive Campaign State document BEFORE touching any HTML. Every creative decision flows from this research foundation.

## When to Use This Skill

Use this skill when:
- Creating a new landing page for any client
- Building an advertorial, listicle, VSL, sales page, or quiz funnel
- The user says "run UCE", "new page", "build a landing page", or similar
- Any request that involves creating conversion-focused web content from scratch

## Prerequisites

Before starting:
1. Have at minimum: an offer URL or description, and brand materials (logo/website/screenshots)
2. Know the CTA destination (where buttons should link)

## Available Templates

| Template | File | Best For |
|----------|------|----------|
| Advertorial | `_templates/advertorial.html` | Native ads, editorial sales copy, article format |
| Listicle | `_templates/listicle.html` | "X Reasons Why..." numbered sections, stats, quotes |
| VSL | `_templates/vsl.html` | Video sales letters with trust stats |
| Sales Page | `_templates/simple-sales.html` | Direct offers, features grid, pricing card |
| Quiz | *(built custom per client)* | Interactive quiz with personalized results |

## Design System

**ALWAYS** read `_templates/DESIGN-SYSTEM.md` before starting any page. Choose the appropriate aesthetic direction based on the client's brand. Never default to a single look.

---

## Phase 0: Campaign State Document (THE CRITICAL STEP)

**This is the #1 quality driver.** Before writing a single line of HTML, build the campaign state document at `memory/clients/{client}.md` using the template at `memory/clients/_template.md`.

### 0.1 Why This Matters
The campaign state is a 30-50+ page strategic brief that Claude reads before generating any creative. It contains everything needed to make every decision — from headline copy to color choices to image generation prompts. Without it, output is generic. With it, output is targeted and high-converting.

### 0.2 Build the Campaign State

Use the template at `memory/clients/_template.md` and fill in EVERY section:

**Brand Style Guide:**
1. WebFetch the client's website
2. Run `brand-extraction` skill OR manually extract all colors, fonts, logo, shape language
3. Rate brand personality (Energy, Sophistication, Approachability, Boldness)
4. **Write the Image Generation Brand Injection String** — this is a precise block of text that gets prepended to EVERY image generation prompt. Include: color system with hex codes, typography rules, shape language, photography style, aesthetic direction, and DO NOT list.

**Business Intelligence:**
1. Extract all product/service details (SKUs, prices, features, ingredients)
2. Research competitive landscape (4-6 competitors with prices and differentiators)
3. Identify market context and trends
4. Find the **Critical Creative Insight** — the one psychological truth that drives the campaign
5. List 3+ underutilized creative angles

**Campaign Personas (3-5 per campaign):**

For EACH persona, research and document ALL of the following:

| Section | What to Include |
|---------|----------------|
| Core Identity | Demographics, psychographics, values, beliefs, aspirations, fears, identity |
| Awareness Level | Eugene Schwartz level (L1-L5), justification, movement triggers |
| Pain Points (3-4) | Surface complaint, underlying issue, emotional root, visual direction for image gen |
| Desires (2-3) | Stated want, actual want, deepest desire, visual direction |
| Cognitive Bias Profile | Top 5 biases ranked with "why it works" and "visual application" columns |
| Bias Stack | Which 3 biases to combine for maximum impact |
| Objections (3+) | What they say, what they mean, how to counter, visual counter |
| Decision Style | Type, timeline, influencers, trust builders, deal breakers |
| Language Patterns | Exact phrases they use, words that resonate, words that repel, tone preference |
| Visual Specs | Age appearance, clothing, grooming, expression, body language, environment, props, lighting |
| Summary Card | 3-4 sentence synthesis |

**Quick Reference Matrix:**
Create a comparison table of all personas showing: awareness level, top 3 biases, decision style, key pain, key desire.

### 0.3 Save and Reference
Save the completed campaign state to `memory/clients/{client}.md`. This file will be loaded at the start of every future session for this client.

---

## Phase 1: Discovery & Research

### 1.1 Analyze the Offer
- **WebFetch** the offer URL to understand current positioning
- Extract key offer elements: price, deliverables, guarantees, bonuses
- Identify the core transformation/outcome promise
- Note any urgency elements or scarcity
- Add findings to the campaign state document

### 1.2 Brand Extraction
Run the `brand-extraction` skill OR manually extract:
- **Primary colors** (hex codes with RGB and usage notes)
- **Secondary/accent colors** (with specific usage contexts)
- **Typography** (heading font, body font, weights, cases, tracking)
- **Logo** (download to assets folder)
- **Brand voice** (formal, casual, authoritative, friendly)
- **Shape language** (rounded, sharp, geometric, organic)
- **Photography style** (studio, lifestyle, editorial, product-focused)
- Write the complete Brand Injection String for image generation
- Save EVERYTHING to `memory/clients/{client}.md`

### 1.3 ICP Deep Dive → Persona Development
This is NOT a quick research pass. Build full personas per Phase 0 specifications.

Research sources:
- Client's existing customer reviews (Amazon, Trustpilot, G2, app stores)
- Reddit/forum discussions in the niche
- Competitor reviews (what do people complain about?)
- Social media comments on competitor ads
- Voice-of-customer language patterns

### 1.4 Design Direction
Read `_templates/DESIGN-SYSTEM.md` and select the aesthetic direction:

| Brand Type | Recommended Direction |
|------------|---------------------|
| Health/wellness/supplements | Editorial Magazine or Warm Wellness |
| SaaS/tech/B2B | Clean Corporate or Dark Premium |
| E-commerce/DTC/consumer | Bold DTC |
| High-ticket/luxury/consulting | Dark Premium or Editorial Magazine |
| Professional services | Clean Corporate |

**Typography pairing is critical** — select a specific serif + sans-serif combination. Never use a single font for everything.

### 1.5 Trend Research
WebSearch for current best practices:
- "landing page design trends {current_year}"
- "highest converting sales page examples {current_year}"
- "CRO best practices {current_year}"
- "above the fold optimization {current_year}"

---

## Phase 2: Psychology-Driven Copy Creation

Select the appropriate template from `_templates/` and build the page.

**IMPORTANT:** Reference the campaign state document throughout this phase. Every headline, section, and CTA should map to a specific persona, awareness level, and cognitive bias stack.

### 2.1 Choose the Target Persona Path
Decide which persona (or personas) this page targets. The awareness level determines the page structure:

| Awareness Level | Page Strategy |
|-----------------|---------------|
| Problem Aware (L2) | Lead with symptom recognition → educate about cause → introduce solution |
| Solution Aware (L3) | Lead with differentiation → proof → overcome skepticism |
| Product Aware (L4) | Lead with offer → social proof → urgency → close |
| Most Aware (L5) | Lead with offer/deal → remove final objections → close fast |

### 2.2 System 1 Triggers (Emotional / Intuitive / Fast)

| Trigger | How to Implement |
|---------|-----------------|
| **Visual hierarchy** | Hero section, color contrast, strategic whitespace |
| **Social proof** | Testimonials, logos, numbers ("10,000+ customers") |
| **Authority** | Expert endorsements, credentials, media logos, certifications |
| **Scarcity** | Limited spots, countdown timers (use ONLY if authentic — never fake) |
| **Reciprocity** | Free value upfront (guides, tools, bonuses before the ask) |
| **Liking** | Relatable founder stories, behind-the-scenes, brand personality |

### 2.3 System 2 Triggers (Rational / Analytical / Slow)

| Trigger | How to Implement |
|---------|-----------------|
| **ROI calculation** | "Pays for itself in X days", cost-per-day breakdown |
| **Feature comparison** | vs. alternatives, vs. doing nothing, vs. status quo |
| **Risk reversal** | Money-back guarantees, free trials, "nothing to lose" |
| **Specificity** | Exact numbers, timeframes, deliverables — never vague |
| **Logic flow** | Problem → Agitate → Solution → Proof → CTA |
| **Objection handling** | FAQ section, preemptive rebuttals woven into copy |

### 2.4 Neuromarketing Principles

**Attention Capture:**
- Pattern interrupts in first 3 seconds (unexpected stat, bold claim, provocative question)
- Color contrast and psychology
- Faces with eye direction pointing toward CTA
- Subtle, purposeful animation

**Memory Anchoring:**
- Rule of 3 (three key benefits, three testimonials, three steps)
- Concrete language over abstract ("$47/month" not "affordable")
- Repetition of core promise at least 3x on page

**Decision Architecture:**
- Reduce cognitive load (fewer choices = more conversions)
- Loss aversion framing (2x more powerful than gains)
- Price anchoring (show higher reference point before real price)

### 2.5 NLP Language Patterns

Weave these throughout the copy naturally:

| Pattern | Example | Purpose |
|---------|---------|---------|
| **Presuppositions** | "When you start seeing results..." | Assumes the outcome is inevitable |
| **Embedded commands** | "Imagine yourself already achieving..." | Plants action in subconscious |
| **Future pacing** | "Picture yourself 30 days from now..." | Creates mental ownership |
| **Sensory language** | "Feel the confidence... see the results..." | Engages multiple processing modes |
| **Cause-effect** | "Because you're reading this, you already know..." | Creates logical inevitability |
| **Mind reading** | "You're probably wondering if this will work..." | Builds rapport through empathy |

### 2.6 Behavioral Economics

| Principle | Implementation |
|-----------|---------------|
| **Anchoring** | Show original/competitor price before the actual price |
| **Loss aversion** | Frame what they LOSE by not acting |
| **Endowment effect** | "Your transformation is waiting" — make it feel already theirs |
| **Commitment/consistency** | Small yes before big yes (quiz, email capture) |
| **Peak-end rule** | Strong opening hook + powerful closing CTA |

### 2.7 Advertorial-Specific Elements (if building an advertorial)

Every advertorial MUST have:
- **Publication header** — fake publication name with nav links (not the client's name)
- **Category badge** — "Brand Investigation", "Product Review", "Health Report", etc.
- **Author byline** — fake author name + credible title + date + read time
- **Trust badge** — "Independent Review", "Verified Analysis", etc.
- **Narrow content width** — 720px max for body text (readability)
- **Serif headlines** — gives editorial magazine feel
- **Sponsored content disclaimer** in footer

---

## Phase 3: Expert Review Panel

**CRITICAL: Every page must pass through the expert-review-panel skill before deployment.**

Run the `expert-review-panel` skill on the completed page:
- All 10 experts evaluate and score
- Must achieve 90+ average across all experts
- If below 90: compile feedback, fix lowest-scoring dimensions, re-run review
- Iterate until 90+ is achieved — never ship below threshold

See the `expert-review-panel` skill for full scoring criteria and expert profiles.

---

## Phase 4: Production & Deployment

### 4.1 Asset Organization

```
/{client-name}/
├── {page-type}/
│   ├── index.html          # Main page (self-contained)
│   └── assets/
│       ├── images/
│       │   ├── hero.jpg
│       │   ├── logo.png
│       │   └── product-1.jpg
│       └── refs/            # Reference images (originals)
├── assets/                  # Client-level shared assets
│   ├── ads/                 # Ad creatives (if generated)
│   ├── images/              # Shared images
│   └── refs/                # Reference images
```

### 4.2 Technical QA Checklist

**Content:**
- [ ] No placeholder content (search for "Lorem", "TODO", "{{", "placeholder", "example.com")
- [ ] All headlines are final copy
- [ ] All testimonials properly attributed ("Verified Buyer" pattern — no fake names/ages)
- [ ] Disclaimer footer present for advertorials
- [ ] CTA links point to correct destination (not "#")
- [ ] No em dashes in copy

**Technical:**
- [ ] Mobile viewport meta tag present
- [ ] Descriptive `<title>` tag
- [ ] `<meta name="description">` set
- [ ] OG meta tags set (og:title, og:description, og:image)
- [ ] ALL CSS inline (no external stylesheet links except Google Fonts)
- [ ] ALL JS inline (no external script links)
- [ ] All external URLs use https
- [ ] All images have alt attributes

**Visual Design (check against DESIGN-SYSTEM.md):**
- [ ] Font pairing is intentional (serif + sans-serif for advertorials)
- [ ] Color palette has 8+ CSS variables defined
- [ ] Sections alternate visual weight
- [ ] Whitespace is generous (80px+ between sections on desktop)
- [ ] CTA buttons have hover state
- [ ] Trust signals present (review count, badges, media logos)
- [ ] Scroll progress bar for long-form pages
- [ ] Reading experience: 720px max content width, 18px body, 1.8 line height

**Performance:**
- [ ] Images optimized (WebP where possible)
- [ ] Page weight under 500KB (excluding large images)

**Responsive:**
- [ ] Tested at 375px (mobile)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1024px (desktop)
- [ ] Tested at 1440px (large desktop)
- [ ] No horizontal scrollbar at any breakpoint

### 4.3 Deploy

1. Create directory at repo root: `{client-name}/` or `{client-name}/{page-type}/`
2. Place `index.html` and `assets/` folder
3. Create branch: `claude/{client-name}-{page-type}`
4. Commit with message describing the work and expert panel score
5. Push to remote — auto-merge workflow handles deployment
6. Verify live URL works
7. Report live URL + local preview path to user
8. **Update the campaign state** — log the session, add page to "Previously Generated Content"

### 4.4 Deliverables

Provide to user:
1. **Live URL** — the GitHub Pages URL
2. **Local preview** — file:/// path for Chrome DevTools
3. **Expert scores** — summary table of panel feedback
4. **Campaign state** — confirm it's been updated

---

## Technical Standards

All pages must follow these rules:
- **Self-contained single HTML file** — inline CSS + inline JS (Google Fonts link OK)
- **No external frameworks** — no Bootstrap, Tailwind, React, jQuery
- **No tracking pixels** — client adds their own analytics
- **Vanilla JS only** — IntersectionObserver for scroll effects, sticky CTAs, counter animations
- **CSS custom properties** for theming (easy brand color swaps)
- **Mobile-first responsive** — design for 375px first, scale up

---

## Quick Start

To trigger the full UCE pipeline, provide:
1. Offer URL (or detailed description)
2. Brand materials (logo, website URL, or screenshots)
3. CTA destination (where buttons should link)
4. Any existing assets (images, testimonials in a folder)

Example:
```
Create a landing page for https://example.com/offer
Brand assets are in the /client-name/ folder.
CTA should go to https://example.com/checkout.
Page type: advertorial.
```

The engine will build the campaign state, execute all phases autonomously, iterate until 90+ expert score, and deploy to production.
