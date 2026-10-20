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
}, {
  files: ["pnpm-workspace.yaml"],
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});
