import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createCmsRepository } from '../src/lib/cms';

class MemoryStore {
  values = new Map<string, unknown>();
  metadata = new Map<string, Record<string, unknown>>();

  async get(key: string, options?: { type?: string }) {
    const value = this.values.get(key);
    if (value === undefined) {
      return null;
    }

    if (options?.type === 'arrayBuffer' && value instanceof Uint8Array) {
      return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
    }

    return value;
  }

  async set(key: string, value: unknown, options?: { metadata?: Record<string, unknown> }) {
    this.values.set(key, value);
    if (options?.metadata) {
      this.metadata.set(key, options.metadata);
    }
  }
}

describe('createCmsRepository', () => {
  it('persists pages and menu items in the content blob', async () => {
    const contentStore = new MemoryStore();
    const filesStore = new MemoryStore();
    const cms = createCmsRepository({ contentStore, filesStore });

    await cms.upsertCmsPage({
      title: 'Новий розділ',
      body: 'Текст сторінки',
      showInMenu: true,
    });
    await cms.addCmsMenuItem({ label: 'Документи', href: 'documents', order: 3 });

    const rawContent = await contentStore.get('site-content');
    const saved = JSON.parse(String(rawContent));

    assert.deepEqual(
      {
        slug: saved.pages[0].slug,
        title: saved.pages[0].title,
        body: saved.pages[0].body,
        showInMenu: saved.pages[0].showInMenu,
      },
      {
      slug: 'novyi-rozdil',
      title: 'Новий розділ',
      body: 'Текст сторінки',
      showInMenu: true,
      },
    );
    assert.deepEqual(
      {
        label: saved.menuItems[0].label,
        href: saved.menuItems[0].href,
        order: saved.menuItems[0].order,
      },
      {
      label: 'Документи',
      href: '/documents',
      order: 3,
      },
    );
  });

  it('stores uploaded material bytes and metadata in the file blob store', async () => {
    const contentStore = new MemoryStore();
    const filesStore = new MemoryStore();
    const cms = createCmsRepository({
      contentStore,
      filesStore,
      now: () => new Date('2026-05-24T12:00:00.000Z'),
    });
    const file = new File(['hello'], 'Наказ.pdf', { type: 'application/pdf' });

    const material = await cms.saveCmsUpload(file, 'Наказ', 'Опис');

    assert.equal(material.url, '/uploads/1779624000000-nakaz.pdf');
    assert.ok(await filesStore.get('1779624000000-nakaz.pdf', { type: 'arrayBuffer' }) instanceof ArrayBuffer);
    assert.deepEqual(filesStore.metadata.get('1779624000000-nakaz.pdf'), {
      fileName: 'Наказ.pdf',
      mimeType: 'application/pdf',
      size: 5,
    });
  });
});
