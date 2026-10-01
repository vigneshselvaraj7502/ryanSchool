# Ryans Academy - Official Web Platform

Welcome to the official repository for **Ryans Academy**. This repository contains both the modern **React (Vite + Tailwind CSS)** application and the original multi-page static web application.

---

## 📁 Repository Structure

```
ryan/
├── school-react/          # Modern React 18 SPA (Vite + Tailwind CSS + Lucide + FontAwesome)
│   ├── src/               # React components, pages, routes, data
│   │   ├── components/    # Navbar, Footer, Modal, Animations, etc.
│   │   ├── pages/         # 18 fully responsive pages
│   │   └── index.css      # Custom styling & Tailwind directives
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── school/                # Static HTML5 / CSS3 / Vanilla JS site
│   ├── assets/            # High-resolution media, photography & branding assets
│   ├── index.html         # Homepage
│   ├── academics.html     # Academic curriculum & interactive triad showcase
│   ├── script.js          # Client-side interactive scripts
│   └── styles.css         # Custom styling
│
└── .gitignore
```

---

## 🚀 Getting Started

### Running the React Application

1. Open a terminal in `school-react`:
   ```bash
   cd school-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the web app in your browser at:
   ```
   http://localhost:3000
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

---

## 🎨 Key Features

- **Responsive Architecture**: Mobile-first design optimized for mobile, tablet, and desktop viewports.
- **Interactive Academic Triad**: Real-time interactive curriculum showcase seamlessly switching photos & badges on user click.
- **Enquiry & Campus Visit**: Interactive multi-step admissions modal with validation.
- **Dynamic Counters & Scroll Reveal**: Smooth animation hooks triggered as users scroll through achievements and statistics.
- **Full Branding System**: Deep Royal Purple (`#4B1F6F`) and Elegant Warm Gold (`#D4A72C`) aesthetic.
