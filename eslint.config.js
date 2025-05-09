import { antfu } from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  vue: true,
  jsonc: true,
  typescript: true,
  formatters: {
    css: "prettier",
  },
});
