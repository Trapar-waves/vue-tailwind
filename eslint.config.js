/* eslint-disable unicorn/prefer-await */
import { rentonVue } from "@renton/eslint-config-vue";
import pluginPerfectionist from "eslint-plugin-perfectionist";

// Workaround: @renton/eslint-config-vue references perfectionist/sort-jsx-props
// without registering the plugin in that config block
export default rentonVue({
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
}, {
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  files: ["pnpm-workspace.yaml"],
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});
