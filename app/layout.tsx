import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.luis-tomas.dev'),
  title: 'Luis Tomás — Flutter & Mobile Developer',
  description:
    'Portfolio profesional de Luis Tomás. Flutter Developer con 4+ años de experiencia construyendo aplicaciones móviles escalables para Android, iOS y Web.',
  openGraph: {
    title: 'Luis Tomás — Flutter & Mobile Developer',
    description:
      'Portfolio profesional de Luis Tomás. Flutter Developer con 4+ años de experiencia.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-anim');`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
