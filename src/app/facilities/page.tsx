import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Factory } from 'lucide-react';
import { facilities, facilityPartners, gallery } from '../../data/site';
import styles from './facilities.module.css';

export const metadata = {
  title: 'Матеріально-технічна база',
  description: 'Навчальні кабінети, майстерні, лабораторії та партнерська практична база Львівського центру ПТО ДСЗ.',
};

export default function FacilitiesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Матеріально-технічна база</span>
              <h1>Навчання спирається на кабінети, майстерні та реальні виробничі майданчики</h1>
              <p>
                Центр розташований за адресою вул. Княгині Ольги, 122 і має навчальні кабінети,
                майстерні та лабораторії. Для практичного навчання залучаються виробничі бази підприємств-партнерів.
              </p>
            </div>
            <Image src={gallery[0].src} alt={gallery[0].alt} width={620} height={420} priority />
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {facilities.map((item) => (
              <div key={item.label}>
                <Building2 size={26} aria-hidden="true" />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className="container">
          <div className={styles.partnersGrid}>
            <div>
              <Factory size={34} aria-hidden="true" />
              <h2>Партнерська база розширює практику там, де потрібне реальне обладнання</h2>
              <p>
                Для транспортних, аграрних, енергетичних і технічних професій центр використовує базу підприємств,
                установ та організацій Львова й області.
              </p>
            </div>
            <ul>
              {facilityPartners.map((partner) => (
                <li key={partner.name}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span><strong>{partner.name}</strong>{partner.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.note}>
        <div className="container">
          <div className={styles.noteBox}>
            <h2>Є місця для проживання слухачів</h2>
            <p>
              Центр має домовленість із Львівським професійним коледжем
              готельно-туристичного та ресторанного сервісу щодо місць у хостелі для іногородніх слухачів.
            </p>
            <Link className="button buttonPrimary" href="/contacts">
              Уточнити умови <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
