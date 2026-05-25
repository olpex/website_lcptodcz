import Link from 'next/link';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { contact, navItems } from '../data/site';
import { getCmsMenuItems } from '../lib/cms';
import styles from './Footer.module.css';

const Footer = async () => {
  const menuItems = [...navItems, ...(await getCmsMenuItems())];

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
            <a href="https://lcptodcz.lviv.ua/" target="_blank" rel="noreferrer" className={styles.sourceLink}>
              <ExternalLink size={14} aria-hidden="true" />
              lcptodcz.lviv.ua
            </a>
          </div>
          <nav aria-label="Нижня навігація">
            <h4>Розділи</h4>
            <ul>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/documents">Нормативна база</Link></li>
              <li><Link href="/team">Наша команда</Link></li>
              <li><Link href="/facilities">МТБ</Link></li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <h4>Контакти</h4>
            <p><MapPin size={16} aria-hidden="true" /> {contact.address}</p>
            <a href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`}>
              <Phone size={16} aria-hidden="true" /> {contact.phonePrimary}
            </a>
            <a href={`tel:${contact.phoneSecondary.replace(/[^\d+]/g, '')}`}>
              <Phone size={16} aria-hidden="true" /> {contact.phoneSecondary}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={16} aria-hidden="true" /> {contact.email}
            </a>
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
