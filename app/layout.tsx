import type { Metadata } from 'next';
import { Manrope, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CORPRAG — Корпоративный AI-ассистент в закрытом контуре',
  description: 'Корпоративный LLM-ассистент с RAG. Ответы по документам со ссылками на источники. Развёртывание on-prem или в облаке РФ.',
  keywords: ['корпоративный ассистент', 'LLM', 'RAG', 'AI', 'on-prem', 'облако РФ', 'документы'],
  openGraph: {
    title: 'CORPRAG — Корпоративный AI-ассистент',
    description: 'Ответы по документам со ссылками на источники',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${sourceSans3.variable}`}>{children}</body>
    </html>
  );
}
