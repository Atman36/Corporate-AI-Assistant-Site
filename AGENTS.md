# AGENTS.md

Инструкции для агента (Codex/Claude) при работе с этим репозиторием. Файл находится в корне, чтобы применяться ко всему дереву проекта.

## Проект

- Назначение: CORPRAG Design System и шаблон маркетингового сайта для B2B SaaS (корпоративные LLM-ассистенты с RAG).
- В репозитории только UI/дизайн слой, без backend-кода.
- Визуальное направление: "Refined Corporate Trust" (много воздуха, аккуратные тени, приглушенная палитра, ощущение enterprise-надежности).

## Технологии

- React 18+ + TypeScript
- Next.js (App Router)
- Tailwind CSS 3+ (токены через CSS variables)
- class-variance-authority (CVA) для вариантов компонентов
- lucide-react (иконки), clsx + tailwind-merge (className утилиты)

## Ключевые файлы

- `ui.tsx`: базовые компоненты дизайн-системы (Button, Card, Input, Badge, IconWrapper, Section, Container).
- `sections.tsx`: готовые секции лендинга (Hero, HowItWorks, Features, Security, CTA).
- `app/globals.css`: CSS custom properties (токены) и базовые стили.
- `tailwind.config.ts`: маппинг Tailwind theme на CSS variables.
- `design-system-preview.jsx`: интерактивный превью/шоукейс.

## Архитектурные паттерны

- Варианты компонентов: использовать CVA (type-safe variants) вместо ручной склейки классов.
- Токены: цвета/типографика/spacing/shadows задаются в `app/globals.css` и потребляются через Tailwind-конфиг.
- Композиция: `Section` (паддинги) + `Container` (max-width) + UI-компоненты.
- Compound-components: для Card и похожих сущностей придерживаться существующего паттерна (`Card`, `CardHeader`, ...).

## Контент и формулировки

- Сильные/маркетинговые утверждения требуют маркера `[UNVERIFIED]`, пока не будет источника/кейса (см. `PRD.md`).
- Избегать абсолютов и суперлативов вроде "100% protection"; формулировать безопасно: "при соблюдении требований/политик" и т.п.

## Команды

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## Процесс работы

- Делать минимальные, точечные изменения; не переписывать дизайн/паттерны без запроса.
- По завершению работы делай коммит.

