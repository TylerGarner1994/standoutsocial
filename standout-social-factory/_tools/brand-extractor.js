// Brand Style Extractor — Run via Chrome DevTools (javascript_tool)
// Walks the live DOM, extracts all colors, fonts, buttons, and CSS variables.
// Returns structured JSON for saving as a brand-styles.md file.

(function extractBrandStyles() {
  const results = {
    colors: {},
    fonts: {},
    fontSizes: {},
    cssVariables: {},
    buttons: [],
    links: {},
    backgrounds: [],
    borders: {},
    shadows: {},
    gradients: []
  };

  // ── Utility: RGB/RGBA string to hex ──
  function rgbToHex(rgb) {
    if (!rgb || rgb === 'transparent' || rgb === 'rgba(0, 0, 0, 0)') return null;
    const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return null;
    const hex = '#' + [match[1], match[2], match[3]]
      .map(x => parseInt(x).toString(16).padStart(2, '0'))
      .join('');
    return hex.toUpperCase();
  }

  // ── Utility: Normalize hex ──
  function normalizeHex(hex) {
    if (!hex) return null;
    hex = hex.toUpperCase().trim();
    if (hex.length === 4) {
      hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    return hex;
  }

  // ── Utility: Parse any color value to hex ──
  function toHex(value) {
    if (!value || value === 'transparent' || value === 'rgba(0, 0, 0, 0)') return null;
    if (value.startsWith('#')) return normalizeHex(value);
    if (value.startsWith('rgb')) return rgbToHex(value);
    return null;
  }

  // ── Utility: Skip near-white/near-black/transparent non-brand colors ──
  function isGenericColor(hex) {
    if (!hex) return true;
    const skip = ['#FFFFFF', '#000000', '#F5F5F5', '#FAFAFA', '#F0F0F0', '#E5E5E5',
      '#D4D4D4', '#A3A3A3', '#737373', '#525252', '#404040', '#262626', '#171717',
      '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA', '#999999', '#888888',
      '#777777', '#666666', '#555555', '#444444', '#333333', '#222222', '#111111'];
    return skip.includes(hex);
  }

  // ── 1. Extract CSS Custom Properties from :root ──
  const rootStyles = getComputedStyle(document.documentElement);
  const sheets = document.styleSheets;
  for (let i = 0; i < sheets.length; i++) {
    try {
      const rules = sheets[i].cssRules || sheets[i].rules;
      if (!rules) continue;
      for (let j = 0; j < rules.length; j++) {
        const rule = rules[j];
        if (rule.selectorText === ':root' || rule.selectorText === 'html') {
          for (let k = 0; k < rule.style.length; k++) {
            const prop = rule.style[k];
            if (prop.startsWith('--')) {
              const val = rule.style.getPropertyValue(prop).trim();
              results.cssVariables[prop] = val;
            }
          }
        }
      }
    } catch (e) {
      // Cross-origin stylesheet, skip
    }
  }

  // ── 2. Walk visible elements and collect styles ──
  const allElements = document.querySelectorAll('body *');
  const colorCounts = {};
  const fontCounts = {};
  const fontSizeCounts = {};
  const bgColors = [];
  const borderColors = {};
  const shadowValues = {};

  allElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Skip invisible elements
    if (rect.width === 0 && rect.height === 0) return;

    const style = getComputedStyle(el);

    // Colors (text)
    const textHex = toHex(style.color);
    if (textHex && !isGenericColor(textHex)) {
      colorCounts[textHex] = (colorCounts[textHex] || 0) + 1;
    }

    // Background colors
    const bgHex = toHex(style.backgroundColor);
    if (bgHex && !isGenericColor(bgHex)) {
      colorCounts[bgHex] = (colorCounts[bgHex] || 0) + 1;
      bgColors.push({ element: el.tagName, class: el.className?.toString().slice(0, 50), color: bgHex });
    }

    // Gradients
    const bgImage = style.backgroundImage;
    if (bgImage && bgImage !== 'none' && bgImage.includes('gradient')) {
      results.gradients.push(bgImage);
    }

    // Fonts
    const fontFamily = style.fontFamily.split(',')[0].trim().replace(/['"]/g, '');
    if (fontFamily) {
      fontCounts[fontFamily] = (fontCounts[fontFamily] || 0) + 1;
    }

    // Font sizes
    const fontSize = style.fontSize;
    if (fontSize) {
      fontSizeCounts[fontSize] = (fontSizeCounts[fontSize] || 0) + 1;
    }

    // Borders
    const borderColor = toHex(style.borderColor || style.borderTopColor);
    if (borderColor && !isGenericColor(borderColor)) {
      borderColors[borderColor] = (borderColors[borderColor] || 0) + 1;
    }

    // Shadows
    const shadow = style.boxShadow;
    if (shadow && shadow !== 'none') {
      shadowValues[shadow] = (shadowValues[shadow] || 0) + 1;
    }

    // Buttons
    const tag = el.tagName.toLowerCase();
    if (tag === 'button' || tag === 'a' && el.classList.length > 0 ||
        (el.getAttribute('role') === 'button') ||
        el.className?.toString().match(/btn|button|cta/i)) {
      const btnBg = toHex(style.backgroundColor);
      const btnColor = toHex(style.color);
      if (btnBg || btnColor) {
        results.buttons.push({
          text: el.textContent?.trim().slice(0, 40),
          background: btnBg,
          color: btnColor,
          borderRadius: style.borderRadius,
          padding: style.padding,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          fontFamily: style.fontFamily.split(',')[0].trim().replace(/['"]/g, ''),
          border: style.border
        });
      }
    }

    // Links
    if (tag === 'a') {
      const linkColor = toHex(style.color);
      if (linkColor && !isGenericColor(linkColor)) {
        results.links[linkColor] = (results.links[linkColor] || 0) + 1;
      }
    }
  });

  // ── 3. Sort and rank colors by frequency ──
  results.colors = Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([hex, count]) => ({ hex, count }));

  // ── 4. Sort fonts by frequency ──
  results.fonts = Object.entries(fontCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([family, count]) => ({ family, count }));

  // ── 5. Sort font sizes ──
  results.fontSizes = Object.entries(fontSizeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([size, count]) => ({ size, count }));

  // ── 6. Backgrounds by section ──
  results.backgrounds = bgColors.slice(0, 20);

  // ── 7. Border colors ──
  results.borders = Object.entries(borderColors)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([hex, count]) => ({ hex, count }));

  // ── 8. Shadow patterns ──
  results.shadows = Object.entries(shadowValues)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([value, count]) => ({ value, count }));

  // ── 9. Deduplicate buttons ──
  const seenButtons = new Set();
  results.buttons = results.buttons.filter(btn => {
    const key = `${btn.background}-${btn.color}-${btn.borderRadius}`;
    if (seenButtons.has(key)) return false;
    seenButtons.add(key);
    return true;
  }).slice(0, 10);

  // ── 10. Deduplicate gradients ──
  results.gradients = [...new Set(results.gradients)].slice(0, 5);

  // ── 11. Extract Google Fonts from <link> tags ──
  const fontLinks = [];
  document.querySelectorAll('link[href*="fonts.googleapis.com"]').forEach(link => {
    fontLinks.push(link.href);
  });
  results.googleFontsLinks = fontLinks;

  // ── 12. Get page title and meta ──
  results.pageTitle = document.title;
  results.pageUrl = window.location.href;

  return JSON.stringify(results, null, 2);
})();
