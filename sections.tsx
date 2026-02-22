"use client";

/**
 * CORPRAG Design System — Section Components
 *
 * Готовые секции для B2B лендинга корпоративного LLM-ассистента.
 * Структура соответствует PRD из документации.
 */

import React from 'react';
import {
  Button,
  Badge,
  Card,
  CardTitle,
  CardDescription,
  IconWrapper,
  Section,
  Container,
  Input,
  Textarea,
  Checkbox,
} from './ui';
import {
  type LeadFieldErrors,
  validateLeadPayload,
} from '@/lib/lead-form';
import {
  FileText,
  Shield,
  Lock,
  Search,
  Database,
  MessageSquare,
  Link2,
  Users,
  Settings,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  AlertTriangle,
  Zap,
  Bot,
  Building2,
  Scale,
  Factory,
  ShoppingCart,
  Plug,
  Activity,
  Rocket,
  Target,
  Layers,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Plus,
  Minus,
  Loader2,
} from 'lucide-react';

/* ============================================
   HEADER
   ============================================ */

const navLinks = [
  { href: '/#how-it-works', label: 'Как работает' },
  { href: '/#features', label: 'Возможности' },
  { href: '/#use-cases', label: 'Кейсы' },
  { href: '/#security', label: 'Безопасность' },
  { href: '/#faq', label: 'FAQ' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const hash = href.slice(hashIndex); // "#section"
    const onHome = window.location.pathname === '/' || window.location.pathname === '';

    if (!onHome) return; // allow navigation to "/#section" from other pages

    const element = document.querySelector(hash);
    if (!element) return;

    e.preventDefault();
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-sticky
        transition-all duration-normal
        ${isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-neutral-200/80'
          : 'bg-white/92 backdrop-blur-md border-b border-neutral-200/70'
        }
      `}
      role="banner"
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="CORPRAG — На главную">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-xl text-primary-900">
              CORPRAG
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-display text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              variant="ghost"
              size="sm"
              aria-label="Скачать one-pager (PDF) — перейти к форме"
            >
              <a href="/?intent=one-pager#request-demo">Скачать one-pager (PDF)</a>
            </Button>
            <Button asChild variant="accent" size="sm" aria-label="Запросить демо — перейти к форме">
              <a href="/#request-demo">
                Запросить демо
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu with animation */}
        <div
          id="mobile-menu"
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-out
            ${isMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'}
          `}
          aria-hidden={!isMenuOpen}
        >
          <div className="py-4 border-t border-neutral-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1" aria-label="Мобильная навигация">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 font-display text-base font-medium text-primary-700 hover:bg-primary-50 active:bg-primary-100 rounded-lg transition-colors min-h-[48px] flex items-center"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 px-4 border-t border-neutral-100">
                <Button
                  asChild
                  variant="outline"
                  size="md"
                  className="w-full justify-center min-h-[48px]"
                >
                  <a href="/?intent=one-pager#request-demo">Скачать one-pager (PDF)</a>
                </Button>
                <Button
                  asChild
                  variant="accent"
                  size="md"
                  className="w-full justify-center min-h-[48px]"
                >
                  <a href="/#request-demo">
                    Запросить демо
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

/* ============================================
   HERO SECTION
   ============================================ */

export const HeroSection: React.FC = () => {
  const demoScenarios = React.useMemo(
    () =>
      [
        {
          id: 'it',
          label: 'ИТ',
          question: 'Как быстро восстановить доступ к корпоративной почте после смены телефона?',
          answerIntro: 'Коротко по инструкции восстановления доступа:',
          bullets: [
            'Подайте заявку в Service Desk с причиной «Смена устройства»',
            'Приложите фото документа/пропуска (по регламенту)',
            'Ожидайте подтверждение — доступ восстановят после проверки',
          ],
          sources: [
            {
              title: 'Регламент_доступа.pdf',
              meta: 'п. 2.4',
              excerpt: 'При смене устройства сотрудник оформляет заявку в Service Desk; доступ восстанавливается после подтверждения личности.',
            },
            {
              title: 'FAQ_ServiceDesk.md',
              meta: 'раздел «Почта»',
              excerpt: 'Если телефон утерян/заменён, используйте сценарий «Смена устройства» и укажите новый номер для MFA.',
            },
          ],
        },
        {
          id: 'legal',
          label: 'Юристы',
          question: 'Какие условия возврата товара по договору с ООО «Поставщик»?',
          answerIntro: 'Согласно договору №123‑П, условия возврата следующие:',
          bullets: [
            'Срок возврата: 14 календарных дней',
            'Товар должен сохранить товарный вид',
            'Требуется акт приёмки с дефектами',
          ],
          sources: [
            {
              title: 'Договор_123‑П.pdf',
              meta: 'стр. 5',
              excerpt: 'Возврат товара возможен в течение 14 календарных дней при сохранении товарного вида и оформлении акта с описанием дефектов.',
            },
            {
              title: 'Регламент_возврата.docx',
              meta: 'п. 3.2',
              excerpt: 'Для возврата оформляется акт приёмки с дефектами; сроки и порядок согласуются с ответственным менеджером.',
            },
          ],
        },
        {
          id: 'hr',
          label: 'HR',
          question: 'Какие документы нужны для оформления ДМС и когда оно начинает действовать?',
          answerIntro: 'По правилам ДМС для сотрудников:',
          bullets: [
            'Заполните заявление и согласие на обработку данных',
            'Приложите паспортные данные (в установленной форме)',
            'ДМС обычно активируется после подтверждения от страховой',
          ],
          sources: [
            {
              title: 'Политика_льгот.pdf',
              meta: 'раздел «ДМС»',
              excerpt: 'Для подключения ДМС требуется заявление и комплект данных в форме HR‑портала; активация происходит после подтверждения страховщика.',
            },
            {
              title: 'Онбординг_чеклист.xlsx',
              meta: 'лист 2',
              excerpt: 'ДМС: заполнить заявление, передать данные, дождаться подтверждения — статус отображается в HR‑портале.',
            },
          ],
        },
      ] as const,
    []
  );

  const [activeScenarioIndex, setActiveScenarioIndex] = React.useState(0);
  const [activeSourceIndex, setActiveSourceIndex] = React.useState(0);

  React.useEffect(() => setActiveSourceIndex(0), [activeScenarioIndex]);

  const activeScenario = demoScenarios[activeScenarioIndex];
  const activeSource = activeScenario.sources[activeSourceIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-14 sm:py-16 lg:py-20" aria-labelledby="hero-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
        <div className="absolute top-60 right-60 w-64 h-64 bg-primary-200 rounded-full blur-2xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-8 lg:gap-12 items-start">
          {/* Left: Content */}
          <div className="min-w-0 max-w-[560px]">
            <Badge variant="accent" className="mb-4 sm:mb-6">
              <Lock className="w-3 h-3" aria-hidden="true" />
              Закрытый контур
            </Badge>
            
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter leading-tight text-primary-950 mb-4 sm:mb-5"
            >
              Найдите ответы в корпоративных документах за минуты, а не за часы
            </h1>
            
            <p className="text-base sm:text-lg text-primary-700 leading-relaxed mb-5 sm:mb-6">
              Ассистент даёт ответ по вашим данным с указанием источников.
              Поддерживаем on-prem и частное облако, доступы и аудит настраиваются под ваши политики.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl border border-red-200/70 bg-red-50/60 px-4 py-3 min-w-0">
                <p className="text-xs uppercase tracking-wide text-red-700 font-display font-semibold mb-1">Проблема</p>
                <p className="text-sm text-primary-700 leading-snug">
                  Поиск регламентов вручную занимает часы.
                </p>
              </div>
              <div className="rounded-xl border border-accent-200/70 bg-accent-50/70 px-4 py-3 min-w-0">
                <p className="text-xs uppercase tracking-wide text-accent-700 font-display font-semibold mb-1">Решение</p>
                <p className="text-sm text-primary-700 leading-snug">
                  Один чат для знаний с ответами по источникам.
                </p>
              </div>
              <div className="rounded-xl border border-primary-200 bg-white/80 px-4 py-3 min-w-0">
                <p className="text-xs uppercase tracking-wide text-primary-700 font-display font-semibold mb-1">Доказательство</p>
                <p className="text-sm text-primary-700 leading-snug">
                  На пилоте показываем путь от вопроса до исходника.
                </p>
              </div>
              <div className="rounded-xl border border-primary-200 bg-white/80 px-4 py-3 min-w-0">
                <p className="text-xs uppercase tracking-wide text-primary-700 font-display font-semibold mb-1">CTA</p>
                <p className="text-sm text-primary-700 leading-snug">
                  Оставьте заявку и получите план пилота.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[52px]"
              >
                <a href="/#request-demo">
                  Запросить демо
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[52px]"
              >
                <a href="/?intent=one-pager#request-demo">Скачать one-pager (PDF)</a>
              </Button>
            </div>

            <div className="mt-4 text-sm text-primary-600 flex flex-wrap gap-x-3 gap-y-1">
              <span>Цитаты и источники</span>
              <span aria-hidden="true">·</span>
              <span>NDA и контроль доступа</span>
              <span aria-hidden="true">·</span>
              <span>Аудит и логи</span>
            </div>
          </div>
          
          {/* Right: Product Mock */}
          <div className="relative mt-2 lg:mt-0 min-w-0 lg:max-w-[620px] lg:ml-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-w-full">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-primary-50 border-b border-neutral-200">
                <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                <span className="ml-2 text-xs sm:text-sm font-medium text-primary-600">
                  Корпоративный ассистент
                </span>
              </div>
              
              {/* Chat content */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Scenario buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-primary-500">Примеры:</span>
                  {demoScenarios.map((s, idx) => {
                    const isActive = idx === activeScenarioIndex;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveScenarioIndex(idx)}
                        className={`
                          px-2.5 py-1.5 rounded-full text-xs font-display font-semibold
                          border transition-colors
                          ${isActive
                            ? 'bg-accent-100 border-accent-200 text-accent-800'
                            : 'bg-white border-neutral-200 text-primary-600 hover:bg-neutral-50'
                          }
                        `}
                        aria-pressed={isActive}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-br-sm max-w-[85%] text-sm sm:text-base break-words">
                    {activeScenario.question}
                  </div>
                </div>
                
                {/* Assistant message */}
                <div className="space-y-3">
                  <div className="bg-neutral-100 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-bl-sm max-w-[90%]">
                    <p className="text-primary-800 mb-2 sm:mb-3 text-sm sm:text-base">
                      {activeScenario.answerIntro}
                    </p>
                    <ul className="text-xs sm:text-sm text-primary-700 space-y-1">
                      {activeScenario.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Sources panel - KEY DIFFERENTIATOR */}
                  <div className="bg-accent-50 border border-accent-200 rounded-xl p-2.5 sm:p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Link2 className="w-4 h-4 text-accent-600" aria-hidden="true" />
                      <span className="text-xs font-semibold text-accent-700 uppercase tracking-wide">
                        Источники
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {activeScenario.sources.map((src, idx) => {
                        const isActive = idx === activeSourceIndex;
                        return (
                          <button
                            key={`${src.title}-${src.meta}`}
                            type="button"
                            onClick={() => setActiveSourceIndex(idx)}
                            className={`
                              w-full flex items-center gap-2 text-left text-xs sm:text-sm
                              ${isActive ? 'text-accent-800' : 'text-accent-700 hover:text-accent-800'}
                            `}
                            aria-pressed={isActive}
                          >
                            <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
                            <span className={`underline truncate ${isActive ? 'decoration-2' : ''}`}>
                              {src.title}, {src.meta}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-2 rounded-lg bg-white/70 border border-accent-200/60 p-2">
                      <p className="text-[11px] text-accent-800 font-semibold mb-1">
                        Фрагмент
                      </p>
                      <p className="text-xs text-primary-800 leading-relaxed">
                        <span className="bg-accent-200/60 px-1 rounded">
                          {activeSource.excerpt}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-primary-600">
                    <AlertTriangle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Если в документах нет ответа — ассистент так и скажет и предложит, где искать.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="hidden xl:block absolute right-3 top-5">
              <div className="bg-white shadow-lg rounded-lg px-3 py-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" aria-hidden="true" />
                <span className="text-xs font-medium text-primary-700">On-prem</span>
              </div>
            </div>
            <div className="hidden xl:block absolute left-3 bottom-5">
              <div className="bg-white shadow-lg rounded-lg px-3 py-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent-600" aria-hidden="true" />
                <span className="text-xs font-medium text-primary-700">RBAC</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ============================================
   SOCIAL PROOF SECTION
   ============================================ */

export const SocialProofSection: React.FC = () => {
  return (
    <Section size="default" className="py-10 sm:py-12 lg:py-16 bg-white border-y border-neutral-100" aria-label="Наши клиенты">
      <Container>
        <div className="text-center">
          <p className="text-xs sm:text-sm font-display font-medium text-primary-500 mb-6 sm:mb-8 uppercase tracking-wide">
            Нам доверяют
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-16">
            {/* Placeholder logos - replace with real ones */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 sm:h-10 w-20 sm:w-28 bg-neutral-200 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                role="img"
                aria-label={`Логотип клиента ${i}`}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-400">
            Логотипы некоторых клиентов скрыты по условиям NDA
          </p>
          <div className="mt-6 max-w-xl mx-auto rounded-xl border border-primary-200 bg-primary-50 px-4 py-3 text-left">
            <p className="text-xs font-display font-semibold uppercase tracking-wide text-primary-600 mb-1">
              Опыт команды
            </p>
            <p className="text-sm text-primary-700">
              10+ лет в IT, 4 года с AI <span className="font-semibold text-primary-900">[UNVERIFIED]</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   PROBLEM-SOLUTION SECTION
   ============================================ */

const problems = [
  {
    icon: AlertTriangle,
    title: 'Сотрудники тратят часы на поиск',
    description: 'Информация разбросана по Confluence, почте, чатам, файловым серверам. Поиск неэффективен.',
  },
  {
    icon: Shield,
    title: 'Публичные LLM — риск утечки',
    description: 'Нельзя загружать корпоративные документы в ChatGPT или Claude без контроля.',
  },
  {
    icon: Search,
    title: 'Ответы без источников',
    description: 'Галлюцинации LLM. Невозможно проверить, откуда информация и можно ли ей доверять.',
  },
];

const solutions = [
  {
    icon: Zap,
    title: 'Ответы за секунды',
    description: 'Единая точка входа к корпоративным знаниям. Ассистент находит информацию мгновенно.',
  },
  {
    icon: Lock,
    title: 'Данные в вашем контуре',
    description: 'On-prem или облако РФ. Документы не покидают периметр. RBAC и аудит включены.',
  },
  {
    icon: Link2,
    title: 'Каждый ответ — со ссылкой',
    description: 'RAG-архитектура с цитатами. Всегда видно, откуда взята информация.',
  },
];

export const ProblemSolutionSection: React.FC = () => {
  return (
    <Section aria-labelledby="problem-solution-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <Badge variant="primary" className="mb-4">
            Проблема → Решение
          </Badge>
          <h2 id="problem-solution-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            От хаоса к порядку в работе со знаниями
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg text-primary-500 mb-4 sm:mb-6 uppercase tracking-wide">
              Без ассистента
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {problems.map((item) => (
                <Card key={item.title} variant="outline" className="border-red-200/50 bg-red-50/30">
                  <div className="flex gap-3 sm:gap-4">
                    <IconWrapper variant="default" className="bg-red-100 text-red-600 shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    </IconWrapper>
                    <div className="min-w-0">
                      <CardTitle className="text-sm sm:text-base mb-1">{item.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{item.description}</CardDescription>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg text-accent-600 mb-4 sm:mb-6 uppercase tracking-wide">
              С AI-ассистентом
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {solutions.map((item) => (
                <Card key={item.title} variant="outline" className="border-accent-200/50 bg-accent-50/30">
                  <div className="flex gap-3 sm:gap-4">
                    <IconWrapper variant="default" className="shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    </IconWrapper>
                    <div className="min-w-0">
                      <CardTitle className="text-sm sm:text-base mb-1">{item.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{item.description}</CardDescription>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   HOW IT WORKS SECTION
   ============================================ */

const steps = [
  {
    number: '01',
    title: 'Подключение источников',
    description: 'Confluence, SharePoint, файловые хранилища, 1С, CRM — подключаем к вашим данным',
    icon: Database,
  },
  {
    number: '02',
    title: 'Индексация с правами',
    description: 'Создаём векторный индекс с учётом ролей и групп доступа',
    icon: Settings,
  },
  {
    number: '03',
    title: 'Вопрос пользователя',
    description: 'Сотрудник задаёт вопрос через чат или интегрированный интерфейс',
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'Поиск по базе знаний',
    description: 'RAG находит релевантные фрагменты с учётом прав текущего пользователя',
    icon: Search,
  },
  {
    number: '05',
    title: 'Ответ со ссылками',
    description: 'Генерация ответа с цитатами и ссылками на конкретные документы + аудит-лог',
    icon: Link2,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <Section background="gradient" aria-labelledby="how-it-works-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <Badge variant="primary" className="mb-4">
            Как это работает
          </Badge>
          <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            От документов к ответам за 5 шагов
          </h2>
          <p className="text-base sm:text-lg text-primary-600">
            Прозрачный процесс: каждый ответ можно проверить по источнику
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-300 to-transparent" aria-hidden="true" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <Card
                  variant="default"
                  className="text-center h-full hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    {/* Step number */}
                    <div className="relative mb-4">
                      <IconWrapper size="lg" variant="default">
                        <step.icon className="w-6 h-6" aria-hidden="true" />
                      </IconWrapper>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-900 text-white text-xs font-bold rounded-full flex items-center justify-center" aria-hidden="true">
                        {step.number}
                      </span>
                    </div>
                    
                    <CardTitle className="text-base sm:text-lg mb-2">
                      <span className="sr-only">Шаг {step.number}: </span>
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {step.description}
                    </CardDescription>
                  </div>
                </Card>
                
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4 sm:hidden" aria-hidden="true">
                    <ChevronDown className="w-6 h-6 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   FEATURES SECTION (6 cards)
   ============================================ */

const features = [
  {
    icon: Search,
    title: 'Поиск + источники',
    description: 'Цитаты уровня абзаца + ссылка на страницу/пункт',
  },
  {
    icon: Users,
    title: 'RBAC / права доступа',
    description: 'SSO (AD/LDAP) и политики доступа: роли/группы/источники',
  },
  {
    icon: Settings,
    title: 'Админка управления',
    description: 'Политики источников: allow/deny по типам документов и папкам',
  },
  {
    icon: FileText,
    title: 'Шаблоны и генерация',
    description: 'Генерация по корпоративным шаблонам; read-only по умолчанию',
  },
  {
    icon: Clock,
    title: 'История и экспорт',
    description: 'Аудит запросов и ответов; экспорт (в т.ч. для SIEM — по запросу)',
  },
  {
    icon: Database,
    title: 'Интеграции под вас',
    description: 'Confluence/SharePoint/1С/Service Desk и кастомные коннекторы',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <Section aria-labelledby="features-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <Badge variant="accent" className="mb-4">
            Возможности
          </Badge>
          <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Всё для корпоративного AI-ассистента
          </h2>
          <p className="text-base sm:text-lg text-primary-600">
            Основные функции, которые делают ассистента полезным и безопасным
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="default"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IconWrapper variant="default" className="mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5" aria-hidden="true" />
              </IconWrapper>
              <CardTitle className="text-base sm:text-lg mb-2">{feature.title}</CardTitle>
              <CardDescription className="text-sm">{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   USE CASES SECTION (Tabs)
   ============================================ */

const useCases = [
  {
    id: 'it',
    icon: Building2,
    title: 'ИТ и поддержка',
    description: 'Первая линия поддержки: ответы на типовые заявки за секунды',
    examples: [
      'Поиск по базе знаний технической поддержки',
      'Ответы на типовые вопросы пользователей',
      'Инструкции по настройке ПО и оборудования',
      'Документация по внутренним системам',
    ],
    caseCard: {
      pain: 'Типовые обращения повторяются, знания разбросаны по wiki/чатам, ответы зависят от конкретных сотрудников.',
      solution: 'Подключили базу знаний и регламенты; ответы с цитатами + доступ по ролям.',
      outcome: 'Сократили время поиска и разгрузили первую линию поддержки.',
    },
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Юристы',
    description: 'Быстрый доступ к договорам и регламентам',
    examples: [
      'Поиск условий в действующих договорах',
      'Ответы по внутренним регламентам',
      'Сравнение редакций документов',
      'Генерация типовых писем и ответов',
    ],
    caseCard: {
      pain: 'Поиск условий по договорам занимает время, сложно быстро проверить ссылку на пункт/страницу.',
      solution: 'Индексация договоров и регламентов; выдача ответа только с цитатами и ссылками.',
      outcome: 'Быстрее находят нужные пункты и снижают риск ошибок при интерпретации.',
    },
  },
  {
    id: 'hr',
    icon: Users,
    title: 'HR',
    description: 'Ассистент для сотрудников и рекрутинга',
    examples: [
      'Ответы на вопросы новых сотрудников',
      'Поиск по политикам и процедурам компании',
      'Информация о льготах и компенсациях',
      'Онбординг-материалы и чек-листы',
    ],
    caseCard: {
      pain: 'Повторяющиеся вопросы про льготы/процессы и долгий поиск актуальной версии документа.',
      solution: 'Подключили политики и чек-листы; ответы с указанием источника и версии.',
      outcome: 'Ускорили онбординг и снизили нагрузку на HR.',
    },
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    title: 'Закупки',
    description: 'Работа с поставщиками и тендерами',
    examples: [
      'Поиск по каталогам и спецификациям',
      'История закупок и условия поставщиков',
      'Сравнение коммерческих предложений',
      'Подготовка тендерной документации',
    ],
    caseCard: {
      pain: 'Сложно быстро сопоставить требования, КП и условия поставщиков по разным файлам.',
      solution: 'Собрали спецификации и типовые формы; ассистент выдаёт выдержки с источниками.',
      outcome: 'Сократили время подготовки и проверки тендерной документации.',
    },
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Производство',
    description: 'Техническая документация и регламенты',
    examples: [
      'Поиск по технологическим картам',
      'Инструкции по эксплуатации оборудования',
      'Стандарты качества и нормативы',
      'Отчёты по техническому обслуживанию',
    ],
    caseCard: {
      pain: 'Регламенты и инструкции обновляются, а нужный фрагмент трудно найти на смене.',
      solution: 'Индексация техдоков; ответы со ссылкой на документ и пункт.',
      outcome: 'Ускорили поиск и снизили риск использования устаревшей версии.',
    },
  },
];

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('it');
  const activeCase = useCases.find((uc) => uc.id === activeTab)!;

  return (
    <Section background="gradient" id="use-cases" aria-labelledby="use-cases-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="accent" className="mb-4">
            Кейсы применения
          </Badge>
          <h2 id="use-cases-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Для каждого отдела — свой сценарий
          </h2>
          <p className="text-base sm:text-lg text-primary-600">
            Ассистент адаптируется под задачи разных подразделений
          </p>
        </div>

        {/* Tabs - scrollable on mobile */}
        <div className="mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div 
            className="flex gap-2 sm:gap-3 sm:flex-wrap sm:justify-center overflow-x-auto pb-2 sm:pb-0 scrollbar-hide"
            role="tablist"
            aria-label="Выберите отдел"
          >
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                role="tab"
                aria-selected={activeTab === uc.id}
                aria-controls={`tabpanel-${uc.id}`}
                id={`tab-${uc.id}`}
                className={`
                  flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-full
                  font-display text-xs sm:text-sm font-medium transition-all whitespace-nowrap
                  min-h-[44px] shrink-0
                  ${activeTab === uc.id
                    ? 'bg-accent-600 text-white shadow-accent'
                    : 'bg-white text-primary-700 hover:bg-primary-50 shadow-sm'
                  }
                `}
              >
                <uc.icon className="w-4 h-4" aria-hidden="true" />
                <span>{uc.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <Card 
          variant="elevated" 
          className="max-w-4xl mx-auto"
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="lg:w-1/2">
              <IconWrapper size="lg" className="mb-4">
                <activeCase.icon className="w-7 h-7" aria-hidden="true" />
              </IconWrapper>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-950 mb-2">
                {activeCase.title}
              </h3>
              <p className="text-base sm:text-lg text-primary-600 mb-6">
                {activeCase.description}
              </p>
              <Button asChild variant="accent" className="w-full sm:w-auto justify-center min-h-[48px]">
                <a href="/#request-demo">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <h4 className="font-display font-semibold text-sm text-primary-500 uppercase tracking-wide mb-4">
                Примеры использования
              </h4>
              <ul className="space-y-3">
                {activeCase.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm sm:text-base text-primary-700">{example}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                <h5 className="text-xs font-semibold text-primary-500 uppercase tracking-wide mb-3">
                  Короткий кейс
                </h5>
                <div className="space-y-2 text-sm text-primary-700">
                  <p>
                    <span className="font-semibold text-primary-900">Что болело:</span> {activeCase.caseCard.pain}
                  </p>
                  <p>
                    <span className="font-semibold text-primary-900">Что сделали:</span> {activeCase.caseCard.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-primary-900">Результат:</span> {activeCase.caseCard.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};

/* ============================================
   ADD-ONS SECTION
   ============================================ */

const addons = [
  {
    icon: Plug,
    title: 'Интеграции и автоматизация',
    description: 'Автоматизация действий — опционально: по allowlist, с подтверждением и полным аудитом',
    features: [
      'Подключение к 1С, ERP, CRM',
      'Интеграция с ServiceDesk',
      'Автоматизация рутинных задач',
      'Кастомные коннекторы под вашу инфраструктуру',
    ],
  },
  {
    icon: Activity,
    title: 'Безопасность и LLMOps',
    description: 'Эксплуатация LLM на уровне enterprise',
    features: [
      'Аудит и мониторинг качества',
      'Red-teaming и тестирование',
      'SLA-поддержка',
      'Регулярные обновления и улучшения',
    ],
  },
];

export const AddonsSection: React.FC = () => {
  return (
    <Section aria-labelledby="addons-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="primary" className="mb-4">
            Дополнительные услуги
          </Badge>
          <h2 id="addons-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Расширьте возможности ассистента
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {addons.map((addon) => (
            <Card key={addon.title} variant="default" className="h-full">
              <IconWrapper size="lg" className="mb-4">
                <addon.icon className="w-6 h-6" aria-hidden="true" />
              </IconWrapper>
              <CardTitle className="text-lg sm:text-xl mb-2">{addon.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base mb-6">{addon.description}</CardDescription>
              <ul className="space-y-2">
                {addon.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-primary-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   PACKAGES SECTION
   ============================================ */

const packages = [
  {
    name: 'Pilot',
    description: '2–3 недели: демо на ваших данных + отчёт по качеству и план масштабирования',
    features: [
      '1–2 источника данных и 1 сценарий отдела',
      'Критерии успеха и риски согласуем заранее',
      'Отчёт по качеству ответов и рекомендациям',
      'План внедрения и интеграций на следующий этап',
    ],
    cta: 'Запросить пилот',
    highlighted: false,
  },
  {
    name: 'Business',
    description: 'Для запуска в продуктив: доступы, интеграции, обучение, поддержка',
    features: [
      'SSO/RBAC и аудит запросов/ответов',
      'Интеграции с ключевыми источниками',
      'Обучение администраторов и пользователей',
      'SLA и регламент сопровождения',
    ],
    cta: 'Обсудить запуск',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Под требования ИБ и инфраструктуры крупного бизнеса',
    features: [
      'On-prem/частное облако, изолированные контуры',
      'Аудит, пентест/редтиминг — по запросу',
      'Интеграция с SIEM/логированием — по запросу',
      'Выделенная команда и расширенные SLA',
    ],
    cta: 'Связаться с нами',
    highlighted: false,
  },
];

export const PackagesSection: React.FC = () => {
  return (
    <Section background="gradient" aria-labelledby="packages-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="accent" className="mb-4">
            Пакеты
          </Badge>
          <h2 id="packages-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Выберите подходящий вариант
          </h2>
          <p className="text-base sm:text-lg text-primary-600">
            От пилота до enterprise-решения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              variant={pkg.highlighted ? 'elevated' : 'default'}
              className={`h-full flex flex-col ${
                pkg.highlighted ? 'border-2 border-accent-500 relative' : ''
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">Популярный</Badge>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-950 mb-2">{pkg.name}</h3>
                <p className="text-sm sm:text-base text-primary-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-primary-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                variant={pkg.highlighted ? 'accent' : 'outline'}
                className="w-full min-h-[48px]"
              >
                <a href="/#request-demo">{pkg.cta}</a>
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-primary-500 mt-8">
          Цены предоставляются по запросу. Стоимость зависит от объёма данных и требований к инфраструктуре.
        </p>
      </Container>
    </Section>
  );
};

/* ============================================
   TIMELINE SECTION
   ============================================ */

const timelineSteps = [
  {
    number: '01',
    title: 'Диагностика',
    description: 'Анализ источников данных, инфраструктуры и требований безопасности',
    icon: Target,
  },
  {
    number: '02',
    title: 'Пилот',
    description: 'Развёртывание на ограниченном объёме данных, тестирование с пользователями',
    icon: Rocket,
  },
  {
    number: '03',
    title: 'Продуктив',
    description: 'Масштабирование на все источники, обучение сотрудников, интеграции',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Сопровождение',
    description: 'Мониторинг, улучшения, расширение функциональности, поддержка',
    icon: Activity,
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <Section aria-labelledby="timeline-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <Badge variant="primary" className="mb-4">
            Процесс внедрения
          </Badge>
          <h2 id="timeline-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Путь от идеи до работающего ассистента
          </h2>
          <p className="text-base sm:text-lg text-primary-600">
            Поэтапное внедрение с контролем на каждом шаге
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-300 to-primary-200" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg border-2 border-accent-200 flex items-center justify-center">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-600" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-primary-900 text-white text-xs sm:text-sm font-bold rounded-full flex items-center justify-center" aria-hidden="true">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-primary-950 mb-2">
                    <span className="sr-only">Этап {step.number}: </span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < timelineSteps.length - 1 && (
                  <div className="sm:hidden flex justify-center my-6" aria-hidden="true">
                    <ChevronDown className="w-6 h-6 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   SECURITY ACCORDION SECTION
   ============================================ */

const securityItems = [
  {
    title: 'On-prem и частное облако',
    description: 'Помогаем развернуть решение в вашем контуре: on-prem, частное облако или гибридная схема.',
    icon: Shield,
  },
  {
    title: 'NDA и процесс доступа',
    description: 'Фиксируем правила работы с данными, доступами и ответственностью в рамках NDA и внутренних политик.',
    icon: Scale,
  },
  {
    title: 'RBAC/SSO',
    description: 'Интеграция с AD/LDAP и разграничение доступа по ролям. Пользователь видит только разрешённые материалы.',
    icon: Lock,
  },
  {
    title: 'Аудит и логирование',
    description: 'События доступа и работы ассистента можно передавать в ваши процессы контроля и расследований.',
    icon: FileText,
  },
];

export const SecuritySection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
  return (
    <Section background="dark" className="text-white relative overflow-hidden" aria-labelledby="security-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <Badge variant="accent" className="mb-4 sm:mb-6 bg-accent-900/50 text-accent-300">
              <Shield className="w-3 h-3" aria-hidden="true" />
              Безопасность
            </Badge>
            
            <h2 id="security-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Данные под вашим контролем
            </h2>
            
            <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-8">
              Базовый контур под enterprise-требования: варианты развёртывания, NDA, RBAC/SSO и аудит событий.
            </p>
            
            <Button variant="accent" size="lg" className="w-full sm:w-auto justify-center min-h-[52px]">
              Подробнее о безопасности
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
          
          {/* Right: Accordion */}
          <div className="space-y-3 sm:space-y-4" role="region" aria-label="Функции безопасности">
            {securityItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  rounded-xl border transition-all duration-300
                  ${openIndex === index
                    ? 'bg-white/10 border-accent-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                  }
                `}
              >
                <button
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 text-left min-h-[56px]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`security-panel-${index}`}
                >
                  <IconWrapper
                    variant="dark"
                    size="sm"
                    className={`shrink-0 ${openIndex === index ? 'bg-accent-600' : ''}`}
                  >
                    <item.icon className="w-4 h-4" aria-hidden="true" />
                  </IconWrapper>
                  <span className="flex-1 font-display font-semibold text-sm sm:text-base text-white">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-400 transition-transform shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                
                <div
                  id={`security-panel-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="px-4 sm:px-5 pb-4 pl-[3.5rem] sm:pl-[4.5rem]">
                    <p className="text-sm sm:text-base text-primary-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   CTA SECTION
   ============================================ */

export const CTASection: React.FC = () => {
  return (
    <Section aria-labelledby="cta-heading">
      <Container>
        <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Покажем демо на ваших документах
            </h2>
            <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-8">
              Загрузите 2-3 документа — увидите, как ассистент отвечает с цитатами.
              30 минут, без обязательств.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild variant="accent" size="lg" className="w-full sm:w-auto justify-center min-h-[52px]">
                <a href="/#request-demo">
                  Запросить демо
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center min-h-[52px] border-white/30 text-white hover:bg-white/10"
              >
                <a href="/#use-cases">Посмотреть кейсы</a>
              </Button>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-primary-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" aria-hidden="true" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" aria-hidden="true" />
                <span>Оценка за 1-2 дня</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   FAQ SECTION
   ============================================ */

const faqItems = [
  {
    question: 'Чем корпоративный ассистент отличается от ChatGPT?',
    answer: 'Главное отличие — работа с вашими внутренними документами в защищённом контуре. Ассистент отвечает со ссылками на источники, поддерживает RBAC (контроль доступа по ролям) и не передаёт данные за периметр организации.',
  },
  {
    question: 'Можно ли развернуть решение on-prem?',
    answer: 'Да, поддерживаем развёртывание on-prem на серверах заказчика, в частном облаке РФ или гибридные сценарии. Выбор зависит от требований безопасности и инфраструктуры.',
  },
  {
    question: 'Какие источники данных поддерживаются?',
    answer: 'Confluence, SharePoint, файловые хранилища (SMB/NFS), базы данных, 1С, CRM-системы и другие. Список коннекторов расширяется, возможна разработка кастомных интеграций.',
  },
  {
    question: 'Как обеспечивается безопасность данных?',
    answer: 'Данные обрабатываются в контуре заказчика. Поддерживаем интеграцию с AD/LDAP для SSO, RBAC для разграничения доступа, полный аудит всех запросов и ответов.',
  },
  {
    question: 'Где хранится индекс/вектора и как с шифрованием?',
    answer: 'Развёртывание возможно в вашем контуре: индекс/векторное хранилище и документы остаются в выбранной инфраструктуре. Настройки шифрования at-rest/in-transit и доступов зависят от вашего контура и требований ИБ; на пилоте фиксируем целевую схему и политики.',
  },
  {
    question: 'Что логируется и как долго хранится?',
    answer: 'Обычно логируются запросы, метаданные пользователя/ролей, использованные источники и события системы (для аудита и расследований). Срок хранения и состав логов согласуются с ИБ и комплаенсом и могут настраиваться под политики заказчика.',
  },
  {
    question: 'Можно ли запретить ответы из отдельных источников/папок?',
    answer: 'Да, практичный подход — задавать политики источников: allow/deny по типам документов, папкам/пространствам и категориям. Это помогает контролировать, какие документы вообще могут участвовать в ответе.',
  },
  {
    question: 'Как обновляются документы и как быстро изменения попадают в ответы?',
    answer: 'Обновления зависят от источника: обычно настраивается периодическая синхронизация и переиндексация по изменениям. На пилоте согласуем частоту и SLA актуализации, чтобы ответ опирался на свежую версию документов.',
  },
  {
    question: 'Как измеряете качество и что показываете на пилоте?',
    answer: 'На пилоте удобно мерить качество по набору контрольных вопросов: доля ответов с корректными цитатами, покрытие сценариев и доля “нет ответа” (когда данных нет). По итогам формируем отчёт и план улучшений: источники, политики доступа, промпты/шаблоны, интеграции.',
  },
  {
    question: 'Что если ассистент даёт неправильный ответ?',
    answer: 'Каждый ответ содержит ссылки на источники — можно сразу проверить информацию. Система мониторинга отслеживает качество ответов, а red-teaming помогает выявлять проблемы до релиза.',
  },
  {
    question: 'Сколько времени занимает внедрение?',
    answer: 'Пилот на ограниченном объёме данных можно запустить достаточно быстро. Сроки полного внедрения зависят от количества источников, требований к интеграциям и политик безопасности.',
  },
  {
    question: 'Какая модель используется?',
    answer: 'Поддерживаем различные LLM: как открытые модели для on-prem развёртывания, так и API-провайдеров для облачных сценариев. Выбор модели зависит от требований к качеству, скорости и инфраструктуре.',
  },
  {
    question: 'Есть ли API для интеграции?',
    answer: 'Да, предоставляем REST API для интеграции с внутренними системами: порталами, чат-ботами, ServiceDesk и другими приложениями.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <Section id="faq" aria-labelledby="faq-heading">
      <Container size="narrow">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <Badge variant="primary" className="mb-4">
            Вопросы и ответы
          </Badge>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`
                rounded-xl border transition-all duration-300
                ${openIndex === index
                  ? 'bg-white border-accent-200 shadow-md'
                  : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                }
              `}
            >
              <button
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left min-h-[56px] gap-3"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-display font-semibold text-sm sm:text-base text-primary-900">
                  {item.question}
                </span>
                <div
                  className={`
                    shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                    transition-colors
                    ${openIndex === index
                      ? 'bg-accent-100 text-accent-600'
                      : 'bg-neutral-200 text-primary-600'
                    }
                  `}
                  aria-hidden="true"
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div
                id={`faq-panel-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-4 sm:px-6 pb-4">
                  <p className="text-sm sm:text-base text-primary-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* ============================================
   FOOTER
   ============================================ */

const footerLinks = {
  product: [
    { label: 'Как работает', href: '/#how-it-works' },
    { label: 'Возможности', href: '/#features' },
    { label: 'Кейсы', href: '/#use-cases' },
    { label: 'Пакеты', href: '/#packages' },
  ],
  company: [
    { label: 'О компании', href: '/about' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Блог', href: '/blog' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '/legal/privacy' },
    { label: 'Условия использования', href: '/legal/terms' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white" role="contentinfo">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4" aria-label="CORPRAG — На главную">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span className="font-display font-bold text-xl">CORPRAG</span>
              </a>
              <p className="text-primary-400 text-sm mb-6">
                Корпоративный AI-ассистент в закрытом контуре.
                Ответы со ссылками на источники.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="Telegram"
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-primary-400 mb-4">
                Продукт
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-primary-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-primary-400 mb-4">
                Компания
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-primary-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-primary-400 mb-4">
                Контакты
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@corprag.ru"
                    className="flex items-center gap-2 text-sm sm:text-base text-primary-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="break-all">hello@corprag.ru</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+74951234567"
                    className="flex items-center gap-2 text-sm sm:text-base text-primary-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base text-primary-300">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" aria-hidden="true" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-primary-500">
            © {new Date().getFullYear()} CORPRAG. Все права защищены.
          </p>
          <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6" aria-label="Юридическая информация">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-primary-500 hover:text-primary-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
};

/* ============================================
   REQUEST DEMO FORM
   ============================================ */

function mapLeadApiError(code?: string): string {
  switch (code) {
    case 'RATE_LIMITED':
      return 'Слишком много попыток отправки. Подождите немного и попробуйте снова.';
    case 'CSRF_MISMATCH':
      return 'Сессия формы обновилась. Повторите отправку заявки.';
    case 'TELEGRAM_NOT_CONFIGURED':
    case 'TELEGRAM_UNAVAILABLE':
      return 'Сервис приёма заявок временно недоступен. Попробуйте позже или напишите на hello@corprag.ru.';
    case 'FORBIDDEN_ORIGIN':
      return 'Запрос отклонён политикой безопасности. Откройте форму напрямую на сайте.';
    default:
      return 'Не удалось отправить заявку. Проверьте поля и повторите попытку.';
  }
}

export const RequestDemoForm: React.FC = () => {
  const [resolvedIntent, setResolvedIntent] = React.useState<'demo' | 'one-pager'>('demo');
  const [csrfToken, setCsrfToken] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [requestId, setRequestId] = React.useState<string | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = React.useState<LeadFieldErrors>({});

  const loadCsrfToken = React.useCallback(async () => {
    try {
      const response = await fetch('/api/leads/csrf', {
        method: 'GET',
        cache: 'no-store',
      });
      if (!response.ok) {
        setFormError('Не удалось подготовить защищённую форму. Обновите страницу.');
        return false;
      }
      const payload = (await response.json()) as { csrfToken?: string };
      if (!payload.csrfToken) {
        setFormError('Не удалось подготовить защищённую форму. Обновите страницу.');
        return false;
      }
      setCsrfToken(payload.csrfToken);
      return true;
    } catch {
      setFormError('Проблема соединения. Проверьте интернет и попробуйте снова.');
      return false;
    }
  }, []);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setResolvedIntent(params.get('intent') === 'one-pager' ? 'one-pager' : 'demo');
    void loadCsrfToken();
  }, [loadCsrfToken]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setFormError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      intent: String(data.get('intent') || resolvedIntent || 'demo'),
      name: String(data.get('name') || ''),
      company: String(data.get('company') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      comment: String(data.get('comment') || ''),
      privacy: data.get('privacy') === 'on',
      csrfToken,
      website: String(data.get('website') || ''),
    };

    const validation = validateLeadPayload(payload);
    if (!validation.ok || !validation.data) {
      setFieldErrors(validation.errors);
      setFormError('Пожалуйста, исправьте ошибки в форме.');
      if (validation.errors.csrfToken) {
        await loadCsrfToken();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify(validation.data),
      });

      const responsePayload = (await response.json().catch(() => null)) as
        | {
            ok?: boolean;
            requestId?: string;
            error?: { code?: string; fields?: LeadFieldErrors };
          }
        | null;

      if (!response.ok || !responsePayload?.ok) {
        setFieldErrors(responsePayload?.error?.fields ?? {});
        setFormError(mapLeadApiError(responsePayload?.error?.code));
        if (responsePayload?.error?.code === 'CSRF_MISMATCH') {
          await loadCsrfToken();
        }
        return;
      }

      setRequestId(responsePayload.requestId ?? null);
      setIsSubmitted(true);
      form.reset();
      await loadCsrfToken();
    } catch {
      setFormError('Не удалось отправить заявку из-за сетевой ошибки. Повторите попытку.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section>
        <Container size="narrow">
          <Card variant="elevated" className="max-w-2xl mx-auto text-center py-12">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-accent-600" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-primary-950 mb-4">
              Заявка отправлена
            </h2>
            <p className="text-primary-600 mb-8">
              {resolvedIntent === 'one-pager'
                ? 'Спасибо. Мы отправим one-pager и свяжемся для согласования демо.'
                : 'Спасибо. Мы свяжемся с вами для согласования демо на ваших данных.'}
            </p>
            {requestId && (
              <p className="text-xs text-primary-500 mb-8">
                ID заявки: <span className="font-mono text-primary-700">{requestId}</span>
              </p>
            )}
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setRequestId(null);
                setFieldErrors({});
                setFormError(null);
              }}
            >
              Отправить ещё одну заявку
            </Button>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="request-demo">
      <Container size="narrow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="accent" className="mb-4">
              {resolvedIntent === 'one-pager' ? 'One-pager (PDF)' : 'Запросить демо'}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
              {resolvedIntent === 'one-pager'
                ? 'Пришлём one-pager и согласуем демо'
                : 'Покажем ассистента на ваших документах'}
            </h2>
            <p className="text-lg text-primary-600">
              Оставьте контакты. Обычно отвечаем в течение 1 рабочего дня.
            </p>
          </div>

          <Card variant="elevated">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-busy={isSubmitting}>
              <input type="hidden" name="intent" value={resolvedIntent} />
              <input type="hidden" name="csrfToken" value={csrfToken} />

              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Ваш сайт</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  id="lead-name"
                  name="name"
                  label="Имя *"
                  placeholder="Иван Петров"
                  autoComplete="name"
                  maxLength={80}
                  required
                  error={fieldErrors.name}
                  disabled={isSubmitting}
                />
                <Input
                  id="lead-company"
                  name="company"
                  label="Компания *"
                  placeholder="ООО «Компания»"
                  autoComplete="organization"
                  maxLength={120}
                  required
                  error={fieldErrors.company}
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  id="lead-email"
                  name="email"
                  type="email"
                  label="Email *"
                  placeholder="ivan@company.ru"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={254}
                  required
                  error={fieldErrors.email}
                  disabled={isSubmitting}
                />
                <Input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  label="Телефон *"
                  placeholder="+7 (999) 123-45-67"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="^[0-9+()\-\s]{10,24}$"
                  maxLength={24}
                  required
                  error={fieldErrors.phone}
                  disabled={isSubmitting}
                />
              </div>

              <Textarea
                id="lead-comment"
                name="comment"
                label="Комментарий"
                placeholder="Коротко опишите задачу и контур (on-prem/облако)."
                rows={4}
                maxLength={1200}
                error={fieldErrors.comment}
                disabled={isSubmitting}
              />

              <Checkbox
                id="lead-privacy"
                name="privacy"
                label="Я согласен на обработку персональных данных *"
                required
                error={fieldErrors.privacy}
                disabled={isSubmitting}
              />

              {formError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3" role="alert">
                  <p className="text-sm text-red-700">{formError}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </Button>

              <p className="text-xs text-primary-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/legal/privacy" className="underline hover:text-accent-600">
                  политикой конфиденциальности
                </a>
                .
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
