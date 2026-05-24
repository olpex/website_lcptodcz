import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, FileText, GraduationCap, Handshake, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { contact, courses, gallery, news } from '../data/site';
import styles from './page.module.css';

const audienceCards = [
  {
    title: 'Хочу отримати професію',
    text: 'Підберіть програму під досвід, графік і мету працевлаштування.',
    href: '/courses',
    icon: GraduationCap,
  },
  {
    title: 'Потрібні працівники',
    text: 'Центр може підготувати фахівців під запит роботодавця або підвищити кваліфікацію команди.',
    href: '/employers',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Шукаю офіційну інформацію',
    text: 'Контакти, нормативна база, документи, освітня діяльність і реквізити зібрані в одному місці.',
    href: '/documents',
    icon: FileText,
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">Професійне навчання у Львові</span>
              <h1>Навчання, яке швидко повертає людей до роботи</h1>
              <p>
                Львівський центр ПТО ДСЗ готує дорослих до актуальних професій:
                від зварювання і сфери послуг до агродронів, цифрового крою та IT.
              </p>
              <div className={styles.heroActions}>
                <Link className="button buttonPrimary" href="/courses">
                  Обрати навчання
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link className="button buttonSecondary" href="/contacts">
                  Зв'язатися з центром
                </Link>
              </div>
              <dl className={styles.heroFacts}>
                <div>
                  <dt>2003</dt>
                  <dd>працюємо для ринку праці</dd>
                </div>
                <div>
                  <dt>6</dt>
                  <dd>ключових напрямів у першій версії каталогу</dd>
                </div>
                <div>
                  <dt>Держ.</dt>
                  <dd>система професійної освіти</dd>
                </div>
              </dl>
            </div>
            <div className={styles.heroVisual} aria-label="Фотографії навчального процесу">
              {gallery.map((item, index) => (
                <Image
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  width={520}
                  height={360}
                  className={index === 0 ? styles.imageLarge : styles.imageSmall}
                  priority={index === 0}
                />
              ))}
              <div className={styles.locationBadge}>
                <MapPin size={18} aria-hidden="true" />
                {contact.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.audience}>
        <div className="container">
          <div className={styles.audienceGrid}>
            {audienceCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} className={styles.audienceCard} href={card.href}>
                  <Icon size={24} aria-hidden="true" />
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <span>Перейти <ArrowRight size={16} aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.programs}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Навчальні напрями</span>
              <h2>Програми з практичним результатом</h2>
            </div>
            <Link className={styles.textLink} href="/courses">
              Усі напрями <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.programGrid}>
            {courses.slice(0, 4).map((course) => (
              <article className={styles.programCard} key={course.title}>
                <span>{course.category}</span>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
                <dl>
                  <div>
                    <dt>Тривалість</dt>
                    <dd>{course.duration}</dd>
                  </div>
                  <div>
                    <dt>Формат</dt>
                    <dd>{course.format}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <span className="eyebrow">Що змінюємо в досвіді сайту</span>
              <h2>Замість архіву сторінок - зрозумілий маршрут до дії</h2>
              <p>
                Поточний сайт містить цінні новини, контакти й документи, але змішує їх із
                технічними віджетами. Нова версія піднімає головні сценарії в перший екран.
              </p>
            </div>
            <ul>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Перший вибір за роллю користувача: слухач, роботодавець, відвідувач офіційних документів.</li>
              <li><ShieldCheck size={20} aria-hidden="true" /> Доступні контрасти, видимий фокус, зрозумілі назви посилань і логічна структура заголовків.</li>
              <li><Sparkles size={20} aria-hidden="true" /> Реальні фото й новини центру замість абстрактних стокових блоків.</li>
              <li><Handshake size={20} aria-hidden="true" /> Контакти та наступний крок повторюються там, де користувач приймає рішення.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Останні оновлення</span>
              <h2>Живий центр, а не статична візитка</h2>
            </div>
          </div>
          <div className={styles.newsGrid}>
            {news.map((item) => (
              <article className={styles.newsCard} key={item.title}>
                <Image src={item.image} alt="" width={420} height={260} />
                <div>
                  <time dateTime={item.date.split('.').reverse().join('-')}>{item.date}</time>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
