import { antfu } from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  markdown: true,
  vue: true,
  yaml: true,
  jsonc: true,
  typescript: true,
  formatters: {
    markdown: "prettier",
    css: "prettier",
  },
});
