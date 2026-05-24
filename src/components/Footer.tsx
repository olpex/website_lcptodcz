import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '../data/site';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.callout}>
          <div>
            <span className="eyebrow">Залишилися питання?</span>
            <h2>Підкажемо, який шлях навчання підійде саме вам</h2>
          </div>
          <div className={styles.calloutActions}>
            <a className="button buttonPrimary" href={`tel:${contact.phoneSecondary.replace(/[^\d+]/g, '')}`}>
              <Phone size={18} aria-hidden="true" />
              Подзвонити
            </a>
            <a className="button buttonSecondary" href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              Написати
            </a>
          </div>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.brandBlock}>
            <h3>{contact.name}</h3>
            <p>Практичне професійне навчання для дорослих, безробітних, ветеранів, бізнесу та всіх, хто хоче швидше повернутися до роботи.</p>
          </div>
          <nav aria-label="Нижня навігація">
            <h4>Розділи</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/documents">Нормативна база</Link></li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <h4>Контакти</h4>
            <p><MapPin size={16} aria-hidden="true" /> {contact.address}</p>
            <p><Phone size={16} aria-hidden="true" /> {contact.phonePrimary}, {contact.phoneSecondary}</p>
            <p><Mail size={16} aria-hidden="true" /> {contact.email}</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>ЄДРПОУ {contact.edrpou}</span>
          <span>&copy; {new Date().getFullYear()} {contact.shortName}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
