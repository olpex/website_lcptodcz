import Link from 'next/link';
import styles from './Header.module.css';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <span><Phone size={14} /> (032) 232-22-30</span>
              <span><Mail size={14} /> lcptodcz@ukr.net</span>
              <span><MapPin size={14} /> м. Львів, вул. Кн. Ольги, 122</span>
            </div>
            <div className={styles.accessibility}>
              <button>Версія для людей з вадами зору</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainNav}>
        <div className="container">
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoTitle}>ЛЦПТО ДСЗ</div>
            </Link>
            <ul className={styles.navLinks}>
              <li><Link href="/about">Про центр</Link></li>
              <li><Link href="/courses">Навчання</Link></li>
              <li><Link href="/professions">Професії</Link></li>
              <li><Link href="/news">Новини</Link></li>
              <li><Link href="/contacts">Контакти</Link></li>
            </ul>
            <button className={styles.mobileMenuBtn}>
              <Menu />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
