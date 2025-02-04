// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import embeds from "astro-embed/integration";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://tabletoprpg.space",
  integrations: [embeds(), mdx(), sitemap(), playformCompress(), compressor()],
});
