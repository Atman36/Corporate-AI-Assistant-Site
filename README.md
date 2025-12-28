# CORPRAG Design System

Дизайн-система для B2B лендинга корпоративного LLM-ассистента.

## Философия дизайна

**Эстетика:** "Refined Corporate Trust" — сдержанная роскошь для Enterprise.

### Ключевые принципы

1. **Доверие через детали** — Тонкие тени, слоистость, качественная типографика
2. **Много воздуха** — Generous whitespace, нет перегруженности
3. **Технологичность без агрессии** — Muted teal вместо кричащих цветов
4. **Проверяемость** — Визуальный акцент на "источники/ссылки" как дифференциатор

---

## Быстрый старт

### Установка

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react
```

### Подключение

1. Скопируйте `globals.css` в `app/globals.css`
2. Скопируйте `tailwind.config.ts` в корень проекта
3. Добавьте компоненты в `components/ui/`

### Утилита cn()

Добавьте в `lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Токены дизайна

### Цвета

| Роль | Переменная | Использование |
|------|------------|---------------|
| **Primary** | `--color-primary-*` | Основной текст, фоны, кнопки |
| **Accent** | `--color-accent-*` | CTA, ссылки, выделения |
| **Neutral** | `--color-neutral-*` | Фоны, границы, muted text |

```css
/* Пример использования */
.my-element {
  background: rgb(var(--color-primary-900));
  color: rgb(var(--color-accent-500));
}
```

### Типографика

| Шрифт | Переменная | Назначение |
|-------|------------|------------|
| **Manrope** | `--font-display` | Заголовки, кнопки, бейджи |
| **Source Sans 3** | `--font-body` | Основной текст, формы |

```tsx
// Tailwind классы
<h1 className="font-display font-bold">Заголовок</h1>
<p className="font-body">Параграф текста</p>
```

### Тени

Слоистые тени вместо плоских:

```css
--shadow-sm   /* Карточки в покое */
--shadow-lg   /* Карточки при hover */
--shadow-xl   /* Elevated компоненты */
--shadow-glow /* Accent элементы */
```

---

## Компоненты

### Button

```tsx
import { Button } from '@/components/ui';

// Варианты
<Button variant="primary">Primary</Button>
<Button variant="accent">Accent (CTA)</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Размеры
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

### Card

```tsx
import { Card, CardTitle, CardDescription } from '@/components/ui';

<Card variant="default">
  <CardTitle>Заголовок</CardTitle>
  <CardDescription>Описание карточки</CardDescription>
</Card>

// Варианты: default, elevated, glass, outline
```

### Badge

```tsx
import { Badge } from '@/components/ui';

<Badge variant="accent">
  <LockIcon className="w-3 h-3" />
  Закрытый контур
</Badge>

// Варианты: primary, accent, success, warning, error, neutral
```

### Input / Textarea

```tsx
import { Input, Textarea } from '@/components/ui';

<Input
  label="Email"
  placeholder="you@company.ru"
  error="Введите корпоративный email"
/>

<Textarea
  label="Комментарий"
  placeholder="Опишите задачу..."
/>
```

### IconWrapper

```tsx
import { IconWrapper } from '@/components/ui';
import { Shield } from 'lucide-react';

<IconWrapper variant="default" size="lg">
  <Shield className="w-6 h-6" />
</IconWrapper>

// Варианты: default (accent), primary, dark
// Размеры: sm, md, lg
```

### Layout: Section & Container

```tsx
import { Section, Container } from '@/components/ui';

<Section background="gradient" size="lg">
  <Container size="narrow">
    {/* Контент */}
  </Container>
</Section>

// Section backgrounds: default, gradient, dark
// Container sizes: narrow (1152px), wide (1440px)
```

---

## Секции лендинга

Готовые секции из `components/sections.tsx`:

```tsx
import {
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  SecuritySection,
  CTASection,
} from '@/components/sections';

// Главная страница
export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <SecuritySection />
      <CTASection />
    </main>
  );
}
```

---

## Анимации

### CSS классы

```tsx
// Fade in при скролле (добавить IntersectionObserver)
<div className="animate-fade-in">...</div>
<div className="animate-slide-up">...</div>
<div className="animate-slide-in-left">...</div>

// Stagger delays для списков
<div className="animate-slide-up delay-1">Item 1</div>
<div className="animate-slide-up delay-2">Item 2</div>
<div className="animate-slide-up delay-3">Item 3</div>

// Hover lift для карточек
<Card className="hover-lift">...</Card>
```

### Transition tokens

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;

--ease-out: cubic-bezier(0.33, 1, 0.68, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Паттерны

### Text Gradient

```tsx
<span className="text-gradient">Акцентный текст</span>
```

### Glass Effect

```tsx
<Card variant="glass">
  Полупрозрачная карточка с blur
</Card>
```

### Background Gradients

```css
.bg-gradient-hero    /* Hero секция */
.bg-gradient-section /* Чередующиеся секции */
.bg-gradient-dark    /* Dark секции */
```

---

## Чеклист при разработке

- [ ] Используете `font-display` для заголовков/кнопок
- [ ] Карточки имеют hover-эффект (shadow + translate)
- [ ] CTA кнопки используют `variant="accent"`
- [ ] Достаточно воздуха между секциями (py-24 / py-32)
- [ ] Источники/цитаты визуально выделены (accent color)
- [ ] Формы имеют label + error state
- [ ] Тёмные секции используют `bg-gradient-dark`

---

## Файловая структура

```
design-system/
├── globals.css           # CSS переменные и base styles
├── tailwind.config.ts    # Tailwind интеграция
├── components/
│   ├── ui.tsx            # Базовые компоненты
│   └── sections.tsx      # Секции лендинга
└── README.md             # Эта документация
```
