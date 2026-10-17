# Become AI Native site

## Hosting
- Static site on GitHub Pages (repo `becomeainative-io/landing-page`, public, branch `main`, root folder), custom domain `becomeainative.io`.
- The org's main repo `becomeainative.io-main-project` is separate and stays private. Don't move site files into it.
- **Never delete `CNAME`.** It must contain exactly `becomeainative.io`.
- Deploying = committing and pushing to `main`. GitHub Pages rebuilds automatically in about a minute.

## Structure
- Each page is a folder with an `index.html` (e.g. `/waitlist/index.html`, `/thanks/index.html`).
- Main page is `/index.html`. It is currently a "coming soon" placeholder.
- Shared assets live in `/shared/` (images in `/shared/img/`, favicon at `/shared/favicon.svg`).
- Links to shared files are root-relative (`/shared/...`), which only works on the custom domain.
- The domain sits behind Cloudflare, which caches CSS/JS for hours. Pages link `site.css` and `site.js` with a version query (`?v=2`); bump it on every page whenever either file changes, or visitors get the old file.

## Pasting HTML from Claude Design
- Extract inline/base64 images into `/shared/img/` and reference them with relative links.
- Keep the design exactly as given. Replace `/shared/site.css` (placeholder styles) with the export's styles.
- Add favicon, a `<title>` and a `<meta name="description">`.

## Replacing a page with a new Claude Design export
- Keep the existing form wiring, favicon and meta tags.

## Forms (Tally)
- The Cohort 3 application form is the Tally form `4aXEqb` ("Cohort 3 application", BecomeAiNative.io workspace), embedded on `/` and `/waitlist/`:
  `<iframe class="tally-embed" src="https://tally.so/embed/4aXEqb?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;page=<page>" loading="lazy" title="Cohort 3 application"></iframe>`
- `page` fills the form's hidden field so submissions show which page they came from.
- Edit questions, styling and notifications in Tally, not here. Spec: `content/tally/tally-cohort-0-application.md` in the main project.
- `site.js` listens for Tally's `postMessage` events: on `Tally.FormSubmitted` it sets the `bain_lead` flag and goes to `/thanks/`. Tally's embed script (`tally.so/widgets/embed.js`) is not loaded, so there is no auto-height: the iframe height is fixed in `site.css` (`.tally-embed`). Raise it if questions are added.
- Web3Forms is no longer used.

## Analytics + cookie consent (every page)
- Every page — including new ones — must include this snippet in `<head>`, right after the favicon link:
  ```html
  <!-- Google Analytics 4 + cookie consent (gtag.js loads only after Accept) -->
  <link rel="stylesheet" href="/shared/consent.css">
  <script src="/shared/consent.js"></script>
  ```
- Privacy-strict: `consent.js` injects `gtag.js` **only after the visitor clicks Accept** (or has accepted before). With no choice or Decline there must be zero requests to Google domains. Never add a `<script src="https://www.googletagmanager.com/...">` tag to a page, and never default consent to granted.
- GA4 Measurement ID is set in `consent.js`. While it is the placeholder `G-XXXXXXXXXX`, no banner is shown and GA never loads.
- `/thanks/` fires the `generate_lead` event when the `bain_lead` sessionStorage flag (set by `site.js` when the Tally form is submitted) is present. It only reaches Google if the visitor accepted.
- Footers link to `/privacy/`. Update the privacy page if new data collection or third-party services are added.

## No third-party requests
- Pages may only load files from this site. The only allowed external requests are Google Analytics after Accept, and the Tally form iframe (`tally.so`) on pages with the application form.
- Fonts: system font stack for now. New fonts must be self-hosted in `/shared/fonts/` (woff2 + licence). Never link to Google Fonts or any other CDN.
- When a Claude Design export includes font links or CDN scripts, replace them with self-hosted files or static HTML.

## SEO + sharing (every page)
- Every page's `<head>` has, right after `<meta name="description">`:
  - `<link rel="canonical" href="https://becomeainative.io/<path>/">` — always the https://becomeainative.io URL with trailing slash (`/` for home). Skip on noindex pages.
  - Open Graph + Twitter card tags: `og:type`, `og:site_name` (Become AI Native), `og:title` and `og:description` (same as `<title>` / meta description), `og:url` (canonical URL), `twitter:card`, `twitter:title`, `twitter:description`. Copy the block from `/waitlist/index.html`.
  - Once a 1200x630 share image exists at `/shared/img/og-image.png`, add `og:image` (+ width, height, alt) and `twitter:image` with absolute URLs, and switch `twitter:card` to `summary_large_image`.
- Pages that shouldn't be indexed (`/thanks/`, `404.html`, any utility page) get `<meta name="robots" content="noindex">` instead of a canonical, and stay out of the sitemap.
- New indexable page → add it to `sitemap.xml` (with `<lastmod>`). Update `<lastmod>` when a page's content changes meaningfully.
- `robots.txt` allows everything and points to the sitemap. Don't block pages there; use noindex instead.
- `404.html` at the root is GitHub Pages' not-found page. Use root-relative links (`/shared/...`) on it.
