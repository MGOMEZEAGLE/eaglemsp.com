# Eagle Network Solutions — Website

Static marketing site. **No build step.** Plain HTML + CSS, with React/Babel and Google Fonts loaded from CDN. Deploys to Vercel as-is.

## Deploy to Vercel through GitHub
1. Create a new GitHub repository.
2. Upload everything in this folder to the repo **root** (so `index.html` and `vercel.json` sit at the top level, not inside a subfolder).
3. In Vercel: **Add New… → Project → Import** your repo.
4. Framework Preset: **Other**. Build Command: **empty**. Output Directory: **empty** (root). Deploy.

`vercel.json` handles clean URLs, pretty-path rewrites, and 301 redirects from retired URLs. Push to GitHub and Vercel redeploys automatically.

## Site structure

Nav: Home · Solutions · Industries · Pricing Calculator · About · Blogs and News · Contact

**Solutions** (four categories, each its own indexable URL)
| Page | URL |
|---|---|
| Solutions hub | `/solutions` |
| Managed IT Support | `/managed-it-support` |
| Co-Managed Support | `/co-managed-support` |
| Remote-Only IT | `/remote-only-it` |
| Secure AI | `/secure-ai` |
| Cyber Insurance Readiness | `/cyber-insurance-readiness` |

Cybersecurity, Strategic IT, and Hardware & Physical Security are presented as **features within** these plans, not standalone categories.

**Industries:** hub + Municipalities, Manufacturing, Distribution, Professional Services, Property Management, Non-Profits.

**Other:** About (Who We Are / Our Team / Customer Reviews), Blogs and News, Contact, Pricing Calculator, Privacy Policy, Accessibility Statement.

## Shared code
- `site/chrome.js` — utility bar, unified header nav, footer, Organization + two-location LocalBusiness JSON-LD, and the plain-English acronym tooltip system. Injected on every page.
- `site/page.js` — section builder for service/industry pages; emits Service + FAQPage JSON-LD.
- `site/site.css` — nav, footer, FAQ, tooltips, illustrated image panels.
- `solutions/shared.jsx` — React components for the tabbed pages (About, Blog).
- `pricing/` — native pricing calculator (model + styles).
- `home/parts3.jsx` — Local & Nearby, Featured Videos, blog grid, CTA band, contact modal.

## Before launch — assets still needed

1. **Blog post URLs.** All 30 posts on `Blog.html` currently link to `/blog-news/` rather than their individual permalinks. Add each post's real URL to its `link` field in the `POSTS` array in `blog/app.jsx`.
2. **Blog excerpts.** Titles, dates, and categories are real; `excerpt` is intentionally empty and cards show "Summary to be added." Fill in the `excerpt` field per post.
3. **Photography.** No real photos yet. Every image slot renders a brand-safe navy/mist illustrated panel; each caption describes the shot to source. Pass `imgSrc` (hero) or `mediaSrc` (feature/checklist) in a page's `PAGE_DATA` to drop in a real photo.
4. **TimeZest booking URL.** The embed is live and rendering. Set `window.EAGLE_TIMEZEST_URL` to the real booking link and the "Booking URL needed" tag disappears automatically.
5. **SmileBack widget.** Currently the static 97% fallback card, **not** the live auto-updating widget. Paste the SmileBack embed snippet into the `smileback-embed` div in `home/parts2.jsx`; the fallback hides itself.
6. **Featured video embeds.** Homepage Featured Videos (Dirty Partners, MFA, Fake CFO Email) show branded play posters. Add each video's embed URL as `src` in the `videos` array in `home/parts3.jsx`. Runtime badges are placeholders.

## Also open
- Third homepage testimonial quote (slot reserved, labeled for a non-profit or manufacturer).
- Confirm the LinkedIn and Instagram footer URLs.
- Contact form and newsletter are front-end only (they show a success state). Wire them to your form handler / CRM.
- Pricing calculator CTAs link to Contact; point them at TimeZest when ready.
- Privacy Policy and Accessibility Statement are templates — review with counsel.

## Notes on three decisions
- **Help desk email** is never written into the HTML. It is assembled in JS only after a visitor clicks "Show email address," blocking scrapers without CAPTCHA friction. Same treatment on the top utility bar.
- **Blogs vs News.** Posts categorized *Service Alert* render with a navy **News** tag; everything else gets a mist **Blog** tag. A "Show: Everything / Blogs / News" filter sits above the topic filter. Override per post with `type: "News"`.
- **Old category URLs** (`/cybersecurity`, `/strategic-it`, `/hardware-physical-security`, `/co-managed-it`, `/it-support-plans`, `/ai-as-a-service`) 301 to their new homes. If the retired security terms carry meaningful search traffic, consider adding thin capability landing pages later that funnel into the plans.
