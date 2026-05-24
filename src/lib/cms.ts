import fs from 'node:fs';
import path from 'node:path';
import { getStore } from '@netlify/blobs';

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

type StoreGetOptions = {
  type?: 'arrayBuffer';
  consistency?: 'strong' | 'eventual';
};

type StoreSetOptions = {
  metadata?: Record<string, unknown>;
};

type CmsStore = {
  get(key: string, options?: StoreGetOptions): Promise<string | ArrayBuffer | null> | string | ArrayBuffer | null;
  set(key: string, value: string | ArrayBuffer | Uint8Array | Buffer, options?: StoreSetOptions): Promise<void> | void;
};

type CmsRepositoryOptions = {
  contentStore: CmsStore;
  filesStore: CmsStore;
  seedContent?: () => CmsContent;
  now?: () => Date;
};

const contentKey = 'site-content';
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

function normalizeContent(content: Partial<CmsContent> = {}): CmsContent {
  return {
    menuItems: content.menuItems || [],
    pages: content.pages || [],
    materials: content.materials || [],
  };
}

function readSeedContent(): CmsContent {
  try {
    if (!fs.existsSync(contentPath)) {
      return emptyContent;
    }

    return normalizeContent(JSON.parse(fs.readFileSync(contentPath, 'utf8')));
  } catch {
    return emptyContent;
  }
}

class FileSystemStore implements CmsStore {
  constructor(private baseDir: string, private jsonFile?: string) {}

  async get(key: string, options?: StoreGetOptions) {
    const filePath = this.resolvePath(key);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    if (options?.type === 'arrayBuffer') {
      const buffer = fs.readFileSync(filePath);
      return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }

    return fs.readFileSync(filePath, 'utf8');
  }

  async set(key: string, value: string | ArrayBuffer | Uint8Array | Buffer) {
    const filePath = this.resolvePath(key);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    if (typeof value === 'string') {
      fs.writeFileSync(filePath, value, 'utf8');
      return;
    }

    fs.writeFileSync(filePath, Buffer.isBuffer(value) ? value : Buffer.from(value as Uint8Array));
  }

  private resolvePath(key: string) {
    if (key === contentKey && this.jsonFile) {
      return this.jsonFile;
    }

    return path.join(this.baseDir, key);
  }
}

function createBlobStore(name: string): CmsStore {
  const store = getStore({ name, consistency: 'strong' });

  return {
    get(key, options) {
      return store.get(key, options as never) as Promise<string | ArrayBuffer | null>;
    },
    async set(key, value, options) {
      const blobValue = typeof value === 'string'
        ? value
        : value instanceof ArrayBuffer
          ? value
          : value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
      await store.set(key, blobValue as never, options as never);
    },
  };
}

function createDefaultStores() {
  if (process.env.NETLIFY || process.env.NETLIFY_BLOBS_CONTEXT || process.env.NETLIFY_SITE_ID) {
    return {
      contentStore: createBlobStore('lcptodcz-cms'),
      filesStore: createBlobStore('lcptodcz-files'),
    };
  }

  return {
    contentStore: new FileSystemStore(path.dirname(contentPath), contentPath),
    filesStore: new FileSystemStore(uploadsDir),
  };
}

export function createCmsRepository(options: CmsRepositoryOptions) {
  const now = options.now || (() => new Date());
  const seedContent = options.seedContent || (() => emptyContent);

  async function readCmsContent(): Promise<CmsContent> {
    try {
      const raw = await options.contentStore.get(contentKey, { consistency: 'strong' });
      if (!raw) {
        return seedContent();
      }

      return normalizeContent(JSON.parse(String(raw)));
    } catch {
      return seedContent();
    }
  }

  async function writeCmsContent(content: CmsContent) {
    await options.contentStore.set(contentKey, JSON.stringify(normalizeContent(content), null, 2));
  }

  async function getCmsMenuItems() {
    const content = await readCmsContent();
    const pageMenuItems = content.pages
      .filter((page) => page.showInMenu)
      .map((page, index) => ({
        label: page.menuLabel || page.title,
        href: `/${page.slug}`,
        order: 100 + index,
      }));

    return [...content.menuItems, ...pageMenuItems].sort((a, b) => a.order - b.order);
  }

  async function getCmsPage(slug: string) {
    return (await readCmsContent()).pages.find((page) => page.slug === slug);
  }

  async function upsertCmsPage(input: {
    title: string;
    slug?: string;
    menuLabel?: string;
    section?: string;
    summary?: string;
    body: string;
    showInMenu?: boolean;
  }) {
    const content = await readCmsContent();
    const timestamp = now().toISOString();
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
      createdAt: existing?.createdAt || timestamp,
      updatedAt: timestamp,
    };

    content.pages = existing
      ? content.pages.map((item) => (item.slug === slug ? page : item))
      : [page, ...content.pages];
    await writeCmsContent(content);
    return page;
  }

  async function addCmsMenuItem(input: { label: string; href: string; order?: number }) {
    const content = await readCmsContent();
    const href = input.href.startsWith('/') ? input.href : `/${input.href}`;
    const item = {
      label: input.label.trim(),
      href,
      order: input.order ?? content.menuItems.length + 50,
    };
    content.menuItems = [...content.menuItems.filter((menuItem) => menuItem.href !== href), item];
    await writeCmsContent(content);
    return item;
  }

  async function saveCmsUpload(file: File, title: string, description: string) {
    const content = await readCmsContent();
    const bytes = Buffer.from(await file.arrayBuffer());
    const timestamp = now().getTime();
    const safeName = `${timestamp}-${slugify(file.name.replace(/\.[^.]+$/, ''))}${path.extname(file.name).toLowerCase()}`;

    await options.filesStore.set(safeName, bytes, {
      metadata: {
        fileName: file.name,
        mimeType: file.type || 'application/octet-stream',
        size: bytes.length,
      },
    });

    const material: CmsMaterial = {
      id: `${timestamp}`,
      title: title.trim() || file.name,
      description: description.trim(),
      url: `/uploads/${safeName}`,
      fileName: file.name,
      mimeType: file.type || 'application/octet-stream',
      size: bytes.length,
      createdAt: now().toISOString(),
    };

    content.materials = [material, ...content.materials];
    await writeCmsContent(content);
    return material;
  }

  async function getCmsUpload(fileName: string) {
    const content = await readCmsContent();
    const material = content.materials.find((item) => item.url === `/uploads/${fileName}`);
    const data = await options.filesStore.get(fileName, { type: 'arrayBuffer', consistency: 'strong' });

    if (!data || !(data instanceof ArrayBuffer)) {
      return null;
    }

    return {
      data,
      material,
      mimeType: material?.mimeType || 'application/octet-stream',
      fileName: material?.fileName || fileName,
    };
  }

  return {
    readCmsContent,
    writeCmsContent,
    getCmsMenuItems,
    getCmsPage,
    upsertCmsPage,
    addCmsMenuItem,
    saveCmsUpload,
    getCmsUpload,
  };
}

const defaultRepository = createCmsRepository({
  ...createDefaultStores(),
  seedContent: readSeedContent,
});

export const readCmsContent = defaultRepository.readCmsContent;
export const writeCmsContent = defaultRepository.writeCmsContent;
export const getCmsMenuItems = defaultRepository.getCmsMenuItems;
export const getCmsPage = defaultRepository.getCmsPage;
export const upsertCmsPage = defaultRepository.upsertCmsPage;
export const addCmsMenuItem = defaultRepository.addCmsMenuItem;
export const saveCmsUpload = defaultRepository.saveCmsUpload;
export const getCmsUpload = defaultRepository.getCmsUpload;
