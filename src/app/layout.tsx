import type { Metadata } from 'next';
import './globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/services/queryClient';
import StyledComponentsRegistry from '@/lib/registry';

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
    <QueryClientProvider client={queryClient}>
      <html lang="ko">
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </QueryClientProvider>
  );
}
