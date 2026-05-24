import fs from 'node:fs';
import path from 'node:path';

export type CmsMenuItem = {
  label: string;
  href: string;
  order: number;
};

export type CmsPage = {
  slug: string;
  title: string;
  menuLabel: string;
  section: string;
  summary: string;
  body: string;
  showInMenu: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CmsMaterial = {
  id: string;
  title: string;
  description: string;
  url: string;
  fileName: string;
  mimeType: string;
  size: number;
  createdAt: string;
};

export type CmsContent = {
  menuItems: CmsMenuItem[];
  pages: CmsPage[];
  materials: CmsMaterial[];
};

const contentPath = path.join(process.cwd(), 'content', 'site-content.json');
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

const emptyContent: CmsContent = {
  menuItems: [],
  pages: [],
  materials: [],
};

export function slugify(value: string) {
  const translit: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh', з: 'z', и: 'y', і: 'i', ї: 'i', й: 'i',
    к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
    ч: 'ch', ш: 'sh', щ: 'shch', ь: '', ю: 'iu', я: 'ia',
  };

  return value
    .trim()
    .toLowerCase()
    .split('')
    .map((char) => translit[char] ?? char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || `page-${Date.now()}`;
}

export function readCmsContent(): CmsContent {
  try {
    if (!fs.existsSync(contentPath)) {
      return emptyContent;
    }

    return {
      ...emptyContent,
      ...JSON.parse(fs.readFileSync(contentPath, 'utf8')),
    };
  } catch {
    return emptyContent;
  }
}

export function writeCmsContent(content: CmsContent) {
  fs.mkdirSync(path.dirname(contentPath), { recursive: true });
  fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
}

export function getCmsMenuItems() {
  const content = readCmsContent();
  const pageMenuItems = content.pages
    .filter((page) => page.showInMenu)
    .map((page, index) => ({
      label: page.menuLabel || page.title,
      href: `/${page.slug}`,
      order: 100 + index,
    }));

  return [...content.menuItems, ...pageMenuItems].sort((a, b) => a.order - b.order);
}

export function getCmsPage(slug: string) {
  return readCmsContent().pages.find((page) => page.slug === slug);
}

export function upsertCmsPage(input: {
  title: string;
  slug?: string;
  menuLabel?: string;
  section?: string;
  summary?: string;
  body: string;
  showInMenu?: boolean;
}) {
  const content = readCmsContent();
  const now = new Date().toISOString();
  const slug = slugify(input.slug || input.title);
  const existing = content.pages.find((page) => page.slug === slug);
  const page: CmsPage = {
    slug,
    title: input.title.trim(),
    menuLabel: (input.menuLabel || input.title).trim(),
    section: (input.section || 'Матеріали').trim(),
    summary: (input.summary || '').trim(),
    body: input.body.trim(),
    showInMenu: Boolean(input.showInMenu),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };

  content.pages = existing
    ? content.pages.map((item) => (item.slug === slug ? page : item))
    : [page, ...content.pages];
  writeCmsContent(content);
  return page;
}

export function addCmsMenuItem(input: { label: string; href: string; order?: number }) {
  const content = readCmsContent();
  const href = input.href.startsWith('/') ? input.href : `/${input.href}`;
  const item = {
    label: input.label.trim(),
    href,
    order: input.order ?? content.menuItems.length + 50,
  };
  content.menuItems = [...content.menuItems.filter((menuItem) => menuItem.href !== href), item];
  writeCmsContent(content);
  return item;
}

export async function saveCmsUpload(file: File, title: string, description: string) {
  const content = readCmsContent();
  fs.mkdirSync(uploadsDir, { recursive: true });

  const bytes = Buffer.from(await file.arrayBuffer());
  const safeName = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ''))}${path.extname(file.name).toLowerCase()}`;
  const filePath = path.join(uploadsDir, safeName);
  fs.writeFileSync(filePath, bytes);

  const material: CmsMaterial = {
    id: `${Date.now()}`,
    title: title.trim() || file.name,
    description: description.trim(),
    url: `/uploads/${safeName}`,
    fileName: file.name,
    mimeType: file.type || 'application/octet-stream',
    size: bytes.length,
    createdAt: new Date().toISOString(),
  };

  content.materials = [material, ...content.materials];
  writeCmsContent(content);
  return material;
}
