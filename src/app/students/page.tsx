import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2, FileText, GraduationCap, Heart, MapPin, Phone, Shield, Users } from 'lucide-react';
import styles from './students.module.css';

export const metadata = {
  title: 'Слухачам',
  description: 'Правила вступу, соціальний захист, працевлаштування та корисна інформація для слухачів Львівського центру ПТО ДСЗ.',
};

const cards = [
  {
    title: 'Правила прийому',
    text: 'Навчання за направленням служби зайнятості або за договором. Потрібні: паспорт, ідентифікаційний код, фото, заява.',
    icon: FileText,
  },
  {
    title: 'Документ про закінчення',
    text: 'Свідоцтво державного зразка про присвоєння робітничої кваліфікації або сертифікат про проходження курсу.',
    icon: GraduationCap,
  },
  {
    title: 'Виробнича практика',
    text: 'Практичне навчання на базі підприємств-партнерів: «Львівелектротранс», «Агро ЛВ Лімітед» та інші.',
    icon: Users,
  },
  {
    title: 'Соціальний захист',
    text: 'Слухачі, які навчаються за направленням служби зайнятості, отримують матеріальну допомогу на період навчання.',
    icon: Shield,
  },
  {
    title: 'Працевлаштування',
    text: 'Центр сприяє працевлаштуванню випускників через партнерську мережу роботодавців та службу зайнятості.',
    icon: BookOpen,
  },
  {
    title: 'Психологічна підтримка',
    text: 'Практичний психолог центру допоможе з адаптацією, профорієнтацією та подоланням стресу.',
    icon: Heart,
  },
];

export default function StudentsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Слухачам</span>
          <h1>Все, що потрібно знати перед навчанням</h1>
          <p>Вступ, документи, соціальний захист, практика та працевлаштування — зібрали головне в одному місці.</p>
          <div className={styles.heroActions}>
            <Link className="button buttonPrimary" href="/courses">
              Обрати професію <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button buttonSecondary" href="/contacts">
              Записатися на навчання
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <div className="container">
          <div className={styles.grid}>
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <article className={styles.card} key={card.title}>
                  <Icon size={28} aria-hidden="true" />
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.veterans}>
        <div className="container">
          <div className={styles.veteransGrid}>
            <div>
              <Shield size={34} aria-hidden="true" />
              <h2>Для учасників бойових дій</h2>
              <p>Центр проводить навчання для ветеранів та осіб з інвалідністю внаслідок війни за спрощеною процедурою.</p>
            </div>
            <ul className={styles.veteransList}>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Безкоштовне навчання за направленням служби зайнятості.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Матеріальна допомога на період навчання.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Психологічна підтримка та супровід.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Сприяння працевлаштуванню після завершення навчання.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Участь у міжнародних проєктах (SEQUA, Skills4Recovery, REMARKET).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.links}>
        <div className="container">
          <div className={styles.linksHeader}>
            <span className="eyebrow">Корисні посилання</span>
            <h2>Додаткова інформація</h2>
          </div>
          <div className={styles.linksList}>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.linkItem}>
              <MapPin size={20} aria-hidden="true" />
              <span><strong>Схема доїзду</strong>вул. Княгині Ольги, 122, Львів</span>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.linkItem}>
              <BookOpen size={20} aria-hidden="true" />
              <span><strong>Правила поведінки</strong>Правила для здобувачів освіти</span>
            </a>
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.linkItem}>
              <GraduationCap size={20} aria-hidden="true" />
              <span><strong>Дистанційне навчання</strong>Інформація про онлайн-формат</span>
            </a>
            <a href="tel:+380676720852" className={styles.linkItem}>
              <Phone size={20} aria-hidden="true" />
              <span><strong>Телефон для запису</strong>+380 67 672 08 52</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
