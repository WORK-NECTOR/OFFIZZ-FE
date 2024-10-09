import type { Metadata } from 'next';
import './globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import Script from 'next/script';
import queryClient from '@/services/queryClient';
import StyledComponentsRegistry from '@/lib/registry';
import CookieProviderWrapper from '@/lib/CookieProviderWrapper';

export const metadata: Metadata = {
  title: 'OFFIZZ',
  description: '워케이션 지원 서비스',
  icons: {
    icon: '/charactor-laptop.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <CookieProviderWrapper>
        <html lang="ko">
          <body>
            <StyledComponentsRegistry>
              <Script
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS}&libraries=services,clusterer&autoload=false`}
                strategy="beforeInteractive"
              />
              {children}
            </StyledComponentsRegistry>
          </body>
        </html>
      </CookieProviderWrapper>
    </QueryClientProvider>
  );
}
