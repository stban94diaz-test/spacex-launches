// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

import { BASE_PROJECT } from './src/constants/general';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  base: BASE_PROJECT,
  site: 'https://stban94diaz.github.io',
});