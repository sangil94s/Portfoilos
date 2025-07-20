import type { Metadata } from 'next';
import './globals.css';
import Headers from '@/components/Layout/Header';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import { ThemeProvider } from '@/components/util/theme-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Frontend Portfolio',
    default: '한상일 | Frontend Portfolio',
  },
  description: 'Portfolio Website Project',
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
    title: '한상일 | 프론트엔드 포트폴리오',
    description: 'Portfolio Website Project',
    siteName: '한상일 | 프론트엔드 포트폴리오',
    images: {
      url: 'https://www.fronthan.dev/blacks.png',
      width: 600,
      height: 600,
      alt: '임시 대표 이미지',
    },
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
        </ThemeProvider>
      </body>
    </html>
  );
}
