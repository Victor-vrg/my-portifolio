// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";
import image from '@astrojs/image';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  experimental: {
    svg: true,
  },
  
  adapter: node({
    mode: "standalone",
  }),
});