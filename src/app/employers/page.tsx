import Link from 'next/link';
import { ArrowRight, ClipboardCheck, Handshake, Users, Wrench } from 'lucide-react';
import styles from './employers.module.css';

export const metadata = {
  title: 'Роботодавцям',
  description: 'Підготовка працівників, підвищення кваліфікації та співпраця з Львівським центром ПТО ДСЗ.',
};

const services = [
  {
    title: 'Підготовка робітників під замовлення',
    text: 'Центр може адаптувати навчання під потреби виробництва, сервісу або агросектору.',
    icon: Wrench,
  },
  {
    title: 'Підвищення кваліфікації персоналу',
    text: 'Коротші програми допомагають оновити навички працівників без довгого відриву від роботи.',
    icon: Users,
  },
  {
    title: 'Практика та підбір кандидатів',
    text: 'Роботодавець може побачити слухачів у практичних завданнях і запросити їх до співпраці.',
    icon: ClipboardCheck,
  },
];

export default function EmployersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Роботодавцям</span>
          <h1>Готуємо фахівців під реальні вакансії</h1>
          <p>Якщо бізнесу потрібні кваліфіковані робітники, центр може допомогти з навчанням, практикою, підвищенням кваліфікації та знайомством зі слухачами.</p>
          <Link className="button buttonPrimary" href="/contacts">
            Обговорити потребу <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={styles.card} key={service.title}>
                  <Icon size={28} aria-hidden="true" />
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <div className={styles.processGrid}>
            <div>
              <Handshake size={34} aria-hidden="true" />
              <h2>Як виглядає співпраця</h2>
            </div>
            <ol>
              <li>Ви описуєте вакансії, графік, потрібні навички та очікуваний рівень підготовки.</li>
              <li>Центр узгоджує формат: нова група, підвищення кваліфікації або практика слухачів.</li>
              <li>Після навчання роботодавець може запросити кандидатів на роботу або стажування.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
