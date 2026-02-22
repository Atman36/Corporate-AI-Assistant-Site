import React from 'react';
import { Header, Footer } from '@/sections';
import { Badge, Card, Container, Section } from '@/ui';

export const metadata = {
  title: 'О компании — CORPRAG',
  description: 'Информация о CORPRAG и нашем подходе к корпоративным AI-ассистентам в закрытом контуре.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section aria-labelledby="about-heading">
          <Container size="narrow">
            <div className="text-center mb-10">
              <Badge variant="primary" className="mb-4">
                Компания
              </Badge>
              <h1 id="about-heading" className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
                О компании
              </h1>
              <p className="text-base sm:text-lg text-primary-600">
                CORPRAG — продукт и внедрение корпоративного AI-ассистента по вашим документам с приоритетом на безопасность и проверяемость ответов.
              </p>
            </div>

            <Card variant="elevated" className="space-y-4">
              <div>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Как мы работаем
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Обычно начинаем с пилота на ограниченном наборе документов и пользователей, фиксируем критерии качества и затем масштабируем решение
                  на источники и интеграции, которые важны именно вашему бизнесу.
                </p>
              </div>
              <div>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Что вы получаете
                </h2>
                <ul className="list-disc pl-5 text-sm sm:text-base text-primary-700 space-y-2">
                  <li>Ответы с цитатами и ссылками на источники</li>
                  <li>Разграничение доступа и аудит-лог (при соблюдении ваших требований ИБ)</li>
                  <li>План внедрения и масштабирования после пилота</li>
                </ul>
              </div>
              <p className="text-xs text-primary-500">
                Для уточнения требований по инфраструктуре, интеграциям и контуру развёртывания — запросите демо.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#request-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-semibold bg-accent-600 text-white hover:bg-accent-700 transition-colors min-h-[48px]"
                >
                  Запросить демо
                </a>
                <a
                  href="/?intent=one-pager#request-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-semibold border-[1.5px] border-primary-300 text-primary-900 hover:bg-primary-50 transition-colors min-h-[48px]"
                >
                  Скачать one-pager (PDF)
                </a>
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

