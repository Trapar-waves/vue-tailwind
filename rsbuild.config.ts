import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import process from "node:process";
import TurboConsole from "unplugin-turbo-console/rspack";

function normalizeBasePath(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") {
    return "/";
  }
  const prefixed = raw.startsWith("/") ? raw : `/${raw}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}

const basePath = normalizeBasePath();
const isUseSubpath = basePath !== "/";

const isEnableRsdoctor = Boolean(process.env.RSDOCTOR);
const isEnableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  ...(isUseSubpath && {
    output: { assetPrefix: basePath },
    server: { base: basePath },
  }),
  performance: {
    ...(isEnableRsdoctor && { buildCache: false }),
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
        ...(isEnableTurboConsole ? [TurboConsole()] : []),
        ...(isEnableRsdoctor
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
