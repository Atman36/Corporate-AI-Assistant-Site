import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
