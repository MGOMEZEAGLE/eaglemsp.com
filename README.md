# Eagle Network Solutions — Website

Static marketing site. **No build step.** Plain HTML + CSS, with React/Babel and Google Fonts loaded from CDN. Deploys to Vercel as-is.

## Deploy to Vercel through GitHub
1. Create a new GitHub repository.
2. Upload everything in this folder to the repo **root** (so `index.html` and `vercel.json` sit at the top level, not inside a subfolder).
3. In Vercel: **Add New… → Project → Import** your repo.
4. Framework Preset: **Other**. Build Command: **empty**. Output Directory: **empty** (root). Deploy.

`vercel.json` handles clean URLs, pretty-path rewrites, and 301 redirects. Push to GitHub and Vercel redeploys automatically.

## Nav structure
Home · Solutions · Industries · Pricing Calculator · About · Blog & News · Contact

## Shared code
- `site/chrome.js` — utility bar, unified header nav, footer, Organization/LocalBusiness JSON-LD (all pages)
- `site/page.js` — section builder for service/industry pages (Service + FAQPage JSON-LD)
- `pricing/` — native pricing calculator (model + styles)

## Before launch (flagged placeholders)
- Replace image placeholders in `assets/` and photo captions with real photography.
- **TimeZest:** the scheduling embed uses a placeholder URL — swap in your real booking URL in `site/page.js` (the `schedule` builder).
- **SmileBack:** paste the widget snippet into the `smileback-embed` div in `home/parts2.jsx` (fallback shows until then).
- Pricing calculator CTAs ("Book a Discovery Call", "Email Me This Estimate") currently link to Contact. Point them at TimeZest / your form handler when ready.
- Confirm LinkedIn/Instagram footer URLs; swap remaining placeholder team bios/blog content.
- The contact form and newsletter are front-end only. Wire them to your form handler / CRM.
