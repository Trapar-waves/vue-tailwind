import { rentonVue } from "@renton/eslint-config-vue";

export default rentonVue({
  formatters: {
    css: "prettier",
    markdown: "prettier",
  },
  jsonc: true,
  markdown: true,
  stylistic: {
    quotes: "double",
    semi: true,
  },
  typescript: true,
  vue: true,
  yaml: true,
});
