import styles from './about.module.css';
import { Target, History, Award, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Про Львівський центр ПТО ДСЗ</h1>
          <p>Ми є частиною державної системи професійно-технічної освіти, що спеціалізується на навчанні дорослого населення.</p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <h2>Наша місія</h2>
              <p>Надання якісних освітніх послуг, що відповідають сучасним вимогам ринку праці, для швидкого та ефективного працевлаштування наших випускників.</p>
              <ul className={styles.features}>
                <li><CheckCircle size={20} color="var(--accent-color)" /> Безкоштовне навчання для безробітних</li>
                <li><CheckCircle size={20} color="var(--accent-color)" /> Видача сертифікатів державного зразка</li>
                <li><CheckCircle size={20} color="var(--accent-color)" /> Сучасні навчальні бази та полігони</li>
                <li><CheckCircle size={20} color="var(--accent-color)" /> Допомога з проживанням у гуртожитку</li>
              </ul>
            </div>
            <div className={styles.missionIcon}>
              <Target size={200} opacity={0.1} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h3>2003</h3>
              <p>Рік заснування</p>
            </div>
            <div className={styles.statBox}>
              <h3>100+</h3>
              <p>Досвідчених майстрів</p>
            </div>
            <div className={styles.statBox}>
              <h3>85%</h3>
              <p>Рівень працевлаштування</p>
            </div>
            <div className={styles.statBox}>
              <h3>10</h3>
              <p>Локацій навчання</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className="container">
          <div className={styles.historyContent}>
            <History size={48} className={styles.historyIcon} />
            <h2>Історія та розвиток</h2>
            <p>За понад 20 років роботи ми пройшли шлях від невеликого навчального закладу до одного з провідних центрів професійно-технічної освіти в Україні. Сьогодні наш центр має сучасні лабораторії, власні полігони для навчання водіїв та операторів спецтехніки, а також потужну базу для підготовки фахівців сфери послуг та ІТ.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
