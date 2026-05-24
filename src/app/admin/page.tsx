import Link from 'next/link';
import { FilePlus2, FolderPlus, LogOut, Menu, Upload } from 'lucide-react';
import { isAdminAuthenticated } from '../../lib/adminAuth';
import { readCmsContent } from '../../lib/cms';
import { createMenuItemAction, createPageAction, loginAction, logoutAction, uploadMaterialAction } from './actions';
import styles from './admin.module.css';

export const metadata = {
  title: 'Адмінка',
  robots: {
    index: false,
    follow: false,
  },
};

type AdminPageProps = {
  searchParams?: {
    error?: string;
    saved?: string;
  };
};

export default function AdminPage({ searchParams }: AdminPageProps) {
  const authenticated = isAdminAuthenticated();
  const content = readCmsContent();

  if (!authenticated) {
    return (
      <main className={styles.loginPage}>
        <form className={styles.loginCard} action={loginAction}>
          <span className="eyebrow">Адмінка</span>
          <h1>Вхід для адміністратора</h1>
          <p>Пароль задається через змінну середовища <code>ADMIN_PASSWORD</code>. Для локальної розробки тимчасово працює <code>admin123</code>.</p>
          {searchParams?.error ? <strong className={styles.error}>Неправильний пароль</strong> : null}
          <label>
            Пароль
            <input name="password" type="password" required />
          </label>
          <button className="button buttonPrimary" type="submit">Увійти</button>
        </form>
      </main>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <span className="eyebrow">Керування сайтом</span>
              <h1>Адміністративна панель</h1>
              <p>Створюйте сторінки, додавайте пункти меню, завантажуйте PDF, Word, Excel та зображення. Нові сторінки одразу доступні в межах цього проєкту.</p>
            </div>
            <form action={logoutAction}>
              <button className={styles.logout} type="submit">
                <LogOut size={17} aria-hidden="true" />
                Вийти
              </button>
            </form>
          </div>
          {searchParams?.saved ? <div className={styles.success}>Зміни збережено.</div> : null}
        </div>
      </section>

      <section className={styles.dashboard}>
        <div className="container">
          <div className={styles.grid}>
            <form className={styles.panel} action={createPageAction}>
              <FilePlus2 size={28} aria-hidden="true" />
              <h2>Нова сторінка або розділ</h2>
              <label>Назва сторінки<input name="title" required /></label>
              <label>URL slug<input name="slug" placeholder="napryklad-vakansii" /></label>
              <label>Назва в меню<input name="menuLabel" /></label>
              <label>Розділ<input name="section" placeholder="Офіційна інформація" /></label>
              <label>Короткий опис<textarea name="summary" rows={3} /></label>
              <label>Основний текст<textarea name="body" rows={8} required /></label>
              <label className={styles.checkbox}><input name="showInMenu" type="checkbox" /> Показувати в головному меню</label>
              <button className="button buttonPrimary" type="submit">Створити сторінку</button>
            </form>

            <form className={styles.panel} action={createMenuItemAction}>
              <Menu size={28} aria-hidden="true" />
              <h2>Пункт меню</h2>
              <label>Назва<input name="label" required /></label>
              <label>Посилання<input name="href" placeholder="/vakansii" required /></label>
              <label>Порядок<input name="order" type="number" min="1" placeholder="50" /></label>
              <button className="button buttonPrimary" type="submit">Додати в меню</button>
            </form>

            <form className={styles.panel} action={uploadMaterialAction}>
              <Upload size={28} aria-hidden="true" />
              <h2>Файл або матеріал</h2>
              <label>Назва матеріалу<input name="title" required /></label>
              <label>Опис<textarea name="description" rows={3} /></label>
              <label>Файл<input name="file" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp" required /></label>
              <button className="button buttonPrimary" type="submit">Завантажити</button>
            </form>
          </div>

          <div className={styles.lists}>
            <section>
              <FolderPlus size={24} aria-hidden="true" />
              <h2>Створені сторінки</h2>
              <ul>
                {content.pages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                    <span>/{page.slug}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <Upload size={24} aria-hidden="true" />
              <h2>Матеріали</h2>
              <ul>
                {content.materials.map((material) => (
                  <li key={material.id}>
                    <a href={material.url} target="_blank" rel="noreferrer">{material.title}</a>
                    <span>{Math.ceil(material.size / 1024)} КБ</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
