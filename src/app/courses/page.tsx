import styles from './courses.module.css';
import { Search, Filter, BookOpen, Clock, MapPin } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Тестувальник ПЗ (QA)',
    category: 'IT-технології',
    duration: '3 місяці',
    location: 'Львів / Онлайн',
    description: 'Основи тестування програмного забезпечення, робота з баг-трекінговими системами та автоматизація.'
  },
  {
    id: 2,
    title: 'Оператор агродронів',
    category: 'Новітні технології',
    duration: '1 місяць',
    location: 'Львів (полігон)',
    description: 'Керування БПЛА для потреб сільського господарства, моніторинг полів та внесення добрив.'
  },
  {
    id: 3,
    title: 'Перукар (модельєр)',
    category: 'Сфера послуг',
    duration: '5 місяців',
    location: 'Львів',
    description: 'Сучасні техніки стрижок, фарбування та створення зачісок будь-якої складності.'
  },
  {
    id: 4,
    title: 'Електрогазозварник',
    category: 'Технічні професії',
    duration: '6 місяців',
    location: 'Львів (майстерні)',
    description: 'Професійна підготовка фахівців із ручного та напівавтоматичного зварювання металів.'
  },
  {
    id: 5,
    title: 'Кухар',
    category: 'Сфера послуг',
    duration: '4 місяці',
    location: 'Львів',
    description: 'Приготування страв української та європейської кухонь, калькуляція та санітарні норми.'
  },
  {
    id: 6,
    title: 'Водій навантажувача',
    category: 'Технічні професії',
    duration: '2 місяці',
    location: 'Львів / Судова Вишня',
    description: 'Керування складською технікою, правила безпеки та технічне обслуговування.'
  }
];

export default function CoursesPage() {
  return (
    <div className={styles.coursesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Навчальні програми</h1>
          <p>Оберіть професію, яка змінить ваше життя</p>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.controls}>
            <div className={styles.searchWrapper}>
              <Search size={20} className={styles.searchIcon} />
              <input type="text" placeholder="Пошук курсу..." className={styles.searchInput} />
            </div>
            <div className={styles.filterWrapper}>
              <Filter size={20} />
              <select className={styles.filterSelect}>
                <option value="all">Всі категорії</option>
                <option value="it">IT-технології</option>
                <option value="service">Сфера послуг</option>
                <option value="tech">Технічні професії</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.coursesGridSection}>
        <div className="container">
          <div className={styles.coursesGrid}>
            {courses.map(course => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.categoryBadge}>{course.category}</div>
                <h3>{course.title}</h3>
                <p className={styles.description}>{course.description}</p>
                <div className={styles.details}>
                  <span><Clock size={16} /> {course.duration}</span>
                  <span><MapPin size={16} /> {course.location}</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                  Подати заявку
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
