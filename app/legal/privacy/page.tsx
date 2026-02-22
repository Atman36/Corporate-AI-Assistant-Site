import React from 'react';
import { Header, Footer } from '@/sections';
import { Badge, Card, Container, Section } from '@/ui';

export const metadata = {
  title: 'Политика конфиденциальности — CORPRAG',
  description: 'Как CORPRAG обрабатывает персональные данные при обращении и запросе демо.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section aria-labelledby="privacy-heading">
          <Container size="narrow">
            <div className="text-center mb-10">
              <Badge variant="primary" className="mb-4">
                Юридическая информация
              </Badge>
              <h1 id="privacy-heading" className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
                Политика конфиденциальности
              </h1>
              <p className="text-base sm:text-lg text-primary-600">
                Коротко о том, какие данные мы запрашиваем и зачем.
              </p>
            </div>

            <Card variant="elevated" className="space-y-5">
              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Какие данные собираем
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  При заполнении формы на сайте мы можем получить: имя, компанию, email, телефон и комментарий. Эти данные нужны, чтобы связаться с вами,
                  согласовать демо и/или отправить one-pager (PDF).
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Цели обработки
                </h2>
                <ul className="list-disc pl-5 text-sm sm:text-base text-primary-700 space-y-2">
                  <li>Обработка обращения и обратная связь</li>
                  <li>Подготовка и проведение демонстрации</li>
                  <li>Отправка материалов по запросу (например, one-pager)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Срок хранения и безопасность
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Мы храним данные столько, сколько необходимо для обработки запроса и коммуникации, и применяем разумные меры защиты в рамках выбранных
                  процессов и инфраструктуры.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Контакты
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  По вопросам обработки данных напишите на{' '}
                  <a href="mailto:hello@corprag.ru" className="underline hover:text-accent-700">
                    hello@corprag.ru
                  </a>
                  .
                </p>
              </section>

              <p className="text-xs text-primary-500">
                Этот текст — краткая версия для сайта. Уточните юридические формулировки под вашу организацию и процессы.
              </p>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

