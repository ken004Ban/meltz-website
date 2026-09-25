# MELTZ Website — Full Documentation

**Project:** Corporate website for **ME LongTeng Grinding Media (Zambia) Ltd (MELTZ)**
**Status:** Prototype / demo for internal review — not yet production
**Domain (planned):** https://www.meltz.co.zm

This document gives a complete overview of the website: what it is, what pages
exist, how it is built, how to run it, how to update content, and what must be
done before it can go live.

---

## 1. Overview

MELTZ is a grinding-media manufacturer in Kalumbila, Zambia, set up as a joint
venture between **ME Elecmetal** (Chile) and **Longteng** (China). The
website is a premium corporate site that presents the company to customers,
partners, and prospective employees.

The site is currently a **prototype**: text, numbers, photos, news, and job
listings are placeholders that must be replaced with approved company content
before public launch. See Section 9 for the launch checklist.

### Tech stack (one sentence)

Built with **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**,
styled around a deep-blue corporate identity (see Section 6).

---

## 2. Pages on the site

There are 11 main pages plus article pages and a custom 404 page.

| Page | URL | Description |
|---|---|---|
| Home | `/` | Marketing landing page: hero, capability strip, about, headline statistics, product cards, the mining/milling process, manufacturing split, quality pillars, sustainability, careers call-to-action, recent news, contact call-to-action |
| About Us | `/about` | Company story, the ME + Longteng partnership, purpose, company values (8), leadership team, our role in mining, and a history timeline (1993–Today) |
| Products | `/products` | The three product lines, each with features, applications, and a technical section (anchor links like `/products#grinding-balls`) |
| Operations | `/operations` | Five operations areas with photos, "operations at a glance" statistics, location rationale, and an embedded map of Kalumbila |
| Quality & Technology | `/quality` | Six quality pillars, a laboratory/process-control dashboard (mock-up), and testing/assurance content (ISO 9001 / ISO 14001 / OHSAS 18000) |
| Sustainability | `/sustainability` | Four sustainability pillars: People, Safety, Environment, Community |
| CSR | `/csr` | Corporate social responsibility: community commitment, focus areas (local employment, education, health, community engagement), and how MELTZ engages with communities |
| Procurement | `/procurement` | Procurement approach, category cards, principles, supplier value, responsible procurement |
| Gallery | `/gallery` | Filterable photo gallery (by category) with a lightbox viewer |
| Careers | `/careers` | "Why work with us" pillars and job listings (currently **demo** listings — clearly labelled) |
| News | `/news` | News index with category filter chips and article cards |
| News article | `/news/[article-link]` | Individual news article page with related-article suggestions |
| Contact | `/contact` | Facility and head-office addresses, contact details, and an inquiry form |
| 404 Not Found | (any bad URL) | Friendly "page not found" screen with links back |

### Shared elements on every page

- **Header** — logo, full site navigation, and a "Request Information" button.
  On mobile it becomes a slide-in menu.
- **Footer** —contact details, quick links, partner links (ME Elecmetal,
  Longteng), legal links, social icons, and a back-to-top button.
- **Breadcrumbs** showing the page's position in the site (except homepage).

---

## 3. Content is data — centralised and easy to update

All text and structured content lives in **`src/data/`** — one TypeScript file
per content type. Pages simply read from these files, which means:

- Non-developers can update text in clearly organised files.
- A content management system (CMS) such as Sanity, Strapi, or WordPress can be
  connected later **without restructuring the site** — the data files are
  designed to be replaced by a CMS "feed".

| File | What it controls |
|---|---|
| `src/data/navigation.ts` | Header menu links and footer link groups |
| `src/data/company.ts` | Company name, about text, partnership, values, statistics, the 5-step milling process, sustainability pillars, operations pillars, SEO text |
| `src/data/products.ts` | Product names, descriptions, applications, images, features, categories |
| `src/data/news.ts` | News articles (each with its own URL slug) and category filters |
| `src/data/careers.ts` | Job listings and "why work with us" points |
| `src/data/contact.ts` | Addresses, phone, email, inquiry-form options |
| `src/data/gallery.ts` | Gallery categories and image list |
| `src/data/team.ts` | Leadership team (name, role, photo, phone) and group photos |

### Images

- Images live in **`public/images/`** (plus subfolders `gallery/`, `operations/`,
  `team/`).
- Some are **generated placeholder graphics** (SVG/JPG pairs) that should be
  replaced with approved company photos. Keep the same filename, or update the
  path wherever it is referenced.
- `scripts/generate-images.js` regenerates the placeholder set.

---

## 4. Running the site locally / building

You need **Node.js** installed. Commands are run in the project folder.

| Task | Command |
|---|---|
| Install everything (first time) | `npm install` |
| Start development server | `npm run dev` → open http://localhost:3000 |
| Build a production bundle | `npm run build` |
| Preview the production build | `npm start` |
| Lint / check code style | `npm run lint` |

### Where to deploy

The site is a standard Next.js app. It can be hosted on any Node-capable
platform — common choices are Vercel, Netlify, or a company server (Node.js +
the production build). No special services or databases are required.

---

## 5. How the site is organised (for developers)

```
src/
  app/            pages and route files
    page.tsx      Homepage
    about/  products/  operations/  quality/
    sustainability/  procurement/  gallery/
    careers/  news/  contact/
    not-found.tsx   custom 404
    sitemap.ts      generates /sitemap.xml
    robots.ts       generates /robots.txt
    manifest.ts     generates /manifest.webmanifest
    layout.tsx      root layout, fonts, SEO metadata
    globals.css     design tokens (Tailwind v4)
  components/     reusable building blocks (header, footer, cards, etc.) — 20 components
  data/           all site content (Section 3)
```

- All imports use the alias `@/` → `src/` (e.g. `@/data/company`).
- **Tailwind CSS v4** — design tokens are defined in `src/app/globals.css`
  (there is no `tailwind.config.js`).
- Typography uses the **Inter** font.
- React/Next version note: this project uses Next.js 16; the news article page
  already follows its current (Promise-based) routing conventions.

---

## 6. Design & branding

The identity is an industrial corporate look inspired by international
mining-supplier brands (not copied from any one company).

| Token | Value | Use |
|---|---|---|
| MELTZ Blue | `#003B70` | Primary brand colour |
| Dark blue | `#002B52` | Footer / dark sections |
| Light blue | `#004B87` / `#0072BC` | Accents |
| Gold accent | `#D4A843` | Restrained highlight |
| Charcoal | `#17212B` | Body text |
| Light grey | `#F7F9FC` | Section backgrounds |
| White | `#FFFFFF` | Base |
| Font | Inter | All text |

Every page includes **SEO metadata** (title, description, Open Graph image for
social sharing), **sitemap.xml**, **robots.txt**, and **structured data**
(JSON-LD) for search engines — organisation, breadcrumbs, products, and news
articles.

---

## 7. Interactive features

- Contact form with validation and a spam-protection field (note: submission is
  currently **simulated** — see "before launch" below).
- Gallery with category filters and a keyboard-accessible lightbox.
- Scroll-reveal animations (respect reduced-motion accessibility settings).
- Responsive design — mobile header drawer, responsive tables/cards.
- Accessibility touches: skip-link, keyboard navigation, semantic markup.

---

## 8. Security & configuration highlights

- Custom security response headers on all pages (no clickjacking, no
  content-type sniffing, restrictive referrer policy, disabled camera/mic/geo
  permissions).
- Image optimisation enabled (AVIF/WebP) with safe SVG handling.
- No secrets or API keys in the codebase.

---

## 9. Before launch — checklist for management

The following items are placeholders or assumptions in the prototype and must be
confirmed/replaced before the site goes public (full detail in
`CONTENT-REQUIREMENTS.md`):

1. **Official contact details** — email and telephone numbers
   (`src/data/contact.ts`).
2. **Company statistics** — current values use `XX+` / `XX MT`
   (`src/data/company.ts`).
3. **Certifications & standards** — currently "available on request"
   (`src/app/quality/page.tsx`).
4. **Product technical data** — sizes, hardness, composition — only if approved
   for public release (`src/app/products/page.tsx`).
5. **News articles & job listings** — currently demo content (`src/data/news.ts`,
   `src/data/careers.ts`).
6. **Photos** — replace generated placeholders with approved images
   (`public/images/`).
7. **Legal / compliance pages** — privacy policy, terms; not yet built.
8. **Contact form backend** — the form currently only simulates submission; a
   real backend or email provider must be connected.
9. **Domain & analytics** — confirm www.meltz.co.zm and connect analytics
   (e.g. Google Analytics) if desired.
10. **Company history timeline** — dates in `src/app/about/page.tsx` should be
    verified.

---

## 10. Known items to note

- `/gallery` exists but is **not yet listed** in the generated sitemap.
- One component (`ImageTextSplit`) exists but is currently unused on any page.
- Tailwind v4 uses CSS-based configuration (no classic `tailwind.config` file).

---

## 11. Related documents

- `README.md` — quick start, structure, and design intent.
- `CONTENT-REQUIREMENTS.md` — the detailed content-gathering checklist.
- `docs/CFO-GUIDE.md` — management guide for the CFO: project overview, full
  hosting/running cost breakdown, year-one budget, risks, and sign-off
  decisions.
- `docs/dept-review/` — department content review pack: 10 files, one per
  responsible department (Finance, HR, Procurement, Operations, Quality,
  Safety, Sustainability, Sales & Marketing, IT, CSR). Each shows that
  department's
  current on-site content and a feedback table (add/remove/change). Start at
  `docs/dept-review/README.md`.
- `AGENTS.md` — technical note for AI assistant tooling (Next.js version).
- `docs/converted.md` — source reference material (scraped company profile).