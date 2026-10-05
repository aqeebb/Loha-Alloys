# Green World — React Site

Rebuild of the Green World scrap-metal recycling site using React + Vite + Tailwind
(instead of Shopify), meant for free hosting on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## What's here

- `src/pages/Home.jsx` — hero, product categories grid, "why choose us" stats, about teaser
- `src/pages/About.jsx`
- `src/pages/Products.jsx` — sidebar of categories + detail panel + grade accordion (mirrors original site)
- `src/pages/Contact.jsx` — contact details + a form (not wired to send email yet, see below)
- `src/data/products.js` — all product copy/grades in one place, edit here to update content
- `src/components/PlaceholderImg.jsx` — colored placeholder blocks standing in for real photos

## Swapping in real images

1. Drop your images into `public/images/` (e.g. `public/images/aluminium.jpg`).
2. Replace `<PlaceholderImg label="..." gradient="..." className="..." />` with
   `<img src="/images/aluminium.jpg" alt="Aluminium scrap" className="..." />` wherever needed.
3. Same for the logo — replace the "GW" circle in `Navbar.jsx` with an `<img>` tag.

## Wiring the contact form

Right now the form in `Contact.jsx` just shows a "sent" message locally — it doesn't
actually send anything. Easiest free options:

- **Formspree** (formspree.io) — point the form's `action` at your Formspree endpoint, no backend needed.
- **EmailJS** — send straight from the browser using their SDK.
- A small **Vercel serverless function** under `/api` if you want full control.

## Deploying to Vercel (free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite (auto-detected). Build command `npm run build`, output dir `dist`.
4. Deploy — you'll get a free `*.vercel.app` URL, and you can attach your own domain
   (e.g. gweast.com) for free in Project Settings → Domains.

No monthly platform fee — you only pay if you buy a custom domain, and Vercel's free
tier is enough for a site like this.
