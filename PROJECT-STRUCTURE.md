# iolys - Project Structure

## 📋 Overview

The iolys landing page has been refactored from a monolithic 4,015-line HTML file into a modular, maintainable structure:

- **iolys.html** - Clean HTML structure only
- **styles.css** - All CSS styling (~61KB)
- **js/main.js** - All JavaScript modules (~40KB)

## 📁 File Organization

```
iolys/
├── iolys.html              # Main entry point - HTML structure only
├── iolys.html.bak          # Original monolithic file (backup)
├── styles.css              # All CSS styles and animations
├── js/
│   └── main.js             # Combined JavaScript modules
├── *.webp                  # Image assets
└── PROJECT-STRUCTURE.md    # This file
```

## 🏗️ Architecture

### HTML Structure (iolys.html)

The HTML file contains the complete DOM structure organized into sections:

- **Header** - Navigation with logo, nav links, and mobile burger menu
- **Body** - Page content container
  - Background video element
  - Main page sections:
    - Hero section with trust indicators
    - Stats row
    - Providers hub
    - Steps/timeline section
    - Marketplace mockup
    - Problem statement
    - Capabilities cards
    - Parallel workflow
    - BYOM/BYOS section
    - FAQ section
    - Final CTA
    - Footer

**Key Features:**
- No embedded CSS or JavaScript
- All styles linked via `<link rel="stylesheet" href="styles.css">`
- All scripts loaded via `<script src="js/main.js"></script>`
- Semantic HTML with ARIA attributes for accessibility
- Inline CSS variables for animation delays (`--d`, `--i`, `--wi`)

### CSS Styles (styles.css)

Organized into logical sections with clear comments:

#### Color & Typography (~50 lines)
```css
:root {
  --bg: #000000;
  --text: #ffffff;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  /* ... more variables */
}
```

#### Component Sections
1. **Background & Layout** - Page structure, positioning
2. **Header Components** - Navigation bar, logo, mobile menu
3. **Hero Section** - Main headline, CTA buttons, animations
4. **Providers & Cards** - Provider hub, card styling, BorderGlow effect
5. **Steps/Timeline** - Sequential animation, progress indicators
6. **Marketplace Window** - Mock UI demonstration
7. **Problem Cards** - Cascading card animations
8. **FAQ Section** - Expandable details styling
9. **Footer** - Site footer layout
10. **Animations** - Keyframes for entrance effects and interactions
11. **Responsive Design** - Media queries (breakpoints: 960px, 900px, 700px, 600px)
12. **Accessibility** - `prefers-reduced-motion` support

#### Key Features
- **Responsive** - Mobile-first with progressive enhancement
- **Animated** - Scroll-triggered animations with CSS transitions
- **Accessible** - Reduced motion support, semantic structure
- **CSS Variables** - Dynamic values for theming and animations
- **BorderGlow Effect** - Mesh-gradient technique on provider cards

### JavaScript Modules (js/main.js)

The file contains 5 IIFE modules providing interactivity:

#### Module 1: GradientASCII (~700 lines)
Procedural WebGL background with ASCII characters:
- WebGL shader system for rendering
- Perlin noise-based procedural generation
- Trail particle system
- Click/pointer interaction
- Font atlas generation
- Responsive resizing
- Scroll visibility detection

```javascript
new GradientASCII(container, { /* options */ });
```

#### Module 2: BorderGlow (~50 lines)
Pointer-tracking mesh-gradient effect on cards:
- Calculates edge proximity (0-1)
- Computes cursor angle relative to card
- Updates CSS custom properties on mouse move
- Works with cards having class `bg-card`

#### Module 3: Steps Timeline (~80 lines)
Scroll-triggered timeline animation:
- Measures timeline width
- Triggers character scrambling effect
- Uses IntersectionObserver for scroll detection
- Plays animation only on first viewport entry

#### Module 4: Scroll-Triggered Reveal (~100 lines)
Word-split headline animations:
- Splits text into individual words
- Wraps each in `<span class="w">`
- Adds staggered animation delays
- Uses IntersectionObserver for visibility
- Preserves accessibility with aria-labels

#### Module 5: Mobile Menu (~50 lines)
Hamburger menu toggle and overlay:
- Click handler on burger button
- Toggle menu visibility
- Overlay backdrop
- Close on overlay click

## 🎨 Design System

### Color Scheme
- **Background**: `#000000` (pure black)
- **Text**: `#ffffff` (white)
- **Muted**: `#8e8e8e` (gray)
- **Pill Dark**: `#28282a` (dark gray for buttons)
- **Trust**: `#28282a` background with `rgba(255,255,255,0.4)` border

### Typography
- **Sans-serif**: "Inter" (primary font)
- **Display/Monospace**: "BubbledotICG-FinePos" (headlines)
- **Fallback**: "Segoe UI", system-ui

### Animations
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (custom ease-out)
- **Durations**: 0.25s-1.6s depending on animation type
- **Triggers**: Scroll-based (IntersectionObserver) or time-based

### Breakpoints
- Desktop: 1200px+
- Tablet: 960px - 1199px
- Mobile: < 960px
- Small Mobile: < 600px

## 📦 Dependencies

### External
- **Fonts**: Google Fonts (Inter), Custom font (BubbledotICG-FinePos)
- **Icons**: Font Awesome 6.5.2 (CDN)
- **Video**: Cloudfront hosted MP4 background

### Internal
- None! All code is vanilla HTML/CSS/JavaScript

## 🔧 Development Workflow

### Making Changes

**HTML Structure:**
1. Edit `iolys.html`
2. Add/modify elements, sections
3. No changes needed to CSS/JS (unless new classes added)

**Styling:**
1. Edit `styles.css`
2. Follow the section organization
3. Use existing CSS variables for consistency
4. Add comments for complex rules

**Interactivity:**
1. Edit `js/main.js`
2. Each module is independent (separate IIFE)
3. Can modify or extend without affecting others
4. Use IntersectionObserver API for scroll triggers

### Testing
1. Open `iolys.html` in browser
2. Check desktop layout (1200px+)
3. Test tablet view (960px)
4. Test mobile view (<600px)
5. Test animations with DevTools (Animations panel)
6. Test with reduced motion preference

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL support required for GradientASCII
- CSS Grid and Flexbox support required
- ES6+ JavaScript features used

## 🚀 Next Steps

### Optimization Options

1. **Minify & Bundle**
   ```bash
   # Minify CSS
   csso styles.css -o styles.min.css
   
   # Minify JS
   terser js/main.js -o js/main.min.js
   
   # Update HTML to reference minified versions
   ```

2. **Code Splitting** - Further split `js/main.js` into separate modules:
   - `js/gradient-ascii.js` - WebGL background
   - `js/border-glow.js` - Card hover effects
   - `js/timeline.js` - Timeline animations
   - `js/scroll-reveal.js` - Word split reveals
   - `js/mobile-menu.js` - Menu interactions

3. **Lazy Loading**
   - Defer GradientASCII initialization until visible
   - Preload provider images
   - Optimize WebP assets

4. **Build System Integration**
   - Webpack/Vite for bundling
   - PostCSS for vendor prefixes
   - Babel for JavaScript transpilation

## 📊 File Statistics

| File | Size | Lines | Type |
|------|------|-------|------|
| iolys.html | 182 KB | ~2,400 | HTML |
| styles.css | 61 KB | ~1,900 | CSS |
| js/main.js | 40 KB | ~1,200 | JavaScript |
| **Total** | **283 KB** | **~5,500** | - |
| Original | 283 KB | 4,015 | Combined |

## 🔄 Maintenance

### Version Control
- Keep `iolys.html.bak` as reference for original monolithic structure
- Track CSS changes in version control (high-value changes)
- Review JavaScript changes carefully (complex modules)

### Documentation
- Update this file when major changes are made
- Add inline comments for complex CSS rules
- Document new JavaScript modules with JSDoc

### Performance Monitoring
- Monitor WebGL performance (GradientASCII)
- Check animation frame rates
- Optimize image sizes and formats
- Profile scroll performance

## ✅ Verification Checklist

After changes, verify:
- [ ] HTML loads without errors
- [ ] CSS applies correctly (no unstyled elements)
- [ ] JavaScript initializes and runs
- [ ] Animations play smoothly
- [ ] Mobile menu works
- [ ] Scroll triggers fire correctly
- [ ] No console errors or warnings
- [ ] Responsive design works on all breakpoints
- [ ] Reduced motion preference is respected
- [ ] All links are functional

---

**Last Updated**: October 2026  
**Status**: Production Ready  
**Original File**: iolys.html.bak (backup)
