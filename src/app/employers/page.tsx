import Link from 'next/link';
import { ArrowRight, BarChart3, Briefcase, Calendar, ClipboardCheck, ExternalLink, FileText, Handshake, Rocket, Users, Wrench } from 'lucide-react';
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

      <section className={styles.resources}>
        <div className="container">
          <div className={styles.resourcesHeader}>
            <span className="eyebrow">Ресурси та графіки</span>
            <h2>Корисна інформація для партнерів</h2>
          </div>
          <div className={styles.resourcesGrid}>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.resourceCard}>
              <Calendar size={28} aria-hidden="true" />
              <h3>Графіки практик та іспитів</h3>
              <p>Розклад виробничих практик і кваліфікаційних атестацій для планування участі роботодавців.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.resourceCard}>
              <BarChart3 size={28} aria-hidden="true" />
              <h3>Анкетування роботодавців</h3>
              <p>Оцініть якість підготовки слухачів та залиште пропозиції щодо вдосконалення програм.</p>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.resourceCard}>
              <FileText size={28} aria-hidden="true" />
              <h3>Кваліфікаційний центр</h3>
              <p>Підтвердження або присвоєння кваліфікації незалежно від способу набуття компетентностей.</p>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.diya}>
        <div className="container">
          <div className={styles.diyaGrid}>
            <div>
              <Rocket size={34} aria-hidden="true" />
              <span className="eyebrow">Підприємництво</span>
              <h2>«Дія» Бізнес — підтримка підприємців</h2>
              <p>Безкоштовні послуги для тих, хто хоче розпочати або розвивати власну справу.</p>
            </div>
            <div className={styles.diyaLinks}>
              <a href="https://business.diia.gov.ua/" target="_blank" rel="noreferrer">
                <Briefcase size={22} aria-hidden="true" />
                <span>
                  <strong>Створення бізнесу</strong>
                  Покрокові інструкції для відкриття та реєстрації бізнесу.
                </span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <a href="https://business.diia.gov.ua/" target="_blank" rel="noreferrer">
                <FileText size={22} aria-hidden="true" />
                <span>
                  <strong>Відкриття / закриття ФОП</strong>
                  Онлайн-реєстрація та припинення підприємницької діяльності.
                </span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
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
