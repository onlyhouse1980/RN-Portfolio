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

- **Navbar logo**: `components/Navbar.js` → change "DEV.FOLIO"
- **Hero subtitle**: `components/Hero.js` → edit the `<p>` tag
- **About text & stats**: `components/About.js`
- **Contact links**: `components/Contact.js` → update email, GitHub, LinkedIn
- **Footer**: `pages/index.js` → update copyright name and social links

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

Fonts are loaded in `pages/_document.js` — swap the Google Fonts URL to change typography.

### Adding Your Skills

Edit the `SKILLS` and `TECH` arrays in `components/Skills.js`.

---

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── About.js        — About section with word reveal
│   ├── Contact.js      — Contact section with line reveals
│   ├── CustomCursor.js — Magnetic custom cursor
│   ├── Hero.js         — Hero with particle canvas + parallax
│   ├── Marquee.js      — Scrolling tech ticker
│   ├── Navbar.js       — Fixed nav with scroll behavior
│   ├── Projects.js     — Project grid with tilt & entrance anims
│   └── Skills.js       — Skill bars + tech badge grid
├── pages/
│   ├── _app.js
│   ├── _document.js    — Google Fonts loaded here
│   └── index.js        — Page layout + Lenis initialization
├── styles/
│   └── globals.css     — All styles + CSS variables
├── next.config.js
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
