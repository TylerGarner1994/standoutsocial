// Brand Style Extractor — Fallback Version
// Works on raw HTML source fetched via WebFetch.
// Pass the HTML string to this function and it returns extracted styles.
//
// USAGE (in Claude Code context):
//   1. WebFetch the brand URL
//   2. The HTML content is returned as text
//   3. Claude parses it using the regex patterns below
//
// This file documents the extraction patterns Claude should apply
// when Chrome DevTools is unavailable.

// ═══════════════════════════════════════════════════════
// PATTERN 1: Extract CSS Custom Properties from :root
// ═══════════════════════════════════════════════════════
// Regex: :root\s*\{([^}]+)\}
// Then for each match: --([\w-]+)\s*:\s*([^;]+);
//
// Example input:
//   :root { --primary: #2563EB; --dark: #1E293B; }
// Example output:
//   { "--primary": "#2563EB", "--dark": "#1E293B" }

// ═══════════════════════════════════════════════════════
// PATTERN 2: Extract all hex color values from CSS
// ═══════════════════════════════════════════════════════
// Regex: #(?:[0-9A-Fa-f]{3}){1,2}\b
//
// Deduplicate, normalize to 6-digit uppercase hex.
// Skip generic grays: #FFFFFF, #000000, #F5F5F5, etc.
// Count frequency to rank by importance.

// ═══════════════════════════════════════════════════════
// PATTERN 3: Extract Google Fonts
// ═══════════════════════════════════════════════════════
// Regex: fonts\.googleapis\.com/css2?\?family=([^"'>\s]+)
//
// Decode URL: + = space, | or ; separates families
// Extract font names and weights.
//
// Example: family=Inter:wght@400;600;700&family=Playfair+Display:wght@700
// Output: ["Inter (400, 600, 700)", "Playfair Display (700)"]

// ═══════════════════════════════════════════════════════
// PATTERN 4: Extract font-family declarations from CSS
// ═══════════════════════════════════════════════════════
// Regex: font-family\s*:\s*([^;}]+)
//
// Take the first font in each stack (before the comma).
// Remove quotes. Count frequency.

// ═══════════════════════════════════════════════════════
// PATTERN 5: Extract background-color values
// ═══════════════════════════════════════════════════════
// Regex: background(?:-color)?\s*:\s*([^;}]+)
//
// Parse hex values and rgb() values from matches.

// ═══════════════════════════════════════════════════════
// PATTERN 6: Extract button/CTA styles
// ═══════════════════════════════════════════════════════
// Look for CSS rules targeting:
//   .btn, .button, .cta, [class*="btn"], a.btn
// Extract: background, color, border-radius, padding, font properties.

// ═══════════════════════════════════════════════════════
// PATTERN 7: Extract gradient values
// ═══════════════════════════════════════════════════════
// Regex: (linear|radial)-gradient\([^)]+\)
//
// Capture full gradient strings for reuse.

// ═══════════════════════════════════════════════════════
// PATTERN 8: Extract border-radius values
// ═══════════════════════════════════════════════════════
// Regex: border-radius\s*:\s*([^;}]+)
//
// Find most common radius values (brand roundness).

// ═══════════════════════════════════════════════════════
// PATTERN 9: Extract box-shadow values
// ═══════════════════════════════════════════════════════
// Regex: box-shadow\s*:\s*([^;}]+)
//
// Capture shadow patterns for elevation system.

// ═══════════════════════════════════════════════════════
// COMBINED OUTPUT FORMAT
// ═══════════════════════════════════════════════════════
// Claude should compile results into the same JSON structure
// as brand-extractor.js returns:
//
// {
//   colors: [{ hex, count }],
//   fonts: [{ family, count }],
//   cssVariables: { "--name": "value" },
//   buttons: [{ background, color, borderRadius, ... }],
//   googleFontsLinks: ["url"],
//   gradients: ["gradient string"],
//   shadows: [{ value, count }],
//   pageTitle: "...",
//   pageUrl: "..."
// }
