# Content & Image Requirements — MELTZ Website

Everything below replaces the `[PLACEHOLDER]`, demo, or generated content currently
in the prototype. Gather and approve these items before converting the site to production.

Two files define almost all of it:
- **Text/content** → `src/data/*.ts` (one file per content type)
- **Images** → `public/images/*` (currently generated placeholder SVGs)

---

## 1. Company Information (Management Approval Required)

| Item | Where it lives today | Notes |
|---|---|---|
| Official company name & legal entity | `src/data/company.ts` → `name` | Confirm exact legal wording |
| Registered address | `src/data/contact.ts` → `address` | Street, city, province |
| Official email address | `src/data/contact.ts` → `email` | Currently `[OFFICIAL EMAIL]` |
| Official telephone | `src/data/contact.ts` → `phone` | Currently `[OFFICIAL TELEPHONE]` |
| Office hours | `src/app/contact/page.tsx` | Currently `[OFFICE HOURS TO BE CONFIRMED]` |
| Production statistics | `src/data/company.ts` → `stats` | Currently `XX+` / `XX MT` — capacity, headcount, countries served, years expertise |
| Company history / milestone dates | `src/app/about/page.tsx` | Timeline placeholder; dates only if verified |
| Proposed values (Excellence, Integrity, etc.) | `src/data/company.ts` → `values` | Approve as official or revise |
| Certifications & standards | `src/app/quality/page.tsx` | Currently "available on request" |
| Product technical specifications | `src/app/products/page.tsx` | Sizes, hardness ranges, composition — only if approved |
| Sustainability targets/commitments | `src/app/sustainability/page.tsx` | Currently flagged as to-be-confirmed |
| Production security/site-visit info | `src/app/operations/page.tsx` | Only what you want public |

---

## 2. Product Information

`src/data/products.ts`

For each product, confirm or provide:
- Product name
- Short description (card) and full description (page)
- Application list (mill types / ore types)
- Feature bullets
- **Technical data sheet** (diameter range, hardness, chemistry) — only if approved
- Photography (see Images)

Current demo products:
1. Grinding Balls
2. High-Performance Grinding Media
3. Mining Milling Solutions

If the real product range differs, edit the array — the pages render from it automatically.

---

## 3. Careers Information

`src/data/careers.ts` — all listings are DEMO, including "IT Support Assistant".

For each real opening provide:
- Job title, department, location, employment type
- Description and requirements
- Application instructions (how applications are received today)

Also confirm the "Why Work With Us" pillar text (`whyWorkWithUs`) matches your employer-branding message.

---

## 4. News Content

`src/data/news.ts` — 6 demo articles. For real articles provide per item:
- Title, slug, category, publish date
- Summary (2–3 sentences) + full body text
- Hero image
- **Category list** (currently: Company, Technology, Safety, Community, People, Industry)

---

## 5. Key Copy to Authorise

These headlines/taglines are currently draft copy written for the prototype.
Review and approve or rewrite:

- Hero: "ENGINEERING GRINDING MEDIA FOR A STRONGER MINING INDUSTRY"
- About: "A Strategic Partner in Mining Manufacturing"
- Products: "Grinding Media Built for Demanding Applications"
- Process: "Supporting the Mineral Processing Journey"
- Manufacturing: "Manufacturing in Zambia's Mining Heartland"
- Quality: "Quality That Performs Under Pressure"
- Operations: "Engineered for Industrial Performance"
- Careers: "Build Your Career in Industrial Manufacturing"

---

## 6. Images Needed

Current files are **generated placeholders** in `public/images/`. Replace each
with an approved photo **at the same filename**.

### Format recommendations
- **Format:** JPG (photos), WEBP for new production work
- **Width:** 1600px+ for full-width/hero; 1200px for cards
- **Aspect:** landscape 4:3 or 16:9, subject-centred
- **No grain/noise, no watermarks, consistent lighting**
- Licence: owned by company or royalty-free for commercial use

### Hero / full-width backgrounds
| File | Intended subject |
|---|---|
| `hero-mining.*` | Mining operation or plant — dark, high-contrast, works behind white text |
| `contact-bg.*` | Industrial/plant wide shot (very dim; used behind text) |
| `manufacturing.*` | Factory interior / steel production / workers in PPE |

### Page heroes
| File | Subject |
|---|---|
| `about-hero.*` / `about-story.*` / `about-factory.*` / `about-people.*` | Facility, team, production |
| `products-hero.*` | Grinding media / plant |
| `operations-hero.*` + `operations-1`…`operations-5` | One per operations pillar (Manufacturing, QC, Technical, Supply/Logistics, Regional) |
| `quality-hero.*` / `quality-lab.*` | Laboratory, metallurgical testing, QC |
| `sustainability-hero.*` / `sustainability-community.*` | People, environment, community |
| `careers-hero.*` | Team / operators / training |
| `news-hero.*` | Generic editorial background |
| `contact-hero.*` | Facility exterior / reception |

### Products
| File | Subject |
|---|---|
| `product-grinding-balls.*` | Grinding balls close-up (foreground) vs mill |
| `product-high-performance.*` | Premium media / pack shot |
| `product-milling.*` | Mill / SAG mill application |

### News cards
`news-factory.*`, `news-quality.*`, `news-safety.*`, `news-community.*`,
`news-partnership.*`, `news-sustainability.*` — one image per demo article;
replace alongside each real article.

### Brand assets
- **Logo** → `src/components/Logo.tsx` (inline SVG mark + wordmark). Provide your approved logo as SVG + high-res PNG and we'll swap it in.
- **Favicon / app icon** → `src/app/icon.svg`, `src/app/manifest.ts`
- **Open Graph / social share image** → not yet wired; provide 1200×630 brand image.

> Note: the site uses CSS background images (via `background-image` in JSX and
> `src/data/*`), so files can be swapped without code changes.

---

## 7. Site / Legal Details

| Item | Where |
|---|---|
| Production domain | `src/app/sitemap.ts` + `src/app/robots.ts` — currently `https://www.meltz.co.zm` (placeholder) |
| Privacy Policy page | Not created; Footer links to `#` |
| Terms of Use page | Not created; Footer links to `#` |
| LinkedIn URL | `src/data/navigation.ts` → footer "Connect" — currently `#` |
| Form processor / email destination | `src/components/ContactForm.tsx` — currently demo (client-only "Thank you" state). Decide: email service, CRM, or API route |

---

## 8. Priority Order

1. **Brand assets** (logo, favicon, OG image) — smallest effort, biggest visual impact
2. **Contact details** (email, phone, address, hours) — required before launch
3. **Photography sweep** — replace hero + page heroes first, then products/news
4. **Company stats & history** — only verified numbers
5. **Product specs + certifications** — only if approved for publication
6. **Legal pages + real domain** — last, before production switch

---

## Demo markers still in the code (search for these to audit)

Sensitive strings to grep when reviewing:
- `[OFFICIAL EMAIL]`, `[OFFICIAL TELEPHONE]`, `[OFFICIAL ADDRESS]`
- `[OFFICE HOURS TO BE CONFIRMED]`
- `XX`, `XX MT`, `(DEMO — Management confirmation required)`
- `DEMO CONTENT`, `Illustrative`, `[Placeholder]`
- `[Article content — to be provided and approved]`
- `Website prototype — content subject to management review and approval`