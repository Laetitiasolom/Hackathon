# Laetitia’s UX & Design Portfolio

**Project Vibe:** A precision-engineered, interactive academic portfolio merging German efficiency with Swedish minimalist aesthetics.

**Author:** Laetitia Solombrino  
**Version:** 1.0  
**Date:** December 2025  
**Relevant Links:** Portfolio (TBD), GitHub (TBD)

---

## Short Pitch

Academic portfolio templates are rigid, text-heavy, and visually outdated. This project reimagines the “Academic Pages” concept as a clean, interactive, and accessible web experience—allowing a UX designer to showcase both academic rigor and visual craft without compromise.

---

## 1. Core Context

### Problem
Standard academic portfolio templates are rigid, text-heavy, and visually outdated. They fail to support modern UX expectations, making it difficult for designers to communicate visual skill, design process, and personal identity alongside academic credentials and research.

### Solution
A custom-built, minimalist portfolio website that transforms static academic artifacts (CVs, case studies, papers) into interactive, readable, and accessible web experiences—while maintaining professional and academic credibility.

### Target Users
- UX Design Recruiters
- Academic Admissions Boards
- Design Peers

### Primary Use Cases
- Recruiters quickly scanning the visual CV
- Hiring managers filtering portfolio work by discipline (UX vs. Graphic Design)
- Academics reading papers and case studies comfortably on any device

### North-Star Metric
- **Primary:** Time-to-CV (seconds from landing page to CV visibility)
- **Secondary:** Subjective visual impression (“vibe” assessment by reviewers)

### Non-Goals
- Building a full multi-author academic publishing platform
- Supporting dynamic user-generated content in V1

---

## 2. UX Foundations

### Personas
- **The Busy Recruiter:** Needs to assess fit and credentials in under 30 seconds
- **The Deep Diver:** Wants to explore full case studies, methodology, and academic depth

### Experience Principles (“Vibe”)
- **Swedish Minimalism:** Clean lines, strict grids, generous whitespace
- **Visual Tone:** Organized, competent, calm
- **Color Palette:** Muted blue/grey base with dark green interaction accents

### Accessibility & Inclusion Requirements
- WCAG AA color contrast compliance
- Semantic HTML structure for screen readers
- Clear focus states and full keyboard navigation

### High-Level User Journey
1. Land on homepage → immediate brand and role clarity
2. Navigate to portfolio gallery → filter by discipline
3. Dive into case study or paper → long-form reading experience
4. Access CV → scan digitally or download PDF

---

## 3. Scope & Priorities

### MVP (V1) Goals
- **Personalized Landing Page:** Strong hero communicating international, precision-driven design identity
- **Accessible CV:** Fully responsive, semantic digital CV
- **Interactive Portfolio Gallery:** Filterable grid of UX and graphic design projects
- **Interactive Paper:** Dedicated long-form reading experience for an academic paper or thesis

### Out of Scope (V1)
- Backend CMS or admin dashboard
- Dark mode or advanced theming
- User authentication

### Assumptions & Risks
- Content volume remains manageable without a CMS
- Recruiters prefer fast scanning over exhaustive navigation

---

## 4. Tech Overview

| Component | Technology |
|--------|------------|
| Frontend | Jekyll (Ruby) |
| Styling | Tailwind CSS (Standalone CLI) |
| Animation | Vanilla CSS Transitions + JS |
| Deployment | GitHub Pages |

**Rationale:** This stack maintains the "Jekyll-only" constraint while enabling modern styling via Tailwind and performance interactions via lightweight CSS/JS.

---

## 5. Feature Modules

### Module 1: The Nordic Hero (Landing Page)
**Priority:** P0
**Tech:** HTML/Liquid + Tailwind
- Profile image with crop
- Headline
- "View Work" CTA (Green #15803D)

### Module 2: Interactive Portfolio Gallery
**Priority:** P0
**Tech:** HTML/Liquid + Standard Jekyll Collections
- Filter controls: All / UX / Graphic (Implemented via Isotope or simple JS filtering)
- Hover animations: CSS `transform: translateY(-5px)`

### Module 3: Accessible CV
**Priority:** P1
**Tech:** Standard Markdown/HTML

### Module 4: Interactive Paper
**Priority:** P1
**Tech:** Standard Markdown Layouts

---

## 6. AI Design & Prompting Strategy
**Constraint:** Do not introduce React, Webpack, or complex bundlers. Output compliant Jekyll includes and assets.

---

## 7. IA, Flows & UI

### Main Screens
- Landing Page
- Portfolio Gallery
- Project / Case Study Page
- Interactive Paper Page
- CV Page

### Design System
- Tailwind-based spacing and typography scale
- Consistent button and card components
- Neutral base colors with limited accent usage

---

## 8. Iteration & Workflow

- Lightweight, solo sprint cadence
- Rapid iteration with visual QA on real devices
- Manual usability review after each major feature

---

## 9. Quality

### Testing Requirements
- Cross-browser testing (Chrome, Safari, Firefox)
- Responsive testing across breakpoints

### Accessibility Checks
- Keyboard navigation audit
- Screen reader semantic validation

### Performance Targets
- Fast initial load (<2s on standard broadband)

---

## 10. Metrics & Analytics

### Key Metrics
- Time-to-CV
- Scroll depth on case study and paper pages

### Qualitative Feedback
- Recruiter and peer review impressions

---

## 11. Launch & Operations

### Environments
- Production-only deployment (no staging required for V1)

### Rollout Plan
- Soft launch via portfolio sharing
- Iterative updates based on reviewer feedback

### Maintenance
- Manual content updates
- Periodic accessibility and dependency reviews

I am working on a Jekyll site (Academic Pages). 
Do not introduce new frameworks or JavaScript libraries. Modify only existing layouts, includes, Markdown, or CSS.” This avoids breaking the build. 

