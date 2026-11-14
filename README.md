# Ganesh Karuru — Developer Portfolio Website

A high-performance, developer-minimalist personal portfolio for **Ganesh Karuru**, Computer Science Engineering undergraduate (Class of 2027) and Backend / Full-Stack Software Engineer.

## Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React (`lucide-react`)
- **Typography:** Inter (geometric sans) & JetBrains Mono (code & metrics)
- **Design:** Developer Dark Theme (`#0A0A0B` default) with high-contrast surfaces and clean Light Mode toggle

---

## Features
- **Sticky Glassmorphic Navbar:** `<GaneshKaruru />` branding, smooth section navigation, light/dark mode switch, resume CTA, and responsive mobile drawer.
- **Hero Section:** Live availability status badge, 2-sentence backend engineering bio, direct CTAs, and an **interactive Terminal / API response card** (`GET /api/v1/engineer/ganesh`) with syntax highlighting and one-click JSON/cURL copy.
- **Experience Section:** Ethnotech Academy Java Full Stack Development internship with layered architecture highlights, MySQL optimizations, and REST API contracts.
- **Featured Projects:** Architectural cards with category filtering (`All`, `Backend & AI`, `Full-Stack`), featuring **FeedbackPulse** (AI customer feedback engine), **Real Estate Listing Platform** (dynamic JPA Specifications engine), and **Social Media Management System**.
- **Technical Skills:** 4 clean, scannable cards covering Languages, Backend & Distributed Systems, Databases & Cloud, and Frontend & Tools (no fake skill percentage bars).
- **Achievements & Certifications:** Adobe University Hackathon 2026, peer-reviewed academic book chapter publication, and algorithmic problem-solving milestones.
- **Education:** B.Tech CSE (2023–2027) at MITS with 8.5 CGPA and core computing coursework.
- **Contact:** One-click email copy with animated toast notification, phone, LinkedIn, GitHub links, and a functional direct message dispatch form.
- **Official Resume:** Pre-linked to `/Ganesh_Karuru_Resume.pdf`.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The portfolio will start at `http://localhost:3000` with instant hot-module replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```
