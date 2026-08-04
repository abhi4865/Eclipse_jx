# Abhishek Yadav — Portfolio

React + Vite + Tailwind CSS rebuild of the portfolio site (dark theme, lime accent).

## Setup
```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Structure
- `src/data.js` — all content (profile, projects, skills, experience, achievements) in one place, edit here to update the site
- `src/components/` — Navbar, Hero, Projects, Skills, Experience, Achievements, Resume, Contact
- `src/App.jsx` — assembles the page
- Résumé section has a "Download PDF" button that triggers the browser print dialog (choose "Save as PDF")

## Deploy
Works out of the box on Vercel / Netlify / Firebase Hosting — just point the build command to `npm run build` and the output dir to `dist`.
"# Portfolio_JX" 
