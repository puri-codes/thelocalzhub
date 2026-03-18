import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SegmentStateProvider } from 'next/dist/next-devtools/userspace/app/segment-explorer-node';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'The Localz Hub | Premium Dining',
  description: 'Experience Taste Like Never Before at The Localz Hub.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {process.env.NODE_ENV === 'development' ? (
            <SegmentStateProvider>{null}</SegmentStateProvider>
          ) : null}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
