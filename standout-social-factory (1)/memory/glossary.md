
## CSS Lessons Learned

| Issue | Details |
|-------|---------|
| **nth-child specificity override** | NEVER use section:nth-child(odd/even) for background colors alongside class-based section styling (.section-dark, .section-light). The nth-child pseudo-class has HIGHER specificity (0,1,1) than a single class (0,1,0) and will override backgrounds, causing white text on white backgrounds. ALWAYS use explicit classes on every section instead. |
| **Text contrast on dark sections** | Always verify text color contrast in dark background sections. Use inline color styles or higher-specificity selectors. Test visually before delivering. |
