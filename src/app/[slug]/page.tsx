import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';
import { getCmsPage, readCmsContent } from '../../lib/cms';
import styles from './cms-page.module.css';

type PageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps) {
  const page = await getCmsPage(params.slug);
  return {
    title: page ? page.title : 'Сторінка',
    description: page?.summary,
  };
}

export default async function CmsPublicPage({ params }: PageProps) {
  const page = await getCmsPage(params.slug);
  const materials = (await readCmsContent()).materials;

  if (!page) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Link className={styles.backLink} href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            На головну
          </Link>
          <span className="eyebrow">{page.section}</span>
          <h1>{page.title}</h1>
          {page.summary ? <p>{page.summary}</p> : null}
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <article className={styles.article}>
            {page.body.split('\n').filter(Boolean).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          {materials.length > 0 ? (
            <aside className={styles.materials}>
              <h2>Матеріали</h2>
              <ul>
                {materials.map((material) => (
                  <li key={material.id}>
                    <a href={material.url} target="_blank" rel="noreferrer">
                      <Download size={17} aria-hidden="true" />
                      <span>{material.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </section>
    </div>
  );
}
