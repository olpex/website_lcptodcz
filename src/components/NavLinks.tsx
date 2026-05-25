'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

type NavItem = { href: string; label: string };

export default function NavLinks({ items, ctaHref, ctaLabel }: { items: NavItem[]; ctaHref: string; ctaLabel: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <button
        className={styles.burger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.navBody} ${open ? styles.navOpen : ''}`}>
        <ul className={styles.navLinks}>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive(item.href) ? styles.active : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className={styles.navCta} href={ctaHref} onClick={() => setOpen(false)}>
          {ctaLabel}
        </Link>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  );
}
