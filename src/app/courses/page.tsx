import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, CheckCircle2, GraduationCap, Laptop, Search, Sprout, Wallet } from 'lucide-react';
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

      <section className={styles.extras}>
        <div className="container">
          <div className={styles.extrasHeader}>
            <span className="eyebrow">Освітні послуги</span>
            <h2>Додаткові напрями та формати навчання</h2>
          </div>
          <div className={styles.extrasGrid}>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.extraCard}>
              <Calendar size={28} aria-hidden="true" />
              <h3>Графік формування груп 2026</h3>
              <p>Актуальний розклад набору нових груп слухачів за всіма професіями на поточний рік.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.extraCard}>
              <BookOpen size={28} aria-hidden="true" />
              <h3>Реєстр освітніх програм</h3>
              <p>Перелік затверджених освітніх програм на 2025-2026 навчальний рік.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.extraCard}>
              <Sprout size={28} aria-hidden="true" />
              <h3>Школа фермерства</h3>
              <p>Спеціалізована програма для тих, хто хоче розпочати або розвивати фермерське господарство.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.extraCard}>
              <GraduationCap size={28} aria-hidden="true" />
              <h3>Дуальне навчання</h3>
              <p>Поєднання теоретичного навчання у центрі з практичною роботою на підприємстві-партнері.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.extraCard}>
              <Laptop size={28} aria-hidden="true" />
              <h3>Дистанційне навчання</h3>
              <p>Можливість опанувати теоретичну частину онлайн для окремих програм та курсів.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.extraCard}>
              <Wallet size={28} aria-hidden="true" />
              <h3>Платні послуги</h3>
              <p>Короткострокові курси та програми підвищення кваліфікації на комерційній основі.</p>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.quality}>
        <div className="container">
          <div className={styles.qualityGrid}>
            <div>
              <span className="eyebrow">Якість навчання</span>
              <h2>Моніторинг якості професійного навчання</h2>
              <p>Центр постійно вдосконалює навчальні програми відповідно до потреб ринку праці та вимог роботодавців.</p>
            </div>
            <ul>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Оновлення програм на основі аналізу ринку праці регіону.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Залучення роботодавців до розробки навчальних планів.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Анкетування слухачів та роботодавців після завершення навчання.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Стажування педагогів на сучасних виробництвах.</li>
            </ul>
          </div>
        </div>
      </section>

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
