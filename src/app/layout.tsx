import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OFFIZZ',
  description: '워케이션 지원 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
