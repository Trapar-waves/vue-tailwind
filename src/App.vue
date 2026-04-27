<script setup lang="ts">
const homepage = "https://github.com/Trapar-waves/vue-tailwind";
const LOGOS_SET_URL = "https://icon-sets.iconify.design/logos/";

interface TechItem {
  id: string;
  label: string;
  hint: string;
  iconClass: string;
}

/** 与 README 及 package.json 依赖一致；图标来自 Iconify `logos`（Gil Barbara / CC0），无独立字形的项在 hint 中说明。 */
const techStack: TechItem[] = [
  {
    id: "vue",
    label: "Vue 3",
    hint: "组合式 API、单文件组件（logos 集合无独立 Vue 字形时用通用图标示意）",
    iconClass: "icon-[logos--vue]",
  },
  {
    id: "ts",
    label: "TypeScript",
    hint: "类型安全与编辑器体验",
    iconClass: "icon-[logos--typescript-icon]",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS 4",
    hint: "tailwindcss · @tailwindcss/postcss",
    iconClass: "icon-[logos--tailwindcss-icon]",
  },
  {
    id: "rsbuild",
    label: "Rsbuild",
    hint: "@rsbuild/core · @rsbuild/plugin-vue",
    iconClass: "icon-[material-icon-theme--rstack]",
  },
  {
    id: "vueuse",
    label: "VueUse",
    hint: "@vueuse/core 组合式工具（README 亦写作状态管理向能力）",
    iconClass: "icon-[logos--vueuse]",
  },
  {
    id: "iconify",
    label: "Iconify",
    hint: "@iconify/json · @iconify/tailwind4（含 logos）",
    iconClass: "icon-[simple-icons--iconify]",
  },
  {
    id: "eslint",
    label: "ESLint",
    hint: "@antfu/eslint-config",
    iconClass: "icon-[logos--eslint]",
  },
  {
    id: "postcss",
    label: "PostCSS",
    hint: "与 @tailwindcss/postcss 协同",
    iconClass: "icon-[logos--postcss]",
  },
  {
    id: "pnpm",
    label: "pnpm",
    hint: "包管理与 CI 缓存",
    iconClass: "icon-[logos--pnpm]",
  },
  {
    id: "node",
    label: "Node.js",
    hint: "本地开发 ≥18 推荐",
    iconClass: "icon-[logos--nodejs-icon]",
  },
  {
    id: "github",
    label: "GitHub Actions",
    hint: "Release 与 Pages 工作流",
    iconClass: "icon-[logos--github-icon]",
  },
];

const readmeFeatures: string[] = [
  "Vue 3：组合式 API 与最新模板能力。",
  "Tailwind CSS v4：工具类优先、与 @tailwindcss/postcss 集成。",
  "TypeScript：提升可维护性与开发体验。",
  "Rsbuild：现代 Web 开发与高效构建。",
  "@vueuse/core：常用组合式工具集合。",
  "Iconify：通过 @iconify/tailwind4 在 Tailwind 中使用多集合图标。",
  "ESLint 与 @antfu/eslint-config：统一风格与最佳实践。",
  "PostCSS：承载 Tailwind 处理链路。",
  "GitHub Pages：BASE_PATH 子路径构建、404.html 回退与 Actions 部署。",
];

const readmeTechNote = "README Features 未逐条列出 Husky、lint-staged 与 Renovate，但仓库 devDependencies 已包含提交钩子相关依赖；可按团队规范启用。";
</script>

<template>
  <div class="trapar-vue-root">
    <a class="trapar-skip" href="#main">跳到主要内容</a>
    <header class="trapar-header">
      <p class="trapar-kicker">
        Trapar-waves / vue-tailwind
      </p>
      <h1 class="trapar-title">
        Vue 3 + Rsbuild + Tailwind 4
      </h1>
      <p class="trapar-lead">
        柔和留白与几何色块，突出单文件组件与组合式 API 的简洁心智模型；本页结合 README 与
        <a
          :href="LOGOS_SET_URL"
          class="trapar-inline-link"
          target="_blank"
          rel="noreferrer"
        >Iconify logos</a>
        集合展示技术栈，与 React 模板形成差异化视觉。
      </p>
      <div class="trapar-actions">
        <a
          :href="homepage"
          class="trapar-btn-primary"
          target="_blank"
          rel="noreferrer"
          aria-label="在 GitHub 打开 vue-tailwind 模板仓库"
        >
          查看模板仓库
        </a>
        <span class="icon-[logos--tailwindcss-icon] trapar-icon-deco" aria-hidden="true" />
        <span class="icon-[material-icon-theme--rstack] trapar-icon-deco trapar-icon-deco--amber" aria-hidden="true" />
        <span class="icon-[logos--vue] trapar-icon-deco trapar-icon-deco--muted" aria-hidden="true" />
      </div>
    </header>
    <main id="main" class="trapar-main">
      <section class="trapar-section" aria-labelledby="tech-heading">
        <h2 id="tech-heading" class="trapar-h2">
          技术栈一览
        </h2>
        <p class="trapar-prose">
          Rsbuild 与 Rspack/webpack 生态相关示意使用
          <code class="trapar-code">logos--webpack</code>
          ；完整图标集见
          <a :href="LOGOS_SET_URL" class="trapar-inline-link" target="_blank" rel="noreferrer">logos 文档</a>。
        </p>
        <ul class="trapar-tech-grid">
          <li
            v-for="item in techStack"
            :key="item.id"
            class="trapar-tech-card"
          >
            <span class="trapar-tech-icon" :class="item.iconClass" aria-hidden="true" />
            <div>
              <h3 class="trapar-tech-label">
                {{ item.label }}
              </h3>
              <p class="trapar-tech-hint">
                {{ item.hint }}
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section class="trapar-section" aria-labelledby="readme-heading">
        <h2 id="readme-heading" class="trapar-h2">
          README 特性摘要
        </h2>
        <ul class="trapar-feature-list">
          <li v-for="(line, i) in readmeFeatures" :key="i">
            {{ line }}
          </li>
        </ul>
        <p class="trapar-tech-note">
          {{ readmeTechNote }}
        </p>
      </section>

      <section class="trapar-section" aria-labelledby="a11y-heading">
        <h2 id="a11y-heading" class="trapar-h2">
          图标与可访问性
        </h2>
        <p class="trapar-prose">
          装饰性技术图标使用 <code class="trapar-code">aria-hidden="true"</code>，避免读屏重复朗读；主按钮保留足够触控高度与可见焦点环。支持 <code class="trapar-code">prefers-reduced-motion</code> 时减弱跳过链接过渡动画。
        </p>
      </section>

      <section class="trapar-section" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" class="trapar-h2">
          模板亮点
        </h2>
        <ul class="trapar-grid">
          <li class="trapar-card">
            <h3>组合式 API</h3>
            <p>逻辑与视图同文件维护，适合渐进增强与小型应用。</p>
          </li>
          <li class="trapar-card">
            <h3>Tailwind 4</h3>
            <p>与 @tailwindcss/postcss 集成，快速搭建响应式布局。</p>
          </li>
          <li class="trapar-card">
            <h3>Iconify</h3>
            <p>原子类图标，避免 emoji 作为结构图标。</p>
          </li>
          <li class="trapar-card">
            <h3>GitHub Pages</h3>
            <p>通过 BASE_PATH 子路径构建，标签触发 Actions 部署。</p>
          </li>
        </ul>
      </section>

      <footer class="trapar-footer">
        <p>
          技术品牌图标来自
          <a :href="LOGOS_SET_URL" class="trapar-inline-link" target="_blank" rel="noreferrer">Iconify SVG Logos</a>
          集合（CC0）；感谢 Gil Barbara 与 Iconify 社区维护。
        </p>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.trapar-vue-root {
  min-height: 100dvh;
  background: linear-gradient(165deg, #fdf8ff 0%, #f3f6ff 45%, #eef8f6 100%);
  color: #1e293b;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.trapar-skip {
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  z-index: 50;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: #5b21b6;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transform: translateY(-200%);
  transition: transform 180ms ease-out;
}

.trapar-skip:focus {
  transform: translateY(0);
  outline: 3px solid #c084fc;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .trapar-skip {
    transition: none;
  }
}

.trapar-header {
  max-width: 52rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 2rem;
}

.trapar-kicker {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7c3aed;
  font-weight: 600;
}

.trapar-title {
  margin: 0.75rem 0 0;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #0f172a;
}

.trapar-lead {
  margin-top: 1rem;
  max-width: 40rem;
  line-height: 1.65;
  color: #475569;
  font-size: 1.05rem;
}

.trapar-inline-link {
  font-weight: 600;
  color: #6d28d9;
  text-decoration: underline;
  text-decoration-color: #c4b5fd;
  text-underline-offset: 3px;
}

.trapar-inline-link:hover {
  color: #5b21b6;
}

.trapar-actions {
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.trapar-btn-primary {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-radius: 9999px;
  background: #6d28d9;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(109, 40, 217, 0.25);
}

.trapar-btn-primary:hover {
  background: #5b21b6;
}

.trapar-btn-primary:focus-visible {
  outline: 3px solid #c4b5fd;
  outline-offset: 2px;
}

.trapar-icon-deco {
  font-size: 2.25rem;
  color: #0891b2;
}

.trapar-icon-deco--amber {
  color: #b45309;
}

.trapar-icon-deco--muted {
  color: #64748b;
}

.trapar-main {
  max-width: 52rem;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.trapar-section {
  margin-top: 2.5rem;
}

.trapar-section:first-of-type {
  margin-top: 0;
}

.trapar-h2 {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
}

.trapar-prose {
  margin: 0.75rem 0 0;
  max-width: 40rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #64748b;
}

.trapar-code {
  padding: 0.1rem 0.35rem;
  border-radius: 0.25rem;
  background: rgba(226, 232, 240, 0.9);
  font-size: 0.85em;
  color: #4338ca;
}

.trapar-tech-grid {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.trapar-tech-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  border-radius: 1rem;
  padding: 1.1rem 1.2rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.05);
}

.trapar-tech-icon {
  flex-shrink: 0;
  font-size: 1.75rem;
  width: 1.75rem;
  height: 1.75rem;
  color: #5b21b6;
}

.trapar-tech-label {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #312e81;
}

.trapar-tech-hint {
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: #64748b;
}

.trapar-feature-list {
  margin: 1rem 0 0;
  padding-left: 1.25rem;
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.65;
}

.trapar-feature-list li {
  margin-bottom: 0.35rem;
}

.trapar-tech-note {
  margin: 1rem 0 0;
  max-width: 40rem;
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.55;
  color: #64748b;
}

.trapar-grid {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.trapar-card {
  border-radius: 1rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
}

.trapar-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #312e81;
}

.trapar-card p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #64748b;
}

.trapar-footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(148, 163, 184, 0.35);
  font-size: 0.8rem;
  line-height: 1.55;
  color: #94a3b8;
}

.trapar-footer p {
  margin: 0;
  max-width: 42rem;
}
</style>
