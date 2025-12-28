/**
 * CORPRAG — Request Demo Page
 *
 * Отдельная страница формы заявки.
 * Для использования в Next.js: app/request-demo/page.tsx
 */

import React from 'react';
import { Header, RequestDemoForm, Footer } from './sections';

export default function RequestDemoPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <RequestDemoForm />
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Запросить демо — CORPRAG',
  description: 'Оставьте заявку на демонстрацию корпоративного AI-ассистента. Покажем работу на ваших документах.',
};
