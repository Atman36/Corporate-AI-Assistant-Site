import React from 'react';
import { Header, Footer } from '@/sections';
import { Badge, Card, Container, Section } from '@/ui';

export const metadata = {
  title: 'Условия использования — CORPRAG',
  description: 'Условия использования сайта CORPRAG.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section aria-labelledby="terms-heading">
          <Container size="narrow">
            <div className="text-center mb-10">
              <Badge variant="primary" className="mb-4">
                Юридическая информация
              </Badge>
              <h1 id="terms-heading" className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
                Условия использования
              </h1>
              <p className="text-base sm:text-lg text-primary-600">
                Общие условия использования сайта и материалов.
              </p>
            </div>

            <Card variant="elevated" className="space-y-5">
              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Назначение сайта
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Сайт носит информационный характер и предназначен для первичного знакомства с продуктом и сценариями внедрения.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Материалы и бренд
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Тексты, визуальные материалы и элементы дизайна принадлежат правообладателям. Использование материалов допускается только с согласия
                  правообладателя.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-base text-primary-900 mb-2">
                  Запрос демо
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Отправляя запрос, вы подтверждаете корректность указанных контактных данных и согласие на обратную связь по вашему обращению.
                </p>
              </section>

              <p className="text-xs text-primary-500">
                Уточните юридические формулировки под вашу организацию и юрисдикцию.
              </p>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

