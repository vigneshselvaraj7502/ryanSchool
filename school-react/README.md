# Ryans Academy - Modern React Application

This is the production-ready React application for **Ryans Academy**, converted from the multi-page HTML/CSS/JavaScript website into a high-performance, modular single-page application built with **React 18**, **Vite**, **React Router v6**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
cd "d:\school site\school-react"
npm run dev
```
The application will open automatically at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `dist/` with vendor chunking, minified CSS, and optimized assets.

### 3. Preview Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Architecture

```
school-react/
├── public/
│   └── assets/              # Linked directly to school assets (1,123 files, GIFs, logos)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Frosted capsule navigation island & mobile drawer
│   │   ├── Footer.jsx           # Complete footer with YAALE TECHNOLOGIES attribution
│   │   ├── EnquiryModal.jsx     # Global admissions/visit modal with WhatsApp direct connect
│   │   ├── MobileActionBar.jsx  # Fixed mobile call/chat bar
│   │   ├── WhatsAppFloat.jsx    # Floating WhatsApp button with safe clearance
│   │   ├── AnimatedCounter.jsx  # Smooth number animation on scroll
│   │   └── Lightbox.jsx         # Fullscreen gallery photo viewer
│   ├── context/
│   │   └── ModalContext.jsx     # Global modal state provider
│   ├── pages/                   # All 18 converted page views
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── AcademicsPage.jsx
│   │   ├── ProgramsPage.jsx
│   │   ├── FacilitiesPage.jsx
│   │   ├── ActivitiesPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── AdmissionsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── [KG & Special Pages] # Playgroup, Nursery, JuniorKG, SeniorKG, Daycare, Park, News, Principal
│   ├── App.jsx                  # Main router and layout orchestrator
│   ├── main.jsx                 # React root DOM mount
│   └── index.css                # Tailwind directives & luxury brand animations
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✨ Features Included

1. **Complete 18-Page Coverage**: 1:1 parity with the original multi-page site.
2. **Instant Client-Side Routing**: Powered by `react-router-dom` with zero page flicker.
3. **Interactive Luxury Animations**:
   - The Ryans Triad interactive cards on Academics page.
   - Sticky Progressive Pathway Navigator and floating photo frames on Programs page.
   - 6 Core Pillars charms and Infinite Photo Marquee on Home page.
   - Leadership Spotlight with golden aura on About page.
   - Animated statistical counters (`15:1`, `100%`, `3 Pillars`, `6 Domains`).
4. **Verified Attribution & Safe Layout**:
   - "Developed by YAALE TECHNOLOGIES" badge with hover micro-zoom.
   - WhatsApp safe clearance on desktop and mobile.
5. **Zero Missing Assets**: All 1,123 images, GIFs (`pencil.gif`, `book1.gif`, `animated.gif`), and SVGs resolve seamlessly.
