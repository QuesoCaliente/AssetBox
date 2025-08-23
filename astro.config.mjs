import { defineConfig } from "astro/config";
import icon from "astro-icon";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), preact({ compat: true })],
  output: "static",
  site: "https://asset-box-nine.vercel.app/",
  adapter: vercel(),
});
