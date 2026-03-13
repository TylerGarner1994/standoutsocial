# Standout Social — Landing Page Factory

## Memory
All memory is in `memory/` at workspace root. Load relevant client profile before starting any client work.

## Session Start Protocol
1. Read `memory/glossary.md` for CSS lessons learned
2. Read `memory/context/` for reusable patterns and technical gotchas
3. If working on a specific client, load `memory/clients/{client}.md`

## Session End Protocol
1. If you learned something reusable (CSS fix, pattern, gotcha), add it to the appropriate memory file
2. Update `memory/clients/{client}.md` if client-specific data was verified

## File Paths & Previewing Files
- **To preview ANY HTML file in Chrome**, use the `mcp__Control_Chrome__open_url` tool with your local file path
- **The workspace folder IS your local folder** - files written there are immediately accessible
- **DO NOT use localhost HTTP servers** - they are unreliable and unnecessary
- Adjust the file:/// path pattern below to match your local setup:
  - Pattern: `file:///YOUR/LOCAL/PATH/TO/REPO/{project}/{file}`

## Client Work Rule
**Before starting work on ANY client folder**, load the client profile: `memory/clients/{client}.md`. The `Work Locations` table maps every folder where that client's work lives. If no profile exists, create one using `memory/clients/_template.md`.

## Preferences
- Expert-level, production-ready outputs — never placeholder quality
- Values CRO, behavioral psychology, neuromarketing in landing pages
- Run the full workflow: brand extraction → copy creation → expert review panel → deploy
- Parallel execution for speed when possible
- No need to ask for approvals once plan is approved
- All pages must be self-contained single HTML files (inline CSS + JS)
- No external frameworks (no Bootstrap, Tailwind, React)
- No tracking pixels or analytics in the HTML — those get added by the client
- Vanilla JS only — IntersectionObserver, scroll effects, sticky CTAs

## Active Projects
| Name | What |
|------|------|
| *(add your first project here)* | Description |

## Terms
| Term | Meaning |
|------|---------|
| UCE | Unicorn Conversion Engine (the full landing page creation workflow) |
| CRO | Conversion Rate Optimization |
| DTC | Direct to Consumer |
| NLP | Neuro-Linguistic Programming (in marketing context, not AI/ML) |
| DR | Direct Response |
| ICP | Ideal Customer Profile |
| VSL | Video Sales Letter |

## Page Types
| Type | Template | Description |
|------|----------|-------------|
| Advertorial | `_templates/advertorial.html` | Native ad, editorial sales copy, article format |
| Listicle | `_templates/listicle.html` | "X Reasons Why..." numbered sections |
| VSL | `_templates/vsl.html` | Video sales letter with trust stats |
| Sales Page | `_templates/simple-sales.html` | Direct offer, features grid, pricing |
| Quiz | *(built custom per client)* | Interactive quiz with personalized results |

## Patterns & Templates
| Pattern | Details |
|---------|---------|
| **Quiz Interstitials** | Always add social proof/fact stat cards between quiz questions (after Q1, Q3, Q5). Auto-dismiss after 2s. See `memory/context/quiz-interstitial-pattern.md` |
| **Sticky CTA** | Appears after hero scrolls out of viewport. Uses IntersectionObserver. |
| **Scroll Reveal** | Elements with `.reveal` class animate in on viewport entry. |
| **Counter Animation** | Stats animate counting up when they enter viewport. |
| **Progress Bar** | Thin bar at top of page showing scroll progress. |

## Color Schemes (Defaults)
| Scheme | Variables | Best For |
|--------|----------|----------|
| Premium (Navy + Gold) | `--bg-dark: #0a0e1a; --accent: #EAA34F` | High-end, luxury positioning |
| Modern (Black + Orange) | `--bg-dark: #0a0a0a; --accent: #ff5722` | Bold, energetic brands |
| Corporate (Navy + Blue) | `--bg-dark: #0f172a; --accent: #3b82f6` | B2B, professional services |
| Growth (Black + Green) | `--bg-dark: #0a0a0a; --accent: #22c55e` | Health, wellness, growth |
| Clean (White + Teal) | `--bg: #fafafa; --accent: #0d9488` | Clean, minimal, modern |
