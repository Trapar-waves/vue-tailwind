# @trapar-waves/vue-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/vue-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/vue-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/vue-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/vue-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/vue-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Современный шаблон фронтенд-разработки, интегрирующий Vue 3 и Tailwind CSS v4, с поддержкой Rsbuild, TypeScript, VueUse и Iconify для быстрой разработки UI.

![vue-tailwind hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **Современный фреймворк:** Построен на Vue 3, используя Composition API и `<script setup>` для чистой, реактивной разработки компонентов.
- **Утилитарный подход к стилям:** Использует Tailwind CSS v4 (`tailwindcss`) вместе с `@tailwindcss/postcss`, обеспечивая гибкую и быструю разработку стилей с сохранением一致性.
- **Быстрый рабочий процесс разработки:** Использует Rsbuild (`@rsbuild/core` и `@rsbuild/plugin-vue`) для оптимизированных сборок и эффективной работы сервера разработки.
- **Реактивные утилиты:** Интегрирует `@vueuse/core`, коллекцию основных утилит Vue Composition для управления состоянием, DOM и сенсорами.
- **Поддержка иконок:** Включает `@iconify/json` и `@iconify/tailwind4` для масштабируемых и настраиваемых иконок.
- **Типобезопасность:** Использует TypeScript (v5.9.x) для повышения надежности кода и обеспечения строгой проверки типов во время разработки.
- **Качество кода:** Включает ESLint с `@antfu/eslint-config` для линтинга и применения лучших практик.
- **Git Hooks:** Интегрированы `husky` и `lint-staged` для проверок перед коммитом.

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **Фреймворк:** Vue 3 (`vue`)
- **Стилизация:** Tailwind CSS v4 (`tailwindcss`)
- **Реактивные утилиты:** VueUse (`@vueuse/core`)
- **Инструмент сборки:** Rsbuild (`@rsbuild/core`)
- **Язык:** TypeScript (v5.9.x)
- **Обработка CSS:** PostCSS и `@tailwindcss/postcss`
- **Линтинг:** ESLint и `@antfu/eslint-config`
- **Иконки:** Iconify (`@iconify/json`, `@iconify/tailwind4`)

Полный список зависимостей смотрите в [package.json](../package.json).

![Getting Started](../assets/readme/headers/getting-started.svg)

### Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

### Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # Статические ресурсы
├── src/                # Исходный код
│   ├── App.vue         # Корневой компонент приложения
│   ├── index.css       # Глобальные стили и импорты Tailwind
│   ├── index.ts        # Точка входа
│   └── env.d.ts        # Объявления среды TypeScript
├── rsbuild.config.ts   # Конфигурация Rsbuild
├── tsconfig.json       # Конфигурация TypeScript
├── eslint.config.js    # Конфигурация ESLint
└── package.json        # Зависимости и скрипты проекта
```

![Contributing](../assets/readme/headers/contributing.svg)

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/vue-tailwind](https://github.com/Trapar-waves/vue-tailwind)
- **Issues:** [https://github.com/Trapar-waves/vue-tailwind/issues](https://github.com/Trapar-waves/vue-tailwind/issues)
