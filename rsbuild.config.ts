import process from "node:process";
import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import TurboConsole from "unplugin-turbo-console/rspack";

const enableRsdoctor = Boolean(process.env.RSDOCTOR);
const enableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  performance: {
    ...(enableRsdoctor ? { buildCache: false } : {}),
  },
  plugins: [pluginVue()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwind],
      },
    },
    rspack: {
      plugins: [
        ...(enableTurboConsole ? [TurboConsole()] : []),
        ...(enableRsdoctor
          ? [
              new RsdoctorRspackPlugin({
                output: {
                  mode: "brief",
                  options: {
                    type: ["json"],
                  },
                },
              }),
            ]
          : []),
      ],
    },
  },
});
