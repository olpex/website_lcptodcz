import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h3>ЛЦПТО ДСЗ</h3>
            <p>Львівський центр професійно-технічної освіти державної служби зайнятості</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Навігація</h4>
            <ul>
              <li><Link href="/about">Про центр</Link></li>
              <li><Link href="/courses">Курси</Link></li>
              <li><Link href="/news">Новини</Link></li>
            </ul>
          </div>
          <div className={styles.footerContacts}>
            <h4>Контакти</h4>
            <p>м. Львів, вул. Кн. Ольги, 122</p>
            <p>Тел: (032) 232-22-30</p>
            <p>Email: lcptodcz@ukr.net</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} ЛЦПТО ДСЗ. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
