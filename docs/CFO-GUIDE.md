# CFO Guide — MELTZ Website: Project Overview, Costs & Decisions

**For:** Chief Financial Officer (and senior management)
**Purpose:** A one-stop guide to the MELTZ website project — what it is, what it
costs to build and run, and the decisions that need sign-off before launch.
**Status:** Site is a *prototype*; content is under department review; nothing
is live or paid for yet.

> **All figures are estimates** (pricing checked ~Sept 2026 and rounded). Costs
> in **USD**; convert to ZMW at current rates. Always verify final quotes at
> checkout. None of the "recurring" costs apply today — they only start when
> the site is put into production.

---

## 1. The project in one page

The company needs a corporate website (www.meltz.co.zm) for customers,
partners, suppliers, job seekers and investors. A working prototype is already
built (all 13 pages, responsive, SEO-ready, secure headers). What remains is:

1. **Content approval** — 9 departments are reviewing their sections
   (`docs/dept-review/`); placeholders must be replaced with facts.
2. **Going live** — domain, hosting, email, and a real contact form.
3. **Ongoing** — small monthly running costs + maintenance time.

**Bottom line (recommended path):** a company-hosted, managed-platform site can
go live for roughly **US$240–300 in one-off setup** plus **US$350–650 per year**
in recurring costs (domain + email + optional paid hosting/CMS). A genuinely
free option exists that costs only ~**US$260/yr** (domain + email) with hosting
at $0.

---

## 2. What costs what (recurring, per year)

| Item | Free/low path | Recommended | Notes |
|---|---|---|---|
| Domain `.co.zm` | ~$142 | ~$142 | Renewal ~$142/yr; register ~$127–160 first year (Zambia-resident entity) |
| Hosting | $0 (free tier) | $20–240 | Vercel Hobby $0; Netlify Pro $20/mo flat; Vercel Pro $20/seat/mo; Cloudflare ~free |
| Email `info@meltz.co.zm` | $0 (if existing mail) | $72–90 | Google Workspace / Microsoft 365 ~$6–7.50 per user/mo |
| SSL / CDN | $0 | $0 | Included by managed hosting |
| Contact-form backend | $0 | $0–120 | Free tiers cover a small site; paid ~$10/mo if volume grows |
| Analytics + monitoring | $0 | $0 | Free tiers |
| CMS later (optional) | n/a | $0–228 | Only if HR/Marketing edit content themselves |
| **Yearly subtotal** | **~$142 (plus email if new)** | **~$240–650** | Excluding maintenance hours |

### Hosting options in detail

| Option | Cost | Good for | Watch out for |
|---|---|---|---|
| **Vercel** Hobby / Pro | $0 / $20 per seat/mo | Easiest for this tech stack; free tier launches today | Pro charges per user (5 staff = $100/mo) |
| **Netlify** Free / Personal / Pro | $0 / $9 / $20 flat/mo | Flat team pricing (unlimited members); forms included | Credit-based fair-use model |
| **Cloudflare Pages** | ~$0 | Generous free tier, unlimited bandwidth | Slightly more technical to set up |
| **Company VPS / in-house server** | $10–50/mo + IT time | Full control, data stays in-house | IT must patch, secure, back up, monitor — real hidden cost |
| **Local Zambian web agency hosting** | varies ($15–60/mo) | Local support, handles everything | Lock-in and quality vary; get a written quote |

---

## 3. One-off costs to launch (setup)

| Task | Est. cost / hours | Notes |
|---|---|---|
| Register domain + DNS | ~$127–160 (fee) | Registrar requires a Zambia-resident organisation |
| Set up hosting + deployment pipeline | $0–200 (or 2–6 h IT) | One-time engineering; free tiers available |
| Email mailboxes | $0 (or 2–4 h) | Only if new mail domain |
| Contact-form backend (make the form send) | ~$0–50 or 4–8 h | Small code task; provider free tier |
| Analytics + Search Console | ~0–2 h | Free |
| Legal pages: privacy policy, terms, cookies | 4–8 h + legal review | **Required** before going public; cost depends on legal counsel |
| Final content population from dept reviews | 8–20 h | Marketing to consolidate dept feedback |
| Photography / data sheets / approved images | varies | Replace placeholders (see dept pack) |
| **One-off subtotal** | **~US$240–300** (fees + ~20–40 IT/eng hours) | Exact figure depends on internal vs external work |

---

## 4. Ongoing maintenance (time, not just money)

The site is low-maintenance but not zero-maintenance. Estimate 2–8 hours per
month depending on activity:

| Activity | Frequency | Est. time |
|---|---|---|
| Content updates (news, jobs, photos) | monthly | 2–4 h (less with a CMS) |
| Software/security updates (framework patches) | monthly | 1–2 h |
| Monitor analytics + uptime | monthly | 0.5–1 h |
| Test contact form + email | quarterly | 0.5 h |
| Annual security review | yearly | 2–4 h |

*If internal time is scarce, budget for an external developer retainer
(typical US$25–75/h depending on provider) — roughly **US$300–1,200/yr**.*

---

## 5. Year-one cash summary (recommended path)

| | Amount |
|---|---|
| Domain (year 1) | ~$142 |
| Hosting Pro (12 months) | ~$240 |
| Email (2 users, 12 months) | ~$145–180 |
| Form backend / misc | ~$0 |
| One-off setup (fees only) | ~$130–160 |
| **Non-staff total, year 1** | **~US$660–720** |
| *With free-tier hosting instead* | *~US$420* |
| Plus external maintenance (if used) | +$300–1,200 |

---

## 6. Decisions needed from the CFO

Please sign off (or amend) the following:

| # | Decision | Option chosen |
|---|---|---|
| 1 | **Hosting approach** | ☐ Free tier ($0) ☐ Managed paid ($20–240/yr) ☐ Agency-managed ☐ Company server |
| 2 | **Domain** — register `www.meltz.co.zm` under a company account (~$142/yr) | ☐ Yes ☐ Use other domain |
| 3 | **Email domain** — confirm meltz.co.zm vs meltz.com.zm; set up `info@` mailbox | ☐ |
| 4 | **Contact form** — where enquiries go (shared inbox) and who answers | ☐ |
| 5 | **CMS now or later** — let departments edit content themselves, or keep free (IT-edited) | ☐ Now ☐ Later ☐ Never |
| 6 | **Legal pages** — approve drafting cost for privacy/terms | ☐ |
| 7 | **Budget owner** — cost centre to hold hosting/domain/email invoices | ☐ |
| 8 | **Launch target** — date to aim for once content is approved | ☐ |

---

## 7. Risks the CFO should know

1. **Content risk:** the site today shows placeholder numbers and claims
   (e.g. "most technologically advanced facility in Africa", capacity/revenue
   figures, demo jobs and news). Publishing before approval would put unverified
   statements on the public site. Department reviews handle this — but sign-off
   is the CFO/MD's call.
2. **Email domain mismatch:** site shows `info@meltz.co.zm` and
   `gphiri@meltz.com.zm` — two different domains. Confirm the official one.
3. **Contact form currently sends nothing.** It will look functional but no
   enquiry will arrive until the backend is built.
4. **No legal pages** exist (privacy policy, terms). Recommended before launch.
5. **Account ownership:** domain/hosting must be registered to the company, in a
   password manager, or the company can lose control if staff leave.
6. **No backups/monitoring yet** — part of go-live work (see IT doc).
7. **Exchange-rate exposure:** external invoices are billed in USD.

---

## 8. Approval

| | Name | Signature | Date |
|---|---|---|---|
| Prepared by (website owner) | | | |
| Approved by CFO | | | |
| Approved by Managing Director | | | |