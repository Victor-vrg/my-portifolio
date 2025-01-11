// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import image from '@astrojs/image';
import netlify from "@astrojs/netlify"; // Importar o adaptador do Netlify

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  experimental: {
    svg: true,
  },
  adapter: netlify(), 
});
