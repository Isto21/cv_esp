import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const metadata: Metadata = {
  verification: { google: 'bX90zsH_LQMIlVOZm4mF_gFb_-ru1t1DCjWotqbXj_g' },
  metadataBase: new URL('https://portfolio-tawny-eight-47.vercel.app'),
  viewport: 'width=device-width, initial-scale=1',
  title: 'Luis Tomás — Flutter & Mobile Developer',
  description:
    'Professional portfolio of Luis Tomás. Flutter developer with 4+ years of experience building scalable mobile applications for Android, iOS, and Web.',
  openGraph: {
    title: 'Luis Tomás — Flutter & Mobile Developer',
    description:
      'Professional portfolio of Luis Tomás. Flutter developer with 4+ years of experience.',
    // images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    // images: [{ url: 'https://bolt.new/static/og_default.png' }],
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
