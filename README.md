# @trapar-waves/vue-tailwind

![npm version](https://img.shields.io/npm/v/@trapar-waves/vue-tailwind)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/vue-tailwind)
![License](https://img.shields.io/github/license/Trapar-waves/vue-tailwind)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/vue-tailwind)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/vue-tailwind/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](./readme/README-CN.md) | [日本語](./readme/README-JP.md) | [Русский язык](./readme/README-RU.md)

> A modern frontend development template integrating Vue 3 and Tailwind CSS v4, with Rsbuild, TypeScript, VueUse, and Iconify support for rapid UI development.

![vue-tailwind hero](assets/readme/hero.svg)

![Features](assets/readme/headers/features.svg)

- **Modern Framework:** Built on Vue 3, leveraging the Composition API and `<script setup>` for clean, reactive component development.
- **Utility-First Styling:** Employs Tailwind CSS v4 (`tailwindcss`) along with `@tailwindcss/postcss`, enabling flexible and rapid styling while maintaining consistency.
- **Fast Development Workflow:** Uses Rsbuild (`@rsbuild/core` and `@rsbuild/plugin-vue`) for optimized builds and efficient development server performance.
- **Reactive Utilities:** Integrates `@vueuse/core`, a collection of essential Vue composition utilities for state, DOM, and sensor management.
- **Icon Support:** Includes `@iconify/json` and `@iconify/tailwind4` for scalable and customizable iconography.
- **Type Safety:** Utilizes TypeScript (v5.9.x) to enhance code reliability and provide robust type checking during development.
- **Code Quality:** Includes ESLint with `@antfu/eslint-config` for linting and enforcing best practices in the codebase.
- **Git Hooks:** Integrated `husky` and `lint-staged` for pre-commit checks.

![Tech Stack](assets/readme/headers/tech-stack.svg)

- **Framework:** Vue 3 (`vue`)
- **Styling:** Tailwind CSS v4 (`tailwindcss`)
- **Reactive Utilities:** VueUse (`@vueuse/core`)
- **Build Tool:** Rsbuild (`@rsbuild/core`)
- **Language:** TypeScript (v5.9.x)
- **CSS Processing:** PostCSS with `@tailwindcss/postcss`
- **Linting:** ESLint with `@antfu/eslint-config`
- **Iconography:** Iconify (`@iconify/json`, `@iconify/tailwind4`)

See the [package.json](./package.json) for a full list of dependencies.

![Getting Started](assets/readme/headers/getting-started.svg)

## Prerequisites

- Node.js (>= 18.x recommended)
- Package manager (npm, yarn, or pnpm)

### Installation

1. Create a new project using the template:

   ```bash
   pnpm create trapar-waves
   ```

2. Navigate to your project directory and install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

![Project Structure](assets/readme/headers/project-structure.svg)

```
├── public/             # Static assets
├── src/                # Source code
│   ├── App.vue         # Root application component
│   ├── index.css       # Global styles and Tailwind imports
│   ├── index.ts        # Entry point
│   └── env.d.ts        # TypeScript environment declarations
├── rsbuild.config.ts   # Rsbuild configuration
├── tsconfig.json       # TypeScript configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies and scripts
```

![Contributing](assets/readme/headers/contributing.svg)

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

![License](assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/vue-tailwind](https://github.com/Trapar-waves/vue-tailwind)
- **Issues:** [https://github.com/Trapar-waves/vue-tailwind/issues](https://github.com/Trapar-waves/vue-tailwind/issues)
