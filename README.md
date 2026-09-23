# Eagle Network Solutions — Website

Static site, no build step. Deploys to Vercel as-is.

## Deploy to Vercel through GitHub
1. Create a new GitHub repository.
2. Upload everything in this folder to the repo **root** (`index.html` and `vercel.json` at the top level).
3. In Vercel: **Add New → Project → Import** your repo.
4. Framework Preset: **Other**. Build Command and Output Directory: leave empty. Deploy.

`vercel.json` handles clean URLs, rewrites, and 301 redirects.

## Before launch
1. **TimeZest link.** Set `TIMEZEST_URL` at the top of the schedule section in `site/page.js`. All six booking buttons read from it and open in a new tab.
2. **Blog post URLs and excerpts.** Add each post's `link` and `excerpt` in the `POSTS` array in `blog/app.jsx`.
3. **Photography.** Pass `imgSrc` / `mediaSrc` in a page's `PAGE_DATA`; illustrated panels show until then.
4. **Team photos and bios.** In `about/pages.jsx`. Bios read "Bio coming soon." until filled.
5. **SmileBack widget.** Paste the snippet into the `smileback-embed` div in `home/parts2.jsx`.
6. **Featured video embeds.** Add `src` per video in `home/parts3.jsx`.
7. **Third testimonial.** Add a real quote to `reviews` in `home/parts2.jsx`; the grid adds a column automatically.

## Also open
- Confirm LinkedIn and Instagram footer URLs.
- Confirm the SeedPod "discounted cyber insurance programs" claim is still accurate.
- Contact form and newsletter are front-end only; wire to your form handler.
- Privacy Policy and Accessibility Statement are templates; review with counsel.
