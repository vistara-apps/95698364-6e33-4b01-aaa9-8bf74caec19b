import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DeFi Vault - Your Unified DeFi Command Center',
  description: 'Track assets across multiple wallets and protocols, manage liquidity, and optimize yields directly within your Base Wallet.',
  keywords: ['DeFi', 'Base', 'Wallet', 'Yield Farming', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
