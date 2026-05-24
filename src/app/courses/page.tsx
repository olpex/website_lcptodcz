import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Send } from 'lucide-react';
import { courses } from '../../data/site';
import styles from './courses.module.css';

export const metadata = {
  title: 'Навчальні програми',
  description: 'Каталог напрямів професійного навчання Львівського центру ПТО ДСЗ.',
};

export default function CoursesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Каталог навчання</span>
          <h1>Оберіть програму під вашу наступну роботу</h1>
          <p>Першу версію каталогу сфокусовано на напрямах, які вже звучать у новинах та матеріалах центру. Далі каталог можна підключити до CMS або EDBO-джерел.</p>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.grid}>
            {courses.map((course) => (
              <article className={styles.card} key={course.title}>
                <div className={styles.cardTop}>
                  <span>{course.group}</span>
                  <h2>{course.title}</h2>
                  <p>{course.outcome}</p>
                </div>
                <dl className={styles.meta}>
                  <div>
                    <Clock size={18} aria-hidden="true" />
                    <dt>Тривалість</dt>
                    <dd>{course.duration}</dd>
                  </div>
                  <div>
                    <MapPin size={18} aria-hidden="true" />
                    <dt>Формат</dt>
                    <dd>{course.format}</dd>
                  </div>
                </dl>
                <Link className="button buttonPrimary" href="/contacts">
                  <Send size={17} aria-hidden="true" />
                  Запитати про набір
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className="container">
          <div className={styles.stepsHeader}>
            <span className="eyebrow">Як вступити</span>
            <h2>Три кроки без зайвої бюрократії</h2>
          </div>
          <ol>
            <li>
              <strong>Зверніться до центру</strong>
              <span>Опишіть попередній досвід, бажану професію і зручний формат навчання.</span>
            </li>
            <li>
              <strong>Уточніть умови фінансування</strong>
              <span>Для зареєстрованих безробітних, ветеранів, роботодавців і слухачів можуть діяти різні механізми.</span>
            </li>
            <li>
              <strong>Почніть практику</strong>
              <span>Навчання відбувається з опорою на майстерні, полігони, реальні задачі й підготовку до роботи.</span>
            </li>
          </ol>
          <Link className={styles.textLink} href="/contacts">
            Отримати консультацію <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
