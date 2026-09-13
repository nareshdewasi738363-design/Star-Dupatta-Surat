# Star Dupatta — Website Redesign

A fully redesigned, modern, animated version of the Star Dupatta website —
same content and links as the current site (Home, Collection, About, Reels,
Contact), rebuilt with a big-brand look and feel.

## What's new
- Full-screen animated hero with parallax-style zoom
- Sticky navbar that turns solid on scroll + mobile menu
- Scroll-reveal animations throughout
- Scrolling marquee strip (Bandhani, Georgette, Chiffon, etc.)
- Filterable product gallery (Embroidered / Embellished / Solid)
- 15-shade colour palette showcase
- Instagram reels grid linking to your real reels
- Contact section with Call / WhatsApp / Instagram cards + embedded Google
  Map of your shop
- Floating WhatsApp button on every page
- Fully responsive (mobile, tablet, desktop)

## Files
```
index.html        → the whole site (one page, sections linked by nav)
css/style.css      → all styling / design system
js/main.js         → animations, filter, mobile menu
assets/            → your photos, logo, colour swatches
```

## How to publish this (replace your current GitHub Pages site)
1. Open your GitHub repo: `nareshdewasi738363-design/Star-Dupatta-Surat`
2. Delete the old files (or just overwrite them).
3. Upload all files from this folder — keep the same folder structure
   (`index.html` at the root, `css/`, `js/`, `assets/` as sub-folders).
4. Commit / save changes. GitHub Pages updates automatically in 1–2 minutes.
5. Visit `nareshdewasi738363-design.github.io/Star-Dupatta-Surat/` to see it live.

No build step, no dependencies — it's plain HTML/CSS/JS, works anywhere
(GitHub Pages, Netlify, Vercel, or any basic hosting).

## To add more products later
Open `index.html`, find the `<!-- COLLECTION / GALLERY -->` section, and
copy one `.g-item` block — swap the image path, alt text, category
(`data-cat="embroidered"` / `"embellished"` / `"solid"`) and name. Drop the
new photo into `assets/gallery/`.

## Note
The Google Map and Google Fonts (Playfair Display / Poppins) load from the
internet, so they'll display correctly once this is live on the web — they
won't show in a locally-opened file without internet.
