# Local News Documents Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add local latest-news pages and make key documents/materials resolve from this project's CMS storage instead of the old site.

**Architecture:** Extend the existing `src/lib/cms.ts` repository with a `news` collection, seed it from local content, and render public routes from CMS data. Keep uploaded document bytes in the current file store and make `/documents` read `materials` before showing external official legal references.

**Tech Stack:** Next.js 14 App Router, React, TypeScript, Node test runner, `tsx`, Netlify Blobs/local filesystem store, CSS Modules.

---

## File Structure

- Modify `src/lib/cms.ts`: add `CmsNewsItem`, normalize `news`, add `upsertCmsNews`, `getCmsNewsItem`, `getCmsNewsItems`.
- Modify `content/site-content.json`: seed latest news and key local material metadata if file bytes are available.
- Modify `tests/cms.test.ts`: add repository tests for news and upload URLs.
- Create `src/app/news/page.tsx`: news listing.
- Create `src/app/news/[slug]/page.tsx`: news detail route.
- Create `src/app/news/news.module.css`: shared news page styling.
- Modify `src/app/page.tsx`: consume local news and link to local routes.
- Modify `src/app/documents/page.tsx`: render CMS materials first.
- Modify `src/data/site.ts`: add local news seed shape or remove old external-news click targets.
- Modify `src/components/Header.tsx` or `src/data/site.ts`: add `/news` to nav.
- Modify `src/app/sitemap.ts`: include `/news` and local news slugs.

### Task 1: CMS News Repository

**Files:**
- Modify: `tests/cms.test.ts`
- Modify: `src/lib/cms.ts`

- [ ] **Step 1: Write the failing test**

Add this test inside `describe('createCmsRepository', ...)` in `tests/cms.test.ts`:

```ts
  it('stores local news entries in the content blob', async () => {
    const contentStore = new MemoryStore();
    const filesStore = new MemoryStore();
    const cms = createCmsRepository({
      contentStore,
      filesStore,
      now: () => new Date('2026-05-25T10:00:00.000Z'),
    });

    const item = await cms.upsertCmsNews({
      title: 'Знання, що рятують життя!',
      slug: 'znannia-shcho-riatuiut-zhyttia',
      summary: 'Навчання з домедичної допомоги у центрі.',
      body: 'Слухачі відпрацювали практичні навички домедичної допомоги.',
      date: '2026-05-13',
      imageUrl: '/images/news/znannia.jpg',
      sourceUrl: 'https://lcptodcz.lviv.ua/news/13-41-22-13-05-2026/',
    });

    const rawContent = await contentStore.get('site-content');
    const saved = JSON.parse(String(rawContent));
    const items = await cms.getCmsNewsItems();
    const bySlug = await cms.getCmsNewsItem('znannia-shcho-riatuiut-zhyttia');

    assert.equal(item.slug, 'znannia-shcho-riatuiut-zhyttia');
    assert.equal(saved.news[0].title, 'Знання, що рятують життя!');
    assert.equal(items[0].slug, 'znannia-shcho-riatuiut-zhyttia');
    assert.equal(bySlug?.date, '2026-05-13');
    assert.equal(bySlug?.sourceUrl, 'https://lcptodcz.lviv.ua/news/13-41-22-13-05-2026/');
  });
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: FAIL with `Property 'upsertCmsNews' does not exist` or `cms.upsertCmsNews is not a function`.

- [ ] **Step 3: Write minimal implementation**

In `src/lib/cms.ts`, add:

```ts
export type CmsNewsItem = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  date: string;
  imageUrl: string;
  sourceUrl?: string;
  createdAt: string;
  updatedAt: string;
};
```

Change `CmsContent` to include:

```ts
  news: CmsNewsItem[];
```

Change `emptyContent` and `normalizeContent` to include `news: []` and `news: content.news || []`.

Inside `createCmsRepository`, add:

```ts
  async function getCmsNewsItems() {
    const content = await readCmsContent();
    return [...content.news].sort((a, b) => b.date.localeCompare(a.date));
  }

  async function getCmsNewsItem(slug: string) {
    return (await readCmsContent()).news.find((item) => item.slug === slug);
  }

  async function upsertCmsNews(input: {
    title: string;
    slug?: string;
    summary?: string;
    body: string;
    date: string;
    imageUrl?: string;
    sourceUrl?: string;
  }) {
    const content = await readCmsContent();
    const timestamp = now().toISOString();
    const slug = slugify(input.slug || input.title);
    const existing = content.news.find((item) => item.slug === slug);
    const item: CmsNewsItem = {
      slug,
      title: input.title.trim(),
      summary: (input.summary || '').trim(),
      body: input.body.trim(),
      date: input.date,
      imageUrl: (input.imageUrl || '').trim(),
      sourceUrl: input.sourceUrl?.trim() || undefined,
      createdAt: existing?.createdAt || timestamp,
      updatedAt: timestamp,
    };

    content.news = existing
      ? content.news.map((newsItem) => (newsItem.slug === slug ? item : newsItem))
      : [item, ...content.news];
    await writeCmsContent(content);
    return item;
  }
```

Return and export those three functions from the repository.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`

Expected: PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add tests/cms.test.ts src/lib/cms.ts
git commit -m "feat: add local news to cms repository"
```

### Task 2: Seed Latest Local News

**Files:**
- Modify: `content/site-content.json`
- Modify: `src/data/site.ts`

- [ ] **Step 1: Write the failing test**

Add this test to `tests/cms.test.ts`:

```ts
  it('normalizes missing news to an empty list', async () => {
    const contentStore = new MemoryStore();
    const filesStore = new MemoryStore();
    const cms = createCmsRepository({
      contentStore,
      filesStore,
      seedContent: () => ({
        menuItems: [],
        pages: [],
        materials: [],
      } as never),
    });

    const content = await cms.readCmsContent();

    assert.deepEqual(content.news, []);
  });
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: FAIL before Task 1 is complete, or PASS after Task 1. If it passes after Task 1, keep it as regression coverage.

- [ ] **Step 3: Add local latest-news seed**

Update `content/site-content.json` with a `news` array containing these entries:

```json
{
  "slug": "znannia-shcho-riatuiut-zhyttia-13-05-2026",
  "title": "Знання, що рятують життя!",
  "summary": "Остання новина центру про практичні навички безпеки та домедичної допомоги.",
  "body": "Центр провів навчання, присвячене знанням і практичним навичкам, що допомагають діяти впевнено у критичних ситуаціях.",
  "date": "2026-05-13",
  "imageUrl": "https://rada.info/upload/users_files/36738974/1221de5053f77b71db68bd0f0d925721.png",
  "sourceUrl": "https://lcptodcz.lviv.ua/news/13-41-22-13-05-2026/",
  "createdAt": "2026-05-25T00:00:00.000Z",
  "updatedAt": "2026-05-25T00:00:00.000Z"
}
```

Add the next 4 latest homepage news using the same fields and local slugs. Keep `sourceUrl` only for provenance.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`

Expected: PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add tests/cms.test.ts content/site-content.json src/data/site.ts
git commit -m "data: seed latest local news"
```

### Task 3: Public News Routes

**Files:**
- Create: `src/app/news/page.tsx`
- Create: `src/app/news/[slug]/page.tsx`
- Create: `src/app/news/news.module.css`

- [ ] **Step 1: Write the failing smoke test**

Create `tests/news-routes.test.ts`:

```ts
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { slugify } from '../src/lib/cms';

describe('news routes', () => {
  it('uses stable local slugs for migrated news', () => {
    assert.equal(slugify('Знання, що рятують життя!'), 'znannia-shcho-riatuiut-zhyttia');
  });
});
```

- [ ] **Step 2: Run test to verify it passes as baseline**

Run: `npm test`

Expected: PASS. This is a baseline smoke test because App Router server components are verified by `next build` in Task 7.

- [ ] **Step 3: Implement `/news`**

Create `src/app/news/page.tsx`:

```tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getCmsNewsItems } from '../../lib/cms';
import styles from './news.module.css';

export const metadata = {
  title: 'Новини',
  description: 'Останні новини Львівського центру професійно-технічної освіти ДСЗ.',
};

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
  const news = await getCmsNewsItems();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Новини</span>
          <h1>Останні новини центру</h1>
          <p>Актуальні повідомлення, події, навчальні ініціативи та партнерські проєкти.</p>
        </div>
      </section>
      <section className={styles.list}>
        <div className="container">
          {news.length > 0 ? (
            <div className={styles.grid}>
              {news.map((item) => (
                <Link href={`/news/${item.slug}`} className={styles.card} key={item.slug}>
                  {item.imageUrl ? <Image src={item.imageUrl} alt={item.title} width={520} height={320} /> : null}
                  <div>
                    <time dateTime={item.date}>{new Intl.DateTimeFormat('uk-UA').format(new Date(item.date))}</time>
                    <h2>{item.title}</h2>
                    {item.summary ? <p>{item.summary}</p> : null}
                    <span>Читати <ArrowRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>Новини готуються до публікації.</p>
          )}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 4: Implement detail route**

Create `src/app/news/[slug]/page.tsx`:

```tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getCmsNewsItem } from '../../../lib/cms';
import styles from '../news.module.css';

type PageProps = { params: { slug: string } };

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps) {
  const item = await getCmsNewsItem(params.slug);
  return {
    title: item?.title || 'Новина',
    description: item?.summary,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const item = await getCmsNewsItem(params.slug);
  if (!item) notFound();

  return (
    <div className={styles.page}>
      <section className={styles.detailHero}>
        <div className="container">
          <Link className={styles.backLink} href="/news">
            <ArrowLeft size={17} aria-hidden="true" />
            До новин
          </Link>
          <time dateTime={item.date}>{new Intl.DateTimeFormat('uk-UA').format(new Date(item.date))}</time>
          <h1>{item.title}</h1>
          {item.summary ? <p>{item.summary}</p> : null}
        </div>
      </section>
      <section className={styles.articleWrap}>
        <div className="container">
          {item.imageUrl ? <Image className={styles.detailImage} src={item.imageUrl} alt={item.title} width={960} height={540} /> : null}
          <article className={styles.article}>
            {item.body.split('\n').filter(Boolean).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 5: Add CSS**

Create `src/app/news/news.module.css` with responsive card, hero, and article styles consistent with current pages.

- [ ] **Step 6: Verify**

Run: `npm test` and `npm run build`

Expected: both PASS.

- [ ] **Step 7: Commit**

Run:

```bash
git add tests/news-routes.test.ts src/app/news
git commit -m "feat: add local news pages"
```

### Task 4: Homepage And Navigation Use Local News

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/data/site.ts`
- Modify: `src/components/Header.tsx` or `src/data/site.ts`

- [ ] **Step 1: Write the failing check**

Run:

```bash
rg "lcptodcz\\.lviv\\.ua/news|href=\"https://lcptodcz\\.lviv\\.ua/\"" src/app/page.tsx src/data/site.ts
```

Expected before implementation: matches old news links.

- [ ] **Step 2: Update homepage**

Change `Home` to `async`, import `getCmsNewsItems`, and use:

```tsx
const localNews = await getCmsNewsItems();
```

Replace news hrefs with:

```tsx
<Link href={`/news/${item.slug}`} className={styles.newsCard} key={item.slug}>
```

Replace "Усі новини" with:

```tsx
<Link className={styles.textLink} href="/news">
  Усі новини <ArrowRight size={17} aria-hidden="true" />
</Link>
```

- [ ] **Step 3: Add nav item**

In `src/data/site.ts`, add:

```ts
{ href: '/news', label: 'Новини' },
```

after the home link or before contacts.

- [ ] **Step 4: Verify old news links are gone from homepage**

Run:

```bash
rg "lcptodcz\\.lviv\\.ua/news|href=\"https://lcptodcz\\.lviv\\.ua/\"" src/app/page.tsx
```

Expected: no output.

- [ ] **Step 5: Build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 6: Commit**

Run:

```bash
git add src/app/page.tsx src/data/site.ts
git commit -m "feat: route homepage news locally"
```

### Task 5: Documents Read Local Materials

**Files:**
- Modify: `src/app/documents/page.tsx`
- Modify: `tests/cms.test.ts`

- [ ] **Step 1: Write the failing behavior test**

Add to `tests/cms.test.ts`:

```ts
  it('keeps uploaded documents on local upload URLs', async () => {
    const contentStore = new MemoryStore();
    const filesStore = new MemoryStore();
    const cms = createCmsRepository({
      contentStore,
      filesStore,
      now: () => new Date('2026-05-25T12:00:00.000Z'),
    });
    const file = new File(['document'], 'Графік груп.pdf', { type: 'application/pdf' });

    const material = await cms.saveCmsUpload(file, 'Графік груп', 'Актуальний графік формування груп');

    assert.match(material.url, /^\/uploads\//);
    assert.doesNotMatch(material.url, /lcptodcz\.lviv\.ua/);
  });
```

- [ ] **Step 2: Run test**

Run: `npm test`

Expected: PASS if existing upload behavior already satisfies this. Keep as regression coverage.

- [ ] **Step 3: Update documents page**

Make `DocumentsPage` async and read:

```tsx
const { materials } = await readCmsContent();
```

Render a top section:

```tsx
{materials.length > 0 ? (
  <section className={styles.localMaterials}>
    <div className="container">
      <div className={styles.sectionHeader}>
        <span className="eyebrow">Документи центру</span>
        <h2>Файли з поточного сайту</h2>
      </div>
      <ul className={styles.materialList}>
        {materials.map((material) => (
          <li key={material.id}>
            <a href={material.url} target="_blank" rel="noreferrer">
              <FileText size={20} aria-hidden="true" />
              <span>
                <strong>{material.title}</strong>
                {material.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
) : null}
```

- [ ] **Step 4: Verify**

Run: `npm test` and `npm run build`

Expected: both PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add tests/cms.test.ts src/app/documents/page.tsx src/app/documents/documents.module.css
git commit -m "feat: show local documents on documents page"
```

### Task 6: Replace Old-Site Placeholder Cards

**Files:**
- Modify: `src/app/courses/page.tsx`
- Modify: `src/app/students/page.tsx`
- Modify: `src/app/employers/page.tsx`

- [ ] **Step 1: Locate old-site placeholders**

Run:

```bash
rg "https://lcptodcz\\.lviv\\.ua/" src/app/courses src/app/students src/app/employers
```

Expected before implementation: several matches.

- [ ] **Step 2: Replace with local targets**

Use local pages where they exist:

- graph/schedules, educational programs, presentations, qualification center: `/documents`;
- distance learning and admission info: `/students`;
- employer surveys and practice schedules: `/employers`;
- contacts/feedback: `/contacts`.

- [ ] **Step 3: Verify placeholders are gone**

Run:

```bash
rg "https://lcptodcz\\.lviv\\.ua/" src/app/courses src/app/students src/app/employers
```

Expected: no output.

- [ ] **Step 4: Build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/app/courses/page.tsx src/app/students/page.tsx src/app/employers/page.tsx
git commit -m "fix: replace old site placeholder links"
```

### Task 7: Sitemap And Final Verification

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Update sitemap**

Add `/news` to `staticPages`. Add CMS news entries:

```ts
const news = await getCmsNewsItems();
news.forEach((item) => {
  entries.push({
    url: `${BASE}/news/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  });
});
```

Make the sitemap function `async`.

- [ ] **Step 2: Run full verification**

Run:

```bash
npm test
npm run build
rg "lcptodcz\\.lviv\\.ua/news|href=\"https://lcptodcz\\.lviv\\.ua/\"" src/app src/components
```

Expected:

- tests PASS;
- build PASS;
- no old-site news/public placeholder links in app routes/components.

- [ ] **Step 3: Commit**

Run:

```bash
git add src/app/sitemap.ts
git commit -m "feat: include local news in sitemap"
```

## Self-Review

- Spec coverage: CMS news, local news routes, homepage links, documents from local uploads, nav, sitemap, and old-site placeholder cleanup are covered.
- Placeholder scan: no unfinished placeholder instructions remain.
- Type consistency: `CmsNewsItem`, `getCmsNewsItems`, `getCmsNewsItem`, and `upsertCmsNews` are used consistently across tasks.
