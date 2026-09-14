# Eagle Network Solutions — Website

Static marketing site. **No build step.** Plain HTML + CSS, with React/Babel and Google Fonts loaded from CDN. Deploys to Vercel as-is.

## Deploy to Vercel through GitHub
1. Create a new GitHub repository.
2. Upload everything in this folder to the repo **root** (so `index.html` and `vercel.json` sit at the top level, not inside a subfolder).
3. In Vercel: **Add New… → Project → Import** your repo.
4. Framework Preset: **Other**. Build Command: **empty**. Output Directory: **empty** (root). Deploy.

`vercel.json` handles clean URLs, pretty-path rewrites, and 301 redirects from the retired category URLs. Push to GitHub and Vercel redeploys automatically.

## Site structure

Nav: Home · Solutions · Industries · Pricing Calculator · About · Blog & News · Contact

**Solutions** (four categories, each its own indexable URL)
| Page | URL |
|---|---|
| Solutions hub | `/solutions` |
| Managed IT Support | `/managed-it-support` |
| Co-Managed Support | `/co-managed-support` |
| Remote-Only IT | `/remote-only-it` |
| AI as a Service | `/ai-as-a-service` |
| Cyber Insurance Readiness | `/cyber-insurance-readiness` |

Cybersecurity, Strategic IT, and Hardware & Physical Security are presented as **features within** these plans, not standalone categories.

**Industries:** hub + Municipalities, Manufacturing, Distribution, Professional Services, Property Management, Non-Profits.

**Other:** About (Who We Are / Our Team / Customer Reviews), Blog & News, Contact, Pricing Calculator, Privacy Policy, Accessibility Statement.

## Shared code
- `site/chrome.js` — utility bar, unified header nav, footer, Organization + two-location LocalBusiness JSON-LD, and the plain-English acronym tooltip system. Injected on every page.
- `site/page.js` — section builder for service/industry pages; emits Service + FAQPage JSON-LD.
- `site/site.css` — nav, footer, FAQ, tooltips, illustrated image panels.
- `pricing/` — native pricing calculator (model + styles).
- `home/parts3.jsx` — Local & Nearby, Featured Videos, blog grid, CTA band, contact modal.

## Before launch — assets still needed

1. **Photography.** No real photos yet. Every image slot renders a brand-safe navy/mist illustrated panel, and each caption describes the shot to source. To drop in a real photo, pass `imgSrc` (hero) or `mediaSrc` (feature/checklist sections) in that page's `PAGE_DATA`.
2. **TimeZest booking URL.** The embed is live and rendering. Set `window.EAGLE_TIMEZEST_URL` to Eagle's real booking link and the on-page "Booking URL needed" tag disappears automatically.
3. **SmileBack widget.** Currently showing the static 97% fallback card, **not** the live auto-updating widget. Paste the SmileBack embed snippet into the `smileback-embed` div in `home/parts2.jsx`; the fallback hides itself once the widget populates.
4. **Featured video embeds.** The homepage Featured Videos section (Dirty Partners, MFA, Fake CFO Email) shows branded play posters. Add each video's embed URL as `src` on its entry in the `videos` array in `home/parts3.jsx` and the iframe swaps in. Runtime badges are placeholders — update to real lengths.

## Also open
- Third homepage testimonial quote (slot reserved, labeled for a non-profit or manufacturer).
- Confirm the LinkedIn and Instagram footer URLs.
- Contact form and newsletter are front-end only (they show a success state). Wire them to your form handler / CRM.
- Pricing calculator CTAs link to Contact; point them at TimeZest when ready.
- Privacy Policy and Accessibility Statement are templates — review with counsel.

## Notes on two design decisions
- **Help desk email** is never written into the HTML. It is assembled in JS only after a visitor clicks "Show email address," which blocks scrapers without CAPTCHA friction. Same treatment on the top utility bar.
- **Old category URLs** (`/cybersecurity`, `/strategic-it`, `/hardware-physical-security`, `/co-managed-it`, `/it-support-plans`) 301 to `/managed-it-support` or `/solutions`. If those terms carry meaningful search traffic, consider adding thin capability landing pages later that funnel into the plans.
