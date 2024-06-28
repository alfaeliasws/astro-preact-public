import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  }), tailwind()],
  output: "server",
  adapter: netlify({dist: new URL('./dist/', import.meta.url)})
});