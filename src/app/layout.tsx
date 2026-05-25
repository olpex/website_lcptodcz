import '../styles/globals.css';
import type { Metadata } from 'next';
import { Fira_Sans_Condensed, Noto_Sans } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-family',
  display: 'swap',
});

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ['cyrillic', 'latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lcptodcz.netlify.app'),
  title: {
    default: 'ЛЦПТО ДСЗ | Професійне навчання у Львові',
    template: '%s | ЛЦПТО ДСЗ',
  },
  description: 'Львівський центр професійно-технічної освіти ДСЗ: професійне навчання дорослих, підвищення кваліфікації, курси для роботодавців та безробітних.',
  openGraph: {
    siteName: 'ЛЦПТО ДСЗ',
    title: 'ЛЦПТО ДСЗ — Професійне навчання у Львові',
    description: 'Практична професійна освіта у Львові для слухачів, роботодавців і громад.',
    locale: 'uk_UA',
    type: 'website',
    url: 'https://lcptodcz.netlify.app',
  },
  twitter: {
    card: 'summary',
    title: 'ЛЦПТО ДСЗ — Професійне навчання у Львові',
    description: 'Практична професійна освіта для дорослих: 17+ професій, безкоштовно за направленням.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${notoSans.variable} ${firaSansCondensed.variable}`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
