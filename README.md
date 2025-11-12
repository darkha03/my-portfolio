# My Porfolio

This repository contains a Vite + React portfolio website built with Tailwind CSS. It showcases a responsive layout with sections for Hero, Projects (modal + gallery), Education (animated timeline), Skills, and Contact.

## Features

- React (Vite)
- Tailwind CSS for styling
- Projects list with modal gallery and auto-advance carousel
- Education timeline (desktop horizontal with anchored cards; mobile vertical 3-column timeline)
- Skills section with categorized lists and icons
- Accessible modal (ESC to close) and IntersectionObserver-driven animations

## Quick start (local development)

Prerequisites:

- Node.js (LTS) and npm installed

Install and run locally:

```powershell
# install
npm install

# start dev server (Vite)
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

The dev server will open at http://localhost:5173 by default (Vite). Adjust the port if needed.

## Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — page layout and section wrappers
- `src/components/` — React components (Hero, Navbar, Projects, Education, Skills, Contact, etc.)
- `src/data/educationData.js` — education timeline data
- `src/data/projectsData.js` — project metadata and galleries
- `public/` — static assets (images, CV) copied to root of final `dist/`

Important static asset locations (place your files here):

- `public/cv/GiaKhanh_Nguyen_CV.pdf` — CV file used by the download button
- `public/avartar/` — avatar image(s) (note repository currently references `/avartar/avatar.png`)
- `public/projects/` — project images used by the gallery modal

If you change these paths, update the `src` references in the components accordingly.

## Deployment

Build command: `npm run build`

Output directory: `dist`

Recommended hosts (zero-config): Vercel or Netlify. Both detect Vite and will use the commands above. If you prefer GitHub Pages, see notes below.

Vercel

- Import the repo at vercel.com and set:
	- Build Command: `npm run build`
	- Output Directory: `dist`
- Add a custom domain in the project dashboard if you own one; Vercel will provide HTTPS.

Netlify

- Connect the repo and set:
	- Build Command: `npm run build`
	- Publish directory: `dist`
- For SPA routing and client-side routes, add `public/_redirects` with this content so Netlify returns `index.html` for unknown routes:

```
/*  /index.html  200
```

GitHub Pages

- Option A (quick): use the `gh-pages` package to publish `dist` to the `gh-pages` branch.
- Option B: create a repo named `<your-username>.github.io` and publish the site as a user site.
- SPA note: include a `404.html` that contains the same content as `index.html` (or configure redirects) so client-side routing works.

## Contributing

- Feel free to open issues or PRs for improvements. Small suggestions:
	- Add or replace images in `public/projects/`
	- Update `src/data/projectsData.js` entries (title, details, gallery)

## Contact

- For questions about running or deploying this repo, open an issue or contact the repository owner.
