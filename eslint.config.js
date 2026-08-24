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
}).then(configs =>
  configs.map(c =>
    c.name === "renton/vue/perfectionist" && !c.plugins
      ? { ...c, plugins: { perfectionist: pluginPerfectionist } }
      : c,
  ),
);
