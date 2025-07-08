// @ts-check
import { defineConfig as createAstroConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default createAstroConfig({
  integrations: [tailwind()],
  adapter: netlify()
    });
