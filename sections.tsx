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
  Select,
  Checkbox,
} from './ui';
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
  TrendingUp,
  Zap,
  Bot,
  Building2,
  Scale,
  Briefcase,
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
} from 'lucide-react';

/* ============================================
   HEADER
   ============================================ */

const navLinks = [
  { href: '#how-it-works', label: 'Как работает' },
  { href: '#features', label: 'Возможности' },
  { href: '#use-cases', label: 'Кейсы' },
  { href: '#security', label: 'Безопасность' },
  { href: '#faq', label: 'FAQ' },
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

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-sticky
        transition-all duration-normal
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-primary-900">
              CORPRAG
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Скачать PDF
            </Button>
            <Button variant="accent" size="sm">
              Запросить демо
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-display text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" className="w-full">
                  Скачать PDF
                </Button>
                <Button variant="accent" size="sm" className="w-full">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

/* ============================================
   HERO SECTION
   ============================================ */

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
        <div className="absolute top-60 right-60 w-64 h-64 bg-primary-200 rounded-full blur-2xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <Badge variant="accent" className="mb-6">
              <Lock className="w-3 h-3" />
              Закрытый контур
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-primary-950 mb-6">
              Корпоративный{' '}
              <span className="text-gradient">AI-ассистент</span>{' '}
              в закрытом контуре
            </h1>
            
            <p className="text-lg lg:text-xl text-primary-700 leading-relaxed mb-8">
              Отвечает по документам{' '}
              <strong className="text-primary-900">со ссылками на источники</strong>.
              Разворачивается on-prem или в облаке РФ. Под контроль доступа
              и требования безопасности.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg">
                Запросить демо
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Скачать презентацию
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <p className="text-sm text-primary-500 mb-3">Доверяют нам</p>
              <div className="flex items-center gap-8 opacity-50">
                {/* Placeholder logos - заменить на реальные */}
                <div className="h-8 w-24 bg-primary-300 rounded" />
                <div className="h-8 w-20 bg-primary-300 rounded" />
                <div className="h-8 w-28 bg-primary-300 rounded" />
              </div>
            </div>
          </div>
          
          {/* Right: Product Mock */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 bg-primary-50 border-b border-neutral-200">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-sm font-medium text-primary-600">
                  Корпоративный ассистент
                </span>
              </div>
              
              {/* Chat content */}
              <div className="p-5 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary-900 text-white px-4 py-3 rounded-2xl rounded-br-sm max-w-[80%]">
                    Какие условия возврата товара по договору с ООО «Поставщик»?
                  </div>
                </div>
                
                {/* Assistant message */}
                <div className="space-y-3">
                  <div className="bg-neutral-100 px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%]">
                    <p className="text-primary-800 mb-3">
                      Согласно договору №123-П, условия возврата товара следующие:
                    </p>
                    <ul className="text-sm text-primary-700 space-y-1">
                      <li>• Срок возврата: 14 календарных дней</li>
                      <li>• Товар должен сохранить товарный вид</li>
                      <li>• Требуется акт приёмки с дефектами</li>
                    </ul>
                  </div>
                  
                  {/* Sources panel - KEY DIFFERENTIATOR */}
                  <div className="bg-accent-50 border border-accent-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Link2 className="w-4 h-4 text-accent-600" />
                      <span className="text-xs font-semibold text-accent-700 uppercase tracking-wide">
                        Источники
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <a href="#" className="flex items-center gap-2 text-sm text-accent-700 hover:text-accent-800">
                        <FileText className="w-4 h-4" />
                        <span className="underline">Договор_123-П.pdf, стр. 5</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-accent-700 hover:text-accent-800">
                        <FileText className="w-4 h-4" />
                        <span className="underline">Регламент_возврата.docx, п. 3.2</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -right-4 top-1/4 transform translate-x-1/2">
              <div className="bg-white shadow-lg rounded-lg px-3 py-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-primary-700">On-prem</span>
              </div>
            </div>
            <div className="absolute -left-4 bottom-1/4 transform -translate-x-1/2">
              <div className="bg-white shadow-lg rounded-lg px-3 py-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent-600" />
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
    <Section size="default" className="py-12 lg:py-16 bg-white border-y border-neutral-100">
      <Container>
        <div className="text-center">
          <p className="text-sm font-display font-medium text-primary-500 mb-8 uppercase tracking-wide">
            Нам доверяют
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {/* Placeholder logos - replace with real ones */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-28 bg-neutral-200 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                title={`Клиент ${i} [НЕПОДТВЕРЖДЕНО]`}
              />
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-400">
            Логотипы некоторых клиентов скрыты по условиям NDA
          </p>
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
    <Section>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Проблема → Решение
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            От хаоса к порядку в работе со знаниями
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div>
            <h3 className="font-display font-semibold text-lg text-primary-500 mb-6 uppercase tracking-wide">
              Без ассистента
            </h3>
            <div className="space-y-4">
              {problems.map((item) => (
                <Card key={item.title} variant="outline" className="border-red-200/50 bg-red-50/30">
                  <div className="flex gap-4">
                    <IconWrapper variant="default" className="bg-red-100 text-red-600 shrink-0">
                      <item.icon className="w-5 h-5" />
                    </IconWrapper>
                    <div>
                      <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                      <CardDescription className="text-sm">{item.description}</CardDescription>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-semibold text-lg text-accent-600 mb-6 uppercase tracking-wide">
              С AI-ассистентом
            </h3>
            <div className="space-y-4">
              {solutions.map((item) => (
                <Card key={item.title} variant="outline" className="border-accent-200/50 bg-accent-50/30">
                  <div className="flex gap-4">
                    <IconWrapper variant="default" className="shrink-0">
                      <item.icon className="w-5 h-5" />
                    </IconWrapper>
                    <div>
                      <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                      <CardDescription className="text-sm">{item.description}</CardDescription>
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
    <Section background="gradient">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Как это работает
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            От документов к ответам за 5 шагов
          </h2>
          <p className="text-lg text-primary-600">
            Прозрачный процесс: каждый ответ можно проверить по источнику
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-300 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
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
                        <step.icon className="w-6 h-6" />
                      </IconWrapper>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    
                    <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </div>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
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
    description: 'Каждый ответ с цитатами и ссылками на конкретные документы',
  },
  {
    icon: Users,
    title: 'RBAC / права доступа',
    description: 'Ответы только по документам, доступным текущему пользователю',
  },
  {
    icon: Settings,
    title: 'Админка управления',
    description: 'Настройка источников, пользователей и политик без кода',
  },
  {
    icon: FileText,
    title: 'Шаблоны и генерация',
    description: 'Создание писем, отчётов, договоров по вашим стандартам',
  },
  {
    icon: Clock,
    title: 'История и экспорт',
    description: 'Полная история диалогов с возможностью экспорта',
  },
  {
    icon: Database,
    title: 'Интеграции под вас',
    description: 'Подключение к любым внутренним системам компании',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">
            Возможности
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Всё для корпоративного AI-ассистента
          </h2>
          <p className="text-lg text-primary-600">
            Основные функции, которые делают ассистента полезным и безопасным
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="default"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IconWrapper variant="default" className="mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5" />
              </IconWrapper>
              <CardTitle className="mb-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
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
    description: 'Внутренний ServiceDesk на стероидах',
    examples: [
      'Поиск по базе знаний технической поддержки',
      'Ответы на типовые вопросы пользователей',
      'Инструкции по настройке ПО и оборудования',
      'Документация по внутренним системам',
    ],
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
  },
];

export const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('it');
  const activeCase = useCases.find((uc) => uc.id === activeTab)!;

  return (
    <Section background="gradient" id="use-cases">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="accent" className="mb-4">
            Кейсы применения
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Для каждого отдела — свой сценарий
          </h2>
          <p className="text-lg text-primary-600">
            Ассистент адаптируется под задачи разных подразделений
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full
                font-display text-sm font-medium transition-all
                ${activeTab === uc.id
                  ? 'bg-accent-600 text-white shadow-accent'
                  : 'bg-white text-primary-700 hover:bg-primary-50 shadow-sm'
                }
              `}
            >
              <uc.icon className="w-4 h-4" />
              {uc.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <Card variant="elevated" className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <IconWrapper size="lg" className="mb-4">
                <activeCase.icon className="w-7 h-7" />
              </IconWrapper>
              <h3 className="text-2xl font-bold text-primary-950 mb-2">
                {activeCase.title}
              </h3>
              <p className="text-lg text-primary-600 mb-6">
                {activeCase.description}
              </p>
              <Button variant="accent">
                Посмотреть кейс
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="lg:w-1/2">
              <h4 className="font-display font-semibold text-sm text-primary-500 uppercase tracking-wide mb-4">
                Примеры использования
              </h4>
              <ul className="space-y-3">
                {activeCase.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-primary-700">{example}</span>
                  </li>
                ))}
              </ul>
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
    description: 'LLM-агенты, которые не просто отвечают, а выполняют действия',
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
    <Section>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="primary" className="mb-4">
            Дополнительные услуги
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Расширьте возможности ассистента
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {addons.map((addon) => (
            <Card key={addon.title} variant="default" className="h-full">
              <IconWrapper size="lg" className="mb-4">
                <addon.icon className="w-6 h-6" />
              </IconWrapper>
              <CardTitle className="text-xl mb-2">{addon.title}</CardTitle>
              <CardDescription className="mb-6">{addon.description}</CardDescription>
              <ul className="space-y-2">
                {addon.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-primary-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-500" />
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
    description: 'Проверка концепции на ограниченном объёме данных',
    features: [
      '1-2 источника данных',
      'До 50 пользователей',
      'Базовая аналитика',
      'Техническая поддержка',
    ],
    cta: 'Начать пилот',
    highlighted: false,
  },
  {
    name: 'Business',
    description: 'Полноценное решение для среднего бизнеса',
    features: [
      'До 10 источников данных',
      'До 500 пользователей',
      'Расширенная аналитика',
      'Приоритетная поддержка',
      'RBAC и SSO',
    ],
    cta: 'Выбрать Business',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Кастомное решение под требования крупного бизнеса',
    features: [
      'Неограниченные источники',
      'Неограниченные пользователи',
      'Кастомные интеграции',
      'Выделенная поддержка',
      'SLA и LLMOps',
      'On-prem развёртывание',
    ],
    cta: 'Связаться с нами',
    highlighted: false,
  },
];

export const PackagesSection: React.FC = () => {
  return (
    <Section background="gradient">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="accent" className="mb-4">
            Пакеты
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Выберите подходящий вариант
          </h2>
          <p className="text-lg text-primary-600">
            От пилота до enterprise-решения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                <h3 className="text-2xl font-bold text-primary-950 mb-2">{pkg.name}</h3>
                <p className="text-primary-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-primary-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={pkg.highlighted ? 'accent' : 'outline'}
                className="w-full"
              >
                {pkg.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-primary-500 mt-8">
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
    <Section>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">
            Процесс внедрения
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Путь от идеи до работающего ассистента
          </h2>
          <p className="text-lg text-primary-600">
            Поэтапное внедрение с контролем на каждом шаге
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-300 to-primary-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg border-2 border-accent-200 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-accent-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-900 text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < timelineSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
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
    title: 'Развёртывание в контуре',
    description: 'On-prem на серверах заказчика или в частном облаке РФ. Данные не покидают периметр.',
    icon: Shield,
  },
  {
    title: 'Контроль доступа (RBAC)',
    description: 'Интеграция с AD/LDAP. Ответы только по документам, доступным роли пользователя.',
    icon: Lock,
  },
  {
    title: 'Аудит и логирование',
    description: 'Журнал всех запросов и ответов. Кто, когда, что спросил — полная прозрачность.',
    icon: FileText,
  },
  {
    title: 'LLMOps и мониторинг',
    description: 'Контроль качества ответов, метрики, оповещения. Red-teaming и обновления.',
    icon: Settings,
  },
];

export const SecuritySection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
  return (
    <Section background="dark" className="text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <Badge variant="accent" className="mb-6 bg-accent-900/50 text-accent-300">
              <Shield className="w-3 h-3" />
              Безопасность
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Данные под вашим контролем
            </h2>
            
            <p className="text-lg text-primary-300 mb-8">
              Архитектура, которая соответствует требованиям Enterprise:
              изоляция данных, контроль доступа, полный аудит.
            </p>
            
            <Button variant="accent" size="lg">
              Подробнее о безопасности
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Right: Accordion */}
          <div className="space-y-4">
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
                  className="w-full px-5 py-4 flex items-center gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <IconWrapper
                    variant="dark"
                    size="sm"
                    className={openIndex === index ? 'bg-accent-600' : ''}
                  >
                    <item.icon className="w-4 h-4" />
                  </IconWrapper>
                  <span className="flex-1 font-display font-semibold text-white">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-400 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-5 pb-4 pl-[4.5rem]">
                    <p className="text-primary-300 leading-relaxed">
                      {item.description}
                    </p>
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
   CTA SECTION
   ============================================ */

export const CTASection: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-10 lg:p-16 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Покажем демо на ваших документах
            </h2>
            <p className="text-lg text-primary-300 mb-8">
              Загрузите 2-3 документа — увидите, как ассистент отвечает с цитатами.
              30 минут, без обязательств.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Запросить демо
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Посмотреть кейсы
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-primary-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                <span>Бесплатная консультация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
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
    <Section id="faq">
      <Container size="narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="primary" className="mb-4">
            Вопросы и ответы
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
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
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-semibold text-primary-900 pr-4">
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
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-primary-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
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
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'Возможности', href: '#features' },
    { label: 'Кейсы', href: '#use-cases' },
    { label: 'Пакеты', href: '#packages' },
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
    <footer className="bg-primary-950 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
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
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Telegram"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
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
                      className="text-primary-300 hover:text-white transition-colors"
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
                      className="text-primary-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wide text-primary-400 mb-4">
                Контакты
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@corprag.ru"
                    className="flex items-center gap-2 text-primary-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hello@corprag.ru
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+74951234567"
                    className="flex items-center gap-2 text-primary-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="flex items-start gap-2 text-primary-300">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-500">
            © {new Date().getFullYear()} CORPRAG. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-500 hover:text-primary-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

/* ============================================
   REQUEST DEMO FORM
   ============================================ */

const roleOptions = [
  { value: 'cto', label: 'CTO / Технический директор' },
  { value: 'cio', label: 'CIO / ИТ-директор' },
  { value: 'ciso', label: 'CISO / Директор по ИБ' },
  { value: 'product', label: 'Продакт-менеджер' },
  { value: 'developer', label: 'Разработчик / Архитектор' },
  { value: 'business', label: 'Бизнес-заказчик' },
  { value: 'other', label: 'Другое' },
];

const deploymentOptions = [
  { value: 'onprem', label: 'On-prem (свои серверы)' },
  { value: 'cloud_ru', label: 'Облако РФ' },
  { value: 'hybrid', label: 'Гибридный вариант' },
  { value: 'unknown', label: 'Пока не знаю' },
];

const userCountOptions = [
  { value: '1-50', label: 'До 50' },
  { value: '50-200', label: '50–200' },
  { value: '200-500', label: '200–500' },
  { value: '500-1000', label: '500–1000' },
  { value: '1000+', label: 'Более 1000' },
];

const dataSourceOptions = [
  { id: 'confluence', label: 'Confluence' },
  { id: 'sharepoint', label: 'SharePoint' },
  { id: 'filesystem', label: 'Файловое хранилище' },
  { id: '1c', label: '1С' },
  { id: 'crm', label: 'CRM' },
  { id: 'servicedesk', label: 'ServiceDesk' },
  { id: 'other', label: 'Другое' },
];

export const RequestDemoForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section>
        <Container size="narrow">
          <Card variant="elevated" className="max-w-2xl mx-auto text-center py-12">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-accent-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary-950 mb-4">
              Заявка отправлена!
            </h2>
            <p className="text-primary-600 mb-8">
              Мы свяжемся с вами в течение 1-2 рабочих дней для обсуждения демо.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
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
              Запросить демо
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
              Покажем ассистента на ваших документах
            </h2>
            <p className="text-lg text-primary-600">
              Заполните форму — мы свяжемся в течение 1-2 рабочих дней
            </p>
          </div>

          <Card variant="elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name + Company */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  label="Имя *"
                  placeholder="Иван Петров"
                  required
                />
                <Input
                  name="company"
                  label="Компания *"
                  placeholder="ООО «Компания»"
                  required
                />
              </div>

              {/* Row 2: Role + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  name="role"
                  label="Роль *"
                  options={roleOptions}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label="Email *"
                  placeholder="ivan@company.ru"
                  required
                />
              </div>

              {/* Row 3: Telegram + Deployment */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="telegram"
                  label="Telegram"
                  placeholder="@username"
                />
                <Select
                  name="deployment"
                  label="Контур развёртывания *"
                  options={deploymentOptions}
                  required
                />
              </div>

              {/* Row 4: User count */}
              <Select
                name="users"
                label="Количество пользователей"
                options={userCountOptions}
              />

              {/* Data sources */}
              <div>
                <p className="block font-display text-sm font-semibold text-primary-800 mb-3">
                  Источники данных
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {dataSourceOptions.map((source) => (
                    <Checkbox
                      key={source.id}
                      name={`source_${source.id}`}
                      label={source.label}
                    />
                  ))}
                </div>
              </div>

              {/* Comment */}
              <Textarea
                name="comment"
                label="Комментарий"
                placeholder="Расскажите о вашей задаче..."
                rows={4}
              />

              {/* Privacy consent */}
              <Checkbox
                name="privacy"
                label="Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности *"
                required
              />

              {/* Submit */}
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Отправляем...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-primary-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/legal/privacy" className="underline hover:text-accent-600">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
