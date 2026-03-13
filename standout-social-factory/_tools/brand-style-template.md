# Brand Styles: {BRAND_NAME}

**Source:** {URL}
**Extracted:** {DATE}

---

## Colors

| Role | Hex | Preview | Usage |
|------|-----|---------|-------|
| Primary | {HEX} | | Main brand color, CTAs |
| Primary Dark | {HEX} | | Hover states, emphasis |
| Primary Light | {HEX} | | Backgrounds, subtle accents |
| Secondary | {HEX} | | Supporting elements |
| Background | {HEX} | | Page/section backgrounds |
| Text | {HEX} | | Body copy |
| Text Light | {HEX} | | Muted/secondary text |
| Accent | {HEX} | | Highlights, badges, icons |

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Headlines | {FONT} | 700 | {SIZE} |
| Subheads | {FONT} | 600 | {SIZE} |
| Body | {FONT} | 400 | {SIZE} |
| CTA Buttons | {FONT} | 600 | {SIZE} |
| Small/Caption | {FONT} | 400 | {SIZE} |

## Google Fonts Import

```html
{GOOGLE_FONTS_LINK_TAG}
```

## CSS Variables (copy-paste ready)

```css
:root {
  /* Colors */
  --primary: {HEX};
  --primary-dark: {HEX};
  --primary-light: {HEX};
  --secondary: {HEX};
  --bg: {HEX};
  --text: {HEX};
  --text-light: {HEX};
  --accent: {HEX};

  /* Typography */
  --font-heading: '{FONT}', serif;
  --font-body: '{FONT}', sans-serif;

  /* Spacing & Radius */
  --radius: {VALUE};
  --radius-lg: {VALUE};

  /* Shadows */
  --shadow-sm: {VALUE};
  --shadow-md: {VALUE};
  --shadow-lg: {VALUE};
}
```

## Button Styles

```css
.btn-primary {
  background: var(--primary);
  color: {HEX};
  border-radius: {VALUE};
  padding: {VALUE};
  font-family: var(--font-body);
  font-weight: 600;
  font-size: {SIZE};
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: var(--primary-dark);
}
```

## Gradients

```css
{GRADIENT_VALUES}
```

## Additional Notes

{NOTES_ABOUT_BRAND_STYLE}
