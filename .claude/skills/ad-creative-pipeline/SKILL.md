---
name: ad-creative-pipeline
description: >
  Generate a full set of Meta (Facebook/Instagram) ad creatives for a client across multiple
  creative styles and persona targets. Uses the campaign state document for brand injection strings,
  persona-specific messaging, awareness-level targeting, and cognitive bias stacking.
  Produces 20-35 ad prompts across 6+ styles with built-in scoring and QA.
  Trigger phrases: "generate ads", "create ad creatives", "make ads", "ad images",
  "Meta ads", "Facebook ads", "Instagram ads", "ad pipeline", "creative batch".
metadata:
  author: standout-social
  version: '2.0'
---

# Ad Creative Pipeline v2

Generate high-performing Meta ad creatives with persona-targeted messaging, cognitive bias stacking, and automated quality scoring.

## When to Use This Skill

Use this skill when:
- A client needs ad creatives for Facebook/Instagram campaigns
- The user asks to "generate ads", "make ad images", or "run the ad pipeline"
- A landing page is deployed and needs accompanying ad creatives
- The user wants to batch-generate multiple ad variants

## Prerequisites

1. A campaign state document MUST exist at `memory/clients/{client}.md`
   - If it doesn't exist, run the UCE Phase 0 first to build it
   - The campaign state provides: brand injection string, personas, cognitive biases, language patterns
2. Ideally a completed landing page exists (for messaging alignment)

---

## Step 1: Load Campaign Intelligence

1. Read `memory/clients/{client}.md` completely
2. Extract the **Brand Injection String** — this gets prepended to every image generation prompt
3. Review all persona profiles — note their:
   - Awareness level (determines messaging approach)
   - Top 3 cognitive biases (determines visual strategy)
   - Language patterns (words that resonate vs repel)
   - Visual representation specs (age, environment, clothing, lighting)
4. Review the **Critical Creative Insight** — this shapes the overall creative direction
5. Check **Ideas Backlog** for hook concepts and angles to test

---

## Step 2: Plan the Creative Matrix

Create a matrix mapping each creative to a specific persona + awareness level:

| # | Style | Persona | Awareness | Bias Stack | Headline Concept |
|---|-------|---------|-----------|------------|-----------------|
| 1 | Professional | {Persona 1} | L2 | Loss Aversion + Social Proof | {concept} |
| 2 | Professional | {Persona 2} | L3 | Contrast + Authority | {concept} |
| ... | ... | ... | ... | ... | ... |

**Coverage goals:**
- Every persona gets at least 4-5 prompts
- Every awareness level gets representation
- Every style gets 4-6 prompts
- Total: 25-35 prompts per round

---

## Step 3: Generate Across 7 Styles

### Style Definitions

| Style | Aspect | Count | Description |
|-------|--------|-------|-------------|
| `professional` | 4:5 | 5 | Studio product photography, clean layouts, brand-forward |
| `creative` | 4:5 | 6 | Outside-the-box concepts, pattern interrupts, unexpected visuals |
| `minimal` | 4:5 | 5 | Apple-style clean, lots of negative space, one focal element |
| `typography` | 4:5 | 5 | Bold text-forward, big numbers, ingredient lists, data visualizations |
| `stories` | 9:16 | 5 | Instagram Stories/Reels, UGC-style, casual, lower production value |
| `whiteboard` | 4:5 | 2 | Handwritten/whiteboard aesthetic, math/comparison, educational |
| `testimonial` | 4:5 | 4 | Review cards, partner perspectives, social proof focused |

### Prompt Structure

Every image generation prompt MUST follow this structure:

```
{BRAND INJECTION STRING from campaign state}

CREATIVE BRIEF:
- Style: {style name}
- Aspect Ratio: {4:5 or 9:16}
- Target Persona: {persona name} ({awareness level})
- Bias Stack: {bias 1 + bias 2 + bias 3}
- Headline: "{HEADLINE TEXT}"
- Supporting Text: "{optional subheadline or body text}"
- Emotional Target: {what the viewer should feel}

VISUAL DIRECTION:
{Specific visual description from persona's Visual Representation Specs + Pain Point/Desire visuals from campaign state}

IMPORTANT:
- {Any brand-specific DO NOTs from the injection string}
- Text in image must use: {font from brand guide}
- No stock photo feel — premium, intentional, curated
```

---

## Step 4: Score Every Prompt

Before generating images, score each prompt against the **Unicorn Ad Creative Engine 10-Protocol**:

### Scoring Dimensions (each 1-10)

| # | Dimension | What to Evaluate |
|---|-----------|-----------------|
| 1 | Scroll-Stop Power | Would this stop a fast-scrolling thumb? First-glance impact? |
| 2 | Persona Alignment | Does it speak directly to the target persona's reality? |
| 3 | Awareness Match | Is the messaging appropriate for their awareness level? |
| 4 | Emotional Trigger | Does it activate the intended cognitive bias? |
| 5 | Brand Consistency | Does it match the brand injection string exactly? |
| 6 | Headline Impact | Is the text concise, bold, and benefit-driven? |
| 7 | Visual Clarity | Is there one clear focal point? No clutter? |
| 8 | CTA Implied | Does the viewer know what action to take? |
| 9 | Platform Native | Does it feel native to the ad placement (feed, stories)? |
| 10 | Uniqueness | Is this concept different from the other prompts in this batch? |

**Threshold: 8.5+ average to generate. Below 8.5, revise the prompt.**

---

## Step 5: Generate Images

Use the Nano Banana MCP tool to generate each image:
- Prepend the Brand Injection String to every prompt
- Use the correct aspect ratio (4:5 for feed, 9:16 for stories)
- Generate one image per prompt
- Save each with descriptive filename

---

## Step 6: Quality Control

For EVERY generated image:
- [ ] Text is legible at mobile size
- [ ] CTA text has NO trailing period
- [ ] Brand colors match the injection string
- [ ] No spelling/grammar errors in overlay text
- [ ] Visual hierarchy is clear
- [ ] Image resolution is correct
- [ ] Doesn't violate any "DO NOT" rules from brand guide

Regenerate any that fail QA.

---

## Step 7: Organize as HTML Gallery Files

**IMPORTANT:** Save ad prompts as browsable HTML gallery files (not just raw images). Each style gets its own HTML file showing all prompts as cards.

File naming: `{client}-round{N}-{style}-{count}.html`

Each card in the gallery should show:
- Prompt number and name
- Target persona and awareness level
- Headline text
- Score (from Step 4)
- The generated image

---

## Step 8: File Organization

```
{client}/
├── meta-ads/
│   ├── {client}-campaign-state.md      (symlink or copy from memory/clients/)
│   ├── {client}-round1-professional-5.html
│   ├── {client}-round1-creative-6.html
│   ├── {client}-round1-minimal-5.html
│   ├── {client}-round1-typography-5.html
│   ├── {client}-round1-stories-5.html
│   └── {client}-round1-whiteboard-testimonial-6.html
└── assets/
    └── ads/
        ├── creative-1.png
        ├── creative-2.png
        ├── professional-1.png
        └── ... (all generated images)
```

---

## Step 9: Update Campaign State

After completing a round, update `memory/clients/{client}.md`:

1. Add to **Previously Generated Content → Ad Creatives** section:
   - Round number, total prompts, styles used, score range, file locations

2. Add to **Session Log**:
   - What was generated
   - Creative insights discovered
   - Which persona/angles performed best (highest scores)
   - Recommendations for next round

3. Add to **Ideas Backlog** any new hook concepts that emerged

---

## Step 10: Report

Provide to user:
- Total prompts generated
- Breakdown by style and persona
- Score range and average
- Top 3 highest-scoring concepts
- File locations
- Recommendations for next round (which personas/angles to expand)
