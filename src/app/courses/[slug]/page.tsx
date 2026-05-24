import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Clock, MapPin, Send } from 'lucide-react';
import { professions } from '../../../data/site';
import styles from './profession.module.css';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return professions.map((profession) => ({ slug: profession.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const profession = professions.find((item) => item.slug === params.slug);
  return {
    title: profession ? profession.title : 'Професія',
    description: profession?.summary,
  };
}

export default function ProfessionPage({ params }: PageProps) {
  const profession = professions.find((item) => item.slug === params.slug);

  if (!profession) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Link className={styles.backLink} href="/courses">
            <ArrowLeft size={17} aria-hidden="true" />
            До каталогу професій
          </Link>
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">{profession.category}</span>
              <h1>{profession.title}</h1>
              <p>{profession.summary}</p>
              <div className={styles.actions}>
                <Link className="button buttonPrimary" href="/contacts">
                  <Send size={18} aria-hidden="true" />
                  Запитати про набір
                </Link>
              </div>
            </div>
            <Image src={profession.image} alt={`Професія: ${profession.title}`} width={900} height={620} priority />
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className="container">
          <div className={styles.detailGrid}>
            <article>
              <Clock size={24} aria-hidden="true" />
              <h2>Тривалість</h2>
              <p>{profession.duration}</p>
            </article>
            <article>
              <MapPin size={24} aria-hidden="true" />
              <h2>Формат</h2>
              <p>{profession.format}</p>
            </article>
          </div>

          <div className={styles.skills}>
            <h2>Що опановує слухач</h2>
            <ul>
              {profession.skills.map((skill) => (
                <li key={skill}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
