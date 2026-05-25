# Local News And Documents Design

Date: 2026-05-25.

## Scope

This change migrates only the latest news and key documents from `lcptodcz.lviv.ua` into the current project. It does not attempt to recreate the full historical archive of the old site.

The public site must stop sending users to the old site for news and locally managed documents. External official sources such as `zakon.rada.gov.ua`, `diia.gov.ua`, or other government services can remain external when they are the canonical source.

## Current State

The project already has:

- static pages for the main public sections;
- a JSON and Netlify Blob-backed CMS repository in `src/lib/cms.ts`;
- admin forms for pages, menu items, and file uploads;
- local upload serving through `/uploads/[file]`.

Missing or incomplete pieces:

- no standalone `/news` route;
- homepage news cards link to `lcptodcz.lviv.ua`;
- news is static in `src/data/site.ts`, not editable in the current CMS;
- uploaded materials are visible in admin and CMS detail pages, but `/documents` still renders only static grouped links;
- several cards in course, student, and employer sections still use old-site placeholder links.

## Data Model

Extend `CmsContent` with:

- `news`: ordered list of local news entries.

Each news entry stores:

- `slug`;
- `title`;
- `summary`;
- `body`;
- `date`;
- `imageUrl`;
- `sourceUrl` as optional migration provenance, not used as the public click target;
- `createdAt`;
- `updatedAt`.

Documents continue to use the existing `materials` collection. The key behavior change is that public document views must read from `materials` and serve files through `/uploads/...`.

## Public UX

Add `/news`:

- hero with "Новини";
- newest news first;
- card grid with image, date, title, and summary;
- empty state if no CMS news exists.

Add `/news/[slug]`:

- local detail page with title, date, image, and article body;
- back link to `/news`;
- no public "read on old site" CTA.

Update homepage:

- use CMS news when available, falling back to seeded latest news;
- "Усі новини" links to `/news`;
- each news card links to `/news/[slug]`.

Update `/documents`:

- show uploaded materials from the current CMS first;
- keep official legal reference groups as secondary external references;
- remove any implication that documents are stored on the old site.

Update navigation and sitemap:

- add "Новини" to the main nav;
- include `/news` and local news detail pages in the sitemap.

## Admin UX

Add an admin form for creating or updating a news item:

- title;
- slug;
- date;
- summary;
- body;
- optional image upload or image URL.

For this iteration, deletion and rich text editing are out of scope. Plain paragraph text is enough and matches existing CMS page behavior.

## Migration Seed

Seed only the latest news visible on the old homepage as of 2026-05-25 and a small set of key document/material records. If local file bytes are not available during implementation, create the structure and use admin-uploaded files as the authoritative path rather than linking to old-site files.

## Testing

Add repository tests for:

- saving and reading CMS news;
- news menu/sitemap data using local slugs;
- document materials retaining `/uploads/...` URLs.

Add rendering or smoke coverage where practical for:

- `/news`;
- `/news/[slug]`;
- `/documents` showing uploaded materials.

Manual verification:

- homepage news links stay inside the current app;
- `/documents` opens local `/uploads/...` files for uploaded materials;
- no new `lcptodcz.lviv.ua/news` public links remain.
