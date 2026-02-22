import React from 'react';
import { Header, Footer } from '@/sections';
import { Badge, Card, Container, Section } from '@/ui';

export const metadata = {
  title: 'Блог — CORPRAG',
  description: 'Материалы про корпоративных AI-ассистентов, RAG и безопасность.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section aria-labelledby="blog-heading">
          <Container size="narrow">
            <div className="text-center mb-10">
              <Badge variant="primary" className="mb-4">
                Блог
              </Badge>
              <h1 id="blog-heading" className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
                Публикации
              </h1>
              <p className="text-base sm:text-lg text-primary-600">
                Пишем про практику RAG, безопасность и внедрение в enterprise.
              </p>
            </div>

            <Card variant="elevated" className="space-y-3">
              <p className="text-sm sm:text-base text-primary-700">
                Раздел в процессе наполнения. Пока подготовим материалы под ваш сценарий — оставьте заявку на демо.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#request-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-semibold bg-accent-600 text-white hover:bg-accent-700 transition-colors min-h-[48px]"
                >
                  Запросить демо
                </a>
                <a
                  href="/#use-cases"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-semibold border-[1.5px] border-primary-300 text-primary-900 hover:bg-primary-50 transition-colors min-h-[48px]"
                >
                  Посмотреть кейсы
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

