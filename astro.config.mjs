import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://bencevrga.github.io/twoaway/',
  base: '/twoaway/',
  integrations: [tailwind()],
});
