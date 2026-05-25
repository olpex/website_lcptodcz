import { Building2, Clock, Mail, MapPin, Phone, UserRound } from 'lucide-react';
import { contact } from '../../data/site';
import styles from './contacts.module.css';

export const metadata = {
  title: 'Контакти',
  description: 'Адреса, телефони, електронна пошта та реквізити Львівського центру ПТО ДСЗ.',
};

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Контакти</span>
          <h1>Зверніться до центру зручним способом</h1>
          <p>Телефони, електронна пошта, адреса та карта проїзду до центру.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Координати</h2>
              <div className={styles.infoList}>
                <a href={contact.mapUrl} target="_blank" rel="noreferrer" className={styles.infoItem}>
                  <MapPin aria-hidden="true" />
                  <span><strong>Адреса</strong>{contact.address}</span>
                </a>
                <a href={`tel:${contact.phonePrimary.replace(/[^\d+]/g, '')}`} className={styles.infoItem}>
                  <Phone aria-hidden="true" />
                  <span><strong>Приймальня</strong>{contact.phonePrimary}</span>
                </a>
                <a href={`tel:${contact.phoneSecondary.replace(/[^\d+]/g, '')}`} className={styles.infoItem}>
                  <Phone aria-hidden="true" />
                  <span><strong>Методисти</strong>{contact.phoneSecondary}</span>
                </a>
                <a href={`tel:+380676720852`} className={styles.infoItem}>
                  <Phone aria-hidden="true" />
                  <span><strong>Мобільний</strong>{contact.phoneMobile}</span>
                </a>
                <a href={`mailto:${contact.email}`} className={styles.infoItem}>
                  <Mail aria-hidden="true" />
                  <span><strong>Email</strong>{contact.email}</span>
                </a>
                <a href="mailto:lcptodcz@gmail.com" className={styles.infoItem}>
                  <Mail aria-hidden="true" />
                  <span><strong>Email (додатковий)</strong>lcptodcz@gmail.com</span>
                </a>
                <div className={styles.infoItem}>
                  <Building2 aria-hidden="true" />
                  <span><strong>ЄДРПОУ</strong>{contact.edrpou}</span>
                </div>
                <div className={styles.infoItem}>
                  <UserRound aria-hidden="true" />
                  <span><strong>Керівник установи</strong>{contact.director}</span>
                </div>
                <div className={styles.infoItem}>
                  <Clock aria-hidden="true" />
                  <span><strong>Графік для звернень</strong>Пн-Пт, робочий час установи</span>
                </div>
              </div>
            </div>

            <form className={styles.form} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Не заповнюйте це поле <input name="bot-field" /></label>
              </p>
              <h2>Напишіть нам</h2>
              <label>
                Ваше ім'я
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Телефон або email
                <input name="contact" type="text" autoComplete="email" required />
              </label>
              <label>
                Повідомлення
                <textarea name="message" rows={6} required />
              </label>
              <button className="button buttonPrimary" type="submit">Надіслати звернення</button>
            </form>
          </div>

          <div className={styles.mapBlock}>
            <div>
              <span className="eyebrow">Як нас знайти</span>
              <h2>вул. Княгині Ольги, 122</h2>
              <p>Карта відкривається безпосередньо на сторінці, а посилання на Google Maps лишається доступним для побудови маршруту.</p>
            </div>
            <iframe
              title="Карта розташування Львівського центру ПТО ДСЗ"
              src={contact.embedMapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
