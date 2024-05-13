import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "server",
  site: 'https://github.com/MateMaki33/MateMaki33.github.io',
  adapter: node({
    mode: "standalone"
  })
});
