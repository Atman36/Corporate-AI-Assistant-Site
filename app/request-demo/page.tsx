import React from 'react';
import { Footer, Header, RequestDemoForm } from '@/sections';

export const metadata = {
  title: 'Запросить демо — CORPRAG',
  description: 'Оставьте заявку на демонстрацию корпоративного AI-ассистента. Покажем работу на ваших документах.',
};

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

