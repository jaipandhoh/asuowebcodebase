# ASUO Website — Repo Cleanup Report
**Date:** March 10, 2026
**Commit:** `c0328fa`
**Branch:** `main`

---

## What Was Done

### Moved to `_legacy_archive/` (preserved, not deleted)

| Folder | Files | Reason |
|--------|-------|--------|
| `legacy-css/` | `about-us.css`, `abouttheI-Fee.css`, `current-officer.css`, `index.css`, `our-directors.css`, `passed-resolutions.css`, `sges.css`, `student-worker.css`, `toolkit.css` | Never loaded by React — `LegacyPage.jsx` only extracts `<main>` content, not `<head>`, so `<link>` tags were already dead |
| `legacy-js/`  | `analytics.mjs`, `toolkit.js`, `iam-pages.js`, `index.js` | Replaced by Vercel Analytics + React enhancers; `<script>` tags are stripped by `LegacyPage.jsx` anyway |
| `legacy-data/` | `events.json`, `english-statement.pdf`, `spanish-statement.pdf`, `2024-ASUO-Seal-BLK.png` | Duplicate copies — originals already live in `public/` and are served at runtime |

### Deleted from Disk (were never tracked in git)

- **18 deprecated HTML pages + CSS** — Branches, elections, stipends, street faire, support, SGES employment, travel & lodging, history of ASUO, governance policies, get involved, resources, services (misspelled), child subsidy, fund account types, meet-the-directors (legacy), sges-team
- **All images from `legacy/`** — director photos, media day photos — identical copies already in `public/`
- **Entire `archive/` directory** (7.6 MB old deployment)
- **`netlify.toml`** — project is deployed on Vercel, not Netlify
- **`WEB dev.code-workspace`** — IDE file, already gitignored

### `.gitignore` Tightened

Removed ~40 lines of entries for files that no longer exist. Image exclusion rules scoped from global `*.jpg` to `legacy/*.jpg` so future assets added to `public/` aren't accidentally ignored.

### `docs/google-sheets-setup-guide.md` — Now Tracked

Was gitignored despite being useful operational documentation. Now committed.

---

## Current Repo Structure (post-cleanup)

```
asuowebcodebase/
├── src/
│   ├── main.jsx                   Entry point
│   ├── App.jsx                    Router + Layout
│   ├── pages/
│   │   ├── Home.jsx               Homepage (carousel, events, calendar)
│   │   ├── AboutUs.jsx            I-Fee, branches, what we fund
│   │   └── OurDirectors.jsx       Director cards (hardcoded data)
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── LegacyPage.jsx         Wrapper: extracts <main>, normalizes links/images
│   ├── legacy/
│   │   ├── legacyPages.js         Imports 33 HTML files; maps slugs → content
│   │   ├── assetMap.js            Maps legacy filenames → public/ paths
│   │   └── enhancers.js           Accordion + toolkit filter JS
│   └── styles/
│       └── globals.css
│
├── legacy/                        33 active HTML pages ONLY (clean)
├── _legacy_archive/               Deprecated files (safe to reference, not in use)
│   ├── legacy-css/                9 old CSS files
│   ├── legacy-js/                 4 old JS files
│   └── legacy-data/               Old data + duplicate assets
│
├── public/                        ALL runtime assets (images, PDFs, logos)
├── docs/                          Setup guides
├── resolutions/                   PDF resolutions (gitignored from tracking)
│
├── index.html                     Vite HTML entry
├── vite.config.js
├── tailwind.config.js
├── vercel.json                    Deployment config (SPA rewrites + caching headers)
├── package.json
└── .gitignore
```

---

## Architecture Notes

### Two-Tier System
The site runs two parallel systems stitched together:

1. **Modern React** (`src/pages/`) — Home, About Us, Our Directors
2. **Legacy HTML** (`legacy/*.html`) — 33 pages served via `LegacyPage.jsx`

### How LegacyPage Works
`LegacyPage.jsx` receives raw HTML strings (imported at build time), then:
1. Strips `<nav>`, `<footer>`, and all `<script>` tags
2. Normalizes `href` and `src` attributes to clean React Router paths
3. Renders only the `<main>` element via `dangerouslySetInnerHTML`
4. Attaches JavaScript enhancers (accordion, toolkit filters) via `useEffect`

This is why all the CSS/JS files in `legacy/` were dead — they were referenced in `<head>`, which gets discarded.

### Image Serving
Legacy HTML uses relative paths like `./Amaya Peralta.jpg`. The `normalizePath()` function converts these to `/Amaya Peralta.jpg`, which Vite serves from `public/`. The images in `legacy/` were never used at runtime.

### External Data
| Source | Purpose |
|--------|---------|
| Google Sheets CSV | Events data (fetched at runtime, no cache) |
| Google Calendar | Embedded iframe on homepage |
| Google Forms | Office hours, surveys, project proposals |

---

## Recommendations

### High Priority

**1. CMS or database for the director roster**
`OurDirectors.jsx` hardcodes 9 directors with names, photos, and emails. Every personnel change (which happens every year) requires a code edit and deploy. Even a free Google Sheet read via the Sheets API would fix this. A headless CMS (Contentful, Sanity) is the proper long-term solution.

**2. Code-split legacy pages**
All 33 legacy HTML pages are bundled into a single 521 KB JS chunk (Vite even warns about this on every build). Using dynamic `import()` in `legacyPages.js` would split them per-route and dramatically improve initial load time, especially on mobile.

```js
// Instead of:
import aboutHtml from "../../legacy/about-us.html?raw";

// Use dynamic import per route:
const aboutHtml = () => import("../../legacy/about-us.html?raw");
```

**3. Events proxy / caching layer**
The homepage fetches Google Sheets CSV directly with `cache: 'no-store'`, hitting Google's servers on every page load. A Vercel Edge Function acting as a proxy with a short TTL (5–10 min) would improve reliability, handle CORS properly, and reduce Google API exposure.

---

### Medium Priority

**4. Image optimization**
Director photos and media day images in `public/` are uncompressed JPGs totaling ~35 MB. Converting to WebP + adding responsive `srcSet` would significantly reduce load time on mobile and slow connections.

**5. Convert high-traffic legacy pages to React**
The legacy pages are functional but carry old inline styles, inconsistent markup, and no mobile optimization. Migrating the highest-traffic pages first would improve UX:
- `/contact`
- `/sges` (SGES student org expenses)
- `/passed-resolutions`
- `/immigration-toolkit`

**6. SEO basics**
No `<meta>` description tags, no `sitemap.xml`, no `robots.txt`. The immigration toolkit and branch pages especially answer real student questions and could benefit from search visibility.

---

### Low Priority

**7. Expand `README.md`**
Currently 3 lines. The `docs/` folder has solid guides; surfacing them in a proper README would reduce onboarding time for future interns.

**8. Accessibility audit**
The legacy pages use inline styles and non-semantic markup. The React pages are better but haven't been audited. Run `axe` or Lighthouse accessibility checks before next major deploy.

**9. Environment variables**
The Google Sheets URL is hardcoded in `Home.jsx`. If the sheet ever needs to change, it requires a code edit. Moving it to a `.env` variable (`VITE_SHEETS_URL`) is a quick fix with better maintainability.

---

## Build Info

```
vite v5.4.21
dist/assets/index.css    49.96 kB │ gzip:   7.77 kB
dist/assets/index.js    521.18 kB │ gzip: 104.30 kB
✓ built in 793ms
```

The bundle size warning is addressed by Recommendation #2 above.
