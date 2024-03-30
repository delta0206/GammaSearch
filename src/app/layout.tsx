import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gamma Search',
  description: 'Universal search engine for Minecraft',
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full' suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'bg-stone-950 text-white max-w-5xl mx-auto px-4 py-8 h-full'
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='grid place-items-center h-full'>
            <div className='flex flex-col items-center gap-8'>
              <Header />
              {children}
            </div>
          </main>
          {modal}
          <div id='modal-root'></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
