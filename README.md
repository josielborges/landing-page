# 🚀 Landing Page - Josiel (Backend Developer & AI)

A modern, professional landing page for a backend developer, following a developer platform design system with a dark, code-inspired aesthetic.

## ✨ Features

- **Modern Design System**: Based on the Developer Platform Design System with a dark theme and terminal/code look
- **Responsive**: Fully responsive for desktop, tablet, and mobile
- **Smooth Animations**: Scroll, hover, and transition effects
- **Interactive Terminal**: Animated terminal window with typewriter effect
- **Optimized Performance**: Fast loading and optimized animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Internationalization (i18n)**: Language switcher (🇧🇷/🇺🇸) with persistent language selection, including on the thank-you page

## 🎨 Design System

### Color Palette
- **Primary**: Dark gray tones (#2d3748, #1a202c)
- **Accent**: Terminal green (#00ff88, #38a169)
- **Text**: White and light gray
- **Code**: Dark background with syntax highlighting

### Typography
- **Primary**: Inter (sans-serif)
- **Monospace**: JetBrains Mono (for code)
- **Display**: Inter (for headings)

### Components
- Terminal windows with macOS-style controls
- Code blocks with syntax highlighting
- Cards with hover effects
- Buttons with gradients and glow effects
- Fixed language switcher (top right)
- Hamburger menu for navigation (mobile)

## 📁 Project Structure

```
landing-page/
├── index.html          # Main landing page
├── thank-you.html      # Thank you page (after contact form)
├── styles.css          # CSS styles
├── script.js           # Interactive JavaScript
├── assets/
│   ├── images/
│   │   └── josiel.jpg  # Profile photo
│   ├── json/
│   │   └── dev_platform-design-system.json  # Design system JSON
│   └── markdown/
│       └── page-content.md  # Page content source
├── conteudo_pagina.md  # Page content (PT-BR)
├── dev_platform_design_system.json  # Design system
└── README.md           # Documentation
```

## 🛠️ Creation Process

This landing page was created using a modern AI-assisted workflow:

### 1. Design System Generation
- **Input**: Screenshot of a developer platform design system (`assets/images/system-design-font.jpg`)
- **Tool**: Claude AI
- **Prompt**: "Create a JSON profile design system that extracts visual data from these screenshots so that i can use the JSON output in Cursor to give it context on how to replicate such design systems in a consistent style. Avoid including the contents of the specific images. The output should include the design style, the structure and anything that'll help an AI replicate such designs"
- **Output**: `assets/json/dev_platform-design-system.json`

### 2. Content Preparation
- **Source**: `assets/markdown/page-content.md` - Contains all the content and structure information for the landing page
- **Format**: Markdown with organized sections and clear content hierarchy

### 3. Implementation
- **IDE**: Cursor
- **Context**: The design system JSON and content markdown were provided to Cursor as context
- **Result**: Complete landing page implementation following the extracted design system consistently

### 4. Enhancement
- **Internationalization**: Added language switcher with persistent language selection
- **Form Integration**: Contact form with Formsubmit integration
- **Thank You Page**: Separate page with language persistence
- **Responsive Design**: Mobile-first approach with comprehensive breakpoints

This workflow demonstrates how AI tools can be used together to create professional, consistent designs by:
1. Extracting design patterns from visual references
2. Structuring content in a clear, reusable format
3. Using AI-assisted development to implement the design system consistently

## 🚀 How to Use

1. **Clone or download** the project files
2. **Open** the `index.html` file in a modern browser
3. **Customize** the content by editing the HTML, CSS, and JS as needed

### Internationalization (i18n)
- The language switcher (🇧🇷/🇺🇸) is always visible at the top right.
- All main content is available in both English and Portuguese.
- When you send a message via the contact form, the selected language is preserved on the thank-you page.

### Customization

#### Content
- Edit `page-content.md` for the main content (PT-BR)
- Edit `index.html` and `thank-you.html` for structure and section order

#### Design
- Adjust colors, fonts, and spacing in `styles.css`
- Update the design system in `dev_platform_design_system.json` if needed

#### Adding More Languages
- Add translations in `script.js` under the `translations` and `thankTranslations` objects
- The language switcher will automatically support new languages if added

---

**Made with ❤️ by Josiel Borges** 