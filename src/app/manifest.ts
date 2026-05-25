import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ЛЦПТО ДСЗ — Професійне навчання у Львові',
    short_name: 'ЛЦПТО ДСЗ',
    description: 'Львівський центр професійно-технічної освіти державної служби зайнятості',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffdf8',
    theme_color: '#113f67',
  };
}
