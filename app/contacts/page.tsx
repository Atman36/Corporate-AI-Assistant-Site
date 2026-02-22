import React from 'react';
import { Header, Footer } from '@/sections';
import { Badge, Card, Container, Section } from '@/ui';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Контакты — CORPRAG',
  description: 'Как связаться с CORPRAG: email, телефон, адрес.',
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Section aria-labelledby="contacts-heading">
          <Container size="narrow">
            <div className="text-center mb-10">
              <Badge variant="primary" className="mb-4">
                Контакты
              </Badge>
              <h1 id="contacts-heading" className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
                Связаться с нами
              </h1>
              <p className="text-base sm:text-lg text-primary-600">
                Ответим на вопросы и согласуем демо на ваших документах.
              </p>
            </div>

            <Card variant="elevated" className="space-y-4">
              <a
                href="mailto:hello@corprag.ru"
                className="flex items-center gap-3 text-sm sm:text-base text-primary-800 hover:text-accent-700 transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-600 shrink-0" aria-hidden="true" />
                <span className="break-all">hello@corprag.ru</span>
              </a>
              <a
                href="tel:+74951234567"
                className="flex items-center gap-3 text-sm sm:text-base text-primary-800 hover:text-accent-700 transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-600 shrink-0" aria-hidden="true" />
                +7 (495) 123-45-67
              </a>
              <div className="flex items-start gap-3 text-sm sm:text-base text-primary-800">
                <MapPin className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Москва, ул. Примерная, д. 1</span>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-primary-500">
                  Если вы хотите получить one-pager (PDF) или запросить демо — удобнее всего оставить заявку через форму.
                </p>
                <div className="mt-3 flex flex-col sm:flex-row gap-3">
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
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

