import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Belleza } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Nivita Portfolio',
  description: "Tahmida Fathema Chowdhury Nivita's Professional Portfolio",
};

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Belleza({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-headline',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(fontBody.variable, fontHeadline.variable, "font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
