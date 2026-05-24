import styles from './contacts.module.css';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Контакти</h1>
          <p>Ми завжди на зв'язку та готові допомогти</p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>Наші координати</h2>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h4>Адреса</h4>
                    <p>79060, м. Львів, вул. Кн. Ольги, 122</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h4>Телефони</h4>
                    <p>(032) 232-22-30</p>
                    <p>(032) 244-13-30</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h4>Email</h4>
                    <p>lcptodcz@ukr.net</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Clock className={styles.icon} />
                  <div>
                    <h4>Графік роботи</h4>
                    <p>Пн-Чт: 8:30 – 17:15</p>
                    <p>Пт: 8:30 – 16:00</p>
                    <p>Сб-Нд: вихідні</p>
                  </div>
                </div>
              </div>

              <div className={styles.socials}>
                <h4>Ми в соцмережах</h4>
                <div className={styles.socialLinks}>
                  <a href="#"><Facebook /></a>
                  <a href="#"><Instagram /></a>
                  <a href="#"><Youtube /></a>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <h2>Напишіть нам</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Ваше ім'я</label>
                  <input type="text" placeholder="Іван Іванов" />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="example@mail.com" />
                </div>
                <div className={styles.formGroup}>
                  <label>Повідомлення</label>
                  <textarea rows={5} placeholder="Ваше запитання..."></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Надіслати повідомлення</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <MapPin size={48} opacity={0.3} />
          <p>Тут буде інтерактивна карта Google Maps</p>
        </div>
      </section>
    </div>
  );
}
