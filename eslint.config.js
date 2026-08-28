import { rentonVue } from "@renton/eslint-config-vue";
import pluginPerfectionist from "eslint-plugin-perfectionist";

// Workaround: @renton/eslint-config-vue references perfectionist/sort-jsx-props
// without registering the plugin in that config block
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
  name: "trapar/perfectionist-plugin",
  plugins: {
    perfectionist: pluginPerfectionist,
  },
}, {
  files: ["pnpm-workspace.yaml"],
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});
