import type { MetadataRoute } from 'next';
import { professions } from '../data/site';

const BASE = 'https://lcptodcz.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/courses',
    '/students',
    '/employers',
    '/contacts',
    '/documents',
    '/team',
    '/facilities',
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/courses' ? 0.9 : 0.7,
  }));

  professions.forEach((p) => {
    entries.push({
      url: `${BASE}/courses/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return entries;
}
