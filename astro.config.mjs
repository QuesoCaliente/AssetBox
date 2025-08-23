import { defineConfig } from "astro/config";
import icon from "astro-icon";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), preact({ compat: true })],
  output: "static",

  adapter: node({
    mode: "standalone",
  }),
});