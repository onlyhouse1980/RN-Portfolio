# DEV.FOLIO — Next.js Developer Portfolio

A dark, editorial brutalist portfolio with dramatic GSAP ScrollTrigger animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build && npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Features

- **GSAP ScrollTrigger** — scroll-driven animations throughout
- **Lenis** — buttery smooth scroll
- **Particle canvas** in the hero with animated connection lines
- **Custom magnetic cursor** with blend mode effects
- **Word-by-word text reveal** in the About section
- **Staggered counter animations** for stats
- **3D tilt effect** on project cards
- **Alternating entrance animations** for project cards (left/right)
- **Animated skill bars** triggered by scroll
- **Marquee ticker** for tech stack
- **Responsive** — mobile-friendly with graceful degradation

---

## 🎨 Customization

### Adding Your Projects

Projects are stored in MongoDB using the `MONGODB_URI` value from `.env.local`.
Sign in at `/projects/input` with the admin credentials and use the form to add
new projects to the `projects` collection.

### Changing Personal Info

- **Navbar logo**: `components/Navbar.tsx` → change "DEV.FOLIO"
- **Hero subtitle**: `components/Hero.tsx` → edit the `<p>` tag
- **About text & stats**: `components/About.tsx`
- **Contact links**: `components/Contact.tsx` → update email, GitHub, LinkedIn
- **Footer**: `app/page.tsx` → update copyright name and social links

### Changing Colors / Fonts

Edit `styles/globals.css` — CSS variables at the top:

```css
:root {
  --lime: #b4ff00;   /* Primary accent */
  --red: #ff3c00;    /* Secondary accent (hover states) */
  --white: #f0ede4;  /* Text color */
  --bg: #060606;     /* Background */
}
```

Fonts are loaded in `app/layout.tsx` — update the Next font imports to change typography.

### Adding Your Skills

Edit the `SKILLS` and `TECH` arrays in `components/Skills.tsx`.

---

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── About.tsx        — About section with word reveal
│   ├── Contact.tsx      — Contact section with line reveals
│   ├── CustomCursor.tsx — Magnetic custom cursor
│   ├── Hero.tsx         — Hero with particle canvas + parallax
│   ├── Marquee.tsx      — Scrolling tech ticker
│   ├── Navbar.tsx       — Fixed nav with scroll behavior
│   ├── Projects.tsx     — Project grid with tilt & entrance anims
│   └── Skills.tsx       — Skill bars + tech badge grid
├── app/
│   ├── layout.tsx       — Global layout, metadata, and fonts
│   ├── page.tsx         — Page entry point
│   └── PortfolioClient.tsx
├── styles/
│   └── globals.css     — All styles + CSS variables
├── next.config.ts
└── package.json
```

---

## 🛠 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `react` / `react-dom` | UI library |
| `gsap` | Animation engine (ScrollTrigger) |
| `lenis` | Smooth scroll library |

---

## 📱 Browser Support

Chrome, Firefox, Safari, Edge (modern versions). The custom cursor is automatically hidden on touch devices.

---

## 📄 License

MIT — use freely for personal and commercial projects.
