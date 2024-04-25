import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://MateMaki33.github.io',
  base: 'MateMaki33.github.io',
  
});
