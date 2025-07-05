import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footers from '@/components/Layout/Footer';
import Headers from '@/components/Layout/Header';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import { ThemeProvider } from '@/components/util/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Portfoilo',
    default: 'Portfoilo',
  },
  description: 'Portfoilo - 가제목',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Headers />
          {children}
          <ButtonGroup />
          <Footers />
        </ThemeProvider>
      </body>
    </html>
  );
}
