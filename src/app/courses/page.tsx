import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Search, Send, Tag } from 'lucide-react';
import { admissions, professions } from '../../data/site';
import styles from './courses.module.css';

export const metadata = {
  title: 'Професії та навчальні програми',
  description: 'Повний перелік професій Львівського центру ПТО ДСЗ із картками, фото, кваліфікаціями та посиланнями на джерела.',
};

const categories = Array.from(new Set(professions.map((profession) => profession.category)));

export default function CoursesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Каталог професій</span>
              <h1>Усі професії старого сайту, подані як зрозумілий каталог</h1>
              <p>
                Ми перенесли знайдені професійні напрями зі старої структури й перетворили їх на картки з категоріями,
                кваліфікаціями, практичними навичками та джерелами.
              </p>
            </div>
            <div className={styles.searchPanel} aria-label="Навігація каталогом">
              <Search size={22} aria-hidden="true" />
              <strong>{professions.length} професій</strong>
              <span>{categories.length} категорій: технічні напрями, транспорт, торгівля, сфера послуг, агросектор, IT.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoryStrip}>
        <div className="container">
          <div className={styles.categoryList} aria-label="Категорії професій">
            {categories.map((category) => (
              <a key={category} href={`#${category.toLowerCase().replaceAll(' ', '-')}`}>
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className="container">
          {categories.map((category) => (
            <div className={styles.categoryBlock} id={category.toLowerCase().replaceAll(' ', '-')} key={category}>
              <div className={styles.categoryHeader}>
                <Tag size={20} aria-hidden="true" />
                <h2>{category}</h2>
              </div>
              <div className={styles.grid}>
                {professions.filter((profession) => profession.category === category).map((profession) => (
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

      <section className={styles.steps}>
        <div className="container">
          <div className={styles.stepsHeader}>
            <span className="eyebrow">Вступ і наступний крок</span>
            <h2>Сценарій вступу має бути видимим одразу після каталогу</h2>
          </div>
          <ol>
            {admissions.map((step) => (
              <li key={step}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <Link className={styles.textLink} href="/contacts">
            Отримати консультацію <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
