import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '../data/site';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className="skipLink" href="#main-content">До основного вмісту</a>
      <div className={styles.serviceBar}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <a href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`}>
              <Phone size={15} aria-hidden="true" />
              {contact.phonePrimary}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} aria-hidden="true" />
              {contact.email}
            </a>
            <span>
              <MapPin size={15} aria-hidden="true" />
              {contact.address}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.mainNav}>
        <div className="container">
          <nav className={styles.nav} aria-label="Головна навігація">
            <Link href="/" className={styles.logo} aria-label="На головну ЛЦПТО ДСЗ">
              <span className={styles.logoMark}>ЛЦ</span>
              <span>
                <strong>{contact.shortName}</strong>
                <small>Професійна освіта державної служби зайнятості</small>
              </span>
            </Link>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <Link className={styles.navCta} href="/documents">Документи</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
