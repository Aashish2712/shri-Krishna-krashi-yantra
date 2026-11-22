# Shree Krishna Krashi Yantra: Frontend

Public website frontend for Shree Krishna Krashi Yantra (agricultural implements manufacturer, Tirla, Dhar, Madhya Pradesh).

Stack: Vite, React, TypeScript, React Router, regular CSS (one CSS file per component), npm.

## Requirements

- **Node.js 22 LTS (22.12 or newer) is recommended.** The current Vite setup (Vite 8.3.5 and `@vitejs/plugin-react` 6.1.2) declares `node: ^20.19.0 || >=22.12.0`, so Node 20.19 or newer in the 20 line also works. Older versions, including Node 18 and Node 20 before 20.19, are not supported.
- npm 10 or newer (the version bundled with Node 22 is fine).

## Run locally

```bash
npm install
npm run dev        # development server
npm run build      # type-check (tsc -b) and production build
npm run preview    # serve the production build
npm run lint       # oxlint
```

## Status

Milestone 1: brand foundation and homepage completed. Milestone 2 has started: the product catalogue and reusable product-detail page now use the approved local product data. The About, Manufacturing, Dealers, Request Quote and Contact pages remain placeholders. The quote and dealer pages do not submit anything yet, and there is no backend.

## Structure

- `src/styles/`: `tokens.css` (colours, type, spacing, breakpoints), `global.css` (reset, base type, focus), `layout.css` (container and section helpers)
- `src/components/layout/`: Header and Footer, each with its own CSS
- `src/components/home/`: one component and CSS file per homepage section
- `src/components/ui/`: Button, SectionHeading, ProductCard, PagePlaceholder
- `src/layouts/`: shared public-site layout (skip link, header, page outlet, footer)
- `src/pages/`: one component per route, plus `NotFoundPage`
- `src/data/`: typed content (company details, navigation, products, homepage copy)
- `src/types/`: TypeScript types for the data modules
- `src/services/`: data access (`productService.ts` is the single place to replace with an API call later)
- `src/hooks/`: `useDocumentMeta` (title and description), `useMobileNav`
- `src/routes.tsx`: route configuration
- `public/logo/sk-logo.jpeg`: the client's original logo, unmodified. Do not edit, recolour, redraw or replace it.
- `public/images/`: resized and compressed copies of genuine catalogue photographs (see `docs/REQUIRED_ASSETS.md`)
- `src/i18n`: reserved, currently empty

## Design notes

- Colours are sampled from the supplied logo (green about #009440, red about #D82018, charcoal about #1F1A17). These are measured values, not an official brand specification. A darker green (#00702f) is used for text and buttons so contrast stays accessible.
- Fonts: a system font stack with Noto Sans Devanagari, Nirmala UI and Mangal as Devanagari fallbacks. No web font is loaded. A self-hosted font can be added later if the client wants a distinctive typeface.
- Breakpoints: 48em (tablet) and 64em (desktop). They are documented at the top of `tokens.css` because CSS variables cannot be used in media queries.
- Page copy lives in `src/data/` so it can be client-approved and translated without touching components. No language switcher exists yet; it will be added together with real Hindi content.

## SEO notes

- Page titles and meta descriptions are set in the browser by `useDocumentMeta`. Search engines that run JavaScript will see them, but social previews and some crawlers read only the initial HTML.
- This is a client-rendered single-page app. Before launch, decide on pre-rendering or server rendering for the public pages.
- Still to do before launch: per-page titles and descriptions for the remaining pages, Open Graph / social preview tags, canonical URLs, `robots.txt` and a sitemap, and structured data for the business once contact details are approved.
- Hindi pages will need `lang="hi"` and language-specific URLs or alternates.
