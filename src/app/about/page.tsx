import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, Factory, Globe, GraduationCap, Heart, Shield, UsersRound } from 'lucide-react';
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
            <div><GraduationCap size={28} aria-hidden="true" /><strong>17+</strong><span>професій та спеціальностей</span></div>
            <div><Factory size={28} aria-hidden="true" /><strong>ЄДРПОУ 36738974</strong><span>державна система ПТО</span></div>
            <div><UsersRound size={28} aria-hidden="true" /><strong>1000+</strong><span>слухачів щорічно</span></div>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className="container">
          <span className="eyebrow">Історія</span>
          <h2>Як розвивався центр</h2>
          <div className={styles.historyTimeline}>
            <div>
              <strong>2003</strong>
              <p>Створення Львівського центру професійно-технічної освіти державної служби зайнятості — одного з перших в Україні центрів ПТО при ДСЗ.</p>
            </div>
            <div>
              <strong>2010-ті</strong>
              <p>Розширення переліку професій, модернізація навчальних майстерень, впровадження дуальної форми навчання спільно з роботодавцями Львівщини.</p>
            </div>
            <div>
              <strong>2020-ті</strong>
              <p>Запуск дистанційного навчання, міжнародні проєкти Skills4Recovery та REMARKET, відкриття кваліфікаційного центру та програм для ветеранів.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.international}>
        <div className="container">
          <div className={styles.internationalGrid}>
            <div>
              <Globe size={34} aria-hidden="true" />
              <span className="eyebrow">Міжнародна діяльність</span>
              <h2>Партнерства, що змінюють навчання</h2>
              <p>Центр бере участь у міжнародних проєктах, які модернізують обладнання, програми та методики.</p>
            </div>
            <div className={styles.projectsList}>
              <div className={styles.projectCard}>
                <strong>Skills4Recovery</strong>
                <p>Модернізація навчальних програм і обладнання для підготовки фахівців у сфері відновлення.</p>
              </div>
              <div className={styles.projectCard}>
                <strong>SEQUA / Німеччина</strong>
                <p>Розвиток дуальної форми навчання за німецькою моделлю.</p>
              </div>
              <div className={styles.projectCard}>
                <strong>REMARKET</strong>
                <p>Підвищення конкурентоспроможності випускників на ринку праці ЄС.</p>
              </div>
              <div className={styles.projectCard}>
                <strong>Solidarity Fund PL</strong>
                <p>Програми підтримки вразливих груп населення та переміщених осіб.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.antibullying}>
        <div className="container">
          <div className={styles.antibullyingGrid}>
            <div>
              <Shield size={34} aria-hidden="true" />
              <h2>Антибулінгова програма</h2>
              <p>Центр забезпечує безпечне та толерантне навчальне середовище для всіх слухачів.</p>
            </div>
            <ul>
              <li><Heart size={20} aria-hidden="true" /> Політика нульової толерантності до цькування та дискримінації.</li>
              <li><Heart size={20} aria-hidden="true" /> Психологічна підтримка та консультування.</li>
              <li><Heart size={20} aria-hidden="true" /> Навчання педагогів сучасним методам профілактики булінгу.</li>
              <li><Heart size={20} aria-hidden="true" /> Анонімне повідомлення про випадки булінгу.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.links}>
        <div className="container">
          <div className={styles.linksGrid}>
            <Link href="/team" className={styles.linkCard}>
              <UsersRound size={28} aria-hidden="true" />
              <strong>Наша команда</strong>
              <span>Керівництво та педагогічний колектив центру</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/facilities" className={styles.linkCard}>
              <Factory size={28} aria-hidden="true" />
              <strong>Матеріально-технічна база</strong>
              <span>Майстерні, лабораторії та навчальні приміщення</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contacts" className={styles.linkCard}>
              <CheckCircle2 size={28} aria-hidden="true" />
              <strong>Контакти</strong>
              <span>Адреса, телефони, форма зворотного зв'язку</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
