import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://lcptodcz.lviv.ua'),
  title: {
    default: 'ЛЦПТО ДСЗ | Професійне навчання у Львові',
    template: '%s | ЛЦПТО ДСЗ',
  },
  description: 'Львівський центр професійно-технічної освіти ДСЗ: професійне навчання дорослих, підвищення кваліфікації, курси для роботодавців та безробітних.',
  openGraph: {
    title: 'ЛЦПТО ДСЗ',
    description: 'Практична професійна освіта у Львові для слухачів, роботодавців і громад.',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
