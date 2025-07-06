import type { Metadata } from 'next';
import './globals.css';
import Footers from '@/components/Layout/Footer';
import Headers from '@/components/Layout/Header';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import { ThemeProvider } from '@/components/util/theme-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Portfolio',
  },
  description: 'Portfolio - 가제목',
  keywords: [
    '프론트엔드',
    '개발자',
    '프론트엔드 개발자',
    '포트폴리오',
    'FE',
    'BE',
    'Frontend Developer',
    'React',
    'Express',
    'GCP',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.fronthan.dev/',
    title: 'XXX | Portfolio',
    description: 'Portfolio-TEMP',
    siteName: 'XXX | Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Headers />
          <main className="flex-1">{children}</main>

          <ButtonGroup />
          <Footers />
        </ThemeProvider>
      </body>
    </html>
  );
}
