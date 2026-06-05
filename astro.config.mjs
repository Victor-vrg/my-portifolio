// @ts-check
import { defineConfig as createAstroConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default createAstroConfig({
  site: 'https://victorgualberto.com.br',
  integrations: [tailwind(), sitemap()],
  adapter: netlify()
    });