import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { admissions, professions } from '../../data/site';
import CoursesCatalog from './CoursesCatalog';
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
              <h1>Обери професію — почни навчання</h1>
              <p>
                {categories.length} категорій і {professions.length} професій з кваліфікаціями, практичними навичками та
                умовами вступу. Знайди свій напрям і залишай заявку.
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

      <CoursesCatalog professions={professions} categories={categories} />

      <section className={styles.steps}>
        <div className="container">
          <div className={styles.stepsHeader}>
            <span className="eyebrow">Вступ і наступний крок</span>
            <h2>Як вступити на навчання</h2>
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
