import Image from 'next/image';
import { Award, CheckCircle2, Factory, GraduationCap, UsersRound } from 'lucide-react';
import { contact, gallery } from '../../data/site';
import styles from './about.module.css';

export const metadata = {
  title: 'Про центр',
  description: 'Місія, сильні сторони та контактна інформація Львівського центру ПТО ДСЗ.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Про центр</span>
              <h1>{contact.name}</h1>
              <p>Державний освітній майданчик, який поєднує потреби людей, служби зайнятості та роботодавців Львівщини.</p>
            </div>
            <Image src={gallery[1].src} alt={gallery[1].alt} width={620} height={420} priority />
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div>
              <span className="eyebrow">Місія</span>
              <h2>Навчати так, щоб професія ставала практичним шансом</h2>
              <p>Центр допомагає дорослим людям швидко опанувати затребувані навички, підтвердити кваліфікацію та впевненіше повернутися на ринок праці.</p>
            </div>
            <ul>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Професійна освіта з опорою на державні стандарти.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Практичні майстерні, полігони та навчальні лабораторії.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Програми для безробітних, роботодавців, ветеранів і дорослих слухачів.</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Оновлення напрямів під реальні потреби економіки.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div><Award size={28} aria-hidden="true" /><strong>2003</strong><span>рік заснування</span></div>
            <div><GraduationCap size={28} aria-hidden="true" /><strong>ПТО</strong><span>державна система освіти</span></div>
            <div><Factory size={28} aria-hidden="true" /><strong>Skills4Recovery</strong><span>модернізація програм і обладнання</span></div>
            <div><UsersRound size={28} aria-hidden="true" /><strong>Люди</strong><span>слухачі, бізнес, громади</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
