# GRWF — A kinder tomorrow, together

A responsive Gulshan-e-Ravi Welfare Foundation redesign built with React 19, TypeScript and Next.js-compatible App Router pages. Node.js powers development and builds. This source package is a conventional Next.js project ready for Node.js hosting or Vercel.

## Development & Vercel

Requires Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

Production:

```sh
npm run build
npm start
```

On Vercel, import the project, choose the Next.js preset and use the default build command. Set `NEXT_PUBLIC_SITE_URL` to your final domain so social metadata uses the right URL. This review has `robots: { index: false, follow: false }` in `app/layout.tsx`; change that for the approved public launch. No payment or email credentials are required for the current enquiry flows.

## Pages

- Home: editorial hero, animated accents, program filters, giving selector, gallery, FAQs.
- About: foundation story, values and timeline.
- Programs: searchable, filterable directory.
- Program details: six routes with services and contact links.
- Gallery: category filters and keyboard accessible native dialog lightbox.
- Contact: email enquiry builder and location selector.
- Donate: contribution selector, donation type and frequency, review and email draft.
- 404: useful return path.

## Content and editing

Program, location and gallery data live in `lib/grwf-data.ts`. Shared interactions live in `components/grwf.tsx`. Pages are in `app/`; the visual system and responsive behavior are in `app/globals.css`.

Official content was reviewed at https://grwf.org/ and its program pages. Photographs and the existing logo are sourced from the foundation's own website for this private redesign review. Check asset permissions before a public launch. Font assets are Figtree and Newsreader, available under the SIL Open Font License.

Facts, contact details and imagery are kept separate from original design copy. No beneficiary testimonials, fundraising targets, donation-to-service cost claims, or unverified impact totals are invented. The historical years 2008 and 2012 come from the official foundation history. The focus-area count describes the categories presented by this site, rather than a beneficiary total.

## Enquiries and donations

The contact form validates input and prepares a mailto draft to contact@grwf.org. It does not submit a message from the preview server. The giving selector prepares a donation enquiry, including the chosen amount, purpose, type and frequency. It does not take card information, transfer funds or create recurring payments. Payment provider credentials, current bank instructions, approved receipts and a sending service must be supplied and integrated before live collection is enabled.

Program-specific admissions enquiries use admissions@grwf.org, as listed by GRWF. Location addresses and phone links are sourced from the official hospital page. Visitors are advised to confirm availability and visiting hours directly.

## Accessibility and motion

Semantic headings, skip navigation, keyboard focus styles, accessible controls, responsive images, native dialog focus behavior and reduced-motion handling are included. Gallery arrows and Escape work with the lightbox. Scroll reveals are progressive enhancements: content stays visible without JavaScript or IntersectionObserver.

## Validation

Run `npm run typecheck` and `npm run build`. Type checking, conventional Next.js production compilation and the separate review hosting build passed. Automated checks verified internal link targets and local image references. Browser visual QA was unavailable in the build environment.

This review site is separate from the existing grwf.org site and does not change its DNS, hosting or payment arrangements.
