# iolys - Landing Page

A modern, animated landing page for an AI-powered development environment.

## 📦 Project Structure

This project has been refactored from a monolithic HTML file into a clean, modular structure:

```
iolys/
├── iolys.html              ← Main entry point (HTML structure)
├── styles.css              ← All CSS styling and animations
├── js/
│   └── main.js             ← All JavaScript functionality
├── iolys.html.bak          ← Original monolithic file (backup)
├── *.webp                  ← Image assets
├── README.md               ← This file
├── PROJECT-STRUCTURE.md    ← Detailed architecture documentation
└── SPLIT-SUMMARY.md        ← Split operation summary
```

## 🚀 Getting Started

1. **Open in Browser**: Simply double-click `iolys.html` or open it in any modern web browser
2. **View Source**: All code is clean, vanilla HTML/CSS/JavaScript - no build tools required
3. **Explore the Code**: 
   - HTML structure in `iolys.html`
   - Styling in `styles.css`
   - Interactivity in `js/main.js`

## ✨ Features

### Visual
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Animated Background** - WebGL-powered procedural ASCII art effect
- **Smooth Animations** - Scroll-triggered reveals and entrance effects
- **Modern Styling** - Dark theme with gradient effects and glowing elements
- **BorderGlow Effect** - Mesh-gradient on hover effects on provider cards

### Interactive
- **Mobile Menu** - Hamburger navigation with smooth animations
- **Timeline Animation** - Sequential reveal of process steps
- **Word Split Reveals** - Headlines animate in word-by-word
- **Scroll Triggers** - Content animates as it comes into view
- **Pointer Tracking** - Cards respond to cursor position

### Accessibility
- **Semantic HTML** - Proper heading hierarchy and ARIA labels
- **Reduced Motion Support** - Respects `prefers-reduced-motion` preference
- **Keyboard Navigation** - All interactive elements are keyboard accessible
- **Color Contrast** - Meets WCAG accessibility standards

## 📚 Documentation

### Quick Reference

| File | Purpose | Size |
|------|---------|------|
| `iolys.html` | HTML structure (clean markup) | 182 KB |
| `styles.css` | CSS styles, animations, responsive design | 61 KB |
| `js/main.js` | JavaScript modules for interactivity | 40 KB |

### Key Technologies

- **HTML5** - Semantic markup
- **CSS3** - Advanced layouts, animations, gradients
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **WebGL** - Procedural graphics rendering
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Variables** - Dynamic theming

### Build & Optimization

This project requires **no build tools** to run. However, for optimization:

```bash
# Minify CSS
npm install -g csso
csso styles.css -o styles.min.css

# Minify JavaScript
npm install -g terser
terser js/main.js -o js/main.min.js
```

## 🎨 Design System

### Colors
- **Background**: `#000000` (pure black)
- **Text**: `#ffffff` (white)
- **Accent**: Various gradients for glowing effects
- **Muted**: `#8e8e8e` (gray for secondary text)

### Typography
- **Headings**: "BubbledotICG-FinePos" (display font)
- **Body**: "Inter" (sans-serif from Google Fonts)
- **Fallback**: "Segoe UI", system fonts

### Animations
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (smooth ease-out)
- **Duration**: 0.25s - 1.6s depending on animation type
- **Trigger**: Scroll-based IntersectionObserver or CSS animations

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 960px - 1199px (optimized grid)
- **Mobile**: < 960px (single column, mobile menu)
- **Small**: < 600px (compact layout)

## ⚙️ JavaScript Modules

The `js/main.js` file contains 5 independent IIFE modules:

### 1. GradientASCII (~700 lines)
Procedural WebGL background with ASCII character rendering
- Perlin noise-based field generation
- Click/pointer interaction system
- Responsive resizing
- Smooth 60 FPS rendering

### 2. BorderGlow (~50 lines)
Interactive mesh-gradient effect on cards
- Calculates proximity to edges
- Updates CSS variables based on cursor position
- Works with `.bg-card` elements

### 3. Steps Timeline (~80 lines)
Scroll-triggered timeline animation
- Measures timeline width dynamically
- Character scrambling effect on reveal
- IntersectionObserver for efficiency

### 4. Scroll Reveal (~100 lines)
Word-split headline animations
- Splits text into individual words
- Staggered animation delays
- Preserves accessibility with aria-labels

### 5. Mobile Menu (~50 lines)
Hamburger menu toggle and overlay
- Click handlers for burger button
- Smooth overlay transitions
- Auto-close on navigation

## 🔧 Development Workflow

### Editing HTML
- Edit `iolys.html` directly
- No CSS or JavaScript changes needed unless adding new elements
- All IDs and classes map to CSS selectors

### Editing CSS
- Edit `styles.css` directly
- Changes apply immediately on browser refresh
- Organized into 12 logical sections with comments
- CSS Variables at the top for easy theming

### Editing JavaScript
- Edit `js/main.js` directly
- Each module is independent and self-contained
- Can be extended or modified without affecting other modules
- Modules initialize automatically on page load

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Requirements**: 
  - WebGL support (for GradientASCII effect)
  - CSS Grid & Flexbox
  - ES6 JavaScript features
- **Minimum**: Released 2020 or later

## 📊 Performance

- **Initial Load**: ~290 KB (HTML + CSS + JS)
- **Assets**: Additional ~3 MB for images and video background
- **Rendering**: 60 FPS on modern devices
- **Optimization Ready**: Can be minified and bundled further

## 🎯 Future Improvements

### Code Organization
- [ ] Split `js/main.js` into separate module files
- [ ] Convert `styles.css` to SCSS/PostCSS
- [ ] Add TypeScript for JavaScript modules

### Build Integration
- [ ] Setup Webpack or Vite bundler
- [ ] Add CSS minification
- [ ] Add JavaScript minification
- [ ] Implement tree-shaking for unused code

### Features
- [ ] Add analytics integration
- [ ] Implement form submission
- [ ] Add dark/light theme toggle
- [ ] Optimize WebGL rendering for older devices

## 📝 Documentation

- **PROJECT-STRUCTURE.md** - Detailed architecture and file organization
- **SPLIT-SUMMARY.md** - Summary of the HTML split operation
- **Inline Comments** - Code comments throughout CSS and JavaScript

## 🔄 Version History

- **v2.0** (Current) - Modular structure (HTML + CSS + JS separated)
- **v1.0** - Original monolithic file (backed up as iolys.html.bak)

## 📞 Support

For questions or issues:
1. Check the documentation files (PROJECT-STRUCTURE.md, SPLIT-SUMMARY.md)
2. Review inline code comments
3. Inspect the original monolithic file (iolys.html.bak) for reference

## 📄 License

This project is part of the iolys platform - an AI-powered development environment.

---

**Status**: ✅ Production Ready  
**Last Updated**: October 2026  
**Built With**: HTML5 • CSS3 • Vanilla JavaScript • WebGL
