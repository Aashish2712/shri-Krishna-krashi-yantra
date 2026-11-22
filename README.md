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

Milestones 1 and 2 are complete (homepage, brand foundation, product catalogue and product detail pages). Milestone 3 adds the About, Manufacturing & Quality, Become a Dealer, Request a Quote and Contact pages.

**The forms are frontend prototypes.** They validate entries and show clear messages, but nothing is sent, saved or stored: no API call is made and no browser storage is used for form data. Each form says so on the page. There is no backend yet.

## Structure

- `src/styles/`: `tokens.css` (colours, type, spacing, breakpoints), `global.css` (reset, base type, focus), `layout.css` (container and section helpers)
- `src/components/layout/`: Header and Footer, each with its own CSS
- `src/components/home/`: one component and CSS file per homepage section
- `src/components/ui/`: Button, SectionHeading, ProductCard, PageHero, CtaBand, PagePlaceholder
- `src/components/forms/`: shared form pieces (FormField, FormCard, FormSummary, PrototypeNotice, SelectedProductCard) and the three forms (QuoteForm, DealerForm, ContactForm)
- `src/forms/`: per-form values, validation rules and the payload mapper for a future API
- `src/utils/`: pure helpers (`validation.ts`, `fieldId.ts`)
- `src/layouts/`: shared public-site layout (skip link, header, page outlet, footer)
- `src/pages/`: one component per route, plus `NotFoundPage`
- `src/data/`: typed content (company details, navigation, products, homepage copy)
- `src/types/`: TypeScript types for the data modules
- `src/services/`: data access (`productService.ts` is the single place to replace with an API call later)
- `src/hooks/`: `useDocumentMeta` (title and description), `useMobileNav`, `useEnquiryForm` (form state and validation)
- `src/routes.tsx`: route configuration
- `public/logo/sk-logo.jpeg`: the client's original logo, unmodified. Do not edit, recolour, redraw or replace it.
- `public/images/`: resized and compressed copies of genuine catalogue photographs (see `docs/REQUIRED_ASSETS.md`)
- `src/i18n`: reserved, currently empty

## Forms and future backend integration

- Form state and validation live in `src/hooks/useEnquiryForm.ts` and `src/forms/*.ts`; the components only render.
- Errors appear on submit and update as the user types. They are not shown on blur, because the layout shift can swallow the click on the submit button.
- Each `src/forms/*Form.ts` exports a `to*Payload` function that shapes the data the way a Django REST Framework endpoint could accept it (snake_case, optional email as `null`). Nothing calls it yet.
- To connect a backend later: call the API from `handleSubmit` in `useEnquiryForm` after validation passes, add real sending, success and failure statuses, and remove the prototype notices in `src/data/formContent.ts`.
- The quote form reads its product list from `src/services/productService.ts`. Product pages link to `/request-quote?product=<slug>`; unknown slugs are ignored.
- The router stores scroll positions in `sessionStorage` (`ScrollRestoration`). No form data is stored.

## Design notes

- Colours are sampled from the supplied logo (green about #009440, red about #D82018, charcoal about #1F1A17). These are measured values, not an official brand specification. A darker green (#00702f) is used for text and buttons so contrast stays accessible.
- Fonts: a system font stack with Noto Sans Devanagari, Nirmala UI and Mangal as Devanagari fallbacks. No web font is loaded. A self-hosted font can be added later if the client wants a distinctive typeface.
- Breakpoints: 48em (tablet) and 64em (desktop). They are documented at the top of `tokens.css` because CSS variables cannot be used in media queries.
- Page copy lives in `src/data/` so it can be client-approved and translated without touching components. No language switcher exists yet; it will be added together with real Hindi content.

## SEO notes

- Page titles and meta descriptions are set in the browser by `useDocumentMeta`. Search engines that run JavaScript will see them, but social previews and some crawlers read only the initial HTML.
- This is a client-rendered single-page app. Before launch, decide on pre-rendering or server rendering for the public pages.
- Every public page now sets its own title and description in the browser. Still to do before launch: Open Graph / social preview tags, canonical URLs, `robots.txt` and a sitemap, and structured data for the business once contact details are approved.
- Hindi pages will need `lang="hi"` and language-specific URLs or alternates.
