import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '3rem 1.5rem',
      textAlign: 'center',
    }}>
      <Search size={48} style={{ color: 'var(--muted)', marginBottom: '1.5rem' }} />
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        color: 'var(--brand-strong)',
        marginBottom: '0.75rem',
      }}>
        Сторінку не знайдено
      </h1>
      <p style={{
        maxWidth: '480px',
        color: 'var(--muted)',
        fontSize: '1.1rem',
        marginBottom: '2rem',
      }}>
        Ця адреса не існує або була переміщена. Скористайтесь навігацією або поверніться на головну.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link className="button buttonPrimary" href="/">
          <Home size={18} />
          На головну
        </Link>
        <Link className="button buttonSecondary" href="/courses">
          Професії
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
