import styles from './page.module.css';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Твоє майбутнє починається тут</h1>
            <p>Отримай сучасну професію за підтримки держави. Навчання для безробітних та всіх бажаючих.</p>
            <div className={styles.heroBtns}>
              <Link href="/courses" className="btn btn-primary">Переглянути курси</Link>
              <Link href="/about" className="btn btn-outline" style={{ marginLeft: '1rem', background: 'white' }}>Про центр</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <BookOpen size={40} className={styles.statIcon} />
              <h3>20+</h3>
              <p>Напрямів навчання</p>
            </div>
            <div className={styles.statItem}>
              <Users size={40} className={styles.statIcon} />
              <h3>5000+</h3>
              <p>Випускників щороку</p>
            </div>
            <div className={styles.statItem}>
              <Award size={40} className={styles.statIcon} />
              <h3>100%</h3>
              <p>Якість освіти</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Популярні напрями</h2>
            <Link href="/courses" className={styles.viewAll}>Всі курси <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.courseGrid}>
            {[
              { title: 'ІТ-технології', desc: 'Від основ комп’ютерної грамотності до тестування ПЗ.' },
              { title: 'Сфера послуг', desc: 'Перукарі, манікюрники, кухарі та інші затребувані фахи.' },
              { title: 'Технічні професії', desc: 'Електрогазозварники, водії, оператори котелень.' }
            ].map((course, i) => (
              <div key={i} className={styles.courseCard}>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <Link href="/courses" className={styles.cardLink}>Детальніше</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
