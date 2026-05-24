# UI/UX Audit And Redesign Direction

## Critical Findings

- The current website hides valuable content behind CMS noise: translator widgets, accessibility links, admin login forms, poll blocks, footer badges and repeated service elements appear in the main reading path.
- Navigation is page-centric instead of task-centric. Users have to infer where to go for training, employer cooperation, documents or contacts.
- The homepage is dominated by news and random photos, while the highest-intent actions are not visible early enough.
- Contact data exists, but it is not shaped into actions such as call, email, map, consultation or employer request.
- Long official lists, especially normative documents, need grouping, filtering and hierarchy before they are useful.
- Accessibility exists as a separate alternate version, but the default site still needs accessible contrast, focus states, semantic landmarks and clear link text.
- Visual identity feels inherited from a generic school CMS rather than from a modern public-service training center.

## Redesign Principles

- Put user intent first: prospective learner, employer, official-information visitor.
- Convert content into decisions: course cards, consultation routes, employer cooperation steps, grouped documents.
- Use real center materials and recent news imagery instead of unrelated stock visuals.
- Keep the site fast: static rendering, small CSS modules, no client JavaScript for navigation, no fake controls.
- Make the default experience accessible: skip link, semantic navigation, visible focus, high contrast, descriptive controls.

## Initial IA

- `/` - homepage portal with role-based entry points, featured programs, proof points, recent updates.
- `/courses` - first version of the training catalog and enrollment steps.
- `/employers` - cooperation offer for businesses and workflow.
- `/about` - mission, context and institutional trust.
- `/documents` - grouped official information and EDBO link.
- `/contacts` - actionable contact page with phone, email, address, director and mail form.

## Implementation Notes

- Central content lives in `src/data/site.ts` so the first CMS migration point is clear.
- Header and footer use only real routes.
- Remote images are restricted in `next.config.mjs` to the current site image sources.
- The next iteration should add a real CMS/data source for courses, news and documents.
