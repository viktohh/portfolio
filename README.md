# Victor Owolabi — Portfolio

Personal portfolio site built with [Astro](https://astro.build). Static output, no tracking, strict security headers.

## Editing content

| What | File |
|---|---|
| Name, bio, experience, projects, skills, certs, education | `src/data/site.ts` |
| Interactive network diagram (devices, links, scenarios) | `src/data/network.ts` |
| Résumé PDF (download button) | `public/Victor_Owolabi_Resume.pdf` |
| Link-preview image | `public/og.png` (source: `scripts/og-image.html`) |

## Commands

```sh
npm install        # first time only
npm run dev        # local dev server at http://localhost:4321 (live reload)
npm run build      # build static site into dist/
npm run preview    # serve the built site locally
npm run deploy     # build + deploy to Cloudflare (needs `npx wrangler login` once)
```

## Deploying

`wrangler.jsonc` deploys to the Cloudflare Worker named `portfolio`, i.e.
`https://portfolio.viktohtimmy.workers.dev` — **this replaces the site currently there.**

If you move to a custom domain, update the URL in:
- `astro.config.mjs` (`site`)
- `public/robots.txt`
- `public/.well-known/security.txt` (`Canonical`)
- `scripts/og-image.html` (then regenerate `og.png`)

## Security

`public/_headers` sets a strict Content-Security-Policy (no inline scripts or styles), HSTS,
X-Frame-Options, Referrer-Policy, Permissions-Policy, and cross-origin isolation headers.
`astro.config.mjs` forces Astro to emit scripts and CSS as files so the CSP can stay strict —
**don't add inline `<script>` or `style=""` attributes**, or the CSP will block them.

After deploying, check the result at <https://securityheaders.com>.

`public/.well-known/security.txt` expires **2027-11-24** — bump the date before then.

## Regenerating the link-preview image

Screenshot `scripts/og-image.html` at 1200×630, e.g. with Chrome:

```sh
chrome --headless=new --hide-scrollbars --window-size=1200,630 --screenshot=public/og.png scripts/og-image.html
```
