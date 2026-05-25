import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '../data/site';
import { getCmsMenuItems } from '../lib/cms';
import NavLinks from './NavLinks';
import styles from './Header.module.css';

const Header = async () => {
  const menuItems = [...navItems, ...(await getCmsMenuItems())];

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
            <NavLinks items={menuItems} ctaHref="/documents" ctaLabel="Документи" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
