import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';
import { documentGroups } from '../../data/site';
import styles from './documents.module.css';

export const metadata = {
  title: 'Нормативна база',
  description: 'Структурована нормативна база Львівського центру ПТО ДСЗ.',
};

export default function DocumentsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Офіційна інформація</span>
          <h1>Нормативна база без нескінченної стіни посилань</h1>
          <p>На старому сайті документи подані довгим списком. У новій структурі вони згруповані за типом, щоб користувач швидше розумів, де шукати потрібне.</p>
        </div>
      </section>

      <section className={styles.groups}>
        <div className="container">
          <div className={styles.grid}>
            {documentGroups.map((group) => (
              <article className={styles.card} key={group.title}>
                <FileText size={28} aria-hidden="true" />
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <span>{item.title}</span>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <a className={styles.registryLink} href="https://registry.edbo.gov.ua/university/3067/professions/" target="_blank" rel="noreferrer">
            Переглянути дані про освітню діяльність в ЄДЕБО
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
