'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Grid3X3, LayoutList, MapPin, Send, Tag } from 'lucide-react';
import styles from './courses.module.css';

type Profession = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  duration: string;
  format: string;
  skills: string[];
};

export default function CoursesCatalog({
  professions,
  categories,
}: {
  professions: Profession[];
  categories: string[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? professions.filter((p) => p.category === active)
    : professions;

  const grouped = active
    ? [[active, filtered] as const]
    : categories.map((cat) => [cat, professions.filter((p) => p.category === cat)] as const);

  return (
    <>
      <nav className={styles.categoryStrip} aria-label="Фільтр за категоріями">
        <div className="container">
          <div className={styles.categoryList}>
            <button
              className={active === null ? styles.categoryActive : undefined}
              onClick={() => setActive(null)}
              type="button"
            >
              Усі
              <span className={styles.categoryCount}>{professions.length}</span>
            </button>
            {categories.map((category) => {
              const count = professions.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  className={active === category ? styles.categoryActive : undefined}
                  onClick={() => setActive(category)}
                  type="button"
                >
                  {category}
                  <span className={styles.categoryCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <section className={styles.catalog} id="catalog">
        <div className="container">
          <div className={styles.resultBar}>
            <span>
              {active ? (
                <>Категорія: <strong>{active}</strong> · {filtered.length} {filtered.length === 1 ? 'професія' : 'професій'}</>
              ) : (
                <>{professions.length} професій у {categories.length} категоріях</>
              )}
            </span>
            {active && (
              <button className={styles.resetBtn} onClick={() => setActive(null)} type="button">
                Скинути фільтр
              </button>
            )}
          </div>

          {grouped.map(([category, items]) => (
            <div className={styles.categoryBlock} key={category}>
              <div className={styles.categoryHeader}>
                <Tag size={20} aria-hidden="true" />
                <h2>{category}</h2>
              </div>
              <div className={styles.grid}>
                {items.map((profession) => (
                  <article className={styles.card} key={profession.slug}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={profession.image}
                        alt={`Професія: ${profession.title}`}
                        width={900}
                        height={620}
                      />
                      <span>{profession.category}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <h3>{profession.title}</h3>
                      <p>{profession.summary}</p>
                      <dl className={styles.meta}>
                        <div>
                          <Clock size={17} aria-hidden="true" />
                          <dt>Тривалість</dt>
                          <dd>{profession.duration}</dd>
                        </div>
                        <div>
                          <MapPin size={17} aria-hidden="true" />
                          <dt>Формат</dt>
                          <dd>{profession.format}</dd>
                        </div>
                      </dl>
                      <ul className={styles.skills}>
                        {profession.skills.map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                    </div>
                    <div className={styles.cardActions}>
                      <Link className="button buttonPrimary" href="/contacts">
                        <Send size={17} aria-hidden="true" />
                        Запитати про набір
                      </Link>
                      <Link href={`/courses/${profession.slug}`} aria-label={`Опис професії: ${profession.title}`}>
                        <ArrowRight size={18} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
